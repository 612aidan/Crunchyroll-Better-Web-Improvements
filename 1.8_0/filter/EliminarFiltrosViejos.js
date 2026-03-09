
(function(){

    // ► Eliminar opción "Doblado" si existe
    function eliminarDobladoEs() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let idiomaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('idioma')) {
            idiomaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!idiomaSection) return;
        idiomaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'doblado' || txt === 'dublados' || txt === 'dubbed' || txt === 'doublage' || txt === 'synchronisiert' || txt === 'doppiati' || txt === 'bertakarir' || txt === 'субтитры' || txt === 'مترجم' || txt === 'ऊपशीर्षक सहित') {
            el.remove();
            console.log('🗑️ Option "Dubbed" removed.');
          }
        });
      } catch (err) { console.error('eliminarDoblado error', err); }
    }


    // ► Eliminar opción "Subtitulado" si existe
    function eliminarSubtituladoEs() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let idiomaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('idioma')) {
            idiomaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!idiomaSection) return;
        idiomaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'subtitulado' || txt === 'legendados' || txt === 'subtitled' || txt === 'sous-titrage' || txt === 'untertitelt' || txt === 'sottotitolati' || txt === 'bersulih suara' || txt === 'озвучка' || txt === 'مدبلج' || txt === 'डब्ड') {
            el.remove();
            console.log('🗑️ Option "Subtitled" removed.');
          }
        });
      } catch (err) { console.error('eliminarSubtitulado error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Todos" si existe en Formato
    // -----------------------------
    function eliminarTodosmediaEs() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let formatoSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('formato')) {
            formatoSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!formatoSection) return;
        formatoSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'todos' || txt === 'bce' || txt === 'tutti' || txt === 'semua' || txt === 'الكل' || txt === 'सभी') {
            el.remove();
            console.log('🗑️ Option "All" removed.');
          }
        });
      } catch (err) { console.error('eliminarTodosmedia error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Series" si existe
    // -----------------------------
    function eliminarSeriesEs() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let formatoSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('formato')) {
            formatoSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!formatoSection) return;
        formatoSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
            const txt = el.textContent?.trim().toLowerCase();
            const inputElement = el.querySelector('input[type="radio"]');

            if (txt === 'series' && inputElement && inputElement.value === 'series') {
                // Elimina el elemento que contiene la etiqueta y el input
                el.closest('[data-t="dropdown-option"], .dropdown-radio-option--YH4xr')?.remove() || el.remove(); 
                console.log('🗑️ Option "Series" with value="series" removed.');
          }
        });
      } catch (err) { console.error('eliminarSeries error', err); }
    }

    // -----------------------------
    // Remove the "Movies" option if it exists
    // -----------------------------
    function eliminarPeliculasEs() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let formatoSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('formato')) {
            formatoSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!formatoSection) return;
        formatoSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          const inputElement = el.querySelector('input[type="radio"]');

          if (txt === 'movies' && inputElement && inputElement.value === 'movies') {
             el.closest('[data-t="dropdown-option"], .dropdown-radio-option--YH4xr')?.remove() || el.remove(); 
             console.log('🗑️ Option "Movies" with value="movies" removed.');
          }
        });
      } catch (err) { console.error('removeMoviesOption error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Doblado" ingles si existe
    // -----------------------------
    function eliminarDobladoEn() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let languageSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('language')) {
            languageSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!languageSection) return;
        languageSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'doblado' || txt === 'dublados' || txt === 'dubbed' || txt === 'doublage' || txt === 'synchronisiert' || txt === 'doppiati') {
            el.remove();
            console.log('🗑️ Option "Dubbed" removed.');
          }
        });
      } catch (err) { console.error('eliminarDoblado error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Subtitulado" ingles si existe
    // -----------------------------
    function eliminarSubtituladoEn() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let languageSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('language')) {
            languageSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!languageSection) return;
        languageSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'subtitulado' || txt === 'legendados' || txt === 'subtitled' || txt === 'sous-titrage' || txt === 'untertitelt' || txt === 'sottotitolati') {
            el.remove();
            console.log('🗑️ Option "Subtitled" removed.');
          }
        });
      } catch (err) { console.error('eliminarSubtitulado error', err); }
    }


    // -----------------------------
    // ► Eliminar opción "Todos" ingles si existe en Media
    // -----------------------------
    function eliminarTodosmediaEn() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let mediaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('media')) {
            mediaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!mediaSection) return;
        mediaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'todos' || txt === 'all' || txt === 'tout' || txt === 'alle' || txt === 'tutti') {
            el.remove();
            console.log('🗑️ Option "All" removed.');
          }
        });
      } catch (err) { console.error('eliminarTodosmedia error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Series" si existe
    // -----------------------------
    function eliminarSeriesEn() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let mediaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('media')) {
            mediaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!mediaSection) return;
        mediaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
            const txt = el.textContent?.trim().toLowerCase();
            const inputElement = el.querySelector('input[type="radio"]');

            if (txt === 'series' && inputElement && inputElement.value === 'series') {
                // Elimina el elemento que contiene la etiqueta y el input
                el.closest('[data-t="dropdown-option"], .dropdown-radio-option--YH4xr')?.remove() || el.remove(); 
                console.log('🗑️ Option "Series" with value="series" removed.');
          }
        });
      } catch (err) { console.error('eliminarSeries error', err); }
    }

    // -----------------------------
    // Remove the "Movies" option if it exists
    // -----------------------------
    function eliminarPeliculasEn() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let mediaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('media')) {
            mediaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!mediaSection) return;
        mediaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          const inputElement = el.querySelector('input[type="radio"]');

          if (txt === 'movies' && inputElement && inputElement.value === 'movies') {
             el.closest('[data-t="dropdown-option"], .dropdown-radio-option--YH4xr')?.remove() || el.remove(); 
             console.log('🗑️ Option "Movies" with value="movies" removed.');
          }
        });
      } catch (err) { console.error('removeMoviesOption error', err); }
    }


    // -----------------------------
    // ► Eliminar opción "Doblado" si existe
    // -----------------------------
    function eliminarDobladoDe() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let spracheSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('sprache')) {
            spracheSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!spracheSection) return;
        spracheSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'doblado' || txt === 'dublados' || txt === 'dubbed' || txt === 'doublage' || txt === 'synchronisiert' || txt === 'doppiati') {
            el.remove();
            console.log('🗑️ Option "Dubbed" removed.');
          }
        });
      } catch (err) { console.error('eliminarDoblado error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Subtitulado" si existe
    // -----------------------------
    function eliminarSubtituladoDe() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let spracheSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('sprache')) {
            spracheSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!spracheSection) return;
        spracheSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'subtitulado' || txt === 'legendados' || txt === 'subtitled' || txt === 'sous-titrage' || txt === 'untertitelt' || txt === 'sottotitolati') {
            el.remove();
            console.log('🗑️ Option "Subtitled" removed.');
          }
        });
      } catch (err) { console.error('eliminarSubtitulado error', err); }
    }


    // -----------------------------
    // ► Eliminar opción "Todos" si existe en Inhalte
    // -----------------------------
    function eliminarTodosmediaDe() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let inhalteSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('inhalte')) {
            inhalteSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!inhalteSection) return;
        inhalteSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'alle') {
            el.remove();
            console.log('🗑️ Option "All" removed.');
          }
        });
      } catch (err) { console.error('eliminarTodosmedia error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Series" si existe
    // -----------------------------
    function eliminarSeriesDe() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let inhalteSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('inhalte')) {
            inhalteSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!inhalteSection) return;
        inhalteSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
            const txt = el.textContent?.trim().toLowerCase();
            const inputElement = el.querySelector('input[type="radio"]');

            if (txt === 'serien' && inputElement && inputElement.value === 'series') {
                // Elimina el elemento que contiene la etiqueta y el input
                el.closest('[data-t="dropdown-option"], .dropdown-radio-option--YH4xr')?.remove() || el.remove(); 
                console.log('🗑️ Option "Series" with value="series" removed.');
          }
        });
      } catch (err) { console.error('eliminarSeries error', err); }
    }

    // -----------------------------
    // Remove the "Movies" option if it exists
    // -----------------------------
    function eliminarPeliculasDe() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let inhalteSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('inhalte')) {
            inhalteSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!inhalteSection) return;
        inhalteSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          const inputElement = el.querySelector('input[type="radio"]');

          if (txt === 'filme' && inputElement && inputElement.value === 'movies') {
             el.closest('[data-t="dropdown-option"], .dropdown-radio-option--YH4xr')?.remove() || el.remove(); 
             console.log('🗑️ Option "Movies" with value="movies" removed.');
          }
        });
      } catch (err) { console.error('removeMoviesOption error', err); }
    }


    // -----------------------------
    // ► Eliminar opción "Doblado" si existe
    // -----------------------------
    function eliminarDobladoFr() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let langueSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('langue')) {
            langueSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!langueSection) return;
        langueSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'doblado' || txt === 'dublados' || txt === 'dubbed' || txt === 'doublage' || txt === 'synchronisiert' || txt === 'doppiati') {
            el.remove();
            console.log('🗑️ Option "Dubbed" removed.');
          }
        });
      } catch (err) { console.error('eliminarDoblado error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Subtitulado" si existe
    // -----------------------------
    function eliminarSubtituladoFr() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let langueSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('langue')) {
            langueSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!langueSection) return;
        langueSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'subtitulado' || txt === 'legendados' || txt === 'subtitled' || txt === 'sous-titrage' || txt === 'untertitelt' || txt === 'sottotitolati') {
            el.remove();
            console.log('🗑️ Option "Subtitled" removed.');
          }
        });
      } catch (err) { console.error('eliminarSubtitulado error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Todos" si existe en Média
    // -----------------------------
    function eliminarTodosmediaFr() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let médiaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('média')) {
            médiaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!médiaSection) return;
        médiaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'tout') {
            el.remove();
            console.log('🗑️ Option "All" removed.');
          }
        });
      } catch (err) { console.error('eliminarTodosmedia error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Series" si existe
    // -----------------------------
    function eliminarSeriesFr() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let médiaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('média')) {
            médiaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!médiaSection) return;
        médiaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
            const txt = el.textContent?.trim().toLowerCase();
            const inputElement = el.querySelector('input[type="radio"]');

            if (txt === 'séries' && inputElement && inputElement.value === 'series') {
                // Elimina el elemento que contiene la etiqueta y el input
                el.closest('[data-t="dropdown-option"], .dropdown-radio-option--YH4xr')?.remove() || el.remove(); 
                console.log('🗑️ Option "Series" with value="series" removed.');
          }
        });
      } catch (err) { console.error('eliminarSeries error', err); }
    }

    // -----------------------------
    // Remove the "Movies" option if it exists
    // -----------------------------
    function eliminarPeliculasFr() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let médiaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('média')) {
            médiaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!médiaSection) return;
        médiaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          const inputElement = el.querySelector('input[type="radio"]');

          if (txt === 'films' && inputElement && inputElement.value === 'movies') {
             el.closest('[data-t="dropdown-option"], .dropdown-radio-option--YH4xr')?.remove() || el.remove(); 
             console.log('🗑️ Option "Movies" with value="movies" removed.');
          }
        });
      } catch (err) { console.error('removeMoviesOption error', err); }
    }


    // -----------------------------
    // ► Eliminar opción "Doblado" si existe
    // -----------------------------
    function eliminarDobladoId() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let bahasaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('bahasa')) {
            bahasaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!bahasaSection) return;
        bahasaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'doblado' || txt === 'dublados' || txt === 'dubbed' || txt === 'doublage' || txt === 'synchronisiert' || txt === 'doppiati' || txt === 'bertakarir' || txt === 'субтитры' || txt === 'مترجم' || txt === 'ऊपशीर्षक सहित') {
            el.remove();
            console.log('🗑️ Option "Dubbed" removed.');
          }
        });
      } catch (err) { console.error('eliminarDoblado error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Subtitulado" si existe
    // -----------------------------
    function eliminarSubtituladoId() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let bahasaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('bahasa')) {
            bahasaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!bahasaSection) return;
        bahasaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'subtitulado' || txt === 'legendados' || txt === 'subtitled' || txt === 'sous-titrage' || txt === 'untertitelt' || txt === 'sottotitolati' || txt === 'bersulih suara' || txt === 'озвучка' || txt === 'مدبلج' || txt === 'डब्ड') {
            el.remove();
            console.log('🗑️ Option "Subtitled" removed.');
          }
        });
      } catch (err) { console.error('eliminarSubtitulado error', err); }
    }


    // -----------------------------
    // ► Eliminar opción "Todos" si existe en Media
    // -----------------------------
    function eliminarTodosmediaId() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let mediaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('media')) {
            mediaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!mediaSection) return;
        mediaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'todos' || txt === 'bce' || txt === 'tutti' || txt === 'semua' || txt === 'الكل' || txt === 'सभी') {
            el.remove();
            console.log('🗑️ Option "All" removed.');
          }
        });
      } catch (err) { console.error('eliminarTodosmedia error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Series" si existe
    // -----------------------------
    function eliminarSeriesId() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let mediaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('media')) {
            mediaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!mediaSection) return;
        mediaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
            const txt = el.textContent?.trim().toLowerCase();
            const inputElement = el.querySelector('input[type="radio"]');

            if (txt === 'seri' && inputElement && inputElement.value === 'series') {
                // Elimina el elemento que contiene la etiqueta y el input
                el.closest('[data-t="dropdown-option"], .dropdown-radio-option--YH4xr')?.remove() || el.remove(); 
                console.log('🗑️ Option "Series" with value="series" removed.');
          }
        });
      } catch (err) { console.error('eliminarSeries error', err); }
    }

    // -----------------------------
    // Remove the "Movies" option if it exists
    // -----------------------------
    function eliminarPeliculasId() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let mediaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('media')) {
            mediaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!mediaSection) return;
        mediaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          const inputElement = el.querySelector('input[type="radio"]');

          if (txt === 'film' && inputElement && inputElement.value === 'movies') {
             el.closest('[data-t="dropdown-option"], .dropdown-radio-option--YH4xr')?.remove() || el.remove(); 
             console.log('🗑️ Option "Movies" with value="movies" removed.');
          }
        });
      } catch (err) { console.error('removeMoviesOption error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Doblado" si existe
    // -----------------------------
    function eliminarDobladoIt() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let linguaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('lingua')) {
            linguaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!linguaSection) return;
        linguaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'doblado' || txt === 'dublados' || txt === 'dubbed' || txt === 'doublage' || txt === 'synchronisiert' || txt === 'doppiati' || txt === 'bertakarir' || txt === 'субтитры' || txt === 'مترجم' || txt === 'ऊपशीर्षक सहित') {
            el.remove();
            console.log('🗑️ Option "Dubbed" removed.');
          }
        });
      } catch (err) { console.error('eliminarDoblado error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Subtitulado" si existe
    // -----------------------------
    function eliminarSubtituladoIt() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let linguaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('lingua')) {
            linguaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!linguaSection) return;
        linguaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'subtitulado' || txt === 'legendados' || txt === 'subtitled' || txt === 'sous-titrage' || txt === 'untertitelt' || txt === 'sottotitolati' || txt === 'bersulih suara' || txt === 'озвучка' || txt === 'مدبلج' || txt === 'डब्ड') {
            el.remove();
            console.log('🗑️ Option "Subtitled" removed.');
          }
        });
      } catch (err) { console.error('eliminarSubtitulado error', err); }
    }


    // -----------------------------
    // ► Eliminar opción "Todos" si existe en Tipo
    // -----------------------------
    function eliminarTodosmediaIt() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let tipoSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('tipo')) {
            tipoSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!tipoSection) return;
        tipoSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'todos' || txt === 'bce' || txt === 'tutti' || txt === 'semua' || txt === 'الكل' || txt === 'सभी') {
            el.remove();
            console.log('🗑️ Option "All" removed.');
          }
        });
      } catch (err) { console.error('eliminarTodosmedia error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Series" si existe
    // -----------------------------
    function eliminarSeriesIt() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let tipoSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('tipo')) {
            tipoSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!tipoSection) return;
        tipoSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
            const txt = el.textContent?.trim().toLowerCase();
            const inputElement = el.querySelector('input[type="radio"]');

            if (txt === 'serie' && inputElement && inputElement.value === 'series') {
                // Elimina el elemento que contiene la etiqueta y el input
                el.closest('[data-t="dropdown-option"], .dropdown-radio-option--YH4xr')?.remove() || el.remove(); 
                console.log('🗑️ Option "Series" with value="series" removed.');
          }
        });
      } catch (err) { console.error('eliminarSeries error', err); }
    }

    // -----------------------------
    // Remove the "Movies" option if it exists
    // -----------------------------
    function eliminarPeliculasIt() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let tipoSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('tipo')) {
            tipoSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!tipoSection) return;
        tipoSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          const inputElement = el.querySelector('input[type="radio"]');

          if (txt === 'film' && inputElement && inputElement.value === 'movies') {
             el.closest('[data-t="dropdown-option"], .dropdown-radio-option--YH4xr')?.remove() || el.remove(); 
             console.log('🗑️ Option "Movies" with value="movies" removed.');
          }
        });
      } catch (err) { console.error('removeMoviesOption error', err); }
    }


    // -----------------------------
    // ► Eliminar opción "Doblado" si existe
    // -----------------------------
    function eliminarDobladoRu() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let языкSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('язык')) {
            языкSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!языкSection) return;
        языкSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'doblado' || txt === 'dublados' || txt === 'dubbed' || txt === 'doublage' || txt === 'synchronisiert' || txt === 'doppiati' || txt === 'bertakarir' || txt === 'субтитры' || txt === 'مترجم' || txt === 'ऊपशीर्षक सहित') {
            el.remove();
            console.log('🗑️ Option "Dubbed" removed.');
          }
        });
      } catch (err) { console.error('eliminarDoblado error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Subtitulado" si existe
    // -----------------------------
    function eliminarSubtituladoRu() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let языкSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('язык')) {
            языкSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!языкSection) return;
        языкSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'subtitulado' || txt === 'legendados' || txt === 'subtitled' || txt === 'sous-titrage' || txt === 'untertitelt' || txt === 'sottotitolati' || txt === 'bersulih suara' || txt === 'озвучка' || txt === 'مدبلج' || txt === 'डब्ड') {
            el.remove();
            console.log('🗑️ Option "Subtitled" removed.');
          }
        });
      } catch (err) { console.error('eliminarSubtitulado error', err); }
    }


    // -----------------------------
    // ► Eliminar opción "Todos" si existe en Медиа
    // -----------------------------
    function eliminarTodosmediaRu() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let mедиаSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('mедиа')) {
            mедиаSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!mедиаSection) return;
        mедиаSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'todos' || txt === 'bce' || txt === 'tutti' || txt === 'semua' || txt === 'الكل' || txt === 'सभी') {
            el.remove();
            console.log('🗑️ Option "All" removed.');
          }
        });
      } catch (err) { console.error('eliminarTodosmedia error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Series" si existe
    // -----------------------------
    function eliminarSeriesRu() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let mедиаSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('mедиа')) {
            mедиаSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!mедиаSection) return;
        mедиаSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
            const txt = el.textContent?.trim().toLowerCase();
            const inputElement = el.querySelector('input[type="radio"]');

            if (txt === 'сериалы' && inputElement && inputElement.value === 'series') {
                // Elimina el elemento que contiene la etiqueta y el input
                el.closest('[data-t="dropdown-option"], .dropdown-radio-option--YH4xr')?.remove() || el.remove(); 
                console.log('🗑️ Option "Series" with value="series" removed.');
          }
        });
      } catch (err) { console.error('eliminarSeries error', err); }
    }

    // -----------------------------
    // Remove the "Movies" option if it exists
    // -----------------------------
    function eliminarPeliculasRu() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let mедиаSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('mедиа')) {
            mедиаSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!mедиаSection) return;
        mедиаSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          const inputElement = el.querySelector('input[type="radio"]');

          if (txt === 'фильмы' && inputElement && inputElement.value === 'movies') {
             el.closest('[data-t="dropdown-option"], .dropdown-radio-option--YH4xr')?.remove() || el.remove(); 
             console.log('🗑️ Option "Movies" with value="movies" removed.');
          }
        });
      } catch (err) { console.error('removeMoviesOption error', err); }
    }


    // -----------------------------
    // ► Eliminar opción "Doblado" si existe
    // -----------------------------
    function eliminarDobladoPt() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let idiomaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('idioma')) {
            idiomaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!idiomaSection) return;
        idiomaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'doblado' || txt === 'dublados' || txt === 'dubbed' || txt === 'doublage' || txt === 'synchronisiert' || txt === 'doppiati') {
            el.remove();
            console.log('🗑️ Option "Dubbed" removed.');
          }
        });
      } catch (err) { console.error('eliminarDoblado error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Subtitulado" si existe
    // -----------------------------
    function eliminarSubtituladoPt() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let idiomaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('idioma')) {
            idiomaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!idiomaSection) return;
        idiomaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'subtitulado' || txt === 'legendados' || txt === 'subtitled' || txt === 'sous-titrage' || txt === 'untertitelt' || txt === 'sottotitolati') {
            el.remove();
            console.log('🗑️ Option "Subtitled" removed.');
          }
        });
      } catch (err) { console.error('eliminarSubtitulado error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Todos" si existe en Meio
    // -----------------------------
    function eliminarTodosmediaPt() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let meioSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('meio')) {
            meioSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!meioSection) return;
        meioSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'todos') {
            el.remove();
            console.log('🗑️ Option "All" removed.');
          }
        });
      } catch (err) { console.error('eliminarTodosmedia error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Series" si existe
    // -----------------------------
    function eliminarSeriesPt() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let meioSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('meio')) {
            meioSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!meioSection) return;
        meioSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
            const txt = el.textContent?.trim().toLowerCase();
            const inputElement = el.querySelector('input[type="radio"]');

            if (txt === 'séries' && inputElement && inputElement.value === 'series') {
                // Elimina el elemento que contiene la etiqueta y el input
                el.closest('[data-t="dropdown-option"], .dropdown-radio-option--YH4xr')?.remove() || el.remove(); 
                console.log('🗑️ Option "Series" with value="series" removed.');
          }
        });
      } catch (err) { console.error('eliminarSeries error', err); }
    }

    // -----------------------------
    // Remove the "Movies" option if it exists
    // -----------------------------
    function eliminarPeliculasPt() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let meioSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('meio')) {
            meioSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!meioSection) return;
        meioSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          const inputElement = el.querySelector('input[type="radio"]');

          if (txt === 'filmes' && inputElement && inputElement.value === 'movies') {
             el.closest('[data-t="dropdown-option"], .dropdown-radio-option--YH4xr')?.remove() || el.remove(); 
             console.log('🗑️ Option "Movies" with value="movies" removed.');
          }
        });
      } catch (err) { console.error('removeMoviesOption error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Doblado" si existe
    // -----------------------------
    function eliminarDobladoPtbr() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let idiomaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('idioma')) {
            idiomaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!idiomaSection) return;
        idiomaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'doblado' || txt === 'dublados' || txt === 'dubbed' || txt === 'doublage' || txt === 'synchronisiert' || txt === 'doppiati') {
            el.remove();
            console.log('🗑️ Option "Dubbed" removed.');
          }
        });
      } catch (err) { console.error('eliminarDoblado error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Subtitulado" si existe
    // -----------------------------
    function eliminarSubtituladoPtbr() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let idiomaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('idioma')) {
            idiomaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!idiomaSection) return;
        idiomaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'subtitulado' || txt === 'legendados' || txt === 'subtitled' || txt === 'sous-titrage' || txt === 'untertitelt' || txt === 'sottotitolati') {
            el.remove();
            console.log('🗑️ Option "Subtitled" removed.');
          }
        });
      } catch (err) { console.error('eliminarSubtitulado error', err); }
    }


    // -----------------------------
    // ► Eliminar opción "Todos" si existe en Mídia
    // -----------------------------
    function eliminarTodosmediaPtbr() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let mídiaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('mídia')) {
            mídiaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!mídiaSection) return;
        mídiaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          if (txt === 'todos') {
            el.remove();
            console.log('🗑️ Option "All" removed.');
          }
        });
      } catch (err) { console.error('eliminarTodosmedia error', err); }
    }

    // -----------------------------
    // ► Eliminar opción "Series" si existe
    // -----------------------------
    function eliminarSeriesPtbr() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let mídiaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('mídia')) {
            mídiaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!mídiaSection) return;
        mídiaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
            const txt = el.textContent?.trim().toLowerCase();
            const inputElement = el.querySelector('input[type="radio"]');

            if (txt === 'séries' && inputElement && inputElement.value === 'series') {
                // Elimina el elemento que contiene la etiqueta y el input
                el.closest('[data-t="dropdown-option"], .dropdown-radio-option--YH4xr')?.remove() || el.remove(); 
                console.log('🗑️ Option "Series" with value="series" removed.');
          }
        });
      } catch (err) { console.error('eliminarSeries error', err); }
    }

    // -----------------------------
    // Remove the "Movies" option if it exists
    // -----------------------------
    function eliminarPeliculasPtbr() {
      try {
        const headings = Array.from(document.querySelectorAll('h5'));
        let mídiaSection = null;
        for (const h of headings) {
          if (h.textContent && h.textContent.trim().toLowerCase().includes('mídia')) {
            mídiaSection = h.closest('[data-t="dropdown-section"], .dropdown__section--RGXKp') || h.parentElement;
            break;
          }
        }
        if (!mídiaSection) return;
        mídiaSection.querySelectorAll('label, .dropdown-radio-option--YH4xr').forEach(el => {
          const txt = el.textContent?.trim().toLowerCase();
          const inputElement = el.querySelector('input[type="radio"]');

          if (txt === 'filmes' && inputElement && inputElement.value === 'movies') {
             el.closest('[data-t="dropdown-option"], .dropdown-radio-option--YH4xr')?.remove() || el.remove(); 
             console.log('🗑️ Option "Movies" with value="movies" removed.');
          }
        });
      } catch (err) { console.error('removeMoviesOption error', err); }
    }


