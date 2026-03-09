const FLAG_SETTING_KEY = 'flagLabel'; 

// ----------------------------------------------------------------------
// MAIN FEATURE FUNCTION (CONTROLLED BY THE TOGGLE)
// ----------------------------------------------------------------------

function applyFlagLabel() {

(async function(){

    // ► Map language keys to text abbreviations
    const countryMap = {
        latino: { 
            textLabel: "LAT",
            alt: "Latin American Spanish" 
        }, 
        castellano: { 
            textLabel: "ES",
            alt: "Spanish (Spain)" 
        },
        ingles: { 
            textLabel: "EN",
            alt: "English" 
        },
        portugues: { 
            textLabel: "PT",
            alt: "Portuguese" 
        },
        frances: { 
            textLabel: "FR",
            alt: "French" 
        },
        aleman: { 
            textLabel: "DE",
            alt: "German" 
        },
        italiano: { 
            textLabel: "IT",
            alt: "Italian" 
        },
        coreano: { 
            textLabel: "KOR",
            alt: "Korean" 
        },
        chino: { 
            textLabel: "CH",
            alt: "Chinese" 
        },
        japones: { 
            textLabel: "JAP",
            alt: "Japanese" 
        },
    };


    const url = chrome.runtime.getURL('database/animeDB.json');
    const response = await fetch(url);
    const animesDB = await response.json();

    // --- Slug Normalization ---
    const normalize = s => (s||"").toString().toLowerCase().trim()
        .replace(/[^a-z0-9]+/g,'-')
        .replace(/^-+|-+$/g,'');


// Map slugs to the available languages
const slugToAvailableLanguagesMap = new Map(animesDB
    .map(a => {
        const languages = [];

        const hasJapones = animesDB.find(x => normalize(x.slug) === normalize(a.slug)) && !a.noJapones;
        if (hasJapones) languages.push('japones');

        if (a.en) languages.push('ingles');
        if (a.eslA) languages.push('latino'); 
        if (a.es) languages.push('castellano');
        if (a.pt) languages.push('portugues');
        if (a.fr) languages.push('frances');
        if (a.de) languages.push('aleman');
        if (a.it) languages.push('italiano');
        if (a.kor) languages.push('coreano');
        if (a.ch) languages.push('chino');
        
        

        return [normalize(a.slug), languages];
    })
    .filter(([, languages]) => languages.length > 0) // Only map entries that have languages
);


// Extract the slug or title from a card
    function getSlugFromCard(card){
      try {
        const link = card.querySelector('a[href]');
        let href = link?.getAttribute('href') || "";
        if (href) {
          href = href.split('?')[0].split('#')[0];
          const parts = href.split('/').filter(Boolean);
          const candidate = parts[parts.length-1] || "";
          const s = normalize(candidate);
          if (s) return s;
        }
        const aria = card.querySelector('[aria-label]');
        if (aria && aria.getAttribute('aria-label')) return normalize(aria.getAttribute('aria-label'));
        const h3 = card.querySelector('h3');
        if (h3 && h3.textContent) return normalize(h3.textContent);
        const a = card.querySelector('a');
        if (a && a.textContent) return normalize(a.textContent);
      } catch(e){
        console.error('getSlugFromCard error', e);
      }
      return "";
    }

// Filter or show a card
function filtrarNodo(node) {
    try {
        if (!node) return;

        let cards = [];
        if (node.matches && node.matches('.browse-card, .horizontal-card--7E9-G')) cards = [node];
        else cards = Array.from((node.querySelectorAll && node.querySelectorAll('.browse-card, .horizontal-card--7E9-G')) || []);

        // --- LOOP THROUGH ALL CARDS ---
        cards.forEach(card => {
            const slug = getSlugFromCard(card);
            if (!slug) {
                card.style.display = '';
                return;
            }

            //---------------------------------------------- 
            // Replace subtitle with language text labels
            const availableLanguages = slugToAvailableLanguagesMap.get(slug);

            // Selector for the original Crunchyroll subtitle element
            const subtitleElement = card.querySelector('.browse-card__footer--eSAmN .text--is-m--pqiL-, .horizontal-card__footer--XeHej .meta-tags--o8OYw .text--is-m--pqiL-');

            // Check whether languages are available and the subtitle exists and has not been replaced
            if (availableLanguages && availableLanguages.length > 0) {
                if (subtitleElement && !subtitleElement.dataset.langReplaced) {

                    // 1. Clear the original subtitle text
                    subtitleElement.textContent = ''; 
                    
                    // 2. Create a simple container for the text
                    const labelsContainer = document.createElement('span');
                    
                    // 3. Get only the text labels
                    const labels = availableLanguages
                        .map(langKey => countryMap[langKey]?.textLabel)
                        .filter(label => label); // Remove possible null or undefined values

                    // 4. Join the labels with the vertical bar separator
                    labelsContainer.textContent = labels.join(' | ');

                    // 5. Apply the requested styles
                    labelsContainer.style.color = '#8c8c88'; // Light gray
                    labelsContainer.style.backgroundColor = 'transparent'; // Transparent background
                    labelsContainer.style.fontSize = '0.8rem'; // Keep the font size compact
                    labelsContainer.style.fontWeight = 'bold';
                    labelsContainer.style.whiteSpace = 'nowrap'; // Prevent line wrapping
                    labelsContainer.style.margin = '0'; // Clear margins just in case
                    labelsContainer.style.padding = '0'; // Clear padding just in case

                    // Insert the label text into the subtitle element
                    subtitleElement.appendChild(labelsContainer);

                    // Mark as processed to avoid duplicates
                    subtitleElement.dataset.langReplaced = 'true';    
            }
        }
    });

    } catch(e) {
        console.error('filtrarNodo error', e);
    }
}


    function filtrarTodos(){
      try { document.querySelectorAll('.browse-card, .horizontal-card--7E9-G').forEach(filtrarNodo); } catch(e){ console.error('filtrarTodos error', e); }
    }


    // ► Observer for newly added cards (dynamic scroll)
    const cardsObserver = new MutationObserver(mutations => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          if (node.matches('.browse-card, .horizontal-card--7E9-G')) filtrarNodo(node);
          else if (node.querySelector && node.querySelector('.browse-card, .horizontal-card--7E9-G')) filtrarNodo(node);
        }
      }
    });
    cardsObserver.observe(document.body, { childList: true, subtree: true });


    // -----------------------------
    // ► Initial pass and observers
    // -----------------------------
    setTimeout(() => {
      filtrarTodos();
    }, 800);

})();

}

// ----------------------------------------------------------------------
// 3. CONTROL LOGIC (TOGGLE)
// ----------------------------------------------------------------------

function initializeFlagLabelFeature() {
    // Read the toggle state saved in the extension
    chrome.storage.local.get([FLAG_SETTING_KEY], (settings) => {
        
        const isFlagEnabled = settings[FLAG_SETTING_KEY]; 

        if (isFlagEnabled) {
            console.log("CR Better Web: Enabling Language Labels.");
            applyFlagLabel();
        } else {
            console.log("CR Better Web: Language Labels Disabled.");
        }
    });
}


// ----------------------------------------------------------------------
// 4. SCRIPT STARTUP
// ----------------------------------------------------------------------
// This starts the configuration verification process.
initializeFlagLabelFeature();
