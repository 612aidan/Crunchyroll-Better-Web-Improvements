(function() {

// =========================
// REUSABLE COLOR BLOCK DEFINITIONS
// =========================

const whiteAccentColors = {
    "--series-hero-action-tooltip-color": "#e7e7e7ff",
    "--series-hero-action-tooltip-color-hover": "#ffffffff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const blueAccentColors = {
    "--series-hero-action-tooltip-color": "#0097d6",
    "--series-hero-action-tooltip-color-hover": "#58afd4ff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const redAccentColors = {
    "--series-hero-action-tooltip-color": "#ea1118",
    "--series-hero-action-tooltip-color-hover": "#ec3b41ff",
    "--button-accent-color-outline": "#414141",
    "--button-accent-text-color-default": "#000000",
};

const darkredAccentColors = {
    "--series-hero-action-tooltip-color": "#d00000",
    "--series-hero-action-tooltip-color-hover": "#d15252ff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const vibrantredAccentColors = {
    "--series-hero-action-tooltip-color": "#ff003c",
    "--series-hero-action-tooltip-color-hover": "#d15252ff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const softredAccentColors = {
    "--series-hero-action-tooltip-color": "#e3241f",
    "--series-hero-action-tooltip-color-hover": "#fc2c24ff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const otrorojoAccentColors = {
    "--series-hero-action-tooltip-color": "#e30015",
    "--series-hero-action-tooltip-color-hover": "#e04454ff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const darkgreenAccentColors = {
    "--series-hero-action-tooltip-color": "#41775a",
    "--series-hero-action-tooltip-color-hover": "#597a69ff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const softgreenAccentColors = {
    "--series-hero-action-tooltip-color": "#25a98a",
    "--series-hero-action-tooltip-color-hover": "#31dab2ff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const softdarkgreenAccentColors = {
    "--series-hero-action-tooltip-color": "#74927a",
    "--series-hero-action-tooltip-color-hover": "#9fc7a7ff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const pinkAccentColors = {
    "--series-hero-action-tooltip-color": "#ee86b5",
    "--series-hero-action-tooltip-color-hover": "#ebafcaff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const yellowAccentColors = {
    "--series-hero-action-tooltip-color": "#ffde03",
    "--series-hero-action-tooltip-color-hover": "#fce972ff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const darkorangeAccentColors = {
    "--series-hero-action-tooltip-color": "#ffa001",
    "--series-hero-action-tooltip-color-hover": "#fdc76aff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const darkyellowAccentColors = {
    "--series-hero-action-tooltip-color": "#c38b03",
    "--series-hero-action-tooltip-color-hover": "#fdc76aff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const softwhiteAccentColors = {
    "--series-hero-action-tooltip-color": "#f9e9e1",
    "--series-hero-action-tooltip-color-hover": "#ffffffff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const silverAccentColors = {
    "--series-hero-action-tooltip-color": "#cdebfb",
    "--series-hero-action-tooltip-color-hover": "#ffffffff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const aquaAccentColors = {
    "--series-hero-action-tooltip-color": "#00eee0",
    "--series-hero-action-tooltip-color-hover": "#93ded9",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const celesteAccentColors = {
    "--series-hero-action-tooltip-color": "#4da5c3",
    "--series-hero-action-tooltip-color-hover": "#64d7fdff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const doradoAccentColors = {
    "--series-hero-action-tooltip-color": "#ded47a",
    "--series-hero-action-tooltip-color-hover": "#f5e4baff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const rojoAccentColors = {
    "--series-hero-action-tooltip-color": "#f03d3e",
    "--series-hero-action-tooltip-color-hover": "#ee5555ff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const greyAccentColors = {
    "--series-hero-action-tooltip-color": "#b1b2b4",
    "--series-hero-action-tooltip-color-hover": "#fafafaff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const magentaAccentColors = {
    "--series-hero-action-tooltip-color": "#2dffd2",
    "--series-hero-action-tooltip-color-hover": "#abfae9ff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const cafeAccentColors = {
    "--series-hero-action-tooltip-color": "#9f8b72",
    "--series-hero-action-tooltip-color-hover": "#d1b797ff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const verdeamarillentoAccentColors = {
    "--series-hero-action-tooltip-color": "#afd100",
    "--series-hero-action-tooltip-color-hover": "#d4ff00ff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};

const moradoclaroAccentColors = {
    "--series-hero-action-tooltip-color": "#b53c6b",
    "--series-hero-action-tooltip-color-hover": "#ac5e7cff",
    "--button-accent-color-outline": "#ffffff",
    "--button-accent-text-color-default": "#000000",
};


// =========================
// PER-SERIES COLOR CONFIGURATION
// =========================
const seriesColors = {
  "GG5H5XQ0D": // Dandadan
  redAccentColors,

  "GP5HJ84P7": // Gackikuta
  darkredAccentColors,

  "G6W4QKX0R": // The Rising of the Shield Hero
  darkgreenAccentColors,

  "GQWH0M9N8": // My Dress-Up Darling
  pinkAccentColors,

  "GRMG8ZQZR": // One Piece
  blueAccentColors,

  "GYEXQKJG6": // Dr Stone
  darkorangeAccentColors,

  "GDKHZEJ0K": // Solo Leveling
  whiteAccentColors,

  "GQWH0M1J3": // To Be Hero X
  whiteAccentColors,

  "G6NQ5DWZ6": // My Hero Academia
  softgreenAccentColors,

  "GG5H5XQG5": // The Water Magician
  blueAccentColors,

  "G1XHJV0M7": // Apocalypse Bringer Mynoghra: World Conquest Starts with the Civilization of Ruin
  darkredAccentColors,

  "G24H1N3ZP": // Toilet-bound Hanako-kun
  whiteAccentColors,

  "G63K98PZ6": // One Punch Man
  softredAccentColors,

  "G9VHN9Q3G": // Secrets of the Silent Witch
  whiteAccentColors,

  "GDKHZEJN0": // Dragon Raja
  darkyellowAccentColors,

  "GJ0H7QG4E": // i-was-reincarnated-as-the-7th-prince-so-i-can-take-my-time-perfecting-my-magical-ability
  vibrantredAccentColors,

  "GP5HJ84D2": // tougen-anki
  whiteAccentColors,

  "G8DHV78ZM": // clevatess
  darkredAccentColors,

  "G5PHNM9Q0": // scooped-up-by-an-s-rank-adventurer
  darkyellowAccentColors,

  "GVDHX859Q": // new-saga
  darkredAccentColors,

  "GNVHKN94W": // grand-blue-dreaming
  yellowAccentColors,

  "GYQ4MKDZ6": // Gintama
  silverAccentColors,

  "GVDHX8548": // dealing-with-mikadono-sisters-is-a-breeze
  softredAccentColors,

  "GG5H5XQ7D": // kaiju-no-8
  aquaAccentColors,

  "G4PH0WXVJ": //spy-x-family
  softdarkgreenAccentColors,

  "GT00365105": //gintama-mr-ginpachis-zany-class
  celesteAccentColors,

  "GYZJ43JMR": // that-time-i-got-reincarnated-as-a-slime
  blueAccentColors,

  "GRE50KV36": // black-clover
  whiteAccentColors,

  "GY5P48XEY": // demon-slayer-kimetsu-no-yaiba
  redAccentColors,

  "GRDV0019R": // jujutsu-kaisen
  doradoAccentColors,

  "G6DQDD3WR": // Fairy Tail
  rojoAccentColors,

  "GYQWNXPZY": // Fire Force
  softredAccentColors,

  "GR751KNZY": // attack-on-titan
  whiteAccentColors,

  "GVDHX8QNW": // chainsaw-man
  whiteAccentColors,

  "GRGGPG93R": // fullmetal-alchemist-brotherhood
  greyAccentColors,

  "GY190DKQR": // mob psycho 100
  magentaAccentColors,

  "GR5VXQ8PR": // bungo stray dogs
  cafeAccentColors,

  "G6NVG970Y": // welcome-to-demon-school-iruma-kun
  verdeamarillentoAccentColors,

  "G3KHEVDZ8": // solo-camping-for-two
  otrorojoAccentColors,

  "GG5H5XMWV": // to-your-eternity
  moradoclaroAccentColors,

};

// =========================
// DEFAULT COLOR SET (when not on a series page)
// =========================
const defaultColors = {
  "--series-hero-action-tooltip-color": "#ff640a",
  "--series-hero-action-tooltip-color-hover": "#fa985fff",
  "--button-accent-color-outline": "#414141",
  "--button-accent-text-color-default": "#000000",
};

// =========================
// FUNCTION: get the series ID
// =========================
function getSeriesId() {
  const match = window.location.pathname.match(/\/series\/([^\/]+)/);
  return match ? match[1] : null;
}

// =========================
// FUNCTION: clear custom colors
// =========================
function resetColors() {
  const root = document.documentElement;

  // Remove all series-specific colors
  for (const vars of Object.values(seriesColors)) {
    for (const key of Object.keys(vars)) {
      root.style.removeProperty(key);
    }
  }

  // Apply the default colors
  for (const [varName, color] of Object.entries(defaultColors)) {
    root.style.setProperty(varName, color);
  }

  console.log("[CrunchyrollColorChanger] Colors restored (discover mode)");
}

// =========================
// FUNCTION: apply the series colors
// =========================
function applySeriesColors(seriesId) {
  const colors = seriesColors[seriesId];
  const root = document.documentElement;

  // Clear any previously applied colors
  for (const vars of Object.values(seriesColors)) {
    for (const key of Object.keys(vars)) {
      root.style.removeProperty(key);
    }
  }

  if (colors) {
    // Apply the new colors
    for (const [varName, color] of Object.entries(colors)) {
      root.style.setProperty(varName, color);
    }

    console.log(`[CrunchyrollColorChanger] Colors applied to ${seriesId}`);
  } else {
    // If there is no configuration, restore the defaults
    resetColors();
    console.log(`[CrunchyrollColorChanger] Series ${seriesId} has no configuration — restoring colors`);
  }
}

// =========================
// URL CHANGE OBSERVER
// =========================
let lastURL = location.href;

const urlObserver = new MutationObserver(() => {
  if (location.href !== lastURL) {
    lastURL = location.href;
    const newId = getSeriesId();

    if (newId) {
      // Navigated into a series page
      setTimeout(() => applySeriesColors(newId), 800);
    } else {
      // Navigated back to a regular page (for example, discover)
      setTimeout(() => resetColors(), 500);
    }
  }
});

urlObserver.observe(document, { childList: true, subtree: true });

// =========================
// INITIAL EXECUTION
// =========================
window.addEventListener("load", () => {
  const seriesId = getSeriesId();
  if (seriesId) {
    setTimeout(() => applySeriesColors(seriesId), 800);
  } else {
    setTimeout(() => resetColors(), 500);
  }
});


})();
