const FLAG_SETTING_KEY = 'flagLabel'; 

// ----------------------------------------------------------------------
// MAIN FEATURE FUNCTION (CONTROLLED BY THE TOGGLE)
// ----------------------------------------------------------------------

function applyFlagLabel() {


(async function(){

    const countryMap = {
        latino: { 
            logo: "https://files.catbox.moe/9qey8l.png",
            alt: "Latin American Spanish" 
        }, 
        castellano: { 
            logo: "https://files.catbox.moe/q9jj8m.png",
            alt: "Spanish (Spain)" 
        },
        ingles: { 
            logo: "https://files.catbox.moe/3bifaf.png",
            alt: "English" 
        },
        portugues: { 
            logo: "https://files.catbox.moe/0u7uyg.png",
            alt: "Portuguese" 
        },
        frances: { 
            logo: "https://files.catbox.moe/32x1bl.png",
            alt: "French" 
        },
        aleman: { 
            logo: "https://files.catbox.moe/27hftv.png",
            alt: "German" 
        },
        italiano: { 
            logo: "https://files.catbox.moe/fi2tnf.png",
            alt: "Italian" 
        },
        coreano: { 
            logo: "https://files.catbox.moe/eekuy4.png",
            alt: "Korean" 
        },
        chino: { 
            logo: "https://files.catbox.moe/l45yn7.png",
            alt: "Chinese" 
        },
        japones: { 
            logo: "https://files.catbox.moe/s4xihw.png",
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


// Map slugs to available languages
const slugToAvailableLanguagesMap = new Map(animesDB
    .map(a => {
        const languages = [];
        if (a.eslA) languages.push('latino'); 
        if (a.es) languages.push('castellano');
        if (a.en) languages.push('ingles');
        if (a.pt) languages.push('portugues');
        if (a.fr) languages.push('frances');
        if (a.de) languages.push('aleman');
        if (a.it) languages.push('italiano');
        if (a.kor) languages.push('coreano');
        if (a.ch) languages.push('chino');
        
        const hasJapanese = animesDB.find(x => normalize(x.slug) === normalize(a.slug)) && !a.noJapones;
        if (hasJapanese) languages.push('japones');

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

    // --- RECORRER TODAS LAS CARDS ---
    cards.forEach(card => {
      const slug = getSlugFromCard(card);
      if (!slug) {
        card.style.display = '';
        return;
      }

      //---------------------------------------------- 
      // Replace the subtitle with language flags.
      // Ignore `ratingAge` and use `availableLanguages` instead.
      const availableLanguages = slugToAvailableLanguagesMap.get(slug);

      // Selector for Crunchyroll's original subtitle element
      const subtitleElement = card.querySelector('.browse-card__footer--eSAmN .text--is-m--pqiL-, .horizontal-card__footer--XeHej .meta-tags--o8OYw .text--is-m--pqiL-');

      // Check whether languages are available and the subtitle exists and has not been replaced
      if (availableLanguages && availableLanguages.length > 0) {
        if (subtitleElement && !subtitleElement.dataset.langReplaced) {

              // 1. Clear the original subtitle text
              subtitleElement.textContent = ''; 
              // 2. Create a flex container for the flags
              const flagsContainer = document.createElement('div');
              flagsContainer.style.display = 'flex';
              flagsContainer.style.alignItems = 'center';
              flagsContainer.style.gap = '4px'; // Space between flags
              flagsContainer.style.marginTop = '4px'; // Adjust if needed

              availableLanguages.forEach(langKey => {
                  const countryData = countryMap[langKey];
                  if (countryData) {
                      const img = document.createElement("img");
                      img.src = countryData.logo;
                      img.alt = countryData.alt;

                      img.style.width = "1.25vw";
                      img.style.height = "0.9375vw";

                      // Keep a minimum size so the flags do not shrink too much
                      img.style.minWidth = "12px";
                      img.style.minHeight = "8px";   

                      img.style.borderRadius = "3px"; // Helps the flag read more cleanly
                      img.style.verticalAlign = "middle";

                      flagsContainer.appendChild(img);
                  }
              });

              // Insert the flags container into the subtitle element
               subtitleElement.appendChild(flagsContainer);

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


    // Observer for newly added cards (dynamic scroll loading)
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
    // Initial setup and observers for the menu
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
    // Read the saved toggle state from extension storage
    chrome.storage.local.get([FLAG_SETTING_KEY], (settings) => {
        
        const isFlagEnabled = settings[FLAG_SETTING_KEY]; 

        if (isFlagEnabled) {
            console.log("CR Better Web: Enabling language flags.");
            applyFlagLabel();
        } else {
            console.log("CR Better Web: Language flags disabled.");
        }
    });
}


// ----------------------------------------------------------------------
// 4. INICIO DEL SCRIPT
// ----------------------------------------------------------------------
// This starts the configuration verification process.
initializeFlagLabelFeature();
