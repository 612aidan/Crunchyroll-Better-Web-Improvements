const PLAYER_SKIP_DEBUG_PREFIX = '[CR Better Web][Player Enter To Skip]';
const PLAYER_SKIP_BROADCAST_TYPE = 'CRBW_ENTER_TO_SKIP_TRIGGER';
const PLAYER_SKIP_SELECTOR = '[data-testid="skipButton"] [role="button"]';

function playerSkipLog(message, details) {
    if (typeof details === 'undefined') {
        console.log(`${PLAYER_SKIP_DEBUG_PREFIX} ${message}`);
        return;
    }

    console.log(`${PLAYER_SKIP_DEBUG_PREFIX} ${message}`, details);
}

function getPlayerSkipButton() {
    return document.querySelector(PLAYER_SKIP_SELECTOR);
}

function clickPlayerSkipButton(source) {
    const button = getPlayerSkipButton();

    playerSkipLog('Skip button lookup.', {
        source,
        buttonFound: Boolean(button),
        skipButtonCount: document.querySelectorAll('[data-testid="skipButton"]').length,
        roleButtonCount: document.querySelectorAll('[data-testid="skipButton"] [role="button"]').length,
        skipTextCount: document.querySelectorAll('[data-testid="skipIntroText"]').length
    });

    if (!(button instanceof HTMLElement)) {
        return false;
    }

    playerSkipLog('Clicking player skip button.', {
        source,
        ariaLabel: button.getAttribute('aria-label'),
        text: String(button.textContent || '').trim(),
        className: button.className
    });

    document.querySelector('[data-testid="skipButton"] [role="button"]').click();
    return true;
}

function handlePlayerMessage(event) {
    if (typeof event.data !== 'string') {
        return;
    }

    let payload;
    try {
        payload = JSON.parse(event.data);
    } catch (error) {
        return;
    }

    if (!payload || payload.source !== 'CRBW' || payload.type !== PLAYER_SKIP_BROADCAST_TYPE) {
        return;
    }

    playerSkipLog('Received skip request via postMessage.', {
        href: window.location.href
    });

    clickPlayerSkipButton('postMessage');
}

function handlePlayerKeydown(event) {
    if (
        event.key !== 'Enter'
        || event.repeat
        || event.defaultPrevented
        || event.altKey
        || event.ctrlKey
        || event.metaKey
        || event.shiftKey
    ) {
        return;
    }

    playerSkipLog('Keydown detected inside player frame.', {
        key: event.key,
        href: window.location.href
    });

    clickPlayerSkipButton('keydown');
}

window.addEventListener('message', handlePlayerMessage);
document.addEventListener('keydown', handlePlayerKeydown, true);

playerSkipLog('Player frame listener attached.', {
    href: window.location.href
});
