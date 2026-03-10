// background.js with region caching logic

const NEW_EPISODE_SETTING_KEY = 'newEpisodeLabel'; 
const MEDIA_SETTING_KEY = 'mediaLabel';
const FILLER_SETTING_KEY = 'fillerLabel';
const AWARD_SETTING_KEY = 'awardLabel';
const SPOILERS_SETTING_KEY = 'hideSpoilers';
const SCORE_SETTING_KEY = 'scoreLabel';
const FLAG_SETTING_KEY = 'flagLabel';
const COUNTDOWN_SETTING_KEY = 'countdownLabel'; 
const ENTER_TO_SKIP_SETTING_KEY = 'enterToSkipPrompts';
const HOMEPAGE_SECTIONS_STORAGE_KEY = 'homepageSections';
const DEFAULT_HOMEPAGE_SECTIONS = [
    { id: 'next-season', enabled: true, order: 0 },
    { id: 'top-series-popular', enabled: true, order: 1 },
    { id: 'top-series-reviewed', enabled: true, order: 2 },
    { id: 'top-movies-popular', enabled: true, order: 3 },
    { id: 'top-movies-reviewed', enabled: true, order: 4 },
    { id: 'unmatched-sections-bucket', enabled: true, order: 9999 }
];

const CACHE_KEY = 'userRegionCache';
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours
const SEASONAL_CATALOG_CACHE_KEY = 'seasonalCatalogCache';
const NEXT_SEASONAL_CATALOG_CACHE_KEY = 'nextSeasonalCatalogCache';
const SEASONAL_CATALOG_CACHE_DURATION_MS = 12 * 60 * 60 * 1000; // 12 hours
const SEASONAL_CATALOG_CACHE_VERSION = 2;
const MAL_RATE_LIMIT_COOLDOWN_KEY = 'malRateLimitCooldown';
const MAL_RATE_LIMIT_COOLDOWN_MS = 15 * 60 * 1000; // 15 minutes
const TMDB_SEASON_DETAILS_CACHE_PREFIX = 'tmdbSeasonDetails:';
const TMDB_SEASON_DETAILS_CACHE_DURATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days


// ----------------------------------------------------------------
// 1. INITIALIZATION LOGIC (ON INSTALLED)
// ----------------------------------------------------------------
chrome.runtime.onInstalled.addListener((details) => {
    
    if (details.reason === 'install') {
        
        const defaultSettings = {};

        // Options enabled by default:
        defaultSettings[NEW_EPISODE_SETTING_KEY] = true; 
        defaultSettings[MEDIA_SETTING_KEY] = true;
        defaultSettings[FILLER_SETTING_KEY] = true;
        defaultSettings[AWARD_SETTING_KEY] = true;
        defaultSettings[SCORE_SETTING_KEY] = true;
        defaultSettings[FLAG_SETTING_KEY] = true;
        defaultSettings[COUNTDOWN_SETTING_KEY] = true;
        defaultSettings[ENTER_TO_SKIP_SETTING_KEY] = true;
        defaultSettings[SPOILERS_SETTING_KEY] = false;   
        defaultSettings[HOMEPAGE_SECTIONS_STORAGE_KEY] = DEFAULT_HOMEPAGE_SECTIONS;
        
        // Save the default values
        chrome.storage.local.set(defaultSettings, () => {
            console.log("Initial configuration saved: default options enabled.");
        });
    }

    if (details.reason === 'update') {
        chrome.storage.local.get([ENTER_TO_SKIP_SETTING_KEY], (items) => {
            if (typeof items[ENTER_TO_SKIP_SETTING_KEY] === 'undefined') {
                chrome.storage.local.set({ [ENTER_TO_SKIP_SETTING_KEY]: true });
            }
        });
    }
});



// ----------------------------------------------------------------
// 2. REGION CACHE LOGIC (API FETCH)
// ----------------------------------------------------------------

function fetchRegionAndCache() {
    return fetch('https://ipinfo.io/json')
        .then(response => {
            if (!response.ok) {
                throw new Error('IP API response failed');
            }
            return response.json();
        })
        .then(data => {
            const userRegion = data.country ? data.country.toUpperCase() : null;
            
            if (userRegion) {
                const cacheData = {
                    region: userRegion,
                    timestamp: Date.now()
                };
                // Save the region and timestamp in local storage
                chrome.storage.local.set({ [CACHE_KEY]: cacheData });
            }
            
            return userRegion;
        });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getRegion") {

        // 1. Try to read the region from cache
        chrome.storage.local.get(CACHE_KEY, (data) => {
            const cachedData = data[CACHE_KEY];
            const now = Date.now();
            
            // 2. Check whether the cache exists and is still valid (less than 24h old)
            if (cachedData && (now - cachedData.timestamp < CACHE_DURATION_MS)) {
                // Valid cache: use the saved value
                console.log("[Service Worker] ✅ Region retrieved from cache.");
                sendResponse({ region: cachedData.region, error: null });
                return; // Finish the response handler
            }

            // 3. Missing or expired cache: call the external API
            console.log("[Service Worker] 🌐 Requesting a new region from the API...");
            fetchRegionAndCache()
                .then(userRegion => {
                    sendResponse({ region: userRegion, error: null });
                })
                .catch(error => {
                    console.error("[Service Worker] ❌ Error retrieving/caching region:", error);
                    sendResponse({ region: null, error: `Fetch error: ${error.message}` });
                });
        });

        // Returning true is required because the response is asynchronous
        return true;
    }

    if (request.action === 'clickSkipIntro') {
        if (!sender.tab?.id) {
            sendResponse({ ok: false, error: 'Missing tab context.' });
            return false;
        }

        chrome.scripting.executeScript(
            {
                target: { tabId: sender.tab.id, allFrames: true },
                func: () => {
                    const button = document.querySelector('[data-testid="skipButton"] [role="button"]');

                    if (!(button instanceof HTMLElement)) {
                        return {
                            href: window.location.href,
                            clicked: false
                        };
                    }

                    button.click();

                    return {
                        href: window.location.href,
                        clicked: true
                    };
                }
            },
            (results) => {
                if (chrome.runtime.lastError) {
                    sendResponse({
                        ok: false,
                        error: chrome.runtime.lastError.message
                    });
                    return;
                }

                sendResponse({
                    ok: true,
                    results: Array.isArray(results)
                        ? results.map((result) => ({
                            frameId: result.frameId,
                            ...result.result
                        }))
                        : []
                });
            }
        );

        return true;
    }

    if (request.action === 'seekVideo') {
        if (!sender.tab?.id) {
            sendResponse({ ok: false, error: 'Missing tab context.' });
            return false;
        }

        const deltaSeconds = Number(request.deltaSeconds);
        if (!Number.isFinite(deltaSeconds)) {
            sendResponse({ ok: false, error: 'Invalid seek delta.' });
            return false;
        }

        if (!chrome.scripting?.executeScript) {
            sendResponse({ ok: false, error: 'chrome.scripting.executeScript is unavailable.' });
            return false;
        }

        try {
            chrome.scripting.executeScript(
                {
                    target: { tabId: sender.tab.id, allFrames: true },
                    args: [deltaSeconds],
                    func: (delta) => {
                        const video = document.querySelector('video');

                        if (!(video instanceof HTMLMediaElement)) {
                            return {
                                href: window.location.href,
                                seeked: false
                            };
                        }

                        const duration = Number.isFinite(video.duration) ? video.duration : Number.MAX_SAFE_INTEGER;
                        const previousTime = video.currentTime;
                        const nextTime = Math.max(0, Math.min(previousTime + delta, duration));

                        video.currentTime = nextTime;

                        return {
                            href: window.location.href,
                            seeked: true,
                            previousTime,
                            nextTime
                        };
                    }
                },
                (results) => {
                    if (chrome.runtime.lastError) {
                        sendResponse({
                            ok: false,
                            error: chrome.runtime.lastError.message
                        });
                        return;
                    }

                    sendResponse({
                        ok: true,
                        results: Array.isArray(results)
                            ? results.map((result) => ({
                                frameId: result.frameId,
                                ...result.result
                            }))
                            : []
                    });
                }
            );
        } catch (error) {
            sendResponse({
                ok: false,
                error: error instanceof Error ? error.message : String(error)
            });
            return false;
        }

        return true;
    }

    if (request.action === 'togglePlayback') {
        if (!sender.tab?.id) {
            sendResponse({ ok: false, error: 'Missing tab context.' });
            return false;
        }

        if (!chrome.scripting?.executeScript) {
            sendResponse({ ok: false, error: 'chrome.scripting.executeScript is unavailable.' });
            return false;
        }

        try {
            chrome.scripting.executeScript(
                {
                    target: { tabId: sender.tab.id, allFrames: true },
                    func: () => {
                        const video = document.querySelector('video');

                        if (!(video instanceof HTMLMediaElement)) {
                            return {
                                href: window.location.href,
                                toggled: false
                            };
                        }

                        if (video.paused) {
                            const playPromise = video.play();

                            if (playPromise && typeof playPromise.catch === 'function') {
                                playPromise.catch(() => {});
                            }
                        } else {
                            video.pause();
                        }

                        return {
                            href: window.location.href,
                            toggled: true,
                            paused: video.paused
                        };
                    }
                },
                (results) => {
                    if (chrome.runtime.lastError) {
                        sendResponse({
                            ok: false,
                            error: chrome.runtime.lastError.message
                        });
                        return;
                    }

                    sendResponse({
                        ok: true,
                        results: Array.isArray(results)
                            ? results.map((result) => ({
                                frameId: result.frameId,
                                ...result.result
                            }))
                            : []
                    });
                }
            );
        } catch (error) {
            sendResponse({
                ok: false,
                error: error instanceof Error ? error.message : String(error)
            });
            return false;
        }

        return true;
    }

    return false;
 
});




function readStorageValue(key) {
    return new Promise((resolve) => {
        chrome.storage.local.get(key, (data) => resolve(data[key] ?? null));
    });
}

function writeStorageValue(key, value) {
    return new Promise((resolve) => {
        chrome.storage.local.set({ [key]: value }, resolve);
    });
}

function getCurrentAnimeSeasonInfo(date = new Date()) {
    const month = date.getMonth();
    const year = date.getFullYear();

    if (month <= 2) {
        return {
            season: "Winter",
            year,
            startDate: `${year}-01-01`,
            endDate: `${year}-03-31`
        };
    }

    if (month <= 5) {
        return {
            season: "Spring",
            year,
            startDate: `${year}-04-01`,
            endDate: `${year}-06-30`
        };
    }

    if (month <= 8) {
        return {
            season: "Summer",
            year,
            startDate: `${year}-07-01`,
            endDate: `${year}-09-30`
        };
    }

    return {
        season: "Fall",
        year,
        startDate: `${year}-10-01`,
        endDate: `${year}-12-31`
    };
}

function getNextAnimeSeasonInfo(date = new Date()) {
    const currentSeason = getCurrentAnimeSeasonInfo(date);

    if (currentSeason.season === "Winter") {
        return { season: "Spring", year: currentSeason.year };
    }

    if (currentSeason.season === "Spring") {
        return { season: "Summer", year: currentSeason.year };
    }

    if (currentSeason.season === "Summer") {
        return { season: "Fall", year: currentSeason.year };
    }

    return { season: "Winter", year: currentSeason.year + 1 };
}

function normalizeTitleForMatch(value) {
    return String(value || '')
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/&/g, ' and ')
        .replace(/[^a-z0-9]+/g, ' ')
        .trim()
        .replace(/\s+/g, ' ');
}

function slugifyTitle(value) {
    return String(value || '')
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/&/g, ' and ')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .replace(/-{2,}/g, '-');
}

let countdownSeriesCachePromise = null;
let bundledSeasonFallbackPromise = null;
let currentSeasonCatalogInFlight = null;
let nextSeasonCatalogInFlight = null;

async function loadCountdownSeriesData() {
    if (!countdownSeriesCachePromise) {
        countdownSeriesCachePromise = fetch(chrome.runtime.getURL('database/ContdownDB.json'))
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load countdown database.');
                }

                return response.json();
            })
            .catch(error => {
                countdownSeriesCachePromise = null;
                throw error;
            });
    }

    return countdownSeriesCachePromise;
}

function buildSeasonLabel(seasonInfo) {
    return `${seasonInfo.season} ${seasonInfo.year}`;
}

function buildEmptySeasonalCatalog(seasonInfo, warning = '', cacheStatus = 'miss') {
    return {
        season: seasonInfo.season,
        year: seasonInfo.year,
        seasonLabel: buildSeasonLabel(seasonInfo),
        fetchedAt: Date.now(),
        cacheVersion: SEASONAL_CATALOG_CACHE_VERSION,
        source: 'mal',
        data: [],
        cacheStatus,
        warning
    };
}

async function getMalRateLimitCooldownUntil() {
    const cooldown = await readStorageValue(MAL_RATE_LIMIT_COOLDOWN_KEY);
    return Number(cooldown || 0);
}

async function setMalRateLimitCooldown(retryAfterSeconds = 0) {
    const retryMs = Number(retryAfterSeconds || 0) * 1000;
    const cooldownUntil = Date.now() + Math.max(MAL_RATE_LIMIT_COOLDOWN_MS, retryMs);
    await writeStorageValue(MAL_RATE_LIMIT_COOLDOWN_KEY, cooldownUntil);
    return cooldownUntil;
}

async function ensureMalRateLimitAvailable() {
    const cooldownUntil = await getMalRateLimitCooldownUntil();
    if (cooldownUntil > Date.now()) {
        const waitMinutes = Math.max(1, Math.ceil((cooldownUntil - Date.now()) / 60000));
        throw new Error(`Jikan seasonal fetch is cooling down after rate limiting. Try again in about ${waitMinutes} minute${waitMinutes === 1 ? '' : 's'}.`);
    }
}

function withSeasonCatalogInFlight(slotName, factory) {
    const activeRequest = slotName === 'current' ? currentSeasonCatalogInFlight : nextSeasonCatalogInFlight;
    if (activeRequest) {
        return activeRequest;
    }

    const requestPromise = factory().finally(() => {
        if (slotName === 'current') {
            currentSeasonCatalogInFlight = null;
            return;
        }

        nextSeasonCatalogInFlight = null;
    });

    if (slotName === 'current') {
        currentSeasonCatalogInFlight = requestPromise;
    } else {
        nextSeasonCatalogInFlight = requestPromise;
    }

    return requestPromise;
}

async function loadBundledSeasonFallback() {
    if (!bundledSeasonFallbackPromise) {
        bundledSeasonFallbackPromise = fetch(chrome.runtime.getURL('database/animeFall2025DB.json'))
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load bundled season fallback.');
                }

                return response.json();
            })
            .catch(error => {
                bundledSeasonFallbackPromise = null;
                throw error;
            });
    }

    return bundledSeasonFallbackPromise;
}

function buildCountdownLookup(entries) {
    const byNormalizedTitle = new Map();
    const bySeriesId = new Map();

    for (const entry of entries) {
        const normalizedTitle = normalizeTitleForMatch(entry.Title);
        if (normalizedTitle) {
            byNormalizedTitle.set(normalizedTitle, entry);
        }

        if (entry.SerieID) {
            bySeriesId.set(entry.SerieID, entry);
        }
    }

    return { byNormalizedTitle, bySeriesId };
}

// --- TMDb CONFIG (same ID map) ---
const TMDB_READ_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjQ3OTExMjZhYTk3NGM1MzgwNDYxYzkwYWZkOTA4NCIsIm5iZiI6MTc1NzEzNDExNy41NDgsInN1YiI6IjY4YmJiZDI1MDMzODcyNmQ4YzFmNDlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6gBZ8GISTnxdfvE_ATuhrcdmPnmMQV1VVZkV0D2O9wg";
const TMDB_API_BASE = 'https://api.themoviedb.org/3';
const TMDB_HEADERS = { 'Authorization': `Bearer ${TMDB_READ_TOKEN}`, 'Accept': 'application/json' };

