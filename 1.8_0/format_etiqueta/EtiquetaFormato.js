(function() {

const MEDIA_SETTING_KEY = 'mediaLabel'; 
const GLOBAL_DATA_KEY2 = 'CRB_FORMAT_DATA';


// =================================================================
// === LANGUAGE DETECTION FOR LABEL TRANSLATION ===
// =================================================================

/**
 * 🗺️ Determines the page language and returns translations for "Series" and "Movie".
 * @returns {{Series: string, Movie: string}} Object containing the translations.
 */
function getTranslatedMediaText() {
    const urlPath = window.location.pathname;
    let langCode = 'en'; // Default to English

    // Extract the language code from the first URL segment if present (for example `/es/`, `/pt-br/`)
    const match = urlPath.match(/^\/(es|es-es|pt|pt-br|pt-pt|fr|de|id|it|ru|ar|hi)\//);
    
    if (match) {
        // Map regional variants to primary language codes
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

    // Translation map for "Series" and "Movie"
    const translations = {
        'en': { Series: 'SERIES', Movie: 'MOVIE' },
        'es': { Series: 'SERIES', Movie: 'MOVIE' },
        'pt': { Series: 'SÉRIE', Movie: 'FILME' },
        'fr': { Series: 'SÉRIE', Movie: 'FILM' },
        'de': { Series: 'SERIE', Movie: 'FILM' },
        'id': { Series: 'SERI', Movie: 'FILM' },
        'it': { Series: 'SERIE', Movie: 'FILM' },
        'ru': { Series: 'СЕРИАЛ', Movie: 'ФИЛЬМ' },
        'ar': { Series: 'مسلسل', Movie: 'فيلم' },
        'hi': { Series: 'श्रृंखला', Movie: 'फिल्म' }
    };

    return translations[langCode] || translations['en'];
}

// Resolve the translations once.
const MEDIA_TRANSLATIONS = getTranslatedMediaText();


// ----------------------------------------------------------------------
// MAIN FEATURE FUNCTION (CONTROLLED BY THE TOGGLE)
// ----------------------------------------------------------------------

function applyMediaLabel() {

    // ====================================================
    // 🎨 STYLE CONFIGURATION AND CONSTANTS
    // ====================================================
    const FORMAT_COLORS = {
        'Serie': { text: MEDIA_TRANSLATIONS.Series, color: 'rgba(0, 99, 241, 1.0)' }, // Blue (#17a2b8)
        'Movie': { text: MEDIA_TRANSLATIONS.Movie, color: 'rgba(31, 131, 41, 1.0)' }, // Green (#1f8329)
    };
    const INJECTED_FLAG = 'data-format-injected';
    const POSTER_WRAPPER_SELECTOR = '.browse-card__poster-wrapper--pU-AW';
    const CARD_SELECTOR = '.browse-card';


    // ====================================================
    // ⚙️ DATA LOOKUP HELPERS
    // ====================================================

    /**
     * Extract the slug from a link element (`<a>`) using its `href`.
     * @param {HTMLElement} linkElement - The poster `<a>` element.
     * @returns {string|null} The slug or null.
     */
    function getSlugFromLink(linkElement) {
        if (linkElement && linkElement.href) {
        // 1. Try to capture the slug from the series page pattern (/series/ID/slug)
        let match = linkElement.href.match(/\/series\/[A-Za-z0-9]+\/([^/]+)/);
        
        if (match && match[1]) {
            return match[1];
        }

        // 2. If that fails, try to capture the slug from the episode/movie page pattern (/watch/ID/slug)
        // Use `[^/]+` to capture the last URL segment before any additional slash
        match = linkElement.href.match(/\/watch\/[A-Za-z0-9]+\/([^/]+)/);
        
        if (match && match[1]) {
            // Example watch-page slug: `bang-dream-episode-of-roselia-i-promise`
            // Use it to look up the matching record in the data map.
            return match[1];
        }
    }
    return null;
}

    /**
     * Looks up the format ('Series' or 'Movie') using the slug in the array.
     * @param {string} slug - The series/movie slug.
     * @returns {string|null} The format or null.
     */
    function getFormatFromSlug(slug) {
        if (!slug || !FORMAT_DATA_MAP) {
            return null;
        }
        
        // Search the object array with `Array.find()`
        const data = FORMAT_DATA_MAP.find(item => {
            return String(item.Slug) === slug; 
        });
        
        return data ? data.Formato : null;
    }


    // ====================================================
    // MAIN FUNCTION: ADD THE DYNAMIC LABEL
    // ====================================================
    function addCustomLabel(cardElement) {
        const posterWrapper = cardElement.querySelector(POSTER_WRAPPER_SELECTOR);

        if (!posterWrapper) {
            return;
        }

        // Use the global flag to prevent duplicates
        if (cardElement.hasAttribute(INJECTED_FLAG)) {
            return;
        }

        // 1. Extract the slug from the link
        const slug = getSlugFromLink(posterWrapper);
        if (!slug) {
            return;
        }

        // 2. Look up the format using the slug
        const format = getFormatFromSlug(slug);

        // Skip injection if no supported format is found
        if (!format || !FORMAT_COLORS[format]) {
            return;
        }
        
        const tagInfo = FORMAT_COLORS[format];


        // 3. Create and configure the new label element
        const newLabel = document.createElement('div');
        newLabel.textContent = tagInfo.text; // Dynamic label text (SERIES or MOVIE)
        newLabel.className = 'cr-format-badge'; // Optional class for future external CSS

        // 4. Apply the dynamic color styles
        newLabel.style.position = 'absolute';
        newLabel.style.top = '8px'; 
        newLabel.style.right = '8px'; 
        newLabel.style.zIndex = '0'; 
        newLabel.style.backgroundColor = tagInfo.color; // Dynamic color
        newLabel.style.color = 'white';
        newLabel.style.padding = '3px 6px';
        newLabel.style.borderRadius = '3px';
        newLabel.style.fontSize = '11px';
        newLabel.style.fontWeight = '700';
        newLabel.style.pointerEvents = 'none'; 

        // 5. Inject the label
        posterWrapper.style.position = 'relative'; 
        posterWrapper.appendChild(newLabel);

        // 6. Mark the card as processed
        cardElement.setAttribute(INJECTED_FLAG, 'true');
    }

    // ----------------------------------------------------
    // DYNAMIC DETECTION LOGIC (MutationObserver)
    // ----------------------------------------------------

    // Process all cards currently found on the page.
    function processAllCards() {
        // Use the most stable selector: `.browse-card`
        const allCards = document.querySelectorAll(CARD_SELECTOR);

        allCards.forEach(card => {
            addCustomLabel(card);
        });
    }

    // Create a new observer
    const observer = new MutationObserver((mutationsList, observer) => {
        processAllCards();
    });

    const observerConfig = {
        childList: true, 
        subtree: true   
    };

observer.observe(document.body, observerConfig);
    
    // Store the observer somewhere accessible in case it needs to be stopped/restarted later.
    window.mediaLabelObserver = observer;
}

// ----------------------------------------------------------------------
// 3. CONTROL LOGIC (TOGGLE)
// ----------------------------------------------------------------------

function initializeMediaLabelFeature() {
    // Read the saved toggle state from extension storage
    chrome.storage.local.get([MEDIA_SETTING_KEY], (settings) => {
        
        const isMediaEnabled = settings[MEDIA_SETTING_KEY]; 

        // Run the feature only when the toggle is enabled.
        if (isMediaEnabled) {
            console.log("CR Better Web: Enabling media format labels.");
            applyMediaLabel(); // Llama a la función
        } else {
            console.log("CR Better Web: Media format labels disabled.");
        }
    });
}


// ----------------------------------------------------------------------
// 4. SCRIPT START
// ----------------------------------------------------------------------
// Start the configuration check.
initializeMediaLabelFeature();

})();
