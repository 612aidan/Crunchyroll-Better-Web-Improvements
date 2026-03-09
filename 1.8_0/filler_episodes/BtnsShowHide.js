(function() {

const FILLER_SETTING_KEY = 'fillerLabel'; 

// ----------------------------------------------------------------------
// MAIN FEATURE FUNCTION (CONTROLLED BY THE TOGGLE)
// ----------------------------------------------------------------------

function applyFillerLabel() {

// content_filler_filter_v5.js - final solution with disabling on reordering

// --- SELECTOR CONSTANTS ---
const TOP_CONTROLS_SELECTOR = '.top-controls';
const EPISODE_CARD_SELECTOR = '.card'; // FIX: Hide the container to remove the gap
const EPISODE_TYPE_BADGE_SELECTOR = '.cr-episode-type-badge';
const FILLER_BUTTON_CONTAINER_CLASS = 'filler-filter-dropdown';
// Use the main episode list container class here
const EPISODE_CONTAINER_SELECTOR_MAIN = '.erc-season-episode-list';
const SORT_BUTTON_TRIGGER_SELECTOR = '[data-t="episode-sort-select"]';
const SORT_OPTIONS_CONTAINER_SELECTOR = '.dropdown-content__children--HW28H';
// New constant for the "Show More" button
const SHOW_MORE_BUTTON_SELECTOR = 'button[data-t="show-more-btn"]'; // Uses the button's data-t attribute

// --- STATE CONSTANTS ---
const IS_HIDDEN_FLAG = 'data-fillers-hidden';
const FILLER_TYPE = 'FILLER';

// --- BUTTON SVGs ---
const SVG_INACTIVE = `
<svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
    <path d="M0 0h48v48H0z" fill="none"/>
    <g id="Shopicon">
        <path d="M11.957,33.214L7.171,38L10,40.828l5.305-5.305C17.867,36.992,20.788,38,24,38c12,0,20-14,20-14s-2.953-5.159-7.957-9.214
            L40.829,10L38,7.172l-5.305,5.305C30.133,11.008,27.212,10,24,10C12,10,4,24,4,24S6.953,29.159,11.957,33.214z M16,24
            c0-4.418,3.582-8,8-8c1.483,0,2.867,0.411,4.058,1.114l-3.035,3.035C24.694,20.062,24.356,20,24,20c-2.206,0-4,1.794-4,4
            c0,0.356,0.062,0.694,0.149,1.023l-3.035,3.035C16.411,26.867,16,25.483,16,24z M32,24c0,4.418-3.582,8-8,8
            c-1.483,0-2.867-0.411-4.058-1.114l3.035-3.035C23.306,27.938,23.644,28,24,28c2.206,0,4-1.794,4-4
            c0-0.356-0.062-0.694-0.149-1.023l3.035-3.035C31.589,21.133,32,22.517,32,24z" fill="currentColor"/>
    </g>
</svg>
`;

const SVG_ACTIVE = `
<svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
    <path d="M0 0h48v48H0z" fill="none"/>
    <g id="Shopicon">
        <circle cx="24" cy="24" r="4" fill="currentColor"/>
        <path d="M24,38c12,0,20-14,20-14s-8-14-20-14S4,24,4,24S12,38,24,38z M24,16c4.418,0,8,3.582,8,8s-3.582,8-8,8s-8-3.582-8-8
            S19.582,16,24,16z" fill="currentColor"/>
    </g>
</svg>
`;

// =============================================================
// === LANGUAGE DETECTION AND BUTTON LABEL TRANSLATION ===
// =============================================================

function getButtonTranslations() {
    const urlPath = window.location.pathname;
    let langCode = 'en'; 

    const match = urlPath.match(/^\/(es|es-es|pt|pt-br|pt-pt|fr|de|id|it|ru|ar|hi)\//);
    
    if (match) {
        const detectedCode = match[1];
        langCode = detectedCode.startsWith('es') ? 'es' : 
                   detectedCode.startsWith('pt') ? 'pt' : 
                   detectedCode.startsWith('fr') ? 'fr' : 
                   detectedCode.startsWith('de') ? 'de' :
                   detectedCode.startsWith('id') ? 'id' :
                   detectedCode.startsWith('it') ? 'it' :
                   detectedCode.startsWith('ru') ? 'ru' :
                   detectedCode.startsWith('ar') ? 'ar' :
                   detectedCode.startsWith('hi') ? 'hi' : 'en';
    } 
    
    const translations = {
        'en': {
            btn_hide_filler: 'Hide Fillers',
            btn_show_filler: 'Show Fillers',
            aria_hide_filler: 'Hide Filler Episodes',
            aria_show_filler: 'Show Filler Episodes',
        },
        'es': {
            btn_hide_filler: 'Hide Fillers',
            btn_show_filler: 'Show Fillers',
            aria_hide_filler: 'Hide Filler Episodes',
            aria_show_filler: 'Show Filler Episodes',
        },
        'pt': {
            btn_hide_filler: 'Ocultar Enchimentos',
            btn_show_filler: 'Mostrar Enchimentos',
            aria_hide_filler: 'Ocultar Episódios de Enchimento',
            aria_show_filler: 'Mostrar Episódios de Enchimento',
        },
        'fr': {
            btn_hide_filler: 'Masquer Hors-Série',
            btn_show_filler: 'Afficher Hors-Série',
            aria_hide_filler: 'Masquer les épisodes Hors-Série',
            aria_show_filler: 'Afficher les épisodes Hors-Série',
        },
        'de': {
            btn_hide_filler: 'Filler ausblenden',
            btn_show_filler: 'Filler anzeigen',
            aria_hide_filler: 'Filler-Episoden ausblenden',
            aria_show_filler: 'Filler-Episoden anzeigen',
        },
        'id': {
            btn_hide_filler: 'Sembunyikan Filler',
            btn_show_filler: 'Tampilkan Filler',
            aria_hide_filler: 'Sembunyikan Episode Filler',
            aria_show_filler: 'Tampilkan Episode Filler',
        },
        'it': {
            btn_hide_filler: 'Nascondi Filler',
            btn_show_filler: 'Mostra Filler',
            aria_hide_filler: 'Nascondi Episodi Filler',
            aria_show_filler: 'Mostra Episodi Filler',
        },
        'ru': {
            btn_hide_filler: 'Скрыть филлеры',
            btn_show_filler: 'Показать филлеры',
            aria_hide_filler: 'Скрыть эпизоды-филлеры',
            aria_show_filler: 'Показать эпизоды-филлеры',
        },
        'ar': {
            btn_hide_filler: 'إخفاء الحشو',
            btn_show_filler: 'إظهار الحشو',
            aria_hide_filler: 'إخفاء حلقات الحشو',
            aria_show_filler: 'إظهار حلقات الحشو',
        },
        'hi': {
            btn_hide_filler: 'फिलर्स छुपाएं',
            btn_show_filler: 'फिलर्स दिखाएं',
            aria_hide_filler: 'फिलर एपिसोड छुपाएं',
            aria_show_filler: 'फिलर एपिसोड दिखाएं',
        }
    };

    const titles = translations[langCode] || translations['en'];
    return titles;
}

const BUTTON_LABELS = getButtonTranslations();

// ----------------------------------------------------------------------
// STATE AND UI HELPER FUNCTIONS
// ----------------------------------------------------------------------

function toggleFillerVisibility(hide) {
    const episodeCards = document.querySelectorAll(EPISODE_CARD_SELECTOR); 
    const displayStyle = hide ? 'none' : '';

    episodeCards.forEach(card => {
        const badge = card.querySelector(EPISODE_TYPE_BADGE_SELECTOR);

        if (badge && badge.textContent.trim().toUpperCase() === FILLER_TYPE) {
            card.style.display = displayStyle;
        } else if (!hide) {
             card.style.display = '';
        }
    });

    localStorage.setItem(IS_HIDDEN_FLAG, hide.toString());
}

function updateButtonUI(buttonElement, isHidden) {
    
    const svg = isHidden ? SVG_ACTIVE : SVG_INACTIVE;
    const labelKey = isHidden ? 'btn_show_filler' : 'btn_hide_filler';
    const ariaKey = isHidden ? 'aria_show_filler' : 'aria_hide_filler';

    const labelText = BUTTON_LABELS[labelKey];
    const ariaLabel = BUTTON_LABELS[ariaKey];

    const svgContainer = buttonElement.querySelector('svg');
    if (svgContainer) {
        buttonElement.innerHTML = svg + buttonElement.innerHTML.split('</svg>')[1];
    } else {
        buttonElement.innerHTML = `${svg}<span class="call-to-action--PEidl call-to-action--is-m--RVdkI dropdown-trigger__title--TryWn"></span>`;
    }
    
    const textElement = buttonElement.querySelector('.dropdown-trigger__title--TryWn');
    if (textElement) {
        textElement.textContent = labelText;
    }
    buttonElement.setAttribute('aria-label', ariaLabel);
    buttonElement.setAttribute(IS_HIDDEN_FLAG, isHidden.toString());
}

// ----------------------------------------------------------------------
// MAIN INJECTION FUNCTION
// ----------------------------------------------------------------------

function injectFillerFilterButton() {
    const topControls = document.querySelector(TOP_CONTROLS_SELECTOR);

    if (!topControls) {
        return false;
    }

    if (topControls.querySelector(`.${FILLER_BUTTON_CONTAINER_CLASS}`)) {
        return true; 
    }

    const buttonContainer = document.createElement('div');
    buttonContainer.className = `dropdown--cacSP ${FILLER_BUTTON_CONTAINER_CLASS}`;
    buttonContainer.setAttribute('role', 'presentation');

    const button = document.createElement('div');
    button.className = 'dropdown-trigger--P--FX dropdown-trigger--is-styled--Q3nCd select-trigger--is-type-filled--4DySC'; 
    button.setAttribute('role', 'button');
    button.setAttribute('tabindex', '0');
    button.setAttribute('data-t', 'filler-filter-button');

    const isHidden = localStorage.getItem(IS_HIDDEN_FLAG) === 'true';
    updateButtonUI(button, isHidden);

    button.addEventListener('click', () => {
        const currentState = button.getAttribute(IS_HIDDEN_FLAG) === 'true';
        const newState = !currentState;

        updateButtonUI(button, newState);
        toggleFillerVisibility(newState);
    });

    buttonContainer.appendChild(button);

    // Inject the button after the sort button
    const sortControl = topControls.querySelector(SORT_BUTTON_TRIGGER_SELECTOR);

    if (sortControl) {
        sortControl.parentNode.insertBefore(buttonContainer, sortControl.nextSibling);
        return true;
    }
    
    topControls.appendChild(buttonContainer);
    return true;
}

function applyInitialState() {
    const isHidden = localStorage.getItem(IS_HIDDEN_FLAG) === 'true';
    
    if (isHidden) {
        toggleFillerVisibility(true);
    } else {
        toggleFillerVisibility(false);
    }
    
    const button = document.querySelector(`.${FILLER_BUTTON_CONTAINER_CLASS} [data-t="filler-filter-button"]`);
    if(button) {
         updateButtonUI(button, isHidden);
    }
}

// ----------------------------------------------------------------------
// Disable the filter when interacting with the sort button
// ----------------------------------------------------------------------

/**
 * Observe clicks on the sort button to disable the filter.
 */
function observeSortButtonClicks() {
    // Watch the document body for the options menu to appear
    const observer = new MutationObserver((mutationsList, obs) => {
        const optionsContainer = document.querySelector(SORT_OPTIONS_CONTAINER_SELECTOR);
        
        // When the options container appears
        if (optionsContainer) {
            
            // Stop observing once the element is found
            obs.disconnect(); 

            // Function that disables the filter
            const disableFillerFilter = () => {
                const isHidden = localStorage.getItem(IS_HIDDEN_FLAG) === 'true';
                
                if (isHidden) {
                    toggleFillerVisibility(false); // Show all episodes
                    const filterButton = document.querySelector(`.${FILLER_BUTTON_CONTAINER_CLASS} [data-t="filler-filter-button"]`);
                    if (filterButton) {
                        updateButtonUI(filterButton, false); // Update the UI to the "Show" state
                    }
                }
            };
            
            // Add a listener to the options container. Clicks on role="option" will bubble here.
            optionsContainer.addEventListener('click', (event) => {
                // Check whether the clicked element or its parent is an option
                const clickedOption = event.target.closest('[role="option"]');
                if (clickedOption) {
                    // An option selection happened
                    disableFillerFilter();
                    
                    // After selection, the menu closes, so observe again for the next open.
                    setTimeout(() => {
                        observeSortButtonClicks(); // Restart observation
                    }, 500); // Small delay to avoid interfering with menu close
                }
            });
        }
    });

    // Start observing the body to detect when the options menu is injected
    observer.observe(document.body, { childList: true, subtree: true });
}



// ----------------------------------------------------------------------
// PERSISTENCE HANDLING (MODIFIED MUTATION OBSERVER)
// ----------------------------------------------------------------------
const TOP_CONTROLS_SELECTOR_BASE = '.top-controls';

// MutationObserver detects both the initial control injection and newly loaded episodes.
new MutationObserver((mutationsList, observer) => {
    
    if (!location.href.includes('/series/')) {
        return;
    }
    
    let buttonInjected = document.querySelector(`.${FILLER_BUTTON_CONTAINER_CLASS}`);
    // Track whether a new episode card was added
    let newEpisodeCardAdded = false; 

    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            
            // --- Button Injection Detection ---
            if (!buttonInjected && document.querySelector(TOP_CONTROLS_SELECTOR_BASE)) {
                // Inject the button and apply the saved state
                injectFillerFilterButton();
                applyInitialState();
                
                // Start watching sort interactions
                observeSortButtonClicks();
                
                buttonInjected = true; // Update state
                break; // Button injected, exit early.
            }

            // --- New Content Detection (after Show More) ---
            if (!newEpisodeCardAdded) { // Only check once per mutation cycle
                for (const node of mutation.addedNodes) {
                    // Check whether the added node is a card or contains cards.
                    if (node.nodeType === 1 && (node.matches(EPISODE_CARD_SELECTOR) || node.querySelector(EPISODE_CARD_SELECTOR))) {
                        newEpisodeCardAdded = true;
                        break;
                    }
                }
            }
        }
    }
    
    // Reapply the filter to newly loaded episodes if it is currently enabled
    const isHidden = localStorage.getItem(IS_HIDDEN_FLAG) === 'true';
    if (newEpisodeCardAdded && isHidden) {
        // Give the cards a short moment to finish rendering
        setTimeout(() => {
            toggleFillerVisibility(true); 
            console.log('✅ Filler Filter: Reapplied to newly loaded content.');
        }, 100); 
    }
    
}).observe(document, { subtree: true, childList: true });


document.addEventListener('DOMContentLoaded', () => {
    // 1. Try to inject on load
    if (injectFillerFilterButton()) {
        applyInitialState();
    }
    // 2. Start listening for clicks on the sort button
    observeSortButtonClicks();
});

}

// ----------------------------------------------------------------------
// 3. CONTROL LOGIC (TOGGLE)
// ----------------------------------------------------------------------

function initializeFillerLabelFeature() {
    // Read the toggle state saved in the extension
    chrome.storage.local.get([FILLER_SETTING_KEY], (settings) => {
        
        const isFillerEnabled = settings[FILLER_SETTING_KEY]; 

        // Run the feature only when the toggle is enabled.
        if (isFillerEnabled) {
            console.log("CR Better Web: Enabling Filler Filter.");
            applyFillerLabel();
        } else {
            console.log("CR Better Web: Filler Filter disabled.");
        }
    });
}


// ----------------------------------------------------------------------
// 4. SCRIPT STARTUP
// ----------------------------------------------------------------------
// Start the configuration check process.
initializeFillerLabelFeature();

})();
