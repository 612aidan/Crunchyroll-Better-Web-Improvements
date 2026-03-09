(async function(){

    // =============================================================
    // === BUTTON LANGUAGE DETECTION AND TRANSLATION LOGIC ===
    // =============================================================

    /**
     * 🗺️ Detect the page language using the shared logic
     * and return translated labels only for the control buttons.
     * @returns {object} Object containing the translated button labels.
     */
    function getButtonTranslations() {
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
        
        // Translation map used only for these buttons
        const translations = {
            'en': {
                btn_autoload: "AutoLoad",
                btn_stop_autoload: "Stop AutoLoad",
                btn_random: "Random"
            },
            'es': {
                btn_autoload: "AutoCarga",
                btn_stop_autoload: "Detener Carga",
                btn_random: "Aleatorio"
            },
            'pt': {
                btn_autoload: "AutoCarregar",
                btn_stop_autoload: "Parar Carregamento",
                btn_random: "Aleatório"
            },
            'fr': {
                btn_autoload: "Chargement Auto",
                btn_stop_autoload: "Arrêter Chargement",
                btn_random: "Aléatoire"
            },
            'de': {
                btn_autoload: "Auto-Laden",
                btn_stop_autoload: "Laden Stoppen",
                btn_random: "Zufällig"
            },
            'id': {
                btn_autoload: "Muat Otomatis",
                btn_stop_autoload: "Hentikan Muat Otomatis",
                btn_random: "Acak"
            },
            'it': {
                btn_autoload: "Caricamento Auto",
                btn_stop_autoload: "Ferma Caricamento",
                btn_random: "Casuale"
            },
            'ru': {
                btn_autoload: "Автозагрузка",
                btn_stop_autoload: "Остановить Загрузку",
                btn_random: "Случайный"
            },
            'ar': {
                btn_autoload: "تحميل تلقائي",
                btn_stop_autoload: "إيقاف التحميل",
                btn_random: "عشوائي"
            },
            'hi': {
                btn_autoload: "स्वतः लोड करें",
                btn_stop_autoload: "लोडिंग बंद करें",
                btn_random: "यादृच्छिक"
            }
        };

        const titles = translations[langCode] || translations['en'];
        console.log(`ℹ️ Detected language for header buttons: ${langCode}`);
        return titles;
    }

    const buttonLabels = getButtonTranslations();

    // ====================================================================
    // CONSTANTES Y SELECTORES
    // ====================================================================

    const LISTA_DROPDOWNS_SELECTOR = '.browse-dropdowns';
    const ANCESTRO_PERSISTENTE_SELECTOR = 'body'; 
    const BOTON_SCROLL_CLASE_UNICA = '.erc-browse-example-control'; // Scroll button class
    const BOTON_RANDOM_CLASE_UNICA = '.erc-browse-random-control'; // Random button class

    let isScrolling = false; // Track whether auto-scroll is active
    let scrollInterval = null; // Store the scroll interval ID

    // "AutoLoad" SVG (plus icon)
    const SVG_CARGAR = '<path d="M12 2a1 1 0 0 1 1 1v8h8a1 1 0 0 1 0 2h-8v8a1 1 0 0 1-2 0v-8H3a1 1 0 0 1 0-2h8V3a1 1 0 0 1 1-1z"></path>';

    // "Stop AutoLoad" SVG (pause/stop icon)
    const SVG_DETENER = '<path d="M6 4a2 2 0 0 1 2 2v12a2 2 0 0 1-4 0V6a2 2 0 0 1 2-2zm12 0a2 2 0 0 1 2 2v12a2 2 0 0 1-4 0V6a2 2 0 0 1 2-2z"></path>';

    // "Random" SVG (five-dot icon) - only the path is extracted from the original XML
    const SVG_RANDOM = '<path d="M20.141,5.59c-0.022-0.95-0.783-1.716-1.731-1.744v0H5.59v0.002 c-0.954,0.022-1.723,0.792-1.745,1.745H3.842v12.819h0.002 c0.022,0.954,0.791,1.724,1.745,1.746v0.002h12.819v-0.002 c0.954-0.022,1.723-0.791,1.745-1.745h0.002V5.59H20.141z M7.918,17.682c-0.932,0-1.688-0.755-1.688-1.688 c0-0.932,0.756-1.688,1.688-1.688c0.932,0,1.688,0.756,1.688,1.688 C9.606,16.927,8.85,17.682,7.918,17.682z M7.918,9.617c-0.932,0-1.688-0.755-1.688-1.688 c0-0.932,0.756-1.688,1.688-1.688c0.932,0,1.688,0.756,1.688,1.688 C9.606,8.862,8.85,9.617,7.918,9.617z M12,13.688c-0.932,0-1.688-0.755-1.688-1.688 c0-0.932,0.756-1.688,1.688-1.688s1.688,0.756,1.688,1.688 C13.688,12.933,12.932,13.688,12,13.688z M16.082,17.755c-0.932,0-1.688-0.755-1.688-1.688 c0-0.933,0.756-1.688,1.688-1.688s1.688,0.755,1.688,1.688 C17.77,17,17.014,17.755,16.082,17.755z M16.082,9.617c-0.932,0-1.688-0.755-1.688-1.688 c0-0.933,0.756-1.688,1.688-1.688s1.688,0.755,1.688,1.688 C17.77,8.862,17.014,9.617,16.082,9.617z"/>';

    // Base button HTML (uses a unique class for lookup)
    const getBotonHTML = (texto, svgPath, claseUnica) => `
        <div class="dropdown--cacSP erc-browse-example ${claseUnica.substring(1)}" role="presentation">
            <div role="button" aria-label="${texto}" tabindex="0" 
                 class="dropdown-trigger--P--FX dropdown-trigger--is-styled--Q3nCd" 
                 aria-haspopup="listbox" aria-expanded="false" aria-controls="ID_EJEMPLO_CONTROL">
                <svg class="dropdown-trigger__icon--yrLaj" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="scroll-control-svg" aria-hidden="true" role="img">
                    ${svgPath}
                </svg>
                <span class="call-to-action--PEidl call-to-action--is-m--RVdkI dropdown-trigger__title--TryWn trigger-title">${texto}</span>
            </div>
        </div>
    `;


    // ====================================================================
    // INFINITE SCROLL LOGIC
    // ====================================================================

    function iniciarScrollInfinito() {
        if (isScrolling) return;
        isScrolling = true;
        console.log("Infinite scroll started.");
        
        // Scroll loop every 500ms
        scrollInterval = setInterval(() => {
            // 1. Scroll to the bottom to trigger Crunchyroll loading
            window.scrollTo(0, document.body.scrollHeight);

            // 2. Scroll up/down slightly to force a re-evaluation
            if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
                 window.scrollBy(0, -200); // Move up slightly
                 window.scrollTo(0, document.body.scrollHeight); // Then move back down
            }
        }, 500); 
    }

    function detenerScrollInfinito() {
        isScrolling = false;
        if (scrollInterval) {
            clearInterval(scrollInterval);
            scrollInterval = null;
            console.log("Infinite scroll stopped.");
        }
    }

    /**
     * Handle the click, update the state, replace the HTML, and rebind the listener.
     * @param {HTMLElement} listItem - The `<li>` element containing the button.
     */
    function updateButtonState(listItem) {
        
        // 1. Flip the state (current state first, then the resulting action)
        if (isScrolling) {
            detenerScrollInfinito();
        } else {
            iniciarScrollInfinito();
        }
        
        // 2. Determine the new HTML based on the updated `isScrolling` state
        // >>> USING `buttonLabels` <<<
        const newText = isScrolling ? buttonLabels.btn_stop_autoload : buttonLabels.btn_autoload;
        const newSVG = isScrolling ? SVG_DETENER : SVG_CARGAR;

        // 3. Replace the `<li>` HTML and reassign the listener.
        listItem.innerHTML = getBotonHTML(newText, newSVG, BOTON_SCROLL_CLASE_UNICA);
        
        // 4. Reassign the listener to the newly created element
        const newButton = listItem.querySelector('[role="button"]');
        newButton.addEventListener('click', () => updateButtonState(listItem));
    }

    // ====================================================================
    // RANDOM BUTTON LOGIC
    // ====================================================================

    /**
     * Handle clicks on the Random button.
     */
    function handleRandomClick() {
        console.log("Redirecting to a random anime...");
        window.location.href = 'https://www.crunchyroll.com/random/anime?random_ref=topbar';
    }

    // ====================================================================
    // INJECTION AND PERSISTENCE LOGIC (MutationObserver)
    // ====================================================================

    /**
     * Create and inject a single button into the list.
     * @param {HTMLElement} listaDropdowns - The target `<ul>` element.
     * @param {string} texto - Button text.
     * @param {string} svgPath - Button SVG.
     * @param {string} claseUnica - Unique class used for persistence.
     * @param {Function} clickHandler - Function to run on click.
     */
    function createAndInjectButton(listaDropdowns, texto, svgPath, claseUnica, clickHandler) {
        // Exit if it was already added.
        if (listaDropdowns.querySelector(claseUnica)) {
            return null; 
        }
        
        const listItem = document.createElement('li');
        listItem.className = 'dropdown-item';
        
        // 1. Initialize the button
        listItem.innerHTML = getBotonHTML(texto, svgPath, claseUnica);
        
        // 2. Append it to the end of the list.
        listaDropdowns.appendChild(listItem);

        // 3. Add the click listener
        const nuevoBoton = listItem.querySelector('[role="button"]');
        
        if (claseUnica === BOTON_SCROLL_CLASE_UNICA) {
            // For the scroll button, the listener needs to recreate the `<li>` element
            nuevoBoton.addEventListener('click', () => clickHandler(listItem));
        } else {
            // The Random button only needs the click handler
            nuevoBoton.addEventListener('click', clickHandler);
        }
        
        return listItem;
    }


    /**
     * Inject all required buttons into the list.
     * @param {HTMLElement} listaDropdowns - The target `<ul>` element.
     */
    function agregarTodosLosBotones(listaDropdowns) {
        
        let injected = false;
        
        // 1. Scroll button
        const scrollButton = listaDropdowns.querySelector(BOTON_SCROLL_CLASE_UNICA);
        if (!scrollButton) {
            console.log("-> Inserting the scroll control button...");
            createAndInjectButton(
                listaDropdowns,
                // >>> USING `buttonLabels` for the initial render <<<
                isScrolling ? buttonLabels.btn_stop_autoload : buttonLabels.btn_autoload,
                isScrolling ? SVG_DETENER : SVG_CARGAR,
                BOTON_SCROLL_CLASE_UNICA,
                updateButtonState
            );
            injected = true;
        }
        
        // 2. Random button (inject it BEFORE the scroll button so it sits higher if missing)
        const randomButton = listaDropdowns.querySelector(BOTON_RANDOM_CLASE_UNICA);
        if (!randomButton) {
            console.log("-> Inserting the Random button...");
            const randomListItem = document.createElement('li');
            randomListItem.className = 'dropdown-item';
            // >>> USING `buttonLabels` for the Random button <<<
            randomListItem.innerHTML = getBotonHTML(buttonLabels.btn_random, SVG_RANDOM, BOTON_RANDOM_CLASE_UNICA);
            
            // Insert at the beginning of the list
            listaDropdowns.prepend(randomListItem); 

            // 3. Add the click listener to the Random button
            const nuevoBotonRandom = randomListItem.querySelector('[role="button"]');
            nuevoBotonRandom.addEventListener('click', handleRandomClick);

            injected = true;
        }
        
        if (injected) {
            console.log("-> Buttons added and persistence activated.");
        }
    }


    /**
     * Initialize a mutation observer that keeps the buttons persistent.
     */
    function initializeButtonPersistence() {
        const parentToObserve = document.querySelector(ANCESTRO_PERSISTENTE_SELECTOR);

        if (!parentToObserve) {
            console.error("Persistent ancestor to observe was not found.");
            return;
        }

        const observer = new MutationObserver((mutationsList, observer) => {
            const listaDropdowns = document.querySelector(LISTA_DROPDOWNS_SELECTOR);

            // If the dropdown list exists, inject any missing buttons.
            if (listaDropdowns) {
                agregarTodosLosBotones(listaDropdowns);
            }
            
            // If the dropdown list is missing while scrolling is active, stop scrolling.
            if (!listaDropdowns && isScrolling) {
                //console.warn("The button list disappeared. Stopping scroll.");
                detenerScrollInfinito();
            }
        });

        const observerConfig = { childList: true, subtree: true };

        console.log("-> Starting the persistence observer...");
        observer.observe(parentToObserve, observerConfig);
    }

    // Start the injection and persistence process.
    initializeButtonPersistence();
})();
