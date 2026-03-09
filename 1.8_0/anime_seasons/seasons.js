// --- 0. GLOBAL CONFIGURATION AND HELPERS ---

// Extract the series ID from the URL
function extractSeriesIdFromUrl(url) {
    const match = url.match(/\/series\/([A-Z0-9]+)/i);
    return match ? match[1] : null;
}

// -------------------------------------------------------------------
// 1. GLOBAL SERIES DATA STRUCTURE BY SERIES ID (CUSTOMIZABLE)
// -------------------------------------------------------------------

let lastUrl = window.location.href; 
let pollingInterval; 
let activeSeriesData = null; 
let lastRenderedSeasonTitle = null;
const dynamicSeasonDetailsCache = new Map();
const dynamicSeasonDetailsPending = new Map();
let isSeasonUpdateInFlight = false;

function normalizeTitleForMatch(value) {
    return String(value || '')
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/&/g, ' and ')
        .replace(/[^a-z0-9]+/g, ' ')
        .trim()
        .replace(/\s+/g, ' ');
}

function extractSeasonNumberFromTitle(title) {
    const value = String(title || '');
    const simpleMatch = value.match(/\bS(?:eason)?\s*0?(\d+)\b/i);
    if (simpleMatch) {
        return Number(simpleMatch[1]);
    }

    const ordinalMatch = value.match(/\b(\d+)(?:st|nd|rd|th)\s+Season\b/i);
    if (ordinalMatch) {
        return Number(ordinalMatch[1]);
    }

    if (/\b(special|ova|oad|memories)\b/i.test(value)) {
        return 0;
    }

    return null;
}

async function getDynamicSeasonDetails(seriesId) {
    if (!seriesId) {
        return null;
    }

    if (dynamicSeasonDetailsCache.has(seriesId)) {
        return dynamicSeasonDetailsCache.get(seriesId);
    }

    if (dynamicSeasonDetailsPending.has(seriesId)) {
        return dynamicSeasonDetailsPending.get(seriesId);
    }

    const request = chrome.runtime.sendMessage({ action: "fetchTmdbSeasonDetails", seriesId })
        .then((response) => {
            const details = response?.success ? response.details : null;
            dynamicSeasonDetailsCache.set(seriesId, details);
            dynamicSeasonDetailsPending.delete(seriesId);
            return details;
        })
        .catch((error) => {
            console.warn(`⚠️ Failed to load TMDb season details for ${seriesId}.`, error);
            dynamicSeasonDetailsCache.set(seriesId, null);
            dynamicSeasonDetailsPending.delete(seriesId);
            return null;
        });

    dynamicSeasonDetailsPending.set(seriesId, request);
    return request;
}

function getBestDynamicSeasonMatch(activeTitle, staticSeasonDetails, dynamicDetailsPayload) {
    const bySeasonNumber = dynamicDetailsPayload?.bySeasonNumber;
    if (!bySeasonNumber) {
        return null;
    }

    const normalizedTitle = normalizeTitleForMatch(activeTitle);
    const directMatch = Object.values(bySeasonNumber).find((entry) => {
        return normalizeTitleForMatch(entry?.title) === normalizedTitle ||
            normalizeTitleForMatch(entry?.subtitle) === normalizedTitle;
    });

    if (directMatch) {
        return directMatch;
    }

    const seasonNumber = extractSeasonNumberFromTitle(activeTitle) ??
        extractSeasonNumberFromTitle(staticSeasonDetails?.subtitle);

    if (seasonNumber !== null && bySeasonNumber[String(seasonNumber)]) {
        return bySeasonNumber[String(seasonNumber)];
    }

    if (/\b(movie|film)\b/i.test(activeTitle)) {
        return null;
    }

    if (/\b(special|ova|oad|memories)\b/i.test(activeTitle) && bySeasonNumber["0"]) {
        return bySeasonNumber["0"];
    }

    return null;
}

function buildSeasonDetails(activeTitle, staticSeasonDetails, dynamicSeasonDetails) {
    const merged = {
        ...(staticSeasonDetails || {}),
        ...(dynamicSeasonDetails || {})
    };

    if (!merged.poster && !merged.cover && !merged.subtitle && !merged.category) {
        return null;
    }

    return {
        ...merged,
        title: activeTitle,
        subtitle: merged.subtitle || activeTitle,
        year: merged.year || '',
        episodeCount: merged.episodeCount || '',
        studio: merged.studio || '',
        category: merged.category || '',
        publisher: merged.publisher || '',
        volumes: merged.volumes || '',
        authors: merged.authors || ''
    };
}


