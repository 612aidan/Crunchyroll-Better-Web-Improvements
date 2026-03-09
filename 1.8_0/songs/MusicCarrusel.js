(function() {

            // --- 1. FUNCIÓN PARA OBTENER EL ID DE LA SERIE ---
            function getSeriesIdFromUrl() {
                const path = window.location.pathname;
                const match = path.match(/\/series\/([A-Za-z0-9]+)\//);
                if (match && match[1]) {
                    return match[1];
                }
                return null;
            }


            // Global state variables (DEBES estar definidas FUERA de initializeExtension para ser globales)
            let currentSeriesId = null;
            let currentMusicData = [];
            let currentIndex = 0; // Índice del video actual en el modal
            let lastUrl = window.location.href;
            let carouselHtmlCache = null;

            // --- 3. PLANTILLAS Y ESTILOS ---
            const CARD_TEMPLATE = `
                <div data-t="carousel-card-wrapper" data-card-index="{{CARD_INDEX}}" tabindex="-1" class="carousel-scroller__card--4Lrk-" role="group" aria-roledescription="Diapositiva" aria-label="{{CARD_INDEX}} de X">
                    <div class="music-card--3vmCL custom-playable-card" data-t="playable-card-audio single-song-card" data-video-url="{{LINK}}" data-title="{{TITLE}}" data-index="{{ZERO_INDEX}}">
                        <a aria-label="{{TITLE}}" tabindex="0" class="music-card__link---wxp4 play-link" href="#"></a>
                        <a aria-label="" tabindex="-1" href="#" class="music-card__thumbnail-wrapper--0JNVe" aria-hidden="true">
                            <div class="playable-thumbnail--HKMt2 playable-thumbnail--is-sized--ttnK8">
                                <div class="content-image--3na7E content-image--is-sized--SOai1 playable-thumbnail__image--AgM1B">
                                    <div class="content-image-figure-wrapper--pKs17 content-image__figure-wrapper--TRCnl">
                                        <div class="content-image-figure-wrapper__figure-sizer--SH2-x content-image__figure-sizer--is-background-type-one--Eo1qr">
                                            <svg class="content-image-figure-wrapper__sizer---PAKo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9" aria-hidden="true"></svg>
                                            <figure class="content-image__figure--7vume">
                                                <div class="progressive-image-loading--rwH3R">
                                                    <picture>
                                                        <img class="progressive-image-base__fade--Nrn20 progressive-image-base__fade--is-ready--dMxKu content-image__image--7tGlg progressive-image-loading__preview--eYvnH progressive-image-loading__preview--is-hidden--RLDT9" loading="eager" src="{{THUMBNAIL_URL}}" alt="" data-t="card-image">
                                                    </picture>
                                                    <picture>
                                                        <img class="content-image__image--7tGlg progressive-image-loading__original--k-k-7" loading="eager" src="{{THUMBNAIL_URL}}" alt="{{TITLE}}" data-t="card-image">
                                                    </picture>
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div class="text--gq6o- text--is-bold--yth2a text--is-m--pqiL- playable-thumbnail__duration--p-Ldq" data-t="duration-info">{{DURATION}}</div>
                            </div>
                        </a>
                        <div class="music-card__body--SWfVw">
                            <small class="text--gq6o- text--is-heavy--2YygX text--is-xs--5PTBo music-card__subtitle--wGEQD">
                                <a aria-label="" tabindex="0" data-t="artist-full-name" class="music-card-artist--Ix1iE" href="{{ARTIST_LINK}}">
                                    <small class="text--gq6o- text--is-heavy--2YygX text--is-xs--5PTBo">{{ARTIST}}</small>
                                </a>
                            </small>
                            <h3 class="text--gq6o- text--is-bold--yth2a text--is-l--iccTo music-card__title--bH7oD" data-t="audio-title">
                                <a aria-label="" tabindex="-1" href="#" class="music-card__title-link--awTCp" aria-hidden="true">{{TITLE}}</a>
                            </h3>
                            <div class="music-card__footer--LxyHw">
                                <div class="meta-tags--o8OYw" data-t="tag">
                                    <div class="meta-tags__tag-wrapper--fzf-1 meta-tags__tag-wrapper--is-inline--ug1Il">
                                        <span class="text--gq6o- text--is-m--pqiL-\">{{GENRE}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            const CAROUSEL_WRAPPER_TEMPLATE = `
                <div id="mi-carrusel-personalizado" class="erc-featured-music custom-music-carousel-wrapper" data-t="featured-music-carousel" data-id="erc-series-featured-music">
                    <div class="container--cq5XE">
                        <h3 class="heading--nKNOf heading--is-xxs--1CKSn heading--is-family-type-one--GqBzU title">Openings & Endings</h3>
                    </div>
                    <div class="carousel-container-relative">
                        <div class="container--cq5XE container--has-no-gutters--WqnNJ">
                            <div class="wide-cards-carousel__container--IMk9g">
                                <div class="carousel--uuuFa wide-cards-carousel--Z62BE wide-cards-carousel--in-browse-layout--k-yJA" aria-label="Featured Music" role="region" aria-roledescription="Carousel">
                                    
                                    <div class="container--cq5XE wide-cards-carousel__content-wrapper--oUiNK wide-cards-carousel__content-wrapper">
                                        
                                        <button class="custom-carousel-arrow custom-carousel-arrow-left" aria-label="Anterior">
                                            <svg viewBox="0 0 100 100" class="arrow-icon" xmlns="http://www.w3.org/2000/svg"><path d="M 60,80 L 40,50 L 60,20" fill="none" stroke="white" stroke-width="8"/></svg>
                                        </button>

                                        <div class="wide-cards-carousel__cards-frame--5t5GO">
                                            <div class="carousel-scroller--2cYvp">
                                                <div class="carousel-scroller__wrapper--bCIvZ">
                                                    <div class="carousel-scroller__track--43f0L" data-t="cards">
                                                        {{CARDS_HTML}}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="custom-carousel-arrow custom-carousel-arrow-right" aria-label="Siguiente">
                                            <svg viewBox="0 0 100 100" class="arrow-icon" xmlns="http://www.w3.org/2000/svg"><path d="M 40,20 L 60,50 L 40,80" fill="none" stroke="white" stroke-width="8"/></svg>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // NUEVA PLANTILLA: El HTML para la ventana modal de reproducción
            const MODAL_TEMPLATE = `
                <div id="custom-video-modal" class="custom-video-modal" style="display:none;">
                    <div class="modal-content">
                        <span class="close-btn">&times;</span>
                        <div class="video-container">
                            <video id="modal-video-player" controls preload="auto" autoplay style="width: 100%; height: 100%;"></video>
                        </div>
                        <div class="video-info">
                            <h2 id="modal-video-title"></h2>
                            <p id="modal-video-details"></p>
                        </div>
                        <button id="modal-prev-btn" class="modal-nav-btn prev-btn" aria-label="Video Anterior">
                            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 60,80 L 40,50 L 60,20" fill="none" stroke="white" stroke-width="8"/></svg>
                        </button>
                        <button id="modal-next-btn" class="modal-nav-btn next-btn" aria-label="Video Siguiente">
                            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 40,20 L 60,50 L 40,80" fill="none" stroke="white" stroke-width="8"/></svg>
                        </button>
                    </div>
                </div>
            `;

            function injectStyles() {
                if (document.getElementById('custom-carousel-styles')) return;

                const style = document.createElement('style');
                style.id = 'custom-carousel-styles';
                style.textContent = `
                    /* --- Estilos del Carrusel (Originales) --- */
                    #mi-carrusel-personalizado {
                        --carousel__col-count: 4;
                        --carousel__col-gap: 16px;
                        --carousel__row-count: 1;
                        --carousel__row-gap: 0px;
                        --carousel__overflow-x-hint: 20px;
                        --carousel__overflow-y-hint: 0px;
                    }

                    * { box-sizing: border-box; }

                    #mi-carrusel-personalizado .carousel-scroller__track--43f0L {
                        --padding-b: max(0rem, calc(var(--carousel__overflow-y-hint) - var(--carousel__row-gap) / 2));
                        --padding-i: max(0rem, calc(var(--carousel__overflow-x-hint) - var(--carousel__col-gap) / 2));
                        display: grid !important;
                        grid-auto-columns: calc(100% / var(--carousel__col-count)) !important;
                        grid-auto-flow: column !important;
                        grid-template-rows: repeat(var(--carousel__row-count), auto) !important;
                        margin-block: calc((var(--carousel__row-gap) / 2 + var(--padding-b)) * -1) !important;
                        margin-inline: calc((var(--carousel__col-gap) / 2 + var(--padding-i)) * -1) !important;
                        overflow-x: auto !important;
                        overflow-y: hidden !important;
                        overscroll-behavior-x: none !important;
                        scroll-behavior: smooth !important;
                        padding-block: var(--padding-b) !important;
                        padding-inline: var(--padding-i) !important;
                        scroll-padding: 0 var(--padding-i) !important;
                        scroll-snap-type: x mandatory !important;
                        scrollbar-width: none !important;
                    }

                    #mi-carrusel-personalizado .carousel-scroller__track--43f0L::-webkit-scrollbar {
                        display: none;
                    }

                    #mi-carrusel-personalizado .wide-cards-carousel__cards-frame--5t5GO {
                        overflow: hidden !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    }

                    #mi-carrusel-personalizado .wide-cards-carousel__content-wrapper {
                        position: relative !important;
                        padding: 0 var(--carousel__overflow-x-hint) !important;
                    }

                    .custom-carousel-arrow {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        z-index: 99;
                        background: rgba(0, 0, 0, 0.6);
                        border: none;
                        cursor: pointer;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: background 0.2s ease, opacity 0.2s;
                    }
                    
                    .custom-carousel-arrow-left { left: 20px; }
                    .custom-carousel-arrow-right { right: 20px; }
                    .custom-carousel-arrow:hover { background: rgba(0, 0, 0, 0.8); }

                    /* Nuevo: Estilo de cursor para indicar que es clickeable */
                    .custom-playable-card {
                        cursor: pointer;
                    }

                    /* --- Nuevos Estilos del Modal (Lightbox) --- */

                    .custom-video-modal {
                        position: fixed;
                        z-index: 9999;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        overflow: auto;
                        background-color: rgba(0, 0, 0, 0.95);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        padding: 20px; /* Padding general para evitar que el contenido toque los bordes */
                    }

                    .modal-content {
                        position: relative;
                        width: 70%;
                        display: flex;
                        flex-direction: column;
                        gap: 15px;
                    }

                    .video-container {
                        position: relative;
                        width: 100%;
                        padding-top: 56.25%; /* Ratio 16:9 para el video */
                    }
                    
                    #modal-video-player {
                        position: absolute;
                        top: 0;
                        left: 0;
                        border-radius: 6px;
                        background-color: #000;
                    }

                    .video-info {
                        color: white;
                        text-align: center;
                        padding: 10px 0;
                    }
                    
                    .video-info h2 {
                        font-size: 1.5rem;
                        margin: 0;
                        color: var(--series-hero-action-tooltip-color);
                    }

                    .video-info p {
                        font-size: 0.9rem;
                        color: #e0e0e0;
                        margin-top: 5px;
                    }

                    .close-btn {
                        position: absolute;
                        top: -40px;
                        right: 0px;
                        color: var(--series-hero-action-tooltip-color);
                        font-size: 40px;
                        font-weight: bold;
                        transition: 0.3s;
                        cursor: pointer;
                        line-height: 1;
                    }
                    
                    .close-btn:hover,
                    .close-btn:focus {
                        color: white;
                        text-decoration: none;
                        cursor: pointer;
                    }

                    /* Flechas de Navegación del Modal (Grandes y prominentes) */
                    .modal-nav-btn {
                        position: fixed; /* Posición fija en la pantalla */
                        top: 50%;
                        transform: translateY(-50%);
                        background: rgba(0, 0, 0, 0.5);
                        border: none;
                        cursor: pointer;
                        padding: 15px;
                        z-index: 10000;
                        opacity: 0.8;
                        transition: opacity 0.2s, background-color 0.2s;
                        height: 100px;
                        display: flex;
                        align-items: center;
                        border-radius: 6px;
                    }
                    
                    .modal-nav-btn:hover {
                        opacity: 1;
                        background-color: rgba(0, 0, 0, 0.8);
                    }

                    .modal-nav-btn svg {
                        width: 40px;
                        height: 40px;
                    }

                    .prev-btn { left: 10px; }
                    .next-btn { right: 10px; }
                    
                    /* Ocultar las flechas de navegación si solo hay un video */
                    .modal-nav-btn.hidden {
                        display: none !important;
                    }
                `;
                document.head.appendChild(style);
            }

            // NUEVA FUNCIÓN: Inyecta el HTML del modal una sola vez en el body
            function injectModalHTML() {
                if (!document.getElementById('custom-video-modal')) {
                    document.body.insertAdjacentHTML('beforeend', MODAL_TEMPLATE);
                }
            }

            // --- LÓGICA DEL MODAL ---

            function loadVideo(index) {
                if (index < 0 || index >= currentMusicData.length) return;

                currentIndex = index;
                const videoData = currentMusicData[currentIndex];

                const player = document.getElementById('modal-video-player');
                const titleElement = document.getElementById('modal-video-title');
                const detailsElement = document.getElementById('modal-video-details');
                const prevBtn = document.getElementById('modal-prev-btn');
                const nextBtn = document.getElementById('modal-next-btn');

                // 1. Cargar Video
                player.src = videoData.link;
                player.load();

                // 2. Actualizar Información
                titleElement.textContent = videoData.title;
                detailsElement.textContent = `${videoData.artist} · ${videoData.genre}`;

                // 3. Control de Navegación (Mostrar/Ocultar botones)
                const isSingleVideo = currentMusicData.length <= 1;
                prevBtn.style.display = isSingleVideo || currentIndex === 0 ? 'none' : 'flex';
                nextBtn.style.display = isSingleVideo || currentIndex === currentMusicData.length - 1 ? 'none' : 'flex';
                
                // 4. Reproducir
                player.play().catch(error => {

                });
            }

            function openModal(index) {
                const modal = document.getElementById('custom-video-modal');
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
                loadVideo(index);
            }

            function closeModal() {
                const modal = document.getElementById('custom-video-modal');
                const player = document.getElementById('modal-video-player');

                modal.style.display = 'none';
                document.body.style.overflow = ''; // Restaura el scroll del fondo
                player.pause();
                player.removeAttribute('src'); // Limpia el source para liberar recursos
            }

            // NUEVA FUNCIÓN: Configura los manejadores de eventos del modal (cerrar y navegar)
            function setupModalNavigation() {
                const modal = document.getElementById('custom-video-modal');
                if (!modal) return;

                // Cierre
                modal.querySelector('.close-btn').addEventListener('click', closeModal);

                // Navegación
                document.getElementById('modal-prev-btn').addEventListener('click', () => {
                    if (currentIndex > 0) loadVideo(currentIndex - 1);
                });

                document.getElementById('modal-next-btn').addEventListener('click', () => {
                    if (currentIndex < currentMusicData.length - 1) loadVideo(currentIndex + 1);
                });

                // Cierre con tecla Escape
                document.addEventListener('keydown', (event) => {
                    if (event.key === 'Escape' && modal.style.display === 'flex') {
                        closeModal();
                    }
                });

                // Cierre al hacer clic fuera del contenido del modal
            //    modal.addEventListener('click', (event) => {
            //        // Cierra si se clica en el fondo (el propio modal) y no en su contenido
            //        if (event.target === modal) {
            //            closeModal();
            //        }
            //    });

            }

            // --- LÓGICA DEL CARRUSEL ---

            function buildCarouselHTML(musicData) {
                if (carouselHtmlCache) return carouselHtmlCache;

                let cardsHtml = '';
                musicData.forEach((item, index) => {
                    let cardHtml = CARD_TEMPLATE;
                    cardHtml = cardHtml.replaceAll('{{CARD_INDEX}}', index + 1);
                    cardHtml = cardHtml.replaceAll('{{ZERO_INDEX}}', index); // ¡Añadido! para el data-index del modal
                    cardHtml = cardHtml.replaceAll('{{TITLE}}', item.title);
                    cardHtml = cardHtml.replaceAll('{{LINK}}', item.link);
                    cardHtml = cardHtml.replaceAll('{{ARTIST}}', item.artist);
                    cardHtml = cardHtml.replaceAll('{{ARTIST_LINK}}', item.artist_link || '#');
                    cardHtml = cardHtml.replaceAll('{{GENRE}}', item.genre);
                    cardHtml = cardHtml.replaceAll('{{THUMBNAIL_URL}}', item.thumbnail_url);
                    cardHtml = cardHtml.replaceAll('{{DURATION}}', item.duration);
                    cardsHtml += cardHtml;
                });

                const finalCarouselHtml = CAROUSEL_WRAPPER_TEMPLATE.replace('{{CARDS_HTML}}', cardsHtml);
                carouselHtmlCache = finalCarouselHtml;
                return finalCarouselHtml;
            }


            function removeExistingCarousel() {
                const existingCarousel = document.getElementById('mi-carrusel-personalizado');
                if (existingCarousel) {
                    existingCarousel.remove();
                }
            }

            function setupCarouselScroll() {
                const carouselElement = document.getElementById('mi-carrusel-personalizado');
                if (!carouselElement) return;

                const scrollerTrack = carouselElement.querySelector('.carousel-scroller__track--43f0L');
                const arrowLeft = carouselElement.querySelector('.custom-carousel-arrow-left');
                const arrowRight = carouselElement.querySelector('.custom-carousel-arrow-right');
                
                // Se eliminó la dependencia de cardElement, se usa scrollerTrack.clientWidth
                if (!scrollerTrack || !arrowLeft || !arrowRight) return;

                const viewportWidth = scrollerTrack.clientWidth;
                const scrollAmount = viewportWidth; // Se desplazará una "página"

                arrowRight.onclick = () => { scrollerTrack.scrollLeft += scrollAmount; };
                arrowLeft.onclick = () => { scrollerTrack.scrollLeft -= scrollAmount; };

                function checkArrows() {
                    arrowLeft.style.opacity = scrollerTrack.scrollLeft > 0 ? '1' : '0';
                    arrowLeft.style.pointerEvents = scrollerTrack.scrollLeft > 0 ? 'auto' : 'none';

                    const maxScrollLeft = scrollerTrack.scrollWidth - scrollerTrack.clientWidth;
                    arrowRight.style.opacity = scrollerTrack.scrollLeft < maxScrollLeft - 10 ? '1' : '0';
                    arrowRight.style.pointerEvents = scrollerTrack.scrollLeft < maxScrollLeft - 10 ? 'auto' : 'none';
                }

                scrollerTrack.onscroll = checkArrows;

                setTimeout(checkArrows, 50);
                window.onresize = checkArrows;
            }

            // NUEVA FUNCIÓN: Añade el manejador de clic a las tarjetas para abrir el modal
            function setupCardClickHandlers() {
                const cards = document.querySelectorAll('#mi-carrusel-personalizado .custom-playable-card');
                cards.forEach(card => {
                    // Se usa data-listener-added para evitar duplicados
                    if (card.dataset.listenerAdded) return;

                    // El elemento cliceable es el DIV principal de la tarjeta
                    card.addEventListener('click', (e) => {
                        e.preventDefault();
                        const index = parseInt(card.getAttribute('data-index'));
                        openModal(index);
                    });

                    card.dataset.listenerAdded = 'true';
                });
            }

            // --- 4. LÓGICA DE INYECCIÓN CONDICIONAL ---

            function injectBlock() {
                // Si el carrusel ya existe, solo revisamos el scroll (no hay que re-inyectar)
                if (document.getElementById('mi-carrusel-personalizado')) {
                    setupCarouselScroll();
                    setupCardClickHandlers(); // Llama siempre para asegurar que se añaden listeners si el DOM se manipula.
                    return true;
                }

                if (window.isCRInjecting) return false;
                window.isCRInjecting = true;

                // ⚠️ CORRECCIÓN CLAVE: ASIGNAR A LAS VARIABLES GLOBALES
                currentSeriesId = getSeriesIdFromUrl();
                currentMusicData = SERIES_MUSIC_DATA[currentSeriesId];

                if (!currentSeriesId || !currentMusicData || currentMusicData.length === 0) {
                    window.isCRInjecting = false;
                    return false;
                }

                // Intenta encontrar el elemento 'Similar to' y lo reemplaza/añade antes
                let target = document.querySelector('div[data-id="erc-series-similar-to"]');

                if (target) {
                    target.insertAdjacentHTML('beforebegin', buildCarouselHTML(currentMusicData));

                    console.log(`[CR Extension] ✅ Carrusel inyectado. Contenido para: ${currentSeriesId}`);

                    // ⚠️ CORRECCIÓN CLAVE: LLAMAR A setupCardClickHandlers() AL INYECTAR
                    setTimeout(setupCarouselScroll, 10);
                    setTimeout(setupCardClickHandlers, 20); // Asegura que los listeners se peguen al nuevo DOM.

                    setTimeout(() => { window.isCRInjecting = false; }, 50);
                    return true;
                }

                window.isCRInjecting = false;
                return false;
            }


            // --- 5. BUCLE PRINCIPAL DE DETECCIÓN Y REINYECCIÓN ---

            function mainLoop() {
                const currentUrl = window.location.href;

                if (currentUrl !== lastUrl) {
                    removeExistingCarousel();
                    carouselHtmlCache = null;
                    lastUrl = currentUrl;
                    
                    // Pequeña espera para el re-renderizado de la página
                    setTimeout(injectBlock, 100);
                }

                injectBlock();
            }


            function initializeExtension() {
                injectStyles();
                injectModalHTML(); // Inyectar el modal una sola vez
                setupModalNavigation(); // Configurar los listeners del modal una sola vez

                // Inicia el bucle de verificación de URL (necesario para SPA - Single Page Applications)
                setInterval(mainLoop, 200);

                // Inyección inicial
                injectBlock();
            }

            // Iniciar
            initializeExtension();
        
    

})();