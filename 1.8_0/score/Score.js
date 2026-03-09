const SCORE_SETTING_KEY = 'scoreLabel'; 

// ----------------------------------------------------------------------
// MAIN FEATURE FUNCTION (CONTROLLED BY THE TOGGLE)
// ----------------------------------------------------------------------

function applyScoreLabel() {



(async function(){

    const url = chrome.runtime.getURL('database/animeDB.json');
    const response = await fetch(url);
    const animesDB = await response.json();

   

      // --- Slug normalization ---
      const normalize = s => (s||"").toString().toLowerCase().trim()
        .replace(/[^a-z0-9]+/g,'-')
        .replace(/^-+|-+$/g,'');


// ► Map slugs to scores
const slugToScoreMap = new Map(animesDB
    .filter(a => a.score !== undefined && a.score !== null)
    .map(a => [normalize(a.slug), a.score])
);



// ► Function to insert the score badge
function insertScore(card) {

    // 🎨 STYLE CONFIGURATION AND CONSTANTS
    const POSTER_WRAPPER_SELECTOR = '.browse-card__poster-wrapper--pU-AW';
    const INJECTED_FLAG = 'data-score-injected';
    const MIN_SCORE_TO_DISPLAY = 5.0; // Optional: minimum score required to display the badge
    const STAR_SVG = `
        <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" class="score-star-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation" style="margin-right: 4px;">
            <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
        </svg>
    `;
    // Duplicate and container checks
    const posterWrapper = card.querySelector(POSTER_WRAPPER_SELECTOR);

    if (!posterWrapper || card.hasAttribute(INJECTED_FLAG)) {
        return;
    }

    const slug = getSlugFromCard(card);
    if (!slug) {
        return;
    }

    const score = slugToScoreMap.get(slug);

    // 1. Verify that the score exists and is high enough
    if (score !== undefined && score !== null && score >= MIN_SCORE_TO_DISPLAY) {

        // 2. Determine the background color based on the score
        let backgroundColor = '#000000ff'; // Default color
        

        // 3. Create and configure the new badge element
        const newLabel = document.createElement('div');
        newLabel.innerHTML = STAR_SVG + score.toFixed(1); // Display the score with one decimal
        newLabel.className = 'cr-score-badge';

        // 4. Apply floating badge styles
        newLabel.style.position = 'absolute';
        newLabel.style.bottom = '8px';  
        newLabel.style.left = '8px';
        newLabel.style.zIndex = '0';
        newLabel.style.backgroundColor = backgroundColor; // Dynamic color
        newLabel.style.color = 'white';
        newLabel.style.padding = '3px 6px';
        newLabel.style.borderRadius = '3px';
        newLabel.style.fontSize = '12px';
        newLabel.style.fontWeight = '700';
        newLabel.style.pointerEvents = 'none';
        newLabel.style.display = 'flex';
        newLabel.style.alignItems = 'center';

        // 5. Inject the badge
        posterWrapper.style.position = 'relative'; // Ensure the parent supports absolute positioning
        posterWrapper.appendChild(newLabel);

        // 6. Mark the card as processed
        card.setAttribute(INJECTED_FLAG, 'true');
    }
}


// ► Extract the slug or title from a card
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

// ► Process a single card
function filtrarNodo(node) {
  try {
    if (!node) return;

    let cards = [];
    if (node.matches && node.matches('.browse-card')) cards = [node];
    else cards = Array.from((node.querySelectorAll && node.querySelectorAll('.browse-card')) || []);

    // --- LOOP THROUGH ALL CARDS ---
    cards.forEach(card => {
      const slug = getSlugFromCard(card);
      if (!slug) {
        card.style.display = '';
        return;
      }


      // ► SCORE INTEGRATION: APPLY THE SCORE HERE
      insertScore(card);
    });

  } catch(e) {
    console.error('filtrarNodo error', e);
  }
}



    function filtrarTodos(){
      try { document.querySelectorAll('.browse-card').forEach(filtrarNodo); } catch(e){ console.error('filtrarTodos error', e); }
    }


    // ► Observer for newly added cards (dynamic scroll)
    const cardsObserver = new MutationObserver(mutations => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          if (node.matches('.browse-card')) filtrarNodo(node);
          else if (node.querySelector && node.querySelector('.browse-card')) filtrarNodo(node);
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

function initializeScoreLabelFeature() {
    // Read the toggle state saved in the extension
    chrome.storage.local.get([SCORE_SETTING_KEY], (settings) => {
        
        const isScoreEnabled = settings[SCORE_SETTING_KEY]; 

        if (isScoreEnabled) {
            console.log("CR Better Web: Enabling Score Labels.");
            applyScoreLabel();
        } else {
            console.log("CR Better Web: Score Labels disabled.");
        }
    });
}


// ----------------------------------------------------------------------
// 4. SCRIPT STARTUP
// ----------------------------------------------------------------------
// Start the configuration check process.
initializeScoreLabelFeature();
