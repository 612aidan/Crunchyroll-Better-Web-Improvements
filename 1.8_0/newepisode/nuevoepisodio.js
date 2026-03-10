    const NEW_EPISODE_SETTING_KEY = 'newEpisodeLabel';
    const ENTER_TO_SKIP_SETTING_KEY = 'enterToSkipPrompts';
    const IS_TOP_FRAME = (() => {
        try {
            return window.top === window.self;
        } catch (error) {
            return true;
        }
    })();



function applyNewEpisodeLabel() {

        const CARD_SELECTOR = '.browse-card';
    const POSTER_WRAPPER_SELECTOR = '.browse-card__poster-wrapper--pU-AW';
    const NEW_INJECTED_FLAG = 'data-new-episode-injected';
    const NEW_LABEL_CLASS = 'cr-new-episode-badge';
    const TIME_LIMIT_MS = 24 * 60 * 60 * 1000;

    // --- 2. UTILITIES (Included so the script is self-contained) ---
    const normalize = s => (s||"").toString().toLowerCase().trim()
        .replace(/[^a-z0-9]+/g,'-')
        .replace(/^-+|-+$/g,'');

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
        } catch(e){ }
        return "";
    }

    (async function(){


    // --- 3. LANGUAGE LOGIC ---
    function getLabelTextsByLanguage() {
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
            'en': { new: 'NEW EPISODE', last: 'FINAL EPISODE' },
            'es': { new: 'NEW EPISODE', last: 'FINAL EPISODE' },
            'pt': { new: 'NOVO EPISÓDIO', last: 'ÚLTIMO EPISÓDIO' },
            'fr': { new: 'NOUVEL ÉPISODE', last: 'DERNIER ÉPISODE' },
            'de': { new: 'NEUE EPISODE', last: 'LETZTE EPISODE' },
            'id': { new: 'EPISODE BARU', last: 'EPISODE AKHIR' }, 
            'it': { new: 'NUOVO EPISODIO', last: 'ULTIMO EPISODIO' },
            'ru': { new: 'НОВАЯ СЕРИЯ', last: 'ПОСЛЕДНЯЯ СЕРИЯ' }, 
            'ar': { new: 'حلقة جديدة', last: 'الحلقة الأخيرة' }, 
            'hi': { new: 'नया एपिसोड', last: 'अंतिम एपिसोड' } 
        };

        return translations[langCode] || translations['en'];
    }

    // --- 4. CALCULATIONS ---
    function calculateNewEpisodeStatus(fechaInicioStr, capitulosTotales, initialEpisode, translations) {
        const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;
        const now = new Date();
        const firstEpisodeDate = new Date(fechaInicioStr);
        
        if (isNaN(firstEpisodeDate) || capitulosTotales <= 0) return null;

        const diffTime = now.getTime() - firstEpisodeDate.getTime();
        const weeksPassed = Math.floor(diffTime / MS_PER_WEEK);
        
        // Calculate the last aired episode date based on the current date
        let lastAiredEpisodeNumber = weeksPassed + initialEpisode;
        let lastAiredDate = new Date(firstEpisodeDate.getTime() + (lastAiredEpisodeNumber - initialEpisode) * MS_PER_WEEK);

        if (now.getTime() < firstEpisodeDate.getTime() + (weeksPassed + 1) * MS_PER_WEEK) {
            // This week's airing time has not happened yet
            lastAiredEpisodeNumber = weeksPassed + initialEpisode;
            lastAiredDate = new Date(firstEpisodeDate.getTime() + (lastAiredEpisodeNumber - initialEpisode) * MS_PER_WEEK);
        } else {
             // The airing time has passed, so the new episode is already out
             lastAiredEpisodeNumber = weeksPassed + initialEpisode + 1;
             lastAiredDate = new Date(firstEpisodeDate.getTime() + (lastAiredEpisodeNumber - initialEpisode) * MS_PER_WEEK);
        }

        // Case A: FINAL EPISODE
        if (lastAiredEpisodeNumber >= capitulosTotales) {
            // Only show it if it is still within 48 hours of the final release
            if (lastAiredDate.getTime() + TIME_LIMIT_MS >= now.getTime()) {
                return { 
                    status: 'LAST', 
                    label: translations.last, 
                    color: '#ffffffff' // Purple
                };
            } else {
                return { status: 'NONE' }; 
            }
        }
        
        // Case B: NEW EPISODE
        if (lastAiredDate.getTime() <= now.getTime() && 
            lastAiredDate.getTime() + TIME_LIMIT_MS >= now.getTime()) {
            
            if (lastAiredEpisodeNumber >= initialEpisode) { 
                 return { 
                    status: 'NEW', 
                    label: translations.new, 
                    color: '#ffffffff' // Orange
                };
            }
        }

        return { status: 'NONE' };
    }

    // --- 5. DOM INJECTION ---
    function addNewEpisodeLabel(cardElement, slugToEpisodeMap, translations) {
        const posterWrapper = cardElement.querySelector(POSTER_WRAPPER_SELECTOR);

        if (!posterWrapper || cardElement.hasAttribute(NEW_INJECTED_FLAG)) {
            return;
        }

        const slug = getSlugFromCard(cardElement);
        const data = slugToEpisodeMap.get(slug);
        
        if (!data || !data.emissionDate || !data.totalEpisodes) {
             cardElement.setAttribute(NEW_INJECTED_FLAG, 'processed'); 
             return;
        }
        
        const statusInfo = calculateNewEpisodeStatus(data.emissionDate, data.totalEpisodes, data.initialEpisode || 1, translations);

        if (!statusInfo || statusInfo.status === 'NONE') {
            cardElement.setAttribute(NEW_INJECTED_FLAG, 'none'); 
            return;
        }

        const newLabel = document.createElement('div');
        newLabel.textContent = statusInfo.label;
        newLabel.className = NEW_LABEL_CLASS; 
        
        // Inline styles to keep the output consistent
        newLabel.style.position = 'absolute';
        newLabel.style.top = '8px';    
        newLabel.style.left = '8px';  
        newLabel.style.zIndex = '0'; 
        newLabel.style.backgroundColor = statusInfo.color;
        newLabel.style.color = 'black';
        newLabel.style.padding = '3px 6px';
        newLabel.style.borderRadius = '3px';
        newLabel.style.fontSize = '12px';
        newLabel.style.fontWeight = '700';
        newLabel.style.pointerEvents = 'none';
        newLabel.style.textTransform = 'uppercase';

        newLabel.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.5)';

        posterWrapper.style.position = 'relative';
        posterWrapper.appendChild(newLabel);

        cardElement.setAttribute(NEW_INJECTED_FLAG, statusInfo.status);
    }

    // --- 6. MAIN EXECUTION ---
    async function startService() {
        console.log("CR Better Web: Starting New Episode labels (always active)");

        // Load the database
        const url = chrome.runtime.getURL('database/ContdownDB.json');
        const response = await fetch(url);
        const animesDB = await response.json();

        // Map the database
        const slugToEpisodeMap = new Map(animesDB
            .filter(a => a.FechaEmision && a.Episodes)
            .map(a => [normalize(a.slug), {
                emissionDate: a.FechaEmision, 
                totalEpisodes: a.Episodes, 
                initialEpisode: a["Episodio Inicial"] || 1
            }])
        );
        
        const translations = getLabelTextsByLanguage();

        // Bulk processing function
        function processAllNewCards() {
            document.querySelectorAll(CARD_SELECTOR).forEach(card => {
                addNewEpisodeLabel(card, slugToEpisodeMap, translations);
            });
        }

        // Observer
        const observer = new MutationObserver(() => {
            processAllNewCards();
        });
        observer.observe(document.body, { childList: true, subtree: true });

        // Initial runs
        setTimeout(processAllNewCards, 500); 
        setInterval(processAllNewCards, 30 * 60 * 1000); // Revisión cada 30 min
    }

    // IMMEDIATE START
    startService();

})();

}