const CR_TMDB_ID_MAP = {
    'GP5HJ84P7': 256721,  // Gachiakuta
    'GG5H5X3EE': 213402, //Campfire Cooking In Another World With My Absurd Skill
    'GG5H5XQG5': 281615, //The Water Magician
    'GG5H5XMWV': 97525, //To Your Eternity
    'GP5HJ84D2': 253811, //Tougen Anki
    'G8DHV78ZM': 258348, //Clevatess
    'G6W4QKX0R': 83095, //The Rising Of The Shield Hero
    'GG5H5XQ0D': 240411, //Dan Da Dan
    'GYEXQKJG6': 86031, //Dr Stone
    'G9VHN9Q3G': 281058, //Secrets Of The Silent Witch
    'G63K98PZ6': 63926, //One Punch Man
    'G1XHJV0M7': 280038, //Apocalypse Bringer Mynoghra World Conquest Starts With The Civilization Of Ruin
    'GJ0H7QG4E': 213830, //I Was Reincarnated As The 7Th Prince So I Can Take My Time Perfecting My Magical Ability
    'G4PH0WXVJ': 120089, //Spy X Family
    'GQWH0M9N8': 123249, //My Dress Up Darling
    'G0XHWM18X': 285356, //Watari Kuns  Is About To Collapse
    'GVDHX859Q': 212766, //New Saga
    'G79H23ZGP': 218493, //Tales Of Wedding Rings
    'GZJH3D8J9': 258579, //Let This Grieving Soul Retire
    'GEXH3W2EZ': 232230, //Lord Of Mysteries
    'GXJHM39MP': 122587, //A Couple Of Cuckoos
    'GQWH0M1J3': 272059, //To Be Hero X
    'GRDV0019R': 95479, //Jujutsu Kaisen
    'GDKHZEJN0': 107255, //Dragon Raja  The Blazing Dawn
    'GRWE89KMR': 61427, //Kingdom
    'GY8VM8MWY': 60863, //Haikyu
    'GEXH3W2E9': 286723, //Welcome To The Outcasts Restaurant
    'G9VHN9Q34': 279989, //Betrothed To My Sisters Ex
    'G5PHNM9Q0': 284771, //Scooped Up By An S Rank Adventurer
    'GNVHKN9VK': 286434, //Uglymug Epicfighter
    'GR751KNZY': 1429, //Attack On Titan
    'GDKHZEJ0K': 127532, //Solo Leveling
    'G3KHEVDZ8': 281044, //Solo Camping For Two
    'GYW4MG9G6': 123456, //Rascal Does Not Dream Series
    'GVDHX8504': 207564, //Reborn As A Vending Machine I Now Wander The Dungeon
    'GVDHX8548': 272556, //Dealing With Mikadono Sisters Is A Breeze
    'G6QWV3976': 96316, //Rent A Girlfriend
    'G24H1N3ZP': 95269, //Toilet Bound Hanako Kun
    'GRE50KV36': 73223, //Black Clover
    'GZJH3D719': 111819, //Tsukimichi  Moonlit Fantasy
    'G6MEK1ZGR': 78483, //Kakuriyo   Bed  Breakfast For Spirits
    'GMEHME7VW': 285828, //Onmyo Kaiten Rebirth Verse
    'GR8DN7N7R': 87478, //Isekai Quartet
    'GYZJ43JMR': 82684, //That Time I Got Reincarnated As A Slime
    'GNVHKN94W': 79166, //Grand Blue Dreaming
    'GG5H5XQGQ': 284448, //Private Tutor To The Dukes Daughter
    'GY5P48XEY': 85937, //Demon Slayer Kimetsu No Yaiba
    'GJ0H7QG9N': 198182, //Throne Of Seal
    'GXJHM3G0J': 283705, //The Shy Hero And The Assassin Princesses
    'G8DHV78XM': 277665, //Anne Shirley
    'G5PHNM9P0': 261868, //Witch Watch
    'G9VHN9PPW': 12971, //Dragon Ball Z
    'G4PH0WJ2V': 271649, //Ruri Rocks
    'G3KHEVDJ7': 220542, //The Apothecary Diaries
    'G4PH0WJ2G': 279220, //Cultural Exchange With A Game Centre Girl
    'GYQ4MW246': 31910, //Naruto Shippuden
    'G24H1N3MP': 94664, //Mushoku Tensei Jobless Reincarnation
    'GKEH2G0MN': 223911, //Renegade Immortal
    'G79H23Z93': 262377, //Detectives These Days Are Crazy
    'GY3VKX1MR': 45952, //Hunter X Hunter
    'GZJH3DJ8E': 98123, //The Daily Life Of The Immortal King
    'GR49G9VP6': 45782, //Sword Art Online
    'G79H23Z8P': 205050, //Shangri La Frontier
    'GRGG9798R': 65942, //Rezero  Starting Life In Another World
    'G69PZ5PDY': 64196, //Overlord
    'G6NVG970Y': 91801, //Welcome To Demon School Iruma Kun
    'GR19V7816': 62715, //Dragon Ball Super
    'GVDHX8QNW': 114410, //Chainsaw Man
    'GDKHZEJJQ': 278378, //You And Idol Precure
    'GW4HM7WDV': 262254, //With You And The Rain
    'G649PJ0JY': 38464, //Blue Exorcist
    'GKEH2G004': 270487, //I Left My A Rank Party To Help My Former Students Reach The Dungeon Depths
    'G6NV7Z50Y': 61374, //Tokyo Ghoul
    'GXJHM3G08': 276288, //Hotel Inhumans
    'GEXH3WKK0': 88803, //Vinland Saga
    'GQWH0M1Q9': 101172, //Swallowed Star
    'GKEH2G0DN': 247045, //Nyaight Of The Living Cat
    'GG5H5XQX4': 209867, //Frieren Beyond Journeys End
    'GY9PJ5KWR': 46260, //Naruto
    'G9VHN9P43': 110070, //Horimiya
    'GRVN8MNQY': 72517, //Classroom Of The Elite
    'GRGGPG93R': 31911, //Fullmetal Alchemist Brotherhood
    'G4PH0WEKE': 131041, //Blue Lock
    'GY190DKQR': 67075, //Mob Psycho 100
    'G6DQDD3WR': 46261, //Fairy Tail
    'GY2P9ED0Y': 31724, //Code Geass
    'GYP8DP1MY': 45790, //Jojos Bizarre Adventure
    'GYQWNXPZY': 88046, //Fire Force
    'G3KHEVDPE': 223500, //Wind Breaker
    'GY243NN0R': 97617, //The Misfit Of Demon King Academy
    'G0XHWM1EK': 131365, //The Wrong Way To Use Healing Magic
    'G8DHV7W21': 12971, //Dragon Ball
    'G0XHWM17X': 271576, //Summer Pockets
    'G0XHWM18P': 279993, //Necronomico And The Cosmic Horror Show
    'GR5VXQ8PR': 65931, //Bungo Stray Dogs
    'GZJH3D8Z1': 277581, //Dekin No Mogura The Earthbound Mole
    'GMEHME7GX': 217247, //Turkey Time To Strike
    'G6J0G49DR': 97860, //Tower Of God
    'GYX0MZ58R': 60761, //Ace Of The Diamond
    'GYE5K3GQR': 65844, //Konosuba  Gods Blessing On This Wonderful World
    'GDKHZEP8W': 204832, //Mashle Magic And Muscles
    'G4PH0WXD1': 86034, //Arifureta From Commonplace To Worlds Strongest
    'GYX0ZW80R': 37305, //Soul Eater
    'G6JQVM3ER': 30983, //Detective Conan
    'GRE59JGX6': 62110, //Assassination Classroom
    'GVDHX8QK5': 207493, //The Aristocrats Otherworldly Adventure Serving Gods Who Go Too Far
    'G1XHJV3MV': 102088, //How A Realist Hero Rebuilt The Kingdom
    'G1XHJV0M8': 274548, //Captivated By You
    'G4PH0WJ9G': 276253, //The Brilliant Healers New Life In The Shadows
    'G6ZJMGEXY': 85991, //Fruits Basket
    'G0XHWM380': 113808, //Seirei Gensouki Spirit Chronicles
    'G9VHN974E': 113256, //Banished From The Heros Party I Decided To Live A Quiet Life In The Countryside
    'GMEHME55K': 118821, //The Worlds Finest Assassin Gets Reincarnated In Another World As An Aristocrat
    'GJ0H7QGVM': 274546, //Lets Go Karaoke
    'GRZXQJJ8Y': 73833, //The Ancient Magus Bride
    'GQWH0M1P3': 261298, //Possibly The Greatest Alchemist Of All Time
    'GVDHX8JZ2': 138882, //Shoot Goal To The Future
    'G3KHEVMN1': 298778, //Tokyo Revengers
    'GVDHX8DM5': 100565, //86 Eighty Six
    'GEXH3W49E': 208493, //I Got A Cheat Skill In Another World And Became Unrivaled In The Real World Too
    'GR2P21J9R': 45950, //High School Dxd
    'GEXH3W8G1': 123525, //The Faraway Paladin
    'GEXH3W2PK': 237233, //Chillin In Another World With Level 2 Super Cheat Powers
    'GRMGDGZVR': 60833, //The Irregular At Magic High School
    'G79H23G0D': 99618, //So Im A Spider So What
    'GYQ4ZWV46': 72505, //In Another World With My Smartphone
    'GKEH2G428': 96402, //Bofuri I Dont Want To Get Hurt So Ill Max Out My Defense
    'G6VDMN306': 82591, //Goblin Slayer
    'GR9PKENW6': 30669, //Yu Yu Hakusho
    'GJ0H7Q5ZJ': 117465, //Hells Paradise
    'GEXH3W2V7': 230059, //A Sign Of Affection
    'GP5HJ85ED': 102086, //By The Grace Of The Gods
    'GR75Q020Y': 70881, //Boruto Naruto Next Generations
    'GR9P57W96': 69346, //Saga Of Tanya The Evil
    'GXJHM3GKX': 250598, //The Ossan Newbie Adventurer Trained To Death By The Most Powerful Party Became Invincible
    'GRVD0ZDQR': 99778, //The God Of High School
    'G3KHEVD3E': 245285, //Failure Frame I Became The Strongest And Annihilated Everything With Low Level Spells
    'GRJ0J828Y': 83121, //Kaguya Sama Love Is War
    'G1XHJVWXG': 156563, //The Reincarnation Of The Strongest Exorcist In Another World
    'GYQ43P3E6': 50712, //Black Butler
    'G79H23W70': 207743, //Ranking Of Kings
    'G8DHV7WJP': 123528, //Skeleton Knight In Another World
    'GKEH2G0J4': 277881, //The Unaware Atelier Meister
    'G1XHJV05V': 213331, //Berserk Of Gluttony
    'GNVHKNPQ7': 208067, //My Love Story With Yamada Kun At Lv999
    'GYQW15Z9Y': 99624, //The 8Th Son Are You Kidding Me
    'G3KHEV04J': 214540, //Dead Mount Death Play
    'GRE5KE7P6': 62741, //Kamisama Kiss
    'GNVHKN952': 235389, //Remonster
    'GVDHX8JJE': 157842, //Black Summoner
    'G1XHJV0VV': 201363, //My Unique Skill Makes Me Op Even At Level 1
    'G24H1NWKE': 274671, //The Beginning After The End
    'GR75Z5KKY': 45997, //The Devil Is A Part Timer
    'G5PHNM4K8': 117884, //The Strongest Sage With The Weakest Crest
    'GRVNMG93Y': 60846, //Log Horizon
    'GMEHME7QX': 123456, //Honkai Star Rail Featured Videos
    'GYVD2K1WY': 83097, //The Promised Neverland
    'G79H23ZQ3': 280110, //My Hero Academia Vigilantes
    'GW4HM7WK9': 245842, //Wistoria Wand And Sword
    'GG5H5XQ35': 236994, //Dragon Ball Daima
    'GVDHX8PMM': 235555, //Orient
    'G8DHV743V': 203780, //Beast Tamer
    'GRWMGGQ86': 100049, //Tonikawa Over The Moon For You
    'G4PH0WJGQ': 232926, //7Th Time Loop The Villainess Enjoys A Carefree Life Married To Her Worst Enemy
    'GYQ4MKDZ6': 57041, //Gintama
    'G0XHWM023': 132213, //Heroines Run The Show
    'G6GG91P26': 62273, //Food Wars Shokugeki No Soma
    'GRZJ7QN86': 63087, //Snow White With The Red Hair
    'G6X08VQ8Y': 46435, //Roboticsnotes
    'G1XHJV3P3': 115236, //The Saints Magic Power Is Omnipotent
    'G4PH0WXXM': 12697, //Dragon Ball Gt
    'GMEHME7W1': 259787, //Yakuza Fianc Raise Wa Tanin Ga Ii
    'G0XHWM1NK': 210879, //Rurouni Kenshin
    'GEXH3W2Z7': 153337, //Reign Of The Seven Spellblades
    'GNVHKN70Z': 93149, //Plunderer
    'G6K50XJ7Y': 76122, //Death March To The Parallel World Rhapsody
    'GRJQVJNXY': 90855, //Saint Seiya
    'GR79P2816': 223251, //Umamusume Pretty Derby
    'G6793XKZY': 91768, //Ascendance Of A Bookworm
    'G6VN35J7R': 61461, //Yona Of The Dawn
    'G1XHJV0XM': 235758, //Alya Sometimes Hides Her Feelings In Russian
    'GY8VEQ95Y': 76121, //Darling In The Franxx
    'G0XHWM5Q4': 205308, //Tomo Chan Is A Girl
    'GRE5XQJV6': 69500, //Natsumes Book Of Friends
    'GW4HM7WZQ': 197848, //The Unwanted Undead Adventurer
    'G9VHN91DJ': 154743, //The Angel Next Door Spoils Me Rotten
    'G9VHN9QED': 209649, //Am I Actually The Strongest
    'GJ0H7Q5N3': 139287, //More Than A Married Couple But Not Lovers
    'GYX04955R': 35935, //Berserk
    'GR24GX896': 65945, //Kabaneri Of The Iron Fortress
    'GRJQ04Z3Y': 123456, //Fatezero
    'G3KHEVDGD': 261392, //Kamitsubaki City Under Construction
    'G6WEM1V36': 56559, //Theatre Of Darkness Yamishibai
    'GYVNXMVP6': 30991, //Cowboy Bebop
    'G24H1NJJD': 129195, //Parallel World Pharmacy
    'G62P48X56': 45783, //Kurokos Basketball
    'GYX02P3MR': 123456, //Masamune Kuns Revenge
    'G65V4P4K6': 297501, //Star Blazers Space Battleship Yamato
    'GVDHX8Q71': 205366, //Why Raeliana Ended Up At The Dukes Mansion
    'GEXH3W8DG': 121964, //The Case Study Of Vanitas
    'GNVHKN933': 223564, //The 100 Girlfriends Who Really Really Really Really Really Love You
    'G63V7KN9Y': 61663, //Your Lie In April
    'GG5H5X0JK': 135334, //Im The Villainess So Im Taming The Final Boss
    'GW4HM79VM': 99073, //Ive Been Killing Slimes For 300 Years And Maxed Out My Level
    'GY4PD7Z06': 84669, //The Quintessential Quintuplets
    'GY8DWQN5Y': 76757, //Golden Kamuy
    'GYZJXWWGR': 80563, //How Not To Summon A Demon Lord
    'G6752ZK3R': 295357, //Fist Of The North Star
    'G63K95846': 85844, //Wise Mans Grandchild
    'GW4HM7GNK': 127549, //Sasaki And Miyano
    'GY5PW4JEY': 94904, //My Next Life As A Villainess All Routes Lead To Doom
    'GZJH3D801': 276204, //Bogus Skill Fruitmaster About That Time I Became Able To Eat Unlimited Numbers Of Skill Fruits That Kill You
    'GNVHKN99W': 270474, //Even Given The Worthless Appraiser Class  Im Actually The Strongest
    'GYZJEEQGR': 93653, //Inspectre
    'GY8V11X7Y': 123456, //Fatestay Night Unlimited Blade Works
    'G79H23ZVX': 240633, //A Journey Through Another World Raising Kids While Adventuring
    'GMEHMEWP0': 61709, //Dragon Ball Z Kai
    'G6Q9GGE26': 99995, //Im Standing On A Million Lives
    'GG5H5XQ24': 220779, //The Great Cleric
    'GRWEQEZER': 62327, //Blood Blockade Battlefront
    'GYX08020R': 72635, //Knights  Magic
    'GEXH3W207': 230050, //A Returners Magic Should Be Special
    'G6W4MEZ0R': 283818, //Radiant
    'G3KHEV35V': 100825, //Suppose A Kid From The Last Dungeon Boonies Moved To A Starter Town
    'G64G2VDPR': 99779, //Noblesse
    'GJ0H7QGPK': 213181, //Hokkaido Gals Are Super Adorable
    'GRG5WWD4R': 88040, //Given
    'GYDQ8WZ16': 70637, //Akashic Records Of Bastard Magic Instructor
    'G79H23V0G': 301502, //The Duke Of Death And His Maid
    'G24H1N8XX': 123456, //Berserk The Golden Age Arc   Memorial Edition
    'G6P8DV7V6': 71360, //Yu Gi Oh
    'GQWH0M17X': 248817, //Ill Become A Villainess Who Goes Down In History
    'G24H1N8ZN': 131366, //Ningen Fushin Adventurers Who Dont Believe In Humanity Will Save The World
    'GP5HJ8E81': 123542, //Link Click
    'GY79GJX1R': 90215, //Isekai Cheat Magician
    'GQWH0M1XK': 214310, //The Weakest Tamer Began A Journey To Pick Up Trash
    'G0XHWM0D3': 139512, //Trapped In A Dating Sim The World Of Otome Games Is Tough For Mobs
    'G5PHNM7E2': 135335, //Sugar Apple Fairy Tale
    'G8DHV7425': 211297, //Revenger
    'GKEH2G4KD': 120155, //The Greatest Demon Lord Is Reborn As A Typical Nobody
    'GYEX5E1G6': 46004, //Date A Live
    'GG5H5X3DE': 212963, //Buddy Daddies
    'GY5P0K48Y': 35138, //Hetalia
    'GG5H5XQMD': 237150, //As A Reincarnated Aristocrat Ill Use My Appraisal Skill To Rise In The World
    'GJ0H7QG3M': 278816, //The Gorilla Gods Go To Girl
    'GVDHX83V7': 31654, //Digimon Adventure
    'G6WEK0026': 1063, //Samurai Champloo
    'GXJHM3P19': 119100, //Bocchi The Rock
    'G79H23XX8': 112398, //Heaven Officials Blessing
    'G6497Z43Y': 69291, //Miss Kobayashis Dragon Maid
    'G3KHEV5QQ': 103157, //The Hidden Dungeon Only I Can Enter
    'GNVHKN78X': 93256, //Cautious Hero The Hero Is Overpowered But Overly Cautious
    'GR75253JY': 43865, //Psycho Pass
    'G9VHN9DDX': 117706, //The Fruit Of Evolution Before I Knew It My Life Had It Made
    'G5PHNM9G5': 209845, //Our Dating Story The Experienced You And The Inexperienced Me
    'G9VHN9Q4N': 218684, //Overtake
    'GEXH3WP97': 96316, //Girlfriend Girlfriend
    'GMEHME70J': 229610, //A Playthrough Of A Certain Dudes Vrmmo Life
    'GQWH0MP94': 194718, //Reborn To Master The Blade From Hero King To Extraordinary Squire
    'GXJHM379D': 100281, //Moriarty The Patriot
    'G79H23V91': 27845, //The Prince Of Tennis
    'GQWH0M455': 105556, //Dont Toy With Me Miss Nagatoro
    'GJ0H7QX0Z': 137718, //Tomodachi Game
    'GR75N43MY': 49471, //Danganronpa The Animation
    'GMEHME77W': 247859, //Honey Lemon Soda
    'GNVHKN72N': 130237, //Aharen San Wa Hakarenai
    'G5PHNM434': 110309, //Sk8 The Infinity
    'G5PHNMJM9': 84737, //Psychic Princess
    'G0XHWM52V': 117024, //Sacrificial Princess And The King Of Beasts
    'GP5HJ84QX': 239214, //A Condition Called Love
    'G4PH0WX5J': 126437, //Aoashi
    'GMEHME78W': 80732, //The Master Of Diabolism
    'GY2PEJ0MY': 68129, //Yuri On Ice
    'G6DK3X9GR': 88804, //If Its For My Daughter Id Even Defeat A Demon Lord
    'GY5VE008Y': 66941, //Relife
    'GJ0H7QGQK': 217766, //Zom 100 Bucket List Of The Dead
    'GVDHX853V': 221310, //Doctor Elise The Royal Lady With The Lamp
    'GYGGXPQ2Y': 46671, //The Future Diary
    'GG5H5X002': 114477, //Harem In The Labyrinth Of Another World
    'GKEH2G0X4': 284445, //Takopis Original Sin
    'GP5HJ8E99': 153482, //Raven Of The Inner Palace
    'GNVHKN7KZ': 98986, //Uzaki Chan Wants To Hang Out
    'GNVHKN903': 216523, //Ron Kamonohashis Forbidden Deductions
    'GKEH2G099': 222930, //Villainess Level 99 I May Be The Hidden Boss But Im Not The Demon Lord
    'GMEHME849': 155942, //Handyman Saitou In Another World
    'GYGG92K7Y': 95124, //Erased
    'G24H1NW20': 238848, //An Archdemons Dilemma How To Love Your Elf Bride
    'G4PH0WJPN': 229108, //The Banished Former Hero Lives As He Pleases
    'GG5H5XQ14': 219673, //The Kingdoms Of Ruin
    'GQWH0M90V': 125712, //Life With An Ordinary Guy Who Reincarnated Into A Total Fantasy Knockout
    'GY8VM43GY': 60728, //Kill La Kill
    'GR757DMKY': 61628, //World Trigger
    'GYXJKGDN6': 91269, //High School Prodigies Have It Easy Even In Another World
    'GMEHME7Z1': 239161, //The New Gate
    'G67570P3R': 64163, //The Testament Of Sister New Devil
    'G3KHEV09J': 200750, //The Legendary Hero Is Dead
    'GJ0H7QG2G': 207521, //Sweet Reincarnation
    'GNVHKN9N3': 134742, //Classroom For Heroes
    'GYP58QMMY': 26453, //Trigun
    'G3KHEVD1D': 276880, //Please Put Them On Takamine San
    'GMEHME51P': 119335, //In The Land Of Leadale
    'GQWH0M7QP': 117880, //The Genius Princes Guide To Raising A Nation Out Of Debt
    'GEXH3W2W7': 154526, //Mf Ghost
    'GR79XXJV6': 27167, //Lovely Complex
    'GKEH2G0QK': 240641, //Nina The Starry Bride
    'GYQ4QK446': 64375, //Mobile Suit Gundam Iron Blooded Orphans
    'GJ0H7QXDW': 91764, //Sorcerous Stabber Orphen
    'GXJHM37KD': 88044, //Demon Lord Retry
    'GYWEZN1NY': 72699, //Lord Marksman And Vanadis
    'GP5HJ8435': 237045, //Cherry Magic Thirty Years Of Virginity Can Make You A Wizard
    'GY8V1ED9Y': 12536, //Yu Gi Oh Gx
    'G64911J1Y': 67199, //Saint Seiya Hades
    'G4PH0WEM2': 206748, //Saving 80000 Gold In Another World For My Retirement
    'GRVNXW75Y': 66958, //Orange
    'G1XHJV2X9': 154494, //Lycoris Recoil
    'GW4HM75NP': 204519, //The Ice Guy And His Cool Female Colleague
    'GRVNEXKXY': 63146, //Rokka  Braves Of The Six Flowers
    'GQWH0M113': 71194, //The Kings Avatar
    'GRE5MNM06': 38251, //Toriko
    'GYXM79M56': 96884, //Dragon Quest The Adventure Of Dai
    'GZJH3D858': 205672, //Fluffy Paradise
    'GQWH0M1GG': 123456, //Dragon Ball Movies
    'GRVNX917Y': 65369, //Grimgar Ashes And Illusions
    'G8DHV7DG7': 112940, //Battle Game In 5 Seconds
    'G6MG8P1W6': 46041, //My Little Monster
    'GZJH3D8W8': 208445, //The Witch And The Beast
    'GZJH3D7G9': 63102, //Captain Tsubasa
    'GDKHZEP21': 200777, //The Iceblade Sorcerer Shall Rule The World
    'GYQ4Q3DP6': 71785, //Mr Osomatsu
    'GKEH2G492': 100022, //Kemono Jihen
    'G5PHNM985': 226905, //Bucchigiri
    'G79H23V24': 120142, //Sabikui Bisco
    'G5PHNM7KG': 158293, //Shinobi No Ittoki
    'GRDQV2VWY': 61456, //Free   Iwatobi Swim Club
    'G4PH0WJDQ': 77240, //Captain Tsubasa Junior Youth Arc
    'G9VHN9Q84': 261091, //The Shiunji Family Children
    'GP5HJ8477': 274741, //The Too Perfect Saint Tossed Aside By My Fianc And Sold To Another Kingdom
    'GKEH2G440': 100436, //Akudama Drive
    'G63VMXEQY': 67063, //Hitori No Shita   The Outcast
    'GNVHKN9G2': 241811, //Puniru Is A Kawaii Slime
    'G79H23XWZ': 206324, //Chillin In My 30S After Getting Fired From The Demon Kings Army
    'GVDHX855Q': 261745, //The Daily Life Of A Middle Aged Online Shopper In Another World
    'GJ0H7QGME': 246029, //Viral Hit
    'GR49493P6': 72425, //Restaurant To Another World
    'G6MGPGZ86': 234454, //My Love  Story
    'G63W41KD6': 103254, //Yashahime Princess Half Demon
    'G1XHJV0ZV': 221148, //I Shall Survive Using Potions
    'G8DHV722J': 114892, //Platinum End
    'G0XHWM45M': 79574, //Cinderella Chef
    'G1XHJV008': 261301, //Im A Noble On The Brink Of Ruin So I Might As Well Try Mastering Magic
    'GYJ0HW59G': 9302, //Digimon Tamers
    'GRWE8K5MR': 65948, //And You Thought There Is Never A Girl Online
    'G6K51X9GY': 123456, //Juni Taisenzodiac War
    'GP5HJ8417': 258912, //Magic Maker How To Make Magic In Another World
    'G6Q41J24R': 76124, //School Babysitters
    'G9VHN91G5': 137391, //Summoned To Another World For A Second Time
    'GVDHX851V': 216269, //Im In Love With The Villainess
    'GYGG99WDY': 63145, //Charlotte
    'GG5H5XQED': 248947, //Fairy Tail 100 Years Quest
    'GEXH3WK52': 121078, //Mieruko Chan
    'GRVNZK5PY': 30980, //A Certain Magical Index
    'GRZXGP4VY': 60732, //Maken Ki
    'GVDHX8ZD0': 101972, //Our Last Crusade Or The Rise Of A New World
    'GEXH3W44W': 102871, //Kings Raid Successors Of The Will
    'GG5H5X070': 104032, //She Professed Herself Pupil Of The Wise Man
    'G63VP3PMY': 21730, //Mobile Suit Gundam Wing
    'G63VM084Y': 66078, //Twin Star Exorcists
    'G62P107J6': 20695, //Yu Gi Oh 5Ds
    'G79H23ZX3': 234538, //Demon Lord 2099
    'GR19X8916': 42554, //Sekai Ichi Hatsukoi   Worlds Greatest First Love
    'GRVDN485R': 80477, //Angels Of Death
    'GR1XHVEZQ': 31654, //Digimon Adventure 02
    'G649DPXQY': 61752, //Hellsing
    'GQWH0M990': 97782, //Kuma Kuma Kuma Bear
    'GXJHM3GX8': 256109, //Teogonia
    'G65VP49P6': 61389, //Saint Seiya The Lost Canvas
    'GXJHM3G7X': 205743, //No Longer Allowed In Another World
    'G4PH0WJPQ': 123456, //Crunchyroll Presents The Anime Effect
    'G0XHWM15X': 244624, //The Do Over Damsel Conquers The Dragon Emperor
    'GEXH3W22Z': 257790, //Im Getting Married To A Girl I Hate In My Class
    'G6P585256': 65329, //Hyouka
    'G8DHV7809': 123456, //Demon Slayer Kimetsu No Yaiba Infinity Castle
    'GY2PW4EMY': 67656, //Bananya
    'G8DHV78E7': 230189, //365 Days To The Wedding
    'G0XHWM44M': 129516, //My Stepmoms Daughter Is My Ex
    'G9VHN9QKN': 236532, //The Strongest Tanks Labyrinth Raids  A Tank With A Rare 9999 Resistance Skill Got Kicked From The Heros Party
    'GRGGVKP4R': 61441, //Yowamushi Pedal
    'GG5H5X05J': 102927, //The Last Summoner
    'G5PHNM717': 194829, //My One Hit Kill Sister
    'GRNQ13VQR': 45857, //Reborn
    'GYP8XN95Y': 63330, //My Wife Is The Student Council President
    'G1XHJV08M': 229676, //Spice And Wolf Merchant Meets The Wise Wolf
    'GG5H5X092': 202160, //The Maid I Hired Recently Is Mysterious
    'G5PHNM403': 124363, //The Dawn Of The Witch
    'GEXH3W859': 37585, //Kenichi The Mightiest Disciple
    'GR09X52WR': 42589, //Another
    'GDKHZEJD0': 258580, //The Most Notorious Talker Runs The Worlds Greatest Clan
    'GMEHME751': 249409, //Twilight Out Of Focus
    'GRJQ1QMDY': 64706, //Prison School
    'G4PH0WXZM': 97923, //Sleepy Princess In The Demon Castle
    'GP5HJ81N9': 91026, //After School Dice Club
    'GRWEW95KR': 95213, //Laid Back Camp
    'GRJ05PZ0Y': 85843, //Kono Oto Tomare Sounds Of Life
    'GW4HM7GQX': 117310, //Girls Frontline
    'G4PH0WXEM': 100988, //Higurashi When They Cry   Gou
    'G6P5WVEQ6': 78476, //Major 2Nd
    'GNVHKN7M4': 115694, //Shikimoris Not Just A Cutie
    'GY8VPDE0Y': 36983, //Rosario  Vampire
    'GW4HM7W7Q': 212053, //A Girl  Her Guard Dog
    'G4PH0WJZN': 244625, //The Healer Who Was Banished From His Party Is In Fact The Strongest
    'GR24JZ886': 123456, //Fategrand Order Absolute Demonic Front Babylonia
    'G1XHJVXX2': 121787, //Takt Opdestiny
    'GQWH0MPQ7': 209707, //The Caf Terrace And Its Goddesses
    'G0XHWM0XW': 99651, //Love Of Kill
    'G5PHNM935': 206630, //Sasaki And Peeps
    'GYQ4W12G6': 44317, //Saint Seiya Omega
    'G24H1NWJ0': 234910, //Tying The Knot With An Amagami Sister
    'GXJHM3NW5': 106519, //Higehiro After Being Rejected I Shaved And Took In A High School Runaway
    'GRGG7701R': 42511, //The Melancholy Of Haruhi Suzumiya
    'GRMGD9JGR': 66919, //World Break Aria Of Curse For A Holy Swordsman
    'G9VHN9185': 139130, //Skip And Loafer
    'GMEHME741': 239779, //True Beauty
    'G1XHJVE5K': 114198, //Full Dive This Ultimate Next Gen Full Dive Rpg Is Even Shittier Than Real Life
    'GY09XN14Y': 33765, //Magi
    'G6QW9J2Z6': 82867, //Dakaichi  Im Being Harassed By The Sexiest Man Of The Year
    'GXJHM3PZW': 200732, //A Galaxy Next Door
    'GRQ4QG4GY': 123456, //Gto   The Animation
    'G679305JY': 91547, //Didnt I Say To Make My Abilities Average In The Next Life
    'G5PHNM7J2': 207965, //The Magical Revolution Of The Reincarnated Princess And The Genius Young Lady
    'GNVHKN92K': 123456, //Chainsaw Man   The Movie Reze Arc
    'GYJQXM056': 76125, //Record Of Grancrest War
    'G79H2307W': 196400, //Mobile Suit Gundam The Witch From Mercury
    'GQWH0M19X': 222623, //The Elusive Samurai
    'GRJQVX93Y': 62450, //Plastic Memories
    'GG5H5XQDD': 248951, //The Strongest Magician In The Demon Lords Army Was A Human
    'GJ0H7QGGM': 258680, //Anyway Im Falling In Love With You
    'GXJHM3PK5': 204266, //Trigun Stampede
    'GNVHKNPP7': 85937, //Junior High And High School Kimetsu Academy Story
    'G1XHJVEXE': 111576, //Shadows House
    'G60X7D34R': 82859, //Hinomaru Sumo
    'G9VHN9QVN': 209604, //Tearmoon Empire
    'G6MG20446': 60810, //Dragonar Academy
    'GKEH2G08K': 224753, //Pseudo Harem
    'G0XHWM190': 206629, //Days With My Stepsister
    'GYW4D15K6': 78102, //Steinsgate 0
    'GKEH2G9XV': 21731, //Mobile Suit Gundam
    'GR24PVM76': 44684, //Nichijou   My Ordinary Life
    'G1XHJV0D8': 217407, //Can A Boy Girl Friendship Survive
    'GP5HJ85WM': 105476, //The Dungeon Of Black Company
    'GR8DN8XDR': 87432, //We Never Learn Bokuben
    'GXJHM372Z': 111255, //Wonder Egg Priority
    'GRDQD8PDY': 45854, //Yu Gi Oh Zexal
    'G60XNJW4R': 98685, //Monster Girl Doctor
    'GR3KVPQER': 80671, //Cells At Work
    'G60X5KMPR': 92586, //Somali And The Forest Spirit
    'G4PH0WJXN': 214587, //Bye Bye Earth
    'GNVHKNP4J': 199920, //Kamikatsu Working For God In A Godless World
    'GRX02EZ06': 42503, //Deadman Wonderland
    'GR3V5EK46': 296879, //Danganronpa 3 The End Of Hopes Peak High School
    'GYE5K0XVR': 66103, //Ace Attorney
    'GNVHKNPW1': 158373, //Nierautomata Ver11A
    'GQWH0M98E': 100567, //Combatants Will Be Dispatched
    'GEXH3WG78': 122287, //Love After World Domination
    'GY2P9PZPY': 72509, //Tsuredure Children
    'GY5VX7QEY': 102571, //Hundred
    'G65VXD8Q6': 66104, //Super Lovers
    'G79H23ZE3': 274737, //Im The Evil Lord Of An Intergalactic Empire
    'GYEX24PV6': 98034, //Digimon Adventure 2020
    'GG5H5X7ZE': 98309, //Koikimo
    'G675N15MR': 72296, //My First Girlfriend Is A Gal
    'GG5H5X3VN': 137065, //Arknights
    'G24H1NW8E': 249882, //Zenshu
    'G4PH0WXD4': 103249, //Dragon Goes House Hunting
    'GMEHME7XV': 222785, //Undead Murder Farce
    'G4PH0WJWQ': 218613, //Tenpuru
    'GNVHKN75X': 96442, //Life Lessons With Uramichi Oniisan
    'GG5H5X0K0': 70716, //Bikini Warriors
    'G6MGQ9XG6': 70639, //Worldend What Do You Do At The End Of The World Are You Busy Will You Save Us
    'G79H23Z0X': 259786, //Good Bye Dragon Life
    'GRW4DXNEY': 74018, //Legend Of The Galactic Heroes Die Neue These
    'G79H23Z45': 217390, //My Tiny Senpai
    'G6NVQ59XY': 80670, //The Master Of Ragnarok  Blesser Of Einherjar
    'G1XHJV02M': 242143, //You Are Ms Servant
    'GNVHKN9DE': 218263, //The Girl I Like Forgot Her Glasses
    'G4PH0WZNK': 114937, //Taisho Otome Fairy Tale
    'G6K5PP7EY': 68115, //Nanbaka
    'G4PH0WZDD': 124396, //Sonny Boy
    'GR4PVJ1WY': 77939, //Megalobox
    'GJ0H7Q8J0': 196040, //Engage Kiss
    'G6P5MMXV6': 90999, //Science Fell In Love So I Tried To Prove It
    'GP5HJ84M5': 217405, //Im Giving The Disgraced Noble Lady I Rescued A Crash Course In Naughtiness
    'G69XGJXJR': 99777, //Onyx Equinox
    'G79H2300N': 133197, //The Yakuzas Guide To Babysitting
    'G6VDWKM76': 77701, //Persona5 The Animation
    'G5PHNM9M5': 229609, //My Daughter Left The Nest And Returned An S Rank Adventurer
    'G4PH0WJJG': 258994, //Medaka Kuroiwa Is Impervious To My Charms
    'GZJH3DPM1': 106480, //Fena Pirate Princess
    'GRVNXWQZY': 65336, //March Comes In Like A Lion
    'G9VHN9P7W': 96203, //Gleipnir
    'G6WE0Z9G6': 42671, //Elfen Lied
    'GR49WNQE6': 74163, //Recovery Of An Mmo Junkie
    'GY8VJW08Y': 65954, //Alderamin On The Sky
    'G9VHN9QXQ': 216272, //Unnamed Memory
    'GY8VQJM0Y': 69237, //Chain Chronicle   The Light Of Haecceitas
    'GJ0H7QGXE': 241535, //Makeine Too Many Losing Heroines
    'GMEHMEN75': 110837, //Bungo Stray Dogs Wan
    'GY8DP4JDY': 93019, //Oresuki Are You The Only One Who Loves Me
    'GXJHM3P5W': 13674, //Mobile Suit Zeta Gundam
    'GR5V1JKGR': 274145, //Gamers
    'G68V4NDJ6': 75775, //Junji Ito Collection
    'G8DHV784M': 249964, //I May Be A Guild Receptionist But Ill Solo Any Boss To Clock Out On Time
    'GR19X2G26': 39434, //Anohana The Flower We Saw That Day
    'GYVD185XY': 87142, //Yu No A Girl Who Chants Love At The Bound Of This World
    'GJ0H7Q87Z': 101571, //Talentless Nana
    'GKEH2G0W9': 211709, //Shy
    'GYGG57V3Y': 45247, //Chihayafuru
    'GG5H5XQP4': 230823, //The Demon Prince Of Momochi House
    'GR5PJ2NQR': 82770, //Jingai San No Yome
    'GRE5PPNP6': 106707, //Trickster
    'G0XHWM130': 238903, //Vampire Dormitory
    'G6GG38246': 26707, //Spice And Wolf
    'GDKHZEJPQ': 259559, //Headhunted To Another World From Salaryman To Big Four
    'GY9PJPD8R': 66992, //Taboo Tattoo
    'GVDHX85DV': 225168, //Bartender Glass Of God
    'GMEHME5WK': 123456, //My Hero Academia Movies
    'G3KHEVD7E': 8991, //Digimon Frontier
    'GDKHZEJ82': 109329, //Scumbag System
    'G79H23Z5X': 235978, //Tadaima Okaeri
    'G4PH0WXMM': 104852, //Hortensia Saga
    'GZJH3D8X9': 244620, //A Nobodys Way Up To An Exploration Hero
    'GR4PX80WY': 85935, //Midnight Occult Civil Servants
    'GQWH0MX4W': 88061, //Hensuki   Are You Willing To Fall In Love With A Pervert As Long As Shes A Cutie
    'GP5HJ8425': 42511, //Suzume
    'G63K4W296': 60874, //Space Dandy
    'G6QW4EZQ6': 67395, //Tokyo Ravens
    'GDKHZEWP9': 99083, //Bottom Tier Character Tomozaki
    'G8DHV7E9Q': 73946, //Inuyashiki Last Hero
    'GNVHKN983': 231357, //The Foolish Angel Dances With The Devil
    'G6NQ59GG6': 70883, //Love Tyrant
    'GRW459Z8Y': 88051, //To The Abandoned Sacred Beasts
    'G6EXV1Z1R': 63323, //Shimoneta A Boring World Where The Concept Of Dirty Jokes Doesnt Exist
    'GR758GE5Y': 63510, //Attack On Titan Junior High
    'GZJH3DPED': 123456, //Boruto Naruto Next Generations International Dubs
    'GYVNPX3D6': 235930, //Devil May Cry
    'GMEHME4J3': 121131, //Scarlet Nexus
    'G6MGNDGW6': 42821, //Welcome To The N H K
    'GR9PV5MD6': 56351, //The World God Only Knows
    'GRW47VJNY': 101668, //Umayon
    'GJ0H7QGJE': 244672, //Why Does Nobody Remember Me In This World
    'G0XHWM1Q0': 156057, //Gods Games We Play
    'GYK5PDM8R': 123456, //Rezero  Starting Life In Another World  Shorts
    'GG5H5X7JV': 118541, //The Slime Diaries
    'G24H1N3XV': 103409, //Worlds End Harem
    'GMEHME4M4': 116725, //Vivy  Fluorite Eyes Song
    'G63VMKVQY': 62568, //Yamada Kun And The Seven Witches
    'GR79PWJ16': 76758, //Hinamatsuri
    'G79H23VNQ': 94693, //Wandering Witch The Journey Of Elaina
    'GKEH2G014': 219648, //Left Hand Layup
    'GG5H5XM84': 107003, //Peach Boy Riverside
    'GRJ0K7X5Y': 82822, //Zombie Land Saga
    'G6ME4XJ4R': 36134, //The Sacred Blacksmith
    'GY8VXQX8Y': 64671, //The Asterisk War
    'GYNQP722Y': 25117, //Tomorrows Joe
    'GY5V74MPY': 76063, //Citrus
    'GVDHX85GV': 233408, //After School Hanako Kun
    'GQWH0M7VP': 123456, //Fruits Basket 2001
    'G1XHJV2DX': 101099, //Fairies Album
    'GYP84XNVY': 61333, //Kaze No Stigma
    'GJ0H7Q5V7': 203040, //Konosuba  An Explosion On This Wonderful World
    'G5PHNM4WD': 66991, //Tales Of Zestiria The X
    'GYG5GW91Y': 38560, //Gosick
    'G8DHV72EJ': 91270, //No Guns Life
    'G6QWGNN76': 37183, //Dance In The Vampire Bund
    'G24H1N334': 117061, //The Detective Is Already Dead
    'GJ0H7QGKK': 123456, //Migidali
    'GR1XQ92VR': 82988, //Conception
    'G6MGQ0976': 21732, //Mobile Suit Gundam 00
    'GZJH3D8K1': 274069, //Kowloon Generic Romance
    'G6MEG24VR': 80539, //Asobi Asobase   Workshop Of Fun
    'GRWEK728R': 61441, //Yowamushi Pedal New Generation
    'G62PE7906': 65956, //The Morose Mononokean
    'GRDQNDVZY': 62773, //God Eater
    'GYX019NPR': 61339, //Sailor Moon Crystal
    'GY8V7NP8Y': 42500, //Lucky Star
    'G6PP7W7V6': 108954, //With A Dog And A Cat Every Day Is Fun
    'GVDHX8JKG': 90855, //Saint Seiya Knights Of The Zodiac
    'G0XHWMV4G': 105044, //Heavens Design Team
    'GRNQPEGWR': 61398, //Terra Formars
    'GRVN7ZW3Y': 74089, //Garo  Vanishing Line
    'G5PHNMW59': 19544, //Afro Samurai
    'G6J0WJ05R': 78485, //Isekai Izakaya Japanese Food From Another World
    'GNVHKDMW8': 66926, //Valkyrie Drive  Mermaid
    'G6EX7J43R': 84660, //My Roommate Is A Cat
    'GEXH3WK03': 92588, //Deca Dence
    'GR9P3GD46': 70036, //Tonari No Seki Kun The Master Of Killing Time
    'G1XHJV2NJ': 139161, //A Herbivorous Dragon Of 5000 Years Gets Unfairly Villainized
    'G65V1GV06': 9410, //Basilisk
    'G0XHWM1ZK': 234740, //My New Boss Is Goofy
    'G5PHNMW8E': 9343, //Paranoia Agent
    'GP5HJ855D': 98491, //The Millionaire Detective   Balance Unlimited
    'G9VHN9QPQ': 239764, //The Magical Girl And The Evil Lieutenant Used To Be Archenemies
    'G63VXEQNY': 57757, //Brothers Conflict
    'G6GGV5WW6': 42951, //Kaiji
    'G9VHN9QWQ': 236533, //Studio Apartment Good Lighting Angel Included
    'G609QXV76': 67011, //Hybrid X Heart Magias Academy Ataraxia
    'GY8V73KJY': 74183, //Kings Game
    'GYJQ430W6': 74081, //Blend S
    'GW4HM75QW': 218563, //Rokudos Bad Girls
    'GYZXDJ4X6': 62428, //Saint Seiya   Soul Of Gold
    'GRP8DPXMR': 61534, //Love Stage
    'GYNQPV08Y': 65950, //Kiznaiver
    'GNVHKN9QW': 281623, //Shirohiyo   Reincarnated As A Neglected Noble Raising My Baby Brother With Memories From My Past Life
    'GRJ0KQ32Y': 82737, //Ulysses Jeanne Darc And The Alchemist Knight
    'GY5VGNM0Y': 74097, //Kinos Journey  The Beautiful World  The Animated Series
    'GY49PW7QR': 42942, //Angel Beats
    'G9VHN9PDW': 94649, //Infinite Dendrogram
    'G9VHN917V': 37517, //The Tower Of Druaga
    'G6X0QPK8Y': 70880, //Tsukigakirei
    'G79H230GE': 92602, //Id Invaded
    'G9VHN9QQ4': 261311, //I Want To Escape From Princess Lessons
    'GR79V3VN6': 37437, //Heavens Lost Property
    'GR4PD7WQY': 84141, //Meiji Tokyo Renka
    'GRMGDX75R': 61435, //Orenchi No Furo Jijo
    'GYMGD89VY': 67048, //Barakamon
    'GYX0D9QNR': 23406, //Trinity Blood
    'G0XHWM41M': 57287, //Codebreaker
    'G6QW1E876': 99084, //Princess Connect Re Dive
    'GDKHZED8D': 121017, //Irina The Vampire Cosmonaut
    'G6P8QX856': 74182, //Love Is Like A Cocktail
    'G6QWDD096': 94523, //Magia Record Puella Magi Madoka Magica Side Story
    'G24H1N3J4': 96942, //Back Arrow
    'GRQ4WE4GY': 45255, //Poyopoyo
    'G24H1N21Q': 110975, //Osamake Romcom Where The Childhood Friend Wont Lose
    'GKEH2GZX9': 113687, //Remake Our Life
    'G4PH0WPV2': 242378, //Oddtaxi
    'GYWEQQD2Y': 20111, //Mobile Suit Gundam Seed
    'G79H23ZD5': 67111, //Harmonquest
    'GDKHZE1GP': 123456, //Cherry Magic Thirty Years Of Virginity Can Make You A Wizard Live Action
    'G6JQXP48R': 35790, //Cardcaptor Sakura Clear Card
    'GY5VXG95Y': 66102, //Cerberus
    'G6MG377G6': 69344, //Spiritpact
    'G6EX2559R': 35507, //Marmalade Boy
    'G24H1NWMJ': 222787, //Metallic Rouge
    'G6NQX5GZ6': 123456, //Digimon Adventure Tri
    'GP5HJ815K': 105511, //My Senpai Is Annoying
    'GRX0MGN76': 26867, //Mushi Shi
    'G675QE8JR': 71000, //Tsugumomo
    'GDKHZEPW1': 138948, //Malevolent Spirits Mononogatari
    'G69VE9W4Y': 88805, //Are You Lost
    'G79H23Z3P': 202821, //The Masterful Cat Is Depressed Again Today
    'GYXJJJ806': 75984, //Princess Jellyfish
    'G0XHWM100': 248866, //My Deer Friend Nokotan
    'GRDQNQW9Y': 62564, //Sound Euphonium
    'GKEH2G031': 5191, //Me  Roboco
    'GMEHMEWZM': 88041, //Astra Lost In Space
    'G5PHNMEEZ': 134843, //Digimon Ghost Game
    'G8DHV788M': 261148, //The Red Ranger Becomes An Adventurer In Another World
    'GY79P41KR': 78204, //Sword Art Online Alternative Gun Gale Online
    'G6Q43113R': 69282, //Interviews With Monster Girls
    'GDKHZEN80': 103944, //Drug Store In Another World   The Slow Life Of A Cheat Pharmacist
    'GXJHM3G34': 13967, //Liar Liar
    'GRX0M59K6': 61440, //Strike The Blood
    'GY49D29ZR': 71010, //Kenka Bancho Otome  Girl Beats Boys
    'G6DQN9KGR': 70590, //Is It Wrong To Try To Pick Up Girls In A Dungeon
    'G5PHNM92J': 243141, //Yatagarasu The Raven Does Not Choose Its Master
    'GRJQM5M0Y': 74094, //Our Love Has Always Been 10 Centimeters Apart
    'GYW4W70M6': 27757, //Hana Yori Dango Boys Over Flowers
    'G61X24PZ6': 85942, //Darwins Game
    'G6WE4XPJ6': 46669, //Skip Beat
    'GKEH2G0G9': 204148, //Saint Cecilia And Pastor Lawrence
    'G619MDQ1Y': 10190, //Witchblade
    'G6KE59GE6': 72041, //Record Of Lodoss War
    'GDKHZEJW0': 233523, //Dahlia In Bloom Crafting A Fresh Start With Magical Tools
    'GRQ4QE79Y': 68061, //Nyanbo
    'GYMGDG3WY': 60818, //The World Is Still Beautiful
    'GRGG932PR': 23374, //Fushigi Yugi
    'G6VN7WW0R': 34793, //Girls Bravo
    'GY8V540GY': 71008, //The Royal Tutor
    'G60914JM6': 61460, //Trinity Seven
    'GDKHZEJ20': 229743, //Vtuber Legend How I Went Viral After Forgetting To Turn Off My Stream
    'G24H1NWWE': 249031, //Welcome To Japan Ms Elf
    'G62P4MG76': 28061, //School Days
    'G8DHV7EJV': 93830, //Phantasy Star Online 2 Episode Oracle
    'GEXH3WKZ3': 120013, //Re Main
    'GR49G1GE6': 55011, //Gargantia On The Verdurous Planet
    'GYGGQ99WY': 68639, //Tenchi Muyo War On Geminar
    'GEXH3WKDP': 2192, //Robotech
    'G8DHV728E': 64552, //Shomin Sample
    'GRGG58V1R': 42413, //Demon King Daimao
    'GZJH3DXJG': 115312, //The Honor At Magic High School
    'G63VZZDEY': 20111, //Mobile Suit Gundam Seed Destiny
    'GRNQ2QMQR': 123456, //Junjo Romantica 3
    'GYZX2XE46': 60825, //Chaika The Coffin Princess
    'G8DHV74W5': 194665, //High Card
    'G6ZXZXZ4R': 34660, //Saiyuki Reload Blast
    'GMEHMEWK0': 122369, //Fuuto Pi
    'G0XHWM1VK': 71834, //Manyu Scroll
    'G64901MJY': 68088, //Gakuen Handsome
    'GY5PDD4PY': 90546, //A Certain Scientific Accelerator
    'GRVD1PE0R': 87476, //Nobunaga Teachers Young Bride
    'GR2P5EK0R': 70072, //White Album 2
    'GYDQ2NXK6': 61742, //Laughing Under The Clouds
    'GVDHX8PP9': 112010, //Muv Luv Alternative
    'GRG5W78WR': 88043, //Magical Sempai
    'GXJHM3GV4': 222784, //Mr Villains Day Off
    'GY8VDPKGY': 45241, //Total Eclipse
    'GVDHX8GMK': 37565, //Tsubasa Reservoir Chronicle
    'G24H1NW30': 222925, //Quality Assurance In Another World
    'GYE5Z5JNR': 72514, //Elegant Yokai Apartment Life
    'GY2PW178Y': 68148, //Keijo
    'G5PHNM970': 250994, //Ameku Md Doctor Detective
    'G6NQ9PX36': 9410, //Basilisk  The Ouka Ninja Scrolls
    'GMEHME72W': 258055, //Once Upon A Witchs Death
    'G6K54V11Y': 76140, //Sanrio Boys
    'GYX040PKR': 66979, //Days
    'G5PHNMWWN': 205493, //The Prince Of Tennis Ii U 17 World Cup
    'G619098KY': 65764, //Absolute Duo
    'GYGGVPV8Y': 44508, //Chitose Get You
    'G9VHN9Q7Q': 240125, //Trillion Game
    'GRP8DNZ1R': 61259, //Aldnoahzero
    'GXJHM3GQ7': 213233, //Ayaka
    'GYDQ77GZ6': 67460, //Yu Gi Oh Arc V
    'GXJHM395E': 68768, //Dance With Devils
    'G65VK1N76': 61433, //I Cant Understand What My Husband Is Saying
    'GNVHKNWXW': 123446, //The Great Jahy Will Not Be Defeated
    'GY2PQ04PY': 31687, //Dragonaut  The Resonance
    'G64945WWY': 8863, //Vandread
    'G0XHWM00Z': 95433, //Kakushigoto
    'GR3VP21Z6': 71016, //Kado The Right Answer
    'GZJH3D0P5': 198152, //Onimai Im Now Your Sister
    'G649J4XPY': 30977, //A Certain Scientific Railgun
    'GP5HJ800Z': 96398, //Sakugan
    'GYNQZQ3XY': 72507, //Clean Freak Aoyama Kun
    'GR8V02Q7R': 68634, //D Frag
    'G1XHJVEZ1': 105004, //243 Seiin High School Boys Volleyball Team
    'GR4980206': 67553, //Sky Wizards Academy
    'GDKHZE2Q7': 44318, //Hakuoki Demon Of The Fleeting Blossom
    'G8DHV7827': 254987, //Dead Dead Demons Dededede Destruction
    'GEXH3WKNN': 60831, //Knights Of Sidonia
    'GY8V5PQ8Y': 30093, //Mobile Fighter G Gundam
    'G79H23V84': 94359, //Adachi And Shimamura
    'G79H23XJJ': 104711, //Edens Zero
    'G0XHWM435': 5660, //Mobile Suit Gundam Zz
    'GYWEQW20Y': 34065, //Black Cat
    'GJ0H7QXE2': 120966, //Amaim Warrior At The Borderline
    'GRMGZG27R': 72502, //Aho Girl
    'G65VP5ZK6': 45856, //Polar Bear Cafe
    'GVDHX85QN': 259788, //A Terrified Teacher At Ghoul School
    'GRDQPN8KY': 76132, //How To Keep A Mummy
    'G6P8DM3Q6': 69367, //Saekano  How To Raise A Boring Girlfriend
    'G6MEK122R': 76759, //Gegege No Kitaro
    'G6X0P133Y': 75865, //Karakai Jozu No Takagi San
    'GKEH2G04K': 232252, //Delicos Nursery
    'GXJHM3GDX': 231873, //Oblivion Battery
    'G6Q40NG1R': 60667, //Gundam Build Fighters
    'G3KHEV3NN': 123250, //Dont Hurt Me My Healer
    'GR2PQ7J2R': 67710, //Servamp
    'G619JM99Y': 69084, //Monster Strike
    'GY5VZ21KY': 71018, //Seven Mortal Sins
    'GYVDV1N0Y': 95550, //Sing Yesterday For Me
    'GR4PXWK1Y': 87461, //The Helpful Fox Senko San
    'G79H230EM': 86835, //Fairy Gone
    'GRGGX7K1R': 71360, //Yu Gi Oh Vrains
    'GRE50WD16': 74087, //Dies Irae
    'G1XHJV22X': 156218, //Lucifer And The Biscuit Hammer
    'GRX031256': 123456, //Lupin The Third Part 2
    'G1XHJV0W8': 241928, //Girls Band Cry
    'GY8DDD58Y': 21750, //Eden Of The East
    'G6MGP9W76': 67524, //Mobile Suit Gundam Unicorn Re0096
    'GY5VKE9EY': 71919, //Future Card Buddyfight
    'G9VHN91K2': 128118, //Deep Insanity The Lost Child
    'GKEH2G472': 99099, //Mars Red
    'G6VNMPN5R': 77260, //Makai Ouji Devils And Realist
    'GR3K2EXXR': 94388, //Gibiate
    'GRDQKP57Y': 45822, //Ixion Saga Dt
    'GVDHX8JP2': 195966, //Rwby Ice Queendom
    'G4PH0WZZ3': 195924, //Shine On Bakumatsu Bad Boys
    'GQWH0M1WK': 132917, //Under Ninja
    'GVDHX8VN5': 122475, //Gloomy The Naughty Grizzly
    'G5PHNM94J': 243501, //Shoshimin How To Become Ordinary
    'GR9P7MP06': 29616, //Desert Punk
    'G65VP3106': 67249, //The Prince Of Tennis Ii
    'GKEH2G4MW': 130765, //Love All Play
    'G6J0EEP0R': 88808, //Do You Love Your Mom And Her Two Hit Multi Target Attacks
    'GMEHME7KW': 25676, //Dnangel
    'GR9PV4ED6': 43168, //Naruto Spin Off Rock Lee  His Ninja Pals
    'GY197VD9R': 5894, //Gungrave
    'G69P3DM3Y': 35753, //Zero No Tsukaima
    'G64PVJJ1R': 77723, //My Sweet Tyrant
    'GY1XMV90Y': 34801, //Wolfs Rain
    'GG5H5X389': 204412, //My Home Hero
    'G8DHV7EPX': 91584, //Kemono Michi Rise Up
    'G9VHN912P': 198170, //Play It Cool Guys
    'GRPP77VJR': 110911, //Burn The Witch
    'GR2P942JR': 72528, //Chronos Ruler
    'GW4HM7W99': 239853, //Grandpa And Grandma Turn Young Again
    'GRQ40V31Y': 70878, //Eromanga Sensei
    'G6P8124K6': 14451, //Shugo Chara
    'GDKHZE13M': 101873, //Cells At Work Code Black
    'G6ZXZGNKR': 34726, //Tokyo Majin
    'GVDHX8QZX': 205111, //The Tale Of Outcasts
    'GZJH3DJ1X': 112624, //The Vampire Dies In No Time
    'GJ0H7QM1J': 279182, //Super Cub
    'G3KHEVD57': 234995, //Sengoku Youko
    'GEXH3W2Z5': 222625, //Atelier Ryza Ever Darkness  The Secret Hideout The Animation
    'G6VNEV0QR': 65439, //Big Order
    'GY09GKE2Y': 42692, //Flame Of Recca
    'GR9P7JMV6': 35583, //Guyver The Bioboosted Armor
    'GR5PZ3P3R': 83104, //Magical Girl Spec Ops Asuka
    'G8DHV7DJ7': 107001, //The Idaten Deities Know Only Peace
    'G6JQK7D5R': 45853, //The Ambition Of Oda Nobuna
    'GYEXXWD36': 35464, //Strike Witches
    'GRE5KJ5N6': 65837, //Schwarzes Marken
    'GW4HM7PP7': 114307, //The Night Beyond The Tricornered Window
    'GRMEJWQGY': 96150, //Seton Academy Join The Pack
    'GR1X4J00R': 78469, //Dances With The Dragons
    'G79H23ZWX': 250596, //My Wife Has No Emotion
    'G6DQV1J9R': 65614, //Witch Craft Works
    'GYZXDZGX6': 66730, //Divine Gate
    'GY8VXP2JY': 65949, //Joker Game
    'GR8DW3J9R': 77724, //Love To Lie Angle
    'G3KHEVDV7': 89549, //Offside
    'GRK5VPPW6': 31701, //Burst Angel
    'G62487M9Y': 80713, //Dropkick On My Devil
    'G5PHNMW9N': 94498, //Appare Ranman
    'GR9PXEN46': 49464, //Dog  Scissors
    'GVDHX85ZN': 241628, //Ramen Akaneko
    'GR5VXM03R': 34732, //Tenjho Tenge
    'GY8VK5G8Y': 31706, //Gun X Sword
    'GMEHME8VE': 201949, //Yuri Is My Job
    'GVDHX85VN': 236392, //A Salad Bowl Of Eccentrics
    'G65VGXVQ6': 74184, //Sengoku Night Blood
    'GR9P90X16': 74092, //A Sisters All You Need
    'GVDHX85EQ': 277222, //Catch Me At The Ballpark
    'GRWE1330R': 70636, //Clockwork Planet
    'GRE50NQV6': 76128, //Idolish7
    'G63W41WQ6': 103511, //Love Live Nijigasaki High School Idol Club
    'G1XHJVWV5': 4087, //X
    'G1XHJV0KV': 229443, //Tis Time For Torture Princess
    'GRDQVM3KY': 72452, //Onee Chan Ga Kita
    'GJ0H7QGZM': 281042, //Food For The Soul
    'GRVDN2JPR': 80823, //Lord Of Vermilion The Crimson King
    'G6NQ5NJ36': 71005, //The Silver Guardian
    'GYZJNKZVR': 102285, //Mr Love Queens Choice
    'GYQWDDJ4Y': 94412, //The Case Files Of Jeweler Richard
    'GYW4DX8Q6': 78461, //Space Battleship Tiramisu
    'GDKHZEJ7K': 229612, //The Yuzuki Familys Four Sons
    'GRJQV0N3Y': 60811, //Ping Pong The Animation
    'GR8DMVXDR': 82895, //Ssssgridman
    'G69PVE29Y': 45209, //Space Brothers
    'GEXH3W4JP': 121702, //Do It Yourself
    'G6197910Y': 72508, //Convenience Store Boy Friends
    'GY19XDNQR': 52891, //Yuruyuri
    'GR9P90D16': 74084, //Code Realize Guardian Of Rebirth
    'GRVD9Z47R': 69891, //Rampo Kitan Game Of Laplace
    'G6JQKWZ4R': 53594, //Kotoura San
    'GYK541EPR': 76059, //A Place Further Than The Universe
    'G9VHN9P99': 136841, //Salarymans Club
    'GY5VGXG0Y': 74098, //Konohana Kitan
    'GDKHZEDPM': 242436, //Arte
    'GY9VDNJ0R': 76821, //Gundam Build Divers
    'G69PZV9VY': 63089, //Chaos Dragon
    'GJ0H7Q53J': 36005, //Itakiss
    'GY5VZ9PEY': 31679, //Last Exile
    'GRZX822VY': 76133, //Mitchiri Neko
    'G5PHNMWQ9': 123456, //The Girl From The Other Side
    'G79H23VVG': 105249, //The World Ends With You The Animation
    'GXJHM3GG8': 258578, //Promise Of Wizard
    'GP5HJ80VJ': 88045, //How Heavy Are The Dumbbells You Lift
    'G609G0PP6': 65333, //Myriad Colors Phantom World
    'GRWE2PQQR': 67012, //New Game
    'GMEHME8K8': 214547, //My Clueless First Friend
    'GXJHM3G58': 262929, //Apocalypse Hotel
    'GDKHZEW97': 121792, //Akebis Sailor Uniform
    'GR49GQDV6': 36134, //Seiken No Blacksmith
    'G0XHWM594': 120470, //The Legend Of Heroes Trails Of Cold Steel   Northern War
    'GXJHM3983': 92835, //Stars Align
    'GYK53VPPR': 70718, //Himegoto
    'GRZJXGX46': 80464, //Holmes Of Kyoto
    'GRDKVP34Y': 83314, //Tsurune
    'GYNQEDGGY': 31730, //Casshern Sins
    'G4PH0WE7E': 65712, //Dimension W
    'GR5VMPM5R': 64139, //Garo Crimson Moon
    'G0XHWM0G9': 128826, //Miss Kuroitsu From The Monster Development Department
    'G609E9EW6': 72510, //Netsuzou Trap  Ntr
    'GRQ4MKN4Y': 68079, //Magical Girl Raising Project
    'G24H1NJ7X': 65989, //Prison School Live Action
    'G9VHN9W5J': 105721, //Burning Kabaddi
    'G24H1NJE2': 94295, //Futsal Boys
    'GRZX4X5MY': 53721, //Love Live School Idol Project
    'GR4PVDGEY': 39379, //Full Metal Panic Invisible Victory
    'G4PH0WZ5E': 88050, //Cop Craft
    'GYNQ5N80Y': 70594, //Alice  Zoroku
    'G79H23ZZ3': 245561, //Okitsura Fell In Love With An Okinawan Girl But I Just Wish I Know What Shes Saying
    'G68DV8D46': 80504, //Yuuna And The Haunted Hot Springs
    'GY0X54Q96': 92579, //Keep Your Hands Off Eizouken
    'GVDHX8J9G': 123456, //The Stranger By The Shore
    'GXJHM3PVQ': 88063, //Bem
    'GRX03NK56': 67013, //The Highschool Life Of A Fudanshi
    'GR5VGVGGR': 34144, //Shigurui Death Frenzy
    'GRZX45ZVY': 42877, //Akagi
    'GYXJ0NJ76': 42411, //The Betrayal Knows My Name
    'G24H1NZXD': 37584, //Ikki Tousen
    'G3KHEV3MV': 103319, //The Day I Became A God
    'G9VHN9Q14': 34102, //Planetes
    'G6MG10376': 9543, //Gankutsuou
    'GY9P7JN9R': 75863, //Hakyu Hoshin Engi
    'GYNQZV50Y': 72506, //A Centaurs Life
    'G65VE2G36': 65934, //Flying Witch
    'G6Q4MKD4R': 68077, //Magic Kyun Renaissance
    'GR09WNG7R': 69285, //Gabriel Dropout
    'G6JQ14V2R': 65951, //The Lost Village
    'G0XHWM140': 260689, //Negative Positive Angler
    'GNVHKN77P': 80662, //Miss Caretaker Of Sunohara Sou
    'GZJH3DJMZ': 93649, //Shironeko Project Zero Chronicle
    'GR79P2NJ6': 68203, //Fist Of The Blue Sky Regenesis
    'G9VHN9P07': 122826, //Dance Dance Danseur
    'GEXH3W5X4': 106782, //Those Snow White Notes
    'GRJK7WV4Y': 102518, //Iwakakeru  Sport Climbing Girls
    'GNVHKN714': 137390, //Birdie Wing  Golf Girls Story
    'G63KVZV46': 80561, //Phantom In The Twilight
    'G6Q4WP11R': 42412, //Heroman
    'GRZXDKNVY': 70296, //Anti Magic Academy The 35Th Test Platoon
    'GQWH0M94E': 108891, //Shenmue The Animation
    'GRVNX903Y': 34216, //Blassreiter
    'GYQ4WX036': 56353, //Oreimo
    'GEXH3WGGV': 100077, //Otherside Picnic
    'GNVHKNW5K': 68455, //Tawawa On Monday
    'G1XHJV270': 34158, //Magic Knight Rayearth
    'G5PHNM9EJ': 230697, //Love Is Indivisible By Twins
    'GG5H5XDE1': 123670, //Build Divide  1234560  Code Black
    'G4PH0WJQZ': 123456, //Fatestrange Fake
    'G8DHV7478': 80853, //Bureau Of Paranormal Investigation
    'GYMGP8K4Y': 63322, //Symphogear
    'GYGGXP7EY': 34061, //Chrono Crusade
    'GY5VK2KKY': 64793, //Mischievous Kiss   Love In Tokyo
    'GRG55QXDR': 82522, //Rerided   Derrida Who Leaps Through Time
    'G79H23XVZ': 156013, //Kaina Of The Great Snow Sea
    'GY9VK9PWR': 87456, //Mix Meisei Story
    'GDKHZEDXD': 88048, //The Ones Within
    'GJ0H7QJWV': 137045, //Tokyo 24Th Ward
    'G63VXDXNY': 45544, //Scrapped Princess
    'GYWE82VMY': 889, //Eureka Seven Ao
    'GRJQNG8XY': 69284, //Fuuka
    'GZJH3D0X5': 153697, //Ayakashi Triangle
    'GXJHM3GP8': 234776, //Blue Miburo
    'GEXH3W29Z': 215615, //Compass20 Animation Project
    'GZJH3DPK0': 84553, //Blade Runner Black Lotus
    'GRDK9DE1Y': 39379, //Full Metal Panic The Second Raid
    'G60X0KVGR': 88865, //Mobile Suit Gundam The Origin Advent Of The Red Comet
    'GYKE9JW1Y': 78475, //Libra Of Nil Admirari
    'GRDKJ3Q3Y': 68099, //Digimon Universe App Monsters
    'GRQW00KZR': 78122, //Saint Seiya Saintia Sho
    'G6754G8VR': 65675, //Karneval
    'G6VN29D3R': 71066, //Room Mate
    'GYZXG2146': 35973, //Romeo X Juliet
    'GRGG9K1PR': 77237, //Wakakozake
    'GXJHM377D': 100353, //Bungo And Alchemist  Gears Of Judgement
    'GY9P2JV8R': 72525, //The Reflection
    'G9VHN971K': 96042, //Skate Leading Stars
    'GNVHKNG1Q': 134928, //Drowning Sorrows In Raging Fire
    'GXJHM3NEV': 112601, //Backflip
    'GR9VXP0V6': 82937, //Skull Face Bookseller Honda San
    'G6245PG7Y': 83019, //My Sister My Writer
    'G79H230XN': 132664, //The Heike Story
    'GJ0H7Q5X9': 156688, //The Fire Hunter
    'GZJH3D898': 222798, //Kamierabi Godapp
    'GRP8KG9VR': 76047, //Todays Menu For The Emiya Family
    'G6JQKVDWR': 60868, //Walkure Romanze
    'GR3KV03WR': 80853, //Muhyo  Rojis Bureau Of Supernatural Investigation
    'G6Q49G21R': 56090, //Problem Children Are Coming From Another World Arent They
    'GYX08Q77R': 110492, //Peacemaker
    'GZJH3DWPV': 82958, //Armor Shop For Ladies  Gentlemen
    'G609Z3VE6': 37555, //Omamori Himari
    'GXJHM39V0': 123456, //Fatestay Night Heavens Feel
    'GRWEJGZQR': 20432, //Speed Grapher
    'GRK52WP96': 42953, //Rin Daughters Of Mnemosyne
    'GG5H5XK0J': 108952, //Dr Ramune  Mysterious Disease Specialist
    'GY9P1KVER': 75864, //Katana Maidens  Toji No Miko
    'GRJ0K0ZDY': 83022, //As Miss Beelzebub Likes It
    'GDKHZEP3W': 219, //Xy
    'GYP83KPJY': 69283, //Eldlive
    'G6K5JGZ1Y': 69298, //Oneroom
    'GEXH3W2KK': 210355, //Mecha Ude Mechanical Arms
    'GYMGDK3GY': 60835, //Kanojo Ga Flag Wo Oraretara If Her Flag Breaks
    'GRWEMM83R': 55065, //The Unlimited Hyobu Kyosuke
    'GYZX14J96': 31731, //Gunslinger Girl
    'GYW4DK726': 77415, //Yotsuiro Biyori
    'G63V7VN4Y': 61438, //Dramatical Murder
    'GR2P14M5R': 61530, //Inugami San To Nekoyama San
    'G3KHEVQ0G': 91848, //Number24
    'GY49G291R': 53020, //Teekyu
    'GW4HM7WP9': 239761, //Senpai Is An Otokonoko
    'GY3VGKV9R': 66949, //First Love Monster
    'G4PH0WEGW': 93818, //Stand My Heroes Piece Of Truth
    'GYQ4MG4P6': 123456, //Hayate The Combat Butler Season 1  2
    'GYX05GE8R': 31741, //Black Blood Brothers
    'G1XHJV0N8': 249854, //Mono
    'G8DHV7KNW': 106126, //Oh Suddenly Egyptian God
    'G9VHN9PG0': 109934, //Requiem Of The Rose King
    'GJ0H7QXJ8': 96120, //Super Hxeros
    'G24H1NJ8D': 98867, //Ikebukuro West Gate Park
    'GYJ0J3M06': 84163, //Boogiepop And Others
    'G0XHWM3J0': 116724, //The Aquatope On White Sand
    'GYE5Z94VR': 60663, //Buddy Complex
    'GYMGDZN4Y': 61423, //When Supernatural Battles Became Commonplace
    'GYE5X75GR': 44310, //11Eyes
    'GR9P3GND6': 61465, //Persona4 The Golden Animation
    'G65VGQJ86': 74080, //Anime Gataris
    'GYX0DW78R': 16465, //Coyote Ragtime Show
    'G6P8ZPGK6': 123456, //Hell Girl Fourth Twilight
    'G5PHNM44D': 96451, //Ssssdynazenon
    'GR497ZW36': 69239, //Chaoschild
    'GJ0H7Q8XX': 96860, //A3
    'G0XHWM5N2': 106402, //All Saints Street
    'GVDHX8J8Z': 95317, //Nekopara
    'GZJH3DNE5': 118151, //Seven Knights Revolution Hero Successor
    'GY4PGN7V6': 46065, //Senran Kagura Shinovi Master
    'GY49PE8WR': 52873, //Recorder And Randsell
    'GYDKHE2D5': 42442, //Maburaho
    'GR1XQ4Z9R': 82864, //Uzamaid
    'GR2P497KR': 42419, //Sket Dance
    'G6Q4MKK3R': 272059, //To Be Hero
    'G65VJVG56': 53809, //Mushibugyo
    'GRDK3DD4Y': 5895, //Flcl
    'GRE5Z5196': 72028, //Katsugeki Touken Ranbu
    'GW4HM7GG3': 202770, //Smile Of The Arsnotoria The Animation
    'GYWEK9KNY': 69453, //Koro Sensei Quest
    'GJ0H7Q4E9': 117945, //Joran The Princess Of Snow And Blood
    'G4PH0WJ3N': 216760, //The Many Sides Of Voice Actor Radio
    'G6J0QJ32R': 80767, //Angolmois Record Of Mongol Invasion
    'G9VHN9QDQ': 62569, //Go Princess Precure
    'G6VNM3EDR': 45254, //Nyarko San Another Crawling Chaos
    'GRDQKM33Y': 35447, //Squid Girl
    'G649MNM1Y': 90366, //This Boy Is A Professional Wizard
    'GXJHM3G24': 209829, //The Family Circumstances Of The Irregular Witch
    'GYVNEWNZ6': 90325, //Donyatsu
    'GEXH3W28K': 244617, //Mayonaka Punch
    'GNVHKNG05': 112138, //Kageki Shojo
    'GRZXQJK3Y': 68137, //Aooni The Blue Monster
    'G1XHJV0EM': 210875, //Atri  My Dear Moments
    'GNVHKN9EW': 278050, //A Ninja And An Assassin Under One Roof
    'G6W47P0ER': 123456, //Kira Kiraprecure A La Mode
    'G6P8Q7NV6': 68574, //The Disappearance Of Nagato Yuki Chan
    'GMEHMEW4M': 46412, //Utawarerumono Mask Of Truth
    'GRJ00ZP4Y': 82046, //Double Decker Doug  Kirill
    'GY5VEEK5Y': 68100, //Touken Ranbu   Hanamaru
    'GY3V7KGVR': 60832, //Nananas Buried Treasure
    'G63VP0DWY': 71015, //The World Yamizukan
    'GZJH3D732': 112615, //Cestvs  The Roman Fighter
    'GYE51Q81R': 64831, //Isuca
    'GY190V9ER': 236786, //The Prince Of Tennis Ii Ova Vs Genius 10
    'GG5H5X35K': 87447, //Case File N221 Kabukicho
    'GMEHMEW1G': 93647, //Special 7 Special Crime Investigation Unit
    'G6E5098GY': 74088, //Evil Or Live
    'G62PJ4X26': 119251, //Meow Meow Japanese History
    'G68VXG3G6': 70292, //The Perfect Insider
    'GYMGPXKVY': 65713, //Aokana Four Rhythm Across The Blue
    'G63V729XY': 35993, //Samurai Warriors
    'GYWEMJ1GY': 46195, //Monogatari Second Season
    'GR5V95N8R': 69225, //Acca 13 Territory Inspection Dept
    'G9VHN9QWN': 243216, //Wonderful Precure
    'GP5HJ8447': 257609, //Farmagia
    'GG5H5X0Z8': 135292, //Tribe Nine
    'G65V1MND6': 45615, //Ragnarok   The Animation
    'GXJHM378Z': 99788, //Freakangels
    'G8DHVNJ5V': 35472, //Good Luck Ninomiya Kun
    'G3KHEVQVQ': 128510, //Shin Ikki Tousen
    'GRZJXKN86': 80537, //Hanebado
    'G79H23KWW': 123456, //Yes No Or Maybe
    'G0XHWM5X2': 88065, //Kochoki
    'GG5H5X0Q2': 102432, //Magatsu Wahrheit
    'G69P4W50Y': 27008, //Shangri La
    'GY8VN1Z9Y': 67927, //Onara Goro
    'GYQW9J0ZY': 82736, //Ms Vampire Who Lives In My Neighborhood
    'G3KHEV0NW': 88865, //Mobile Suit Gundam The Origin
    'GYE5KVMNR': 46798, //Inferno Cop
    'GY75279J6': 68185, //Occulticnine
    'GZJH3D0J2': 42860, //Bartender
    'G1XHJV03M': 218146, //Mysterious Disappearances
    'GY1X93P7Y': 80462, //Chios School Road
    'GRVD5JGPR': 95213, //Room Camp
    'GRG5X224R': 85368, //Lord El Melloi Iis Case Files Rail Zeppelin Grace Note
    'GVDHX8Z77': 123818, //Deaimon Recipe For Happiness
    'GKEH2G7PG': 34852, //The Law Of Ueki
    'GY3K980XY': 91039, //Wacky Tv Nanana
    'G649023EY': 67359, //Qualidea Code
    'GYEX244X6': 98823, //Shadowverse
    'GR4949ZQ6': 72737, //18If
    'GEXH3WK20': 94541, //Assault Lily Bouquet
    'GXJHM3NJ5': 106301, //Cardfight Vanguard Overdress
    'GJ0H7Q8W3': 65932, //Concrete Revolutio
    'GW4HM75PP': 210511, //Nijiyon Animation
    'G6ZXZD93R': 26328, //Ga Rei Zero
    'GYMGD32GY': 156331, //Dragon Collection
    'GRX0JQ4K6': 44300, //A Bridge To The Starry Skies   Hoshizora E Kakaru Hashi
    'GR5PH0059': 123456, //Nyanpire   The Vampire Cat
    'GYGVN57EY': 102655, //D4Dj First Mix
    'GYWEMDGEY': 52883, //Senyu
    'G6DK07N7R': 97825, //The Garden Of Sinners
    'G1XHJVE2E': 108977, //Scar On The Praeter
    'GR3K1E3DR': 78467, //Crossing Time
    'G9VHN9P49': 91455, //Azur Lane
    'GXJHM3G47': 43209, //Orguss
    'G675N0DZR': 31712, //Pumpkin Scissors
    'GMEHME53W': 43079, //Black Rock Shooter
    'GRMGP3V7R': 66115, //Kagewani
    'G3KHEVD87': 203045, //Paradox Live The Animation
    'GRWEMVNQR': 65602, //Love Lab
    'GEXH3WPXK': 112616, //Night Head 2041
    'GG5H5XQ85': 254853, //Zatsutabi  Thats Journey
    'GYW4E1GE6': 80535, //Island
    'GY49XQ3PR': 9041, //Noein To Your Other Self
    'GY8D2D88Y': 26383, //Glass Fleet
    'G0XHWM55N': 213883, //Soaring Sky Precure
    'GXJHM3GNX': 212273, //Train To The End Of The World
    'G63VW2VWY': 66875, //Non Non Biyori
    'GR9PV4V06': 56355, //Hayate The Combat Butler
    'GYGG9Z2WY': 123456, //Noblesse Awakening
    'GRGGJ4DWR': 64754, //Kowabon
    'G0XHWM1NV': 224207, //Bang Dream Its Mygo
    'G6P5WP3G6': 76142, //Magical Girl Ore
    'GNVHKN9W2': 46195, //Monogatari Series Off  Monster Season
    'G64PK5X3R': 96196, //True Cooking Master Boy
    'GRWEX4X8R': 65383, //Love Live Sunshine
    'GY9V1K10R': 97067, //Squishy Black Clover
    'G60X49JGR': 88064, //Try Knights
    'G65PV3GK6': 80546, //Harukana Receive
    'GJ0H7QGEN': 280366, //See You Tomorrow At The Food Court
    'GEXH3W2MZ': 282666, //Guilty Gear Strive Dual Rulers
    'GYVN3Q136': 61407, //Denki Gai
    'GRZXZ9EGY': 38270, //Fractale
    'GRMG1D55R': 68102, //Brave Witches
    'GYX0J4N5R': 36629, //Tegami Bachi Letter Bee
    'GG5H5XE73': 156197, //Delicious Party Precure
    'GY5VX8M8Y': 66504, //Please Tell Me Galko Chan
    'G79H230JM': 130206, //Fantasia Sango   Realm Of Legends
    'GR49M8GQ6': 68136, //Mahou Shoujo Nante Mouiidesukara
    'GYE5M298R': 56834, //My Bride Is A Mermaid
    'G609GX1M6': 92648, //Military
    'G6MGPWM86': 65955, //This Art Club Has A Problem
    'GR19EKQV6': 68637, //Okami San And Her Seven Companions
    'G6X01XXKY': 123456, //Lupin The Third Part 1
    'GJ0H7QG8E': 257603, //Tsumasho
    'GRP8E5EQR': 227456, //Sengoku Basara   End Of Judgement
    'GYWEZE70Y': 62911, //Nobunaga Concerto
    'GYQ4K75Q6': 66863, //Unlimited Fafnir
    'GRGGVKZWR': 66732, //Strange
    'GYEX555Q6': 65980, //Prince Of Stride Alternative
    'G79H23ZNP': 153336, //Butareba  The Story Of A Man Turned Into A Pig
    'GR9P3EP36': 74251, //Comical Psychosomatic Medicine
    'G63VM514Y': 66107, //Space Patrol Luluco
    'G8DHV7854': 217512, //16Bit Sensation Another Layer
    'G69VGQX3Y': 31679, //Lastexile  Fam The Silver Wing
    'GZJH3D01P': 133282, //Magical Destroyers
    'GYMG8GV3Y': 209845, //You And Me
    'G6P83KDJ6': 69297, //Nyanko Days
    'G0XHWM11X': 274580, //Ave Mujica   The Die Is Cast
    'G6WEM2DJ6': 51476, //Leviathan  The Last Defense
    'GYWEX4MEY': 80573, //Puzzle  Dragons X
    'GYJQVX726': 65711, //Kancolle
    'GR3VQ7MX6': 76141, //The Ryuos Work Is Never Done
    'G64PX8N1R': 87473, //Yatogame Chan Kansatsu Nikki
    'G8DHV7495': 94405, //Wave Listen To Me
    'GZJH3D0VK': 72540, //Kanon
    'GMEHME8EZ': 94631, //Diary Of Our Days At The Breakwater
    'G69VK8M8Y': 87463, //Joshi Kausei
    'GR09G787R': 46195, //Owarimonogatari
    'GY795JDZR': 45860, //Lupin The Third   The Woman Called Fujiko Mine
    'G6X0490PY': 35154, //Neo Angelique Abyss
    'GR75391ZY': 42731, //Heat Guy J
    'G679XXM0Y': 93822, //A Destructive God Sits Next To Me
    'G6P83KZM6': 69300, //Piacevole
    'GR79JDP46': 83451, //Million Arthur
    'GXJHM39XE': 93890, //Tamayomi The Baseball Girls
    'G4PH0WJ4Q': 230288, //Protocol Rain
    'GRXJ9X5EY': 35442, //Cardfight Vanguard
    'GR2420096': 84666, //Wataten An Angel Flew Down To Me
    'GEXH3W217': 238846, //Brave Bang Bravern
    'G9VHN91ZP': 128237, //Legend Of Mana  The Teardrop Crystal
    'G4PH0WJMN': 244652, //Tasuketsu  Fate Of The Majority
    'GRP585ZQR': 123456, //Code Geass   Akito The Exiled
    'G6DQM178R': 69286, //Hand Shakers
    'GRWEKW7NR': 69230, //Akibas Trip The Animation
    'GVDHX85PN': 244435, //Touken Ranbu Kai Kyoden
    'G0XHWM5XQ': 87457, //Afterlost
    'GRDQVE1ZY': 76721, //Wanna Be The Strongest In The World
    'G6NQV5WQ6': 42508, //Astarottes Toy
    'G6DQ137WR': 34191, //Magikano
    'GR9PX1316': 85065, //Kyousougiga
    'GY8VJJ0GY': 68074, //Tiger Mask W
    'GR9P3Q4V6': 62484, //Punch Line
    'GRZX20P8Y': 61930, //Cute High Earth Defense Club Love
    'GR09Q10GR': 68146, //Ninja Girl  Samurai Master
    'G6K57D78Y': 26674, //Solty Rei
    'GY79XX9MR': 123456, //The Island Of Giant Insects
    'G675KN44R': 67534, //She And Her Cat  Everything Flows
    'GR2PEVP2R': 65298, //Ojisan And Marshmallow
    'G63VMJ9DY': 68270, //Soul Buster
    'G24H1NWEE': 70176, //Honor Of Kings
    'GRVN4W13Y': 69820, //Granblue Fantasy The Animation
    'GXJHM3P49': 88047, //Ensemble Stars
    'GKEH2GQ1G': 115112, //Slow Loop
    'GXJHM39E9': 91024, //If My Favorite Pop Idol Made It To The Budokan I Would Die
    'G9VHN97VE': 98584, //Shachibato President Its Time For Battle
    'GKEH2G87N': 131168, //Ganbare Doukichan
    'GDKHZEP75': 31715, //Strain Strategic Armored Infantry
    'G6NQX5P06': 93078, //Lovely Muuuuuuuco
    'GQWH0M434': 106611, //Lets Make A Mug Too
    'GVDHX85JN': 36324, //Precure Splash Star
    'G6J0KWNDR': 82846, //Bakumatsu
    'GJ0H7Q5J9': 210899, //Uniteup
    'G69P1K90Y': 76139, //Pop Team Epic
    'G5PHNM7M1': 67078, //Planetarian
    'GYG5XKQ1Y': 83102, //Girly Air Force
    'G649G581Y': 72911, //Gingitsune Messenger Fox Of The Gods
    'GY5VJWNEY': 60672, //Recently My Sister Is Unusual
    'GRMEJX3VY': 91585, //Asteroid In Love
    'GRWE8VK0R': 42930, //Pretear
    'G1XHJV2PZ': 128212, //The Defective
    'GW4HM74GJ': 119787, //Tropical Rouge Precure
    'GP5HJ8EV9': 96139, //Hypnosismic  Division Rap Battle  Rhyme Anima
    'GRK5KDJ86': 53722, //Lychee Light Club
    'G64G29DER': 123456, //Dogezai Tried Asking While Kowtowing
    'GY195XGZR': 68138, //Kiitaros Yokai Picture Diary
    'G3KHEVPWE': 106055, //Love Live Superstar
    'G63KKJVW6': 95039, //Murder Princess
    'G69PM13DY': 68144, //Cheating Craft
    'G6EX790GR': 83477, //The Price Of Smiles
    'GYEX47296': 85990, //Hitoribocchi No Marumaruseikatsu
    'GYP85GJ1Y': 45195, //You And Me 2
    'GG5H5XE13': 156269, //Tales Of Luminaria The Fateful Crossroad
    'GY190579R': 66862, //Showa Genroku Rakugo Shinju
    'G24H1NW50': 13511, //Genesis Climber Mospeada
    'GR759KK5Y': 34802, //The Melody Of Oblivion
    'G0XHWM4KQ': 93688, //Smile Down The Runway
    'GYG5V5Z4Y': 83042, //Merc Storia The Apathetic Boy And The Girl In A Bottle
    'GW4HM7W4Q': 99787, //Meiji Gekken 1874
    'GYDQ42286': 60937, //Time Of Eve
    'GYGG9PV7Y': 65214, //Active Raid
    'GP5HJ840X': 129553, //Megaton Musashi
    'G675K3Q3R': 68389, //Usakame
    'G6DQN778R': 123456, //Makuranodanshi
    'GY9V4N8ER': 96914, //Healin Good Precure
    'GR5V74P3R': 76174, //Working Buddies
    'GRDQKN9DY': 24942, //Saki
    'GR49M5536': 66110, //Pan De Peace
    'GY9VXGXVR': 82692, //Xuan Yuan Sword Luminary
    'GKEH2G0P9': 217404, //Stardust Telepath
    'G1XHJV04W': 102774, //Witchy Precure
    'GRK5PDW96': 67019, //Ozmafia
    'G9VHN9Q9N': 215956, //The Gene Of Ai
    'GY0XXX2P6': 35897, //Disgaea
    'GKEH2G054': 34075, //Yes Precure 5
    'GRJ0XX20Y': 91343, //Oda Cinnamon Nobunaga
    'GR19PXG06': 65334, //Noir
    'GG5H5XEJ7': 127327, //Miss Shachiku And The Little Baby Ghost
    'G62PVK096': 9319, //Kiddy Grade
    'G3KHEV77Z': 114199, //Puraore Pride Of Orange
    'G64PVJGWR': 77698, //Comic Girls
    'GYE5K8NPR': 67049, //Jk Meshi
    'GW4HM7NM3': 67627, //Idol Time Pripara
    'GR751MQ4Y': 27977, //Moyashimon
    'GQWH0M9P0': 113042, //Pretty Boy Detective Club
    'GY8VX3X7Y': 71386, //Danchigai
    'G6JQ8GDVR': 71013, //Sakura Quest
    'GRX0NN1K6': 8915, //The Galaxy Railways
    'G6G5MEE16': 91587, //Null  Peta
    'GY75KE906': 67345, //Thunderbolt Fantasy
    'G79H2308D': 107408, //The Gymnastics Samurai
    'GRWE288NR': 34765, //Bokurano
    'G24H1N81X': 104155, //Lbx Girls
    'GRX0ZKZK6': 72300, //Hina Logic   From Luck  Logic
    'GR248VWM6': 94277, //Woodpecker Detectives Office
    'GRP8D75KR': 77437, //The Pilots Love Song
    'GRE5KZQN6': 68134, //Anime De Training Ex
    'GXJHM3DZX': 120968, //D_Cide Traumerei The Animation
    'G8DHV7D17': 123456, //Given Live Action Series
    'G0XHWM1MK': 223780, //Firefighter Daigo Rescuer In Orange
    'G649W7K0Y': 66106, //Three Leaves Three Colors
    'G63KVV3E6': 68135, //To Be Heroine
    'GVDHX8V05': 123456, //Psycho Pass Sinners Of The System
    'GQWH0M72P': 96371, //Sakura Wars The Animation
    'G8DHV78D7': 240682, //Astro Note
    'GJ0H7Q443': 101242, //Kiyo In Kyoto From The Maiko House
    'GG5H5XEGG': 134580, //Estab Life Great Escape
    'G675XDGNR': 75793, //Ms Koizumi Loves Ramen Noodles
    'GR9PZ9ZE6': 46065, //Senran Kagura
    'GYNVWW73R': 87693, //Strike Witches 501St Joint Fighter Wing Take Off
    'G6X03MWPY': 75431, //Komori San Cant Decline
    'GYWE41N8Y': 42510, //R 15
    'G63VXK2NY': 72788, //Magical Circle Guru Guru
    'GRJQ582WY': 38790, //Red Garden
    'GRQ474XZY': 63406, //The Idolmster Cinderella Girls
    'GDKHZEP9V': 94294, //Africa Salaryman
    'GY24KV85R': 31666, //Gad Guard
    'GEXH3W24Z': 273332, //Another Journey To The West
    'G649445JY': 65382, //Kumamiko  Girl Meets Bear
    'GR2PW5G7R': 68089, //Scorching Ping Pong Girls
    'GY49PZ78R': 46227, //Aoi Sekai No Chushin De
    'GRQ4Z4XQY': 209176, //Fastest Finger First
    'GYVNDJDD6': 38313, //Battle Girls   Time Paradox
    'GZJH3D879': 123456, //Highspeed Toile
    'GYK5X214R': 123456, //Wakakozake Drama
    'GYP817ZDY': 42885, //Myself Yourself
    'G3KHEVDQE': 37508, //Precure Max Heart
    'G6J0MD1ER': 87692, //Amazing Stranger
    'GY8VMEM8Y': 60829, //Rowdy Sumo Wrestler Matsutaro
    'GY49M09ZR': 46195, //Nekomonogatari Black
    'GMEHME4PQ': 119631, //Rpg Real Estate
    'GRGGVXV5R': 53035, //Sparrows Hotel
    'GRE51ZK86': 61424, //Sabagebu    Survival Game Club
    'G6X0MVGKY': 53808, //Muromi San
    'GDKHZEJKQ': 283360, //Classicstars
    'G6MGX3DG6': 9519, //Excel Saga
    'G63VMPVXY': 65946, //Tonkatsu Dj Agetaro
    'GYGG09WWY': 210787, //Shelter
    'GY5P48E7Y': 87465, //Cinderella Nine
    'GRVDWZZ4R': 78470, //Gurazeni Money Pitch
    'GQWH0MX7Q': 92401, //Ex Arm
    'GYEMEVGVR': 79166, //Grand Blues
    'GY9P3ME4R': 66856, //Locodol
    'G4PH0WMEX': 99789, //High Guardian Spice
    'G63KN0DZ6': 94214, //Days Of Urashimasakatasen
    'GQWH0M7XD': 118610, //Blue Reflection Ray
    'G6DK9M29R': 77722, //Caligula
    'GRQ42KD7Y': 62369, //Mikagura School Suite
    'GJ0H7Q8Z1': 126990, //Police In A Pod
    'G6NQJ2ZZ6': 55912, //Gifu Dodo Kanetsugu And Keiji
    'GRX0420P6': 69140, //Sengokuchojyugiga
    'G68V12076': 65615, //Nobunagun
    'G6NQ54786': 71021, //Twin Angels Break
    'G6Q4MWK2R': 68165, //Miss Bernard Said
    'GR2P1P2KR': 60843, //Is The Order A Rabbit
    'G6E58N5VY': 71006, //Hinako Note
    'GDKHZE431': 108478, //Farewell My Dear Cramer
    'GYMGNKK7Y': 31692, //Kurau Phantom Memory
    'GRK5P9W76': 89469, //Rewrite
    'GDKHZE1PX': 113780, //Wave  Lets Go Surfing
    'GY3VZ8KXR': 63525, //Hyperdimension Neptunia
    'GYNVJGJGR': 83150, //Voice Of Fox
    'G3KHEV73Z': 123684, //Kaginado
    'G64PV1WJR': 77294, //In Search Of The Lost Future
    'G0XHWM5GQ': 209217, //The Human Crazy University
    'G60914GM6': 121620, //The Nameko Families
    'G8DHV7E4G': 98748, //Listeners
    'GYVNMW756': 26444, //Da Capo Iii
    'G3KHEVD0D': 123456, //Kizumonogatari  Koyomi Vamp
    'G6XJ0NGMR': 42506, //The Mystic Archives Of Dantalian
    'GYWE24DJY': 69605, //Urawa No Usagi Chan
    'G1XHJV873': 116224, //Fairy Ranmaru
    'GRMEKQW4Y': 78458, //Butlers X Battlers
    'GQWH0MXPQ': 109805, //Anime Azurlane Slow Ahead
    'G5PHNM9WJ': 270659, //Kinokoinu Mushroom Pup
    'G8DHV78W7': 255492, //Sakuna Of Rice And Ruin
    'GQWH0M1DX': 196287, //Tonari No Yokai San
    'G24H107GQ': 123456, //Sword Of The Stranger
    'GY5VXNN7Y': 68055, //Ooya San Wa Shishunki
    'G3KHEV032': 102655, //D4Dj All Mix
    'G6P545WQ6': 93875, //227 Nanabun No Nijyuuni
    'GZJH3DXQD': 123456, //Hakuoki Demon Of The Fleeting Blossom Drama
    'GMEHME4QD': 131681, //Fanfare Of Adolescence
    'GW4HM7WG9': 215429, //Acro Trip
    'GRP52G1JR': 84667, //Endro
    'GRZJ7W0D6': 78481, //Last Period The Journey To The End Of The Despair
    'GMEHME7NJ': 35871, //Fairy Princess Minky Momo
    'G6MGP0V26': 90378, //Hakone Chan
    'GYNQ3N8ZY': 123456, //Fategrand Order First Order
    'G6WE417M6': 37806, //Asobi Ni Ikuyo Bombshells From The Sky
    'GR2P0GJKR': 50071, //Ai Mai Mi Surgical Friends
    'GREX5KEXY': 75753, //Anime Crimes Division
    'GNVHKNG35': 99910, //Warlords Of Sigrdrifa
    'G64PPXMZR': 78521, //Frankenstein Family
    'GDKHZEPE5': 87464, //Robihachi
    'GP5HJ812E': 68641, //Venus Versus Virus
    'GY19NQ2QR': 61485, //Girl Friend Beta
    'GRXJP0PNY': 96660, //Uchitama Have You Seen My Tama
    'GRE5M2GX6': 76219, //Miss Monochrome   The Animation
    'G4PH0WEDW': 93570, //Gal  Dino
    'GW4HM75MZ': 93819, //Actors Songs Connection
    'G8DHV79M5': 123456, //Marudase Kintaro
    'G6WE42PG6': 44520, //Kaasan Moms Life
    'GXJHM3KDK': 37866, //Tokyo Magnitude 80
    'GVDHX8J7W': 122286, //Rumble Garanndoll
    'GW4HM7W1V': 270602, //Maebashi Witches
    'GYWE2J9JY': 66113, //Anne Happy
    'G60XPMX7R': 43004, //Tenchi Muyo Ryo Ohki
    'GYDQMPE46': 69296, //Minami Kamakura High School Girls Cycling Club
    'GYP8J739Y': 34180, //Oh Edo Rocket
    'GNVHKNGMQ': 108460, //Battle Athletes Victory Restart
    'GEXH3WK40': 95909, //Dropout Idol Fruit Tart
    'G1XHJV08V': 45001, //Marginal Prince
    'GNVHKN854': 78482, //Kiratto Prichan
    'G63VK809Y': 42142, //Un Go
    'G8DHV741D': 214211, //The Marginal Service
    'GYGGVJQ5Y': 123456, //Genshiken Second Season
    'G6VN8D53R': 72523, //Angels 3Piece
    'GR49140W6': 79208, //Magimoji Rurumo
    'GRGGK327R': 69288, //Kemono Friends
    'G8DHV7W3N': 112463, //Cue
    'G8DHV7KWX': 112667, //Ichu
    'GR0XNW22Y': 105045, //Ninja Collection
    'GR2P1Z08R': 61528, //Hanayamata
    'G6P81Z916': 42917, //Koihime Musou
    'GEXH3W2GK': 239158, //Narenare  Cheer For You
    'GR5VJEX5R': 53725, //Mangirl
    'GRJQ0888Y': 29577, //Magicians Academy
    'GRZJ0M446': 88038, //Granbelm
    'GY5PVV08Y': 107208, //Scar Red Rider Xechs
    'G65VGN136': 68482, //Rainy Cocoa
    'GDKHZEJ5Q': 22401, //Gate Keepers
    'GYP85K3KY': 50071, //Ai Mai Mi
    'GYNQXG12Y': 66999, //Shonen Ashibe Go Go Goma Chan
    'G9VHN9QJ4': 95336, //Fafner The Beyond
    'GJ0H7QXWZ': 138180, //In The Heart Of Kunoichi Tsubaki
    'G24H1NW17': 137643, //Irodorimidori
    'GRNQZ5XWR': 73217, //Pikotaros Lullaby La La By
    'G6X034P0Y': 31572, //Lupin The Third Part 3
    'GREXH8DQ2': 37561, //Zaion I Wish You Were Here
    'G3KHEVQQG': 157345, //Extreme Hearts
    'GYX03QJKR': 66298, //Wagamama High Spec
    'G609X0846': 42140, //Gdgd Fairies
    'G68VD9296': 45306, //Yurumates3Dei
    'GW4HM7W0Q': 139171, //Let Me Check The Walkthrough First
    'GXJHM397N': 123456, //Fategrand Carnival
    'G6Q4KKGER': 201197, //Oreca Battle
    'GKEH2G079': 247376, //The Leveling Of Solo Leveling
    'GR9P3G7V6': 61538, //Wonder Momo
    'GY5VJ243Y': 69038, //Saki Episode Of Side A
    'GMEHME7DJ': 221418, //Kawagoe Boys Sing  Now Or Never
    'GR3VW7XM6': 45179, //Sengoku Collection Parallel World Samurai
    'GRX038W06': 23374, //Fushigi Yugi Eikoden
    'GYW4HPEK1': 12333, //Gravion
    'G9VHN9W0V': 122468, //Sd Gundam World Heroes
    'GYNQX1DWY': 65774, //Sekko Boys
    'G0XHWMV75': 70943, //Onihei
    'GYQ4MK936': 68097, //Kaiju Girls
    'GMEHME8PE': 215198, //Stella Of The Theater World Dai Star
    'G6190VXEY': 63440, //Akagi Drama
    'GYKE2J2MY': 68482, //Rainy Cocoa Sideg
    'G6DKQ81GR': 79288, //Planet With
    'G5PHNM7NG': 196369, //The Little Lies We All Tell
    'G6Q4Q41ZR': 76494, //Etotama
    'G6G5JZ1D6': 86919, //Sarazanmai
    'G0XHWM4D8': 95346, //Hatena Illusion
    'GYE50WQ0R': 74355, //Taisho Mebiusline Chicchaisan
    'GXJHM3G84': 223565, //Power Of Hope Precure Full Bloom
    'GRE5G4DP6': 76099, //Slow Start
    'GG5H5X0E2': 154901, //Teppen Laughing Til You Cry
    'GRJQVKQWY': 79057, //Majin Bone
    'G9VHN91PJ': 213044, //Lupin Zero
    'GRWE2W42R': 23374, //Fushigi Yugi Ova
    'GY8VJKNGY': 30631, //H2O Footprints In The Sand
    'GYE5ZMXPR': 72817, //The Irresponsible Galaxy Tylor
    'GEXH3W4VJ': 123456, //As The Gods Will
    'GG5H5X37E': 137811, //Technoroid Overmind
    'GY2P5KQEY': 45203, //A Dark Rabbit Has Seven Lives
    'GXJHM37WP': 124572, //Healer Girl
    'GG5H5XQQ5': 258228, //Momentary Lily
    'G6VNQKMDR': 34149, //Ufo Ultramaiden Valkyrie
    'GVDHX8QM4': 123456, //To Me The One Who Loved You
    'G6JQ4148R': 74190, //Urahara
    'G68VMJ746': 130728, //Dd Fist Of The North Star
    'GY8VDGZGY': 42917, //Shin Koihime Musou   Otome Tairan
    'G6JQZDKDR': 34770, //Shattered Angels
    'G1XHJVE9P': 155241, //Mahjong Soul Pon
    'G4PH0W4VM': 123456, //Tama Of The 3Rd District  Have You Seen My Tama
    'GYP8PPDGY': 55016, //Gj Club
    'GYE5MPJ0R': 123456, //Boku No Imoutowaosaka Okan
    'GYNQJQG3Y': 50076, //Aiura
    'GYPP7D7JY': 113335, //Dont Call Us A Junk Game
    'GYW4E1WN6': 80461, //Music Girls
    'GYX0M3J7R': 52889, //Woosers Hand To Mouth Life
    'GDKHZEJ1K': 236930, //Snack Basue
    'GYJQV0Q26': 208466, //Herobank
    'GW4HM7WWV': 280906, //Grisaia Phantom Trigger
    'GQWH0MP75': 123456, //Eureka Seven Hi Evolution
    'G5PHNM9ZM': 204849, //Yohane The Parhelion  Sunshine In The Mirror
    'GRMGQJ0ZR': 71012, //The Idolmster Cinderella Girls Theater
    'G79H23WQ7': 194625, //Inazma Delivery
    'GR09Z7W7R': 123456, //Blade Runner Black Out 2022
    'GY2P48K5Y': 45190, //Upotte
    'GMEHME81V': 123456, //To Every You Ive Loved Before
    'GRP8DZ7GR': 50071, //Ai Mai Mi Mousou Catastrophe
    'GZJH3D0EP': 216391, //The Idolmster Cinderella Girls U149
    'G8DHV78K4': 236142, //Delusional Monthly Magazine
    'G79H23X42': 123456, //Comic Party Revolution
    'GYZXQWMV6': 34212, //Fairy Musketeers
    'GEXH3W4G4': 95766, //Show By Rock Mashumairesh
    'GYG512QDY': 78474, //You Dont Know Gunma Yet
    'GW4HM74KJ': 112895, //Abciee Working Diary
    'GW4HM7G1X': 123456, //Bang Dream Movies
    'G6P8XKXK6': 26771, //Mushi Uta
    'G69PVZG0Y': 44680, //Moritasan Wa Mukuchi
    'G69P9M9JY': 74187, //Tsukipro The Animation
    'GKEH23WZM': 123456, //Garakowa  Restore The World
    'G9VHN9Q2D': 226226, //Bastions
    'GY75KPZ56': 62323, //Gunslinger Stratos
    'GNVHKN953': 238009, //Kays Daily Doodles
    'GG5H5XE5W': 131083, //Rusted Armors
    'GRZX4PK4Y': 54950, //Chronicles Of The Going Home Club
    'GXJHM3PQQ': 114202, //Selection Project
    'GKEH2G0ZK': 248086, //The Idolmster Shiny Colors
    'GXJHM3G9X': 99088, //The Stories Of Girls Who Couldnt Be Magicians
    'G61XQ9716': 82985, //The Idolmster Sidem  Wakeatte Mini
    'G649PQNWY': 42141, //Kamisama Dolls
    'GW4HM751M': 126323, //The Prince Of Tennis Ii Hyotei Vs Rikkai Game Of Future
    'GJ0H7QG4K': 123456, //Great Pretender Razbliuto
    'G6DQD29GR': 77239, //World Fool News
    'GY2PE0J5Y': 90327, //Magical Somera Chan
    'GKEH2G0N1': 216890, //Tenchi Muyo Gxp Paradise Starting
    'G6GVN11W6': 105211, //Rail Romanesque
    'GY2PQNPMY': 123456, //Twocar
    'G6ME8JGZR': 88459, //Welcome To The Japari Park
    'GJ0H7QGDK': 105902, //The Idolmster Million Live
    'G6Q4MZ8GR': 45205, //Kono Aozora Ni Yakusoku Wo
    'GRDKVQ53Y': 82929, //Anima Yell
    'G24H1NWPJ': 123456, //Psycho Pass Providence
    'GKEH2GQKX': 135691, //Ancient Girls Frame
    'G64P5GJ8R': 88298, //Snack World
    'G6KE07996': 96655, //The House Spirit Tatami Chan
    'GRZJEMV36': 123456, //Fategrand Order  Moonlightlostroom
    'G6P85VEV6': 42917, //Shin Koihime Musou
    'GZJH3D881': 102774, //Witchy Precure Mirai Days
    'G3KHEVQG5': 122626, //Tesla Note
    'G6GGP1ME6': 44321, //Web Ghosts Pipopa
    'GP5HJ83E1': 110371, //Wixoss Divaalive
    'G6X03JPMY': 231925, //Lisa Tv
    'GYWE27EJY': 20124, //Happiness
    'GYNV9JQJR': 123456, //Mischievous Kiss   The Movie
    'G0XHWM5V4': 216062, //Lees Detective Agency
    'G6VNXNE4R': 123456, //Persona5 The Animation  The Day Breakers
    'G79H235XP': 128386, //Aware Meisaku Kun
    'GR8V71P7R': 82985, //The Idolmster Sidem
    'G6NQV80X6': 123456, //Japanese Anime Classic Collection
    'GVDHX8JZE': 96556, //Lapis Relights
    'G9VHN977K': 123456, //Sing A Bit Of Harmony
    'G3KHEVDDD': 281545, //Aquarion Myth Of Emotions
    'GP5HJ8WJG': 123456, //For Whom The Alchemist Exists The Movie
    'GDKHZEJVG': 123456, //The Disappearance Of Haruhi Suzumiya
    'G6XJ0518R': 80400, //Late Night The Genius Bakabon
    'GEXH3W5WN': 95203, //Vlad Love
    'GKEH2GQ4V': 69605, //Musasi No
    'GR197V276': 123456, //Children Of Ether
    'GREME5WX6': 109786, //That Is The Bottleneck
    'G24H1NW9J': 214649, //Bullbuster
    'G6X0J1G0Y': 25275, //Yokuwakaru Gendai Maho
    'G609XMXW6': 35459, //Phantom Thief Reinya
    'G649MZM8Y': 123456, //Cosplay Complex Ova
    'G65VGZZ76': 67677, //Time Travel Girl
    'G69P3GW8Y': 74191, //Wake Up Girls
    'GYP859EJY': 71465, //Robot Girls Z
    'GYVNDKK06': 44526, //Lilpri
    'GKEH2G5P7': 95073, //Maesetsu Opening Act
    'GEXH3W2J5': 123456, //Mobile Suit Gundam Cucuruz Doans Island
    'G6X02X3EY': 123456, //Chiruran 12
    'G4PH0WJNG': 123456, //Bloody Escape Bats Out Of Hell
    'G6JQ0M9WR': 123456, //Break Ups
    'G79H23VD4': 133387, //Im Kodama Kawashiri
    'GW4HM750E': 123456, //Mass Effect
    'GW4HM75VZ': 112696, //Vazzrock The Animation
    'G1XHJVWD3': 123456, //Mobile Suit Gundam Narrative
    'GREMEVDV6': 67153, //Tsukiuta The Animation
    'GRQWDD29R': 97112, //Arp Backstage Pass
    'GR24JJ086': 123456, //Blackfox
    'GYNQXJK2Y': 77123, //Tantei Team Kz Jiken Note
    'G24H1NJQ2': 129318, //Human Lost
    'GY1XE7VGY': 88490, //King Of Prism  Shiny Seven Stars
    'GZJH3D0K2': 44281, //God Mazinger
    'GVDHX85QQ': 57052, //The Concierge
    'G0XHWM1PX': 9705, //Hiwou War Chronicles
    'G609XQWG6': 210061, //Peeping Life
    'GQWH0M18K': 82739, //Mina
    'GYNV4Z7JR': 244466, //Hakubo
    'G6GGZQ5W6': 44548, //Project Blue Earth Sos
    'GVDHX8Q91': 196042, //Opuscolors
    'GYGGKQ88Y': 69469, //Forest Fairy Five
    'G8DHV78N3': 95660, //Copihan
    'G6P84X3K6': 75776, //Maerchen Maedchen
    'GYJQ8G4V6': 71215, //Makeruna Aku No Gundan
    'GYK5JGKWR': 69287, //Idol Incidents
    'GYZXWE596': 71003, //Starmyu
    'GY09G9N4Y': 123456, //The Diary Of Ochibi Motion Manga
    'GRX03M8E6': 71669, //Takamiya Nasuno Desu
    'GY2420WPR': 85177, //Katana Maidens  Mini Toji
    'G8DHV7EEG': 130857, //Hanabichan The Girl Who Popped Out Of The Game World
    'G5PHNM7G1': 60993, //Jinsei   Life Consulting
    'GYWE22KGY': 123456, //Investor Z Motion Manga
    'GVDHX83JZ': 110792, //Idolls
    'GXJHM3GN4': 246233, //Bones 25 Dreaming Forward
    'G65J2V786': 123456, //Tales Of Crestoria  The Wake Of Sin
    'GYG5VG03Y': 82828, //Himote House A Share House Of Super Psychic Girls
    'GR190X7E6': 123456, //The Tenth Prism Motion Manga
    'GYGVNVEDY': 105473, //Katana Maidens  Tomoshibi
    'GRE5KWDX6': 123456, //Woosers Hand To Mouth Life Phantasmagoric Arc
    'GKEH2G07K': 242378, //Root   Route Of Oddtaxi
    'G6JQ2QQER': 67091, //Mahou Shoujo Naria Girls
    'GR4PQX0WY': 90847, //Hakata Mentai Pirikarako Chan
    'G6X03VD2Y': 42999, //Angel Heart
    'G6WE4W0N6': 8379, //Clif
    'GRVND1G3Y': 33439, //Unriddle
    'GRMGE945R': 123456, //Traveling Daru
    'G6Q4NJKGR': 123456, //Sorcery In The Big City
    'GRP85E0MR': 224710, //The Ultimatum
    'GVDHX8Q8P': 121947, //Muteking The Dancing Hero
    'GDKHZEPP3': 133306, //Gunmachan
    'GNVHKN9Z2': 123456, //Kurayukaba  Kuramerukagari
    'GZJH3D817': 123456, //The Roots Of To Your Eternity
    'GNVHKN9PW': 81297, //In This Corner And Other Corners Of The World
    'GY49G03ER': 53031, //Straight Title Robot Anime
    'GR3KZZ3ZR': 85480, //Virtualsan   Looking
    'GG5H5XQ2P': 46440, //Ryo
    'GYNVQ5PZR': 123456, //Calamity Of A Zombie Girl
    'GY8VXV1JY': 74822, //Million Doll
    'GEXH3WGNX': 194597, //Sony Music Animesongs Online 2022
    'G4PH0WJEG': 123456, //Gridman Universe
    'G5PHNM990': 123456, //Trapezium
    'GRMEEZNWY': 82016, //The Sprites Of Floria
    'GRKE5428R': 123456, //Starlight Promises
    'GY19N1X9R': 123456, //Why Cant Seiya Todoin 16 Year Old Get A Girlfriend
    'G6X03827Y': 90401, //Tabimachi Lateshow
    'GG5H5XDJM': 245876, //Sorairo Utility
    'GYNQXJDQY': 123456, //Shoku King Motion Manga
    'GW4HM7WXV': 123456, //Demon Slayer Kimetsu No Yaiba On Stage
    'GW4HM758E': 110207, //Gekidol
    'GYE5XGK9R': 53093, //Pes Peace Eco Smile
    'G62PE1X86': 46195, //Tsukimonogatari
    'GYGGV1MPY': 45305, //Twin Angel Twinkle Paradise
    'GQWH0M1K3': 123456, //Manie Manie Neo Tokyo
    'G3KHEV0Q1': 123456, //Brave Father Online   Our Story Of Final Fantasy Xiv
    'GNVHKNP88': 123456, //Sakura Wars The Movie
    'GZJH3DJ2X': 63011, //The Journey
    'GRJ0HK77Z': 123456, //Mizu No Kotoba
    'GYKKD90MY': 105225, //Genie Family 2020
    'GRGG388WR': 77293, //Venus Project  Climax
    'GR2P8QV2R': 76927, //Gdgd Mens Party
    'G3KHEV0M2': 123456, //Fategrand Order The Stage   The Grand Temple Of Time Solomon Ars Nova
    'G6P85JWG6': 123456, //Demian
    'GG5H5XQ95': 123456, //Demon Slayer Kimetsu No Yaiba  Orchestra Concert
    'GEXH3W2Q5': 123456, //Hula Fulla Dance
    'G9VHN97PK': 158131, //Yurei Deco
    'GYP8P4NWY': 96737, //Book Girl
    'G6Z437QXR': 114590, //Eagle Talon Golden Spell
    'GRVD1337R': 21788, //Peace Maker Kurogane
    'GR8DZQZ7R': 83117, //Rinshi Ekodachan
    'GR3K50PZR': 128427, //The Crunchyroll Anime Awards
    'G24H1NWDM': 123456, //Strawberry Prince The Movie
    'G24H1NWV7': 123456, //Chainsaw Man Festival
    'GKEH2G8N4': 123456, //Monster Strike The Movie Lucifer Dawn Of Despair
    'GP5HJ8485': 123456, //Sword Art Online  Fulldive
    'GYP5E27KY': 123456, //Kizuna Ai 1St Live Hello World
    'GYGG4ZGEY': 132560, //Strait Jacket
    'GRWEMGNER': 15446, //The Golden Path
    'GMTE00258378': 123456, //Isekai Quartet The Movie Another World
    'GMTE00335490': 123456, //Spy X Family Code White
    'GMTE00355226': 123456, //Fuuto Pi The Portrait Of Kamen Rider Skull
    'GT00351576': 259466, //Miru Paths To My Future
    'GT00361926': 284388, //A Mangakas Weirdly Wonderful Workplace
    'GT00362058': 283689, //Lil Miss Vampire Cant Suck Right
    'GT00362335': 123456, //Yano Kuns Ordinary Days
    'GT00364479': 280048, //Dad Is A Hero Mom Is A Spirit Im A Reincarnator
    'GT00364529': 239320, //So Youre Raising A Warrior
    'GT00364667': 283935, //Touring After The Apocalypse
    'GT00364694': 262453, //The Fated Magical Princess Who Made Me A Princess
    'GT00364840': 274814, //Pass The Monster Meat Milady
    'GT00365079': 283880, //Hands Off Sawaranaide Kotesashi Kun
    'GT00365233': 284433, //My Awkward Senpai
    'GXYZ123': 123456, //Gxyz123
    'G9VHN9QGG': 296287, //Plus Sized Misadventures In Love
    'G0XHWM1JP': 284644, //My Status As An Assassin Obviously Exceeds The Heros
    'G4PH0WJ8V': 296851, //Si Vis The Sound Of Heroes
    'GT00364378': 286791, //Digimon Beatbreak
    'GT00364783': 261343, //Chitose Is In The Ramune Bottle
    'GXJHM3GZJ': 289217, //Alma Chan Wants To Be A Family
    'GT00365105': 222624, //Gintama Mr Ginpachis Zany Class
    'GT00361955': 280042, //A Wild Last Boss Appeared
    'GT00362007': 286388, //Inexpressive Kashiwada And Expressive Oota
    'GT00365132': 278604, //Gnosia
    'GT00364756': 117879, //My Friends Little Sister Has It In For Me
    'GT00362195': 278059, //Shabake
    'GT00364918': 286984, //The Banished Court Magician Aims To Become The Strongest
    'G1XHJV0G7': 284442, //A Gatherers Adventure In Isekai
    'GW4HM7WQ5': 271605, //May I Ask For One Final Thing
    'G79H23ZJ9': 287278, //Mechanical Marie
    'GT00362279': 274810, //This Monster Wants To Eat Me
    'GT00364945': 285788, //Tojima Wants To Be A Kamen Rider
    'GEXH3W2N9': 293010, //Lets Play
    'GG5H5XQZQ': 286404, //The Dark History Of The Reincarnated Villainess
    'G6NQ5DWZ6': 65930, // My Hero Academia
};

