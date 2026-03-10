const ENTER_TO_SKIP_SETTING_KEY = 'enterToSkipPrompts';
const WATCH_PATH_SEGMENT = '/watch/';
const SKIP_KEYWORDS = ['skip intro', 'skip credits', 'skip recap', 'skip'];
const KNOWN_SKIP_WRAPPER_SELECTOR = '[data-testid="skipButton"]';
const KNOWN_SKIP_TEXT_SELECTOR = '[data-testid="skipIntroText"]';
const DEBUG_PREFIX = '[CR Better Web][Enter To Skip]';
const PLAYER_REGION_SELECTOR = [
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
const PLAYER_PREFERRED_REGION_SELECTOR = [
    KNOWN_SKIP_WRAPPER_SELECTOR,
    '.top-controls',
    '[data-t*="player"]',
    '[data-t*="Player"]',
    '[class*="player"]',
    '[class*="Player"]',
    '[class*="vilos"]',
    '[class*="Vilos"]'
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
    return window.location.pathname.includes(WATCH_PATH_SEGMENT);
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
    const parts = [
        element.getAttribute('aria-label'),
        element.getAttribute('title'),
        element.textContent
    ];

    return parts
        .map((value) => String(value || '').trim().toLowerCase())
        .filter(Boolean)
        .join(' ');
}

function hasSkipLabel(element) {
    const label = getAccessibleLabel(element);
    return SKIP_KEYWORDS.some((keyword) => label.includes(keyword));
}

function isKnownSkipPrompt(element) {
    return Boolean(
        element.closest(KNOWN_SKIP_WRAPPER_SELECTOR)
        || element.querySelector(KNOWN_SKIP_TEXT_SELECTOR)
    );
}

function getPlayerRegion(element) {
    return element.closest(PLAYER_REGION_SELECTOR);
}

function scoreCandidate(element) {
    let score = 0;
    const label = getAccessibleLabel(element);
    const preferredRegion = element.closest(PLAYER_PREFERRED_REGION_SELECTOR);
    const genericRegion = getPlayerRegion(element);

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

    if (preferredRegion) {
        score += 60;
    } else if (genericRegion) {
        score += 30;
    }

    const rect = element.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight && rect.left >= 0 && rect.left <= window.innerWidth) {
        score += 10;
    }

    return score;
}

function getBestSkipPrompt() {
    const candidates = Array.from(document.querySelectorAll(CLICKABLE_SELECTOR))
        .filter((element) => element instanceof HTMLElement)
        .filter((element) => isElementVisible(element))
        .filter((element) => isElementEnabled(element))
        .filter((element) => hasSkipLabel(element))
        .filter((element) => isKnownSkipPrompt(element) || getPlayerRegion(element));

    if (candidates.length === 0) {
        debugLog('No matching skip candidates found.');
        return null;
    }

    debugLog(
        `Found ${candidates.length} skip candidate(s).`,
        candidates.map((element) => ({
            tagName: element.tagName,
            role: element.getAttribute('role'),
            testId: element.getAttribute('data-testid'),
            ariaLabel: element.getAttribute('aria-label'),
            text: String(element.textContent || '').trim(),
            className: element.className,
            knownSkipPrompt: isKnownSkipPrompt(element),
            score: scoreCandidate(element)
        }))
    );

    return candidates
        .map((element) => ({ element, score: scoreCandidate(element) }))
        .sort((left, right) => right.score - left.score)[0]
        ?.element ?? null;
}

function handleKeydown(event) {
    debugLog('Keydown detected.', {
        key: event.key,
        defaultPrevented: event.defaultPrevented,
        repeat: event.repeat,
        altKey: event.altKey,
        ctrlKey: event.ctrlKey,
        metaKey: event.metaKey,
        shiftKey: event.shiftKey,
        targetTagName: event.target instanceof Element ? event.target.tagName : null,
        targetRole: event.target instanceof Element ? event.target.getAttribute('role') : null,
        targetTestId: event.target instanceof Element ? event.target.getAttribute('data-testid') : null
    });

    if (!isFeatureEnabled || !isWatchPage()) {
        debugLog('Ignoring keydown because feature is disabled or page is not a watch page.', {
            isFeatureEnabled,
            pathname: window.location.pathname
        });
        return;
    }

    if (
        event.key !== 'Enter'
        || event.repeat
        || event.defaultPrevented
        || event.altKey
        || event.ctrlKey
        || event.metaKey
        || event.shiftKey
    ) {
        debugLog('Ignoring keydown because it is not an unmodified Enter press.');
        return;
    }

    if (isEditableTarget(event.target)) {
        debugLog('Ignoring keydown because the target is editable.');
        return;
    }

    const skipPrompt = getBestSkipPrompt();
    if (!skipPrompt) {
        debugLog('No skip prompt available to click.');
        return;
    }

    debugLog('Clicking skip prompt.', {
        tagName: skipPrompt.tagName,
        role: skipPrompt.getAttribute('role'),
        testId: skipPrompt.getAttribute('data-testid'),
        ariaLabel: skipPrompt.getAttribute('aria-label'),
        text: String(skipPrompt.textContent || '').trim(),
        className: skipPrompt.className
    });

    event.preventDefault();
    event.stopPropagation();
    skipPrompt.click();
}

function handleStorageChange(changes, areaName) {
    if (areaName !== 'local' || !changes[ENTER_TO_SKIP_SETTING_KEY]) {
        return;
    }

    isFeatureEnabled = changes[ENTER_TO_SKIP_SETTING_KEY].newValue !== false;
    debugLog('Feature toggle changed.', {
        isFeatureEnabled
    });
}

function initializeEnterToSkipPrompts() {
    chrome.storage.local.get([ENTER_TO_SKIP_SETTING_KEY], (settings) => {
        isFeatureEnabled = settings[ENTER_TO_SKIP_SETTING_KEY] !== false;
        debugLog('Initialized feature state.', {
            isFeatureEnabled,
            hostname: window.location.hostname,
            pathname: window.location.pathname
        });
    });

    document.addEventListener('keydown', handleKeydown, true);
    chrome.storage.onChanged.addListener(handleStorageChange);
    debugLog('Attached keydown listener.', {
        hostname: window.location.hostname,
        pathname: window.location.pathname
    });
}

initializeEnterToSkipPrompts();
