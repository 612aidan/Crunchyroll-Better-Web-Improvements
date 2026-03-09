(function() {
    'use strict';

    const style = document.createElement("style");
    style.textContent = `
        /* 1. Correct fixed positioning */
        .erc-sticky-header.state-sticky {
            inset-block-start: var(--cx-header-height, 56px) !important;
            z-index: 101 !important;
            position: fixed !important;
            width: 100% !important;
            /* Apply transform: translateY(0) by default to neutralize jumpiness */
            transform: translateY(0) !important; 
        }

        /* 2. scroll-padding-top adjustment */
        body {
            scroll-padding-top: calc(var(--cx-header-height, 56px) + var(--sub-header-height, 60px));
        }

        /* 3. Key fix: neutralize the animation that causes the jump */
        body.scrolling-down .erc-sticky-header {
            transform: translateY(0) !important; /* Force 0 so it does not shift by 5px */
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        body.scrolling-up .erc-sticky-header {
            transform: translateY(0) !important; /* Force 0 */
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }
    `;
    document.head.appendChild(style);

    // Selectores
    const mainHeader = document.querySelector('.erc-large-header .header-content'); 
    const subHeader = document.querySelector('.erc-sticky-header');

    if (mainHeader && subHeader) {
        // --- Height configuration logic ---
        const mainHeight = mainHeader.offsetHeight;
        document.body.style.setProperty("--cx-header-height", mainHeight + "px");

        const subHeight = subHeader.offsetHeight; 
        document.body.style.setProperty("--sub-header-height", subHeight + "px");

        subHeader.style.setProperty("--initial-sticky-pos", mainHeight + "px"); 

        // Reintroduce the scroll logic so the state-sticky class and
        // scrolling-up/down classes are still applied, even though CSS neutralizes the animation.
        
        let lastScroll = 0;
        window.addEventListener("scroll", () => {
            const current = window.scrollY;

            // 1. Apply the state-sticky class once scroll passes the main header height
            if (current > mainHeight) {
                subHeader.classList.add('state-sticky');
            } else {
                 // Option 1 (current): keep the secondary header visible only after scrolling down
                // subHeader.classList.remove('state-sticky');
                
                // Option 2: keep the secondary header permanently pinned
                // subHeader.classList.add('state-sticky'); 
            }

            // 2. Apply scroll-direction classes for shadows and animations
            if (current > lastScroll) {
                document.body.classList.add("scrolling-down");
                document.body.classList.remove("scrolling-up");
            } else {
                document.body.classList.add("scrolling-up");
                document.body.classList.remove("scrolling-down");
            }

            lastScroll = current <= 0 ? 0 : current;
        });
    }
})();
