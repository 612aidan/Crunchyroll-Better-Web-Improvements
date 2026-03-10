(function initHomepageLayoutManager() {
    console.log('[CRBW][HomepageLayout] Bootstrap', {
        legacyInitialized: Boolean(globalThis.__CRBW_HOMEPAGE_LAYOUT_MANAGER_INITIALIZED__),
        standaloneInitialized: Boolean(globalThis.__CRBW_DYNAMIC_FEED_LAYOUT_MANAGER_INITIALIZED__)
    });
    console.warn('[CRBW][HomepageLayout][CW] Homepage Layout Manager Script Evaluated');

    if (globalThis.__CRBW_DYNAMIC_FEED_LAYOUT_MANAGER_INITIALIZED__) {
        return;
    }

    globalThis.__CRBW_DYNAMIC_FEED_LAYOUT_MANAGER_INITIALIZED__ = true;
    console.log('[CRBW][HomepageLayout] Script Loaded');

    const HOMEPAGE_SECTIONS_STORAGE_KEY = 'homepageSections';
    const HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY = 'homepageDiscoveredSections';
    const HOMEPAGE_UNMATCHED_BUCKET_ID = 'unmatched-sections-bucket';
    const HOMEPAGE_STAGING_CONTAINER_ID = 'crbw-homepage-staging';
    const homepageSectionsShared = globalThis.CRBWHomepageSections || {};
    const REMOVE_CRUNCHYROLL_ADS_SETTING_KEY = homepageSectionsShared.REMOVE_CRUNCHYROLL_ADS_SETTING_KEY || 'removeCrunchyrollAds';
    const HIDE_HERO_CAROUSEL_SETTING_KEY = 'hideHeroCarousel';
    const HOMEPAGE_SECTION_IDS = {
        NEXT_SEASON: 'next-season',
        TOP_SERIES_POPULAR: 'top-series-popular',
        TOP_SERIES_REVIEWED: 'top-series-reviewed',
        TOP_MOVIES_POPULAR: 'top-movies-popular',
        TOP_MOVIES_REVIEWED: 'top-movies-reviewed'
    };
    const CUSTOM_HOMEPAGE_SECTION_DEFINITIONS = [
        { id: HOMEPAGE_SECTION_IDS.NEXT_SEASON, label: 'Next Season', kind: 'custom', defaultOrder: 0 },
        { id: HOMEPAGE_SECTION_IDS.TOP_SERIES_POPULAR, label: 'Top Series Popular', kind: 'custom', defaultOrder: 1 },
        { id: HOMEPAGE_SECTION_IDS.TOP_SERIES_REVIEWED, label: 'Top Series Reviewed', kind: 'custom', defaultOrder: 2 },
        { id: HOMEPAGE_SECTION_IDS.TOP_MOVIES_POPULAR, label: 'Top Movies Popular', kind: 'custom', defaultOrder: 3 },
        { id: HOMEPAGE_SECTION_IDS.TOP_MOVIES_REVIEWED, label: 'Top Movies Reviewed', kind: 'custom', defaultOrder: 4 }
    ];
    const UNMATCHED_BUCKET_DEFINITION = {
        id: HOMEPAGE_UNMATCHED_BUCKET_ID,
        label: 'Any New Sections',
        kind: 'bucket',
        defaultOrder: 9999
    };
    const DYNAMIC_FEED_WRAPPER_SELECTOR = '.dynamic-feed-wrapper';
    const HERO_CAROUSEL_SELECTOR = [
        '[role="region"][aria-label="Hero Carousel"]',
        '.hero-carousel--1-yhX',
        '[class^="hero-carousel--"]',
        '[class*=" hero-carousel--"]'
    ].join(', ');
    const HERO_CAROUSEL_STYLE_ID = 'crbw-hide-hero-carousel-style';
    const HERO_CAROUSEL_HIDE_ATTR = 'data-crbw-hide-hero-carousel';
    const CONTINUE_WATCHING_STYLE_ID = 'crbw-continue-watching-carousel-style';
    const CONTINUE_WATCHING_SECTION_LABEL = 'Continue Watching';
    const CONTINUE_WATCHING_LABEL = 'continue watching';
    const CONTINUE_WATCHING_ITEM_SELECTOR = '.collection-item';
    const CONTINUE_WATCHING_TRACK_SELECTOR = [
        '.erc-history-collection[data-t="history"]',
        '.erc-history-collection',
        '[data-t="history"]'
    ].join(', ');
    const SECTION_HEADING_SELECTOR = 'h2, .browse-collection-title, .feed-header__title--DMRD6';
    const BUILTIN_SECTION_WRAPPER_SELECTOR = 'div[data-id]';
    const BUILTIN_SECTION_CONTENT_SELECTOR = [
        '[data-t^="personalized-collection-"]',
        '[data-t*="collection"]',
        CONTINUE_WATCHING_TRACK_SELECTOR
    ].join(', ');

    let lastDiscoveredSignature = '';
    let scheduledRefresh = null;
    let refreshIntervalId = null;

    function logLayoutDebug(label, payload) {
        console.log(`[CRBW][HomepageLayout] ${label}`, payload);
    }

    function slugify(value) {
        return String(value || '')
            .normalize('NFKD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .replace(/&/g, ' and ')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
            .replace(/-{2,}/g, '-');
    }

    function findCustomDefinition(sectionId) {
        return CUSTOM_HOMEPAGE_SECTION_DEFINITIONS.find((section) => section.id === sectionId) || null;
    }

    function shouldHideHomepageSection(section, removeAdsEnabled) {
        if (typeof homepageSectionsShared.shouldHideHomepageSection === 'function') {
            return homepageSectionsShared.shouldHideHomepageSection(section, removeAdsEnabled);
        }

        return false;
    }

    function normalizeDiscoveredSections(inputSections) {
        const customIds = new Set(CUSTOM_HOMEPAGE_SECTION_DEFINITIONS.map((section) => section.id));
        const discoveredById = new Map();

        if (!Array.isArray(inputSections)) {
            return [];
        }

        inputSections.forEach((section, index) => {
            if (!section || typeof section.id !== 'string') {
                return;
            }

            if (section.id === HOMEPAGE_UNMATCHED_BUCKET_ID || customIds.has(section.id)) {
                return;
            }

            const label = String(section.label || '').trim() || 'Untitled Section';
            const orderValue = Number(section.defaultOrder);

            discoveredById.set(section.id, {
                id: section.id,
                label,
                kind: 'builtin',
                defaultOrder: Number.isFinite(orderValue)
                    ? orderValue
                    : CUSTOM_HOMEPAGE_SECTION_DEFINITIONS.length + index
            });
        });

        return Array.from(discoveredById.values()).sort((left, right) => left.defaultOrder - right.defaultOrder);
    }

    function getHomepageSectionCatalog(discoveredSections) {
        return [
            ...CUSTOM_HOMEPAGE_SECTION_DEFINITIONS,
            ...normalizeDiscoveredSections(discoveredSections),
            UNMATCHED_BUCKET_DEFINITION
        ];
    }

    function mergeHomepageSections(inputSections, discoveredSections) {
        const catalog = getHomepageSectionCatalog(discoveredSections);
        const configById = new Map();

        if (Array.isArray(inputSections)) {
            inputSections.forEach((section) => {
                if (!section || typeof section.id !== 'string') {
                    return;
                }

                configById.set(section.id, {
                    enabled: section.enabled !== false,
                    order: Number.isFinite(Number(section.order)) ? Number(section.order) : Number.MAX_SAFE_INTEGER
                });
            });
        }

        return catalog.map((section) => {
            const existing = configById.get(section.id);

            return {
                id: section.id,
                label: section.label,
                kind: section.kind,
                enabled: existing ? existing.enabled !== false : true,
                order: existing ? existing.order : section.defaultOrder
            };
        }).sort((left, right) => left.order - right.order);
    }

    function normalizeHomepageSections(inputSections, discoveredSections) {
        return mergeHomepageSections(inputSections, discoveredSections).map((section) => ({
            id: section.id,
            enabled: section.enabled !== false,
            order: section.order
        }));
    }

    function buildHomepageSectionsMap(inputSections, discoveredSections) {
        return mergeHomepageSections(inputSections, discoveredSections).reduce((sectionsMap, section) => {
            sectionsMap[section.id] = section;
            return sectionsMap;
        }, {});
    }

    function createInitialLayoutFromPage(currentSectionIds, existingSections, discoveredSections) {
        const existingById = new Map(mergeHomepageSections(existingSections, discoveredSections).map((section) => [section.id, section]));
        const orderedIds = [];

        currentSectionIds.forEach((id) => {
            if (!orderedIds.includes(id) && id !== HOMEPAGE_UNMATCHED_BUCKET_ID) {
                orderedIds.push(id);
            }
        });

        mergeHomepageSections(existingSections, discoveredSections).forEach((section) => {
            if (!orderedIds.includes(section.id) && section.id !== HOMEPAGE_UNMATCHED_BUCKET_ID) {
                orderedIds.push(section.id);
            }
        });

        orderedIds.push(HOMEPAGE_UNMATCHED_BUCKET_ID);

        return orderedIds.map((id, index) => {
            const existing = existingById.get(id);
            return {
                id,
                enabled: existing ? existing.enabled !== false : true,
                order: index
            };
        });
    }

    function shouldRefreshInitialLayout(existingSections, discoveredSections) {
        const merged = mergeHomepageSections(existingSections, discoveredSections);
        const ids = new Set(merged.map((section) => section.id));

        if (!ids.has(HOMEPAGE_UNMATCHED_BUCKET_ID)) {
            return true;
        }

        return normalizeDiscoveredSections(discoveredSections).some((section) => !ids.has(section.id));
    }

    const existingShared = globalThis.CRBWHomepageSections || {};
    globalThis.CRBWHomepageSections = {
        ...existingShared,
        HOMEPAGE_SECTIONS_STORAGE_KEY,
        HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY,
        HOMEPAGE_UNMATCHED_BUCKET_ID,
        HOMEPAGE_STAGING_CONTAINER_ID,
        HOMEPAGE_SECTION_IDS: {
            ...HOMEPAGE_SECTION_IDS,
            ...(existingShared.HOMEPAGE_SECTION_IDS || {})
        },
        CUSTOM_HOMEPAGE_SECTION_DEFINITIONS,
        UNMATCHED_BUCKET_DEFINITION,
        slugify,
        findCustomDefinition,
        normalizeDiscoveredSections,
        getHomepageSectionCatalog,
        mergeHomepageSections,
        normalizeHomepageSections,
        buildHomepageSectionsMap,
        createInitialLayoutFromPage,
        shouldRefreshInitialLayout
    };

    function isVisibleElement(element) {
        if (!(element instanceof HTMLElement) || !element.isConnected) {
            return false;
        }

        if (element.closest(`#${HOMEPAGE_STAGING_CONTAINER_ID}`)) {
            return false;
        }

        const style = window.getComputedStyle(element);
        return style.display !== 'none' && style.visibility !== 'hidden';
    }

    function isBuiltinHomepageSection(element) {
        if (!(element instanceof HTMLElement)) {
            return false;
        }

        if (element.closest(`#${HOMEPAGE_STAGING_CONTAINER_ID}`)) {
            return false;
        }

        if (element.matches('style, script')) {
            return false;
        }

        const directDataId = element.getAttribute('data-id');
        if (!directDataId) {
            return false;
        }

        if (element.querySelector(CONTINUE_WATCHING_TRACK_SELECTOR)) {
            return true;
        }

        return Boolean(
            element.querySelector(SECTION_HEADING_SELECTOR)
            && element.querySelector(BUILTIN_SECTION_CONTENT_SELECTOR)
        );
    }

    function getSectionLabel(element) {
        const explicitId = element.getAttribute('data-crbw-homepage-section');
        const customDefinition = explicitId ? findCustomDefinition(explicitId) : null;
        if (customDefinition) {
            return customDefinition.label;
        }

        const heading = element.querySelector(SECTION_HEADING_SELECTOR);
        if (heading?.textContent) {
            return heading.textContent.trim();
        }

        if (element.querySelector(CONTINUE_WATCHING_TRACK_SELECTOR)) {
            return CONTINUE_WATCHING_SECTION_LABEL;
        }

        return 'Untitled Section';
    }

    function getSectionId(element, duplicateTracker) {
        const explicitId = element.getAttribute('data-crbw-homepage-section');
        if (explicitId) {
            return explicitId;
        }

        const label = getSectionLabel(element);
        const baseSlug = slugify(label) || 'untitled-section';
        const occurrence = (duplicateTracker.get(baseSlug) || 0) + 1;
        duplicateTracker.set(baseSlug, occurrence);

        return occurrence === 1
            ? `builtin-${baseSlug}`
            : `builtin-${baseSlug}-${occurrence}`;
    }

    function getDynamicFeedWrapper() {
        return document.querySelector(DYNAMIC_FEED_WRAPPER_SELECTOR);
    }

    function findLayoutRoot() {
        const dynamicFeedWrapper = getDynamicFeedWrapper();
        if (dynamicFeedWrapper instanceof HTMLElement) {
            return {
                container: dynamicFeedWrapper,
                usesDynamicFeedWrapper: true
            };
        }

        const builtinSections = Array.from(document.querySelectorAll(BUILTIN_SECTION_WRAPPER_SELECTOR))
            .filter((element) => isBuiltinHomepageSection(element) && isVisibleElement(element));
        const parentCounts = new Map();

        builtinSections.forEach((section) => {
            const parent = section.parentElement;
            if (!(parent instanceof HTMLElement)) {
                return;
            }

            parentCounts.set(parent, (parentCounts.get(parent) || 0) + 1);
        });

        let bestContainer = null;
        let bestCount = 0;

        parentCounts.forEach((count, parent) => {
            if (count > bestCount) {
                bestContainer = parent;
                bestCount = count;
            }
        });

        if (bestContainer instanceof HTMLElement) {
            return {
                container: bestContainer,
                usesDynamicFeedWrapper: false
            };
        }

        const mainElement = document.querySelector('main');
        if (mainElement instanceof HTMLElement) {
            return {
                container: mainElement,
                usesDynamicFeedWrapper: false
            };
        }

        return null;
    }

    function getStagingContainer() {
        return document.getElementById(HOMEPAGE_STAGING_CONTAINER_ID);
    }

    function applyHeroCarouselVisibility(hideHeroCarouselEnabled) {
        let heroCarouselStyle = document.getElementById(HERO_CAROUSEL_STYLE_ID);

        if (!(heroCarouselStyle instanceof HTMLStyleElement) && hideHeroCarouselEnabled) {
            heroCarouselStyle = document.createElement('style');
            heroCarouselStyle.id = HERO_CAROUSEL_STYLE_ID;
            document.documentElement.appendChild(heroCarouselStyle);
        }

        if (heroCarouselStyle instanceof HTMLStyleElement) {
            if (hideHeroCarouselEnabled) {
                heroCarouselStyle.textContent = `
                    [${HERO_CAROUSEL_HIDE_ATTR}="true"] {
                        display: none !important;
                        visibility: hidden !important;
                        height: 0 !important;
                        min-height: 0 !important;
                        overflow: hidden !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        pointer-events: none !important;
                    }
                `;
            } else {
                heroCarouselStyle.remove();
            }
        }

        const heroCarouselCandidates = Array.from(document.querySelectorAll(HERO_CAROUSEL_SELECTOR))
            .filter((element) => element instanceof HTMLElement);
        const heroCarousels = Array.from(new Set(
            heroCarouselCandidates.map((element) => {
                if (
                    element.getAttribute('role') === 'region'
                    && element.getAttribute('aria-label') === 'Hero Carousel'
                ) {
                    return element;
                }

                return element.closest('[role="region"][aria-label="Hero Carousel"]') || element;
            }).filter((element) => element instanceof HTMLElement)
        ));

        heroCarousels.forEach((heroCarousel) => {
            if (hideHeroCarouselEnabled) {
                heroCarousel.setAttribute(HERO_CAROUSEL_HIDE_ATTR, 'true');
            } else {
                heroCarousel.removeAttribute(HERO_CAROUSEL_HIDE_ATTR);
            }
        });

        logLayoutDebug('Hero Carousel Visibility', {
            enabled: hideHeroCarouselEnabled,
            candidateCount: heroCarouselCandidates.length,
            rootCount: heroCarousels.length,
            roots: heroCarousels.map((element) => ({
                tagName: element.tagName,
                className: element.className,
                role: element.getAttribute('role'),
                ariaLabel: element.getAttribute('aria-label')
            }))
        });
    }

    function normalizeSectionLabel(value) {
        return String(value || '')
            .normalize('NFKD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();
    }

    function logContinueWatchingProbe(wrapper) {
        const headings = Array.from(document.querySelectorAll(SECTION_HEADING_SELECTOR))
            .map((element) => element.textContent?.trim())
            .filter(Boolean);
        const continueWatchingHeading = Array.from(document.querySelectorAll(SECTION_HEADING_SELECTOR))
            .find((element) => normalizeSectionLabel(element.textContent) === CONTINUE_WATCHING_LABEL);
        const globalTrack = document.querySelector(CONTINUE_WATCHING_TRACK_SELECTOR);
        const wrapperChildren = wrapper instanceof HTMLElement
            ? Array.from(wrapper.children).filter((child) => child instanceof HTMLElement)
            : [];
        const wrapperLabels = wrapperChildren.map((child) => {
            const heading = child.querySelector(SECTION_HEADING_SELECTOR);
            return heading?.textContent?.trim() || null;
        }).filter(Boolean);

        logLayoutDebug('Continue Watching Probe', {
            hasWrapper: wrapper instanceof HTMLElement,
            totalHeadingCount: headings.length,
            sampleHeadings: headings.slice(0, 12),
            hasContinueWatchingHeading: continueWatchingHeading instanceof HTMLElement,
            continueWatchingHeadingText: continueWatchingHeading?.textContent?.trim() || null,
            hasGlobalHistoryTrack: globalTrack instanceof HTMLElement,
            globalHistoryTrackClassName: globalTrack instanceof HTMLElement ? globalTrack.className : null,
            wrapperChildCount: wrapperChildren.length,
            wrapperLabels
        });
        console.warn('[CRBW][HomepageLayout][CW] Continue Watching Probe', {
            hasWrapper: wrapper instanceof HTMLElement,
            hasContinueWatchingHeading: continueWatchingHeading instanceof HTMLElement,
            continueWatchingHeadingText: continueWatchingHeading?.textContent?.trim() || null,
            hasGlobalHistoryTrack: globalTrack instanceof HTMLElement,
            wrapperChildCount: wrapperChildren.length,
            wrapperLabels
        });
    }

    function ensureContinueWatchingStyles() {
        let styleElement = document.getElementById(CONTINUE_WATCHING_STYLE_ID);

        if (styleElement instanceof HTMLStyleElement) {
            logLayoutDebug('Continue Watching Styles Already Present', {
                styleId: CONTINUE_WATCHING_STYLE_ID
            });
            return;
        }

        styleElement = document.createElement('style');
        styleElement.id = CONTINUE_WATCHING_STYLE_ID;
        styleElement.textContent = `
            .crbw-continue-watching-carousel-shell {
                position: relative;
            }

            .crbw-continue-watching-carousel-content {
                position: relative;
                display: flex;
                align-items: center;
                gap: 12px;
            }

            .crbw-continue-watching-carousel-track {
                display: flex !important;
                flex-wrap: nowrap !important;
                gap: 16px;
                overflow-x: auto;
                overflow-y: visible;
                scroll-behavior: smooth;
                scrollbar-width: none;
                -ms-overflow-style: none;
                padding: 4px 2px 8px;
                width: 100%;
            }

            .crbw-continue-watching-carousel-track::-webkit-scrollbar {
                display: none;
            }

            .crbw-continue-watching-carousel-track > ${CONTINUE_WATCHING_ITEM_SELECTOR} {
                flex: 0 0 calc((100% - 80px) / 6);
                min-width: 0;
            }

            .crbw-continue-watching-arrow {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                border: 0;
                border-radius: 999px;
                background: rgba(20, 21, 26, 0.88);
                color: #ffffff;
                cursor: pointer;
                flex: 0 0 auto;
                transition: opacity 120ms ease, background 120ms ease;
                z-index: 1;
            }

            .crbw-continue-watching-arrow:hover:not(:disabled) {
                background: rgba(35, 37, 45, 0.96);
            }

            .crbw-continue-watching-arrow:disabled {
                opacity: 0.35;
                cursor: default;
            }

            .crbw-continue-watching-arrow span {
                font-size: 22px;
                line-height: 1;
            }

            @media (max-width: 107.49em) {
                .crbw-continue-watching-carousel-track > ${CONTINUE_WATCHING_ITEM_SELECTOR} {
                    flex-basis: calc((100% - 64px) / 5);
                }
            }

            @media (max-width: 49.99em) {
                .crbw-continue-watching-carousel-content {
                    gap: 10px;
                }

                .crbw-continue-watching-carousel-track > ${CONTINUE_WATCHING_ITEM_SELECTOR} {
                    flex-basis: calc((100% - 48px) / 4);
                }
            }

            @media (max-width: 35.49em) {
                .crbw-continue-watching-arrow {
                    width: 36px;
                    height: 36px;
                }

                .crbw-continue-watching-carousel-track > ${CONTINUE_WATCHING_ITEM_SELECTOR} {
                    flex-basis: calc((100% - 32px) / 3);
                }
            }

            @media (max-width: 29.99em) {
                .crbw-continue-watching-carousel-content {
                    gap: 8px;
                }

                .crbw-continue-watching-carousel-track > ${CONTINUE_WATCHING_ITEM_SELECTOR} {
                    flex-basis: calc((100% - 16px) / 2);
                }
            }
        `;

        document.documentElement.appendChild(styleElement);
        logLayoutDebug('Continue Watching Styles Injected', {
            styleId: CONTINUE_WATCHING_STYLE_ID
        });
    }

    function updateContinueWatchingArrowVisibility(track, leftButton, rightButton) {
        const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
        const scrollLeft = track.scrollLeft;

        leftButton.disabled = scrollLeft <= 4;
        rightButton.disabled = scrollLeft >= maxScrollLeft - 4;
    }

    function getContinueWatchingScrollStep(track) {
        const firstItem = track.querySelector(CONTINUE_WATCHING_ITEM_SELECTOR);
        if (!(firstItem instanceof HTMLElement)) {
            return track.clientWidth;
        }

        const itemRect = firstItem.getBoundingClientRect();
        const itemStyle = window.getComputedStyle(firstItem);
        const gap = parseFloat(itemStyle.marginLeft || '0') + parseFloat(itemStyle.marginRight || '0');
        const itemWidth = itemRect.width + gap;
        const visibleItems = Math.max(1, Math.round(track.clientWidth / Math.max(itemWidth, 1)));

        return itemWidth * visibleItems;
    }

    function bindContinueWatchingCarousel(sectionElement, track) {
        if (track.dataset.crbwContinueWatchingBound === 'true') {
            const leftButton = sectionElement.querySelector('.crbw-continue-watching-arrow-left');
            const rightButton = sectionElement.querySelector('.crbw-continue-watching-arrow-right');

            if (leftButton instanceof HTMLButtonElement && rightButton instanceof HTMLButtonElement) {
                updateContinueWatchingArrowVisibility(track, leftButton, rightButton);
                logLayoutDebug('Continue Watching Carousel Already Bound', {
                    sectionLabel: getSectionLabel(sectionElement),
                    itemCount: track.querySelectorAll(`:scope > ${CONTINUE_WATCHING_ITEM_SELECTOR}`).length,
                    scrollWidth: track.scrollWidth,
                    clientWidth: track.clientWidth,
                    leftDisabled: leftButton.disabled,
                    rightDisabled: rightButton.disabled
                });
            }

            return;
        }

        const leftButton = sectionElement.querySelector('.crbw-continue-watching-arrow-left');
        const rightButton = sectionElement.querySelector('.crbw-continue-watching-arrow-right');

        if (!(leftButton instanceof HTMLButtonElement) || !(rightButton instanceof HTMLButtonElement)) {
            logLayoutDebug('Continue Watching Carousel Missing Arrows Before Bind', {
                sectionLabel: getSectionLabel(sectionElement),
                hasLeftButton: leftButton instanceof HTMLButtonElement,
                hasRightButton: rightButton instanceof HTMLButtonElement
            });
            return;
        }

        const handleScroll = () => {
            updateContinueWatchingArrowVisibility(track, leftButton, rightButton);
        };

        const handleButtonClick = (direction) => {
            const step = getContinueWatchingScrollStep(track) * direction;
            track.scrollBy({ left: step, behavior: 'smooth' });
        };

        track.dataset.crbwContinueWatchingBound = 'true';
        handleScroll();
        logLayoutDebug('Continue Watching Carousel Bound', {
            sectionLabel: getSectionLabel(sectionElement),
            itemCount: track.querySelectorAll(`:scope > ${CONTINUE_WATCHING_ITEM_SELECTOR}`).length,
            scrollWidth: track.scrollWidth,
            clientWidth: track.clientWidth,
            scrollStep: getContinueWatchingScrollStep(track),
            leftDisabled: leftButton.disabled,
            rightDisabled: rightButton.disabled
        });

        track.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        leftButton.addEventListener('click', () => handleButtonClick(-1));
        rightButton.addEventListener('click', () => handleButtonClick(1));

        if (typeof ResizeObserver === 'function') {
            const resizeObserver = new ResizeObserver(() => {
                handleScroll();
            });

            resizeObserver.observe(track);
            Array.from(track.querySelectorAll('img')).forEach((image) => resizeObserver.observe(image));
        }

        Array.from(track.querySelectorAll('img')).forEach((image) => {
            if (image.complete) {
                return;
            }

            image.addEventListener('load', handleScroll, { once: true });
            image.addEventListener('error', handleScroll, { once: true });
        });

        requestAnimationFrame(() => {
            handleScroll();
            requestAnimationFrame(handleScroll);
        });
    }

    function enhanceContinueWatchingCarousel(sectionElement) {
        if (!(sectionElement instanceof HTMLElement)) {
            logLayoutDebug('Continue Watching Enhancement Skipped', {
                reason: 'sectionElement-not-html'
            });
            return;
        }

        const sectionLabel = getSectionLabel(sectionElement);
        const track = sectionElement.querySelector(CONTINUE_WATCHING_TRACK_SELECTOR);
        if (!(track instanceof HTMLElement)) {
            logLayoutDebug('Continue Watching Track Not Found', {
                sectionLabel,
                selectors: CONTINUE_WATCHING_TRACK_SELECTOR
            });
            return;
        }

        const items = Array.from(track.querySelectorAll(`:scope > ${CONTINUE_WATCHING_ITEM_SELECTOR}`))
            .filter((item) => item instanceof HTMLElement);

        if (items.length === 0) {
            logLayoutDebug('Continue Watching Items Not Found', {
                sectionLabel,
                trackClassName: track.className,
                childCount: track.children.length
            });
            return;
        }

        logLayoutDebug('Continue Watching Enhancement Starting', {
            sectionLabel,
            trackClassName: track.className,
            itemCount: items.length,
            scrollWidth: track.scrollWidth,
            clientWidth: track.clientWidth,
            existingShell: sectionElement.querySelector('.crbw-continue-watching-carousel-shell') instanceof HTMLElement,
            existingLeftArrow: sectionElement.querySelector('.crbw-continue-watching-arrow-left') instanceof HTMLButtonElement,
            existingRightArrow: sectionElement.querySelector('.crbw-continue-watching-arrow-right') instanceof HTMLButtonElement
        });

        ensureContinueWatchingStyles();

        let shell = sectionElement.querySelector('.crbw-continue-watching-carousel-shell');
        let content = sectionElement.querySelector('.crbw-continue-watching-carousel-content');
        let leftButton = sectionElement.querySelector('.crbw-continue-watching-arrow-left');
        let rightButton = sectionElement.querySelector('.crbw-continue-watching-arrow-right');

        if (!(shell instanceof HTMLElement)) {
            shell = document.createElement('div');
            shell.className = 'crbw-continue-watching-carousel-shell';
        }

        if (!(content instanceof HTMLElement)) {
            content = document.createElement('div');
            content.className = 'crbw-continue-watching-carousel-content';
        }

        if (!(leftButton instanceof HTMLButtonElement)) {
            leftButton = document.createElement('button');
            leftButton.className = 'crbw-continue-watching-arrow crbw-continue-watching-arrow-left';
            leftButton.type = 'button';
            leftButton.setAttribute('aria-label', 'Previous');
            leftButton.innerHTML = '<span>&#10094;</span>';
        }

        if (!(rightButton instanceof HTMLButtonElement)) {
            rightButton = document.createElement('button');
            rightButton.className = 'crbw-continue-watching-arrow crbw-continue-watching-arrow-right';
            rightButton.type = 'button';
            rightButton.setAttribute('aria-label', 'Next');
            rightButton.innerHTML = '<span>&#10095;</span>';
        }

        track.classList.add('crbw-continue-watching-carousel-track');

        if (!content.contains(leftButton)) {
            content.appendChild(leftButton);
        }

        if (track.parentElement !== content) {
            content.appendChild(track);
        }

        if (!content.contains(rightButton)) {
            content.appendChild(rightButton);
        }

        if (!shell.contains(content)) {
            shell.appendChild(content);
        }

        if (shell.parentElement !== sectionElement) {
            sectionElement.appendChild(shell);
        }

        logLayoutDebug('Continue Watching Enhancement Applied DOM', {
            sectionLabel,
            shellConnected: shell.isConnected,
            contentConnected: content.isConnected,
            leftArrowConnected: leftButton.isConnected,
            rightArrowConnected: rightButton.isConnected,
            trackParentClassName: track.parentElement?.className || null,
            sectionChildCount: sectionElement.children.length
        });

        bindContinueWatchingCarousel(sectionElement, track);
    }

    function collectHomepageSections(layoutContainer = null) {
        const container = layoutContainer instanceof HTMLElement
            ? layoutContainer
            : findLayoutRoot()?.container;
        if (!(container instanceof HTMLElement)) {
            logLayoutDebug('Homepage Layout Container Not Found', null);
            return [];
        }

        const directChildren = Array.from(container.children).filter((child) => child instanceof HTMLElement);
        const stagingChildren = Array.from(getStagingContainer()?.children || []).filter((child) => child instanceof HTMLElement);
        const candidateElements = [
            ...directChildren.filter((child) => child.hasAttribute('data-crbw-homepage-section') || isBuiltinHomepageSection(child)),
            ...stagingChildren.filter((child) => child.hasAttribute('data-crbw-homepage-section'))
        ];
        const duplicateTracker = new Map();
        const sections = candidateElements
            .map((element, index) => {
                const id = getSectionId(element, duplicateTracker);
                return {
                    id,
                    label: getSectionLabel(element),
                    kind: element.hasAttribute('data-crbw-homepage-section') ? 'custom' : 'builtin',
                    defaultOrder: index,
                    element
                };
            });

        logLayoutDebug('Collected homepage sections', {
            containerClassName: container.className || container.tagName,
            directChildCount: directChildren.length,
            stagingChildCount: stagingChildren.length,
            sectionCount: sections.length,
            builtInCount: sections.filter((section) => section.kind === 'builtin').length,
            customCount: sections.filter((section) => section.kind === 'custom').length,
            sections: sections.map((section) => ({
                id: section.id,
                label: section.label,
                kind: section.kind,
                defaultOrder: section.defaultOrder
            }))
        });

        return sections;
    }

    function ensureInitialLayout(discoveredSections) {
        chrome.storage.local.get(
            [HOMEPAGE_SECTIONS_STORAGE_KEY, HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY],
            (items) => {
                const storedDiscovered = normalizeDiscoveredSections(items[HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY]);
                const normalizedDiscovered = normalizeDiscoveredSections(discoveredSections);
                const currentSectionIds = normalizedDiscovered.map((section) => section.id);
                const existingSections = Array.isArray(items[HOMEPAGE_SECTIONS_STORAGE_KEY])
                    ? items[HOMEPAGE_SECTIONS_STORAGE_KEY]
                    : [];

                const nextItems = {
                    [HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY]: normalizedDiscovered
                };

                const discoveredSignature = JSON.stringify(normalizedDiscovered);
                const shouldUpdateDiscovered = discoveredSignature !== JSON.stringify(storedDiscovered);

                if (shouldUpdateDiscovered || shouldRefreshInitialLayout(existingSections, normalizedDiscovered)) {
                    nextItems[HOMEPAGE_SECTIONS_STORAGE_KEY] = createInitialLayoutFromPage(
                        currentSectionIds,
                        existingSections,
                        normalizedDiscovered
                    );
                }

                if (Object.keys(nextItems).length > 0) {
                    chrome.storage.local.set(nextItems);
                    logLayoutDebug('Persisted homepage layout state', nextItems);
                }
            }
        );
    }

    function applyHomepageLayout() {
        chrome.storage.local.get(
            [
                HOMEPAGE_SECTIONS_STORAGE_KEY,
                HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY,
                REMOVE_CRUNCHYROLL_ADS_SETTING_KEY,
                HIDE_HERO_CAROUSEL_SETTING_KEY
            ],
            (items) => {
                const layoutRoot = findLayoutRoot();
                const wrapper = layoutRoot?.container;
                const hideHeroCarouselEnabled = items[HIDE_HERO_CAROUSEL_SETTING_KEY] === true;
                logLayoutDebug('Homepage Settings Snapshot', {
                    hideHeroCarouselEnabled,
                    removeAdsEnabled: items[REMOVE_CRUNCHYROLL_ADS_SETTING_KEY] === true,
                    hasWrapper: wrapper instanceof HTMLElement,
                    usesDynamicFeedWrapper: layoutRoot?.usesDynamicFeedWrapper === true
                });

                applyHeroCarouselVisibility(hideHeroCarouselEnabled);

                if (!(wrapper instanceof HTMLElement)) {
                    return;
                }

                logContinueWatchingProbe(wrapper);

                const discoveredSections = collectHomepageSections(wrapper);
                const discoveredSignature = JSON.stringify(
                    discoveredSections.map((section) => ({
                        id: section.id,
                        label: section.label,
                        kind: section.kind,
                        defaultOrder: section.defaultOrder
                    }))
                );

                if (discoveredSignature !== lastDiscoveredSignature) {
                    lastDiscoveredSignature = discoveredSignature;
                    ensureInitialLayout(discoveredSections);
                }

                const normalizedDiscovered = normalizeDiscoveredSections(discoveredSections);
                const mergedSections = mergeHomepageSections(items[HOMEPAGE_SECTIONS_STORAGE_KEY], normalizedDiscovered);
                const configById = new Map(mergedSections.map((section) => [section.id, section]));
                const unmatchedBucket = configById.get(HOMEPAGE_UNMATCHED_BUCKET_ID);
                const removeAdsEnabled = items[REMOVE_CRUNCHYROLL_ADS_SETTING_KEY] === true;
                const wrapperDisplay = window.getComputedStyle(wrapper).display;

                if (layoutRoot?.usesDynamicFeedWrapper && wrapperDisplay !== 'flex') {
                    wrapper.style.display = 'flex';
                    wrapper.style.flexDirection = 'column';
                }

                logLayoutDebug('Applying homepage layout', {
                    mergedSections: mergedSections.map((section) => ({
                        id: section.id,
                        enabled: section.enabled,
                        order: section.order,
                        kind: section.kind
                    }))
                });

                discoveredSections.forEach((section) => {
                    const config = configById.get(section.id);
                    const isUnmatchedBuiltIn = section.kind === 'builtin' && !config;
                    const shouldShow = config
                        ? config.enabled !== false
                        : unmatchedBucket
                            ? unmatchedBucket.enabled !== false
                            : true;
                    const order = config
                        ? config.order
                        : isUnmatchedBuiltIn && unmatchedBucket
                            ? unmatchedBucket.order
                            : section.defaultOrder;

                    section.element.style.display = shouldShow && !shouldHideHomepageSection(section, removeAdsEnabled) ? '' : 'none';
                    section.element.style.order = String(order);
                });

                const orderedVisibleSections = discoveredSections
                    .filter((section) => section.element.style.display !== 'none')
                    .sort((left, right) => Number(left.element.style.order || 0) - Number(right.element.style.order || 0));

                if (layoutRoot?.usesDynamicFeedWrapper) {
                    orderedVisibleSections.forEach((section) => {
                        if (section.element.parentElement !== wrapper) {
                            wrapper.appendChild(section.element);
                        }
                    });
                } else {
                    discoveredSections.forEach((section) => {
                        if (section.element.parentElement === wrapper) {
                            section.element.style.display = 'none';
                        }
                    });

                    const fragment = document.createDocumentFragment();
                    orderedVisibleSections.forEach((section) => {
                        section.element.style.display = '';
                        fragment.appendChild(section.element);
                    });

                    const managedElements = new Set(
                        discoveredSections
                            .filter((section) => section.element.parentElement === wrapper)
                            .map((section) => section.element)
                    );
                    const referenceElement = Array.from(wrapper.children)
                        .find((child) => !managedElements.has(child)) || null;

                    if (referenceElement) {
                        wrapper.insertBefore(fragment, referenceElement);
                    } else {
                        wrapper.appendChild(fragment);
                    }
                }

                orderedVisibleSections.forEach((section) => {
                    if (
                        section.kind === 'builtin'
                        && normalizeSectionLabel(section.label) === CONTINUE_WATCHING_LABEL
                    ) {
                        enhanceContinueWatchingCarousel(section.element);
                    }
                });

                logLayoutDebug('Visible homepage sections after apply', orderedVisibleSections.map((section) => ({
                    id: section.id,
                    label: section.label,
                    order: Number(section.element.style.order || 0),
                    kind: section.kind
                })));
            }
        );
    }

    function scheduleApply() {
        if (scheduledRefresh) {
            window.clearTimeout(scheduledRefresh);
        }

        scheduledRefresh = window.setTimeout(() => {
            scheduledRefresh = null;
            applyHomepageLayout();
        }, 120);
    }

    function observeHomepage() {
        const observer = new MutationObserver(() => {
            scheduleApply();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        chrome.storage.onChanged.addListener((changes, areaName) => {
            if (areaName !== 'local') {
                return;
            }

            if (
                changes[HOMEPAGE_SECTIONS_STORAGE_KEY]
                || changes[HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY]
                || changes[REMOVE_CRUNCHYROLL_ADS_SETTING_KEY]
                || changes[HIDE_HERO_CAROUSEL_SETTING_KEY]
            ) {
                scheduleApply();
            }
        });

        if (!refreshIntervalId) {
            refreshIntervalId = window.setInterval(() => {
                scheduleApply();
            }, 1000);
        }

        scheduleApply();
    }

    if (document.body) {
        observeHomepage();
    } else {
        window.addEventListener('DOMContentLoaded', observeHomepage, { once: true });
    }
})();