// ======================================================================
// 3. CONTROL LOGIC (TOGGLE)
// ======================================================================

function initializeNewEpisodeFeature() {
    if (!IS_TOP_FRAME) {
        return;
    }

    chrome.storage.local.get([NEW_EPISODE_SETTING_KEY], (settings) => {
        
        const isNewEpisodeEnabled = settings[NEW_EPISODE_SETTING_KEY]; 

        if (isNewEpisodeEnabled) {
            console.log("CR Better Web: Enabling New Episode Label.");
            applyNewEpisodeLabel();
        } else {
            console.log("CR Better Web: New Episode labels disabled.");
        }
    });
}


// ======================================================================
// 4. SCRIPT START
// ======================================================================
initializeNewEpisodeFeature();

function initializeEnterToSkipPrompts() {
    const WATCH_PATH_SEGMENT = '/watch/';
    const SEEK_SECONDS = 5;
    const SKIP_KEYWORDS = ['skip intro', 'skip credits', 'skip recap', 'skip'];
    const KNOWN_SKIP_WRAPPER_SELECTOR = '[data-testid="skipButton"]';
    const KNOWN_SKIP_TEXT_SELECTOR = '[data-testid="skipIntroText"]';
    const KNOWN_SKIP_BUTTON_SELECTOR = [
        '[data-testid="skipButton"] [role="button"]',
        '[data-testid="skipButton"] [tabindex]',
        '[role="button"][aria-label*="Skip"]',
        '[role="button"][aria-label*="skip"]'
    ].join(', ');
    const DEBUG_PREFIX = '[CR Better Web][Enter To Skip]';
    const SKIP_BROADCAST_TYPE = 'CRBW_ENTER_TO_SKIP_TRIGGER';
    const PLAYER_REGION_SELECTOR = [
        KNOWN_SKIP_WRAPPER_SELECTOR,
        '[data-t*="player"]',
        '[data-t*="Player"]',
        '[class*="player"]',
        '[class*="Player"]',
        '[class*="vilos"]',
        '[class*="Vilos"]',
        '[class*="watch"]',
        '[class*="Watch"]',
        '.top-controls'
    ].join(', ');
    const CLICKABLE_SELECTOR = 'button, [role="button"], [tabindex]';

    let isFeatureEnabled = true;

    function debugLog(message, details) {
        if (typeof details === 'undefined') {
            console.log(`${DEBUG_PREFIX} ${message}`);
            return;
        }

        console.log(`${DEBUG_PREFIX} ${message}`, details);
    }

    function isWatchPage() {
        return (
            window.location.pathname.includes(WATCH_PATH_SEGMENT)
            || window.location.pathname.includes('/vilos/player.html')
        );
    }

    function isEditableTarget(target) {
        if (!(target instanceof Element)) {
            return false;
        }

        return Boolean(target.closest('input, textarea, select, [contenteditable=""], [contenteditable="true"], [contenteditable="plaintext-only"]'));
    }

    function isElementVisible(element) {
        if (!(element instanceof HTMLElement)) {
            return false;
        }

        const style = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();

        return (
            style.display !== 'none'
            && style.visibility !== 'hidden'
            && rect.width > 0
            && rect.height > 0
        );
    }

    function isElementEnabled(element) {
        if (element instanceof HTMLButtonElement) {
            return !element.disabled;
        }

        return element.getAttribute('aria-disabled') !== 'true';
    }

    function getAccessibleLabel(element) {
        return [
            element.getAttribute('aria-label'),
            element.getAttribute('title'),
            element.textContent
        ]
            .map((value) => String(value || '').trim().toLowerCase())
            .filter(Boolean)
            .join(' ');
    }

    function isKnownSkipPrompt(element) {
        return Boolean(
            element.closest(KNOWN_SKIP_WRAPPER_SELECTOR)
            || element.querySelector(KNOWN_SKIP_TEXT_SELECTOR)
        );
    }

    function hasSkipLabel(element) {
        const label = getAccessibleLabel(element);
        return SKIP_KEYWORDS.some((keyword) => label.includes(keyword));
    }

    function scoreCandidate(element) {
        const label = getAccessibleLabel(element);
        let score = 0;

        if (isKnownSkipPrompt(element)) {
            score += 200;
        }

        if (label.includes('skip intro')) {
            score += 100;
        } else if (label.includes('skip credits')) {
            score += 90;
        } else if (label.includes('skip recap')) {
            score += 80;
        } else if (label.includes('skip')) {
            score += 60;
        }

        if (element.closest(PLAYER_REGION_SELECTOR)) {
            score += 40;
        }

        return score;
    }

    function getKnownSkipCandidates() {
        return Array.from(document.querySelectorAll(KNOWN_SKIP_BUTTON_SELECTOR))
            .filter((element) => element instanceof HTMLElement)
            .filter((element) => isElementEnabled(element))
            .filter((element) => hasSkipLabel(element) || isKnownSkipPrompt(element));
    }

    function requestSkipClickFromBackground(source) {
        debugLog(`Forwarding direct skip click request from ${source}.`);

        chrome.runtime.sendMessage({ action: 'clickSkipIntro' }, (response) => {
            if (chrome.runtime.lastError) {
                debugLog('Background skip click failed.', {
                    error: chrome.runtime.lastError.message
                });
                return;
            }

            debugLog('Background skip click response.', response);
        });
    }

    function requestVideoSeekFromBackground(deltaSeconds, source) {
        debugLog(`Forwarding video seek request from ${source}.`, {
            deltaSeconds
        });

        chrome.runtime.sendMessage({ action: 'seekVideo', deltaSeconds }, (response) => {
            if (chrome.runtime.lastError) {
                debugLog('Background video seek failed.', {
                    error: chrome.runtime.lastError.message
                });
                return;
            }

            debugLog('Background video seek response.', response);
        });
    }

    function requestPlaybackToggleFromBackground(source) {
        debugLog(`Forwarding playback toggle request from ${source}.`);

        chrome.runtime.sendMessage({ action: 'togglePlayback' }, (response) => {
            if (chrome.runtime.lastError) {
                debugLog('Background playback toggle failed.', {
                    error: chrome.runtime.lastError.message
                });
                return;
            }

            debugLog('Background playback toggle response.', response);
        });
    }

    function handleKeydown(event) {
        debugLog('Keydown detected.', {
            key: event.key,
            defaultPrevented: event.defaultPrevented,
            repeat: event.repeat,
            targetTagName: event.target instanceof Element ? event.target.tagName : null
        });

        if (!isFeatureEnabled || !isWatchPage()) {
            debugLog('Ignoring keydown because feature is disabled or page is not a watch page.', {
                isFeatureEnabled,
                pathname: window.location.pathname
            });
            return;
        }

        if (
            event.repeat
            || event.defaultPrevented
            || event.altKey
            || event.ctrlKey
            || event.metaKey
            || event.shiftKey
        ) {
            debugLog('Ignoring keydown because it is not an unmodified supported key press.');
            return;
        }

        if (isEditableTarget(event.target)) {
            debugLog('Ignoring keydown because the target is editable.');
            return;
        }

        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            requestSkipClickFromBackground('keydown');
            return;
        }

        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            event.stopPropagation();
            requestVideoSeekFromBackground(-SEEK_SECONDS, 'keydown');
            return;
        }

        if (event.key === 'ArrowRight') {
            event.preventDefault();
            event.stopPropagation();
            requestVideoSeekFromBackground(SEEK_SECONDS, 'keydown');
            return;
        }

        if (event.key === ' ' || event.code === 'Space') {
            event.preventDefault();
            event.stopPropagation();
            requestPlaybackToggleFromBackground('keydown');
            return;
        }

        debugLog('Ignoring keydown because it is not a supported key.');
    }

    chrome.storage.local.get([ENTER_TO_SKIP_SETTING_KEY], (settings) => {
        isFeatureEnabled = settings[ENTER_TO_SKIP_SETTING_KEY] !== false;
        debugLog('Initialized feature state.', {
            isFeatureEnabled,
            isTopFrame: IS_TOP_FRAME,
            hostname: window.location.hostname,
            pathname: window.location.pathname
        });
    });

    chrome.storage.onChanged.addListener((changes, areaName) => {
        if (areaName !== 'local' || !changes[ENTER_TO_SKIP_SETTING_KEY]) {
            return;
        }

        isFeatureEnabled = changes[ENTER_TO_SKIP_SETTING_KEY].newValue !== false;
        debugLog('Feature toggle changed.', { isFeatureEnabled });
    });

    document.addEventListener('keydown', handleKeydown, true);
    debugLog('Attached keydown listener.', {
        isTopFrame: IS_TOP_FRAME,
        hostname: window.location.hostname,
        pathname: window.location.pathname
    });
}

initializeEnterToSkipPrompts();
