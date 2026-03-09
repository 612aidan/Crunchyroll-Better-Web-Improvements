(function() {
    // =================================================================
    // MODULE CONSTANTS AND STATE
    // =================================================================
    const COUNTDOWN_SETTING_KEY = 'countdownLabel'; 
    const SERIES_ACTIONS_CONTAINER = '[class^="series-hero__actions-wrapper"]'; 
    const COUNTDOWN_ID = "crCountdownSeries"; 
    const SERIES_INJECTED_FLAG = 'data-series-countdown-injected';
    const UPDATE_INTERVAL_MS = 1000;
    const INITIAL_LOAD_TIMEOUT = 5000; // Maximum time to wait for the anchor on initial load
    
    // State variables
    let currentCountdownInterval = null; 
    let currentSeriesData = null; 
    let currentCountdownBox = null;
    
    // =================================================================
    // === LANGUAGE DETECTION FOR TRANSLATION ===
    // =================================================================

    function getFinishedTextByLanguage() {
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

        const translations = {
            'en': 'COMPLETED', 
            'es': 'FINALIZADA', 
            'pt': 'FINALIZADA', 
            'fr': 'TERMINÉ', 
            'de': 'ABGESCHLOSSEN', 
            'id': 'SELESAI', 
            'it': 'COMPLETATO', 
            'ru': 'ЗАВЕРШЕНО', 
            'ar': 'مُنْتَهِي', 
            'hi': 'समाप्त' 
        };

        return translations[langCode] || translations['en'];
    }

    const FINISHED_TEXT = getFinishedTextByLanguage();
    
    // =================================================================
    // UTILITY FUNCTIONS
    // =================================================================
    
    const normalize = s => (s||"").toString().toLowerCase().trim()
        .replace(/[^a-z0-9]+/g,'-')
        .replace(/^-+|-+$/g,'');

    function formatTimeRemaining(timeToNext) {
        const MS_PER_DAY = 1000 * 60 * 60 * 24;
        const MS_PER_HOUR = 1000 * 60 * 60;
        const MS_PER_MINUTE = 1000 * 60;
        
        const days = Math.floor(timeToNext / MS_PER_DAY);
        const hours = Math.floor((timeToNext % MS_PER_DAY) / MS_PER_HOUR);
        const minutes = Math.floor((timeToNext % MS_PER_HOUR) / MS_PER_MINUTE);
        const seconds = Math.floor((timeToNext % MS_PER_MINUTE) / 1000); 

        let timeRemaining = '';
        if (days > 0) {
            timeRemaining += `${days}d `;
            timeRemaining += `${hours}h ${minutes}m`;
        } else {
            timeRemaining += `${hours}h ${minutes}m ${seconds}s`;
        }

        return { text: timeRemaining.trim(), isImminent: days === 0 };
    }

    function calculateNextEpisode(fechaInicioStr, capitulosTotales, initialEpisode) {
        const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;
        const now = new Date();
        const firstEpisodeDate = new Date(fechaInicioStr); 

        if (isNaN(firstEpisodeDate)) return null;

        const diffTime = now.getTime() - firstEpisodeDate.getTime();
        const weeksPassed = Math.floor(diffTime / MS_PER_WEEK);

        let nextEpisodeNumber = weeksPassed + initialEpisode; 
        
        let nextEpisodeDate = new Date(firstEpisodeDate.getTime() + (weeksPassed) * MS_PER_WEEK);
        let timeToNext = nextEpisodeDate.getTime() - now.getTime();
        
        if (timeToNext < 0) {
            nextEpisodeNumber += 1;
            nextEpisodeDate = new Date(nextEpisodeDate.getTime() + MS_PER_WEEK); 
            timeToNext = nextEpisodeDate.getTime() - now.getTime(); 
        }

        if (nextEpisodeNumber > capitulosTotales) { 
            return { isFinished: true, nextEpisode: capitulosTotales, timeRemaining: '', timeToNext: -1 };
        }
        
        const days = Math.floor(timeToNext / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeToNext % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeToNext % (1000 * 60 * 60)) / (1000 * 60));

        let timeRemainingInitial = '';
        if (days > 0) {
            timeRemainingInitial += `${days}d `;
        }
        timeRemainingInitial += `${hours}h ${minutes}m`;

        return { nextEpisode: nextEpisodeNumber, timeRemaining: timeRemainingInitial, isFinished: false, timeToNext: timeToNext };
    }

    // =================================================================
    // ASYNC DETECTION LOGIC
    // =================================================================

    // Reintroduced to handle initial load and page refreshes
    function waitForElement(selector, timeout) {
        return new Promise(resolve => {
            let element = document.querySelector(selector);
            // If the element already exists, return it immediately
            if (element && !element.hasAttribute(SERIES_INJECTED_FLAG)) return resolve(element);
            if (element && element.hasAttribute(SERIES_INJECTED_FLAG)) return resolve(null);


            const observer = new MutationObserver((mutationsList, obs) => {
                element = document.querySelector(selector);
                if (element) {
                    obs.disconnect();
                    return resolve(element.hasAttribute(SERIES_INJECTED_FLAG) ? null : element);
                }
            });

            observer.observe(document.body, { childList: true, subtree: true });

            setTimeout(() => {
                observer.disconnect();
                resolve(null);
            }, timeout);
        });
    }

    function onUrlChange(callback) {
        let oldHref = location.href;
        const observer = new MutationObserver(() => {
            if (location.href !== oldHref) {
                oldHref = location.href;
                callback();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    // =================================================================
    // INJECTION AND CONTROL LOGIC
    // =================================================================

    function updateCountdownDisplay() {
        if (!currentSeriesData || !currentCountdownBox) return;

        const { emissionDate, totalEpisodes, initialEpisode } = currentSeriesData;
        const countdownInfo = calculateNextEpisode(emissionDate, totalEpisodes, initialEpisode);

        if (!countdownInfo || countdownInfo.isFinished || countdownInfo.timeToNext <= 0) {
            if (currentCountdownInterval) clearInterval(currentCountdownInterval);
            
            if (currentSeriesData.lastSeason) {
                currentCountdownBox.textContent = FINISHED_TEXT;
                currentCountdownBox.style.color = "var(--series-hero-action-tooltip-color)";
            } else {
                cleanupInjection();
            }
            return;
        }

        const { text: timeRemainingText } = formatTimeRemaining(countdownInfo.timeToNext);

        currentCountdownBox.textContent = `E${countdownInfo.nextEpisode}: ${timeRemainingText}`;
        currentCountdownBox.style.color = "var(--series-hero-action-tooltip-color, #ff7a18)";
        currentCountdownBox.style.backgroundColor = 'transparent'; 
    }

    function cleanupInjection() {
        if (currentCountdownInterval) {
            clearInterval(currentCountdownInterval);
            currentCountdownInterval = null;
        }
        
        const oldBox = document.getElementById(COUNTDOWN_ID); 
        if (oldBox) oldBox.remove();
        
        const oldContainer = document.querySelector(`[${SERIES_INJECTED_FLAG}]`);
        if(oldContainer) oldContainer.removeAttribute(SERIES_INJECTED_FLAG);
        
        currentSeriesData = null; 
        currentCountdownBox = null;
    }


    async function injectAndStartCountdown(animeData) {
        if (document.getElementById(COUNTDOWN_ID)) {
            console.log("CR: Counter already present. Skipping injection.");
            return;
        }
        
        // Use waitForElement to wait until the DOM finishes rendering
        const targetElement = await waitForElement(SERIES_ACTIONS_CONTAINER, INITIAL_LOAD_TIMEOUT);

        if (!targetElement) return;
        
        const countdownInfo = calculateNextEpisode(animeData.emissionDate, animeData.totalEpisodes, animeData.initialEpisode);
        if (!countdownInfo || (countdownInfo.isFinished && !animeData.lastSeason)) return;
        
        // --- INJECTION ---
        const box = document.createElement('div');
        let tagText = countdownInfo.isFinished ? FINISHED_TEXT : `E${countdownInfo.nextEpisode}: ${countdownInfo.timeRemaining}`;

        box.textContent = tagText;
        box.id = COUNTDOWN_ID;
        
        // Styles
        box.style.marginTop = "0px";
        box.style.padding = "0px 0px";
        box.style.background = 'transparent';
        box.style.color = "var(--series-hero-action-tooltip-color, #ff7a18)";
        box.style.fontFamily = 'Cal Sans';
        box.style.fontSize = "20px";
        box.style.fontWeight = "normal";
        box.style.borderRadius = "8px";
        box.style.display = "inline-block";
        box.style.alignSelf = "center"; 
        box.style.marginLeft = "0px"; 
        
        targetElement.insertAdjacentElement("afterend", box); 
        targetElement.setAttribute(SERIES_INJECTED_FLAG, 'true'); 

        currentCountdownBox = box;
        currentSeriesData = animeData; 
        
        updateCountdownDisplay(); 
        currentCountdownInterval = setInterval(updateCountdownDisplay, UPDATE_INTERVAL_MS);
        console.log("CR: Series Countdown Injected and Active.");
    }
    
    // =================================================================
    // SURVIVAL OBSERVER
    // =================================================================
    
    function fastCheckAndReinject() {
        // Handle the DOM being cleared during language changes or SPA navigation.
        if (isSeriesPage() && currentSeriesData !== null && !document.getElementById(COUNTDOWN_ID)) {
             console.log("CR Survival: Counter removed! Reinserting immediately with existing data.");
             // Reuse the cached series data for reinjection
             injectAndStartCountdown(currentSeriesData); 
        }
    }

    const survivalObserver = new MutationObserver(fastCheckAndReinject);
    survivalObserver.observe(document.body, { childList: true, subtree: true });


    // =================================================================
    // ENTRY POINT AND FLOW CONTROL
    // =================================================================

    function isSeriesPage() {
        return window.location.pathname.includes('/series/');
    }

    async function initializeSeriesCountdown() {

        cleanupInjection();

        if (!isSeriesPage()) return; 

        const SERIES_FINISH_OVERRIDE = new Set([
        'attack-on-titan',
        'fullmetal-alchemist-brotherhood',
        'dragon-ball',
        'dragon-ball-z',
        'food-wars-shokugeki-no-soma',
        'darling-in-the-franxx',
        'horimiya',
        'tomo-chan-is-a-girl',
        'dragon-ball-gt',
        'dragon-ball-super',
        'dragon-ball-z-kai',
        'dragon-ball-daima',
        'the-quintessential-quintuplets',
        'saint-seiya',
        'platinum-end',
        'yu-gi-oh',
        'gintama',
        'steinsgate',
        'steinsgate-0',
        'fairy-tail',
        'soul-eater',
        'the-promised-neverland',
        'naruto',
        'naruto-shippuden',
        'bleach',
        'death-note',
        'code-geass',
        'tokyo-ghoul',
        'parasyte-the-maxim',
        'your-lie-in-april',
        'angel-beats',
        'erased',
        'mirai-nikki',
        'dororo',
        'samurai-champloo',
        'cowboy-bebop',
        'trigun',
        'black-bullet',
        'guilty-crown',
        'noragami',
        'another',
        'hellsing-ultimate',
        'elfen-lied',
        'inuyasha',
        'inuyasha-the-final-act',
        'yu-yu-hakusho',
        'mob-psycho-100',
        'kuroko-no-basket',
        'psycho-pass',
        'the-anthem-of-the-heart',
        'fruits-basket-2001',
        'fruits-basket',
        'toradora',
        'charlotte',
        'plastic-memories'
        ]);

        try {
            const settings = await new Promise(resolve => {
                chrome.storage.local.get([COUNTDOWN_SETTING_KEY], resolve);
            });
            
            if (!settings[COUNTDOWN_SETTING_KEY]) return;
            
            const url = chrome.runtime.getURL('database/ContdownDB.json');
            const response = await fetch(url);
            const animesDB = await response.json();
            
            const pathParts = window.location.pathname.split('/').filter(Boolean);
            let currentSlug = '';
            
            if (pathParts.length > 0) {
                currentSlug = normalize(pathParts[pathParts.length-1]);
            }

            let animeData;

        // --- 2. OVERRIDE LIST CHECK ---
        if (SERIES_FINISH_OVERRIDE.has(currentSlug)) {
            // Case 1: The slug is in the override list. Force the completed state.
            console.log(`CR: Slug '${currentSlug}' found in the override list. Marking as COMPLETED.`);
            animeData = {
                emissionDate: '1970-01-01', 
                totalEpisodes: 0,
                initialEpisode: 1,
                lastSeason: true // Key used to force the completed state
            };
        } else {
            // Case 2: Not in the override list, so search ContdownDB.json.
            const url = chrome.runtime.getURL('database/ContdownDB.json');
            const response = await fetch(url);
            const animesDB = await response.json();

            const animeDataEntry = animesDB
                .filter(a => a.FechaEmision && a.Episodes)
                .map(a => [normalize(a.slug), {
                    emissionDate: a.FechaEmision, 
                    totalEpisodes: a.Episodes, 
                    initialEpisode: a["Episodio Inicial"] || 1,
                    lastSeason: a.LastSeason || false
                }])
                .find(([slug]) => slug === currentSlug);

            if (!animeDataEntry) {
                 // Case 2.1: Not in the override list and not in the DB. Stop here.
                 return; 
            }
            
            // Case 2.2: Found in the DB. Use the DB values.
            animeData = animeDataEntry[1];
        }
        // ----------------------------------------------------

        // Call the injector with the resolved animeData object.
        await injectAndStartCountdown(animeData);

    } catch (error) {
        console.error("CR: Error initializing series countdown:", error);
    }
}
    
    // Run on the initial page load, including full refreshes
    initializeSeriesCountdown();

    // Run on each internal SPA navigation
    onUrlChange(initializeSeriesCountdown);

})();