// --- 2. CONTAINER CREATION AND STYLING (optimized for the 2-column layout) ---

/**
 * Generate the HTML for one description column (Season or Source).
 * @param {string} title Block title (for example, "Season Description").
 * @param {string} posterUrl Image URL.
 * @param {string} detail1 First line of text.
 * @param {string} detail2 Second line of text.
 * @param {string} detail3 Third line of text.
 * @param {string} imageAlt Image alt text.
 * @returns {string} HTML fragment for the column.
 */
function createDescriptionColumnHTML(title, posterUrl, detail1, detail2, detail3, imageAlt) {
    const defaultPoster = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 180" fill="#333"><rect width="120" height="180" rx="6" ry="6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#999">Poster</text></svg>';
    
    return `
        <div style="flex: 1 1 50%; min-width: 300px; box-sizing: border-box; padding-right: 16px; margin-top: 10px;">
            <h3 class="heading--nKNOf heading--is-xxs--1CKSn heading--is-family-type-one--GqBzU title">${title}</h3>
            <div style="
                display: flex !important;
                padding: 16px 0px 0px 0px !important;
                margin-top: 0px !important; 
                margin-bottom: 0px !important;
                width: 100% !important; 
                box-sizing: border-box !important;
                background-color: transparent !important; 
                border-radius: 4px;
                gap: 20px !important;
                align-items: flex-start !important;
            ">
                <div style="flex-shrink: 0 !important;">
                    <img src="${posterUrl || defaultPoster}" alt="${imageAlt}" style="
                        width: 170px !important; 
                        height: 255px !important; 
                        object-fit: cover !important;
                        border-radius: 6px !important;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5) !important;
                    ">
                </div>
                
                <div style="flex-grow: 1 !important; min-width: 0 !important;">
                    <p style="
                        margin: 0 !important;      
                        color: #ffffffff !important;
                        font-weight: bold !important;
                    ">
                        ${detail1}
                    </p>

                    <p style="
                        margin: 0 0 10px 0 !important;
                        color: var(--text-color-secondary, #b0b0b0) !important;
                        line-height: 1.4 !important;
                    ">
                        ${detail2}
                    </p>
                    
                    <p style="
                        margin: 0 !important;
                        color: var(--text-color-secondary, #b0b0b0) !important;
                        line-height: 1.4 !important;

                        display: -webkit-box !important;
                        -webkit-box-orient: vertical !important;
                        -webkit-line-clamp: 4; /* Change this for more or fewer lines */
                        overflow: hidden !important;
                    ">
                        ${detail3}
                    </p>
                </div>
            </div>
        </div>
    `;
}

/**
 * Generate the full HTML for the 2-column container.
 * @param {object} data The season details.
 * @returns {string} Full HTML to inject.
 */
function createSeasonInfoHTML(data) {
    
    // --- Season Description Column ---
    const seasonColumn = createDescriptionColumnHTML(
        "Season Description",
        data.poster,
        data.subtitle,
        [data.year, data.episodeCount].filter(Boolean).join(' | '),
        data.studio ? `Studio(s): ${data.studio}` : '',
        "Season Poster"
    );

    const hasSourceData = Boolean(data.cover || data.category || data.publisher || data.volumes || data.authors);
    const sourceColumn = hasSourceData
        ? createDescriptionColumnHTML(
            "Source Description",
            data.cover,
            data.category,
            [data.publisher, data.volumes].filter(Boolean).join(' | '),
            data.authors ? `Author(s): ${data.authors}` : '',
            "Source Cover (Manga)"
        )
        : '';

    return `
        <div id="custom-season-info-wrapper-id" class="container--cq5XE" style="
            display: flex; 
            flex-wrap: wrap; /* Allow columns to stack on smaller screens */
            gap: 0; /* Handle spacing inside each column */
            padding-bottom: 16px !important; /* Add bottom padding to the main container */
        ">
            ${seasonColumn}
            ${sourceColumn}
        </div>
    `;
}


// --- 3. DETECTION, UPDATE, AND INJECTION LOGIC ---

function getActiveSeasonTitle() {

    // Use the `seasontitle` attribute or the `text--is-xl---ywR-` class for detection.
    const staticTitleElement = document.querySelector('h4[seasontitle]'); 
    
    if (staticTitleElement) {
        // Option 1: read the text content directly
        const content = staticTitleElement.textContent.trim();
        if (content.length > 0) return content;

        // Option 2 (fallback): read the `seasontitle` attribute if the text is empty
        const attrTitle = staticTitleElement.getAttribute('seasontitle');
        if (attrTitle) return attrTitle.trim();
    }


    // Logic for getting the active season title
    const activeOption = document.querySelector('.extended-option--is-active---cSow .extended-option__text--MQWp1');
    if (activeOption) return activeOption.textContent.trim();
    
    const triggerTitle = document.querySelector('.select-trigger__title-truncated-text--5KH40');
    if (triggerTitle) return triggerTitle.textContent.trim();
    
    const activeAria = document.querySelector('div[role="option"][aria-selected="true"]');
    if (activeAria) return activeAria.textContent.trim();

    return null; 
}

