(function initHomepageSections(globalScope) {
    const HOMEPAGE_SECTIONS_STORAGE_KEY = 'homepageSections';
    const HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY = 'homepageDiscoveredSections';
    const HOMEPAGE_UNMATCHED_BUCKET_ID = 'unmatched-sections-bucket';
    const HOMEPAGE_STAGING_CONTAINER_ID = 'crbw-homepage-staging';
    const REMOVE_CRUNCHYROLL_ADS_SETTING_KEY = 'removeCrunchyrollAds';
    const HIDE_HERO_CAROUSEL_SETTING_KEY = 'hideHeroCarousel';
    const HOMEPAGE_INLINE_GUTTER_CSS_VAR = '--crbw-detected-homepage-inline-gutter';
    const HOMEPAGE_DYNAMIC_FEED_SELECTOR = '.dynamic-feed-wrapper';
    const BUILTIN_HOMEPAGE_SECTION_SELECTOR = 'div[data-id]';
    const HERO_CAROUSEL_SELECTOR = '[role="region"][aria-label="Hero Carousel"], .hero-carousel--1-yhX';
    const HERO_CAROUSEL_STYLE_ID = 'crbw-hide-hero-carousel-style-shared';
    const HOMEPAGE_INLINE_GUTTER_TARGET_SELECTORS = [
        '.container--cq5XE',
        '[data-t^="personalized-collection-"]',
        '[data-t*="collection"]'
    ];
    const HOMEPAGE_AD_SECTION_LABELS = new Set([
        'crunchyroll manga',
        'crunchyroll news',
        'music videos now on crunchyroll music'
    ]);
    const HOMEPAGE_AD_SECTION_LABEL_PREFIXES = [
        'crunchyroll manga',
        'crunchyroll news',
        'music videos now on crunchyroll music'
    ];

    let homepageInlineGutterSyncFrame = 0;
    let homepageInlineGutterWatcherInitialized = false;
    let homepageInlineGutterObserver = null;
    let lastHeroCarouselStateSignature = '';
    let isContextInvalidated = false;
    const homepageRuntimeState = {
        observer: null,
        scheduledRefresh: null
    };

    const HOMEPAGE_SECTION_IDS = {
        NEXT_SEASON: 'next-season',
        TOP_SERIES_POPULAR: 'top-series-popular',
        TOP_SERIES_REVIEWED: 'top-series-reviewed',
        TOP_MOVIES_POPULAR: 'top-movies-popular',
        TOP_MOVIES_REVIEWED: 'top-movies-reviewed'
    };

    const CUSTOM_HOMEPAGE_SECTION_DEFINITIONS = [
        {
            id: HOMEPAGE_SECTION_IDS.NEXT_SEASON,
            label: 'Next Season',
            kind: 'custom',
            defaultOrder: 0
        },
        {
            id: HOMEPAGE_SECTION_IDS.TOP_SERIES_POPULAR,
            label: 'Top Series Popular',
            kind: 'custom',
            defaultOrder: 1
        },
        {
            id: HOMEPAGE_SECTION_IDS.TOP_SERIES_REVIEWED,
            label: 'Top Series Reviewed',
            kind: 'custom',
            defaultOrder: 2
        },
        {
            id: HOMEPAGE_SECTION_IDS.TOP_MOVIES_POPULAR,
            label: 'Top Movies Popular',
            kind: 'custom',
            defaultOrder: 3
        },
        {
            id: HOMEPAGE_SECTION_IDS.TOP_MOVIES_REVIEWED,
            label: 'Top Movies Reviewed',
            kind: 'custom',
            defaultOrder: 4
        }
    ];

    const UNMATCHED_BUCKET_DEFINITION = {
        id: HOMEPAGE_UNMATCHED_BUCKET_ID,
        label: 'Any New Sections',
        kind: 'bucket',
        defaultOrder: 9999
    };

    function isExtensionContextValid() {
        if (isContextInvalidated) {
            return false;
        }

        try {
            return Boolean(chrome?.runtime?.id);
        } catch (error) {
            if (String(error?.message || error).includes('Extension context invalidated')) {
                markContextInvalidated();
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
                markContextInvalidated();
                return false;
            }

            throw error;
        }
    }

    function teardownHomepageRuntime() {
        if (homepageRuntimeState.scheduledRefresh) {
            window.clearTimeout(homepageRuntimeState.scheduledRefresh);
            homepageRuntimeState.scheduledRefresh = null;
        }

        if (homepageRuntimeState.observer) {
            homepageRuntimeState.observer.disconnect();
            homepageRuntimeState.observer = null;
        }
    }

    function markContextInvalidated() {
        if (isContextInvalidated) {
            return;
        }

        isContextInvalidated = true;
        teardownHomepageRuntime();
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

    function normalizeHomepageSectionLabel(value) {
        return String(value || '')
            .normalize('NFKD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();
    }

    function isUntitledAdSectionLabel(normalizedLabel) {
        return /^untitled sections?(?:\s*\(.*\))?$/.test(normalizedLabel);
    }

    function isKnownHomepageAdSectionLabel(normalizedLabel) {
        if (HOMEPAGE_AD_SECTION_LABELS.has(normalizedLabel) || isUntitledAdSectionLabel(normalizedLabel)) {
            return true;
        }

        return HOMEPAGE_AD_SECTION_LABEL_PREFIXES.some((prefix) => normalizedLabel.startsWith(prefix));
    }

    function shouldHideHomepageSection(section, removeAdsEnabled = false) {
        if (!removeAdsEnabled || !section || section.kind === 'custom' || section.kind === 'bucket') {
            return false;
        }

        const normalizedLabel = normalizeHomepageSectionLabel(section.label);
        return isKnownHomepageAdSectionLabel(normalizedLabel);
    }

    function isVisibleHTMLElement(element) {
        if (!(element instanceof HTMLElement) || !element.isConnected) {
            return false;
        }

        const style = window.getComputedStyle(element);
        if (style.display === 'none' || style.visibility === 'hidden') {
            return false;
        }

        return element.getBoundingClientRect().width > 0 && element.getBoundingClientRect().height > 0;
    }

    function getBuiltinHomepageSectionCandidates() {
        const dynamicFeedWrapper = document.querySelector(HOMEPAGE_DYNAMIC_FEED_SELECTOR);
        if (!(dynamicFeedWrapper instanceof HTMLElement)) {
            return [];
        }

        return Array.from(dynamicFeedWrapper.children).filter((child) =>
            child instanceof HTMLElement &&
            child.matches(BUILTIN_HOMEPAGE_SECTION_SELECTOR) &&
            !child.hasAttribute('data-crbw-homepage-section') &&
            isVisibleHTMLElement(child)
        );
    }

    function extractInlineGutterFromSection(sectionElement) {
        if (!(sectionElement instanceof HTMLElement)) {
            return null;
        }

        const sectionRect = sectionElement.getBoundingClientRect();
        if (sectionRect.width <= 0) {
            return null;
        }

        for (const selector of HOMEPAGE_INLINE_GUTTER_TARGET_SELECTORS) {
            const targets = Array.from(sectionElement.querySelectorAll(selector)).filter(isVisibleHTMLElement);

            for (const target of targets) {
                const targetRect = target.getBoundingClientRect();
                const leftOffset = targetRect.left - sectionRect.left;
                const rightOffset = sectionRect.right - targetRect.right;
                const withinRange = (value) => value >= 12 && value <= 160;

                if (withinRange(leftOffset) && withinRange(rightOffset)) {
                    return Math.round((leftOffset + rightOffset) / 2);
                }

                if (withinRange(leftOffset) && targetRect.width >= sectionRect.width * 0.5) {
                    return Math.round(leftOffset);
                }
            }
        }

        return null;
    }

    function measureHomepageInlineGutter() {
        const gutterValues = getBuiltinHomepageSectionCandidates()
            .map((sectionElement) => extractInlineGutterFromSection(sectionElement))
            .filter((value) => Number.isFinite(value));

        if (gutterValues.length === 0) {
            return null;
        }

        gutterValues.sort((left, right) => left - right);
        return gutterValues[Math.floor(gutterValues.length / 2)];
    }

    function syncHomepageSectionInlineGutter() {
        const gutter = measureHomepageInlineGutter();
        if (!Number.isFinite(gutter) || !(document.documentElement instanceof HTMLElement)) {
            return false;
        }

        document.documentElement.style.setProperty(HOMEPAGE_INLINE_GUTTER_CSS_VAR, `${gutter}px`);
        return true;
    }

    function scheduleHomepageSectionInlineGutterSync() {
        if (homepageInlineGutterSyncFrame) {
            cancelAnimationFrame(homepageInlineGutterSyncFrame);
        }

        homepageInlineGutterSyncFrame = requestAnimationFrame(() => {
            homepageInlineGutterSyncFrame = 0;
            syncHomepageSectionInlineGutter();
        });
    }

    function ensureHomepageSectionInlineGutterWatcher() {
        if (homepageInlineGutterWatcherInitialized) {
            scheduleHomepageSectionInlineGutterSync();
            return;
        }

        homepageInlineGutterWatcherInitialized = true;

        window.addEventListener('resize', scheduleHomepageSectionInlineGutterSync, { passive: true });

        if (document.body) {
            homepageInlineGutterObserver = new MutationObserver(() => {
                scheduleHomepageSectionInlineGutterSync();
            });
            homepageInlineGutterObserver.observe(document.body, { childList: true, subtree: true });
        }

        scheduleHomepageSectionInlineGutterSync();
    }

    function findHeroCarouselRoot() {
        const heroCandidates = Array.from(document.querySelectorAll(HERO_CAROUSEL_SELECTOR))
            .filter((element) => element instanceof HTMLElement);

        return heroCandidates.find((element) =>
            element.getAttribute('role') === 'region'
            && element.getAttribute('aria-label') === 'Hero Carousel'
        ) || heroCandidates[0] || null;
    }

    function ensureSharedStagingContainer() {
        let container = document.getElementById(HOMEPAGE_STAGING_CONTAINER_ID);

        if (!container) {
            container = document.createElement('div');
            container.id = HOMEPAGE_STAGING_CONTAINER_ID;
            container.style.display = 'none';
            document.body.appendChild(container);
        }

        return container;
    }

    function applyHeroCarouselVisibilityFromShared(hideHeroCarouselEnabled) {
        let styleElement = document.getElementById(HERO_CAROUSEL_STYLE_ID);

        if (!(styleElement instanceof HTMLStyleElement)) {
            styleElement = document.createElement('style');
            styleElement.id = HERO_CAROUSEL_STYLE_ID;
            (document.documentElement || document.head || document.body)?.appendChild(styleElement);
        }

        if (styleElement instanceof HTMLStyleElement) {
            styleElement.textContent = hideHeroCarouselEnabled
                ? `
                    ${HERO_CAROUSEL_SELECTOR} {
                        display: none !important;
                        visibility: hidden !important;
                        height: 0 !important;
                        min-height: 0 !important;
                        max-height: 0 !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        overflow: hidden !important;
                        pointer-events: none !important;
                    }
                `
                : '';
        }

        const stagingContainer = ensureSharedStagingContainer();
        const dynamicFeedWrapper = document.querySelector(HOMEPAGE_DYNAMIC_FEED_SELECTOR);
        const heroCarousel = findHeroCarouselRoot();

        if (heroCarousel) {
            if (hideHeroCarouselEnabled) {
                if (heroCarousel.parentElement !== stagingContainer) {
                    stagingContainer.appendChild(heroCarousel);
                }
                heroCarousel.style.display = 'none';
            } else {
                if (
                    heroCarousel.parentElement === stagingContainer
                    && dynamicFeedWrapper instanceof HTMLElement
                    && dynamicFeedWrapper.parentElement instanceof HTMLElement
                ) {
                    dynamicFeedWrapper.parentElement.insertBefore(heroCarousel, dynamicFeedWrapper);
                }

                heroCarousel.style.display = '';
            }
        }

        if (document.documentElement instanceof HTMLElement) {
            document.documentElement.dataset.crbwHeroCarouselShared = hideHeroCarouselEnabled ? 'enabled' : 'disabled';
            document.documentElement.dataset.crbwHeroCarouselSharedCount = heroCarousel ? '1' : '0';
        }

        const heroCarouselState = {
            enabled: hideHeroCarouselEnabled,
            found: Boolean(heroCarousel),
            parentId: heroCarousel?.parentElement?.id || '',
            parentClass: heroCarousel?.parentElement?.className || '',
            tagName: heroCarousel?.tagName || '',
            className: heroCarousel?.className || '',
            role: heroCarousel?.getAttribute?.('role') || '',
            ariaLabel: heroCarousel?.getAttribute?.('aria-label') || ''
        };
        const heroCarouselSignature = JSON.stringify(heroCarouselState);

        if (heroCarouselSignature !== lastHeroCarouselStateSignature) {
            lastHeroCarouselStateSignature = heroCarouselSignature;
            console.log('[CRBW][HeroCarousel][Shared] Apply', heroCarouselState);
        }
    }

    function getDefaultHomepageSections() {
        return [
            ...CUSTOM_HOMEPAGE_SECTION_DEFINITIONS.map((section) => ({
                id: section.id,
                enabled: true,
                order: section.defaultOrder
            })),
            {
                id: HOMEPAGE_UNMATCHED_BUCKET_ID,
                enabled: true,
                order: UNMATCHED_BUCKET_DEFINITION.defaultOrder
            }
        ];
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

        const discovered = normalizeDiscoveredSections(discoveredSections);
        return discovered.some((section) => !ids.has(section.id));
    }

    function findCustomDefinition(sectionId) {
        return CUSTOM_HOMEPAGE_SECTION_DEFINITIONS.find((section) => section.id === sectionId) || null;
    }

    globalScope.CRBWHomepageSections = {
        HOMEPAGE_SECTIONS_STORAGE_KEY,
        HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY,
        HOMEPAGE_UNMATCHED_BUCKET_ID,
        HOMEPAGE_STAGING_CONTAINER_ID,
        REMOVE_CRUNCHYROLL_ADS_SETTING_KEY,
        HOMEPAGE_SECTION_IDS,
        CUSTOM_HOMEPAGE_SECTION_DEFINITIONS,
        UNMATCHED_BUCKET_DEFINITION,
        slugify,
        normalizeHomepageSectionLabel,
        shouldHideHomepageSection,
        measureHomepageInlineGutter,
        syncHomepageSectionInlineGutter,
        scheduleHomepageSectionInlineGutterSync,
        ensureHomepageSectionInlineGutterWatcher,
        getDefaultHomepageSections,
        normalizeDiscoveredSections,
        getHomepageSectionCatalog,
        mergeHomepageSections,
        normalizeHomepageSections,
        buildHomepageSectionsMap,
        createInitialLayoutFromPage,
        shouldRefreshInitialLayout,
        findCustomDefinition
    };

    function initHomepageLayoutManager() {
        if (globalScope.__CRBW_HOMEPAGE_LAYOUT_MANAGER_INITIALIZED__) {
            return;
        }

        globalScope.__CRBW_HOMEPAGE_LAYOUT_MANAGER_INITIALIZED__ = true;
        console.log('🚀 Homepage Layout Manager Loading...');

        const DYNAMIC_FEED_WRAPPER_SELECTOR = '.dynamic-feed-wrapper';
        const SECTION_HEADING_SELECTOR = 'h2, .browse-collection-title, .feed-header__title--DMRD6';
        const BUILTIN_SECTION_WRAPPER_SELECTOR = 'div[data-id]';
        const CONTINUE_WATCHING_LABEL = 'Continue Watching';
        const CONTINUE_WATCHING_TRACK_SELECTOR = [
            '.erc-history-collection[data-t="history"]',
            '.erc-history-collection',
            '[data-t="history"]'
        ].join(', ');
        const BUILTIN_SECTION_CONTENT_SELECTOR = [
            '[data-t^="personalized-collection-"]',
            '[data-t*="collection"]',
            CONTINUE_WATCHING_TRACK_SELECTOR
        ].join(', ');
        let lastDiscoveredSignature = '';
        let lastAppliedLayoutSignature = '';

        function logLayoutDebug(label, payload) {
        console.log(`[CRBW][HomepageLayout] ${label}`, payload);
    }

        function wait(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }

        function getStagingContainer() {
            return document.getElementById(HOMEPAGE_STAGING_CONTAINER_ID);
        }

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
        if (directDataId) {
            if (element.querySelector(CONTINUE_WATCHING_TRACK_SELECTOR)) {
                return true;
            }

            return Boolean(
                element.querySelector(SECTION_HEADING_SELECTOR)
                && element.querySelector(BUILTIN_SECTION_CONTENT_SELECTOR)
            );
        }

        return false;
    }

        function isLikelyHomepageSection(element) {
        if (!(element instanceof HTMLElement)) {
            return false;
        }

        if (element.hasAttribute('data-crbw-homepage-section')) {
            return true;
        }

        return isBuiltinHomepageSection(element);
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
            return CONTINUE_WATCHING_LABEL;
        }

        return 'Untitled Section';
    }

        function getBuiltinSectionId(element, index, existingIds = new Set()) {
        const label = getSectionLabel(element);
        const slug = slugify(label);

        if (slug) {
            let candidateId = `builtin:title:${slug}`;
            let duplicateIndex = 2;

            while (existingIds.has(candidateId)) {
                candidateId = `builtin:title:${slug}-${duplicateIndex}`;
                duplicateIndex += 1;
            }

            return candidateId;
        }

        const dataT = element.getAttribute('data-t');
        if (dataT) {
            return `builtin:data-t:${dataT}`;
        }

        return `builtin:section:${index}`;
    }

        function findLayoutRoot() {
        const dynamicFeedWrapper = document.querySelector(DYNAMIC_FEED_WRAPPER_SELECTOR);
        if (dynamicFeedWrapper instanceof HTMLElement) {
            logLayoutDebug('Found Dynamic Feed Wrapper', {
                childCount: dynamicFeedWrapper.children.length
            });
            return {
                section: dynamicFeedWrapper.firstElementChild,
                container: dynamicFeedWrapper
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

            const currentCount = parentCounts.get(parent) || 0;
            parentCounts.set(parent, currentCount + 1);
        });

        let bestContainer = null;
        let bestCount = 0;

        parentCounts.forEach((count, parent) => {
            if (count > bestCount) {
                bestContainer = parent;
                bestCount = count;
            }
        });

        if (bestContainer) {
            const firstSection = Array.from(bestContainer.children).find((child) => isBuiltinHomepageSection(child));
            logLayoutDebug('Using Fallback Layout Root', {
                childCount: bestContainer.children.length,
                builtinVisibleCount: builtinSections.length
            });
            return {
                section: firstSection || bestContainer.firstElementChild,
                container: bestContainer
            };
        }

        const mainElement = document.querySelector('main');
        if (mainElement) {
            return { section: mainElement.firstElementChild, container: mainElement };
        }

        return null;
    }

        function collectCurrentSections(mainContainer) {
        const topLevelSections = Array.from(mainContainer.children)
            .filter((candidate) => candidate instanceof HTMLElement && isLikelyHomepageSection(candidate));

        const seenIds = new Set();
        const collectedSections = topLevelSections
            .sort((left, right) => Array.from(mainContainer.children).indexOf(left) - Array.from(mainContainer.children).indexOf(right))
            .map((element, index) => {
                const customId = element.getAttribute('data-crbw-homepage-section');
                const id = customId || getBuiltinSectionId(element, index, seenIds);
                seenIds.add(id);

                return {
                    id,
                    label: getSectionLabel(element),
                    element,
                    kind: customId ? 'custom' : 'builtin',
                    defaultOrder: index
                };
            });

        const stagedSectionIds = new Set(collectedSections.map((section) => section.id));
        const stagedCustomSections = Array.from(document.querySelectorAll('[data-crbw-homepage-section]'))
            .filter((element) => !stagedSectionIds.has(element.getAttribute('data-crbw-homepage-section')))
            .map((element, index) => ({
                id: element.getAttribute('data-crbw-homepage-section'),
                label: getSectionLabel(element),
                element,
                kind: 'custom',
                defaultOrder: collectedSections.length + index
            }));

        const resultSections = [...collectedSections, ...stagedCustomSections];
        logLayoutDebug('Collected Current Sections', {
            containerClass: mainContainer.className || '',
            directChildCount: mainContainer.children.length,
            topLevelSectionCount: topLevelSections.length,
            builtinCount: resultSections.filter((section) => section.kind === 'builtin').length,
            customCount: resultSections.filter((section) => section.kind === 'custom').length,
            sectionIds: resultSections.map((section) => section.id),
            sectionLabels: resultSections.map((section) => section.label)
        });
        return resultSections;
    }

        function persistDiscoveredSections(currentSections) {
            if (!isExtensionContextValid()) {
                teardownHomepageRuntime();
                return;
            }

            const discoveredSections = currentSections
            .filter((section) => section.kind === 'builtin')
            .map((section) => ({
                id: section.id,
                label: section.label,
                defaultOrder: section.defaultOrder
            }));

        const signature = JSON.stringify(discoveredSections);
        if (signature === lastDiscoveredSignature) {
            logLayoutDebug('Discovered Sections Unchanged', {
                count: discoveredSections.length
            });
            return;
        }

        lastDiscoveredSignature = signature;
        logLayoutDebug('Persisting Discovered Sections', {
            count: discoveredSections.length,
            ids: discoveredSections.map((section) => section.id),
            labels: discoveredSections.map((section) => section.label)
        });
        runWithValidContext(() => chrome.storage.local.set({
            [HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY]: discoveredSections
        }));
    }

        function getDiscoveredSectionsFromCurrentSections(currentSections) {
        return currentSections
            .filter((section) => section.kind === 'builtin')
            .map((section) => ({
                id: section.id,
                label: section.label,
                defaultOrder: section.defaultOrder
            }));
    }

        function ensureInitialLayout(currentSections) {
        if (!isExtensionContextValid()) {
            teardownHomepageRuntime();
            return;
        }

        const currentDiscoveredSections = normalizeDiscoveredSections(
            getDiscoveredSectionsFromCurrentSections(currentSections)
        );

        runWithValidContext(() => chrome.storage.local.get([
            HOMEPAGE_SECTIONS_STORAGE_KEY
        ], (items) => {
            if (!isExtensionContextValid()) {
                return;
            }

            const existingLayout = items[HOMEPAGE_SECTIONS_STORAGE_KEY];
            logLayoutDebug('Ensuring Initial Layout', {
                existingLayoutCount: Array.isArray(existingLayout) ? existingLayout.length : 0,
                currentDiscoveredCount: currentDiscoveredSections.length,
                currentSectionIds: currentSections.map((section) => section.id)
            });

            if (!shouldRefreshInitialLayout(existingLayout, currentDiscoveredSections)) {
                logLayoutDebug('Initial Layout Already Fresh', {
                    currentDiscoveredCount: currentDiscoveredSections.length
                });
                return;
            }

            const nextLayout = createInitialLayoutFromPage(
                currentSections.map((section) => section.id),
                existingLayout,
                currentDiscoveredSections
            );
            logLayoutDebug('Persisting Initial Layout', {
                count: nextLayout.length,
                ids: nextLayout.map((section) => section.id)
            });
            runWithValidContext(() => chrome.storage.local.set({
                [HOMEPAGE_SECTIONS_STORAGE_KEY]: nextLayout
            }));
        }));
    }

        function applyHomepageLayout() {
        if (!isExtensionContextValid()) {
            teardownHomepageRuntime();
            return;
        }

        const layoutRoot = findLayoutRoot();
        if (!layoutRoot?.container) {
            console.log('ℹ️ Homepage layout manager could not find a homepage container yet.');
            return;
        }

        const currentSections = collectCurrentSections(layoutRoot.container);
        if (currentSections.length === 0) {
            console.log('ℹ️ Homepage layout manager found a container but no sections yet.');
            return;
        }

        persistDiscoveredSections(currentSections);
        ensureInitialLayout(currentSections);

        runWithValidContext(() => chrome.storage.local.get([
            HOMEPAGE_SECTIONS_STORAGE_KEY,
            REMOVE_CRUNCHYROLL_ADS_SETTING_KEY
        ], (items) => {
            if (!isExtensionContextValid()) {
                return;
            }

            const discoveredSections = normalizeDiscoveredSections(
                getDiscoveredSectionsFromCurrentSections(currentSections)
            );
            const mergedLayout = mergeHomepageSections(items[HOMEPAGE_SECTIONS_STORAGE_KEY], discoveredSections);
            const removeAdsEnabled = items[REMOVE_CRUNCHYROLL_ADS_SETTING_KEY] === true;
            const currentById = new Map(currentSections.map((section) => [section.id, section]));
            const layoutIds = new Set(mergedLayout.map((section) => section.id));
            const unmatchedSections = currentSections.filter((section) => !layoutIds.has(section.id));
            const orderedVisibleSections = [];

            logLayoutDebug('Applying Homepage Layout', {
                discoveredCount: discoveredSections.length,
                mergedLayoutCount: mergedLayout.length,
                unmatchedCount: unmatchedSections.length,
                storedLayoutIds: mergedLayout.map((section) => `${section.id}:${section.enabled !== false ? 'on' : 'off'}:${section.order}`),
                currentSectionIds: currentSections.map((section) => section.id)
            });

            mergedLayout.forEach((layoutSection) => {
                if (layoutSection.id === HOMEPAGE_UNMATCHED_BUCKET_ID) {
                    if (layoutSection.enabled !== false) {
                        unmatchedSections.forEach((section) => {
                            if (!shouldHideHomepageSection(section, removeAdsEnabled)) {
                                orderedVisibleSections.push(section);
                            }
                        });
                    }
                    return;
                }

                const matchingSection = currentById.get(layoutSection.id);
                if (matchingSection && layoutSection.enabled !== false && !shouldHideHomepageSection(matchingSection, removeAdsEnabled)) {
                    orderedVisibleSections.push(matchingSection);
                }
            });

            const nextLayoutSignature = JSON.stringify({
                visibleIds: orderedVisibleSections.map((section) => section.id),
                hiddenIds: currentSections
                    .filter((section) => !orderedVisibleSections.some((visibleSection) => visibleSection.id === section.id))
                    .map((section) => section.id)
            });

            if (nextLayoutSignature === lastAppliedLayoutSignature) {
                return;
            }

            lastAppliedLayoutSignature = nextLayoutSignature;

            if (layoutRoot.container.matches(DYNAMIC_FEED_WRAPPER_SELECTOR)) {
                layoutRoot.container.style.removeProperty('display');
                layoutRoot.container.style.removeProperty('flex-direction');

                const visibleIds = new Set(orderedVisibleSections.map((section) => section.id));
                logLayoutDebug('Updating Dynamic Feed Wrapper', {
                    visibleIds: Array.from(visibleIds),
                    hiddenIds: currentSections.filter((section) => !visibleIds.has(section.id)).map((section) => section.id)
                });

                orderedVisibleSections.forEach((section, index) => {
                    if (section.element.parentElement !== layoutRoot.container) {
                        layoutRoot.container.appendChild(section.element);
                    }

                    section.element.style.display = '';
                    section.element.style.order = String(index);
                });

                currentSections.forEach((section, index) => {
                    if (section.element.parentElement !== layoutRoot.container) {
                        return;
                    }

                    if (!visibleIds.has(section.id)) {
                        section.element.style.display = 'none';
                    }

                    if (!visibleIds.has(section.id)) {
                        section.element.style.order = String(1000 + index);
                    }
                });

                return;
            }

            currentSections.forEach((section) => {
                if (section.element.parentElement === layoutRoot.container) {
                    section.element.style.display = 'none';
                }
            });

            const fragment = document.createDocumentFragment();
            orderedVisibleSections.forEach((section) => {
                section.element.style.display = '';
                fragment.appendChild(section.element);
            });

            const managedElements = new Set(
                currentSections
                    .filter((section) => section.element.parentElement === layoutRoot.container)
                    .map((section) => section.element)
            );
            const referenceElement = Array.from(layoutRoot.container.children).find((child) => !managedElements.has(child)) || null;

            if (referenceElement) {
                layoutRoot.container.insertBefore(fragment, referenceElement);
            } else {
                layoutRoot.container.appendChild(fragment);
            }

        }));
    }

        function scheduleApply() {
            if (!isExtensionContextValid()) {
                teardownHomepageRuntime();
                return;
            }

            if (homepageRuntimeState.scheduledRefresh) {
                window.clearTimeout(homepageRuntimeState.scheduledRefresh);
            }

            homepageRuntimeState.scheduledRefresh = window.setTimeout(() => {
                homepageRuntimeState.scheduledRefresh = null;
                if (!isExtensionContextValid()) {
                    teardownHomepageRuntime();
                    return;
                }
                applyHomepageLayout();
            }, 120);
        }

        globalScope.CRBWHomepageSections = {
            ...globalScope.CRBWHomepageSections,
            requestHomepageLayoutApply: scheduleApply
        };

    function observeHomepage() {
        if (!isExtensionContextValid()) {
            teardownHomepageRuntime();
            return;
        }

        const observer = new MutationObserver((mutations) => {
            if (!isExtensionContextValid()) {
                teardownHomepageRuntime();
                return;
            }

            const hasRelevantMutation = mutations.some((mutation) => {
                if (!(mutation.target instanceof Node)) {
                    return false;
                }

                const targetElement = mutation.target instanceof HTMLElement
                    ? mutation.target
                    : mutation.target.parentElement;
                if (targetElement?.closest(`#${HOMEPAGE_STAGING_CONTAINER_ID}`)) {
                    return false;
                }

                return Array.from(mutation.addedNodes).some((node) => node instanceof HTMLElement)
                    || Array.from(mutation.removedNodes).some((node) => node instanceof HTMLElement);
            });

            if (!hasRelevantMutation) {
                return;
            }

            scheduleApply();
        });

        homepageRuntimeState.observer = observer;
        observer.observe(document.body, { childList: true, subtree: true });

        runWithValidContext(() => chrome.storage.local.get(HIDE_HERO_CAROUSEL_SETTING_KEY, (items) => {
            if (!isExtensionContextValid()) {
                return;
            }

            applyHeroCarouselVisibilityFromShared(items[HIDE_HERO_CAROUSEL_SETTING_KEY] === true);
        }));

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
            ) {
                scheduleApply();
            }

            if (changes[HIDE_HERO_CAROUSEL_SETTING_KEY]) {
                applyHeroCarouselVisibilityFromShared(changes[HIDE_HERO_CAROUSEL_SETTING_KEY].newValue === true);
            }
        }));

        scheduleApply();
    }

        if (document.body) {
            observeHomepage();
        } else {
            window.addEventListener('DOMContentLoaded', observeHomepage, { once: true });
        }
    }

    initHomepageLayoutManager();

})(globalThis);