// --- LISTAS DE CONTROL (WHITELISTS) ---

// Series que usan CONTEO ACUMULATIVO (1, 2, 3...)
const TMDB_CR_ID_MAP = Object.fromEntries(
    Object.entries(CR_TMDB_ID_MAP).map(([crSeriesId, tmdbId]) => [String(tmdbId), crSeriesId])
);

function buildResolvedCrunchyrollUrl(crSeriesId, countdownEntry, fallbackTitle) {
    if (!crSeriesId) {
        const searchQuery = encodeURIComponent(fallbackTitle || '');
        return searchQuery ? `https://www.crunchyroll.com/search?from=&q=${searchQuery}` : null;
    }

    const slug = countdownEntry?.slug || slugifyTitle(fallbackTitle);
    return slug
        ? `https://www.crunchyroll.com/series/${crSeriesId}/${slug}`
        : `https://www.crunchyroll.com/series/${crSeriesId}`;
}

function resolveCatalogEntry(tmdbEntry, countdownLookup) {
    const candidateTitles = [
        tmdbEntry.name,
        tmdbEntry.original_name
    ].filter(Boolean);

    let countdownEntry = null;
    for (const title of candidateTitles) {
        countdownEntry = countdownLookup.byNormalizedTitle.get(normalizeTitleForMatch(title));
        if (countdownEntry) {
            break;
        }
    }

    const crSeriesId = countdownEntry?.SerieID || TMDB_CR_ID_MAP[String(tmdbEntry.id)] || null;
    const title = tmdbEntry.name || tmdbEntry.original_name;
    const url = buildResolvedCrunchyrollUrl(crSeriesId, countdownEntry, title);
    if (!url) {
        return null;
    }

    return {
        Title: title,
        Score: Number(tmdbEntry.vote_average || 0),
        Popularity: Number(tmdbEntry.popularity || 0),
        Type: "TV",
        Streaming: "Crunchyroll",
        Image: tmdbEntry.poster_path
            ? `https://image.tmdb.org/t/p/w780${tmdbEntry.poster_path}`
            : null,
        URL: url,
        SerieID: crSeriesId,
        IsSearchFallback: !crSeriesId
    };
}

