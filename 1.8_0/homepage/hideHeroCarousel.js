(function initHeroCarouselHider() {
    if (globalThis.__CRBW_HERO_CAROUSEL_HIDER_INITIALIZED__) {
        return;
    }

    globalThis.__CRBW_HERO_CAROUSEL_HIDER_INITIALIZED__ = true;

    const HIDE_HERO_CAROUSEL_SETTING_KEY = 'hideHeroCarousel';
    const HERO_CAROUSEL_STYLE_ID = 'crbw-hide-hero-carousel-style';
    const HERO_CAROUSEL_SELECTOR = [
        '[role="region"][aria-label="Hero Carousel"]',
        '.hero-carousel--1-yhX',
        '[class^="hero-carousel--"]',
        '[class*=" hero-carousel--"]'
    ].join(', ');

    let hideHeroCarouselEnabled = false;
    let scheduledApply = 0;

    function logDebug(label, payload) {
        console.log(`[CRBW][HeroCarousel] ${label}`, payload);
    }

    function ensureHideStyle() {
        let styleElement = document.getElementById(HERO_CAROUSEL_STYLE_ID);

        if (!(styleElement instanceof HTMLStyleElement)) {
            styleElement = document.createElement('style');
            styleElement.id = HERO_CAROUSEL_STYLE_ID;
            (document.documentElement || document.head || document.body)?.appendChild(styleElement);
        }

        return styleElement;
    }

    function getHeroCarouselRoots() {
        const candidates = Array.from(document.querySelectorAll(HERO_CAROUSEL_SELECTOR))
            .filter((element) => element instanceof HTMLElement);
        const roots = Array.from(new Set(
            candidates.map((element) => {
                if (
                    element.getAttribute('role') === 'region'
                    && element.getAttribute('aria-label') === 'Hero Carousel'
                ) {
                    return element;
                }

                return element.closest('[role="region"][aria-label="Hero Carousel"]') || element;
            }).filter((element) => element instanceof HTMLElement)
        ));

        return { candidates, roots };
    }

    function applyHeroCarouselVisibility() {
        const styleElement = ensureHideStyle();
        if (styleElement instanceof HTMLStyleElement) {
            styleElement.textContent = hideHeroCarouselEnabled
                ? `
                    [role="region"][aria-label="Hero Carousel"],
                    .hero-carousel--1-yhX {
                        display: none !important;
                        visibility: hidden !important;
                        height: 0 !important;
                        min-height: 0 !important;
                        max-height: 0 !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        overflow: hidden !important;
                        pointer-events: none !important;
                    }
                `
                : '';
        }

        const { candidates, roots } = getHeroCarouselRoots();
        roots.forEach((root) => {
            root.style.display = hideHeroCarouselEnabled ? 'none' : '';
        });

        logDebug('Applied Visibility', {
            enabled: hideHeroCarouselEnabled,
            candidateCount: candidates.length,
            rootCount: roots.length,
            roots: roots.map((element) => ({
                tagName: element.tagName,
                className: element.className,
                role: element.getAttribute('role'),
                ariaLabel: element.getAttribute('aria-label')
            }))
        });
    }

    function scheduleVisibilityApply() {
        if (scheduledApply) {
            cancelAnimationFrame(scheduledApply);
        }

        scheduledApply = requestAnimationFrame(() => {
            scheduledApply = 0;
            applyHeroCarouselVisibility();
        });
    }

    function refreshSettingAndApply() {
        chrome.storage.local.get(HIDE_HERO_CAROUSEL_SETTING_KEY, (items) => {
            hideHeroCarouselEnabled = items[HIDE_HERO_CAROUSEL_SETTING_KEY] === true;
            logDebug('Settings Snapshot', {
                hideHeroCarouselEnabled,
                readyState: document.readyState
            });
            scheduleVisibilityApply();
        });
    }

    function observePage() {
        const observerTarget = document.documentElement || document;
        const observer = new MutationObserver(() => {
            if (hideHeroCarouselEnabled) {
                scheduleVisibilityApply();
            }
        });

        observer.observe(observerTarget, { childList: true, subtree: true, attributes: true });

        chrome.storage.onChanged.addListener((changes, areaName) => {
            if (areaName !== 'local' || !changes[HIDE_HERO_CAROUSEL_SETTING_KEY]) {
                return;
            }

            hideHeroCarouselEnabled = changes[HIDE_HERO_CAROUSEL_SETTING_KEY].newValue === true;
            logDebug('Setting Changed', { hideHeroCarouselEnabled });
            scheduleVisibilityApply();
        });

        window.addEventListener('load', scheduleVisibilityApply, { passive: true });
        window.setInterval(() => {
            if (hideHeroCarouselEnabled) {
                scheduleVisibilityApply();
            }
        }, 1000);
    }

    observePage();
    refreshSettingAndApply();
})();
