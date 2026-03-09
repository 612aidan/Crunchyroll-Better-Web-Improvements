document.addEventListener('DOMContentLoaded', () => {
    const switches = document.querySelectorAll('.switch input[type="checkbox"][data-setting]');
    const homepageSettingsButton = document.getElementById('open-homepage-settings');
    const HOMEPAGE_SECTIONS_STORAGE_KEY = 'homepageSections';
    const HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY = 'homepageDiscoveredSections';
    const REMOVE_CRUNCHYROLL_ADS_SETTING_KEY = 'removeCrunchyrollAds';
    const HOMEPAGE_UNMATCHED_BUCKET_ID = 'unmatched-sections-bucket';
    const CUSTOM_HOMEPAGE_SECTION_DEFINITIONS = [
        { id: 'next-season', label: 'Next Season', kind: 'custom', defaultOrder: 0 },
        { id: 'top-series-popular', label: 'Top Series Popular', kind: 'custom', defaultOrder: 1 },
        { id: 'top-series-reviewed', label: 'Top Series Reviewed', kind: 'custom', defaultOrder: 2 },
        { id: 'top-movies-popular', label: 'Top Movies Popular', kind: 'custom', defaultOrder: 3 },
        { id: 'top-movies-reviewed', label: 'Top Movies Reviewed', kind: 'custom', defaultOrder: 4 },
        { id: HOMEPAGE_UNMATCHED_BUCKET_ID, label: 'Any New Sections', kind: 'bucket', defaultOrder: 9999 }
    ];
    const HOMEPAGE_AD_SECTION_LABELS = new Set([
        'crunchyroll manga',
        'crunchyroll news',
        'music videos now on crunchyroll music'
    ]);
    const HOMEPAGE_AD_SECTION_LABEL_PREFIXES = [
        'crunchyroll manga',
        'crunchyroll news',
        'music videos now on crunchyroll music'
    ];
    const removeAdsInput = document.getElementById('switch-remove-ads');

    function getMessage(key, fallback) {
        return chrome.i18n.getMessage(key) || fallback;
    }

    function normalizeHomepageSectionLabel(value) {
        return String(value || '')
            .normalize('NFKD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();
    }

    function isUntitledAdSectionLabel(normalizedLabel) {
        return /^untitled sections?(?:\s*\(.*\))?$/.test(normalizedLabel);
    }

    function isHomepageAdSection(section) {
        if (!section || section.kind !== 'builtin') {
            return false;
        }

        const normalizedLabel = normalizeHomepageSectionLabel(section.label);
        if (HOMEPAGE_AD_SECTION_LABELS.has(normalizedLabel) || isUntitledAdSectionLabel(normalizedLabel)) {
            return true;
        }

        return HOMEPAGE_AD_SECTION_LABEL_PREFIXES.some((prefix) => normalizedLabel.startsWith(prefix));
    }

    function normalizeDiscoveredSections(inputSections) {
        const customIds = new Set(CUSTOM_HOMEPAGE_SECTION_DEFINITIONS.map((section) => section.id));
        const discoveredById = new Map();

        if (!Array.isArray(inputSections)) {
            return [];
        }

        inputSections.forEach((section, index) => {
            if (!section || typeof section.id !== 'string' || customIds.has(section.id)) {
                return;
            }

            discoveredById.set(section.id, {
                id: section.id,
                label: String(section.label || '').trim() || 'Untitled Section',
                kind: 'builtin',
                defaultOrder: Number.isFinite(Number(section.defaultOrder))
                    ? Number(section.defaultOrder)
                    : CUSTOM_HOMEPAGE_SECTION_DEFINITIONS.length + index
            });
        });

        return Array.from(discoveredById.values()).sort((left, right) => left.defaultOrder - right.defaultOrder);
    }

    function mergeHomepageSections(inputSections, discoveredSections) {
        const catalog = [
            ...CUSTOM_HOMEPAGE_SECTION_DEFINITIONS.slice(0, -1),
            ...normalizeDiscoveredSections(discoveredSections),
            CUSTOM_HOMEPAGE_SECTION_DEFINITIONS[CUSTOM_HOMEPAGE_SECTION_DEFINITIONS.length - 1]
        ];
        const configById = new Map();

        if (Array.isArray(inputSections)) {
            inputSections.forEach((section) => {
                if (!section || typeof section.id !== 'string') {
                    return;
                }

                configById.set(section.id, {
                    enabled: section.enabled !== false,
                    order: Number.isFinite(Number(section.order)) ? Number(section.order) : Number.MAX_SAFE_INTEGER
                });
            });
        }

        return catalog.map((section) => {
            const existing = configById.get(section.id);

            return {
                id: section.id,
                label: section.label,
                kind: section.kind,
                enabled: existing ? existing.enabled !== false : true,
                order: existing ? existing.order : section.defaultOrder
            };
        }).sort((left, right) => left.order - right.order);
    }

    function getRemoveAdsToggleState(items) {
        const discoveredSections = normalizeDiscoveredSections(items[HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY]);
        const mergedSections = mergeHomepageSections(items[HOMEPAGE_SECTIONS_STORAGE_KEY], discoveredSections);
        const managedAdSections = mergedSections.filter(isHomepageAdSection);

        if (managedAdSections.length === 0) {
            return items[REMOVE_CRUNCHYROLL_ADS_SETTING_KEY] === true;
        }

        return managedAdSections.every((section) => section.enabled === false);
    }

    function syncRemoveAdsToggle(items) {
        if (!(removeAdsInput instanceof HTMLInputElement)) {
            return;
        }

        removeAdsInput.checked = getRemoveAdsToggleState(items);
    }

    function updateHomepageAdSections(removeAdsEnabled) {
        chrome.storage.local.get([
            HOMEPAGE_SECTIONS_STORAGE_KEY,
            HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY
        ], (items) => {
            const discoveredSections = normalizeDiscoveredSections(items[HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY]);
            const mergedSections = mergeHomepageSections(items[HOMEPAGE_SECTIONS_STORAGE_KEY], discoveredSections);
            const nextHomepageSections = mergedSections.map((section) => ({
                id: section.id,
                enabled: isHomepageAdSection(section) ? !removeAdsEnabled : section.enabled !== false,
                order: section.order
            }));

            chrome.storage.local.set({
                [REMOVE_CRUNCHYROLL_ADS_SETTING_KEY]: removeAdsEnabled,
                [HOMEPAGE_SECTIONS_STORAGE_KEY]: nextHomepageSections
            });
        });
    }

    function localizePopup() {
        document.getElementById('popup-window-title').textContent = getMessage('popupTitle', 'Crunchyroll Better Web Settings');
        document.getElementById('header-title').textContent = getMessage('headerTitle', 'Crunchyroll Better Web Options');
        document.getElementById('homepage-dashboard-title').textContent = getMessage('homepageDashboardTitle', 'Homepage Dashboard');
        document.getElementById('open-homepage-settings-label').textContent = getMessage('editHomepageLayoutButton', 'Edit Homepage Layout');
        document.getElementById('open-homepage-settings-copy').textContent = getMessage(
            'editHomepageLayoutHint',
            'Toggle, reorder, and manage built-in and custom homepage sections.'
        );
        document.getElementById('switch-label-remove-ads').textContent = getMessage('labelRemoveCrunchyrollAds', 'Remove Crunchyroll Ads');
        document.getElementById('switch-label-hide-hero-carousel').textContent = getMessage('labelHideHeroCarousel', 'Hide Hero Carousel');
        document.getElementById('feature-settings-title').textContent = getMessage('featureSettingsTitle', 'Feature Settings');

        document.getElementById('switch-label-spoilers').textContent = getMessage('labelSpoilers', 'Hide Spoilers');
        document.getElementById('switch-label-fillers').textContent = getMessage('labelFillers', 'Filler Tag');
        document.getElementById('switch-label-media').textContent = getMessage('labelMediaFormat', 'Format Tag');
        document.getElementById('switch-label-award').textContent = getMessage('labelAward', 'Anime Award Tag');
        document.getElementById('switch-label-score').textContent = getMessage('labelScore', 'Show Score');
        document.getElementById('switch-label-flag').textContent = getMessage('labelFlag', 'Show Language');
        document.getElementById('switch-label-countdown').textContent = getMessage('labelCountdown', 'Show Episode Countdown');
        document.getElementById('switch-label-new-episode').textContent = getMessage('labelNewEpisode', 'New Episode Tag');
    }

    function loadSettings() {
        chrome.storage.local.get(null, (items) => {
            switches.forEach((input) => {
                const settingKey = input.getAttribute('data-setting');
                if (settingKey && Object.prototype.hasOwnProperty.call(items, settingKey)) {
                    input.checked = items[settingKey];
                }
            });

            syncRemoveAdsToggle(items);
        });
    }

    function saveSetting(event) {
        const input = event.target;
        const settingKey = input.getAttribute('data-setting');

        if (!settingKey) {
            return;
        }

        if (settingKey === REMOVE_CRUNCHYROLL_ADS_SETTING_KEY) {
            updateHomepageAdSections(input.checked);
            return;
        }

        chrome.storage.local.set({ [settingKey]: input.checked });
    }

    homepageSettingsButton.addEventListener('click', () => {
        window.location.href = 'homepage.html';
    });

    localizePopup();

    switches.forEach((input) => {
        input.addEventListener('change', saveSetting);
    });

    chrome.storage.onChanged.addListener((changes, areaName) => {
        if (areaName !== 'local') {
            return;
        }

        if (
            changes[REMOVE_CRUNCHYROLL_ADS_SETTING_KEY]
            || changes[HOMEPAGE_SECTIONS_STORAGE_KEY]
            || changes[HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY]
        ) {
            chrome.storage.local.get([
                REMOVE_CRUNCHYROLL_ADS_SETTING_KEY,
                HOMEPAGE_SECTIONS_STORAGE_KEY,
                HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY
            ], syncRemoveAdsToggle);
        }
    });

    loadSettings();
});
