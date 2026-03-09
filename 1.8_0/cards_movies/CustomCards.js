(function () {

    console.log("🎬 Crunchyroll Custom Browser Cards with infinite scroll initializing...");

    // =========================================================================
    // 🚀 MAIN LOGIC: WRAP THE ENTIRE FLOW IN A SINGLE ASYNC FUNCTION
    // =========================================================================
    async function initializeCustomCards() {
        console.log("Getting the user region for regional blocking...");
        let userRegion = '';

        // -------------------------------------------------------------------------
        // STEP 1: GET the user region (USING THE SERVICE WORKER)
        // -------------------------------------------------------------------------
        try {
            // Assume chrome.runtime.sendMessage is available in the extension content-script context
            const response = await chrome.runtime.sendMessage({ action: "getRegion" });

            if (response && response.error) {
                throw new Error(response.error);
            }
            
            userRegion = response ? response.region || '' : '';
            
            console.log("Detected region:", userRegion || "Not detected (loading all cards by default)");

        } catch (error) {
            console.error("Error getting the region (loading all cards by default):", error);
            userRegion = ''; // Ensure all cards load if region detection fails
        }


        // -------------------------------------------------------------------------
        // STEP 2: LOAD cards from the JSON file ("database/NewCardsCR.json")
        // -------------------------------------------------------------------------
        let customCards = []; // Initialize the variable

        try {
            // Use chrome.runtime.getURL to get the safe file path
            const url = chrome.runtime.getURL('database/NewCardsCR.json');
            console.log(`Loading card list from URL: ${url}`);
            
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Error ${response.status}: Could not load the JSON file.`);
            }
            
            // Assign the loaded data to the existing customCards variable
            customCards = await response.json();
            console.log(`✅ ${customCards.length} cards loaded successfully from JSON.`);

        } catch (error) {
            console.error("❌ Critical error while loading custom cards. The script is stopping.", error);
            return; // Stop execution if cards cannot be loaded
        }
        
        // -------------------------------------------------------------------------
        // STEP 3: Filter cards by user region (dual-logic handling)
        // -------------------------------------------------------------------------
        const filteredCards = customCards.filter(card => {
            // If the region was not detected, or there are no control lists, show the card
            if (!userRegion) {
                return true;
            }

            // 1. Handle the exclusion list (blockedRegions)
            if (card.blockedRegions && Array.isArray(card.blockedRegions) && card.blockedRegions.length > 0) {
                const isBlocked = card.blockedRegions.includes(userRegion);
                if (isBlocked) {
                    console.log(`Card "${card.title}" BLOCKED in region: ${userRegion} (exclusion).`);
                }
                // If it is blocked, return false (do not show it).
                return !isBlocked;
            }

            // 2. Handle the inclusion list (availableRegions)
            // If blockedRegions is missing and availableRegions exists, use it.
            if (card.availableRegions && Array.isArray(card.availableRegions) && card.availableRegions.length > 0) {
                const isAvailable = card.availableRegions.includes(userRegion);
                if (!isAvailable) {
                    console.log(`Card "${card.title}" HIDDEN in region: ${userRegion} (inclusion).`);
                }
                // Only return true if it is available (show it).
                return isAvailable;
            }

            // 3. Default case: if there is no block list or availability list, show it.
            return true;
        });

        // -------------------------------------------------------------------------
        // STEP 4: Render and observer functions (must use filteredCards)
        // -------------------------------------------------------------------------

        function createCrunchyCard(item) {
            const div = document.createElement("div");
            div.className = "browse-card";
            div.innerHTML = `
            <div class="browse-card--esJdT">
                <a href="${item.link}" class="browse-card__poster-wrapper--pU-AW">
                <div class="content-image--3na7E content-image--is-sized--SOai1 browse-card__poster--l05TD">
                    <div class="content-image-figure-wrapper--pKs17 content-image__figure-wrapper--TRCnl">
                    <div class="content-image-figure-wrapper__figure-sizer--SH2-x content-image__figure-sizer--is-background-type-one--Eo1qr">
                        <svg class="content-image-figure-wrapper__sizer---PAKo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 3" aria-hidden="true"></svg>
                        <figure class="content-image__figure--7vume">
                        <img class="content-image__image--7tGlg"
                                src="${item.image}"
                                alt="${item.title}"
                                style="object-fit:cover;width:100%;height:100%;">
                        </figure>
                    </div>
                    </div>
                </div>
                </a>

                <div class="browse-card__body--yGjzX">
                <h3 class="text--gq6o- text--is-m--pqiL- browse-card__title--YK28O">
                    <a href="${item.link}" class="browse-card__title-link--SLlRM">${item.title}</a>
                </h3>
                <div class="browse-card__footer--eSAmN">
                    <div class="meta-tags--o8OYw">
                    <div class="meta-tags__tag-wrapper--fzf-1 meta-tags__tag-wrapper--is-inline--ug1Il">
                        <span class="text--gq6o- text--is-m--pqiL-">${item.subtitle}</span>
                    </div>
                    </div>
                </div>
                </div>

                <div class="browse-card-hover--CxFWw browse-card__hover--1xj0F">
                <div class="browse-card-hover__content--aD-bn">
                    <a href="${item.link}" class="browse-card-hover__poster-wrapper--Yf-IK">
                    <div class="content-image--3na7E">
                        <figure class="content-image__figure--7vume">
                        <img class="content-image__image--7tGlg"
                                src="${item.image}"
                                alt="${item.title}"
                                style="object-fit:cover;width:100%;height:100%;">
                        </figure>
                    </div>
                    </a>

                    <a class="browse-card-hover__link--0BAl-" href="${item.link}"></a>

                    <div class="browse-card-hover__body--YBh2e">
                    <h3 class="text--gq6o- text--is-m--pqiL- browse-card-hover__title--8m4Az">
                        <a href="${item.link}" class="browse-card-hover__title-link--A6aAw">${item.title}</a>
                    </h3>

                    <div class="browse-card-hover__rating-wrapper---39eT">
                        <div class="browse-card-hover__rating-count--ep-6L">
                        <div class="star-rating-short-static--qkdpc star-rating-short-static--is-small--WAjB2">
                            <p class="text--gq6o- text--is-m--pqiL- star-rating-short-static__rating--bdAfR">${item.rating}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="star-rating-short-static__star-icon--JLlR-">
                            <path d="M15.266 8.352L11.988 1.723 8.73 8.352 1.431 9.397 6.71 14.528 5.465 21.849 11.999 18.39 18.544 21.85 17.285 14.528 22.57 9.398z"></path>
                            </svg>
                            <p class="text--gq6o- text--is-m--pqiL- star-rating-short-static__votes-count--h9Sun">${item.votes}</p>
                        </div>
                        </div>
                    </div>

                    <div class="browse-card-hover__meta--aB4TP">
                        <span class="text--gq6o- text--is-m--pqiL- browse-card-hover__movie-meta--ogciy">${item.date}</span>
                    </div>

                    <p class="text--gq6o- text--is-m--pqiL- browse-card-hover__description--e28NH">
                        ${item.description}
                    </p>

                    </div>

                    <div class="browse-card-hover__footer--oK4Wg">
                    <div class="browse-card-hover__footer-icon--lJ3B-">
                    <div><div class="tooltip-target--pW1cv"><button aria-label="Reproducir ${item.title}" tabindex="0" class="tooltip-icon__action-icon-button--KEDNK" data-t="play-button"><svg class="tooltip-icon__action-icon--toIky" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="play-svg" aria-hidden="false" role="img" aria-labelledby="play-svg-72748010-7331-442e-9800-643a5c0a8d4d"><title id="play-svg-72748010-7331-442e-9800-643a5c0a8d4d">Reproducir</title><path d="M5.944 3C5.385 3 5 3.445 5 4.22v16.018c0 .771.384 1.22.945 1.22.234 0 .499-.078.779-.243l13.553-7.972c.949-.558.952-1.468 0-2.028L6.724 3.243C6.444 3.078 6.178 3 5.944 3m1.057 2.726l11.054 6.503L7 18.732l.001-13.006"></path></svg>
                    </button></div></div></div>
                    <div class="browse-card-hover__footer-icon--lJ3B-">
                    <div class="tooltip-target--pW1cv"><button aria-label="Agregar ${item.title} a la lista de seguimiento" tabindex="0" class="tooltip-icon__action-icon-button--KEDNK" data-t="add-to-watchlist-btn"><svg class="tooltip-icon__action-icon--toIky" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="watchlist-svg" aria-hidden="false" role="img" aria-labelledby="watchlist-svg-20afe80b-8bf3-48a6-8a4a-282d1eb2e9cb"><title id="watchlist-svg-20afe80b-8bf3-48a6-8a4a-282d1eb2e9cb">Lista de seguimiento</title><path d="M17 18.113l-3.256-2.326A2.989 2.989 0 0 0 12 15.228c-.629 0-1.232.194-1.744.559L7 18.113V4h10v14.113zM18 2H6a1 1 0 0 0-1 1v17.056c0 .209.065.412.187.581a.994.994 0 0 0 1.394.233l4.838-3.455a1 1 0 0 1 1.162 0l4.838 3.455A1 1 0 0 0 19 20.056V3a1 1 0 0 0-1-1z"></path></svg>
                    </button></div></div>
                    <div class="browse-card-hover__footer-icon--lJ3B-">
                    <div class="tooltip-target--pW1cv"><button aria-label="Agregar ${item.title} a una Crunchylista" tabindex="0" class="tooltip-icon__action-icon-button--KEDNK" data-t="add-to-custom-list"><svg class="tooltip-icon__action-icon--toIky" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="add-svg" aria-hidden="false" role="img" aria-labelledby="add-svg-44e51886-6048-4b51-a9a1-f776f7a74950"><title id="add-svg-44e51886-6048-4b51-a9a1-f776f7a74950">Agregar</title><path d="M13 3v8h8v2h-8v8h-2v-8H3v-2h8V3z"></path></svg>
                    </button></div></div>

                    </div>
                </div>
                </div>
            `;
            return div;
        }

        // This function must use filteredCards
        function addCustomCards(container) {
            if (!container.dataset.customCardsAdded) {
                filteredCards.forEach(item => { // Use filteredCards
                    const card = createCrunchyCard(item);
                    container.appendChild(card);
                });
                container.dataset.customCardsAdded = "true";
                console.log(`✅ ${filteredCards.length} custom cards added to the container`);
            }
        }

        function observeContainer() {
            const observer = new MutationObserver((mutations) => {
                const container = document.querySelector(".erc-browse-cards-collection");
                if (container) {
                    addCustomCards(container);
                    // After the first injection, the observer could be stopped if cards only
                    // ever need to be added to the first collection. Since this supports
                    // infinite scroll, keep observing for dynamically rendered containers.
                }
            });

            // Observe the body in case the collection loads dynamically
            observer.observe(document.body, { childList: true, subtree: true });
        }

        // -------------------------------------------------------------------------
        // STEP 5: Render Execution
        // -------------------------------------------------------------------------

        // 🔹 Start observing
        observeContainer();

        // 🔹 If the container already exists on initial load
        const containerInit = document.querySelector(".erc-browse-cards-collection");
        if (containerInit) addCustomCards(containerInit);

    } // End initializeCustomCards

    // 🚀 Run the async initialization function
    initializeCustomCards();

})();