/**
 * Main function that updates and/or injects the season info block.
 * Load the data conditionally for the active series.
 */
async function updateAndInjectSeasonInfo() {
    if (isSeasonUpdateInFlight) {
        return;
    }

    isSeasonUpdateInFlight = true;

    try {
    const existingWrapper = document.getElementById('custom-season-info-wrapper-id');
    const currentUrl = window.location.href;
    const activeSeriesId = extractSeriesIdFromUrl(currentUrl); // URL detection logic
    
    // 1. Determine the series data
    const seriesData = activeSeriesId ? ALL_SERIES_DATA[activeSeriesId] : null;
    
    // If no series ID exists in the URL, or no data exists for it, clean up and exit.
    if (!activeSeriesId) {
        if (existingWrapper) existingWrapper.remove();
        activeSeriesData = null;
        return;
    }
    
    activeSeriesData = seriesData; // Store the series-specific data for the current page
    
    // 2. Get the active season details
    const activeTitle = getActiveSeasonTitle();
    if (!activeTitle) {
        if (existingWrapper) existingWrapper.remove();
        return;
    }

    const staticSeasonDetails = activeSeriesData?.[activeTitle] || null;
    const dynamicSeriesDetails = await getDynamicSeasonDetails(activeSeriesId);
    const dynamicSeasonDetails = getBestDynamicSeasonMatch(activeTitle, staticSeasonDetails, dynamicSeriesDetails);
    const seasonDetails = buildSeasonDetails(activeTitle, staticSeasonDetails, dynamicSeasonDetails);
    
    // If we are on a series page but the native selector is not ready or there is no data for this season, clean up.
    if (!seasonDetails || !activeTitle) {
        if (existingWrapper) existingWrapper.remove();
        return;
    }

    // 🎯 Anchor point: use the third `.container--cq5XE` container.
    const allContainers = document.querySelectorAll('.container--cq5XE');
    const targetAnchor = allContainers[2]; 

    if (!targetAnchor) {
        if (existingWrapper) existingWrapper.remove();
        return; 
    }

    if (existingWrapper) {
        if (lastRenderedSeasonTitle !== activeTitle) {
            // Update if the season changed
            existingWrapper.outerHTML = createSeasonInfoHTML(seasonDetails);
            lastRenderedSeasonTitle = activeTitle;
            console.log(`🔄 2-column block updated to: ${activeTitle}`);
        }
    }
    else {
        // 4. INJECT (if it does not exist yet, create it and inject it AFTER the anchor)
        
        // Create the element temporarily
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = createSeasonInfoHTML(seasonDetails);
        
        const newWrapper = tempDiv.firstElementChild; 
        
        if (newWrapper instanceof Element) { 
             targetAnchor.insertAdjacentElement('afterend', newWrapper);
             lastRenderedSeasonTitle = activeTitle;
             console.log(`🚀 2-column block injected for series ${activeSeriesId} and season: ${activeTitle}`);

        } else {
             console.error("Error: newWrapper is not a valid element for injection.");
        }
    }
    } finally {
        isSeasonUpdateInFlight = false;
    }
}

// --- 4. MAIN LOOP (constant monitoring / polling) ---

function mainLoop() {
    const currentUrl = window.location.href;
    
    // 1. Detect page/series changes (SPA handling)
    if (currentUrl !== lastUrl) {
        const existingWrapper = document.getElementById('custom-season-info-wrapper-id');
        if (existingWrapper) {
            existingWrapper.remove();
        }
        lastUrl = currentUrl;
        // Small delay for re-rendering
        setTimeout(() => {
            void updateAndInjectSeasonInfo();
        }, 100);
        return; 
    }
    
    // 2. Try to update/inject
    void updateAndInjectSeasonInfo();
}

// --- 5. INITIALIZATION ---

function initializeExtension() {
    if (pollingInterval) clearInterval(pollingInterval);

    // Start the URL/DOM polling loop every 200ms
    pollingInterval = setInterval(mainLoop, 200); 
    
    console.log("✅ Final injection system started (2-column layout).");
    
    // Immediate execution
    mainLoop(); 
}

// Start
initializeExtension();
