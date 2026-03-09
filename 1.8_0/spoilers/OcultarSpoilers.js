const SPOILERS_SETTING_KEY = 'hideSpoilers'; 

// ----------------------------------------------------------------------
// MAIN FEATURE FUNCTION (CONTROLLED BY THE TOGGLE)
// ----------------------------------------------------------------------

function applyHideSpoilers() {

// ----------------------------------------------------------------------
// CSS STYLE CONSTANTS
// ----------------------------------------------------------------------

const BLUR_STYLE_ID = 'cr-spoiler-blur-styles';

const BLUR_CSS_RULES = `
/* Blur thumbnails in the wide layout on the series page */
.erc-playable-collection.state-wide-layout .playable-thumbnail__image--AgM1B {
    filter: blur(8px) !important;
}

/* Blur for thumbnails in the "More Episodes" section of the playback page */
.erc-watch-more-episodes .playable-thumbnail__image--AgM1B {
    filter: blur(5px) !important;
}
`;


/**
 * Inject the blur CSS rules into the document head.
 */
function injectCustomStyles() {
    if (document.getElementById(BLUR_STYLE_ID)) return; // Prevent duplicate injection

    const style = document.createElement('style');
    style.id = BLUR_STYLE_ID;
    style.textContent = BLUR_CSS_RULES;

    const target = document.head || document.documentElement;
    if (target) {
        target.appendChild(style);
        console.log('Thumbnail blur styles injected.');
    }
}

// ----------------------------------------------------------------------
// CENSORING CONSTANTS AND FUNCTIONS
// ----------------------------------------------------------------------

// Title Selectors (H1/H3/A)
const EPISODE_TITLE_SELECTORS = [
    '.playable-card__title--rgmp7 a',               // 1. Tarjetas grandes de lista
    '.erc-current-media-info h1.title',             // 2. Título en la vista de reproducción principal
    '.playable-card-mini-static__title--fp9y6 a',   // 3. Título en las tarjetas mini
    '.playable-card-hover__title--qY0dg',           // 4. Título en el hover de la tarjeta
];

// Description Selectors (P)
const EPISODE_DESCRIPTION_SELECTORS = [
    '.expandable-section__text---00oG', 
    '.playable-card-hover__description--4Lpe4',
];

const SPOILER_REPLACEMENT_TITLE = ' - [NO SPOILERS]';
const SPOILER_REPLACEMENT_DESC = '[NO DESCRIPTION SPOILER]';

function censorEpisodeTitles() {
    try {
        let censoredCount = 0;
        EPISODE_TITLE_SELECTORS.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                const textElement = element.tagName === 'A' ? element : element;
                if (textElement && textElement.textContent) {
                    const originalText = textElement.textContent.trim();
                    const regex = /^(.*?)\s\-\s.*$/; 
                    const match = originalText.match(regex);
                    if (match && match[1]) {
                        const episodeIdPart = match[1].trim();
                        const censoredText = `${episodeIdPart}${SPOILER_REPLACEMENT_TITLE}`;
                        textElement.textContent = censoredText;
                        if (element.tagName === 'A' || element.hasAttribute('data-t')) { 
                             element.setAttribute('aria-label', censoredText);
                        }
                        censoredCount++;
                    }
                }
            });
        });
        return true;
    } catch (error) {
        console.error(`ERROR en censorEpisodeTitles: ${error.message}`);
        return false;
    }
}

function censorDescriptions() {
    try {
        let censoredCount = 0;
        EPISODE_DESCRIPTION_SELECTORS.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (element.textContent.trim() !== SPOILER_REPLACEMENT_DESC) {
                    element.textContent = SPOILER_REPLACEMENT_DESC;
                    censoredCount++;
                }
            });
        });
        if (censoredCount > 0) {
            // console.log(`Descripciones de episodios censuradas: ${censoredCount}`);
        }
        return true;
    } catch (error) {
        console.error(`ERROR en censorDescriptions: ${error.message}`);
        return false;
    }
}

// ----------------------------------------------------------------------
// Content Change Detection (Persistence)
// ----------------------------------------------------------------------

const OBSERVER_TARGET_SELECTOR = 'div[data-t="episode-list"], .erc-current-media-info';
const TOP_CONTROLS_SELECTOR = '.top-controls';
const EPISODE_CARD_SELECTOR_GENERAL = '.playable-card--GnRbX, .playable-card-mini-static__body--odiBS';
const HOVER_CARD_SELECTOR = '.playable-card-hover__body--PYTVW';


new MutationObserver((mutationsList) => {
    let contentChanged = false;

    if (location.href.includes('/series/') || location.href.includes('/watch/')) {
        
        // Ensure the styles are injected again if the head is rebuilt or persistence is needed
        injectCustomStyles(); 

        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                for (const node of mutation.addedNodes) {
                    if (node.nodeType === 1) {
                        if (node.matches(OBSERVER_TARGET_SELECTOR) ||
                            node.querySelector(EPISODE_CARD_SELECTOR_GENERAL) ||
                            node.querySelector(HOVER_CARD_SELECTOR) ||
                            node.querySelector(TOP_CONTROLS_SELECTOR)) {
                            
                            contentChanged = true;
                            break;
                        }
                    }
                }
            }
            if (contentChanged) break;
        }
    }

    if (contentChanged) {
        setTimeout(() => {
            censorEpisodeTitles(); 
            censorDescriptions();
        }, 100); 
    }
    
}).observe(document, { subtree: true, childList: true });


// SAFE STARTUP
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject the blur styles
    injectCustomStyles(); 
    
    // 2. Censor text
    censorEpisodeTitles(); 
    censorDescriptions();
});

}

// ----------------------------------------------------------------------
// 3. CONTROL LOGIC (TOGGLE)
// ----------------------------------------------------------------------

function initializeHideSpoilersFeature() {
    // Read the toggle state saved in the extension
    chrome.storage.local.get([SPOILERS_SETTING_KEY], (settings) => {
        
        const isSpoilersEnabled = settings[SPOILERS_SETTING_KEY]; 

        // Run the feature only when the toggle is enabled.
        if (isSpoilersEnabled) {
            console.log("CR Better Web: Enabling Hide Spoilers.");
            applyHideSpoilers();
        } else {
            console.log("CR Better Web: Hide Spoilers is disabled.");
        }
    });
}


// ----------------------------------------------------------------------
// 4. SCRIPT STARTUP
// ----------------------------------------------------------------------
// Start the configuration check process.
initializeHideSpoilersFeature();