// -----------------------------
// ► Inicialización y observadores para el menú
// -----------------------------
setTimeout(() => {
  eliminarDobladoEs();
  eliminarSubtituladoEs();
  eliminarSeriesEs();
  eliminarPeliculasEs();
  eliminarTodosmediaEs();
  eliminarDobladoEn();
  eliminarSubtituladoEn();
  eliminarSeriesEn();
  eliminarPeliculasEn();
  eliminarTodosmediaEn();
  eliminarDobladoDe();
  eliminarSubtituladoDe();
  eliminarSeriesDe();
  eliminarPeliculasDe();
  eliminarTodosmediaDe();
  eliminarDobladoFr();
  eliminarSubtituladoFr();
  eliminarSeriesFr();
  eliminarPeliculasFr();
  eliminarTodosmediaFr();
  eliminarDobladoId();
  eliminarSubtituladoId();
  eliminarSeriesId();
  eliminarPeliculasId();
  eliminarTodosmediaId();
  eliminarDobladoIt();
  eliminarSubtituladoIt();
  eliminarSeriesIt();
  eliminarPeliculasIt();
  eliminarTodosmediaIt();
  eliminarDobladoRu();
  eliminarSubtituladoRu();
  eliminarSeriesRu();
  eliminarPeliculasRu();
  eliminarTodosmediaRu();
  eliminarDobladoPt();
  eliminarSubtituladoPt();
  eliminarSeriesPt();
  eliminarPeliculasPt();
  eliminarTodosmediaPt();
  eliminarDobladoPtbr();
  eliminarSubtituladoPtbr();
  eliminarSeriesPtbr();
  eliminarPeliculasPtbr();
  eliminarTodosmediaPtbr();

}, 800); // <-- ¡Aquí cierra el setTimeout!

