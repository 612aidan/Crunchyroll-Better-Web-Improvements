// Store the current URL so page changes can be detected
let currentUrl = window.location.href;
let observerActivo = null; // Keep a reference to the main observer instance

/**
 * 1. Observe the DOM and run an action once the required selectors are present.
 * (Written so it can be called repeatedly.)
 * @param {string} selectorElementoAMover CSS selector for the element to move.
 * @param {string} selectorElementoDestino CSS selector for the destination anchor.
 * @param {function} callback Function to run once both elements are found.
 */
function observarYEjecutar(selectorElementoAMover, selectorElementoDestino, callback) {
    // Disconnect any active main observer before creating a new one
    if (observerActivo) {
        observerActivo.disconnect();
    }
    
    // Execution function that stops the observer once the elements are found
    const ejecucion = () => {
        const elementoAMover = document.querySelector(selectorElementoAMover);
        const elementoDestino = document.querySelector(selectorElementoDestino);

        if (elementoAMover && elementoDestino) {
            // Important: disconnect the observer only AFTER running the action
            if (observerActivo) {
                 observerActivo.disconnect(); 
            }
            callback(elementoAMover, elementoDestino);
            return true;
        }
        return false;
    };
    
    // Try running immediately (quick solution if it is already loaded)
    if (ejecucion()) {
        return; 
    }

    // Create the MutationObserver
    const observer = new MutationObserver((mutations, obs) => {
        // Run the execution function. If it succeeds, observation stops.
        ejecucion();
    });

    // Store the observer reference so it can be disconnected later
    observerActivo = observer; 

    // Start observing the document body
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
}

/**
 * 2. Wrap the moved element in a new container with the desired class.
 */
function moverSeasonSelect(seasonSelect, wrapperDestino) {
    // ... (Move the element into the new `.container--cq5XE` wrapper here)
    
    // Avoid creating the wrapper if the element was already moved
    // (`observarYEjecutar` should already prevent this by disconnecting).
    if (seasonSelect.parentNode.classList.contains('container--cq5XE')) {
        return; 
    }
    
    const customWrapper = document.createElement('div');
    customWrapper.classList.add('container--cq5XE'); 
    customWrapper.id = 'custom-season-select-wrapper'; 

    wrapperDestino.parentNode.insertBefore(customWrapper, wrapperDestino);
    customWrapper.appendChild(seasonSelect);
    
    seasonSelect.classList.add('custom-moved-season-select-child'); 
    
    console.log("Season select moved and wrapped in .container--cq5XE.");
}


// --- 3. NEW LOGIC: URL CHANGE OBSERVER ---

/**
 * Detect whether the URL changed and restart observation when it does.
 * This uses a second MutationObserver on `<title>` / `<head>`
 * because many SPAs change the title during navigation.
 */
function observarCambioDePagina() {
    const urlObserver = new MutationObserver((mutations, obs) => {
        // Check whether the URL or the title changed, both of which indicate navigation
        if (window.location.href !== currentUrl || mutations.some(m => m.target.tagName === 'TITLE')) {
            
            // If the URL actually changed
            if (window.location.href !== currentUrl) {
                currentUrl = window.location.href; // Update the reference URL
                
                console.log("URL change detected. Restarting observation.");
                
                // Restart the observe/move process
                observarYEjecutar(
                    '.seasons-select', 
                    '#custom-season-info-wrapper-id', 
                    moverSeasonSelect
                );
            }
        }
    });

    // Observe `<html>` for general page changes
    urlObserver.observe(document.documentElement, {
        childList: true, // Useful for detecting body/head changes
        subtree: true,
        attributes: true // Useful if the URL changes without a visible node change
    });
    
    // Also observe `<title>` explicitly because SPAs often update it
    const titleElement = document.querySelector('title');
    if (titleElement) {
        urlObserver.observe(titleElement, { childList: true });
    }
}


// --- 4. START ---

// 1. Inject CSS (this only needs to happen once)
const style = document.createElement('style');
style.textContent = `
    .custom-moved-season-select-child {
        margin-bottom: 0 !important; 
        width: 100% !important; 
        box-sizing: border-box;
    }
    #custom-season-select-wrapper {
        margin-bottom: -50px !important; 
    }
`;
document.head.appendChild(style);


// 2. Start the observe/move process on initial load
observarYEjecutar(
    '.seasons-select',              
    '#custom-season-info-wrapper-id', 
    moverSeasonSelect
);

// 3. Start page-change detection so the process can reactivate after navigation
observarCambioDePagina();