function getJikanSeasonPath(seasonInfo) {
    return `https://api.jikan.moe/v4/seasons/${seasonInfo.year}/${seasonInfo.season.toLowerCase()}`;
}

async function fetchMalCurrentSeasonCatalog() {
    const currentSeason = getCurrentAnimeSeasonInfo();
    return fetchMalSeasonCatalog(currentSeason);
}

async function fetchMalNextSeasonCatalog() {
    const nextSeason = getNextAnimeSeasonInfo();
    return fetchMalSeasonCatalog(nextSeason);
}

async function fetchMalSeasonCatalog(seasonInfo) {
    await ensureMalRateLimitAvailable();

    const countdownEntries = await loadCountdownSeriesData();
    const countdownLookup = buildCountdownLookup(countdownEntries);
    const pageNumbers = [1, 2, 3];

    const responses = await Promise.all(pageNumbers.map(async (page) => {
        const params = new URLSearchParams({ page: String(page) });
        const response = await fetch(`${getJikanSeasonPath(seasonInfo)}?${params.toString()}`);

        if (!response.ok) {
            if (response.status === 429) {
                await setMalRateLimitCooldown(response.headers.get('Retry-After'));
                throw new Error('Jikan seasonal fetch failed with 429.');
            }
            throw new Error(`Jikan seasonal fetch failed with ${response.status}.`);
        }

        return response.json();
    }));

    const dedupedEntries = new Map();

    for (const payload of responses) {
        const results = Array.isArray(payload?.data) ? payload.data : [];
        for (const item of results) {
            if (!item?.mal_id || dedupedEntries.has(item.mal_id)) {
                continue;
            }
            if (item?.type !== 'TV' || item?.season !== seasonInfo.season.toLowerCase()) {
                continue;
            }

            dedupedEntries.set(item.mal_id, item);
        }
    }

    const resolvedEntries = Array.from(dedupedEntries.values())
        .map(item => {
            const tmdbLikeEntry = {
                id: item.mal_id,
                name: item.title_english || item.title,
                original_name: item.title,
                poster_path: null,
                vote_average: Number(item.score || 0),
                popularity: Number(item.popularity || Number.MAX_SAFE_INTEGER)
            };

            const resolved = resolveCatalogEntry(tmdbLikeEntry, countdownLookup);
            if (!resolved) {
                return null;
            }

            resolved.Image = item.images?.jpg?.large_image_url ||
                item.images?.jpg?.image_url ||
                item.images?.webp?.large_image_url ||
                resolved.Image;
            resolved.Score = Number(item.score || 0);
            resolved.Popularity = Number(item.popularity || Number.MAX_SAFE_INTEGER);
            resolved.Members = Number(item.members || 0);
            resolved.Title = item.title_english || item.title || resolved.Title;
            return resolved;
        })
        .filter(Boolean);

    return {
        season: seasonInfo.season,
        year: seasonInfo.year,
        seasonLabel: `${seasonInfo.season} ${seasonInfo.year}`,
        fetchedAt: Date.now(),
        cacheVersion: SEASONAL_CATALOG_CACHE_VERSION,
        source: 'mal',
        data: resolvedEntries
    };
}