// volver a intentar si el DOM cambia (cuando el menú se renderiza)
const menuObserver = new MutationObserver(() => {
  eliminarDobladoEs();
  eliminarSubtituladoEs();
  eliminarSeriesEs();
  eliminarPeliculasEs();
  eliminarTodosmediaEs();
  eliminarDobladoEn();
  eliminarSubtituladoEn();
  eliminarSeriesEn();
  eliminarPeliculasEn();
  eliminarTodosmediaEn();
  eliminarDobladoDe();
  eliminarSubtituladoDe();
  eliminarSeriesDe();
  eliminarPeliculasDe();
  eliminarTodosmediaDe();
  eliminarDobladoFr();
  eliminarSubtituladoFr();
  eliminarSeriesFr();
  eliminarPeliculasFr();
  eliminarTodosmediaFr();
  eliminarDobladoId();
  eliminarSubtituladoId();
  eliminarSeriesId();
  eliminarPeliculasId();
  eliminarTodosmediaId();
  eliminarDobladoIt();
  eliminarSubtituladoIt();
  eliminarSeriesIt();
  eliminarPeliculasIt();
  eliminarTodosmediaIt();
  eliminarDobladoRu();
  eliminarSubtituladoRu();
  eliminarSeriesRu();
  eliminarPeliculasRu();
  eliminarTodosmediaRu();
  eliminarDobladoPt();
  eliminarSubtituladoPt();
  eliminarSeriesPt();
  eliminarPeliculasPt();
  eliminarTodosmediaPt();
  eliminarDobladoPtbr();
  eliminarSubtituladoPtbr();
  eliminarSeriesPtbr();
  eliminarPeliculasPtbr();
  eliminarTodosmediaPtbr();

});
menuObserver.observe(document.body, { childList: true, subtree: true });

})();
