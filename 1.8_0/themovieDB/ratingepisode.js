(function() {

const THUMBNAIL_CONTAINER_SELECTOR = '.playable-thumbnail--HKMt2';
const EPISODE_CARD_SELECTOR = '.playable-card--GnRbX';
const EPISODE_TITLE_SELECTOR = '.playable-card__title--rgmp7';
const EPISODE_CONTAINER_SELECTOR_MAIN = 'div[data-t="episode-list"]';
const RATING_INJECTED_FLAG = 'data-rating-injected';
const RATING_BADGE_CLASS = 'text--gq6o- text--is-bold--yth2a text--is-m--pqiL- cr-tmdb-rating-badge';


// ID de Crunchyroll para One Piece
const ONE_PIECE_CR_ID = 'GRMG8ZQZR';


function getSeriesIdFromUrl() {
    const match = window.location.pathname.match(/\/series\/([A-Za-z0-9]+)/);
    return (match && match[1]) ? match[1] : null;
}

/**
 * Función clave: Extrae las posibles claves de episodio del título.
 */
function getEpisodeKeysFromTitle(titleText) {
    const uniqueKeys = new Set();
    
    // 1. Clave S# E# (Para series que usan numeración de temporada)
    const compositeMatch = titleText.match(/S\s*(\d+)\s*E\s*([\d\.\-\w]+)/i);
    if (compositeMatch) {
        uniqueKeys.add(`S${compositeMatch[1]} E${compositeMatch[2]}`); 
    }
    
    // 2. Clave Simple (E#): Busca "E" o "Episodio" seguido de números. (Crucial para One Piece)
    const simpleMatch = titleText.match(/(?:Episodio|E)\s*(\d+)/i);
    if (simpleMatch) {
        uniqueKeys.add(simpleMatch[1]); // Añade la clave simple: "62"
    }
    
    // 3. Fallback agresivo: Último número del string (para títulos raros)
    if (uniqueKeys.size === 0) {
          const lastNum = titleText.match(/(\d+)[^\d]*$/);
          if (lastNum) uniqueKeys.add(lastNum[1]);
    }
    
    return [...uniqueKeys]; 
}

function createRatingBadge(rating) {
    const badgeDiv = document.createElement('div');
    badgeDiv.className = RATING_BADGE_CLASS;
    badgeDiv.style.cssText = `
        position: absolute; bottom: .25rem; left: .25rem; z-index: 0;
        background-color: #0009; color: white; padding: .1875rem .3125rem;
        font-size: 12px; font-weight: 700;
        pointer-events: none; display: flex; align-items: center; opacity: 0.95; 
    `;
    const starSVG = `<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 4px;"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>`;
    badgeDiv.innerHTML = `${starSVG} ${rating}`;
    return badgeDiv;
}

async function injectTMDbRatings() {
    const seriesId = getSeriesIdFromUrl();
    if (!seriesId) return;

    let episodeRatings = {};

    // 🔑 LÓGICA DE INTERCEPCIÓN LOCAL
    if (seriesId === ONE_PIECE_CR_ID) {
        // Si es One Piece, usamos el mapa estático local y evitamos llamar a background/API.
        episodeRatings = ONE_PIECE_STATIC_RATINGS;
    } else {
        // Si no es One Piece, llamamos al background.js para TMDb.
        const response = await chrome.runtime.sendMessage({ action: "fetchTmdbRatings", seriesId }).catch(e => null);
        
        if (!response || !response.success || !response.ratings) return;
        
        episodeRatings = response.ratings;
    }

    if (Object.keys(episodeRatings).length === 0) return; // Si no hay ratings, salimos.

    const thumbnailContainers = document.querySelectorAll(THUMBNAIL_CONTAINER_SELECTOR);

    thumbnailContainers.forEach(container => {
        if (container.hasAttribute(RATING_INJECTED_FLAG) || container.querySelector(`.${RATING_BADGE_CLASS}`)) return;
        
        const episodeCard = container.closest(EPISODE_CARD_SELECTOR); 
        if (episodeCard) {
            const titleEl = episodeCard.querySelector(EPISODE_TITLE_SELECTOR); 
            if (titleEl && titleEl.textContent) {
                const possibleKeys = getEpisodeKeysFromTitle(titleEl.textContent.trim()); 
                let rating = null;
                for (const key of possibleKeys) {
                    if (episodeRatings[key]) {
                        rating = episodeRatings[key];
                        break;
                    }
                }
                if (rating) { 
                    container.style.position = 'relative'; 
                    container.appendChild(createRatingBadge(rating));
                    container.setAttribute(RATING_INJECTED_FLAG, 'true');
                }
            }
        }
    });
}

function setupDynamicControlListeners() {
    const handleControlClick = () => setTimeout(() => injectTMDbRatings(), 300);
    // Busca botones de ordenamiento o selectores de temporada/lista de episodios
    const selectors = ['[data-t="episode-sort-select"]', '.seasons-select', '.episode-list']; 
    selectors.forEach(sel => {
        const el = document.querySelector(sel);
        if (el && !el.getAttribute('data-tmdb-set')) {
            el.addEventListener('click', handleControlClick);
            el.setAttribute('data-tmdb-set', 'true');
        }
    });
}

// Observador para cuando se cargan episodios dinámicamente (al hacer scroll o cambiar de temporada)
new MutationObserver((mutations) => {
    let contentInjected = false;
    if (location.href.includes('/series/')) {
        for (const m of mutations) {
            if (m.type === 'childList') {
                for (const n of m.addedNodes) {
                    if (n.nodeType === 1 && (n.matches(EPISODE_CONTAINER_SELECTOR_MAIN) || n.querySelector(EPISODE_CARD_SELECTOR))) {
                        contentInjected = true; break;
                    }
                }
            }
            if (contentInjected) break;
        }
    }
    if (contentInjected) {
        injectTMDbRatings();
        setupDynamicControlListeners();
    }
}).observe(document, { subtree: true, childList: true });

document.addEventListener('DOMContentLoaded', () => {
    injectTMDbRatings(); 
    setupDynamicControlListeners();
});

})();