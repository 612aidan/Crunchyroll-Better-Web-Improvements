const COUNTDOWN_SETTING_KEY = 'countdownLabel'; 



// ======================================================================
// 1. MAIN FEATURE FUNCTION (CONTROLLED BY THE TOGGLE)
// ======================================================================

function applyCountdownLabel() {

    const CARD_SELECTOR = '.browse-card';
const POSTER_WRAPPER_SELECTOR = '.browse-card__poster-wrapper--pU-AW';
const INJECTED_FLAG = 'data-countdown-injected';

// --- ADDITIONS FOR REAL-TIME UPDATES ---
const COUNTDOWN_LABEL_CLASS = 'cr-countdown-badge';
const COUNTDOWN_LABEL_DATA_SLUG = 'data-countdown-slug';
const UPDATE_INTERVAL_MS = 1000; // 1 second for visual updates

// Store cards that need fast updates
// Key: Slug | Value: { element: HTMLElement, emissionDate: string, totalEpisodes: number, nextEpisode: number }
const activeCountdowns = new Map();
// --------------------------------------------------------


// --- Slug normalization (copied from the score/format code) ---
const normalize = s => (s||"").toString().toLowerCase().trim()
    .replace(/[^a-z0-9]+/g,'-')
    .replace(/^-+|-+$/g,'');

// --- Extract the slug or title from a card (copied from the score code) ---
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
        // console.error('getSlugFromCard error', e);
    }
    return "";
}

    (async function(){


        // =========================================================
        // === LANGUAGE DETECTION FOR TRANSLATION ===
        // =========================================================

        /**
         * 🗺️ Determine the page language from the URL and return the translation for "FINISHED".
         * This follows the same language rules as the carousel script.
         * @returns {string} The translated "FINISHED" text.
         */
        function getFinishedTextByLanguage() {
            const urlPath = window.location.pathname;
            let langCode = 'en'; // Default to English

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

            // Translation map for "FINISHED"
            const translations = {
                'en': 'FINISHED',
                'es': 'FINALIZADO',
                'pt': 'FINALIZADO',
                'fr': 'TERMINÉ',
                'de': 'ABGESCHLOSSEN',
                'id': 'SELESAI', // Bahasa Indonesia
                'it': 'COMPLETATO', // Italiano
                'ru': 'ЗАВЕРШЕНО', // Ruso
                'ar': 'مُنْتَهِي', // Árabe
                'hi': 'समाप्त' // Hindi
            };

            const translatedText = translations[langCode] || translations['en'];
            console.log(`ℹ️ Detected translation for 'FINISHED': ${translatedText}`);
            return translatedText;
        }

        const FINISHED_TEXT = getFinishedTextByLanguage(); 
        // =========================================================


        // 1. Load and map the database
        const url = chrome.runtime.getURL('database/ContdownDB.json');
        const response = await fetch(url);
        const animesDB = await response.json();

        // Map slugs to relevant episode data (`FechaEmision` and `Episodes`)
        const slugToEpisodeMap = new Map(animesDB
            .filter(a => a.FechaEmision && a.Episodes) // Keep only series with emission data
            .map(a => [normalize(a.slug), {
                emissionDate: a.FechaEmision, 
                totalEpisodes: a.Episodes, 
                initialEpisode: a["Episodio Inicial"] || 1,
                lastSeason: a.LastSeason || false
            }])
        );
        
        // --- NEW TIME-FORMAT FUNCTION INCLUDING SECONDS ---
        function formatTimeRemaining(timeToNext) {
            const MS_PER_DAY = 1000 * 60 * 60 * 24;
            const MS_PER_HOUR = 1000 * 60 * 60;
            const MS_PER_MINUTE = 1000 * 60;
            
            const days = Math.floor(timeToNext / MS_PER_DAY);
            const hours = Math.floor((timeToNext % MS_PER_DAY) / MS_PER_HOUR);
            const minutes = Math.floor((timeToNext % MS_PER_HOUR) / MS_PER_MINUTE);
            const seconds = Math.floor((timeToNext % MS_PER_MINUTE) / 1000); // <-- SEGUNDOS

            let timeRemaining = '';
            if (days > 0) {
                timeRemaining += `${days}d `;
            }
            // Include seconds only when there are no days left,
            // while preserving the original structure for fast updates.
            if (days > 0) {
                 // Keep the original days/hours/minutes format. The 1s update loop handles the rest.
                timeRemaining += `${hours}h ${minutes}m`;
            } else {
                // For < 24h, include seconds.
                timeRemaining += `${hours}h ${minutes}m ${seconds}s`;
            }

            return { text: timeRemaining.trim(), isImminent: days === 0 };
        }
        // ----------------------------------------------------

        // ----------------------------------------------------------------------
        // ⚙️ DATE CALCULATION AND FORMAT HELPERS (modified to return milliseconds)
        // ----------------------------------------------------------------------
        function calculateNextEpisode(fechaInicioStr, capitulosTotales, initialEpisode) {
            const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;
            const now = new Date();
            // The date already includes UTC (`Z`), so JS handles it correctly.
            const firstEpisodeDate = new Date(fechaInicioStr); 

            if (isNaN(firstEpisodeDate)) return null;

            // Diferencia y semanas transcurridas (redondeado hacia abajo)
            const diffTime = now.getTime() - firstEpisodeDate.getTime();
            const weeksPassed = Math.floor(diffTime / MS_PER_WEEK);

            // The next episode to air is `(initial episode) + (weeks passed)`.
            // Because the DB uses `Episodio Inicial = 1`, the logic is:
            let nextEpisodeNumber = weeksPassed + initialEpisode + 1; 

            // Calculate the next episode air date/time (`weeks passed + 1 week`)
            let nextEpisodeDate = new Date(firstEpisodeDate.getTime() + (weeksPassed + 1) * MS_PER_WEEK);
            let timeToNext = nextEpisodeDate.getTime() - now.getTime();
             
            // If the time is negative, the air time already passed and the episode is already out.
            if (timeToNext < 0) {
                 // The current episode is already live. Show the countdown for the next one.
                 nextEpisodeNumber = nextEpisodeNumber + 1;
                 
                 // Recalculate the countdown for the following episode (one week later)
                 timeToNext = nextEpisodeDate.getTime() + MS_PER_WEEK - now.getTime();

                 // If the current episode (`nextEpisodeNumber - 1`) was the final one
                 if (nextEpisodeNumber - 1 >= capitulosTotales) {
                     return { isFinished: true, nextEpisode: capitulosTotales, timeRemaining: '', timeToNext: -1 };
                 }
            }

            // If every episode has already aired
            if (nextEpisodeNumber > capitulosTotales) { 
                 return { isFinished: true, nextEpisode: capitulosTotales, timeRemaining: '', timeToNext: -1 };
            }
            
            // Use the simplified format for the first calculation (D/H/M only)
            const days = Math.floor(timeToNext / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeToNext % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeToNext % (1000 * 60 * 60)) / (1000 * 60));

            let timeRemaining = '';
            if (days > 0) {
                timeRemaining += `${days}d `;
            }
            timeRemaining += `${hours}h ${minutes}m`;

            // Return the remaining time in milliseconds for the fast update loop.
            return { nextEpisode: nextEpisodeNumber, timeRemaining: timeRemaining, isFinished: false, timeToNext: timeToNext };
        }


        // ----------------------------------------------------------------------
        // MAIN FUNCTION: ADD THE FINAL DYNAMIC LABEL
        // ----------------------------------------------------------------------
        function addCountdownLabel(cardElement) {
            const posterWrapper = cardElement.querySelector(POSTER_WRAPPER_SELECTOR);

            if (!posterWrapper || cardElement.hasAttribute(INJECTED_FLAG)) {
                return;
            }

            const slug = getSlugFromCard(cardElement);
            const data = slugToEpisodeMap.get(slug);
            
            // Skip injection if no data exists for this slug
            if (!data) {
                 return;
            }
            
            const countdownInfo = calculateNextEpisode(data.emissionDate, data.totalEpisodes, data.initialEpisode);

            if (!countdownInfo) {
                return;
            }

            // 1. Determinar el texto y color
            let tagText;
            let tagColor = '#ff640a'; // Marrón suave (Cambiado de #66BB6A a un color más neutro)

            if (countdownInfo.isFinished) {
                // Keep "FINISHED" hidden here for now.
                // if (data.lastSeason) {
                // tagText = FINISHED_TEXT;
                // tagColor = '#ff640a'; // Dark gray
                // } else {
                // return;
                //}
                return;
                
            } else {
                 tagText = `E${countdownInfo.nextEpisode}: ${countdownInfo.timeRemaining}`;
                 
                 // Highlight entries with less than 24 hours left
                 if (!countdownInfo.timeRemaining.includes('d')) {
                     tagColor = '#ff640a'; // Light green / imminent release
                 }
            }
            
            // 2. Create and configure the new label element
            const newLabel = document.createElement('div');
            newLabel.textContent = tagText; 
            newLabel.className = COUNTDOWN_LABEL_CLASS; // Use the shared constant
            newLabel.setAttribute(COUNTDOWN_LABEL_DATA_SLUG, slug); // Save the slug in the DOM

            // 3. Apply styles
            newLabel.style.position = 'absolute';
            newLabel.style.bottom = '8px';  // Bottom-right corner
            newLabel.style.right = '8px';
            newLabel.style.zIndex = '1'; 
            newLabel.style.backgroundColor = tagColor;
            newLabel.style.color = 'white';
            newLabel.style.padding = '3px 6px';
            newLabel.style.borderRadius = '3px';
            newLabel.style.fontSize = '12px';
            newLabel.style.fontWeight = '700';
            newLabel.style.pointerEvents = 'none';

            // 4. Inject the label
            posterWrapper.style.position = 'relative';
            posterWrapper.appendChild(newLabel);

            // 5. Mark the card as processed
            cardElement.setAttribute(INJECTED_FLAG, 'true');
            
            // Add it to the fast-update map if it is still active
            if (!countdownInfo.isFinished && countdownInfo.timeToNext > 0) {
                 activeCountdowns.set(slug, {
                    element: newLabel,
                    emissionDate: data.emissionDate,
                    totalEpisodes: data.totalEpisodes,
                    initialEpisode: data.initialEpisode,
                    lastSeason: data.lastSeason
                });
            }
        }

        // ----------------------------------------------------
        // NEW FUNCTION: REAL-TIME UPDATE LOOP (1 SECOND)
        // ----------------------------------------------------
        function updateCountdownDisplay() {
            if (activeCountdowns.size === 0) return;

            activeCountdowns.forEach((data, slug) => {
                // Recalculate the status to get the updated `timeToNext`
                const countdownInfo = calculateNextEpisode(data.emissionDate, data.totalEpisodes, data.initialEpisode);

                if (!countdownInfo || countdownInfo.isFinished || countdownInfo.timeToNext <= 0) {
                    // If it finished, remove it from the map and update the final text
                    activeCountdowns.delete(slug);
                    if (data.element) {
                        // Check `lastSeason` before deciding what to render
                        if (data.lastSeason) { 
					        data.element.textContent = FINISHED_TEXT;
					        data.element.style.backgroundColor = '#ff640a';
                        } else {
                            // If this is NOT the final season, remove it (or hide it)
                            data.element.remove(); 
                        }
					}
					return;
				}

                // Get the formatted countdown, including seconds when no days remain
                const { text: timeRemainingText, isImminent } = formatTimeRemaining(countdownInfo.timeToNext);

                // Update the DOM text
                data.element.textContent = `E${countdownInfo.nextEpisode}: ${timeRemainingText}`;
                
                // Update the color if the imminent state changed
                const newColor = isImminent ? '#ff640a' : '#ff640a';
                if (data.element.style.backgroundColor !== newColor) {
                    data.element.style.backgroundColor = newColor;
                }
            });
        }
        // ----------------------------------------------------

        // ----------------------------------------------------
        // DYNAMIC DETECTION LOGIC
        // ----------------------------------------------------

        function processAllCards() {
            document.querySelectorAll(CARD_SELECTOR).forEach(card => {
                addCountdownLabel(card);
            });
        }

        // Observer
        const observer = new MutationObserver((mutationsList, observer) => {
            processAllCards();
        });

        const observerConfig = { childList: true, subtree: true };
        observer.observe(document.body, observerConfig);

        // Run once on startup
        setTimeout(processAllCards, 500); 

        // Periodic refresh (every 60 seconds)
        setInterval(processAllCards, 60000); 
        
        // Real-time refresh loop (every 1 second)
        setInterval(updateCountdownDisplay, UPDATE_INTERVAL_MS);

    })(); // End async/await block
}

// ======================================================================
// 3. CONTROL LOGIC (TOGGLE)
// ======================================================================

function initializeCountdownFeature() {
    chrome.storage.local.get([COUNTDOWN_SETTING_KEY], (settings) => {
        
        const isCountdownEnabled = settings[COUNTDOWN_SETTING_KEY]; 

        if (isCountdownEnabled) {
            console.log("CR Better Web: Enabling episode countdown with DB.");
            applyCountdownLabel();
        } else {
            console.log("CR Better Web: Countdown disabled.");
        }
    });
}


// ======================================================================
// 4. SCRIPT START
// ======================================================================
initializeCountdownFeature();
