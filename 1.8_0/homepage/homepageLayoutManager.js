(function initHomepageLayoutManager() {
    console.log('[CRBW][HomepageLayout] Bootstrap', {
        legacyInitialized: Boolean(globalThis.__CRBW_HOMEPAGE_LAYOUT_MANAGER_INITIALIZED__),
        standaloneInitialized: Boolean(globalThis.__CRBW_DYNAMIC_FEED_LAYOUT_MANAGER_INITIALIZED__)
    });
    console.log('[CRBW][HomepageLayout][CW] Homepage Layout Manager Script Evaluated');

    if (globalThis.__CRBW_HOMEPAGE_LAYOUT_MANAGER_INITIALIZED__) {
        console.log('[CRBW][HomepageLayout] Shared Homepage Layout Manager Already Initialized; Skipping Standalone Manager');
        return;
    }

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
    let isContextInvalidated = false;

    function logLayoutDebug(label, payload) {
        console.log(`[CRBW][HomepageLayout] ${label}`, payload);
    }

    function isExtensionContextValid() {
        if (isContextInvalidated) {
            return false;
        }

        try {
            return Boolean(chrome?.runtime?.id);
        } catch (error) {
            if (String(error?.message || error).includes('Extension context invalidated')) {
                isContextInvalidated = true;
                return false;
            }

            throw error;
        }
    }

    function runWithValidContext(callback) {
        if (!isExtensionContextValid()) {
            return false;
        }

        try {
            callback();
            return true;
        } catch (error) {
            if (String(error?.message || error).includes('Extension context invalidated')) {
                isContextInvalidated = true;
                return false;
            }

            throw error;
        }
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

        return isVisibleElement(element);
    }

    function getSectionLabel(element) {
        const sourceElement = element.hasAttribute('data-crbw-homepage-section')
            ? element
            : getBuiltinSectionSourceElement(element) || element;
        const explicitId = sourceElement.getAttribute('data-crbw-homepage-section');
        const customDefinition = explicitId ? findCustomDefinition(explicitId) : null;
        if (customDefinition) {
            return customDefinition.label;
        }

        const heading = sourceElement.querySelector(SECTION_HEADING_SELECTOR);
        if (heading?.textContent) {
            return heading.textContent.trim();
        }

        if (sourceElement.querySelector(CONTINUE_WATCHING_TRACK_SELECTOR)) {
            return CONTINUE_WATCHING_SECTION_LABEL;
        }

        return 'Untitled Section';
    }

    function getBuiltinSectionSourceElement(element) {
        if (!(element instanceof HTMLElement)) {
            return null;
        }

        if (isBuiltinHomepageSection(element)) {
            return element;
        }

        const nestedSection = element.querySelector(BUILTIN_SECTION_WRAPPER_SELECTOR);
        return nestedSection instanceof HTMLElement && isBuiltinHomepageSection(nestedSection)
            ? nestedSection
            : null;
    }

    function getSectionId(element, duplicateTracker) {
        const explicitId = element.getAttribute('data-crbw-homepage-section');
        if (explicitId) {
            return explicitId;
        }

        const sourceElement = getBuiltinSectionSourceElement(element) || element;
        const dataId = sourceElement.getAttribute('data-id');
        if (dataId) {
            return `builtin:data-id:${dataId}`;
        }

        const label = getSectionLabel(sourceElement);
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
            [data-crbw-continue-watching-enhanced="true"] {
                width: auto;
                inline-size: auto;
                block-size: auto;
                max-width: 100%;
                min-width: 0;
            }

            [data-crbw-continue-watching-enhanced="true"] > div,
            [data-crbw-continue-watching-enhanced="true"] > div > div {
                width: auto;
                inline-size: auto;
                block-size: auto;
                max-width: 100%;
                min-width: 0;
            }

            .crbw-continue-watching-carousel-shell {
                position: relative;
                box-sizing: border-box;
                overflow: visible;
                width: 100%;
                max-width: 100%;
                min-width: 0;
            }

            .crbw-continue-watching-carousel-content {
                position: relative;
                display: flex;
                align-items: center;
                width: 100%;
                box-sizing: border-box;
                min-width: 0;
            }

            .crbw-continue-watching-carousel-viewport {
                overflow-x: auto;
                overflow-y: visible;
                overscroll-behavior-x: contain;
                scroll-behavior: smooth;
                scrollbar-width: none;
                -ms-overflow-style: none;
                padding: 4px 0 8px;
                width: 100%;
                box-sizing: border-box;
                min-width: 0;
            }

            .crbw-continue-watching-carousel-viewport::-webkit-scrollbar {
                display: none;
            }

            .crbw-continue-watching-carousel-track {
                display: flex !important;
                flex-wrap: nowrap !important;
                gap: 16px;
                width: max-content;
                min-width: max-content;
            }

            .crbw-continue-watching-carousel-track > ${CONTINUE_WATCHING_ITEM_SELECTOR} {
                flex: 0 0 var(--crbw-cw-item-width, 220px) !important;
                width: var(--crbw-cw-item-width, 220px) !important;
                min-width: var(--crbw-cw-item-width, 220px) !important;
                max-width: var(--crbw-cw-item-width, 220px) !important;
                box-sizing: border-box;
            }

            .crbw-continue-watching-carousel-track > ${CONTINUE_WATCHING_ITEM_SELECTOR} > * {
                width: 100%;
            }

            .crbw-continue-watching-carousel-track .playable-thumbnail--HKMt2,
            .crbw-continue-watching-carousel-track [class*="playable-thumbnail--is-sized"] {
                max-width: 100%;
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
                position: absolute;
                top: 102px;
                transform: translateY(-50%);
            }

            .crbw-continue-watching-arrow:hover {
                background: rgba(35, 37, 45, 0.96);
            }

            .crbw-continue-watching-arrow[hidden] {
                display: none !important;
            }

            .crbw-continue-watching-arrow span {
                font-size: 22px;
                line-height: 1;
            }

            .crbw-continue-watching-arrow-left {
                left: -56px;
            }

            .crbw-continue-watching-arrow-right {
                right: -56px;
            }

            @media (max-width: 107.49em) {
                .crbw-continue-watching-arrow {
                    top: 90px;
                }
            }

            @media (max-width: 49.99em) {
                .crbw-continue-watching-arrow {
                    top: 80px;
                }
            }

            @media (max-width: 35.49em) {
                .crbw-continue-watching-arrow {
                    width: 36px;
                    height: 36px;
                    top: 72px;
                }
            }

        `;

        document.documentElement.appendChild(styleElement);
        logLayoutDebug('Continue Watching Styles Injected', {
            styleId: CONTINUE_WATCHING_STYLE_ID
        });
    }

    function getContinueWatchingVisibleItemCount(viewportWidth) {
        if (viewportWidth <= 520) {
            return 2;
        }

        if (viewportWidth <= 760) {
            return 3;
        }

        if (viewportWidth <= 1040) {
            return 4;
        }

        return 5;
    }

    function syncContinueWatchingCardWidths(viewport, track) {
        if (!(viewport instanceof HTMLElement) || !(track instanceof HTMLElement)) {
            return;
        }

        const items = Array.from(track.querySelectorAll(`:scope > ${CONTINUE_WATCHING_ITEM_SELECTOR}`))
            .filter((item) => item instanceof HTMLElement);

        if (!items.length) {
            return;
        }

        const gap = 16;
        const visibleItems = getContinueWatchingVisibleItemCount(viewport.clientWidth);
        const availableWidth = Math.max(0, viewport.clientWidth - (gap * (visibleItems - 1)));
        const itemWidth = Math.max(150, Math.floor(availableWidth / visibleItems));

        viewport.style.setProperty('--crbw-cw-item-width', `${itemWidth}px`);
    }

    function updateContinueWatchingArrowVisibility(viewport, leftButton, rightButton) {
        const maxScrollLeft = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
        const scrollLeft = viewport.scrollLeft;
        const threshold = 12;

        leftButton.hidden = scrollLeft <= threshold;
        rightButton.hidden = maxScrollLeft <= threshold || scrollLeft >= maxScrollLeft - threshold;
    }

    function getContinueWatchingScrollStep(viewport, track) {
        const firstItem = track.querySelector(CONTINUE_WATCHING_ITEM_SELECTOR);
        if (!(firstItem instanceof HTMLElement)) {
            return viewport.clientWidth;
        }

        const itemRect = firstItem.getBoundingClientRect();
        const itemWidth = itemRect.width + 16;
        const visibleItems = getContinueWatchingVisibleItemCount(viewport.clientWidth);

        return itemWidth * visibleItems;
    }

    function isContinueWatchingItemReady(item) {
        if (!(item instanceof HTMLElement)) {
            return false;
        }

        const image = item.querySelector('img[src]');
        const imageSrc = image?.getAttribute('src') || '';
        const href = item.querySelector('a[href]')?.getAttribute('href') || '';
        const hasSkeletonClass = /skeleton|placeholder|loading/i.test(item.className);
        const textContent = (item.textContent || '').replace(/\s+/g, ' ').trim();

        return !hasSkeletonClass
            && Boolean(imageSrc)
            && Boolean(href)
            && textContent.length > 12;
    }

    function getContinueWatchingRenderableItems(track) {
        return Array.from(track.querySelectorAll(`:scope > ${CONTINUE_WATCHING_ITEM_SELECTOR}`))
            .filter((item) => item instanceof HTMLElement && isContinueWatchingItemReady(item));
    }

    function bindContinueWatchingCarousel(sectionElement, viewport, track) {
        if (viewport.dataset.crbwContinueWatchingBound === 'true') {
            const leftButton = sectionElement.querySelector('.crbw-continue-watching-arrow-left');
            const rightButton = sectionElement.querySelector('.crbw-continue-watching-arrow-right');

            if (leftButton instanceof HTMLButtonElement && rightButton instanceof HTMLButtonElement) {
                syncContinueWatchingCardWidths(viewport, track);
                updateContinueWatchingArrowVisibility(viewport, leftButton, rightButton);
                logLayoutDebug('Continue Watching Carousel Already Bound', {
                    sectionLabel: getSectionLabel(sectionElement),
                    itemCount: track.querySelectorAll(`:scope > ${CONTINUE_WATCHING_ITEM_SELECTOR}`).length,
                    scrollWidth: viewport.scrollWidth,
                    clientWidth: viewport.clientWidth,
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
            updateContinueWatchingArrowVisibility(viewport, leftButton, rightButton);
        };

        const handleResize = () => {
            syncContinueWatchingCardWidths(viewport, track);
            updateContinueWatchingArrowVisibility(viewport, leftButton, rightButton);
        };

        const handleButtonClick = (direction) => {
            const step = getContinueWatchingScrollStep(viewport, track) * direction;
            viewport.scrollBy({ left: step, behavior: 'smooth' });
        };

        viewport.dataset.crbwContinueWatchingBound = 'true';
        syncContinueWatchingCardWidths(viewport, track);
        handleScroll();
        logLayoutDebug('Continue Watching Carousel Bound', {
            sectionLabel: getSectionLabel(sectionElement),
            itemCount: track.querySelectorAll(`:scope > ${CONTINUE_WATCHING_ITEM_SELECTOR}`).length,
            scrollWidth: viewport.scrollWidth,
            clientWidth: viewport.clientWidth,
            scrollStep: getContinueWatchingScrollStep(viewport, track),
            leftDisabled: leftButton.disabled,
            rightDisabled: rightButton.disabled
        });

        viewport.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        leftButton.addEventListener('click', () => handleButtonClick(-1));
        rightButton.addEventListener('click', () => handleButtonClick(1));

        if (typeof ResizeObserver === 'function') {
            const resizeObserver = new ResizeObserver(() => {
                handleResize();
            });

            resizeObserver.observe(viewport);
            resizeObserver.observe(track);
            Array.from(track.querySelectorAll('img')).forEach((image) => resizeObserver.observe(image));
        }

        Array.from(track.querySelectorAll('img')).forEach((image) => {
            if (image.complete) {
                return;
            }

            image.addEventListener('load', handleResize, { once: true });
            image.addEventListener('error', handleResize, { once: true });
        });

        requestAnimationFrame(() => {
            handleResize();
            requestAnimationFrame(handleResize);
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
        const existingCustomTrack = sectionElement.querySelector(':scope .crbw-continue-watching-carousel-track');
        const resolvedSourceTrack = sectionElement.querySelector(CONTINUE_WATCHING_TRACK_SELECTOR);
        const sourceTrack = existingCustomTrack instanceof HTMLElement
            ? existingCustomTrack
            : resolvedSourceTrack;
        if (!(sourceTrack instanceof HTMLElement)) {
            logLayoutDebug('Continue Watching Track Not Found', {
                sectionLabel,
                selectors: CONTINUE_WATCHING_TRACK_SELECTOR
            });
            return;
        }

        const items = getContinueWatchingRenderableItems(sourceTrack);
        const shouldUseExistingCustomTrack = existingCustomTrack instanceof HTMLElement && existingCustomTrack === sourceTrack;

        if (items.length === 0) {
            const shell = sectionElement.querySelector('.crbw-continue-watching-carousel-shell');
            if (shell instanceof HTMLElement) {
                shell.style.display = 'none';
            }

            if (!shouldUseExistingCustomTrack) {
                sourceTrack.style.removeProperty('display');
            }
            logLayoutDebug('Continue Watching Items Not Found', {
                sectionLabel,
                trackClassName: sourceTrack.className,
                childCount: sourceTrack.children.length
            });
            return;
        }

        logLayoutDebug('Continue Watching Enhancement Starting', {
            sectionLabel,
            trackClassName: sourceTrack.className,
            itemCount: items.length,
            scrollWidth: sourceTrack.scrollWidth,
            clientWidth: sourceTrack.clientWidth,
            existingShell: sectionElement.querySelector('.crbw-continue-watching-carousel-shell') instanceof HTMLElement,
            existingLeftArrow: sectionElement.querySelector('.crbw-continue-watching-arrow-left') instanceof HTMLButtonElement,
            existingRightArrow: sectionElement.querySelector('.crbw-continue-watching-arrow-right') instanceof HTMLButtonElement
        });

        ensureContinueWatchingStyles();
        homepageSectionsShared.ensureHomepageSectionInlineGutterWatcher?.();
        homepageSectionsShared.scheduleHomepageSectionInlineGutterSync?.();
        sectionElement.setAttribute('data-crbw-continue-watching-enhanced', 'true');
        let shell = sectionElement.querySelector('.crbw-continue-watching-carousel-shell');
        let content = sectionElement.querySelector('.crbw-continue-watching-carousel-content');
        let viewport = sectionElement.querySelector('.crbw-continue-watching-carousel-viewport');
        let track = sectionElement.querySelector(':scope .crbw-continue-watching-carousel-track');
        let leftButton = sectionElement.querySelector('.crbw-continue-watching-arrow-left');
        let rightButton = sectionElement.querySelector('.crbw-continue-watching-arrow-right');

        if (!(shell instanceof HTMLElement)) {
            shell = document.createElement('div');
            shell.className = 'crbw-continue-watching-carousel-shell';
        }

        shell.style.removeProperty('display');
        shell.classList.add('container--cq5XE');

        if (!(content instanceof HTMLElement)) {
            content = document.createElement('div');
            content.className = 'crbw-continue-watching-carousel-content';
        }

        if (!(viewport instanceof HTMLElement)) {
            viewport = document.createElement('div');
            viewport.className = 'crbw-continue-watching-carousel-viewport';
        }

        if (!(track instanceof HTMLElement)) {
            track = document.createElement('div');
            track.className = 'crbw-continue-watching-carousel-track';
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

        items.forEach((item) => {
            if (item.parentElement !== track) {
                track.appendChild(item);
            }
        });

        if (!shouldUseExistingCustomTrack && sourceTrack !== track) {
            sourceTrack.style.display = 'none';
        }

        if (!content.contains(leftButton)) {
            content.appendChild(leftButton);
        }

        if (!viewport.contains(track)) {
            viewport.appendChild(track);
        }

        if (viewport.parentElement !== content) {
            content.appendChild(viewport);
        }

        if (!content.contains(rightButton)) {
            content.appendChild(rightButton);
        }

        if (!shell.contains(content)) {
            shell.appendChild(content);
        }

        const preferredShellParent = trackParent instanceof HTMLElement && trackParent !== content
            ? trackParent
            : sectionElement;

        if (shell.parentElement !== preferredShellParent) {
            if (preferredShellParent === trackParent && trackParent instanceof HTMLElement) {
                trackParent.insertBefore(shell, track);
            } else {
                sectionElement.appendChild(shell);
            }
        }

        logLayoutDebug('Continue Watching Enhancement Applied DOM', {
            sectionLabel,
            shellConnected: shell.isConnected,
            contentConnected: content.isConnected,
            leftArrowConnected: leftButton.isConnected,
            rightArrowConnected: rightButton.isConnected,
            shellParentClassName: shell.parentElement?.className || null,
            trackParentClassName: track.parentElement?.className || null,
            sectionChildCount: sectionElement.children.length
        });

        bindContinueWatchingCarousel(sectionElement, viewport, track);
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
            ...directChildren.filter((child) =>
                child.hasAttribute('data-crbw-homepage-section')
                || Boolean(getBuiltinSectionSourceElement(child))
            ),
            ...stagingChildren.filter((child) => child.hasAttribute('data-crbw-homepage-section'))
        ];
        const duplicateTracker = new Map();
        const sections = candidateElements
            .map((element, index) => {
                const id = getSectionId(element, duplicateTracker);
                const sourceElement = element.hasAttribute('data-crbw-homepage-section')
                    ? element
                    : getBuiltinSectionSourceElement(element) || element;
                return {
                    id,
                    label: getSectionLabel(element),
                    kind: element.hasAttribute('data-crbw-homepage-section') ? 'custom' : 'builtin',
                    defaultOrder: index,
                    element,
                    sourceDataId: sourceElement.getAttribute('data-id') || null
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
                defaultOrder: section.defaultOrder,
                sourceDataId: section.sourceDataId
            }))
        });

        return sections;
    }

    function ensureInitialLayout(discoveredSections) {
        runWithValidContext(() => chrome.storage.local.get(
            [HOMEPAGE_SECTIONS_STORAGE_KEY, HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY],
            (items) => {
                if (!isExtensionContextValid()) {
                    return;
                }

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
                    runWithValidContext(() => chrome.storage.local.set(nextItems));
                    logLayoutDebug('Persisted homepage layout state', nextItems);
                }
            }
        ));
    }

    function applyHomepageLayout() {
        runWithValidContext(() => chrome.storage.local.get(
            [
                HOMEPAGE_SECTIONS_STORAGE_KEY,
                HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY,
                REMOVE_CRUNCHYROLL_ADS_SETTING_KEY,
                HIDE_HERO_CAROUSEL_SETTING_KEY
            ],
            (items) => {
                if (!isExtensionContextValid()) {
                    return;
                }

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
                if (layoutRoot?.usesDynamicFeedWrapper) {
                    // Preserve Crunchyroll's native feed layout. Forcing flex here
                    // changes intrinsic sizing for Continue Watching and scales the
                    // whole homepage incorrectly.
                    wrapper.style.removeProperty('display');
                    wrapper.style.removeProperty('flex-direction');
                    wrapper.style.removeProperty('align-items');
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
                    section.element.style.width = 'auto';
                    section.element.style.maxWidth = '100%';
                    section.element.style.minWidth = '0';
                    section.element.style.flexShrink = '1';
                    section.element.style.flexBasis = 'auto';
                    section.element.style.alignSelf = 'stretch';
                });

                const orderedVisibleSections = discoveredSections
                    .filter((section) => section.element.style.display !== 'none')
                    .sort((left, right) => Number(left.element.style.order || 0) - Number(right.element.style.order || 0));

                const continueWatchingCandidates = orderedVisibleSections.map((section) => ({
                    id: section.id,
                    label: section.label,
                    normalizedLabel: normalizeSectionLabel(section.label),
                    kind: section.kind,
                    sourceDataId: section.sourceDataId || null,
                    hasHistoryTrack: section.element.querySelector(CONTINUE_WATCHING_TRACK_SELECTOR) instanceof HTMLElement,
                    isEnhanced: section.element.getAttribute('data-crbw-continue-watching-enhanced') === 'true'
                }));
                const matchedContinueWatchingSections = continueWatchingCandidates.filter((section) =>
                    section.kind === 'builtin' && section.normalizedLabel === CONTINUE_WATCHING_LABEL
                );

                logLayoutDebug('Continue Watching Match Evaluation', {
                    visibleSectionCount: orderedVisibleSections.length,
                    matchCount: matchedContinueWatchingSections.length,
                    matches: matchedContinueWatchingSections,
                    candidates: continueWatchingCandidates
                });

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
                        logLayoutDebug('Continue Watching Enhancement Selected', {
                            id: section.id,
                            label: section.label,
                            sourceDataId: section.sourceDataId || null,
                            hasTrackBeforeEnhance: section.element.querySelector(CONTINUE_WATCHING_TRACK_SELECTOR) instanceof HTMLElement,
                            alreadyEnhanced: section.element.getAttribute('data-crbw-continue-watching-enhanced') === 'true'
                        });
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
        ));
    }

    function scheduleApply() {
        if (!isExtensionContextValid()) {
            return;
        }

        if (scheduledRefresh) {
            window.clearTimeout(scheduledRefresh);
        }

        scheduledRefresh = window.setTimeout(() => {
            scheduledRefresh = null;
            applyHomepageLayout();
        }, 120);
    }

    function observeHomepage() {
        if (!isExtensionContextValid()) {
            return;
        }

        const observer = new MutationObserver(() => {
            scheduleApply();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        runWithValidContext(() => chrome.storage.onChanged.addListener((changes, areaName) => {
            if (!isExtensionContextValid()) {
                return;
            }

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
        }));

        if (!refreshIntervalId) {
            refreshIntervalId = window.setInterval(() => {
                if (!isExtensionContextValid()) {
                    if (refreshIntervalId) {
                        window.clearInterval(refreshIntervalId);
                        refreshIntervalId = null;
                    }
                    return;
                }

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
