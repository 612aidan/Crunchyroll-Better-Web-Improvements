(function() {

const FILLER_SETTING_KEY = 'fillerLabel'; 
const GLOBAL_DATA_KEY = 'CRB_FILLER_DATA';

// ----------------------------------------------------------------------
// MAIN FEATURE FUNCTION (CONTROLLED BY THE TOGGLE)
// ----------------------------------------------------------------------

function applyFillerLabel() {


// content_ep_type.js - episode-type injection logic (canon/filler)

// --- SELECTOR CONSTANTS ---
const THUMBNAIL_CONTAINER_SELECTOR2 = '.playable-thumbnail--HKMt2';
const EPISODE_CARD_SELECTOR2 = '.playable-card--GnRbX';
const EPISODE_TITLE_SELECTOR2 = '.playable-card__title--rgmp7';
const MUSIC_EXCLUSION_SELECTOR2 = '[data-t="featured-music-carousel"]'; 
const HOVER_EXCLUSION_SELECTOR2 = '.playable-card__hover-info--OueGA';

// --- BADGE CONSTANTS ---
const EPISODE_TYPE_ID_SELECTOR = 'cr-episode-type-badge';
const TYPE_INJECTED_FLAG = 'data-type-injected';

// --- COLOR MAP ---
const TYPE_COLORS = {
    'Manga Canon': '#28a745',
    'Anime Canon': '#17a2b8',
    'Mixed Canon/Filler': '#ffc107',
    'Filler': '#dc3545',
    'Special': '#6f42c1',
    'Light Novel Canon': '#ff6decff',
};

// --- LOOKUP CONTROL CONSTANTS ---
// Level 1: Series where all episodes default to "Anime Canon"
const CANON_SERIES_IDS = [
    'GYEXQKJG6', // DR STONE
    'GP5HJ84P7', // GACHIAKUTA
    'GR751KNZY', // ATTACK ON TITAN
    'GY5P48XEY', // DEMON SLAYER 
    'GG5H5XQ0D', // DAN DA DAN
    'GG5H5XQ7D', // KAIJUU
    'GQWH0M9N8', // MY DRESS-UP DARLING
    'G63K98PZ6', // ONE PUNCH MAN
    'G0XHWM18X', // WATARI-KUN'S IS ABOUT TO COLLAPSE
    'G4PH0WXVJ', // SPY X FAMILY
    'GY8VM8MWY', // HAIKYU!!
    'GY3VKX1MR', // HUNTER X HUNTER
    'G6NVG970Y', // WELCOME TO DEMON SCHOOL! IRUMA-KUN
    'GYQWNXPZY', // FIRE FORCE
    'GRE59JGX6', // ASSASSINATION CLASSROOM
    'GEXH3WKK0', // VINLAND SAGA
    'GDKHZEP8W', // MASHLE: MAGIC AND MUSCLES
    'G9VHN9P43', // HORIMIYA
    'GY190DKQR', // MOB PSYCHO 100
    'GYP8DP1MY', // JOJO'S BIZARRE ADVENTURE
    'GR5VXQ8PR', // BUNGO STRAY DOGS
    'G6ZJMGEXY', // FRUITS BASKET
    'GJ0H7Q5ZJ', // HELL'S PARADISE
    'GRJ0J828Y', // KAGUYA-SAMA: LOVE IS WAR
    'G3KHEVMN1', // TOKYO REVENGERS
    'G6GG91P26', // FOOD WARS! SHOKUGEKI NO SOMA
    'GYX02P3MR', // MASAMUNE-KUN'S REVENGE
    'G0XHWM5Q4', // TOMO-CHAN IS A GIRL!
    'GMEHME7W1', // YAKUZA FIANCÉ: RAISE WA TANIN GA II
    'GY4PD7Z06', // THE QUINTESSENTIAL QUINTUPLETS
    'GEXH3W8DG', // THE CASE STUDY OF VANITAS
    'GVDHX8QNW', // CHAINSAW MAN
    'G79H23ZQ3', // MY HERO ACADEMIA: VIGILANTES
    'G24H1N8XX', // BERSERK: THE GOLDEN AGE ARC - MEMORIAL EDITION
    'GJ0H7QGQK', // ZOM 100: BUCKET LIST OF THE DEAD
    'GG5H5XQED', // FAIRY TAIL: 100 YEARS QUEST
    'GRDV0019R', // JUJUTSU KAISEN
    'GG5H5XMWV', // TO YOUR ETERNITY
    'G4PH0WEKE', // BLUE LOCK
    'G3KHEVDZ8', // SOLO CAMPING FOR TWO
    'GNVHKN933', // THE 100 GIRLFRIENDS WHO REALLY, REALLY, REALLY, REALLY, REALLY LOVE YOU
    'GNVHKN70Z', // PLUNDERER
    'G79H23W70', // RANKING OF KINGS
    'G0XHWM1NK', // RUROUNI KENSHIN
    'GRG5WWD4R', // GIVEN
    'GR758GE5Y', // ATTACK ON TITAN: JUNIOR HIGH
    'G8DHV78E7', // 365 DAYS TO THE WEDDING
    'GQWH0M455', // DON'T TOY WITH ME, MISS NAGATORO
    'GG5H5XQX4', // FRIEREN: BEYOND JOURNEY'S END
    'GEXH3WG78', // LOVE AFTER WORLD DOMINATION
    'G5PHNM9P0', // WITCH WATCH
    'G24H1N3ZP', // TOILET-BOUND HANAKO-KUN
    'G6QWV3976', // RENTAL GIRLFRIEND
    'GZJH3DJ1X', // THE VAMPIRE DIES IN NO TIME
    'G8DHV78ZM', // CLEVATESS
    'GXJHM39MP', // A COUPLE OF CUCKOOS
    'G3KHEVDPE', // WIND BREAKER
    'G9VHN9P07', // DANCE DANCE DANSEUR
    'GVDHX8548', // DEALING WITH MIKADONO SISTERS IS A BREEZE
    'GQWH0MPQ7', // THE CAFÉ TERRACE AND ITS GODDESSES
    'G63VMKVQY', // YAMADA-KUN AND THE SEVEN WITCHES
    'G1XHJV02M', // YOU ARE MS. SERVANT
    'G24H1N3XV', // WORLD'S END HAREM
    'GRZXQJJ8Y', // THE ANCIENT  MAGUS BRIDE
    'GNVHKN94W', // GRAND BLUE
    'G9VHN9Q84', // THE CHIUNJI FAMILY CHILDREN
    'G79H23ZGP', // TALES OF THE WEDDING RINGS
];

// Level 2: Series that use non-continuous numbering (S1 E1, S2 E1, OVA 1, etc.)
// For these series, look up the exact string key in EPISODE_DATA_MAP.
const STRICT_MAPPING_SERIES_IDS = [
    'GYQ43P3E6', // BLACK BUTLER
    'G649PJ0JY', // BLUE EXORCIST
    'G6NV7Z50Y', // TOKYO GHOUL
    'GYVD2K1WY', // THE PROMISED NEVERLAND
    'GR757DMKY', // WORLD TRIGGER
];

// Level 3: Series adapted from light novels
const CANONLN_SERIES_IDS = [
    'G6W4QKX0R', // THE RISING OF THE SHIELD HERO
    'GRGG9798R', // RE:ZERO STARTING LIFE IN ANOTHER WORLD
    'G3KHEVDJ7', // THE APOTHECARY DIARIES
    'GJ0H7QG4E', // I WAS REINCARNATED AS THE 7TH PRINCE SO I CAN TAKE MY TIME PERFECTING MY MAGICAL ABILITY
    'GYW4MG9G6', // RASCAL DOES NOT DREAM SERIES
    'G9VHN9Q3G', // SECRETS OF THE SILENT WITCH
    'G5PHNM9Q0', // SCOOPED UP BY AN S-RANK ADVENTURER
    'GZJH3D8J9', // LET THIS GRIEVING SOUL RETIRE
    'GG5H5XQGQ', // PRIVATE TUTOR TO THE DUKE’S DAUGHTER
    'GZJH3D719', // TSUKIMICHI -MOONLIT FANTASY-
    'GR49G9VP6', // SWORD ART ONLINE
    'GY243NN0R', // THE MISFIT OF DEMON KING ACADEMY
    'G4PH0WXD1', // ARIFURETA: FROM COMMONPLACE TO WORLD'S STRONGEST
    'G0XHWM1EK', // THE WRONG WAY TO USE HEALING MAGIC
    'GEXH3W49E', // I GOT A CHEAT SKILL IN ANOTHER WORLD AND BECAME UNRIVALED IN THE REAL WORLD TOO
    'GEXH3W8G1', // THE FARAWAY PALADIN
    'G1XHJV3MV', // HOW A REALIST HERO REBUILT THE KINGDOM
    'G4PH0WJ9G', // THE BRILLIANT HEALER’S NEW LIFE IN THE SHADOWS
    'GMEHME55K', // THE WORLD’S FINEST ASSASSIN GETS REINCARNATED IN ANOTHER WORLD AS AN ARISTOCRAT
    'GW4HM7WZQ', // THE UNWANTED UNDEAD ADVENTURER
    'GYQ4ZWV46', // IN ANOTHER WORLD WITH MY SMARTPHONE
    'GVDHX8QK5', // THE ARISTOCRAT’S OTHERWORLDLY ADVENTURE: SERVING GODS WHO GO TOO FAR
    'G0XHWM380', // SEIREI GENSOUKI: SPIRIT CHRONICLES
    'GQWH0M1P3', // POSSIBLY THE GREATEST ALCHEMIST OF ALL TIME
    'G9VHN974E', // BANISHED FROM THE HERO’S PARTY, I DECIDED TO LIVE A QUIET LIFE IN THE COUNTRYSIDE
    'G6K50XJ7Y', // DEATH MARCH TO THE PARALLEL WORLD RHAPSODY
    'G79H23G0D', // SO I’M A SPIDER, SO WHAT?
    'GXJHM3GKX', // THE OSSAN NEWBIE ADVENTURER TRAINED TO DEATH BY THE MOST POWERFUL PARTY BECAME INVINCIBLE
    'G1XHJV0XM', // ALYA SOMETIMES HIDES HER FEELINGS IN RUSSIAN
    'G24H1N3MP', // MUSHOKU TENSEI: JOBLESS REINCARNATION
    'GRVN8MNQY', // CLASSROOM OF THE ELITE
    'GYE5K3GQR', // KONOSUBA: GOD’S BLESSING ON THIS WONDERFUL WORLD
    'GEXH3W2PK', // CHILLIN’ IN ANOTHER WORLD WITH LEVEL 2 SUPER CHEAT POWERS
    'G5PHNM4K8', // THE STRONGEST SAGE WITH THE WEAKEST CREST
    'G1XHJV05V', // BERSERK OF GLUTTONY
    'GR2P21J9R', // HIGH SCHOOL DxD
    'GKEH2G428', // BOFURI: I DON’T WANT TO GET HURT, SO I’LL MAX OUT MY DEFENSE
    'GVDHX8DM5', // 86 -EIGHTY SIX-
    'GVDHX8JJE', // BLACK SUMMONER
    'G24H1NWKE', // THE BEGINNING AFTER THE END
    'GRVNMG93Y', // LOG HORIZON
    'G6VDMN306', // GOBLIN SLAYER
    'GNVHKN99W', // EVEN GIVEN THE WORTHLESS APPRAISER CLASS, I’M ACTUALLY THE STRONGEST
    'G6793XKZY', // ASCENDANCE OF A BOOKWORM
    'G9VHN9DDX', // THE FRUIT OF EVOLUTION: BEFORE I KNEW IT, MY LIFE HAD IT MADE
    'GZJH3D801', // BOGUS SKILL FRUITMASTER: ABOUT THAT TIME I BECAME ABLE TO EAT UNLIMITED NUMBERS OF SKILL FRUITS THAT KILL YOU
    'G4PH0WJGQ', // 7TH TIME LOOP: THE VILLAINESS ENJOYS A CAREFREE LIFE MARRIED TO HER WORST ENEMY
    'GKEH2G0J4', // THE UNAWARE ATELIER MEISTER
    'G1XHJV0M7', // APOCALYPSE BRINGER MYNOGHRA: WORLD CONQUEST STARTS WITH THE CIVILIZATION OF RUIN
    'GG5H5XQG5', // THE WATER MAGICIAN
    'GVDHX859Q', // NEW SAGA
    'GNVHKN9VK', // UGLYMUG EPICFIGHTER
    'G9VHN9Q34', // BETROTHED TO MY SISTER’S EX
    'GEXH3W2E9', // WELCOME TO THE OUTCAST’S RESTAURANT
    'GVDHX8504', // REBORN AS A VENDING MACHINE, I NOW WANDER THE DUNGEON
    'G6MEK1ZGR', // KAKURIYO: BED & BREAKFAST FOR SPIRITS
    'GYZJ43JMR', // THAT TIME I GOT REINCARNATED AS A SLIME
    'GKEH2G004', // I LEFT MY A-RANK PARTY TO HELP MY FORMER STUDENTS REACH THE DUNGEON DEPTHS
];
// ----------------------------------------------------------------------
// HELPER FUNCTIONS
// ----------------------------------------------------------------------

/**
 * Get the series ID from the current URL.
 */
function getSeriesIdFromUrl() {
    const match = window.location.pathname.match(/\/series\/([A-Za-z0-9]+)/);
    return (match && match[1]) ? match[1] : null;
}

/**
 * Extract the episode key from the title.
 * This returns:
 * 1. The exact key (S1 E1, OVA 3, E14) for strict mappings.
 * 2. The simple number (1, 14, 1.5) for simple mappings.
 * @param {string} titleText - El texto del título del episodio.
 * @param {boolean} isStrict - Whether to search for a strict key (S#E#).
 * @returns {string|null} The lookup key or null.
 */
function getEpisodeKeyFromTitle(titleText, isStrict) {
    if (isStrict) {
        // Look for the strict key (for example, S1 E1, OVA 3, Episode 14)
        // Pattern that captures 'S# E#', 'OVA #', 'E#', etc. as a single string
        const match = titleText.match(/(?:(S\d+\s*E[\d\.\-\w]+)|(OVA\s*[\d\.\-\w]+)|(Episodio\s*[\d\.\-\w]+)|(E\s*[\d\.\-\w]+))/i);
        if (match) {
            // The exact match result is the key. Normalize whitespace.
            return match[0].trim().replace(/\s+/g, ' '); 
        }
        // If no strict key is found, fall back to the simple lookup
    }
    
    // Look for the simple episode number (level 3, original behavior)
    const match = titleText.match(/(?:Episodio|E)\s*([\d\.\-\w]+)/i);
    if (match && match[1]) {
        return match[1].replace(/^[\s\-]+/, ''); // Return the episode number (for example, '1', '14')
    }
    return null;
}

/**
 * Look up the episode type using the 3-level priority logic.
 * @param {string} seriesId - The series ID.
 * @param {string} episodeKey - The episode key (simple number or strict key).
 * @returns {string|null} The episode type ('Manga Canon', etc.) or null.
 */
function getEpisodeType(seriesId, episodeKey) {
    
    // Level 1: Default canon inclusion list (whitelist)
    if (CANON_SERIES_IDS.includes(seriesId)) {
        return 'Manga Canon'; // Default assignment
    }
    
    // Level 3: Default light-novel canon inclusion list (whitelist)
    if (CANONLN_SERIES_IDS.includes(seriesId)) {
        return 'Light Novel Canon'; // Default assignment
    }

    // Assume EPISODE_DATA_MAP exists as a global constant
    if (typeof EPISODE_DATA_MAP === 'undefined' || !EPISODE_DATA_MAP[seriesId]) {
        return null;
    }

    const episodeList = EPISODE_DATA_MAP[seriesId];
    
    // Level 2 and 3: Search in EPISODE_DATA_MAP
    const isStrictMapping = STRICT_MAPPING_SERIES_IDS.includes(seriesId);

    if (isStrictMapping) {
        // Level 2: Strict mapping (search the exact S#E# or Episode # key)
        const strictKey = episodeKey; // episodeKey already contains the string key
        const episodeData = episodeList.find(ep => ep['#'] === strictKey);
        
        if (episodeData && episodeData['Type']) {
            return episodeData['Type'];
        }
        
    } else {
        // Level 3: Numeric mapping (search the simple number - original behavior)
        const number = parseFloat(episodeKey);
        // Search the list using the episode number ('#')
        const episodeData = episodeList.find(ep => parseFloat(ep['#']) === number);
        
        if (episodeData && episodeData['Type']) {
            return episodeData['Type'];
        }
    }

    return null;
}

// ----------------------------------------------------------------------
// MAIN INJECTION FUNCTION (property-based styling)
// ----------------------------------------------------------------------

function injectEpisodeTypeTags() {
    try {
        const thumbnailContainers = document.querySelectorAll(THUMBNAIL_CONTAINER_SELECTOR2); 
        const seriesId = getSeriesIdFromUrl();
        
        if (thumbnailContainers.length === 0 || !seriesId) {
            return false; 
        }

        const isStrictMapping = STRICT_MAPPING_SERIES_IDS.includes(seriesId);
        
        thumbnailContainers.forEach(container => {
            
            // Skip excluded nodes and already-processed containers
            if (container.closest(MUSIC_EXCLUSION_SELECTOR2) || 
                container.closest(HOVER_EXCLUSION_SELECTOR2) ||
                container.hasAttribute(TYPE_INJECTED_FLAG)) {
                return; 
            }
            
            const episodeCard = container.closest(EPISODE_CARD_SELECTOR2); 
            
            if (episodeCard) {
                const titleElement = episodeCard.querySelector(EPISODE_TITLE_SELECTOR2); 
                
                if (titleElement && titleElement.textContent) {
                    const episodeText = titleElement.textContent.trim();
                    
                    // Resolve the key using the strict-mapping list when needed
                    const episodeKey = getEpisodeKeyFromTitle(episodeText, isStrictMapping); 
                      
                    if (episodeKey) {
                        // Use the new 3-level priority logic
                      const episodeType = getEpisodeType(seriesId, episodeKey); 
                      
                      if (episodeType && TYPE_COLORS[episodeType]) {
                            
                            // Inject the badge and apply its styles
                          if (!container.querySelector(`.${EPISODE_TYPE_ID_SELECTOR}`)) {
                                
                                const typeDiv = document.createElement('div');
                                typeDiv.className = EPISODE_TYPE_ID_SELECTOR;
                                typeDiv.textContent = episodeType.toUpperCase();
                                
                                const bgColor = TYPE_COLORS[episodeType];
                                
                                // 1. Container positioning
                              container.style.position = 'relative'; 
                              
                                // 2. Badge styling
                                typeDiv.style.position = 'absolute';
                                typeDiv.style.top = '0'; 
                                typeDiv.style.right = '0';
                                typeDiv.style.padding = '4px 8px';
                                typeDiv.style.backgroundColor = bgColor;
                                typeDiv.style.color = 'white';
                                typeDiv.style.fontWeight = 'bold';
                                typeDiv.style.fontSize = '10px';
                                typeDiv.style.zIndex = '0'; // Elevado, pero sin !important
                                typeDiv.style.borderBottomRightRadius = '0';
                                typeDiv.style.lineHeight = '1';
                                typeDiv.style.textShadow = '0 0 3px #000';
                                
                                container.appendChild(typeDiv);
                                container.setAttribute(TYPE_INJECTED_FLAG, 'true');
                            }
                        }
                    }
                }
            }
        });
        return true; 
    } catch (error) {
        console.error(`ERROR in injectEpisodeTypeTags: ${error.message}`);
        return false;
    }
}

// The persistence and MutationObserver logic remains unchanged.

// ----------------------------------------------------------------------
// PERSISTENCE HANDLING
// ----------------------------------------------------------------------

const EPISODE_CONTAINER_SELECTOR2_MAIN = 'div[data-t="episode-list"]';
const TOP_CONTROLS_SELECTOR2 = '.top-controls'; 

function setupTypeDynamicControlListeners() {
    const EPISODE_SORT_TRIGGER_SELECTOR = '[data-t="episode-sort-select"]';
    const SEASON_SELECT_TRIGGER_SELECTOR = '.seasons-select';

    const sortControl = document.querySelector(EPISODE_SORT_TRIGGER_SELECTOR);
    const seasonControl = document.querySelector(SEASON_SELECT_TRIGGER_SELECTOR);
    
    const handleTypeControlClick = () => {
        setTimeout(() => {
            injectEpisodeTypeTags();
        }, 300); 
    };

    if (sortControl && !sortControl.getAttribute('data-type-listener-set')) {
        sortControl.addEventListener('click', handleTypeControlClick);
        sortControl.setAttribute('data-type-listener-set', 'true');
    }

    if (seasonControl && !seasonControl.getAttribute('data-type-listener-set')) {
        seasonControl.addEventListener('click', handleTypeControlClick);
        seasonControl.setAttribute('data-type-listener-set', 'true');
    }
}

new MutationObserver((mutationsList) => {
    let contentInjected = false;
    
    if (location.href.includes('/series/')) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                for (const node of mutation.addedNodes) {
                    if (node.nodeType === 1) {
                        if (node.matches(EPISODE_CONTAINER_SELECTOR2_MAIN) || 
                            node.querySelector(EPISODE_CARD_SELECTOR2) ||
                            node.querySelector(TOP_CONTROLS_SELECTOR2)) { 
                            
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
        injectEpisodeTypeTags();
        setupTypeDynamicControlListeners();
    }
    
}).observe(document, { subtree: true, childList: true });


document.addEventListener('DOMContentLoaded', () => {
    injectEpisodeTypeTags(); 
    setupTypeDynamicControlListeners();
});

}

// ----------------------------------------------------------------------
// 3. CONTROL LOGIC (TOGGLE)
// ----------------------------------------------------------------------

function initializeFillerLabelFeature() {
    // Read the toggle state saved in the extension
    chrome.storage.local.get([FILLER_SETTING_KEY], (settings) => {
        
        const isFillerEnabled = settings[FILLER_SETTING_KEY]; 

        // Run the feature only when the toggle is enabled.
        if (isFillerEnabled) {
            console.log("CR Better Web: Enabling Episode Type Labels.");
            applyFillerLabel();
        } else {
            console.log("CR Better Web: Episode Type Labels disabled.");
        }
    });
}


// ----------------------------------------------------------------------
// 4. SCRIPT STARTUP
// ----------------------------------------------------------------------
// Start the configuration check process.
initializeFillerLabelFeature();

})();
