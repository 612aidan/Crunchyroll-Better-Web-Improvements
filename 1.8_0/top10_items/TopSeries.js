(async function () {
    console.log("🚀 Top 10 Carousel (Final Version, Simplified Loading, Dual Carousel) loading...");
    const fallbackHomepageSectionsShared = {
        HOMEPAGE_SECTIONS_STORAGE_KEY: 'homepageSections',
        HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY: 'homepageDiscoveredSections',
        HOMEPAGE_STAGING_CONTAINER_ID: 'crbw-homepage-staging',
        HOMEPAGE_UNMATCHED_BUCKET_ID: 'unmatched-sections-bucket',
        HOMEPAGE_SECTION_IDS: {
            TOP_SERIES_POPULAR: 'top-series-popular',
            TOP_SERIES_REVIEWED: 'top-series-reviewed'
        },
        getDefaultHomepageSections() {
            return [
                { id: 'next-season', enabled: true, order: 0 },
                { id: 'top-series-popular', enabled: true, order: 1 },
                { id: 'top-series-reviewed', enabled: true, order: 2 },
                { id: 'top-movies-popular', enabled: true, order: 3 },
                { id: 'top-movies-reviewed', enabled: true, order: 4 }
            ];
        },
        normalizeHomepageSections(inputSections) {
            const defaults = this.getDefaultHomepageSections();
            const incoming = new Map(Array.isArray(inputSections)
                ? inputSections.filter((section) => section && typeof section.id === 'string').map((section) => [section.id, section])
                : []);

            return defaults.map((section) => ({
                id: section.id,
                enabled: incoming.has(section.id) ? incoming.get(section.id).enabled !== false : true,
                order: incoming.has(section.id) && Number.isFinite(Number(incoming.get(section.id).order))
                    ? Number(incoming.get(section.id).order)
                    : section.order
            })).sort((left, right) => left.order - right.order);
        },
        buildHomepageSectionsMap(inputSections) {
            return this.normalizeHomepageSections(inputSections).reduce((sectionsMap, section) => {
                sectionsMap[section.id] = section;
                return sectionsMap;
            }, {});
        },
        mergeHomepageSections(inputSections) {
            return this.normalizeHomepageSections(inputSections).map((section) => ({
                ...section,
                label: section.id,
                kind: 'custom'
            }));
        }
    };
    const homepageSectionsShared = Object.assign(fallbackHomepageSectionsShared, globalThis.CRBWHomepageSections || {});
    globalThis.CRBWHomepageSections = homepageSectionsShared;

    function getLiveHomepageSectionsShared() {
        const shared = globalThis.CRBWHomepageSections;
        return shared && typeof shared === 'object' ? shared : homepageSectionsShared;
    }

    function ensureHomepageLayoutManager() {
        console.log('[CRBW][HomepageLayout] Bootstrap From TopSeries', {
            initialized: Boolean(globalThis.__CRBW_DYNAMIC_FEED_LAYOUT_MANAGER_INITIALIZED__)
        });

        if (globalThis.__CRBW_DYNAMIC_FEED_LAYOUT_MANAGER_INITIALIZED__) {
            return;
        }

        globalThis.__CRBW_DYNAMIC_FEED_LAYOUT_MANAGER_INITIALIZED__ = true;
        console.log('[CRBW][HomepageLayout] Script Loaded From TopSeries');

        const customDefinitions = [
            { id: 'next-season', label: 'Next Season', kind: 'custom', defaultOrder: 0 },
            { id: 'top-series-popular', label: 'Top Series Popular', kind: 'custom', defaultOrder: 1 },
            { id: 'top-series-reviewed', label: 'Top Series Reviewed', kind: 'custom', defaultOrder: 2 },
            { id: 'top-movies-popular', label: 'Top Movies Popular', kind: 'custom', defaultOrder: 3 },
            { id: 'top-movies-reviewed', label: 'Top Movies Reviewed', kind: 'custom', defaultOrder: 4 }
        ];
        const unmatchedBucketDefinition = {
            id: HOMEPAGE_UNMATCHED_BUCKET_ID,
            label: 'Any New Sections',
            kind: 'bucket',
            defaultOrder: 9999
        };
        const hideHeroCarouselSettingKey = 'hideHeroCarousel';
        const dynamicFeedWrapperSelector = '.dynamic-feed-wrapper';
        const heroCarouselSelector = '[role="region"][aria-label="Hero Carousel"], .hero-carousel--1-yhX, [class^="hero-carousel--"], [class*=" hero-carousel--"]';
        const continueWatchingStyleId = 'crbw-continue-watching-carousel-style';
        const continueWatchingLabel = 'continue watching';
        const continueWatchingItemSelector = '.collection-item';
        const continueWatchingSourceSelector = [
            '.erc-history-collection[data-t="history"]',
            '.erc-history-collection',
            '[data-t="history"]'
        ].join(', ');
        const sectionHeadingSelector = 'h2, .browse-collection-title, .feed-header__title--DMRD6';
        const builtinSectionContentSelector = [
            '[data-t^="personalized-collection-"]',
            '[data-t*="collection"]',
            continueWatchingSourceSelector
        ].join(', ');
        const sectionContentSelector = [
            builtinSectionContentSelector,
            '[data-t="cards"]',
            '[data-t="carousel-card-wrapper"]',
            '[role="region"]',
            'a[href]',
            'iframe'
        ].join(', ');
        let scheduledRefresh = null;
        let refreshIntervalId = null;
        let lastDiscoveredSignature = '';
        let lastLoggedDiscoveredSignature = '';
        let lastVisibleSignature = '';
        let lastHeroCarouselApplySignature = '';
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

        function normalizeSectionLabel(value) {
            return String(value || '')
                .normalize('NFKD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/\s+/g, ' ')
                .trim()
                .toLowerCase();
        }

        function ensureContinueWatchingStyles() {
            let styleElement = document.getElementById(continueWatchingStyleId);

            if (styleElement instanceof HTMLStyleElement) {
                return;
            }

            styleElement = document.createElement('style');
            styleElement.id = continueWatchingStyleId;
            styleElement.textContent = `
                .crbw-continue-watching-carousel-shell {
                    position: relative;
                    box-sizing: border-box;
                    overflow: visible;
                }

                .crbw-continue-watching-carousel-content {
                    position: relative;
                    display: flex;
                    align-items: center;
                    width: 100%;
                    box-sizing: border-box;
                }

                .crbw-continue-watching-carousel-viewport {
                    overflow: hidden;
                    scroll-behavior: smooth;
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                    padding: 4px 0 8px;
                    width: 100%;
                    box-sizing: border-box;
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

                .crbw-continue-watching-carousel-track > ${continueWatchingItemSelector} {
                    flex: 0 0 var(--crbw-cw-item-width, 220px) !important;
                    width: var(--crbw-cw-item-width, 220px) !important;
                    min-width: var(--crbw-cw-item-width, 220px) !important;
                    max-width: var(--crbw-cw-item-width, 220px) !important;
                }

                .crbw-continue-watching-carousel-track > ${continueWatchingItemSelector} > * {
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

                @media (max-width: 49.99em) {
                    .crbw-continue-watching-carousel-shell {
                        width: calc(100% - 24px);
                        max-width: calc(100% - 24px);
                    }
                }
            `;

            document.documentElement.appendChild(styleElement);
        }

        function updateContinueWatchingArrowVisibility(track, leftButton, rightButton) {
            const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
            const scrollLeft = track.scrollLeft;
            const threshold = 12;

            leftButton.hidden = scrollLeft <= threshold;
            rightButton.hidden = maxScrollLeft <= threshold || scrollLeft >= maxScrollLeft - threshold;
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

        function syncContinueWatchingCardWidths(viewport, cardsTrack) {
            if (!(viewport instanceof HTMLElement) || !(cardsTrack instanceof HTMLElement)) {
                return;
            }

            const items = Array.from(cardsTrack.querySelectorAll(`:scope > ${continueWatchingItemSelector}`))
                .filter((item) => item instanceof HTMLElement);

            if (items.length === 0) {
                return;
            }

            const gap = 16;
            const visibleItems = getContinueWatchingVisibleItemCount(viewport.clientWidth);
            const availableWidth = Math.max(0, viewport.clientWidth - (gap * (visibleItems - 1)));
            const itemWidth = Math.max(150, Math.floor(availableWidth / visibleItems));

            viewport.style.setProperty('--crbw-cw-item-width', `${itemWidth}px`);
        }

        function getContinueWatchingScrollStep(viewport, cardsTrack) {
            const firstItem = cardsTrack?.querySelector(continueWatchingItemSelector);
            if (!(firstItem instanceof HTMLElement)) {
                return viewport.clientWidth;
            }

            const itemRect = firstItem.getBoundingClientRect();
            const itemWidth = itemRect.width + 16;
            const visibleItems = getContinueWatchingVisibleItemCount(viewport.clientWidth);

            return itemWidth * visibleItems;
        }

        function bindContinueWatchingCarousel(sectionElement, viewport) {
            const leftButton = sectionElement.querySelector('.crbw-continue-watching-arrow-left');
            const rightButton = sectionElement.querySelector('.crbw-continue-watching-arrow-right');
            const cardsTrack = sectionElement.querySelector('.crbw-continue-watching-carousel-track');

            if (!(leftButton instanceof HTMLButtonElement) || !(rightButton instanceof HTMLButtonElement)) {
                return;
            }

            if (!(viewport instanceof HTMLElement) || !(cardsTrack instanceof HTMLElement)) {
                return;
            }

            syncContinueWatchingCardWidths(viewport, cardsTrack);

            if (viewport.dataset.crbwContinueWatchingBound === 'true') {
                updateContinueWatchingArrowVisibility(viewport, leftButton, rightButton);
                return;
            }

            const handleScroll = () => {
                updateContinueWatchingArrowVisibility(viewport, leftButton, rightButton);
            };

            const handleResize = () => {
                syncContinueWatchingCardWidths(viewport, cardsTrack);
                updateContinueWatchingArrowVisibility(viewport, leftButton, rightButton);
            };

            const handleButtonClick = (direction) => {
                const step = getContinueWatchingScrollStep(viewport, cardsTrack) * direction;
                viewport.scrollBy({ left: step, behavior: 'smooth' });
            };

            const handleWheel = (event) => {
                const hasHorizontalWheel = Math.abs(event.deltaX) > 0.5;
                const shouldUseVerticalAsHorizontal = event.shiftKey && Math.abs(event.deltaY) > 0.5;
                const dominantDelta = hasHorizontalWheel
                    ? event.deltaX
                    : shouldUseVerticalAsHorizontal
                        ? event.deltaY
                        : 0;

                if (Math.abs(dominantDelta) < 1) {
                    return;
                }

                const maxScrollLeft = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
                if (maxScrollLeft <= 0) {
                    return;
                }

                const nextScrollLeft = viewport.scrollLeft + dominantDelta;
                const isTryingToScrollPastStart = dominantDelta < 0 && viewport.scrollLeft <= 0;
                const isTryingToScrollPastEnd = dominantDelta > 0 && viewport.scrollLeft >= maxScrollLeft;

                if (isTryingToScrollPastStart || isTryingToScrollPastEnd) {
                    return;
                }

                event.preventDefault();
                viewport.scrollLeft = Math.max(0, Math.min(maxScrollLeft, nextScrollLeft));
                updateContinueWatchingArrowVisibility(viewport, leftButton, rightButton);
            };

            viewport.dataset.crbwContinueWatchingBound = 'true';
            handleScroll();

            viewport.addEventListener('scroll', handleScroll);
            viewport.addEventListener('wheel', handleWheel, { passive: false });
            window.addEventListener('resize', handleResize);
            leftButton.addEventListener('click', () => handleButtonClick(-1));
            rightButton.addEventListener('click', () => handleButtonClick(1));

            if (typeof ResizeObserver === 'function') {
                const resizeObserver = new ResizeObserver(() => {
                    handleResize();
                });

                resizeObserver.observe(viewport);
                resizeObserver.observe(cardsTrack);
                Array.from(cardsTrack.querySelectorAll('img')).forEach((image) => resizeObserver.observe(image));
            }

            Array.from(cardsTrack.querySelectorAll('img')).forEach((image) => {
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
                return;
            }

            let viewport = sectionElement.querySelector('.crbw-continue-watching-carousel-viewport');
            let track = sectionElement.querySelector('.crbw-continue-watching-carousel-track');
            const source = sectionElement.querySelector(continueWatchingSourceSelector);

            if (
                sectionElement.dataset.crbwContinueWatchingEnhanced === 'true'
                && viewport instanceof HTMLElement
                && track instanceof HTMLElement
            ) {
                bindContinueWatchingCarousel(sectionElement, viewport);
                return;
            }

            if (!(track instanceof HTMLElement) && !(source instanceof HTMLElement)) {
                return;
            }

            const itemsHost = track instanceof HTMLElement ? track : source;
            const items = Array.from(itemsHost.querySelectorAll(`:scope > ${continueWatchingItemSelector}`))
                .filter((item) => item instanceof HTMLElement);

            if (items.length === 0) {
                return;
            }

            ensureContinueWatchingStyles();

            let shell = sectionElement.querySelector('.crbw-continue-watching-carousel-shell');
            let content = sectionElement.querySelector('.crbw-continue-watching-carousel-content');
            let leftButton = sectionElement.querySelector('.crbw-continue-watching-arrow-left');
            let rightButton = sectionElement.querySelector('.crbw-continue-watching-arrow-right');

            if (!(shell instanceof HTMLElement)) {
                shell = document.createElement('div');
                shell.className = 'crbw-continue-watching-carousel-shell container--cq5XE';
            } else {
                shell.classList.add('container--cq5XE');
            }

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

            if (source instanceof HTMLElement && source !== track) {
                items.forEach((item) => {
                    if (item.parentElement !== track) {
                        track.appendChild(item);
                    }
                });
                source.style.display = 'none';
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

            if (shell.parentElement !== sectionElement) {
                sectionElement.appendChild(shell);
            }

            sectionElement.dataset.crbwContinueWatchingEnhanced = 'true';
            bindContinueWatchingCarousel(sectionElement, viewport);
        }

        function shouldHideHomepageSection(section, removeAdsEnabled) {
            return getLiveHomepageSectionsShared().shouldHideHomepageSection?.(section, removeAdsEnabled) === true;
        }

        function normalizeDiscoveredSections(inputSections) {
            const customIds = new Set(customDefinitions.map((section) => section.id));
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
                        : customDefinitions.length + index
                });
            });

            return Array.from(discoveredById.values()).sort((left, right) => left.defaultOrder - right.defaultOrder);
        }

        function getHomepageSectionCatalog(discoveredSections) {
            return [
                ...customDefinitions,
                ...normalizeDiscoveredSections(discoveredSections),
                unmatchedBucketDefinition
            ];
        }

        function mergeHomepageSectionsWithDiscovery(inputSections, discoveredSections) {
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

        function shouldRefreshInitialLayout(existingSections, discoveredSections) {
            const merged = mergeHomepageSectionsWithDiscovery(existingSections, discoveredSections);
            const ids = new Set(merged.map((section) => section.id));

            if (!ids.has(HOMEPAGE_UNMATCHED_BUCKET_ID)) {
                return true;
            }

            return normalizeDiscoveredSections(discoveredSections).some((section) => !ids.has(section.id));
        }

        function createInitialLayoutFromPage(currentSectionIds, existingSections, discoveredSections) {
            const existingById = new Map(
                mergeHomepageSectionsWithDiscovery(existingSections, discoveredSections).map((section) => [section.id, section])
            );
            const orderedIds = [];

            currentSectionIds.forEach((id) => {
                if (!orderedIds.includes(id) && id !== HOMEPAGE_UNMATCHED_BUCKET_ID) {
                    orderedIds.push(id);
                }
            });

            mergeHomepageSectionsWithDiscovery(existingSections, discoveredSections).forEach((section) => {
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

        function getDynamicFeedWrapper() {
            return document.querySelector(dynamicFeedWrapperSelector);
        }

        function getLayoutStagingContainer() {
            let container = document.getElementById(HOMEPAGE_STAGING_CONTAINER_ID);

            if (!container) {
                container = document.createElement('div');
                container.id = HOMEPAGE_STAGING_CONTAINER_ID;
                container.style.display = 'none';
                document.body.appendChild(container);
            }

            return container;
        }

        function getHeroCarouselRoots() {
            const resolvedRoots = new Set();
            const heroCandidates = Array.from(document.querySelectorAll(heroCarouselSelector))
                .filter((element) => element instanceof HTMLElement);

            heroCandidates.forEach((element) => {
                const closestRoot = element.closest('[role="region"][aria-label="Hero Carousel"], .hero-carousel--1-yhX, [class^="hero-carousel--"], [class*=" hero-carousel--"]');
                if (closestRoot instanceof HTMLElement) {
                    resolvedRoots.add(closestRoot);
                    return;
                }

                resolvedRoots.add(element);
            });

            return Array.from(resolvedRoots).filter((element, index, elements) =>
                elements.findIndex((candidate) => candidate === element || candidate.contains(element)) === index
            );
        }

        function isHeroCarouselAdSlide(slide) {
            if (!(slide instanceof HTMLElement)) {
                return false;
            }

            if (slide.querySelector('.hero-branded-card--6-HBi')) {
                return true;
            }

            const ctaLinks = Array.from(slide.querySelectorAll('a[href]'));
            return ctaLinks.some((link) => {
                const href = link.getAttribute('href') || '';

                if (!href) {
                    return false;
                }

                if (href.startsWith('https://manga.sng.link/') || href.startsWith('https://store.crunchyroll.com/')) {
                    return true;
                }

                return false;
            });
        }

        function getHeroCarouselSlides(heroCarousel) {
            return Array.from(heroCarousel.querySelectorAll('[role="group"][aria-roledescription="Slide"]'))
                .filter((element) => element instanceof HTMLElement);
        }

        function getHeroCarouselPaginationButtons(heroCarousel) {
            return Array.from(heroCarousel.querySelectorAll('button[data-index]'))
                .filter((element) => element instanceof HTMLButtonElement);
        }

        function getActiveHeroCarouselIndex(heroCarousel) {
            const activeButton = getHeroCarouselPaginationButtons(heroCarousel)
                .find((button) => button.getAttribute('aria-current') === 'true');

            if (activeButton) {
                return Number(activeButton.dataset.index);
            }

            const slides = getHeroCarouselSlides(heroCarousel);
            return slides.findIndex((slide) => Array.from(slide.classList).some((className) => className.includes('is-active')));
        }

        function getWrappedHeroCarouselIndex(length, index) {
            if (length <= 0) {
                return -1;
            }

            return ((index % length) + length) % length;
        }

        function getNextAllowedHeroCarouselIndex(currentIndex, step, slideCount, adIndexes) {
            if (slideCount <= 0) {
                return -1;
            }

            const blockedIndexes = new Set(adIndexes);
            if (blockedIndexes.size >= slideCount) {
                return -1;
            }

            for (let offset = 1; offset <= slideCount; offset += 1) {
                const candidateIndex = getWrappedHeroCarouselIndex(slideCount, currentIndex + (offset * step));
                if (!blockedIndexes.has(candidateIndex)) {
                    return candidateIndex;
                }
            }

            return -1;
        }

        function goToHeroCarouselIndex(heroCarousel, targetIndex) {
            const targetButton = getHeroCarouselPaginationButtons(heroCarousel)
                .find((button) => Number(button.dataset.index) === targetIndex);

            if (targetButton) {
                targetButton.click();
            }
        }

        function ensureHeroCarouselAdController(heroCarousel) {
            if (heroCarousel.__crbwHeroAdController) {
                return heroCarousel.__crbwHeroAdController;
            }

            const controller = {
                removeAdsEnabled: false,
                adIndexes: [],
                syncActiveSlide() {
                    if (!controller.removeAdsEnabled) {
                        return;
                    }

                    const slides = getHeroCarouselSlides(heroCarousel);
                    const activeIndex = getActiveHeroCarouselIndex(heroCarousel);
                    if (!Number.isInteger(activeIndex) || activeIndex < 0 || activeIndex >= slides.length) {
                        return;
                    }

                    if (!controller.adIndexes.includes(activeIndex)) {
                        return;
                    }

                    const nextIndex = getNextAllowedHeroCarouselIndex(activeIndex, 1, slides.length, controller.adIndexes);
                    if (nextIndex >= 0 && nextIndex !== activeIndex) {
                        window.requestAnimationFrame(() => goToHeroCarouselIndex(heroCarousel, nextIndex));
                    }
                }
            };

            heroCarousel.addEventListener('click', (event) => {
                if (!controller.removeAdsEnabled) {
                    return;
                }

                const target = event.target instanceof Element ? event.target.closest('button') : null;
                if (!(target instanceof HTMLButtonElement)) {
                    return;
                }

                const label = String(target.getAttribute('aria-label') || '');
                const slides = getHeroCarouselSlides(heroCarousel);
                const activeIndex = getActiveHeroCarouselIndex(heroCarousel);

                if (!Number.isInteger(activeIndex) || slides.length === 0) {
                    return;
                }

                if (/^next item$/i.test(label)) {
                    const nextIndex = getNextAllowedHeroCarouselIndex(activeIndex, 1, slides.length, controller.adIndexes);
                    const immediateIndex = getWrappedHeroCarouselIndex(slides.length, activeIndex + 1);

                    if (nextIndex >= 0 && nextIndex !== immediateIndex) {
                        event.preventDefault();
                        event.stopPropagation();
                        goToHeroCarouselIndex(heroCarousel, nextIndex);
                    }
                    return;
                }

                if (/^previous item$/i.test(label)) {
                    const previousIndex = getNextAllowedHeroCarouselIndex(activeIndex, -1, slides.length, controller.adIndexes);
                    const immediateIndex = getWrappedHeroCarouselIndex(slides.length, activeIndex - 1);

                    if (previousIndex >= 0 && previousIndex !== immediateIndex) {
                        event.preventDefault();
                        event.stopPropagation();
                        goToHeroCarouselIndex(heroCarousel, previousIndex);
                    }
                }
            }, true);

            const observer = new MutationObserver(() => {
                controller.syncActiveSlide();
            });
            observer.observe(heroCarousel, {
                attributes: true,
                subtree: true,
                attributeFilter: ['class', 'aria-current']
            });

            heroCarousel.__crbwHeroAdController = controller;
            return controller;
        }

        function applyHeroCarouselAdFiltering(heroCarousel, removeAdsEnabled) {
            const slides = getHeroCarouselSlides(heroCarousel);
            const paginationButtons = getHeroCarouselPaginationButtons(heroCarousel);
            const adIndexes = [];

            slides.forEach((slide, index) => {
                const isAdSlide = isHeroCarouselAdSlide(slide);
                const shouldHideSlide = removeAdsEnabled && isAdSlide;
                const slideContent = slide.querySelector('.hero-branded-card--6-HBi, .hero-content-card--y4tTb');

                if (isAdSlide) {
                    adIndexes.push(index);
                }

                if (shouldHideSlide && slideContent instanceof HTMLElement) {
                    slideContent.style.setProperty('visibility', 'hidden', 'important');
                    slideContent.style.setProperty('pointer-events', 'none', 'important');
                    slideContent.style.setProperty('opacity', '0', 'important');
                    slide.setAttribute('data-crbw-hero-ad-hidden', 'true');
                } else {
                    if (slideContent instanceof HTMLElement) {
                        slideContent.style.removeProperty('visibility');
                        slideContent.style.removeProperty('pointer-events');
                        slideContent.style.removeProperty('opacity');
                    }
                    slide.removeAttribute('data-crbw-hero-ad-hidden');
                }
            });

            paginationButtons.forEach((button, index) => {
                const shouldHideButton = removeAdsEnabled && adIndexes.includes(index);

                if (shouldHideButton) {
                    button.style.setProperty('display', 'none', 'important');
                    button.setAttribute('data-crbw-hero-ad-hidden', 'true');
                } else {
                    button.style.removeProperty('display');
                    button.removeAttribute('data-crbw-hero-ad-hidden');
                }
            });

            const controller = ensureHeroCarouselAdController(heroCarousel);
            controller.removeAdsEnabled = removeAdsEnabled;
            controller.adIndexes = adIndexes;
            controller.syncActiveSlide();

            return {
                slideCount: slides.length,
                adIndexes
            };
        }

        function applyHeroCarouselVisibility(wrapper, hideHeroCarouselEnabled, removeAdsEnabled) {
            const stagingContainer = getLayoutStagingContainer();
            const heroCarousels = getHeroCarouselRoots();

            document.documentElement.dataset.crbwHeroCarouselEnabled = hideHeroCarouselEnabled ? 'true' : 'false';
            document.documentElement.dataset.crbwHeroCarouselFound = String(heroCarousels.length);
            document.documentElement.dataset.crbwHeroCarouselAdsEnabled = removeAdsEnabled ? 'true' : 'false';

            if (heroCarousels.length === 0) {
                const payload = {
                    enabled: hideHeroCarouselEnabled,
                    removeAdsEnabled,
                    found: 0
                };
                const payloadSignature = JSON.stringify(payload);
                if (payloadSignature !== lastHeroCarouselApplySignature) {
                    lastHeroCarouselApplySignature = payloadSignature;
                    logLayoutDebug('Hero Carousel Apply', payload);
                    console.warn('[CRBW][HomepageLayout] Hero Carousel Apply', payload);
                }
                return;
            }

            const filterSummaries = [];

            heroCarousels.forEach((heroCarousel) => {
                filterSummaries.push(applyHeroCarouselAdFiltering(heroCarousel, removeAdsEnabled));

                if (hideHeroCarouselEnabled) {
                    if (heroCarousel.parentElement !== stagingContainer) {
                        stagingContainer.appendChild(heroCarousel);
                    }
                    heroCarousel.style.setProperty('display', 'none', 'important');
                    heroCarousel.setAttribute('data-crbw-hero-carousel-hidden', 'true');
                } else {
                    if (
                        heroCarousel.parentElement === stagingContainer
                        && wrapper instanceof HTMLElement
                        && wrapper.parentElement instanceof HTMLElement
                    ) {
                        wrapper.parentElement.insertBefore(heroCarousel, wrapper);
                    }

                    heroCarousel.style.removeProperty('display');
                    heroCarousel.removeAttribute('data-crbw-hero-carousel-hidden');
                }
            });

            const payload = {
                enabled: hideHeroCarouselEnabled,
                removeAdsEnabled,
                found: heroCarousels.length,
                filters: filterSummaries,
                parents: heroCarousels.map((heroCarousel) => ({
                    id: heroCarousel.parentElement?.id || '',
                    className: typeof heroCarousel.parentElement?.className === 'string'
                        ? heroCarousel.parentElement.className
                        : '',
                    classList: Array.from(heroCarousel.classList)
                }))
            };
            const payloadSignature = JSON.stringify(payload);
            if (payloadSignature !== lastHeroCarouselApplySignature) {
                lastHeroCarouselApplySignature = payloadSignature;
                logLayoutDebug('Hero Carousel Apply', payload);
            }
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

            if (element.getAttribute('data-id')) {
                return true;
            }

            if (element.querySelector(sectionHeadingSelector)) {
                return true;
            }

            if (element.querySelector(sectionContentSelector)) {
                return true;
            }

            return false;
        }

        function getSectionLabel(element) {
            const explicitId = element.getAttribute('data-crbw-homepage-section');
            const customDefinition = customDefinitions.find((section) => section.id === explicitId);
            if (customDefinition) {
                return customDefinition.label;
            }

            const heading = element.querySelector(sectionHeadingSelector);
            if (heading?.textContent) {
                return heading.textContent.trim();
            }

            const labelledElement = element.querySelector('[aria-label]');
            const ariaLabel = labelledElement?.getAttribute('aria-label')?.trim();
            if (ariaLabel && !/^scroll /i.test(ariaLabel)) {
                return ariaLabel;
            }

            if (element.querySelector('iframe, [id*="ad"], [class*="ad-"], [class*="advert"]')) {
                return 'Ad Section';
            }

            return 'Untitled Section';
        }

        function getSectionId(element, duplicateTracker) {
            const explicitId = element.getAttribute('data-crbw-homepage-section');
            if (explicitId) {
                return explicitId;
            }

            const dataId = element.getAttribute('data-id');
            if (dataId) {
                return `builtin-dataid-${dataId}`;
            }

            const label = getSectionLabel(element);
            const baseSlug = slugify(label) || 'untitled-section';
            const occurrence = (duplicateTracker.get(baseSlug) || 0) + 1;
            duplicateTracker.set(baseSlug, occurrence);

            return occurrence === 1
                ? `builtin-${baseSlug}`
                : `builtin-${baseSlug}-${occurrence}`;
        }

        function collectHomepageSections() {
            const wrapper = getDynamicFeedWrapper();
            if (!(wrapper instanceof HTMLElement)) {
                logLayoutDebug('dynamic-feed-wrapper not found', null);
                return [];
            }

            const directChildren = Array.from(wrapper.children).filter((child) => child instanceof HTMLElement);
            const stagingChildren = Array.from(getLayoutStagingContainer()?.children || []).filter((child) => child instanceof HTMLElement);
            const candidateElements = [
                ...directChildren.filter((child) => child.hasAttribute('data-crbw-homepage-section') || isBuiltinHomepageSection(child)),
                ...stagingChildren.filter((child) => child.hasAttribute('data-crbw-homepage-section'))
            ];
            const duplicateTracker = new Map();
            const sections = candidateElements.map((element, index) => ({
                id: getSectionId(element, duplicateTracker),
                label: getSectionLabel(element),
                kind: element.hasAttribute('data-crbw-homepage-section') ? 'custom' : 'builtin',
                defaultOrder: index,
                element
            }));

            const collectionSummary = {
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
            };
            const collectionSignature = JSON.stringify(collectionSummary);

            if (collectionSignature !== lastLoggedDiscoveredSignature) {
                lastLoggedDiscoveredSignature = collectionSignature;
                logLayoutDebug('Collected Homepage Sections', collectionSummary);
            }

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
                    let shouldPersist = JSON.stringify(storedDiscovered) !== JSON.stringify(normalizedDiscovered);

                    if (shouldRefreshInitialLayout(existingSections, normalizedDiscovered)) {
                        const nextLayout = createInitialLayoutFromPage(
                            currentSectionIds,
                            existingSections,
                            normalizedDiscovered
                        );
                        if (JSON.stringify(existingSections) !== JSON.stringify(nextLayout)) {
                            nextItems[HOMEPAGE_SECTIONS_STORAGE_KEY] = nextLayout;
                            shouldPersist = true;
                        }
                    }

                    if (!shouldPersist) {
                        return;
                    }

                    runWithValidContext(() => chrome.storage.local.set(nextItems));
                    logLayoutDebug('Persisted Homepage Layout State', nextItems);
                }
            ));
        }

        function applyHomepageLayout() {
            const wrapper = getDynamicFeedWrapper();
            if (!(wrapper instanceof HTMLElement)) {
                return;
            }

            const discoveredSections = collectHomepageSections();
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

            runWithValidContext(() => chrome.storage.local.get(
                [
                    HOMEPAGE_SECTIONS_STORAGE_KEY,
                    HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY,
                    getLiveHomepageSectionsShared().REMOVE_CRUNCHYROLL_ADS_SETTING_KEY || 'removeCrunchyrollAds',
                    hideHeroCarouselSettingKey
                ],
                (items) => {
                    if (!isExtensionContextValid()) {
                        return;
                    }

                    const normalizedDiscovered = normalizeDiscoveredSections(discoveredSections);
                    const mergedSections = mergeHomepageSectionsWithDiscovery(items[HOMEPAGE_SECTIONS_STORAGE_KEY], normalizedDiscovered);
                    const configById = new Map(mergedSections.map((section) => [section.id, section]));
                    const unmatchedBucket = configById.get(HOMEPAGE_UNMATCHED_BUCKET_ID);
                    const removeAdsEnabled = items[getLiveHomepageSectionsShared().REMOVE_CRUNCHYROLL_ADS_SETTING_KEY || 'removeCrunchyrollAds'] === true;

                    applyHeroCarouselVisibility(wrapper, items[hideHeroCarouselSettingKey] === true, removeAdsEnabled);

                    discoveredSections.forEach((section) => {
                        const config = configById.get(section.id);
                        const isUnmatchedBuiltIn = section.kind === 'builtin' && !config;
                        const shouldShow = config
                            ? config.enabled !== false
                            : unmatchedBucket
                                ? unmatchedBucket.enabled !== false
                                : true;

                        section.element.style.display = shouldShow && !shouldHideHomepageSection(section, removeAdsEnabled) ? '' : 'none';
                        section.element.style.removeProperty('order');
                    });

                    const orderedVisibleSections = discoveredSections
                        .filter((section) => section.element.style.display !== 'none')
                        .sort((left, right) => {
                            const leftConfig = configById.get(left.id);
                            const rightConfig = configById.get(right.id);
                            const leftOrder = leftConfig
                                ? leftConfig.order
                                : unmatchedBucket
                                    ? unmatchedBucket.order + left.defaultOrder
                                    : left.defaultOrder;
                            const rightOrder = rightConfig
                                ? rightConfig.order
                                : unmatchedBucket
                                    ? unmatchedBucket.order + right.defaultOrder
                                    : right.defaultOrder;
                            return leftOrder - rightOrder;
                        });

                    const currentVisibleOrder = Array.from(wrapper.children)
                        .filter((child) => child instanceof HTMLElement && child.style.display !== 'none')
                        .map((child) => child.getAttribute('data-crbw-homepage-section') || child.getAttribute('data-id') || '');
                    const desiredVisibleOrder = orderedVisibleSections.map((section) =>
                        section.element.getAttribute('data-crbw-homepage-section') || section.element.getAttribute('data-id') || ''
                    );

                    if (JSON.stringify(currentVisibleOrder) !== JSON.stringify(desiredVisibleOrder)) {
                        orderedVisibleSections.forEach((section) => {
                            wrapper.appendChild(section.element);
                        });
                    }

                    orderedVisibleSections.forEach((section) => {
                        if (
                            section.kind === 'builtin'
                            && normalizeSectionLabel(section.label) === continueWatchingLabel
                        ) {
                            enhanceContinueWatchingCarousel(section.element);
                        }
                    });

                    const visibleSummary = orderedVisibleSections.map((section) => ({
                        id: section.id,
                        label: section.label,
                        order: configById.get(section.id)?.order ?? section.defaultOrder,
                        kind: section.kind
                    }));
                    const visibleSignature = JSON.stringify(visibleSummary);

                    if (visibleSignature !== lastVisibleSignature) {
                        lastVisibleSignature = visibleSignature;
                        logLayoutDebug('Visible Homepage Sections After Apply', visibleSummary);
                    }
                }
            ));
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
                if (!isExtensionContextValid()) {
                    return;
                }

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
                    || changes[getLiveHomepageSectionsShared().REMOVE_CRUNCHYROLL_ADS_SETTING_KEY || 'removeCrunchyrollAds']
                    || changes[hideHeroCarouselSettingKey]
                ) {
                    scheduleApply();
                }
            }));

            if (!refreshIntervalId) {
                refreshIntervalId = window.setInterval(() => {
                    if (!isExtensionContextValid()) {
                        window.clearInterval(refreshIntervalId);
                        refreshIntervalId = null;
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
    }

    const HOMEPAGE_SECTIONS_STORAGE_KEY = homepageSectionsShared.HOMEPAGE_SECTIONS_STORAGE_KEY;
    const HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY = homepageSectionsShared.HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY || 'homepageDiscoveredSections';
    const HOMEPAGE_STAGING_CONTAINER_ID = homepageSectionsShared.HOMEPAGE_STAGING_CONTAINER_ID || 'crbw-homepage-staging';
    const HOMEPAGE_UNMATCHED_BUCKET_ID = homepageSectionsShared.HOMEPAGE_UNMATCHED_BUCKET_ID || 'unmatched-sections-bucket';
    const SERIES_SECTION_IDS = {
        popular: homepageSectionsShared.HOMEPAGE_SECTION_IDS.TOP_SERIES_POPULAR,
        reviewed: homepageSectionsShared.HOMEPAGE_SECTION_IDS.TOP_SERIES_REVIEWED
    };
    let homepageSectionsConfig = homepageSectionsShared.getDefaultHomepageSections();
    let previousEnabledState = null;

    // =============================================================
    // === 0. LANGUAGE DETECTION AND TRANSLATION LOGIC ===
    // =============================================================

    /**
     * Determine the page language from the URL and return translated titles.
     * If there is no language prefix (/es/, /pt/, etc.), default to 'en'.
     * @returns {object} Object with translated `popular` and `reviewed` titles.
     */
    function getTitlesByLanguage() {
        const urlPath = window.location.pathname;
        let langCode = 'en'; // Default to English

    // Language code mapping
    const match = urlPath.match(/^\/(es|es-es|pt|pt-br|pt-pt|fr|de|id|it|ru|ar|hi)\//);
    
    if (match) {
                // Use only the primary language code for the translation lookup
                langCode = match[1].startsWith('es') ? 'es' : 
                        match[1].startsWith('pt') ? 'pt' : 
                        match[1].startsWith('fr') ? 'fr' : 
                        match[1].startsWith('de') ? 'de' :
                        match[1].startsWith('id') ? 'id' :
                        match[1].startsWith('it') ? 'it' :
                        match[1].startsWith('ru') ? 'ru' :
                        match[1].startsWith('ar') ? 'ar' :
                        match[1].startsWith('hi') ? 'hi' : 'en';
            }     
        // If there is no match (for example, /discover), keep `en`.

        // Translation map
        const translations = {
            'en': {
                popular: "The 10 Most Popular Anime Series of the Season",
                reviewed: "The 10 Best-Reviewed Anime of the Season"
            },
            'es': {
                popular: "The 10 Most Popular Anime Series of the Season",
                reviewed: "The 10 Best-Reviewed Anime of the Season"
            },
            'pt': {
                popular: "As 10 séries de anime mais populares da temporada",
                reviewed: "Os 10 animes mais bem avaliados da temporada"
            },
            'fr': {
                popular: "Les 10 séries d'anime les plus populaires de la saison",
                reviewed: "Les 10 animes les mieux notés de la saison"
            },
            'de': {
                popular: "Die 10 beliebtesten Anime-Serien der Saison",
                reviewed: "Die 10 am besten bewerteten Anime der Saison"
            },
            'id': {
                popular: "10 serial anime paling populer musim ini",
                reviewed: "10 anime dengan ulasan terbaik musim ini"
            },
            'it': {
                popular: "Le 10 serie anime più popolari della stagione",
                reviewed: "I 10 anime più recensiti della stagione"
            },
            'ru': {
                popular: "10 самых популярных аниме-сериалов сезона",
                reviewed: "10 аниме-сериалов с лучшими отзывами за сезон"
            },
            'ar': {
                popular: "أكثر 10 مسلسلات أنمي شعبية هذا الموسم",
                reviewed: "أفضل 10 مسلسلات أنمي تقييماً هذا الموسم"
            },
            'hi': { // Hindi
                popular: "सीज़न की 10 सबसे लोकप्रिय एनीमे सीरीज़",
                reviewed: "सीज़न के 10 सर्वश्रेष्ठ-रेटेड एनीमे"
            }
        };

        const titles = translations[langCode] || translations['en'];
        console.log(`ℹ️ Detected language: ${langCode}. Titles used: ${titles.popular} / ${titles.reviewed}`);
        return titles;
    }

    // =============================================================
    // === 1. ASYNC DATA LOADING (SIMPLIFIED) ===
    // =============================================================
    
    let animesDB = [];
    let loadedSeasonLabel = "";
    let shouldShowSeasonLabel = false;
    let seasonalSource = "";
    
    try {
        const response = await chrome.runtime.sendMessage({ action: "fetchCurrentSeasonCatalog" });
        if (!response?.success) {
            throw new Error(response?.error || 'Failed to load current season catalog.');
        }

        animesDB = Array.isArray(response.data) ? response.data : [];
        loadedSeasonLabel = response.seasonLabel || "";
        seasonalSource = response.source || "";

        console.log(`✅ Anime database loaded (${loadedSeasonLabel}). Total anime entries: ${animesDB.length}`);

        if (response.cacheStatus === 'stale-fallback') {
            shouldShowSeasonLabel = true;
            console.warn(`⚠️ Live seasonal data was unavailable. Using cached ${loadedSeasonLabel} data instead.`);
        }

        if (response.cacheStatus === 'live-failed') {
            console.warn(`⚠️ Live seasonal data could not be loaded: ${response.warning || 'Unknown error.'}`);
            return;
        }

    } catch (error) {
        console.error("❌ Fatal seasonal data loading error. The script is stopping.", error);
        return; // Stop the script if loading fails
    }

    const titles = getTitlesByLanguage();
    const seasonSuffix = shouldShowSeasonLabel && loadedSeasonLabel ? ` (${loadedSeasonLabel})` : "";

    // =================================================================
    // === 2. DATA PROCESSING LOGIC (SORTING AND MAPPING) ===
    // ================================================================= */

    function normalizeCatalogEntry(item) {
        return {
            Title: item?.Title ?? item?.title ?? "",
            Score: Number(item?.Score ?? item?.score ?? 0),
            Popularity: Number(item?.Popularity ?? item?.popularity ?? 0),
            Type: item?.Type ?? item?.type ?? "TV",
            Streaming: item?.Streaming ?? item?.streaming ?? "Crunchyroll",
            Image: item?.Image ?? item?.image ?? "",
            URL: item?.URL ?? item?.url ?? ""
        };
    }

    function generateTopLists(data) {
        const normalizedData = data
            .map(normalizeCatalogEntry)
            .filter(item => item.Title && item.URL);
        const crunchyrollData = normalizedData.filter(item => item.Streaming === "Crunchyroll");
        const sourceData = crunchyrollData.length > 0 ? crunchyrollData : normalizedData;
        
        if (crunchyrollData.length === 0 && normalizedData.length > 0) {
            console.warn("⚠️ Seasonal data did not include explicit Crunchyroll tags. Rendering the normalized dataset instead.");
        }

        if (sourceData.length === 0) {
            console.warn("⚠️ Warning: After normalization, there is no anime data to show.");
            return { TOP10_POPULAR: [], TOP10_SCORE: [] };
        }

        const formatItem = (item, index) => ({
            rank: index + 1,
            title: item.Title,
            image: item.Image,
            // Ensure the URL is relative so it works inside Crunchyroll
            url: item.URL && item.URL.startsWith('http') 
                 ? item.URL.replace(/^https?:\/\/www\.crunchyroll\.com/, '')
                 : item.URL
        });

        // 1. Generate the Top 10 by popularity
        const sortedByPopularity = [...sourceData].sort((a, b) => {
            if (seasonalSource === 'mal') {
                return a.Popularity - b.Popularity;
            }

            return b.Popularity - a.Popularity;
        });
        const TOP10_POPULAR = sortedByPopularity.slice(0, 10).map(formatItem);

        // 2. Generate the Top 10 by score
        const sortedByScore = [...sourceData].sort((a, b) => b.Score - a.Score);
        const TOP10_SCORE = sortedByScore.slice(0, 10).map(formatItem);

        return { TOP10_POPULAR, TOP10_SCORE };
    }

    const { TOP10_POPULAR: TOP10, TOP10_SCORE: TOP10Score } = generateTopLists(animesDB);
    
    // Final check: continue if at least one list has data
    if (TOP10.length === 0 && TOP10Score.length === 0) {
        console.error("❌ Could not generate any Top 10 list (insufficient data after Crunchyroll filtering).");
        return; 
    }
    
    // *****************************************************************
    // === 3. HTML AND CSS BUILD ===
    // *****************************************************************
    
    // === 3.1. EXTERNAL FONT INJECTION ===
    function injectFontLinks(htmlString) {
        if (!document.querySelector('link[href*="Cal+Sans"]')) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlString;
            
            Array.from(tempDiv.children).forEach(link => {
                document.head.appendChild(link);
            });
        }
    }

    const fontLinks = `
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cal+Sans&family=Michroma&display=swap" rel="stylesheet">
    `;
    injectFontLinks(fontLinks);

    /* === 3.2. CSS STYLES (shared by both containers) === */
    const css = `

    .responsive-grid #footer_menu, .responsive-grid #template_container, .responsive-grid .site-header>.content
    Specificity: (1,1,0)
    {
    max-width: 100rem;
    }

    /* Content Wrapper (Ampliar vista de Elementnos) */
    .content-wrapper--MF5LS {
    --content-width: 100rem;
    }

    /* Carrusel Scroller (Ocultar siguientes elementos) */
    .carousel-scroller__card--4Lrk-[inert] {
    opacity: 0;
    }
    
    /* Contenedor principal de la tarjeta */
    .browse-card--esJdT {
    border-radius: 8px;
    }

    /* Contenedor de la imagen dentro de la tarjeta */
    .browse-card__poster-wrapper--pU-AW {
        border-radius: 8px;
        overflow: hidden;
    }

    .crbw-homepage-section {
      --crbw-homepage-inline-gutter: var(--crbw-detected-homepage-inline-gutter, clamp(40px, 4vw, 56px));
      display: block !important;
      width: 100%;
      height: fit-content !important;
      block-size: fit-content !important;
      max-height: max-content !important;
      min-height: 0 !important;
      min-block-size: 0 !important;
      margin-bottom: 0 !important;
      padding-bottom: 0 !important;
      align-self: start !important;
    }

    .crbw-homepage-section > * {
      height: fit-content !important;
      block-size: fit-content !important;
      min-height: 0 !important;
      min-block-size: 0 !important;
      box-sizing: border-box;
    }

    /* Contenedores principales */
    #top10-container, #top10score-container {
      position: relative; 
      margin: 0px 0px 8px 0px; 
      max-width: none; 
      overflow: visible; 
      font-family: var(--body-font-family, 'Arial', sans-serif); 
      padding: 0; 
    }

    /* Contenedores de Título */
    #top10-title-container, #top10score-title-container {
        margin: 12px 0px 0px 0px; 
        max-width: none; 
    }
    .feed-header--ihqym {
        align-items: flex-start;
        display: flex;
        flex-wrap: wrap;
        padding-block-end: .25rem; 
        position: relative;
    }
    @media (min-width: 35.5em) {
        .feed-header--ihqym {
            padding-block-end: .35rem; 
        }
    }
    
    /* Pistas de scroll */
    .top10-track, .top10score-track {
      display: flex;
      align-items: flex-start; 
      overflow-x: auto;
      overflow-y: hidden;
      overscroll-behavior-x: contain;
      scroll-behavior: smooth;
      scrollbar-width: none;
      padding-left: 0px; 
      padding-right: 0px; 
      margin-left: 0px; 
      padding-bottom: 0px; 
      position: relative; 
    }
    .top10-track::-webkit-scrollbar, .top10score-track::-webkit-scrollbar { display: none; }
    
    /* Ítems del carrusel */
    .top10-item, .top10score-item {
        margin: 0 20px; 
        flex: 0 0 auto; 
        width: calc(20% - 20px); 
        min-width: 140px; 
    }
    .top10-item:first-child, .top10score-item:first-child { margin-left: 0; }
    .top10-item:last-child, .top10score-item:last-child { margin-right: 0; } 

    .top10-link, .top10score-link {
        text-decoration: none; 
        color: inherit;
        display: block; 
        width: 100%;
        height: 100%;
    }

    /* ESTILO DE NÚMEROS: CAL SANS */
    .top10-rank-sidebar, .top10score-rank-sidebar {
        position: absolute; 
        bottom: 12px; 
        left: 0; 
        
        font-family: 'Cal Sans', 'Crunchyroll Atyp Bold', 'Impact', sans-serif; 
        font-weight: 900; 
        letter-spacing: -3px; 
        
        color: #fff; 
        opacity: 0.7; 
        transition: opacity 0.2s;
        font-size: 6.5em; 
        z-index: 10;
        
        padding: 0 5px; 
        line-height: 1; 
        text-shadow: 0 0 5px rgba(0, 0, 0, 0.9);
    }
    .top10-item:hover .top10-rank-sidebar, .top10score-item:hover .top10score-rank-sidebar { 
        opacity: 1; 
    }

    /* Tarjeta Individual */
    .top10-card, .top10score-card {
      position: relative; 
      border-radius: 8px; 
      overflow: hidden;
      background: #1a1a1a; 
      cursor: pointer;
      transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); 
      
      display: flex;
      flex-direction: column; 
      height: auto; 
    }
    .top10-card:hover, .top10score-card:hover { 
      transform: scale(1.05); 
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.2); 
    }
    
    .top10-card img, .top10score-card img {
      width: 100%;
      height: auto; 
      aspect-ratio: 2 / 3; 
      object-fit: cover;
      display: block;
    }
    
    .top10-title, .top10score-title {
      font-family: 'Crunchyroll Atyp', 'Cal Sans', Lato, Helvetica Neue, helvetica, sans-serif; 
      font-weight: 500;
      text-align: center; 
      position: static; 
      width: 100%;
      padding: 12px 10px; 
      background: #1a1a1a; 
      color: #fff;
      font-size: 0.9em; 
      line-height: 1.3;
      box-sizing: border-box; 
      min-height: 40px; 
      
      white-space: nowrap;          
      overflow: hidden;           
      text-overflow: ellipsis;


      /* text-transform: uppercase;   MAYUS */
    }
    
    /* ESTILOS DE FLECHAS: */
    .arrow-btn {
      position: absolute;
      top: calc(50% + 10px);
      transform: translateY(-50%);
      background: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0));
      border: none;
      color: #fff;
      font-size: 3em;
      padding: 0;
      width: 50px;
      cursor: pointer;
      z-index: 20;
      height: calc(100% - 20px);
      opacity: 0.7;
      transition: opacity 0.3s, background-color 0.3s;
      outline: none;
    }

    .arrow-right {
      background: linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0));
    }

    .arrow-btn span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      line-height: 1;
    }

    .arrow-left span { left: 10px; }
    .arrow-right span { right: 10px; }

    .arrow-btn:hover { opacity: 1; color: #fff; }

    .arrow-btn:disabled {
      opacity: 0 !important;
      cursor: default;
      pointer-events: none;
    }

    .arrow-left { left: 10px; }
    .arrow-right { right: 10px; }
    
    /* === MEDIA QUERIES (Unificados) === */

    @media (min-width: 1600px) {
        .top10-item, .top10score-item { width: calc(15% - 5px); }
        .top10-rank-sidebar, .top10score-rank-sidebar { font-size: 10em; }
    }

    @media (max-width: 1599px) and (min-width: 1400px) {
        .top10-item, .top10score-item { width: calc(19% - 15px); }
        .top10-rank-sidebar, .top10score-rank-sidebar { font-size: 7em; }
    }
    
    @media (max-width: 1366px) and (min-width: 1024px) {
        .top10-item, .top10score-item {
            width: calc(20% - 27px);
            margin: 0 15px;
            min-width: 160px; 
        }
    }

    @media (max-width: 1023px) and (min-width: 768px) {
        .top10-item, .top10score-item {
            width: calc(24% - 1px);
            margin: 0 5px;
            min-width: 159px;
        }
    }

    @media (max-width: 767px) and (min-width: 568px) {
        .top10-item, .top10score-item {
           width: calc(34% - 11px);
           margin: 0 5px;
           min-width: 148px; 
        }
    }
    
    @media (max-width: 567px) {
        #top10-container, #top10-title-container .container--cq5XE,
        #top10score-container, #top10score-title-container .container--cq5XE {
            padding: 0 20px;
        }
        
        .arrow-left { left: 0; }
        .arrow-right { right: 0; }
        
        .top10-item, .top10score-item {
            width: calc(52% - 12px); 
            min-width: 133px; 
            margin: 0 5px;
        }
        .top10-rank-sidebar, .top10score-rank-sidebar { font-size: 5em; }
    }
    `;

    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);

    getLiveHomepageSectionsShared().ensureHomepageSectionInlineGutterWatcher?.();

    /* === 3.3. CONSTRUCCIÓN DEL CARRUSEL 1: TOP 10 VIEWS (Popularidad) === */
    // Solo construimos si hay datos
    let titleContainerViews = null;
    let carouselContainerViews = null;
    let trackViews = null;
    let sectionWrapperViews = null;

    if (TOP10.length > 0) {
        titleContainerViews = document.createElement("div");
        titleContainerViews.id = "top10-title-container";
        titleContainerViews.innerHTML = `
            <div class="container--cq5XE">
                <div class="feed-header--ihqym">
                    <h2 class="heading--nKNOf heading--is-bold--DUljF heading--is-m--7bv3g heading--is-family-type-two--U8YNl feed-header__title--DMRD6">
                        ${titles.popular}${seasonSuffix}
                    </h2>
                </div>
            </div>
        `;

        carouselContainerViews = document.createElement("section");
        carouselContainerViews.id = "top10-container";
        carouselContainerViews.innerHTML = `
            <div class="container--cq5XE container--has-no-gutters--WqnNJ">
                <div class="wide-cards-carousel__container--IMk9g">
                    <div class="carousel--uuuFa wide-cards-carousel--Z62BE wide-cards-carousel--in-browse-layout--k-yJA" aria-label="${titles.popular}${seasonSuffix}" role="region" aria-roledescription="Carousel">
                        <div class="container--cq5XE wide-cards-carousel__content-wrapper--oUiNK">
                            <button class="arrow-btn arrow-left" data-track-id="top10-track" aria-label="Anterior"><span>&#10094;</span></button>
                            <div class="wide-cards-carousel__cards-frame--5t5GO">
                                <div class="carousel-scroller--2cYvp">
                                    <div class="carousel-scroller__wrapper--bCIvZ">
                                        <div class="top10-track"></div>
                                    </div>
                                </div>
                            </div>
                            <button class="arrow-btn arrow-right" data-track-id="top10-track" aria-label="Siguiente"><span>&#10095;</span></button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        trackViews = carouselContainerViews.querySelector(".top10-track");
        TOP10.forEach(item => {
            const itemContainer = document.createElement("div");
            itemContainer.className = "top10-item";
            itemContainer.innerHTML = `
                <a href="${item.url}" class="top10-link">
                    <div class="top10-card">
                        <span class="top10-rank-sidebar">${item.rank}</span> 
                        <img src="${item.image}" alt="Portada de ${item.title}">
                        <div class="top10-title">${item.title}</div>
                    </div>
                </a>
            `;
            trackViews.appendChild(itemContainer);
        });

        sectionWrapperViews = document.createElement("section");
        sectionWrapperViews.className = "browse-collection-wrapper crbw-homepage-section";
        sectionWrapperViews.setAttribute("data-crbw-homepage-section", SERIES_SECTION_IDS.popular);
        sectionWrapperViews.appendChild(titleContainerViews);
        sectionWrapperViews.appendChild(carouselContainerViews);
    }

    // -------------------------------------------------------------
    // === 3.4. CONSTRUCCIÓN DEL CARRUSEL 2: TOP 10 SCORE (Puntuación) ===
    // -------------------------------------------------------------
    let titleContainerScore = null;
    let carouselContainerScore = null;
    let trackScore = null;
    let sectionWrapperScore = null;

    if (TOP10Score.length > 0) {
        titleContainerScore = document.createElement("div");
        titleContainerScore.id = "top10score-title-container";
        titleContainerScore.innerHTML = `
            <div class="container--cq5XE">
                <div class="feed-header--ihqym">
                    <h2 class="heading--nKNOf heading--is-bold--DUljF heading--is-m--7bv3g heading--is-family-type-two--U8YNl feed-header__title--DMRD6">
                        ${titles.reviewed}${seasonSuffix}
                    </h2>
                </div>
            </div>
        `;

        carouselContainerScore = document.createElement("section");
        carouselContainerScore.id = "top10score-container";
        carouselContainerScore.innerHTML = `
            <div class="container--cq5XE container--has-no-gutters--WqnNJ">
                <div class="wide-cards-carousel__container--IMk9g">
                    <div class="carousel--uuuFa wide-cards-carousel--Z62BE wide-cards-carousel--in-browse-layout--k-yJA" aria-label="${titles.reviewed}${seasonSuffix}" role="region" aria-roledescription="Carousel">
                        <div class="container--cq5XE wide-cards-carousel__content-wrapper--oUiNK">
                            <button class="arrow-btn arrow-left" data-track-id="top10score-track" aria-label="Anterior"><span>&#10094;</span></button>
                            <div class="wide-cards-carousel__cards-frame--5t5GO">
                                <div class="carousel-scroller--2cYvp">
                                    <div class="carousel-scroller__wrapper--bCIvZ">
                                        <div class="top10score-track"></div>
                                    </div>
                                </div>
                            </div>
                            <button class="arrow-btn arrow-right" data-track-id="top10score-track" aria-label="Siguiente"><span>&#10095;</span></button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        trackScore = carouselContainerScore.querySelector(".top10score-track");
        TOP10Score.forEach(item => {
            const itemContainer = document.createElement("div");
            itemContainer.className = "top10score-item";
            itemContainer.innerHTML = `
                <a href="${item.url}" class="top10score-link">
                    <div class="top10score-card">
                        <span class="top10score-rank-sidebar">${item.rank}</span> 
                        <img src="${item.image}" alt="Portada de ${item.title}">
                        <div class="top10score-title">${item.title}</div>
                    </div>
                </a>
            `;
            trackScore.appendChild(itemContainer);
        });

        sectionWrapperScore = document.createElement("section");
        sectionWrapperScore.className = "browse-collection-wrapper crbw-homepage-section";
        sectionWrapperScore.setAttribute("data-crbw-homepage-section", SERIES_SECTION_IDS.reviewed);
        sectionWrapperScore.appendChild(titleContainerScore);
        sectionWrapperScore.appendChild(carouselContainerScore);
    }

// *****************************************************************
// === 4. LÓGICA DE INYECCIÓN Y SCROLL ===
// *****************************************************************

let injectionInterval = null;
let remountObserver = null;
let remountTimeout = null;

function removeInjectedCarousels() {
    document.querySelectorAll('[data-crbw-homepage-section="top-series-popular"], [data-crbw-homepage-section="top-series-reviewed"]').forEach((element) => {
        element.remove();
    });

    const existingCarousel = document.querySelector('#top10-container');
    const existingTitle = document.querySelector('#top10-title-container');
    const existingCarouselScore = document.querySelector('#top10score-container');
    const existingTitleScore = document.querySelector('#top10score-title-container');

    if (existingCarousel) existingCarousel.remove();
    if (existingTitle) existingTitle.remove();
    if (existingCarouselScore) existingCarouselScore.remove();
    if (existingTitleScore) existingTitleScore.remove();
}

function getRenderableSections() {
    return [
        {
            id: SERIES_SECTION_IDS.popular,
            wrapper: sectionWrapperViews,
            carousel: carouselContainerViews,
            track: trackViews,
            itemClass: '.top10-item'
        },
        {
            id: SERIES_SECTION_IDS.reviewed,
            wrapper: sectionWrapperScore,
            carousel: carouselContainerScore,
            track: trackScore,
            itemClass: '.top10score-item'
        }
    ].filter((section) => section.wrapper);
}

function isSectionEnabled(sectionId) {
    return homepageSectionsShared.buildHomepageSectionsMap(homepageSectionsConfig)[sectionId]?.enabled !== false;
}

function getStagingContainer() {
    let container = document.getElementById(HOMEPAGE_STAGING_CONTAINER_ID);

    if (!container) {
        container = document.createElement('div');
        container.id = HOMEPAGE_STAGING_CONTAINER_ID;
        container.style.display = 'none';
        document.body.appendChild(container);
    }

    return container;
}

function getEnabledStateSignature(sections) {
    const sectionMap = new Map(
        homepageSectionsShared.mergeHomepageSections(sections).map((section) => [section.id, section.enabled !== false])
    );

    return JSON.stringify({
        [SERIES_SECTION_IDS.popular]: sectionMap.get(SERIES_SECTION_IDS.popular) !== false,
        [SERIES_SECTION_IDS.reviewed]: sectionMap.get(SERIES_SECTION_IDS.reviewed) !== false
    });
}

// =============================================================
// === Funciones de Lógica de Scroll y Visibilidad de Flechas ===
// =============================================================

function updateArrowVisibility(track, btnLeft, btnRight) {
    // Esta función verifica si el carrusel está desplazado al inicio o al final
    // para habilitar/deshabilitar las flechas.
    const scrollMax = track.scrollWidth - track.clientWidth;
    const scrollPosition = track.scrollLeft;
    // Usamos un margen de 5px para considerar pequeñas variaciones de redondeo
    btnLeft.disabled = scrollPosition < 5; 
    btnRight.disabled = scrollPosition > scrollMax - 5;
}

function calculateScrollStep(track, itemClass) {
    // Calcula el ancho de un elemento + su margen y lo multiplica por 6 para un salto de 6 cartas.
    const firstItem = track.querySelector(itemClass);
    if (!firstItem) return 250;
    const itemRect = firstItem.getBoundingClientRect();
    const itemStyle = window.getComputedStyle(firstItem);
    const marginH = parseFloat(itemStyle.marginLeft) + parseFloat(itemStyle.marginRight);
    const itemWidth = itemRect.width + marginH;
    return itemWidth * 6; // Desplazamiento de 6 cartas
}

function setupCarouselLogic(carouselContainer, track, itemClass) {
    if (!carouselContainer || carouselContainer.dataset.crbwCarouselInitialized === 'true') {
        return;
    }

    carouselContainer.dataset.crbwCarouselInitialized = 'true';

    // Configura los event listeners para las flechas y el scroll.
    const btnLeft = carouselContainer.querySelector(".arrow-left");
    const btnRight = carouselContainer.querySelector(".arrow-right");
    
    if (!btnLeft || !btnRight) { return; }

    const handleScroll = () => {
        updateArrowVisibility(track, btnLeft, btnRight);
    };
    
    const handleButtonClick = (direction) => {
        const scrollStep = calculateScrollStep(track, itemClass);
        const step = direction === 'left' ? -scrollStep : scrollStep;
        track.scrollBy({ left: step, behavior: "smooth" });
    };

    handleScroll();
    track.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); 
    btnLeft.addEventListener("click", () => handleButtonClick('left'));
    btnRight.addEventListener("click", () => handleButtonClick('right'));

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

// =============================================================
// === Función de Inyección y Posicionamiento de Carruseles ===
// =============================================================

function ensureSectionsMounted() {
    if (!document.body) {
        return false;
    }

    const stagingContainer = getStagingContainer();
    let mountedCount = 0;

    getRenderableSections().forEach((section) => {
        if (!isSectionEnabled(section.id)) {
            section.wrapper.remove();
            return;
        }

        if (!section.wrapper.isConnected) {
            stagingContainer.appendChild(section.wrapper);
            mountedCount += 1;
        }

        setupCarouselLogic(section.carousel, section.track, section.itemClass);
    });

    if (mountedCount > 0) {
        getLiveHomepageSectionsShared().scheduleHomepageSectionInlineGutterSync?.();
        console.log(`✅ Prepared ${mountedCount} series section(s) for the homepage layout manager.`);
    }

    return true;
}

function hasMissingEnabledSections() {
    return getRenderableSections().some((section) => isSectionEnabled(section.id) && !section.wrapper.isConnected);
}

function scheduleRemountCheck() {
    if (remountTimeout) {
        clearTimeout(remountTimeout);
    }

    remountTimeout = setTimeout(() => {
        remountTimeout = null;

        if (!hasMissingEnabledSections()) {
            return;
        }

        console.log('ℹ️ Series sections were removed from the DOM. Remounting them.');
        startInjectionAttempt();
    }, 150);
}

function startRemountObserver() {
    if (remountObserver || !document.body) {
        return;
    }

    remountObserver = new MutationObserver(() => {
        scheduleRemountCheck();
    });

    remountObserver.observe(document.body, { childList: true, subtree: true });
}

// =============================================================
// === Lógica de Intento de Inyección (Manejo de Carga SPA) ===
// =============================================================

function startInjectionAttempt() {
    removeInjectedCarousels();

    if (!getRenderableSections().some((section) => isSectionEnabled(section.id))) {
        return;
    }

    if (injectionInterval) {
        clearInterval(injectionInterval);
        injectionInterval = null;
    }

    const maxAttempts = 20; // 20 * 250ms = 5 segundos
    let attempts = 0;

    injectionInterval = setInterval(() => {
        if (ensureSectionsMounted()) {
            clearInterval(injectionInterval);
            injectionInterval = null;
            return;
        } else if (attempts >= maxAttempts) {
            clearInterval(injectionInterval);
            injectionInterval = null;
            console.log('❌ Failed to find the homepage container for series sections after 5 seconds.');
        }
        attempts++;
    }, 250); // Intentar cada 250ms
}

// Lógica de manejo de navegación interna (SPA)
let lastUrl = window.location.href;
setInterval(() => {
    if (window.location.href !== lastUrl) {
        lastUrl = window.location.href;
        console.log("Internal navigation detected. Retrying injection...");

        // Pequeño retraso para permitir que la página cargue su estructura
        setTimeout(startInjectionAttempt, 50); 
    }
}, 500);

chrome.storage.local.get([HOMEPAGE_SECTIONS_STORAGE_KEY], (settings) => {
    homepageSectionsConfig = homepageSectionsShared.normalizeHomepageSections(
        settings[HOMEPAGE_SECTIONS_STORAGE_KEY]
    );
    previousEnabledState = getEnabledStateSignature(homepageSectionsConfig);
    ensureHomepageLayoutManager();
    startRemountObserver();
    startInjectionAttempt();
});

chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName !== 'local' || !changes[HOMEPAGE_SECTIONS_STORAGE_KEY]) {
        return;
    }

    homepageSectionsConfig = homepageSectionsShared.normalizeHomepageSections(
        changes[HOMEPAGE_SECTIONS_STORAGE_KEY].newValue
    );
    const nextEnabledState = getEnabledStateSignature(homepageSectionsConfig);

    if (nextEnabledState === previousEnabledState) {
        return;
    }

    previousEnabledState = nextEnabledState;
    ensureHomepageLayoutManager();
    startRemountObserver();
    startInjectionAttempt();
});
// Fin del (async function)
})();
