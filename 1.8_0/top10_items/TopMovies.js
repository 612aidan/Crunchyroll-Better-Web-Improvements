(async function () {
    console.log("🚀 Top 10 Carousel (Final Version, Simplified Loading, Dual Carousel) loading...");
    const fallbackHomepageSectionsShared = {
        HOMEPAGE_SECTIONS_STORAGE_KEY: 'homepageSections',
        HOMEPAGE_STAGING_CONTAINER_ID: 'crbw-homepage-staging',
        HOMEPAGE_SECTION_IDS: {
            TOP_MOVIES_POPULAR: 'top-movies-popular',
            TOP_MOVIES_REVIEWED: 'top-movies-reviewed'
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
    const HOMEPAGE_SECTIONS_STORAGE_KEY = homepageSectionsShared.HOMEPAGE_SECTIONS_STORAGE_KEY;
    const HOMEPAGE_STAGING_CONTAINER_ID = homepageSectionsShared.HOMEPAGE_STAGING_CONTAINER_ID || 'crbw-homepage-staging';
    const MOVIES_SECTION_IDS = {
        popular: homepageSectionsShared.HOMEPAGE_SECTION_IDS.TOP_MOVIES_POPULAR,
        reviewed: homepageSectionsShared.HOMEPAGE_SECTION_IDS.TOP_MOVIES_REVIEWED
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
                popular: "The 10 most popular anime movies",
                reviewed: "The 10 best-reviewed anime movies"
            },
            'es': {
                popular: "The 10 Most Popular Anime Movies",
                reviewed: "The 10 Best-Reviewed Anime Movies"
            },
            'pt': {
                popular: "Os 10 filmes de anime mais populares",
                reviewed: "Os 10 filmes de anime mais bem avaliados"
            },
            'fr': {
                popular: "Les 10 films d'animation japonais les plus populaires",
                reviewed: "Les 10 films d'animation japonais les mieux notés"
            },
            'de': {
                popular: "Die 10 beliebtesten Anime-Filme",
                reviewed: "Die 10 am besten bewerteten Anime-Filme"
            },
            'id': {
                popular: "10 film anime paling populer",
                reviewed: "10 film anime dengan ulasan terbaik"
            },
            'it': {
                popular: "I 10 film anime più popolari",
                reviewed: "I 10 film anime con le migliori recensioni"
            },
            'ru': {
                popular: "10 самых популярных аниме-фильмов",
                reviewed: "10 аниме-фильмов с лучшими отзывами"
            },
            'ar': {
                popular: "أفضل 10 أفلام أنمي شعبية",
                reviewed: "أفضل 10 أفلام أنمي تقييماً"
            },
            'hi': { // Hindi
                popular: "10 सबसे लोकप्रिय एनीме फिल्में",
                reviewed: "10 सर्वश्रेष्ठ समीक्षित एनीमे फिल्में"
            }
        };

        const titles = translations[langCode] || translations['en'];
        console.log(`ℹ️ Detected language: ${langCode}. Titles used: ${titles.popular} / ${titles.reviewed}`);
        return titles;
    }

    const titles = getTitlesByLanguage(); // Resolve translated titles up front


    // =============================================================
    // 📍 KEY CHANGE: Asynchronous Region Detection
    // =============================================================
    let userRegion = '';

    try {
        // Try to get the region asynchronously
        const response = await chrome.runtime.sendMessage({ action: "getRegion" });

        if (response && response.error) {
            throw new Error(response.error);
        }
        
        userRegion = response ? response.region || '' : '';
        
        console.log(`🗺️ Detected user region: ${userRegion || 'None (Loading Everything)'}`);

    } catch (error) {
        console.warn("⚠️ Warning: Failed to get region (loading everything by default).", error);
        userRegion = ''; // Fail-open behavior: load everything if detection fails
    }
    // -------------------------------------------------------------------------


    // =============================================================
    // === 1. ASYNC DATA LOADING (SIMPLIFIED) ===
    // =============================================================
    
    let animesDB = [];
    
    try {
        // Simplified loading, as requested
        const url = chrome.runtime.getURL('database/animeMoviesDB.json');
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Error ${response.status}: Could not load the JSON file.`);
        }
        
        animesDB = await response.json();
        console.log(`✅ Anime database loaded. Total anime entries: ${animesDB.length}`);

    } catch (error) {
        console.error("❌ Fatal JSON loading error. The script is stopping.", error);
        return; // Stop the script if loading fails
    }

    // =================================================================
    // === 2. DATA PROCESSING LOGIC (SORTING AND MAPPING) ===
    // ================================================================= */

function generateTopLists(data) {
        // 1. Keep only Crunchyroll anime
        let filteredData = data.filter(item => item.Streaming === "Crunchyroll");
        
        console.log(`ℹ️ Crunchyroll anime before regional filtering: ${filteredData.length}`);

        // 2. Apply the region filter
        if (userRegion) {
            
            const regionUpper = userRegion.toUpperCase();
            
            filteredData = filteredData.filter(item => {
                const regions = item.availableRegions;
                
                // If the region list is empty, assume Worldwide for a fail-open behavior
                if (!regions || regions.length === 0) {
                    console.log(`[DEBUG-Region] Title without regions: ${item.Title}. Included under a Worldwide assumption.`);
                    return true;
                }

                const upperRegions = regions.map(r => r.toUpperCase());
                
                // Case 1: Available Worldwide
                if (upperRegions.includes("WORLDWIDE")) {
                    console.log(`[DEBUG-Region] Title: ${item.Title}. Matched: Worldwide.`);
                    return true;
                }

                // Case 2: Available in the specific region
                if (upperRegions.includes(regionUpper)) {
                    console.log(`[DEBUG-Region] Title: ${item.Title}. Matched: ${regionUpper}.`);
                    return true;
                }
                
                return false; // Excluded
            });
            console.log(`✅ Regional filtering complete. Available anime: ${filteredData.length}`);
        }
        // End region filtering

        if (filteredData.length === 0) {
            console.warn("⚠️ Warning: After filtering (Crunchyroll + region), there is no anime to show.");
            return { TOP10M_POPULAR: [], TOP10M_SCORE: [] };
        }


        const formatItem = (item, index) => ({
            rank: index + 1,
            title: item.Title,
            image: item.Image,
            // Ensure the URL is relative so it works inside Crunchyroll
            url: item.URL.startsWith('http') 
                 ? item.URL.replace(/https?:\/\/[a-z]{2}\.crunchyroll\.com(\/es)?/, '')
                 : item.URL
        });

        // 1. Generate the Top 10 by popularity
        const sortedByPopularity = [...filteredData].sort((a, b) => b.Popularity - a.Popularity);
        const TOP10M_POPULAR = sortedByPopularity.slice(0, 10).map(formatItem);

        // 2. Generate the Top 10 by score
        const sortedByScore = [...filteredData].sort((a, b) => b.Score - a.Score);
        const TOP10M_SCORE = sortedByScore.slice(0, 10).map(formatItem);

        return { TOP10M_POPULAR, TOP10M_SCORE };
    }

    const { TOP10M_POPULAR: TOP10M, TOP10M_SCORE: TOP10MScore } = generateTopLists(animesDB);
    
    // Final check: continue if at least one list has data
    if (TOP10M.length === 0 && TOP10MScore.length === 0) {
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
    #top10m-container {
    position: relative;
    margin: 0px 0px 8px 0px;
    max-width: none;
    overflow: visible;
    font-family: var(--body-font-family);
    padding: 0;
}

#top10mscore-container {
    position: relative;
    margin: 0px 0px 8px 0px;
    max-width: none;
    overflow: visible;
    font-family: var(--body-font-family);
    padding: 0;
}

    /* Contenedores de Título */
#top10m-title-container {
    margin: 12px 0px 0px 0px;
    max-width: none;
}

#top10mscore-title-container {
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
    .top10m-track, .top10mscore-track {
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
    .top10m-track::-webkit-scrollbar, .top10mscore-track::-webkit-scrollbar { display: none; }
    
    /* Ítems del carrusel */
    .top10m-item, .top10mscore-item {
        margin: 0 20px; 
        flex: 0 0 auto; 
        width: calc(20% - 20px); 
        min-width: 140px; 
    }
    .top10m-item:first-child, .top10mscore-item:first-child { margin-left: 0; }
    .top10m-item:last-child, .top10mscore-item:last-child { margin-right: 0; } 

    .top10m-link, .top10mscore-link {
        text-decoration: none; 
        color: inherit;
        display: block; 
        width: 100%;
        height: 100%;
    }

    /* ESTILO DE NÚMEROS: CAL SANS */
    .top10m-rank-sidebar, .top10mscore-rank-sidebar {
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
    .top10m-item:hover .top10m-rank-sidebar, .top10mscore-item:hover .top10mscore-rank-sidebar { 
        opacity: 1; 
    }

    /* Tarjeta Individual */
    .top10m-card, .top10mscore-card {
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
    .top10m-card:hover, .top10mscore-card:hover { 
      transform: scale(1.05); 
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.2); 
    }
    
    .top10m-card img, .top10mscore-card img {
      width: 100%;
      height: auto; 
      aspect-ratio: 2 / 3; 
      object-fit: cover;
      display: block;
    }
    
    .top10m-title, .top10mscore-title {
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
        .top10m-item, .top10mscore-item { width: calc(15% - 5px); }
        .top10m-rank-sidebar, .top10mscore-rank-sidebar { font-size: 10em; }
    }

    @media (max-width: 1599px) and (min-width: 1400px) {
        .top10m-item, .top10mscore-item { width: calc(19% - 15px); }
        .top10m-rank-sidebar, .top10mscore-rank-sidebar { font-size: 7em; }
    }
    
    @media (max-width: 1366px) and (min-width: 1024px) {
        .top10m-item, .top10mscore-item {
            width: calc(20% - 27px);
            margin: 0 15px;
            min-width: 160px; 
        }
    }

    @media (max-width: 1023px) and (min-width: 768px) {
        .top10m-item, .top10mscore-item {
            width: calc(24% - 1px);
            margin: 0 5px;
            min-width: 159px;
        }
    }

    @media (max-width: 767px) and (min-width: 568px) {
        .top10m-item, .top10mscore-item {
           width: calc(34% - 11px);
           margin: 0 5px;
           min-width: 148px; 
        }
    }
    
    @media (max-width: 567px) {
        #top10m-container, #top10m-title-container .container--cq5XE,
        #top10mscore-container, #top10mscore-title-container .container--cq5XE {
            padding: 0 20px;
        }
        
        .arrow-left { left: 0; }
        .arrow-right { right: 0; }
        
        .top10m-item, .top10mscore-item {
            width: calc(52% - 12px); 
            min-width: 133px; 
            margin: 0 5px;
        }
        .top10m-rank-sidebar, .top10mscore-rank-sidebar { font-size: 5em; }
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

    if (TOP10M.length > 0) {
        titleContainerViews = document.createElement("div");
        titleContainerViews.id = "top10m-title-container";
        titleContainerViews.innerHTML = `
            <div class="container--cq5XE">
                <div class="feed-header--ihqym">
                    <h2 class="heading--nKNOf heading--is-bold--DUljF heading--is-m--7bv3g heading--is-family-type-two--U8YNl feed-header__title--DMRD6">
                        ${titles.popular}
                    </h2>
                </div>
            </div>
        `;

        carouselContainerViews = document.createElement("section");
        carouselContainerViews.id = "top10m-container";
        carouselContainerViews.innerHTML = `
            <div class="container--cq5XE container--has-no-gutters--WqnNJ">
                <div class="wide-cards-carousel__container--IMk9g">
                    <div class="carousel--uuuFa wide-cards-carousel--Z62BE wide-cards-carousel--in-browse-layout--k-yJA" aria-label="${titles.popular}" role="region" aria-roledescription="Carousel">
                        <div class="container--cq5XE wide-cards-carousel__content-wrapper--oUiNK">
                            <button class="arrow-btn arrow-left" data-track-id="top10m-track" aria-label="Anterior"><span>&#10094;</span></button>
                            <div class="wide-cards-carousel__cards-frame--5t5GO">
                                <div class="carousel-scroller--2cYvp">
                                    <div class="carousel-scroller__wrapper--bCIvZ">
                                        <div class="top10m-track"></div>
                                    </div>
                                </div>
                            </div>
                            <button class="arrow-btn arrow-right" data-track-id="top10m-track" aria-label="Siguiente"><span>&#10095;</span></button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        trackViews = carouselContainerViews.querySelector(".top10m-track");
        TOP10M.forEach(item => {
            const itemContainer = document.createElement("div");
            itemContainer.className = "top10m-item";
            itemContainer.innerHTML = `
                <a href="${item.url}" class="top10m-link">
                    <div class="top10m-card">
                        <span class="top10m-rank-sidebar">${item.rank}</span> 
                        <img src="${item.image}" alt="Portada de ${item.title}">
                        <div class="top10m-title">${item.title}</div>
                    </div>
                </a>
            `;
            trackViews.appendChild(itemContainer);
        });

        sectionWrapperViews = document.createElement("section");
        sectionWrapperViews.className = "browse-collection-wrapper crbw-homepage-section";
        sectionWrapperViews.setAttribute("data-crbw-homepage-section", MOVIES_SECTION_IDS.popular);
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

    if (TOP10MScore.length > 0) {
        titleContainerScore = document.createElement("div");
        titleContainerScore.id = "top10mscore-title-container";
        titleContainerScore.innerHTML = `
            <div class="container--cq5XE">
                <div class="feed-header--ihqym">
                    <h2 class="heading--nKNOf heading--is-bold--DUljF heading--is-m--7bv3g heading--is-family-type-two--U8YNl feed-header__title--DMRD6">
                        ${titles.reviewed}
                    </h2>
                </div>
            </div>
        `;

        carouselContainerScore = document.createElement("section");
        carouselContainerScore.id = "top10mscore-container";
        carouselContainerScore.innerHTML = `
            <div class="container--cq5XE container--has-no-gutters--WqnNJ">
                <div class="wide-cards-carousel__container--IMk9g">
                    <div class="carousel--uuuFa wide-cards-carousel--Z62BE wide-cards-carousel--in-browse-layout--k-yJA" aria-label="${titles.reviewed}" role="region" aria-roledescription="Carousel">
                        <div class="container--cq5XE wide-cards-carousel__content-wrapper--oUiNK">
                            <button class="arrow-btn arrow-left" data-track-id="top10mscore-track" aria-label="Anterior"><span>&#10094;</span></button>
                            <div class="wide-cards-carousel__cards-frame--5t5GO">
                                <div class="carousel-scroller--2cYvp">
                                    <div class="carousel-scroller__wrapper--bCIvZ">
                                        <div class="top10mscore-track"></div>
                                    </div>
                                </div>
                            </div>
                            <button class="arrow-btn arrow-right" data-track-id="top10mscore-track" aria-label="Siguiente"><span>&#10095;</span></button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        trackScore = carouselContainerScore.querySelector(".top10mscore-track");
        TOP10MScore.forEach(item => {
            const itemContainer = document.createElement("div");
            itemContainer.className = "top10mscore-item";
            itemContainer.innerHTML = `
                <a href="${item.url}" class="top10mscore-link">
                    <div class="top10mscore-card">
                        <span class="top10mscore-rank-sidebar">${item.rank}</span> 
                        <img src="${item.image}" alt="Portada de ${item.title}">
                        <div class="top10mscore-title">${item.title}</div>
                    </div>
                </a>
            `;
            trackScore.appendChild(itemContainer);
        });

        sectionWrapperScore = document.createElement("section");
        sectionWrapperScore.className = "browse-collection-wrapper crbw-homepage-section";
        sectionWrapperScore.setAttribute("data-crbw-homepage-section", MOVIES_SECTION_IDS.reviewed);
        sectionWrapperScore.appendChild(titleContainerScore);
        sectionWrapperScore.appendChild(carouselContainerScore);
    }

// *****************************************************************
// === 4. LÓGICA DE INYECCIÓN Y SCROLL ===
// *****************************************************************

let injectionInterval = null;

function removeInjectedCarousels() {
    document.querySelectorAll('[data-crbw-homepage-section="top-movies-popular"], [data-crbw-homepage-section="top-movies-reviewed"]').forEach((element) => {
        element.remove();
    });

    const existingCarousel = document.querySelector('#top10m-container');
    const existingTitle = document.querySelector('#top10m-title-container');
    const existingCarouselScore = document.querySelector('#top10mscore-container');
    const existingTitleScore = document.querySelector('#top10mscore-title-container');

    if (existingCarousel) existingCarousel.remove();
    if (existingTitle) existingTitle.remove();
    if (existingCarouselScore) existingCarouselScore.remove();
    if (existingTitleScore) existingTitleScore.remove();
}

function getRenderableSections() {
    return [
        {
            id: MOVIES_SECTION_IDS.popular,
            wrapper: sectionWrapperViews,
            carousel: carouselContainerViews,
            track: trackViews,
            itemClass: '.top10m-item'
        },
        {
            id: MOVIES_SECTION_IDS.reviewed,
            wrapper: sectionWrapperScore,
            carousel: carouselContainerScore,
            track: trackScore,
            itemClass: '.top10mscore-item'
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
        [MOVIES_SECTION_IDS.popular]: sectionMap.get(MOVIES_SECTION_IDS.popular) !== false,
        [MOVIES_SECTION_IDS.reviewed]: sectionMap.get(MOVIES_SECTION_IDS.reviewed) !== false
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
        console.log(`✅ Prepared ${mountedCount} movie section(s) for the homepage layout manager.`);
    }

    return true;
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
            console.log('❌ Failed to find the homepage container for movie sections after 5 seconds.');
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
    startInjectionAttempt();
});
// Fin del (async function)
})();
