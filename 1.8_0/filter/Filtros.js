
(async function(){

  // =============================================================
    // === LANGUAGE DETECTION AND FILTER LABEL TRANSLATION ===
    // =============================================================

    /**
     * 🗺️ Detect the page language using the same rules as the rest of the extension
     * and return translated labels for the filter menu.
     * @returns {object} Object containing the translated labels.
     */
    function getTranslations() {
        const urlPath = window.location.pathname;
        let langCode = 'en'; // Default to English

        // Map regional variants to primary language codes
        const match = urlPath.match(/^\/(es|es-es|pt|pt-br|pt-pt|fr|de|id|it|ru|ar|hi)\//);
        
        if (match) {
            // Use only the primary language code for the lookup
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
        
        // Translation map for filter labels
        const translations = {
            'en': {
                lbl_japanese: "Japanese",
                lbl_latino: "Spanish (Latin American)",
                lbl_castellano: "Spanish (Spain)",
                lbl_english: "English",
                lbl_portuguese: "Portuguese",
                lbl_french: "French",
                lbl_german: "German",
                lbl_italian: "Italian",
                lbl_chinese: "Chinese",
                lbl_korean: "Korean",
                lbl_series: "Series",
                lbl_movies: "Movies"
            },
            'es': {
                lbl_japanese: "Japanese",
                lbl_latino: "Spanish (Latin America)",
                lbl_castellano: "Spanish (Spain)",
                lbl_english: "English",
                lbl_portuguese: "Portuguese",
                lbl_french: "French",
                lbl_german: "German",
                lbl_italian: "Italian",
                lbl_chinese: "Chinese",
                lbl_korean: "Korean",
                lbl_series: "Series",
                lbl_movies: "Movies"
            },
            'pt': {
                lbl_japanese: "Japonês",
                lbl_latino: "Espanhol (América Latina)",
                lbl_castellano: "Espanhol (Espanha)",
                lbl_english: "Inglês",
                lbl_portuguese: "Português",
                lbl_french: "Francês",
                lbl_german: "Alemão",
                lbl_italian: "Italiano",
                lbl_chinese: "Chinês",
                lbl_korean: "Coreano",
                lbl_series: "Séries",
                lbl_movies: "Filmes"
            },
            'fr': {
                lbl_japanese: "Japonais",
                lbl_latino: "Espagnol (Amérique Latine)",
                lbl_castellano: "Espagnol (Espagne)",
                lbl_english: "Anglais",
                lbl_portuguese: "Portugais",
                lbl_french: "Français",
                lbl_german: "Allemand",
                lbl_italian: "Italien",
                lbl_chinese: "Chinois",
                lbl_korean: "Coréen",
                lbl_series: "Séries",
                lbl_movies: "Films"
            },
            'de': {
                lbl_japanese: "Japanisch",
                lbl_latino: "Spanisch (Lateinamerika)",
                lbl_castellano: "Spanisch (Spanien)",
                lbl_english: "Englisch",
                lbl_portuguese: "Portugiesisch",
                lbl_french: "Französisch",
                lbl_german: "Deutsch",
                lbl_italian: "Italienisch",
                lbl_chinese: "Chinesisch",
                lbl_korean: "Koreanisch",
                lbl_series: "Serien",
                lbl_movies: "Filme"
            },
            'id': {
                lbl_japanese: "Jepang",
                lbl_latino: "Spanyol (Amerika Latin)",
                lbl_castellano: "Spanyol (Spanyol)",
                lbl_english: "Inggris",
                lbl_portuguese: "Portugis",
                lbl_french: "Prancis",
                lbl_german: "Jerman",
                lbl_italian: "Italia",
                lbl_chinese: "Cina",
                lbl_korean: "Korea",
                lbl_series: "Seri",
                lbl_movies: "Film"
            },
            'it': {
                lbl_japanese: "Giapponese",
                lbl_latino: "Spagnolo (America Latina)",
                lbl_castellano: "Spagnolo (Spagna)",
                lbl_english: "Inglese",
                lbl_portuguese: "Portoghese",
                lbl_french: "Francese",
                lbl_german: "Tedesco",
                lbl_italian: "Italiano",
                lbl_chinese: "Cinese",
                lbl_korean: "Coreano",
                lbl_series: "Serie",
                lbl_movies: "Film"
            },
            'ru': {
                lbl_japanese: "Японский",
                lbl_latino: "Испанский (Латинская Америка)",
                lbl_castellano: "Испанский (Испания)",
                lbl_english: "Английский",
                lbl_portuguese: "Португальский",
                lbl_french: "Французский",
                lbl_german: "Немецкий",
                lbl_italian: "Итальянский",
                lbl_chinese: "Китайский",
                lbl_korean: "Корейский",
                lbl_series: "Сериалы",
                lbl_movies: "Фильмы"
            },
            'ar': {
                lbl_japanese: "ياباني",
                lbl_latino: "إسباني (أمريكا اللاتينية)",
                lbl_castellano: "إسباني (إسبانيا)",
                lbl_english: "إنجليزي",
                lbl_portuguese: "برتغالي",
                lbl_french: "فرنسي",
                lbl_german: "ألماني",
                lbl_italian: "إيطالي",
                lbl_chinese: "صيني",
                lbl_korean: "كوري",
                lbl_series: "مسلسلات",
                lbl_movies: "أفلام"
            },
            'hi': {
                lbl_japanese: "जापानी",
                lbl_latino: "स्पेनिश (लैटिन अमेरिका)",
                lbl_castellano: "स्पेनिश (स्पेन)",
                lbl_english: "अंग्रेज़ी",
                lbl_portuguese: "पुर्तगाली",
                lbl_french: "फ़्रेंच",
                lbl_german: "जर्मन",
                lbl_italian: "इतालवी",
                lbl_chinese: "चीनी",
                lbl_korean: "कोरियाई",
                lbl_series: "सीरीज़",
                lbl_movies: "फ़िल्में"
            }
        };

        const titles = translations[langCode] || translations['en'];
        console.log(`ℹ️ Detected language for filter labels: ${langCode}`);
        return titles;
    }

    const labels = getTranslations(); // Resolve translations up front


  try {

    const url = chrome.runtime.getURL('database/animeDB.json');
    const response = await fetch(url);
    const animesDB = await response.json();

    // Initialize sets and state variables
    let recentResetDone = false;
    let modo = null;
    // let modoFormato = null;
    let modoFormato = 'series';


      // --- Slug normalization ---
      const normalize = s => (s||"").toString().toLowerCase().trim()
        .replace(/[^a-z0-9]+/g,'-')
        .replace(/^-+|-+$/g,'');

      // --- Auto-generated sets from JSON ---
      const setLat = new Set(animesDB.filter(a => a.eslA).map(a => normalize(a.slug)));
      const setCast = new Set(animesDB.filter(a => a.es).map(a => normalize(a.slug)));
      const setEng = new Set(animesDB.filter(a => a.en).map(a => normalize(a.slug)));
      const setPt = new Set(animesDB.filter(a => a.pt).map(a => normalize(a.slug)));
      const setFr = new Set(animesDB.filter(a => a.fr).map(a => normalize(a.slug)));
      const setAl = new Set(animesDB.filter(a => a.de).map(a => normalize(a.slug)));
      const setIt = new Set(animesDB.filter(a => a.it).map(a => normalize(a.slug)));
      const setKor = new Set(animesDB.filter(a => a.kor).map(a => normalize(a.slug)));
      const setCh = new Set(animesDB.filter(a => a.ch).map(a => normalize(a.slug)));
      const setNoJap = new Set(animesDB.filter(a => a.noJapones).map(a => normalize(a.slug)));
      const setPeliculas = new Set(animesDB.filter(a => a.pelicula).map(a => normalize(a.slug)));

      // --- Auto-generated blocked slugs from JSON ---
      const slugsBloqueados = new Set(animesDB.filter(a => a.slugBloqueado).map(a => normalize(a.slug)));



      console.log('✅ Sets initialized from JSON', {
        totalAnimes: animesDB.length,
        slugsBloqueados: slugsBloqueados.size,
        peliculas: setPeliculas.size
      });


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
    if (node.matches && node.matches('.browse-card')) cards = [node];
    else cards = Array.from((node.querySelectorAll && node.querySelectorAll('.browse-card')) || []);

    const url = location.href;
    const isSimulcast = url.includes("/simulcasts/");
    const isRecent = url.includes("/new");
    const isPopular = url.includes("/popular");

    // --- RESET FILTERS TO "ALL" ONLY ONCE IN /new ---
    if (isRecent && !recentResetDone) {
      recentResetDone = true;

      modo = null;
      modoFormato = "series";

      // Update localStorage
      guardarIdiomaSeleccionado && guardarIdiomaSeleccionado("todos");
      guardarFormatoSeleccionado && guardarFormatoSeleccionado("series1");

      // Uncheck the radio buttons in the UI
      document.querySelectorAll('input[name="filter_language"]').forEach(input => input.checked = false);
      //document.querySelectorAll('input[name="filter_content"]').forEach(input => input.checked = false);

    }

    // --- RESET FILTERS TO "ALL" ONLY ONCE IN /simulcast/ ---
    if (isSimulcast) {
      
        if (recentResetDone) 
           {
            recentResetDone = false; 
           }

      modo = null;
      modoFormato = "series";

      // Update localStorage
      guardarIdiomaSeleccionado && guardarIdiomaSeleccionado("todos");
      guardarFormatoSeleccionado && guardarFormatoSeleccionado("series1");

      // Uncheck the radio buttons in the UI
      document.querySelectorAll('input[name="filter_language"]').forEach(input => input.checked = false);
      //document.querySelectorAll('input[name="filter_content"]').forEach(input => input.checked = false);

    }

    if (isPopular) {
      
        if (recentResetDone) 
           {
            recentResetDone = false; 
           }
      }
    

    // --- LOOP THROUGH ALL CARDS ---
    cards.forEach(card => {
      const slug = getSlugFromCard(card);
      if (!slug) {
        card.style.display = '';
        return;
      }

      // --- BLOCK SLUGS IN SIMULCAST AND /new ---
      if ((isSimulcast || isRecent) && slugsBloqueados.has(slug)) {
        card.style.display = "none";
        return; // Do not apply any further filters to this card
      }

      // --- LANGUAGE FILTER ---
      if (modo === null) {
        card.style.display = '';
      } else if (modo === 'latino') {
        card.style.display = setLat.has(slug) ? '' : 'none';
      } else if (modo === 'castellano') {
        card.style.display = setCast.has(slug) ? '' : 'none';
      } else if (modo === 'japones') {
        card.style.display = setNoJap.has(slug) ? 'none' : '';
      } else if (modo === 'coreano') {
        card.style.display = setKor.has(slug) ? '' : 'none';
      } else if (modo === 'ingles') {
        card.style.display = setEng.has(slug) ? '' : 'none';
      } else if (modo === 'portugues') {
        card.style.display = setPt.has(slug) ? '' : 'none';
      } else if (modo === 'chino') {
        card.style.display = setCh.has(slug) ? '' : 'none';
      } else if (modo === 'frances') {
        card.style.display = setFr.has(slug) ? '' : 'none';
      } else if (modo === 'aleman') {
        card.style.display = setAl.has(slug) ? '' : 'none';
      } else if (modo === 'italiano') {
        card.style.display = setIt.has(slug) ? '' : 'none';
      }

      // --- FORMAT FILTER ---
      if (modoFormato === 'peliculas') {
        if (!setPeliculas.has(slug)) card.style.display = 'none';
      } else if (modoFormato === 'series') {
        if (setPeliculas.has(slug)) card.style.display = 'none';
      }

    });

  } catch(e) {
    console.error('filtrarNodo error', e);
  }
}



    function filtrarTodos(){
      try { document.querySelectorAll('.browse-card').forEach(filtrarNodo); } catch(e){ console.error('filtrarTodos error', e); }
    }


    // Observer for newly added cards (dynamic scroll loading)
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


    // Central listener for language changes
    function onLanguageChange(){
  try {
    const checked = document.querySelector('input[name="filter_language"]:checked');
    const val = checked?.value || 'todos';
    if (val === 'latino') modo = 'latino';
    else if (val === 'castellano') modo = 'castellano';
    else if (val === 'japones') modo = 'japones';
    else if (val === 'coreano') modo = 'coreano';
    else if (val === 'ingles') modo = 'ingles';
    else if (val === 'portugues') modo = 'portugues';
    else if (val === 'chino') modo = 'chino';
    else if (val === 'frances') modo = 'frances';
    else if (val === 'aleman') modo = 'aleman';
    else if (val === 'italiano') modo = 'italiano';
    else modo = null; // "all"

    filtrarTodos();
    guardarIdiomaSeleccionado(val);
  } catch (e) { console.error('onLanguageChange error', e); }
}


    // Inject language radio buttons
    function addLanguageOptions() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let idiomaSection = null;
    
        const keywords = ['idioma', 'language', 'sprache', 'langue', 'bahasa', 'lingua', 'язык'];

        for (const h of headings) {
          if (h.textContent) {
              const text = h.textContent.trim().toLowerCase();
              if (keywords.some(keyword => text.includes(keyword))) {
              idiomaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
              break;
          }
        }
        }
        if (!idiomaSection) return;

        if (idiomaSection.querySelector('input[value="latino"]')) return;

        const container = idiomaSection.querySelector('.dropdown-radio-option--YH4xr')?.parentElement || idiomaSection;

        const opciones = [
            { label: labels.lbl_japanese, value: "japones" },
            { label: labels.lbl_latino, value: "latino" },
            { label: labels.lbl_castellano, value: "castellano" },
            { label: labels.lbl_english, value: "ingles" },
            { label: labels.lbl_portuguese, value: "portugues" },
            { label: labels.lbl_french, value: "frances" },
            { label: labels.lbl_german, value: "aleman" },
            { label: labels.lbl_italian, value: "italiano" },
            { label: labels.lbl_chinese, value: "chino" },
            { label: labels.lbl_korean, value: "coreano" }
        ];

        opciones.forEach(op => {
          const div = document.createElement('div');
          div.className = 'radio-button--UHjW2 dropdown-radio-option--YH4xr';
          div.innerHTML = `
            <label role="menuitemradio" tabindex="0" class="radio-button__label--TLiPP dropdown-radio-option__label--Fq315">
              <input class="radio-button__input--yQho7" type="radio" value="${op.value}" name="filter_language">
              <span class="radio-button__checkmark--IJX4U"></span>
              <span class="text--gq6o- text--is-m--pqiL-">${op.label}</span>
            </label>`;
          container.appendChild(div);
        });


        // Apply the saved selection
        const val = obtenerIdiomaGuardado() || "todos";
        const input = container.querySelector(`input[name="filter_language"][value="${val}"]`);
        if(input) input.checked = true;


        // Listen for changes in that section
        idiomaSection.addEventListener('change', onLanguageChange);
        console.log('🎛️ Language filter options injected.');
      } catch (err) { console.error('addLanguageOptions error', err); }
    }


    // Central listener for format changes
function onContentChange(){
  try {
    const checked = document.querySelector('input[name="filter_content"]:checked');
    const val = checked?.value || 'series1';
    if (val === 'series1') modoFormato = 'series';
    else if (val === 'peliculas1') modoFormato = 'peliculas';
    else modoFormato = null; // "all"
    filtrarTodos();
    guardarFormatoSeleccionado(val);
  } catch (e) { console.error('onContentChange error', e); }
}



    // -----------------------------
    // Inject Series/Movies radio buttons
    // -----------------------------
    function addContentOptions() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let formatoSection = null;

        const keywords = ['formato', 'inhalte', 'media', 'média', 'tipo', 'meio', 'mídia', 'mедиа'];

        for (const h of headings) {
          if (h.textContent) {
              const text = h.textContent.trim().toLowerCase();
              if (keywords.some(keyword => text.includes(keyword))) {
              formatoSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
              break;
          }
        }
        }
        if (!formatoSection) return;

        if (formatoSection.querySelector('input[value="series1"]')) return; // Already injected

        const container = formatoSection.querySelector('.dropdown-radio-option--YH4xr')?.parentElement || formatoSection;

        const opciones = [
        { label: labels.lbl_series, value: "series1" },
        { label: labels.lbl_movies, value: "peliculas1" }
  ];


        opciones.forEach(op => {
          const div = document.createElement('div');
          div.className = 'radio-button--UHjW2 dropdown-radio-option--YH4xr';
          div.innerHTML = `
            <label role="menuitemradio" tabindex="0" class="radio-button__label--TLiPP dropdown-radio-option__label--Fq315">
              <input class="radio-button__input--yQho7" type="radio" value="${op.value}" name="filter_content">
              <span class="radio-button__checkmark--IJX4U"></span>
              <span class="text--gq6o- text--is-m--pqiL-">${op.label}</span>
            </label>`;
          container.appendChild(div);
        });


	// Apply the saved selection
	const val = obtenerFormatoGuardado() || "todos";
	const input = container.querySelector(`input[name="filter_content"][value="${val}"]`);
	if(input) input.checked = true;



        // Listen for changes in this section
        formatoSection.addEventListener('change', onContentChange);
        console.log('🎛️ "Series" and "Movies" options injected.');
      } catch (err) { console.error('addContentOptions error', err); }
    }


    // -----------------------------
    // ► Menu initialization and observers
    // -----------------------------
    setTimeout(() => {
      addLanguageOptions();
      addContentOptions();


      // Global fallback listener in case dynamic radios are rendered outside the section
      document.body.addEventListener('change', e => {
        if (e.target && e.target.name === 'filter_language') onLanguageChange();
        if (e.target && e.target.name === 'filter_content') onContentChange();

      });

      // Respect the current selection (by default, "All")
      setTimeout(onLanguageChange, 300);
      setTimeout(onContentChange, 300);

      filtrarTodos();
    }, 800);

    // Try again if the DOM changes while the menu is rendered
    const menuObserver = new MutationObserver(() => {
      addLanguageOptions();
      addContentOptions();

    });
    menuObserver.observe(document.body, { childList: true, subtree: true });

    // -----------------------------
    // ► Debug utilities
    // -----------------------------
    window.__crf_modo = () => modo;
    window.__crf_modoFormato = () => modoFormato;
    window.__crf_filtrarTodos = filtrarTodos;
    window.__crf_setLatino = () => { document.querySelector('input[value="latino"]')?.click(); onLanguageChange(); };
    window.__crf_setCast = () => { document.querySelector('input[value="castellano"]')?.click(); onLanguageChange(); };
    window.__crf_showAll = () => {
  const all = Array.from(document.querySelectorAll('input[name="filter_language"]')).find(i => i.value === "todos");
  if (all) {
    all.checked = true;
    modo = null;
    filtrarTodos();
    guardarIdiomaSeleccionado("todos");
  } else {
    modo = null;
    filtrarTodos();
    guardarIdiomaSeleccionado("todos");
  }
};


    console.log('✅ Filter ready. By default, "All" does not filter. Select Latin American Spanish or Spanish (Spain) to activate the filter.');
  } catch (e) {
    console.error('Global filter error', e);
  }


    // -----------------------------
    // ► Persistence for the selected language filter
    // -----------------------------