async function getCurrentSeasonCatalog(options = {}) {
    const forceRefresh = Boolean(options.forceRefresh);
    const currentSeason = getCurrentAnimeSeasonInfo();
    const cache = await readStorageValue(SEASONAL_CATALOG_CACHE_KEY);
    const isFreshCache = cache &&
        cache.cacheVersion === SEASONAL_CATALOG_CACHE_VERSION &&
        cache.season === currentSeason.season &&
        cache.year === currentSeason.year &&
        Array.isArray(cache.data) &&
        cache.data.length > 0 &&
        (Date.now() - cache.fetchedAt) < SEASONAL_CATALOG_CACHE_DURATION_MS;

    if (!forceRefresh && isFreshCache) {
        return {
            ...cache,
            cacheStatus: 'hit'
        };
    }

    return withSeasonCatalogInFlight('current', async () => {
        try {
            const liveCatalog = await fetchMalCurrentSeasonCatalog();
            if (Array.isArray(liveCatalog.data) && liveCatalog.data.length > 0) {
                await writeStorageValue(SEASONAL_CATALOG_CACHE_KEY, liveCatalog);
                return {
                    ...liveCatalog,
                    cacheStatus: cache ? 'refresh' : 'miss'
                };
            }

            throw new Error('Live seasonal catalog resolved to zero Crunchyroll entries.');
        } catch (error) {
            if (cache &&
                cache.cacheVersion === SEASONAL_CATALOG_CACHE_VERSION &&
                cache.season === currentSeason.season &&
                cache.year === currentSeason.year &&
                Array.isArray(cache.data) &&
                cache.data.length > 0) {
                return {
                    ...cache,
                    cacheStatus: 'stale-fallback',
                    warning: error.message
                };
            }

            return buildEmptySeasonalCatalog(currentSeason, error.message, 'live-failed');
        }
    });
}

