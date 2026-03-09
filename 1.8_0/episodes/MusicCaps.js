// LÓGICA DE INYECCIÓN DE LOGO EN MUSIC CARD

const MUSIC_FEATURED_CAROUSEL_SELECTOR = '.custom-music-carousel-wrapper';
const MUSIC_CARD_THUMBNAIL_SELECTOR2 = `${MUSIC_FEATURED_CAROUSEL_SELECTOR} .music-card--3vmCL.custom-playable-card .playable-thumbnail--HKMt2`; // Contenedor de la miniatura dentro de la Music Card
const THUMBNAIL_WRAPPER_SELECTOR2 = '.music-card__thumbnail-wrapper--0JNVe'; // El enlace que envuelve la miniatura

// *** CONSTANTES DEL LOGO (MANTENIDAS) ***
const LOGO_MUSIC_URL_TEMPLATE = 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=100,width=500/keyart/[SERIES_ID]-title_logo-en-us';
const LOGO_MUSIC_ID_SELECTOR = 'cr-series-logo-music-card';
const LOGO_MUSIC_INJECTED_FLAG = 'data-music-logo-injected'; // Nueva bandera para music cards

// ----------------------------------------------------------------------
// FUNCIONES AUXILIARES
// ----------------------------------------------------------------------

/**
 * Función auxiliar para obtener el ID de la serie de la URL actual.
 * @returns {string|null} El ID de la serie o null.
 */
function getSeriesIdFromUrl() {
    // Busca el ID de la serie en la URL (asumiendo formato /series/[ID]...)
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
function getSeriesLogoMusicUrl(seriesId) {
    if (!seriesId) return null;

    // 1. **Comprueba si hay una URL personalizada (Excepción)**
    if (CUSTOM_LOGO_URLS[seriesId]) {
        // Usa el logo personalizado. Lo ajustaremos a 80px en injectSeriesLogoToMusicCards.
        return CUSTOM_LOGO_URLS[seriesId];
    }
    
    // 2. **Usa la URL predeterminada de Crunchyroll**
    // Ajustamos la URL para un tamaño de logo pequeño (ej. 80px)
    return LOGO_MUSIC_URL_TEMPLATE.replace('[SERIES_ID]', seriesId).replace('width=500', 'width=80');
}


/**
 * Intenta cargar el logo de la serie. Si la carga es exitosa, lo inyecta 
 * en todos los contenedores de miniaturas de la tarjeta de música que no lo tengan.
 * La inyección es asíncrona (usa onload).
 */
function injectSeriesLogoToMusicCards(thumbnailContainers, seriesId) {
    if (!seriesId) return;

    // Ajustamos la URL para un tamaño de logo pequeño (ej. 80px)
    const logoUrl = getSeriesLogoMusicUrl(seriesId);

    if (!logoUrl) return;
    
    // 1. Creamos un elemento de imagen de prueba (que no está en el DOM).
    const testImg = new Image();
    testImg.src = logoUrl;

    // 2. Si la imagen carga correctamente (es válida), la inyectamos.
    testImg.onload = function() {
        thumbnailContainers.forEach(container => {
            // El contenedor padre para posicionamiento es el que tiene la clase `music-card__thumbnail-wrapper--0JNVe`
            const parentWrapper = container.closest(THUMBNAIL_WRAPPER_SELECTOR2);

            if (!parentWrapper) return;

            // Revisa si ya tiene el logo
            if (parentWrapper.hasAttribute(LOGO_MUSIC_INJECTED_FLAG)) {
                return;
            }

            // Crear el elemento de logo real
            const logoImg = document.createElement('img');
            logoImg.className = LOGO_MUSIC_ID_SELECTOR;
            logoImg.src = logoUrl;
            logoImg.alt = 'Series Logo';
            
            // Estilos para posicionar en la esquina SUPERIOR IZQUIERDA
            parentWrapper.style.position = 'relative'; // Aseguramos que el contenedor padre tenga position: relative
            logoImg.style.cssText = `
                position: absolute;
                top: 4px; /* Posición arriba, con un pequeño margen */
                right: 4px; /* Posición izquierda, con un pequeño margen */
                width: auto;
                height: auto;
                max-width: 80px;
                max-height: 45px;
                z-index: 1; /* Z-index mayor para estar por encima de otros elementos */
                background-color: transparent;
                filter: drop-shadow(0 0 5px rgba(0,0,0,0.8));
            `;
            
            // Insertar el logo *antes* del contenedor de la imagen de la miniatura
            parentWrapper.insertBefore(logoImg, container);
            parentWrapper.setAttribute(LOGO_MUSIC_INJECTED_FLAG, 'true'); // Marca el contenedor como inyectado
        });
        // console.log('Logo de la serie inyectado exitosamente en las music cards.');
    };
    
    // 3. Si la imagen falla en cargar (URL inválida, 404), no hacemos nada.
    testImg.onerror = function() {
        // console.log('ADVERTENCIA: Logo no encontrado para el ID de la serie. No se inyectará en music cards.');
        // Marcar todos los contenedores para evitar reintentos fallidos en el futuro.
        thumbnailContainers.forEach(container => {
             const parentWrapper = container.closest(THUMBNAIL_WRAPPER_SELECTOR2);
             if (parentWrapper) {
                 parentWrapper.setAttribute(LOGO_MUSIC_INJECTED_FLAG, 'failed');
             }
        });
    };
}

// ----------------------------------------------------------------------
// FUNCIÓN PRINCIPAL
// ----------------------------------------------------------------------

function initializeMusicCardLogoInjection() {
    try {
        // Selecciona todos los contenedores de miniaturas DENTRO de las Music Cards
        const musicCardThumbnails = document.querySelectorAll(MUSIC_CARD_THUMBNAIL_SELECTOR2);
        
        if (musicCardThumbnails.length === 0) {
            return false; 
        }

        const seriesId = getSeriesIdFromUrl();
        
        // Ejecuta la validación e inyección asíncrona del logo
        injectSeriesLogoToMusicCards(musicCardThumbnails, seriesId);
        
        return true; 
    } catch (error) {
        console.error(`ERROR en initializeMusicCardLogoInjection: ${error.message}`);
        return false;
    }
}

// ----------------------------------------------------------------------
// PERSISTENCIA / OBSERVER
// ----------------------------------------------------------------------

const MUSIC_CAROUSEL_SELECTOR = '.custom-music-carousel-wrapper';

new MutationObserver((mutationsList) => {
    let contentInjected = false;
    
    // Solo si estamos en una página de serie
    if (location.href.includes('/series/')) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                for (const node of mutation.addedNodes) {
                    if (node.nodeType === 1) {
                        // Si se agregó el carrusel de música o una music card
                        if (node.matches(MUSIC_CAROUSEL_SELECTOR) ||
                            node.querySelector(MUSIC_CARD_THUMBNAIL_SELECTOR2)) { 
                            
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
        // Un pequeño retraso para asegurar que los elementos estén completamente renderizados
        setTimeout(initializeMusicCardLogoInjection, 100); 
    }
    
}).observe(document, { subtree: true, childList: true });


document.addEventListener('DOMContentLoaded', () => {
    initializeMusicCardLogoInjection(); 
});