const STORAGE_KEY = "cr_filtro_idioma";

// 🔹 Save the selected value
function guardarIdiomaSeleccionado(valor) {
  try {
    localStorage.setItem(STORAGE_KEY, valor);
  } catch (e) {
    console.error("Error saving language:", e);
  }
}

// 🔹 Retrieve the saved value
function obtenerIdiomaGuardado() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

// 🔹 Apply the saved filter on startup
function aplicarIdiomaGuardado() {
  let val = obtenerIdiomaGuardado();
  if (!val) val = "todos"; // default
  const input = document.querySelector(`input[name="filter_language"][value="${val}"]`);
  if (input) {
    input.checked = true;
    modo = val === "todos" ? null : val;
    filtrarTodos();
    console.log("✅ Persistent language filter applied:", val);
  }
}



// -----------------------------
// ► Persistence for the selected media format
// -----------------------------
const STORAGE_FORMAT = "cr_filtro_formato";

function guardarFormatoSeleccionado(valor) {
  try {
    localStorage.setItem(STORAGE_FORMAT, valor);
  } catch (e) {
    console.error("Error saving format:", e);
  }
}

function obtenerFormatoGuardado() {
  try {
    return localStorage.getItem(STORAGE_FORMAT);
  } catch {
    return null;
  }
}

function aplicarFormatoGuardado() {
  let val = obtenerFormatoGuardado();
  // if (!val) val = "todos"; // default
  if (!val) val = "series1"; // default 
  const input = document.querySelector(`input[name="filter_content"][value="${val}"]`);
  if (input) {
    input.checked = true;
    modoFormato = val === "todos" ? null : val;
    filtrarTodos();
    console.log("✅ Persistent format filter applied:", val);
  }
}



// 🔹 Listen for selection changes in the UI and save them
document.addEventListener("change", (e) => {
  const val = e.target?.value;
  if (["latino","castellano","japones","coreano","ingles","portugues","chino","frances","aleman", "italiano", "todos"].includes(val)) {
  guardarIdiomaSeleccionado(val);
}
  if (["series1","peliculas1","todos"].includes(val)) {
        guardarFormatoSeleccionado(val);
}
    });

// 🔹 Run when the DOM is ready

setTimeout(() => aplicarFormatoGuardado(), 1600);
setTimeout(() => aplicarIdiomaGuardado(), 1500);


})();