async function getNextSeasonCatalog() {
    const nextSeason = getNextAnimeSeasonInfo();
    const cache = await readStorageValue(NEXT_SEASONAL_CATALOG_CACHE_KEY);
    const isFreshCache = cache &&
        cache.cacheVersion === SEASONAL_CATALOG_CACHE_VERSION &&
        cache.season === nextSeason.season &&
        cache.year === nextSeason.year &&
        Array.isArray(cache.data) &&
        cache.data.length > 0 &&
        (Date.now() - cache.fetchedAt) < SEASONAL_CATALOG_CACHE_DURATION_MS;

    if (isFreshCache) {
        return {
            ...cache,
            cacheStatus: 'hit'
        };
    }

    return withSeasonCatalogInFlight('next', async () => {
        try {
            const liveCatalog = await fetchMalNextSeasonCatalog();
            if (Array.isArray(liveCatalog.data) && liveCatalog.data.length > 0) {
                await writeStorageValue(NEXT_SEASONAL_CATALOG_CACHE_KEY, liveCatalog);
                return {
                    ...liveCatalog,
                    cacheStatus: cache ? 'refresh' : 'miss'
                };
            }

            throw new Error('Next season catalog resolved to zero entries.');
        } catch (error) {
            if (cache &&
                cache.cacheVersion === SEASONAL_CATALOG_CACHE_VERSION &&
                cache.season === nextSeason.season &&
                cache.year === nextSeason.year &&
                Array.isArray(cache.data) &&
                cache.data.length > 0) {
                return {
                    ...cache,
                    cacheStatus: 'stale-fallback',
                    warning: error.message
                };
            }

            return buildEmptySeasonalCatalog(nextSeason, error.message, 'live-failed');
        }
    });
}

