(function initHomepageLayoutManager() {
    console.log('[CRBW][HomepageLayout] Bootstrap', {
        legacyInitialized: Boolean(globalThis.__CRBW_HOMEPAGE_LAYOUT_MANAGER_INITIALIZED__),
        standaloneInitialized: Boolean(globalThis.__CRBW_DYNAMIC_FEED_LAYOUT_MANAGER_INITIALIZED__)
    });

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
    const SECTION_HEADING_SELECTOR = 'h2, .browse-collection-title, .feed-header__title--DMRD6';
    const BUILTIN_SECTION_WRAPPER_SELECTOR = 'div[data-id]';
    const BUILTIN_SECTION_CONTENT_SELECTOR = '[data-t^="personalized-collection-"], [data-t*="collection"]';

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

    function collectHomepageSections() {
        const wrapper = getDynamicFeedWrapper();
        if (!wrapper) {
            logLayoutDebug('dynamic-feed-wrapper not found', null);
            return [];
        }

        const directChildren = Array.from(wrapper.children).filter((child) => child instanceof HTMLElement);
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
                const wrapper = getDynamicFeedWrapper();
                const hideHeroCarouselEnabled = items[HIDE_HERO_CAROUSEL_SETTING_KEY] === true;
                logLayoutDebug('Homepage Settings Snapshot', {
                    hideHeroCarouselEnabled,
                    removeAdsEnabled: items[REMOVE_CRUNCHYROLL_ADS_SETTING_KEY] === true,
                    hasWrapper: wrapper instanceof HTMLElement
                });

                applyHeroCarouselVisibility(hideHeroCarouselEnabled);

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

                const normalizedDiscovered = normalizeDiscoveredSections(discoveredSections);
                const mergedSections = mergeHomepageSections(items[HOMEPAGE_SECTIONS_STORAGE_KEY], normalizedDiscovered);
                const configById = new Map(mergedSections.map((section) => [section.id, section]));
                const unmatchedBucket = configById.get(HOMEPAGE_UNMATCHED_BUCKET_ID);
                const removeAdsEnabled = items[REMOVE_CRUNCHYROLL_ADS_SETTING_KEY] === true;
                const wrapperDisplay = window.getComputedStyle(wrapper).display;

                if (wrapperDisplay !== 'flex') {
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

                orderedVisibleSections.forEach((section) => {
                    if (section.element.parentElement !== wrapper) {
                        wrapper.appendChild(section.element);
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
