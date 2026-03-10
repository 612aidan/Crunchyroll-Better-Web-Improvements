/**
 * Content script:
 * Adds a live seasonal collection on the homepage and keeps it alive across SPA navigation.
 */

const homepageSectionsShared = (() => {
    const fallback = {
        HOMEPAGE_SECTIONS_STORAGE_KEY: 'homepageSections',
        HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY: 'homepageDiscoveredSections',
        HOMEPAGE_UNMATCHED_BUCKET_ID: 'unmatched-sections-bucket',
        HOMEPAGE_STAGING_CONTAINER_ID: 'crbw-homepage-staging',
        HOMEPAGE_SECTION_IDS: {
            NEXT_SEASON: 'next-season',
            TOP_SERIES_POPULAR: 'top-series-popular',
            TOP_SERIES_REVIEWED: 'top-series-reviewed',
            TOP_MOVIES_POPULAR: 'top-movies-popular',
            TOP_MOVIES_REVIEWED: 'top-movies-reviewed'
        },
        getDefaultHomepageSections() {
            return [
                { id: 'next-season', enabled: true, order: 0 },
                { id: 'top-series-popular', enabled: true, order: 1 },
                { id: 'top-series-reviewed', enabled: true, order: 2 },
                { id: 'top-movies-popular', enabled: true, order: 3 },
                { id: 'top-movies-reviewed', enabled: true, order: 4 },
                { id: 'unmatched-sections-bucket', enabled: true, order: 9999 }
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
                kind: section.id === this.HOMEPAGE_UNMATCHED_BUCKET_ID ? 'bucket' : 'custom'
            }));
        }
    };

    const merged = Object.assign(fallback, globalThis.CRBWHomepageSections || {});
    globalThis.CRBWHomepageSections = merged;
    return merged;
})();

const COLLECTION_DATA_T = 'custom-next-season-collection';
const MAX_COLLECTION_ITEMS = 12;
const INSERT_RETRY_DELAY_MS = 250;
const INSERT_MAX_ATTEMPTS = 4;
const INSERT_FAILURE_COOLDOWN_MS = 5 * 60 * 1000;
const HOMEPAGE_SECTION_ID = homepageSectionsShared.HOMEPAGE_SECTION_IDS.NEXT_SEASON;
const HOMEPAGE_SECTIONS_STORAGE_KEY = homepageSectionsShared.HOMEPAGE_SECTIONS_STORAGE_KEY;
const HOMEPAGE_STAGING_CONTAINER_ID = homepageSectionsShared.HOMEPAGE_STAGING_CONTAINER_ID || 'crbw-homepage-staging';
const NEXT_SEASON_STYLE_ID = 'crbw-next-season-styles';

let collectionInsertPromise = null;
let collectionRetryBlockedUntil = 0;
let hasLoggedCollectionFailure = false;
let homepageSectionsConfig = homepageSectionsShared.getDefaultHomepageSections();
let previousEnabledState = null;
let remountObserver = null;
let remountTimeout = null;
let isContextInvalidated = false;

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

