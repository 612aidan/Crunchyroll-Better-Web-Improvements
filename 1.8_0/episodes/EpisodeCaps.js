// LÓGICA DE INYECCIÓN DE LOGO EN THUMBNAIL

const THUMBNAIL_CONTAINER_SELECTOR1 = '.playable-thumbnail--HKMt2'; // Contenedor de la miniatura
const EPISODE_CARD_SELECTOR1 = '.playable-card--GnRbX'; // Selector para la tarjeta completa
const EPISODE_TITLE_SELECTOR1 = '.playable-card__title--rgmp7'; // Selector para el H3 del título del episodio
const MUSIC_EXCLUSION_SELECTOR1 = '[data-t="featured-music-carousel"]';
const HOVER_EXCLUSION_SELECTOR1 = '.playable-card__hover-info--OueGA'; // Exclusión para tarjetas flotantes

// *** CONSTANTES DEL LOGO ***
const LOGO_URL_TEMPLATE = 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=100,width=500/keyart/[SERIES_ID]-title_logo-en-us';
const LOGO_ID_SELECTOR = 'cr-series-logo';
const LOGO_INJECTED_FLAG = 'data-logo-injected'; // Bandera para marcar el contenedor

// ----------------------------------------------------------------------
// FUNCIONES AUXILIARES
// ----------------------------------------------------------------------

/**
 * Función auxiliar para obtener el ID de la serie de la URL actual.
 * @returns {string|null} El ID de la serie o null.
 */
function getSeriesIdFromUrl() {
    const match = window.location.pathname.match(/\/series\/([A-Za-z0-9]+)/);
    if (match && match[1]) {
        return match[1];
    }
    return null;
}

/**
 * Determina la URL del logo a usar: personalizada si existe, o predeterminada.
 * @param {string} seriesId - El ID de la serie.
 * @returns {string|null} La URL del logo o null si no hay ID.
 */
function getSeriesLogoUrl(seriesId) {
    if (!seriesId) return null;

    // 1. **Comprueba si hay una URL personalizada (Excepción)**
    if (CUSTOM_LOGO_URLS[seriesId]) {
        // Usa el logo personalizado. Lo ajustaremos a 80px en injectSeriesLogoToMusicCards.
        return CUSTOM_LOGO_URLS[seriesId];
    }
    
    // 2. **Usa la URL predeterminada de Crunchyroll**
    // Ajustamos la URL para un tamaño de logo pequeño (ej. 80px)
    return LOGO_URL_TEMPLATE.replace('[SERIES_ID]', seriesId).replace('width=500', 'width=80');
}


/**
 * Intenta cargar el logo de la serie. Si la carga es exitosa, lo inyecta 
 * en todos los contenedores de miniaturas que no lo tengan.
 * La inyección es asíncrona (usa onload).
 */
function injectSeriesLogo(thumbnailContainers, seriesId) {
    if (!seriesId) return;

    // Ajustamos la URL para una miniatura de 100px de ancho
    const logoUrl = getSeriesLogoUrl(seriesId);

    if (!logoUrl) return;
    
    // 1. Creamos un elemento de imagen de prueba (que no está en el DOM).
    const testImg = new Image();
    testImg.src = logoUrl;

    // 2. Si la imagen carga correctamente (es válida), la inyectamos.
    testImg.onload = function() {
        thumbnailContainers.forEach(container => {
            // Revisa si ya tiene el logo o si está excluido
            if (container.closest(MUSIC_EXCLUSION_SELECTOR1) || 
                container.closest(HOVER_EXCLUSION_SELECTOR1) ||
                container.hasAttribute(LOGO_INJECTED_FLAG)) {
                return;
            }

            // Crear el elemento de logo real
            const logoImg = document.createElement('img');
            logoImg.className = LOGO_ID_SELECTOR;
            logoImg.src = logoUrl;
            logoImg.alt = 'Series Logo';
            
            // Estilos
            container.style.position = 'relative'; 
            logoImg.style.cssText = `
                position: absolute;
                bottom: 4px; 
                left: 0; 
                width: auto;
                height: auto;
                max-width: 100px;
                max-height: 65px;
                z-index: 1;
                background-color: transparent;
                filter: drop-shadow(0 0 5px rgba(0,0,0,0.8));
                padding: 4px; // Pequeño padding para no pegarse al borde
            `;
            
            container.appendChild(logoImg);
            container.setAttribute(LOGO_INJECTED_FLAG, 'true'); // Marca el contenedor como inyectado
        });
        // console.log('Logo inyectado exitosamente en los thumbnails.');
    };
    
    // 3. Si la imagen falla en cargar (URL inválida, 404), no hacemos nada.
    testImg.onerror = function() {
        // console.log('ADVERTENCIA: Logo no encontrado para el ID de la serie. No se inyectará.');
        // Para asegurar que no reintentamos en el mismo contenedor
        thumbnailContainers.forEach(container => {
             container.setAttribute(LOGO_INJECTED_FLAG, 'failed');
        });
    };
}

