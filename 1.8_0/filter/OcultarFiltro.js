// content.js

// Selector for the main element that contains the "Filters" button
const WATCHLIST_FILTER_SELECTOR = '.erc-watchlist-filtering';

// Selector for the filter's parent container, which is the `<li>`
const PARENT_LI_SELECTOR = 'li.controls-item:has(.erc-watchlist-filtering)';

// The route where the button should be hidden
const EXCLUDED_URL_PATH = "/watchlist";

/**
 * 1. Check the current URL.
 * 2. If it is `/watchlist`, hide the button.
 * 3. If it is not `/watchlist`, make sure the button (or its container) is visible.
 */
function manageWatchlistFilterVisibility() {
    const currentPath = window.location.pathname;
    const isWatchlistPage = currentPath.includes(EXCLUDED_URL_PATH);
    
    // Use the parent `<li>` selector for more stable targeting
    const filterElement = document.querySelector(PARENT_LI_SELECTOR); 

    if (!filterElement) {
        // console.log("Watchlist filter container not found yet.");
        return; // Exit if the element has not been added to the DOM yet
    }

    // --- VISIBILITY LOGIC ---
    if (isWatchlistPage) {
        // On `/watchlist`, hide it safely.
        // Use `display: none` so the MutationObserver can restore it on other pages.
        filterElement.style.display = 'none';
        // console.log("Watchlist Filter: Ocultado en /watchlist.");
    } else {
        // On every other page, restore visibility.
        // If the element exists, force it back to its normal layout mode.
        filterElement.style.display = ''; // Restore the normal `<li>` display
        // console.log("Watchlist Filter: Visible on another page.");
    }
}


// -------------------------------------------------------------------
// 2. WATCHERS (ensure the function runs when the DOM or URL changes)
// -------------------------------------------------------------------

// A) DOM watcher: run when the DOM changes (to catch the initial button render)
const domObserver = new MutationObserver((mutations) => {
    // The Watchlist page often rebuilds the DOM during internal navigation.
    // Re-run the visibility logic whenever the DOM changes.
    manageWatchlistFilterVisibility();
});

// Observe a broad node (`body` / `documentElement`) to catch late filter injection.
domObserver.observe(document.body || document.documentElement, {
    childList: true,
    subtree: true,
});


// B) URL watcher (history/SPA): detect soft navigation without a full reload.
// This ensures the logic reruns when moving between `/watchlist` and other pages.

const originalPushState = history.pushState;
history.pushState = function() {
    originalPushState.apply(this, arguments);
    // Small delay so the URL has time to fully update
    setTimeout(manageWatchlistFilterVisibility, 50); 
};

window.addEventListener('popstate', manageWatchlistFilterVisibility);
// `popstate` fires when the browser back/forward buttons are used

// Run once on initial page load
manageWatchlistFilterVisibility(); 

console.log('✅ Watchlist filter button visibility management enabled.');
