(function() {
    // =============================================================
    // === DROPDOWN LANGUAGE DETECTION AND TRANSLATION LOGIC ===
    // =============================================================

    const customDropdownLabels = {
        'en': { title: "Custom Sort", alphabetical: "Alphabetical", score: "Score", upcoming: "Upcoming", mobileTitle: "Custom Sort" },
        'es': { title: "Custom Sort", alphabetical: "Alphabetical", score: "Score", upcoming: "Upcoming", mobileTitle: "Sort By" },
        'pt': { title: "Ordem Personalizada", alphabetical: "Alfabética", score: "Pontuação", upcoming: "Em Breve", mobileTitle: "Ordenar por" },
        'fr': { title: "Tri Personnalisé", alphabetical: "Alphabétique", score: "Score", upcoming: "Prochainement", mobileTitle: "Trier par" },
        'de': { title: "Eigene Sortierung", alphabetical: "Alphabetisch", score: "Punktzahl", upcoming: "Bald verfügbar", mobileTitle: "Sortieren nach" },
        'id': { title: "Urutan Khusus", alphabetical: "Abjad", score: "Skor", upcoming: "Mendatang", mobileTitle: "Urutkan berdasarkan" },
        'it': { title: "Caricamento Auto", alphabetical: "Alfabetico", score: "Punteggio", upcoming: "Prossimamente", mobileTitle: "Ordina per" },
        'ru': { title: "Пользовательская Сортировка", alphabetical: "Алфавиту", score: "Оценка", upcoming: "Скоро", mobileTitle: "Сортировать по" },
        'ar': { title: "ترتيب مخصص", alphabetical: "أبجدي", score: "النتيجة", upcoming: "قريبًا", mobileTitle: "ترتيب حسب" },
        'hi': { title: "कस्टम सॉर्ट", alphabetical: "वर्णमाला क्रम", score: "स्कोर", upcoming: "आगाami", mobileTitle: "क्रमबद्ध करें" }
    };

    function getCustomDropdownTranslations() {
        const urlPath = window.location.pathname;
        let langCode = 'en';
        const match = urlPath.match(/^\/(es|es-es|pt|pt-br|pt-pt|fr|de|id|it|ru|ar|hi)\//);
        
        if (match) {
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
        return customDropdownLabels[langCode] || customDropdownLabels['en'];
    }

    const labels = getCustomDropdownTranslations();
    const SVG_SORT_PATH = '<path d="M9 18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h6zM21 4a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h18zm-6 7a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h12z"></path>';
    const CUSTOM_OPTIONS = [
        { key: 'alphabetical', text: labels.alphabetical },
        { key: 'score', text: labels.score },
        { key: 'upcoming', text: labels.upcoming }
    ];

    let ACTIVE_OPTION = CUSTOM_OPTIONS[0]; 
    const CONTENT_ID = 'custom-sort-content-' + Date.now(); 

    // --- Helper Functions for HTML and CSS (unchanged) ---
    function createCustomDropdownHTML(title, activeOption, contentId) {
        const optionsHTML = CUSTOM_OPTIONS.map(opt => `
            <div role="option" aria-label="${opt.text}" tabindex="0" 
                 class="select-content__option--gq8Uo ${opt.key === activeOption.key ? 'select-content__option--is-active--VeLlq' : ''}" 
                 aria-selected="${opt.key === activeOption.key}" 
                 data-sort-key="${opt.key}">
                <span class="text--gq6o- text--is-regular--M4487 text--is-m--pqiL- middle-truncation--x7S4D" 
                      style="font-family: &quot;Cal Sans&quot;, sans-serif !important;">
                    <span class="middle-truncation__text--xv72L">${opt.text}</span>
                </span>
            </div>
        `).join('');

        return `
            <div class="dropdown--cacSP custom-browse-sorting" role="presentation">
                <div role="button" aria-label="${title}" tabindex="0" 
                     class="dropdown-trigger--P--FX dropdown-trigger--is-styled--Q3nCd select-trigger--is-type-filled--4DySC" 
                     aria-haspopup="listbox" aria-expanded="false" aria-controls="${contentId}">
                    <svg class="dropdown-trigger__icon--yrLaj" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                          data-t="sort-svg" aria-hidden="true" role="img">
                        ${SVG_SORT_PATH}
                    </svg>
                    <span class="call-to-action--PEidl call-to-action--is-m--RVdkI select-trigger__title-cta--C5-uH trigger-title" 
                          style="font-family: &quot;Cal Sans&quot;, sans-serif !important;">${activeOption.text}</span>
                    <span class="text--gq6o- text--is-bold--yth2a text--is-xl---ywR- select-trigger__title-truncated--D00zB trigger-title" 
                          style="font-family: &quot;Cal Sans&quot;, sans-serif !important;">
                        <span class="select-trigger__title-truncated-text--5KH40">${activeOption.text}</span>
                    </span>
                </div>
                <div class="dropdown-content--5b5F7 dropdown-content--is-align-right--cl-nx dropdown-content--is-position-bottom--de83c select-content--is-height-type-tall--1YXg3" 
                     id="${contentId}" role="listbox" style="transform: translateX(0px); display: none;">
                    <div class="dropdown-mobile-heading--e2dKK">
                        <h4 class="text--gq6o- text--is-fixed-size--5i4oU text--is-regular--M4487 text--is-l--iccTo" 
                            style="font-family: &quot;Cal Sans&quot;, sans-serif !important;">${labels.mobileTitle}</h4>
                        <svg class="dropdown-mobile-heading__close-icon--O5-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="mobile-header-close-svg" aria-hidden="false" role="img">
                            <title>Close</title><path d="M13.414 12l5.293-5.293a.999.999 0 1 0-1.414-1.414L12 10.586 6.707 5.293a.999.999 0 1 0-1.414 1.414L10.586 12l-5.293 5.293a.999.999 0 0 0 0 1.414.993.993 0 0 0 1.414 0L12 13.414l5.293 5.293a.999.999 0 1 0 1.414-1.414L13.414 12z"></path>
                        </svg>
                    </div>
                    <div class="dropdown-content__scrollable--pLz5Y" role="presentation">
                        <div class="dropdown-content__scrollable-content--X8fsP" role="presentation">
                            <div class="dropdown-content__fade--WCr0e" role="presentation"></div>
                            <div class="dropdown-content__children--HW28H" role="presentation">
                                <span class="dropdown-content__marker--kViWn" role="presentation"></span>
                                <div role="presentation">
                                    ${optionsHTML}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown-content__footer--dqVM8"></div>
                </div>
            </div>
        `;
    }

    function injectCustomCSS() {
        const style = document.createElement('style');
        style.innerHTML = `
            .new-dropdown-group {
                display: flex;
                flex-direction: row; 
                gap: 8px; 
                align-items: center; 
            }
            .new-dropdown-group > .dropdown--cacSP {
                margin: 0 !important;
            }
        `;
        document.head.appendChild(style);
    }
    // --- End of Helper Functions for HTML ---
    
    // --- PARSING AND SORTING LOGIC (extractCardData unchanged) ---
    function parseCountdownToSeconds(countdownText) {
        if (!countdownText) return Infinity; 
        const dayMatch = countdownText.match(/(\d+)d/);
        const hourMatch = countdownText.match(/(\d+)h/);
        const minMatch = countdownText.match(/(\d+)m/);

        let seconds = 0;
        if (dayMatch) seconds += parseInt(dayMatch[1]) * 86400;
        if (hourMatch) seconds += parseInt(hourMatch[1]) * 3600;
        if (minMatch) seconds += parseInt(minMatch[1]) * 60;

        return seconds > 0 ? seconds : Infinity; 
    }
    
    function extractCardData(cardElement) {
        const innerCard = cardElement.querySelector('.browse-card--esJdT');
        
        const titleElement = innerCard ? innerCard.querySelector('.browse-card__title--YK28O a') : null;
        const title = titleElement ? titleElement.textContent.trim() : '';

        const scoreElement = innerCard ? innerCard.querySelector('.cr-score-badge') : null;
        let score = 0;
        if (scoreElement) {
            const scoreText = scoreElement.textContent.trim();
            const scoreMatch = scoreText.match(/[\d\.]+/); 
            score = scoreMatch ? parseFloat(scoreMatch[0]) : 0;
        }

        const countdownElement = innerCard ? innerCard.querySelector('.cr-countdown-badge') : null;
        const countdownText = countdownElement ? countdownElement.textContent.trim() : '';
        const upcomingSeconds = parseCountdownToSeconds(countdownText);

        return {
            element: cardElement, 
            title: title.toLowerCase(), 
            score: score,
            upcomingSeconds: upcomingSeconds
        };
    }

    function applySortLogic(sortKey) {
        const collectionContainer = document.querySelector('.erc-browse-cards-collection');
        if (!collectionContainer) {
            console.error("Contenedor de cards no encontrado.");
            return;
        }

        let cards = Array.from(collectionContainer.querySelectorAll('.browse-card')); 
        
        const sortableCards = cards.filter(card => {
            const isHidden = card.style.display === 'none';
            return !isHidden && card.querySelector('.browse-card--esJdT');
        });
        
        if (sortableCards.length === 0) {
            console.warn("No visible browse cards were found to sort. Skipping sort.");
            return;
        }
        
        const cardData = sortableCards.map(extractCardData);

        let comparator;
        switch (sortKey) {
            case 'alphabetical':
                comparator = (a, b) => a.title.localeCompare(b.title);
                break;
            case 'score':
                comparator = (a, b) => b.score - a.score; 
                break;
            case 'upcoming':
                comparator = (a, b) => a.upcomingSeconds - b.upcomingSeconds;
                break;
            default:
                console.warn(`Unknown sort key: ${sortKey}`);
                return;
        }
        
        cardData.sort(comparator);

        const fragment = document.createDocumentFragment();
        cardData.forEach(data => {
            fragment.appendChild(data.element); 
        });
        
        collectionContainer.appendChild(fragment);
        console.log(`Collection sorted by: ${sortKey}`);
    }
    // --- Fin de LÓGICA DE ORDENACIÓN ---

    // ====================================================================
    // FUNCIÓN DE ORDENACIÓN ASÍNCRONA (Con reintentos y filtro)
    // ====================================================================

    let sortInterval = null;

    function applySortIfCardsExist() {
        const collectionContainer = document.querySelector('.erc-browse-cards-collection');
        
        if (!collectionContainer) return false;

        let cards = Array.from(collectionContainer.querySelectorAll('.browse-card')); 
        const visibleCards = cards.filter(card => card.style.display !== 'none' && card.querySelector('.browse-card--esJdT'));
        
        if (visibleCards.length > 0) {
            console.log(`✅ ${visibleCards.length} visible cards detected. Applying sort: ${ACTIVE_OPTION.key}`);
            applySortLogic(ACTIVE_OPTION.key);
            
            if (sortInterval) {
                clearInterval(sortInterval);
                sortInterval = null;
                console.log("-> Automatic sort retry interval stopped.");
            }
            return true; 
        }
        return false; 
    }

    function observeCardsAndApplySort() {
        if (sortInterval) {
            clearInterval(sortInterval);
            sortInterval = null;
        }
        
        if (applySortIfCardsExist()) {
            return;
        }

        console.log("-> Starting automatic sort retry interval (3 seconds max).");
        let attempts = 0;
        const MAX_ATTEMPTS = 10; 

        sortInterval = setInterval(() => {
            if (attempts >= MAX_ATTEMPTS) {
                clearInterval(sortInterval);
                sortInterval = null;
                console.warn("❌ Maximum automatic sort retry attempts reached without success.");
                return;
            }
            
            applySortIfCardsExist(); 
            attempts++;
        }, 300); 
    }
    
    // ====================================================================
    // LÓGICA DE EVENTOS (sin cambios)
    // ====================================================================

    function handleOptionSelect(key, text, dropdownContainer) {
        const trigger = dropdownContainer.querySelector('.dropdown-trigger--P--FX');
        const content = dropdownContainer.querySelector('.dropdown-content--5b5F7');
        trigger.classList.remove('dropdown-trigger--is-open--DP-0Q', 'select-trigger--is-opened--Kk8za');
        trigger.setAttribute('aria-expanded', 'false');
        content.style.display = 'none';

        ACTIVE_OPTION = { key, text };

        const triggerTitles = dropdownContainer.querySelectorAll('.trigger-title');
        triggerTitles.forEach(span => span.textContent = text);
        
        const options = dropdownContainer.querySelectorAll('[role="option"]');
        options.forEach(opt => {
            const isActive = opt.getAttribute('data-sort-key') === key;
            opt.setAttribute('aria-selected', isActive);
            opt.classList.toggle('select-content__option--is-active--VeLlq', isActive);
        });

        applySortLogic(key);
    }
    
    // ====================================================================
    // LÓGICA DE INYECCIÓN (sin cambios mayores, solo la llamada a observeSeasonDropdown)
    // ====================================================================

    function injectCustomDropdown() {
        const header = document.querySelector('div.header');
        const seasonDropdown = header ? header.querySelector('.dropdown--cacSP:not(.custom-browse-sorting)') : null;
        const existingGroup = document.querySelector('.new-dropdown-group');

        if (header && seasonDropdown && !existingGroup) {
            console.log("-> Creando grupo contenedor y moviendo Dropdowns (REINYECTANDO)...");
            
            ACTIVE_OPTION = CUSTOM_OPTIONS[0]; 
            
            const newGroup = document.createElement('div');
            newGroup.className = 'new-dropdown-group';

            const customDropdownHTML = createCustomDropdownHTML(labels.title, ACTIVE_OPTION, CONTENT_ID); 
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = customDropdownHTML.trim();
            const newDropdownElement = tempDiv.firstChild;
            
            seasonDropdown.before(newGroup); 
            newGroup.appendChild(seasonDropdown); 
            newGroup.insertBefore(newDropdownElement, seasonDropdown);
            
            const newDropdownContainer = newGroup.querySelector('.custom-browse-sorting');
            if (newDropdownContainer) {
                const trigger = newDropdownContainer.querySelector('.dropdown-trigger--P--FX');
                const content = newDropdownContainer.querySelector('.dropdown-content--5b5F7');
                const optionsContainer = newDropdownContainer.querySelector('.dropdown-content__children--HW28H');

                // 1. Toggle
                trigger.addEventListener('click', (e) => {
                    e.stopPropagation(); 
                    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
                    const newState = !isExpanded;
                    
                    trigger.setAttribute('aria-expanded', String(newState));
                    trigger.classList.toggle('dropdown-trigger--is-open--DP-0Q', newState);
                    trigger.classList.toggle('select-trigger--is-opened--Kk8za', newState);
                    content.style.display = newState ? 'block' : 'none';
                });
                
                // 2. Selección y Ordenación
                optionsContainer.addEventListener('click', (event) => {
                    const option = event.target.closest('[role="option"]');
                    if (option) {
                        const key = option.getAttribute('data-sort-key');
                        const selectedOption = CUSTOM_OPTIONS.find(opt => opt.key === key);
                        handleOptionSelect(key, selectedOption.text, newDropdownContainer);
                    }
                });

                // 3. Cerrar al hacer clic fuera
                document.addEventListener('click', (event) => {
                    if (newDropdownContainer && !newDropdownContainer.contains(event.target)) {
                        trigger.setAttribute('aria-expanded', 'false');
                        trigger.classList.remove('dropdown-trigger--is-open--DP-0Q', 'select-trigger--is-opened--Kk8za');
                        content.style.display = 'none';
                    }
                });
                
                observeCardsAndApplySort();
            }
            
            // 🔥 Nueva llamada para observar el contenido del dropdown nativo
            observeSeasonDropdown();
        }
    }

    // ====================================================================
    // 🔥 LÓGICA DE DETECCIÓN DE CLICK EN OPCIONES DE TEMPORADA NATIVAS (CORREGIDA)
    // ====================================================================

    function observeSeasonDropdown() {
        // Encontrar el contenedor principal del dropdown de temporada
        const seasonDropdown = document.querySelector('.dropdown--cacSP:not(.custom-browse-sorting)');
        
        if (!seasonDropdown || seasonDropdown.hasAttribute('data-season-listener-active')) {
            return;
        }

        const seasonTrigger = seasonDropdown.querySelector('[role="button"]');
        if (!seasonTrigger) {
             console.warn("Season dropdown trigger button was not found.");
             return;
        }

        // Marcar el contenedor padre como observado para evitar duplicados
        seasonDropdown.setAttribute('data-season-listener-active', 'true');
        console.log("-> Native season dropdown found. Starting trigger button observer.");

        // Usaremos un observador para detectar cuando el dropdown se abre/cierra
        const triggerObserver = new MutationObserver((mutationsList, observer) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'aria-expanded') {
                    const isExpanded = seasonTrigger.getAttribute('aria-expanded') === 'true';

                    if (isExpanded) {
                        // El dropdown se acaba de abrir
                        console.log("-> 🔓 Dropdown de temporada ABIERTO. Adjuntando listener de click al contenido.");
                        
                        // Usar setTimeout con 0ms para esperar a que el DOM se actualice completamente
                        setTimeout(() => {
                             // El contenido ya debería estar en el DOM aquí
                            const contentContainer = seasonDropdown.querySelector('.dropdown-content__scrollable--pLz5Y');
                            if (contentContainer && !contentContainer.hasAttribute('data-click-listener-attached')) {
                                
                                // Adjuntar listener al contenedor de opciones, pero solo una vez
                                contentContainer.setAttribute('data-click-listener-attached', 'true');
                                
                                contentContainer.addEventListener('click', (event) => {
                                    const option = event.target.closest('[role="option"]');
                                    if (option) {
                                        console.log("-> 👆 Native season option click detected. Restarting sort in 500ms.");
                                        
                                        // Esperar a que la recarga nativa se inicie (si la hay)
                                        setTimeout(() => {
                                            observeCardsAndApplySort(); 
                                        }, 100); 
                                    }
                                });
                            }
                        }, 0); 
                    } else {
                        // El dropdown se acaba de cerrar
                        console.log("-> 🔒 Dropdown de temporada CERRADO.");
                        // Opcional: Podrías buscar el contenedor y quitar el atributo 'data-click-listener-attached' 
                        // si el contenido es eliminado del DOM, pero con el listener adjunto al contenedor que 
                        // aparece y desaparece, esto es menos crítico.
                    }
                }
            }
        });

        // Observar solo el atributo 'aria-expanded' en el botón de activación.
        const observerConfig = { attributes: true, attributeFilter: ['aria-expanded'] };
        triggerObserver.observe(seasonTrigger, observerConfig);
    }
    
    // ====================================================================
    // LÓGICA DE PERSISTENCIA (MutationObserver)
    // ====================================================================
    
    function initializeDropdownPersistence() {
        injectCustomCSS();
        
        const parentToObserve = document.body;
        if (!parentToObserve) return;

        // 1. Inyección inicial
        injectCustomDropdown(); 

        // 2. Iniciar el observador de UI
        const observer = new MutationObserver((mutationsList, observer) => {
            // Reinyecta nuestro dropdown si el header es reemplazado.
            injectCustomDropdown();
            // Esto también llamará a observeSeasonDropdown, re-configurando el listener si el dropdown nativo se recrea.
        });
    
        const observerConfig = { childList: true, subtree: true };
        console.log("-> Iniciando observador de persistencia permanente.");
        observer.observe(parentToObserve, observerConfig);
    }

    // Iniciar el proceso
    initializeDropdownPersistence();
})();