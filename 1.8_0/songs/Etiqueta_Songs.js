(function() {
    // --- Configuración ---
    const CARD_SELECTOR = '.custom-music-carousel-wrapper .music-card--3vmCL';
    const TITLE_SELECTOR = '[data-t="audio-title"] a';
    const THUMBNAIL_WRAPPER_SELECTOR = '.music-card__thumbnail-wrapper--0JNVe';
    const LABEL_CLASS = 'custom-op-ed-label';

    // --- 1. Función para la lógica de inyección de la etiqueta ---
    function addOpEdLabel(cardElement) {
        // Evita procesar tarjetas que ya tienen la etiqueta.
        if (cardElement.querySelector(`.${LABEL_CLASS}`)) {
            return;
        }

        const titleElement = cardElement.querySelector(TITLE_SELECTOR);
        const thumbnailWrapper = cardElement.querySelector(THUMBNAIL_WRAPPER_SELECTOR);

        if (!titleElement || !thumbnailWrapper) {
            return;
        }

        // 1. Extraer el texto del título y buscar el patrón (ej: "OP 8")
        const fullTitle = titleElement.textContent.trim();
        const match = fullTitle.match(/^([^:]+):/); // Busca cualquier cosa antes de los primeros ":"

        let labelText;
        if (match && match[1]) {
            labelText = match[1].trim().toUpperCase();

            labelText = labelText.replace('OP', 'OPENING');
            labelText = labelText.replace('ED', 'ENDING');
        } else {
            // Si el título no sigue el patrón (ej: "OP 8: Title"), no inyectamos la etiqueta
            return;
        }

        // 2. Crear el elemento de la etiqueta
        const label = document.createElement('div');
        label.className = LABEL_CLASS;
        label.textContent = labelText;
        label.setAttribute('aria-hidden', 'true'); // Etiqueta decorativa

        // 3. Inyectar la etiqueta en la miniatura
        thumbnailWrapper.appendChild(label);
    }

    // --- 2. Función Principal de Procesamiento ---
    function processAllCards() {
        const cards = document.querySelectorAll(CARD_SELECTOR);
        cards.forEach(addOpEdLabel);
    }

    // --- 3. Inyección de Estilos (CSS) ---
    function injectStyles() {
        if (document.getElementById('custom-label-styles')) return;

        const style = document.createElement('style');
        style.id = 'custom-label-styles';
        style.textContent = `
            /* Contenedor de la miniatura debe ser relativo para posicionar la etiqueta */
            .music-card__thumbnail-wrapper--0JNVe {
                position: relative; 
            }

            /* Estilos de la etiqueta OP/ED */
            .${LABEL_CLASS} {
                position: absolute;
                bottom: 8px; /* Separación de la parte inferior */
                left: 8px;   /* Separación de la parte izquierda */
                z-index: 0; /* Asegura que esté por encima de la imagen */
                
                /* Estilo visual similar a otras etiquetas de la web */
                /* background-color: var(--series-hero-action-tooltip-color, #ff7a18); */
                /* color: var(--series-hero-button-color, #000000); */
                border-left: 4px solid var(--series-hero-action-tooltip-color);
                color: #ffffffff;
                padding: 2px 6px;
                /*border-radius: 4px;*/
                font-size: 0.7rem;
                font-weight: bold;
                line-height: 1;
                text-transform: uppercase;
                letter-spacing: 0.5px;

                /* 🆕 LÍNEA AÑADIDA PARA EL BORDE */
                /*border: 2px solid var(--series-hero-button-color, #000000); */

                text-shadow: 1px 1px 3px rgba(0,0,0,0.9);
            }
        `;
        document.head.appendChild(style);
    }

    // --- 4. Lógica de Detección Asíncrona (Similar a tu código anterior) ---
    
    // Inicializar estilos inmediatamente
    injectStyles();

    // Utilizamos un MutationObserver para detectar cuando el carrusel se inyecta en el DOM
    const observer = new MutationObserver((mutationsList, obs) => {
        // En lugar de desconectar, simplemente comprobamos si el elemento está para evitar el bucle.
        // Dado que solo leemos y no modificamos la estructura donde el observador escucha, 
        // no necesitamos desconectarlo si solo llamamos a processAllCards.
        processAllCards(); 
    });

    const observerConfig = { childList: true, subtree: true };
    
    // Observar el cuerpo del documento para cambios (inyecciones del carrusel)
    observer.observe(document.body, observerConfig);

    // Ejecución inicial por si el carrusel ya estaba en el DOM al cargar
    setTimeout(processAllCards, 1000); // Pequeña espera para que el carrusel cargue su HTML.

})();