function getCollectionLanguage() {
    const urlPath = window.location.pathname;
    const match = urlPath.match(/^\/(es|es-es|pt|pt-br|pt-pt|fr|de|id|it|ru|ar|hi)\//);

    if (!match) {
        return 'en';
    }

    return match[1].startsWith('es') ? 'es' :
        match[1].startsWith('pt') ? 'pt' :
        match[1].startsWith('fr') ? 'fr' :
        match[1].startsWith('de') ? 'de' :
        match[1].startsWith('id') ? 'id' :
        match[1].startsWith('it') ? 'it' :
        match[1].startsWith('ru') ? 'ru' :
        match[1].startsWith('ar') ? 'ar' :
        match[1].startsWith('hi') ? 'hi' : 'en';
}

function getCollectionTitle() {
    const language = getCollectionLanguage();
    const translations = {
        en: 'Next Season',
        es: 'Next Season',
        pt: 'Proxima Temporada',
        fr: 'Prochaine Saison',
        de: 'Nachste Staffel',
        id: 'Musim Berikutnya',
        it: 'Prossima Stagione',
        ru: 'Следующий Сезон',
        ar: 'الموسم القادم',
        hi: 'Next Season'
    };

    return translations[language] || translations.en;
}

function getUpcomingLabel() {
    const language = getCollectionLanguage();
    const translations = {
        en: 'Upcoming',
        es: 'Upcoming',
        pt: 'Em Breve',
        fr: 'Prochainement',
        de: 'Bald Verfugbar',
        id: 'Mendatang',
        it: 'Prossimamente',
        ru: 'Скоро',
        ar: 'قريبا',
        hi: 'Upcoming'
    };

    return translations[language] || translations.en;
}

function toRelativeCrunchyrollUrl(url) {
    return String(url || '').replace(/^https?:\/\/www\.crunchyroll\.com/, '');
}

function createCollectionItem(item, index, seasonLabel) {
    const link = toRelativeCrunchyrollUrl(item.URL || item.url || '');
    const title = item.Title || item.title || 'Untitled';
    const image = item.Image || item.image || '';

    return `
        <div class="crbw-next-season-item" data-t="season-card-${index + 1}">
            <a href="${link}" class="crbw-next-season-link" aria-label="${title}">
                <div class="crbw-next-season-card">
                    <img src="${image}" alt="${title}" loading="eager">
                    <div class="crbw-next-season-title">${title}</div>
                </div>
            </a>
            <div class="crbw-next-season-meta">${seasonLabel}</div>
        </div>
    `;
}

function ensureCollectionStyles() {
    if (document.getElementById(NEXT_SEASON_STYLE_ID)) {
        return;
    }

    const style = document.createElement('style');
    style.id = NEXT_SEASON_STYLE_ID;
    style.textContent = `
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

        .crbw-next-season-carousel-shell {
            position: relative;
        }

        .crbw-next-season-carousel-content {
            position: relative;
        }

        .crbw-next-season-title-container {
            margin: 12px 0 0 0;
            max-width: none;
        }

        .crbw-next-season-feed-header {
            align-items: flex-start;
            display: flex;
            flex-wrap: wrap;
            padding-block-end: .35rem;
            position: relative;
        }

        .crbw-next-season-carousel {
            position: relative;
            margin: 0 0 8px 0;
            max-width: none;
            overflow: visible;
            padding: 0;
        }

        .crbw-next-season-track {
            display: flex;
            align-items: flex-start;
            overflow-x: auto;
            overflow-y: hidden;
            overscroll-behavior-x: contain;
            scroll-behavior: smooth;
            scrollbar-width: none;
            padding-bottom: 0;
        }

        .crbw-next-season-track::-webkit-scrollbar {
            display: none;
        }

        .crbw-next-season-item {
            margin: 0 20px;
            flex: 0 0 auto;
            width: calc(20% - 20px);
            min-width: 140px;
        }

        .crbw-next-season-item:first-child {
            margin-left: 0;
        }

        .crbw-next-season-item:last-child {
            margin-right: 0;
        }

        .crbw-next-season-link {
            text-decoration: none;
            color: inherit;
            display: block;
        }

        .crbw-next-season-card {
            border-radius: 8px;
            overflow: hidden;
            background: #1a1a1a;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }

        .crbw-next-season-card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
        }

        .crbw-next-season-card img {
            width: 100%;
            aspect-ratio: 2 / 3;
            object-fit: cover;
            display: block;
        }

        .crbw-next-season-title {
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
            text-align: center;
        }

        .crbw-next-season-meta {
            color: rgba(255, 255, 255, 0.72);
            font-size: 0.8rem;
            padding: 8px 4px 0;
            text-align: center;
        }

        .crbw-next-season-arrow {
            position: absolute;
            top: calc(50% + 10px);
            transform: translateY(-50%);
            border: none;
            color: #fff;
            font-size: 3em;
            padding: 0;
            width: 50px;
            height: calc(100% - 20px);
            cursor: pointer;
            z-index: 20;
            opacity: 0.7;
            background: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0));
        }

        .crbw-next-season-arrow-right {
            right: 10px;
            background: linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0));
        }

        .crbw-next-season-arrow-left {
            left: 10px;
        }

        .crbw-next-season-arrow:hover {
            opacity: 1;
        }

        .crbw-next-season-arrow:disabled {
            opacity: 0 !important;
            cursor: default;
            pointer-events: none;
        }

        @media (min-width: 1600px) {
            .crbw-next-season-item {
                width: calc(15% - 5px);
            }
        }

        @media (max-width: 1366px) and (min-width: 1024px) {
            .crbw-next-season-item {
                width: calc(20% - 27px);
                margin: 0 15px;
                min-width: 160px;
            }
        }

        @media (max-width: 1023px) and (min-width: 768px) {
            .crbw-next-season-item {
                width: calc(24% - 1px);
                margin: 0 5px;
                min-width: 159px;
            }
        }

        @media (max-width: 767px) {
            .crbw-next-season-carousel,
            .crbw-next-season-title-container .crbw-next-season-title-inner {
                padding: 0 14px;
            }

            .crbw-next-season-item {
                width: calc(48% - 8px);
                margin: 0 8px;
                min-width: 150px;
            }
        }
    `;

    document.head.appendChild(style);
    homepageSectionsShared.ensureHomepageSectionInlineGutterWatcher?.();
}

function updateArrowVisibility(track, leftButton, rightButton) {
    const scrollMax = track.scrollWidth - track.clientWidth;
    const scrollPosition = track.scrollLeft;
    leftButton.disabled = scrollPosition < 5;
    rightButton.disabled = scrollPosition > scrollMax - 5;
}

function calculateScrollStep(track) {
    const firstItem = track.querySelector('.crbw-next-season-item');
    if (!firstItem) {
        return 250;
    }

    const rect = firstItem.getBoundingClientRect();
    const style = window.getComputedStyle(firstItem);
    const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    return (rect.width + margin) * 5;
}

function setupCarouselLogic(carouselContainer, track) {
    const leftButton = carouselContainer.querySelector('.crbw-next-season-arrow-left');
    const rightButton = carouselContainer.querySelector('.crbw-next-season-arrow-right');

    if (!leftButton || !rightButton) {
        return;
    }

    const handleScroll = () => {
        updateArrowVisibility(track, leftButton, rightButton);
    };
    const handleButtonClick = (direction) => {
        const step = calculateScrollStep(track) * direction;
        track.scrollBy({ left: step, behavior: 'smooth' });
    };

    handleScroll();
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

async function loadSeasonCollectionData() {
    if (!isExtensionContextValid()) {
        throw new Error('Extension context invalidated');
    }

    const response = await chrome.runtime.sendMessage({ action: 'fetchNextSeasonCatalog' });
    if (!response?.success) {
        throw new Error(response?.error || 'Failed to load season collection data.');
    }

    if (!Array.isArray(response.data) || response.data.length === 0) {
        throw new Error(response.warning || 'No next season data was available.');
    }

    const data = Array.isArray(response.data) ? response.data : [];
    const items = data
        .filter(item => (item.URL || item.url) && (item.Image || item.image))
        .sort((a, b) => {
            const left = Number(a.Popularity || a.popularity || Number.MAX_SAFE_INTEGER);
            const right = Number(b.Popularity || b.popularity || Number.MAX_SAFE_INTEGER);

            if (response.source === 'mal') {
                return left - right;
            }

            return right - left;
        })
        .slice(0, MAX_COLLECTION_ITEMS);

    return {
        items,
        seasonLabel: response.seasonLabel || 'Next Season',
        isFallback: true
    };
}

async function createCustomCollectionWrapper() {
    const { items, seasonLabel, isFallback } = await loadSeasonCollectionData();
    if (items.length === 0) {
        return null;
    }

    ensureCollectionStyles();

    const displayLabel = isFallback ? getUpcomingLabel() : seasonLabel;

    const wrapper = document.createElement('section');
    wrapper.className = 'browse-collection-wrapper crbw-homepage-section';
    wrapper.setAttribute('data-t', COLLECTION_DATA_T);
    wrapper.setAttribute('data-crbw-homepage-section', HOMEPAGE_SECTION_ID);

    const titleContainer = document.createElement('div');
    titleContainer.className = 'crbw-next-season-title-container';
    titleContainer.innerHTML = `
        <div class="container--cq5XE crbw-next-season-title-inner">
            <div class="crbw-next-season-feed-header">
                <h2 class="heading--nKNOf heading--is-bold--DUljF heading--is-m--7bv3g heading--is-family-type-two--U8YNl feed-header__title--DMRD6"></h2>
            </div>
        </div>
    `;
    const title = titleContainer.querySelector('h2');
    title.textContent = getCollectionTitle();

    const carouselContainer = document.createElement('section');
    carouselContainer.className = 'crbw-next-season-carousel';
    carouselContainer.innerHTML = `
        <div class="container--cq5XE container--has-no-gutters--WqnNJ">
            <div class="wide-cards-carousel__container--IMk9g">
                <div class="carousel--uuuFa wide-cards-carousel--Z62BE wide-cards-carousel--in-browse-layout--k-yJA" aria-label="${getCollectionTitle()}" role="region" aria-roledescription="Carousel">
                    <div class="container--cq5XE wide-cards-carousel__content-wrapper--oUiNK">
                        <button class="crbw-next-season-arrow crbw-next-season-arrow-left" type="button" aria-label="Previous"><span>&#10094;</span></button>
                        <div class="wide-cards-carousel__cards-frame--5t5GO">
                            <div class="carousel-scroller--2cYvp">
                                <div class="carousel-scroller__wrapper--bCIvZ">
                                    <div class="crbw-next-season-track"></div>
                                </div>
                            </div>
                        </div>
                        <button class="crbw-next-season-arrow crbw-next-season-arrow-right" type="button" aria-label="Next"><span>&#10095;</span></button>
                    </div>
                </div>
            </div>
        </div>
    `;

    const track = carouselContainer.querySelector('.crbw-next-season-track');
    track.innerHTML = items.map((item, index) => createCollectionItem(item, index, displayLabel)).join('');

    wrapper.appendChild(titleContainer);
    wrapper.appendChild(carouselContainer);
    setupCarouselLogic(carouselContainer, track);

    return wrapper;
}

function removeExistingCollection() {
    const existing = document.querySelector(`[data-t="${COLLECTION_DATA_T}"]`);
    if (existing) {
        existing.remove();
    }
}

function isSectionEnabled() {
    const sectionsMap = homepageSectionsShared.buildHomepageSectionsMap(homepageSectionsConfig);
    return sectionsMap[HOMEPAGE_SECTION_ID]?.enabled !== false;
}

function getEnabledStateSignature(sections) {
    const sectionsMap = homepageSectionsShared.buildHomepageSectionsMap(sections);
    return JSON.stringify({
        [HOMEPAGE_SECTION_ID]: sectionsMap[HOMEPAGE_SECTION_ID]?.enabled !== false
    });
}

function refreshCollection() {
    if (!isSectionEnabled()) {
        removeExistingCollection();
        return;
    }

    insertCustomCollection();
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function findMainContainer() {
    for (let attempt = 0; attempt < INSERT_MAX_ATTEMPTS; attempt += 1) {
        const mainContainer = document.body;
        if (mainContainer) {
            return mainContainer;
        }

        await wait(INSERT_RETRY_DELAY_MS);
    }

    return null;
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

function hasMissingEnabledCollection() {
    return isSectionEnabled() && !document.querySelector(`[data-t="${COLLECTION_DATA_T}"]`);
}

function scheduleRemountCheck() {
    if (remountTimeout) {
        clearTimeout(remountTimeout);
    }

    remountTimeout = setTimeout(() => {
        remountTimeout = null;

        if (!hasMissingEnabledCollection()) {
            return;
        }

        console.log('ℹ️ Next Season section was removed from the DOM. Remounting it.');
        insertCustomCollection();
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

async function insertCustomCollection() {
    if (!isExtensionContextValid()) {
        return null;
    }

    if (collectionInsertPromise || Date.now() < collectionRetryBlockedUntil) {
        return collectionInsertPromise;
    }

    collectionInsertPromise = (async () => {
        if (!isSectionEnabled()) {
            removeExistingCollection();
            return;
        }

        const existingCollection = document.querySelector(`[data-t="${COLLECTION_DATA_T}"]`);
        if (existingCollection) {
            return;
        }

        const mainContainer = await findMainContainer();
        if (!mainContainer) {
            return;
        }

        try {
            const customCollection = await createCustomCollectionWrapper();
            if (!customCollection) {
                collectionRetryBlockedUntil = Date.now() + INSERT_FAILURE_COOLDOWN_MS;
                if (!hasLoggedCollectionFailure) {
                    console.warn('⚠️ Upcoming season data was unavailable. The Next Season collection was skipped.');
                    hasLoggedCollectionFailure = true;
                }
                return;
            }

            removeExistingCollection();
            getStagingContainer().appendChild(customCollection);
            homepageSectionsShared.scheduleHomepageSectionInlineGutterSync?.();
            hasLoggedCollectionFailure = false;
            collectionRetryBlockedUntil = 0;
            console.log('✅ Next Season section prepared for the homepage layout manager.');
        } catch (error) {
            if (String(error?.message || error).includes('Extension context invalidated')) {
                isContextInvalidated = true;
                return;
            }

            collectionRetryBlockedUntil = Date.now() + INSERT_FAILURE_COOLDOWN_MS;
            if (!hasLoggedCollectionFailure) {
                console.warn(`⚠️ Failed to load the Next Season collection: ${error.message}`);
                hasLoggedCollectionFailure = true;
            }
        }
    })().finally(() => {
        collectionInsertPromise = null;
    });

    return collectionInsertPromise;
}

function initializePersistence() {
    const targetNode = document.body;
    if (!targetNode) {
        return;
    }

    refreshCollection();

    const observer = new MutationObserver(() => {
        setTimeout(() => {
            const mainContainer = document.body;
            const customCollection = document.querySelector(`[data-t="${COLLECTION_DATA_T}"]`);

            if (mainContainer && !customCollection && isSectionEnabled()) {
                insertCustomCollection();
            }
        }, 100);
    });

    observer.observe(targetNode, { childList: true, subtree: true });
}

runWithValidContext(() => chrome.storage.local.get([HOMEPAGE_SECTIONS_STORAGE_KEY], (settings) => {
    if (!isExtensionContextValid()) {
        return;
    }

    homepageSectionsConfig = homepageSectionsShared.normalizeHomepageSections(
        settings[HOMEPAGE_SECTIONS_STORAGE_KEY]
    );
    previousEnabledState = getEnabledStateSignature(homepageSectionsConfig);
    startRemountObserver();
    initializePersistence();
}));

runWithValidContext(() => chrome.storage.onChanged.addListener((changes, areaName) => {
    if (!isExtensionContextValid()) {
        return;
    }

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
    startRemountObserver();
    refreshCollection();
}));
