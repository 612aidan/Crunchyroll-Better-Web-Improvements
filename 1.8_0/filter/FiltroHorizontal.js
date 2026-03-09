(function() {

/**
 * Content script that modifies the page filter panel.
 * It uses a MutationObserver to wait for the filter panel to load and
 * reapplies the styles whenever the DOM changes to handle dynamic open/close events.
 * Dynamic width logic and margin adjustments are included to keep the sections
 * vertically aligned (Language, Format, etc.) in a very compact layout.
 */

// Flag to avoid applying duplicate styles if the observer fires too often.
let isLayoutApplied = false;

function applyHorizontalLayout(panel) {
    // 1. Calculate the required panel width based on the number of sections
    const sections = panel.querySelectorAll(".dropdown__section--RGXKp");
    
    if (sections.length < 2) {
        isLayoutApplied = false;
        return;
    }

    const numSections = sections.length;
    // Adjust overall panel width to match the tighter spacing
    let targetPanelWidth = 450; // Reduced width for 2 sections
    
    if (numSections >= 3) {
        // Adjustment for 3 or more sections. Reduced to 520px for a tighter layout.
        targetPanelWidth = 520; 
    }
    
    // Exit if the layout is already applied with the calculated width
    if (isLayoutApplied && panel.style.width === `${targetPanelWidth}px`) {
        return;
    }
    
    isLayoutApplied = true;

    console.log(`✅ Main panel detected, injecting styles. Sections detected: ${numSections}. Target width: ${targetPanelWidth}px`);

    const targetElement = sections[0].parentNode;

    if (!targetElement || targetElement === panel) {
        console.error("❌ Failed to find the parent section container.");
        isLayoutApplied = false;
        return;
    }
    
    // --- STYLING LOGIC FOR ALIGNMENT AND WIDTH ---

    // 2.1 Apply a horizontal layout to the target element (Language/Format container)
    targetElement.style.cssText += `
        width: auto !important;
        max-width: none !important;
        /* Crucial for alignment: remove any top margin/padding from the container */
        margin: 0 !important; 
        padding-top: 0 !important; 

        display: flex !important;
        flex-direction: row !important;
        flex-wrap: nowrap !important;
        justify-content: flex-start !important;
        /* Align section content at the top */
        align-items: flex-start !important; 
        /* Reduce horizontal spacing so sections sit closer together */
        gap: 5px !important; 
    `;
    
    // 2.2 Expand the outer panel to the calculated width
    panel.style.cssText += `
        width: ${targetPanelWidth}px !important; 
        left: auto !important;
        right: 20px !important; 
        min-width: ${targetPanelWidth}px !important;
        height: auto !important;
        max-height: 90vh !important; 
    `;

    // 3. Adjust the inner sections (Language, Format, Streaming, etc.)
    sections.forEach(sec => {
        sec.style.cssText += `
            /* Ensure the columns grow and split space evenly */
            flex: 1 1 0% !important; 
            min-width: 120px !important; 

            max-height: none !important; 
            height: auto !important;
            overflow-y: visible !important; 
            padding-right: 0 !important; 
            padding-bottom: 0 !important;
            
            display: flex !important;
            flex-direction: column !important;
            /* Minimize vertical spacing between items */
            gap: 2px !important; 
        `;
        
        // The section title is an H5.
        const title = sec.querySelector('h5');
        if(title) {
            title.style.cssText += `
                width: 100% !important;
                font-weight: bold !important;
                /* Reduce spacing below the title */
                margin-bottom: 6px !important; 
                margin-top: 0 !important; 
            `;
        }
    });
    
    // 4. Clear scroll and padding from the intermediate container
    // This is the key container that forces scrolling.
    const scrollWrapperContent = panel.querySelector('.dropdown-content__scrollable-content--X8fsP');
    if(scrollWrapperContent) {
        scrollWrapperContent.style.cssText += `
            /* Remove fixed height/max height and force content visibility */
            max-height: none !important;
            height: auto !important;
            overflow: visible !important;
            padding: 0 !important;
        `;
    }
    
    // 5. Optional: hide the mobile header and footer
    const mobileHeader = panel.querySelector('.dropdown-mobile-heading--e2dKK');
    if(mobileHeader) mobileHeader.style.display = 'none';

    const footer = panel.querySelector('.dropdown-content__footer--dqVM8');
    if(footer) footer.style.display = 'none';

    console.log("✨ Horizontal layout injected and aligned automatically (Ultra-Compact Mode).");
}

// ------------------------------------------------
// Observation Logic
// ------------------------------------------------

const filterDropdownClass = 'dropdown-content--5b5F7';

/**
 * Observe the body and apply the layout when the panel becomes visible.
 * Also reset the applied-layout flag when the panel closes.
 */
const observer = new MutationObserver((mutationsList, observer) => {
    const panel = document.querySelector(`.${filterDropdownClass}`);
    
    if (panel) {
        // The panel is in the DOM, so apply the layout.
        applyHorizontalLayout(panel);
    } else {
        // The panel is not in the DOM, or it was removed/hidden.
        isLayoutApplied = false;
    }
});

// Start observing the body and all of its subtrees for changes.
observer.observe(document.body, { childList: true, subtree: true });

console.log("Starting DOM observation for the filter panel (persistent)...");

})();
