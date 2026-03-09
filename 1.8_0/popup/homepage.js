document.addEventListener('DOMContentLoaded', () => {
    function createHomepageSectionsSharedFallback() {
        const HOMEPAGE_SECTIONS_STORAGE_KEY = 'homepageSections';
        const HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY = 'homepageDiscoveredSections';
        const HOMEPAGE_UNMATCHED_BUCKET_ID = 'unmatched-sections-bucket';
        const HOMEPAGE_SECTION_IDS = {
            NEXT_SEASON: 'next-season',
            TOP_SERIES_POPULAR: 'top-series-popular',
            TOP_SERIES_REVIEWED: 'top-series-reviewed',
            TOP_MOVIES_POPULAR: 'top-movies-popular',
            TOP_MOVIES_REVIEWED: 'top-movies-reviewed'
        };
        const CUSTOM_HOMEPAGE_SECTION_DEFINITIONS = [
            { id: HOMEPAGE_SECTION_IDS.NEXT_SEASON, label: 'Next Season', kind: 'custom', defaultOrder: 0 },
            { id: HOMEPAGE_SECTION_IDS.TOP_SERIES_POPULAR, label: 'Top Series Popular', kind: 'custom', defaultOrder: 1 },
            { id: HOMEPAGE_SECTION_IDS.TOP_SERIES_REVIEWED, label: 'Top Series Reviewed', kind: 'custom', defaultOrder: 2 },
            { id: HOMEPAGE_SECTION_IDS.TOP_MOVIES_POPULAR, label: 'Top Movies Popular', kind: 'custom', defaultOrder: 3 },
            { id: HOMEPAGE_SECTION_IDS.TOP_MOVIES_REVIEWED, label: 'Top Movies Reviewed', kind: 'custom', defaultOrder: 4 },
            { id: HOMEPAGE_UNMATCHED_BUCKET_ID, label: 'Any New Sections', kind: 'bucket', defaultOrder: 9999 }
        ];

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

        function normalizeHomepageSections(inputSections, discoveredSections) {
            return mergeHomepageSections(inputSections, discoveredSections).map((section) => ({
                id: section.id,
                enabled: section.enabled !== false,
                order: section.order
            }));
        }

        return {
            HOMEPAGE_SECTIONS_STORAGE_KEY,
            HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY,
            HOMEPAGE_UNMATCHED_BUCKET_ID,
            getDefaultHomepageSections: () => normalizeHomepageSections(),
            normalizeDiscoveredSections,
            mergeHomepageSections,
            normalizeHomepageSections
        };
    }

    const homepageSectionsShared = Object.assign(
        createHomepageSectionsSharedFallback(),
        globalThis.CRBWHomepageSections || {}
    );
    const listElement = document.getElementById('homepage-layout-list');
    const emptyState = document.getElementById('homepage-empty-state');
    const backButton = document.getElementById('back-button');

    let discoveredSections = [];
    let homepageSections = homepageSectionsShared.getDefaultHomepageSections();
    let mergedSections = [];
    let draggedSectionId = null;

    function logHomepagePopupDebug(label, payload) {
        console.log(`[CRBW][HomepagePopup] ${label}`, payload);
    }

    function getMessage(key, fallback) {
        return chrome.i18n.getMessage(key) || fallback;
    }

    function getSectionMeta(section) {
        if (section.id === homepageSectionsShared.HOMEPAGE_UNMATCHED_BUCKET_ID) {
            return getMessage('homepageSectionTypeFallback', 'Fallback Bucket');
        }

        if (section.kind === 'custom') {
            return getMessage('homepageSectionTypeCustom', 'Custom Section');
        }

        return getMessage('homepageSectionTypeBuiltin', 'Built-In Section');
    }

    function getDisplayLabel(section) {
        if (section.label === 'Untitled Section') {
            return 'Untitled Section (Probably Ad)';
        }

        return section.label;
    }

    function localizePage() {
        document.getElementById('homepage-window-title').textContent = getMessage('homepageDashboardTitle', 'Homepage Dashboard');
        document.getElementById('back-button').textContent = getMessage('backButton', 'Back');
        document.getElementById('homepage-header-title').textContent = getMessage('homepageDashboardTitle', 'Homepage Dashboard');
        document.getElementById('homepage-header-copy').textContent = getMessage(
            'homepageDashboardHint',
            'Manage Every Homepage Section. Any New Or Unmapped Sections Follow The Fallback Row.'
        );
        emptyState.textContent = getMessage(
            'homepageDiscoveryEmpty',
            'Open The Crunchyroll Homepage Once To Discover Built-In Sections, Then Reopen This View.'
        );
    }

    function persistSections() {
        logHomepagePopupDebug('Persisting Homepage Sections', {
            count: homepageSections.length,
            ids: homepageSections.map((section) => `${section.id}:${section.enabled !== false ? 'on' : 'off'}:${section.order}`)
        });
        chrome.storage.local.set({
            [homepageSectionsShared.HOMEPAGE_SECTIONS_STORAGE_KEY]: homepageSections
        });
    }

    function refreshMergedSections() {
        mergedSections = homepageSectionsShared.mergeHomepageSections(homepageSections, discoveredSections);
        logHomepagePopupDebug('Refreshed Merged Sections', {
            discoveredCount: discoveredSections.length,
            storedCount: homepageSections.length,
            mergedCount: mergedSections.length,
            mergedIds: mergedSections.map((section) => `${section.id}:${section.enabled !== false ? 'on' : 'off'}:${section.order}`)
        });
    }

    function persistMergedSections(nextSections) {
        homepageSections = nextSections.map((section, index) => ({
            id: section.id,
            enabled: section.enabled !== false,
            order: index
        }));
        persistSections();
    }

    function moveSection(sectionId, direction) {
        const currentIndex = mergedSections.findIndex((section) => section.id === sectionId);
        const targetIndex = currentIndex + direction;

        if (currentIndex < 0 || targetIndex < 0 || targetIndex >= mergedSections.length) {
            return;
        }

        const nextSections = [...mergedSections];
        const [movedSection] = nextSections.splice(currentIndex, 1);
        nextSections.splice(targetIndex, 0, movedSection);
        persistMergedSections(nextSections);
    }

    function reorderSections(sourceId, targetId, placeAfter = false) {
        const nextSections = [...mergedSections];
        const sourceIndex = nextSections.findIndex((section) => section.id === sourceId);
        const targetIndex = nextSections.findIndex((section) => section.id === targetId);

        if (sourceIndex < 0 || targetIndex < 0 || sourceIndex === targetIndex) {
            return;
        }

        const [movedSection] = nextSections.splice(sourceIndex, 1);
        const adjustedTargetIndex = nextSections.findIndex((section) => section.id === targetId);
        nextSections.splice(adjustedTargetIndex + (placeAfter ? 1 : 0), 0, movedSection);
        persistMergedSections(nextSections);
    }

    function clearDragState() {
        listElement.querySelectorAll('.section-item').forEach((row) => {
            row.classList.remove('is-dragging', 'drag-target-before', 'drag-target-after');
        });
    }

    function renderSections() {
        refreshMergedSections();
        listElement.textContent = '';

        const builtinDiscovered = discoveredSections.length > 0;
        emptyState.hidden = builtinDiscovered;
        logHomepagePopupDebug('Rendering Sections', {
            builtinDiscovered,
            discoveredIds: discoveredSections.map((section) => section.id),
            renderedIds: mergedSections.map((section) => section.id)
        });

        mergedSections.forEach((section) => {
            const row = document.createElement('div');
            row.className = 'section-item';
            row.dataset.sectionId = section.id;
            row.draggable = true;
            row.innerHTML = `
                <div class="section-main">
                    <span class="drag-handle" aria-hidden="true">&#8801;</span>
                    <div class="section-copy">
                        <div class="section-label">${getDisplayLabel(section)}</div>
                        <div class="section-meta">${getSectionMeta(section)}</div>
                    </div>
                </div>
                <div class="section-actions">
                    <label class="switch">
                        <input type="checkbox" ${section.enabled ? 'checked' : ''}>
                        <span class="slider"></span>
                    </label>
                </div>
            `;

            row.querySelector('input[type="checkbox"]').addEventListener('change', (event) => {
                homepageSections = mergedSections.map((currentSection) => ({
                    id: currentSection.id,
                    enabled: currentSection.id === section.id ? event.target.checked : currentSection.enabled !== false,
                    order: currentSection.order
                }));
                persistSections();
            });

            row.addEventListener('dragstart', (event) => {
                draggedSectionId = section.id;
                row.classList.add('is-dragging');
                event.dataTransfer.effectAllowed = 'move';
                event.dataTransfer.setData('text/plain', section.id);
            });

            row.addEventListener('dragend', () => {
                draggedSectionId = null;
                clearDragState();
            });

            row.addEventListener('dragover', (event) => {
                if (!draggedSectionId || draggedSectionId === section.id) {
                    return;
                }

                event.preventDefault();
                clearDragState();

                const bounds = row.getBoundingClientRect();
                const placeAfter = event.clientY > bounds.top + bounds.height / 2;
                row.classList.add(placeAfter ? 'drag-target-after' : 'drag-target-before');
            });

            row.addEventListener('dragleave', () => {
                row.classList.remove('drag-target-before', 'drag-target-after');
            });

            row.addEventListener('drop', (event) => {
                if (!draggedSectionId || draggedSectionId === section.id) {
                    return;
                }

                event.preventDefault();
                const bounds = row.getBoundingClientRect();
                const placeAfter = event.clientY > bounds.top + bounds.height / 2;
                clearDragState();
                reorderSections(draggedSectionId, section.id, placeAfter);
            });

            listElement.appendChild(row);
        });
    }

    function loadState() {
        chrome.storage.local.get([
            homepageSectionsShared.HOMEPAGE_SECTIONS_STORAGE_KEY,
            homepageSectionsShared.HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY
        ], (items) => {
            logHomepagePopupDebug('Loaded Raw Storage', {
                discoveredRawCount: Array.isArray(items[homepageSectionsShared.HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY])
                    ? items[homepageSectionsShared.HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY].length
                    : 0,
                sectionsRawCount: Array.isArray(items[homepageSectionsShared.HOMEPAGE_SECTIONS_STORAGE_KEY])
                    ? items[homepageSectionsShared.HOMEPAGE_SECTIONS_STORAGE_KEY].length
                    : 0,
                discoveredRaw: items[homepageSectionsShared.HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY],
                sectionsRaw: items[homepageSectionsShared.HOMEPAGE_SECTIONS_STORAGE_KEY]
            });
            discoveredSections = homepageSectionsShared.normalizeDiscoveredSections(
                items[homepageSectionsShared.HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY]
            );
            homepageSections = homepageSectionsShared.normalizeHomepageSections(
                items[homepageSectionsShared.HOMEPAGE_SECTIONS_STORAGE_KEY],
                discoveredSections
            );
            renderSections();
        });
    }

    chrome.storage.onChanged.addListener((changes, areaName) => {
        if (areaName !== 'local') {
            return;
        }

        logHomepagePopupDebug('Storage Changed', changes);

        let shouldRender = false;

        if (changes[homepageSectionsShared.HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY]) {
            discoveredSections = homepageSectionsShared.normalizeDiscoveredSections(
                changes[homepageSectionsShared.HOMEPAGE_DISCOVERED_SECTIONS_STORAGE_KEY].newValue
            );
            shouldRender = true;
        }

        if (changes[homepageSectionsShared.HOMEPAGE_SECTIONS_STORAGE_KEY]) {
            homepageSections = homepageSectionsShared.normalizeHomepageSections(
                changes[homepageSectionsShared.HOMEPAGE_SECTIONS_STORAGE_KEY].newValue,
                discoveredSections
            );
            shouldRender = true;
        }

        if (shouldRender) {
            renderSections();
        }
    });

    backButton.addEventListener('click', () => {
        window.location.href = 'popup.html';
    });

    localizePage();
    loadState();
});