async function fetchTmdbSeasonDetails(seriesId) {
    const tmdbId = CR_TMDB_ID_MAP[seriesId];
    if (!tmdbId) {
        return null;
    }

    const cacheKey = `${TMDB_SEASON_DETAILS_CACHE_PREFIX}${seriesId}`;
    const cache = await readStorageValue(cacheKey);
    const isFreshCache = cache &&
        cache.seriesId === seriesId &&
        cache.fetchedAt &&
        (Date.now() - cache.fetchedAt) < TMDB_SEASON_DETAILS_CACHE_DURATION_MS &&
        cache.bySeasonNumber;

    if (isFreshCache) {
        return cache;
    }

    const seriesResponse = await fetch(`${TMDB_API_BASE}/tv/${tmdbId}`, { headers: TMDB_HEADERS });
    if (!seriesResponse.ok) {
        throw new Error(`TMDb series details failed with ${seriesResponse.status}.`);
    }

    const seriesData = await seriesResponse.json();
    const seasonSummaries = Array.isArray(seriesData?.seasons) ? seriesData.seasons : [];
    const seasonPromises = seasonSummaries
        .filter(season => season && typeof season.season_number === 'number')
        .map(async (season) => {
            const seasonResponse = await fetch(`${TMDB_API_BASE}/tv/${tmdbId}/season/${season.season_number}`, {
                headers: TMDB_HEADERS
            });

            if (!seasonResponse.ok) {
                return null;
            }

            return seasonResponse.json();
        });

    const seasonDetails = await Promise.all(seasonPromises);
    const studio = (Array.isArray(seriesData.production_companies) ? seriesData.production_companies : [])
        .map(company => company?.name)
        .filter(Boolean)
        .join(', ');
    const bySeasonNumber = {};

    for (const seasonData of seasonDetails) {
        if (!seasonData || typeof seasonData.season_number !== 'number') {
            continue;
        }

        const seasonNumber = seasonData.season_number;
        const airDate = seasonData.air_date || null;
        const episodeCount = Array.isArray(seasonData.episodes)
            ? `${seasonData.episodes.length} Episodes`
            : (seasonData.episodes?.length ? `${seasonData.episodes.length} Episodes` : null);
        const subtitleBase = seriesData.name || seriesData.original_name || '';
        const seasonName = seasonData.name || `Season ${seasonNumber}`;
        const subtitle = seasonNumber === 0
            ? `${subtitleBase} ${seasonName}`.trim()
            : `${subtitleBase} ${seasonName}`.trim();

        bySeasonNumber[String(seasonNumber)] = {
            seasonNumber,
            title: seasonName,
            subtitle,
            poster: seasonData.poster_path
                ? `https://image.tmdb.org/t/p/w780${seasonData.poster_path}`
                : (seriesData.poster_path ? `https://image.tmdb.org/t/p/w780${seriesData.poster_path}` : null),
            studio,
            episodeCount,
            year: airDate ? airDate.slice(0, 4) : null
        };
    }

    const payload = {
        seriesId,
        tmdbId,
        fetchedAt: Date.now(),
        bySeasonNumber
    };

    await writeStorageValue(cacheKey, payload);
    return payload;
}