// ----------------------------------------------------------------------
// FUNCIÓN PRINCIPAL (SOLO INYECTA LOGO, ELIMINADA LÓGICA DE NÚMERO DE EPISODIO)
// ----------------------------------------------------------------------

function injectEpisodeNumberTags() { // Nombre mantenido para compatibilidad con la persistencia
    try {
        const thumbnailContainers = document.querySelectorAll(THUMBNAIL_CONTAINER_SELECTOR1); 
        
        if (thumbnailContainers.length === 0) {
            return false; 
        }

        const seriesId = getSeriesIdFromUrl();
        
        // Ejecuta la validación e inyección asíncrona del logo una vez
        // Se ejecuta en cada llamada, pero el 'onload' y las banderas lo gestionan.
        injectSeriesLogo(thumbnailContainers, seriesId);
        
        // *** SE HA ELIMINADO TODA LA LÓGICA DE INYECCIÓN DE LA ETIQUETA DE NÚMERO DE EPISODIO ***
        
        return true; 
    } catch (error) {
        console.error(`ERROR en injectEpisodeNumberTags (ahora solo inyecta logo): ${error.message}`);
        return false;
    }
}

// ----------------------------------------------------------------------
// PERSISTENCIA (SIN CAMBIOS)
// ----------------------------------------------------------------------

const EPISODE_CONTAINER_SELECTOR1 = 'div[data-t="episode-list"]';
const TOP_CONTROLS_SELECTOR1 = '.top-controls'; 

const EPISODE_SORT_TRIGGER_SELECTOR = '[data-t="episode-sort-select"]';
const SEASON_SELECT_TRIGGER_SELECTOR = '.seasons-select';

function setupDynamicControlListeners() {
    const sortControl = document.querySelector(EPISODE_SORT_TRIGGER_SELECTOR);
    const seasonControl = document.querySelector(SEASON_SELECT_TRIGGER_SELECTOR);
    
    const handleControlClick = () => {
        setTimeout(() => {
            injectEpisodeNumberTags();
        }, 300); 
    };

    if (sortControl && !sortControl.getAttribute('data-listener-set')) {
        sortControl.addEventListener('click', handleControlClick);
        sortControl.setAttribute('data-listener-set', 'true');
    }

    if (seasonControl && !seasonControl.getAttribute('data-listener-set')) {
        seasonControl.addEventListener('click', handleControlClick);
        seasonControl.setAttribute('data-listener-set', 'true');
    }
}

new MutationObserver((mutationsList) => {
    let contentInjected = false;
    
    if (location.href.includes('/series/')) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                for (const node of mutation.addedNodes) {
                    if (node.nodeType === 1) {
                        if (node.matches(EPISODE_CONTAINER_SELECTOR1) || 
                            node.querySelector(EPISODE_CARD_SELECTOR1) ||
                            node.querySelector(TOP_CONTROLS_SELECTOR1)) { 
                            
                            contentInjected = true;
                            break;
                        }
                    }
                }
            }
            if (contentInjected) break;
        }
    }

    if (contentInjected) {
        injectEpisodeNumberTags();
        setupDynamicControlListeners();
    }
    
}).observe(document, { subtree: true, childList: true });


document.addEventListener('DOMContentLoaded', () => {
    injectEpisodeNumberTags(); 
    setupDynamicControlListeners();
});