const CUMULATIVE_MAPPING_IDS = [
    'G6NQ5DWZ6', // My Hero Academia
    'G4PH0WXVJ', // Spy Family
    'GRGGPG93R', // Fullmetal Alchemist Brotherhood
    'GR751KNZY', //Attack On Titan
    'GQWH0MPQ7', //The Caf Terrace And Its Goddesses
];

// Series que usan solo Número de Episodio (E#) y no S# E# (VACÍA - no es necesaria)
const SIMPLE_EPISODE_ONLY_IDS = []; // Se mantiene por si se necesita más tarde

// 🔑 NOTA: La lista ABSOLUTE_EPISODE_IDS ha sido eliminada.

const seriesRatingsCache = {};

// 🔑 FUNCIÓN FINAL (Simplificada)
async function getSeriesRatings(crSeriesId) {
    if (seriesRatingsCache[crSeriesId]) {
        return seriesRatingsCache[crSeriesId];
    }
    
    const tmdbId = CR_TMDB_ID_MAP[crSeriesId];
    const ratingsMap = {}; // episode_key: rating

    if (!tmdbId) return null;

    // DETERMINAR EL TIPO DE MAPEO REQUERIDO
    const isCumulative = CUMULATIVE_MAPPING_IDS.includes(crSeriesId);
    // 🔑 NOTA: 'isAbsoluteEpisode' ha sido eliminada.
    
    try {
        const seriesResponse = await fetch(`${TMDB_API_BASE}/tv/${tmdbId}`, { headers: TMDB_HEADERS });
        if (!seriesResponse.ok) throw new Error("Fallo al obtener detalles de la serie.");
        const seriesData = await seriesResponse.json();
        
        const sortedSeasons = seriesData.seasons
            .filter(s => s.season_number >= 1 && s.air_date) 
            .sort((a, b) => a.season_number - b.season_number); 
        
        const seasonPromises = sortedSeasons.map(async (season) => {
            const seasonNumber = season.season_number;
            const seasonResponse = await fetch(`${TMDB_API_BASE}/tv/${tmdbId}/season/${seasonNumber}`, { headers: TMDB_HEADERS });
            if (seasonResponse.ok) return seasonResponse.json();
            return null;
        });

        const allSeasonsData = await Promise.all(seasonPromises);

        let cumulativeCounter = 0;

        for (const seasonData of allSeasonsData) { 
            if (seasonData && seasonData.episodes) {
                
                for (const ep of seasonData.episodes) {
                    if (ep.vote_average > 0) {
                        const rating = ep.vote_average.toFixed(1);
                        
                        // 1. Mapeo por Número de Episodio (BASE / SIMPLE: Ej. '10', '62', '200')
                        ratingsMap[String(ep.episode_number)] = rating;
                        
                        // 2. Mapeo por Clave de Temporada (S# E#: Ej. 'S2 E10')
                        ratingsMap[`S${ep.season_number} E${ep.episode_number}`] = rating;

                        // 3. Mapeo ACUMULATIVO (Solo para series en CUMULATIVE_MAPPING_IDS)
                        if (isCumulative) {
                            cumulativeCounter++; 
                            ratingsMap[String(cumulativeCounter)] = rating; 
                        }
                    }
                }
            }
        }

        if (Object.keys(ratingsMap).length > 0) {
             seriesRatingsCache[crSeriesId] = ratingsMap;
             return ratingsMap;
        }

        return null;
        
    } catch (error) {
        console.error("[TMDb Service] Error al procesar datos de TMDb:", error);
        return null;
    }
}

// Listener de Mensajes (Se mantiene igual)
chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if (req.action === "fetchTmdbRatings") {
        getSeriesRatings(req.seriesId)
            .then(r => sendResponse({ success: true, ratings: r }))
            .catch(e => sendResponse({ success: false, error: e }));
        return true;
    }

    if (req.action === "fetchCurrentSeasonCatalog") {
        getCurrentSeasonCatalog({ forceRefresh: req.forceRefresh })
            .then(payload => sendResponse({ success: true, ...payload }))
            .catch(error => sendResponse({ success: false, error: error.message }));
        return true;
    }

    if (req.action === "fetchNextSeasonCatalog") {
        getNextSeasonCatalog()
            .then(payload => sendResponse({ success: true, ...payload }))
            .catch(error => sendResponse({ success: false, error: error.message }));
        return true;
    }

    if (req.action === "fetchTmdbSeasonDetails") {
        fetchTmdbSeasonDetails(req.seriesId)
            .then(payload => sendResponse({ success: true, details: payload }))
            .catch(error => sendResponse({ success: false, error: error.message }));
        return true;
    }
});
