const GLOBAL_DATA_KEY = 'CRB_FILLER_DATA';

const EPISODE_DATA_MAP = {
'GRMG8ZQZR': //ONE PIECE
[ 
  {
    "#": 1,
    "Title": "I'm Luffy! The Man Who's Gonna Be King of the Pirates!",
    "Type": "Manga Canon",
    "Airdate": "1999-10-20T07:00:00.000Z"
  },
  {
    "#": 2,
    "Title": "Enter the Great Swordsman! Pirate Hunter Roronoa Zoro!",
    "Type": "Manga Canon",
    "Airdate": "1999-11-17T08:00:00.000Z"
  },
  {
    "#": 3,
    "Title": "Morgan vs. Luffy! Who's the Mysterious Pretty Girl?",
    "Type": "Manga Canon",
    "Airdate": "1999-11-24T08:00:00.000Z"
  },
  {
    "#": 4,
    "Title": "Luffy's Past! Enter Red-Haired Shanks!",
    "Type": "Manga Canon",
    "Airdate": "1999-12-08T08:00:00.000Z"
  },
  {
    "#": 5,
    "Title": "A Terrifying Mysterious Power! Captain Buggy, the Clown Pirate!",
    "Type": "Manga Canon",
    "Airdate": "1999-12-15T08:00:00.000Z"
  },
  {
    "#": 6,
    "Title": "Desperate Situation! Beast Tamer Mohji vs. Luffy!",
    "Type": "Manga Canon",
    "Airdate": "1999-12-29T08:00:00.000Z"
  },
  {
    "#": 7,
    "Title": "Epic Showdown! Swordsman Zoro vs. Acrobat Cabaji!",
    "Type": "Manga Canon",
    "Airdate": "1999-12-29T08:00:00.000Z"
  },
  {
    "#": 8,
    "Title": "Who Is the Victor? Devil Fruit Power Showdown!",
    "Type": "Manga Canon",
    "Airdate": "1999-12-29T08:00:00.000Z"
  },
  {
    "#": 9,
    "Title": "The Honorable Liar? Captain Usopp!",
    "Type": "Manga Canon",
    "Airdate": "2000-01-12T08:00:00.000Z"
  },
  {
    "#": 10,
    "Title": "The Weirdest Guy Ever! Jango the Hypnotist!",
    "Type": "Manga Canon",
    "Airdate": "2000-01-19T08:00:00.000Z"
  },
  {
    "#": 11,
    "Title": "Expose the Plot! Pirate Butler, Captain Kuro!",
    "Type": "Manga Canon",
    "Airdate": "2000-01-26T08:00:00.000Z"
  },
  {
    "#": 12,
    "Title": "Clash With the Black Cat Pirates! The Great Battle on the Slope!",
    "Type": "Manga Canon",
    "Airdate": "2000-02-02T08:00:00.000Z"
  },
  {
    "#": 13,
    "Title": "The Terrifying Duo! Meowban Brothers vs. Zoro!",
    "Type": "Manga Canon",
    "Airdate": "2000-02-09T08:00:00.000Z"
  },
  {
    "#": 14,
    "Title": "Luffy Back in Action! Miss Kaya's Desperate Resistance!",
    "Type": "Manga Canon",
    "Airdate": "2000-02-16T08:00:00.000Z"
  },
  {
    "#": 15,
    "Title": "Beat Kuro! Usopp the Man's Tearful Resolve!",
    "Type": "Manga Canon",
    "Airdate": "2000-02-23T08:00:00.000Z"
  },
  {
    "#": 16,
    "Title": "Protect Kaya! The Usopp Pirates' Great Efforts!",
    "Type": "Manga Canon",
    "Airdate": "2000-03-01T08:00:00.000Z"
  },
  {
    "#": 17,
    "Title": "Anger Explosion! Kuro vs. Luffy! How It Ends!",
    "Type": "Manga Canon",
    "Airdate": "2000-03-08T08:00:00.000Z"
  },
  {
    "#": 18,
    "Title": "You're the Weird Creature! Gaimon and His Strange Friends!",
    "Type": "Manga Canon",
    "Airdate": "2000-03-15T08:00:00.000Z"
  },
  {
    "#": 19,
    "Title": "The Three-Sword Style's Past! Zoro and Kuina's Vow!",
    "Type": "Manga Canon",
    "Airdate": "2000-03-22T08:00:00.000Z"
  },
  {
    "#": 20,
    "Title": "Famous Cook! Sanji of the Sea Restaurant!",
    "Type": "Manga Canon",
    "Airdate": "2000-04-12T07:00:00.000Z"
  },
  {
    "#": 21,
    "Title": "Unwelcome Customer! Sanji's Food and Ghin's Debt!",
    "Type": "Manga Canon",
    "Airdate": "2000-04-12T07:00:00.000Z"
  },
  {
    "#": 22,
    "Title": "The Strongest Pirate Fleet! Commodore Don Krieg!",
    "Type": "Manga Canon",
    "Airdate": "2000-04-26T07:00:00.000Z"
  },
  {
    "#": 23,
    "Title": "Protect Baratie! The Great Pirate, Red Foot Zeff!",
    "Type": "Manga Canon",
    "Airdate": "2000-05-03T07:00:00.000Z"
  },
  {
    "#": 24,
    "Title": "Hawk-Eye Mihawk! The Great Swordsman Zoro Falls at Sea!",
    "Type": "Manga Canon",
    "Airdate": "2000-05-10T07:00:00.000Z"
  },
  {
    "#": 25,
    "Title": "The Deadly Foot Technique Bursts Forth! Sanji vs. the Invincible Pearl!",
    "Type": "Manga Canon",
    "Airdate": "2000-05-17T07:00:00.000Z"
  },
  {
    "#": 26,
    "Title": "Zeff and Sanji's Dream! The Illusory All Blue!",
    "Type": "Manga Canon",
    "Airdate": "2000-05-24T07:00:00.000Z"
  },
  {
    "#": 27,
    "Title": "Cool-Headed, Cold-Hearted Demon! Pirate Fleet Chief Commander Ghin!",
    "Type": "Manga Canon",
    "Airdate": "2000-05-31T07:00:00.000Z"
  },
  {
    "#": 28,
    "Title": "I Won't Die! Fierce Battle, Luffy vs. Krieg!",
    "Type": "Manga Canon",
    "Airdate": "2000-06-07T07:00:00.000Z"
  },
  {
    "#": 29,
    "Title": "The Conclusion of the Deadly Battle! A Spear of Blind Determination!",
    "Type": "Manga Canon",
    "Airdate": "2000-06-21T07:00:00.000Z"
  },
  {
    "#": 30,
    "Title": "Set Sail! The Seafaring Cook Sets off With Luffy!",
    "Type": "Manga Canon",
    "Airdate": "2000-06-28T07:00:00.000Z"
  },
  {
    "#": 31,
    "Title": "The Worst Man in the Eastern Seas! Fish-Man Pirate Arlong!",
    "Type": "Manga Canon",
    "Airdate": "2000-07-12T07:00:00.000Z"
  },
  {
    "#": 32,
    "Title": "Witch of Cocoyashi Village! Arlong's Female Leader!",
    "Type": "Manga Canon",
    "Airdate": "2000-07-19T07:00:00.000Z"
  },
  {
    "#": 33,
    "Title": "Usopp Dead?! When Is Luffy Going To Make Landfall?!",
    "Type": "Manga Canon",
    "Airdate": "2000-07-19T07:00:00.000Z"
  },
  {
    "#": 34,
    "Title": "Everyone's Gathered! Usopp Speaks the Truth About Nami!",
    "Type": "Manga Canon",
    "Airdate": "2000-07-26T07:00:00.000Z"
  },
  {
    "#": 35,
    "Title": "Untold Past! Female Warrior Bellemere!",
    "Type": "Manga Canon",
    "Airdate": "2000-08-02T07:00:00.000Z"
  },
  {
    "#": 36,
    "Title": "Survive! Mother Bellemere and Nami's Bond!",
    "Type": "Manga Canon",
    "Airdate": "2000-08-09T07:00:00.000Z"
  },
  {
    "#": 37,
    "Title": "Luffy Rises! Result of the Broken Promise!",
    "Type": "Manga Canon",
    "Airdate": "2000-08-16T07:00:00.000Z"
  },
  {
    "#": 38,
    "Title": "Luffy in Big Trouble! Fish-Men vs. the Luffy Pirates!",
    "Type": "Manga Canon",
    "Airdate": "2000-08-23T07:00:00.000Z"
  },
  {
    "#": 39,
    "Title": "Luffy Submerged! Zoro vs. Hatchan the Octopus!",
    "Type": "Manga Canon",
    "Airdate": "2000-08-30T07:00:00.000Z"
  },
  {
    "#": 40,
    "Title": "Proud Warriors! Sanji and Usopp's Fierce Battles!",
    "Type": "Manga Canon",
    "Airdate": "2000-09-06T07:00:00.000Z"
  },
  {
    "#": 41,
    "Title": "Luffy at Full Power! Nami's Determination and the Straw Hat!",
    "Type": "Manga Canon",
    "Airdate": "2000-09-13T07:00:00.000Z"
  },
  {
    "#": 42,
    "Title": "Explosion! Fish-Man Arlong's Fierce Assault From the Sea!",
    "Type": "Manga Canon",
    "Airdate": "2000-09-27T07:00:00.000Z"
  },
  {
    "#": 43,
    "Title": "End of the Fish-Man Empire! Nami's My Friend!",
    "Type": "Manga Canon",
    "Airdate": "2000-09-27T07:00:00.000Z"
  },
  {
    "#": 44,
    "Title": "Setting Out With a Smile! Farewell, Hometown Cocoyashi Village!",
    "Type": "Manga Canon",
    "Airdate": "2000-10-11T07:00:00.000Z"
  },
  {
    "#": 45,
    "Title": "Bounty! Straw Hat Luffy Becomes Known to the World!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2000-10-25T07:00:00.000Z"
  },
  {
    "#": 46,
    "Title": "Chase Straw Hat! Little Buggy's Big Adventure!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2000-11-01T08:00:00.000Z"
  },
  {
    "#": 47,
    "Title": "The Wait Is Over! The Return of Captain Buggy!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2000-11-08T08:00:00.000Z"
  },
  {
    "#": 48,
    "Title": "The Town of the Beginning and the End! Landfall at Loguetown!",
    "Type": "Manga Canon",
    "Airdate": "2000-11-22T08:00:00.000Z"
  },
  {
    "#": 49,
    "Title": "Kitetsu III and Yubashiri! Zoro's New Swords and the Woman Sergeant Major!",
    "Type": "Manga Canon",
    "Airdate": "2000-11-22T08:00:00.000Z"
  },
  {
    "#": 50,
    "Title": "Usopp vs. Daddy the Parent! Showdown at High!",
    "Type": "Anime Canon",
    "Airdate": "2000-11-29T08:00:00.000Z"
  },
  {
    "#": 51,
    "Title": "Fiery Cooking Battle? Sanji vs. the Beautiful Chef!",
    "Type": "Anime Canon",
    "Airdate": "2000-12-06T08:00:00.000Z"
  },
  {
    "#": 52,
    "Title": "Buggy’s Revenge! The Man Who Smiles on the Execution Platform!",
    "Type": "Manga Canon",
    "Airdate": "2000-12-13T08:00:00.000Z"
  },
  {
    "#": 53,
    "Title": "The Legend Has Started! Head for the Grand Line!",
    "Type": "Manga Canon",
    "Airdate": "2001-01-10T08:00:00.000Z"
  },
  {
    "#": 54,
    "Title": "Precursor to a New Adventure! Apis, a Mysterious Girl!",
    "Type": "Filler",
    "Airdate": "2001-01-17T08:00:00.000Z"
  },
  {
    "#": 55,
    "Title": "Miraculous Creature! Apis' Secret and the Legendary Island!",
    "Type": "Filler",
    "Airdate": "2001-01-24T08:00:00.000Z"
  },
  {
    "#": 56,
    "Title": "Eric Attacks! Great Escape From Warship Island!",
    "Type": "Filler",
    "Airdate": "2001-01-31T08:00:00.000Z"
  },
  {
    "#": 57,
    "Title": "A Solitary Island in the Distant Sea! The Legendary Lost Island!",
    "Type": "Filler",
    "Airdate": "2001-02-07T08:00:00.000Z"
  },
  {
    "#": 58,
    "Title": "Showdown in the Ruins! Tense Zoro vs. Eric!",
    "Type": "Filler",
    "Airdate": "2001-02-21T08:00:00.000Z"
  },
  {
    "#": 59,
    "Title": "Luffy, Completely Surrounded! Commodore Nelson's Secret Strategy!",
    "Type": "Filler",
    "Airdate": "2001-02-21T08:00:00.000Z"
  },
  {
    "#": 60,
    "Title": "Through the Sky They Soar! The 1000 Year Legend Lives Again!",
    "Type": "Filler",
    "Airdate": "2001-02-28T08:00:00.000Z"
  },
  {
    "#": 61,
    "Title": "An Angry Showdown! Cross the Red Line!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2001-03-07T08:00:00.000Z"
  },
  {
    "#": 62,
    "Title": "The First Line of Defense? The Giant Whale Laboon Appears!",
    "Type": "Manga Canon",
    "Airdate": "2001-03-21T08:00:00.000Z"
  },
  {
    "#": 63,
    "Title": "A Promise Between Men! Luffy and the Whale Vow to Meet Again!",
    "Type": "Manga Canon",
    "Airdate": "2001-03-21T08:00:00.000Z"
  },
  {
    "#": 64,
    "Title": "A Town That Welcomes Pirates? Setting Foot on Whisky Peak!",
    "Type": "Manga Canon",
    "Airdate": "2001-04-15T07:00:00.000Z"
  },
  {
    "#": 65,
    "Title": "Explosion! The Three Swords Style! Zoro vs. Baroque Works!",
    "Type": "Manga Canon",
    "Airdate": "2001-04-15T07:00:00.000Z"
  },
  {
    "#": 66,
    "Title": "All Out Battle! Luffy vs. Zoro, Mysterious Grand Duel!",
    "Type": "Manga Canon",
    "Airdate": "2001-04-22T07:00:00.000Z"
  },
  {
    "#": 67,
    "Title": "Deliver Princess Vivi! The Luffy Pirates Set Sail!",
    "Type": "Manga Canon",
    "Airdate": "2001-04-29T07:00:00.000Z"
  },
  {
    "#": 68,
    "Title": "Try Hard, Coby! Coby and Helmeppo’s Struggles in the Marines!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2001-05-13T07:00:00.000Z"
  },
  {
    "#": 69,
    "Title": "Coby and Helmeppo's Resolve! Vice-Admiral Garp’s Parental Affection",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2001-05-20T07:00:00.000Z"
  },
  {
    "#": 70,
    "Title": "An Ancient Island! The Shadow Hiding in Little Garden!",
    "Type": "Manga Canon",
    "Airdate": "2001-05-27T07:00:00.000Z"
  },
  {
    "#": 71,
    "Title": "Huge Duel! The Giants Dorry and Broggy!",
    "Type": "Manga Canon",
    "Airdate": "2001-06-03T07:00:00.000Z"
  },
  {
    "#": 72,
    "Title": "Luffy Gets Angry! A Dirty Trick Violates the Sacred Duel!",
    "Type": "Manga Canon",
    "Airdate": "2001-06-17T07:00:00.000Z"
  },
  {
    "#": 73,
    "Title": "Broggy’s Bitter Tears of Victory! The Conclusion of Elbaf!",
    "Type": "Manga Canon",
    "Airdate": "2001-06-24T07:00:00.000Z"
  },
  {
    "#": 74,
    "Title": "The Devilish Candle! Tears of Regret and Tears of Anger!",
    "Type": "Manga Canon",
    "Airdate": "2001-07-15T07:00:00.000Z"
  },
  {
    "#": 75,
    "Title": "A Hex on Luffy! Colors Trap!",
    "Type": "Manga Canon",
    "Airdate": "2001-08-12T07:00:00.000Z"
  },
  {
    "#": 76,
    "Title": "Time to Fight Back! Usopp's Quick Thinking and Fire Star!",
    "Type": "Manga Canon",
    "Airdate": "2001-08-19T07:00:00.000Z"
  },
  {
    "#": 77,
    "Title": "Farewell Giant Island! Head for Alabasta!",
    "Type": "Manga Canon",
    "Airdate": "2001-08-19T07:00:00.000Z"
  },
  {
    "#": 78,
    "Title": "Nami’s Sick? Beyond the Snow Falling on the Sea!",
    "Type": "Manga Canon",
    "Airdate": "2001-08-26T07:00:00.000Z"
  },
  {
    "#": 79,
    "Title": "A Raid! The Tin Tyrant and Tin Plate Wapol!",
    "Type": "Manga Canon",
    "Airdate": "2001-09-02T07:00:00.000Z"
  },
  {
    "#": 80,
    "Title": "An Island Without Doctors? Adventure in a Nameless Land!",
    "Type": "Manga Canon",
    "Airdate": "2001-09-09T07:00:00.000Z"
  },
  {
    "#": 81,
    "Title": "Are You Happy? The Doctor Called Witch!",
    "Type": "Manga Canon",
    "Airdate": "2001-09-16T07:00:00.000Z"
  },
  {
    "#": 82,
    "Title": "Dalton’s Resolve! Wapol’s Corps Lands on the Island!",
    "Type": "Manga Canon",
    "Airdate": "2001-10-07T07:00:00.000Z"
  },
  {
    "#": 83,
    "Title": "The Island Where Snow Lives! Climb the Drum Rockies!",
    "Type": "Manga Canon",
    "Airdate": "2001-10-07T07:00:00.000Z"
  },
  {
    "#": 84,
    "Title": "Blue-Nosed Reindeer! Chopper’s Secret!",
    "Type": "Manga Canon",
    "Airdate": "2001-10-21T07:00:00.000Z"
  },
  {
    "#": 85,
    "Title": "An Outcast's Dream! Hiriluk the Quack!",
    "Type": "Manga Canon",
    "Airdate": "2001-10-28T07:00:00.000Z"
  },
  {
    "#": 86,
    "Title": "Hiriluk’s Cherry Blossoms and the Will That Gets Carried On!",
    "Type": "Manga Canon",
    "Airdate": "2001-11-04T08:00:00.000Z"
  },
  {
    "#": 87,
    "Title": "Fight Wapol's Crew! The Power of the Munch-Munch Fruit!",
    "Type": "Manga Canon",
    "Airdate": "2001-11-11T08:00:00.000Z"
  },
  {
    "#": 88,
    "Title": "Zoan-Type Devil Fruit! Chopper’s Seven-Form Transformation!",
    "Type": "Manga Canon",
    "Airdate": "2001-11-18T08:00:00.000Z"
  },
  {
    "#": 89,
    "Title": "When the Kingdom’s Rule Ends! The Flag of Faith Flies Forever!",
    "Type": "Manga Canon",
    "Airdate": "2001-11-25T08:00:00.000Z"
  },
  {
    "#": 90,
    "Title": "Hiriluk's Cherry Blossoms! Miracle in the Drum Rockies!",
    "Type": "Manga Canon",
    "Airdate": "2001-12-02T08:00:00.000Z"
  },
  {
    "#": 91,
    "Title": "Goodbye Drum Island! I’m Going Out to Sea!",
    "Type": "Manga Canon",
    "Airdate": "2001-12-09T08:00:00.000Z"
  },
  {
    "#": 92,
    "Title": "Alabasta's Hero and a Ballerina on the Ship!",
    "Type": "Manga Canon",
    "Airdate": "2001-12-09T08:00:00.000Z"
  },
  {
    "#": 93,
    "Title": "Off to the Desert Kingdom! The Rain-Summoning Powder and the Rebel Army!",
    "Type": "Anime Canon",
    "Airdate": "2001-12-16T08:00:00.000Z"
  },
  {
    "#": 94,
    "Title": "The Heroes' Reunion! His Name Is Fire Fist Ace!",
    "Type": "Manga Canon",
    "Airdate": "2001-12-23T08:00:00.000Z"
  },
  {
    "#": 95,
    "Title": "Ace and Luffy! Hot Emotions and Brotherly Bonds!",
    "Type": "Manga Canon",
    "Airdate": "2002-01-06T08:00:00.000Z"
  },
  {
    "#": 96,
    "Title": "Erumalu, the City of Green and the Kung Fu Dugongs!",
    "Type": "Manga Canon",
    "Airdate": "2002-01-13T08:00:00.000Z"
  },
  {
    "#": 97,
    "Title": "Adventure in the Country of Sand! The Monsters That Live in the Scorching Land!",
    "Type": "Manga Canon",
    "Airdate": "2002-01-20T08:00:00.000Z"
  },
  {
    "#": 98,
    "Title": "Enter the Desert Pirates! The Men Who Live Freely!",
    "Type": "Filler",
    "Airdate": "2002-01-27T08:00:00.000Z"
  },
  {
    "#": 99,
    "Title": "False Fortitude! Camu, Rebel Soldier at Heart!",
    "Type": "Filler",
    "Airdate": "2002-02-03T08:00:00.000Z"
  },
  {
    "#": 100,
    "Title": "Rebel Warrior Koza! The Dream Vowed to Vivi!",
    "Type": "Manga Canon",
    "Airdate": "2002-02-10T08:00:00.000Z"
  },
  {
    "#": 101,
    "Title": "Showdown in a Heat Haze! Ace vs. the Gallant Scorpion!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2002-02-17T08:00:00.000Z"
  },
  {
    "#": 102,
    "Title": "Ruins and Lost Ways! Vivi, Her Friends and the Country's Form!",
    "Type": "Filler",
    "Airdate": "2002-02-24T08:00:00.000Z"
  },
  {
    "#": 103,
    "Title": "Spiders Café at 8 O’Clock! The Enemy Leaders Gather!",
    "Type": "Manga Canon",
    "Airdate": "2002-03-03T08:00:00.000Z"
  },
  {
    "#": 104,
    "Title": "Luffy vs. Vivi! The Tearful Vow To Put Friends on the Line!",
    "Type": "Manga Canon",
    "Airdate": "2002-03-10T08:00:00.000Z"
  },
  {
    "#": 105,
    "Title": "The Battlefront of Alabasta! Rainbase, the City of Dreams!",
    "Type": "Manga Canon",
    "Airdate": "2002-03-17T08:00:00.000Z"
  },
  {
    "#": 106,
    "Title": "The Trap of Certain Defeat! Storming Raindinners!",
    "Type": "Manga Canon",
    "Airdate": "2002-03-24T08:00:00.000Z"
  },
  {
    "#": 107,
    "Title": "Operation Utopia Commences! The Swell of Rebellion Stirs!",
    "Type": "Manga Canon",
    "Airdate": "2002-04-14T07:00:00.000Z"
  },
  {
    "#": 108,
    "Title": "The Terrifying Banana Gators and Mr. Prince!",
    "Type": "Manga Canon",
    "Airdate": "2002-04-21T07:00:00.000Z"
  },
  {
    "#": 109,
    "Title": "The Key to a Great Comeback Escape! The Wax-Wax Ball!",
    "Type": "Manga Canon",
    "Airdate": "2002-04-28T07:00:00.000Z"
  },
  {
    "#": 110,
    "Title": "Merciless Mortal Combat! Luffy vs. Crocodile!",
    "Type": "Manga Canon",
    "Airdate": "2002-05-05T07:00:00.000Z"
  },
  {
    "#": 111,
    "Title": "Dash for a Miracle! Alabasta Animal Land!",
    "Type": "Manga Canon",
    "Airdate": "2002-05-12T07:00:00.000Z"
  },
  {
    "#": 112,
    "Title": "Rebel Army vs. Royal Army! Showdown at Alubarna!",
    "Type": "Manga Canon",
    "Airdate": "2002-05-19T07:00:00.000Z"
  },
  {
    "#": 113,
    "Title": "Alubarna Grieves! The Fierce Captain Karoo!",
    "Type": "Manga Canon",
    "Airdate": "2002-06-02T07:00:00.000Z"
  },
  {
    "#": 114,
    "Title": "Sworn on a Friend's Dream! The Battle of Molehill, Block 4!",
    "Type": "Manga Canon",
    "Airdate": "2002-06-09T07:00:00.000Z"
  },
  {
    "#": 115,
    "Title": "Big Opening Day Today! The Copy-Copy Montage!",
    "Type": "Manga Canon",
    "Airdate": "2002-06-16T07:00:00.000Z"
  },
  {
    "#": 116,
    "Title": "Transformed Into Nami! Bon Clay’s Rapid-Fire Ballet Kenpo!",
    "Type": "Manga Canon",
    "Airdate": "2002-06-23T07:00:00.000Z"
  },
  {
    "#": 117,
    "Title": "Nami's Cyclone Advisory! Clima Takt Burst!",
    "Type": "Manga Canon",
    "Airdate": "2002-06-30T07:00:00.000Z"
  },
  {
    "#": 118,
    "Title": "Secret Passed Down in the Royal Family! The Ancient Weapon Pluton!",
    "Type": "Manga Canon",
    "Airdate": "2002-07-14T07:00:00.000Z"
  },
  {
    "#": 119,
    "Title": "Secret of Powerful Swordplay! Ability To Cut Steel and the Rhythm Things Have!",
    "Type": "Manga Canon",
    "Airdate": "2002-07-21T07:00:00.000Z"
  },
  {
    "#": 120,
    "Title": "The Battle Is Over! Koza Raises the White Flag!",
    "Type": "Manga Canon",
    "Airdate": "2002-08-04T07:00:00.000Z"
  },
  {
    "#": 121,
    "Title": "Where Vivi's Voice Gets Heard! The Hero Descends!",
    "Type": "Manga Canon",
    "Airdate": "2002-08-11T07:00:00.000Z"
  },
  {
    "#": 122,
    "Title": "Sand Croc and Water Luffy! The Second Round of the Duel!",
    "Type": "Manga Canon",
    "Airdate": "2002-08-18T07:00:00.000Z"
  },
  {
    "#": 123,
    "Title": "That Looks Croc-ish! Luffy, Run to the Royal Tomb!",
    "Type": "Manga Canon",
    "Airdate": "2002-08-25T07:00:00.000Z"
  },
  {
    "#": 124,
    "Title": "The Nightmare Draws Near! This Is the Sand-Sand Clan's Secret Base!",
    "Type": "Manga Canon",
    "Airdate": "2002-09-01T07:00:00.000Z"
  },
  {
    "#": 125,
    "Title": "Magnificent Wings! My Name Is Pell, Guardian Deity of the Country!",
    "Type": "Manga Canon",
    "Airdate": "2002-09-08T07:00:00.000Z"
  },
  {
    "#": 126,
    "Title": "I Will Surpass You! Rain Falls in Alabasta!",
    "Type": "Manga Canon",
    "Airdate": "2002-09-15T07:00:00.000Z"
  },
  {
    "#": 127,
    "Title": "A Farewell to Arms! Pirates and Different Ideas of Justice!",
    "Type": "Manga Canon",
    "Airdate": "2002-10-06T07:00:00.000Z"
  },
  {
    "#": 128,
    "Title": "The Pirates’ Banquet and Operation Escape From Alabasta!",
    "Type": "Manga Canon",
    "Airdate": "2002-10-06T07:00:00.000Z"
  },
  {
    "#": 129,
    "Title": "It All Started on That Day! Vivi Tells the Story of Her Adventure!",
    "Type": "Manga Canon",
    "Airdate": "2002-10-20T07:00:00.000Z"
  },
  {
    "#": 130,
    "Title": "Scent of Danger! The Seventh Member Is Nico Robin!",
    "Type": "Manga Canon",
    "Airdate": "2002-10-27T07:00:00.000Z"
  },
  {
    "#": 131,
    "Title": "The First Patient! The Untold Story of the Rumble Ball!",
    "Type": "Filler",
    "Airdate": "2002-11-03T08:00:00.000Z"
  },
  {
    "#": 132,
    "Title": "Uprising of the Navigator! For the Unyielding Dream!",
    "Type": "Filler",
    "Airdate": "2002-11-10T08:00:00.000Z"
  },
  {
    "#": 133,
    "Title": "A Recipe Handed Down! Sanji, the Iron Man of Curry!",
    "Type": "Filler",
    "Airdate": "2002-11-17T08:00:00.000Z"
  },
  {
    "#": 134,
    "Title": "I Will Make It Bloom! Usopp the Man and the Eight-Foot Shell!",
    "Type": "Filler",
    "Airdate": "2002-11-24T08:00:00.000Z"
  },
  {
    "#": 135,
    "Title": "The Fabled Pirate Hunter! Zoro, the Wandering Swordsman!",
    "Type": "Filler",
    "Airdate": "2002-12-01T08:00:00.000Z"
  },
  {
    "#": 136,
    "Title": "Zenny of the Island of Goats and the Pirate Ship in the Mountains!",
    "Type": "Filler",
    "Airdate": "2002-12-08T08:00:00.000Z"
  },
  {
    "#": 137,
    "Title": "How's Tricks? The Designs of Zenny the Moneylender!",
    "Type": "Filler",
    "Airdate": "2002-12-15T08:00:00.000Z"
  },
  {
    "#": 138,
    "Title": "Whereabouts of the Island Treasure! Attack of the Zenny Pirates!",
    "Type": "Filler",
    "Airdate": "2002-12-22T08:00:00.000Z"
  },
  {
    "#": 139,
    "Title": "Legend of the Rainbow Mist! Old Man Henzo of the Luluka Island!",
    "Type": "Filler",
    "Airdate": "2003-01-05T08:00:00.000Z"
  },
  {
    "#": 140,
    "Title": "Residents of the Land of Eternity! The Pumpkin Pirates!",
    "Type": "Filler",
    "Airdate": "2003-01-12T08:00:00.000Z"
  },
  {
    "#": 141,
    "Title": "Thoughts of Home! The Pirate Graveyard of No Escape!",
    "Type": "Filler",
    "Airdate": "2003-01-19T08:00:00.000Z"
  },
  {
    "#": 142,
    "Title": "An Inevitable Melee! Wetton's Schemes and the Rainbow Tower!",
    "Type": "Filler",
    "Airdate": "2003-01-26T08:00:00.000Z"
  },
  {
    "#": 143,
    "Title": "And so, the Legend Begins! To the Other Side of the Rainbow!",
    "Type": "Filler",
    "Airdate": "2003-02-02T08:00:00.000Z"
  },
  {
    "#": 144,
    "Title": "Caught Log! The King of Salvagers, Masira!",
    "Type": "Manga Canon",
    "Airdate": "2003-02-09T08:00:00.000Z"
  },
  {
    "#": 145,
    "Title": "Monsters Appear! Don't Mess With the Whitebeard Pirates!",
    "Type": "Manga Canon",
    "Airdate": "2003-02-16T08:00:00.000Z"
  },
  {
    "#": 146,
    "Title": "Quit Dreaming! Mock Town, the Town of Ridicule!",
    "Type": "Manga Canon",
    "Airdate": "2003-02-23T08:00:00.000Z"
  },
  {
    "#": 147,
    "Title": "Distinguished Pirates! A Man Who Talks of Dreams and the King of Undersea Search!",
    "Type": "Manga Canon",
    "Airdate": "2003-03-09T08:00:00.000Z"
  },
  {
    "#": 148,
    "Title": "Legendary Family! Noland the Liar!",
    "Type": "Manga Canon",
    "Airdate": "2003-03-16T08:00:00.000Z"
  },
  {
    "#": 149,
    "Title": "Steer for the Clouds! Capture the South Bird!",
    "Type": "Manga Canon",
    "Airdate": "2003-03-23T08:00:00.000Z"
  },
  {
    "#": 150,
    "Title": "Dreams Don't Come True?! Bellamy vs. the Saruyama Alliance",
    "Type": "Manga Canon",
    "Airdate": "2003-04-13T07:00:00.000Z"
  },
  {
    "#": 151,
    "Title": "100 Million Man! World's Greatest Power and Pirate Blackbeard",
    "Type": "Manga Canon",
    "Airdate": "2003-04-20T07:00:00.000Z"
  },
  {
    "#": 152,
    "Title": "Take to the Sky! Ride the Knock-up Stream!",
    "Type": "Manga Canon",
    "Airdate": "2003-04-27T07:00:00.000Z"
  },
  {
    "#": 153,
    "Title": "Sail the White Sea! The Sky Knight and the Gate in the Clouds!",
    "Type": "Manga Canon",
    "Airdate": "2003-05-04T07:00:00.000Z"
  },
  {
    "#": 154,
    "Title": "Godland, Skypiea! Angels on a Beach of Clouds",
    "Type": "Manga Canon",
    "Airdate": "2003-05-11T07:00:00.000Z"
  },
  {
    "#": 155,
    "Title": "The Forbidden Sacred Ground! The Island Where God Lives and Heaven's Judgment!",
    "Type": "Manga Canon",
    "Airdate": "2003-05-18T07:00:00.000Z"
  },
  {
    "#": 156,
    "Title": "Already Criminals?! Skypiea's Upholder of the Law!",
    "Type": "Manga Canon",
    "Airdate": "2003-06-08T07:00:00.000Z"
  },
  {
    "#": 157,
    "Title": "Is Escape Possible?!? God's Challenge Is Set in Motion!",
    "Type": "Manga Canon",
    "Airdate": "2003-06-15T07:00:00.000Z"
  },
  {
    "#": 158,
    "Title": "A Trap on Lovely Street! The Almighty Eneru!",
    "Type": "Manga Canon",
    "Airdate": "2003-06-22T07:00:00.000Z"
  },
  {
    "#": 159,
    "Title": "Onward Crow! To the Sacrificial Altar!",
    "Type": "Manga Canon",
    "Airdate": "2003-07-06T07:00:00.000Z"
  },
  {
    "#": 160,
    "Title": "10% Survival Rate! Satori, the Mantra Master!",
    "Type": "Manga Canon",
    "Airdate": "2003-07-13T07:00:00.000Z"
  },
  {
    "#": 161,
    "Title": "The Ordeal of Spheres! Desperate Struggle in the Lost Forest!",
    "Type": "Manga Canon",
    "Airdate": "2003-07-20T07:00:00.000Z"
  },
  {
    "#": 162,
    "Title": "Chopper in Danger! Former God vs. Priest Shura!",
    "Type": "Manga Canon",
    "Airdate": "2003-08-03T07:00:00.000Z"
  },
  {
    "#": 163,
    "Title": "Profound Mystery! Ordeal of String and Ordeal of Love?!?",
    "Type": "Manga Canon",
    "Airdate": "2003-08-10T07:00:00.000Z"
  },
  {
    "#": 164,
    "Title": "Light the Fire of Shandora! Wyper the Warrior!",
    "Type": "Manga Canon",
    "Airdate": "2003-08-17T07:00:00.000Z"
  },
  {
    "#": 165,
    "Title": "Jaya, City of Gold in the Sky! Head for God's Shrine!",
    "Type": "Manga Canon",
    "Airdate": "2003-08-24T07:00:00.000Z"
  },
  {
    "#": 166,
    "Title": "Festival on the Night Before Gold Hunting! Feelings for \"Vearth!\"",
    "Type": "Manga Canon",
    "Airdate": "2003-09-07T07:00:00.000Z"
  },
  {
    "#": 167,
    "Title": "Enter God Eneru! Farewell to the Survivors!",
    "Type": "Manga Canon",
    "Airdate": "2003-09-21T07:00:00.000Z"
  },
  {
    "#": 168,
    "Title": "A Giant Snake Bares Its Fangs! The Survival Game Begins!",
    "Type": "Manga Canon",
    "Airdate": "2003-10-12T07:00:00.000Z"
  },
  {
    "#": 169,
    "Title": "The Deadly Reject! War Demon Wyper's Resolve",
    "Type": "Manga Canon",
    "Airdate": "2003-10-19T07:00:00.000Z"
  },
  {
    "#": 170,
    "Title": "Fierce Mid-Air Battle! Pirate Zoro vs. Warrior Braham",
    "Type": "Manga Canon",
    "Airdate": "2003-10-19T07:00:00.000Z"
  },
  {
    "#": 171,
    "Title": "The Roaring Burn Bazooka!! Pirate Luffy vs. War Demon Wyper!",
    "Type": "Manga Canon",
    "Airdate": "2003-10-26T07:00:00.000Z"
  },
  {
    "#": 172,
    "Title": "The Ordeal of Swamp! Chopper vs. Priest Gedatsu!",
    "Type": "Manga Canon",
    "Airdate": "2003-11-02T08:00:00.000Z"
  },
  {
    "#": 173,
    "Title": "Unbeatable Powers! Eneru's True Form Is Revealed!",
    "Type": "Manga Canon",
    "Airdate": "2003-11-09T08:00:00.000Z"
  },
  {
    "#": 174,
    "Title": "A Mystical City! The Grand Ruins of Shandora!",
    "Type": "Manga Canon",
    "Airdate": "2003-11-16T08:00:00.000Z"
  },
  {
    "#": 175,
    "Title": "0% Survival Rate! Chopper vs Ohm, the Sword Wielding Priest",
    "Type": "Manga Canon",
    "Airdate": "2003-12-21T08:00:00.000Z"
  },
  {
    "#": 176,
    "Title": "Climb Giant Jack! Deadly Combat in the Upper Ruins!",
    "Type": "Manga Canon",
    "Airdate": "2004-01-11T08:00:00.000Z"
  },
  {
    "#": 177,
    "Title": "The Ordeal of Iron! White Barbed Death Match!",
    "Type": "Manga Canon",
    "Airdate": "2004-01-18T08:00:00.000Z"
  },
  {
    "#": 178,
    "Title": "Bursting Slash! Zoro vs. Ohm!",
    "Type": "Manga Canon",
    "Airdate": "2004-01-25T08:00:00.000Z"
  },
  {
    "#": 179,
    "Title": "Collapsing Upper Ruins! The Quintet for the Finale!",
    "Type": "Manga Canon",
    "Airdate": "2004-02-01T08:00:00.000Z"
  },
  {
    "#": 180,
    "Title": "Showdown in the Ancient Ruins! Sky God Eneru's Goal!",
    "Type": "Manga Canon",
    "Airdate": "2004-02-08T08:00:00.000Z"
  },
  {
    "#": 181,
    "Title": "Ambition Towards the Endless Vearth! The Ark Maxim!",
    "Type": "Manga Canon",
    "Airdate": "2004-02-15T08:00:00.000Z"
  },
  {
    "#": 182,
    "Title": "They Finally Clash! Pirate Luffy vs. God Eneru!",
    "Type": "Manga Canon",
    "Airdate": "2004-02-22T08:00:00.000Z"
  },
  {
    "#": 183,
    "Title": "Maxim Surfaces! Deathpiea Is Activated!",
    "Type": "Manga Canon",
    "Airdate": "2004-02-29T08:00:00.000Z"
  },
  {
    "#": 184,
    "Title": "Luffy Falls! Eneru's Judgment and Nami's Wish!",
    "Type": "Manga Canon",
    "Airdate": "2004-03-07T08:00:00.000Z"
  },
  {
    "#": 185,
    "Title": "The Two Awaken! On the Front Lines of the Burning Love Rescue!",
    "Type": "Manga Canon",
    "Airdate": "2004-03-14T08:00:00.000Z"
  },
  {
    "#": 186,
    "Title": "Capriccio for Despair! The Impending Doom of Sky Island!",
    "Type": "Manga Canon",
    "Airdate": "2004-03-21T08:00:00.000Z"
  },
  {
    "#": 187,
    "Title": "Led by a Bell's Sound! Tale of the Great Warrior and the Explorer!",
    "Type": "Manga Canon",
    "Airdate": "2004-03-28T08:00:00.000Z"
  },
  {
    "#": 188,
    "Title": "Free From the Spell! The Great Warrior Sheds Tears!",
    "Type": "Manga Canon",
    "Airdate": "2004-03-28T08:00:00.000Z"
  },
  {
    "#": 189,
    "Title": "Eternal Friends! The Vowed Bell Echoes Across the Mighty Seas!",
    "Type": "Manga Canon",
    "Airdate": "2004-04-04T08:00:00.000Z"
  },
  {
    "#": 190,
    "Title": "Angel Island, Obliterated! The Horror of the Raigo's Advent!!",
    "Type": "Manga Canon",
    "Airdate": "2004-04-25T07:00:00.000Z"
  },
  {
    "#": 191,
    "Title": "Knock Over Giant Jack! Last Hope for Escape!",
    "Type": "Manga Canon",
    "Airdate": "2004-05-02T07:00:00.000Z"
  },
  {
    "#": 192,
    "Title": "Miracle on Skypiea! The Love Song Heard in the Clouds!",
    "Type": "Manga Canon",
    "Airdate": "2004-05-09T07:00:00.000Z"
  },
  {
    "#": 193,
    "Title": "The Battle Ends! Proud Fantasia Echoes Far!",
    "Type": "Manga Canon",
    "Airdate": "2004-05-23T07:00:00.000Z"
  },
  {
    "#": 194,
    "Title": "I Made It Here! The Yarn the Poneglyphs Spin!",
    "Type": "Manga Canon",
    "Airdate": "2004-06-06T07:00:00.000Z"
  },
  {
    "#": 195,
    "Title": "Off to the Blue Sea!! A Heartfelt Finale!!",
    "Type": "Manga Canon",
    "Airdate": "2004-06-13T07:00:00.000Z"
  },
  {
    "#": 196,
    "Title": "A State of Emergency Is Issued! A Notorious Pirate Ship Has Infiltrated!",
    "Type": "Filler",
    "Airdate": "2004-06-20T07:00:00.000Z"
  },
  {
    "#": 197,
    "Title": "Sanji the Cook! Proving His Merit at the Marine Dining Hall!",
    "Type": "Filler",
    "Airdate": "2004-07-04T07:00:00.000Z"
  },
  {
    "#": 198,
    "Title": "Captured Zoro! Chopper's Emergency Operations!",
    "Type": "Filler",
    "Airdate": "2004-07-11T07:00:00.000Z"
  },
  {
    "#": 199,
    "Title": "The Marine's Dragnet Closes In! The Second Member Captured!",
    "Type": "Filler",
    "Airdate": "2004-07-18T07:00:00.000Z"
  },
  {
    "#": 200,
    "Title": "Luffy and Sanji's Daring Rescue Mission!",
    "Type": "Filler",
    "Airdate": "2004-08-08T07:00:00.000Z"
  },
  {
    "#": 201,
    "Title": "Enter the Hot-Blooded Special Forces! Battle on the Bridge!",
    "Type": "Filler",
    "Airdate": "2004-09-05T07:00:00.000Z"
  },
  {
    "#": 202,
    "Title": "Breaking Through the Siege! The Going Merry Is Recovered!",
    "Type": "Filler",
    "Airdate": "2004-09-19T07:00:00.000Z"
  },
  {
    "#": 203,
    "Title": "The Pirate Ship Disappears! Fortress Battle, Round #2!",
    "Type": "Filler",
    "Airdate": "2004-09-26T07:00:00.000Z"
  },
  {
    "#": 204,
    "Title": "The Gold and Waver Recovery Operations!",
    "Type": "Filler",
    "Airdate": "2004-10-03T07:00:00.000Z"
  },
  {
    "#": 205,
    "Title": "The One Fell Swoop Plan! Jonathan's Surefire Secret Tactic!",
    "Type": "Filler",
    "Airdate": "2004-10-03T07:00:00.000Z"
  },
  {
    "#": 206,
    "Title": "Farewell, Marine Fortress! The Last Battle for Escape!",
    "Type": "Filler",
    "Airdate": "2004-10-10T07:00:00.000Z"
  },
  {
    "#": 207,
    "Title": "Great Adventure in Long Ring Long Land!",
    "Type": "Manga Canon",
    "Airdate": "2004-10-31T07:00:00.000Z"
  },
  {
    "#": 208,
    "Title": "A Davy Back With the Foxy Pirates!",
    "Type": "Manga Canon",
    "Airdate": "2004-11-07T08:00:00.000Z"
  },
  {
    "#": 209,
    "Title": "Round 1! One Lap of the Donut Race!",
    "Type": "Manga Canon",
    "Airdate": "2004-11-14T08:00:00.000Z"
  },
  {
    "#": 210,
    "Title": "Silver Fox Foxy! The Merciless Interference!",
    "Type": "Manga Canon",
    "Airdate": "2004-11-21T08:00:00.000Z"
  },
  {
    "#": 211,
    "Title": "Round 2! Shoot It Into the Groggy Ring!",
    "Type": "Manga Canon",
    "Airdate": "2004-11-28T08:00:00.000Z"
  },
  {
    "#": 212,
    "Title": "A Barrage of Red Cards in Groggy Ring!",
    "Type": "Manga Canon",
    "Airdate": "2004-12-05T08:00:00.000Z"
  },
  {
    "#": 213,
    "Title": "Round 3! The Round-and-Round Roller Race!",
    "Type": "Anime Canon",
    "Airdate": "2004-12-12T08:00:00.000Z"
  },
  {
    "#": 214,
    "Title": "A Seriously Heated Race! Into the Final Round!",
    "Type": "Anime Canon",
    "Airdate": "2004-12-19T08:00:00.000Z"
  },
  {
    "#": 215,
    "Title": "Screaming-Hot Bombardment! Pirate Dodgeball!",
    "Type": "Anime Canon",
    "Airdate": "2005-01-09T08:00:00.000Z"
  },
  {
    "#": 216,
    "Title": "Showdown on the Cliff! Red Light, Green Light!",
    "Type": "Anime Canon",
    "Airdate": "2005-01-09T08:00:00.000Z"
  },
  {
    "#": 217,
    "Title": "The Captains Square Off! The Final Combat Round!",
    "Type": "Manga Canon",
    "Airdate": "2005-01-16T08:00:00.000Z"
  },
  {
    "#": 218,
    "Title": "Full-Blast Slow-Slow Onslaught vs. Invulnerable Luffy!",
    "Type": "Manga Canon",
    "Airdate": "2005-01-23T08:00:00.000Z"
  },
  {
    "#": 219,
    "Title": "Epic, Heated Combat! The Fateful Final Conclusion!",
    "Type": "Manga Canon",
    "Airdate": "2005-01-30T08:00:00.000Z"
  },
  {
    "#": 220,
    "Title": "Was It Lost? Stolen? Who Are You?",
    "Type": "Filler",
    "Airdate": "2005-02-06T08:00:00.000Z"
  },
  {
    "#": 221,
    "Title": "A Mysterious Boy With a Horn and Robin's Deduction!",
    "Type": "Filler",
    "Airdate": "2005-02-13T08:00:00.000Z"
  },
  {
    "#": 222,
    "Title": "Now, Let's Get Back Our Memories! The Pirate Crew Lands on the Island!",
    "Type": "Filler",
    "Airdate": "2005-02-20T08:00:00.000Z"
  },
  {
    "#": 223,
    "Title": "Zoro Bares His Fangs! A Savage Animal Stands in the Way!",
    "Type": "Filler",
    "Airdate": "2005-02-27T08:00:00.000Z"
  },
  {
    "#": 224,
    "Title": "The Last Counterattack by the Memory Thief Who Reveals His True Colors!",
    "Type": "Filler",
    "Airdate": "2005-03-06T08:00:00.000Z"
  },
  {
    "#": 225,
    "Title": "Proud Man! Silver Fox Foxy!",
    "Type": "Filler",
    "Airdate": "2005-03-13T08:00:00.000Z"
  },
  {
    "#": 226,
    "Title": "The Guy Who’s the Closest To Invincible? And the Most Dangerous Man!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2005-03-20T08:00:00.000Z"
  },
  {
    "#": 227,
    "Title": "Navy Headquarters Admiral Aokiji! The Ferocity of an Ultimate Powerhouse!",
    "Type": "Manga Canon",
    "Airdate": "2005-03-27T08:00:00.000Z"
  },
  {
    "#": 228,
    "Title": "Duel Between Rubber and Ice! Luffy vs. Aokiji!",
    "Type": "Manga Canon",
    "Airdate": "2005-03-27T08:00:00.000Z"
  },
  {
    "#": 229,
    "Title": "The Dashing Sea Train and the City of Water: Water Seven!",
    "Type": "Manga Canon",
    "Airdate": "2005-04-17T07:00:00.000Z"
  },
  {
    "#": 230,
    "Title": "Adventure in the City on the Water! Head to the Mammoth Shipbuilding Plant!",
    "Type": "Manga Canon",
    "Airdate": "2005-04-24T07:00:00.000Z"
  },
  {
    "#": 231,
    "Title": "The Franky Family and Iceburg!",
    "Type": "Manga Canon",
    "Airdate": "2005-05-01T07:00:00.000Z"
  },
  {
    "#": 232,
    "Title": "Galley-La Company! A Grand Sight: Dock #1!",
    "Type": "Manga Canon",
    "Airdate": "2005-05-15T07:00:00.000Z"
  },
  {
    "#": 233,
    "Title": "Pirate Abduction Incident! A Pirate Ship That Can Only Await Her End!",
    "Type": "Manga Canon",
    "Airdate": "2005-05-22T07:00:00.000Z"
  },
  {
    "#": 234,
    "Title": "Rescuing Our Friend! Raid on the Franky House!",
    "Type": "Manga Canon",
    "Airdate": "2005-06-05T07:00:00.000Z"
  },
  {
    "#": 235,
    "Title": "Big Fight Under the Moon! The Pirate Flag Flutters With Sorrow!",
    "Type": "Manga Canon",
    "Airdate": "2005-06-12T07:00:00.000Z"
  },
  {
    "#": 236,
    "Title": "Luffy vs. Usopp! Collision of Two Men's Pride!",
    "Type": "Manga Canon",
    "Airdate": "2005-06-19T07:00:00.000Z"
  },
  {
    "#": 237,
    "Title": "Severe Shock Hits the City of Water! Iceburg Targeted!",
    "Type": "Manga Canon",
    "Airdate": "2005-07-03T07:00:00.000Z"
  },
  {
    "#": 238,
    "Title": "Gum-Gum Human vs. Fire-Breathing Cyborg!",
    "Type": "Manga Canon",
    "Airdate": "2005-07-10T07:00:00.000Z"
  },
  {
    "#": 239,
    "Title": "The Straw Hat Pirates Are the Culprits? The Protectors of the City of Water!",
    "Type": "Manga Canon",
    "Airdate": "2005-07-31T07:00:00.000Z"
  },
  {
    "#": 240,
    "Title": "Eternal Farewell? Nico Robin: The Woman Who Draws Darkness!",
    "Type": "Manga Canon",
    "Airdate": "2005-08-07T07:00:00.000Z"
  },
  {
    "#": 241,
    "Title": "Capture Robin! The Determination of the Straw Hats!",
    "Type": "Manga Canon",
    "Airdate": "2005-08-14T07:00:00.000Z"
  },
  {
    "#": 242,
    "Title": "Cannon Fire Is the Signal! CP9 Goes Into Action!",
    "Type": "Manga Canon",
    "Airdate": "2005-08-21T07:00:00.000Z"
  },
  {
    "#": 243,
    "Title": "CP9 Takes Off Their Masks! Their Shocking True Faces!",
    "Type": "Manga Canon",
    "Airdate": "2005-09-04T07:00:00.000Z"
  },
  {
    "#": 244,
    "Title": "Secret Bond! Iceburg and Franky!",
    "Type": "Manga Canon",
    "Airdate": "2005-09-11T07:00:00.000Z"
  },
  {
    "#": 245,
    "Title": "Come Back, Robin! Showdown With CP9!",
    "Type": "Manga Canon",
    "Airdate": "2005-09-18T07:00:00.000Z"
  },
  {
    "#": 246,
    "Title": "The Straw Hat Pirates Annihilated? The Menace of the Leopard Model!",
    "Type": "Manga Canon",
    "Airdate": "2005-10-23T07:00:00.000Z"
  },
  {
    "#": 247,
    "Title": "The Man Who Is Loved Even by His Ship! Usopp's Tears!",
    "Type": "Manga Canon",
    "Airdate": "2005-10-30T07:00:00.000Z"
  },
  {
    "#": 248,
    "Title": "Franky's Past! The Day the Sea Train First Ran",
    "Type": "Manga Canon",
    "Airdate": "2005-11-06T08:00:00.000Z"
  },
  {
    "#": 249,
    "Title": "Spandam's Scheme! The Day the Sea Train Shook",
    "Type": "Manga Canon",
    "Airdate": "2005-11-13T08:00:00.000Z"
  },
  {
    "#": 250,
    "Title": "The End of the Legendary Man! The Day the Sea Train Cried!",
    "Type": "Manga Canon",
    "Airdate": "2005-11-27T08:00:00.000Z"
  },
  {
    "#": 251,
    "Title": "The Truth Behind Her Betrayal! Robin’s Sorrowful Decision!",
    "Type": "Manga Canon",
    "Airdate": "2005-11-27T08:00:00.000Z"
  },
  {
    "#": 252,
    "Title": "The Steam Whistle Forces Friends Apart! The Sea Train Starts To Run",
    "Type": "Manga Canon",
    "Airdate": "2005-12-04T08:00:00.000Z"
  },
  {
    "#": 253,
    "Title": "Sanji Barges In! Sea Train Battle in the Storm!",
    "Type": "Manga Canon",
    "Airdate": "2005-12-11T08:00:00.000Z"
  },
  {
    "#": 254,
    "Title": "Nami's Soul Cries Out! Straw Hat Luffy Makes a Comeback!",
    "Type": "Manga Canon",
    "Airdate": "2006-01-22T08:00:00.000Z"
  },
  {
    "#": 255,
    "Title": "Another Sea Train? Rocketman Charges Forth!",
    "Type": "Manga Canon",
    "Airdate": "2006-01-29T08:00:00.000Z"
  },
  {
    "#": 256,
    "Title": "Rescue Our Friends! A Bond Among Foes Sworn With Fists!",
    "Type": "Manga Canon",
    "Airdate": "2006-02-05T08:00:00.000Z"
  },
  {
    "#": 257,
    "Title": "Smash the Wave! Luffy and Zoro Use the Strongest Combo!",
    "Type": "Manga Canon",
    "Airdate": "2006-02-26T08:00:00.000Z"
  },
  {
    "#": 258,
    "Title": "A Mysterious Man Appears?! His Name Is Sniperking!",
    "Type": "Manga Canon",
    "Airdate": "2006-03-05T08:00:00.000Z"
  },
  {
    "#": 259,
    "Title": "Showdown Between Cooks! Sanji vs. Ramen Kenpo",
    "Type": "Manga Canon",
    "Airdate": "2006-03-12T08:00:00.000Z"
  },
  {
    "#": 260,
    "Title": "Rooftop Duel! Franky vs. Nero",
    "Type": "Manga Canon",
    "Airdate": "2006-03-19T08:00:00.000Z"
  },
  {
    "#": 261,
    "Title": "Clash! Demon-Slasher Zoro vs. Ship-Slasher T-Bone!",
    "Type": "Manga Canon",
    "Airdate": "2006-04-02T08:00:00.000Z"
  },
  {
    "#": 262,
    "Title": "Scramble Over Robin! A Cunning Plan by Sniperking!!",
    "Type": "Manga Canon",
    "Airdate": "2006-04-16T07:00:00.000Z"
  },
  {
    "#": 263,
    "Title": "The Judicial Island! Full View of Enies Lobby!",
    "Type": "Manga Canon",
    "Airdate": "2006-04-30T07:00:00.000Z"
  },
  {
    "#": 264,
    "Title": "Landing Operations Start! Charge in, Straw Hats!",
    "Type": "Manga Canon",
    "Airdate": "2006-05-21T07:00:00.000Z"
  },
  {
    "#": 265,
    "Title": "Luffy Cuts Through! Big Showdown on the Judicial Island!",
    "Type": "Manga Canon",
    "Airdate": "2006-06-04T07:00:00.000Z"
  },
  {
    "#": 266,
    "Title": "Battle Against Giants! Open the Second Gate!",
    "Type": "Manga Canon",
    "Airdate": "2006-06-11T07:00:00.000Z"
  },
  {
    "#": 267,
    "Title": "Find a Way Out! Rocketman Takes Flight!",
    "Type": "Manga Canon",
    "Airdate": "2006-06-18T07:00:00.000Z"
  },
  {
    "#": 268,
    "Title": "Catch up With Luffy! The Straw Hats' All-Out Battle",
    "Type": "Manga Canon",
    "Airdate": "2006-06-25T07:00:00.000Z"
  },
  {
    "#": 269,
    "Title": "Robin Betrayed! The Motive of the World Government!",
    "Type": "Manga Canon",
    "Airdate": "2006-06-25T07:00:00.000Z"
  },
  {
    "#": 270,
    "Title": "Give Robin Back! Luffy vs. Blueno!",
    "Type": "Manga Canon",
    "Airdate": "2006-07-02T07:00:00.000Z"
  },
  {
    "#": 271,
    "Title": "Don’t Stop! Hoist the Counterattack Signal!",
    "Type": "Manga Canon",
    "Airdate": "2006-07-09T07:00:00.000Z"
  },
  {
    "#": 272,
    "Title": "Almost to Luffy! Gather at the Courthouse Plaza!",
    "Type": "Manga Canon",
    "Airdate": "2006-07-23T07:00:00.000Z"
  },
  {
    "#": 273,
    "Title": "Everything Is To Protect My Friends! Second Gear Activated!",
    "Type": "Manga Canon",
    "Airdate": "2006-07-30T07:00:00.000Z"
  },
  {
    "#": 274,
    "Title": "Give Us Your Answer, Robin! The Straw Hats' Outcry!",
    "Type": "Manga Canon",
    "Airdate": "2006-08-06T07:00:00.000Z"
  },
  {
    "#": 275,
    "Title": "Robin's Past! The Girl Was Called a Devil!",
    "Type": "Manga Canon",
    "Airdate": "2006-08-13T07:00:00.000Z"
  },
  {
    "#": 276,
    "Title": "Fated Mother and Daughter! The Mother's Name Is Olvia!",
    "Type": "Manga Canon",
    "Airdate": "2006-09-10T07:00:00.000Z"
  },
  {
    "#": 277,
    "Title": "The Tragedy of Ohara! The Terror of the Buster Call!",
    "Type": "Manga Canon",
    "Airdate": "2006-09-24T07:00:00.000Z"
  },
  {
    "#": 278,
    "Title": "Say You Want To Live! We Are Your Friends!!",
    "Type": "Manga Canon",
    "Airdate": "2006-09-24T07:00:00.000Z"
  },
  {
    "#": 279,
    "Title": "Jump Towards the Falls! Luffy’s Feelings!",
    "Type": "Filler",
    "Airdate": "2006-10-01T07:00:00.000Z"
  },
  {
    "#": 280,
    "Title": "The Ways of Men! Zoro's Techniques, Usopp's Dream!",
    "Type": "Filler",
    "Airdate": "2006-10-08T07:00:00.000Z"
  },
  {
    "#": 281,
    "Title": "A Bond of Friendship Woven by Tears! Nami's World Map!",
    "Type": "Filler",
    "Airdate": "2006-10-15T07:00:00.000Z"
  },
  {
    "#": 282,
    "Title": "Parting Builds a Man's Character! Sanji and Chopper!",
    "Type": "Filler",
    "Airdate": "2006-10-22T07:00:00.000Z"
  },
  {
    "#": 283,
    "Title": "Everything Is for Her Friends! Robin in the Darkness!",
    "Type": "Filler",
    "Airdate": "2006-10-29T07:00:00.000Z"
  },
  {
    "#": 284,
    "Title": "I'm Not Gonna Hand Over the Blueprints! Franky's Decision!",
    "Type": "Manga Canon",
    "Airdate": "2006-11-05T08:00:00.000Z"
  },
  {
    "#": 285,
    "Title": "Obtain the Five Keys! The Straw Hat Pirates vs. CP9!",
    "Type": "Manga Canon",
    "Airdate": "2006-11-12T08:00:00.000Z"
  },
  {
    "#": 286,
    "Title": "Devil Fruit Powers! Kaku and Jabra Transform!",
    "Type": "Manga Canon",
    "Airdate": "2006-11-19T08:00:00.000Z"
  },
  {
    "#": 287,
    "Title": "I Won't Kick Even if It Costs Me My Life! Sanji's Chivalry!",
    "Type": "Manga Canon",
    "Airdate": "2006-11-26T08:00:00.000Z"
  },
  {
    "#": 288,
    "Title": "Fukurou's Miscalculation! My Cola Is the Water of Life!",
    "Type": "Manga Canon",
    "Airdate": "2006-12-03T08:00:00.000Z"
  },
  {
    "#": 289,
    "Title": "Zoro Busts Out a New Technique! The Sword's Name Is Sniperking?",
    "Type": "Manga Canon",
    "Airdate": "2006-12-10T08:00:00.000Z"
  },
  {
    "#": 290,
    "Title": "Uncontrollable! Chopper's Forbidden Rumble!",
    "Type": "Manga Canon",
    "Airdate": "2006-12-17T08:00:00.000Z"
  },
  {
    "#": 291,
    "Title": "Boss Luffy Returns! Is It a Dream or Reality? Lottery Ruckus!",
    "Type": "Filler",
    "Airdate": "2006-12-24T08:00:00.000Z"
  },
  {
    "#": 292,
    "Title": "A Big Rice Cake Tossing Race at the Castle! Red Nose's Plot!",
    "Type": "Filler",
    "Airdate": "2007-01-07T08:00:00.000Z"
  },
  {
    "#": 293,
    "Title": "Bubble Master Kalifa! The Soap Trap Closes in on Nami!",
    "Type": "Manga Canon",
    "Airdate": "2007-01-14T08:00:00.000Z"
  },
  {
    "#": 294,
    "Title": "Resounding Bad News! The Buster Call Invoked!",
    "Type": "Manga Canon",
    "Airdate": "2007-01-21T08:00:00.000Z"
  },
  {
    "#": 295,
    "Title": "Five Namis? Nami Strikes Back With Mirages!",
    "Type": "Manga Canon",
    "Airdate": "2007-01-28T08:00:00.000Z"
  },
  {
    "#": 296,
    "Title": "Nami's Decision! Fire at the Out-of-Control Chopper!",
    "Type": "Manga Canon",
    "Airdate": "2007-02-04T08:00:00.000Z"
  },
  {
    "#": 297,
    "Title": "Hunter Sanji Makes an Entrance? Elegy for a Lying Wolf!",
    "Type": "Manga Canon",
    "Airdate": "2007-02-11T08:00:00.000Z"
  },
  {
    "#": 298,
    "Title": "Fiery Kicks! Sanji's Full Course of Foot Techniques!",
    "Type": "Manga Canon",
    "Airdate": "2007-02-25T08:00:00.000Z"
  },
  {
    "#": 299,
    "Title": "Fierce Sword Attacks! Zoro vs. Kaku, Powerful Sword Fighting Showdown!",
    "Type": "Manga Canon",
    "Airdate": "2007-03-04T08:00:00.000Z"
  },
  {
    "#": 300,
    "Title": "Demon God Zoro! An Incarnation of Asura Born From Fighting Spirit!",
    "Type": "Manga Canon",
    "Airdate": "2007-03-11T08:00:00.000Z"
  },
  {
    "#": 301,
    "Title": "Spandam Frightened! The Hero on the Tower of Law!",
    "Type": "Manga Canon",
    "Airdate": "2007-03-18T07:00:00.000Z"
  },
  {
    "#": 302,
    "Title": "Robin Freed! Luffy vs. Lucci, Showdown Between Leaders!",
    "Type": "Manga Canon",
    "Airdate": "2007-03-25T07:00:00.000Z"
  },
  {
    "#": 303,
    "Title": "Boss Luffy Is the Culprit? Track Down the Missing Great Cherry Tree!",
    "Type": "Filler",
    "Airdate": "2007-04-01T07:00:00.000Z"
  },
  {
    "#": 304,
    "Title": "I Can't Protect Anyone Unless I Win! Third Gear Activated!",
    "Type": "Manga Canon",
    "Airdate": "2007-04-08T07:00:00.000Z"
  },
  {
    "#": 305,
    "Title": "Shivering Past! Dark Justice and Rob Lucci!",
    "Type": "Manga Canon",
    "Airdate": "2007-04-15T07:00:00.000Z"
  },
  {
    "#": 306,
    "Title": "A Mysterious Mermaid Appears? As Consciousness Fades Away...",
    "Type": "Manga Canon",
    "Airdate": "2007-04-22T07:00:00.000Z"
  },
  {
    "#": 307,
    "Title": "Cannon Fire Sinks the Island! Franky's Lamentation!",
    "Type": "Manga Canon",
    "Airdate": "2007-04-29T07:00:00.000Z"
  },
  {
    "#": 308,
    "Title": "Wait for Luffy! Mortal Combat on the Bridge of Hesitation!",
    "Type": "Manga Canon",
    "Airdate": "2007-05-06T07:00:00.000Z"
  },
  {
    "#": 309,
    "Title": "Fists Full of Emotion! Luffy Unleashes Gatling With All His Might!",
    "Type": "Manga Canon",
    "Airdate": "2007-05-13T07:00:00.000Z"
  },
  {
    "#": 310,
    "Title": "From the Sea, a Friend Arrives! The Straw Hats Share the Strongest Bond!",
    "Type": "Manga Canon",
    "Airdate": "2007-05-20T07:00:00.000Z"
  },
  {
    "#": 311,
    "Title": "Everyone Makes a Great Escape! The Road to Victory Is for the Pirates!",
    "Type": "Manga Canon",
    "Airdate": "2007-05-27T07:00:00.000Z"
  },
  {
    "#": 312,
    "Title": "Thank You, Merry! Snow Falls Over the Parting Sea!",
    "Type": "Manga Canon",
    "Airdate": "2007-06-03T07:00:00.000Z"
  },
  {
    "#": 313,
    "Title": "Peace Interrupted! A Navy Vice Admiral With a Fist of Love!",
    "Type": "Manga Canon",
    "Airdate": "2007-06-10T07:00:00.000Z"
  },
  {
    "#": 314,
    "Title": "The Strongest Family? Luffy's Father Revealed!",
    "Type": "Manga Canon",
    "Airdate": "2007-06-17T07:00:00.000Z"
  },
  {
    "#": 315,
    "Title": "Its Name Is the New World! The Fate of the Grand Line!",
    "Type": "Manga Canon",
    "Airdate": "2007-06-24T07:00:00.000Z"
  },
  {
    "#": 316,
    "Title": "Shanks Makes a Move! The Linchpin to the Reckless Era!",
    "Type": "Manga Canon",
    "Airdate": "2007-07-01T07:00:00.000Z"
  },
  {
    "#": 317,
    "Title": "The Girl in Search of Her Yagara! Great Search in the City of Water!",
    "Type": "Filler",
    "Airdate": "2007-07-08T07:00:00.000Z"
  },
  {
    "#": 318,
    "Title": "Mothers Are Strong! Zoro's Hectic Household Chores!",
    "Type": "Filler",
    "Airdate": "2007-07-15T07:00:00.000Z"
  },
  {
    "#": 319,
    "Title": "Sanji's Shock! Mysterious Old Man and His Super Yummy Cooking!",
    "Type": "Filler",
    "Airdate": "2007-07-22T07:00:00.000Z"
  },
  {
    "#": 320,
    "Title": "Everyone Finally Has a Bounty! A Pirate Group Worth Over 600 Million!",
    "Type": "Manga Canon",
    "Airdate": "2007-08-19T07:00:00.000Z"
  },
  {
    "#": 321,
    "Title": "The King of Animals That Overlooks the Sea! The Dream Ship Magnificently Completed!",
    "Type": "Manga Canon",
    "Airdate": "2007-08-26T07:00:00.000Z"
  },
  {
    "#": 322,
    "Title": "Goodbye My Dear Underlings! Franky Departs!",
    "Type": "Manga Canon",
    "Airdate": "2007-09-02T07:00:00.000Z"
  },
  {
    "#": 323,
    "Title": "Departing the City of Water! Usopp Mans up and Brings Closure to the Duel!",
    "Type": "Manga Canon",
    "Airdate": "2007-09-09T07:00:00.000Z"
  },
  {
    "#": 324,
    "Title": "Wanted Posters Make It Around the World! Celebrations in Their Hometowns as the Ship Moves Forward!",
    "Type": "Manga Canon",
    "Airdate": "2007-09-16T07:00:00.000Z"
  },
  {
    "#": 325,
    "Title": "The Most Heinous Power! Blackbeard’s Darkness Attacks Ace!",
    "Type": "Manga Canon",
    "Airdate": "2007-09-23T07:00:00.000Z"
  },
  {
    "#": 326,
    "Title": "The Mysterious Band of Pirates! Sunny and the Dangerous Trap!",
    "Type": "Filler",
    "Airdate": "2007-10-14T07:00:00.000Z"
  },
  {
    "#": 327,
    "Title": "Sunny in a Pinch! Roar, Secret Superspeed Mecha!",
    "Type": "Filler",
    "Airdate": "2007-10-21T07:00:00.000Z"
  },
  {
    "#": 328,
    "Title": "The Dream Sinking in the New World! The Disillusioned Pirate, Puzzle!",
    "Type": "Filler",
    "Airdate": "2007-10-28T07:00:00.000Z"
  },
  {
    "#": 329,
    "Title": "The Assassins Attack! The Great Battle on Ice Begins!",
    "Type": "Filler",
    "Airdate": "2007-11-04T07:00:00.000Z"
  },
  {
    "#": 330,
    "Title": "The Straw Hat’s Hard Battles! A Pirate Soul Risking It All for the Flag!",
    "Type": "Filler",
    "Airdate": "2007-11-11T08:00:00.000Z"
  },
  {
    "#": 331,
    "Title": "Hot Full Throttle! The Twin’s Magnetic Power Drawing Near!",
    "Type": "Filler",
    "Airdate": "2007-11-18T08:00:00.000Z"
  },
  {
    "#": 332,
    "Title": "Mansion of Great Chaos! The Enraged Don and the Captured Crew!",
    "Type": "Filler",
    "Airdate": "2007-11-25T08:00:00.000Z"
  },
  {
    "#": 333,
    "Title": "The Return of the Phoenix! The Dream of the Pirate Flag Sworn to a Friend!",
    "Type": "Filler",
    "Airdate": "2007-12-02T08:00:00.000Z"
  },
  {
    "#": 334,
    "Title": "The Red Hot Decisive Battle! Luffy vs. the Scorching Don!",
    "Type": "Filler",
    "Airdate": "2007-12-09T08:00:00.000Z"
  },
  {
    "#": 335,
    "Title": "Waiting in the New World! Farewell to the Brave Pirates!",
    "Type": "Filler",
    "Airdate": "2007-12-16T08:00:00.000Z"
  },
  {
    "#": 336,
    "Title": "Chopperman to the Rescue! Protect the TV Station by the Shore!",
    "Type": "Filler",
    "Airdate": "2007-12-23T08:00:00.000Z"
  },
  {
    "#": 337,
    "Title": "Plunging Into the Devil’s Sea! The Mysterious Skeleton Floating in the Fog!",
    "Type": "Manga Canon",
    "Airdate": "2008-01-06T08:00:00.000Z"
  },
  {
    "#": 338,
    "Title": "The Joy of Seeing People! The Gentleman Skeleton's True Identity!",
    "Type": "Manga Canon",
    "Airdate": "2008-01-13T08:00:00.000Z"
  },
  {
    "#": 339,
    "Title": "One Unnatural Phenomenon After the Next! Disembarking on Thriller Bark!",
    "Type": "Manga Canon",
    "Airdate": "2008-01-20T08:00:00.000Z"
  },
  {
    "#": 340,
    "Title": "The Man Called a Genius! Hogback Makes His Appearance!",
    "Type": "Manga Canon",
    "Airdate": "2008-01-27T08:00:00.000Z"
  },
  {
    "#": 341,
    "Title": "Nami's in a Major Pinch! The Zombie Mansion and the Invisible Man!",
    "Type": "Manga Canon",
    "Airdate": "2008-02-03T08:00:00.000Z"
  },
  {
    "#": 342,
    "Title": "The Zombie's Secret! Hogback's Nightmarish Laboratory!",
    "Type": "Manga Canon",
    "Airdate": "2008-02-10T08:00:00.000Z"
  },
  {
    "#": 343,
    "Title": "His Name Is Moria! The Great Shadow-Seizing Pirate's Trap!",
    "Type": "Manga Canon",
    "Airdate": "2008-02-17T08:00:00.000Z"
  },
  {
    "#": 344,
    "Title": "Feast of the Zombie Song! The Night Raid's Bell Is the Sound of Darkness!",
    "Type": "Manga Canon",
    "Airdate": "2008-02-24T08:00:00.000Z"
  },
  {
    "#": 345,
    "Title": "A Bunch of Animals? Perona's Wonder Garden!",
    "Type": "Manga Canon",
    "Airdate": "2008-03-02T08:00:00.000Z"
  },
  {
    "#": 346,
    "Title": "The Vanishing Straw Hat Crew! A Mysterious Swordsman Appears!",
    "Type": "Manga Canon",
    "Airdate": "2008-03-09T08:00:00.000Z"
  },
  {
    "#": 347,
    "Title": "Chivalry Remains! The Traitorous Zombie Protects Nami",
    "Type": "Manga Canon",
    "Airdate": "2008-03-16T07:00:00.000Z"
  },
  {
    "#": 348,
    "Title": "Appearing From the Sky! That Man Is the Humming Swordsman!",
    "Type": "Manga Canon",
    "Airdate": "2008-03-23T07:00:00.000Z"
  },
  {
    "#": 349,
    "Title": "Luffy’s Emergency Situation! The Ultimate Shadow’s Destination!",
    "Type": "Manga Canon",
    "Airdate": "2008-03-30T07:00:00.000Z"
  },
  {
    "#": 350,
    "Title": "The Warrior Known as the \"Devil!!\" The Moment of Oars' Revival",
    "Type": "Manga Canon",
    "Airdate": "2008-04-20T07:00:00.000Z"
  },
  {
    "#": 351,
    "Title": "Awakening After 500 Years!! Oars Opens His Eyes!!",
    "Type": "Manga Canon",
    "Airdate": "2008-04-27T07:00:00.000Z"
  },
  {
    "#": 352,
    "Title": "A Belief Worth Begging To Live For!! Brook Defends His Afro",
    "Type": "Manga Canon",
    "Airdate": "2008-05-04T07:00:00.000Z"
  },
  {
    "#": 353,
    "Title": "A Man's Promise Never Dies!! To the Friend Waiting Under the Distant Sky",
    "Type": "Manga Canon",
    "Airdate": "2008-05-11T07:00:00.000Z"
  },
  {
    "#": 354,
    "Title": "I Swear To Go See Him!! Brook and the Cape of Promise!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2008-05-18T07:00:00.000Z"
  },
  {
    "#": 355,
    "Title": "Food, Nami and Shadows!! Luffy’s Enraged Counterattack!",
    "Type": "Manga Canon",
    "Airdate": "2008-05-25T07:00:00.000Z"
  },
  {
    "#": 356,
    "Title": "Usopp’s the Strongest? Leave Anything Negative to Him!",
    "Type": "Manga Canon",
    "Airdate": "2008-06-01T07:00:00.000Z"
  },
  {
    "#": 357,
    "Title": "The General Zombies Are Down in a Flash!! Oars Feels Like an Adventure!!",
    "Type": "Manga Canon",
    "Airdate": "2008-06-08T07:00:00.000Z"
  },
  {
    "#": 358,
    "Title": "Blazing Knight Sanji!! Kick Down the Fake Wedding",
    "Type": "Manga Canon",
    "Airdate": "2008-06-15T07:00:00.000Z"
  },
  {
    "#": 359,
    "Title": "A Clear-Clear History? Sanji's Stolen Dream",
    "Type": "Manga Canon",
    "Airdate": "2008-06-22T07:00:00.000Z"
  },
  {
    "#": 360,
    "Title": "Save Me, Hero!! My Enemy Is the Immortal Princess",
    "Type": "Manga Canon",
    "Airdate": "2008-06-29T07:00:00.000Z"
  },
  {
    "#": 361,
    "Title": "Perona Is Terrified!! Usopp and Untruthful Share the Same \"U\"",
    "Type": "Manga Canon",
    "Airdate": "2008-07-06T07:00:00.000Z"
  },
  {
    "#": 362,
    "Title": "Slashes Dancing on the Roof!! Zoro vs. Ryuma's Showdown",
    "Type": "Manga Canon",
    "Airdate": "2008-07-13T07:00:00.000Z"
  },
  {
    "#": 363,
    "Title": "Chopper Is Furious!! Hogback's Evil Medical Practices",
    "Type": "Manga Canon",
    "Airdate": "2008-07-20T07:00:00.000Z"
  },
  {
    "#": 364,
    "Title": "Oars Roars! Come Out, Straw Hat Crew",
    "Type": "Manga Canon",
    "Airdate": "2008-08-03T07:00:00.000Z"
  },
  {
    "#": 365,
    "Title": "Luffy Is the Enemy! The Ulitmate Zombie vs. the Straw Hat Crew",
    "Type": "Manga Canon",
    "Airdate": "2008-08-10T07:00:00.000Z"
  },
  {
    "#": 366,
    "Title": "You're Going Down, Absalom!! Nami's Lightning Attack of Friendship!!",
    "Type": "Manga Canon",
    "Airdate": "2008-08-17T07:00:00.000Z"
  },
  {
    "#": 367,
    "Title": "Knock Him Down!! Special Attack: Straw Hat Docking?",
    "Type": "Manga Canon",
    "Airdate": "2008-08-24T07:00:00.000Z"
  },
  {
    "#": 368,
    "Title": "The Silent Assault!! The Mysterious Visitor, Tyrant Kuma",
    "Type": "Manga Canon",
    "Airdate": "2008-08-31T07:00:00.000Z"
  },
  {
    "#": 369,
    "Title": "Oars + Moria! The Most Heinous Combination of Brains and Brawn",
    "Type": "Manga Canon",
    "Airdate": "2008-09-07T07:00:00.000Z"
  },
  {
    "#": 370,
    "Title": "The Secret Plan to Turn the Tables! Nightmare Luffy Makes His Appearance",
    "Type": "Manga Canon",
    "Airdate": "2008-09-14T07:00:00.000Z"
  },
  {
    "#": 371,
    "Title": "The Straw Hat Crew Gets Wiped Out! The Shadow-Shadow's Powers in Full Swing",
    "Type": "Manga Canon",
    "Airdate": "2008-09-21T07:00:00.000Z"
  },
  {
    "#": 372,
    "Title": "The Incredible Battle Starts! Luffy vs. Luffy",
    "Type": "Manga Canon",
    "Airdate": "2008-09-28T07:00:00.000Z"
  },
  {
    "#": 373,
    "Title": "The End of the Battle Is Nigh! Pound in the Finishing Move",
    "Type": "Manga Canon",
    "Airdate": "2008-10-05T07:00:00.000Z"
  },
  {
    "#": 374,
    "Title": "Our Bodies Vanish! The Morning Sun Shines on the Nightmarish Island!",
    "Type": "Manga Canon",
    "Airdate": "2008-10-12T07:00:00.000Z"
  },
  {
    "#": 375,
    "Title": "Not Out of Danger Yet! Orders To Annihilate the Straw Hat Crew",
    "Type": "Manga Canon",
    "Airdate": "2008-10-19T07:00:00.000Z"
  },
  {
    "#": 376,
    "Title": "It Repels Everything! Kuma's Paw-Paw Power!",
    "Type": "Manga Canon",
    "Airdate": "2008-11-09T08:00:00.000Z"
  },
  {
    "#": 377,
    "Title": "The Pain of My Crewmates Is My Pain! Zoro's Desperate Fight!",
    "Type": "Manga Canon",
    "Airdate": "2008-11-16T08:00:00.000Z"
  },
  {
    "#": 378,
    "Title": "The Promise From a Distant Day! The Pirates' Song and a Small Whale!",
    "Type": "Manga Canon",
    "Airdate": "2008-11-23T08:00:00.000Z"
  },
  {
    "#": 379,
    "Title": "Brook's Past! A Sad Farewell With His Cheerful Comrade!",
    "Type": "Manga Canon",
    "Airdate": "2008-11-30T08:00:00.000Z"
  },
  {
    "#": 380,
    "Title": "Bink's Booze! The Song That Connects the Past With the Present!",
    "Type": "Manga Canon",
    "Airdate": "2008-12-07T08:00:00.000Z"
  },
  {
    "#": 381,
    "Title": "A New Crewmate! The Musician, Humming Brook!",
    "Type": "Manga Canon",
    "Airdate": "2008-12-14T08:00:00.000Z"
  },
  {
    "#": 382,
    "Title": "The Slow-Slow Menace! \"Silver Fox\" Foxy Returns!",
    "Type": "Filler",
    "Airdate": "2008-12-21T08:00:00.000Z"
  },
  {
    "#": 383,
    "Title": "The Great Scramble for Treasure! Collapse! Spa Island!",
    "Type": "Filler",
    "Airdate": "2008-12-28T08:00:00.000Z"
  },
  {
    "#": 384,
    "Title": "Brook's Great Struggle! Is the Path To Becoming a True Comrade Rigorous?",
    "Type": "Filler",
    "Airdate": "2009-01-11T08:00:00.000Z"
  },
  {
    "#": 385,
    "Title": "Arriving at Halfway Through the Grand Line! The Red Line",
    "Type": "Manga Canon",
    "Airdate": "2009-01-18T08:00:00.000Z"
  },
  {
    "#": 386,
    "Title": "Hatred of the Straw Hat Crew! Enter Iron Mask Duval",
    "Type": "Manga Canon",
    "Airdate": "2009-01-25T08:00:00.000Z"
  },
  {
    "#": 387,
    "Title": "The Fated Reunion! Save the Imprisoned Fish-Man",
    "Type": "Manga Canon",
    "Airdate": "2009-02-01T08:00:00.000Z"
  },
  {
    "#": 388,
    "Title": "Tragedy! The Truth of the Unmasked Duval",
    "Type": "Manga Canon",
    "Airdate": "2009-02-08T08:00:00.000Z"
  },
  {
    "#": 389,
    "Title": "Explosion! The Sunny's Super Secret Weapon: Gaon Cannon",
    "Type": "Manga Canon",
    "Airdate": "2009-02-15T08:00:00.000Z"
  },
  {
    "#": 390,
    "Title": "Landing to Get to Fish-Man Island! The Sabaody Archipelago",
    "Type": "Manga Canon",
    "Airdate": "2009-02-22T08:00:00.000Z"
  },
  {
    "#": 391,
    "Title": "Tyranny! The Rulers of Sabaody, the Celestial Dragons",
    "Type": "Manga Canon",
    "Airdate": "2009-03-01T08:00:00.000Z"
  },
  {
    "#": 392,
    "Title": "New Rivals Gather! The 11 Supernovas",
    "Type": "Manga Canon",
    "Airdate": "2009-03-08T08:00:00.000Z"
  },
  {
    "#": 393,
    "Title": "The Target Is Camie! The Looming Clutches of a Professional Kidnapper",
    "Type": "Manga Canon",
    "Airdate": "2009-03-15T07:00:00.000Z"
  },
  {
    "#": 394,
    "Title": "Rescue Camie! The Archipelago’s Lingering Dark History",
    "Type": "Manga Canon",
    "Airdate": "2009-03-29T07:00:00.000Z"
  },
  {
    "#": 395,
    "Title": "Time Limit! The Human Auction Begins",
    "Type": "Manga Canon",
    "Airdate": "2009-04-05T07:00:00.000Z"
  },
  {
    "#": 396,
    "Title": "The Fist Explodes! Destroy the Auction",
    "Type": "Manga Canon",
    "Airdate": "2009-04-12T07:00:00.000Z"
  },
  {
    "#": 397,
    "Title": "Major Panic! Desperate Struggle at the Auction House",
    "Type": "Manga Canon",
    "Airdate": "2009-04-19T07:00:00.000Z"
  },
  {
    "#": 398,
    "Title": "Admiral Kizaru Takes Action! Sabaody Archipelago Thrown Into Chaos",
    "Type": "Manga Canon",
    "Airdate": "2009-04-26T07:00:00.000Z"
  },
  {
    "#": 399,
    "Title": "Break Through the Siege! The Navy vs. the Three Captains",
    "Type": "Manga Canon",
    "Airdate": "2009-05-03T07:00:00.000Z"
  },
  {
    "#": 400,
    "Title": "Roger and Rayleigh! The King of the Pirates and His Right Hand Man",
    "Type": "Manga Canon",
    "Airdate": "2009-05-10T07:00:00.000Z"
  },
  {
    "#": 401,
    "Title": "No Escape!? Admiral Kizaru’s Light Speed Kick!!",
    "Type": "Manga Canon",
    "Airdate": "2009-05-17T07:00:00.000Z"
  },
  {
    "#": 402,
    "Title": "Overwhelming! The Navy’s Fighting Weapons, the Pacifistas",
    "Type": "Manga Canon",
    "Airdate": "2009-05-24T07:00:00.000Z"
  },
  {
    "#": 403,
    "Title": "An Even Stronger Enemy Appears! The Battle Axe-Carrying Sentomaru",
    "Type": "Manga Canon",
    "Airdate": "2009-05-31T07:00:00.000Z"
  },
  {
    "#": 404,
    "Title": "Admiral Kizaru's Fierce Assault! The Straw Hats Face Certain Death!",
    "Type": "Manga Canon",
    "Airdate": "2009-06-07T07:00:00.000Z"
  },
  {
    "#": 405,
    "Title": "Eliminated Friends! The Final Day of the Straw Hat Crew",
    "Type": "Manga Canon",
    "Airdate": "2009-06-14T07:00:00.000Z"
  },
  {
    "#": 406,
    "Title": "Feudal Era Side Story! Boss Luffy Appears Again",
    "Type": "Filler",
    "Airdate": "2009-06-21T07:00:00.000Z"
  },
  {
    "#": 407,
    "Title": "Feudal Era Side Story! Defeat Thriller Company's Trap",
    "Type": "Filler",
    "Airdate": "2009-06-28T07:00:00.000Z"
  },
  {
    "#": 408,
    "Title": "Landing! The All-Female Island, Amazon Lily",
    "Type": "Manga Canon",
    "Airdate": "2009-07-05T07:00:00.000Z"
  },
  {
    "#": 409,
    "Title": "Hurry Back to Your Friends! The Maiden Island Adventure",
    "Type": "Manga Canon",
    "Airdate": "2009-07-12T07:00:00.000Z"
  },
  {
    "#": 410,
    "Title": "Everyone Falls in Love! Pirate Empress Hancock",
    "Type": "Manga Canon",
    "Airdate": "2009-07-19T07:00:00.000Z"
  },
  {
    "#": 411,
    "Title": "The Secret Hidden on Their Backs! Luffy and the Snake Princess Meet",
    "Type": "Manga Canon",
    "Airdate": "2009-08-02T07:00:00.000Z"
  },
  {
    "#": 412,
    "Title": "Heartless Judgment! Margaret Is Turned to Stone!!",
    "Type": "Manga Canon",
    "Airdate": "2009-08-09T07:00:00.000Z"
  },
  {
    "#": 413,
    "Title": "A Difficult Fight for Luffy! The Snake Sisters' Haki Power!!",
    "Type": "Manga Canon",
    "Airdate": "2009-08-16T07:00:00.000Z"
  },
  {
    "#": 414,
    "Title": "All-Out Special Power Battle!! Gum-Gum vs. Snake-Snake",
    "Type": "Manga Canon",
    "Airdate": "2009-08-23T07:00:00.000Z"
  },
  {
    "#": 415,
    "Title": "Hancock's Confession! The Sisters' Abhorrent Past",
    "Type": "Manga Canon",
    "Airdate": "2009-08-30T07:00:00.000Z"
  },
  {
    "#": 416,
    "Title": "Saving Ace! The Next Stop: The Great Prison!",
    "Type": "Manga Canon",
    "Airdate": "2009-09-06T07:00:00.000Z"
  },
  {
    "#": 417,
    "Title": "Love Is a Hurricane! Hancock Madly in Love!",
    "Type": "Manga Canon",
    "Airdate": "2009-09-13T07:00:00.000Z"
  },
  {
    "#": 418,
    "Title": "The Friends' Whereabouts! The Science of Weather and the Mechanical Island!",
    "Type": "Anime Canon",
    "Airdate": "2009-09-20T07:00:00.000Z"
  },
  {
    "#": 419,
    "Title": "The Friends' Whereabouts! An Island of Giant Birds and a Pink Paradise!",
    "Type": "Anime Canon",
    "Airdate": "2009-09-27T07:00:00.000Z"
  },
  {
    "#": 420,
    "Title": "The Friends' Whereabouts! Bridging the Islands and Vicious Vegetations!",
    "Type": "Anime Canon",
    "Airdate": "2009-10-04T07:00:00.000Z"
  },
  {
    "#": 421,
    "Title": "The Friends' Whereabouts! A Negative Princess and the King of Demons!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2009-10-11T07:00:00.000Z"
  },
  {
    "#": 422,
    "Title": "A Deadly Infiltration! The Underwater Prison Impel Down!",
    "Type": "Manga Canon",
    "Airdate": "2009-10-18T07:00:00.000Z"
  },
  {
    "#": 423,
    "Title": "A Reunion in Hell?! The Man Who Ate the Chop-Chop Fruit!",
    "Type": "Manga Canon",
    "Airdate": "2009-10-25T07:00:00.000Z"
  },
  {
    "#": 424,
    "Title": "Break Through the Crimson Hell! Buggy's Chaos-Inducing Plan!",
    "Type": "Manga Canon",
    "Airdate": "2009-11-01T07:00:00.000Z"
  },
  {
    "#": 425,
    "Title": "The Strongest Man in the Prison! Poison Man Magellan Appears!",
    "Type": "Manga Canon",
    "Airdate": "2009-11-08T08:00:00.000Z"
  },
  {
    "#": 426,
    "Title": "A Special Presentation Related to the Movie! A Gold Lion's Ambition on the Move!",
    "Type": "Filler",
    "Airdate": "2009-11-15T08:00:00.000Z"
  },
  {
    "#": 427,
    "Title": "A Special Presentation Related to the Movie! Little East Blue in Danger!",
    "Type": "Filler",
    "Airdate": "2009-11-22T08:00:00.000Z"
  },
  {
    "#": 428,
    "Title": "A Special Presentation Related to the Movie! The Fierce Onslaught of the Amigo Pirates!",
    "Type": "Filler",
    "Airdate": "2009-11-29T08:00:00.000Z"
  },
  {
    "#": 429,
    "Title": "A Special Presentation Related to the Movie! Luffy vs. Largo - The Battle Is On!",
    "Type": "Filler",
    "Airdate": "2009-12-06T08:00:00.000Z"
  },
  {
    "#": 430,
    "Title": "A Warlord in Prison! Jimbei the First Son of the Sea!",
    "Type": "Manga Canon",
    "Airdate": "2009-12-13T08:00:00.000Z"
  },
  {
    "#": 431,
    "Title": "Chief Jailer Saldeath's Trap! Level 3 - Starvation Hell!",
    "Type": "Manga Canon",
    "Airdate": "2009-12-20T08:00:00.000Z"
  },
  {
    "#": 432,
    "Title": "The Unleashed Swan! A Reunion With Bon Clay!",
    "Type": "Manga Canon",
    "Airdate": "2009-12-27T08:00:00.000Z"
  },
  {
    "#": 433,
    "Title": "Warden Magellan's Strategy! Straw Hat Entrapment Completed!",
    "Type": "Manga Canon",
    "Airdate": "2010-01-10T08:00:00.000Z"
  },
  {
    "#": 434,
    "Title": "All Forces Have Gathered! The Battle on Level 4 - The Burning Heat Hell!",
    "Type": "Manga Canon",
    "Airdate": "2010-01-17T08:00:00.000Z"
  },
  {
    "#": 435,
    "Title": "Mighty Magellan! Bon Clay Bugs Out!",
    "Type": "Manga Canon",
    "Airdate": "2010-01-24T08:00:00.000Z"
  },
  {
    "#": 436,
    "Title": "The Showdown Has Come! Luffy's Desperate Last Attack!",
    "Type": "Manga Canon",
    "Airdate": "2010-01-31T08:00:00.000Z"
  },
  {
    "#": 437,
    "Title": "For His Friend! Bon Clay Goes to the Deadly Rescue!",
    "Type": "Manga Canon",
    "Airdate": "2010-02-07T08:00:00.000Z"
  },
  {
    "#": 438,
    "Title": "A Paradise in Hell! Impel Down - Level 5.5!",
    "Type": "Manga Canon",
    "Airdate": "2010-02-14T08:00:00.000Z"
  },
  {
    "#": 439,
    "Title": "Luffy's Treatment Begins! Iva's Miraculous Power!",
    "Type": "Manga Canon",
    "Airdate": "2010-02-21T08:00:00.000Z"
  },
  {
    "#": 440,
    "Title": "Believe in Miracles! Bon Clay's Cries From the Heart!",
    "Type": "Manga Canon",
    "Airdate": "2010-02-28T08:00:00.000Z"
  },
  {
    "#": 441,
    "Title": "Luffy Back in Action! Iva Begins the Breakout Plan!!",
    "Type": "Manga Canon",
    "Airdate": "2010-03-07T08:00:00.000Z"
  },
  {
    "#": 442,
    "Title": "Ace's Convoy Begins! Battle on the Lowest Floor - Level 6!",
    "Type": "Manga Canon",
    "Airdate": "2010-03-14T08:00:00.000Z"
  },
  {
    "#": 443,
    "Title": "The Ultimate Team Has Formed! Shaking Impel Down!",
    "Type": "Manga Canon",
    "Airdate": "2010-03-21T07:00:00.000Z"
  },
  {
    "#": 444,
    "Title": "Even More Chaos! Here Comes Blackbeard Teach!",
    "Type": "Manga Canon",
    "Airdate": "2010-03-28T07:00:00.000Z"
  },
  {
    "#": 445,
    "Title": "The Dangerous Encounter! Blackbeard and Shiryu of the Rain!",
    "Type": "Manga Canon",
    "Airdate": "2010-04-04T07:00:00.000Z"
  },
  {
    "#": 446,
    "Title": "Refusal to Be Defeated! Serious Hannyabal",
    "Type": "Manga Canon",
    "Airdate": "2010-04-11T07:00:00.000Z"
  },
  {
    "#": 447,
    "Title": "Jet Pistol of Anger! Luffy vs. Blackbeard!",
    "Type": "Manga Canon",
    "Airdate": "2010-04-18T07:00:00.000Z"
  },
  {
    "#": 448,
    "Title": "Stop Magellan! Iva's Esoteric Technique Explodes!",
    "Type": "Manga Canon",
    "Airdate": "2010-04-25T07:00:00.000Z"
  },
  {
    "#": 449,
    "Title": "Magellan's Tricky Move! A Foiled Escaped Plan!",
    "Type": "Manga Canon",
    "Airdate": "2010-05-02T07:00:00.000Z"
  },
  {
    "#": 450,
    "Title": "The Escapee Team in Trouble! The Forbidden Move: Venom Demon!",
    "Type": "Manga Canon",
    "Airdate": "2010-05-09T07:00:00.000Z"
  },
  {
    "#": 451,
    "Title": "Come, Final Miracle! Break Through the Gate of Justice!",
    "Type": "Manga Canon",
    "Airdate": "2010-05-16T07:00:00.000Z"
  },
  {
    "#": 452,
    "Title": "To the Navy Headquarters! Off to Rescue Ace!",
    "Type": "Manga Canon",
    "Airdate": "2010-05-23T07:00:00.000Z"
  },
  {
    "#": 453,
    "Title": "The Friends' Whereabouts! The Weatheria Report and the Cyborg Animals!",
    "Type": "Anime Canon",
    "Airdate": "2010-05-30T07:00:00.000Z"
  },
  {
    "#": 454,
    "Title": "The Friends' Whereabouts! A Cheeper of Giant Birds and a Pink Showdown!",
    "Type": "Anime Canon",
    "Airdate": "2010-06-06T07:00:00.000Z"
  },
  {
    "#": 455,
    "Title": "The Friends' Whereabouts! Revolutionaries and the Gorging Forest's Trap!",
    "Type": "Anime Canon",
    "Airdate": "2010-06-13T07:00:00.000Z"
  },
  {
    "#": 456,
    "Title": "The Friends' Whereabouts! A Huge Tomb and the Panty Debt!",
    "Type": "Anime Canon",
    "Airdate": "2010-06-20T07:00:00.000Z"
  },
  {
    "#": 457,
    "Title": "A Special Retrospective Before Marineford! The Vow of the Brotherhood!",
    "Type": "Filler",
    "Airdate": "2010-06-27T07:00:00.000Z"
  },
  {
    "#": 458,
    "Title": "A Special Retrospective Before Marineford! The Three Navy Admirals Come Together!",
    "Type": "Filler",
    "Airdate": "2010-07-11T07:00:00.000Z"
  },
  {
    "#": 459,
    "Title": "Ticking Down to the Time of Battle! The Navy's Strongest Lineup in Position!",
    "Type": "Manga Canon",
    "Airdate": "2010-07-18T07:00:00.000Z"
  },
  {
    "#": 460,
    "Title": "A Vast Fleet Appears! Here Come the Whitebeard Pirates!",
    "Type": "Manga Canon",
    "Airdate": "2010-08-01T07:00:00.000Z"
  },
  {
    "#": 461,
    "Title": "The Beginning of the War! Ace and Whitebeard's Past!",
    "Type": "Manga Canon",
    "Airdate": "2010-08-08T07:00:00.000Z"
  },
  {
    "#": 462,
    "Title": "The Force That Could Destroy the World! The Power of the Tremor-Tremor Fruit!",
    "Type": "Manga Canon",
    "Airdate": "2010-08-15T07:00:00.000Z"
  },
  {
    "#": 463,
    "Title": "An All-Consuming Inferno!! Admiral Akainu's Power!",
    "Type": "Manga Canon",
    "Airdate": "2010-08-22T07:00:00.000Z"
  },
  {
    "#": 464,
    "Title": "A Descendant of the Beast! Little Oars Jr. - Full Speed Ahead!",
    "Type": "Manga Canon",
    "Airdate": "2010-08-29T07:00:00.000Z"
  },
  {
    "#": 465,
    "Title": "Justice for the Winners! Sengoku's Strategy in Action!",
    "Type": "Manga Canon",
    "Airdate": "2010-09-05T07:00:00.000Z"
  },
  {
    "#": 466,
    "Title": "Straw Hat Team Arrives! Tension Grows at the Battlefield",
    "Type": "Manga Canon",
    "Airdate": "2010-09-12T07:00:00.000Z"
  },
  {
    "#": 467,
    "Title": "Even If It Means Death! Luffy vs. the Navy, the Battle Starts!",
    "Type": "Manga Canon",
    "Airdate": "2010-09-19T07:00:00.000Z"
  },
  {
    "#": 468,
    "Title": "Hard Battles, One After Another! Devil Fruit Users vs. Devil Fruit Users!",
    "Type": "Manga Canon",
    "Airdate": "2010-09-26T07:00:00.000Z"
  },
  {
    "#": 469,
    "Title": "Kuma's Transformation! Iva's Blow of Anger!",
    "Type": "Manga Canon",
    "Airdate": "2010-10-03T07:00:00.000Z"
  },
  {
    "#": 470,
    "Title": "The Great Swordsman Mihawk! Luffy Comes Under the Attack of the Black Sword!",
    "Type": "Manga Canon",
    "Airdate": "2010-10-10T07:00:00.000Z"
  },
  {
    "#": 471,
    "Title": "The Extermination Strategy in Action! The Power of the Pacifistas!",
    "Type": "Manga Canon",
    "Airdate": "2010-10-17T07:00:00.000Z"
  },
  {
    "#": 472,
    "Title": "Akainu's Plot! Whitebeard Entrapped!",
    "Type": "Manga Canon",
    "Airdate": "2010-10-24T07:00:00.000Z"
  },
  {
    "#": 473,
    "Title": "The Encircling Walls Activated! The Whitebeard Pirates Backed Into a Corner!",
    "Type": "Manga Canon",
    "Airdate": "2010-10-31T07:00:00.000Z"
  },
  {
    "#": 474,
    "Title": "Execution Order Issued! Break Through the Encircling Walls!",
    "Type": "Manga Canon",
    "Airdate": "2010-11-07T07:00:00.000Z"
  },
  {
    "#": 475,
    "Title": "Moving Into the Final Phase! Whitebeard's Trump Card for Recovery!",
    "Type": "Manga Canon",
    "Airdate": "2010-11-14T08:00:00.000Z"
  },
  {
    "#": 476,
    "Title": "Luffy at the End of His Tether! An All-Out Battle at the Oris Plaza!",
    "Type": "Manga Canon",
    "Airdate": "2010-11-21T08:00:00.000Z"
  },
  {
    "#": 477,
    "Title": "The Power That Will Shorten One's Life! Energy Hormone, Redux!",
    "Type": "Manga Canon",
    "Airdate": "2010-11-28T08:00:00.000Z"
  },
  {
    "#": 478,
    "Title": "To Live up to a Promise! Luffy and Coby Collide!",
    "Type": "Manga Canon",
    "Airdate": "2010-12-05T08:00:00.000Z"
  },
  {
    "#": 479,
    "Title": "The Scaffold at Last! The Way to Ace Has Opened!",
    "Type": "Manga Canon",
    "Airdate": "2010-12-12T08:00:00.000Z"
  },
  {
    "#": 480,
    "Title": "Each on Different Paths! Luffy vs. Garp!",
    "Type": "Manga Canon",
    "Airdate": "2010-12-19T08:00:00.000Z"
  },
  {
    "#": 481,
    "Title": "Ace Rescued! Whitebeard's Final Order!",
    "Type": "Manga Canon",
    "Airdate": "2010-12-26T08:00:00.000Z"
  },
  {
    "#": 482,
    "Title": "The Power That Can Burn Even Fire! Akainu's Ruthless Pursuit!",
    "Type": "Manga Canon",
    "Airdate": "2011-01-09T08:00:00.000Z"
  },
  {
    "#": 483,
    "Title": "Looking for the Answer! Fire Fist Ace Dies on the Battlefield!",
    "Type": "Manga Canon",
    "Airdate": "2011-01-16T08:00:00.000Z"
  },
  {
    "#": 484,
    "Title": "The Navy Headquarters Falls! Whitebeard's Unspeakable Wrath!",
    "Type": "Manga Canon",
    "Airdate": "2011-01-23T08:00:00.000Z"
  },
  {
    "#": 485,
    "Title": "Ending the Matter! Whitebeard vs. the Blackbeard Pirates!",
    "Type": "Manga Canon",
    "Airdate": "2011-01-30T08:00:00.000Z"
  },
  {
    "#": 486,
    "Title": "The Show Begins! Blackbeard's Plot Is Revealed!",
    "Type": "Manga Canon",
    "Airdate": "2011-02-06T08:00:00.000Z"
  },
  {
    "#": 487,
    "Title": "The Insatiable Akainu! Lava Fists Pummel Luffy!",
    "Type": "Manga Canon",
    "Airdate": "2011-02-13T08:00:00.000Z"
  },
  {
    "#": 488,
    "Title": "The Desperate Scream! Courageous Moments That Will Change the Future",
    "Type": "Manga Canon",
    "Airdate": "2011-02-20T08:00:00.000Z"
  },
  {
    "#": 489,
    "Title": "Here Comes Shanks! The War of the Best Is Finally Over!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2011-03-06T08:00:00.000Z"
  },
  {
    "#": 490,
    "Title": "Mighty Leaders Face Each Other Down! Heralding the \"New Era!\"",
    "Type": "Manga Canon",
    "Airdate": "2011-03-20T07:00:00.000Z"
  },
  {
    "#": 491,
    "Title": "Landing at the Maiden Island! The Harsh Reality Falls Upon Luffy!",
    "Type": "Manga Canon",
    "Airdate": "2011-03-27T07:00:00.000Z"
  },
  {
    "#": 492,
    "Title": "The Strongest Tag-Team! Luffy and Toriko's Hard Struggle!",
    "Type": "Filler",
    "Airdate": "2011-04-03T07:00:00.000Z"
  },
  {
    "#": 493,
    "Title": "Luffy and Ace! The Story of How the Brothers Met!",
    "Type": "Manga Canon",
    "Airdate": "2011-04-10T07:00:00.000Z"
  },
  {
    "#": 494,
    "Title": "Here Comes Sabo! The Boy at the Gray Terminal!",
    "Type": "Manga Canon",
    "Airdate": "2011-04-17T07:00:00.000Z"
  },
  {
    "#": 495,
    "Title": "I Won't Run! Ace's Desperate Rescue Operation!",
    "Type": "Manga Canon",
    "Airdate": "2011-04-24T07:00:00.000Z"
  },
  {
    "#": 496,
    "Title": "To the Sea Someday! The Pledge of the Three Brats!",
    "Type": "Manga Canon",
    "Airdate": "2011-05-01T07:00:00.000Z"
  },
  {
    "#": 497,
    "Title": "Leaving the Dadan Family for Good? The Kids' Hideout Has Been Built!",
    "Type": "Anime Canon",
    "Airdate": "2011-05-08T07:00:00.000Z"
  },
  {
    "#": 498,
    "Title": "Luffy Becoming an Apprentice?! A Man Who Fought Against the King of the Pirates!",
    "Type": "Anime Canon",
    "Airdate": "2011-05-15T07:00:00.000Z"
  },
  {
    "#": 499,
    "Title": "The Battle Against the Big Tiger! Who Is Going to Be Captain?!",
    "Type": "Anime Canon",
    "Airdate": "2011-05-22T07:00:00.000Z"
  },
  {
    "#": 500,
    "Title": "Freedom Taken Away! The Nobles' Plot Closing in on the Brothers!",
    "Type": "Manga Canon",
    "Airdate": "2011-05-29T07:00:00.000Z"
  },
  {
    "#": 501,
    "Title": "The Fire Has Been Set! The Gray Terminal in Crisis!",
    "Type": "Manga Canon",
    "Airdate": "2011-06-05T07:00:00.000Z"
  },
  {
    "#": 502,
    "Title": "Where Can Freedom Be Found? A Sad Departure of a Boy!",
    "Type": "Manga Canon",
    "Airdate": "2011-06-12T07:00:00.000Z"
  },
  {
    "#": 503,
    "Title": "Take Good Care of Him! A Letter From the Brother!",
    "Type": "Manga Canon",
    "Airdate": "2011-06-19T07:00:00.000Z"
  },
  {
    "#": 504,
    "Title": "To Live up to the Promise! Departures of Their Own!",
    "Type": "Manga Canon",
    "Airdate": "2011-06-26T07:00:00.000Z"
  },
  {
    "#": 505,
    "Title": "I Want to See Them! Luffy's Mournful Cry!",
    "Type": "Manga Canon",
    "Airdate": "2011-07-03T07:00:00.000Z"
  },
  {
    "#": 506,
    "Title": "Straw Hats in Shock! The Bad News Has Reached Them!",
    "Type": "Anime Canon",
    "Airdate": "2011-07-10T07:00:00.000Z"
  },
  {
    "#": 507,
    "Title": "Reunited With Dark King Rayleigh! Decision Time for Luffy!",
    "Type": "Manga Canon",
    "Airdate": "2011-07-17T07:00:00.000Z"
  },
  {
    "#": 508,
    "Title": "Back to Our Captain! A Jail Break at the Sky Island and the Incident on the Winter Island!",
    "Type": "Manga Canon",
    "Airdate": "2011-07-31T07:00:00.000Z"
  },
  {
    "#": 509,
    "Title": "Encounter! The Great Swordsman Mihawk! Zoro's Self-Willed Deadly Struggle!",
    "Type": "Manga Canon",
    "Airdate": "2011-08-07T07:00:00.000Z"
  },
  {
    "#": 510,
    "Title": "A Disaster for Sanji! The Queen's Return to the Kingdom!",
    "Type": "Manga Canon",
    "Airdate": "2011-08-14T07:00:00.000Z"
  },
  {
    "#": 511,
    "Title": "Unexpected Relanding! Luffy, to Marineford!",
    "Type": "Manga Canon",
    "Airdate": "2011-08-21T07:00:00.000Z"
  },
  {
    "#": 512,
    "Title": "With Hopes It Will Reach My Friends! Big News Spreading Fast!",
    "Type": "Manga Canon",
    "Airdate": "2011-08-28T07:00:00.000Z"
  },
  {
    "#": 513,
    "Title": "Pirates Get On the Move! Astounding New World!",
    "Type": "Manga Canon",
    "Airdate": "2011-09-04T07:00:00.000Z"
  },
  {
    "#": 514,
    "Title": "Living Through Hell! Sanji's Fight for His Manhood!",
    "Type": "Manga Canon",
    "Airdate": "2011-09-11T07:00:00.000Z"
  },
  {
    "#": 515,
    "Title": "I Will Get Much, Much Stronger! Zoro's Pledge to His Captain!",
    "Type": "Manga Canon",
    "Airdate": "2011-09-18T07:00:00.000Z"
  },
  {
    "#": 516,
    "Title": "Luffy's Training Begins! To the Place We Promised in 2 Years!",
    "Type": "Manga Canon",
    "Airdate": "2011-09-25T07:00:00.000Z"
  },
  {
    "#": 517,
    "Title": "The Beginning of the New Chapter! The Straw Hats Reunited!",
    "Type": "Manga Canon",
    "Airdate": "2011-10-02T07:00:00.000Z"
  },
  {
    "#": 518,
    "Title": "An Explosive Situation! Luffy vs. Fake Luffy!",
    "Type": "Manga Canon",
    "Airdate": "2011-10-09T07:00:00.000Z"
  },
  {
    "#": 519,
    "Title": "The Navy Has Set Out! The Straw Hats in Danger!",
    "Type": "Manga Canon",
    "Airdate": "2011-10-16T07:00:00.000Z"
  },
  {
    "#": 520,
    "Title": "Big Guns Assembled! The Danger of the Fake Straw Hats!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2011-10-23T07:00:00.000Z"
  },
  {
    "#": 521,
    "Title": "The Battle Is On! Show Them What You Got From Training!",
    "Type": "Manga Canon",
    "Airdate": "2011-10-30T07:00:00.000Z"
  },
  {
    "#": 522,
    "Title": "Everyone Together! Luffy, Setting Out for the New World!",
    "Type": "Manga Canon",
    "Airdate": "2011-11-06T07:00:00.000Z"
  },
  {
    "#": 523,
    "Title": "A Surprising Fact! The Man Who Guarded the Sunny!",
    "Type": "Manga Canon",
    "Airdate": "2011-11-13T08:00:00.000Z"
  },
  {
    "#": 524,
    "Title": "Deadly Combat Under the Sea! The Demon of the Ocean Strikes!",
    "Type": "Manga Canon",
    "Airdate": "2011-11-20T08:00:00.000Z"
  },
  {
    "#": 525,
    "Title": "Lost in the Deep Sea! The Straw Hats Get Separated!",
    "Type": "Manga Canon",
    "Airdate": "2011-11-27T08:00:00.000Z"
  },
  {
    "#": 526,
    "Title": "Undersea Volcanic Eruption! Drifting to the Fish-Man Island!",
    "Type": "Manga Canon",
    "Airdate": "2011-12-04T08:00:00.000Z"
  },
  {
    "#": 527,
    "Title": "Landing at the Fish-Man Island! Beautiful Mermaids!",
    "Type": "Manga Canon",
    "Airdate": "2011-12-11T08:00:00.000Z"
  },
  {
    "#": 528,
    "Title": "Excitement Blow-Out! Sanji's Life Under Threat!",
    "Type": "Manga Canon",
    "Airdate": "2011-12-18T08:00:00.000Z"
  },
  {
    "#": 529,
    "Title": "The Fish-Man Island Will Be Annihilated?! Sharley's Prophecy!",
    "Type": "Manga Canon",
    "Airdate": "2011-12-25T08:00:00.000Z"
  },
  {
    "#": 530,
    "Title": "The King of the Fish-Man Island! Neptune, the God of the Sea!",
    "Type": "Manga Canon",
    "Airdate": "2012-01-08T08:00:00.000Z"
  },
  {
    "#": 531,
    "Title": "Ryugu Palace! Taken by the Shark That They Saved!",
    "Type": "Manga Canon",
    "Airdate": "2012-01-15T08:00:00.000Z"
  },
  {
    "#": 532,
    "Title": "A Coward and a Crybaby! The Princess in the Hard Shell Tower!",
    "Type": "Manga Canon",
    "Airdate": "2012-01-22T08:00:00.000Z"
  },
  {
    "#": 533,
    "Title": "It's an Emergency! The Ryugu Palace Is Occupied!",
    "Type": "Manga Canon",
    "Airdate": "2012-01-29T08:00:00.000Z"
  },
  {
    "#": 534,
    "Title": "The Ryugu Palace in Shock! The Kidnapping of Shirahoshi!",
    "Type": "Manga Canon",
    "Airdate": "2012-02-05T08:00:00.000Z"
  },
  {
    "#": 535,
    "Title": "Hordy's Onslaught! The Retaliatory Plan Set Into Motion!",
    "Type": "Manga Canon",
    "Airdate": "2012-02-12T08:00:00.000Z"
  },
  {
    "#": 536,
    "Title": "The Battle in the Ryugu Palace! Zoro vs. Hordy!",
    "Type": "Manga Canon",
    "Airdate": "2012-02-19T08:00:00.000Z"
  },
  {
    "#": 537,
    "Title": "Keep Shirahoshi Safe! Decken Close Behind!",
    "Type": "Manga Canon",
    "Airdate": "2012-02-26T08:00:00.000Z"
  },
  {
    "#": 538,
    "Title": "The Straw Hats Defeated?! Hordy Gains Control of the Ryugu Palace!",
    "Type": "Manga Canon",
    "Airdate": "2012-03-04T08:00:00.000Z"
  },
  {
    "#": 539,
    "Title": "The Haunting Ties! Nami and the Fish-Man Pirates!",
    "Type": "Manga Canon",
    "Airdate": "2012-03-18T07:00:00.000Z"
  },
  {
    "#": 540,
    "Title": "A Hero Who Freed the Slaves! An Adventurer Tiger!",
    "Type": "Manga Canon",
    "Airdate": "2012-03-25T07:00:00.000Z"
  },
  {
    "#": 541,
    "Title": "Kizaru Appears! A Trap to Catch Tiger!",
    "Type": "Manga Canon",
    "Airdate": "2012-04-01T07:00:00.000Z"
  },
  {
    "#": 542,
    "Title": "A Team Is Formed! Save Chopper",
    "Type": "Filler",
    "Airdate": "2012-04-08T07:00:00.000Z"
  },
  {
    "#": 543,
    "Title": "The Death of the Hero! A Shocking Truth of Tiger!",
    "Type": "Manga Canon",
    "Airdate": "2012-04-15T07:00:00.000Z"
  },
  {
    "#": 544,
    "Title": "The Sun Pirates Split! Jimbei vs. Arlong!",
    "Type": "Manga Canon",
    "Airdate": "2012-04-22T07:00:00.000Z"
  },
  {
    "#": 545,
    "Title": "Shaking Fish-Man Island! A Celestial Dragon Drifts In!",
    "Type": "Manga Canon",
    "Airdate": "2012-04-29T07:00:00.000Z"
  },
  {
    "#": 546,
    "Title": "A Sudden Tragedy! A Gunshot Shuts Down the Future!",
    "Type": "Manga Canon",
    "Airdate": "2012-05-06T07:00:00.000Z"
  },
  {
    "#": 547,
    "Title": "Back to the Present! Hordy Makes a Move!",
    "Type": "Manga Canon",
    "Airdate": "2012-05-13T07:00:00.000Z"
  },
  {
    "#": 548,
    "Title": "The Kingdom in Shock! An Order to Execute Neptune Issued!",
    "Type": "Manga Canon",
    "Airdate": "2012-05-20T07:00:00.000Z"
  },
  {
    "#": 549,
    "Title": "A Rift Opens Up! Luffy vs. Jimbei!",
    "Type": "Manga Canon",
    "Airdate": "2012-05-27T07:00:00.000Z"
  },
  {
    "#": 550,
    "Title": "Something Has Happened to Hordy! The True Power of the Evil Drug!",
    "Type": "Manga Canon",
    "Airdate": "2012-06-03T07:00:00.000Z"
  },
  {
    "#": 551,
    "Title": "The Battle Is On! At Conchcorde Plaza!",
    "Type": "Manga Canon",
    "Airdate": "2012-06-10T07:00:00.000Z"
  },
  {
    "#": 552,
    "Title": "Surprising Confession! The Truth Behind the Assassination of Otohime!",
    "Type": "Manga Canon",
    "Airdate": "2012-06-17T07:00:00.000Z"
  },
  {
    "#": 553,
    "Title": "Shirahoshi's Tears! Luffy Finally Shows Up!",
    "Type": "Manga Canon",
    "Airdate": "2012-06-24T07:00:00.000Z"
  },
  {
    "#": 554,
    "Title": "A Great Clash! The Straw Hat Crew vs. 100,000 Enemies",
    "Type": "Manga Canon",
    "Airdate": "2012-07-01T07:00:00.000Z"
  },
  {
    "#": 555,
    "Title": "Deadly Attacks One After Another! Zoro and Sanji Join the Battle!",
    "Type": "Manga Canon",
    "Airdate": "2012-07-08T07:00:00.000Z"
  },
  {
    "#": 556,
    "Title": "Unveiled! The Secret Weapons of the Sunny!",
    "Type": "Manga Canon",
    "Airdate": "2012-07-15T07:00:00.000Z"
  },
  {
    "#": 557,
    "Title": "Iron Pirate! Here Comes General Franky!",
    "Type": "Manga Canon",
    "Airdate": "2012-07-29T07:00:00.000Z"
  },
  {
    "#": 558,
    "Title": "The Noah Closing In! The Fish-Man Island Facing Destruction!",
    "Type": "Manga Canon",
    "Airdate": "2012-08-05T07:00:00.000Z"
  },
  {
    "#": 559,
    "Title": "Hurry Up, Luffy! Shirahoshi's Life in Jeopardy!",
    "Type": "Manga Canon",
    "Airdate": "2012-08-12T07:00:00.000Z"
  },
  {
    "#": 560,
    "Title": "The Fierce Fight Begins! Luffy vs. Hordy!",
    "Type": "Manga Canon",
    "Airdate": "2012-08-19T07:00:00.000Z"
  },
  {
    "#": 561,
    "Title": "A Massive Confused Fight! The Straw Hats vs. the New Fish-Man Pirates!",
    "Type": "Manga Canon",
    "Airdate": "2012-08-26T07:00:00.000Z"
  },
  {
    "#": 562,
    "Title": "Luffy Loses the Fight?! Hordy's Long Awaited Revenge!",
    "Type": "Manga Canon",
    "Airdate": "2012-09-02T07:00:00.000Z"
  },
  {
    "#": 563,
    "Title": "A Shocking Fact! The True Identity of Hordy!",
    "Type": "Manga Canon",
    "Airdate": "2012-09-09T07:00:00.000Z"
  },
  {
    "#": 564,
    "Title": "Back to Zero! Earnest Wishes for Luffy!",
    "Type": "Manga Canon",
    "Airdate": "2012-09-16T07:00:00.000Z"
  },
  {
    "#": 565,
    "Title": "Luffy's All-Out Attack! Red Hawk Blasts!",
    "Type": "Manga Canon",
    "Airdate": "2012-09-23T07:00:00.000Z"
  },
  {
    "#": 566,
    "Title": "Coming to an End! The Final Decisive Battle Against Hordy!",
    "Type": "Manga Canon",
    "Airdate": "2012-09-30T07:00:00.000Z"
  },
  {
    "#": 567,
    "Title": "Stop, Noah! Desperate Elephant Gatling!",
    "Type": "Manga Canon",
    "Airdate": "2012-10-07T07:00:00.000Z"
  },
  {
    "#": 568,
    "Title": "To the Future! The Path to the Sun!",
    "Type": "Manga Canon",
    "Airdate": "2012-10-14T07:00:00.000Z"
  },
  {
    "#": 569,
    "Title": "The Secret Revealed! The Truth About the Ancient Weapon!",
    "Type": "Manga Canon",
    "Airdate": "2012-10-21T07:00:00.000Z"
  },
  {
    "#": 570,
    "Title": "The Straw Hats Stunned! The New Fleet Admiral of the Navy!",
    "Type": "Manga Canon",
    "Airdate": "2012-10-28T07:00:00.000Z"
  },
  {
    "#": 571,
    "Title": "She Loves Sweets! Big Mom of the Four Emperors!",
    "Type": "Manga Canon",
    "Airdate": "2012-11-04T07:00:00.000Z"
  },
  {
    "#": 572,
    "Title": "Many Problems Lie Ahead! A Trap Awaiting in the New World!",
    "Type": "Manga Canon",
    "Airdate": "2012-11-11T08:00:00.000Z"
  },
  {
    "#": 573,
    "Title": "Finally Time to Go! Goodbye, Fish-Man Island!",
    "Type": "Manga Canon",
    "Airdate": "2012-11-18T08:00:00.000Z"
  },
  {
    "#": 574,
    "Title": "To the New World! Heading for the Ultimate Sea!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2012-11-25T08:00:00.000Z"
  },
  {
    "#": 575,
    "Title": "Z's Ambition! Lily the Little Giant!",
    "Type": "Filler",
    "Airdate": "2012-12-02T08:00:00.000Z"
  },
  {
    "#": 576,
    "Title": "Z's Ambition! A Dark and Powerful Army!",
    "Type": "Filler",
    "Airdate": "2012-12-09T08:00:00.000Z"
  },
  {
    "#": 577,
    "Title": "Z's Ambition! A Great and Desperate Escape Plan!",
    "Type": "Filler",
    "Airdate": "2012-12-16T08:00:00.000Z"
  },
  {
    "#": 578,
    "Title": "Z's Ambition! Luffy vs. Shuzo!",
    "Type": "Filler",
    "Airdate": "2012-12-23T08:00:00.000Z"
  },
  {
    "#": 579,
    "Title": "Arriving! A Burning Island - Punk Hazard!",
    "Type": "Manga Canon",
    "Airdate": "2013-01-06T08:00:00.000Z"
  },
  {
    "#": 580,
    "Title": "A Battle in the Heat! Luffy vs. the Giant Dragon!",
    "Type": "Manga Canon",
    "Airdate": "2013-01-13T08:00:00.000Z"
  },
  {
    "#": 581,
    "Title": "The Straw Hats Stunned! Enter: A Samurai's Horrifying Severed Head!",
    "Type": "Manga Canon",
    "Airdate": "2013-01-20T08:00:00.000Z"
  },
  {
    "#": 582,
    "Title": "Startling! The Secret of the Island Is Finally Revealed!",
    "Type": "Manga Canon",
    "Airdate": "2013-01-27T08:00:00.000Z"
  },
  {
    "#": 583,
    "Title": "Save the Children! The Straw Hats Start to Fight!",
    "Type": "Manga Canon",
    "Airdate": "2013-02-03T08:00:00.000Z"
  },
  {
    "#": 584,
    "Title": "A Swordplay Showdown! Brook vs. the Mysterious Torso Samurai!",
    "Type": "Manga Canon",
    "Airdate": "2013-02-10T08:00:00.000Z"
  },
  {
    "#": 585,
    "Title": "The Warlord! Trafalgar Law!",
    "Type": "Manga Canon",
    "Airdate": "2013-02-17T08:00:00.000Z"
  },
  {
    "#": 586,
    "Title": "In a Real Pinch! Luffy Sinks Into the Ice-Cold Lake!",
    "Type": "Manga Canon",
    "Airdate": "2013-03-03T08:00:00.000Z"
  },
  {
    "#": 587,
    "Title": "A Collision! Law vs. Vice Admiral Smoker!",
    "Type": "Manga Canon",
    "Airdate": "2013-03-17T07:00:00.000Z"
  },
  {
    "#": 588,
    "Title": "Meeting Again After Two Years! Luffy and Law!",
    "Type": "Manga Canon",
    "Airdate": "2013-03-24T07:00:00.000Z"
  },
  {
    "#": 589,
    "Title": "The Worst in the World! A Scientist of Terror - Caesar!",
    "Type": "Manga Canon",
    "Airdate": "2013-03-31T07:00:00.000Z"
  },
  {
    "#": 590,
    "Title": "History's Strongest Collaboration vs. Glutton of the Sea",
    "Type": "Filler",
    "Airdate": "2013-04-07T07:00:00.000Z"
  },
  {
    "#": 591,
    "Title": "Chopper's Fury! The Master's Inhumane Experiment!",
    "Type": "Manga Canon",
    "Airdate": "2013-04-14T07:00:00.000Z"
  },
  {
    "#": 592,
    "Title": "To Annihilate the Straw Hats! Legendary Assassins Descend!",
    "Type": "Manga Canon",
    "Airdate": "2013-04-21T07:00:00.000Z"
  },
  {
    "#": 593,
    "Title": "Save Nami! Luffy's Fight on the Snow-Capped Mountains!",
    "Type": "Manga Canon",
    "Airdate": "2013-04-28T07:00:00.000Z"
  },
  {
    "#": 594,
    "Title": "Formed! Luffy and Law's Pirate Alliance!",
    "Type": "Manga Canon",
    "Airdate": "2013-05-05T07:00:00.000Z"
  },
  {
    "#": 595,
    "Title": "Capture M! The Pirate Alliance's Operation Launches!",
    "Type": "Manga Canon",
    "Airdate": "2013-05-12T07:00:00.000Z"
  },
  {
    "#": 596,
    "Title": "On the Verge of Annihilation! A Deadly Monster Comes Flying In!",
    "Type": "Manga Canon",
    "Airdate": "2013-05-19T07:00:00.000Z"
  },
  {
    "#": 597,
    "Title": "An Intense Battle! Caesar Exercises His True Power!",
    "Type": "Manga Canon",
    "Airdate": "2013-05-26T07:00:00.000Z"
  },
  {
    "#": 598,
    "Title": "A Samurai Who Can Cut Fire! Foxfire Kin'emon!",
    "Type": "Manga Canon",
    "Airdate": "2013-06-02T07:00:00.000Z"
  },
  {
    "#": 599,
    "Title": "Shocking! The True Identity of the Mystery Man Vergo!",
    "Type": "Manga Canon",
    "Airdate": "2013-06-09T07:00:00.000Z"
  },
  {
    "#": 600,
    "Title": "Save the Children! The Master's Evil Hands Close In!",
    "Type": "Manga Canon",
    "Airdate": "2013-06-16T07:00:00.000Z"
  },
  {
    "#": 601,
    "Title": "Shaking up the New World! Caesar's Horrendous Experiment!",
    "Type": "Manga Canon",
    "Airdate": "2013-06-23T07:00:00.000Z"
  },
  {
    "#": 602,
    "Title": "The Deadliest Weapon of Mass Destruction in History! Shinokuni!",
    "Type": "Manga Canon",
    "Airdate": "2013-06-30T07:00:00.000Z"
  },
  {
    "#": 603,
    "Title": "Launching the Counter Attack! Luffy and Law's Great Escape!",
    "Type": "Manga Canon",
    "Airdate": "2013-07-07T07:00:00.000Z"
  },
  {
    "#": 604,
    "Title": "Get to Building R! The Pirate Alliance's Great Advance!",
    "Type": "Manga Canon",
    "Airdate": "2013-07-14T07:00:00.000Z"
  },
  {
    "#": 605,
    "Title": "Tashigi's Tears! G-5's Desperate Breakthrough Plan!",
    "Type": "Manga Canon",
    "Airdate": "2013-07-21T07:00:00.000Z"
  },
  {
    "#": 606,
    "Title": "The Treacherous Vice Admiral! Demon Bamboo Vergo!",
    "Type": "Manga Canon",
    "Airdate": "2013-07-28T07:00:00.000Z"
  },
  {
    "#": 607,
    "Title": "A Fierce Battle Gets Heated! Luffy vs. Caesar!",
    "Type": "Manga Canon",
    "Airdate": "2013-08-11T07:00:00.000Z"
  },
  {
    "#": 608,
    "Title": "A Mastermind Underground! Doflamingo Makes His Move!",
    "Type": "Manga Canon",
    "Airdate": "2013-08-18T07:00:00.000Z"
  },
  {
    "#": 609,
    "Title": "Luffy Dies From Exposure?! The Spine-Chilling Snow Woman Monet!",
    "Type": "Manga Canon",
    "Airdate": "2013-08-25T07:00:00.000Z"
  },
  {
    "#": 610,
    "Title": "Fists Collide! A Battle of the Two Vice Admirals!",
    "Type": "Manga Canon",
    "Airdate": "2013-09-01T07:00:00.000Z"
  },
  {
    "#": 611,
    "Title": "A Small Dragon! Momonosuke Appears!",
    "Type": "Manga Canon",
    "Airdate": "2013-09-08T07:00:00.000Z"
  },
  {
    "#": 612,
    "Title": "A Deadly Fight in a Blizzard! The Straw Hats vs. the Snow Woman!",
    "Type": "Manga Canon",
    "Airdate": "2013-09-15T07:00:00.000Z"
  },
  {
    "#": 613,
    "Title": "Showing Off His Techniques! Zoro's Formidable One-Sword Style!",
    "Type": "Manga Canon",
    "Airdate": "2013-09-22T07:00:00.000Z"
  },
  {
    "#": 614,
    "Title": "To Save Her Friends! Mocha Runs at the Risk of Her Life!",
    "Type": "Manga Canon",
    "Airdate": "2013-09-29T07:00:00.000Z"
  },
  {
    "#": 615,
    "Title": "Brownbeard in Grief! Luffy Lands a Furious Blow!",
    "Type": "Manga Canon",
    "Airdate": "2013-10-06T07:00:00.000Z"
  },
  {
    "#": 616,
    "Title": "A Surprising Outcome! Smoker vs. Vergo!",
    "Type": "Manga Canon",
    "Airdate": "2013-10-13T07:00:00.000Z"
  },
  {
    "#": 617,
    "Title": "Caesar's Defeat! The Powerful Grizzly Magnum!",
    "Type": "Manga Canon",
    "Airdate": "2013-10-20T07:00:00.000Z"
  },
  {
    "#": 618,
    "Title": "Raid! An Assassin From Dressrosa!",
    "Type": "Manga Canon",
    "Airdate": "2013-10-27T07:00:00.000Z"
  },
  {
    "#": 619,
    "Title": "Running Wild! Invincible General Franky!",
    "Type": "Manga Canon",
    "Airdate": "2013-11-03T07:00:00.000Z"
  },
  {
    "#": 620,
    "Title": "A Critical Situation! Punk Hazard Explodes!",
    "Type": "Manga Canon",
    "Airdate": "2013-11-10T08:00:00.000Z"
  },
  {
    "#": 621,
    "Title": "Capture Caesar! General Cannon Blasts!",
    "Type": "Manga Canon",
    "Airdate": "2013-11-17T08:00:00.000Z"
  },
  {
    "#": 622,
    "Title": "A Touching Reunion! Momonosuke and Kin'emon!",
    "Type": "Manga Canon",
    "Airdate": "2013-11-24T08:00:00.000Z"
  },
  {
    "#": 623,
    "Title": "It's Time to Say Goodbye! Leaving Punk Hazard!",
    "Type": "Manga Canon",
    "Airdate": "2013-12-01T08:00:00.000Z"
  },
  {
    "#": 624,
    "Title": "The G-5 Wiped Out! Doflamingo's Sudden Attack!",
    "Type": "Manga Canon",
    "Airdate": "2013-12-08T08:00:00.000Z"
  },
  {
    "#": 625,
    "Title": "Intense! Aokiji vs. Doflamingo!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2013-12-15T08:00:00.000Z"
  },
  {
    "#": 626,
    "Title": "Caesar Goes Missing! The Pirate Alliance Makes a Sortie!",
    "Type": "Filler",
    "Airdate": "2013-12-22T08:00:00.000Z"
  },
  {
    "#": 627,
    "Title": "Luffy Dies at Sea!? The Pirate Alliance Comes Apart!",
    "Type": "Filler",
    "Airdate": "2014-01-05T08:00:00.000Z"
  },
  {
    "#": 628,
    "Title": "A Major Turnaround! Luffy's Angry Iron Fist Strikes!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2014-01-12T08:00:00.000Z"
  },
  {
    "#": 629,
    "Title": "Startling! The Big News Shakes up the New World!",
    "Type": "Manga Canon",
    "Airdate": "2014-01-19T08:00:00.000Z"
  },
  {
    "#": 630,
    "Title": "Explore! A Kingdom of Love and Passion Dressrosa!",
    "Type": "Manga Canon",
    "Airdate": "2014-01-26T08:00:00.000Z"
  },
  {
    "#": 631,
    "Title": "Full of Enthusiasm! The Corrida Colosseum",
    "Type": "Manga Canon",
    "Airdate": "2014-02-02T08:00:00.000Z"
  },
  {
    "#": 632,
    "Title": "A Dangerous Love! The Dancer Girl - Violet!",
    "Type": "Manga Canon",
    "Airdate": "2014-02-09T08:00:00.000Z"
  },
  {
    "#": 633,
    "Title": "A Formidable, Unknown Warrior! Here Comes Lucy!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2014-02-16T08:00:00.000Z"
  },
  {
    "#": 634,
    "Title": "A Pirate Noble! Cavendish!",
    "Type": "Manga Canon",
    "Airdate": "2014-02-23T08:00:00.000Z"
  },
  {
    "#": 635,
    "Title": "The Fateful Reunion! Bellamy the Hyena!",
    "Type": "Manga Canon",
    "Airdate": "2014-03-02T08:00:00.000Z"
  },
  {
    "#": 636,
    "Title": "A Super Rookie! Bartolomeo the Cannibal!",
    "Type": "Manga Canon",
    "Airdate": "2014-03-16T07:00:00.000Z"
  },
  {
    "#": 637,
    "Title": "Big Names Duke It Out! The Heated Block B Battle!",
    "Type": "Manga Canon",
    "Airdate": "2014-03-23T07:00:00.000Z"
  },
  {
    "#": 638,
    "Title": "A Deadly Blow! The Astonishing King Punch!",
    "Type": "Manga Canon",
    "Airdate": "2014-03-30T07:00:00.000Z"
  },
  {
    "#": 639,
    "Title": "The Fighting Fish Strike! Across the Deadly Iron Bridge!",
    "Type": "Manga Canon",
    "Airdate": "2014-04-06T07:00:00.000Z"
  },
  {
    "#": 640,
    "Title": "Explore! Fairies' Island - Green Bit!",
    "Type": "Manga Canon",
    "Airdate": "2014-04-13T07:00:00.000Z"
  },
  {
    "#": 641,
    "Title": "The Unknown World! The Tontatta Kingdom!",
    "Type": "Manga Canon",
    "Airdate": "2014-04-20T07:00:00.000Z"
  },
  {
    "#": 642,
    "Title": "The Stratagem of the Century! Doflamingo Makes His Move!",
    "Type": "Manga Canon",
    "Airdate": "2014-04-27T07:00:00.000Z"
  },
  {
    "#": 643,
    "Title": "Shaking Heaven and Earth! Admiral Fujitora's Power!",
    "Type": "Manga Canon",
    "Airdate": "2014-05-04T07:00:00.000Z"
  },
  {
    "#": 644,
    "Title": "A Blow of Anger! A Giant vs. Lucy!",
    "Type": "Manga Canon",
    "Airdate": "2014-05-11T07:00:00.000Z"
  },
  {
    "#": 645,
    "Title": "Destruction Cannon Blasts! Lucy in Trouble!",
    "Type": "Manga Canon",
    "Airdate": "2014-05-18T07:00:00.000Z"
  },
  {
    "#": 646,
    "Title": "The Legendary Pirate! Don Chinjao!",
    "Type": "Manga Canon",
    "Airdate": "2014-05-25T07:00:00.000Z"
  },
  {
    "#": 647,
    "Title": "Light and Shadow! Darkness Behind Dressrosa!",
    "Type": "Manga Canon",
    "Airdate": "2014-06-01T07:00:00.000Z"
  },
  {
    "#": 648,
    "Title": "Making a Sortie! The Legendary Hero Usoland!",
    "Type": "Manga Canon",
    "Airdate": "2014-06-08T07:00:00.000Z"
  },
  {
    "#": 649,
    "Title": "The Fierce Battle Coming to the End! Lucy vs. Chinjao!",
    "Type": "Manga Canon",
    "Airdate": "2014-06-15T07:00:00.000Z"
  },
  {
    "#": 650,
    "Title": "Luffy and the Gladiator of Fate - Rebecca!",
    "Type": "Manga Canon",
    "Airdate": "2014-06-22T07:00:00.000Z"
  },
  {
    "#": 651,
    "Title": "Protect You to the End! Rebecca and the Toy Soldier!",
    "Type": "Manga Canon",
    "Airdate": "2014-06-29T07:00:00.000Z"
  },
  {
    "#": 652,
    "Title": "The Last - and Bloodiest - Block! Block D Battle Begins!",
    "Type": "Manga Canon",
    "Airdate": "2014-07-06T07:00:00.000Z"
  },
  {
    "#": 653,
    "Title": "A Decisive Battle! Giolla vs. the Straw Hats!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2014-07-13T07:00:00.000Z"
  },
  {
    "#": 654,
    "Title": "Beautiful Sword! Cavendish of the White Horse!",
    "Type": "Manga Canon",
    "Airdate": "2014-07-20T07:00:00.000Z"
  },
  {
    "#": 655,
    "Title": "A Big Clash! Sanji vs. Doflamingo",
    "Type": "Manga Canon",
    "Airdate": "2014-08-02T07:00:00.000Z"
  },
  {
    "#": 656,
    "Title": "Rebecca's Special Attack! Last-Ditch Sword Dance!",
    "Type": "Manga Canon",
    "Airdate": "2014-08-10T07:00:00.000Z"
  },
  {
    "#": 657,
    "Title": "The Most Violent Fighter! Logan vs. Rebecca!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2014-08-17T07:00:00.000Z"
  },
  {
    "#": 658,
    "Title": "A Big Surprise! The True Identity of the Toy Soldier!",
    "Type": "Manga Canon",
    "Airdate": "2014-08-24T07:00:00.000Z"
  },
  {
    "#": 659,
    "Title": "A Horrible Past! The Secret of Dressrosa",
    "Type": "Manga Canon",
    "Airdate": "2014-08-31T07:00:00.000Z"
  },
  {
    "#": 660,
    "Title": "A Nightmare! The Tragic Night of Dressrosa!",
    "Type": "Manga Canon",
    "Airdate": "2014-09-07T07:00:00.000Z"
  },
  {
    "#": 661,
    "Title": "A Showdown Between the Warlords! Law vs. Doflamingo!",
    "Type": "Manga Canon",
    "Airdate": "2014-09-14T07:00:00.000Z"
  },
  {
    "#": 662,
    "Title": "Two Great Rivals Meet Each Other! Straw Hat and Heavenly Demon!",
    "Type": "Manga Canon",
    "Airdate": "2014-09-21T07:00:00.000Z"
  },
  {
    "#": 663,
    "Title": "Luffy Astonished! The Man Who Inherits Ace’s Will!",
    "Type": "Manga Canon",
    "Airdate": "2014-09-28T07:00:00.000Z"
  },
  {
    "#": 664,
    "Title": "Operation SOP Starts! Usoland Charges Forth!",
    "Type": "Manga Canon",
    "Airdate": "2014-10-05T07:00:00.000Z"
  },
  {
    "#": 665,
    "Title": "A Burning Passion! Rebecca vs. Suleiman!",
    "Type": "Manga Canon",
    "Airdate": "2014-10-12T07:00:00.000Z"
  },
  {
    "#": 666,
    "Title": "The End of the Match?! A Surprising Result of Block D!",
    "Type": "Manga Canon",
    "Airdate": "2014-10-19T07:00:00.000Z"
  },
  {
    "#": 667,
    "Title": "The Admiral's Decision! Fujitora vs. Doflamingo!",
    "Type": "Manga Canon",
    "Airdate": "2014-10-26T07:00:00.000Z"
  },
  {
    "#": 668,
    "Title": "The Final Round Starts! Diamante the Hero Shows Up!",
    "Type": "Manga Canon",
    "Airdate": "2014-11-02T07:00:00.000Z"
  },
  {
    "#": 669,
    "Title": "A Moving Castle! The Top Executive Pica Rises Up!",
    "Type": "Manga Canon",
    "Airdate": "2014-11-08T08:00:00.000Z"
  },
  {
    "#": 670,
    "Title": "Dragon Claw Strikes! Lucy's Intimidating Attack!",
    "Type": "Manga Canon",
    "Airdate": "2014-11-16T08:00:00.000Z"
  },
  {
    "#": 671,
    "Title": "Defeat Sugar! The Army of the Little People Charges!",
    "Type": "Manga Canon",
    "Airdate": "2014-11-23T08:00:00.000Z"
  },
  {
    "#": 672,
    "Title": "The Last Light of Hope! The Secret of Our Commander!",
    "Type": "Manga Canon",
    "Airdate": "2014-11-30T08:00:00.000Z"
  },
  {
    "#": 673,
    "Title": "The Rupture Human! Gladius Blows up Big Time!",
    "Type": "Manga Canon",
    "Airdate": "2014-12-07T08:00:00.000Z"
  },
  {
    "#": 674,
    "Title": "A Liar! Usoland on the Run!",
    "Type": "Manga Canon",
    "Airdate": "2014-12-14T08:00:00.000Z"
  },
  {
    "#": 675,
    "Title": "A Fateful Encounter! Kyros and King Riku!",
    "Type": "Manga Canon",
    "Airdate": "2014-12-21T08:00:00.000Z"
  },
  {
    "#": 676,
    "Title": "Operation Failed! Usoland the Hero Dies!?",
    "Type": "Manga Canon",
    "Airdate": "2014-12-28T08:00:00.000Z"
  },
  {
    "#": 677,
    "Title": "The Legend Is Back! Kyros' All-Out Attack!",
    "Type": "Manga Canon",
    "Airdate": "2015-01-11T08:00:00.000Z"
  },
  {
    "#": 678,
    "Title": "The Fire Fist Strikes! The Flare-Flare Fruit Power Returns!",
    "Type": "Manga Canon",
    "Airdate": "2015-01-18T08:00:00.000Z"
  },
  {
    "#": 679,
    "Title": "Dashing Onto the Scene! The Chief of Staff of the Revolutionary Army, Sabo!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2015-01-25T08:00:00.000Z"
  },
  {
    "#": 680,
    "Title": "The Devil's Trap! A Dressrosa Extermination Plan!",
    "Type": "Manga Canon",
    "Airdate": "2015-02-01T08:00:00.000Z"
  },
  {
    "#": 681,
    "Title": "The 500 Million Berry Man! Target: Usoland!",
    "Type": "Manga Canon",
    "Airdate": "2015-02-07T08:00:00.000Z"
  },
  {
    "#": 682,
    "Title": "Breaking Through Enemy Lines! Luffy and Zoro Launch the Counter-Attack!",
    "Type": "Manga Canon",
    "Airdate": "2015-02-14T08:00:00.000Z"
  },
  {
    "#": 683,
    "Title": "With a Rumbling of the Ground! The God of Destruction - Giant Pica Descends!",
    "Type": "Manga Canon",
    "Airdate": "2015-02-21T08:00:00.000Z"
  },
  {
    "#": 684,
    "Title": "Gathering Into a Powerful Front! Luffy and a Group of Brutal Warriors!",
    "Type": "Manga Canon",
    "Airdate": "2015-02-28T08:00:00.000Z"
  },
  {
    "#": 685,
    "Title": "Steady Progress! Luffy's Army vs. Pica!",
    "Type": "Manga Canon",
    "Airdate": "2015-03-07T08:00:00.000Z"
  },
  {
    "#": 686,
    "Title": "A Shocking Confession! Law’s Soulful Vow!",
    "Type": "Manga Canon",
    "Airdate": "2015-03-14T07:00:00.000Z"
  },
  {
    "#": 687,
    "Title": "A Big Collision! Chief of Staff - Sabo vs. Admiral Fujitora!",
    "Type": "Manga Canon",
    "Airdate": "2015-03-21T07:00:00.000Z"
  },
  {
    "#": 688,
    "Title": "A Desperate Situation! Luffy Gets Caught in a Trap!",
    "Type": "Manga Canon",
    "Airdate": "2015-03-28T07:00:00.000Z"
  },
  {
    "#": 689,
    "Title": "A Great Escape! Luffy's Tide-Turning Elephant Gun!",
    "Type": "Manga Canon",
    "Airdate": "2015-04-04T07:00:00.000Z"
  },
  {
    "#": 690,
    "Title": "A United Front! Luffy's Breakthrough to the Victory!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2015-04-11T07:00:00.000Z"
  },
  {
    "#": 691,
    "Title": "The Second Samurai! Evening Shower Kanjuro Appears",
    "Type": "Manga Canon",
    "Airdate": "2015-04-18T07:00:00.000Z"
  },
  {
    "#": 692,
    "Title": "A Hard-Fought Battle Against Pica! Zoro's Deadly Attack!",
    "Type": "Manga Canon",
    "Airdate": "2015-05-10T07:00:00.000Z"
  },
  {
    "#": 693,
    "Title": "The Little People's Princess! Captive Mansherry!",
    "Type": "Manga Canon",
    "Airdate": "2015-05-17T07:00:00.000Z"
  },
  {
    "#": 694,
    "Title": "Invincible! A Gruesome Army of Headcracker Dolls!",
    "Type": "Manga Canon",
    "Airdate": "2015-05-24T07:00:00.000Z"
  },
  {
    "#": 695,
    "Title": "Risking Their Lives! Luffy Is the Trump Card for Victory!",
    "Type": "Manga Canon",
    "Airdate": "2015-05-31T07:00:00.000Z"
  },
  {
    "#": 696,
    "Title": "A Tearful Reunion! Rebecca and Kyros!",
    "Type": "Manga Canon",
    "Airdate": "2015-06-07T07:00:00.000Z"
  },
  {
    "#": 697,
    "Title": "One Shot One Kill! The Man Who Will Save Dressrosa!",
    "Type": "Manga Canon",
    "Airdate": "2015-06-14T07:00:00.000Z"
  },
  {
    "#": 698,
    "Title": "Anger Erupts! Luffy and Law's Ultimate Stratagem!",
    "Type": "Manga Canon",
    "Airdate": "2015-06-21T07:00:00.000Z"
  },
  {
    "#": 699,
    "Title": "A Noble Family! The True Identity of Doflamingo!",
    "Type": "Manga Canon",
    "Airdate": "2015-06-28T07:00:00.000Z"
  },
  {
    "#": 700,
    "Title": "The Ultimate Power! The Secret of the Op-Op Fruit!",
    "Type": "Manga Canon",
    "Airdate": "2015-07-05T07:00:00.000Z"
  },
  {
    "#": 701,
    "Title": "Sad Memories! Law the Boy From the White Town!",
    "Type": "Manga Canon",
    "Airdate": "2015-07-12T07:00:00.000Z"
  },
  {
    "#": 702,
    "Title": "A Celestial Dragon! Doffy's Stormy Past",
    "Type": "Manga Canon",
    "Airdate": "2015-07-19T07:00:00.000Z"
  },
  {
    "#": 703,
    "Title": "A Rocky Road! Law and Corazon's Journey of Life!",
    "Type": "Manga Canon",
    "Airdate": "2015-08-02T07:00:00.000Z"
  },
  {
    "#": 704,
    "Title": "The Time Is Ticking Down! Seize the Op-Op Fruit!",
    "Type": "Manga Canon",
    "Airdate": "2015-08-09T07:00:00.000Z"
  },
  {
    "#": 705,
    "Title": "The Moment of Resolution! Corazon's Farewell Smile!",
    "Type": "Manga Canon",
    "Airdate": "2015-08-16T07:00:00.000Z"
  },
  {
    "#": 706,
    "Title": "Advance, Law! The Kindhearted Man's Final Fight!",
    "Type": "Manga Canon",
    "Airdate": "2015-08-23T07:00:00.000Z"
  },
  {
    "#": 707,
    "Title": "To Be Free! Law's Injection Shot Blasts!",
    "Type": "Manga Canon",
    "Airdate": "2015-08-30T07:00:00.000Z"
  },
  {
    "#": 708,
    "Title": "An Intense Battle! Law vs. Doflamingo!",
    "Type": "Manga Canon",
    "Airdate": "2015-09-06T07:00:00.000Z"
  },
  {
    "#": 709,
    "Title": "A Decisive Battle Against the Executives! Proud Hajrudin!",
    "Type": "Manga Canon",
    "Airdate": "2015-09-13T07:00:00.000Z"
  },
  {
    "#": 710,
    "Title": "The Battle of Love! The New Leader Sai vs. Baby 5!",
    "Type": "Manga Canon",
    "Airdate": "2015-09-20T07:00:00.000Z"
  },
  {
    "#": 711,
    "Title": "The Man's Pride! Bellamy's Last Charge!",
    "Type": "Manga Canon",
    "Airdate": "2015-09-27T07:00:00.000Z"
  },
  {
    "#": 712,
    "Title": "A Strong Wind and a Surge! Hakuba vs. Dellinger!",
    "Type": "Manga Canon",
    "Airdate": "2015-10-04T07:00:00.000Z"
  },
  {
    "#": 713,
    "Title": "Barrier-Barrier! Homage God Fist Strikes!",
    "Type": "Manga Canon",
    "Airdate": "2015-10-11T07:00:00.000Z"
  },
  {
    "#": 714,
    "Title": "The Healing Princess! Save Mansherry!",
    "Type": "Manga Canon",
    "Airdate": "2015-10-18T07:00:00.000Z"
  },
  {
    "#": 715,
    "Title": "The Manly Duel! Señor's Elegy of Love!",
    "Type": "Manga Canon",
    "Airdate": "2015-10-25T07:00:00.000Z"
  },
  {
    "#": 716,
    "Title": "Stardust of Death! Diamante's Storm of Vicious Attacks!",
    "Type": "Manga Canon",
    "Airdate": "2015-11-01T07:00:00.000Z"
  },
  {
    "#": 717,
    "Title": "Trueno Bastardo! Kyros' Furious Strike!",
    "Type": "Manga Canon",
    "Airdate": "2015-11-08T08:00:00.000Z"
  },
  {
    "#": 718,
    "Title": "Moving Across the Ground! The Giant Statue Pica's Surprise Maneuver!",
    "Type": "Manga Canon",
    "Airdate": "2015-11-15T08:00:00.000Z"
  },
  {
    "#": 719,
    "Title": "A Decisive Battle in Midair! Zoro's New Special Secret Technique Blasts!",
    "Type": "Manga Canon",
    "Airdate": "2015-11-22T08:00:00.000Z"
  },
  {
    "#": 720,
    "Title": "So Long! Bellamy's Farewell Blow!",
    "Type": "Manga Canon",
    "Airdate": "2015-11-29T08:00:00.000Z"
  },
  {
    "#": 721,
    "Title": "Law Dies! Luffy's Raging Onslaught!",
    "Type": "Manga Canon",
    "Airdate": "2015-12-06T08:00:00.000Z"
  },
  {
    "#": 722,
    "Title": "A Blade of Tenacity! The Gamma Knife Counterattack!",
    "Type": "Manga Canon",
    "Airdate": "2015-12-13T08:00:00.000Z"
  },
  {
    "#": 723,
    "Title": "A Collision of Haki! Luffy vs. Doflamingo!",
    "Type": "Manga Canon",
    "Airdate": "2015-12-20T08:00:00.000Z"
  },
  {
    "#": 724,
    "Title": "Unassailable! The Stunning Secret of Trebol!",
    "Type": "Manga Canon",
    "Airdate": "2015-12-27T08:00:00.000Z"
  },
  {
    "#": 725,
    "Title": "Anger Erupts! I Will Take Everything Upon Myself!",
    "Type": "Manga Canon",
    "Airdate": "2016-01-10T08:00:00.000Z"
  },
  {
    "#": 726,
    "Title": "Fourth Gear! The Phenomenal Bounce-Man!",
    "Type": "Manga Canon",
    "Airdate": "2016-01-17T08:00:00.000Z"
  },
  {
    "#": 727,
    "Title": "A Massive Counterattack! Doflamingo's Awakening!",
    "Type": "Manga Canon",
    "Airdate": "2016-01-24T08:00:00.000Z"
  },
  {
    "#": 728,
    "Title": "Luffy! An All-Out Leo Bazooka!",
    "Type": "Manga Canon",
    "Airdate": "2016-01-31T08:00:00.000Z"
  },
  {
    "#": 729,
    "Title": "Flame Dragon King! Protect Luffy's Life!",
    "Type": "Manga Canon",
    "Airdate": "2016-02-14T08:00:00.000Z"
  },
  {
    "#": 730,
    "Title": "Tears of Miracles! Mansherry's Fight!",
    "Type": "Manga Canon",
    "Airdate": "2016-02-21T08:00:00.000Z"
  },
  {
    "#": 731,
    "Title": "As Long as We Breathe! Stop the Deadly Birdcage!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2016-02-28T08:00:00.000Z"
  },
  {
    "#": 732,
    "Title": "Dead or Alive! A Fateful Countdown!",
    "Type": "Manga Canon",
    "Airdate": "2016-03-06T08:00:00.000Z"
  },
  {
    "#": 733,
    "Title": "Attack on a Celestial! Luffy's King Kong Gun of Anger!",
    "Type": "Manga Canon",
    "Airdate": "2016-03-20T07:00:00.000Z"
  },
  {
    "#": 734,
    "Title": "To Be Free! Dressrosa's Delight!",
    "Type": "Manga Canon",
    "Airdate": "2016-03-27T07:00:00.000Z"
  },
  {
    "#": 735,
    "Title": "The Unheard-Of! Admiral Fujitora's Surprising Decision!",
    "Type": "Manga Canon",
    "Airdate": "2016-04-03T07:00:00.000Z"
  },
  {
    "#": 736,
    "Title": "Sending a Shock Wave! The Worst Generation Goes Into Action!",
    "Type": "Manga Canon",
    "Airdate": "2016-04-10T07:00:00.000Z"
  },
  {
    "#": 737,
    "Title": "The Birth of the Legend! The Adventures of the Revolutionary Warrior Sabo!",
    "Type": "Anime Canon",
    "Airdate": "2016-04-17T07:00:00.000Z"
  },
  {
    "#": 738,
    "Title": "The Brothers' Bond! The Untold Story Behind Luffy and Sabo's Reunion!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2016-04-24T07:00:00.000Z"
  },
  {
    "#": 739,
    "Title": "The Strongest Creature! One of the Four Emperors - Kaido, King of the Beasts!",
    "Type": "Manga Canon",
    "Airdate": "2016-05-01T07:00:00.000Z"
  },
  {
    "#": 740,
    "Title": "Fujitora Takes Action! The Complete Siege of the Straw Hats!",
    "Type": "Manga Canon",
    "Airdate": "2016-05-08T07:00:00.000Z"
  },
  {
    "#": 741,
    "Title": "A State of Emergency! Rebecca Is Kidnapped!",
    "Type": "Manga Canon",
    "Airdate": "2016-05-15T07:00:00.000Z"
  },
  {
    "#": 742,
    "Title": "The Bond Between Father and Daughter! Kyros and Rebecca!",
    "Type": "Manga Canon",
    "Airdate": "2016-05-22T07:00:00.000Z"
  },
  {
    "#": 743,
    "Title": "Men's Pride! Luffy vs. Fujitora, Head-to-Head!",
    "Type": "Manga Canon",
    "Airdate": "2016-05-29T07:00:00.000Z"
  },
  {
    "#": 744,
    "Title": "No Way Out! Admiral Fujitora's Ruthless Pursuit!",
    "Type": "Manga Canon",
    "Airdate": "2016-06-05T07:00:00.000Z"
  },
  {
    "#": 745,
    "Title": "Sons' Cups! Straw Hat Fleet Is Formed!",
    "Type": "Manga Canon",
    "Airdate": "2016-06-12T07:00:00.000Z"
  },
  {
    "#": 746,
    "Title": "The Numerous Rivals Struggle Amongst Themselves! The Raging Monsters of the New World",
    "Type": "Manga Canon",
    "Airdate": "2016-06-19T07:00:00.000Z"
  },
  {
    "#": 747,
    "Title": "The Silver Fortress! Luffy and Barto's Great Adventure!",
    "Type": "Filler",
    "Airdate": "2016-06-26T07:00:00.000Z"
  },
  {
    "#": 748,
    "Title": "An Underground Maze! Luffy vs. the Tram Human!",
    "Type": "Filler",
    "Airdate": "2016-07-03T07:00:00.000Z"
  },
  {
    "#": 749,
    "Title": "The Sword Technique Heats Up! Law and Zoro Finally Appear!",
    "Type": "Filler",
    "Airdate": "2016-07-10T07:00:00.000Z"
  },
  {
    "#": 750,
    "Title": "A Desperate Situation! Luffy Fights a Battle in Extreme Heat!",
    "Type": "Filler",
    "Airdate": "2016-07-17T07:00:00.000Z"
  },
  {
    "#": 751,
    "Title": "Curtain-up on a New Adventure! Arriving at the Phantom Island, Zou!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2016-07-31T07:00:00.000Z"
  },
  {
    "#": 752,
    "Title": "The New Warlord! The Legendary Whitebeard's Son Appears!",
    "Type": "Manga Canon",
    "Airdate": "2016-08-07T07:00:00.000Z"
  },
  {
    "#": 753,
    "Title": "A Deadly Elephant Climb! A Great Adventure on the Back of the Giant Elephant!",
    "Type": "Manga Canon",
    "Airdate": "2016-08-21T07:00:00.000Z"
  },
  {
    "#": 754,
    "Title": "A Battle Begins! Luffy vs. the Mink Tribe!",
    "Type": "Manga Canon",
    "Airdate": "2016-08-28T07:00:00.000Z"
  },
  {
    "#": 755,
    "Title": "Garchu! The Straw Hats Reunite!",
    "Type": "Manga Canon",
    "Airdate": "2016-09-04T07:00:00.000Z"
  },
  {
    "#": 756,
    "Title": "Start to Counterattack! Great Moves by the Twirly Hat Crew!",
    "Type": "Manga Canon",
    "Airdate": "2016-09-11T07:00:00.000Z"
  },
  {
    "#": 757,
    "Title": "A Threat Descends! The Beast Pirates, Jack!",
    "Type": "Manga Canon",
    "Airdate": "2016-09-25T07:00:00.000Z"
  },
  {
    "#": 758,
    "Title": "The King of the Day! Duke Dogstorm Appears!",
    "Type": "Manga Canon",
    "Airdate": "2016-10-02T07:00:00.000Z"
  },
  {
    "#": 759,
    "Title": "The King of the Night! Master Cat Viper Emerges!",
    "Type": "Manga Canon",
    "Airdate": "2016-10-09T07:00:00.000Z"
  },
  {
    "#": 760,
    "Title": "The Exterminated Capital! The Twirly Hat Crew Arrive!",
    "Type": "Manga Canon",
    "Airdate": "2016-10-16T07:00:00.000Z"
  },
  {
    "#": 761,
    "Title": "The Time Limit Closes In! The Bond Between the Mink Tribe and the Crew!",
    "Type": "Manga Canon",
    "Airdate": "2016-10-23T07:00:00.000Z"
  },
  {
    "#": 762,
    "Title": "The Delinquent Comes Home! Emperor Big Mom's Assassins!",
    "Type": "Manga Canon",
    "Airdate": "2016-10-30T07:00:00.000Z"
  },
  {
    "#": 763,
    "Title": "The Truth Behind the Disappearance! Sanji Gets a Startling Invitation!",
    "Type": "Manga Canon",
    "Airdate": "2016-11-06T07:00:00.000Z"
  },
  {
    "#": 764,
    "Title": "To My Buds! Sanji's Farewell Note!",
    "Type": "Manga Canon",
    "Airdate": "2016-11-13T08:00:00.000Z"
  },
  {
    "#": 765,
    "Title": "Let's Go and Meet Master Cat Viper!",
    "Type": "Manga Canon",
    "Airdate": "2016-11-20T08:00:00.000Z"
  },
  {
    "#": 766,
    "Title": "Luffy's Decision! Sanji on the Brink of Quitting!",
    "Type": "Manga Canon",
    "Airdate": "2016-11-27T08:00:00.000Z"
  },
  {
    "#": 767,
    "Title": "A Volatile Situation! The Dog and the Cat and the Samurai",
    "Type": "Manga Canon",
    "Airdate": "2016-12-04T08:00:00.000Z"
  },
  {
    "#": 768,
    "Title": "The Third One! Raizo of the Mist, the Ninja, Appears!",
    "Type": "Manga Canon",
    "Airdate": "2016-12-11T08:00:00.000Z"
  },
  {
    "#": 769,
    "Title": "A Red Stone! A Guide to the One Piece!",
    "Type": "Manga Canon",
    "Airdate": "2016-12-18T08:00:00.000Z"
  },
  {
    "#": 770,
    "Title": "The Secret of the Land of Wano! The Kozuki Family and the Poneglyphs!",
    "Type": "Manga Canon",
    "Airdate": "2016-12-25T08:00:00.000Z"
  },
  {
    "#": 771,
    "Title": "A Vow Between Two Men! Luffy and Kozuki Momonosuke!",
    "Type": "Manga Canon",
    "Airdate": "2017-01-08T08:00:00.000Z"
  },
  {
    "#": 772,
    "Title": "The Legendary Journey! The Dog and the Cat and the Pirate King!",
    "Type": "Manga Canon",
    "Airdate": "2017-01-15T08:00:00.000Z"
  },
  {
    "#": 773,
    "Title": "The Nightmare Returns! The Invincible Jack's Fierce Attack!",
    "Type": "Manga Canon",
    "Airdate": "2017-01-22T08:00:00.000Z"
  },
  {
    "#": 774,
    "Title": "A Battle to Defend Zou! Luffy and Zunesha!",
    "Type": "Manga Canon",
    "Airdate": "2017-01-29T08:00:00.000Z"
  },
  {
    "#": 775,
    "Title": "Save Zunesha! The Straw Hat's Rescue Operation!",
    "Type": "Anime Canon",
    "Airdate": "2017-02-05T08:00:00.000Z"
  },
  {
    "#": 776,
    "Title": "Saying Goodbye and Descending From the Elephant! Setting Out to Take Back Sanji!",
    "Type": "Manga Canon",
    "Airdate": "2017-02-12T08:00:00.000Z"
  },
  {
    "#": 777,
    "Title": "To the Reverie! Princess Vivi and Princess Shirahoshi!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2017-02-19T08:00:00.000Z"
  },
  {
    "#": 778,
    "Title": "To the Reverie! Rebecca and the Sakura Kingdom!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2017-02-26T08:00:00.000Z"
  },
  {
    "#": 779,
    "Title": "Kaido Returns! An Imminent Threat to the Worst Generation!",
    "Type": "Manga Canon",
    "Airdate": "2017-03-05T08:00:00.000Z"
  },
  {
    "#": 780,
    "Title": "A Hungry Front! Luffy and the Navy Rookies!",
    "Type": "Filler",
    "Airdate": "2017-03-19T07:00:00.000Z"
  },
  {
    "#": 781,
    "Title": "The Implacable Three! A Big Chase After the Straw Hats!",
    "Type": "Filler",
    "Airdate": "2017-03-26T07:00:00.000Z"
  },
  {
    "#": 782,
    "Title": "The Devil's Fist! A Show Down! Luffy vs. Grount!",
    "Type": "Filler",
    "Airdate": "2017-04-02T07:00:00.000Z"
  },
  {
    "#": 783,
    "Title": "Sanji's Homecoming! Into Big Mom's Territory!",
    "Type": "Manga Canon",
    "Airdate": "2017-04-09T07:00:00.000Z"
  },
  {
    "#": 784,
    "Title": "Zero and Four! Encountering Germa 66!",
    "Type": "Manga Canon",
    "Airdate": "2017-04-16T07:00:00.000Z"
  },
  {
    "#": 785,
    "Title": "A Deadly Poison Crisis! Luffy and Reiju!",
    "Type": "Manga Canon",
    "Airdate": "2017-04-23T07:00:00.000Z"
  },
  {
    "#": 786,
    "Title": "Totto Land! Emperor Big Mom Appears!",
    "Type": "Manga Canon",
    "Airdate": "2017-04-30T07:00:00.000Z"
  },
  {
    "#": 787,
    "Title": "The Emperor's Daughter! Sanji's Fiancée - Pudding!",
    "Type": "Manga Canon",
    "Airdate": "2017-05-07T07:00:00.000Z"
  },
  {
    "#": 788,
    "Title": "A Massive Attack! Mom's Hunger Pangs!",
    "Type": "Manga Canon",
    "Airdate": "2017-05-14T07:00:00.000Z"
  },
  {
    "#": 789,
    "Title": "The Capital City Falls?! Big Mom and Jimbei",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2017-05-21T07:00:00.000Z"
  },
  {
    "#": 790,
    "Title": "The Emperor's Castle! Arriving at the Whole Cake Island!",
    "Type": "Manga Canon",
    "Airdate": "2017-05-28T07:00:00.000Z"
  },
  {
    "#": 791,
    "Title": "A Mysterious Forest Full of Candies! Luffy vs. Luffy?!",
    "Type": "Manga Canon",
    "Airdate": "2017-06-04T07:00:00.000Z"
  },
  {
    "#": 792,
    "Title": "Mom's Assassin! Luffy and the Seducing Woods!",
    "Type": "Manga Canon",
    "Airdate": "2017-06-11T07:00:00.000Z"
  },
  {
    "#": 793,
    "Title": "A Seafaring Kingdom! Germa's King Judge!",
    "Type": "Manga Canon",
    "Airdate": "2017-06-18T07:00:00.000Z"
  },
  {
    "#": 794,
    "Title": "A Battle Between Father and Son! Judge vs. Sanji!",
    "Type": "Manga Canon",
    "Airdate": "2017-06-25T07:00:00.000Z"
  },
  {
    "#": 795,
    "Title": "A Giant Ambition! Big Mom and Caesar!",
    "Type": "Manga Canon",
    "Airdate": "2017-07-02T07:00:00.000Z"
  },
  {
    "#": 796,
    "Title": "The Land of Souls! Mom’s Fatal Ability!",
    "Type": "Manga Canon",
    "Airdate": "2017-07-09T07:00:00.000Z"
  },
  {
    "#": 797,
    "Title": "A Top Officer! The Sweet 3 General Cracker Appears!",
    "Type": "Manga Canon",
    "Airdate": "2017-07-16T07:00:00.000Z"
  },
  {
    "#": 798,
    "Title": "An Enemy Worth 800 Million! Luffy vs. Thousand Armed Cracker!",
    "Type": "Manga Canon",
    "Airdate": "2017-07-23T07:00:00.000Z"
  },
  {
    "#": 799,
    "Title": "An All-Out Duel! Gear Four vs. the Bis-Bis Ability!",
    "Type": "Manga Canon",
    "Airdate": "2017-07-30T07:00:00.000Z"
  },
  {
    "#": 800,
    "Title": "The First and the Second Join! The Vinsmoke Family",
    "Type": "Manga Canon",
    "Airdate": "2017-08-06T07:00:00.000Z"
  },
  {
    "#": 801,
    "Title": "The Benefactor's Life! Sanji and Owner Zeff!",
    "Type": "Manga Canon",
    "Airdate": "2017-08-13T07:00:00.000Z"
  },
  {
    "#": 802,
    "Title": "An Angry Sanji! The Secret of Germa 66!",
    "Type": "Manga Canon",
    "Airdate": "2017-08-20T07:00:00.000Z"
  },
  {
    "#": 803,
    "Title": "The Past That He Let Go Of! Vinsmoke Sanji!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2017-08-27T07:00:00.000Z"
  },
  {
    "#": 804,
    "Title": "To the East Blue! Sanji's Resolute Departure!",
    "Type": "Manga Canon",
    "Airdate": "2017-09-03T07:00:00.000Z"
  },
  {
    "#": 805,
    "Title": "A Battle of Limits! Luffy and the Infinite Biscuits!",
    "Type": "Manga Canon",
    "Airdate": "2017-09-17T07:00:00.000Z"
  },
  {
    "#": 806,
    "Title": "The Power of Satiety! A New Gear Four Form - Tank Man!",
    "Type": "Manga Canon",
    "Airdate": "2017-09-24T07:00:00.000Z"
  },
  {
    "#": 807,
    "Title": "A Heartbreaking Duel! Luffy vs. Sanji! - Part 1",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2017-10-01T07:00:00.000Z"
  },
  {
    "#": 808,
    "Title": "A Heartbreaking Duel! Luffy vs. Sanji! - Part 2",
    "Type": "Manga Canon",
    "Airdate": "2017-10-01T07:00:00.000Z"
  },
  {
    "#": 809,
    "Title": "A Storm of Revenge! An Enraged Army Comes to Attack!",
    "Type": "Manga Canon",
    "Airdate": "2017-10-15T07:00:00.000Z"
  },
  {
    "#": 810,
    "Title": "The End of the Adventure! Sanji's Resolute Proposal!",
    "Type": "Manga Canon",
    "Airdate": "2017-10-22T07:00:00.000Z"
  },
  {
    "#": 811,
    "Title": "I'll Wait Here! Luffy vs. the Enraged Army!",
    "Type": "Manga Canon",
    "Airdate": "2017-10-29T07:00:00.000Z"
  },
  {
    "#": 812,
    "Title": "Invading the Chateau! Reach the Road Ponegliff!",
    "Type": "Manga Canon",
    "Airdate": "2017-11-05T07:00:00.000Z"
  },
  {
    "#": 813,
    "Title": "A Fateful Confrontation! Luffy and Big Mom!",
    "Type": "Manga Canon",
    "Airdate": "2017-11-12T08:00:00.000Z"
  },
  {
    "#": 814,
    "Title": "Shout of the Soul! Brook and Pedro's Lightning Operation!",
    "Type": "Manga Canon",
    "Airdate": "2017-11-19T08:00:00.000Z"
  },
  {
    "#": 815,
    "Title": "Goodbye! Pudding's Tearful Determination!",
    "Type": "Manga Canon",
    "Airdate": "2017-11-26T08:00:00.000Z"
  },
  {
    "#": 816,
    "Title": "The History of the Left Eye! Pedro vs. Baron Tamago!",
    "Type": "Manga Canon",
    "Airdate": "2017-12-03T08:00:00.000Z"
  },
  {
    "#": 817,
    "Title": "Moist Cigarette! The Night Before Sanji's Wedding!",
    "Type": "Manga Canon",
    "Airdate": "2017-12-10T08:00:00.000Z"
  },
  {
    "#": 818,
    "Title": "The Undaunted Soul! Brook vs. Big Mom!",
    "Type": "Manga Canon",
    "Airdate": "2017-12-17T08:00:00.000Z"
  },
  {
    "#": 819,
    "Title": "Sora's Wish! Germa's Failure - Sanji!",
    "Type": "Manga Canon",
    "Airdate": "2017-12-24T08:00:00.000Z"
  },
  {
    "#": 820,
    "Title": "To Reach Sanji! Luffy's Vengeful Hell-Bent Dash!",
    "Type": "Manga Canon",
    "Airdate": "2018-01-07T08:00:00.000Z"
  },
  {
    "#": 821,
    "Title": "The Chateau in Turmoil! Luffy, to the Rendezvous!",
    "Type": "Manga Canon",
    "Airdate": "2018-01-14T08:00:00.000Z"
  },
  {
    "#": 822,
    "Title": "Deciding to Say Goodbye! Sanji and His Straw Hat Bento!",
    "Type": "Manga Canon",
    "Airdate": "2018-01-21T08:00:00.000Z"
  },
  {
    "#": 823,
    "Title": "The Emperor Rolls Over! Rescue Brook Mission!",
    "Type": "Manga Canon",
    "Airdate": "2018-01-28T08:00:00.000Z"
  },
  {
    "#": 824,
    "Title": "The Rendezvous! Luffy, a One-on-One at His Limit!",
    "Type": "Manga Canon",
    "Airdate": "2018-02-04T08:00:00.000Z"
  },
  {
    "#": 825,
    "Title": "A Liar! Luffy and Sanji!!",
    "Type": "Manga Canon",
    "Airdate": "2018-02-11T08:00:00.000Z"
  },
  {
    "#": 826,
    "Title": "Sanji Comes Back! Crash! The Tea Party From Hell!",
    "Type": "Manga Canon",
    "Airdate": "2018-02-18T08:00:00.000Z"
  },
  {
    "#": 827,
    "Title": "A Secret Meeting! Luffy vs. the Fire Tank Pirates!",
    "Type": "Manga Canon",
    "Airdate": "2018-03-04T08:00:00.000Z"
  },
  {
    "#": 828,
    "Title": "The Deadly Pact! Luffy & Bege's Allied Forces!",
    "Type": "Manga Canon",
    "Airdate": "2018-03-18T07:00:00.000Z"
  },
  {
    "#": 829,
    "Title": "Luffy Engages in a Secret Maneuver! The Wedding Full of Conspiracies Starts Soon!",
    "Type": "Manga Canon",
    "Airdate": "2018-03-25T07:00:00.000Z"
  },
  {
    "#": 830,
    "Title": "The Family Gets Together! The Hellish Tea Party Starts!",
    "Type": "Manga Canon",
    "Airdate": "2018-04-01T07:00:00.000Z"
  },
  {
    "#": 831,
    "Title": "The Broken Couple! Sanji and Pudding Enter!",
    "Type": "Manga Canon",
    "Airdate": "2018-04-08T07:00:00.000Z"
  },
  {
    "#": 832,
    "Title": "A Deadly Kiss! The Mission to Assassinate the Emperor Kicks Off!",
    "Type": "Manga Canon",
    "Airdate": "2018-04-15T07:00:00.000Z"
  },
  {
    "#": 833,
    "Title": "Returning the Sake Cup! The Manly Jimbei Pays His Debt!",
    "Type": "Manga Canon",
    "Airdate": "2018-04-22T07:00:00.000Z"
  },
  {
    "#": 834,
    "Title": "The Mission Failed?! The Big Mom Pirates Strike Back!",
    "Type": "Manga Canon",
    "Airdate": "2018-04-29T07:00:00.000Z"
  },
  {
    "#": 835,
    "Title": "Run, Sanji! SOS! Germa 66!",
    "Type": "Manga Canon",
    "Airdate": "2018-05-06T07:00:00.000Z"
  },
  {
    "#": 836,
    "Title": "Mom's Secret! The Giant's Island Elbaph and a Little Monster!",
    "Type": "Manga Canon",
    "Airdate": "2018-05-13T07:00:00.000Z"
  },
  {
    "#": 837,
    "Title": "The Birth of Mom! The Day That Carmel Vanished!",
    "Type": "Manga Canon",
    "Airdate": "2018-05-20T07:00:00.000Z"
  },
  {
    "#": 838,
    "Title": "The Launcher Blasts! The Moment of Big Mom's Assassination!",
    "Type": "Manga Canon",
    "Airdate": "2018-05-27T07:00:00.000Z"
  },
  {
    "#": 839,
    "Title": "The Evil Army! Transform! Germa 66!",
    "Type": "Manga Canon",
    "Airdate": "2018-06-03T07:00:00.000Z"
  },
  {
    "#": 840,
    "Title": "Cutting the Father-Son Relationship! Sanji and Judge!",
    "Type": "Manga Canon",
    "Airdate": "2018-06-10T07:00:00.000Z"
  },
  {
    "#": 841,
    "Title": "Escape From the Tea Party! Luffy vs. Big Mom!",
    "Type": "Manga Canon",
    "Airdate": "2018-06-17T07:00:00.000Z"
  },
  {
    "#": 842,
    "Title": "The Execution Begins! Luffy's Allied Forces Are Annihilated?!",
    "Type": "Manga Canon",
    "Airdate": "2018-06-24T07:00:00.000Z"
  },
  {
    "#": 843,
    "Title": "The Chateau Collapses! The Straw Hat's Great Escape Begins!",
    "Type": "Manga Canon",
    "Airdate": "2018-07-01T07:00:00.000Z"
  },
  {
    "#": 844,
    "Title": "The Spear of Elbaph! Onslaught! The Flying Big Mom!",
    "Type": "Manga Canon",
    "Airdate": "2018-07-08T07:00:00.000Z"
  },
  {
    "#": 845,
    "Title": "Pudding's Determination! Ablaze! The Seducing Woods!",
    "Type": "Manga Canon",
    "Airdate": "2018-07-15T07:00:00.000Z"
  },
  {
    "#": 846,
    "Title": "A Lightning Counterattack! Nami and Zeus the Thundercloud!",
    "Type": "Manga Canon",
    "Airdate": "2018-07-22T07:00:00.000Z"
  },
  {
    "#": 847,
    "Title": "A Coincidental Reunion! Sanji and the Lovestruck Evil Pudding!",
    "Type": "Manga Canon",
    "Airdate": "2018-07-29T07:00:00.000Z"
  },
  {
    "#": 848,
    "Title": "Save the Sunny! Fighting Bravely! Chopper and Brook!",
    "Type": "Manga Canon",
    "Airdate": "2018-08-05T07:00:00.000Z"
  },
  {
    "#": 849,
    "Title": "Before the Dawn! Pedro, the Captain of the Guardians!",
    "Type": "Manga Canon",
    "Airdate": "2018-08-12T07:00:00.000Z"
  },
  {
    "#": 850,
    "Title": "I'll Be Back! Luffy, Deadly Departure!",
    "Type": "Manga Canon",
    "Airdate": "2018-08-19T07:00:00.000Z"
  },
  {
    "#": 851,
    "Title": "The Man With a Bounty of Billion! The Strongest Sweet General, Katakuri!",
    "Type": "Manga Canon",
    "Airdate": "2018-08-26T07:00:00.000Z"
  },
  {
    "#": 852,
    "Title": "A Hard Battle Starts! Luffy vs. Katakuri!",
    "Type": "Manga Canon",
    "Airdate": "2018-09-02T07:00:00.000Z"
  },
  {
    "#": 853,
    "Title": "The Green Room! An Invincible Helmsman, Jimbei!",
    "Type": "Manga Canon",
    "Airdate": "2018-09-16T07:00:00.000Z"
  },
  {
    "#": 854,
    "Title": "The Threat of the Mole! Luffy's Silent Fight!",
    "Type": "Manga Canon",
    "Airdate": "2018-09-23T07:00:00.000Z"
  },
  {
    "#": 855,
    "Title": "The End of the Deadly Battle?! Katakuri's Awakening in Anger!",
    "Type": "Manga Canon",
    "Airdate": "2018-09-30T07:00:00.000Z"
  },
  {
    "#": 856,
    "Title": "The Forbidden Secret! Katakuri's Merienda!",
    "Type": "Manga Canon",
    "Airdate": "2018-10-07T07:00:00.000Z"
  },
  {
    "#": 857,
    "Title": "Luffy Fights Back! The Invincible Katakuri's Weak Point!",
    "Type": "Manga Canon",
    "Airdate": "2018-10-14T07:00:00.000Z"
  },
  {
    "#": 858,
    "Title": "Another Crisis! Gear Four vs. Unstoppable Donuts!",
    "Type": "Manga Canon",
    "Airdate": "2018-10-21T07:00:00.000Z"
  },
  {
    "#": 859,
    "Title": "The Rebellious Daughter, Chiffon! Sanji's Big Plan for Transporting the Cake!",
    "Type": "Manga Canon",
    "Airdate": "2018-10-28T07:00:00.000Z"
  },
  {
    "#": 860,
    "Title": "A Man's Way of Life! Bege and Luffy's Determination as Captains!",
    "Type": "Manga Canon",
    "Airdate": "2018-11-04T07:00:00.000Z"
  },
  {
    "#": 861,
    "Title": "The Cake Sank?! Sanji and Bege's Getaway Battle!",
    "Type": "Manga Canon",
    "Airdate": "2018-11-11T08:00:00.000Z"
  },
  {
    "#": 862,
    "Title": "Sulong! Carrot's Big Mystic Transformation!",
    "Type": "Manga Canon",
    "Airdate": "2018-11-18T08:00:00.000Z"
  },
  {
    "#": 863,
    "Title": "Break Through! The Straw Hats' Mighty Sea Battle!",
    "Type": "Manga Canon",
    "Airdate": "2018-11-25T08:00:00.000Z"
  },
  {
    "#": 864,
    "Title": "Finally, the Clash! The Emperor of the Sea vs. the Straw Hats!",
    "Type": "Manga Canon",
    "Airdate": "2018-12-09T08:00:00.000Z"
  },
  {
    "#": 865,
    "Title": "Dark King's Direct Precepts! The Battle Against Katakuri Turns Around!",
    "Type": "Manga Canon",
    "Airdate": "2018-12-16T08:00:00.000Z"
  },
  {
    "#": 866,
    "Title": "Finally He Returns! Sanji, the Man Who'll Stop the Emperor of the Sea!",
    "Type": "Manga Canon",
    "Airdate": "2018-12-23T08:00:00.000Z"
  },
  {
    "#": 867,
    "Title": "Lurking in the Darkness! An Assassin Targeting Luffy!",
    "Type": "Manga Canon",
    "Airdate": "2019-01-06T08:00:00.000Z"
  },
  {
    "#": 868,
    "Title": "One Man's Determination! Katakuri's Deadly Big Fight!",
    "Type": "Manga Canon",
    "Airdate": "2019-01-13T08:00:00.000Z"
  },
  {
    "#": 869,
    "Title": "Wake Up! The Color of Observation Able To Top the Strongest!",
    "Type": "Manga Canon",
    "Airdate": "2019-01-20T08:00:00.000Z"
  },
  {
    "#": 870,
    "Title": "A Fist of Divine Speed! Another Gear Four Application Activated!",
    "Type": "Manga Canon",
    "Airdate": "2019-01-27T08:00:00.000Z"
  },
  {
    "#": 871,
    "Title": "Finally, It's Over! The Climax of the Intense Fight Against Katakuri!",
    "Type": "Manga Canon",
    "Airdate": "2019-02-03T08:00:00.000Z"
  },
  {
    "#": 872,
    "Title": "A Desperate Situation! The Iron-Tight Entrapment of Luffy!",
    "Type": "Manga Canon",
    "Airdate": "2019-02-10T08:00:00.000Z"
  },
  {
    "#": 873,
    "Title": "Pulling Back From the Brink! The Formidable Reinforcements - Germa!",
    "Type": "Manga Canon",
    "Airdate": "2019-02-17T08:00:00.000Z"
  },
  {
    "#": 874,
    "Title": "The Last Hope! The Sun Pirates Emerge!",
    "Type": "Manga Canon",
    "Airdate": "2019-02-24T08:00:00.000Z"
  },
  {
    "#": 875,
    "Title": "A Captivating Flavor! Sanji's Cake of Happiness!",
    "Type": "Manga Canon",
    "Airdate": "2019-03-03T08:00:00.000Z"
  },
  {
    "#": 876,
    "Title": "The Man of Humanity and Justice! Jimbei, a Desperate Massive Ocean Current",
    "Type": "Manga Canon",
    "Airdate": "2019-03-17T07:00:00.000Z"
  },
  {
    "#": 877,
    "Title": "The Parting Time! Pudding's Last Wish!",
    "Type": "Manga Canon",
    "Airdate": "2019-03-24T07:00:00.000Z"
  },
  {
    "#": 878,
    "Title": "The World in Shock! The Fifth Emperor of the Sea Arrives!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2019-03-31T07:00:00.000Z"
  },
  {
    "#": 879,
    "Title": "To the Reverie! The Straw Hats' Sworn Allies Come Together!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2019-04-07T07:00:00.000Z"
  },
  {
    "#": 880,
    "Title": "Sabo Goes Into Action! All the Captains of the Revolutionary Army Appear!",
    "Type": "Manga Canon",
    "Airdate": "2019-04-14T07:00:00.000Z"
  },
  {
    "#": 881,
    "Title": "Going Into Action! The Implacable New Admiral of the Fleet - Sakazuki!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2019-04-21T07:00:00.000Z"
  },
  {
    "#": 882,
    "Title": "The Paramount War! The Inherited Will of the King of the Pirates!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2019-04-28T07:00:00.000Z"
  },
  {
    "#": 883,
    "Title": "One Step Forward for Her Dream! Shirahoshi Goes Out in the Sun!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2019-05-05T07:00:00.000Z"
  },
  {
    "#": 884,
    "Title": "I Miss Him! Vivi and Rebecca's Sentiments!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2019-05-12T07:00:00.000Z"
  },
  {
    "#": 885,
    "Title": "In the Dark Recesses of the Holyland! A Mysterious Giant Straw Hat!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2019-05-19T07:00:00.000Z"
  },
  {
    "#": 886,
    "Title": "The Holyland in Tumult! The Targeted Princess Shirahoshi!",
    "Type": "Manga Canon",
    "Airdate": "2019-05-26T07:00:00.000Z"
  },
  {
    "#": 887,
    "Title": "An Explosive Situation! Two Emperors of the Sea Going After Luffy!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2019-06-02T07:00:00.000Z"
  },
  {
    "#": 888,
    "Title": "Sabo Enraged! The Tragedy of the Revolutionary Army Officer Kuma!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2019-06-09T07:00:00.000Z"
  },
  {
    "#": 889,
    "Title": "Finally, It Starts! The Conspiracy-Filled Reverie!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2019-06-16T07:00:00.000Z"
  },
  {
    "#": 890,
    "Title": "Marco! The Keeper of Whitebeard's Last Memento!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2019-06-23T07:00:00.000Z"
  },
  {
    "#": 891,
    "Title": "Climbing up a Waterfall! A Great Journey Through the Land of Wano's Sea Zone!",
    "Type": "Manga Canon",
    "Airdate": "2019-06-30T07:00:00.000Z"
  },
  {
    "#": 892,
    "Title": "The Land of Wano! To the Samurai Country Where Cherry Blossoms Flutter!",
    "Type": "Manga Canon",
    "Airdate": "2019-07-07T07:00:00.000Z"
  },
  {
    "#": 893,
    "Title": "Otama Appears! Luffy vs. Kaido's Army!",
    "Type": "Manga Canon",
    "Airdate": "2019-07-14T07:00:00.000Z"
  },
  {
    "#": 894,
    "Title": "He'll Come! The Legend of Ace in the Land of Wano!",
    "Type": "Manga Canon",
    "Airdate": "2019-07-21T07:00:00.000Z"
  },
  {
    "#": 895,
    "Title": "Side Story! The World's Greatest Bounty Hunter, Cidre!",
    "Type": "Filler",
    "Airdate": "2019-07-28T07:00:00.000Z"
  },
  {
    "#": 896,
    "Title": "Side Story! Clash! Luffy vs. the King of Carbonation!",
    "Type": "Filler",
    "Airdate": "2019-08-04T07:00:00.000Z"
  },
  {
    "#": 897,
    "Title": "Save Otama! Straw Hat, Bounding Through the Wasteland!",
    "Type": "Manga Canon",
    "Airdate": "2019-08-11T07:00:00.000Z"
  },
  {
    "#": 898,
    "Title": "The Headliner! Hawkins the Magician Appears!",
    "Type": "Manga Canon",
    "Airdate": "2019-08-18T07:00:00.000Z"
  },
  {
    "#": 899,
    "Title": "Defeat Is Inevitable! The Strawman's Fierce Attack!",
    "Type": "Manga Canon",
    "Airdate": "2019-08-25T07:00:00.000Z"
  },
  {
    "#": 900,
    "Title": "The Greatest Day of My Life! Otama and Her Sweet Red-Bean Soup!",
    "Type": "Manga Canon",
    "Airdate": "2019-09-01T07:00:00.000Z"
  },
  {
    "#": 901,
    "Title": "Charging Into the Enemy's Territory! Bakura Town - Where Officials Thrive!",
    "Type": "Manga Canon",
    "Airdate": "2019-09-08T07:00:00.000Z"
  },
  {
    "#": 902,
    "Title": "The Yokozuna Appears! The Invincible Urashima Goes After Okiku!",
    "Type": "Manga Canon",
    "Airdate": "2019-09-15T07:00:00.000Z"
  },
  {
    "#": 903,
    "Title": "A Climatic Sumo Battle! Straw Hat vs. the Strongest Ever Yokozuna!",
    "Type": "Manga Canon",
    "Airdate": "2019-09-22T07:00:00.000Z"
  },
  {
    "#": 904,
    "Title": "Luffy Rages! Rescue Otama From Danger!",
    "Type": "Manga Canon",
    "Airdate": "2019-09-29T07:00:00.000Z"
  },
  {
    "#": 905,
    "Title": "Taking Back Otama! A Fierce Fight Against Holdem!",
    "Type": "Manga Canon",
    "Airdate": "2019-10-06T07:00:00.000Z"
  },
  {
    "#": 906,
    "Title": "Duel! The Magician and the Surgeon of Death!",
    "Type": "Manga Canon",
    "Airdate": "2019-10-13T07:00:00.000Z"
  },
  {
    "#": 907,
    "Title": "20th Anniversary Special! Romance Dawn",
    "Type": "Filler",
    "Airdate": "2019-10-20T07:00:00.000Z"
  },
  {
    "#": 908,
    "Title": "The Coming of the Treasure Ship! Luffytaro Returns the Favor!",
    "Type": "Manga Canon",
    "Airdate": "2019-10-27T07:00:00.000Z"
  },
  {
    "#": 909,
    "Title": "Mysterious Grave Markers! A Reunion at the Ruins of Oden Castle!",
    "Type": "Manga Canon",
    "Airdate": "2019-11-10T08:00:00.000Z"
  },
  {
    "#": 910,
    "Title": "A Legendary Samurai! The Man Who Roger Admired!",
    "Type": "Manga Canon",
    "Airdate": "2019-11-17T08:00:00.000Z"
  },
  {
    "#": 911,
    "Title": "Bringing Down the Emperor of the Sea! A Secret Raid Operation Begins!",
    "Type": "Manga Canon",
    "Airdate": "2019-11-24T08:00:00.000Z"
  },
  {
    "#": 912,
    "Title": "The Strongest Man in the World! Shutenmaru, the Thieves Brigade Chief!",
    "Type": "Manga Canon",
    "Airdate": "2019-12-01T08:00:00.000Z"
  },
  {
    "#": 913,
    "Title": "Everyone Is Annihilated! Kaido's Furious Blast Breath!",
    "Type": "Manga Canon",
    "Airdate": "2019-12-08T08:00:00.000Z"
  },
  {
    "#": 914,
    "Title": "Finally Clashing! The Ferocious Luffy vs. Kaido!",
    "Type": "Manga Canon",
    "Airdate": "2019-12-15T08:00:00.000Z"
  },
  {
    "#": 915,
    "Title": "Destructive! One Shot, One Kill - Thunder Bagua!",
    "Type": "Manga Canon",
    "Airdate": "2019-12-22T08:00:00.000Z"
  },
  {
    "#": 916,
    "Title": "A Living Hell! Luffy, Humiliated in the Great Mine!",
    "Type": "Manga Canon",
    "Airdate": "2020-01-05T08:00:00.000Z"
  },
  {
    "#": 917,
    "Title": "The Holyland in Tumult! Emperor of the Sea Blackbeard Cackles!",
    "Type": "Manga Canon",
    "Airdate": "2020-01-12T08:00:00.000Z"
  },
  {
    "#": 918,
    "Title": "It's On! The Special Operation To Bring Down Kaido!",
    "Type": "Manga Canon",
    "Airdate": "2020-01-19T08:00:00.000Z"
  },
  {
    "#": 919,
    "Title": "Rampage! The Prisoners - Luffy and Kid!",
    "Type": "Manga Canon",
    "Airdate": "2020-01-26T08:00:00.000Z"
  },
  {
    "#": 920,
    "Title": "A Great Sensation! Sanji's Special Soba!",
    "Type": "Manga Canon",
    "Airdate": "2020-02-02T08:00:00.000Z"
  },
  {
    "#": 921,
    "Title": "Luxurious and Gorgeous! Wano's Most Beautiful Woman - Komurasaki!",
    "Type": "Manga Canon",
    "Airdate": "2020-02-09T08:00:00.000Z"
  },
  {
    "#": 922,
    "Title": "A Tale of Chivalry! Zoro and Tonoyasu's Little Trip!",
    "Type": "Manga Canon",
    "Airdate": "2020-02-16T08:00:00.000Z"
  },
  {
    "#": 923,
    "Title": "A State of Emergency! Big Mom Closes In!",
    "Type": "Manga Canon",
    "Airdate": "2020-02-23T08:00:00.000Z"
  },
  {
    "#": 924,
    "Title": "The Capital in an Uproar! Another Assassin Targets Sanji!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2020-03-15T07:00:00.000Z"
  },
  {
    "#": 925,
    "Title": "Dashing! The Righteous Soba Mask!",
    "Type": "Manga Canon",
    "Airdate": "2020-03-22T07:00:00.000Z"
  },
  {
    "#": 926,
    "Title": "A Desperate Situation! Orochi's Menacing Oniwabanshu!",
    "Type": "Manga Canon",
    "Airdate": "2020-03-29T07:00:00.000Z"
  },
  {
    "#": 927,
    "Title": "Pandemonium! The Monster Snake, Shogun Orochi!",
    "Type": "Manga Canon",
    "Airdate": "2020-04-05T07:00:00.000Z"
  },
  {
    "#": 928,
    "Title": "The Flower Falls! The Final Moment of the Most Beautiful Woman in the Land of Wano!",
    "Type": "Manga Canon",
    "Airdate": "2020-04-12T07:00:00.000Z"
  },
  {
    "#": 929,
    "Title": "The Bond Between Prisoners! Luffy and Old Man Hyo!",
    "Type": "Manga Canon",
    "Airdate": "2020-04-19T07:00:00.000Z"
  },
  {
    "#": 930,
    "Title": "A Lead Performer! Queen the Plague Emerges!",
    "Type": "Manga Canon",
    "Airdate": "2020-06-28T07:00:00.000Z"
  },
  {
    "#": 931,
    "Title": "Climb Up! Luffy's Desperate Escape!",
    "Type": "Manga Canon",
    "Airdate": "2020-07-05T07:00:00.000Z"
  },
  {
    "#": 932,
    "Title": "Dead or Alive! Queen's Sumo Inferno!",
    "Type": "Manga Canon",
    "Airdate": "2020-07-12T07:00:00.000Z"
  },
  {
    "#": 933,
    "Title": "Gyukimaru! Zoro Fights a Duel on Bandit's Bridge!",
    "Type": "Manga Canon",
    "Airdate": "2020-07-19T07:00:00.000Z"
  },
  {
    "#": 934,
    "Title": "A Big Turnover! The Three-Sword Style Overcomes Danger!",
    "Type": "Manga Canon",
    "Airdate": "2020-07-26T07:00:00.000Z"
  },
  {
    "#": 935,
    "Title": "Zoro, Stunned! The Shocking Identity of the Mysterious Woman!",
    "Type": "Manga Canon",
    "Airdate": "2020-08-02T07:00:00.000Z"
  },
  {
    "#": 936,
    "Title": "Get the Hang of It! The Land of Wano's Haki - Ryuo!",
    "Type": "Manga Canon",
    "Airdate": "2020-08-09T07:00:00.000Z"
  },
  {
    "#": 937,
    "Title": "Tonoyasu! Ebisu Town's Most Loved!",
    "Type": "Manga Canon",
    "Airdate": "2020-08-16T07:00:00.000Z"
  },
  {
    "#": 938,
    "Title": "Shaking the Nation! The Identity of Ushimitsu Kozo the Chivalrous Thief!",
    "Type": "Manga Canon",
    "Airdate": "2020-08-23T07:00:00.000Z"
  },
  {
    "#": 939,
    "Title": "The Straw Hats Run! Save the Captive Tonoyasu!",
    "Type": "Manga Canon",
    "Airdate": "2020-08-30T07:00:00.000Z"
  },
  {
    "#": 940,
    "Title": "Zoro's Fury! The Truth About the Smile!",
    "Type": "Manga Canon",
    "Airdate": "2020-09-06T07:00:00.000Z"
  },
  {
    "#": 941,
    "Title": "Toko's Tears! Orochi's Pitiless Bullets!",
    "Type": "Manga Canon",
    "Airdate": "2020-09-13T07:00:00.000Z"
  },
  {
    "#": 942,
    "Title": "The Straw Hats Step In! An Uproarious Deadly Battle at the Execution Ground!",
    "Type": "Manga Canon",
    "Airdate": "2020-09-20T07:00:00.000Z"
  },
  {
    "#": 943,
    "Title": "Luffy's Determination! Win Through the Sumo Inferno!",
    "Type": "Manga Canon",
    "Airdate": "2020-09-27T07:00:00.000Z"
  },
  {
    "#": 944,
    "Title": "The Storm Has Come! A Raging Big Mom!",
    "Type": "Manga Canon",
    "Airdate": "2020-10-04T07:00:00.000Z"
  },
  {
    "#": 945,
    "Title": "A Grudge Over Red-bean Soup! Luffy Gets Into a Desperate Situation!",
    "Type": "Manga Canon",
    "Airdate": "2020-10-11T07:00:00.000Z"
  },
  {
    "#": 946,
    "Title": "Stop the Emperor of the Sea! Queen's Secret Plan!",
    "Type": "Manga Canon",
    "Airdate": "2020-10-18T07:00:00.000Z"
  },
  {
    "#": 947,
    "Title": "Brutal Ammunition! The Plague Rounds Aim At Luffy!",
    "Type": "Manga Canon",
    "Airdate": "2020-10-25T07:00:00.000Z"
  },
  {
    "#": 948,
    "Title": "Start Fighting Back! Luffy and the Akazaya Samurai!",
    "Type": "Manga Canon",
    "Airdate": "2020-11-01T07:00:00.000Z"
  },
  {
    "#": 949,
    "Title": "We're Here To Win! Luffy's Desperate Scream!",
    "Type": "Manga Canon",
    "Airdate": "2020-11-08T08:00:00.000Z"
  },
  {
    "#": 950,
    "Title": "Warriors' Dream! Luffy's Conquer of Udon!",
    "Type": "Manga Canon",
    "Airdate": "2020-11-15T08:00:00.000Z"
  },
  {
    "#": 951,
    "Title": "Orochi's Hunting Party! The Ninja Group vs. Zoro!",
    "Type": "Manga Canon",
    "Airdate": "2020-11-22T08:00:00.000Z"
  },
  {
    "#": 952,
    "Title": "Tension Rises in Onigashima! Two Emperors of the Sea Meet?!",
    "Type": "Manga Canon",
    "Airdate": "2020-11-29T08:00:00.000Z"
  },
  {
    "#": 953,
    "Title": "Hiyori's Confession! A Reunion at Bandit's Bridge!",
    "Type": "Manga Canon",
    "Airdate": "2020-12-06T08:00:00.000Z"
  },
  {
    "#": 954,
    "Title": "Its Name Is Enma! Oden’s Great Swords!",
    "Type": "Manga Canon",
    "Airdate": "2020-12-13T08:00:00.000Z"
  },
  {
    "#": 955,
    "Title": "A New Alliance?! Kaido's Army Gathers!",
    "Type": "Manga Canon",
    "Airdate": "2020-12-20T08:00:00.000Z"
  },
  {
    "#": 956,
    "Title": "Ticking Down to the Great Battle! The Straw Hats Go Into Combat Mode!",
    "Type": "Manga Canon",
    "Airdate": "2020-12-27T08:00:00.000Z"
  },
  {
    "#": 957,
    "Title": "Big News! An Incident That Will Affect the Seven Warlords!",
    "Type": "Manga Canon",
    "Airdate": "2021-01-10T08:00:00.000Z"
  },
  {
    "#": 958,
    "Title": "A Legendary Battle! Garp and Roger!",
    "Type": "Manga Canon",
    "Airdate": "2021-01-17T08:00:00.000Z"
  },
  {
    "#": 959,
    "Title": "The Rendezvous Port! The Land of Wano Act Three Begins!",
    "Type": "Manga Canon",
    "Airdate": "2021-01-24T08:00:00.000Z"
  },
  {
    "#": 960,
    "Title": "The Number-One Samurai in the Land of Wano! Here Comes Kozuki Oden!",
    "Type": "Manga Canon",
    "Airdate": "2021-01-31T08:00:00.000Z"
  },
  {
    "#": 961,
    "Title": "Tearfully Swearing Allegiance! Oden and Kin'emon!",
    "Type": "Manga Canon",
    "Airdate": "2021-02-07T08:00:00.000Z"
  },
  {
    "#": 962,
    "Title": "Changing Destiny! The Whitebeard Pirates Cast Ashore!",
    "Type": "Manga Canon",
    "Airdate": "2021-02-14T08:00:00.000Z"
  },
  {
    "#": 963,
    "Title": "Oden's Determination! Whitebeard's Test!",
    "Type": "Manga Canon",
    "Airdate": "2021-02-21T08:00:00.000Z"
  },
  {
    "#": 964,
    "Title": "Whitebeard's Little Brother! Oden's Great Adventure!",
    "Type": "Manga Canon",
    "Airdate": "2021-02-28T08:00:00.000Z"
  },
  {
    "#": 965,
    "Title": "Crossing Swords! Roger and Whitebeard!",
    "Type": "Manga Canon",
    "Airdate": "2021-03-07T08:00:00.000Z"
  },
  {
    "#": 966,
    "Title": "Roger's Wish! A New Journey!",
    "Type": "Manga Canon",
    "Airdate": "2021-03-21T07:00:00.000Z"
  },
  {
    "#": 967,
    "Title": "Devoting His Life! Roger's Adventure!",
    "Type": "Manga Canon",
    "Airdate": "2021-03-28T07:00:00.000Z"
  },
  {
    "#": 968,
    "Title": "The King of the Pirates Is Born! Arriving at the Last Island!",
    "Type": "Manga Canon",
    "Airdate": "2021-04-04T07:00:00.000Z"
  },
  {
    "#": 969,
    "Title": "To the Land of Wano! The Roger Pirates Disband!",
    "Type": "Manga Canon",
    "Airdate": "2021-04-11T07:00:00.000Z"
  },
  {
    "#": 970,
    "Title": "Sad News! The Opening of the Great Pirate Era!",
    "Type": "Manga Canon",
    "Airdate": "2021-04-18T07:00:00.000Z"
  },
  {
    "#": 971,
    "Title": "Raid! Oden and the Akazaya Nine!",
    "Type": "Manga Canon",
    "Airdate": "2021-04-25T07:00:00.000Z"
  },
  {
    "#": 972,
    "Title": "The End of the Battle! Oden vs. Kaido!",
    "Type": "Manga Canon",
    "Airdate": "2021-05-02T07:00:00.000Z"
  },
  {
    "#": 973,
    "Title": "Boiled to Death! Oden's One-hour Struggle!",
    "Type": "Manga Canon",
    "Airdate": "2021-05-09T07:00:00.000Z"
  },
  {
    "#": 974,
    "Title": "Oden Wouldn’t Be Oden if It Wasn’t Boiled!",
    "Type": "Manga Canon",
    "Airdate": "2021-05-16T07:00:00.000Z"
  },
  {
    "#": 975,
    "Title": "The Castle on Fire! The Fate of the Kozuki Clan!",
    "Type": "Manga Canon",
    "Airdate": "2021-05-23T07:00:00.000Z"
  },
  {
    "#": 976,
    "Title": "Back to the Present Day! 20 Years Later!",
    "Type": "Manga Canon",
    "Airdate": "2021-05-30T07:00:00.000Z"
  },
  {
    "#": 977,
    "Title": "The Sea Is for Pirates! Raid! To Onigashima!",
    "Type": "Manga Canon",
    "Airdate": "2021-06-06T07:00:00.000Z"
  },
  {
    "#": 978,
    "Title": "The Worst Generation Charges In! The Battle of the Stormy Sea!",
    "Type": "Manga Canon",
    "Airdate": "2021-06-13T07:00:00.000Z"
  },
  {
    "#": 979,
    "Title": "Good Luck?! Leader Kin'emon's Plot!",
    "Type": "Manga Canon",
    "Airdate": "2021-06-20T07:00:00.000Z"
  },
  {
    "#": 980,
    "Title": "A Tearful Promise! The Kidnapped Momonosuke!",
    "Type": "Manga Canon",
    "Airdate": "2021-06-27T07:00:00.000Z"
  },
  {
    "#": 981,
    "Title": "A New Member! 'First Son of the Sea’ Jimbei!",
    "Type": "Manga Canon",
    "Airdate": "2021-07-04T07:00:00.000Z"
  },
  {
    "#": 982,
    "Title": "Kaido’s Trump Card! The Tobi Roppo Appear!",
    "Type": "Manga Canon",
    "Airdate": "2021-07-11T07:00:00.000Z"
  },
  {
    "#": 983,
    "Title": "The Samurai Warriors’ Earnestness! The Straw Hats Land at Onigashima!",
    "Type": "Manga Canon",
    "Airdate": "2021-07-18T07:00:00.000Z"
  },
  {
    "#": 984,
    "Title": "Luffy Goes Out of Control?! Sneaking Into Kaido’s Banquet!",
    "Type": "Manga Canon",
    "Airdate": "2021-07-25T07:00:00.000Z"
  },
  {
    "#": 985,
    "Title": "Thinking of Otama! Luffy's Furious Strike!",
    "Type": "Manga Canon",
    "Airdate": "2021-08-01T07:00:00.000Z"
  },
  {
    "#": 986,
    "Title": "Fighting Music! An Ability That Harms Luffy!",
    "Type": "Manga Canon",
    "Airdate": "2021-08-08T07:00:00.000Z"
  },
  {
    "#": 987,
    "Title": "His Dream Broken?! The Trap That Lures Sanji!",
    "Type": "Manga Canon",
    "Airdate": "2021-08-15T07:00:00.000Z"
  },
  {
    "#": 988,
    "Title": "Reinforcements Arrive! The Commander of the Whitebeard Pirates!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2021-08-22T07:00:00.000Z"
  },
  {
    "#": 989,
    "Title": "The Pact Between Men! The Fierce Fighting of Brachio Tank!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2021-08-29T07:00:00.000Z"
  },
  {
    "#": 990,
    "Title": "Thunder Bagua! Here Comes Kaido's Son!",
    "Type": "Manga Canon",
    "Airdate": "2021-09-05T07:00:00.000Z"
  },
  {
    "#": 991,
    "Title": "Enemy or Ally? Luffy and Yamato!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2021-09-12T07:00:00.000Z"
  },
  {
    "#": 992,
    "Title": "Desire To Be Oden! Yamato’s Dream!",
    "Type": "Manga Canon",
    "Airdate": "2021-09-19T07:00:00.000Z"
  },
  {
    "#": 993,
    "Title": "Explosive?! The Handcuffs That Shackle Yamato’s Freedom!",
    "Type": "Manga Canon",
    "Airdate": "2021-09-26T07:00:00.000Z"
  },
  {
    "#": 994,
    "Title": "The Akazaya Face-off! Kikunojo vs. Kanjuro!",
    "Type": "Manga Canon",
    "Airdate": "2021-10-03T07:00:00.000Z"
  },
  {
    "#": 995,
    "Title": "Raid! Inheriting Oden's Will",
    "Type": "Manga Canon",
    "Airdate": "2021-10-10T07:00:00.000Z"
  },
  {
    "#": 996,
    "Title": "Onigashima in Tumult! Luffy’s All-out War Begins!",
    "Type": "Manga Canon",
    "Airdate": "2021-10-24T07:00:00.000Z"
  },
  {
    "#": 997,
    "Title": "The Battle Under the Moon! The Berserker, Sulong the Moon Lion!",
    "Type": "Manga Canon",
    "Airdate": "2021-10-31T07:00:00.000Z"
  },
  {
    "#": 998,
    "Title": "Zeus' Treason?! The Cornered Nami!",
    "Type": "Manga Canon",
    "Airdate": "2021-11-07T07:00:00.000Z"
  },
  {
    "#": 999,
    "Title": "I'll Protect You! Yamato Meets Momonosuke!",
    "Type": "Manga Canon",
    "Airdate": "2021-11-14T08:00:00.000Z"
  },
  {
    "#": 1000,
    "Title": "Overwhelming Strength! The Straw Hats Come Together!",
    "Type": "Manga Canon",
    "Airdate": "2021-11-21T08:00:00.000Z"
  },
  {
    "#": 1001,
    "Title": "A Risky Invitation! A Plot to Eliminate Queen!",
    "Type": "Manga Canon",
    "Airdate": "2021-11-28T08:00:00.000Z"
  },
  {
    "#": 1002,
    "Title": "A New Rivalry! Nami and Ulti!",
    "Type": "Manga Canon",
    "Airdate": "2021-12-05T08:00:00.000Z"
  },
  {
    "#": 1003,
    "Title": "A Heroic Blade! Akazaya vs. Kaido, Again Once More!",
    "Type": "Manga Canon",
    "Airdate": "2021-12-12T08:00:00.000Z"
  },
  {
    "#": 1004,
    "Title": "An Inherited Technique! Unleashing Oden's Secret Swordplay!",
    "Type": "Manga Canon",
    "Airdate": "2021-12-19T08:00:00.000Z"
  },
  {
    "#": 1005,
    "Title": "The Power of the Ice Oni! A New Version of the Plague Rounds!",
    "Type": "Manga Canon",
    "Airdate": "2022-01-09T08:00:00.000Z"
  },
  {
    "#": 1006,
    "Title": "I Won't Forgive Him! Chopper's Determination!",
    "Type": "Manga Canon",
    "Airdate": "2022-01-16T08:00:00.000Z"
  },
  {
    "#": 1007,
    "Title": "Zoro's Pursuit! Ice Oni Tag!",
    "Type": "Manga Canon",
    "Airdate": "2022-01-23T08:00:00.000Z"
  },
  {
    "#": 1008,
    "Title": "Nami Surrenders?! Ulti's Fierce Headbutt!",
    "Type": "Manga Canon",
    "Airdate": "2022-01-30T08:00:00.000Z"
  },
  {
    "#": 1009,
    "Title": "Sasaki's Onslaught! Armored Division vs. Yamato!",
    "Type": "Manga Canon",
    "Airdate": "2022-02-06T08:00:00.000Z"
  },
  {
    "#": 1010,
    "Title": "Eliminate the Ice Oni! Chopper's Fire Trick!",
    "Type": "Manga Canon",
    "Airdate": "2022-02-13T08:00:00.000Z"
  },
  {
    "#": 1011,
    "Title": "It's Not Okay! The Spider Lures Sanji!",
    "Type": "Manga Canon",
    "Airdate": "2022-02-20T08:00:00.000Z"
  },
  {
    "#": 1012,
    "Title": "A Turnaround Move! The Flames of Marco the Phoenix!",
    "Type": "Manga Canon",
    "Airdate": "2022-02-27T08:00:00.000Z"
  },
  {
    "#": 1013,
    "Title": "Yamato's Past! The Man Who Came for an Emperor of the Sea!",
    "Type": "Manga Canon",
    "Airdate": "2022-03-06T08:00:00.000Z"
  },
  {
    "#": 1014,
    "Title": "Marco's Tears! The Bond of the Whitebeard Pirates!",
    "Type": "Manga Canon",
    "Airdate": "2022-04-17T07:00:00.000Z"
  },
  {
    "#": 1015,
    "Title": "Straw Hat Luffy! The Man Who Will Become the King of the Pirates!",
    "Type": "Manga Canon",
    "Airdate": "2022-04-24T07:00:00.000Z"
  },
  {
    "#": 1016,
    "Title": "The Battle of the Monsters! The Three Stubborn Captains!",
    "Type": "Manga Canon",
    "Airdate": "2022-05-08T07:00:00.000Z"
  },
  {
    "#": 1017,
    "Title": "A Barrage of Powerful Techniques! The Fierce Attacks of the Worst Generation!",
    "Type": "Manga Canon",
    "Airdate": "2022-05-15T07:00:00.000Z"
  },
  {
    "#": 1018,
    "Title": "Kaido Laughs! The Emperors of the Sea vs. New Generation!",
    "Type": "Manga Canon",
    "Airdate": "2022-05-22T07:00:00.000Z"
  },
  {
    "#": 1019,
    "Title": "Otama's Secret Plan! Operation Kibi Dango!",
    "Type": "Manga Canon",
    "Airdate": "2022-05-29T07:00:00.000Z"
  },
  {
    "#": 1020,
    "Title": "Sanji's Scream! An SOS Echoes Over the Island!",
    "Type": "Manga Canon",
    "Airdate": "2022-06-05T07:00:00.000Z"
  },
  {
    "#": 1021,
    "Title": "Spank Strikes! Sanji's Woman-trouble!",
    "Type": "Manga Canon",
    "Airdate": "2022-06-12T07:00:00.000Z"
  },
  {
    "#": 1022,
    "Title": "No Regrets! Luffy and Boss, a Master-Disciple Bond!",
    "Type": "Manga Canon",
    "Airdate": "2022-06-19T07:00:00.000Z"
  },
  {
    "#": 1023,
    "Title": "All Set! Chopperhage Nebulizer!",
    "Type": "Manga Canon",
    "Airdate": "2022-07-03T07:00:00.000Z"
  },
  {
    "#": 1024,
    "Title": "Oden Appears! The Confused Hearts of the Akazaya Members!",
    "Type": "Manga Canon",
    "Airdate": "2022-07-10T07:00:00.000Z"
  },
  {
    "#": 1025,
    "Title": "The Worst Generation Gets Wiped Out?! The Emperors' Deadly Attack!",
    "Type": "Manga Canon",
    "Airdate": "2022-07-17T07:00:00.000Z"
  },
  {
    "#": 1026,
    "Title": "The Supernovas Strike Back! The Mission to Tear Apart the Four Emperors!",
    "Type": "Manga Canon",
    "Airdate": "2022-07-24T07:00:00.000Z"
  },
  {
    "#": 1027,
    "Title": "Defend Luffy! Zoro and Law's Sword Technique!",
    "Type": "Manga Canon",
    "Airdate": "2022-07-31T07:00:00.000Z"
  },
  {
    "#": 1028,
    "Title": "Surpass the Emperor of the Sea! Luffy Strikes Back with an Iron Fist!",
    "Type": "Manga Canon",
    "Airdate": "2022-08-07T07:00:00.000Z"
  },
  {
    "#": 1029,
    "Title": "A Faint Memory! Luffy and Red-Haired's Daughter Uta!",
    "Type": "Filler",
    "Airdate": "2022-08-14T07:00:00.000Z"
  },
  {
    "#": 1030,
    "Title": "A Pledge for the New Genesis! Luffy and Uta!",
    "Type": "Filler",
    "Airdate": "2022-08-21T07:00:00.000Z"
  },
  {
    "#": 1031,
    "Title": "Nami Screams! A Deadly Death Race!",
    "Type": "Manga Canon",
    "Airdate": "2022-09-04T07:00:00.000Z"
  },
  {
    "#": 1032,
    "Title": "The Dawn of the Land of Wano - The All-Out Battle Heats Up!",
    "Type": "Manga Canon",
    "Airdate": "2022-09-11T07:00:00.000Z"
  },
  {
    "#": 1033,
    "Title": "The Conclusion! Luffy, Accelerating Fist of the Supreme King",
    "Type": "Manga Canon",
    "Airdate": "2022-09-18T07:00:00.000Z"
  },
  {
    "#": 1034,
    "Title": "Luffy Defeated! The Straw Hats in Jeopardy?!",
    "Type": "Manga Canon",
    "Airdate": "2022-09-25T07:00:00.000Z"
  },
  {
    "#": 1035,
    "Title": "The Animal Kingdom Pirates Trample Down! The End of the Kozuki Clan!",
    "Type": "Manga Canon",
    "Airdate": "2022-10-02T07:00:00.000Z"
  },
  {
    "#": 1036,
    "Title": "Fight Against the Dark Night! The Commander-in-Chief of the Land of Wano Sounds Off!",
    "Type": "Manga Canon",
    "Airdate": "2022-10-16T07:00:00.000Z"
  },
  {
    "#": 1037,
    "Title": "Believe in Luffy! The Alliance's Counterattack Begins!",
    "Type": "Manga Canon",
    "Airdate": "2022-10-23T07:00:00.000Z"
  },
  {
    "#": 1038,
    "Title": "Nami's Lethal Attack! Otama's Desperate Challenge!",
    "Type": "Manga Canon",
    "Airdate": "2022-10-30T07:00:00.000Z"
  },
  {
    "#": 1039,
    "Title": "A Dramatic Increase of Allies! Straw Hats Fight Back!",
    "Type": "Manga Canon",
    "Airdate": "2022-11-06T07:00:00.000Z"
  },
  {
    "#": 1040,
    "Title": "The Pride of a Helmsman? The Enraged Jinbei!",
    "Type": "Manga Canon",
    "Airdate": "2022-11-13T08:00:00.000Z"
  },
  {
    "#": 1041,
    "Title": "Showdown Battles of the Monsters! Yamato and Franky",
    "Type": "Manga Canon",
    "Airdate": "2022-11-20T08:00:00.000Z"
  },
  {
    "#": 1042,
    "Title": "The Predator's Trap - Black Maria's Temptation",
    "Type": "Manga Canon",
    "Airdate": "2022-11-27T08:00:00.000Z"
  },
  {
    "#": 1043,
    "Title": "Slash the Nightmare - Brook Draws His Freezing Sword!",
    "Type": "Manga Canon",
    "Airdate": "2022-12-04T08:00:00.000Z"
  },
  {
    "#": 1044,
    "Title": "Clutch! A Demon Incarnate, Robin!",
    "Type": "Manga Canon",
    "Airdate": "2022-12-11T08:00:00.000Z"
  },
  {
    "#": 1045,
    "Title": "A Spell! Kid and Zoro Facing Threats!",
    "Type": "Manga Canon",
    "Airdate": "2022-12-18T08:00:00.000Z"
  },
  {
    "#": 1046,
    "Title": "Taking a Chance! The Two Arms Go into Battle!",
    "Type": "Manga Canon",
    "Airdate": "2023-01-08T08:00:00.000Z"
  },
  {
    "#": 1047,
    "Title": "Ascend to the Dawn! A Pink Dragon Gets Agitated",
    "Type": "Manga Canon",
    "Airdate": "2023-01-15T08:00:00.000Z"
  },
  {
    "#": 1048,
    "Title": "For the Future! Yamato and the Great Swordsmen's Pledge",
    "Type": "Manga Canon",
    "Airdate": "2023-01-22T08:00:00.000Z"
  },
  {
    "#": 1049,
    "Title": "Luffy Soars! Revenge Against the King of the Beasts",
    "Type": "Manga Canon",
    "Airdate": "2023-01-29T08:00:00.000Z"
  },
  {
    "#": 1050,
    "Title": "Two Dragons Face Off! Momonosuke's Determination!",
    "Type": "Manga Canon",
    "Airdate": "2023-02-05T08:00:00.000Z"
  },
  {
    "#": 1051,
    "Title": "A Legend All Over Again! Luffy's Fist Roars in the Sky!",
    "Type": "Manga Canon",
    "Airdate": "2023-02-12T08:00:00.000Z"
  },
  {
    "#": 1052,
    "Title": "The Situation Has Grown Tense! The End of Onigashima!",
    "Type": "Manga Canon",
    "Airdate": "2023-02-19T08:00:00.000Z"
  },
  {
    "#": 1053,
    "Title": "Sanji's Mutation? The Two Arms in Crisis!",
    "Type": "Manga Canon",
    "Airdate": "2023-02-26T08:00:00.000Z"
  },
  {
    "#": 1054,
    "Title": "Death to Your Partner! Killer's Deadly Gamble!",
    "Type": "Manga Canon",
    "Airdate": "2023-03-19T07:00:00.000Z"
  },
  {
    "#": 1055,
    "Title": "A Shadowy Figure Pulls the Strings! Onigashima in Flames",
    "Type": "Manga Canon",
    "Airdate": "2023-03-26T07:00:00.000Z"
  },
  {
    "#": 1056,
    "Title": "A Countercharge! Law and Kid's Return-Attack Combination",
    "Type": "Manga Canon",
    "Airdate": "2023-04-02T07:00:00.000Z"
  },
  {
    "#": 1057,
    "Title": "For Luffy? Sanji and Zoro's Oath",
    "Type": "Manga Canon",
    "Airdate": "2023-04-09T07:00:00.000Z"
  },
  {
    "#": 1058,
    "Title": "The Onslaught of Kazenbo - Orochi's Evil Clutches Close in",
    "Type": "Manga Canon",
    "Airdate": "2023-04-16T07:00:00.000Z"
  },
  {
    "#": 1059,
    "Title": "Zoro Faces Adversity - A Monster! King the Wildfire",
    "Type": "Manga Canon",
    "Airdate": "2023-04-23T07:00:00.000Z"
  },
  {
    "#": 1060,
    "Title": "The Secret of Enma! The Cursed Sword Entrusted to Zoro",
    "Type": "Manga Canon",
    "Airdate": "2023-04-30T07:00:00.000Z"
  },
  {
    "#": 1061,
    "Title": "The Strike of an Ifrit! Sanji vs. Queen",
    "Type": "Manga Canon",
    "Airdate": "2023-05-07T07:00:00.000Z"
  },
  {
    "#": 1062,
    "Title": "The Three-Sword Style of the Supreme King! Zoro vs. King",
    "Type": "Manga Canon",
    "Airdate": "2023-05-21T07:00:00.000Z"
  },
  {
    "#": 1063,
    "Title": "Luffy is on the Move! A Turning Point to a New Era!",
    "Type": "Manga Canon",
    "Airdate": "2023-05-28T07:00:00.000Z"
  },
  {
    "#": 1064,
    "Title": "Drunken Dragon Bagua! The Lawless Dragon Closing in on Luffy",
    "Type": "Manga Canon",
    "Airdate": "2023-06-04T07:00:00.000Z"
  },
  {
    "#": 1065,
    "Title": "The Destruction of the Alliance?! Fire up, the Will of the New Generation!",
    "Type": "Manga Canon",
    "Airdate": "2023-06-11T07:00:00.000Z"
  },
  {
    "#": 1066,
    "Title": "Here Comes the Main Act! Powerful Techniques of Shockwave and Magnetism",
    "Type": "Manga Canon",
    "Airdate": "2023-06-25T07:00:00.000Z"
  },
  {
    "#": 1067,
    "Title": "To the New Era! Settled! The Determination of the Brats",
    "Type": "Manga Canon",
    "Airdate": "2023-07-02T07:00:00.000Z"
  },
  {
    "#": 1068,
    "Title": "Moon Princess Echoes! The Final Phase of the Land of Wano!",
    "Type": "Manga Canon",
    "Airdate": "2023-07-09T07:00:00.000Z"
  },
  {
    "#": 1069,
    "Title": "There is Only One Winner - Luffy vs. Kaido",
    "Type": "Manga Canon",
    "Airdate": "2023-07-16T07:00:00.000Z"
  },
  {
    "#": 1070,
    "Title": "Luffy is Defeated?! The Determination of those Left Behind!",
    "Type": "Manga Canon",
    "Airdate": "2023-07-30T07:00:00.000Z"
  },
  {
    "#": 1071,
    "Title": "Luffy's Peak - Attained! Gear Five",
    "Type": "Manga Canon",
    "Airdate": "2023-08-06T07:00:00.000Z"
  },
  {
    "#": 1072,
    "Title": "The Ridiculous Power! Gear Five in Full Play",
    "Type": "Manga Canon",
    "Airdate": "2023-08-13T07:00:00.000Z"
  },
  {
    "#": 1073,
    "Title": "No Way Out! A Hellish Scene on Onigashima",
    "Type": "Manga Canon",
    "Airdate": "2023-08-20T07:00:00.000Z"
  },
  {
    "#": 1074,
    "Title": "I Trust Momo - Luffy's Final Powerful Technique!",
    "Type": "Manga Canon",
    "Airdate": "2023-09-03T07:00:00.000Z"
  },
  {
    "#": 1075,
    "Title": "20 Years Worth of Prayer! Take Back the Land Wano",
    "Type": "Manga Canon",
    "Airdate": "2023-09-10T07:00:00.000Z"
  },
  {
    "#": 1076,
    "Title": "The World That Luffy Wants!",
    "Type": "Manga Canon",
    "Airdate": "2023-09-17T07:00:00.000Z"
  },
  {
    "#": 1077,
    "Title": "The Curtain Falls! The Winner, Straw Hat Luffy!",
    "Type": "Manga Canon",
    "Airdate": "2023-09-24T07:00:00.000Z"
  },
  {
    "#": 1078,
    "Title": "He Returns! The Shogun of the Land of Wano, Kozuki Momonosuke",
    "Type": "Manga Canon",
    "Airdate": "2023-10-01T07:00:00.000Z"
  },
  {
    "#": 1079,
    "Title": "The Morning Comes! Luffy and the Others Rest!",
    "Type": "Manga Canon",
    "Airdate": "2023-10-15T07:00:00.000Z"
  },
  {
    "#": 1080,
    "Title": "A Celebration Banquet! The New Emperors of the Sea!",
    "Type": "Manga Canon",
    "Airdate": "2023-10-22T07:00:00.000Z"
  },
  {
    "#": 1081,
    "Title": "The World Will Burn! The Onslaught of a Navy Admiral!",
    "Type": "Manga Canon",
    "Airdate": "2023-10-29T07:00:00.000Z"
  },
  {
    "#": 1082,
    "Title": "The Coming of the New Era! The Red-Haired's Imperial Rage",
    "Type": "Manga Canon",
    "Airdate": "2023-11-05T07:00:00.000Z"
  },
  {
    "#": 1083,
    "Title": "The World That Moves On! A New Organization, Cross Guild",
    "Type": "Manga Canon",
    "Airdate": "2023-11-12T08:00:00.000Z"
  },
  {
    "#": 1084,
    "Title": "Time to Depart - The Land of Wano and the Straw Hats",
    "Type": "Anime Canon",
    "Airdate": "2023-11-19T08:00:00.000Z"
  },
  {
    "#": 1085,
    "Title": "The Last Curtain! Luffy and Momonosuke's Vow",
    "Type": "Manga Canon",
    "Airdate": "2023-11-26T08:00:00.000Z"
  },
  {
    "#": 1086,
    "Title": "A New Emperor! Buggy the Genius Jester!",
    "Type": "Manga Canon",
    "Airdate": "2023-12-03T08:00:00.000Z"
  },
  {
    "#": 1087,
    "Title": "The War on the Island of Women! A Case Involving Koby the Hero",
    "Type": "Manga Canon",
    "Airdate": "2023-12-10T08:00:00.000Z"
  },
  {
    "#": 1088,
    "Title": "Luffy's Dream",
    "Type": "Manga Canon",
    "Airdate": "2023-12-17T08:00:00.000Z"
  },
  {
    "#": 1089,
    "Title": "Entering a New Chapter! Luffy and Sabo's Paths!",
    "Type": "Manga Canon",
    "Airdate": "2024-01-07T08:00:00.000Z"
  },
  {
    "#": 1090,
    "Title": "A New Island! Future Island Egghead",
    "Type": "Manga Canon",
    "Airdate": "2024-01-14T08:00:00.000Z"
  },
  {
    "#": 1091,
    "Title": "Brimming with the Future! An Adventure on the Island of Science!",
    "Type": "Manga Canon",
    "Airdate": "2024-01-21T08:00:00.000Z"
  },
  {
    "#": 1092,
    "Title": "Bonney's Lamentation! Darkness Lurking on the Future Island",
    "Type": "Manga Canon",
    "Airdate": "2024-01-28T08:00:00.000Z"
  },
  {
    "#": 1093,
    "Title": "The Winner Takes All! Law vs. Blackbeard!",
    "Type": "Manga Canon",
    "Airdate": "2024-02-11T08:00:00.000Z"
  },
  {
    "#": 1094,
    "Title": "The Mystery Deepens! Egghead Labophase!",
    "Type": "Manga Canon",
    "Airdate": "2024-02-18T08:00:00.000Z"
  },
  {
    "#": 1095,
    "Title": "The Brain of a Genius - Six Vegapunks!",
    "Type": "Manga Canon",
    "Airdate": "2024-02-25T08:00:00.000Z"
  },
  {
    "#": 1096,
    "Title": "A Forbidden Piece of History! A Theory Concerning a Kingdom",
    "Type": "Manga Canon",
    "Airdate": "2024-03-03T08:00:00.000Z"
  },
  {
    "#": 1097,
    "Title": "The Will of Ohara! The Inherited Research",
    "Type": "Manga Canon",
    "Airdate": "2024-03-17T07:00:00.000Z"
  },
  {
    "#": 1098,
    "Title": "The Eccentric Dream of a Genius!",
    "Type": "Manga Canon",
    "Airdate": "2024-03-24T07:00:00.000Z"
  },
  {
    "#": 1099,
    "Title": "Preparations for Interception! Rob Lucci Strikes!",
    "Type": "Manga Canon",
    "Airdate": "2024-03-31T07:00:00.000Z"
  },
  {
    "#": 1100,
    "Title": "Powers on a Different Level! Luffy vs. Lucci!",
    "Type": "Manga Canon",
    "Airdate": "2024-04-07T07:00:00.000Z"
  },
  {
    "#": 1101,
    "Title": "The Strongest Form of Humanity! The Seraphim's Powers!",
    "Type": "Manga Canon",
    "Airdate": "2024-04-21T07:00:00.000Z"
  },
  {
    "#": 1102,
    "Title": "Sinister Schemes! The Operation to Escape Egghead",
    "Type": "Manga Canon",
    "Airdate": "2024-04-28T07:00:00.000Z"
  },
  {
    "#": 1103,
    "Title": "Turn Back My Father! Bonney's Futile Wish!",
    "Type": "Manga Canon",
    "Airdate": "2024-05-05T07:00:00.000Z"
  },
  {
    "#": 1104,
    "Title": "A Desperate Situation! The Seraphim's All-out Attack!",
    "Type": "Manga Canon",
    "Airdate": "2024-05-12T07:00:00.000Z"
  },
  {
    "#": 1105,
    "Title": "A Beautiful Act of Treason! The Spy, Stussy",
    "Type": "Manga Canon",
    "Airdate": "2024-05-19T07:00:00.000Z"
  },
  {
    "#": 1106,
    "Title": "Trouble Occurs! Seek Dr. Vegapunk!",
    "Type": "Manga Canon",
    "Airdate": "2024-05-26T07:00:00.000Z"
  },
  {
    "#": 1107,
    "Title": "A Shudder! The Evil Hand Creeping Up on the Laboratory",
    "Type": "Manga Canon",
    "Airdate": "2024-06-02T07:00:00.000Z"
  },
  {
    "#": 1108,
    "Title": "Incomprehensible! The Seraphim's Rebellion!",
    "Type": "Manga Canon",
    "Airdate": "2024-06-09T07:00:00.000Z"
  },
  {
    "#": 1109,
    "Title": "A Tough Decision! An Unusual United Front!",
    "Type": "Manga Canon",
    "Airdate": "2024-06-23T07:00:00.000Z"
  },
  {
    "#": 1110,
    "Title": "Survive! Deadly Combat with the Strongest Form of Humanity!",
    "Type": "Manga Canon",
    "Airdate": "2024-06-30T07:00:00.000Z"
  },
  {
    "#": 1111,
    "Title": "The Second Ohara! The Mastermind's Ambition!",
    "Type": "Manga Canon",
    "Airdate": "2024-07-07T07:00:00.000Z"
  },
  {
    "#": 1112,
    "Title": "Clash! Shanks vs. Eustass Kid",
    "Type": "Manga Canon",
    "Airdate": "2024-07-14T07:00:00.000Z"
  },
  {
    "#": 1113,
    "Title": "Run, Koby! A Desperate Escape Strategy!",
    "Type": "Manga Canon",
    "Airdate": "2024-07-28T07:00:00.000Z"
  },
  {
    "#": 1114,
    "Title": "For the Beloved Pupil - The Fist of Vice Admiral Garp!",
    "Type": "Manga Canon",
    "Airdate": "2024-08-04T07:00:00.000Z"
  },
  {
    "#": 1115,
    "Title": "The Navy Surprised! The Navy Headquarters' Former Admiral, Kuzan",
    "Type": "Manga Canon",
    "Airdate": "2024-08-11T07:00:00.000Z"
  },
  {
    "#": 1116,
    "Title": "Let's Go Get It! Buggy's Big Declaration",
    "Type": "Manga Canon",
    "Airdate": "2024-08-18T07:00:00.000Z"
  },
  {
    "#": 1117,
    "Title": "Sabo Returns - The Shocking Truth to Be Told!",
    "Type": "Manga Canon",
    "Airdate": "2024-09-01T07:00:00.000Z"
  },
  {
    "#": 1118,
    "Title": "The Holy Land in Tumult! Sai and Leo's Full-Power Blow!",
    "Type": "Manga Canon",
    "Airdate": "2024-09-08T07:00:00.000Z"
  },
  {
    "#": 1119,
    "Title": "The Entrusted Message! King Cobra's Resolve",
    "Type": "Manga Canon",
    "Airdate": "2024-09-15T07:00:00.000Z"
  },
  {
    "#": 1120,
    "Title": "The World Is Shaken! The Ruler's Judgment and the Five Elders' Actions!",
    "Type": "Manga Canon",
    "Airdate": "2024-09-22T07:00:00.000Z"
  },
  {
    "#": 1121,
    "Title": "Garp and Kuzan - A Master and a Pupil's Beliefs Clash",
    "Type": "Manga Canon",
    "Airdate": "2024-10-06T07:00:00.000Z"
  },
  {
    "#": 1122,
    "Title": "The Last Lesson! Impact Inherited",
    "Type": "Manga Canon",
    "Airdate": "2024-10-13T07:00:00.000Z"
  },
  {
    "#": 1123,
    "Title": "The World Shakes! The Straw Hats' Hostage Situation",
    "Type": "Manga Canon",
    "Airdate": "2025-04-05T07:00:00.000Z"
  },
  {
    "#": 1124,
    "Title": "Completely Surrounded! The Operation to Escape Egghead",
    "Type": "Manga Canon",
    "Airdate": "2025-04-06T07:00:00.000Z"
  },
  {
    "#": 1125,
    "Title": "A Clash of Two Men's Determination! Kizaru and Sentomaru",
    "Type": "Manga Canon",
    "Airdate": "2025-04-13T07:00:00.000Z"
  },
  {
    "#": 1126,
    "Title": "Looming Despair! Admiral Kizaru's Depressing Mission",
    "Type": "Manga Canon",
    "Airdate": "2025-04-20T07:00:00.000Z"
  },
  {
    "#": 1127,
    "Title": "Luffy Vs. Kizaru! A Fierce Kaleidoscopic Battle",
    "Type": "Manga Canon",
    "Airdate": "2025-04-27T07:00:00.000Z"
  },
  {
    "#": 1128,
    "Title": "The Nightmare Strikes - Godhead of Science & Defense, St. Saturn",
    "Type": "Manga Canon",
    "Airdate": "2025-05-04T07:00:00.000Z"
  },
  {
    "#": 1129,
    "Title": "Kuma's Past - Better Off Dead in This World",
    "Type": "Manga Canon",
    "Airdate": "2025-05-18T07:00:00.000Z"
  },
  {
    "#": 1130,
    "Title": "A History Erased! God Valley of Despair",
    "Type": "Manga Canon",
    "Airdate": "2025-05-25T07:00:00.000Z"
  },
  {
    "#": 1131,
    "Title": "A Fleeting Moment of Happiness - Kumachi and Ginny",
    "Type": "Manga Canon",
    "Airdate": "2025-06-01T07:00:00.000Z"
  },
  {
    "#": 1132,
    "Title": "A Pledge to Ginny - Kuma Becomes a Father",
    "Type": "Manga Canon",
    "Airdate": "2025-06-08T07:00:00.000Z"
  },
  {
    "#": 1133,
    "Title": "To Save His Daughter - Kuma the Timid Pacifist",
    "Type": "Manga Canon",
    "Airdate": "2025-06-15T07:00:00.000Z"
  },
  {
    "#": 1134,
    "Title": "Cruel Fate - Kuma's Decision as a Father",
    "Type": "Manga Canon",
    "Airdate": "2025-06-29T07:00:00.000Z"
  },
  {
    "#": 1135,
    "Title": "To the Sea Where My Father is! The Future Bonney Chooses",
    "Type": "Manga Canon",
    "Airdate": "2025-07-06T07:00:00.000Z"
  },
  {
    "#": 1136,
    "Title": "Kuma's Life",
    "Type": "Manga Canon",
    "Airdate": "2025-07-13T07:00:00.000Z"
  },
  {
    "#": 1137,
    "Title": "I'm Sorry, Dad - Bonney's Tears and Kuma's Fist",
    "Type": "Manga Canon",
    "Airdate": "2025-07-27T07:00:00.000Z"
  },
  {
    "#": 1138,
    "Title": "Thank You, Dad - Bonney and Kuma's Warm Embrace",
    "Type": "Manga Canon",
    "Airdate": "2025-08-03T07:00:00.000Z"
  },
  {
    "#": 1139,
    "Title": "Destroy Egghead - The Buster Call is Invoked",
    "Type": "Manga Canon",
    "Airdate": "2025-08-10T07:00:00.000Z"
  },
  {
    "#": 1140,
    "Title": "An Admired Hero - The Warrior of Liberation Who Saves Bonney",
    "Type": "Manga Canon",
    "Airdate": "2025-08-17T07:00:00.000Z"
  },
  {
    "#": 1141,
    "Title": "Reliable Reinforcements! Dorry and Brogy Arrive!",
    "Type": "Manga Canon",
    "Airdate": "2025-08-24T07:00:00.000Z"
  },
  {
    "#": 1142,
    "Title": "Come in, World - Vegapunk's Message",
    "Type": "Manga Canon",
    "Airdate": "2025-09-07T07:00:00.000Z"
  },
  {
    "#": 1143,
    "Title": "Vegapunk's Secret Plan - A Tense Worldwide Broadcast",
    "Type": "Manga Canon",
    "Airdate": "2025-09-14T07:00:00.000Z"
  },
  {
    "#": 1144,
    "Title": "The Worst Nightmare - The Five Elders Come Together",
    "Type": "Manga Canon",
    "Airdate": "2025-09-21T07:00:00.000Z"
  },
  {
    "#": 1145,
    "Title": "Friends Fight Together! Luffy and the Warriors of Elbaph",
    "Type": "Manga Canon",
    "Airdate": "2025-09-28T07:00:00.000Z"
  },
  {
    "#": 1146,
    "Title": "An Imminent Threat - Stussy and Edison's Resolve",
    "Type": "Manga Canon",
    "Airdate": "2025-10-19T07:00:00.000Z"
  },
  {
    "#": 1147,
    "Title": "An Imminent Threat - Stussy and Edison's Resolve",
    "Type": "Manga Canon",
    "Airdate": "2025-10-19T07:00:00.000Z"
  },
  {
    "#": 1148,
    "Title": "An Imminent Threat - Stussy and Edison's Resolve",
    "Type": "Manga Canon",
    "Airdate": "2025-10-19T07:00:00.000Z"
  },
  {
    "#": 1149,
    "Title": "An Imminent Threat - Stussy and Edison's Resolve",
    "Type": "Manga Canon",
    "Airdate": "2025-10-19T07:00:00.000Z"
  },
  {
    "#": 1150,
    "Title": "An Imminent Threat - Stussy and Edison's Resolve",
    "Type": "Manga Canon",
    "Airdate": "2025-10-19T07:00:00.000Z"
  },
  {
    "#": 1151,
    "Title": "An Imminent Threat - Stussy and Edison's Resolve",
    "Type": "Manga Canon",
    "Airdate": "2025-10-19T07:00:00.000Z"
  },
  {
    "#": 1152,
    "Title": "An Imminent Threat - Stussy and Edison's Resolve",
    "Type": "Manga Canon",
    "Airdate": "2025-10-19T07:00:00.000Z"
  },
  {
    "#": 1153,
    "Title": "An Imminent Threat - Stussy and Edison's Resolve",
    "Type": "Manga Canon",
    "Airdate": "2025-10-19T07:00:00.000Z"
  },
  {
    "#": 1154,
    "Title": "An Imminent Threat - Stussy and Edison's Resolve",
    "Type": "Manga Canon",
    "Airdate": "2025-10-19T07:00:00.000Z"
  },
  {
    "#": 1155,
    "Title": "An Imminent Threat - Stussy and Edison's Resolve",
    "Type": "Manga Canon",
    "Airdate": "2025-10-19T07:00:00.000Z"
  },
  {
    "#": 1156,
    "Title": "An Imminent Threat - Stussy and Edison's Resolve",
    "Type": "Manga Canon",
    "Airdate": "2025-10-19T07:00:00.000Z"
  }
],

'GRE50KV36': //BLACK CLOVER
[ 
  {
    "#": 1,
    "Title": "Asta and Yuno",
    "Type": "Manga Canon",
    "Airdate": "2017-10-03T07:00:00.000Z"
  },
  {
    "#": 2,
    "Title": "A Young Man's Vow",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2017-10-10T07:00:00.000Z"
  },
  {
    "#": 3,
    "Title": "To the Royal Capital!",
    "Type": "Anime Canon",
    "Airdate": "2017-10-17T07:00:00.000Z"
  },
  {
    "#": 4,
    "Title": "The Magic Knights Entrance Exam",
    "Type": "Manga Canon",
    "Airdate": "2017-10-24T07:00:00.000Z"
  },
  {
    "#": 5,
    "Title": "The Road to the Wizard King",
    "Type": "Manga Canon",
    "Airdate": "2017-10-31T07:00:00.000Z"
  },
  {
    "#": 6,
    "Title": "The Black Bulls",
    "Type": "Manga Canon",
    "Airdate": "2017-11-07T08:00:00.000Z"
  },
  {
    "#": 7,
    "Title": "Another New Member",
    "Type": "Manga Canon",
    "Airdate": "2017-11-14T08:00:00.000Z"
  },
  {
    "#": 8,
    "Title": "Go! Go! My First Mission",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2017-11-21T08:00:00.000Z"
  },
  {
    "#": 9,
    "Title": "Beasts",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2017-11-28T08:00:00.000Z"
  },
  {
    "#": 10,
    "Title": "Guardians",
    "Type": "Manga Canon",
    "Airdate": "2017-12-05T08:00:00.000Z"
  },
  {
    "#": 11,
    "Title": "What Happened One Day in the Castle Town",
    "Type": "Manga Canon",
    "Airdate": "2017-12-12T08:00:00.000Z"
  },
  {
    "#": 12,
    "Title": "The Wizard King Saw",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2017-12-19T08:00:00.000Z"
  },
  {
    "#": 13,
    "Title": "The Wizard King Saw, Continued",
    "Type": "Anime Canon",
    "Airdate": "2017-12-26T08:00:00.000Z"
  },
  {
    "#": 14,
    "Title": "Dungeon",
    "Type": "Manga Canon",
    "Airdate": "2018-01-09T08:00:00.000Z"
  },
  {
    "#": 15,
    "Title": "The Diamond Mage",
    "Type": "Manga Canon",
    "Airdate": "2018-01-16T08:00:00.000Z"
  },
  {
    "#": 16,
    "Title": "Friends",
    "Type": "Manga Canon",
    "Airdate": "2018-01-23T08:00:00.000Z"
  },
  {
    "#": 17,
    "Title": "Destroyer",
    "Type": "Manga Canon",
    "Airdate": "2018-01-30T08:00:00.000Z"
  },
  {
    "#": 18,
    "Title": "Memories of You",
    "Type": "Manga Canon",
    "Airdate": "2018-02-06T08:00:00.000Z"
  },
  {
    "#": 19,
    "Title": "Destruction and Salvation",
    "Type": "Manga Canon",
    "Airdate": "2018-02-13T08:00:00.000Z"
  },
  {
    "#": 20,
    "Title": "Assembly at the Royal Capital",
    "Type": "Manga Canon",
    "Airdate": "2018-02-20T08:00:00.000Z"
  },
  {
    "#": 21,
    "Title": "Capital Riot",
    "Type": "Manga Canon",
    "Airdate": "2018-02-27T08:00:00.000Z"
  },
  {
    "#": 22,
    "Title": "Wild Magic Dance",
    "Type": "Manga Canon",
    "Airdate": "2018-03-06T08:00:00.000Z"
  },
  {
    "#": 23,
    "Title": "The King of the Crimson Lions",
    "Type": "Manga Canon",
    "Airdate": "2018-03-13T07:00:00.000Z"
  },
  {
    "#": 24,
    "Title": "Blackout",
    "Type": "Manga Canon",
    "Airdate": "2018-03-20T07:00:00.000Z"
  },
  {
    "#": 25,
    "Title": "Adversity",
    "Type": "Manga Canon",
    "Airdate": "2018-03-27T07:00:00.000Z"
  },
  {
    "#": 26,
    "Title": "Wounded Beasts",
    "Type": "Manga Canon",
    "Airdate": "2018-04-03T07:00:00.000Z"
  },
  {
    "#": 27,
    "Title": "Light",
    "Type": "Manga Canon",
    "Airdate": "2018-04-10T07:00:00.000Z"
  },
  {
    "#": 28,
    "Title": "The One I've Set My Heart On",
    "Type": "Manga Canon",
    "Airdate": "2018-04-17T07:00:00.000Z"
  },
  {
    "#": 29,
    "Title": "Path",
    "Type": "Filler",
    "Airdate": "2018-04-24T07:00:00.000Z"
  },
  {
    "#": 30,
    "Title": "The Mirror Mage",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2018-05-01T07:00:00.000Z"
  },
  {
    "#": 31,
    "Title": "Pursuit over the Snow",
    "Type": "Manga Canon",
    "Airdate": "2018-05-08T07:00:00.000Z"
  },
  {
    "#": 32,
    "Title": "Three-Leaf Sprouts",
    "Type": "Manga Canon",
    "Airdate": "2018-05-15T07:00:00.000Z"
  },
  {
    "#": 33,
    "Title": "To Help Somebody, Someday",
    "Type": "Manga Canon",
    "Airdate": "2018-05-22T07:00:00.000Z"
  },
  {
    "#": 34,
    "Title": "Light Magic vs. Dark Magic",
    "Type": "Manga Canon",
    "Airdate": "2018-05-29T07:00:00.000Z"
  },
  {
    "#": 35,
    "Title": "The Light of Judgement",
    "Type": "Manga Canon",
    "Airdate": "2018-06-05T07:00:00.000Z"
  },
  {
    "#": 36,
    "Title": "Three Eyes",
    "Type": "Manga Canon",
    "Airdate": "2018-06-12T07:00:00.000Z"
  },
  {
    "#": 37,
    "Title": "The One with No Magic",
    "Type": "Manga Canon",
    "Airdate": "2018-06-19T07:00:00.000Z"
  },
  {
    "#": 38,
    "Title": "The Magic Knight Captains Conference",
    "Type": "Manga Canon",
    "Airdate": "2018-06-26T07:00:00.000Z"
  },
  {
    "#": 39,
    "Title": "Three-Leaf Salute",
    "Type": "Manga Canon",
    "Airdate": "2018-07-03T07:00:00.000Z"
  },
  {
    "#": 40,
    "Title": "A Black Beach Story",
    "Type": "Manga Canon",
    "Airdate": "2018-07-10T07:00:00.000Z"
  },
  {
    "#": 41,
    "Title": "The Water Girl Grows Up",
    "Type": "Manga Canon",
    "Airdate": "2018-07-17T07:00:00.000Z"
  },
  {
    "#": 42,
    "Title": "The Underwater Temple",
    "Type": "Manga Canon",
    "Airdate": "2018-07-24T07:00:00.000Z"
  },
  {
    "#": 43,
    "Title": "Temple Battle Royale",
    "Type": "Manga Canon",
    "Airdate": "2018-07-31T07:00:00.000Z"
  },
  {
    "#": 44,
    "Title": "The Pointlessly Direct Fireball and the Wild Lightning",
    "Type": "Manga Canon",
    "Airdate": "2018-08-07T07:00:00.000Z"
  },
  {
    "#": 45,
    "Title": "The Guy Who Doesn't Know When to Quit",
    "Type": "Manga Canon",
    "Airdate": "2018-08-14T07:00:00.000Z"
  },
  {
    "#": 46,
    "Title": "Awakening",
    "Type": "Manga Canon",
    "Airdate": "2018-08-21T07:00:00.000Z"
  },
  {
    "#": 47,
    "Title": "The Only Weapon",
    "Type": "Manga Canon",
    "Airdate": "2018-08-28T07:00:00.000Z"
  },
  {
    "#": 48,
    "Title": "Despair vs. Hope",
    "Type": "Manga Canon",
    "Airdate": "2018-09-04T07:00:00.000Z"
  },
  {
    "#": 49,
    "Title": "Beyond Limits",
    "Type": "Manga Canon",
    "Airdate": "2018-09-11T07:00:00.000Z"
  },
  {
    "#": 50,
    "Title": "End of the Battle, End of Despair",
    "Type": "Manga Canon",
    "Airdate": "2018-09-18T07:00:00.000Z"
  },
  {
    "#": 51,
    "Title": "Proof of Rightness",
    "Type": "Manga Canon",
    "Airdate": "2018-09-25T07:00:00.000Z"
  },
  {
    "#": 52,
    "Title": "Whoever's Strongest Wins",
    "Type": "Manga Canon",
    "Airdate": "2018-10-02T07:00:00.000Z"
  },
  {
    "#": 53,
    "Title": "Behind the Mask",
    "Type": "Manga Canon",
    "Airdate": "2018-10-09T07:00:00.000Z"
  },
  {
    "#": 54,
    "Title": "Never Again",
    "Type": "Manga Canon",
    "Airdate": "2018-10-16T07:00:00.000Z"
  },
  {
    "#": 55,
    "Title": "The Man Named Fanzell",
    "Type": "Anime Canon",
    "Airdate": "2018-10-23T07:00:00.000Z"
  },
  {
    "#": 56,
    "Title": "The Man Named Fanzell Continued",
    "Type": "Anime Canon",
    "Airdate": "2018-10-30T07:00:00.000Z"
  },
  {
    "#": 57,
    "Title": "Infiltration",
    "Type": "Manga Canon",
    "Airdate": "2018-11-06T08:00:00.000Z"
  },
  {
    "#": 58,
    "Title": "The Battlefield Decision",
    "Type": "Manga Canon",
    "Airdate": "2018-11-13T08:00:00.000Z"
  },
  {
    "#": 59,
    "Title": "Flames of Hatred",
    "Type": "Manga Canon",
    "Airdate": "2018-11-20T08:00:00.000Z"
  },
  {
    "#": 60,
    "Title": "Defectors' Atonement",
    "Type": "Manga Canon",
    "Airdate": "2018-11-27T08:00:00.000Z"
  },
  {
    "#": 61,
    "Title": "The Promised World",
    "Type": "Manga Canon",
    "Airdate": "2018-12-04T08:00:00.000Z"
  },
  {
    "#": 62,
    "Title": "Bettering One Another",
    "Type": "Manga Canon",
    "Airdate": "2018-12-11T08:00:00.000Z"
  },
  {
    "#": 63,
    "Title": "Not in the Slightest",
    "Type": "Manga Canon",
    "Airdate": "2018-12-18T08:00:00.000Z"
  },
  {
    "#": 64,
    "Title": "The Red Thread of Fate",
    "Type": "Manga Canon",
    "Airdate": "2018-12-25T08:00:00.000Z"
  },
  {
    "#": 65,
    "Title": "I'm Home",
    "Type": "Manga Canon",
    "Airdate": "2019-01-08T08:00:00.000Z"
  },
  {
    "#": 66,
    "Title": "The Secret of the Eye of the Midnight Sun",
    "Type": "Filler",
    "Airdate": "2019-01-15T08:00:00.000Z"
  },
  {
    "#": 67,
    "Title": "A Fun Festival Double Date",
    "Type": "Manga Canon",
    "Airdate": "2019-01-22T08:00:00.000Z"
  },
  {
    "#": 68,
    "Title": "Battle to the Death?! Yami vs. Jack",
    "Type": "Filler",
    "Airdate": "2019-01-29T08:00:00.000Z"
  },
  {
    "#": 69,
    "Title": "The Briar Maiden's Melancholy",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2019-02-05T08:00:00.000Z"
  },
  {
    "#": 70,
    "Title": "Two New Stars",
    "Type": "Manga Canon",
    "Airdate": "2019-02-12T08:00:00.000Z"
  },
  {
    "#": 71,
    "Title": "The Uncrowned, Undefeated Lioness",
    "Type": "Manga Canon",
    "Airdate": "2019-02-19T08:00:00.000Z"
  },
  {
    "#": 72,
    "Title": "Saint Elmo's Fire",
    "Type": "Manga Canon",
    "Airdate": "2019-02-26T08:00:00.000Z"
  },
  {
    "#": 73,
    "Title": "The Royal Knights Selection Test",
    "Type": "Manga Canon",
    "Airdate": "2019-03-05T08:00:00.000Z"
  },
  {
    "#": 74,
    "Title": "Flower of Resolution",
    "Type": "Manga Canon",
    "Airdate": "2019-03-12T07:00:00.000Z"
  },
  {
    "#": 75,
    "Title": "Fierce Battle",
    "Type": "Manga Canon",
    "Airdate": "2019-03-19T07:00:00.000Z"
  },
  {
    "#": 76,
    "Title": "Mage X",
    "Type": "Manga Canon",
    "Airdate": "2019-03-26T07:00:00.000Z"
  },
  {
    "#": 77,
    "Title": "Bad Blood",
    "Type": "Manga Canon",
    "Airdate": "2019-04-02T07:00:00.000Z"
  },
  {
    "#": 78,
    "Title": "Peasant Trap",
    "Type": "Manga Canon",
    "Airdate": "2019-04-09T07:00:00.000Z"
  },
  {
    "#": 79,
    "Title": "Mister Delinquent vs. Muscle Brains",
    "Type": "Manga Canon",
    "Airdate": "2019-04-16T07:00:00.000Z"
  },
  {
    "#": 80,
    "Title": "Special Little Brother vs. Failed Big Brother",
    "Type": "Manga Canon",
    "Airdate": "2019-04-23T07:00:00.000Z"
  },
  {
    "#": 81,
    "Title": "The Life of a Certain Man",
    "Type": "Manga Canon",
    "Airdate": "2019-04-30T07:00:00.000Z"
  },
  {
    "#": 82,
    "Title": "Clover Clips: The Nightmarish Charmy Special!",
    "Type": "Filler",
    "Airdate": "2019-05-07T07:00:00.000Z"
  },
  {
    "#": 83,
    "Title": "Burn It into You",
    "Type": "Manga Canon",
    "Airdate": "2019-05-14T07:00:00.000Z"
  },
  {
    "#": 84,
    "Title": "The Victors",
    "Type": "Manga Canon",
    "Airdate": "2019-05-21T07:00:00.000Z"
  },
  {
    "#": 85,
    "Title": "Together in the Bath",
    "Type": "Manga Canon",
    "Airdate": "2019-05-28T07:00:00.000Z"
  },
  {
    "#": 86,
    "Title": "Yami and Vangeance",
    "Type": "Manga Canon",
    "Airdate": "2019-06-04T07:00:00.000Z"
  },
  {
    "#": 87,
    "Title": "Formation of the Royal Knights",
    "Type": "Manga Canon",
    "Airdate": "2019-06-11T07:00:00.000Z"
  },
  {
    "#": 88,
    "Title": "Storming the Eye of the Midnight Sun's Hideout!!!",
    "Type": "Manga Canon",
    "Airdate": "2019-06-18T07:00:00.000Z"
  },
  {
    "#": 89,
    "Title": "The Black Bull Hideout",
    "Type": "Manga Canon",
    "Airdate": "2019-06-25T07:00:00.000Z"
  },
  {
    "#": 90,
    "Title": "Crazy Magic Battle",
    "Type": "Manga Canon",
    "Airdate": "2019-07-02T07:00:00.000Z"
  },
  {
    "#": 91,
    "Title": "Mereoleona vs. Rhya the Disloyal",
    "Type": "Manga Canon",
    "Airdate": "2019-07-09T07:00:00.000Z"
  },
  {
    "#": 92,
    "Title": "The Wizard King vs. the Leader of the Eye of the Midnight Sun",
    "Type": "Manga Canon",
    "Airdate": "2019-07-16T07:00:00.000Z"
  },
  {
    "#": 93,
    "Title": "Julius Novachrono",
    "Type": "Manga Canon",
    "Airdate": "2019-07-23T07:00:00.000Z"
  },
  {
    "#": 94,
    "Title": "New Future",
    "Type": "Manga Canon",
    "Airdate": "2019-07-30T07:00:00.000Z"
  },
  {
    "#": 95,
    "Title": "Reincarnation",
    "Type": "Manga Canon",
    "Airdate": "2019-08-06T07:00:00.000Z"
  },
  {
    "#": 96,
    "Title": "The Black Bulls Captain vs. the Crimson Wild Rose",
    "Type": "Manga Canon",
    "Airdate": "2019-08-13T07:00:00.000Z"
  },
  {
    "#": 97,
    "Title": "Overwhelming Disadvantage",
    "Type": "Manga Canon",
    "Airdate": "2019-08-20T07:00:00.000Z"
  },
  {
    "#": 98,
    "Title": "The Sleeping Lion",
    "Type": "Manga Canon",
    "Airdate": "2019-08-27T07:00:00.000Z"
  },
  {
    "#": 99,
    "Title": "The Desperate Path Toward Survival",
    "Type": "Manga Canon",
    "Airdate": "2019-09-03T07:00:00.000Z"
  },
  {
    "#": 100,
    "Title": "We Won't Lose to You",
    "Type": "Manga Canon",
    "Airdate": "2019-09-10T07:00:00.000Z"
  },
  {
    "#": 101,
    "Title": "The Lives of the Village in the Sticks",
    "Type": "Manga Canon",
    "Airdate": "2019-09-17T07:00:00.000Z"
  },
  {
    "#": 102,
    "Title": "Two Miracles",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2019-09-24T07:00:00.000Z"
  },
  {
    "#": 103,
    "Title": "Release from Misfortune",
    "Type": "Manga Canon",
    "Airdate": "2019-10-01T07:00:00.000Z"
  },
  {
    "#": 104,
    "Title": "Lightning of Rage vs. Friends",
    "Type": "Manga Canon",
    "Airdate": "2019-10-08T07:00:00.000Z"
  },
  {
    "#": 105,
    "Title": "Smiles, Tears",
    "Type": "Manga Canon",
    "Airdate": "2019-10-15T07:00:00.000Z"
  },
  {
    "#": 106,
    "Title": "Path of Revenge, Path of Atonement",
    "Type": "Manga Canon",
    "Airdate": "2019-10-22T07:00:00.000Z"
  },
  {
    "#": 107,
    "Title": "The Battle for Clover Castle",
    "Type": "Manga Canon",
    "Airdate": "2019-10-29T07:00:00.000Z"
  },
  {
    "#": 108,
    "Title": "Battlefield Dancer",
    "Type": "Manga Canon",
    "Airdate": "2019-11-05T08:00:00.000Z"
  },
  {
    "#": 109,
    "Title": "Spatial Mage Brothers",
    "Type": "Manga Canon",
    "Airdate": "2019-11-12T08:00:00.000Z"
  },
  {
    "#": 110,
    "Title": "The Raging Bull Joins the Showdown!!",
    "Type": "Manga Canon",
    "Airdate": "2019-11-19T08:00:00.000Z"
  },
  {
    "#": 111,
    "Title": "The Eyes in the Mirror",
    "Type": "Manga Canon",
    "Airdate": "2019-11-26T08:00:00.000Z"
  },
  {
    "#": 112,
    "Title": "Humans Who Can Be Trusted",
    "Type": "Manga Canon",
    "Airdate": "2019-12-03T08:00:00.000Z"
  },
  {
    "#": 113,
    "Title": "Storming the Shadow Palace",
    "Type": "Manga Canon",
    "Airdate": "2019-12-10T08:00:00.000Z"
  },
  {
    "#": 114,
    "Title": "The Final Invaders",
    "Type": "Manga Canon",
    "Airdate": "2019-12-17T08:00:00.000Z"
  },
  {
    "#": 115,
    "Title": "Mastermind",
    "Type": "Manga Canon",
    "Airdate": "2019-12-24T08:00:00.000Z"
  },
  {
    "#": 116,
    "Title": "The Ultimate Natural Enemy",
    "Type": "Manga Canon",
    "Airdate": "2020-01-07T08:00:00.000Z"
  },
  {
    "#": 117,
    "Title": "Breaking the Seal",
    "Type": "Manga Canon",
    "Airdate": "2020-01-14T08:00:00.000Z"
  },
  {
    "#": 118,
    "Title": "A Reunion Across Time and Space",
    "Type": "Manga Canon",
    "Airdate": "2020-01-21T08:00:00.000Z"
  },
  {
    "#": 119,
    "Title": "The Final Attack",
    "Type": "Manga Canon",
    "Airdate": "2020-01-28T08:00:00.000Z"
  },
  {
    "#": 120,
    "Title": "Dawn",
    "Type": "Manga Canon",
    "Airdate": "2020-02-04T08:00:00.000Z"
  },
  {
    "#": 121,
    "Title": "Three Problems",
    "Type": "Manga Canon",
    "Airdate": "2020-02-11T08:00:00.000Z"
  },
  {
    "#": 122,
    "Title": "As Pitch Black as It Gets",
    "Type": "Manga Canon",
    "Airdate": "2020-02-18T08:00:00.000Z"
  },
  {
    "#": 123,
    "Title": "Nero Reminisces... Part One",
    "Type": "Filler",
    "Airdate": "2020-02-25T08:00:00.000Z"
  },
  {
    "#": 124,
    "Title": "Nero Reminisces... Part Two",
    "Type": "Filler",
    "Airdate": "2020-03-03T08:00:00.000Z"
  },
  {
    "#": 125,
    "Title": "Return",
    "Type": "Filler",
    "Airdate": "2020-03-10T07:00:00.000Z"
  },
  {
    "#": 126,
    "Title": "The Blue Rose's Confession",
    "Type": "Manga Canon",
    "Airdate": "2020-03-17T07:00:00.000Z"
  },
  {
    "#": 127,
    "Title": "Clues",
    "Type": "Manga Canon",
    "Airdate": "2020-03-24T07:00:00.000Z"
  },
  {
    "#": 128,
    "Title": "To the Heart Kingdom!",
    "Type": "Manga Canon",
    "Airdate": "2020-03-31T07:00:00.000Z"
  },
  {
    "#": 129,
    "Title": "The Devil Megicula",
    "Type": "Manga Canon",
    "Airdate": "2020-04-07T07:00:00.000Z"
  },
  {
    "#": 130,
    "Title": "The New Magic Knight Squad Captains' Meeting",
    "Type": "Anime Canon",
    "Airdate": "2020-04-14T07:00:00.000Z"
  },
  {
    "#": 131,
    "Title": "A New Resolve",
    "Type": "Filler",
    "Airdate": "2020-04-21T07:00:00.000Z"
  },
  {
    "#": 132,
    "Title": "The Lion Awakens",
    "Type": "Anime Canon",
    "Airdate": "2020-04-28T07:00:00.000Z"
  },
  {
    "#": 133,
    "Title": "The Lion Awakens, Continued",
    "Type": "Anime Canon",
    "Airdate": "2020-07-07T07:00:00.000Z"
  },
  {
    "#": 134,
    "Title": "Those Who Have Been Gathered",
    "Type": "Filler",
    "Airdate": "2020-07-14T07:00:00.000Z"
  },
  {
    "#": 135,
    "Title": "The One Who Has My Heart, My Mind, and Soul",
    "Type": "Filler",
    "Airdate": "2020-07-21T07:00:00.000Z"
  },
  {
    "#": 136,
    "Title": "A Black Deep-Sea Story",
    "Type": "Anime Canon",
    "Airdate": "2020-07-28T07:00:00.000Z"
  },
  {
    "#": 137,
    "Title": "Charmy's Century of Hunger, Gordon's Millennium of Loneliness",
    "Type": "Anime Canon",
    "Airdate": "2020-08-04T07:00:00.000Z"
  },
  {
    "#": 138,
    "Title": "In Zara's Footsteps",
    "Type": "Anime Canon",
    "Airdate": "2020-08-11T07:00:00.000Z"
  },
  {
    "#": 139,
    "Title": "A Witch's Homecoming",
    "Type": "Anime Canon",
    "Airdate": "2020-08-18T07:00:00.000Z"
  },
  {
    "#": 140,
    "Title": "A Favor for Julius",
    "Type": "Anime Canon",
    "Airdate": "2020-08-25T07:00:00.000Z"
  },
  {
    "#": 141,
    "Title": "The Golden Family",
    "Type": "Anime Canon",
    "Airdate": "2020-09-01T07:00:00.000Z"
  },
  {
    "#": 142,
    "Title": "Those Remaining",
    "Type": "Filler",
    "Airdate": "2020-09-08T07:00:00.000Z"
  },
  {
    "#": 143,
    "Title": "The Tilted Scale",
    "Type": "Filler",
    "Airdate": "2020-09-15T07:00:00.000Z"
  },
  {
    "#": 144,
    "Title": "Those Who Wish to Destroy Devils",
    "Type": "Filler",
    "Airdate": "2020-09-22T07:00:00.000Z"
  },
  {
    "#": 145,
    "Title": "Rescue",
    "Type": "Filler",
    "Airdate": "2020-09-29T07:00:00.000Z"
  },
  {
    "#": 146,
    "Title": "Those Who Worship Devils",
    "Type": "Filler",
    "Airdate": "2020-10-06T07:00:00.000Z"
  },
  {
    "#": 147,
    "Title": "Death",
    "Type": "Filler",
    "Airdate": "2020-10-13T07:00:00.000Z"
  },
  {
    "#": 148,
    "Title": "Become the Light That Illuminates the Darkness",
    "Type": "Filler",
    "Airdate": "2020-10-20T07:00:00.000Z"
  },
  {
    "#": 149,
    "Title": "Two Things to Look for",
    "Type": "Filler",
    "Airdate": "2020-10-27T07:00:00.000Z"
  },
  {
    "#": 150,
    "Title": "The Challenge of the Maidens",
    "Type": "Anime Canon",
    "Airdate": "2020-11-03T08:00:00.000Z"
  },
  {
    "#": 151,
    "Title": "Clash! Battle of the Magic Knight Captains!",
    "Type": "Anime Canon",
    "Airdate": "2020-11-10T08:00:00.000Z"
  },
  {
    "#": 152,
    "Title": "To Tomorrow!",
    "Type": "Anime Canon",
    "Airdate": "2020-11-17T08:00:00.000Z"
  },
  {
    "#": 153,
    "Title": "The Chosen Ones",
    "Type": "Anime Canon",
    "Airdate": "2020-11-24T08:00:00.000Z"
  },
  {
    "#": 154,
    "Title": "Vice-Captain Langris Vaude",
    "Type": "Anime Canon",
    "Airdate": "2020-12-01T08:00:00.000Z"
  },
  {
    "#": 155,
    "Title": "The 5 Spirit Guardians",
    "Type": "Anime Canon",
    "Airdate": "2020-12-08T08:00:00.000Z"
  },
  {
    "#": 156,
    "Title": "Awakening Power",
    "Type": "Anime Canon",
    "Airdate": "2020-12-15T08:00:00.000Z"
  },
  {
    "#": 157,
    "Title": "The Five-Leaf Clover",
    "Type": "Anime Canon",
    "Airdate": "2020-12-22T08:00:00.000Z"
  },
  {
    "#": 158,
    "Title": "The Beginning of Hope and Despair",
    "Type": "Manga Canon",
    "Airdate": "2021-01-05T08:00:00.000Z"
  },
  {
    "#": 159,
    "Title": "Quiet Lakes and Forest Shadows",
    "Type": "Manga Canon",
    "Airdate": "2021-01-12T08:00:00.000Z"
  },
  {
    "#": 160,
    "Title": "The Messenger from the Spade Kingdom",
    "Type": "Manga Canon",
    "Airdate": "2021-01-19T08:00:00.000Z"
  },
  {
    "#": 161,
    "Title": "Zeno's Power",
    "Type": "Manga Canon",
    "Airdate": "2021-01-26T08:00:00.000Z"
  },
  {
    "#": 162,
    "Title": "The Great War Breaks Out",
    "Type": "Manga Canon",
    "Airdate": "2021-02-02T08:00:00.000Z"
  },
  {
    "#": 163,
    "Title": "Dante vs. The Captain of the Black Bulls",
    "Type": "Manga Canon",
    "Airdate": "2021-02-09T08:00:00.000Z"
  },
  {
    "#": 164,
    "Title": "Battlefield: Heart Kingdom",
    "Type": "Manga Canon",
    "Airdate": "2021-02-16T08:00:00.000Z"
  },
  {
    "#": 165,
    "Title": "Water Crusade",
    "Type": "Manga Canon",
    "Airdate": "2021-02-23T08:00:00.000Z"
  },
  {
    "#": 166,
    "Title": "Captain Yami Sukehiro",
    "Type": "Manga Canon",
    "Airdate": "2021-03-02T08:00:00.000Z"
  },
  {
    "#": 167,
    "Title": "Black Oath",
    "Type": "Manga Canon",
    "Airdate": "2021-03-09T08:00:00.000Z"
  },
  {
    "#": 168,
    "Title": "Stirrings of the Strongest",
    "Type": "Manga Canon",
    "Airdate": "2021-03-16T07:00:00.000Z"
  },
  {
    "#": 169,
    "Title": "The Devil-Binding Ritual",
    "Type": "Manga Canon",
    "Airdate": "2021-03-23T07:00:00.000Z"
  },
  {
    "#": 170,
    "Title": "Faraway Future",
    "Type": "Manga Canon",
    "Airdate": "2021-03-30T07:00:00.000Z"
  }
],

'GYQ43P3E6': //BLACK BUTLER
[ 
  {
    "#": "S1 E1",
    "Title": "His Butler, Able",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2008-10-03T07:00:00.000Z"
  },
  {
    "#": "S1 E2",
    "Title": "His Butler, Strongest",
    "Type": "Manga Canon",
    "Airdate": "2008-10-10T07:00:00.000Z"
  },
  {
    "#": "S1 E3",
    "Title": "His Butler, Omnipotent",
    "Type": "Manga Canon",
    "Airdate": "2008-10-17T07:00:00.000Z"
  },
  {
    "#": "S1 E4",
    "Title": "His Butler, Capricious",
    "Type": "Manga Canon",
    "Airdate": "2008-10-24T07:00:00.000Z"
  },
  {
    "#": "S1 E5",
    "Title": "His Butler, Chance Encounter",
    "Type": "Manga Canon",
    "Airdate": "2008-10-31T07:00:00.000Z"
  },
  {
    "#": "S1 E6",
    "Title": "His Butler, at the Funeral",
    "Type": "Manga Canon",
    "Airdate": "2008-11-07T08:00:00.000Z"
  },
  {
    "#": "S1 E7",
    "Title": "His Butler, Merrymaking",
    "Type": "Filler",
    "Airdate": "2008-11-14T08:00:00.000Z"
  },
  {
    "#": "S1 E8",
    "Title": "His Butler, Training",
    "Type": "Filler",
    "Airdate": "2008-11-21T08:00:00.000Z"
  },
  {
    "#": "S1 E9",
    "Title": "His Butler, Phantom Image",
    "Type": "Filler",
    "Airdate": "2008-11-28T08:00:00.000Z"
  },
  {
    "#": "S1 E10",
    "Title": "His Butler, on Ice",
    "Type": "Filler",
    "Airdate": "2008-12-05T08:00:00.000Z"
  },
  {
    "#": "S1 E11",
    "Title": "His Butler, However You Please",
    "Type": "Filler",
    "Airdate": "2008-12-12T08:00:00.000Z"
  },
  {
    "#": "S1 E12",
    "Title": "His Butler, Forlorn",
    "Type": "Filler",
    "Airdate": "2008-12-19T08:00:00.000Z"
  },
  {
    "#": "S1 E13",
    "Title": "His Butler, Freeloader",
    "Type": "Manga Canon",
    "Airdate": "2008-12-26T08:00:00.000Z"
  },
  {
    "#": "S1 E14",
    "Title": "His Butler, Supremely Talented",
    "Type": "Manga Canon",
    "Airdate": "2009-01-16T08:00:00.000Z"
  },
  {
    "#": "S1 E15",
    "Title": "His Butler, Competing",
    "Type": "Manga Canon",
    "Airdate": "2009-01-23T08:00:00.000Z"
  },
  {
    "#": "S1 E16",
    "Title": "His Butler, in an Isolated Castle",
    "Type": "Filler",
    "Airdate": "2009-01-30T08:00:00.000Z"
  },
  {
    "#": "S1 E17",
    "Title": "His Butler, Offering",
    "Type": "Filler",
    "Airdate": "2009-02-06T08:00:00.000Z"
  },
  {
    "#": "S1 E18",
    "Title": "His Butler, Transmitted",
    "Type": "Filler",
    "Airdate": "2009-02-13T08:00:00.000Z"
  },
  {
    "#": "S1 E19",
    "Title": "His Butler, Imprisoned",
    "Type": "Filler",
    "Airdate": "2009-02-20T08:00:00.000Z"
  },
  {
    "#": "S1 E20",
    "Title": "His Butler, Escaping",
    "Type": "Filler",
    "Airdate": "2009-02-27T08:00:00.000Z"
  },
  {
    "#": "S1 E21",
    "Title": "His Butler, Engaging Servants",
    "Type": "Filler",
    "Airdate": "2009-03-06T08:00:00.000Z"
  },
  {
    "#": "S1 E22",
    "Title": "His Butler, Dissolution",
    "Type": "Filler",
    "Airdate": "2009-03-13T07:00:00.000Z"
  },
  {
    "#": "S1 E23",
    "Title": "His Butler, Up in Flames",
    "Type": "Filler",
    "Airdate": "2009-03-20T07:00:00.000Z"
  },
  {
    "#": "S1 E24",
    "Title": "His Butler, Fluent",
    "Type": "Filler",
    "Airdate": "2009-03-27T07:00:00.000Z"
  },
  {
    "#": "S1 E25",
    "Title": "His Butler, Performer",
    "Type": "Filler",
    "Airdate": "2009-04-03T07:00:00.000Z"
  },
  {
    "#": "S2 E1",
    "Title": "Clawed Butler",
    "Type": "Filler",
    "Airdate": "2010-07-02T07:00:00.000Z"
  },
  {
    "#": "S2 E2",
    "Title": "Solo Butler",
    "Type": "Filler",
    "Airdate": "2010-07-09T07:00:00.000Z"
  },
  {
    "#": "S2 E3",
    "Title": "Wench Butler",
    "Type": "Filler",
    "Airdate": "2010-07-16T07:00:00.000Z"
  },
  {
    "#": "S2 E4",
    "Title": "Terrorist Butler",
    "Type": "Filler",
    "Airdate": "2010-07-23T07:00:00.000Z"
  },
  {
    "#": "S2 E5",
    "Title": "Beacon Butler",
    "Type": "Filler",
    "Airdate": "2010-07-30T07:00:00.000Z"
  },
  {
    "#": "S2 E6",
    "Title": "Bedewed Butler",
    "Type": "Filler",
    "Airdate": "2010-08-06T07:00:00.000Z"
  },
  {
    "#": "S2 E7",
    "Title": "Deathly Butler",
    "Type": "Filler",
    "Airdate": "2017-08-13T07:00:00.000Z"
  },
  {
    "#": "S2 E8",
    "Title": "Divulging Butler",
    "Type": "Filler",
    "Airdate": "2010-08-20T07:00:00.000Z"
  },
  {
    "#": "S2 E9",
    "Title": "Hollow Butler",
    "Type": "Filler",
    "Airdate": "2010-08-27T07:00:00.000Z"
  },
  {
    "#": "S2 E10",
    "Title": "Zero Butler",
    "Type": "Filler",
    "Airdate": "2010-09-03T07:00:00.000Z"
  },
  {
    "#": "S2 E11",
    "Title": "Crossroads Butler",
    "Type": "Filler",
    "Airdate": "2010-09-10T07:00:00.000Z"
  },
  {
    "#": "S2 E12",
    "Title": "Black Butler",
    "Type": "Filler",
    "Airdate": "2010-09-17T07:00:00.000Z"
  },
  {
    "#": "S3 E1",
    "Title": "His Butler, Presenting",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2014-07-11T07:00:00.000Z"
  },
  {
    "#": "S3 E2",
    "Title": "His Butler, Taking the Stage",
    "Type": "Manga Canon",
    "Airdate": "2014-07-18T07:00:00.000Z"
  },
  {
    "#": "S3 E3",
    "Title": "His Butler, Hired",
    "Type": "Manga Canon",
    "Airdate": "2014-07-25T07:00:00.000Z"
  },
  {
    "#": "S3 E4",
    "Title": "His Butler, Colleague",
    "Type": "Manga Canon",
    "Airdate": "2014-08-01T07:00:00.000Z"
  },
  {
    "#": "S3 E5",
    "Title": "His Butler, Taking Flight",
    "Type": "Manga Canon",
    "Airdate": "2014-08-08T07:00:00.000Z"
  },
  {
    "#": "S3 E6",
    "Title": "His Butler, Liaison",
    "Type": "Manga Canon",
    "Airdate": "2014-08-15T07:00:00.000Z"
  },
  {
    "#": "S3 E7",
    "Title": "His Butler, Careful Tending",
    "Type": "Manga Canon",
    "Airdate": "2014-08-22T07:00:00.000Z"
  },
  {
    "#": "S3 E8",
    "Title": "His Butler, Sneering",
    "Type": "Manga Canon",
    "Airdate": "2014-08-29T07:00:00.000Z"
  },
  {
    "#": "S3 E9",
    "Title": "His Butler, Serene",
    "Type": "Manga Canon",
    "Airdate": "2014-09-05T07:00:00.000Z"
  },
  {
    "#": "S3 E10",
    "Title": "His Butler, Fulfilling His Duty",
    "Type": "Manga Canon",
    "Airdate": "2014-09-12T07:00:00.000Z"
  },
  {
    "#": "S4 E1",
    "Title": "His Butler, ",
    "Type": "Manga Canon",
    "Airdate": "2014-09-19T07:00:00.000Z"
  },
  {
    "#": "S4 E2",
    "Title": "His Butler, ",
    "Type": "Manga Canon",
    "Airdate": "2014-09-26T07:00:00.000Z"
  },
  {
    "#": "S4 E3",
    "Title": "His Butler, ",
    "Type": "Manga Canon",
    "Airdate": "2014-10-03T07:00:00.000Z"
  },
  {
    "#": "S4 E4",
    "Title": "His Butler, ",
    "Type": "Manga Canon",
    "Airdate": "2014-10-10T07:00:00.000Z"
  },
  {
    "#": "S4 E5",
    "Title": "His Butler, ",
    "Type": "Manga Canon",
    "Airdate": "2014-10-17T07:00:00.000Z"
  },
  {
    "#": "S4 E6",
    "Title": "His Butler, ",
    "Type": "Manga Canon",
    "Airdate": "2014-10-24T07:00:00.000Z"
  },
  {
    "#": "S4 E7",
    "Title": "His Butler, ",
    "Type": "Manga Canon",
    "Airdate": "2014-10-31T07:00:00.000Z"
  },
  {
    "#": "S4 E8",
    "Title": "His Butler, ",
    "Type": "Manga Canon",
    "Airdate": "2014-11-07T08:00:00.000Z"
  },
  {
    "#": "S4 E9",
    "Title": "His Butler, ",
    "Type": "Manga Canon",
    "Airdate": "2014-11-14T08:00:00.000Z"
  },
  {
    "#": "S4 E10",
    "Title": "His Butler, ",
    "Type": "Manga Canon",
    "Airdate": "2014-11-21T08:00:00.000Z"
  },
  {
    "#": "S4 E11",
    "Title": "His Butler, ",
    "Type": "Manga Canon",
    "Airdate": "2014-11-28T08:00:00.000Z"
  },
  {
    "#": "S4 E12",
    "Title": "His Butler, ",
    "Type": "Manga Canon",
    "Airdate": "2014-12-05T08:00:00.000Z"
  },
  {
    "#": "S4 E13",
    "Title": "His Butler, ",
    "Type": "Manga Canon",
    "Airdate": "2014-12-12T08:00:00.000Z"
  }
],

'G6NQ5DWZ6': //MY HERO ACADEMIA
[
  {
    "#": 1,
    "Title": "Izuku Midoriya: Origin",
    "Type": "Manga Canon",
    "Airdate": "2016-04-03T07:00:00.000Z"
  },
  {
    "#": 2,
    "Title": "What It Takes To Be a Hero",
    "Type": "Manga Canon",
    "Airdate": "2016-04-10T07:00:00.000Z"
  },
  {
    "#": 3,
    "Title": "Roaring Muscles",
    "Type": "Manga Canon",
    "Airdate": "2016-04-17T07:00:00.000Z"
  },
  {
    "#": 4,
    "Title": "Start Line",
    "Type": "Manga Canon",
    "Airdate": "2016-04-24T07:00:00.000Z"
  },
  {
    "#": 5,
    "Title": "What I Can Do for Now",
    "Type": "Manga Canon",
    "Airdate": "2016-05-01T07:00:00.000Z"
  },
  {
    "#": 6,
    "Title": "Rage, You Damn Nerd",
    "Type": "Manga Canon",
    "Airdate": "2016-05-08T07:00:00.000Z"
  },
  {
    "#": 7,
    "Title": "Deku vs. Kacchan",
    "Type": "Manga Canon",
    "Airdate": "2016-05-15T07:00:00.000Z"
  },
  {
    "#": 8,
    "Title": "Bakugo's Start Line",
    "Type": "Manga Canon",
    "Airdate": "2016-05-22T07:00:00.000Z"
  },
  {
    "#": 9,
    "Title": "Yeah, Just Do Your Best, Iida!",
    "Type": "Manga Canon",
    "Airdate": "2016-05-29T07:00:00.000Z"
  },
  {
    "#": 10,
    "Title": "Encounter With the Unknown",
    "Type": "Manga Canon",
    "Airdate": "2016-06-05T07:00:00.000Z"
  },
  {
    "#": 11,
    "Title": "Game Over",
    "Type": "Manga Canon",
    "Airdate": "2016-06-12T07:00:00.000Z"
  },
  {
    "#": 12,
    "Title": "All Might",
    "Type": "Manga Canon",
    "Airdate": "2016-06-19T07:00:00.000Z"
  },
  {
    "#": 13,
    "Title": "In Each of Our Hearts",
    "Type": "Manga Canon",
    "Airdate": "2016-06-26T07:00:00.000Z"
  },
  {
    "#": 14,
    "Title": "That's the Idea, Ochaco",
    "Type": "Manga Canon",
    "Airdate": "2017-04-01T07:00:00.000Z"
  },
  {
    "#": 15,
    "Title": "Roaring Sports Festival",
    "Type": "Manga Canon",
    "Airdate": "2017-04-08T07:00:00.000Z"
  },
  {
    "#": 16,
    "Title": "In Their Own Quirky Ways",
    "Type": "Manga Canon",
    "Airdate": "2017-04-15T07:00:00.000Z"
  },
  {
    "#": 17,
    "Title": "Strategy, Strategy, Strategy",
    "Type": "Manga Canon",
    "Airdate": "2017-04-22T07:00:00.000Z"
  },
  {
    "#": 18,
    "Title": "Cavalry Battle Finale",
    "Type": "Manga Canon",
    "Airdate": "2017-04-29T07:00:00.000Z"
  },
  {
    "#": 19,
    "Title": "The Boy Born With Everything",
    "Type": "Manga Canon",
    "Airdate": "2017-05-06T07:00:00.000Z"
  },
  {
    "#": 20,
    "Title": "Victory or Defeat",
    "Type": "Manga Canon",
    "Airdate": "2017-05-13T07:00:00.000Z"
  },
  {
    "#": 21,
    "Title": "Battle on, Challengers!",
    "Type": "Manga Canon",
    "Airdate": "2017-05-20T07:00:00.000Z"
  },
  {
    "#": 22,
    "Title": "Bakugo vs. Uraraka",
    "Type": "Manga Canon",
    "Airdate": "2017-05-27T07:00:00.000Z"
  },
  {
    "#": 23,
    "Title": "Shoto Todoroki: Origin",
    "Type": "Manga Canon",
    "Airdate": "2017-06-03T07:00:00.000Z"
  },
  {
    "#": 24,
    "Title": "Fight on, Iida",
    "Type": "Manga Canon",
    "Airdate": "2017-06-10T07:00:00.000Z"
  },
  {
    "#": 25,
    "Title": "Todoroki vs. Bakugo",
    "Type": "Manga Canon",
    "Airdate": "2017-06-17T07:00:00.000Z"
  },
  {
    "#": 26,
    "Title": "Time To Pick Some Names",
    "Type": "Manga Canon",
    "Airdate": "2017-06-24T07:00:00.000Z"
  },
  {
    "#": 27,
    "Title": "Bizarre! Gran Torino Appears",
    "Type": "Manga Canon",
    "Airdate": "2017-07-08T07:00:00.000Z"
  },
  {
    "#": 28,
    "Title": "Midoriya and Shigaraki",
    "Type": "Manga Canon",
    "Airdate": "2017-07-15T07:00:00.000Z"
  },
  {
    "#": 29,
    "Title": "Hero Killer: Stain vs. U.A. Students",
    "Type": "Manga Canon",
    "Airdate": "2017-07-22T07:00:00.000Z"
  },
  {
    "#": 30,
    "Title": "Climax",
    "Type": "Manga Canon",
    "Airdate": "2017-07-29T07:00:00.000Z"
  },
  {
    "#": 31,
    "Title": "The Aftermath of Hero Killer: Stain",
    "Type": "Manga Canon",
    "Airdate": "2017-08-05T07:00:00.000Z"
  },
  {
    "#": 32,
    "Title": "Everyone's Internships",
    "Type": "Anime Canon",
    "Airdate": "2017-08-12T07:00:00.000Z"
  },
  {
    "#": 33,
    "Title": "Listen Up!! A Tale From the Past",
    "Type": "Manga Canon",
    "Airdate": "2017-08-19T07:00:00.000Z"
  },
  {
    "#": 34,
    "Title": "Gear up for Final Exams",
    "Type": "Manga Canon",
    "Airdate": "2017-09-02T07:00:00.000Z"
  },
  {
    "#": 35,
    "Title": "Yaoyorozu: Rising",
    "Type": "Manga Canon",
    "Airdate": "2017-09-09T07:00:00.000Z"
  },
  {
    "#": 36,
    "Title": "Stripping the Varnish",
    "Type": "Manga Canon",
    "Airdate": "2017-09-16T07:00:00.000Z"
  },
  {
    "#": 37,
    "Title": "Katsuki Bakugo: Origin",
    "Type": "Manga Canon",
    "Airdate": "2017-09-23T07:00:00.000Z"
  },
  {
    "#": 38,
    "Title": "Encounter",
    "Type": "Manga Canon",
    "Airdate": "2017-09-30T07:00:00.000Z"
  },
  {
    "#": 39,
    "Title": "Game Start",
    "Type": "Filler",
    "Airdate": "2018-04-07T07:00:00.000Z"
  },
  {
    "#": 40,
    "Title": "Wild, Wild Pussycats",
    "Type": "Manga Canon",
    "Airdate": "2018-04-14T07:00:00.000Z"
  },
  {
    "#": 41,
    "Title": "Kota",
    "Type": "Manga Canon",
    "Airdate": "2018-04-21T07:00:00.000Z"
  },
  {
    "#": 42,
    "Title": "My Hero",
    "Type": "Manga Canon",
    "Airdate": "2018-04-28T07:00:00.000Z"
  },
  {
    "#": 43,
    "Title": "Drive It Home, Iron Fist!!!",
    "Type": "Manga Canon",
    "Airdate": "2018-05-05T07:00:00.000Z"
  },
  {
    "#": 44,
    "Title": "Roaring Upheaval",
    "Type": "Manga Canon",
    "Airdate": "2018-05-12T07:00:00.000Z"
  },
  {
    "#": 45,
    "Title": "What a Twist!",
    "Type": "Manga Canon",
    "Airdate": "2018-05-19T07:00:00.000Z"
  },
  {
    "#": 46,
    "Title": "From Iida to Midoriya",
    "Type": "Manga Canon",
    "Airdate": "2018-05-26T07:00:00.000Z"
  },
  {
    "#": 47,
    "Title": "All For One",
    "Type": "Manga Canon",
    "Airdate": "2018-06-02T07:00:00.000Z"
  },
  {
    "#": 48,
    "Title": "Symbol of Peace",
    "Type": "Manga Canon",
    "Airdate": "2018-06-09T07:00:00.000Z"
  },
  {
    "#": 49,
    "Title": "One For All",
    "Type": "Manga Canon",
    "Airdate": "2018-06-16T07:00:00.000Z"
  },
  {
    "#": 50,
    "Title": "End of the Beginning, Beginning of the End",
    "Type": "Manga Canon",
    "Airdate": "2018-06-23T07:00:00.000Z"
  },
  {
    "#": 51,
    "Title": "Moving Into Dorms",
    "Type": "Manga Canon",
    "Airdate": "2018-06-30T07:00:00.000Z"
  },
  {
    "#": 52,
    "Title": "Create Those Ultimate Moves",
    "Type": "Manga Canon",
    "Airdate": "2018-07-14T07:00:00.000Z"
  },
  {
    "#": 53,
    "Title": "The Test",
    "Type": "Manga Canon",
    "Airdate": "2018-07-21T07:00:00.000Z"
  },
  {
    "#": 54,
    "Title": "Shiketsu High Lurking",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2018-07-28T07:00:00.000Z"
  },
  {
    "#": 55,
    "Title": "Class 1-A",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2018-08-04T07:00:00.000Z"
  },
  {
    "#": 56,
    "Title": "RUSH!",
    "Type": "Manga Canon",
    "Airdate": "2018-08-11T07:00:00.000Z"
  },
  {
    "#": 57,
    "Title": "Rescue Exercises",
    "Type": "Manga Canon",
    "Airdate": "2018-08-18T07:00:00.000Z"
  },
  {
    "#": 58,
    "Title": "Special Episode: Save the World With Love!",
    "Type": "Filler",
    "Airdate": "2018-08-25T07:00:00.000Z"
  },
  {
    "#": 59,
    "Title": "What's the Big Idea?",
    "Type": "Manga Canon",
    "Airdate": "2018-09-01T07:00:00.000Z"
  },
  {
    "#": 60,
    "Title": "A Talk About Your Quirk",
    "Type": "Manga Canon",
    "Airdate": "2018-09-08T07:00:00.000Z"
  },
  {
    "#": 61,
    "Title": "Deku vs. Kacchan, Part 2",
    "Type": "Manga Canon",
    "Airdate": "2018-09-15T07:00:00.000Z"
  },
  {
    "#": 62,
    "Title": "A Season for Encounters",
    "Type": "Manga Canon",
    "Airdate": "2018-09-22T07:00:00.000Z"
  },
  {
    "#": 63,
    "Title": "Unrivaled",
    "Type": "Manga Canon",
    "Airdate": "2018-09-29T07:00:00.000Z"
  },
  {
    "#": 64,
    "Title": "The Scoop on U.A. Class 1-A",
    "Type": "Filler",
    "Airdate": "2019-10-12T07:00:00.000Z"
  },
  {
    "#": 65,
    "Title": "Overhaul",
    "Type": "Manga Canon",
    "Airdate": "2019-10-19T07:00:00.000Z"
  },
  {
    "#": 66,
    "Title": "Boy Meets...",
    "Type": "Manga Canon",
    "Airdate": "2019-10-26T07:00:00.000Z"
  },
  {
    "#": 67,
    "Title": "Fighting Fate",
    "Type": "Manga Canon",
    "Airdate": "2019-11-09T08:00:00.000Z"
  },
  {
    "#": 68,
    "Title": "Let's Go, Gutsy Red Riot",
    "Type": "Manga Canon",
    "Airdate": "2019-11-16T08:00:00.000Z"
  },
  {
    "#": 69,
    "Title": "An Unpleasant Talk",
    "Type": "Manga Canon",
    "Airdate": "2019-11-23T08:00:00.000Z"
  },
  {
    "#": 70,
    "Title": "GO!!",
    "Type": "Manga Canon",
    "Airdate": "2019-11-30T08:00:00.000Z"
  },
  {
    "#": 71,
    "Title": "Suneater of the Big Three",
    "Type": "Manga Canon",
    "Airdate": "2019-12-07T08:00:00.000Z"
  },
  {
    "#": 72,
    "Title": "Red Riot",
    "Type": "Manga Canon",
    "Airdate": "2019-12-14T08:00:00.000Z"
  },
  {
    "#": 73,
    "Title": "Temp Squad",
    "Type": "Manga Canon",
    "Airdate": "2019-12-21T08:00:00.000Z"
  },
  {
    "#": 74,
    "Title": "Lemillion",
    "Type": "Manga Canon",
    "Airdate": "2019-12-28T08:00:00.000Z"
  },
  {
    "#": 75,
    "Title": "Unforeseen Hope",
    "Type": "Manga Canon",
    "Airdate": "2020-01-04T08:00:00.000Z"
  },
  {
    "#": 76,
    "Title": "Infinite 100%",
    "Type": "Manga Canon",
    "Airdate": "2020-01-11T08:00:00.000Z"
  },
  {
    "#": 77,
    "Title": "Bright Future",
    "Type": "Manga Canon",
    "Airdate": "2020-01-18T08:00:00.000Z"
  },
  {
    "#": 78,
    "Title": "Smoldering Flames",
    "Type": "Manga Canon",
    "Airdate": "2020-01-25T08:00:00.000Z"
  },
  {
    "#": 79,
    "Title": "Win Those Kids' Hearts",
    "Type": "Manga Canon",
    "Airdate": "2020-02-01T08:00:00.000Z"
  },
  {
    "#": 80,
    "Title": "Relief for License Trainees",
    "Type": "Manga Canon",
    "Airdate": "2020-02-08T08:00:00.000Z"
  },
  {
    "#": 81,
    "Title": "School Festival",
    "Type": "Manga Canon",
    "Airdate": "2020-02-15T08:00:00.000Z"
  },
  {
    "#": 82,
    "Title": "Prepping for the School Festival Is the Most Fun Part",
    "Type": "Manga Canon",
    "Airdate": "2020-02-22T08:00:00.000Z"
  },
  {
    "#": 83,
    "Title": "Gold Tips Imperial",
    "Type": "Manga Canon",
    "Airdate": "2020-02-29T08:00:00.000Z"
  },
  {
    "#": 84,
    "Title": "Deku vs. Gentle Criminal",
    "Type": "Manga Canon",
    "Airdate": "2020-03-07T08:00:00.000Z"
  },
  {
    "#": 85,
    "Title": "School Festival Start!!",
    "Type": "Manga Canon",
    "Airdate": "2020-03-14T07:00:00.000Z"
  },
  {
    "#": 86,
    "Title": "Let It Flow! School Festival!",
    "Type": "Manga Canon",
    "Airdate": "2020-03-21T07:00:00.000Z"
  },
  {
    "#": 87,
    "Title": "Japanese Hero Billboard Chart",
    "Type": "Manga Canon",
    "Airdate": "2020-03-28T07:00:00.000Z"
  },
  {
    "#": 88,
    "Title": "His Start",
    "Type": "Manga Canon",
    "Airdate": "2020-04-04T07:00:00.000Z"
  },
  {
    "#": 89,
    "Title": "All Hands on Deck! Class 1-A",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2021-03-27T07:00:00.000Z"
  },
  {
    "#": 90,
    "Title": "Vestiges",
    "Type": "Manga Canon",
    "Airdate": "2021-04-03T07:00:00.000Z"
  },
  {
    "#": 91,
    "Title": "Clash! Class A vs. Class B!",
    "Type": "Manga Canon",
    "Airdate": "2021-04-10T07:00:00.000Z"
  },
  {
    "#": 92,
    "Title": "Make It Happen, Shinso!",
    "Type": "Manga Canon",
    "Airdate": "2021-04-17T07:00:00.000Z"
  },
  {
    "#": 93,
    "Title": "Operation New Improv Moves",
    "Type": "Manga Canon",
    "Airdate": "2021-04-24T07:00:00.000Z"
  },
  {
    "#": 94,
    "Title": "Foresight",
    "Type": "Manga Canon",
    "Airdate": "2021-05-01T07:00:00.000Z"
  },
  {
    "#": 95,
    "Title": "Match 3",
    "Type": "Manga Canon",
    "Airdate": "2021-05-08T07:00:00.000Z"
  },
  {
    "#": 96,
    "Title": "Match 3 Conclusion",
    "Type": "Manga Canon",
    "Airdate": "2021-05-15T07:00:00.000Z"
  },
  {
    "#": 97,
    "Title": "Early Bird!",
    "Type": "Manga Canon",
    "Airdate": "2021-05-22T07:00:00.000Z"
  },
  {
    "#": 98,
    "Title": "That Which Is Inherited",
    "Type": "Manga Canon",
    "Airdate": "2021-05-29T07:00:00.000Z"
  },
  {
    "#": 99,
    "Title": "Our Brawl",
    "Type": "Manga Canon",
    "Airdate": "2021-06-05T07:00:00.000Z"
  },
  {
    "#": 100,
    "Title": "The New Power and All For One",
    "Type": "Manga Canon",
    "Airdate": "2021-06-12T07:00:00.000Z"
  },
  {
    "#": 101,
    "Title": "Have a Merry Christmas!",
    "Type": "Manga Canon",
    "Airdate": "2021-06-19T07:00:00.000Z"
  },
  {
    "#": 102,
    "Title": "Off to Endeavor's Agency!",
    "Type": "Manga Canon",
    "Airdate": "2021-06-26T07:00:00.000Z"
  },
  {
    "#": 103,
    "Title": "One Thing at a Time",
    "Type": "Manga Canon",
    "Airdate": "2021-07-10T07:00:00.000Z"
  },
  {
    "#": 104,
    "Title": "Long Time No See, Selkie",
    "Type": "Filler",
    "Airdate": "2021-07-17T07:00:00.000Z"
  },
  {
    "#": 105,
    "Title": "The Hellish Todoroki Family",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2021-07-24T07:00:00.000Z"
  },
  {
    "#": 106,
    "Title": "The Unforgiven",
    "Type": "Manga Canon",
    "Airdate": "2021-07-31T07:00:00.000Z"
  },
  {
    "#": 107,
    "Title": "More of a Hero Than Anyone",
    "Type": "Manga Canon",
    "Airdate": "2021-08-14T07:00:00.000Z"
  },
  {
    "#": 108,
    "Title": "My Villain Academia",
    "Type": "Manga Canon",
    "Airdate": "2021-08-21T07:00:00.000Z"
  },
  {
    "#": 109,
    "Title": "Revival Party",
    "Type": "Manga Canon",
    "Airdate": "2021-08-28T07:00:00.000Z"
  },
  {
    "#": 110,
    "Title": "Sad Man's Parade",
    "Type": "Manga Canon",
    "Airdate": "2021-09-04T07:00:00.000Z"
  },
  {
    "#": 111,
    "Title": "Tenko Shimura: Origin",
    "Type": "Manga Canon",
    "Airdate": "2021-09-11T07:00:00.000Z"
  },
  {
    "#": 112,
    "Title": "Tomura Shigaraki: Origin",
    "Type": "Manga Canon",
    "Airdate": "2021-09-18T07:00:00.000Z"
  },
  {
    "#": 113,
    "Title": "The High, Deep Blue Sky",
    "Type": "Manga Canon",
    "Airdate": "2021-09-25T07:00:00.000Z"
  },
  {
    "#": 114,
    "Title": "A Quiet Beginning",
    "Type": "Manga Canon",
    "Airdate": "2022-10-01T07:00:00.000Z"
  },
  {
    "#": 115,
    "Title": "Mirko, the No. 5 Hero",
    "Type": "Manga Canon",
    "Airdate": "2022-10-08T07:00:00.000Z"
  },
  {
    "#": 116,
    "Title": "One's Justice",
    "Type": "Manga Canon",
    "Airdate": "2022-10-15T07:00:00.000Z"
  },
  {
    "#": 117,
    "Title": "Inheritance",
    "Type": "Manga Canon",
    "Airdate": "2022-10-22T07:00:00.000Z"
  },
  {
    "#": 118,
    "Title": "The Thrill of Destruction",
    "Type": "Manga Canon",
    "Airdate": "2022-10-29T07:00:00.000Z"
  },
  {
    "#": 119,
    "Title": "Encounter, Part 2",
    "Type": "Manga Canon",
    "Airdate": "2022-11-05T07:00:00.000Z"
  },
  {
    "#": 120,
    "Title": "Disaster Walker",
    "Type": "Manga Canon",
    "Airdate": "2022-11-12T08:00:00.000Z"
  },
  {
    "#": 121,
    "Title": "League of Villains vs. U.A. Students",
    "Type": "Manga Canon",
    "Airdate": "2022-11-19T08:00:00.000Z"
  },
  {
    "#": 122,
    "Title": "Katsuki Bakugo: Rising",
    "Type": "Manga Canon",
    "Airdate": "2022-11-26T08:00:00.000Z"
  },
  {
    "#": 123,
    "Title": "The Ones Within Us",
    "Type": "Manga Canon",
    "Airdate": "2022-12-03T08:00:00.000Z"
  },
  {
    "#": 124,
    "Title": "Dabi's Dance",
    "Type": "Manga Canon",
    "Airdate": "2022-12-10T08:00:00.000Z"
  },
  {
    "#": 125,
    "Title": "Threads of Hope",
    "Type": "Manga Canon",
    "Airdate": "2022-12-17T08:00:00.000Z"
  },
  {
    "#": 126,
    "Title": "Final Performance",
    "Type": "Manga Canon",
    "Airdate": "2022-12-24T08:00:00.000Z"
  },
  {
    "#": 127,
    "Title": "Hellish Hell",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2023-01-07T08:00:00.000Z"
  },
  {
    "#": 128,
    "Title": "Tartarus",
    "Type": "Manga Canon",
    "Airdate": "2023-01-14T08:00:00.000Z"
  },
  {
    "#": 129,
    "Title": "The Hellish Todoroki Family, Part 2",
    "Type": "Manga Canon",
    "Airdate": "2023-01-21T08:00:00.000Z"
  },
  {
    "#": 130,
    "Title": "The Wrong Way To Put Out a Fire",
    "Type": "Manga Canon",
    "Airdate": "2023-01-28T08:00:00.000Z"
  },
  {
    "#": 131,
    "Title": "Izuku Midoriya and Tomura Shigaraki",
    "Type": "Manga Canon",
    "Airdate": "2023-02-04T08:00:00.000Z"
  },
  {
    "#": 132,
    "Title": "Full Power!!",
    "Type": "Manga Canon",
    "Airdate": "2023-02-11T08:00:00.000Z"
  },
  {
    "#": 133,
    "Title": "Hired Gun",
    "Type": "Manga Canon",
    "Airdate": "2023-02-18T08:00:00.000Z"
  },
  {
    "#": 134,
    "Title": "The Lovely Lady Nagant",
    "Type": "Manga Canon",
    "Airdate": "2023-02-25T08:00:00.000Z"
  },
  {
    "#": 135,
    "Title": "Friend",
    "Type": "Manga Canon",
    "Airdate": "2023-03-04T08:00:00.000Z"
  },
  {
    "#": 136,
    "Title": "Deku vs. Class A",
    "Type": "Manga Canon",
    "Airdate": "2023-03-11T08:00:00.000Z"
  },
  {
    "#": 137,
    "Title": "A Young Woman's Declaration",
    "Type": "Manga Canon",
    "Airdate": "2023-03-18T07:00:00.000Z"
  },
  {
    "#": 138,
    "Title": "No Man Is an Island",
    "Type": "Manga Canon",
    "Airdate": "2023-03-25T07:00:00.000Z"
  },
  {
    "#": 139,
    "Title": "In the Nick of Time! A Big-Time Maverick From the West!",
    "Type": "Manga Canon",
    "Airdate": "2024-05-04T07:00:00.000Z"
  },
  {
    "#": 140,
    "Title": "Specter",
    "Type": "Manga Canon",
    "Airdate": "2024-05-11T07:00:00.000Z"
  },
  {
    "#": 141,
    "Title": "Villain",
    "Type": "Manga Canon",
    "Airdate": "2024-05-18T07:00:00.000Z"
  },
  {
    "#": 142,
    "Title": "The Story of How We All Became Heroes",
    "Type": "Manga Canon",
    "Airdate": "2024-05-25T07:00:00.000Z"
  },
  {
    "#": 143,
    "Title": "Let You Down",
    "Type": "Manga Canon",
    "Airdate": "2024-06-01T07:00:00.000Z"
  },
  {
    "#": 144,
    "Title": "Division",
    "Type": "Manga Canon",
    "Airdate": "2024-06-08T07:00:00.000Z"
  },
  {
    "#": 145,
    "Title": "Inflation",
    "Type": "Manga Canon",
    "Airdate": "2024-06-15T07:00:00.000Z"
  },
  {
    "#": 146,
    "Title": "Two Flashfires",
    "Type": "Manga Canon",
    "Airdate": "2024-06-22T07:00:00.000Z"
  },
  {
    "#": 147,
    "Title": "Extras",
    "Type": "Manga Canon",
    "Airdate": "2024-06-29T07:00:00.000Z"
  },
  {
    "#": 148,
    "Title": "Wounded Hero, Burning Bright and True!!",
    "Type": "Manga Canon",
    "Airdate": "2024-07-13T07:00:00.000Z"
  },
  {
    "#": 149,
    "Title": "Light Fades To Rain",
    "Type": "Manga Canon",
    "Airdate": "2024-07-20T07:00:00.000Z"
  },
  {
    "#": 150,
    "Title": "Those Who Defend, Those Who Violate",
    "Type": "Manga Canon",
    "Airdate": "2024-08-03T07:00:00.000Z"
  },
  {
    "#": 151,
    "Title": "A Chain of Events, Across the Ages",
    "Type": "Manga Canon",
    "Airdate": "2024-08-17T07:00:00.000Z"
  },
  {
    "#": 152,
    "Title": "Together With Shoji",
    "Type": "Manga Canon",
    "Airdate": "2024-08-24T07:00:00.000Z"
  },
  {
    "#": 153,
    "Title": "Butterfly Effect",
    "Type": "Manga Canon",
    "Airdate": "2024-08-31T07:00:00.000Z"
  },
  {
    "#": 154,
    "Title": "The Chain Thus Far",
    "Type": "Manga Canon",
    "Airdate": "2024-09-07T07:00:00.000Z"
  },
  {
    "#": 155,
    "Title": "Hopes",
    "Type": "Manga Canon",
    "Airdate": "2024-09-14T07:00:00.000Z"
  },
  {
    "#": 156,
    "Title": "It's a Small World",
    "Type": "Manga Canon",
    "Airdate": "2024-09-21T07:00:00.000Z"
  },
  {
    "#": 157,
    "Title": "I Am Here",
    "Type": "Manga Canon",
    "Airdate": "2024-09-28T07:00:00.000Z"
  },
  {
    "#": 158,
    "Title": "A Girl's Ego",
    "Type": "Manga Canon",
    "Airdate": "2024-10-05T07:00:00.000Z"
  },
  {
    "#": 159,
    "Title": "Battle Without a Quirk",
    "Type": "Manga Canon",
    "Airdate": "2024-10-12T07:00:00.000Z"
  },
  {
    "#": 160,
    "Title": "Toshinori Yagi: Rising/Origin",
    "Type": "Manga Canon",
    "Airdate": "2025-10-04T07:00:00.000Z"
  },
  {
    "#": 161,
    "Title": "The End of an Era, and the Beginning",
    "Type": "Manga Canon",
    "Airdate": "2025-10-11T07:00:00.000Z"
  },
  {
    "#": 162,
    "Title": "The Final Boss!!",
    "Type": "Manga Canon",
    "Airdate": "2025-10-18T07:00:00.000Z"
  },
  {
    "#": 163,
    "Title": "Quirk: Explosion!!",
    "Type": "Manga Canon",
    "Airdate": "2025-10-25T07:00:00.000Z"
  },
  {
    "#": 164,
    "Title": "History's Greatest Villain",
    "Type": "Manga Canon",
    "Airdate": "2025-11-01T07:00:00.000Z"
  }
],

'G649PJ0JY': //BLUE EXORCIST
[
  {
    "#": "S1 E1",
    "Title": "The Devil Resides in Human Souls",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2011-04-17T07:00:00.000Z"
  },
  {
    "#": "S1 E2",
    "Title": "Gehenna Gate",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2011-04-24T07:00:00.000Z"
  },
  {
    "#": "S1 E3",
    "Title": "Brothers",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2011-05-01T07:00:00.000Z"
  },
  {
    "#": "S1 E4",
    "Title": "The Garden of Amahara",
    "Type": "Manga Canon",
    "Airdate": "2011-05-08T07:00:00.000Z"
  },
  {
    "#": "S1 E5",
    "Title": "A Boy from the Cursed Temple",
    "Type": "Manga Canon",
    "Airdate": "2011-05-15T07:00:00.000Z"
  },
  {
    "#": "S1 E6",
    "Title": "The Phantom Chef",
    "Type": "Filler",
    "Airdate": "2011-05-22T07:00:00.000Z"
  },
  {
    "#": "S1 E7",
    "Title": "A Flock of Plovers",
    "Type": "Manga Canon",
    "Airdate": "2011-05-29T07:00:00.000Z"
  },
  {
    "#": "S1 E8",
    "Title": "Now a Certain Man Was Sick...",
    "Type": "Manga Canon",
    "Airdate": "2011-06-05T07:00:00.000Z"
  },
  {
    "#": "S1 E9",
    "Title": "Memories",
    "Type": "Manga Canon",
    "Airdate": "2011-06-12T07:00:00.000Z"
  },
  {
    "#": "S1 E10",
    "Title": "Black Cat",
    "Type": "Manga Canon",
    "Airdate": "2011-06-19T07:00:00.000Z"
  },
  {
    "#": "S1 E11",
    "Title": "Demon of the Deep Seas",
    "Type": "Filler",
    "Airdate": "2011-06-26T07:00:00.000Z"
  },
  {
    "#": "S1 E12",
    "Title": "A Game of Tag",
    "Type": "Manga Canon",
    "Airdate": "2011-07-03T07:00:00.000Z"
  },
  {
    "#": "S1 E13",
    "Title": "Proof",
    "Type": "Manga Canon",
    "Airdate": "2011-07-10T07:00:00.000Z"
  },
  {
    "#": "S1 E14",
    "Title": "A Fun Camping Trip",
    "Type": "Manga Canon",
    "Airdate": "2011-07-17T07:00:00.000Z"
  },
  {
    "#": "S1 E15",
    "Title": "Act of Kindness",
    "Type": "Manga Canon",
    "Airdate": "2011-07-24T07:00:00.000Z"
  },
  {
    "#": "S1 E16",
    "Title": "The Wager",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2011-07-31T07:00:00.000Z"
  },
  {
    "#": "S1 E17",
    "Title": "Temptation",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2011-08-07T07:00:00.000Z"
  },
  {
    "#": "S1 E18",
    "Title": "Gufu",
    "Type": "Filler",
    "Airdate": "2011-08-14T07:00:00.000Z"
  },
  {
    "#": "S1 E19",
    "Title": "An Ordinary Day",
    "Type": "Filler",
    "Airdate": "2011-08-21T07:00:00.000Z"
  },
  {
    "#": "S1 E20",
    "Title": "Mask",
    "Type": "Filler",
    "Airdate": "2011-08-28T07:00:00.000Z"
  },
  {
    "#": "S1 E21",
    "Title": "The Secret Garden",
    "Type": "Filler",
    "Airdate": "2011-09-04T07:00:00.000Z"
  },
  {
    "#": "S1 E22",
    "Title": "Demon-hunting",
    "Type": "Filler",
    "Airdate": "2011-09-11T07:00:00.000Z"
  },
  {
    "#": "S1 E23",
    "Title": "Truth",
    "Type": "Filler",
    "Airdate": "2011-09-18T07:00:00.000Z"
  },
  {
    "#": "S1 E24",
    "Title": "Satan's Spawn",
    "Type": "Filler",
    "Airdate": "2011-09-25T07:00:00.000Z"
  },
  {
    "#": "S1 E25",
    "Title": "Stop, Time",
    "Type": "Filler",
    "Airdate": "2011-10-02T07:00:00.000Z"
  },
  {
    "#": "S2 E1",
    "Title": "Small Beginnings",
    "Type": "Manga Canon",
    "Airdate": "2017-01-07T08:00:00.000Z"
  },
  {
    "#": "S2 E2",
    "Title": "Strange Bedfellows",
    "Type": "Manga Canon",
    "Airdate": "2017-01-14T08:00:00.000Z"
  },
  {
    "#": "S2 E3",
    "Title": "Suspicion Will Raise Bogies",
    "Type": "Manga Canon",
    "Airdate": "2017-01-21T08:00:00.000Z"
  },
  {
    "#": "S2 E4",
    "Title": "Act of Treachery",
    "Type": "Manga Canon",
    "Airdate": "2017-01-28T08:00:00.000Z"
  },
  {
    "#": "S2 E5",
    "Title": "Mysterious Connections",
    "Type": "Manga Canon",
    "Airdate": "2017-02-04T08:00:00.000Z"
  },
  {
    "#": "S2 E6",
    "Title": "A Wolf in Sheep's Clothing",
    "Type": "Manga Canon",
    "Airdate": "2017-02-11T08:00:00.000Z"
  },
  {
    "#": "S2 E7",
    "Title": "Like a Fire Burning Bright",
    "Type": "Manga Canon",
    "Airdate": "2017-02-18T08:00:00.000Z"
  },
  {
    "#": "S2 E8",
    "Title": "From Father to Son",
    "Type": "Manga Canon",
    "Airdate": "2017-02-25T08:00:00.000Z"
  },
  {
    "#": "S2 E9",
    "Title": "Through Thick and Thin",
    "Type": "Manga Canon",
    "Airdate": "2017-03-04T08:00:00.000Z"
  },
  {
    "#": "S2 E10",
    "Title": "Unbowed and Unbroken",
    "Type": "Manga Canon",
    "Airdate": "2017-03-11T08:00:00.000Z"
  },
  {
    "#": "S2 E11",
    "Title": "Shine Bright as the Sun",
    "Type": "Manga Canon",
    "Airdate": "2017-03-18T07:00:00.000Z"
  },
  {
    "#": "S2 E12",
    "Title": "Candid and Open",
    "Type": "Manga Canon",
    "Airdate": "2017-03-25T07:00:00.000Z"
  },
  {
    "#": "S3 E1",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-03-26T07:00:00.000Z"
  },
  {
    "#": "S3 E2",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-03-27T07:00:00.000Z"
  },
  {
    "#": "S3 E3",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-03-28T07:00:00.000Z"
  },
  {
    "#": "S3 E4",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-03-29T07:00:00.000Z"
  },
  {
    "#": "S3 E5",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-03-30T07:00:00.000Z"
  },
  {
    "#": "S3 E6",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-03-31T07:00:00.000Z"
  },
  {
    "#": "S3 E7",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-04-01T07:00:00.000Z"
  },
  {
    "#": "S3 E8",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-04-02T07:00:00.000Z"
  },
  {
    "#": "S3 E9",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-04-03T07:00:00.000Z"
  },
  {
    "#": "S3 E10",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-04-04T07:00:00.000Z"
  },
  {
    "#": "S3 E11",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-04-05T07:00:00.000Z"
  },
  {
    "#": "S3 E12",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-04-06T07:00:00.000Z"
  },
  {
    "#": "S4 E1",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-03-26T07:00:00.000Z"
  },
  {
    "#": "S4 E2",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-03-27T07:00:00.000Z"
  },
  {
    "#": "S4 E3",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-03-28T07:00:00.000Z"
  },
  {
    "#": "S4 E4",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-03-29T07:00:00.000Z"
  },
  {
    "#": "S4 E5",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-03-30T07:00:00.000Z"
  },
  {
    "#": "S4 E6",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-03-31T07:00:00.000Z"
  },
  {
    "#": "S4 E7",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-04-01T07:00:00.000Z"
  },
  {
    "#": "S4 E8",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-04-02T07:00:00.000Z"
  },
  {
    "#": "S4 E9",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-04-03T07:00:00.000Z"
  },
  {
    "#": "S4 E10",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-04-04T07:00:00.000Z"
  },
  {
    "#": "S4 E11",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-04-05T07:00:00.000Z"
  },
  {
    "#": "S4 E12",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-04-06T07:00:00.000Z"
  },
  {
    "#": "S5 E1",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-03-26T07:00:00.000Z"
  },
  {
    "#": "S5 E2",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-03-27T07:00:00.000Z"
  },
  {
    "#": "S5 E3",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-03-28T07:00:00.000Z"
  },
  {
    "#": "S5 E4",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-03-29T07:00:00.000Z"
  },
  {
    "#": "S5 E5",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-03-30T07:00:00.000Z"
  },
  {
    "#": "S5 E6",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-03-31T07:00:00.000Z"
  },
  {
    "#": "S5 E7",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-04-01T07:00:00.000Z"
  },
  {
    "#": "S5 E8",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-04-02T07:00:00.000Z"
  },
  {
    "#": "S5 E9",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-04-03T07:00:00.000Z"
  },
  {
    "#": "S5 E10",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-04-04T07:00:00.000Z"
  },
  {
    "#": "S5 E11",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-04-05T07:00:00.000Z"
  },
  {
    "#": "S5 E12",
    "Title": "n",
    "Type": "Manga Canon",
    "Airdate": "2024-04-06T07:00:00.000Z"
  }
],

'GRGGPG93R': //FULLMETAL ALCHEMIST BROTHERHOOD
[
  {
    "#": 1,
    "Title": "Fullmetal Alchemist",
    "Type": "Anime Canon",
    "Airdate": "2009-04-05T07:00:00.000Z"
  },
  {
    "#": 2,
    "Title": "The First Day",
    "Type": "Manga Canon",
    "Airdate": "2009-04-12T07:00:00.000Z"
  },
  {
    "#": 3,
    "Title": "City of Heresy",
    "Type": "Manga Canon",
    "Airdate": "2009-04-19T07:00:00.000Z"
  },
  {
    "#": 4,
    "Title": "An Alchemist's Anguish",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2009-04-26T07:00:00.000Z"
  },
  {
    "#": 5,
    "Title": "Rain of Sorrows",
    "Type": "Manga Canon",
    "Airdate": "2009-05-03T07:00:00.000Z"
  },
  {
    "#": 6,
    "Title": "Road of Hope",
    "Type": "Manga Canon",
    "Airdate": "2009-05-10T07:00:00.000Z"
  },
  {
    "#": 7,
    "Title": "Hidden Truths",
    "Type": "Manga Canon",
    "Airdate": "2009-05-17T07:00:00.000Z"
  },
  {
    "#": 8,
    "Title": "The Fifth Laboratory",
    "Type": "Manga Canon",
    "Airdate": "2009-05-24T07:00:00.000Z"
  },
  {
    "#": 9,
    "Title": "Created Feelings",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2009-05-31T07:00:00.000Z"
  },
  {
    "#": 10,
    "Title": "Separate Destinations",
    "Type": "Manga Canon",
    "Airdate": "2009-06-07T07:00:00.000Z"
  },
  {
    "#": 11,
    "Title": "Miracle at Rush Valley",
    "Type": "Manga Canon",
    "Airdate": "2009-06-14T07:00:00.000Z"
  },
  {
    "#": 12,
    "Title": "One is All, All is One",
    "Type": "Manga Canon",
    "Airdate": "2009-06-21T07:00:00.000Z"
  },
  {
    "#": 13,
    "Title": "Beasts of Dublith",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2009-06-28T07:00:00.000Z"
  },
  {
    "#": 14,
    "Title": "Those Who Lurk Underground",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2009-07-05T07:00:00.000Z"
  },
  {
    "#": 15,
    "Title": "Envoy From the East",
    "Type": "Manga Canon",
    "Airdate": "2009-07-12T07:00:00.000Z"
  },
  {
    "#": 16,
    "Title": "Footsteps of a Comrade-in-Arms",
    "Type": "Manga Canon",
    "Airdate": "2009-07-19T07:00:00.000Z"
  },
  {
    "#": 17,
    "Title": "Cold Flame",
    "Type": "Manga Canon",
    "Airdate": "2009-07-26T07:00:00.000Z"
  },
  {
    "#": 18,
    "Title": "The Arrogant Palm of a Small Human",
    "Type": "Manga Canon",
    "Airdate": "2009-08-02T07:00:00.000Z"
  },
  {
    "#": 19,
    "Title": "Death of the Undying",
    "Type": "Manga Canon",
    "Airdate": "2009-08-09T07:00:00.000Z"
  },
  {
    "#": 20,
    "Title": "Father Before the Grave",
    "Type": "Manga Canon",
    "Airdate": "2009-08-16T07:00:00.000Z"
  },
  {
    "#": 21,
    "Title": "Advance of the Fool",
    "Type": "Manga Canon",
    "Airdate": "2009-08-30T07:00:00.000Z"
  },
  {
    "#": 22,
    "Title": "Backs in the Distance",
    "Type": "Manga Canon",
    "Airdate": "2009-09-06T07:00:00.000Z"
  },
  {
    "#": 23,
    "Title": "Girl on the Battlefield",
    "Type": "Manga Canon",
    "Airdate": "2009-09-13T07:00:00.000Z"
  },
  {
    "#": 24,
    "Title": "Inside the Belly",
    "Type": "Manga Canon",
    "Airdate": "2009-09-20T07:00:00.000Z"
  },
  {
    "#": 25,
    "Title": "Doorway of Darkness",
    "Type": "Manga Canon",
    "Airdate": "2009-09-27T07:00:00.000Z"
  },
  {
    "#": 26,
    "Title": "Reunion",
    "Type": "Manga Canon",
    "Airdate": "2009-10-04T07:00:00.000Z"
  },
  {
    "#": 27,
    "Title": "Interlude Party",
    "Type": "Filler",
    "Airdate": "2009-10-11T07:00:00.000Z"
  },
  {
    "#": 28,
    "Title": "Father",
    "Type": "Manga Canon",
    "Airdate": "2009-10-18T07:00:00.000Z"
  },
  {
    "#": 29,
    "Title": "Struggle of the Fool",
    "Type": "Manga Canon",
    "Airdate": "2009-10-25T07:00:00.000Z"
  },
  {
    "#": 30,
    "Title": "The Ishvalan War of Extermination",
    "Type": "Manga Canon",
    "Airdate": "2009-11-01T07:00:00.000Z"
  },
  {
    "#": 31,
    "Title": "The 520 Cens Promise",
    "Type": "Manga Canon",
    "Airdate": "2009-11-08T08:00:00.000Z"
  },
  {
    "#": 32,
    "Title": "The Fuhrer's Son",
    "Type": "Manga Canon",
    "Airdate": "2009-11-15T08:00:00.000Z"
  },
  {
    "#": 33,
    "Title": "The Northern Wall of Briggs",
    "Type": "Manga Canon",
    "Airdate": "2009-11-22T08:00:00.000Z"
  },
  {
    "#": 34,
    "Title": "Ice Queen",
    "Type": "Manga Canon",
    "Airdate": "2009-11-29T08:00:00.000Z"
  },
  {
    "#": 35,
    "Title": "The Shape of This Country",
    "Type": "Manga Canon",
    "Airdate": "2009-12-06T08:00:00.000Z"
  },
  {
    "#": 36,
    "Title": "Family Portrait",
    "Type": "Manga Canon",
    "Airdate": "2009-12-13T08:00:00.000Z"
  },
  {
    "#": 37,
    "Title": "The First Homunculus",
    "Type": "Manga Canon",
    "Airdate": "2009-12-20T08:00:00.000Z"
  },
  {
    "#": 38,
    "Title": "Conflict at Baschool",
    "Type": "Manga Canon",
    "Airdate": "2009-12-27T08:00:00.000Z"
  },
  {
    "#": 39,
    "Title": "Daydream",
    "Type": "Manga Canon",
    "Airdate": "2010-01-10T08:00:00.000Z"
  },
  {
    "#": 40,
    "Title": "Homunculus (The Dwarf in the Flask)",
    "Type": "Manga Canon",
    "Airdate": "2010-01-17T08:00:00.000Z"
  },
  {
    "#": 41,
    "Title": "The Abyss",
    "Type": "Manga Canon",
    "Airdate": "2010-01-24T08:00:00.000Z"
  },
  {
    "#": 42,
    "Title": "Signs of a Counteroffensive",
    "Type": "Manga Canon",
    "Airdate": "2010-01-31T08:00:00.000Z"
  },
  {
    "#": 43,
    "Title": "Bite of the Ant",
    "Type": "Manga Canon",
    "Airdate": "2010-02-07T08:00:00.000Z"
  },
  {
    "#": 44,
    "Title": "Revving at Full Throttle",
    "Type": "Manga Canon",
    "Airdate": "2010-02-14T08:00:00.000Z"
  },
  {
    "#": 45,
    "Title": "The Promised Day",
    "Type": "Manga Canon",
    "Airdate": "2010-02-21T08:00:00.000Z"
  },
  {
    "#": 46,
    "Title": "Looming Shadows",
    "Type": "Manga Canon",
    "Airdate": "2010-02-28T08:00:00.000Z"
  },
  {
    "#": 47,
    "Title": "Emissary of Darkness",
    "Type": "Manga Canon",
    "Airdate": "2010-03-07T08:00:00.000Z"
  },
  {
    "#": 48,
    "Title": "The Oath in the Tunnel",
    "Type": "Manga Canon",
    "Airdate": "2010-03-14T08:00:00.000Z"
  },
  {
    "#": 49,
    "Title": "Filial Affection",
    "Type": "Manga Canon",
    "Airdate": "2010-03-21T07:00:00.000Z"
  },
  {
    "#": 50,
    "Title": "Upheaval in Central",
    "Type": "Manga Canon",
    "Airdate": "2010-03-28T07:00:00.000Z"
  },
  {
    "#": 51,
    "Title": "The Immortal Legion",
    "Type": "Manga Canon",
    "Airdate": "2010-04-04T07:00:00.000Z"
  },
  {
    "#": 52,
    "Title": "Combined Strength",
    "Type": "Manga Canon",
    "Airdate": "2010-04-11T07:00:00.000Z"
  },
  {
    "#": 53,
    "Title": "Flame of Vengeance",
    "Type": "Manga Canon",
    "Airdate": "2010-04-18T07:00:00.000Z"
  },
  {
    "#": 54,
    "Title": "Beyond the Inferno",
    "Type": "Manga Canon",
    "Airdate": "2010-04-25T07:00:00.000Z"
  },
  {
    "#": 55,
    "Title": "The Adults' Way of Life",
    "Type": "Manga Canon",
    "Airdate": "2010-05-02T07:00:00.000Z"
  },
  {
    "#": 56,
    "Title": "The Return of the Fuhrer",
    "Type": "Manga Canon",
    "Airdate": "2010-05-09T07:00:00.000Z"
  },
  {
    "#": 57,
    "Title": "Eternal Leave",
    "Type": "Manga Canon",
    "Airdate": "2010-05-16T07:00:00.000Z"
  },
  {
    "#": 58,
    "Title": "Sacrifices",
    "Type": "Manga Canon",
    "Airdate": "2010-05-23T07:00:00.000Z"
  },
  {
    "#": 59,
    "Title": "Lost Light",
    "Type": "Manga Canon",
    "Airdate": "2010-05-30T07:00:00.000Z"
  },
  {
    "#": 60,
    "Title": "Eye of Heaven, Gateway of Earth",
    "Type": "Manga Canon",
    "Airdate": "2010-06-06T07:00:00.000Z"
  },
  {
    "#": 61,
    "Title": "He Who Would Swallow God",
    "Type": "Manga Canon",
    "Airdate": "2010-06-13T07:00:00.000Z"
  },
  {
    "#": 62,
    "Title": "A Fierce Counterattack",
    "Type": "Manga Canon",
    "Airdate": "2010-06-20T07:00:00.000Z"
  },
  {
    "#": 63,
    "Title": "The Other Side of the Gateway",
    "Type": "Manga Canon",
    "Airdate": "2010-06-27T07:00:00.000Z"
  },
  {
    "#": 64,
    "Title": "Journey's End",
    "Type": "Manga Canon",
    "Airdate": "2010-07-04T07:00:00.000Z"
  }
],

'GY9PJ5KWR': //NARUTO
[
  {
    "#": 1,
    "Title": "Enter: Naruto Uzumaki!",
    "Type": "Manga Canon",
    "Airdate": "2002-10-03T07:00:00.000Z"
  },
  {
    "#": 2,
    "Title": "My Name is Konohamaru!",
    "Type": "Manga Canon",
    "Airdate": "2002-10-10T07:00:00.000Z"
  },
  {
    "#": 3,
    "Title": "Sasuke and Sakura: Friends or Foes?",
    "Type": "Manga Canon",
    "Airdate": "2002-10-17T07:00:00.000Z"
  },
  {
    "#": 4,
    "Title": "Pass or Fail: Survival Test",
    "Type": "Manga Canon",
    "Airdate": "2002-10-24T07:00:00.000Z"
  },
  {
    "#": 5,
    "Title": "You Failed! Kakashi's Final Decision",
    "Type": "Manga Canon",
    "Airdate": "2002-10-31T08:00:00.000Z"
  },
  {
    "#": 6,
    "Title": "A Dangerous Mission! Journey to the Land of Waves!",
    "Type": "Manga Canon",
    "Airdate": "2002-11-07T08:00:00.000Z"
  },
  {
    "#": 7,
    "Title": "The Assassin of the Mist!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2002-11-14T08:00:00.000Z"
  },
  {
    "#": 8,
    "Title": "The Oath of Pain",
    "Type": "Manga Canon",
    "Airdate": "2002-11-21T08:00:00.000Z"
  },
  {
    "#": 9,
    "Title": "Kakashi: Sharingan Warrior",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2002-11-28T08:00:00.000Z"
  },
  {
    "#": 10,
    "Title": "The Forest of Chakra",
    "Type": "Manga Canon",
    "Airdate": "2002-12-05T08:00:00.000Z"
  },
  {
    "#": 11,
    "Title": "The Land Where a Hero Once Lived",
    "Type": "Manga Canon",
    "Airdate": "2002-12-12T08:00:00.000Z"
  },
  {
    "#": 12,
    "Title": "Battle on the Bridge! Zabuza Returns!!",
    "Type": "Manga Canon",
    "Airdate": "2002-12-19T08:00:00.000Z"
  },
  {
    "#": 13,
    "Title": "Haku's Secret Jutsu: Crystal Ice Mirrors",
    "Type": "Manga Canon",
    "Airdate": "2002-12-21T08:00:00.000Z"
  },
  {
    "#": 14,
    "Title": "The Number One Hyperactive, Knucklehead Ninja Joins the Fight!!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2002-12-22T08:00:00.000Z"
  },
  {
    "#": 15,
    "Title": "Zero Visibility: The Sharingan Shatters",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2002-12-23T08:00:00.000Z"
  },
  {
    "#": 16,
    "Title": "The Broken Seal",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2002-12-24T08:00:00.000Z"
  },
  {
    "#": 17,
    "Title": "White Past: Hidden Ambition",
    "Type": "Manga Canon",
    "Airdate": "2002-12-25T08:00:00.000Z"
  },
  {
    "#": 18,
    "Title": "The Weapons Known as Shinobi",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-01-31T08:00:00.000Z"
  },
  {
    "#": 19,
    "Title": "The Demon in the Snow",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-02-13T08:00:00.000Z"
  },
  {
    "#": 20,
    "Title": "A New Chapter Begins: The Chunin Exam!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-02-20T08:00:00.000Z"
  },
  {
    "#": 21,
    "Title": "Identify Yourself: Powerful New Rivals",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-02-27T08:00:00.000Z"
  },
  {
    "#": 22,
    "Title": "Chunin Challenge: Rock Lee vs. Sasuke!",
    "Type": "Manga Canon",
    "Airdate": "2003-03-06T08:00:00.000Z"
  },
  {
    "#": 23,
    "Title": "Genin Takedown! All Nine Rookies Face Off!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-03-13T08:00:00.000Z"
  },
  {
    "#": 24,
    "Title": "Start Your Engines: The Chunin Exam Begins!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-03-20T08:00:00.000Z"
  },
  {
    "#": 25,
    "Title": "The Tenth Question: All or Nothing!",
    "Type": "Manga Canon",
    "Airdate": "2003-03-27T08:00:00.000Z"
  },
  {
    "#": 26,
    "Title": "Special Report: Live from the Forest of Death!",
    "Type": "Filler",
    "Airdate": "2003-04-02T08:00:00.000Z"
  },
  {
    "#": 27,
    "Title": "The Chunin Exam Stage 2: The Forest of Death",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-04-02T08:00:00.000Z"
  },
  {
    "#": 28,
    "Title": "Eat or be Eaten: Panic in the Forest",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-04-09T07:00:00.000Z"
  },
  {
    "#": 29,
    "Title": "Naruto's Counterattack: Never Give In!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-04-16T07:00:00.000Z"
  },
  {
    "#": 30,
    "Title": "The Sharingan Revived: Dragon-Flame Jutsu!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-04-23T07:00:00.000Z"
  },
  {
    "#": 31,
    "Title": "Bushy Brow's Pledge: Undying Love and Protection!",
    "Type": "Manga Canon",
    "Airdate": "2003-05-02T07:00:00.000Z"
  },
  {
    "#": 32,
    "Title": "Sakura Blossoms!",
    "Type": "Manga Canon",
    "Airdate": "2003-05-07T07:00:00.000Z"
  },
  {
    "#": 33,
    "Title": "Battle Formation: Ino-Shika-Cho!",
    "Type": "Manga Canon",
    "Airdate": "2003-05-14T07:00:00.000Z"
  },
  {
    "#": 34,
    "Title": "Akamaru Trembles: Gaara's Cruel Strength!",
    "Type": "Manga Canon",
    "Airdate": "2003-05-21T07:00:00.000Z"
  },
  {
    "#": 35,
    "Title": "The Scroll's Secret: No Peeking Allowed",
    "Type": "Manga Canon",
    "Airdate": "2003-05-28T07:00:00.000Z"
  },
  {
    "#": 36,
    "Title": "Clone vs. Clone: Mine are Better than Yours!",
    "Type": "Manga Canon",
    "Airdate": "2003-06-04T07:00:00.000Z"
  },
  {
    "#": 37,
    "Title": "Surviving the Cut! The Rookie Nine Together Again!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-06-11T07:00:00.000Z"
  },
  {
    "#": 38,
    "Title": "Narrowing the Field: Sudden Death Elimination!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-06-18T07:00:00.000Z"
  },
  {
    "#": 39,
    "Title": "Bushy Brow's Jealousy: Lions Barrage Unleashed!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-07-02T07:00:00.000Z"
  },
  {
    "#": 40,
    "Title": "Kakashi and Orochimaru: Face-to-Face!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-07-09T07:00:00.000Z"
  },
  {
    "#": 41,
    "Title": "Kunoichi Rumble: The Rivals Get Serious!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-07-16T07:00:00.000Z"
  },
  {
    "#": 42,
    "Title": "The Ultimate Battle: Cha!",
    "Type": "Manga Canon",
    "Airdate": "2003-07-23T07:00:00.000Z"
  },
  {
    "#": 43,
    "Title": "Killer Kunoichi and a Shaky Shikamaru",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-07-30T07:00:00.000Z"
  },
  {
    "#": 44,
    "Title": "Akamaru Unleashed! Who's Top Dog Now?",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-08-06T07:00:00.000Z"
  },
  {
    "#": 45,
    "Title": "Surprise Attack! Naruto's Secret Weapon!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-08-13T07:00:00.000Z"
  },
  {
    "#": 46,
    "Title": "Byakugan Battle: Hinata Grows Bold!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-08-20T07:00:00.000Z"
  },
  {
    "#": 47,
    "Title": "A Failure Stands Tall!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-08-27T07:00:00.000Z"
  },
  {
    "#": 48,
    "Title": "Gaara vs. Rock Lee: The Power of Youth Explodes!",
    "Type": "Manga Canon",
    "Airdate": "2003-09-03T07:00:00.000Z"
  },
  {
    "#": 49,
    "Title": "Lee's Hidden Strength: Forbidden Secret Jutsu!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-09-10T07:00:00.000Z"
  },
  {
    "#": 50,
    "Title": "The Fifth Gate: A Splendid Ninja is Born",
    "Type": "Manga Canon",
    "Airdate": "2003-09-17T07:00:00.000Z"
  },
  {
    "#": 51,
    "Title": "A Shadow in Darkness: Danger Approaches Sasuke",
    "Type": "Manga Canon",
    "Airdate": "2003-09-24T07:00:00.000Z"
  },
  {
    "#": 52,
    "Title": "Ebisu Returns: Naruto's Toughest Training Yet!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-10-01T07:00:00.000Z"
  },
  {
    "#": 53,
    "Title": "Long Time No See: Jiraiya Returns!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-10-08T07:00:00.000Z"
  },
  {
    "#": 54,
    "Title": "The Summoning Jutsu: Wisdom of the Toad Sage!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-10-15T07:00:00.000Z"
  },
  {
    "#": 55,
    "Title": "A Feeling of Yearning, A Flower Full of Hope",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-10-22T07:00:00.000Z"
  },
  {
    "#": 56,
    "Title": "Live or Die: Risk it All to Win it All!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-10-29T08:00:00.000Z"
  },
  {
    "#": 57,
    "Title": "He Flies! He Jumps! He Lurks! Chief Toad Appears!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-11-05T08:00:00.000Z"
  },
  {
    "#": 58,
    "Title": "Hospital Besieged: The Evil Hand Revealed!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-11-12T08:00:00.000Z"
  },
  {
    "#": 59,
    "Title": "The Final Rounds: Rush to the Battle Arena!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-11-19T08:00:00.000Z"
  },
  {
    "#": 60,
    "Title": "Byakugan vs. Shadow Clone",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-11-26T08:00:00.000Z"
  },
  {
    "#": 61,
    "Title": "Ultimate Defense: Zero Blind Spot!",
    "Type": "Manga Canon",
    "Airdate": "2003-12-03T08:00:00.000Z"
  },
  {
    "#": 62,
    "Title": "A Failure's True Power",
    "Type": "Manga Canon",
    "Airdate": "2003-12-10T08:00:00.000Z"
  },
  {
    "#": 63,
    "Title": "Hit it or Quit it: The Final Rounds Get Complicated!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2003-12-17T08:00:00.000Z"
  },
  {
    "#": 64,
    "Title": "Zero Motivation: The Guy with Cloud Envy!",
    "Type": "Manga Canon",
    "Airdate": "2003-12-24T08:00:00.000Z"
  },
  {
    "#": 65,
    "Title": "Dancing Leaf, Squirming Sand",
    "Type": "Manga Canon",
    "Airdate": "2003-12-31T08:00:00.000Z"
  },
  {
    "#": 66,
    "Title": "Bushy Brow's Jutsu: Sasuke Style!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2004-01-14T08:00:00.000Z"
  },
  {
    "#": 67,
    "Title": "Late for the Show, But Ready to Go! The Ultimate Secret Technique is Born!",
    "Type": "Manga Canon",
    "Airdate": "2004-01-14T08:00:00.000Z"
  },
  {
    "#": 68,
    "Title": "Zero Hour! The Destruction of the Hidden Leaf Village Begins!",
    "Type": "Manga Canon",
    "Airdate": "2004-01-28T08:00:00.000Z"
  },
  {
    "#": 69,
    "Title": "Village in Distress: A New A-Ranked Mission!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2004-02-04T08:00:00.000Z"
  },
  {
    "#": 70,
    "Title": "A Shirker's Call to Action: A Layabout No More!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2004-02-11T08:00:00.000Z"
  },
  {
    "#": 71,
    "Title": "An Unrivaled Match: Hokage Battle Royale!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2004-02-18T08:00:00.000Z"
  },
  {
    "#": 72,
    "Title": "A Mistake from the Past: A Face Revealed!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2004-02-25T08:00:00.000Z"
  },
  {
    "#": 73,
    "Title": "Forbidden Secret Technique: Reaper Death Seal!",
    "Type": "Manga Canon",
    "Airdate": "2004-03-03T08:00:00.000Z"
  },
  {
    "#": 74,
    "Title": "Astonishing Truth! Gaara's Identity Emerges!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2004-03-10T08:00:00.000Z"
  },
  {
    "#": 75,
    "Title": "Sasuke's Decision: Pushed to the Edge!",
    "Type": "Manga Canon",
    "Airdate": "2004-03-17T08:00:00.000Z"
  },
  {
    "#": 76,
    "Title": "Assassin of the Moonlit Night",
    "Type": "Manga Canon",
    "Airdate": "2004-03-24T08:00:00.000Z"
  },
  {
    "#": 77,
    "Title": "Light vs. Dark: The Two Faces of Gaara",
    "Type": "Manga Canon",
    "Airdate": "2004-03-31T08:00:00.000Z"
  },
  {
    "#": 78,
    "Title": "Naruto's Ninja Handbook",
    "Type": "Manga Canon",
    "Airdate": "2004-04-07T07:00:00.000Z"
  },
  {
    "#": 79,
    "Title": "Beyond the Limit of Darkness and Light",
    "Type": "Manga Canon",
    "Airdate": "2004-04-14T07:00:00.000Z"
  },
  {
    "#": 80,
    "Title": "The Third Hokage, Forever...",
    "Type": "Manga Canon",
    "Airdate": "2004-04-21T07:00:00.000Z"
  },
  {
    "#": 81,
    "Title": "Return of the Morning Mist",
    "Type": "Manga Canon",
    "Airdate": "2004-04-28T07:00:00.000Z"
  },
  {
    "#": 82,
    "Title": "Eye to Eye: Sharingan vs. Sharingan!",
    "Type": "Manga Canon",
    "Airdate": "2004-05-05T07:00:00.000Z"
  },
  {
    "#": 83,
    "Title": "Jiraiya: Naruto's Potential Disaster!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2004-05-12T07:00:00.000Z"
  },
  {
    "#": 84,
    "Title": "Roar, Chidori! Brother vs. Brother!",
    "Type": "Manga Canon",
    "Airdate": "2004-05-19T07:00:00.000Z"
  },
  {
    "#": 85,
    "Title": "Hate Among the Uchihas: The Last of the Clan!",
    "Type": "Manga Canon",
    "Airdate": "2004-05-26T07:00:00.000Z"
  },
  {
    "#": 86,
    "Title": "A New Training Begins: I Will Be Strong!",
    "Type": "Manga Canon",
    "Airdate": "2004-06-02T07:00:00.000Z"
  },
  {
    "#": 87,
    "Title": "Keep on Training: Pop Goes the Water Balloon!",
    "Type": "Manga Canon",
    "Airdate": "2004-06-09T07:00:00.000Z"
  },
  {
    "#": 88,
    "Title": "Focal Point: The Mark of the Leaf",
    "Type": "Manga Canon",
    "Airdate": "2004-06-16T07:00:00.000Z"
  },
  {
    "#": 89,
    "Title": "An Impossible Choice: The Pain Within Tsunade's Heart",
    "Type": "Manga Canon",
    "Airdate": "2004-06-23T07:00:00.000Z"
  },
  {
    "#": 90,
    "Title": "Unforgivable! A Total Lack of Respect!",
    "Type": "Manga Canon",
    "Airdate": "2004-07-07T07:00:00.000Z"
  },
  {
    "#": 91,
    "Title": "Inheritence! The Necklace of Death!",
    "Type": "Manga Canon",
    "Airdate": "2004-07-14T07:00:00.000Z"
  },
  {
    "#": 92,
    "Title": "A Dubious Offer! Tsunade's Choice!",
    "Type": "Manga Canon",
    "Airdate": "2004-07-21T07:00:00.000Z"
  },
  {
    "#": 93,
    "Title": "Breakdown! The Deal is Off!",
    "Type": "Manga Canon",
    "Airdate": "2004-07-28T07:00:00.000Z"
  },
  {
    "#": 94,
    "Title": "Attack! Fury of the Rasengan!",
    "Type": "Manga Canon",
    "Airdate": "2004-08-04T07:00:00.000Z"
  },
  {
    "#": 95,
    "Title": "The Fifth Hokage! A Life on the Line!",
    "Type": "Manga Canon",
    "Airdate": "2004-08-11T07:00:00.000Z"
  },
  {
    "#": 96,
    "Title": "Deadlock! Sannin Showdown!",
    "Type": "Manga Canon",
    "Airdate": "2004-08-11T07:00:00.000Z"
  },
  {
    "#": 97,
    "Title": "Kidnapped! Naruto's Hot Spring Adventure!",
    "Type": "Filler",
    "Airdate": "2004-08-18T07:00:00.000Z"
  },
  {
    "#": 98,
    "Title": "Tsunade's Warning: Ninja No More!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2004-08-25T07:00:00.000Z"
  },
  {
    "#": 99,
    "Title": "The Will of Fire Still Burns!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2004-09-01T07:00:00.000Z"
  },
  {
    "#": 100,
    "Title": "Sensei and Student: The Bond of the Shinobi",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2004-09-08T07:00:00.000Z"
  },
  {
    "#": 101,
    "Title": "Gotta See! Gotta Know! Kakashi-Sensei's True Face!",
    "Type": "Filler",
    "Airdate": "2004-09-15T07:00:00.000Z"
  },
  {
    "#": 102,
    "Title": "Mission: Help an Old Friend in the Land of Tea",
    "Type": "Filler",
    "Airdate": "2004-09-22T07:00:00.000Z"
  },
  {
    "#": 103,
    "Title": "The Race is on! Trouble on the High Seas!",
    "Type": "Filler",
    "Airdate": "2004-09-29T07:00:00.000Z"
  },
  {
    "#": 104,
    "Title": "Run Idate Run! Nagi Island Awaits!",
    "Type": "Filler",
    "Airdate": "2004-10-13T07:00:00.000Z"
  },
  {
    "#": 105,
    "Title": "A Fierce Battle of Rolling Thunder!",
    "Type": "Filler",
    "Airdate": "2004-10-20T07:00:00.000Z"
  },
  {
    "#": 106,
    "Title": "The Last Leg: A Final Act of Desperation",
    "Type": "Filler",
    "Airdate": "2004-10-27T07:00:00.000Z"
  },
  {
    "#": 107,
    "Title": "The Battle Begins: Naruto vs. Sasuke",
    "Type": "Manga Canon",
    "Airdate": "2004-11-03T08:00:00.000Z"
  },
  {
    "#": 108,
    "Title": "Bitter Rivals and Broken Bonds",
    "Type": "Manga Canon",
    "Airdate": "2004-11-10T08:00:00.000Z"
  },
  {
    "#": 109,
    "Title": "An Invitation from the Sound",
    "Type": "Manga Canon",
    "Airdate": "2004-11-17T08:00:00.000Z"
  },
  {
    "#": 110,
    "Title": "Formation! The Sasuke Retrieval Squad",
    "Type": "Manga Canon",
    "Airdate": "2004-11-24T08:00:00.000Z"
  },
  {
    "#": 111,
    "Title": "Sound vs. Leaf",
    "Type": "Manga Canon",
    "Airdate": "2004-11-24T08:00:00.000Z"
  },
  {
    "#": 112,
    "Title": "Squad Mutiny: Everything Falls Apart!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2004-12-01T08:00:00.000Z"
  },
  {
    "#": 113,
    "Title": "Full Throttle Power! Choji, Ablaze!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2004-12-08T08:00:00.000Z"
  },
  {
    "#": 114,
    "Title": "Good-bye Old Friend...! I'll Always Believe in You!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2004-12-15T08:00:00.000Z"
  },
  {
    "#": 115,
    "Title": "Your Opponent Is Me!",
    "Type": "Manga Canon",
    "Airdate": "2004-12-22T08:00:00.000Z"
  },
  {
    "#": 116,
    "Title": "360 Degrees of Vision: The Byakugan's Blind Spot",
    "Type": "Manga Canon",
    "Airdate": "2005-01-05T08:00:00.000Z"
  },
  {
    "#": 117,
    "Title": "Losing is Not an Option!",
    "Type": "Manga Canon",
    "Airdate": "2005-01-05T08:00:00.000Z"
  },
  {
    "#": 118,
    "Title": "The Vessel Arrives Too Late",
    "Type": "Manga Canon",
    "Airdate": "2005-01-12T08:00:00.000Z"
  },
  {
    "#": 119,
    "Title": "Miscalculation: A New Enemy Appears!",
    "Type": "Manga Canon",
    "Airdate": "2005-01-19T08:00:00.000Z"
  },
  {
    "#": 120,
    "Title": "Roar and Howl! The Ultimate Tag Team",
    "Type": "Manga Canon",
    "Airdate": "2005-02-02T08:00:00.000Z"
  },
  {
    "#": 121,
    "Title": "To Each His Own Battle",
    "Type": "Manga Canon",
    "Airdate": "2005-02-09T08:00:00.000Z"
  },
  {
    "#": 122,
    "Title": "Fakeout: Shikamaru's Comeback!",
    "Type": "Manga Canon",
    "Airdate": "2005-02-16T08:00:00.000Z"
  },
  {
    "#": 123,
    "Title": "The Leaf's Handsome Devil!",
    "Type": "Manga Canon",
    "Airdate": "2005-02-23T08:00:00.000Z"
  },
  {
    "#": 124,
    "Title": "The Beast Within",
    "Type": "Manga Canon",
    "Airdate": "2005-03-02T08:00:00.000Z"
  },
  {
    "#": 125,
    "Title": "The Sand Shinobi: Allies of the Leaf",
    "Type": "Manga Canon",
    "Airdate": "2005-03-09T08:00:00.000Z"
  },
  {
    "#": 126,
    "Title": "Showdown: Gaara vs. Kimimaro!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2005-03-16T08:00:00.000Z"
  },
  {
    "#": 127,
    "Title": "Vengeful Strike! The Bracken Dance",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2005-03-30T08:00:00.000Z"
  },
  {
    "#": 128,
    "Title": "A Cry on Deaf Ears",
    "Type": "Manga Canon",
    "Airdate": "2005-03-30T08:00:00.000Z"
  },
  {
    "#": 129,
    "Title": "Brothers: Distance Among the Uchiha",
    "Type": "Manga Canon",
    "Airdate": "2005-04-06T07:00:00.000Z"
  },
  {
    "#": 130,
    "Title": "Father and Son, the Broken Crest",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2005-04-13T07:00:00.000Z"
  },
  {
    "#": 131,
    "Title": "The Secrets of the Mangekyo Sharingan!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2005-04-20T07:00:00.000Z"
  },
  {
    "#": 132,
    "Title": "For a Friend",
    "Type": "Manga Canon",
    "Airdate": "2005-04-27T07:00:00.000Z"
  },
  {
    "#": 133,
    "Title": "A Plea From a Friend",
    "Type": "Manga Canon",
    "Airdate": "2005-05-04T07:00:00.000Z"
  },
  {
    "#": 134,
    "Title": "The End of Tears",
    "Type": "Manga Canon",
    "Airdate": "2005-05-11T07:00:00.000Z"
  },
  {
    "#": 135,
    "Title": "The Promise That Could Not Be Kept",
    "Type": "Manga Canon",
    "Airdate": "2005-05-18T07:00:00.000Z"
  },
  {
    "#": 136,
    "Title": "Deep Cover!? A Super S-Ranked Mission!",
    "Type": "Filler",
    "Airdate": "2005-05-25T07:00:00.000Z"
  },
  {
    "#": 137,
    "Title": "A Town of Outlaws, the Shadow of the Fuma Clan",
    "Type": "Filler",
    "Airdate": "2005-06-01T07:00:00.000Z"
  },
  {
    "#": 138,
    "Title": "Pure Betrayal, and a Fleeting Plea!",
    "Type": "Filler",
    "Airdate": "2005-06-08T07:00:00.000Z"
  },
  {
    "#": 139,
    "Title": "Pure Terror! The House of Orochimaru",
    "Type": "Filler",
    "Airdate": "2005-06-15T07:00:00.000Z"
  },
  {
    "#": 140,
    "Title": "Two Heartbeats: Kabuto's Trap",
    "Type": "Filler",
    "Airdate": "2005-06-22T07:00:00.000Z"
  },
  {
    "#": 141,
    "Title": "Sakura's Determination",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2005-06-29T07:00:00.000Z"
  },
  {
    "#": 142,
    "Title": "The Three Villains from the Maximum Security Prison",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2005-07-06T07:00:00.000Z"
  },
  {
    "#": 143,
    "Title": "Tonton! I'm Counting on You!",
    "Type": "Filler",
    "Airdate": "2005-07-13T07:00:00.000Z"
  },
  {
    "#": 144,
    "Title": "A New Squad! Two People and a Dog?!",
    "Type": "Filler",
    "Airdate": "2005-07-20T07:00:00.000Z"
  },
  {
    "#": 145,
    "Title": "A New Formation: Ino-Shika-Cho!",
    "Type": "Filler",
    "Airdate": "2005-07-27T07:00:00.000Z"
  },
  {
    "#": 146,
    "Title": "Orochimaru's Shadow",
    "Type": "Filler",
    "Airdate": "2005-08-10T07:00:00.000Z"
  },
  {
    "#": 147,
    "Title": "A Clash of Fate: You Can't Bring Me Down",
    "Type": "Filler",
    "Airdate": "2005-08-17T07:00:00.000Z"
  },
  {
    "#": 148,
    "Title": "Search for the Rare Bikochu Beetle",
    "Type": "Filler",
    "Airdate": "2005-08-17T07:00:00.000Z"
  },
  {
    "#": 149,
    "Title": "What's the Difference? Don't All Insects Look Alike?",
    "Type": "Filler",
    "Airdate": "2005-08-24T07:00:00.000Z"
  },
  {
    "#": 150,
    "Title": "A Battle of Bugs: The Deceivers and the Deceived",
    "Type": "Filler",
    "Airdate": "2005-08-31T07:00:00.000Z"
  },
  {
    "#": 151,
    "Title": "Blaze Away Byakugan: This Is My Ninja Way",
    "Type": "Filler",
    "Airdate": "2005-09-14T07:00:00.000Z"
  },
  {
    "#": 152,
    "Title": "Funeral March for the Living",
    "Type": "Filler",
    "Airdate": "2005-09-21T07:00:00.000Z"
  },
  {
    "#": 153,
    "Title": "A Lesson Learned: The Iron Fist of Love",
    "Type": "Filler",
    "Airdate": "2005-09-28T07:00:00.000Z"
  },
  {
    "#": 154,
    "Title": "The Enemy of the Byakugan",
    "Type": "Filler",
    "Airdate": "2005-10-05T07:00:00.000Z"
  },
  {
    "#": 155,
    "Title": "The Dark Creeping Clouds",
    "Type": "Filler",
    "Airdate": "2005-10-12T07:00:00.000Z"
  },
  {
    "#": 156,
    "Title": "Raiga's Counterattack",
    "Type": "Filler",
    "Airdate": "2005-10-19T07:00:00.000Z"
  },
  {
    "#": 157,
    "Title": "Run! The Curry of Life",
    "Type": "Filler",
    "Airdate": "2005-10-26T07:00:00.000Z"
  },
  {
    "#": 158,
    "Title": "Follow My Lead! The Great Survival Challenge",
    "Type": "Filler",
    "Airdate": "2005-11-02T08:00:00.000Z"
  },
  {
    "#": 159,
    "Title": "Bounty Hunter from the Wilderness",
    "Type": "Filler",
    "Airdate": "2005-11-09T08:00:00.000Z"
  },
  {
    "#": 160,
    "Title": "Hunt or Be Hunted?! Showdown at the O.K. Temple!",
    "Type": "Filler",
    "Airdate": "2005-11-16T08:00:00.000Z"
  },
  {
    "#": 161,
    "Title": "The Appearance of Strange Visitors",
    "Type": "Filler",
    "Airdate": "2005-11-23T08:00:00.000Z"
  },
  {
    "#": 162,
    "Title": "The Cursed Warrior",
    "Type": "Filler",
    "Airdate": "2005-11-30T08:00:00.000Z"
  },
  {
    "#": 163,
    "Title": "The Tactician's Intent",
    "Type": "Filler",
    "Airdate": "2005-12-07T08:00:00.000Z"
  },
  {
    "#": 164,
    "Title": "Too Late for Help",
    "Type": "Filler",
    "Airdate": "2005-12-14T08:00:00.000Z"
  },
  {
    "#": 165,
    "Title": "The Death of Naruto",
    "Type": "Filler",
    "Airdate": "2005-12-21T08:00:00.000Z"
  },
  {
    "#": 166,
    "Title": "When Time Stands Still",
    "Type": "Filler",
    "Airdate": "2006-01-04T08:00:00.000Z"
  },
  {
    "#": 167,
    "Title": "When Egrets Flap Their Wings",
    "Type": "Filler",
    "Airdate": "2006-01-04T08:00:00.000Z"
  },
  {
    "#": 168,
    "Title": "Mix It, Stretch It, Boil It Up! Burn, Copper Pot, Burn!",
    "Type": "Filler",
    "Airdate": "2006-01-18T08:00:00.000Z"
  },
  {
    "#": 169,
    "Title": "Remembrance: The Lost Page",
    "Type": "Filler",
    "Airdate": "2006-01-25T08:00:00.000Z"
  },
  {
    "#": 170,
    "Title": "The Closed Door",
    "Type": "Filler",
    "Airdate": "2006-02-01T08:00:00.000Z"
  },
  {
    "#": 171,
    "Title": "Infiltration: The Set-Up!",
    "Type": "Filler",
    "Airdate": "2006-02-08T08:00:00.000Z"
  },
  {
    "#": 172,
    "Title": "Despair: A Fractured Heart",
    "Type": "Filler",
    "Airdate": "2006-02-15T08:00:00.000Z"
  },
  {
    "#": 173,
    "Title": "The Battle at Sea: The Power Unleashed!",
    "Type": "Filler",
    "Airdate": "2006-02-22T08:00:00.000Z"
  },
  {
    "#": 174,
    "Title": "Impossible! Celebrity Ninja Art - Money Style Jutsu!",
    "Type": "Filler",
    "Airdate": "2006-03-01T08:00:00.000Z"
  },
  {
    "#": 175,
    "Title": "The Treasure Hunt is On!",
    "Type": "Filler",
    "Airdate": "2006-03-08T08:00:00.000Z"
  },
  {
    "#": 176,
    "Title": "Run, Dodge, Zigzag! Chase or Be Chased!",
    "Type": "Filler",
    "Airdate": "2006-03-15T08:00:00.000Z"
  },
  {
    "#": 177,
    "Title": "Please, Mr. Postman!",
    "Type": "Filler",
    "Airdate": "2006-03-22T08:00:00.000Z"
  },
  {
    "#": 178,
    "Title": "Encounter! The Boy with a Star's Name",
    "Type": "Filler",
    "Airdate": "2006-03-29T08:00:00.000Z"
  },
  {
    "#": 179,
    "Title": "The Remembered Lullaby",
    "Type": "Filler",
    "Airdate": "2006-04-05T07:00:00.000Z"
  },
  {
    "#": 180,
    "Title": "Hidden Jutsu: The Price of The Ninja Art: Kujaku",
    "Type": "Filler",
    "Airdate": "2006-04-12T07:00:00.000Z"
  },
  {
    "#": 181,
    "Title": "Hoshikage, The Buried Truth",
    "Type": "Filler",
    "Airdate": "2006-04-19T07:00:00.000Z"
  },
  {
    "#": 182,
    "Title": "Reunion, The Remaining time",
    "Type": "Filler",
    "Airdate": "2006-04-26T07:00:00.000Z"
  },
  {
    "#": 183,
    "Title": "The Star's Radiance",
    "Type": "Filler",
    "Airdate": "2006-05-03T07:00:00.000Z"
  },
  {
    "#": 184,
    "Title": "Kiba's Long Day!",
    "Type": "Filler",
    "Airdate": "2006-05-10T07:00:00.000Z"
  },
  {
    "#": 185,
    "Title": "A Legend from the Hidden Leaf: The Onbaa!",
    "Type": "Filler",
    "Airdate": "2006-05-17T07:00:00.000Z"
  },
  {
    "#": 186,
    "Title": "Laughing Shino",
    "Type": "Filler",
    "Airdate": "2006-05-24T07:00:00.000Z"
  },
  {
    "#": 187,
    "Title": "Open for Business! The Leaf Moving Service",
    "Type": "Filler",
    "Airdate": "2006-05-31T07:00:00.000Z"
  },
  {
    "#": 188,
    "Title": "Mystery of the Targeted Merchants",
    "Type": "Filler",
    "Airdate": "2006-06-07T07:00:00.000Z"
  },
  {
    "#": 189,
    "Title": "A Limitless Supply of Ninja Tools",
    "Type": "Filler",
    "Airdate": "2006-06-14T07:00:00.000Z"
  },
  {
    "#": 190,
    "Title": "The Byakugan Sees the Blind Spot",
    "Type": "Filler",
    "Airdate": "2006-06-21T07:00:00.000Z"
  },
  {
    "#": 191,
    "Title": "Forecast: Death! Cloudy with Chance of Sun",
    "Type": "Filler",
    "Airdate": "2006-06-28T07:00:00.000Z"
  },
  {
    "#": 192,
    "Title": "Ino Screams! Chubby Paradise!",
    "Type": "Filler",
    "Airdate": "2006-07-05T07:00:00.000Z"
  },
  {
    "#": 193,
    "Title": "Viva Dojo Challenge! Youth Is All About Passion!",
    "Type": "Filler",
    "Airdate": "2006-07-12T07:00:00.000Z"
  },
  {
    "#": 194,
    "Title": "The Mysterious Curse of the Haunted Castle",
    "Type": "Filler",
    "Airdate": "2006-07-19T07:00:00.000Z"
  },
  {
    "#": 195,
    "Title": "The Third Super-Beast!",
    "Type": "Filler",
    "Airdate": "2006-07-26T07:00:00.000Z"
  },
  {
    "#": 196,
    "Title": "Hot-Blooded Confrontation: Student vs. Sensei",
    "Type": "Filler",
    "Airdate": "2006-08-09T07:00:00.000Z"
  },
  {
    "#": 197,
    "Title": "Crisis! The Hidden Leaf 11 Gather!",
    "Type": "Filler",
    "Airdate": "2006-08-16T07:00:00.000Z"
  },
  {
    "#": 198,
    "Title": "The ANBU Gives Up? Naruto's Recollection",
    "Type": "Filler",
    "Airdate": "2006-08-23T07:00:00.000Z"
  },
  {
    "#": 199,
    "Title": "The Missed Target",
    "Type": "Filler",
    "Airdate": "2006-08-30T07:00:00.000Z"
  },
  {
    "#": 200,
    "Title": "The Powerful Helper",
    "Type": "Filler",
    "Airdate": "2006-09-13T07:00:00.000Z"
  },
  {
    "#": 201,
    "Title": "Multiple Traps! Countdown to Destruction",
    "Type": "Filler",
    "Airdate": "2006-09-20T07:00:00.000Z"
  },
  {
    "#": 202,
    "Title": "The Top 5 Ninja Battles",
    "Type": "Filler",
    "Airdate": "2006-09-27T07:00:00.000Z"
  },
  {
    "#": 203,
    "Title": "Kurenai's Decision, Squad 8 Left Behind",
    "Type": "Filler",
    "Airdate": "2006-10-05T07:00:00.000Z"
  },
  {
    "#": 204,
    "Title": "Yakumo's Sealed Ability",
    "Type": "Filler",
    "Airdate": "2006-10-05T07:00:00.000Z"
  },
  {
    "#": 205,
    "Title": "Kurenai's Top-Secret Mission: The Promise With the Third Hokage",
    "Type": "Filler",
    "Airdate": "2006-10-05T07:00:00.000Z"
  },
  {
    "#": 206,
    "Title": "Genjutsu or Reality?",
    "Type": "Filler",
    "Airdate": "2006-10-19T07:00:00.000Z"
  },
  {
    "#": 207,
    "Title": "The Supposed Sealed Ability",
    "Type": "Filler",
    "Airdate": "2006-10-26T07:00:00.000Z"
  },
  {
    "#": 208,
    "Title": "The Weight of the Prized Artifact!",
    "Type": "Filler",
    "Airdate": "2006-11-02T08:00:00.000Z"
  },
  {
    "#": 209,
    "Title": "The Enemy: Ninja Dropouts",
    "Type": "Filler",
    "Airdate": "2006-11-09T08:00:00.000Z"
  },
  {
    "#": 210,
    "Title": "The Bewildering Forest",
    "Type": "Filler",
    "Airdate": "2006-11-16T08:00:00.000Z"
  },
  {
    "#": 211,
    "Title": "Memory of Flames",
    "Type": "Filler",
    "Airdate": "2006-11-30T08:00:00.000Z"
  },
  {
    "#": 212,
    "Title": "To Each His Own Path",
    "Type": "Filler",
    "Airdate": "2006-12-07T08:00:00.000Z"
  },
  {
    "#": 213,
    "Title": "Vanished Memories",
    "Type": "Filler",
    "Airdate": "2006-12-14T08:00:00.000Z"
  },
  {
    "#": 214,
    "Title": "Bringing Back Reality",
    "Type": "Filler",
    "Airdate": "2006-12-21T08:00:00.000Z"
  },
  {
    "#": 215,
    "Title": "A Past to Be Erased",
    "Type": "Filler",
    "Airdate": "2006-12-21T08:00:00.000Z"
  },
  {
    "#": 216,
    "Title": "The Targeted Shukaku",
    "Type": "Filler",
    "Airdate": "2007-01-11T08:00:00.000Z"
  },
  {
    "#": 217,
    "Title": "Sand Alliance with the Leaf Shinobi",
    "Type": "Filler",
    "Airdate": "2007-01-18T08:00:00.000Z"
  },
  {
    "#": 218,
    "Title": "The Counterattack!",
    "Type": "Filler",
    "Airdate": "2007-01-25T08:00:00.000Z"
  },
  {
    "#": 219,
    "Title": "The Ultimate Weapon Reborn",
    "Type": "Filler",
    "Airdate": "2007-02-01T08:00:00.000Z"
  },
  {
    "#": 220,
    "Title": "Departure",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-02-08T08:00:00.000Z"
  }
],

'GYQ4MW246': //NARUTO SHIPPUDEN
[
  {
    "#": 1,
    "Title": "Homecoming",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-02-15T08:00:00.000Z"
  },
  {
    "#": 2,
    "Title": "The Akatsuki Makes Its Move",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-02-15T08:00:00.000Z"
  },
  {
    "#": 3,
    "Title": "The Results of Training",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-02-22T08:00:00.000Z"
  },
  {
    "#": 4,
    "Title": "The Jinchuriki of the Sand",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-03-01T08:00:00.000Z"
  },
  {
    "#": 5,
    "Title": "The Kazekage Stands Tall",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-03-15T07:00:00.000Z"
  },
  {
    "#": 6,
    "Title": "Mission Cleared",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-03-29T07:00:00.000Z"
  },
  {
    "#": 7,
    "Title": "Run, Kankuro",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-03-29T07:00:00.000Z"
  },
  {
    "#": 8,
    "Title": "Team Kakashi, Deployed",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-04-12T07:00:00.000Z"
  },
  {
    "#": 9,
    "Title": "The Jinchuriki's Tears",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-04-12T07:00:00.000Z"
  },
  {
    "#": 10,
    "Title": "Sealing Jutsu: Nine Phantom Dragons",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-04-19T07:00:00.000Z"
  },
  {
    "#": 11,
    "Title": "The Medical Ninja's Student",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-04-26T07:00:00.000Z"
  },
  {
    "#": 12,
    "Title": "The Retired Granny's Determination",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-05-03T07:00:00.000Z"
  },
  {
    "#": 13,
    "Title": "A Meeting With Destiny",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-05-10T07:00:00.000Z"
  },
  {
    "#": 14,
    "Title": "Naruto's Growth",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-05-17T07:00:00.000Z"
  },
  {
    "#": 15,
    "Title": "The Secret Weapon is Called....",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-05-24T07:00:00.000Z"
  },
  {
    "#": 16,
    "Title": "The Secret of Jinchuriki",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-05-31T07:00:00.000Z"
  },
  {
    "#": 17,
    "Title": "The Death of Gaara!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-06-07T07:00:00.000Z"
  },
  {
    "#": 18,
    "Title": "Charge Tactic! Button Hook Entry!!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-06-21T07:00:00.000Z"
  },
  {
    "#": 19,
    "Title": "Traps Activate! Team Guy's Enemies",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-07-05T07:00:00.000Z"
  },
  {
    "#": 20,
    "Title": "Hiruko vs. Two Kunoichi!",
    "Type": "Manga Canon",
    "Airdate": "2007-07-19T07:00:00.000Z"
  },
  {
    "#": 21,
    "Title": "Sasori's Real Face",
    "Type": "Manga Canon",
    "Airdate": "2007-07-26T07:00:00.000Z"
  },
  {
    "#": 22,
    "Title": "Chiyo's Secret Skills",
    "Type": "Manga Canon",
    "Airdate": "2007-08-02T07:00:00.000Z"
  },
  {
    "#": 23,
    "Title": "Father and Mother",
    "Type": "Manga Canon",
    "Airdate": "2007-08-02T07:00:00.000Z"
  },
  {
    "#": 24,
    "Title": "The Third Kazekage",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-08-09T07:00:00.000Z"
  },
  {
    "#": 25,
    "Title": "Three Minutes Between Life and Death",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-08-16T07:00:00.000Z"
  },
  {
    "#": 26,
    "Title": "Puppet Fight: 10 vs. 100!",
    "Type": "Manga Canon",
    "Airdate": "2007-08-23T07:00:00.000Z"
  },
  {
    "#": 27,
    "Title": "Impossible Dream",
    "Type": "Manga Canon",
    "Airdate": "2007-08-30T07:00:00.000Z"
  },
  {
    "#": 28,
    "Title": "Beasts! Alive Again!",
    "Type": "Anime Canon",
    "Airdate": "2007-09-13T07:00:00.000Z"
  },
  {
    "#": 29,
    "Title": "Kakashi Enlightened!",
    "Type": "Manga Canon",
    "Airdate": "2007-09-27T07:00:00.000Z"
  },
  {
    "#": 30,
    "Title": "Aesthetics of an Instant",
    "Type": "Manga Canon",
    "Airdate": "2007-09-27T07:00:00.000Z"
  },
  {
    "#": 31,
    "Title": "The Legacy!",
    "Type": "Manga Canon",
    "Airdate": "2007-10-18T07:00:00.000Z"
  },
  {
    "#": 32,
    "Title": "Return of the Kazekage",
    "Type": "Manga Canon",
    "Airdate": "2007-10-25T07:00:00.000Z"
  },
  {
    "#": 33,
    "Title": "The New Target",
    "Type": "Manga Canon",
    "Airdate": "2007-11-08T08:00:00.000Z"
  },
  {
    "#": 34,
    "Title": "Formation! New Team Kakashi!",
    "Type": "Manga Canon",
    "Airdate": "2007-11-15T08:00:00.000Z"
  },
  {
    "#": 35,
    "Title": "An Unnecessary Addition",
    "Type": "Manga Canon",
    "Airdate": "2007-11-22T08:00:00.000Z"
  },
  {
    "#": 36,
    "Title": "The Fake Smile",
    "Type": "Manga Canon",
    "Airdate": "2007-11-29T08:00:00.000Z"
  },
  {
    "#": 37,
    "Title": "Untitled",
    "Type": "Manga Canon",
    "Airdate": "2007-11-29T08:00:00.000Z"
  },
  {
    "#": 38,
    "Title": "Simulation",
    "Type": "Manga Canon",
    "Airdate": "2007-12-06T08:00:00.000Z"
  },
  {
    "#": 39,
    "Title": "The Tenchi Bridge",
    "Type": "Manga Canon",
    "Airdate": "2007-12-13T08:00:00.000Z"
  },
  {
    "#": 40,
    "Title": "Nine-Tails Unleashed",
    "Type": "Manga Canon",
    "Airdate": "2007-12-20T08:00:00.000Z"
  },
  {
    "#": 41,
    "Title": "The Top-Secret Mission Begins",
    "Type": "Manga Canon",
    "Airdate": "2007-12-20T08:00:00.000Z"
  },
  {
    "#": 42,
    "Title": "Orochimaru vs. Jinchuriki",
    "Type": "Manga Canon",
    "Airdate": "2008-01-10T08:00:00.000Z"
  },
  {
    "#": 43,
    "Title": "Sakura's Tears",
    "Type": "Manga Canon",
    "Airdate": "2008-01-17T08:00:00.000Z"
  },
  {
    "#": 44,
    "Title": "The Secret of the Battle!",
    "Type": "Manga Canon",
    "Airdate": "2008-01-24T08:00:00.000Z"
  },
  {
    "#": 45,
    "Title": "The Consequences of Betrayal",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2008-01-31T08:00:00.000Z"
  },
  {
    "#": 46,
    "Title": "The Unfinished Page",
    "Type": "Manga Canon",
    "Airdate": "2008-02-07T08:00:00.000Z"
  },
  {
    "#": 47,
    "Title": "Infiltration: The Den of the Snake!",
    "Type": "Manga Canon",
    "Airdate": "2008-02-14T08:00:00.000Z"
  },
  {
    "#": 48,
    "Title": "Bonds",
    "Type": "Manga Canon",
    "Airdate": "2008-02-28T08:00:00.000Z"
  },
  {
    "#": 49,
    "Title": "Something Important...",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2008-03-06T08:00:00.000Z"
  },
  {
    "#": 50,
    "Title": "The Picture Book's Story",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2008-03-13T07:00:00.000Z"
  },
  {
    "#": 51,
    "Title": "Reunion",
    "Type": "Manga Canon",
    "Airdate": "2008-03-20T07:00:00.000Z"
  },
  {
    "#": 52,
    "Title": "The Power of the Uchiha",
    "Type": "Manga Canon",
    "Airdate": "2008-03-20T07:00:00.000Z"
  },
  {
    "#": 53,
    "Title": "Title",
    "Type": "Manga Canon",
    "Airdate": "2008-04-03T07:00:00.000Z"
  },
  {
    "#": 54,
    "Title": "Nightmare",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2008-04-03T07:00:00.000Z"
  },
  {
    "#": 55,
    "Title": "Wind",
    "Type": "Manga Canon",
    "Airdate": "2008-04-17T07:00:00.000Z"
  },
  {
    "#": 56,
    "Title": "Squirming",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2008-04-24T07:00:00.000Z"
  },
  {
    "#": 57,
    "Title": "Robbed of Sleep",
    "Type": "Filler",
    "Airdate": "2008-05-08T07:00:00.000Z"
  },
  {
    "#": 58,
    "Title": "Loneliness",
    "Type": "Filler",
    "Airdate": "2008-05-08T07:00:00.000Z"
  },
  {
    "#": 59,
    "Title": "A New Enemy",
    "Type": "Filler",
    "Airdate": "2008-05-15T07:00:00.000Z"
  },
  {
    "#": 60,
    "Title": "Impermanence",
    "Type": "Filler",
    "Airdate": "2008-05-22T07:00:00.000Z"
  },
  {
    "#": 61,
    "Title": "Contact",
    "Type": "Filler",
    "Airdate": "2008-05-29T07:00:00.000Z"
  },
  {
    "#": 62,
    "Title": "Teammate",
    "Type": "Filler",
    "Airdate": "2008-06-05T07:00:00.000Z"
  },
  {
    "#": 63,
    "Title": "The Two Kings",
    "Type": "Filler",
    "Airdate": "2008-06-19T07:00:00.000Z"
  },
  {
    "#": 64,
    "Title": "The Jet-Black Signal Fire",
    "Type": "Filler",
    "Airdate": "2008-07-03T07:00:00.000Z"
  },
  {
    "#": 65,
    "Title": "Lockdown of Darkness",
    "Type": "Filler",
    "Airdate": "2008-07-03T07:00:00.000Z"
  },
  {
    "#": 66,
    "Title": "Revived Souls",
    "Type": "Filler",
    "Airdate": "2008-07-10T07:00:00.000Z"
  },
  {
    "#": 67,
    "Title": "Everyone's Struggle to the Death",
    "Type": "Filler",
    "Airdate": "2008-07-24T07:00:00.000Z"
  },
  {
    "#": 68,
    "Title": "Moment of Awakening",
    "Type": "Filler",
    "Airdate": "2008-07-31T07:00:00.000Z"
  },
  {
    "#": 69,
    "Title": "Despair",
    "Type": "Filler",
    "Airdate": "2008-07-31T07:00:00.000Z"
  },
  {
    "#": 70,
    "Title": "Resonance",
    "Type": "Filler",
    "Airdate": "2008-08-07T07:00:00.000Z"
  },
  {
    "#": 71,
    "Title": "My Friend",
    "Type": "Filler",
    "Airdate": "2008-08-14T07:00:00.000Z"
  },
  {
    "#": 72,
    "Title": "The Quietly Approaching Threat",
    "Type": "Manga Canon",
    "Airdate": "2008-08-21T07:00:00.000Z"
  },
  {
    "#": 73,
    "Title": "Akatsuki's Invasion",
    "Type": "Manga Canon",
    "Airdate": "2008-08-28T07:00:00.000Z"
  },
  {
    "#": 74,
    "Title": "Under the Starry Sky",
    "Type": "Manga Canon",
    "Airdate": "2008-09-04T07:00:00.000Z"
  },
  {
    "#": 75,
    "Title": "The Old Monk's Prayer",
    "Type": "Manga Canon",
    "Airdate": "2008-09-11T07:00:00.000Z"
  },
  {
    "#": 76,
    "Title": "The Next Step",
    "Type": "Manga Canon",
    "Airdate": "2008-09-25T07:00:00.000Z"
  },
  {
    "#": 77,
    "Title": "Climbing Silver",
    "Type": "Manga Canon",
    "Airdate": "2008-09-25T07:00:00.000Z"
  },
  {
    "#": 78,
    "Title": "The Judgment",
    "Type": "Manga Canon",
    "Airdate": "2008-10-02T07:00:00.000Z"
  },
  {
    "#": 79,
    "Title": "Unfulfilled Scream",
    "Type": "Manga Canon",
    "Airdate": "2008-10-02T07:00:00.000Z"
  },
  {
    "#": 80,
    "Title": "Last Words",
    "Type": "Manga Canon",
    "Airdate": "2008-10-16T07:00:00.000Z"
  },
  {
    "#": 81,
    "Title": "Sad News",
    "Type": "Manga Canon",
    "Airdate": "2008-10-23T07:00:00.000Z"
  },
  {
    "#": 82,
    "Title": "Team Ten",
    "Type": "Manga Canon",
    "Airdate": "2008-10-30T07:00:00.000Z"
  },
  {
    "#": 83,
    "Title": "Target: Locked On",
    "Type": "Manga Canon",
    "Airdate": "2008-11-06T08:00:00.000Z"
  },
  {
    "#": 84,
    "Title": "Kakuzu's Abilities",
    "Type": "Manga Canon",
    "Airdate": "2008-11-13T08:00:00.000Z"
  },
  {
    "#": 85,
    "Title": "Terrifying Secret",
    "Type": "Manga Canon",
    "Airdate": "2008-11-20T08:00:00.000Z"
  },
  {
    "#": 86,
    "Title": "Shikamaru's Genius",
    "Type": "Manga Canon",
    "Airdate": "2008-12-04T08:00:00.000Z"
  },
  {
    "#": 87,
    "Title": "When You Curse Someone, You Dig Your Own Grave",
    "Type": "Manga Canon",
    "Airdate": "2008-12-04T08:00:00.000Z"
  },
  {
    "#": 88,
    "Title": "Wind Style: Rasen Shuriken!",
    "Type": "Manga Canon",
    "Airdate": "2008-12-11T08:00:00.000Z"
  },
  {
    "#": 89,
    "Title": "The Price of Power",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2008-12-18T08:00:00.000Z"
  },
  {
    "#": 90,
    "Title": "A Shinobi's Determination",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2008-12-25T08:00:00.000Z"
  },
  {
    "#": 91,
    "Title": "Orochimaru's Hideout Discovered",
    "Type": "Filler",
    "Airdate": "2009-01-08T08:00:00.000Z"
  },
  {
    "#": 92,
    "Title": "Encounter",
    "Type": "Filler",
    "Airdate": "2009-01-15T08:00:00.000Z"
  },
  {
    "#": 93,
    "Title": "Connecting Hearts",
    "Type": "Filler",
    "Airdate": "2009-01-22T08:00:00.000Z"
  },
  {
    "#": 94,
    "Title": "A Night of Rain",
    "Type": "Filler",
    "Airdate": "2009-01-29T08:00:00.000Z"
  },
  {
    "#": 95,
    "Title": "The Two Charms",
    "Type": "Filler",
    "Airdate": "2009-02-05T08:00:00.000Z"
  },
  {
    "#": 96,
    "Title": "The Unseeing Enemy",
    "Type": "Filler",
    "Airdate": "2009-02-12T08:00:00.000Z"
  },
  {
    "#": 97,
    "Title": "The Labyrinth of Distorted Reflection",
    "Type": "Filler",
    "Airdate": "2009-02-19T08:00:00.000Z"
  },
  {
    "#": 98,
    "Title": "The Target Appears",
    "Type": "Filler",
    "Airdate": "2009-02-26T08:00:00.000Z"
  },
  {
    "#": 99,
    "Title": "The Rampaging Tailed Beast",
    "Type": "Filler",
    "Airdate": "2009-03-05T08:00:00.000Z"
  },
  {
    "#": 100,
    "Title": "Inside the Mist",
    "Type": "Filler",
    "Airdate": "2009-03-12T07:00:00.000Z"
  },
  {
    "#": 101,
    "Title": "Everyone's Feelings",
    "Type": "Filler",
    "Airdate": "2009-03-26T07:00:00.000Z"
  },
  {
    "#": 102,
    "Title": "Regroup!",
    "Type": "Filler",
    "Airdate": "2009-03-26T07:00:00.000Z"
  },
  {
    "#": 103,
    "Title": "The Four-Corner Sealing Barrier",
    "Type": "Filler",
    "Airdate": "2009-04-09T07:00:00.000Z"
  },
  {
    "#": 104,
    "Title": "Breaking the Crystal Style",
    "Type": "Filler",
    "Airdate": "2009-04-09T07:00:00.000Z"
  },
  {
    "#": 105,
    "Title": "The Battle Over the Barrier",
    "Type": "Filler",
    "Airdate": "2009-04-16T07:00:00.000Z"
  },
  {
    "#": 106,
    "Title": "Red Camellia",
    "Type": "Filler",
    "Airdate": "2009-04-23T07:00:00.000Z"
  },
  {
    "#": 107,
    "Title": "Strange Bedfellows",
    "Type": "Filler",
    "Airdate": "2009-04-30T07:00:00.000Z"
  },
  {
    "#": 108,
    "Title": "Guidepost of the Camellia",
    "Type": "Filler",
    "Airdate": "2009-05-07T07:00:00.000Z"
  },
  {
    "#": 109,
    "Title": "Cursed Seal Counterattack",
    "Type": "Filler",
    "Airdate": "2009-05-14T07:00:00.000Z"
  },
  {
    "#": 110,
    "Title": "Memory of Guilt",
    "Type": "Filler",
    "Airdate": "2009-05-21T07:00:00.000Z"
  },
  {
    "#": 111,
    "Title": "Shattered Promise",
    "Type": "Filler",
    "Airdate": "2009-05-28T07:00:00.000Z"
  },
  {
    "#": 112,
    "Title": "A Place to Return To",
    "Type": "Filler",
    "Airdate": "2009-06-04T07:00:00.000Z"
  },
  {
    "#": 113,
    "Title": "The Serpent's Pupil",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2009-06-11T07:00:00.000Z"
  },
  {
    "#": 114,
    "Title": "Eye of a Hawk",
    "Type": "Manga Canon",
    "Airdate": "2009-06-18T07:00:00.000Z"
  },
  {
    "#": 115,
    "Title": "Zabuza's Blade",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2009-06-25T07:00:00.000Z"
  },
  {
    "#": 116,
    "Title": "Guardian of the Iron Wall",
    "Type": "Manga Canon",
    "Airdate": "2009-07-02T07:00:00.000Z"
  },
  {
    "#": 117,
    "Title": "Jugo of the Northern Hideout",
    "Type": "Manga Canon",
    "Airdate": "2009-07-09T07:00:00.000Z"
  },
  {
    "#": 118,
    "Title": "Formation!",
    "Type": "Manga Canon",
    "Airdate": "2009-07-23T07:00:00.000Z"
  },
  {
    "#": 119,
    "Title": "Kakashi Chronicles: A Boy's Life on the Battlefield, Part 1",
    "Type": "Manga Canon",
    "Airdate": "2009-07-30T07:00:00.000Z"
  },
  {
    "#": 120,
    "Title": "Kakashi Chronicles: A Boy's Life on the Battlefield, Part 2",
    "Type": "Manga Canon",
    "Airdate": "2009-07-30T07:00:00.000Z"
  },
  {
    "#": 121,
    "Title": "Assemble",
    "Type": "Manga Canon",
    "Airdate": "2009-08-06T07:00:00.000Z"
  },
  {
    "#": 122,
    "Title": "The Hunt",
    "Type": "Manga Canon",
    "Airdate": "2009-08-13T07:00:00.000Z"
  },
  {
    "#": 123,
    "Title": "Clash!",
    "Type": "Manga Canon",
    "Airdate": "2009-08-20T07:00:00.000Z"
  },
  {
    "#": 124,
    "Title": "Art",
    "Type": "Manga Canon",
    "Airdate": "2009-08-27T07:00:00.000Z"
  },
  {
    "#": 125,
    "Title": "Disappearance",
    "Type": "Manga Canon",
    "Airdate": "2009-09-03T07:00:00.000Z"
  },
  {
    "#": 126,
    "Title": "Twilight",
    "Type": "Manga Canon",
    "Airdate": "2009-09-10T07:00:00.000Z"
  },
  {
    "#": 127,
    "Title": "Tales of a Gutsy Ninja ~Jiraiya Ninja Scroll~ Part 1",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2009-09-24T07:00:00.000Z"
  },
  {
    "#": 128,
    "Title": "Tales of a Gutsy Ninja ~Jiraiya Ninja Scroll~ Part 2",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2009-09-24T07:00:00.000Z"
  },
  {
    "#": 129,
    "Title": "Infiltrate! The Village Hidden in the Rain",
    "Type": "Manga Canon",
    "Airdate": "2009-10-08T07:00:00.000Z"
  },
  {
    "#": 130,
    "Title": "The Man Who Became God",
    "Type": "Manga Canon",
    "Airdate": "2009-10-08T07:00:00.000Z"
  },
  {
    "#": 131,
    "Title": "Honored Sage Mode!",
    "Type": "Manga Canon",
    "Airdate": "2009-10-15T07:00:00.000Z"
  },
  {
    "#": 132,
    "Title": "In Attendance, the Six Paths of Pain",
    "Type": "Manga Canon",
    "Airdate": "2009-10-22T07:00:00.000Z"
  },
  {
    "#": 133,
    "Title": "The Tale of Jiraiya the Gallant",
    "Type": "Manga Canon",
    "Airdate": "2009-10-29T07:00:00.000Z"
  },
  {
    "#": 134,
    "Title": "Banquet Invitation",
    "Type": "Manga Canon",
    "Airdate": "2009-11-05T08:00:00.000Z"
  },
  {
    "#": 135,
    "Title": "The Longest Moment...",
    "Type": "Manga Canon",
    "Airdate": "2009-11-19T08:00:00.000Z"
  },
  {
    "#": 136,
    "Title": "The Light & Dark of the Mangekyo Sharingan",
    "Type": "Manga Canon",
    "Airdate": "2009-11-19T08:00:00.000Z"
  },
  {
    "#": 137,
    "Title": "Amaterasu!",
    "Type": "Manga Canon",
    "Airdate": "2009-11-26T08:00:00.000Z"
  },
  {
    "#": 138,
    "Title": "The End",
    "Type": "Manga Canon",
    "Airdate": "2009-12-03T08:00:00.000Z"
  },
  {
    "#": 139,
    "Title": "The Mystery of Tobi",
    "Type": "Manga Canon",
    "Airdate": "2009-12-10T08:00:00.000Z"
  },
  {
    "#": 140,
    "Title": "Fate",
    "Type": "Manga Canon",
    "Airdate": "2009-12-17T08:00:00.000Z"
  },
  {
    "#": 141,
    "Title": "Truth",
    "Type": "Manga Canon",
    "Airdate": "2009-12-24T08:00:00.000Z"
  },
  {
    "#": 142,
    "Title": "Battle of Unraikyo",
    "Type": "Manga Canon",
    "Airdate": "2010-01-07T08:00:00.000Z"
  },
  {
    "#": 143,
    "Title": "The Eight Tails Vs. Sasuke",
    "Type": "Manga Canon",
    "Airdate": "2010-01-14T08:00:00.000Z"
  },
  {
    "#": 144,
    "Title": "Wanderer",
    "Type": "Filler",
    "Airdate": "2010-01-21T08:00:00.000Z"
  },
  {
    "#": 145,
    "Title": "Successor of the Forbidden Jutsu",
    "Type": "Filler",
    "Airdate": "2010-01-28T08:00:00.000Z"
  },
  {
    "#": 146,
    "Title": "The Successor's Wish",
    "Type": "Filler",
    "Airdate": "2010-02-04T08:00:00.000Z"
  },
  {
    "#": 147,
    "Title": "Rogue Ninja's Past",
    "Type": "Filler",
    "Airdate": "2010-02-11T08:00:00.000Z"
  },
  {
    "#": 148,
    "Title": "Heir to Darkness",
    "Type": "Filler",
    "Airdate": "2010-02-18T08:00:00.000Z"
  },
  {
    "#": 149,
    "Title": "Separation",
    "Type": "Filler",
    "Airdate": "2010-02-25T08:00:00.000Z"
  },
  {
    "#": 150,
    "Title": "The Forbidden Jutsu Released",
    "Type": "Filler",
    "Airdate": "2010-03-04T08:00:00.000Z"
  },
  {
    "#": 151,
    "Title": "Master and Student",
    "Type": "Filler",
    "Airdate": "2010-03-11T08:00:00.000Z"
  },
  {
    "#": 152,
    "Title": "Somber News",
    "Type": "Manga Canon",
    "Airdate": "2010-03-25T07:00:00.000Z"
  },
  {
    "#": 153,
    "Title": "Following the Master's Shadow",
    "Type": "Manga Canon",
    "Airdate": "2010-03-25T07:00:00.000Z"
  },
  {
    "#": 154,
    "Title": "Decryption",
    "Type": "Manga Canon",
    "Airdate": "2010-04-08T07:00:00.000Z"
  },
  {
    "#": 155,
    "Title": "The First Challenge",
    "Type": "Manga Canon",
    "Airdate": "2010-04-08T07:00:00.000Z"
  },
  {
    "#": 156,
    "Title": "Surpassing the Master",
    "Type": "Manga Canon",
    "Airdate": "2010-04-15T07:00:00.000Z"
  },
  {
    "#": 157,
    "Title": "Assault On the Leaf Village!",
    "Type": "Manga Canon",
    "Airdate": "2010-04-22T07:00:00.000Z"
  },
  {
    "#": 158,
    "Title": "Power to Believe",
    "Type": "Manga Canon",
    "Airdate": "2010-04-29T07:00:00.000Z"
  },
  {
    "#": 159,
    "Title": "Pain Vs. Kakashi",
    "Type": "Manga Canon",
    "Airdate": "2010-05-06T07:00:00.000Z"
  },
  {
    "#": 160,
    "Title": "Mystery of Pain",
    "Type": "Manga Canon",
    "Airdate": "2010-05-13T07:00:00.000Z"
  },
  {
    "#": 161,
    "Title": "Surname Is Sarutobi! Given Name, Konohamaru!",
    "Type": "Manga Canon",
    "Airdate": "2010-05-20T07:00:00.000Z"
  },
  {
    "#": 162,
    "Title": "Pain to the World",
    "Type": "Manga Canon",
    "Airdate": "2010-05-27T07:00:00.000Z"
  },
  {
    "#": 163,
    "Title": "Explosion! Sage Mode",
    "Type": "Manga Canon",
    "Airdate": "2010-06-03T07:00:00.000Z"
  },
  {
    "#": 164,
    "Title": "Danger! Sage Mode Limit Reached",
    "Type": "Manga Canon",
    "Airdate": "2010-06-10T07:00:00.000Z"
  },
  {
    "#": 165,
    "Title": "Nine Tails, Captured!",
    "Type": "Manga Canon",
    "Airdate": "2010-06-17T07:00:00.000Z"
  },
  {
    "#": 166,
    "Title": "Confessions",
    "Type": "Manga Canon",
    "Airdate": "2010-06-24T07:00:00.000Z"
  },
  {
    "#": 167,
    "Title": "Planetary Devastation",
    "Type": "Manga Canon",
    "Airdate": "2010-07-01T07:00:00.000Z"
  },
  {
    "#": 168,
    "Title": "Fourth Hokage",
    "Type": "Manga Canon",
    "Airdate": "2010-07-15T07:00:00.000Z"
  },
  {
    "#": 169,
    "Title": "The Two Students",
    "Type": "Manga Canon",
    "Airdate": "2010-07-22T07:00:00.000Z"
  },
  {
    "#": 170,
    "Title": "Big Adventure! The Quest for the Fourth Hokage's Legacy, Part 1",
    "Type": "Filler",
    "Airdate": "2010-07-29T07:00:00.000Z"
  },
  {
    "#": 171,
    "Title": "Big Adventure! The Quest for the Fourth Hokage's Legacy, Part 2",
    "Type": "Filler",
    "Airdate": "2010-07-29T07:00:00.000Z"
  },
  {
    "#": 172,
    "Title": "Meeting",
    "Type": "Manga Canon",
    "Airdate": "2010-08-05T07:00:00.000Z"
  },
  {
    "#": 173,
    "Title": "Origin of Pain",
    "Type": "Manga Canon",
    "Airdate": "2010-08-12T07:00:00.000Z"
  },
  {
    "#": 174,
    "Title": "Tale of Naruto Uzumaki",
    "Type": "Manga Canon",
    "Airdate": "2010-08-19T07:00:00.000Z"
  },
  {
    "#": 175,
    "Title": "Hero of the Hidden Leaf",
    "Type": "Manga Canon",
    "Airdate": "2010-08-26T07:00:00.000Z"
  },
  {
    "#": 176,
    "Title": "Rookie Instructor Iruka",
    "Type": "Filler",
    "Airdate": "2010-09-02T07:00:00.000Z"
  },
  {
    "#": 177,
    "Title": "Iruka's Ordeal",
    "Type": "Filler",
    "Airdate": "2010-09-09T07:00:00.000Z"
  },
  {
    "#": 178,
    "Title": "Iruka's Decision",
    "Type": "Filler",
    "Airdate": "2010-09-16T07:00:00.000Z"
  },
  {
    "#": 179,
    "Title": "Kakashi Hatake, the Jonin in Charge",
    "Type": "Filler",
    "Airdate": "2010-09-30T07:00:00.000Z"
  },
  {
    "#": 180,
    "Title": "Inari's Courage Put to the Test",
    "Type": "Filler",
    "Airdate": "2010-10-07T07:00:00.000Z"
  },
  {
    "#": 181,
    "Title": "Naruto's School of Revenge",
    "Type": "Filler",
    "Airdate": "2010-10-14T07:00:00.000Z"
  },
  {
    "#": 182,
    "Title": "Gaara's Bond",
    "Type": "Filler",
    "Airdate": "2010-10-21T07:00:00.000Z"
  },
  {
    "#": 183,
    "Title": "Naruto: Outbreak",
    "Type": "Filler",
    "Airdate": "2010-10-28T07:00:00.000Z"
  },
  {
    "#": 184,
    "Title": "Deploy! Team Tenten",
    "Type": "Filler",
    "Airdate": "2010-11-04T07:00:00.000Z"
  },
  {
    "#": 185,
    "Title": "Animal District",
    "Type": "Filler",
    "Airdate": "2010-11-11T08:00:00.000Z"
  },
  {
    "#": 186,
    "Title": "Ah, the Medicine of Youth",
    "Type": "Filler",
    "Airdate": "2010-11-18T08:00:00.000Z"
  },
  {
    "#": 187,
    "Title": "Gutsy Master and Student: The Training",
    "Type": "Filler",
    "Airdate": "2010-11-25T08:00:00.000Z"
  },
  {
    "#": 188,
    "Title": "Record of the Gutsy Ninja Master and Student",
    "Type": "Filler",
    "Airdate": "2010-11-25T08:00:00.000Z"
  },
  {
    "#": 189,
    "Title": "Sasuke's Paw Encyclopedia",
    "Type": "Filler",
    "Airdate": "2010-12-02T08:00:00.000Z"
  },
  {
    "#": 190,
    "Title": "Naruto and the Old Soldier",
    "Type": "Filler",
    "Airdate": "2010-12-09T08:00:00.000Z"
  },
  {
    "#": 191,
    "Title": "Kakashi Love Song",
    "Type": "Filler",
    "Airdate": "2010-12-16T08:00:00.000Z"
  },
  {
    "#": 192,
    "Title": "Neji Chronicles",
    "Type": "Filler",
    "Airdate": "2010-12-23T08:00:00.000Z"
  },
  {
    "#": 193,
    "Title": "The Man Who Died Twice",
    "Type": "Filler",
    "Airdate": "2011-01-06T08:00:00.000Z"
  },
  {
    "#": 194,
    "Title": "The Worst Three-Legged Race",
    "Type": "Filler",
    "Airdate": "2011-01-13T08:00:00.000Z"
  },
  {
    "#": 195,
    "Title": "Team 10's Teamwork",
    "Type": "Filler",
    "Airdate": "2011-01-20T08:00:00.000Z"
  },
  {
    "#": 196,
    "Title": "Drive Towards Darkness",
    "Type": "Filler",
    "Airdate": "2011-01-27T08:00:00.000Z"
  },
  {
    "#": 197,
    "Title": "The Sixth Hokage Danzo",
    "Type": "Manga Canon",
    "Airdate": "2011-02-10T08:00:00.000Z"
  },
  {
    "#": 198,
    "Title": "Five Kage Summit's Eve",
    "Type": "Manga Canon",
    "Airdate": "2011-02-10T08:00:00.000Z"
  },
  {
    "#": 199,
    "Title": "Enter the Five Kage!",
    "Type": "Manga Canon",
    "Airdate": "2011-02-17T08:00:00.000Z"
  },
  {
    "#": 200,
    "Title": "Naruto's Plea",
    "Type": "Manga Canon",
    "Airdate": "2011-02-24T08:00:00.000Z"
  },
  {
    "#": 201,
    "Title": "Painful Decision",
    "Type": "Manga Canon",
    "Airdate": "2011-03-03T08:00:00.000Z"
  },
  {
    "#": 202,
    "Title": "Racing Lightning",
    "Type": "Manga Canon",
    "Airdate": "2011-03-10T08:00:00.000Z"
  },
  {
    "#": 203,
    "Title": "Sasuke's Ninja Way",
    "Type": "Manga Canon",
    "Airdate": "2011-03-17T07:00:00.000Z"
  },
  {
    "#": 204,
    "Title": "Power of the Five Kage",
    "Type": "Manga Canon",
    "Airdate": "2011-03-24T07:00:00.000Z"
  },
  {
    "#": 205,
    "Title": "Declaration of War",
    "Type": "Manga Canon",
    "Airdate": "2011-03-31T07:00:00.000Z"
  },
  {
    "#": 206,
    "Title": "Sakura's Feelings",
    "Type": "Manga Canon",
    "Airdate": "2011-04-07T07:00:00.000Z"
  },
  {
    "#": 207,
    "Title": "The Tailed Beast vs. The Tailless Tailed Beast",
    "Type": "Manga Canon",
    "Airdate": "2011-04-14T07:00:00.000Z"
  },
  {
    "#": 208,
    "Title": "As One's Friend",
    "Type": "Manga Canon",
    "Airdate": "2011-04-21T07:00:00.000Z"
  },
  {
    "#": 209,
    "Title": "Danzo's Right Arm",
    "Type": "Manga Canon",
    "Airdate": "2011-04-28T07:00:00.000Z"
  },
  {
    "#": 210,
    "Title": "The Forbidden Visual Jutsu",
    "Type": "Manga Canon",
    "Airdate": "2011-05-05T07:00:00.000Z"
  },
  {
    "#": 211,
    "Title": "Danzo Shimura",
    "Type": "Manga Canon",
    "Airdate": "2011-05-12T07:00:00.000Z"
  },
  {
    "#": 212,
    "Title": "Sakura's Resolve",
    "Type": "Manga Canon",
    "Airdate": "2011-05-19T07:00:00.000Z"
  },
  {
    "#": 213,
    "Title": "Lost Bonds",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2011-05-26T07:00:00.000Z"
  },
  {
    "#": 214,
    "Title": "The Burden",
    "Type": "Manga Canon",
    "Airdate": "2011-06-02T07:00:00.000Z"
  },
  {
    "#": 215,
    "Title": "Two Fates",
    "Type": "Manga Canon",
    "Airdate": "2011-06-09T07:00:00.000Z"
  },
  {
    "#": 216,
    "Title": "High-Level Shinobi",
    "Type": "Manga Canon",
    "Airdate": "2011-06-16T07:00:00.000Z"
  },
  {
    "#": 217,
    "Title": "The Infiltrator",
    "Type": "Manga Canon",
    "Airdate": "2011-06-23T07:00:00.000Z"
  },
  {
    "#": 218,
    "Title": "The Five Great Nations Mobilize",
    "Type": "Manga Canon",
    "Airdate": "2011-06-30T07:00:00.000Z"
  },
  {
    "#": 219,
    "Title": "Kakashi Hatake, The Hokage",
    "Type": "Manga Canon",
    "Airdate": "2011-07-07T07:00:00.000Z"
  },
  {
    "#": 220,
    "Title": "Prophecy of the Great Lord Elder",
    "Type": "Manga Canon",
    "Airdate": "2011-07-21T07:00:00.000Z"
  },
  {
    "#": 221,
    "Title": "Storage",
    "Type": "Manga Canon",
    "Airdate": "2011-07-28T07:00:00.000Z"
  },
  {
    "#": 222,
    "Title": "The Five Kage's Decision",
    "Type": "Manga Canon",
    "Airdate": "2011-07-28T07:00:00.000Z"
  },
  {
    "#": 223,
    "Title": "The Young Man and the Sea",
    "Type": "Filler",
    "Airdate": "2011-08-04T07:00:00.000Z"
  },
  {
    "#": 224,
    "Title": "The Ninja of Benisu",
    "Type": "Filler",
    "Airdate": "2011-08-11T07:00:00.000Z"
  },
  {
    "#": 225,
    "Title": "The Cursed Ghost Ship",
    "Type": "Filler",
    "Airdate": "2011-08-18T07:00:00.000Z"
  },
  {
    "#": 226,
    "Title": "Battleship Island",
    "Type": "Filler",
    "Airdate": "2011-08-25T07:00:00.000Z"
  },
  {
    "#": 227,
    "Title": "The Forgotten Island",
    "Type": "Filler",
    "Airdate": "2011-09-01T07:00:00.000Z"
  },
  {
    "#": 228,
    "Title": "Fight! Rock Lee!",
    "Type": "Filler",
    "Airdate": "2011-09-08T07:00:00.000Z"
  },
  {
    "#": 229,
    "Title": "Eat or Die! Mushrooms from Hell",
    "Type": "Filler",
    "Airdate": "2011-09-22T07:00:00.000Z"
  },
  {
    "#": 230,
    "Title": "Revenge of the Shadow Clones",
    "Type": "Filler",
    "Airdate": "2011-09-29T07:00:00.000Z"
  },
  {
    "#": 231,
    "Title": "The Closed Route",
    "Type": "Filler",
    "Airdate": "2011-10-06T07:00:00.000Z"
  },
  {
    "#": 232,
    "Title": "The Girls Get-Together",
    "Type": "Filler",
    "Airdate": "2011-10-13T07:00:00.000Z"
  },
  {
    "#": 233,
    "Title": "Naruto's Imposter",
    "Type": "Filler",
    "Airdate": "2011-10-20T07:00:00.000Z"
  },
  {
    "#": 234,
    "Title": "Naruto's Favorite Student",
    "Type": "Filler",
    "Airdate": "2011-10-27T07:00:00.000Z"
  },
  {
    "#": 235,
    "Title": "The Kunoichi of Nadeshiko Village",
    "Type": "Filler",
    "Airdate": "2011-11-03T07:00:00.000Z"
  },
  {
    "#": 236,
    "Title": "Friends You Can Count On",
    "Type": "Filler",
    "Airdate": "2011-11-10T08:00:00.000Z"
  },
  {
    "#": 237,
    "Title": "Ah, My Hero Lady Tsunade!",
    "Type": "Filler",
    "Airdate": "2011-11-24T08:00:00.000Z"
  },
  {
    "#": 238,
    "Title": "Sai's Day Off",
    "Type": "Filler",
    "Airdate": "2011-12-01T08:00:00.000Z"
  },
  {
    "#": 239,
    "Title": "The Legendary Ino-Shika-Cho Trio",
    "Type": "Filler",
    "Airdate": "2011-12-08T08:00:00.000Z"
  },
  {
    "#": 240,
    "Title": "Kiba's Determination",
    "Type": "Filler",
    "Airdate": "2011-12-15T08:00:00.000Z"
  },
  {
    "#": 241,
    "Title": "Kakashi, My Eternal Rival!",
    "Type": "Filler",
    "Airdate": "2011-12-22T08:00:00.000Z"
  },
  {
    "#": 242,
    "Title": "Naruto's Vow",
    "Type": "Filler",
    "Airdate": "2011-12-28T08:00:00.000Z"
  },
  {
    "#": 243,
    "Title": "Land Ahoy! Is This the Island of Paradise?",
    "Type": "Manga Canon",
    "Airdate": "2012-01-05T08:00:00.000Z"
  },
  {
    "#": 244,
    "Title": "Killer Bee and Motoi",
    "Type": "Manga Canon",
    "Airdate": "2012-01-12T08:00:00.000Z"
  },
  {
    "#": 245,
    "Title": "The Next Challenge! Naruto vs. The Nine Tails!!",
    "Type": "Manga Canon",
    "Airdate": "2012-01-19T08:00:00.000Z"
  },
  {
    "#": 246,
    "Title": "The Orange Spark",
    "Type": "Manga Canon",
    "Airdate": "2012-01-26T08:00:00.000Z"
  },
  {
    "#": 247,
    "Title": "Target: Nine Tails",
    "Type": "Manga Canon",
    "Airdate": "2012-02-02T08:00:00.000Z"
  },
  {
    "#": 248,
    "Title": "The Fourth Hokage's Death Match",
    "Type": "Manga Canon",
    "Airdate": "2012-02-09T08:00:00.000Z"
  },
  {
    "#": 249,
    "Title": "Thank You",
    "Type": "Manga Canon",
    "Airdate": "2012-02-09T08:00:00.000Z"
  },
  {
    "#": 250,
    "Title": "Battle in Paradise! the Odd Beast vs. the Monster!",
    "Type": "Manga Canon",
    "Airdate": "2012-02-16T08:00:00.000Z"
  },
  {
    "#": 251,
    "Title": "The Man Named Kisame",
    "Type": "Manga Canon",
    "Airdate": "2012-02-23T08:00:00.000Z"
  },
  {
    "#": 252,
    "Title": "The Angelic Herald of Death",
    "Type": "Manga Canon",
    "Airdate": "2012-03-01T08:00:00.000Z"
  },
  {
    "#": 253,
    "Title": "The Bridge to Peace",
    "Type": "Manga Canon",
    "Airdate": "2012-03-08T08:00:00.000Z"
  },
  {
    "#": 254,
    "Title": "The Super Secret S-Rank Mission",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2012-03-15T07:00:00.000Z"
  },
  {
    "#": 255,
    "Title": "The Artist Returns",
    "Type": "Manga Canon",
    "Airdate": "2012-03-22T07:00:00.000Z"
  },
  {
    "#": 256,
    "Title": "Assemble! Allied Shinobi Forces!",
    "Type": "Manga Canon",
    "Airdate": "2012-03-29T07:00:00.000Z"
  },
  {
    "#": 257,
    "Title": "Meeting",
    "Type": "Filler",
    "Airdate": "2012-04-05T07:00:00.000Z"
  },
  {
    "#": 258,
    "Title": "Rivals",
    "Type": "Filler",
    "Airdate": "2012-04-12T07:00:00.000Z"
  },
  {
    "#": 259,
    "Title": "Rift",
    "Type": "Filler",
    "Airdate": "2012-04-19T07:00:00.000Z"
  },
  {
    "#": 260,
    "Title": "Parting",
    "Type": "Filler",
    "Airdate": "2012-04-26T07:00:00.000Z"
  },
  {
    "#": 261,
    "Title": "For My Friend",
    "Type": "Manga Canon",
    "Airdate": "2012-05-03T07:00:00.000Z"
  },
  {
    "#": 262,
    "Title": "War Begins!",
    "Type": "Manga Canon",
    "Airdate": "2012-05-10T07:00:00.000Z"
  },
  {
    "#": 263,
    "Title": "Sai and Shin",
    "Type": "Manga Canon",
    "Airdate": "2012-05-17T07:00:00.000Z"
  },
  {
    "#": 264,
    "Title": "Secrets of the Reanimation Jutsu",
    "Type": "Manga Canon",
    "Airdate": "2012-05-24T07:00:00.000Z"
  },
  {
    "#": 265,
    "Title": "An Old Nemesis Returns",
    "Type": "Manga Canon",
    "Airdate": "2012-05-31T07:00:00.000Z"
  },
  {
    "#": 266,
    "Title": "The First and Last Opponent",
    "Type": "Manga Canon",
    "Airdate": "2012-06-07T07:00:00.000Z"
  },
  {
    "#": 267,
    "Title": "The Brilliant Military Advisor of the Hidden Leaf",
    "Type": "Manga Canon",
    "Airdate": "2012-06-21T07:00:00.000Z"
  },
  {
    "#": 268,
    "Title": "Battleground!",
    "Type": "Manga Canon",
    "Airdate": "2012-06-28T07:00:00.000Z"
  },
  {
    "#": 269,
    "Title": "Forbidden Words",
    "Type": "Manga Canon",
    "Airdate": "2012-07-05T07:00:00.000Z"
  },
  {
    "#": 270,
    "Title": "Golden Bonds",
    "Type": "Manga Canon",
    "Airdate": "2012-07-19T07:00:00.000Z"
  },
  {
    "#": 271,
    "Title": "Road to Sakura",
    "Type": "Filler",
    "Airdate": "2012-07-26T07:00:00.000Z"
  },
  {
    "#": 272,
    "Title": "Mifune vs. Hanzo",
    "Type": "Manga Canon",
    "Airdate": "2012-08-02T07:00:00.000Z"
  },
  {
    "#": 273,
    "Title": "True Kindness",
    "Type": "Manga Canon",
    "Airdate": "2012-08-09T07:00:00.000Z"
  },
  {
    "#": 274,
    "Title": "The Complete Ino-Shika-Cho Formation!",
    "Type": "Manga Canon",
    "Airdate": "2012-08-09T07:00:00.000Z"
  },
  {
    "#": 275,
    "Title": "A Message from the Heart",
    "Type": "Manga Canon",
    "Airdate": "2012-08-16T07:00:00.000Z"
  },
  {
    "#": 276,
    "Title": "Attack of the Gedo Statue",
    "Type": "Manga Canon",
    "Airdate": "2012-08-23T07:00:00.000Z"
  },
  {
    "#": 277,
    "Title": "Unison Sign",
    "Type": "Manga Canon",
    "Airdate": "2012-08-30T07:00:00.000Z"
  },
  {
    "#": 278,
    "Title": "Medic Ninja in Danger",
    "Type": "Manga Canon",
    "Airdate": "2012-09-06T07:00:00.000Z"
  },
  {
    "#": 279,
    "Title": "White Zetsu's Trap",
    "Type": "Filler",
    "Airdate": "2012-09-13T07:00:00.000Z"
  },
  {
    "#": 280,
    "Title": "Aesthetics of an Artist",
    "Type": "Filler",
    "Airdate": "2012-09-20T07:00:00.000Z"
  },
  {
    "#": 281,
    "Title": "The Allied Mom Force!",
    "Type": "Filler",
    "Airdate": "2012-09-27T07:00:00.000Z"
  },
  {
    "#": 282,
    "Title": "The Secret Origin of the Ultimate Tag Team!",
    "Type": "Manga Canon",
    "Airdate": "2012-10-04T07:00:00.000Z"
  },
  {
    "#": 283,
    "Title": "Two Suns",
    "Type": "Manga Canon",
    "Airdate": "2012-10-11T07:00:00.000Z"
  },
  {
    "#": 284,
    "Title": "Helmet Splitter: Jinin Akebino!",
    "Type": "Filler",
    "Airdate": "2012-10-18T07:00:00.000Z"
  },
  {
    "#": 285,
    "Title": "User of the Scorch Style: Pakura of the Sand!",
    "Type": "Filler",
    "Airdate": "2012-10-25T07:00:00.000Z"
  },
  {
    "#": 286,
    "Title": "Things You Can't Get Back",
    "Type": "Filler",
    "Airdate": "2012-11-01T07:00:00.000Z"
  },
  {
    "#": 287,
    "Title": "One Worth Betting On",
    "Type": "Filler",
    "Airdate": "2012-11-01T07:00:00.000Z"
  },
  {
    "#": 288,
    "Title": "Danger: Jinpachi and Kushimaru!",
    "Type": "Filler",
    "Airdate": "2012-11-08T08:00:00.000Z"
  },
  {
    "#": 289,
    "Title": "The Lightning Blade: Ameyuri Ringo!",
    "Type": "Filler",
    "Airdate": "2012-11-15T08:00:00.000Z"
  },
  {
    "#": 290,
    "Title": "Power: Episode 1",
    "Type": "Filler",
    "Airdate": "2012-11-22T08:00:00.000Z"
  },
  {
    "#": 291,
    "Title": "Power: Episode 2",
    "Type": "Filler",
    "Airdate": "2012-11-29T08:00:00.000Z"
  },
  {
    "#": 292,
    "Title": "Power: Episode 3",
    "Type": "Filler",
    "Airdate": "2012-12-06T08:00:00.000Z"
  },
  {
    "#": 293,
    "Title": "Power: Episode 4",
    "Type": "Filler",
    "Airdate": "2012-12-13T08:00:00.000Z"
  },
  {
    "#": 294,
    "Title": "Power: Episode 5",
    "Type": "Filler",
    "Airdate": "2012-12-20T08:00:00.000Z"
  },
  {
    "#": 295,
    "Title": "Power: Episode Final",
    "Type": "Filler",
    "Airdate": "2013-01-10T08:00:00.000Z"
  },
  {
    "#": 296,
    "Title": "Naruto Enters the Battle",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2013-01-17T08:00:00.000Z"
  },
  {
    "#": 297,
    "Title": "A Father's Hope, a Mother's Love",
    "Type": "Manga Canon",
    "Airdate": "2013-01-24T08:00:00.000Z"
  },
  {
    "#": 298,
    "Title": "Contact! Naruto vs. Itachi",
    "Type": "Manga Canon",
    "Airdate": "2013-01-31T08:00:00.000Z"
  },
  {
    "#": 299,
    "Title": "The Acknowledged One",
    "Type": "Manga Canon",
    "Airdate": "2013-02-07T08:00:00.000Z"
  },
  {
    "#": 300,
    "Title": "The Mizukage, the Giant Clam, and the Mirage",
    "Type": "Manga Canon",
    "Airdate": "2013-02-14T08:00:00.000Z"
  },
  {
    "#": 301,
    "Title": "Paradox",
    "Type": "Manga Canon",
    "Airdate": "2013-02-21T08:00:00.000Z"
  },
  {
    "#": 302,
    "Title": "Terror! the Steam Imp",
    "Type": "Manga Canon",
    "Airdate": "2013-02-28T08:00:00.000Z"
  },
  {
    "#": 303,
    "Title": "Ghosts from the Past",
    "Type": "Filler",
    "Airdate": "2013-03-07T08:00:00.000Z"
  },
  {
    "#": 304,
    "Title": "The Underworld Transfer Jutsu",
    "Type": "Filler",
    "Airdate": "2013-03-14T07:00:00.000Z"
  },
  {
    "#": 305,
    "Title": "The Vengeful",
    "Type": "Filler",
    "Airdate": "2013-03-21T07:00:00.000Z"
  },
  {
    "#": 306,
    "Title": "The Heart's Eye",
    "Type": "Filler",
    "Airdate": "2013-03-28T07:00:00.000Z"
  },
  {
    "#": 307,
    "Title": "Fade Into the Moonlight",
    "Type": "Filler",
    "Airdate": "2013-04-04T07:00:00.000Z"
  },
  {
    "#": 308,
    "Title": "Crescent Moon Night",
    "Type": "Filler",
    "Airdate": "2013-04-11T07:00:00.000Z"
  },
  {
    "#": 309,
    "Title": "The A-Rank Mission: Food Fight!",
    "Type": "Filler",
    "Airdate": "2013-04-18T07:00:00.000Z"
  },
  {
    "#": 310,
    "Title": "The Fallen Castle",
    "Type": "Filler",
    "Airdate": "2013-04-25T07:00:00.000Z"
  },
  {
    "#": 311,
    "Title": "Prologue of Road to Ninja",
    "Type": "Filler",
    "Airdate": "2013-05-02T07:00:00.000Z"
  },
  {
    "#": 312,
    "Title": "The Old Master and the Dragon's Eye",
    "Type": "Filler",
    "Airdate": "2013-05-09T07:00:00.000Z"
  },
  {
    "#": 313,
    "Title": "Rain Followed by Snow, with Some Lightning",
    "Type": "Filler",
    "Airdate": "2013-05-16T07:00:00.000Z"
  },
  {
    "#": 314,
    "Title": "The Sad Sun Shower",
    "Type": "Filler",
    "Airdate": "2013-05-23T07:00:00.000Z"
  },
  {
    "#": 315,
    "Title": "Lingering Snow",
    "Type": "Filler",
    "Airdate": "2013-05-30T07:00:00.000Z"
  },
  {
    "#": 316,
    "Title": "The Reanimated Allied Forces",
    "Type": "Filler",
    "Airdate": "2013-06-06T07:00:00.000Z"
  },
  {
    "#": 317,
    "Title": "Shino vs. Torune",
    "Type": "Filler",
    "Airdate": "2013-06-13T07:00:00.000Z"
  },
  {
    "#": 318,
    "Title": "A Hole in the Heart: the Other Jinchuriki",
    "Type": "Filler",
    "Airdate": "2013-06-20T07:00:00.000Z"
  },
  {
    "#": 319,
    "Title": "The Soul Living Inside the Puppet",
    "Type": "Filler",
    "Airdate": "2013-06-27T07:00:00.000Z"
  },
  {
    "#": 320,
    "Title": "Run, Omoi!",
    "Type": "Filler",
    "Airdate": "2013-07-04T07:00:00.000Z"
  },
  {
    "#": 321,
    "Title": "Reinforcements Arrive",
    "Type": "Manga Canon",
    "Airdate": "2013-07-18T07:00:00.000Z"
  },
  {
    "#": 322,
    "Title": "Madara Uchiha",
    "Type": "Manga Canon",
    "Airdate": "2013-07-25T07:00:00.000Z"
  },
  {
    "#": 323,
    "Title": "The Five Kage Assemble",
    "Type": "Manga Canon",
    "Airdate": "2013-08-01T07:00:00.000Z"
  },
  {
    "#": 324,
    "Title": "The Unbreakable Mask and the Shattered Bubble",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2013-08-08T07:00:00.000Z"
  },
  {
    "#": 325,
    "Title": "Jinchuriki vs. Jinchuriki!",
    "Type": "Manga Canon",
    "Airdate": "2013-08-15T07:00:00.000Z"
  },
  {
    "#": 326,
    "Title": "Four Tails, the King of Sage Monkeys",
    "Type": "Manga Canon",
    "Airdate": "2013-08-22T07:00:00.000Z"
  },
  {
    "#": 327,
    "Title": "Nine Tails",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2013-08-29T07:00:00.000Z"
  },
  {
    "#": 328,
    "Title": "Kurama",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2013-08-29T07:00:00.000Z"
  },
  {
    "#": 329,
    "Title": "Two-Man Team",
    "Type": "Manga Canon",
    "Airdate": "2013-09-05T07:00:00.000Z"
  },
  {
    "#": 330,
    "Title": "Promise of Victory",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2013-09-12T07:00:00.000Z"
  },
  {
    "#": 331,
    "Title": "Eyes That See in the Dark",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2013-09-19T07:00:00.000Z"
  },
  {
    "#": 332,
    "Title": "The Will of Stone",
    "Type": "Manga Canon",
    "Airdate": "2013-09-26T07:00:00.000Z"
  },
  {
    "#": 333,
    "Title": "The Risks of the Reanimation Jutsu",
    "Type": "Manga Canon",
    "Airdate": "2013-10-03T07:00:00.000Z"
  },
  {
    "#": 334,
    "Title": "Sibling Tag Team",
    "Type": "Manga Canon",
    "Airdate": "2013-10-10T07:00:00.000Z"
  },
  {
    "#": 335,
    "Title": "To Each Their Own Leaf",
    "Type": "Manga Canon",
    "Airdate": "2013-10-24T07:00:00.000Z"
  },
  {
    "#": 336,
    "Title": "Kabuto Yakushi",
    "Type": "Manga Canon",
    "Airdate": "2013-10-31T07:00:00.000Z"
  },
  {
    "#": 337,
    "Title": "The Izanami Activated",
    "Type": "Manga Canon",
    "Airdate": "2013-11-07T08:00:00.000Z"
  },
  {
    "#": 338,
    "Title": "Izanagi and Izanami",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2013-11-14T08:00:00.000Z"
  },
  {
    "#": 339,
    "Title": "I Will Love You Always",
    "Type": "Manga Canon",
    "Airdate": "2013-11-21T08:00:00.000Z"
  },
  {
    "#": 340,
    "Title": "Reanimation Jutsu, Release!",
    "Type": "Manga Canon",
    "Airdate": "2013-11-28T08:00:00.000Z"
  },
  {
    "#": 341,
    "Title": "Orochimaru's Return",
    "Type": "Manga Canon",
    "Airdate": "2013-12-05T08:00:00.000Z"
  },
  {
    "#": 342,
    "Title": "Secret of the Transportation Technique",
    "Type": "Manga Canon",
    "Airdate": "2013-12-12T08:00:00.000Z"
  },
  {
    "#": 343,
    "Title": "Who Are You?",
    "Type": "Manga Canon",
    "Airdate": "2013-12-19T08:00:00.000Z"
  },
  {
    "#": 344,
    "Title": "Obito and Madara",
    "Type": "Manga Canon",
    "Airdate": "2014-01-09T08:00:00.000Z"
  },
  {
    "#": 345,
    "Title": "I'm in Hell",
    "Type": "Manga Canon",
    "Airdate": "2014-01-16T08:00:00.000Z"
  },
  {
    "#": 346,
    "Title": "World of Dreams",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2014-01-23T08:00:00.000Z"
  },
  {
    "#": 347,
    "Title": "Creeping Shadow",
    "Type": "Filler",
    "Airdate": "2014-01-23T08:00:00.000Z"
  },
  {
    "#": 348,
    "Title": "The New Akatsuki",
    "Type": "Filler",
    "Airdate": "2014-01-30T08:00:00.000Z"
  },
  {
    "#": 349,
    "Title": "Kakashi: Shadow of the ANBU Black Ops – A Mask That Hides the Heart",
    "Type": "Filler",
    "Airdate": "2014-02-06T08:00:00.000Z"
  },
  {
    "#": 350,
    "Title": "Kakashi: Shadow of the ANBU Black Ops – Minato's Death",
    "Type": "Filler",
    "Airdate": "2014-02-13T08:00:00.000Z"
  },
  {
    "#": 351,
    "Title": "Kakashi: Shadow of the ANBU Black Ops – Hashirama's Cells",
    "Type": "Filler",
    "Airdate": "2014-02-20T08:00:00.000Z"
  },
  {
    "#": 352,
    "Title": "Kakashi: Shadow of the ANBU Black Ops – The Rogue Ninja Orochimaru",
    "Type": "Filler",
    "Airdate": "2014-02-27T08:00:00.000Z"
  },
  {
    "#": 353,
    "Title": "Kakashi: Shadow of the ANBU Black Ops – Orochimaru's Test Subjects",
    "Type": "Filler",
    "Airdate": "2014-03-06T08:00:00.000Z"
  },
  {
    "#": 354,
    "Title": "Kakashi: Shadow of the ANBU Black Ops – Their Own Paths",
    "Type": "Filler",
    "Airdate": "2014-03-06T08:00:00.000Z"
  },
  {
    "#": 355,
    "Title": "Kakashi: Shadow of the ANBU Black Ops – The Targeted Sharingan",
    "Type": "Filler",
    "Airdate": "2014-03-13T07:00:00.000Z"
  },
  {
    "#": 356,
    "Title": "Kakashi: Shadow of the ANBU Black Ops – A Shinobi of the Leaf",
    "Type": "Filler",
    "Airdate": "2014-03-20T07:00:00.000Z"
  },
  {
    "#": 357,
    "Title": "Kakashi: Shadow of the ANBU Black Ops – An Uchiha ANBU",
    "Type": "Filler",
    "Airdate": "2014-04-03T07:00:00.000Z"
  },
  {
    "#": 358,
    "Title": "Kakashi: Shadow of the ANBU Black Ops – Coup D'État",
    "Type": "Filler",
    "Airdate": "2014-04-10T07:00:00.000Z"
  },
  {
    "#": 359,
    "Title": "Kakashi: Shadow of the ANBU Black Ops – The Night of the Tragedy",
    "Type": "Filler",
    "Airdate": "2014-04-17T07:00:00.000Z"
  },
  {
    "#": 360,
    "Title": "Kakashi: Shadow of the ANBU Black Ops – Jonin Leader",
    "Type": "Filler",
    "Airdate": "2014-04-24T07:00:00.000Z"
  },
  {
    "#": 361,
    "Title": "Kakashi: Shadow of the ANBU Black Ops – Squad Seven",
    "Type": "Filler",
    "Airdate": "2014-05-08T07:00:00.000Z"
  },
  {
    "#": 362,
    "Title": "Kakashi's Resolve",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2014-05-15T07:00:00.000Z"
  },
  {
    "#": 363,
    "Title": "The Allied Shinobi Forces Jutsu",
    "Type": "Manga Canon",
    "Airdate": "2014-05-22T07:00:00.000Z"
  },
  {
    "#": 364,
    "Title": "The Ties That Bind",
    "Type": "Manga Canon",
    "Airdate": "2014-06-05T07:00:00.000Z"
  },
  {
    "#": 365,
    "Title": "Those Who Dance in the Shadows",
    "Type": "Manga Canon",
    "Airdate": "2014-06-12T07:00:00.000Z"
  },
  {
    "#": 366,
    "Title": "The All-Knowing",
    "Type": "Manga Canon",
    "Airdate": "2014-06-19T07:00:00.000Z"
  },
  {
    "#": 367,
    "Title": "Hashirama and Madara",
    "Type": "Manga Canon",
    "Airdate": "2014-07-03T07:00:00.000Z"
  },
  {
    "#": 368,
    "Title": "Era of Warring States",
    "Type": "Manga Canon",
    "Airdate": "2014-07-10T07:00:00.000Z"
  },
  {
    "#": 369,
    "Title": "My True Dream",
    "Type": "Manga Canon",
    "Airdate": "2014-07-24T07:00:00.000Z"
  },
  {
    "#": 370,
    "Title": "Sasuke's Answer",
    "Type": "Manga Canon",
    "Airdate": "2014-07-31T07:00:00.000Z"
  },
  {
    "#": 371,
    "Title": "Hole",
    "Type": "Manga Canon",
    "Airdate": "2014-08-07T07:00:00.000Z"
  },
  {
    "#": 372,
    "Title": "Something to Fill the Hole",
    "Type": "Manga Canon",
    "Airdate": "2014-08-14T07:00:00.000Z"
  },
  {
    "#": 373,
    "Title": "Team 7, Assemble!",
    "Type": "Manga Canon",
    "Airdate": "2014-08-21T07:00:00.000Z"
  },
  {
    "#": 374,
    "Title": "The New Three-Way Deadlock",
    "Type": "Manga Canon",
    "Airdate": "2014-08-28T07:00:00.000Z"
  },
  {
    "#": 375,
    "Title": "Kakashi vs. Obito",
    "Type": "Manga Canon",
    "Airdate": "2014-09-04T07:00:00.000Z"
  },
  {
    "#": 376,
    "Title": "The Directive to Take the Nine Tails",
    "Type": "Filler",
    "Airdate": "2014-09-11T07:00:00.000Z"
  },
  {
    "#": 377,
    "Title": "Naruto vs. Mecha Naruto",
    "Type": "Filler",
    "Airdate": "2014-09-11T07:00:00.000Z"
  },
  {
    "#": 378,
    "Title": "The Ten Tails' Jinchuriki",
    "Type": "Manga Canon",
    "Airdate": "2014-09-18T07:00:00.000Z"
  },
  {
    "#": 379,
    "Title": "An Opening",
    "Type": "Manga Canon",
    "Airdate": "2014-09-25T07:00:00.000Z"
  },
  {
    "#": 380,
    "Title": "The Day Naruto Was Born",
    "Type": "Manga Canon",
    "Airdate": "2014-10-02T07:00:00.000Z"
  },
  {
    "#": 381,
    "Title": "The Divine Tree",
    "Type": "Manga Canon",
    "Airdate": "2014-10-09T07:00:00.000Z"
  },
  {
    "#": 382,
    "Title": "A Shinobi's Dream",
    "Type": "Manga Canon",
    "Airdate": "2014-10-16T07:00:00.000Z"
  },
  {
    "#": 383,
    "Title": "Pursuing Hope",
    "Type": "Manga Canon",
    "Airdate": "2014-10-23T07:00:00.000Z"
  },
  {
    "#": 384,
    "Title": "A Heart Filled With Comrades",
    "Type": "Manga Canon",
    "Airdate": "2014-10-30T07:00:00.000Z"
  },
  {
    "#": 385,
    "Title": "Obito Uchiha",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2014-11-06T08:00:00.000Z"
  },
  {
    "#": 386,
    "Title": "I'm Always Watching",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2014-11-13T08:00:00.000Z"
  },
  {
    "#": 387,
    "Title": "The Promise That Was Kept",
    "Type": "Manga Canon",
    "Airdate": "2014-11-20T08:00:00.000Z"
  },
  {
    "#": 388,
    "Title": "My First Friend",
    "Type": "Filler",
    "Airdate": "2014-11-27T08:00:00.000Z"
  },
  {
    "#": 389,
    "Title": "The Adored Elder Sister",
    "Type": "Filler",
    "Airdate": "2014-12-04T08:00:00.000Z"
  },
  {
    "#": 390,
    "Title": "Hanabi's Decision",
    "Type": "Filler",
    "Airdate": "2014-12-04T08:00:00.000Z"
  },
  {
    "#": 391,
    "Title": "Madara Uchiha Arises",
    "Type": "Manga Canon",
    "Airdate": "2014-12-11T08:00:00.000Z"
  },
  {
    "#": 392,
    "Title": "The Hidden Heart",
    "Type": "Manga Canon",
    "Airdate": "2014-12-18T08:00:00.000Z"
  },
  {
    "#": 393,
    "Title": "A True Ending",
    "Type": "Manga Canon",
    "Airdate": "2014-12-25T08:00:00.000Z"
  },
  {
    "#": 394,
    "Title": "The New Chunin Exams",
    "Type": "Filler",
    "Airdate": "2015-01-08T08:00:00.000Z"
  },
  {
    "#": 395,
    "Title": "The Chunin Exams Begin!",
    "Type": "Filler",
    "Airdate": "2015-01-15T08:00:00.000Z"
  },
  {
    "#": 396,
    "Title": "The Three Questions",
    "Type": "Filler",
    "Airdate": "2015-01-22T08:00:00.000Z"
  },
  {
    "#": 397,
    "Title": "One Worthy As A Leader",
    "Type": "Filler",
    "Airdate": "2015-01-29T08:00:00.000Z"
  },
  {
    "#": 398,
    "Title": "The Night Before the Second Exam",
    "Type": "Filler",
    "Airdate": "2015-02-05T08:00:00.000Z"
  },
  {
    "#": 399,
    "Title": "Demon Desert Survival",
    "Type": "Filler",
    "Airdate": "2015-02-12T08:00:00.000Z"
  },
  {
    "#": 400,
    "Title": "As a Taijutsu User",
    "Type": "Filler",
    "Airdate": "2015-02-19T08:00:00.000Z"
  },
  {
    "#": 401,
    "Title": "The Ultimate",
    "Type": "Filler",
    "Airdate": "2015-02-26T08:00:00.000Z"
  },
  {
    "#": 402,
    "Title": "Escape vs. Pursuit",
    "Type": "Filler",
    "Airdate": "2015-03-05T08:00:00.000Z"
  },
  {
    "#": 403,
    "Title": "Unwavering Gutsiness",
    "Type": "Filler",
    "Airdate": "2015-03-12T07:00:00.000Z"
  },
  {
    "#": 404,
    "Title": "Tenten's Troubles",
    "Type": "Filler",
    "Airdate": "2015-03-19T07:00:00.000Z"
  },
  {
    "#": 405,
    "Title": "The Imprisoned Pair",
    "Type": "Filler",
    "Airdate": "2015-03-26T07:00:00.000Z"
  },
  {
    "#": 406,
    "Title": "The Place Where I Belong",
    "Type": "Filler",
    "Airdate": "2015-04-02T07:00:00.000Z"
  },
  {
    "#": 407,
    "Title": "The Yamanaka Clan: Secret Ninjutsu",
    "Type": "Filler",
    "Airdate": "2015-04-09T07:00:00.000Z"
  },
  {
    "#": 408,
    "Title": "The Cursed Puppet",
    "Type": "Filler",
    "Airdate": "2015-04-16T07:00:00.000Z"
  },
  {
    "#": 409,
    "Title": "Their Backs",
    "Type": "Filler",
    "Airdate": "2015-04-23T07:00:00.000Z"
  },
  {
    "#": 410,
    "Title": "The Hidden Plot Set Into Motion",
    "Type": "Filler",
    "Airdate": "2015-04-30T07:00:00.000Z"
  },
  {
    "#": 411,
    "Title": "The Targeted Tailed Beast",
    "Type": "Filler",
    "Airdate": "2015-05-07T07:00:00.000Z"
  },
  {
    "#": 412,
    "Title": "Neji’s Judgement",
    "Type": "Filler",
    "Airdate": "2015-05-14T07:00:00.000Z"
  },
  {
    "#": 413,
    "Title": "Hopes Entrusted to the Future",
    "Type": "Filler",
    "Airdate": "2015-05-21T07:00:00.000Z"
  },
  {
    "#": 414,
    "Title": "On the Brink of Death",
    "Type": "Manga Canon",
    "Airdate": "2015-05-28T07:00:00.000Z"
  },
  {
    "#": 415,
    "Title": "The Two Mangekyo",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2015-06-04T07:00:00.000Z"
  },
  {
    "#": 416,
    "Title": "The Formation of Team Minato",
    "Type": "Filler",
    "Airdate": "2015-06-11T07:00:00.000Z"
  },
  {
    "#": 417,
    "Title": "You’ll Be My Backup",
    "Type": "Filler",
    "Airdate": "2015-06-25T07:00:00.000Z"
  },
  {
    "#": 418,
    "Title": "The Blue Beast vs Six Paths Madara",
    "Type": "Manga Canon",
    "Airdate": "2015-07-02T07:00:00.000Z"
  },
  {
    "#": 419,
    "Title": "Papa's Youth",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2015-07-09T07:00:00.000Z"
  },
  {
    "#": 420,
    "Title": "The Eight Inner Gates Formation",
    "Type": "Manga Canon",
    "Airdate": "2015-07-23T07:00:00.000Z"
  },
  {
    "#": 421,
    "Title": "The Sage of the Six Paths",
    "Type": "Manga Canon",
    "Airdate": "2015-07-30T07:00:00.000Z"
  },
  {
    "#": 422,
    "Title": "The One Who Will Inherit",
    "Type": "Filler",
    "Airdate": "2015-08-06T07:00:00.000Z"
  },
  {
    "#": 423,
    "Title": "Naruto's Rival",
    "Type": "Filler",
    "Airdate": "2015-08-06T07:00:00.000Z"
  },
  {
    "#": 424,
    "Title": "To Rise Up",
    "Type": "Manga Canon",
    "Airdate": "2015-08-13T07:00:00.000Z"
  },
  {
    "#": 425,
    "Title": "The Infinite Dream",
    "Type": "Manga Canon",
    "Airdate": "2015-08-20T07:00:00.000Z"
  },
  {
    "#": 426,
    "Title": "The Infinite Tsukuyomi",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2015-08-27T07:00:00.000Z"
  },
  {
    "#": 427,
    "Title": "To the Dream World",
    "Type": "Filler",
    "Airdate": "2015-09-03T07:00:00.000Z"
  },
  {
    "#": 428,
    "Title": "Where Tenten Belongs",
    "Type": "Filler",
    "Airdate": "2015-09-03T07:00:00.000Z"
  },
  {
    "#": 429,
    "Title": "Killer Bee Rappuden, Part 1",
    "Type": "Filler",
    "Airdate": "2015-09-10T07:00:00.000Z"
  },
  {
    "#": 430,
    "Title": "Killer Bee Rappuden, Part 2",
    "Type": "Filler",
    "Airdate": "2015-09-17T07:00:00.000Z"
  },
  {
    "#": 431,
    "Title": "To See That Smile, Just One More Time",
    "Type": "Filler",
    "Airdate": "2015-09-24T07:00:00.000Z"
  },
  {
    "#": 432,
    "Title": "The Loser Ninja",
    "Type": "Filler",
    "Airdate": "2015-10-01T07:00:00.000Z"
  },
  {
    "#": 433,
    "Title": "The Search Mission",
    "Type": "Filler",
    "Airdate": "2015-10-08T07:00:00.000Z"
  },
  {
    "#": 434,
    "Title": "Team Jiraiya",
    "Type": "Filler",
    "Airdate": "2015-10-15T07:00:00.000Z"
  },
  {
    "#": 435,
    "Title": "Order of Priority",
    "Type": "Filler",
    "Airdate": "2015-10-22T07:00:00.000Z"
  },
  {
    "#": 436,
    "Title": "The Masked Man",
    "Type": "Filler",
    "Airdate": "2015-11-05T08:00:00.000Z"
  },
  {
    "#": 437,
    "Title": "The Sealed Power",
    "Type": "Filler",
    "Airdate": "2015-11-12T08:00:00.000Z"
  },
  {
    "#": 438,
    "Title": "The Rules or a Comrade",
    "Type": "Filler",
    "Airdate": "2015-11-19T08:00:00.000Z"
  },
  {
    "#": 439,
    "Title": "The Child of Prophecy",
    "Type": "Filler",
    "Airdate": "2015-11-26T08:00:00.000Z"
  },
  {
    "#": 440,
    "Title": "The Caged Bird",
    "Type": "Filler",
    "Airdate": "2015-12-03T08:00:00.000Z"
  },
  {
    "#": 441,
    "Title": "Returning Home",
    "Type": "Filler",
    "Airdate": "2015-12-10T08:00:00.000Z"
  },
  {
    "#": 442,
    "Title": "The Mutual Path",
    "Type": "Filler",
    "Airdate": "2015-12-17T08:00:00.000Z"
  },
  {
    "#": 443,
    "Title": "The Difference in Power",
    "Type": "Filler",
    "Airdate": "2015-12-24T08:00:00.000Z"
  },
  {
    "#": 444,
    "Title": "Leaving the Village",
    "Type": "Filler",
    "Airdate": "2016-01-14T08:00:00.000Z"
  },
  {
    "#": 445,
    "Title": "Pursuers",
    "Type": "Filler",
    "Airdate": "2016-01-21T08:00:00.000Z"
  },
  {
    "#": 446,
    "Title": "Collision",
    "Type": "Filler",
    "Airdate": "2016-01-28T08:00:00.000Z"
  },
  {
    "#": 447,
    "Title": "Another Moon",
    "Type": "Filler",
    "Airdate": "2016-02-04T08:00:00.000Z"
  },
  {
    "#": 448,
    "Title": "Comrade",
    "Type": "Filler",
    "Airdate": "2016-02-11T08:00:00.000Z"
  },
  {
    "#": 449,
    "Title": "The Shinobi Unite",
    "Type": "Filler",
    "Airdate": "2016-02-18T08:00:00.000Z"
  },
  {
    "#": 450,
    "Title": "Rival",
    "Type": "Filler",
    "Airdate": "2016-02-25T08:00:00.000Z"
  },
  {
    "#": 451,
    "Title": "Itachi's Story - Light and Darkness: Birth and Death",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2016-03-03T08:00:00.000Z"
  },
  {
    "#": 452,
    "Title": "Itachi's Story - Light and Darkness: The Genius",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2016-03-10T08:00:00.000Z"
  },
  {
    "#": 453,
    "Title": "Itachi's Story - Light and Darkness: The Pain of Living",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2016-03-17T07:00:00.000Z"
  },
  {
    "#": 454,
    "Title": "Itachi's Story - Light and Darkness: Shisui's Request",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2016-03-24T07:00:00.000Z"
  },
  {
    "#": 455,
    "Title": "Itachi's Story - Light and Darkness: Moonlit Night",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2016-04-07T07:00:00.000Z"
  },
  {
    "#": 456,
    "Title": "Itachi's Story - Light and Darkness: The Darkness of the Akatsuki",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2016-04-14T07:00:00.000Z"
  },
  {
    "#": 457,
    "Title": "Itachi's Story - Light and Darkness: Partner",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2016-04-21T07:00:00.000Z"
  },
  {
    "#": 458,
    "Title": "Itachi's Story - Light and Darkness: Truth",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2016-04-28T07:00:00.000Z"
  },
  {
    "#": 459,
    "Title": "She of the Beginning",
    "Type": "Manga Canon",
    "Airdate": "2016-05-05T07:00:00.000Z"
  },
  {
    "#": 460,
    "Title": "Kaguya Otsutsuki",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2016-05-12T07:00:00.000Z"
  },
  {
    "#": 461,
    "Title": "Hagoromo and Hamura",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2016-05-19T07:00:00.000Z"
  },
  {
    "#": 462,
    "Title": "A Fabricated Past",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2016-05-26T07:00:00.000Z"
  },
  {
    "#": 463,
    "Title": "The No. 1 Most Unpredictable Ninja",
    "Type": "Manga Canon",
    "Airdate": "2016-06-02T07:00:00.000Z"
  },
  {
    "#": 464,
    "Title": "Ninshū: The Ninja Creed",
    "Type": "Filler",
    "Airdate": "2016-06-09T07:00:00.000Z"
  },
  {
    "#": 465,
    "Title": "Ashura and Indra",
    "Type": "Filler",
    "Airdate": "2016-06-16T07:00:00.000Z"
  },
  {
    "#": 466,
    "Title": "The Tumultuous Journey",
    "Type": "Filler",
    "Airdate": "2016-06-30T07:00:00.000Z"
  },
  {
    "#": 467,
    "Title": "Ashura's Decision",
    "Type": "Filler",
    "Airdate": "2016-07-07T07:00:00.000Z"
  },
  {
    "#": 468,
    "Title": "The Successor",
    "Type": "Filler",
    "Airdate": "2016-07-21T07:00:00.000Z"
  },
  {
    "#": 469,
    "Title": "A Special Mission",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2016-07-28T07:00:00.000Z"
  },
  {
    "#": 470,
    "Title": "Connecting Thoughts",
    "Type": "Manga Canon",
    "Airdate": "2016-08-04T07:00:00.000Z"
  },
  {
    "#": 471,
    "Title": "The Two of Them...Always",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2016-08-11T07:00:00.000Z"
  },
  {
    "#": 472,
    "Title": "You Better...",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2016-08-18T07:00:00.000Z"
  },
  {
    "#": 473,
    "Title": "The Sharingan Revived",
    "Type": "Manga Canon",
    "Airdate": "2016-08-25T07:00:00.000Z"
  },
  {
    "#": 474,
    "Title": "Congratulations",
    "Type": "Manga Canon",
    "Airdate": "2016-09-01T07:00:00.000Z"
  },
  {
    "#": 475,
    "Title": "The Final Valley",
    "Type": "Manga Canon",
    "Airdate": "2016-09-08T07:00:00.000Z"
  },
  {
    "#": 476,
    "Title": "The Final Battle",
    "Type": "Manga Canon",
    "Airdate": "2016-09-29T07:00:00.000Z"
  },
  {
    "#": 477,
    "Title": "Naruto and Sasuke",
    "Type": "Manga Canon",
    "Airdate": "2016-09-29T07:00:00.000Z"
  },
  {
    "#": 478,
    "Title": "The Unison Sign",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2016-10-06T07:00:00.000Z"
  },
  {
    "#": 479,
    "Title": "Naruto Uzumaki!!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2016-10-13T07:00:00.000Z"
  },
  {
    "#": 480,
    "Title": "Naruto and Hinata",
    "Type": "Filler",
    "Airdate": "2016-10-20T07:00:00.000Z"
  },
  {
    "#": 481,
    "Title": "Sasuke and Sakura",
    "Type": "Filler",
    "Airdate": "2016-10-27T07:00:00.000Z"
  },
  {
    "#": 482,
    "Title": "Gaara and Shikamaru",
    "Type": "Filler",
    "Airdate": "2016-11-03T07:00:00.000Z"
  },
  {
    "#": 483,
    "Title": "Jiraiya and Kakashi",
    "Type": "Filler",
    "Airdate": "2016-11-10T08:00:00.000Z"
  },
  {
    "#": 484,
    "Title": "Sasuke’s Story: Sunrise, Part 1: The Exploding Human",
    "Type": "Manga Canon",
    "Airdate": "2016-12-01T08:00:00.000Z"
  },
  {
    "#": 485,
    "Title": "Sasuke’s Story: Sunrise, Part 2: Coliseum",
    "Type": "Manga Canon",
    "Airdate": "2016-12-08T08:00:00.000Z"
  },
  {
    "#": 486,
    "Title": "Sasuke’s Story: Sunrise, Part 3: Fuushin",
    "Type": "Manga Canon",
    "Airdate": "2016-12-15T08:00:00.000Z"
  },
  {
    "#": 487,
    "Title": "Sasuke’s Story: Sunrise, Part 4: The Ketsuryugan",
    "Type": "Manga Canon",
    "Airdate": "2016-12-22T08:00:00.000Z"
  },
  {
    "#": 488,
    "Title": "Sasuke’s Story: Sunrise, Part 5: The Last One",
    "Type": "Manga Canon",
    "Airdate": "2017-01-05T08:00:00.000Z"
  },
  {
    "#": 489,
    "Title": "Shikamaru’s Story, A Cloud Drifting in the Silent Dark, Part 1: The State of Affairs",
    "Type": "Manga Canon",
    "Airdate": "2017-01-12T08:00:00.000Z"
  },
  {
    "#": 490,
    "Title": "Shikamaru’s Story, A Cloud Drifting in the Silent Dark, Part 2: Dark Clouds",
    "Type": "Manga Canon",
    "Airdate": "2017-01-19T08:00:00.000Z"
  },
  {
    "#": 491,
    "Title": "Shikamaru’s Story, A Cloud Drifting in the Silent Dark, Part 3: Recklessness",
    "Type": "Manga Canon",
    "Airdate": "2017-01-26T08:00:00.000Z"
  },
  {
    "#": 492,
    "Title": "Shikamaru’s Story, A Cloud Drifting in the Silent Dark, Part 4: Cloud of Suspicion",
    "Type": "Manga Canon",
    "Airdate": "2017-02-02T08:00:00.000Z"
  },
  {
    "#": 493,
    "Title": "Shikamaru’s Story, A Cloud Drifting in the Silent Dark, Part 5: Dawn",
    "Type": "Manga Canon",
    "Airdate": "2017-02-09T08:00:00.000Z"
  },
  {
    "#": 494,
    "Title": "Hidden Leaf Story, The Perfect Day for a Wedding, Part 1: Naruto’s Wedding",
    "Type": "Manga Canon",
    "Airdate": "2017-02-16T08:00:00.000Z"
  },
  {
    "#": 495,
    "Title": "Hidden Leaf Story, The Perfect Day for a Wedding, Part 2: A Full-Powered Wedding Gift",
    "Type": "Manga Canon",
    "Airdate": "2017-02-16T08:00:00.000Z"
  },
  {
    "#": 496,
    "Title": "Hidden Leaf Story, The Perfect Day for a Wedding, Part 3: Steam and Food Pills",
    "Type": "Manga Canon",
    "Airdate": "2017-02-23T08:00:00.000Z"
  },
  {
    "#": 497,
    "Title": "Hidden Leaf Story, The Perfect Day for a Wedding, Part 4: The Kazekage’s Wedding Gift",
    "Type": "Manga Canon",
    "Airdate": "2017-03-02T08:00:00.000Z"
  },
  {
    "#": 498,
    "Title": "Hidden Leaf Story, The Perfect Day for a Wedding, Part 5: The Last Mission",
    "Type": "Manga Canon",
    "Airdate": "2017-03-09T08:00:00.000Z"
  },
  {
    "#": 499,
    "Title": "Hidden Leaf Story, The Perfect Day for a Wedding, Part 6: The Outcome of the Secret Mission",
    "Type": "Manga Canon",
    "Airdate": "2017-03-16T07:00:00.000Z"
  },
  {
    "#": 500,
    "Title": "Hidden Leaf Story, The Perfect Day for a Wedding, Part 7: The Message",
    "Type": "Manga Canon",
    "Airdate": "2017-03-23T07:00:00.000Z"
  }
],

'GR75Q020Y': //BORUTO: NARUTO NEXT GENERATIONS
[
  {
    "#": 1,
    "Title": "Boruto Uzumaki!!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2017-04-05T07:00:00.000Z"
  },
  {
    "#": 2,
    "Title": "The Hokage's Son…!!",
    "Type": "Anime Canon",
    "Airdate": "2017-04-12T07:00:00.000Z"
  },
  {
    "#": 3,
    "Title": "Metal Lee Goes Wild!",
    "Type": "Anime Canon",
    "Airdate": "2017-04-19T07:00:00.000Z"
  },
  {
    "#": 4,
    "Title": "A Ninjutsu Battle of the Sexes!",
    "Type": "Anime Canon",
    "Airdate": "2017-04-26T07:00:00.000Z"
  },
  {
    "#": 5,
    "Title": "The Mysterious Transfer Student!",
    "Type": "Anime Canon",
    "Airdate": "2017-05-03T07:00:00.000Z"
  },
  {
    "#": 6,
    "Title": "The Final Lesson!",
    "Type": "Anime Canon",
    "Airdate": "2017-05-10T07:00:00.000Z"
  },
  {
    "#": 7,
    "Title": "Love and Potato Chips!",
    "Type": "Anime Canon",
    "Airdate": "2017-05-17T07:00:00.000Z"
  },
  {
    "#": 8,
    "Title": "The Dream's Revelation",
    "Type": "Anime Canon",
    "Airdate": "2017-05-24T07:00:00.000Z"
  },
  {
    "#": 9,
    "Title": "Proof of Oneself",
    "Type": "Anime Canon",
    "Airdate": "2017-05-31T07:00:00.000Z"
  },
  {
    "#": 10,
    "Title": "The Ghost Incident: The Investigation Begins!",
    "Type": "Anime Canon",
    "Airdate": "2017-06-07T07:00:00.000Z"
  },
  {
    "#": 11,
    "Title": "The Shadow of the Mastermind",
    "Type": "Anime Canon",
    "Airdate": "2017-06-14T07:00:00.000Z"
  },
  {
    "#": 12,
    "Title": "Boruto and Mitsuki",
    "Type": "Anime Canon",
    "Airdate": "2017-06-21T07:00:00.000Z"
  },
  {
    "#": 13,
    "Title": "The Demon Beast Appears!",
    "Type": "Anime Canon",
    "Airdate": "2017-06-28T07:00:00.000Z"
  },
  {
    "#": 14,
    "Title": "The Path That Boruto Can See",
    "Type": "Anime Canon",
    "Airdate": "2017-07-05T07:00:00.000Z"
  },
  {
    "#": 15,
    "Title": "A New Path",
    "Type": "Anime Canon",
    "Airdate": "2017-07-12T07:00:00.000Z"
  },
  {
    "#": 16,
    "Title": "Crisis: The Threat of Failing!",
    "Type": "Anime Canon",
    "Airdate": "2017-07-19T07:00:00.000Z"
  },
  {
    "#": 17,
    "Title": "Run, Sarada!",
    "Type": "Anime Canon",
    "Airdate": "2017-07-26T07:00:00.000Z"
  },
  {
    "#": 18,
    "Title": "A Day in the Life of the Uzumaki Family",
    "Type": "Manga Canon",
    "Airdate": "2017-08-02T07:00:00.000Z"
  },
  {
    "#": 19,
    "Title": "Sarada Uchiha",
    "Type": "Manga Canon",
    "Airdate": "2017-08-09T07:00:00.000Z"
  },
  {
    "#": 20,
    "Title": "The Boy with the Sharingan",
    "Type": "Manga Canon",
    "Airdate": "2017-08-16T07:00:00.000Z"
  },
  {
    "#": 21,
    "Title": "Sasuke and Sarada",
    "Type": "Manga Canon",
    "Airdate": "2017-08-23T07:00:00.000Z"
  },
  {
    "#": 22,
    "Title": "Connected Feelings",
    "Type": "Manga Canon",
    "Airdate": "2017-08-30T07:00:00.000Z"
  },
  {
    "#": 23,
    "Title": "Bonds Come in All Shapes",
    "Type": "Manga Canon",
    "Airdate": "2017-09-06T07:00:00.000Z"
  },
  {
    "#": 24,
    "Title": "Boruto and Sarada",
    "Type": "Manga Canon",
    "Airdate": "2017-09-13T07:00:00.000Z"
  },
  {
    "#": 25,
    "Title": "The Turbulent Field Trip!!",
    "Type": "Anime Canon",
    "Airdate": "2017-09-20T07:00:00.000Z"
  },
  {
    "#": 26,
    "Title": "The Mizukage's Successor",
    "Type": "Anime Canon",
    "Airdate": "2017-09-27T07:00:00.000Z"
  },
  {
    "#": 27,
    "Title": "A Shinobi Bout of Friendship",
    "Type": "Anime Canon",
    "Airdate": "2017-10-04T07:00:00.000Z"
  },
  {
    "#": 28,
    "Title": "Declaration of War",
    "Type": "Anime Canon",
    "Airdate": "2017-10-11T07:00:00.000Z"
  },
  {
    "#": 29,
    "Title": "The New Seven Ninja Swordsmen!!",
    "Type": "Anime Canon",
    "Airdate": "2017-10-18T07:00:00.000Z"
  },
  {
    "#": 30,
    "Title": "The Sharingan vs. The Lightning Blade, Kiba the Fang!",
    "Type": "Anime Canon",
    "Airdate": "2017-10-25T07:00:00.000Z"
  },
  {
    "#": 31,
    "Title": "Boruto and Kagura",
    "Type": "Anime Canon",
    "Airdate": "2017-11-01T07:00:00.000Z"
  },
  {
    "#": 32,
    "Title": "The Quest for Souvenirs",
    "Type": "Filler",
    "Airdate": "2017-11-08T08:00:00.000Z"
  },
  {
    "#": 33,
    "Title": "The Super Beast Scroll Slump!",
    "Type": "Filler",
    "Airdate": "2017-11-15T08:00:00.000Z"
  },
  {
    "#": 34,
    "Title": "The Night of the Shooting Stars",
    "Type": "Filler",
    "Airdate": "2017-11-22T08:00:00.000Z"
  },
  {
    "#": 35,
    "Title": "The Parent Teacher Conference!",
    "Type": "Filler",
    "Airdate": "2017-11-29T08:00:00.000Z"
  },
  {
    "#": 36,
    "Title": "The Graduation Exam Begins!",
    "Type": "Anime Canon",
    "Airdate": "2017-12-06T08:00:00.000Z"
  },
  {
    "#": 37,
    "Title": "A Shinobi's Resolve",
    "Type": "Anime Canon",
    "Airdate": "2017-12-13T08:00:00.000Z"
  },
  {
    "#": 38,
    "Title": "Formation of the Three-Man Squad?",
    "Type": "Anime Canon",
    "Airdate": "2017-12-20T08:00:00.000Z"
  },
  {
    "#": 39,
    "Title": "The Path Lit by the Full Moon",
    "Type": "Manga Canon",
    "Airdate": "2017-12-27T08:00:00.000Z"
  },
  {
    "#": 40,
    "Title": "Team 7: The First Mission!",
    "Type": "Anime Canon",
    "Airdate": "2018-01-10T08:00:00.000Z"
  },
  {
    "#": 41,
    "Title": "Strength in Unity",
    "Type": "Anime Canon",
    "Airdate": "2018-01-17T08:00:00.000Z"
  },
  {
    "#": 42,
    "Title": "A Ninja's Job",
    "Type": "Anime Canon",
    "Airdate": "2018-01-24T08:00:00.000Z"
  },
  {
    "#": 43,
    "Title": "The Byakuya Gang Surfaces!",
    "Type": "Anime Canon",
    "Airdate": "2018-01-31T08:00:00.000Z"
  },
  {
    "#": 44,
    "Title": "Shikadai's Doubts",
    "Type": "Anime Canon",
    "Airdate": "2018-02-07T08:00:00.000Z"
  },
  {
    "#": 45,
    "Title": "Memories from the Day of Snow",
    "Type": "Anime Canon",
    "Airdate": "2018-02-14T08:00:00.000Z"
  },
  {
    "#": 46,
    "Title": "Go! The Crest of Night Strategy",
    "Type": "Anime Canon",
    "Airdate": "2018-02-21T08:00:00.000Z"
  },
  {
    "#": 47,
    "Title": "The Figure I Want to Be",
    "Type": "Anime Canon",
    "Airdate": "2018-02-28T08:00:00.000Z"
  },
  {
    "#": 48,
    "Title": "The Genin Documentary",
    "Type": "Filler",
    "Airdate": "2018-03-07T08:00:00.000Z"
  },
  {
    "#": 49,
    "Title": "Wasabi and Namida",
    "Type": "Filler",
    "Airdate": "2018-03-14T07:00:00.000Z"
  },
  {
    "#": 50,
    "Title": "The Chūnin Exams: The Recommendation Meeting",
    "Type": "Filler",
    "Airdate": "2018-03-21T07:00:00.000Z"
  },
  {
    "#": 51,
    "Title": "Boruto's Birthday",
    "Type": "Anime Canon",
    "Airdate": "2018-03-28T07:00:00.000Z"
  },
  {
    "#": 52,
    "Title": "Sasuke's Shadow",
    "Type": "Anime Canon",
    "Airdate": "2018-04-04T07:00:00.000Z"
  },
  {
    "#": 53,
    "Title": "Himawari's Birthday",
    "Type": "Manga Canon",
    "Airdate": "2018-04-11T07:00:00.000Z"
  },
  {
    "#": 54,
    "Title": "Sasuke and Boruto",
    "Type": "Manga Canon",
    "Airdate": "2018-04-18T07:00:00.000Z"
  },
  {
    "#": 55,
    "Title": "The Scientific Ninja Tool",
    "Type": "Manga Canon",
    "Airdate": "2018-04-25T07:00:00.000Z"
  },
  {
    "#": 56,
    "Title": "Rivals, Gather!",
    "Type": "Manga Canon",
    "Airdate": "2018-05-03T07:00:00.000Z"
  },
  {
    "#": 57,
    "Title": "The Reason I Can't Lose",
    "Type": "Manga Canon",
    "Airdate": "2018-05-10T07:00:00.000Z"
  },
  {
    "#": 58,
    "Title": "The Tournament Begins!",
    "Type": "Manga Canon",
    "Airdate": "2018-05-17T07:00:00.000Z"
  },
  {
    "#": 59,
    "Title": "Boruto vs. Shikadai",
    "Type": "Manga Canon",
    "Airdate": "2018-05-24T07:00:00.000Z"
  },
  {
    "#": 60,
    "Title": "The Hidden Leaf vs. The Hidden Sand",
    "Type": "Anime Canon",
    "Airdate": "2018-05-31T07:00:00.000Z"
  },
  {
    "#": 61,
    "Title": "The Iron Sand User: Shinki",
    "Type": "Manga Canon",
    "Airdate": "2018-06-07T07:00:00.000Z"
  },
  {
    "#": 62,
    "Title": "The Ōtsutsuki Invasion",
    "Type": "Manga Canon",
    "Airdate": "2018-06-14T07:00:00.000Z"
  },
  {
    "#": 63,
    "Title": "Sasuke's Secret Weapon",
    "Type": "Manga Canon",
    "Airdate": "2018-06-28T07:00:00.000Z"
  },
  {
    "#": 64,
    "Title": "Rescuing Naruto!",
    "Type": "Manga Canon",
    "Airdate": "2018-07-05T07:00:00.000Z"
  },
  {
    "#": 65,
    "Title": "Father and Child",
    "Type": "Manga Canon",
    "Airdate": "2018-07-19T07:00:00.000Z"
  },
  {
    "#": 66,
    "Title": "My Story!",
    "Type": "Manga Canon",
    "Airdate": "2018-07-26T07:00:00.000Z"
  },
  {
    "#": 67,
    "Title": "Super Chōchō Butterfly Mode!",
    "Type": "Filler",
    "Airdate": "2018-08-02T07:00:00.000Z"
  },
  {
    "#": 68,
    "Title": "Super Chōchō Kiss Mode!",
    "Type": "Filler",
    "Airdate": "2018-08-09T07:00:00.000Z"
  },
  {
    "#": 69,
    "Title": "Super Chōchō Love Upheaval!",
    "Type": "Filler",
    "Airdate": "2018-08-16T07:00:00.000Z"
  },
  {
    "#": 70,
    "Title": "The Other Side of Anxiety",
    "Type": "Filler",
    "Airdate": "2018-08-23T07:00:00.000Z"
  },
  {
    "#": 71,
    "Title": "The Hardest Rock in the World",
    "Type": "Anime Canon",
    "Airdate": "2018-08-30T07:00:00.000Z"
  },
  {
    "#": 72,
    "Title": "Mitsuki's Will",
    "Type": "Anime Canon",
    "Airdate": "2018-09-06T07:00:00.000Z"
  },
  {
    "#": 73,
    "Title": "The Other Side of the Moon",
    "Type": "Anime Canon",
    "Airdate": "2018-09-13T07:00:00.000Z"
  },
  {
    "#": 74,
    "Title": "The Enemy, Ino–Shika–Chō!",
    "Type": "Anime Canon",
    "Airdate": "2018-09-20T07:00:00.000Z"
  },
  {
    "#": 75,
    "Title": "The Trials of Ryūchi Cave",
    "Type": "Anime Canon",
    "Airdate": "2018-09-20T07:00:00.000Z"
  },
  {
    "#": 76,
    "Title": "Incurring Wrath",
    "Type": "Anime Canon",
    "Airdate": "2018-10-07T07:00:00.000Z"
  },
  {
    "#": 77,
    "Title": "A Fierce Enemy: Garaga's Ferocious Attack!",
    "Type": "Anime Canon",
    "Airdate": "2018-10-14T07:00:00.000Z"
  },
  {
    "#": 78,
    "Title": "Everyone's Motives",
    "Type": "Anime Canon",
    "Airdate": "2018-10-21T07:00:00.000Z"
  },
  {
    "#": 79,
    "Title": "Reunion with Mitsuki",
    "Type": "Anime Canon",
    "Airdate": "2018-10-28T07:00:00.000Z"
  },
  {
    "#": 80,
    "Title": "Mitsuki's Friend",
    "Type": "Anime Canon",
    "Airdate": "2018-11-04T07:00:00.000Z"
  },
  {
    "#": 81,
    "Title": "Boruto’s Wish",
    "Type": "Anime Canon",
    "Airdate": "2018-11-11T08:00:00.000Z"
  },
  {
    "#": 82,
    "Title": "Infiltrating the Hidden Stone Village",
    "Type": "Anime Canon",
    "Airdate": "2018-11-18T08:00:00.000Z"
  },
  {
    "#": 83,
    "Title": "Ōnoki's Justice",
    "Type": "Anime Canon",
    "Airdate": "2018-11-25T08:00:00.000Z"
  },
  {
    "#": 84,
    "Title": "Ōnoki's Thoughts, Kū's Thoughts",
    "Type": "Anime Canon",
    "Airdate": "2018-12-02T08:00:00.000Z"
  },
  {
    "#": 85,
    "Title": "The Heart Stone",
    "Type": "Anime Canon",
    "Airdate": "2018-12-09T08:00:00.000Z"
  },
  {
    "#": 86,
    "Title": "Kozuchi's Will",
    "Type": "Anime Canon",
    "Airdate": "2018-12-16T08:00:00.000Z"
  },
  {
    "#": 87,
    "Title": "The Sensation of Living",
    "Type": "Anime Canon",
    "Airdate": "2018-12-23T08:00:00.000Z"
  },
  {
    "#": 88,
    "Title": "Clash: Kokuyō!",
    "Type": "Anime Canon",
    "Airdate": "2019-01-06T08:00:00.000Z"
  },
  {
    "#": 89,
    "Title": "A Piercing Heart",
    "Type": "Anime Canon",
    "Airdate": "2019-01-13T08:00:00.000Z"
  },
  {
    "#": 90,
    "Title": "Mitsuki and Sekiei",
    "Type": "Anime Canon",
    "Airdate": "2019-01-20T08:00:00.000Z"
  },
  {
    "#": 91,
    "Title": "Ōnoki's Will",
    "Type": "Anime Canon",
    "Airdate": "2019-01-27T08:00:00.000Z"
  },
  {
    "#": 92,
    "Title": "A New Ordinary",
    "Type": "Anime Canon",
    "Airdate": "2019-02-03T08:00:00.000Z"
  },
  {
    "#": 93,
    "Title": "Parent and Child Day",
    "Type": "Anime Canon",
    "Airdate": "2019-02-10T08:00:00.000Z"
  },
  {
    "#": 94,
    "Title": "A Heaping Helping! The Eating Contest!",
    "Type": "Anime Canon",
    "Airdate": "2019-02-17T08:00:00.000Z"
  },
  {
    "#": 95,
    "Title": "Tactics for Getting Along With Your Daughter",
    "Type": "Anime Canon",
    "Airdate": "2019-02-24T08:00:00.000Z"
  },
  {
    "#": 96,
    "Title": "Blood, Sweat, and Namida",
    "Type": "Filler",
    "Airdate": "2019-03-03T08:00:00.000Z"
  },
  {
    "#": 97,
    "Title": "Shikadai's Decision",
    "Type": "Filler",
    "Airdate": "2019-03-10T08:00:00.000Z"
  },
  {
    "#": 98,
    "Title": "The Cursed Forest",
    "Type": "Anime Canon",
    "Airdate": "2019-03-17T07:00:00.000Z"
  },
  {
    "#": 99,
    "Title": "Jūgo and the Curse Mark",
    "Type": "Anime Canon",
    "Airdate": "2019-03-24T07:00:00.000Z"
  },
  {
    "#": 100,
    "Title": "The Predestined Path",
    "Type": "Anime Canon",
    "Airdate": "2019-03-31T07:00:00.000Z"
  },
  {
    "#": 101,
    "Title": "Jūgo's Reinforcements",
    "Type": "Anime Canon",
    "Airdate": "2019-04-07T07:00:00.000Z"
  },
  {
    "#": 102,
    "Title": "Melee!",
    "Type": "Anime Canon",
    "Airdate": "2019-04-14T07:00:00.000Z"
  },
  {
    "#": 103,
    "Title": "Migration Season",
    "Type": "Anime Canon",
    "Airdate": "2019-04-21T07:00:00.000Z"
  },
  {
    "#": 104,
    "Title": "The Little Roommate",
    "Type": "Filler",
    "Airdate": "2019-04-28T07:00:00.000Z"
  },
  {
    "#": 105,
    "Title": "A Wound on the Heart",
    "Type": "Filler",
    "Airdate": "2019-05-05T07:00:00.000Z"
  },
  {
    "#": 106,
    "Title": "The Steam Ninja Scrolls: The S-Rank Mission!",
    "Type": "Manga Canon",
    "Airdate": "2019-05-12T07:00:00.000Z"
  },
  {
    "#": 107,
    "Title": "The Steam Ninja Scrolls: The Dog and Cat War!",
    "Type": "Manga Canon",
    "Airdate": "2019-05-19T07:00:00.000Z"
  },
  {
    "#": 108,
    "Title": "The Steam Ninja Scrolls: The Haunted Inn!",
    "Type": "Manga Canon",
    "Airdate": "2019-05-26T07:00:00.000Z"
  },
  {
    "#": 109,
    "Title": "The Steam Ninja Scrolls: Potato Chips and the Giant Boulder!",
    "Type": "Manga Canon",
    "Airdate": "2019-06-02T07:00:00.000Z"
  },
  {
    "#": 110,
    "Title": "The Steam Ninja Scrolls: The Resurrection Hot Springs!",
    "Type": "Manga Canon",
    "Airdate": "2019-06-09T07:00:00.000Z"
  },
  {
    "#": 111,
    "Title": "The Steam Ninja Scrolls: Mirai's King!",
    "Type": "Manga Canon",
    "Airdate": "2019-06-16T07:00:00.000Z"
  },
  {
    "#": 112,
    "Title": "The Chūnin Selection Conference",
    "Type": "Filler",
    "Airdate": "2019-06-23T07:00:00.000Z"
  },
  {
    "#": 113,
    "Title": "The Qualities of a Captain",
    "Type": "Filler",
    "Airdate": "2019-06-30T07:00:00.000Z"
  },
  {
    "#": 114,
    "Title": "X Cards Proxy War!",
    "Type": "Filler",
    "Airdate": "2019-07-07T07:00:00.000Z"
  },
  {
    "#": 115,
    "Title": "Team 25",
    "Type": "Anime Canon",
    "Airdate": "2019-07-14T07:00:00.000Z"
  },
  {
    "#": 116,
    "Title": "Konohamaru and Remon",
    "Type": "Filler",
    "Airdate": "2019-07-21T07:00:00.000Z"
  },
  {
    "#": 117,
    "Title": "Remon's Secret",
    "Type": "Filler",
    "Airdate": "2019-07-28T07:00:00.000Z"
  },
  {
    "#": 118,
    "Title": "Something That Steals Memories",
    "Type": "Filler",
    "Airdate": "2019-08-04T07:00:00.000Z"
  },
  {
    "#": 119,
    "Title": "Konohamaru’s Ninja Way",
    "Type": "Filler",
    "Airdate": "2019-08-11T07:00:00.000Z"
  },
  {
    "#": 120,
    "Title": "With Sasuke as the Goal",
    "Type": "Filler",
    "Airdate": "2019-08-18T07:00:00.000Z"
  },
  {
    "#": 121,
    "Title": "The Entrusted Mission: Protect the One-Tails!",
    "Type": "Filler",
    "Airdate": "2019-08-25T07:00:00.000Z"
  },
  {
    "#": 122,
    "Title": "The Puppet Battle!",
    "Type": "Filler",
    "Airdate": "2019-09-01T07:00:00.000Z"
  },
  {
    "#": 123,
    "Title": "Urashiki Returns",
    "Type": "Filler",
    "Airdate": "2019-09-08T07:00:00.000Z"
  },
  {
    "#": 124,
    "Title": "Decision Time",
    "Type": "Filler",
    "Airdate": "2019-09-15T07:00:00.000Z"
  },
  {
    "#": 125,
    "Title": "Boruto and Shinki",
    "Type": "Filler",
    "Airdate": "2019-09-22T07:00:00.000Z"
  },
  {
    "#": 126,
    "Title": "Shukaku's Trick",
    "Type": "Filler",
    "Airdate": "2019-09-29T07:00:00.000Z"
  },
  {
    "#": 127,
    "Title": "Make-Out Tactics",
    "Type": "Filler",
    "Airdate": "2019-10-06T07:00:00.000Z"
  },
  {
    "#": 128,
    "Title": "Urashiki's Target",
    "Type": "Filler",
    "Airdate": "2019-10-13T07:00:00.000Z"
  },
  {
    "#": 129,
    "Title": "The Village Hidden in the Leaves",
    "Type": "Filler",
    "Airdate": "2019-10-20T07:00:00.000Z"
  },
  {
    "#": 130,
    "Title": "Genin, Assemble!",
    "Type": "Filler",
    "Airdate": "2019-10-27T07:00:00.000Z"
  },
  {
    "#": 131,
    "Title": "The Power of the Nine-Tails",
    "Type": "Filler",
    "Airdate": "2019-11-03T07:00:00.000Z"
  },
  {
    "#": 132,
    "Title": "Jiraiya’s Assignment",
    "Type": "Filler",
    "Airdate": "2019-11-10T08:00:00.000Z"
  },
  {
    "#": 133,
    "Title": "A Village Without Sasuke",
    "Type": "Filler",
    "Airdate": "2019-11-24T08:00:00.000Z"
  },
  {
    "#": 134,
    "Title": "The Power to See the Future",
    "Type": "Filler",
    "Airdate": "2019-12-01T08:00:00.000Z"
  },
  {
    "#": 135,
    "Title": "The Last Battle, Urashiki",
    "Type": "Filler",
    "Airdate": "2019-12-08T08:00:00.000Z"
  },
  {
    "#": 136,
    "Title": "Crossing Time!",
    "Type": "Filler",
    "Airdate": "2019-12-15T08:00:00.000Z"
  },
  {
    "#": 137,
    "Title": "The Samurai Exchange Student",
    "Type": "Filler",
    "Airdate": "2019-12-22T08:00:00.000Z"
  },
  {
    "#": 138,
    "Title": "Hiashi's Birthday",
    "Type": "Filler",
    "Airdate": "2019-12-29T08:00:00.000Z"
  },
  {
    "#": 139,
    "Title": "The Terror! Enko Onikuma",
    "Type": "Filler",
    "Airdate": "2020-01-12T08:00:00.000Z"
  },
  {
    "#": 140,
    "Title": "The Mind Transfer Jutsu that Lost to Potato Chips",
    "Type": "Filler",
    "Airdate": "2020-01-19T08:00:00.000Z"
  },
  {
    "#": 141,
    "Title": "The Shinobi Prison: Hozuki Castle",
    "Type": "Anime Canon",
    "Airdate": "2020-01-26T08:00:00.000Z"
  },
  {
    "#": 142,
    "Title": "A Test of Willpower",
    "Type": "Anime Canon",
    "Airdate": "2020-02-02T08:00:00.000Z"
  },
  {
    "#": 143,
    "Title": "The Criminal Targeting Kokuri",
    "Type": "Anime Canon",
    "Airdate": "2020-02-09T08:00:00.000Z"
  },
  {
    "#": 144,
    "Title": "Kokuri’s Secret",
    "Type": "Anime Canon",
    "Airdate": "2020-02-16T08:00:00.000Z"
  },
  {
    "#": 145,
    "Title": "Breaking Out of Hōzuki Castle",
    "Type": "Anime Canon",
    "Airdate": "2020-02-23T08:00:00.000Z"
  },
  {
    "#": 146,
    "Title": "Executing the Prison Break!",
    "Type": "Anime Canon",
    "Airdate": "2020-03-01T08:00:00.000Z"
  },
  {
    "#": 147,
    "Title": "The Fateful Moonlit Battle",
    "Type": "Anime Canon",
    "Airdate": "2020-03-08T08:00:00.000Z"
  },
  {
    "#": 148,
    "Title": "A New Mission!!",
    "Type": "Manga Canon",
    "Airdate": "2020-03-15T07:00:00.000Z"
  },
  {
    "#": 149,
    "Title": "Friends!!",
    "Type": "Manga Canon",
    "Airdate": "2020-03-22T07:00:00.000Z"
  },
  {
    "#": 150,
    "Title": "The Value of a Hidden Ace",
    "Type": "Manga Canon",
    "Airdate": "2020-03-29T07:00:00.000Z"
  },
  {
    "#": 151,
    "Title": "Boruto and Tentō",
    "Type": "Manga Canon",
    "Airdate": "2020-04-05T07:00:00.000Z"
  },
  {
    "#": 152,
    "Title": "Developing One's Medical Ninjutsu",
    "Type": "Filler",
    "Airdate": "2020-04-12T07:00:00.000Z"
  },
  {
    "#": 153,
    "Title": "Harmony in Gold",
    "Type": "Filler",
    "Airdate": "2020-04-19T07:00:00.000Z"
  },
  {
    "#": 154,
    "Title": "Himawari's Ninja Trial Session",
    "Type": "Filler",
    "Airdate": "2020-04-26T07:00:00.000Z"
  },
  {
    "#": 155,
    "Title": "Mitsuki's Rainy Day",
    "Type": "Filler",
    "Airdate": "2020-07-05T07:00:00.000Z"
  },
  {
    "#": 156,
    "Title": "I Can't Stay in My Slim Form",
    "Type": "Filler",
    "Airdate": "2020-07-12T07:00:00.000Z"
  },
  {
    "#": 157,
    "Title": "Kara's Footprints",
    "Type": "Anime Canon",
    "Airdate": "2020-07-19T07:00:00.000Z"
  },
  {
    "#": 158,
    "Title": "The Man Who Disappeared",
    "Type": "Anime Canon",
    "Airdate": "2020-07-26T07:00:00.000Z"
  },
  {
    "#": 159,
    "Title": "The Hashirama Cell",
    "Type": "Anime Canon",
    "Airdate": "2020-08-02T07:00:00.000Z"
  },
  {
    "#": 160,
    "Title": "To the Land of Silence",
    "Type": "Anime Canon",
    "Airdate": "2020-08-09T07:00:00.000Z"
  },
  {
    "#": 161,
    "Title": "The Castle of Nightmares",
    "Type": "Anime Canon",
    "Airdate": "2020-08-16T07:00:00.000Z"
  },
  {
    "#": 162,
    "Title": "Escaping the Tightening Net",
    "Type": "Anime Canon",
    "Airdate": "2020-08-23T07:00:00.000Z"
  },
  {
    "#": 163,
    "Title": "The Pursuers",
    "Type": "Anime Canon",
    "Airdate": "2020-08-30T07:00:00.000Z"
  },
  {
    "#": 164,
    "Title": "The Forbidden Jutsu of Death",
    "Type": "Anime Canon",
    "Airdate": "2020-09-06T07:00:00.000Z"
  },
  {
    "#": 165,
    "Title": "The Quadruplets' Duty",
    "Type": "Anime Canon",
    "Airdate": "2020-09-13T07:00:00.000Z"
  },
  {
    "#": 166,
    "Title": "Death Match",
    "Type": "Anime Canon",
    "Airdate": "2020-09-20T07:00:00.000Z"
  },
  {
    "#": 167,
    "Title": "Their Decision",
    "Type": "Anime Canon",
    "Airdate": "2020-09-27T07:00:00.000Z"
  },
  {
    "#": 168,
    "Title": "Training Begins!",
    "Type": "Anime Canon",
    "Airdate": "2020-10-04T07:00:00.000Z"
  },
  {
    "#": 169,
    "Title": "A Joint Mission with the Sand",
    "Type": "Anime Canon",
    "Airdate": "2020-10-11T07:00:00.000Z"
  },
  {
    "#": 170,
    "Title": "A New Rasengan",
    "Type": "Anime Canon",
    "Airdate": "2020-10-18T07:00:00.000Z"
  },
  {
    "#": 171,
    "Title": "The Results of Training",
    "Type": "Anime Canon",
    "Airdate": "2020-10-25T07:00:00.000Z"
  },
  {
    "#": 172,
    "Title": "A Signature of Fear",
    "Type": "Filler",
    "Airdate": "2020-11-01T07:00:00.000Z"
  },
  {
    "#": 173,
    "Title": "The Secret Behind the Underground Room",
    "Type": "Anime Canon",
    "Airdate": "2020-11-08T08:00:00.000Z"
  },
  {
    "#": 174,
    "Title": "The Revival of the God Tree",
    "Type": "Anime Canon",
    "Airdate": "2020-11-15T08:00:00.000Z"
  },
  {
    "#": 175,
    "Title": "Beyond the Limits!",
    "Type": "Anime Canon",
    "Airdate": "2020-11-22T08:00:00.000Z"
  },
  {
    "#": 176,
    "Title": "Blockade the A-Un Gate!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2020-11-29T08:00:00.000Z"
  },
  {
    "#": 177,
    "Title": "The Iron Wall's Sensing System",
    "Type": "Anime Canon",
    "Airdate": "2020-12-06T08:00:00.000Z"
  },
  {
    "#": 178,
    "Title": "Our Fathers' Example",
    "Type": "Anime Canon",
    "Airdate": "2020-12-13T08:00:00.000Z"
  },
  {
    "#": 179,
    "Title": "Victor's Scheme",
    "Type": "Anime Canon",
    "Airdate": "2020-12-20T08:00:00.000Z"
  },
  {
    "#": 180,
    "Title": "The Assassin, Mugino",
    "Type": "Anime Canon",
    "Airdate": "2020-12-27T08:00:00.000Z"
  },
  {
    "#": 181,
    "Title": "The Vessel",
    "Type": "Manga Canon",
    "Airdate": "2021-01-10T08:00:00.000Z"
  },
  {
    "#": 182,
    "Title": "Ao",
    "Type": "Manga Canon",
    "Airdate": "2021-01-17T08:00:00.000Z"
  },
  {
    "#": 182,
    "Title": "The Past",
    "Type": "Manga Canon",
    "Airdate": "2021-03-28T07:00:00.000Z"
  },
  {
    "#": 183,
    "Title": "The Hand",
    "Type": "Manga Canon",
    "Airdate": "2021-01-24T08:00:00.000Z"
  },
  {
    "#": 184,
    "Title": "Puppets",
    "Type": "Manga Canon",
    "Airdate": "2021-01-31T08:00:00.000Z"
  },
  {
    "#": 185,
    "Title": "Tools",
    "Type": "Manga Canon",
    "Airdate": "2021-02-07T08:00:00.000Z"
  },
  {
    "#": 186,
    "Title": "How You Use It",
    "Type": "Manga Canon",
    "Airdate": "2021-02-14T08:00:00.000Z"
  },
  {
    "#": 187,
    "Title": "Karma",
    "Type": "Manga Canon",
    "Airdate": "2021-02-21T08:00:00.000Z"
  },
  {
    "#": 188,
    "Title": "Awakening",
    "Type": "Manga Canon",
    "Airdate": "2021-02-28T08:00:00.000Z"
  },
  {
    "#": 189,
    "Title": "Resonance",
    "Type": "Manga Canon",
    "Airdate": "2021-03-07T08:00:00.000Z"
  },
  {
    "#": 190,
    "Title": "Escape",
    "Type": "Anime Canon",
    "Airdate": "2021-03-21T07:00:00.000Z"
  },
  {
    "#": 191,
    "Title": "Stray Dog",
    "Type": "Anime Canon",
    "Airdate": "2021-03-21T07:00:00.000Z"
  },
  {
    "#": 193,
    "Title": "Coexistence",
    "Type": "Manga Canon",
    "Airdate": "2021-04-04T07:00:00.000Z"
  },
  {
    "#": 194,
    "Title": "The Uzumaki Household",
    "Type": "Manga Canon",
    "Airdate": "2021-04-11T07:00:00.000Z"
  },
  {
    "#": 195,
    "Title": "A Vase",
    "Type": "Manga Canon",
    "Airdate": "2021-04-18T07:00:00.000Z"
  },
  {
    "#": 196,
    "Title": "A Binding Force",
    "Type": "Manga Canon",
    "Airdate": "2021-04-25T07:00:00.000Z"
  },
  {
    "#": 197,
    "Title": "Delta",
    "Type": "Manga Canon",
    "Airdate": "2021-05-02T07:00:00.000Z"
  },
  {
    "#": 198,
    "Title": "Monsters",
    "Type": "Manga Canon",
    "Airdate": "2021-05-09T07:00:00.000Z"
  },
  {
    "#": 199,
    "Title": "Overload",
    "Type": "Manga Canon",
    "Airdate": "2021-05-16T07:00:00.000Z"
  },
  {
    "#": 200,
    "Title": "Becoming a Student",
    "Type": "Manga Canon",
    "Airdate": "2021-05-23T07:00:00.000Z"
  },
  {
    "#": 201,
    "Title": "Empty Tears",
    "Type": "Manga Canon",
    "Airdate": "2021-05-30T07:00:00.000Z"
  },
  {
    "#": 202,
    "Title": "The Cult",
    "Type": "Manga Canon",
    "Airdate": "2021-06-06T07:00:00.000Z"
  },
  {
    "#": 203,
    "Title": "Surprise Attack!",
    "Type": "Manga Canon",
    "Airdate": "2021-06-13T07:00:00.000Z"
  },
  {
    "#": 204,
    "Title": "He's Bad News",
    "Type": "Manga Canon",
    "Airdate": "2021-06-20T07:00:00.000Z"
  },
  {
    "#": 205,
    "Title": "Proof",
    "Type": "Manga Canon",
    "Airdate": "2021-06-27T07:00:00.000Z"
  },
  {
    "#": 206,
    "Title": "The New Team Seven",
    "Type": "Manga Canon",
    "Airdate": "2021-07-04T07:00:00.000Z"
  },
  {
    "#": 207,
    "Title": "Regeneration",
    "Type": "Manga Canon",
    "Airdate": "2021-07-11T07:00:00.000Z"
  },
  {
    "#": 208,
    "Title": "Momoshiki's Manifestation",
    "Type": "Manga Canon",
    "Airdate": "2021-07-18T07:00:00.000Z"
  },
  {
    "#": 209,
    "Title": "The Outcast",
    "Type": "Filler",
    "Airdate": "2021-08-01T07:00:00.000Z"
  },
  {
    "#": 210,
    "Title": "Clues to Kara",
    "Type": "Anime Canon",
    "Airdate": "2021-08-08T07:00:00.000Z"
  },
  {
    "#": 211,
    "Title": "The Chase",
    "Type": "Anime Canon",
    "Airdate": "2021-08-15T07:00:00.000Z"
  },
  {
    "#": 212,
    "Title": "Amado's Defection",
    "Type": "Manga Canon",
    "Airdate": "2021-08-22T07:00:00.000Z"
  },
  {
    "#": 213,
    "Title": "True Identity",
    "Type": "Manga Canon",
    "Airdate": "2021-08-29T07:00:00.000Z"
  },
  {
    "#": 214,
    "Title": "Predestined Fate",
    "Type": "Manga Canon",
    "Airdate": "2021-09-05T07:00:00.000Z"
  },
  {
    "#": 215,
    "Title": "Prepared",
    "Type": "Manga Canon",
    "Airdate": "2021-09-12T07:00:00.000Z"
  },
  {
    "#": 216,
    "Title": "Sacrifice",
    "Type": "Manga Canon",
    "Airdate": "2021-09-19T07:00:00.000Z"
  },
  {
    "#": 217,
    "Title": "Decision",
    "Type": "Manga Canon",
    "Airdate": "2021-09-26T07:00:00.000Z"
  },
  {
    "#": 218,
    "Title": "Partner",
    "Type": "Manga Canon",
    "Airdate": "2021-10-03T07:00:00.000Z"
  },
  {
    "#": 219,
    "Title": "Return",
    "Type": "Manga Canon",
    "Airdate": "2021-10-10T07:00:00.000Z"
  },
  {
    "#": 220,
    "Title": "Remaining Time",
    "Type": "Manga Canon",
    "Airdate": "2021-10-17T07:00:00.000Z"
  },
  {
    "#": 221,
    "Title": "The Chunin Exams Resume",
    "Type": "Anime Canon",
    "Airdate": "2021-10-24T07:00:00.000Z"
  },
  {
    "#": 222,
    "Title": "The Night Before The Final Round",
    "Type": "Anime Canon",
    "Airdate": "2021-10-31T07:00:00.000Z"
  },
  {
    "#": 223,
    "Title": "Inojin vs. Houki",
    "Type": "Anime Canon",
    "Airdate": "2021-11-07T07:00:00.000Z"
  },
  {
    "#": 224,
    "Title": "The Legend of the Monster Cat",
    "Type": "Filler",
    "Airdate": "2021-11-14T08:00:00.000Z"
  },
  {
    "#": 225,
    "Title": "Showdown Between Best Friends",
    "Type": "Anime Canon",
    "Airdate": "2021-11-21T08:00:00.000Z"
  },
  {
    "#": 226,
    "Title": "Samurai vs. Science",
    "Type": "Anime Canon",
    "Airdate": "2021-11-28T08:00:00.000Z"
  },
  {
    "#": 227,
    "Title": "Team 7's Last Mission?!",
    "Type": "Filler",
    "Airdate": "2021-12-05T08:00:00.000Z"
  },
  {
    "#": 228,
    "Title": "Kawaki's Path to Becoming A Ninja",
    "Type": "Anime Canon",
    "Airdate": "2021-12-12T08:00:00.000Z"
  },
  {
    "#": 229,
    "Title": "Breach of Orders",
    "Type": "Anime Canon",
    "Airdate": "2021-12-19T08:00:00.000Z"
  },
  {
    "#": 230,
    "Title": "A Wish",
    "Type": "Anime Canon",
    "Airdate": "2021-12-26T08:00:00.000Z"
  },
  {
    "#": 231,
    "Title": "The Rusty Sword",
    "Type": "Anime Canon",
    "Airdate": "2022-01-09T08:00:00.000Z"
  },
  {
    "#": 232,
    "Title": "Captain Denki's First Mission",
    "Type": "Filler",
    "Airdate": "2022-01-16T08:00:00.000Z"
  },
  {
    "#": 233,
    "Title": "The New Team 7 Jumps Into Action",
    "Type": "Filler",
    "Airdate": "2022-01-23T08:00:00.000Z"
  },
  {
    "#": 234,
    "Title": "The Unleashed Villain",
    "Type": "Filler",
    "Airdate": "2022-01-30T08:00:00.000Z"
  },
  {
    "#": 235,
    "Title": "Infiltrating Dotou Island",
    "Type": "Filler",
    "Airdate": "2022-02-06T08:00:00.000Z"
  },
  {
    "#": 236,
    "Title": "Cut and Run",
    "Type": "Filler",
    "Airdate": "2022-02-13T08:00:00.000Z"
  },
  {
    "#": 237,
    "Title": "The Mobile Fortress",
    "Type": "Filler",
    "Airdate": "2022-02-20T08:00:00.000Z"
  },
  {
    "#": 238,
    "Title": "A Killer on the Ship",
    "Type": "Filler",
    "Airdate": "2022-02-27T08:00:00.000Z"
  },
  {
    "#": 239,
    "Title": "The Boy from the Isle of Shipbuilders",
    "Type": "Filler",
    "Airdate": "2022-03-06T08:00:00.000Z"
  },
  {
    "#": 240,
    "Title": "Ikada's Dream",
    "Type": "Filler",
    "Airdate": "2022-03-13T08:00:00.000Z"
  },
  {
    "#": 241,
    "Title": "Ikada's Secret",
    "Type": "Filler",
    "Airdate": "2022-03-20T07:00:00.000Z"
  },
  {
    "#": 242,
    "Title": "Seiren",
    "Type": "Filler",
    "Airdate": "2022-03-27T07:00:00.000Z"
  },
  {
    "#": 243,
    "Title": "Where I Belong",
    "Type": "Filler",
    "Airdate": "2022-04-03T07:00:00.000Z"
  },
  {
    "#": 244,
    "Title": "Rift",
    "Type": "Filler",
    "Airdate": "2022-04-10T07:00:00.000Z"
  },
  {
    "#": 245,
    "Title": "Funamushi's Tenacity",
    "Type": "Filler",
    "Airdate": "2022-04-17T07:00:00.000Z"
  },
  {
    "#": 246,
    "Title": "A Heavy Loss",
    "Type": "Filler",
    "Airdate": "2022-04-24T07:00:00.000Z"
  },
  {
    "#": 247,
    "Title": "For Kagura",
    "Type": "Filler",
    "Airdate": "2022-05-01T07:00:00.000Z"
  },
  {
    "#": 248,
    "Title": "Another Fierce Battle",
    "Type": "Filler",
    "Airdate": "2022-05-08T07:00:00.000Z"
  },
  {
    "#": 249,
    "Title": "Burgeoning Hatred",
    "Type": "Filler",
    "Airdate": "2022-05-15T07:00:00.000Z"
  },
  {
    "#": 250,
    "Title": "The Blood of the Funato",
    "Type": "Filler",
    "Airdate": "2022-05-22T07:00:00.000Z"
  },
  {
    "#": 251,
    "Title": "Their Resolve",
    "Type": "Filler",
    "Airdate": "2022-05-29T07:00:00.000Z"
  },
  {
    "#": 252,
    "Title": "The Desire to Believe",
    "Type": "Filler",
    "Airdate": "2022-06-05T07:00:00.000Z"
  },
  {
    "#": 253,
    "Title": "Conflicting Feelings",
    "Type": "Filler",
    "Airdate": "2022-06-12T07:00:00.000Z"
  },
  {
    "#": 254,
    "Title": "The Spiral of Revenge",
    "Type": "Filler",
    "Airdate": "2022-06-19T07:00:00.000Z"
  },
  {
    "#": 255,
    "Title": "A Tricky Assignment",
    "Type": "Filler",
    "Airdate": "2022-06-26T07:00:00.000Z"
  },
  {
    "#": 256,
    "Title": "The Ultimate Recipe",
    "Type": "Filler",
    "Airdate": "2022-07-03T07:00:00.000Z"
  },
  {
    "#": 257,
    "Title": "Konohamaru Becomes the Hokage?!",
    "Type": "Filler",
    "Airdate": "2022-07-10T07:00:00.000Z"
  },
  {
    "#": 258,
    "Title": "The Uzumaki Family's Hot Springs Vacation",
    "Type": "Filler",
    "Airdate": "2022-07-17T07:00:00.000Z"
  },
  {
    "#": 259,
    "Title": "A Wound That Never Heals",
    "Type": "Filler",
    "Airdate": "2022-07-24T07:00:00.000Z"
  },
  {
    "#": 260,
    "Title": "Fireworks of Love",
    "Type": "Filler",
    "Airdate": "2022-07-31T07:00:00.000Z"
  },
  {
    "#": 261,
    "Title": "Kawaki Enters the Ninja Academy!",
    "Type": "Filler",
    "Airdate": "2022-08-07T07:00:00.000Z"
  },
  {
    "#": 262,
    "Title": "The Princess’s Tea Party",
    "Type": "Filler",
    "Airdate": "2022-08-14T07:00:00.000Z"
  },
  {
    "#": 263,
    "Title": "Bloom, Hana! The Teacher's Gifts",
    "Type": "Filler",
    "Airdate": "2022-08-21T07:00:00.000Z"
  },
  {
    "#": 264,
    "Title": "The Seven Mysteries Investigative Team Forms!",
    "Type": "Filler",
    "Airdate": "2022-08-28T07:00:00.000Z"
  },
  {
    "#": 265,
    "Title": "Team Rivalry: Practical Skills Training!",
    "Type": "Filler",
    "Airdate": "2022-09-04T07:00:00.000Z"
  },
  {
    "#": 266,
    "Title": "Himawari Kidnapped!",
    "Type": "Filler",
    "Airdate": "2022-09-11T07:00:00.000Z"
  },
  {
    "#": 267,
    "Title": "Kawaki’s Cover Blown?!",
    "Type": "Filler",
    "Airdate": "2022-09-18T07:00:00.000Z"
  },
  {
    "#": 268,
    "Title": "Target: The School Festival",
    "Type": "Filler",
    "Airdate": "2022-09-25T07:00:00.000Z"
  },
  {
    "#": 269,
    "Title": "The Sneaking Shadow",
    "Type": "Filler",
    "Airdate": "2022-10-02T07:00:00.000Z"
  },
  {
    "#": 270,
    "Title": "Two Sides of the Same Coin",
    "Type": "Filler",
    "Airdate": "2022-10-09T07:00:00.000Z"
  },
  {
    "#": 271,
    "Title": "The Island of Treachery",
    "Type": "Filler",
    "Airdate": "2022-10-16T07:00:00.000Z"
  },
  {
    "#": 272,
    "Title": "Students Unite!",
    "Type": "Filler",
    "Airdate": "2022-10-23T07:00:00.000Z"
  },
  {
    "#": 273,
    "Title": "Farewell, Academy!",
    "Type": "Filler",
    "Airdate": "2022-10-30T07:00:00.000Z"
  },
  {
    "#": 274,
    "Title": "A Flightless Hawk",
    "Type": "Filler",
    "Airdate": "2022-11-06T07:00:00.000Z"
  },
  {
    "#": 275,
    "Title": "Into the Sky Again",
    "Type": "Filler",
    "Airdate": "2022-11-13T08:00:00.000Z"
  },
  {
    "#": 276,
    "Title": "Welcome to the Maze",
    "Type": "Filler",
    "Airdate": "2022-11-20T08:00:00.000Z"
  },
  {
    "#": 277,
    "Title": "Disappearing Lives",
    "Type": "Filler",
    "Airdate": "2022-11-27T08:00:00.000Z"
  },
  {
    "#": 278,
    "Title": "Musical Chairs",
    "Type": "Filler",
    "Airdate": "2022-12-04T08:00:00.000Z"
  },
  {
    "#": 279,
    "Title": "The Obstacle: Seven",
    "Type": "Filler",
    "Airdate": "2022-12-11T08:00:00.000Z"
  },
  {
    "#": 280,
    "Title": "Breakthrough",
    "Type": "Filler",
    "Airdate": "2022-12-18T08:00:00.000Z"
  },
  {
    "#": 281,
    "Title": "The Eighth Truth",
    "Type": "Filler",
    "Airdate": "2022-12-25T08:00:00.000Z"
  },
  {
    "#": 282,
    "Title": "Sasuke's Story: Infiltration",
    "Type": "Manga Canon",
    "Airdate": "2023-01-08T08:00:00.000Z"
  },
  {
    "#": 283,
    "Title": "Sasuke's Story: Constellations",
    "Type": "Manga Canon",
    "Airdate": "2023-01-15T08:00:00.000Z"
  },
  {
    "#": 284,
    "Title": "Sasuke's Story: Secret Basement",
    "Type": "Manga Canon",
    "Airdate": "2023-01-22T08:00:00.000Z"
  },
  {
    "#": 285,
    "Title": "Sasuke's Story: Sky Descending to Earth",
    "Type": "Manga Canon",
    "Airdate": "2023-01-29T08:00:00.000Z"
  },
  {
    "#": 286,
    "Title": "Sasuke's Story: The Ring",
    "Type": "Manga Canon",
    "Airdate": "2023-02-05T08:00:00.000Z"
  },
  {
    "#": 287,
    "Title": "Claw Marks",
    "Type": "Manga Canon",
    "Airdate": "2023-02-12T08:00:00.000Z"
  },
  {
    "#": 288,
    "Title": "Captives",
    "Type": "Manga Canon",
    "Airdate": "2023-02-19T08:00:00.000Z"
  },
  {
    "#": 289,
    "Title": "Qualification",
    "Type": "Manga Canon",
    "Airdate": "2023-02-26T08:00:00.000Z"
  },
  {
    "#": 290,
    "Title": "Signs",
    "Type": "Manga Canon",
    "Airdate": "2023-03-05T08:00:00.000Z"
  },
  {
    "#": 291,
    "Title": "Control",
    "Type": "Manga Canon",
    "Airdate": "2023-03-12T08:00:00.000Z"
  },
  {
    "#": 292,
    "Title": "Craving",
    "Type": "Manga Canon",
    "Airdate": "2023-03-19T07:00:00.000Z"
  },
  {
    "#": 293,
    "Title": "Farewell",
    "Type": "Manga Canon",
    "Airdate": "2023-03-26T07:00:00.000Z"
  }
],

'GYX0ZW80R': //SOUL EATER
[
  {
    "#": 1,
    "Title": "Resonance of the Soul – Will Soul Eater Become a Death Scythe?",
    "Type": "Manga Canon",
    "Airdate": "2008-04-07T07:00:00.000Z"
  },
  {
    "#": 2,
    "Title": "I Am the Star! The Big Man Is Showing Up Here?",
    "Type": "Manga Canon",
    "Airdate": "2008-04-14T07:00:00.000Z"
  },
  {
    "#": 3,
    "Title": "The Perfect Boy – Death the Kid's Magnificent Mission?",
    "Type": "Manga Canon",
    "Airdate": "2008-04-21T07:00:00.000Z"
  },
  {
    "#": 4,
    "Title": "Engage the Witch Hunter! A Remedial Lesson in the Graveyard?",
    "Type": "Manga Canon",
    "Airdate": "2008-04-28T07:00:00.000Z"
  },
  {
    "#": 5,
    "Title": "Shape of the Soul – Enter the Ultimate Meister Stein?",
    "Type": "Manga Canon",
    "Airdate": "2008-05-05T07:00:00.000Z"
  },
  {
    "#": 6,
    "Title": "The New Student – Kid's First Day at the Academy, Will It Be an Entrance to Remember?",
    "Type": "Manga Canon",
    "Airdate": "2008-05-12T07:00:00.000Z"
  },
  {
    "#": 7,
    "Title": "Black-blooded Terror – There's a Weapon inside Crona?",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2008-05-19T07:00:00.000Z"
  },
  {
    "#": 8,
    "Title": "Medusa the Witch – The One Who Possesses a Great Evil Soul?",
    "Type": "Manga Canon",
    "Airdate": "2008-05-26T07:00:00.000Z"
  },
  {
    "#": 9,
    "Title": "Legend of the Holy Sword – Kid and Black☆Star's Great Adventure?",
    "Type": "Manga Canon",
    "Airdate": "2008-06-02T07:00:00.000Z"
  },
  {
    "#": 10,
    "Title": "The Enchanted Sword Masamune – Break the Soul Possession: A Heart Sings in the Rain?",
    "Type": "Manga Canon",
    "Airdate": "2008-06-09T07:00:00.000Z"
  },
  {
    "#": 11,
    "Title": "Tsubaki, the Camellia Blossom – What Lies Beyond the Grief?",
    "Type": "Manga Canon",
    "Airdate": "2008-06-16T07:00:00.000Z"
  },
  {
    "#": 12,
    "Title": "Courage That Beats Out Fear – Maka Albarn's Great Resolution?",
    "Type": "Manga Canon",
    "Airdate": "2008-06-23T07:00:00.000Z"
  },
  {
    "#": 13,
    "Title": "The Man with the Magic Eye – Soul and Maka's Diverging Soul Wavelength?",
    "Type": "Manga Canon",
    "Airdate": "2008-06-30T07:00:00.000Z"
  },
  {
    "#": 14,
    "Title": "The Super Written Exam – Heart-Pounding, Reeling, and Restless. You're Kidding!?",
    "Type": "Manga Canon",
    "Airdate": "2008-07-07T07:00:00.000Z"
  },
  {
    "#": 15,
    "Title": "The Soul Eating Black Dragon – Scaredy-cat Liz and Her Merry Friends?",
    "Type": "Manga Canon",
    "Airdate": "2008-07-14T07:00:00.000Z"
  },
  {
    "#": 16,
    "Title": "Fierce Battle Aboard the Ghost Ship – The Hell inside My Head?",
    "Type": "Manga Canon",
    "Airdate": "2008-07-21T07:00:00.000Z"
  },
  {
    "#": 17,
    "Title": "Legend of the Holy Sword 2 – Wanna Go Drinking, Gambling, and Playing?",
    "Type": "Filler",
    "Airdate": "2008-07-28T07:00:00.000Z"
  },
  {
    "#": 18,
    "Title": "The Eve Party Nightmare – And so the Curtain Rises?",
    "Type": "Manga Canon",
    "Airdate": "2008-08-04T07:00:00.000Z"
  },
  {
    "#": 19,
    "Title": "The Underground Battle Commences – Break Through Medusa's Vector Arrow?",
    "Type": "Manga Canon",
    "Airdate": "2008-08-11T07:00:00.000Z"
  },
  {
    "#": 20,
    "Title": "The Black Blood Resonance Battle! – A Small Soul's Grand Struggle against Fear?",
    "Type": "Manga Canon",
    "Airdate": "2008-08-18T07:00:00.000Z"
  },
  {
    "#": 21,
    "Title": "May My Soul Reach You – A Dry Heart inside Unbearable Isolation?",
    "Type": "Manga Canon",
    "Airdate": "2008-08-25T07:00:00.000Z"
  },
  {
    "#": 22,
    "Title": "The Seal Shrine – The Immortal Man's Tricks?",
    "Type": "Manga Canon",
    "Airdate": "2008-09-01T07:00:00.000Z"
  },
  {
    "#": 23,
    "Title": "Dead or Alive – In the Rift between Revival and Dazzlement?",
    "Type": "Manga Canon",
    "Airdate": "2008-09-08T07:00:00.000Z"
  },
  {
    "#": 24,
    "Title": "The Battle of the Gods – Death City on the Verge of Collapse?",
    "Type": "Manga Canon",
    "Airdate": "2008-09-15T07:00:00.000Z"
  },
  {
    "#": 25,
    "Title": "The Death Scythes Convene – Stop Dad's Staff Reassignment!?",
    "Type": "Manga Canon",
    "Airdate": "2008-09-22T07:00:00.000Z"
  },
  {
    "#": 26,
    "Title": "The Exciting and Embarrassing Trial Enrollment! The DWMA New Lifestyle Support Fair Is Open?",
    "Type": "Manga Canon",
    "Airdate": "2008-09-29T07:00:00.000Z"
  },
  {
    "#": 27,
    "Title": "800 Years of Bloodlust – Advent of the Heretic Witch?",
    "Type": "Manga Canon",
    "Airdate": "2008-10-06T07:00:00.000Z"
  },
  {
    "#": 28,
    "Title": "The Sword God Rises – Does It Have a Sweet or Salty Taste?",
    "Type": "Manga Canon",
    "Airdate": "2008-10-13T07:00:00.000Z"
  },
  {
    "#": 29,
    "Title": "Medusa's Revival! A Spider and Snake's Fateful Reunion?",
    "Type": "Manga Canon",
    "Airdate": "2008-10-20T07:00:00.000Z"
  },
  {
    "#": 30,
    "Title": "The Red Hot Runaway Express – A Magic Tool Left Behind by the Great Wizard?",
    "Type": "Manga Canon",
    "Airdate": "2008-10-27T07:00:00.000Z"
  },
  {
    "#": 31,
    "Title": "Drying Happiness! Whose Tears Sparkle in the Moonlight?",
    "Type": "Manga Canon",
    "Airdate": "2008-11-03T08:00:00.000Z"
  },
  {
    "#": 32,
    "Title": "Legend of the Holy Sword 3 – The Academy Gang Leader's Tale?",
    "Type": "Manga Canon",
    "Airdate": "2008-11-10T08:00:00.000Z"
  },
  {
    "#": 33,
    "Title": "Resonance Link – Play the Melody of the Souls?",
    "Type": "Manga Canon",
    "Airdate": "2008-11-17T08:00:00.000Z"
  },
  {
    "#": 34,
    "Title": "The Battle for Brew – Clash: The DWMA vs. Arachnophobia?",
    "Type": "Manga Canon",
    "Airdate": "2008-11-24T08:00:00.000Z"
  },
  {
    "#": 35,
    "Title": "Mosquito's Storm! Ten Minutes to Fight in the World of the Past?",
    "Type": "Manga Canon",
    "Airdate": "2008-12-01T08:00:00.000Z"
  },
  {
    "#": 36,
    "Title": "Unleash the Seven's Resonance Link! A Recital of Destruction and Creation?",
    "Type": "Manga Canon",
    "Airdate": "2008-12-08T08:00:00.000Z"
  },
  {
    "#": 37,
    "Title": "The Detective's First Case – Kid Exposes the DWMA's Secret?",
    "Type": "Manga Canon",
    "Airdate": "2008-12-15T08:00:00.000Z"
  },
  {
    "#": 38,
    "Title": "Asura's Temptation – The Big Man's Uncontainable Irritation?",
    "Type": "Manga Canon",
    "Airdate": "2008-12-22T08:00:00.000Z"
  },
  {
    "#": 39,
    "Title": "Crona's Escape – Show Me Your Smile, Please?",
    "Type": "Anime Canon",
    "Airdate": "2009-01-05T08:00:00.000Z"
  },
  {
    "#": 40,
    "Title": "The Cards Are Cut – Medusa Surrenders to the DWMA?",
    "Type": "Anime Canon",
    "Airdate": "2009-01-12T08:00:00.000Z"
  },
  {
    "#": 41,
    "Title": "Twirl 'Round and 'Round – A New World in Which the Doc Dances?",
    "Type": "Anime Canon",
    "Airdate": "2009-01-19T08:00:00.000Z"
  },
  {
    "#": 42,
    "Title": "Charge Baba Yaga's Castle! Things Are Kind of Gloomy?",
    "Type": "Anime Canon",
    "Airdate": "2009-01-26T08:00:00.000Z"
  },
  {
    "#": 43,
    "Title": "The Last Magic Tool – Mission Impossible for Unarmed Kid?",
    "Type": "Anime Canon",
    "Airdate": "2009-02-02T08:00:00.000Z"
  },
  {
    "#": 44,
    "Title": "Weakling Crona's Determination – For You, for Always Being by My Side?",
    "Type": "Anime Canon",
    "Airdate": "2009-02-09T08:00:00.000Z"
  },
  {
    "#": 45,
    "Title": "Anti-magic Wavelength – Fierce Attack, the Anger-filled Demon Hunter?",
    "Type": "Anime Canon",
    "Airdate": "2009-02-16T08:00:00.000Z"
  },
  {
    "#": 46,
    "Title": "Warrior or Slaughterer? Showdown: Mifune vs. Black☆Star?",
    "Type": "Anime Canon",
    "Airdate": "2009-02-23T08:00:00.000Z"
  },
  {
    "#": 47,
    "Title": "The Miraculous Coffee Table Flip – Fly, Our Death City Robot?",
    "Type": "Anime Canon",
    "Airdate": "2009-03-02T08:00:00.000Z"
  },
  {
    "#": 48,
    "Title": "Lord Death Wields a Death Scythe – Just One Step from Utter Darkness?",
    "Type": "Anime Canon",
    "Airdate": "2009-03-09T07:00:00.000Z"
  },
  {
    "#": 49,
    "Title": "Asura Wakes – To the End of the World?",
    "Type": "Anime Canon",
    "Airdate": "2009-03-16T07:00:00.000Z"
  },
  {
    "#": 50,
    "Title": "Sink or Swim?! The Men Who Transcend the Gods?",
    "Type": "Anime Canon",
    "Airdate": "2009-03-23T07:00:00.000Z"
  },
  {
    "#": 51,
    "Title": "The Word Is Bravery!",
    "Type": "Anime Canon",
    "Airdate": "2009-03-30T07:00:00.000Z"
  }
],

'G6NV7Z50Y': //TOKYO GHOUL
[
  {
    "#": "S1 E1",
    "Title": "Tragedy",
    "Type": "Manga Canon",
    "Airdate": "2014-07-04T07:00:00.000Z"
  },
  {
    "#": "S1 E2",
    "Title": "Incubation",
    "Type": "Manga Canon",
    "Airdate": "2014-07-11T07:00:00.000Z"
  },
  {
    "#": "S1 E3",
    "Title": "Dove",
    "Type": "Manga Canon",
    "Airdate": "2014-07-18T07:00:00.000Z"
  },
  {
    "#": "S1 E4",
    "Title": "Supper",
    "Type": "Manga Canon",
    "Airdate": "2014-07-25T07:00:00.000Z"
  },
  {
    "#": "S1 E5",
    "Title": "Scars",
    "Type": "Manga Canon",
    "Airdate": "2014-08-01T07:00:00.000Z"
  },
  {
    "#": "S1 E6",
    "Title": "Cloudburst",
    "Type": "Manga Canon",
    "Airdate": "2014-08-08T07:00:00.000Z"
  },
  {
    "#": "S1 E7",
    "Title": "Captivity",
    "Type": "Manga Canon",
    "Airdate": "2014-08-15T07:00:00.000Z"
  },
  {
    "#": "S1 E8",
    "Title": "Circular",
    "Type": "Manga Canon",
    "Airdate": "2014-08-22T07:00:00.000Z"
  },
  {
    "#": "S1 E9",
    "Title": "Birdcage",
    "Type": "Manga Canon",
    "Airdate": "2014-08-29T07:00:00.000Z"
  },
  {
    "#": "S1 E10",
    "Title": "Aogiri",
    "Type": "Manga Canon",
    "Airdate": "2014-09-05T07:00:00.000Z"
  },
  {
    "#": "S1 E11",
    "Title": "High Spirits",
    "Type": "Manga Canon",
    "Airdate": "2014-09-12T07:00:00.000Z"
  },
  {
    "#": "S1 E12",
    "Title": "Ghoul",
    "Type": "Manga Canon",
    "Airdate": "2014-09-19T07:00:00.000Z"
  },
  {
    "#": "S2 E1",
    "Title": "New Surge",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2015-01-09T08:00:00.000Z"
  },
  {
    "#": "S2 E2",
    "Title": "Dancing Flowers",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2015-01-16T08:00:00.000Z"
  },
  {
    "#": "S2 E3",
    "Title": "Hangman",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2015-01-23T08:00:00.000Z"
  },
  {
    "#": "S2 E4",
    "Title": "Deeper Layers",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2015-01-30T08:00:00.000Z"
  },
  {
    "#": "S2 E5",
    "Title": "Rift",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2015-02-06T08:00:00.000Z"
  },
  {
    "#": "S2 E6",
    "Title": "Thousand Paths",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2015-02-13T08:00:00.000Z"
  },
  {
    "#": "S2 E7",
    "Title": "Permeation",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2015-02-20T08:00:00.000Z"
  },
  {
    "#": "S2 E8",
    "Title": "Old Nines",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2015-02-24T08:00:00.000Z"
  },
  {
    "#": "S2 E9",
    "Title": "City In Waiting",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2015-03-06T08:00:00.000Z"
  },
  {
    "#": "S2 E10",
    "Title": "Last Rain",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2015-03-13T07:00:00.000Z"
  },
  {
    "#": "S2 E11",
    "Title": "Deluge of Flowers",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2015-03-20T07:00:00.000Z"
  },
  {
    "#": "S2 E12",
    "Title": "Ken",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2015-03-27T07:00:00.000Z"
  },
  {
    "#": "S3 E1",
    "Title": "START: Those Who Hunt",
    "Type": "Manga Canon",
    "Airdate": "2018-04-03T07:00:00.000Z"
  },
  {
    "#": "S3 E2",
    "Title": "member: Fragments",
    "Type": "Manga Canon",
    "Airdate": "2018-04-10T07:00:00.000Z"
  },
  {
    "#": "S3 E3",
    "Title": "fresh: Eve",
    "Type": "Manga Canon",
    "Airdate": "2018-04-17T07:00:00.000Z"
  },
  {
    "#": "S3 E4",
    "Title": "MAIN: Auction",
    "Type": "Manga Canon",
    "Airdate": "2018-04-24T07:00:00.000Z"
  },
  {
    "#": "S3 E5",
    "Title": "PresS: Night of Scattering",
    "Type": "Manga Canon",
    "Airdate": "2018-05-01T07:00:00.000Z"
  },
  {
    "#": "S3 E6",
    "Title": "turn: In the End",
    "Type": "Manga Canon",
    "Airdate": "2018-05-08T07:00:00.000Z"
  },
  {
    "#": "S3 E7",
    "Title": "mind: Days of Recollections",
    "Type": "Manga Canon",
    "Airdate": "2018-05-15T07:00:00.000Z"
  },
  {
    "#": "S3 E8",
    "Title": "TAKe: One Who Writhes",
    "Type": "Manga Canon",
    "Airdate": "2018-05-22T07:00:00.000Z"
  },
  {
    "#": "S3 E9",
    "Title": "play: Departed Spirit",
    "Type": "Manga Canon",
    "Airdate": "2018-05-29T07:00:00.000Z"
  },
  {
    "#": "S3 E10",
    "Title": "think: Sway",
    "Type": "Manga Canon",
    "Airdate": "2018-06-05T07:00:00.000Z"
  },
  {
    "#": "S3 E11",
    "Title": "writE: The Absent One",
    "Type": "Manga Canon",
    "Airdate": "2018-06-12T07:00:00.000Z"
  },
  {
    "#": "S3 E12",
    "Title": "Beautiful Dream: Daybreak",
    "Type": "Manga Canon",
    "Airdate": "2018-06-19T07:00:00.000Z"
  },
  {
    "#": "S3 E13",
    "Title": "Place: And So, Once Again",
    "Type": "Manga Canon",
    "Airdate": "2018-10-09T07:00:00.000Z"
  },
  {
    "#": "S3 E14",
    "Title": "VOLT: White Darkness",
    "Type": "Manga Canon",
    "Airdate": "2018-10-16T07:00:00.000Z"
  },
  {
    "#": "S3 E15",
    "Title": "union: Close Game",
    "Type": "Manga Canon",
    "Airdate": "2018-10-23T07:00:00.000Z"
  },
  {
    "#": "S3 E16",
    "Title": "vive: Those Left Behind",
    "Type": "Manga Canon",
    "Airdate": "2018-10-30T07:00:00.000Z"
  },
  {
    "#": "S3 E17",
    "Title": "MovE: Confluence, Confusion",
    "Type": "Manga Canon",
    "Airdate": "2018-11-06T08:00:00.000Z"
  },
  {
    "#": "S3 E18",
    "Title": "FACE: Effulgence",
    "Type": "Manga Canon",
    "Airdate": "2018-11-13T08:00:00.000Z"
  },
  {
    "#": "S3 E19",
    "Title": "proof: Bonds",
    "Type": "Manga Canon",
    "Airdate": "2018-11-20T08:00:00.000Z"
  },
  {
    "#": "S3 E20",
    "Title": "incarnation: Awakened Child",
    "Type": "Manga Canon",
    "Airdate": "2018-11-27T08:00:00.000Z"
  },
  {
    "#": "S3 E21",
    "Title": "Morse: Remembrances",
    "Type": "Manga Canon",
    "Airdate": "2018-12-04T08:00:00.000Z"
  },
  {
    "#": "S3 E22",
    "Title": "call: The Far Side of Tragedy",
    "Type": "Manga Canon",
    "Airdate": "2018-12-11T08:00:00.000Z"
  },
  {
    "#": "S3 E23",
    "Title": "ACT: Encounters",
    "Type": "Manga Canon",
    "Airdate": "2018-12-18T08:00:00.000Z"
  },
  {
    "#": "S3 E24",
    "Title": "Final Episode",
    "Type": "Manga Canon",
    "Airdate": "2018-12-25T08:00:00.000Z"
  },
  {
    "#": "E1",
    "Title": "OVA 1",
    "Type": "Manga Canon",
    "Airdate": "2018-12-26T08:00:00.000Z"
  },
  {
    "#": "E2",
    "Title": "OVA 2",
    "Type": "Manga Canon",
    "Airdate": "2018-12-27T08:00:00.000Z"
  }
],

'G6DQDD3WR': //FAIRY TAIL
[
  {
    "#": 1,
    "Title": "The Fairy Tail",
    "Type": "Manga Canon",
    "Airdate": "2009-10-12T07:00:00.000Z"
  },
  {
    "#": 2,
    "Title": "Fire Dragon, Monkey and Bull",
    "Type": "Manga Canon",
    "Airdate": "2009-10-19T07:00:00.000Z"
  },
  {
    "#": 3,
    "Title": "Infiltrate the Everlue Mansion",
    "Type": "Manga Canon",
    "Airdate": "2009-10-26T07:00:00.000Z"
  },
  {
    "#": 4,
    "Title": "Dear Kaby",
    "Type": "Manga Canon",
    "Airdate": "2009-11-02T08:00:00.000Z"
  },
  {
    "#": 5,
    "Title": "The Wizard in Armor",
    "Type": "Manga Canon",
    "Airdate": "2009-11-09T08:00:00.000Z"
  },
  {
    "#": 6,
    "Title": "Fairies in the Wind",
    "Type": "Manga Canon",
    "Airdate": "2009-11-16T08:00:00.000Z"
  },
  {
    "#": 7,
    "Title": "Flame and Wind",
    "Type": "Manga Canon",
    "Airdate": "2009-11-23T08:00:00.000Z"
  },
  {
    "#": 8,
    "Title": "The Strongest Team",
    "Type": "Manga Canon",
    "Airdate": "2009-11-30T08:00:00.000Z"
  },
  {
    "#": 9,
    "Title": "Natsu Devours a Village",
    "Type": "Filler",
    "Airdate": "2009-12-07T08:00:00.000Z"
  },
  {
    "#": 10,
    "Title": "Natsu vs. Erza",
    "Type": "Manga Canon",
    "Airdate": "2009-12-14T08:00:00.000Z"
  },
  {
    "#": 11,
    "Title": "The Cursed Island",
    "Type": "Manga Canon",
    "Airdate": "2009-12-21T08:00:00.000Z"
  },
  {
    "#": 12,
    "Title": "Moon Drip",
    "Type": "Manga Canon",
    "Airdate": "2010-01-04T08:00:00.000Z"
  },
  {
    "#": 13,
    "Title": "Natsu vs. Yuka the Wave User",
    "Type": "Manga Canon",
    "Airdate": "2010-01-11T08:00:00.000Z"
  },
  {
    "#": 14,
    "Title": "Just Do Whatever!!",
    "Type": "Manga Canon",
    "Airdate": "2010-01-18T08:00:00.000Z"
  },
  {
    "#": 15,
    "Title": "Eternal Magic",
    "Type": "Manga Canon",
    "Airdate": "2010-01-25T08:00:00.000Z"
  },
  {
    "#": 16,
    "Title": "The Final Showdown on Galuna Island",
    "Type": "Manga Canon",
    "Airdate": "2010-02-01T08:00:00.000Z"
  },
  {
    "#": 17,
    "Title": "Burst",
    "Type": "Manga Canon",
    "Airdate": "2010-02-08T08:00:00.000Z"
  },
  {
    "#": 18,
    "Title": "Reach the Sky Above",
    "Type": "Manga Canon",
    "Airdate": "2010-02-15T08:00:00.000Z"
  },
  {
    "#": 19,
    "Title": "Changeling",
    "Type": "Filler",
    "Airdate": "2010-02-22T08:00:00.000Z"
  },
  {
    "#": 20,
    "Title": "Natsu and the Dragon Egg",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2010-03-01T08:00:00.000Z"
  },
  {
    "#": 21,
    "Title": "The Phantom Lord",
    "Type": "Manga Canon",
    "Airdate": "2010-03-08T08:00:00.000Z"
  },
  {
    "#": 22,
    "Title": "Lucy Heartfilia",
    "Type": "Manga Canon",
    "Airdate": "2010-03-15T07:00:00.000Z"
  },
  {
    "#": 23,
    "Title": "15 Minutes",
    "Type": "Manga Canon",
    "Airdate": "2010-03-22T07:00:00.000Z"
  },
  {
    "#": 24,
    "Title": "To Keep From Seeing Those Tears",
    "Type": "Manga Canon",
    "Airdate": "2010-03-29T07:00:00.000Z"
  },
  {
    "#": 25,
    "Title": "A Flower Blooms in the Rain",
    "Type": "Manga Canon",
    "Airdate": "2010-04-12T07:00:00.000Z"
  },
  {
    "#": 26,
    "Title": "Wings of Flame",
    "Type": "Manga Canon",
    "Airdate": "2010-04-19T07:00:00.000Z"
  },
  {
    "#": 27,
    "Title": "The Two Dragon Slayers",
    "Type": "Manga Canon",
    "Airdate": "2010-04-26T07:00:00.000Z"
  },
  {
    "#": 28,
    "Title": "Fairy Law",
    "Type": "Manga Canon",
    "Airdate": "2010-05-03T07:00:00.000Z"
  },
  {
    "#": 29,
    "Title": "My Resolve",
    "Type": "Manga Canon",
    "Airdate": "2010-05-10T07:00:00.000Z"
  },
  {
    "#": 30,
    "Title": "Next Generation",
    "Type": "Manga Canon",
    "Airdate": "2010-05-17T07:00:00.000Z"
  },
  {
    "#": 31,
    "Title": "A Star Removed From the Sky",
    "Type": "Manga Canon",
    "Airdate": "2010-05-24T07:00:00.000Z"
  },
  {
    "#": 32,
    "Title": "Celestial Spirit King",
    "Type": "Manga Canon",
    "Airdate": "2010-05-31T07:00:00.000Z"
  },
  {
    "#": 33,
    "Title": "The Tower of Heaven",
    "Type": "Manga Canon",
    "Airdate": "2010-06-07T07:00:00.000Z"
  },
  {
    "#": 34,
    "Title": "Jellal",
    "Type": "Manga Canon",
    "Airdate": "2010-06-21T07:00:00.000Z"
  },
  {
    "#": 35,
    "Title": "Voice of Darkness",
    "Type": "Manga Canon",
    "Airdate": "2010-06-28T07:00:00.000Z"
  },
  {
    "#": 36,
    "Title": "Heaven's Game",
    "Type": "Manga Canon",
    "Airdate": "2010-07-05T07:00:00.000Z"
  },
  {
    "#": 37,
    "Title": "Armor of the Heart",
    "Type": "Manga Canon",
    "Airdate": "2010-07-12T07:00:00.000Z"
  },
  {
    "#": 38,
    "Title": "Destiny",
    "Type": "Manga Canon",
    "Airdate": "2010-07-19T07:00:00.000Z"
  },
  {
    "#": 39,
    "Title": "Give Our Prayers to the Sacred Light",
    "Type": "Manga Canon",
    "Airdate": "2010-07-26T07:00:00.000Z"
  },
  {
    "#": 40,
    "Title": "Titania Falls",
    "Type": "Manga Canon",
    "Airdate": "2010-08-02T07:00:00.000Z"
  },
  {
    "#": 41,
    "Title": "Home",
    "Type": "Manga Canon",
    "Airdate": "2010-08-09T07:00:00.000Z"
  },
  {
    "#": 42,
    "Title": "Battle of Fairy Tail",
    "Type": "Manga Canon",
    "Airdate": "2010-08-16T07:00:00.000Z"
  },
  {
    "#": 43,
    "Title": "Defeat Your Friends To Save Your Friends",
    "Type": "Manga Canon",
    "Airdate": "2010-08-23T07:00:00.000Z"
  },
  {
    "#": 44,
    "Title": "Thunder Palace",
    "Type": "Manga Canon",
    "Airdate": "2010-08-30T07:00:00.000Z"
  },
  {
    "#": 45,
    "Title": "Advent of Satan",
    "Type": "Manga Canon",
    "Airdate": "2010-09-06T07:00:00.000Z"
  },
  {
    "#": 46,
    "Title": "Clash at Kardia Cathedral!",
    "Type": "Manga Canon",
    "Airdate": "2010-09-13T07:00:00.000Z"
  },
  {
    "#": 47,
    "Title": "Triple Dragons",
    "Type": "Manga Canon",
    "Airdate": "2010-09-20T07:00:00.000Z"
  },
  {
    "#": 48,
    "Title": "Fantasia",
    "Type": "Manga Canon",
    "Airdate": "2010-09-27T07:00:00.000Z"
  },
  {
    "#": 49,
    "Title": "The Day of the Fateful Encounter",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2010-10-11T07:00:00.000Z"
  },
  {
    "#": 50,
    "Title": "Special Request: Watch Out for the Guy You Like!",
    "Type": "Filler",
    "Airdate": "2010-10-18T07:00:00.000Z"
  },
  {
    "#": 51,
    "Title": "Love & Lucky",
    "Type": "Manga Canon",
    "Airdate": "2010-10-25T07:00:00.000Z"
  },
  {
    "#": 52,
    "Title": "Allied Forces, Assemble!",
    "Type": "Manga Canon",
    "Airdate": "2010-11-01T07:00:00.000Z"
  },
  {
    "#": 53,
    "Title": "Enter the Oración Seis!",
    "Type": "Manga Canon",
    "Airdate": "2010-11-08T08:00:00.000Z"
  },
  {
    "#": 54,
    "Title": "Maiden of the Sky",
    "Type": "Manga Canon",
    "Airdate": "2010-11-15T08:00:00.000Z"
  },
  {
    "#": 55,
    "Title": "The Girl and the Ghost",
    "Type": "Manga Canon",
    "Airdate": "2010-11-22T08:00:00.000Z"
  },
  {
    "#": 56,
    "Title": "Dead Grand Prix",
    "Type": "Manga Canon",
    "Airdate": "2010-11-29T08:00:00.000Z"
  },
  {
    "#": 57,
    "Title": "Darkness",
    "Type": "Manga Canon",
    "Airdate": "2010-12-06T08:00:00.000Z"
  },
  {
    "#": 58,
    "Title": "Celestial Skirmish",
    "Type": "Manga Canon",
    "Airdate": "2010-12-13T08:00:00.000Z"
  },
  {
    "#": 59,
    "Title": "Jellal of Days Gone By",
    "Type": "Manga Canon",
    "Airdate": "2010-12-20T08:00:00.000Z"
  },
  {
    "#": 60,
    "Title": "March of Destruction",
    "Type": "Manga Canon",
    "Airdate": "2010-12-27T08:00:00.000Z"
  },
  {
    "#": 61,
    "Title": "Super Aerial Battle: Natsu vs. Cobra!",
    "Type": "Manga Canon",
    "Airdate": "2011-01-10T08:00:00.000Z"
  },
  {
    "#": 62,
    "Title": "Wizard Saint Jura",
    "Type": "Manga Canon",
    "Airdate": "2011-01-17T08:00:00.000Z"
  },
  {
    "#": 63,
    "Title": "Your Words",
    "Type": "Manga Canon",
    "Airdate": "2011-01-24T08:00:00.000Z"
  },
  {
    "#": 64,
    "Title": "Zero",
    "Type": "Manga Canon",
    "Airdate": "2011-01-31T08:00:00.000Z"
  },
  {
    "#": 65,
    "Title": "From Pegasus to Fairies",
    "Type": "Manga Canon",
    "Airdate": "2011-02-07T08:00:00.000Z"
  },
  {
    "#": 66,
    "Title": "The Power of Feelings",
    "Type": "Manga Canon",
    "Airdate": "2011-02-14T08:00:00.000Z"
  },
  {
    "#": 67,
    "Title": "I'm With You",
    "Type": "Manga Canon",
    "Airdate": "2011-02-21T08:00:00.000Z"
  },
  {
    "#": 68,
    "Title": "A Guild for One",
    "Type": "Manga Canon",
    "Airdate": "2011-02-28T08:00:00.000Z"
  },
  {
    "#": 69,
    "Title": "Call of the Dragon",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2011-03-07T08:00:00.000Z"
  },
  {
    "#": 70,
    "Title": "Natsu vs. Gray!!",
    "Type": "Filler",
    "Airdate": "2011-03-14T07:00:00.000Z"
  },
  {
    "#": 71,
    "Title": "Friendship Overcomes the Dead",
    "Type": "Filler",
    "Airdate": "2011-03-21T07:00:00.000Z"
  },
  {
    "#": 72,
    "Title": "A Fairy Tail Wizard",
    "Type": "Filler",
    "Airdate": "2011-03-28T07:00:00.000Z"
  },
  {
    "#": 73,
    "Title": "Rainbow Cherry Blossoms",
    "Type": "Filler",
    "Airdate": "2011-04-04T07:00:00.000Z"
  },
  {
    "#": 74,
    "Title": "Wendy's First Big Job!?",
    "Type": "Filler",
    "Airdate": "2011-04-11T07:00:00.000Z"
  },
  {
    "#": 75,
    "Title": "24-Hour Endurance Road Race",
    "Type": "Filler",
    "Airdate": "2011-04-16T07:00:00.000Z"
  },
  {
    "#": 76,
    "Title": "Gildarts",
    "Type": "Manga Canon",
    "Airdate": "2011-04-23T07:00:00.000Z"
  },
  {
    "#": 77,
    "Title": "Earth Land",
    "Type": "Manga Canon",
    "Airdate": "2011-04-30T07:00:00.000Z"
  },
  {
    "#": 78,
    "Title": "Edolas",
    "Type": "Manga Canon",
    "Airdate": "2011-05-07T07:00:00.000Z"
  },
  {
    "#": 79,
    "Title": "Fairy Hunter",
    "Type": "Manga Canon",
    "Airdate": "2011-05-14T07:00:00.000Z"
  },
  {
    "#": 80,
    "Title": "Key of Hope",
    "Type": "Manga Canon",
    "Airdate": "2011-05-21T07:00:00.000Z"
  },
  {
    "#": 81,
    "Title": "Fireball",
    "Type": "Manga Canon",
    "Airdate": "2011-05-28T07:00:00.000Z"
  },
  {
    "#": 82,
    "Title": "Welcome Home",
    "Type": "Manga Canon",
    "Airdate": "2011-06-04T07:00:00.000Z"
  },
  {
    "#": 83,
    "Title": "Extalia",
    "Type": "Manga Canon",
    "Airdate": "2011-06-11T07:00:00.000Z"
  },
  {
    "#": 84,
    "Title": "Fly, to Our Friends!",
    "Type": "Manga Canon",
    "Airdate": "2011-06-18T07:00:00.000Z"
  },
  {
    "#": 85,
    "Title": "Code ETD",
    "Type": "Manga Canon",
    "Airdate": "2011-06-25T07:00:00.000Z"
  },
  {
    "#": 86,
    "Title": "Erza vs. Erza",
    "Type": "Manga Canon",
    "Airdate": "2011-07-02T07:00:00.000Z"
  },
  {
    "#": 87,
    "Title": "We're Talking About Lives Here!!!!",
    "Type": "Manga Canon",
    "Airdate": "2011-07-09T07:00:00.000Z"
  },
  {
    "#": 88,
    "Title": "For Pride's Sake, the River of Stars",
    "Type": "Manga Canon",
    "Airdate": "2011-07-16T07:00:00.000Z"
  },
  {
    "#": 89,
    "Title": "The Apocalyptic Dragon Chain Cannon",
    "Type": "Manga Canon",
    "Airdate": "2011-07-23T07:00:00.000Z"
  },
  {
    "#": 90,
    "Title": "The Boy Back Then",
    "Type": "Manga Canon",
    "Airdate": "2011-07-30T07:00:00.000Z"
  },
  {
    "#": 91,
    "Title": "Dragon Sense",
    "Type": "Manga Canon",
    "Airdate": "2011-08-06T07:00:00.000Z"
  },
  {
    "#": 92,
    "Title": "O Living Ones",
    "Type": "Manga Canon",
    "Airdate": "2011-08-13T07:00:00.000Z"
  },
  {
    "#": 93,
    "Title": "I'm Standing Right Here",
    "Type": "Manga Canon",
    "Airdate": "2011-08-20T07:00:00.000Z"
  },
  {
    "#": 94,
    "Title": "Bye-Bye, Edolas",
    "Type": "Manga Canon",
    "Airdate": "2011-08-27T07:00:00.000Z"
  },
  {
    "#": 95,
    "Title": "Lisanna",
    "Type": "Manga Canon",
    "Airdate": "2011-09-03T07:00:00.000Z"
  },
  {
    "#": 96,
    "Title": "He Who Extinguishes Life",
    "Type": "Manga Canon",
    "Airdate": "2011-09-10T07:00:00.000Z"
  },
  {
    "#": 97,
    "Title": "Best Partners",
    "Type": "Manga Canon",
    "Airdate": "2011-09-17T07:00:00.000Z"
  },
  {
    "#": 98,
    "Title": "Who's the Lucky One?",
    "Type": "Manga Canon",
    "Airdate": "2011-09-24T07:00:00.000Z"
  },
  {
    "#": 99,
    "Title": "Natsu vs. Gildarts",
    "Type": "Manga Canon",
    "Airdate": "2011-10-01T07:00:00.000Z"
  },
  {
    "#": 100,
    "Title": "Mest",
    "Type": "Manga Canon",
    "Airdate": "2011-10-08T07:00:00.000Z"
  },
  {
    "#": 101,
    "Title": "Black Wizard",
    "Type": "Manga Canon",
    "Airdate": "2011-10-15T07:00:00.000Z"
  },
  {
    "#": 102,
    "Title": "Iron Soul",
    "Type": "Manga Canon",
    "Airdate": "2011-10-22T07:00:00.000Z"
  },
  {
    "#": 103,
    "Title": "Makarov Charges",
    "Type": "Manga Canon",
    "Airdate": "2011-10-29T07:00:00.000Z"
  },
  {
    "#": 104,
    "Title": "Lost Magic",
    "Type": "Manga Canon",
    "Airdate": "2011-11-05T07:00:00.000Z"
  },
  {
    "#": 105,
    "Title": "Fire Dragon vs. Flame God",
    "Type": "Manga Canon",
    "Airdate": "2011-11-12T08:00:00.000Z"
  },
  {
    "#": 106,
    "Title": "Grand Magic World",
    "Type": "Manga Canon",
    "Airdate": "2011-11-19T08:00:00.000Z"
  },
  {
    "#": 107,
    "Title": "Arc of Embodiment",
    "Type": "Manga Canon",
    "Airdate": "2011-11-26T08:00:00.000Z"
  },
  {
    "#": 108,
    "Title": "Human Gate",
    "Type": "Manga Canon",
    "Airdate": "2011-12-03T08:00:00.000Z"
  },
  {
    "#": 109,
    "Title": "Lucy Fire",
    "Type": "Manga Canon",
    "Airdate": "2011-12-10T08:00:00.000Z"
  },
  {
    "#": 110,
    "Title": "Dead-End of Despair",
    "Type": "Manga Canon",
    "Airdate": "2011-12-17T08:00:00.000Z"
  },
  {
    "#": 111,
    "Title": "Tears of Love and Vitality",
    "Type": "Manga Canon",
    "Airdate": "2011-12-24T08:00:00.000Z"
  },
  {
    "#": 112,
    "Title": "The One Thing I Couldn't Say",
    "Type": "Manga Canon",
    "Airdate": "2012-01-07T08:00:00.000Z"
  },
  {
    "#": 113,
    "Title": "Tenrou Tree",
    "Type": "Manga Canon",
    "Airdate": "2012-01-14T08:00:00.000Z"
  },
  {
    "#": 114,
    "Title": "Erza vs. Azuma",
    "Type": "Manga Canon",
    "Airdate": "2012-01-21T08:00:00.000Z"
  },
  {
    "#": 115,
    "Title": "Freezing Fighting Spirit",
    "Type": "Manga Canon",
    "Airdate": "2012-01-28T08:00:00.000Z"
  },
  {
    "#": 116,
    "Title": "Power of Life",
    "Type": "Manga Canon",
    "Airdate": "2012-02-04T08:00:00.000Z"
  },
  {
    "#": 117,
    "Title": "Rolling Thunder",
    "Type": "Manga Canon",
    "Airdate": "2012-02-11T08:00:00.000Z"
  },
  {
    "#": 118,
    "Title": "The Man Without an Emblem",
    "Type": "Manga Canon",
    "Airdate": "2012-02-18T08:00:00.000Z"
  },
  {
    "#": 119,
    "Title": "Realm of the Abyss",
    "Type": "Manga Canon",
    "Airdate": "2012-02-25T08:00:00.000Z"
  },
  {
    "#": 120,
    "Title": "Daybreak on Tenrou Island",
    "Type": "Manga Canon",
    "Airdate": "2012-03-02T08:00:00.000Z"
  },
  {
    "#": 121,
    "Title": "The Right To Love",
    "Type": "Manga Canon",
    "Airdate": "2012-03-09T08:00:00.000Z"
  },
  {
    "#": 122,
    "Title": "Let's Hold Hands",
    "Type": "Manga Canon",
    "Airdate": "2012-03-16T07:00:00.000Z"
  },
  {
    "#": 123,
    "Title": "Fairy Tail, Year X791",
    "Type": "Manga Canon",
    "Airdate": "2012-03-23T07:00:00.000Z"
  },
  {
    "#": 124,
    "Title": "The Seven Year Gap",
    "Type": "Manga Canon",
    "Airdate": "2012-03-31T07:00:00.000Z"
  },
  {
    "#": 125,
    "Title": "The Magic Ball",
    "Type": "Filler",
    "Airdate": "2012-04-07T07:00:00.000Z"
  },
  {
    "#": 126,
    "Title": "True Scoundrels - The Butt Jiggle Gang",
    "Type": "Filler",
    "Airdate": "2012-04-14T07:00:00.000Z"
  },
  {
    "#": 127,
    "Title": "The Terror of Invisible Lucy!",
    "Type": "Filler",
    "Airdate": "2012-04-21T07:00:00.000Z"
  },
  {
    "#": 128,
    "Title": "Father's Memento",
    "Type": "Filler",
    "Airdate": "2012-04-28T07:00:00.000Z"
  },
  {
    "#": 129,
    "Title": "Turbulent Showdown! Natsu vs. Laxus",
    "Type": "Filler",
    "Airdate": "2012-05-05T07:00:00.000Z"
  },
  {
    "#": 130,
    "Title": "Target: Lucy",
    "Type": "Filler",
    "Airdate": "2012-05-12T07:00:00.000Z"
  },
  {
    "#": 131,
    "Title": "The Fury of Legion",
    "Type": "Filler",
    "Airdate": "2012-05-19T07:00:00.000Z"
  },
  {
    "#": 132,
    "Title": "Key of the Starry Heavens",
    "Type": "Filler",
    "Airdate": "2012-05-26T07:00:00.000Z"
  },
  {
    "#": 133,
    "Title": "Travel Companions",
    "Type": "Filler",
    "Airdate": "2012-06-02T07:00:00.000Z"
  },
  {
    "#": 134,
    "Title": "Labyrinth Capriccio",
    "Type": "Filler",
    "Airdate": "2012-06-09T07:00:00.000Z"
  },
  {
    "#": 135,
    "Title": "Footprints of the Myth",
    "Type": "Filler",
    "Airdate": "2012-06-16T07:00:00.000Z"
  },
  {
    "#": 136,
    "Title": "True Scoundrels, Once Again",
    "Type": "Filler",
    "Airdate": "2012-06-23T07:00:00.000Z"
  },
  {
    "#": 137,
    "Title": "Defying Calculation",
    "Type": "Filler",
    "Airdate": "2012-06-30T07:00:00.000Z"
  },
  {
    "#": 138,
    "Title": "The Course of the Holy War",
    "Type": "Filler",
    "Airdate": "2012-07-07T07:00:00.000Z"
  },
  {
    "#": 139,
    "Title": "Time Begins To Tick",
    "Type": "Filler",
    "Airdate": "2012-07-14T07:00:00.000Z"
  },
  {
    "#": 140,
    "Title": "Enter the Neo-Oración Seis!",
    "Type": "Filler",
    "Airdate": "2012-07-21T07:00:00.000Z"
  },
  {
    "#": 141,
    "Title": "Get the Infinity Clock!",
    "Type": "Filler",
    "Airdate": "2012-07-28T07:00:00.000Z"
  },
  {
    "#": 142,
    "Title": "Dissonance of Battle",
    "Type": "Filler",
    "Airdate": "2012-08-04T07:00:00.000Z"
  },
  {
    "#": 143,
    "Title": "Anti-Link",
    "Type": "Filler",
    "Airdate": "2012-08-11T07:00:00.000Z"
  },
  {
    "#": 144,
    "Title": "Despair Unleashed",
    "Type": "Filler",
    "Airdate": "2012-08-18T07:00:00.000Z"
  },
  {
    "#": 145,
    "Title": "Real Nightmare",
    "Type": "Filler",
    "Airdate": "2012-08-25T07:00:00.000Z"
  },
  {
    "#": 146,
    "Title": "Time Spiral",
    "Type": "Filler",
    "Airdate": "2012-09-01T07:00:00.000Z"
  },
  {
    "#": 147,
    "Title": "To the Infinity Castle!",
    "Type": "Filler",
    "Airdate": "2012-09-08T07:00:00.000Z"
  },
  {
    "#": 148,
    "Title": "Angel Tears",
    "Type": "Filler",
    "Airdate": "2012-09-15T07:00:00.000Z"
  },
  {
    "#": 149,
    "Title": "I Hear the Voice of My Friend",
    "Type": "Filler",
    "Airdate": "2012-09-22T07:00:00.000Z"
  },
  {
    "#": 150,
    "Title": "Lucy and Michelle",
    "Type": "Filler",
    "Airdate": "2012-09-29T07:00:00.000Z"
  },
  {
    "#": 151,
    "Title": "Sabertooth",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2012-10-06T07:00:00.000Z"
  },
  {
    "#": 152,
    "Title": "And So We Aim for the Top",
    "Type": "Manga Canon",
    "Airdate": "2012-10-13T07:00:00.000Z"
  },
  {
    "#": 153,
    "Title": "Song of the Stars",
    "Type": "Manga Canon",
    "Airdate": "2012-10-20T07:00:00.000Z"
  },
  {
    "#": 154,
    "Title": "For All the Time We Missed Each Other",
    "Type": "Manga Canon",
    "Airdate": "2012-10-27T07:00:00.000Z"
  },
  {
    "#": 155,
    "Title": "Crocus, the Flower-Blooming Capital",
    "Type": "Manga Canon",
    "Airdate": "2012-11-03T07:00:00.000Z"
  },
  {
    "#": 156,
    "Title": "Sky Labyrinth",
    "Type": "Manga Canon",
    "Airdate": "2012-11-10T08:00:00.000Z"
  },
  {
    "#": 157,
    "Title": "New Guild",
    "Type": "Manga Canon",
    "Airdate": "2012-11-17T08:00:00.000Z"
  },
  {
    "#": 158,
    "Title": "Night of Shooting Stars",
    "Type": "Manga Canon",
    "Airdate": "2012-11-24T08:00:00.000Z"
  },
  {
    "#": 159,
    "Title": "Lucy vs. Flare",
    "Type": "Manga Canon",
    "Airdate": "2012-12-01T08:00:00.000Z"
  },
  {
    "#": 160,
    "Title": "Portent",
    "Type": "Manga Canon",
    "Airdate": "2012-12-08T08:00:00.000Z"
  },
  {
    "#": 161,
    "Title": "Chariots",
    "Type": "Manga Canon",
    "Airdate": "2012-12-15T08:00:00.000Z"
  },
  {
    "#": 162,
    "Title": "Elfman vs. Bacchus",
    "Type": "Manga Canon",
    "Airdate": "2012-12-22T08:00:00.000Z"
  },
  {
    "#": 163,
    "Title": "Mirajane vs. Jenny",
    "Type": "Manga Canon",
    "Airdate": "2013-01-05T08:00:00.000Z"
  },
  {
    "#": 164,
    "Title": "Kagura vs. Yukino",
    "Type": "Manga Canon",
    "Airdate": "2013-01-12T08:00:00.000Z"
  },
  {
    "#": 165,
    "Title": "Hatred at Nightfall",
    "Type": "Manga Canon",
    "Airdate": "2013-01-19T08:00:00.000Z"
  },
  {
    "#": 166,
    "Title": "Pandemonium",
    "Type": "Manga Canon",
    "Airdate": "2013-01-26T08:00:00.000Z"
  },
  {
    "#": 167,
    "Title": "100 Against 1",
    "Type": "Manga Canon",
    "Airdate": "2013-02-02T08:00:00.000Z"
  },
  {
    "#": 168,
    "Title": "Laxus vs. Alexei",
    "Type": "Manga Canon",
    "Airdate": "2013-02-09T08:00:00.000Z"
  },
  {
    "#": 169,
    "Title": "Wendy vs. Shelia",
    "Type": "Manga Canon",
    "Airdate": "2013-02-16T08:00:00.000Z"
  },
  {
    "#": 170,
    "Title": "Small Fists",
    "Type": "Manga Canon",
    "Airdate": "2013-02-23T08:00:00.000Z"
  },
  {
    "#": 171,
    "Title": "Naval Battle",
    "Type": "Manga Canon",
    "Airdate": "2013-03-02T08:00:00.000Z"
  },
  {
    "#": 172,
    "Title": "A Parfum for You",
    "Type": "Manga Canon",
    "Airdate": "2013-03-09T08:00:00.000Z"
  },
  {
    "#": 173,
    "Title": "Battle of Dragon Slayers!",
    "Type": "Manga Canon",
    "Airdate": "2013-03-16T07:00:00.000Z"
  },
  {
    "#": 174,
    "Title": "Four Dragons",
    "Type": "Manga Canon",
    "Airdate": "2013-03-23T07:00:00.000Z"
  },
  {
    "#": 175,
    "Title": "Natsu vs. the Twin Dragons",
    "Type": "Manga Canon",
    "Airdate": "2013-03-30T07:00:00.000Z"
  },
  {
    "#": 176,
    "Title": "King of the Dragons",
    "Type": "Manga Canon",
    "Airdate": "2014-04-05T07:00:00.000Z"
  },
  {
    "#": 177,
    "Title": "The Eclipse Project",
    "Type": "Manga Canon",
    "Airdate": "2014-04-12T07:00:00.000Z"
  },
  {
    "#": 178,
    "Title": "Fairy Tactician",
    "Type": "Manga Canon",
    "Airdate": "2014-04-19T07:00:00.000Z"
  },
  {
    "#": 179,
    "Title": "Gray vs. Rufus",
    "Type": "Manga Canon",
    "Airdate": "2014-04-26T07:00:00.000Z"
  },
  {
    "#": 180,
    "Title": "The Hungry Wolf Knights",
    "Type": "Manga Canon",
    "Airdate": "2014-05-03T07:00:00.000Z"
  },
  {
    "#": 181,
    "Title": "Fairy Tail vs. Executioners",
    "Type": "Manga Canon",
    "Airdate": "2014-05-10T07:00:00.000Z"
  },
  {
    "#": 182,
    "Title": "Scorching Earth",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2014-05-17T07:00:00.000Z"
  },
  {
    "#": 183,
    "Title": "Our Place",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2014-05-24T07:00:00.000Z"
  },
  {
    "#": 184,
    "Title": "The Kingdom 'til Tomorrow",
    "Type": "Manga Canon",
    "Airdate": "2014-05-31T07:00:00.000Z"
  },
  {
    "#": 185,
    "Title": "Erza vs. Kagura",
    "Type": "Manga Canon",
    "Airdate": "2014-06-07T07:00:00.000Z"
  },
  {
    "#": 186,
    "Title": "A Future Racing Toward Despair",
    "Type": "Manga Canon",
    "Airdate": "2014-06-14T07:00:00.000Z"
  },
  {
    "#": 187,
    "Title": "Frog",
    "Type": "Manga Canon",
    "Airdate": "2014-06-21T07:00:00.000Z"
  },
  {
    "#": 188,
    "Title": "Roaring Thunder!",
    "Type": "Manga Canon",
    "Airdate": "2014-06-28T07:00:00.000Z"
  },
  {
    "#": 189,
    "Title": "Gloria",
    "Type": "Manga Canon",
    "Airdate": "2014-07-05T07:00:00.000Z"
  },
  {
    "#": 190,
    "Title": "The One Who Closes the Gate",
    "Type": "Manga Canon",
    "Airdate": "2014-07-12T07:00:00.000Z"
  },
  {
    "#": 191,
    "Title": "Natsu vs. Rogue",
    "Type": "Manga Canon",
    "Airdate": "2014-07-19T07:00:00.000Z"
  },
  {
    "#": 192,
    "Title": "For Me, Too",
    "Type": "Manga Canon",
    "Airdate": "2014-07-26T07:00:00.000Z"
  },
  {
    "#": 193,
    "Title": "Seven Dragons",
    "Type": "Manga Canon",
    "Airdate": "2014-08-02T07:00:00.000Z"
  },
  {
    "#": 194,
    "Title": "Zirconis' Magic",
    "Type": "Manga Canon",
    "Airdate": "2014-08-09T07:00:00.000Z"
  },
  {
    "#": 195,
    "Title": "People and People, Dragons and Dragons, People and Dragons",
    "Type": "Manga Canon",
    "Airdate": "2014-08-16T07:00:00.000Z"
  },
  {
    "#": 196,
    "Title": "Sin and Sacrifice",
    "Type": "Manga Canon",
    "Airdate": "2014-08-23T07:00:00.000Z"
  },
  {
    "#": 197,
    "Title": "Time of Life",
    "Type": "Manga Canon",
    "Airdate": "2014-08-30T07:00:00.000Z"
  },
  {
    "#": 198,
    "Title": "Fields of Gold",
    "Type": "Manga Canon",
    "Airdate": "2014-09-06T07:00:00.000Z"
  },
  {
    "#": 199,
    "Title": "The Grand Banquet",
    "Type": "Manga Canon",
    "Airdate": "2014-09-13T07:00:00.000Z"
  },
  {
    "#": 200,
    "Title": "Droplets of Time",
    "Type": "Manga Canon",
    "Airdate": "2014-09-20T07:00:00.000Z"
  },
  {
    "#": 201,
    "Title": "A Gift",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2014-09-27T07:00:00.000Z"
  },
  {
    "#": 202,
    "Title": "Welcome Back, Frosch",
    "Type": "Filler",
    "Airdate": "2014-10-03T07:00:00.000Z"
  },
  {
    "#": 203,
    "Title": "Moulin Rouge",
    "Type": "Filler",
    "Airdate": "2014-10-11T07:00:00.000Z"
  },
  {
    "#": 204,
    "Title": "Full Effort Hospitality!",
    "Type": "Filler",
    "Airdate": "2014-10-18T07:00:00.000Z"
  },
  {
    "#": 205,
    "Title": "Signal of Rebellion",
    "Type": "Filler",
    "Airdate": "2014-10-25T07:00:00.000Z"
  },
  {
    "#": 206,
    "Title": "Library Panic",
    "Type": "Filler",
    "Airdate": "2014-11-01T07:00:00.000Z"
  },
  {
    "#": 207,
    "Title": "Hisui Rises!",
    "Type": "Filler",
    "Airdate": "2014-11-07T08:00:00.000Z"
  },
  {
    "#": 208,
    "Title": "Astral Spiritus",
    "Type": "Filler",
    "Airdate": "2014-11-14T08:00:00.000Z"
  },
  {
    "#": 209,
    "Title": "Wendy vs. Aquarius - Let's Have Fun in the Amusement Park!",
    "Type": "Filler",
    "Airdate": "2014-11-21T08:00:00.000Z"
  },
  {
    "#": 210,
    "Title": "Guild Deck vs. Celestial Deck",
    "Type": "Filler",
    "Airdate": "2014-11-28T08:00:00.000Z"
  },
  {
    "#": 211,
    "Title": "Gray vs. Cancer! Dance Battle!",
    "Type": "Filler",
    "Airdate": "2014-12-05T08:00:00.000Z"
  },
  {
    "#": 212,
    "Title": "Juvia vs. Aries! Desert Death Match!",
    "Type": "Filler",
    "Airdate": "2014-12-12T08:00:00.000Z"
  },
  {
    "#": 213,
    "Title": "Erza vs. Sagittarius! Horseback Showdown!",
    "Type": "Filler",
    "Airdate": "2014-12-19T08:00:00.000Z"
  },
  {
    "#": 214,
    "Title": "Natsu vs. Leo",
    "Type": "Filler",
    "Airdate": "2014-12-26T08:00:00.000Z"
  },
  {
    "#": 215,
    "Title": "Ophiuchus, the Snake Charmer",
    "Type": "Filler",
    "Airdate": "2015-01-09T08:00:00.000Z"
  },
  {
    "#": 216,
    "Title": "When the Stars Fall",
    "Type": "Filler",
    "Airdate": "2015-01-16T08:00:00.000Z"
  },
  {
    "#": 217,
    "Title": "Celestial Spirit Beast",
    "Type": "Filler",
    "Airdate": "2015-01-23T08:00:00.000Z"
  },
  {
    "#": 218,
    "Title": "Believe",
    "Type": "Filler",
    "Airdate": "2015-01-30T08:00:00.000Z"
  },
  {
    "#": 219,
    "Title": "What a Pure Heart Weaves",
    "Type": "Filler",
    "Airdate": "2015-02-06T08:00:00.000Z"
  },
  {
    "#": 220,
    "Title": "413 Days",
    "Type": "Filler",
    "Airdate": "2015-02-13T08:00:00.000Z"
  },
  {
    "#": 221,
    "Title": "The Labyrinth of White",
    "Type": "Filler",
    "Airdate": "2015-02-20T08:00:00.000Z"
  },
  {
    "#": 222,
    "Title": "Transform!",
    "Type": "Filler",
    "Airdate": "2015-02-28T08:00:00.000Z"
  },
  {
    "#": 223,
    "Title": "It's Kemo-Kemo!",
    "Type": "Filler",
    "Airdate": "2015-03-07T08:00:00.000Z"
  },
  {
    "#": 224,
    "Title": "The Place You Came To",
    "Type": "Filler",
    "Airdate": "2015-03-14T07:00:00.000Z"
  },
  {
    "#": 225,
    "Title": "Lightning Man",
    "Type": "Filler",
    "Airdate": "2015-03-21T07:00:00.000Z"
  },
  {
    "#": 226,
    "Title": "Fairy Tail of the Dead Meeeeeeeeen",
    "Type": "Filler",
    "Airdate": "2015-03-28T07:00:00.000Z"
  },
  {
    "#": 227,
    "Title": "Morning of a New Adventure",
    "Type": "Manga Canon",
    "Airdate": "2015-04-04T07:00:00.000Z"
  },
  {
    "#": 228,
    "Title": "Wizards vs. Hunters",
    "Type": "Manga Canon",
    "Airdate": "2015-04-11T07:00:00.000Z"
  },
  {
    "#": 229,
    "Title": "Art of Regression",
    "Type": "Manga Canon",
    "Airdate": "2015-04-18T07:00:00.000Z"
  },
  {
    "#": 230,
    "Title": "The Demon Returns",
    "Type": "Manga Canon",
    "Airdate": "2015-04-25T07:00:00.000Z"
  },
  {
    "#": 231,
    "Title": "Gray vs. Doriate",
    "Type": "Manga Canon",
    "Airdate": "2015-05-02T07:00:00.000Z"
  },
  {
    "#": 232,
    "Title": "Voice of the Flame",
    "Type": "Manga Canon",
    "Airdate": "2015-05-09T07:00:00.000Z"
  },
  {
    "#": 233,
    "Title": "Song of the Fairies",
    "Type": "Manga Canon",
    "Airdate": "2015-05-16T07:00:00.000Z"
  },
  {
    "#": 234,
    "Title": "Tartaros Chapter, Prologue - The Nine Demon Gates",
    "Type": "Manga Canon",
    "Airdate": "2015-05-23T07:00:00.000Z"
  },
  {
    "#": 235,
    "Title": "Tartaros Chapter, Prologue - Fairies vs. Netherworld",
    "Type": "Manga Canon",
    "Airdate": "2015-05-30T07:00:00.000Z"
  },
  {
    "#": 236,
    "Title": "Tartaros Chapter, Prologue - The White Legacy",
    "Type": "Manga Canon",
    "Airdate": "2015-06-06T07:00:00.000Z"
  },
  {
    "#": 237,
    "Title": "Tartaros Chapter, Prologue - Natsu vs. Jackal",
    "Type": "Manga Canon",
    "Airdate": "2015-06-13T07:00:00.000Z"
  },
  {
    "#": 238,
    "Title": "Tartaros Chapter - Immorality and Sinners",
    "Type": "Manga Canon",
    "Airdate": "2015-06-20T07:00:00.000Z"
  },
  {
    "#": 239,
    "Title": "Tartaros Chapter - Jellal vs. Oración Seis",
    "Type": "Manga Canon",
    "Airdate": "2015-06-27T07:00:00.000Z"
  },
  {
    "#": 240,
    "Title": "Tartaros Chapter - A Place Reached by Prayer",
    "Type": "Manga Canon",
    "Airdate": "2015-07-04T07:00:00.000Z"
  },
  {
    "#": 241,
    "Title": "Tartaros Chapter - The Demon's Rebirth",
    "Type": "Manga Canon",
    "Airdate": "2015-07-11T07:00:00.000Z"
  },
  {
    "#": 242,
    "Title": "Tartaros Chapter - To Let Live or Die",
    "Type": "Manga Canon",
    "Airdate": "2015-07-18T07:00:00.000Z"
  },
  {
    "#": 243,
    "Title": "Tartaros Chapter - Wendy vs. Ezel",
    "Type": "Manga Canon",
    "Airdate": "2015-07-25T07:00:00.000Z"
  },
  {
    "#": 244,
    "Title": "Tartaros Chapter - Friends Forever",
    "Type": "Manga Canon",
    "Airdate": "2015-08-01T07:00:00.000Z"
  },
  {
    "#": 245,
    "Title": "Tartaros Chapter - Hell's Core",
    "Type": "Manga Canon",
    "Airdate": "2015-08-08T07:00:00.000Z"
  },
  {
    "#": 246,
    "Title": "Tartaros Chapter - Underworld King",
    "Type": "Anime Canon",
    "Airdate": "2015-08-15T07:00:00.000Z"
  },
  {
    "#": 247,
    "Title": "Tartaros Chapter - Alegria",
    "Type": "Manga Canon",
    "Airdate": "2015-08-22T07:00:00.000Z"
  },
  {
    "#": 248,
    "Title": "Tartaros Chapter - A Strike from the Stars",
    "Type": "Manga Canon",
    "Airdate": "2015-08-29T07:00:00.000Z"
  },
  {
    "#": 249,
    "Title": "Tartaros Chapter - Celestial Spirit King vs. Underworld King",
    "Type": "Manga Canon",
    "Airdate": "2015-09-05T07:00:00.000Z"
  },
  {
    "#": 250,
    "Title": "Tartaros Chapter - Erza vs. Minerva",
    "Type": "Manga Canon",
    "Airdate": "2015-09-12T07:00:00.000Z"
  },
  {
    "#": 251,
    "Title": "Tartaros Chapter - The Boy's Tale",
    "Type": "Manga Canon",
    "Airdate": "2015-09-19T07:00:00.000Z"
  },
  {
    "#": 252,
    "Title": "Tartaros Chapter - Gray vs. Silver",
    "Type": "Manga Canon",
    "Airdate": "2015-09-26T07:00:00.000Z"
  },
  {
    "#": 253,
    "Title": "Tartaros Chapter - A Silver Wish",
    "Type": "Manga Canon",
    "Airdate": "2015-10-03T07:00:00.000Z"
  },
  {
    "#": 254,
    "Title": "Tartaros Chapter - Air",
    "Type": "Manga Canon",
    "Airdate": "2015-10-10T07:00:00.000Z"
  },
  {
    "#": 255,
    "Title": "Tartaros Chapter - Steel",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2015-10-17T07:00:00.000Z"
  },
  {
    "#": 256,
    "Title": "Tartaros Chapter - Final Duels",
    "Type": "Anime Canon",
    "Airdate": "2015-10-24T07:00:00.000Z"
  },
  {
    "#": 257,
    "Title": "Tartaros Chapter - Wings of Despair",
    "Type": "Manga Canon",
    "Airdate": "2015-10-31T07:00:00.000Z"
  },
  {
    "#": 258,
    "Title": "Tartaros Chapter - Fire Dragon Iron Fist",
    "Type": "Manga Canon",
    "Airdate": "2015-11-07T08:00:00.000Z"
  },
  {
    "#": 259,
    "Title": "Tartaros Chapter - 00:00",
    "Type": "Manga Canon",
    "Airdate": "2015-11-14T08:00:00.000Z"
  },
  {
    "#": 260,
    "Title": "Tartaros Chapter - The Girl in the Crystal",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2015-11-21T08:00:00.000Z"
  },
  {
    "#": 261,
    "Title": "Tartaros Chapter - Absolute Demon",
    "Type": "Manga Canon",
    "Airdate": "2015-11-28T08:00:00.000Z"
  },
  {
    "#": 262,
    "Title": "Tartaros Chapter - Memento Mori",
    "Type": "Manga Canon",
    "Airdate": "2015-12-05T08:00:00.000Z"
  },
  {
    "#": 263,
    "Title": "Tartaros Chapter - Soaring Above Ishgar",
    "Type": "Manga Canon",
    "Airdate": "2015-12-12T08:00:00.000Z"
  },
  {
    "#": 264,
    "Title": "Tartaros Chapter - Drops of Fire",
    "Type": "Manga Canon",
    "Airdate": "2015-12-19T08:00:00.000Z"
  },
  {
    "#": 265,
    "Title": "Tartaros Chapter, Finale - Where the Power of Life Lies",
    "Type": "Manga Canon",
    "Airdate": "2015-12-26T08:00:00.000Z"
  },
  {
    "#": 266,
    "Title": "Fairy Tail Zerø: The Fairy In Your Heart",
    "Type": "Manga Canon",
    "Airdate": "2016-01-09T08:00:00.000Z"
  },
  {
    "#": 267,
    "Title": "Fairy Tail Zerø: The Adventure Begins",
    "Type": "Manga Canon",
    "Airdate": "2016-01-16T08:00:00.000Z"
  },
  {
    "#": 268,
    "Title": "Fairy Tail Zerø: Treasure Hunt",
    "Type": "Filler",
    "Airdate": "2016-01-23T08:00:00.000Z"
  },
  {
    "#": 269,
    "Title": "Fairy Tail Zerø: Dancing with Blades",
    "Type": "Manga Canon",
    "Airdate": "2016-01-30T08:00:00.000Z"
  },
  {
    "#": 270,
    "Title": "Fairy Tail Zerø: Moonlit Lake",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2016-02-06T08:00:00.000Z"
  },
  {
    "#": 271,
    "Title": "Fairy Tail Zerø: Blue Skull",
    "Type": "Manga Canon",
    "Airdate": "2016-02-13T08:00:00.000Z"
  },
  {
    "#": 272,
    "Title": "Fairy Tail Zerø: Conveyer of Magic",
    "Type": "Manga Canon",
    "Airdate": "2016-02-20T08:00:00.000Z"
  },
  {
    "#": 273,
    "Title": "Fairy Tail Zerø: Treasure",
    "Type": "Manga Canon",
    "Airdate": "2016-02-27T08:00:00.000Z"
  },
  {
    "#": 274,
    "Title": "Fairy Tail Zerø: Law",
    "Type": "Manga Canon",
    "Airdate": "2016-03-05T08:00:00.000Z"
  },
  {
    "#": 275,
    "Title": "Fairy Tail Zerø: Eternal Adventure",
    "Type": "Manga Canon",
    "Airdate": "2016-03-12T08:00:00.000Z"
  },
  {
    "#": 276,
    "Title": "Challenger",
    "Type": "Manga Canon",
    "Airdate": "2016-03-19T07:00:00.000Z"
  },
  {
    "#": 277,
    "Title": "Message of Flame",
    "Type": "Manga Canon",
    "Airdate": "2016-03-26T07:00:00.000Z"
  },
  {
    "#": 278,
    "Title": "The Lamia Scale Thanksgiving Festival",
    "Type": "Manga Canon",
    "Airdate": "2018-10-07T07:00:00.000Z"
  },
  {
    "#": 279,
    "Title": "Because of Love",
    "Type": "Manga Canon",
    "Airdate": "2018-10-14T07:00:00.000Z"
  },
  {
    "#": 280,
    "Title": "Avatar",
    "Type": "Manga Canon",
    "Airdate": "2018-10-21T07:00:00.000Z"
  },
  {
    "#": 281,
    "Title": "Underground Clash",
    "Type": "Manga Canon",
    "Airdate": "2018-10-28T07:00:00.000Z"
  },
  {
    "#": 282,
    "Title": "The Purification Plan",
    "Type": "Manga Canon",
    "Airdate": "2018-11-04T07:00:00.000Z"
  },
  {
    "#": 283,
    "Title": "Ikusatsunagi",
    "Type": "Manga Canon",
    "Airdate": "2018-11-11T08:00:00.000Z"
  },
  {
    "#": 284,
    "Title": "Memoirs",
    "Type": "Manga Canon",
    "Airdate": "2018-11-18T08:00:00.000Z"
  },
  {
    "#": 285,
    "Title": "The 7th Guild Master",
    "Type": "Manga Canon",
    "Airdate": "2018-11-25T08:00:00.000Z"
  },
  {
    "#": 286,
    "Title": "Law of Space",
    "Type": "Manga Canon",
    "Airdate": "2018-12-02T08:00:00.000Z"
  },
  {
    "#": 287,
    "Title": "Emperor Spriggan",
    "Type": "Manga Canon",
    "Airdate": "2018-12-09T08:00:00.000Z"
  },
  {
    "#": 288,
    "Title": "To the God-Forsaken Land",
    "Type": "Manga Canon",
    "Airdate": "2018-12-16T08:00:00.000Z"
  },
  {
    "#": 289,
    "Title": "Mavis and Zeref",
    "Type": "Manga Canon",
    "Airdate": "2018-12-23T08:00:00.000Z"
  },
  {
    "#": 290,
    "Title": "Fairy Heart",
    "Type": "Manga Canon",
    "Airdate": "2019-01-06T08:00:00.000Z"
  },
  {
    "#": 291,
    "Title": "The Magnolia Defensive War",
    "Type": "Manga Canon",
    "Airdate": "2019-01-13T08:00:00.000Z"
  },
  {
    "#": 292,
    "Title": "Morning Star",
    "Type": "Manga Canon",
    "Airdate": "2019-01-20T08:00:00.000Z"
  },
  {
    "#": 293,
    "Title": "For Whom the Parfum Flows",
    "Type": "Manga Canon",
    "Airdate": "2019-01-27T08:00:00.000Z"
  },
  {
    "#": 294,
    "Title": "Natsu vs. Zeref",
    "Type": "Manga Canon",
    "Airdate": "2019-02-03T08:00:00.000Z"
  },
  {
    "#": 295,
    "Title": "Across 400 Years",
    "Type": "Manga Canon",
    "Airdate": "2019-02-10T08:00:00.000Z"
  },
  {
    "#": 296,
    "Title": "What I Want to Do",
    "Type": "Manga Canon",
    "Airdate": "2019-02-17T08:00:00.000Z"
  },
  {
    "#": 297,
    "Title": "Not Until the Battle is Over",
    "Type": "Manga Canon",
    "Airdate": "2019-02-24T08:00:00.000Z"
  },
  {
    "#": 298,
    "Title": "In a Silent Time",
    "Type": "Manga Canon",
    "Airdate": "2019-03-03T08:00:00.000Z"
  },
  {
    "#": 299,
    "Title": "Natsu, Revived!!",
    "Type": "Manga Canon",
    "Airdate": "2019-03-10T08:00:00.000Z"
  },
  {
    "#": 300,
    "Title": "Historia of Corpses",
    "Type": "Manga Canon",
    "Airdate": "2019-03-17T07:00:00.000Z"
  },
  {
    "#": 301,
    "Title": "Mettle",
    "Type": "Manga Canon",
    "Airdate": "2019-03-24T07:00:00.000Z"
  },
  {
    "#": 302,
    "Title": "The Third Seal",
    "Type": "Manga Canon",
    "Airdate": "2019-03-31T07:00:00.000Z"
  },
  {
    "#": 303,
    "Title": "Together, Always",
    "Type": "Manga Canon",
    "Airdate": "2019-04-07T07:00:00.000Z"
  },
  {
    "#": 304,
    "Title": "Fairy Tail Zero",
    "Type": "Manga Canon",
    "Airdate": "2019-04-14T07:00:00.000Z"
  },
  {
    "#": 305,
    "Title": "White Dragneel",
    "Type": "Manga Canon",
    "Airdate": "2019-04-21T07:00:00.000Z"
  },
  {
    "#": 306,
    "Title": "The Winter Wizard",
    "Type": "Manga Canon",
    "Airdate": "2019-04-28T07:00:00.000Z"
  },
  {
    "#": 307,
    "Title": "Gray and Juvia",
    "Type": "Manga Canon",
    "Airdate": "2019-05-05T07:00:00.000Z"
  },
  {
    "#": 308,
    "Title": "The Mightiest Demon of the Book of Zeref",
    "Type": "Manga Canon",
    "Airdate": "2019-05-12T07:00:00.000Z"
  },
  {
    "#": 309,
    "Title": "Broken Bonds",
    "Type": "Manga Canon",
    "Airdate": "2019-05-19T07:00:00.000Z"
  },
  {
    "#": 310,
    "Title": "Pleasure and Pain",
    "Type": "Manga Canon",
    "Airdate": "2019-05-26T07:00:00.000Z"
  },
  {
    "#": 311,
    "Title": "Natsu's Heart",
    "Type": "Manga Canon",
    "Airdate": "2019-06-02T07:00:00.000Z"
  },
  {
    "#": 312,
    "Title": "Sting, the White Shadow Dragon",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2019-06-09T07:00:00.000Z"
  },
  {
    "#": 313,
    "Title": "Dragon Seed",
    "Type": "Manga Canon",
    "Airdate": "2019-06-16T07:00:00.000Z"
  },
  {
    "#": 314,
    "Title": "Master Enchant",
    "Type": "Manga Canon",
    "Airdate": "2019-06-23T07:00:00.000Z"
  },
  {
    "#": 315,
    "Title": "Dragon or Demon",
    "Type": "Manga Canon",
    "Airdate": "2019-06-30T07:00:00.000Z"
  },
  {
    "#": 316,
    "Title": "Gray's Trump Card",
    "Type": "Manga Canon",
    "Airdate": "2019-07-07T07:00:00.000Z"
  },
  {
    "#": 317,
    "Title": "Dark Future",
    "Type": "Manga Canon",
    "Airdate": "2019-07-14T07:00:00.000Z"
  },
  {
    "#": 318,
    "Title": "My Name Is...",
    "Type": "Manga Canon",
    "Airdate": "2019-07-21T07:00:00.000Z"
  },
  {
    "#": 319,
    "Title": "Feelings",
    "Type": "Manga Canon",
    "Airdate": "2019-07-28T07:00:00.000Z"
  },
  {
    "#": 320,
    "Title": "Neo Eclipse",
    "Type": "Manga Canon",
    "Airdate": "2019-08-04T07:00:00.000Z"
  },
  {
    "#": 321,
    "Title": "Blind to Love",
    "Type": "Manga Canon",
    "Airdate": "2019-08-11T07:00:00.000Z"
  },
  {
    "#": 322,
    "Title": "The Gate of Vows",
    "Type": "Manga Canon",
    "Airdate": "2019-08-18T07:00:00.000Z"
  },
  {
    "#": 323,
    "Title": "Raging Fire of the Dragon",
    "Type": "Manga Canon",
    "Airdate": "2019-08-25T07:00:00.000Z"
  },
  {
    "#": 324,
    "Title": "When the Fire Dies",
    "Type": "Manga Canon",
    "Airdate": "2019-09-01T07:00:00.000Z"
  },
  {
    "#": 325,
    "Title": "World Destruction",
    "Type": "Manga Canon",
    "Airdate": "2019-09-08T07:00:00.000Z"
  },
  {
    "#": 326,
    "Title": "Magic of Hope",
    "Type": "Manga Canon",
    "Airdate": "2019-09-15T07:00:00.000Z"
  },
  {
    "#": 327,
    "Title": "Hearts Connected",
    "Type": "Manga Canon",
    "Airdate": "2019-09-22T07:00:00.000Z"
  },
  {
    "#": 328,
    "Title": "Dearest Friends",
    "Type": "Manga Canon",
    "Airdate": "2019-09-29T07:00:00.000Z"
  }
],

'GYVD2K1WY': //THE PROMISED NEVERLAND
[
  {
    "#": "S1 E1",
    "Title": 121045,
    "Type": "Manga Canon",
    "Airdate": "2019-01-11T08:00:00.000Z"
  },
  {
    "#": "S1 E2",
    "Title": 131045,
    "Type": "Manga Canon",
    "Airdate": "2019-01-18T08:00:00.000Z"
  },
  {
    "#": "S1 E3",
    "Title": 181045,
    "Type": "Manga Canon",
    "Airdate": "2019-01-25T08:00:00.000Z"
  },
  {
    "#": "S1 E4",
    "Title": 291045,
    "Type": "Manga Canon",
    "Airdate": "2019-02-01T08:00:00.000Z"
  },
  {
    "#": "S1 E5",
    "Title": 301045,
    "Type": "Manga Canon",
    "Airdate": "2019-02-08T08:00:00.000Z"
  },
  {
    "#": "S1 E6",
    "Title": 311045,
    "Type": "Manga Canon",
    "Airdate": "2019-02-15T08:00:00.000Z"
  },
  {
    "#": "S1 E7",
    "Title": 11145,
    "Type": "Manga Canon",
    "Airdate": "2019-02-22T08:00:00.000Z"
  },
  {
    "#": "S1 E8",
    "Title": 21145,
    "Type": "Manga Canon",
    "Airdate": "2019-03-01T08:00:00.000Z"
  },
  {
    "#": "S1 E9",
    "Title": 31145,
    "Type": "Manga Canon",
    "Airdate": "2019-03-08T08:00:00.000Z"
  },
  {
    "#": "S1 E10",
    "Title": 130146,
    "Type": "Manga Canon",
    "Airdate": "2019-03-15T07:00:00.000Z"
  },
  {
    "#": "S1 E11",
    "Title": 140146,
    "Type": "Manga Canon",
    "Airdate": "2019-03-22T07:00:00.000Z"
  },
  {
    "#": "S1 E12",
    "Title": 150146,
    "Type": "Manga Canon",
    "Airdate": "2019-03-29T07:00:00.000Z"
  },
  {
    "#": "S2 E1",
    "Title": "Episode 13",
    "Type": "Manga Canon",
    "Airdate": "2021-01-08T08:00:00.000Z"
  },
  {
    "#": "S2 E2",
    "Title": "Episode 14",
    "Type": "Manga Canon",
    "Airdate": "2021-01-15T08:00:00.000Z"
  },
  {
    "#": "S2 E3",
    "Title": "Episode 15",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2021-01-22T08:00:00.000Z"
  },
  {
    "#": "S2 E4",
    "Title": "Episode 16",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2021-01-29T08:00:00.000Z"
  },
  {
    "#": "S2 E5",
    "Title": "Episode 17",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2021-02-05T08:00:00.000Z"
  },
  {
    "#": "S2 E6",
    "Title": "Episode 18",
    "Type": "Manga Canon",
    "Airdate": "2021-02-19T08:00:00.000Z"
  },
  {
    "#": "S2 E7",
    "Title": "Episode 19",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2021-02-26T08:00:00.000Z"
  },
  {
    "#": "S2 E8",
    "Title": "Episode 20",
    "Type": "Anime Canon",
    "Airdate": "2021-03-05T08:00:00.000Z"
  },
  {
    "#": "S2 E9",
    "Title": "Episode 21",
    "Type": "Anime Canon",
    "Airdate": "2021-03-12T08:00:00.000Z"
  },
  {
    "#": "S2 E10",
    "Title": "Episode 22",
    "Type": "Anime Canon",
    "Airdate": "2021-03-19T07:00:00.000Z"
  },
  {
    "#": "S2 E11",
    "Title": "Episode 23",
    "Type": "Anime Canon",
    "Airdate": "2021-03-26T07:00:00.000Z"
  }
],

'G8DHV7W21': //DRAGON BALL
[
  {
    "#": 1,
    "Title": "The Secret of the Dragon Balls",
    "Type": "Manga Canon",
    "Airdate": "1986-02-26T08:00:00.000Z"
  },
  {
    "#": 2,
    "Title": "The Emperor's Quest",
    "Type": "Manga Canon",
    "Airdate": "1986-03-05T08:00:00.000Z"
  },
  {
    "#": 3,
    "Title": "The Nimbus Cloud of Roshi",
    "Type": "Manga Canon",
    "Airdate": "1986-03-12T08:00:00.000Z"
  },
  {
    "#": 4,
    "Title": "Oolong the Terrible",
    "Type": "Manga Canon",
    "Airdate": "1986-03-19T08:00:00.000Z"
  },
  {
    "#": 5,
    "Title": "Yamcha the Desert Bandit",
    "Type": "Manga Canon",
    "Airdate": "1986-03-26T08:00:00.000Z"
  },
  {
    "#": 6,
    "Title": "Keep an Eye on the Dragon Balls",
    "Type": "Manga Canon",
    "Airdate": "1986-04-02T08:00:00.000Z"
  },
  {
    "#": 7,
    "Title": "The Ox King on Fire Mountain",
    "Type": "Manga Canon",
    "Airdate": "1986-04-09T08:00:00.000Z"
  },
  {
    "#": 8,
    "Title": "The Kamehameha Wave",
    "Type": "Manga Canon",
    "Airdate": "1986-04-16T08:00:00.000Z"
  },
  {
    "#": 9,
    "Title": "Boss Rabbit’s Magic Touch",
    "Type": "Manga Canon",
    "Airdate": "1986-04-23T08:00:00.000Z"
  },
  {
    "#": 10,
    "Title": "The Dragon Balls are Stolen!",
    "Type": "Manga Canon",
    "Airdate": "1986-04-30T07:00:00.000Z"
  },
  {
    "#": 11,
    "Title": "The Penalty is Pinball",
    "Type": "Manga Canon",
    "Airdate": "1986-05-07T07:00:00.000Z"
  },
  {
    "#": 12,
    "Title": "A Wish to the Eternal Dragon",
    "Type": "Manga Canon",
    "Airdate": "1986-05-14T07:00:00.000Z"
  },
  {
    "#": 13,
    "Title": "The Legend of Goku",
    "Type": "Manga Canon",
    "Airdate": "1986-05-21T07:00:00.000Z"
  },
  {
    "#": 14,
    "Title": "Goku's Rival",
    "Type": "Manga Canon",
    "Airdate": "1986-05-28T07:00:00.000Z"
  },
  {
    "#": 15,
    "Title": "Look Out for Launch",
    "Type": "Manga Canon",
    "Airdate": "1986-06-04T07:00:00.000Z"
  },
  {
    "#": 16,
    "Title": "Find That Stone!",
    "Type": "Manga Canon",
    "Airdate": "1986-06-11T07:00:00.000Z"
  },
  {
    "#": 17,
    "Title": "Milk Delivery",
    "Type": "Manga Canon",
    "Airdate": "1986-06-18T07:00:00.000Z"
  },
  {
    "#": 18,
    "Title": "The Turtle Hermit Way",
    "Type": "Manga Canon",
    "Airdate": "1986-06-25T07:00:00.000Z"
  },
  {
    "#": 19,
    "Title": "The Tournament Begins",
    "Type": "Manga Canon",
    "Airdate": "1986-07-02T07:00:00.000Z"
  },
  {
    "#": 20,
    "Title": "Elimination Round",
    "Type": "Manga Canon",
    "Airdate": "1986-07-09T07:00:00.000Z"
  },
  {
    "#": 21,
    "Title": "Smells Like Trouble",
    "Type": "Manga Canon",
    "Airdate": "1986-07-16T07:00:00.000Z"
  },
  {
    "#": 22,
    "Title": "Quarterfinals Begin",
    "Type": "Manga Canon",
    "Airdate": "1986-07-23T07:00:00.000Z"
  },
  {
    "#": 23,
    "Title": "Monster Beast Giran",
    "Type": "Manga Canon",
    "Airdate": "1986-07-30T07:00:00.000Z"
  },
  {
    "#": 24,
    "Title": "Krillin's Frantic Attack!",
    "Type": "Manga Canon",
    "Airdate": "1986-08-06T07:00:00.000Z"
  },
  {
    "#": 25,
    "Title": "Danger From Above",
    "Type": "Manga Canon",
    "Airdate": "1986-08-13T07:00:00.000Z"
  },
  {
    "#": 26,
    "Title": "The Grand Finals",
    "Type": "Manga Canon",
    "Airdate": "1986-08-20T07:00:00.000Z"
  },
  {
    "#": 27,
    "Title": "Number One Under the Moon?",
    "Type": "Manga Canon",
    "Airdate": "1986-08-27T07:00:00.000Z"
  },
  {
    "#": 28,
    "Title": "The Final Blow",
    "Type": "Manga Canon",
    "Airdate": "1986-09-03T07:00:00.000Z"
  },
  {
    "#": 29,
    "Title": "The Roaming Lake",
    "Type": "Mixed Canon/Filler",
    "Airdate": "1986-09-10T07:00:00.000Z"
  },
  {
    "#": 30,
    "Title": "Pilaf and the Mystery Force",
    "Type": "Filler",
    "Airdate": "1986-09-17T07:00:00.000Z"
  },
  {
    "#": 31,
    "Title": "Wedding Plans?",
    "Type": "Filler",
    "Airdate": "1986-09-24T07:00:00.000Z"
  },
  {
    "#": 32,
    "Title": "The Flying Fortress - Vanished!",
    "Type": "Filler",
    "Airdate": "1986-10-01T07:00:00.000Z"
  },
  {
    "#": 33,
    "Title": "The Legend of a Dragon",
    "Type": "Filler",
    "Airdate": "1986-10-08T07:00:00.000Z"
  },
  {
    "#": 34,
    "Title": "Cruel General Red",
    "Type": "Manga Canon",
    "Airdate": "1986-10-15T07:00:00.000Z"
  },
  {
    "#": 35,
    "Title": "Cold Reception",
    "Type": "Manga Canon",
    "Airdate": "1986-10-22T07:00:00.000Z"
  },
  {
    "#": 36,
    "Title": "Major Metallitron",
    "Type": "Manga Canon",
    "Airdate": "1986-10-29T08:00:00.000Z"
  },
  {
    "#": 37,
    "Title": "Ninja Murasaki is Coming!",
    "Type": "Manga Canon",
    "Airdate": "1986-11-05T08:00:00.000Z"
  },
  {
    "#": 38,
    "Title": "Five Murasakis",
    "Type": "Manga Canon",
    "Airdate": "1986-11-12T08:00:00.000Z"
  },
  {
    "#": 39,
    "Title": "Mysterious Android No. 8",
    "Type": "Manga Canon",
    "Airdate": "1986-11-19T08:00:00.000Z"
  },
  {
    "#": 40,
    "Title": "Horrifying Buyon",
    "Type": "Manga Canon",
    "Airdate": "1986-11-26T08:00:00.000Z"
  },
  {
    "#": 41,
    "Title": "The Fall of Muscle Tower",
    "Type": "Manga Canon",
    "Airdate": "1986-12-03T08:00:00.000Z"
  },
  {
    "#": 42,
    "Title": "The Secret of Dr. Flappe",
    "Type": "Mixed Canon/Filler",
    "Airdate": "1986-12-10T08:00:00.000Z"
  },
  {
    "#": 43,
    "Title": "A Trip to the City",
    "Type": "Manga Canon",
    "Airdate": "1986-12-17T08:00:00.000Z"
  },
  {
    "#": 44,
    "Title": "Master Thief, Hasky",
    "Type": "Mixed Canon/Filler",
    "Airdate": "1986-12-24T08:00:00.000Z"
  },
  {
    "#": 45,
    "Title": "Danger in the Air",
    "Type": "Filler",
    "Airdate": "1987-01-07T08:00:00.000Z"
  },
  {
    "#": 46,
    "Title": "Bulma's Bad Day",
    "Type": "Manga Canon",
    "Airdate": "1987-01-14T08:00:00.000Z"
  },
  {
    "#": 47,
    "Title": "Kame House - Found!",
    "Type": "Manga Canon",
    "Airdate": "1987-01-21T08:00:00.000Z"
  },
  {
    "#": 48,
    "Title": "Deep Blue Sea",
    "Type": "Manga Canon",
    "Airdate": "1987-01-28T08:00:00.000Z"
  },
  {
    "#": 49,
    "Title": "Roshi Surprise",
    "Type": "Manga Canon",
    "Airdate": "1987-02-04T08:00:00.000Z"
  },
  {
    "#": 50,
    "Title": "The Trap is Sprung!",
    "Type": "Manga Canon",
    "Airdate": "1987-02-11T08:00:00.000Z"
  },
  {
    "#": 51,
    "Title": "Beware of Robot",
    "Type": "Manga Canon",
    "Airdate": "1987-02-18T08:00:00.000Z"
  },
  {
    "#": 52,
    "Title": "The Pirate Treasure",
    "Type": "Manga Canon",
    "Airdate": "1987-02-25T08:00:00.000Z"
  },
  {
    "#": 53,
    "Title": "Blue, Black and Blue",
    "Type": "Manga Canon",
    "Airdate": "1987-03-04T08:00:00.000Z"
  },
  {
    "#": 54,
    "Title": "Escape From Pirate Cave",
    "Type": "Manga Canon",
    "Airdate": "1987-03-11T08:00:00.000Z"
  },
  {
    "#": 55,
    "Title": "Penguin Village",
    "Type": "Manga Canon",
    "Airdate": "1987-03-18T08:00:00.000Z"
  },
  {
    "#": 56,
    "Title": "Strange Visitor",
    "Type": "Manga Canon",
    "Airdate": "1987-03-25T08:00:00.000Z"
  },
  {
    "#": 57,
    "Title": "Arale vs. Blue",
    "Type": "Manga Canon",
    "Airdate": "1987-04-08T07:00:00.000Z"
  },
  {
    "#": 58,
    "Title": "The Land of Korin",
    "Type": "Manga Canon",
    "Airdate": "1987-04-15T07:00:00.000Z"
  },
  {
    "#": 59,
    "Title": "The Notorious Mercenary",
    "Type": "Manga Canon",
    "Airdate": "1987-04-22T07:00:00.000Z"
  },
  {
    "#": 60,
    "Title": "Tao Attacks!",
    "Type": "Manga Canon",
    "Airdate": "1987-04-29T07:00:00.000Z"
  },
  {
    "#": 61,
    "Title": "Korin Tower",
    "Type": "Manga Canon",
    "Airdate": "1987-05-06T07:00:00.000Z"
  },
  {
    "#": 62,
    "Title": "Sacred Water",
    "Type": "Manga Canon",
    "Airdate": "1987-05-13T07:00:00.000Z"
  },
  {
    "#": 63,
    "Title": "The Return of Goku",
    "Type": "Manga Canon",
    "Airdate": "1987-05-20T07:00:00.000Z"
  },
  {
    "#": 64,
    "Title": "The Last of Mercenary Tao",
    "Type": "Manga Canon",
    "Airdate": "1987-05-27T07:00:00.000Z"
  },
  {
    "#": 65,
    "Title": "Confront the Red Ribbon Army",
    "Type": "Manga Canon",
    "Airdate": "1987-06-10T07:00:00.000Z"
  },
  {
    "#": 66,
    "Title": "A Real Bind",
    "Type": "Manga Canon",
    "Airdate": "1987-06-17T07:00:00.000Z"
  },
  {
    "#": 67,
    "Title": "The End of Commander Red",
    "Type": "Manga Canon",
    "Airdate": "1987-06-24T07:00:00.000Z"
  },
  {
    "#": 68,
    "Title": "The Last Dragon Ball",
    "Type": "Manga Canon",
    "Airdate": "1987-07-01T07:00:00.000Z"
  },
  {
    "#": 69,
    "Title": "Who is Fortuneteller Baba?",
    "Type": "Manga Canon",
    "Airdate": "1987-07-08T07:00:00.000Z"
  },
  {
    "#": 70,
    "Title": "We Are the Five Warriors",
    "Type": "Manga Canon",
    "Airdate": "1987-07-15T07:00:00.000Z"
  },
  {
    "#": 71,
    "Title": "Deadly Battle",
    "Type": "Manga Canon",
    "Airdate": "1987-07-22T07:00:00.000Z"
  },
  {
    "#": 72,
    "Title": "Goku's Turn",
    "Type": "Manga Canon",
    "Airdate": "1987-07-29T07:00:00.000Z"
  },
  {
    "#": 73,
    "Title": "The Devilmite Beam",
    "Type": "Manga Canon",
    "Airdate": "1987-08-05T07:00:00.000Z"
  },
  {
    "#": 74,
    "Title": "The Mysterious Fifth Man",
    "Type": "Manga Canon",
    "Airdate": "1987-08-12T07:00:00.000Z"
  },
  {
    "#": 75,
    "Title": "The Strong Ones",
    "Type": "Manga Canon",
    "Airdate": "1987-08-19T07:00:00.000Z"
  },
  {
    "#": 76,
    "Title": "True Colors of the Masked Man",
    "Type": "Manga Canon",
    "Airdate": "1987-08-26T07:00:00.000Z"
  },
  {
    "#": 77,
    "Title": "Pilaf's Tactics",
    "Type": "Manga Canon",
    "Airdate": "1987-09-02T07:00:00.000Z"
  },
  {
    "#": 78,
    "Title": "The Eternal Dragon Rises",
    "Type": "Manga Canon",
    "Airdate": "1987-09-09T07:00:00.000Z"
  },
  {
    "#": 79,
    "Title": "Terror and Plague",
    "Type": "Filler",
    "Airdate": "1987-09-16T07:00:00.000Z"
  },
  {
    "#": 80,
    "Title": "Goku vs. Sky Dragon",
    "Type": "Filler",
    "Airdate": "1987-09-23T07:00:00.000Z"
  },
  {
    "#": 81,
    "Title": "Goku Goes to Demon Land",
    "Type": "Filler",
    "Airdate": "1987-09-30T07:00:00.000Z"
  },
  {
    "#": 82,
    "Title": "The Rampage of InoShikaCho",
    "Type": "Filler",
    "Airdate": "1987-10-07T07:00:00.000Z"
  },
  {
    "#": 83,
    "Title": "Which Way To Papaya Island?",
    "Type": "Filler",
    "Airdate": "1987-10-14T07:00:00.000Z"
  },
  {
    "#": 84,
    "Title": "Rivals and Arrivals",
    "Type": "Manga Canon",
    "Airdate": "1987-10-21T07:00:00.000Z"
  },
  {
    "#": 85,
    "Title": "Preliminary Peril",
    "Type": "Manga Canon",
    "Airdate": "1987-10-28T08:00:00.000Z"
  },
  {
    "#": 86,
    "Title": "Then There Were Eight",
    "Type": "Manga Canon",
    "Airdate": "1987-11-04T08:00:00.000Z"
  },
  {
    "#": 87,
    "Title": "Yamcha vs. Tien",
    "Type": "Manga Canon",
    "Airdate": "1987-11-11T08:00:00.000Z"
  },
  {
    "#": 88,
    "Title": "Yamcha's Big Break",
    "Type": "Manga Canon",
    "Airdate": "1987-11-18T08:00:00.000Z"
  },
  {
    "#": 89,
    "Title": "Full-Moon Vengeance",
    "Type": "Manga Canon",
    "Airdate": "1987-11-25T08:00:00.000Z"
  },
  {
    "#": 90,
    "Title": "The Dodon Wave",
    "Type": "Manga Canon",
    "Airdate": "1987-12-02T08:00:00.000Z"
  },
  {
    "#": 91,
    "Title": "Counting Controversy!!",
    "Type": "Manga Canon",
    "Airdate": "1987-12-09T08:00:00.000Z"
  },
  {
    "#": 92,
    "Title": "Goku Enters the Ring",
    "Type": "Manga Canon",
    "Airdate": "1987-12-16T08:00:00.000Z"
  },
  {
    "#": 93,
    "Title": "Tien Shinhan vs. Jackie Chun",
    "Type": "Manga Canon",
    "Airdate": "1987-12-23T08:00:00.000Z"
  },
  {
    "#": 94,
    "Title": "Stepping Down",
    "Type": "Manga Canon",
    "Airdate": "1987-12-30T08:00:00.000Z"
  },
  {
    "#": 95,
    "Title": "Goku vs. Krillin",
    "Type": "Manga Canon",
    "Airdate": "1988-01-06T08:00:00.000Z"
  },
  {
    "#": 96,
    "Title": "Tail's Tale",
    "Type": "Manga Canon",
    "Airdate": "1988-01-13T08:00:00.000Z"
  },
  {
    "#": 97,
    "Title": "Final Match: Goku vs. Tien",
    "Type": "Manga Canon",
    "Airdate": "1988-01-20T08:00:00.000Z"
  },
  {
    "#": 98,
    "Title": "Victory's Edge",
    "Type": "Manga Canon",
    "Airdate": "1988-01-27T08:00:00.000Z"
  },
  {
    "#": 99,
    "Title": "Tien's Insurrection",
    "Type": "Manga Canon",
    "Airdate": "1988-02-03T08:00:00.000Z"
  },
  {
    "#": 100,
    "Title": "The Spirit Cannon",
    "Type": "Manga Canon",
    "Airdate": "1988-02-10T08:00:00.000Z"
  },
  {
    "#": 101,
    "Title": "The Fallen",
    "Type": "Manga Canon",
    "Airdate": "1988-02-17T08:00:00.000Z"
  },
  {
    "#": 102,
    "Title": "Enter King Piccolo",
    "Type": "Manga Canon",
    "Airdate": "1988-02-24T08:00:00.000Z"
  },
  {
    "#": 103,
    "Title": "Tambourine Attacks!",
    "Type": "Manga Canon",
    "Airdate": "1988-03-02T08:00:00.000Z"
  },
  {
    "#": 104,
    "Title": "Mark of the Demon",
    "Type": "Manga Canon",
    "Airdate": "1988-03-09T08:00:00.000Z"
  },
  {
    "#": 105,
    "Title": "Here Comes Yajirobe",
    "Type": "Manga Canon",
    "Airdate": "1988-03-16T08:00:00.000Z"
  },
  {
    "#": 106,
    "Title": "Terrible Tambourine",
    "Type": "Manga Canon",
    "Airdate": "1988-03-23T08:00:00.000Z"
  },
  {
    "#": 107,
    "Title": "Tien's Atonement",
    "Type": "Manga Canon",
    "Airdate": "1988-04-06T07:00:00.000Z"
  },
  {
    "#": 108,
    "Title": "Goku's Revenge",
    "Type": "Manga Canon",
    "Airdate": "1988-04-13T07:00:00.000Z"
  },
  {
    "#": 109,
    "Title": "Goku vs. King Piccolo",
    "Type": "Manga Canon",
    "Airdate": "1988-04-20T07:00:00.000Z"
  },
  {
    "#": 110,
    "Title": "Piccolo Closes In",
    "Type": "Manga Canon",
    "Airdate": "1988-05-04T07:00:00.000Z"
  },
  {
    "#": 111,
    "Title": "Roshi's Gambit",
    "Type": "Manga Canon",
    "Airdate": "1988-05-11T07:00:00.000Z"
  },
  {
    "#": 112,
    "Title": "King Piccolo's Wish",
    "Type": "Manga Canon",
    "Airdate": "1988-05-18T07:00:00.000Z"
  },
  {
    "#": 113,
    "Title": "Siege on Chow Castle",
    "Type": "Manga Canon",
    "Airdate": "1988-05-25T07:00:00.000Z"
  },
  {
    "#": 114,
    "Title": "Conquest and Power",
    "Type": "Manga Canon",
    "Airdate": "1988-06-01T07:00:00.000Z"
  },
  {
    "#": 115,
    "Title": "Awaken Darkness",
    "Type": "Manga Canon",
    "Airdate": "1988-06-08T07:00:00.000Z"
  },
  {
    "#": 116,
    "Title": "A Taste of Destiny",
    "Type": "Manga Canon",
    "Airdate": "1988-06-22T07:00:00.000Z"
  },
  {
    "#": 117,
    "Title": "The Ultimate Sacrifice",
    "Type": "Manga Canon",
    "Airdate": "1988-06-29T07:00:00.000Z"
  },
  {
    "#": 118,
    "Title": "Prelude to Vengeance",
    "Type": "Manga Canon",
    "Airdate": "1988-07-06T07:00:00.000Z"
  },
  {
    "#": 119,
    "Title": "Battle Cry",
    "Type": "Manga Canon",
    "Airdate": "1988-07-20T07:00:00.000Z"
  },
  {
    "#": 120,
    "Title": "Goku Strikes Back",
    "Type": "Manga Canon",
    "Airdate": "1988-07-27T07:00:00.000Z"
  },
  {
    "#": 121,
    "Title": "The Biggest Crisis",
    "Type": "Manga Canon",
    "Airdate": "1988-08-03T07:00:00.000Z"
  },
  {
    "#": 122,
    "Title": "Final Showdown",
    "Type": "Manga Canon",
    "Airdate": "1988-08-10T07:00:00.000Z"
  },
  {
    "#": 123,
    "Title": "Lost and Found",
    "Type": "Manga Canon",
    "Airdate": "1988-08-17T07:00:00.000Z"
  },
  {
    "#": 124,
    "Title": "Temple Above the Clouds",
    "Type": "Manga Canon",
    "Airdate": "1988-08-24T07:00:00.000Z"
  },
  {
    "#": 125,
    "Title": "Earth's Guardian Emerges",
    "Type": "Manga Canon",
    "Airdate": "1988-08-31T07:00:00.000Z"
  },
  {
    "#": 126,
    "Title": "Eternal Dragon Resurrected",
    "Type": "Manga Canon",
    "Airdate": "1988-09-14T07:00:00.000Z"
  },
  {
    "#": 127,
    "Title": "Quicker than Lightning",
    "Type": "Filler",
    "Airdate": "1988-09-21T07:00:00.000Z"
  },
  {
    "#": 128,
    "Title": "Secret of the Woods",
    "Type": "Filler",
    "Airdate": "1988-09-28T07:00:00.000Z"
  },
  {
    "#": 129,
    "Title": "The Time Room",
    "Type": "Filler",
    "Airdate": "1988-10-12T07:00:00.000Z"
  },
  {
    "#": 130,
    "Title": "Goku's Doll",
    "Type": "Filler",
    "Airdate": "1988-10-19T07:00:00.000Z"
  },
  {
    "#": 131,
    "Title": "Walking Their Own Ways",
    "Type": "Filler",
    "Airdate": "1988-10-26T07:00:00.000Z"
  },
  {
    "#": 132,
    "Title": "Hotter than Lava",
    "Type": "Filler",
    "Airdate": "1988-11-02T08:00:00.000Z"
  },
  {
    "#": 133,
    "Title": "Changes",
    "Type": "Manga Canon",
    "Airdate": "1988-11-09T08:00:00.000Z"
  },
  {
    "#": 134,
    "Title": "Preliminary Peril",
    "Type": "Manga Canon",
    "Airdate": "1988-11-16T08:00:00.000Z"
  },
  {
    "#": 135,
    "Title": "Battle of the Eight",
    "Type": "Manga Canon",
    "Airdate": "1988-11-23T08:00:00.000Z"
  },
  {
    "#": 136,
    "Title": "Tien Shinhan vs. Mercenary Tao",
    "Type": "Manga Canon",
    "Airdate": "1988-11-30T08:00:00.000Z"
  },
  {
    "#": 137,
    "Title": "Anonymous Proposal",
    "Type": "Manga Canon",
    "Airdate": "1988-12-07T08:00:00.000Z"
  },
  {
    "#": 138,
    "Title": "The Mysterious Hero",
    "Type": "Manga Canon",
    "Airdate": "1988-12-14T08:00:00.000Z"
  },
  {
    "#": 139,
    "Title": "Rematch",
    "Type": "Manga Canon",
    "Airdate": "1988-12-21T08:00:00.000Z"
  },
  {
    "#": 140,
    "Title": "Goku Gains Speed",
    "Type": "Manga Canon",
    "Airdate": "1989-01-11T08:00:00.000Z"
  },
  {
    "#": 141,
    "Title": "The Four Faces of Tien",
    "Type": "Manga Canon",
    "Airdate": "1989-01-18T08:00:00.000Z"
  },
  {
    "#": 142,
    "Title": "Kami vs. Piccolo",
    "Type": "Manga Canon",
    "Airdate": "1989-01-25T08:00:00.000Z"
  },
  {
    "#": 143,
    "Title": "Battle for the Future",
    "Type": "Manga Canon",
    "Airdate": "1989-02-01T08:00:00.000Z"
  },
  {
    "#": 144,
    "Title": "Super Kamehameha",
    "Type": "Manga Canon",
    "Airdate": "1989-02-08T08:00:00.000Z"
  },
  {
    "#": 145,
    "Title": "Junior No More",
    "Type": "Manga Canon",
    "Airdate": "1989-02-15T08:00:00.000Z"
  },
  {
    "#": 146,
    "Title": "Goku's Trap",
    "Type": "Manga Canon",
    "Airdate": "1989-02-22T08:00:00.000Z"
  },
  {
    "#": 147,
    "Title": "Goku Hangs On",
    "Type": "Manga Canon",
    "Airdate": "1989-03-01T08:00:00.000Z"
  },
  {
    "#": 148,
    "Title": "The Victor",
    "Type": "Manga Canon",
    "Airdate": "1989-03-08T08:00:00.000Z"
  },
  {
    "#": 149,
    "Title": "Dress in Flames",
    "Type": "Filler",
    "Airdate": "1989-03-15T08:00:00.000Z"
  },
  {
    "#": 150,
    "Title": "The Fire-Eater",
    "Type": "Filler",
    "Airdate": "1989-03-22T08:00:00.000Z"
  },
  {
    "#": 151,
    "Title": "Outrageous Octagon",
    "Type": "Filler",
    "Airdate": "1989-04-05T07:00:00.000Z"
  },
  {
    "#": 152,
    "Title": "Mystery of the Dark World",
    "Type": "Filler",
    "Airdate": "1989-04-12T07:00:00.000Z"
  },
  {
    "#": 153,
    "Title": "The End, The Beginning",
    "Type": "Filler",
    "Airdate": "1989-04-19T07:00:00.000Z"
  }
],

'G9VHN9PPW': //DRAGON BALL Z
[
  {
    "#": 1,
    "Title": "The New Threat",
    "Type": "Manga Canon",
    "Airdate": "1989-04-26T07:00:00.000Z"
  },
  {
    "#": 2,
    "Title": "Reunions",
    "Type": "Manga Canon",
    "Airdate": "1989-05-09T07:00:00.000Z"
  },
  {
    "#": 3,
    "Title": "Unlikely Alliance",
    "Type": "Manga Canon",
    "Airdate": "1989-05-10T07:00:00.000Z"
  },
  {
    "#": 4,
    "Title": "Piccolo’s Plan",
    "Type": "Manga Canon",
    "Airdate": "1989-05-17T07:00:00.000Z"
  },
  {
    "#": 5,
    "Title": "Gohan's Rage",
    "Type": "Manga Canon",
    "Airdate": "1989-05-24T07:00:00.000Z"
  },
  {
    "#": 6,
    "Title": "No Time Like the Present",
    "Type": "Manga Canon",
    "Airdate": "1989-06-07T07:00:00.000Z"
  },
  {
    "#": 7,
    "Title": "Day 1",
    "Type": "Manga Canon",
    "Airdate": "1989-06-14T07:00:00.000Z"
  },
  {
    "#": 8,
    "Title": "Gohan Goes Bananas!",
    "Type": "Manga Canon",
    "Airdate": "1989-06-21T07:00:00.000Z"
  },
  {
    "#": 9,
    "Title": "The Strangest Robot",
    "Type": "Filler",
    "Airdate": "1989-06-28T07:00:00.000Z"
  },
  {
    "#": 10,
    "Title": "A New Friend",
    "Type": "Filler",
    "Airdate": "1989-07-05T07:00:00.000Z"
  },
  {
    "#": 11,
    "Title": "Terror on Arlia",
    "Type": "Mixed Canon/Filler",
    "Airdate": "1989-07-12T07:00:00.000Z"
  },
  {
    "#": 12,
    "Title": "Global Training",
    "Type": "Filler",
    "Airdate": "1989-07-19T07:00:00.000Z"
  },
  {
    "#": 13,
    "Title": "Goz and Mez",
    "Type": "Filler",
    "Airdate": "1989-07-26T07:00:00.000Z"
  },
  {
    "#": 14,
    "Title": "Princess Snake",
    "Type": "Filler",
    "Airdate": "1989-08-02T07:00:00.000Z"
  },
  {
    "#": 15,
    "Title": "Dueling Piccolos",
    "Type": "Filler",
    "Airdate": "1989-08-09T07:00:00.000Z"
  },
  {
    "#": 16,
    "Title": "Plight of the Children",
    "Type": "Filler",
    "Airdate": "1989-08-16T07:00:00.000Z"
  },
  {
    "#": 17,
    "Title": "Pendulum Room Peril",
    "Type": "Mixed Canon/Filler",
    "Airdate": "1989-08-30T07:00:00.000Z"
  },
  {
    "#": 18,
    "Title": "The End of Snake Way",
    "Type": "Mixed Canon/Filler",
    "Airdate": "1989-09-06T07:00:00.000Z"
  },
  {
    "#": 19,
    "Title": "Defying Gravity",
    "Type": "Manga Canon",
    "Airdate": "1989-09-13T07:00:00.000Z"
  },
  {
    "#": 20,
    "Title": "Goku’s Ancestors",
    "Type": "Mixed Canon/Filler",
    "Airdate": "1989-09-20T07:00:00.000Z"
  },
  {
    "#": 21,
    "Title": "Counting Down",
    "Type": "Manga Canon",
    "Airdate": "1989-09-27T07:00:00.000Z"
  },
  {
    "#": 22,
    "Title": "The Darkest Day",
    "Type": "Manga Canon",
    "Airdate": "1989-10-11T07:00:00.000Z"
  },
  {
    "#": 23,
    "Title": "Saibamen Attack!",
    "Type": "Manga Canon",
    "Airdate": "1989-10-18T07:00:00.000Z"
  },
  {
    "#": 24,
    "Title": "The Power of Nappa",
    "Type": "Manga Canon",
    "Airdate": "1989-10-25T07:00:00.000Z"
  },
  {
    "#": 25,
    "Title": "Sacrifice",
    "Type": "Manga Canon",
    "Airdate": "1989-10-31T08:00:00.000Z"
  },
  {
    "#": 26,
    "Title": "Nappa's Rampage",
    "Type": "Manga Canon",
    "Airdate": "1989-11-08T08:00:00.000Z"
  },
  {
    "#": 27,
    "Title": "Nimbus Speed",
    "Type": "Manga Canon",
    "Airdate": "1989-11-22T08:00:00.000Z"
  },
  {
    "#": 28,
    "Title": "Goku's Arrival",
    "Type": "Manga Canon",
    "Airdate": "1989-11-29T08:00:00.000Z"
  },
  {
    "#": 29,
    "Title": "Lesson Number One",
    "Type": "Manga Canon",
    "Airdate": "1989-12-06T08:00:00.000Z"
  },
  {
    "#": 30,
    "Title": "Goku vs. Vegeta",
    "Type": "Manga Canon",
    "Airdate": "1989-12-13T08:00:00.000Z"
  },
  {
    "#": 31,
    "Title": "Saiyan Sized Secret",
    "Type": "Manga Canon",
    "Airdate": "1989-12-20T08:00:00.000Z"
  },
  {
    "#": 32,
    "Title": "Spirit Bomb Away!",
    "Type": "Manga Canon",
    "Airdate": "1990-01-17T08:00:00.000Z"
  },
  {
    "#": 33,
    "Title": "Hero in the Shadows",
    "Type": "Manga Canon",
    "Airdate": "1990-01-24T08:00:00.000Z"
  },
  {
    "#": 34,
    "Title": "Krillin's Offensive",
    "Type": "Manga Canon",
    "Airdate": "1990-01-31T08:00:00.000Z"
  },
  {
    "#": 35,
    "Title": "Mercy",
    "Type": "Manga Canon",
    "Airdate": "1990-02-07T08:00:00.000Z"
  },
  {
    "#": 36,
    "Title": "Picking Up the Pieces",
    "Type": "Manga Canon",
    "Airdate": "1990-02-14T08:00:00.000Z"
  },
  {
    "#": 37,
    "Title": "Plans for Departure",
    "Type": "Manga Canon",
    "Airdate": "1990-02-21T08:00:00.000Z"
  },
  {
    "#": 38,
    "Title": "Nursing Wounds",
    "Type": "Manga Canon",
    "Airdate": "1990-02-28T08:00:00.000Z"
  },
  {
    "#": 39,
    "Title": "Friends or Foes?",
    "Type": "Filler",
    "Airdate": "1990-03-07T08:00:00.000Z"
  },
  {
    "#": 40,
    "Title": "Held Captive",
    "Type": "Filler",
    "Airdate": "1990-03-14T08:00:00.000Z"
  },
  {
    "#": 41,
    "Title": "Friends or Foes?",
    "Type": "Filler",
    "Airdate": "1990-03-21T08:00:00.000Z"
  },
  {
    "#": 42,
    "Title": "The Search Continues",
    "Type": "Filler",
    "Airdate": "1990-04-04T07:00:00.000Z"
  },
  {
    "#": 43,
    "Title": "A Friendly Surprise",
    "Type": "Filler",
    "Airdate": "1990-04-11T07:00:00.000Z"
  },
  {
    "#": 44,
    "Title": "Brood of Evil",
    "Type": "Mixed Canon/Filler",
    "Airdate": "1990-04-18T07:00:00.000Z"
  },
  {
    "#": 45,
    "Title": "Frieza Strikes!",
    "Type": "Manga Canon",
    "Airdate": "1990-04-25T07:00:00.000Z"
  },
  {
    "#": 46,
    "Title": "Defying Orders",
    "Type": "Manga Canon",
    "Airdate": "1990-05-02T07:00:00.000Z"
  },
  {
    "#": 47,
    "Title": "Namek's Defense",
    "Type": "Manga Canon",
    "Airdate": "1990-05-09T07:00:00.000Z"
  },
  {
    "#": 48,
    "Title": "The Hunted",
    "Type": "Manga Canon",
    "Airdate": "1990-05-16T07:00:00.000Z"
  },
  {
    "#": 49,
    "Title": "The Prince Fights Back",
    "Type": "Manga Canon",
    "Airdate": "1990-05-23T07:00:00.000Z"
  },
  {
    "#": 50,
    "Title": "Unexpected Problem",
    "Type": "Manga Canon",
    "Airdate": "1990-05-30T07:00:00.000Z"
  },
  {
    "#": 51,
    "Title": "Vegeta has a Ball",
    "Type": "Manga Canon",
    "Airdate": "1990-06-06T07:00:00.000Z"
  },
  {
    "#": 52,
    "Title": "The Past and Future",
    "Type": "Manga Canon",
    "Airdate": "1990-06-20T07:00:00.000Z"
  },
  {
    "#": 53,
    "Title": "Zarbon's Surprise",
    "Type": "Manga Canon",
    "Airdate": "1990-06-27T07:00:00.000Z"
  },
  {
    "#": 54,
    "Title": "Guru's Gift",
    "Type": "Manga Canon",
    "Airdate": "1990-07-04T07:00:00.000Z"
  },
  {
    "#": 55,
    "Title": "Piccolo vs. Everyone",
    "Type": "Manga Canon",
    "Airdate": "1990-07-18T07:00:00.000Z"
  },
  {
    "#": 56,
    "Title": "Zarbon's Mission",
    "Type": "Manga Canon",
    "Airdate": "1990-08-01T07:00:00.000Z"
  },
  {
    "#": 57,
    "Title": "Gohan, the Hunted",
    "Type": "Manga Canon",
    "Airdate": "1990-08-08T07:00:00.000Z"
  },
  {
    "#": 58,
    "Title": "Unknown Enemies",
    "Type": "Manga Canon",
    "Airdate": "1990-08-22T07:00:00.000Z"
  },
  {
    "#": 59,
    "Title": "Destination: Guru",
    "Type": "Manga Canon",
    "Airdate": "1990-08-29T07:00:00.000Z"
  },
  {
    "#": 60,
    "Title": "Bulma's Big Day",
    "Type": "Manga Canon",
    "Airdate": "1990-09-05T07:00:00.000Z"
  },
  {
    "#": 61,
    "Title": "Hidden Power",
    "Type": "Manga Canon",
    "Airdate": "1990-09-12T07:00:00.000Z"
  },
  {
    "#": 62,
    "Title": "New Ally, New Problem",
    "Type": "Manga Canon",
    "Airdate": "1990-09-19T07:00:00.000Z"
  },
  {
    "#": 63,
    "Title": "Guldo's Mind Binds",
    "Type": "Manga Canon",
    "Airdate": "1990-09-26T07:00:00.000Z"
  },
  {
    "#": 64,
    "Title": "Recoome Unleashed",
    "Type": "Manga Canon",
    "Airdate": "1990-10-24T07:00:00.000Z"
  },
  {
    "#": 65,
    "Title": "Let the Battle Begin",
    "Type": "Manga Canon",
    "Airdate": "1990-10-31T08:00:00.000Z"
  },
  {
    "#": 66,
    "Title": "Goku's New Power",
    "Type": "Manga Canon",
    "Airdate": "1990-11-07T08:00:00.000Z"
  },
  {
    "#": 67,
    "Title": "A Legend Revealed",
    "Type": "Manga Canon",
    "Airdate": "1990-11-14T08:00:00.000Z"
  },
  {
    "#": 68,
    "Title": "Ginyu Assault",
    "Type": "Manga Canon",
    "Airdate": "1990-11-21T08:00:00.000Z"
  },
  {
    "#": 69,
    "Title": "Incredible Force!",
    "Type": "Manga Canon",
    "Airdate": "1990-11-28T08:00:00.000Z"
  },
  {
    "#": 70,
    "Title": "Frieza Approaches",
    "Type": "Manga Canon",
    "Airdate": "1990-12-05T08:00:00.000Z"
  },
  {
    "#": 71,
    "Title": "Goku is Ginyu and Ginyu is Goku",
    "Type": "Manga Canon",
    "Airdate": "1990-12-12T08:00:00.000Z"
  },
  {
    "#": 72,
    "Title": "Calling the Eternal Dragon",
    "Type": "Manga Canon",
    "Airdate": "1990-12-19T08:00:00.000Z"
  },
  {
    "#": 73,
    "Title": "Gohan-Defeat Your Dad!",
    "Type": "Manga Canon",
    "Airdate": "1991-01-16T08:00:00.000Z"
  },
  {
    "#": 74,
    "Title": "Captain Ginyu... The Frog",
    "Type": "Manga Canon",
    "Airdate": "1991-01-23T08:00:00.000Z"
  },
  {
    "#": 75,
    "Title": "Password is Porunga",
    "Type": "Manga Canon",
    "Airdate": "1991-01-30T08:00:00.000Z"
  },
  {
    "#": 76,
    "Title": "Piccolo's Return",
    "Type": "Manga Canon",
    "Airdate": "1991-02-06T08:00:00.000Z"
  },
  {
    "#": 77,
    "Title": "The Fusion",
    "Type": "Manga Canon",
    "Airdate": "1991-02-13T08:00:00.000Z"
  },
  {
    "#": 78,
    "Title": "Fighting Power: One Million??",
    "Type": "Manga Canon",
    "Airdate": "1991-02-20T08:00:00.000Z"
  },
  {
    "#": 79,
    "Title": "Gohan Attacks",
    "Type": "Manga Canon",
    "Airdate": "1991-02-27T08:00:00.000Z"
  },
  {
    "#": 80,
    "Title": "Piccolo the Super-Namek",
    "Type": "Manga Canon",
    "Airdate": "1991-03-06T08:00:00.000Z"
  },
  {
    "#": 81,
    "Title": "Deja vu",
    "Type": "Manga Canon",
    "Airdate": "1991-03-13T08:00:00.000Z"
  },
  {
    "#": 82,
    "Title": "Frieza's Second Transformation",
    "Type": "Manga Canon",
    "Airdate": "1991-03-20T08:00:00.000Z"
  },
  {
    "#": 83,
    "Title": "Another Transformation?",
    "Type": "Manga Canon",
    "Airdate": "1991-03-27T08:00:00.000Z"
  },
  {
    "#": 84,
    "Title": "Dende's Demise",
    "Type": "Manga Canon",
    "Airdate": "1991-04-03T08:00:00.000Z"
  },
  {
    "#": 85,
    "Title": "The Renewed Goku",
    "Type": "Manga Canon",
    "Airdate": "1991-04-10T07:00:00.000Z"
  },
  {
    "#": 86,
    "Title": "The End of Vegeta",
    "Type": "Manga Canon",
    "Airdate": "1991-04-17T07:00:00.000Z"
  },
  {
    "#": 87,
    "Title": "The Ultimate Battle",
    "Type": "Manga Canon",
    "Airdate": "1991-04-24T07:00:00.000Z"
  },
  {
    "#": 88,
    "Title": "Clash of the Super Powers",
    "Type": "Manga Canon",
    "Airdate": "1991-05-01T07:00:00.000Z"
  },
  {
    "#": 89,
    "Title": "Frieza's Boast",
    "Type": "Manga Canon",
    "Airdate": "1991-05-08T07:00:00.000Z"
  },
  {
    "#": 90,
    "Title": "Bold and Fearless",
    "Type": "Manga Canon",
    "Airdate": "1991-05-15T07:00:00.000Z"
  },
  {
    "#": 91,
    "Title": "Embodiment of Fire",
    "Type": "Manga Canon",
    "Airdate": "1991-05-22T07:00:00.000Z"
  },
  {
    "#": 92,
    "Title": "Trump Card",
    "Type": "Manga Canon",
    "Airdate": "1991-05-29T07:00:00.000Z"
  },
  {
    "#": 93,
    "Title": "Keep the Chance Alive",
    "Type": "Manga Canon",
    "Airdate": "1991-06-05T07:00:00.000Z"
  },
  {
    "#": 94,
    "Title": "Power of the Spirit",
    "Type": "Manga Canon",
    "Airdate": "1991-06-12T07:00:00.000Z"
  },
  {
    "#": 95,
    "Title": "Transformed at Last",
    "Type": "Manga Canon",
    "Airdate": "1991-06-19T07:00:00.000Z"
  },
  {
    "#": 96,
    "Title": "Explosion of Anger",
    "Type": "Manga Canon",
    "Airdate": "1991-06-26T07:00:00.000Z"
  },
  {
    "#": 97,
    "Title": "Namek's Destruction",
    "Type": "Manga Canon",
    "Airdate": "1991-07-03T07:00:00.000Z"
  },
  {
    "#": 98,
    "Title": "A Final Attack",
    "Type": "Manga Canon",
    "Airdate": "1991-07-10T07:00:00.000Z"
  },
  {
    "#": 99,
    "Title": "Approaching Destruction",
    "Type": "Manga Canon",
    "Airdate": "1991-07-17T07:00:00.000Z"
  },
  {
    "#": 100,
    "Title": "Gohan Returns",
    "Type": "Filler",
    "Airdate": "1991-07-24T07:00:00.000Z"
  },
  {
    "#": 101,
    "Title": "The Last Wish",
    "Type": "Manga Canon",
    "Airdate": "1991-07-31T07:00:00.000Z"
  },
  {
    "#": 102,
    "Title": "Duel on a Vanishing Planet",
    "Type": "Filler",
    "Airdate": "1991-08-07T07:00:00.000Z"
  },
  {
    "#": 103,
    "Title": "Pathos of Frieza",
    "Type": "Manga Canon",
    "Airdate": "1991-08-14T07:00:00.000Z"
  },
  {
    "#": 104,
    "Title": "Frieza Defeated!!",
    "Type": "Manga Canon",
    "Airdate": "1991-08-21T07:00:00.000Z"
  },
  {
    "#": 105,
    "Title": "Mighty Blast of Rage",
    "Type": "Manga Canon",
    "Airdate": "1991-08-28T07:00:00.000Z"
  },
  {
    "#": 106,
    "Title": "Namek's Explosion... Goku's End?",
    "Type": "Manga Canon",
    "Airdate": "1991-09-04T07:00:00.000Z"
  },
  {
    "#": 107,
    "Title": "Goku's Alive!!",
    "Type": "Manga Canon",
    "Airdate": "1991-09-11T07:00:00.000Z"
  },
  {
    "#": 108,
    "Title": "The Heavens Tremble",
    "Type": "Filler",
    "Airdate": "1991-09-18T07:00:00.000Z"
  },
  {
    "#": 109,
    "Title": "Black Fog of Terror",
    "Type": "Filler",
    "Airdate": "1991-09-25T07:00:00.000Z"
  },
  {
    "#": 110,
    "Title": "Battle in Kami's Lookout",
    "Type": "Filler",
    "Airdate": "1991-10-02T07:00:00.000Z"
  },
  {
    "#": 111,
    "Title": "Fight With Piccolo",
    "Type": "Filler",
    "Airdate": "1991-10-09T07:00:00.000Z"
  },
  {
    "#": 112,
    "Title": "Call For Restoration",
    "Type": "Filler",
    "Airdate": "1991-10-16T07:00:00.000Z"
  },
  {
    "#": 113,
    "Title": "Suicidal Course",
    "Type": "Filler",
    "Airdate": "1991-10-23T07:00:00.000Z"
  },
  {
    "#": 114,
    "Title": "Extreme Measures",
    "Type": "Filler",
    "Airdate": "1991-10-30T08:00:00.000Z"
  },
  {
    "#": 115,
    "Title": "The World Awakens",
    "Type": "Filler",
    "Airdate": "1991-11-06T08:00:00.000Z"
  },
  {
    "#": 116,
    "Title": "Brief Chance for Victory",
    "Type": "Filler",
    "Airdate": "1991-11-13T08:00:00.000Z"
  },
  {
    "#": 117,
    "Title": "Krillin's Proposal",
    "Type": "Filler",
    "Airdate": "1991-11-20T08:00:00.000Z"
  },
  {
    "#": 118,
    "Title": "Frieza's Counterattack",
    "Type": "Manga Canon",
    "Airdate": "1991-11-27T08:00:00.000Z"
  },
  {
    "#": 119,
    "Title": "The Mysterious Youth",
    "Type": "Manga Canon",
    "Airdate": "1991-12-04T08:00:00.000Z"
  },
  {
    "#": 120,
    "Title": "Another Super Saiyan?",
    "Type": "Manga Canon",
    "Airdate": "1991-12-11T08:00:00.000Z"
  },
  {
    "#": 121,
    "Title": "Welcome Back Goku",
    "Type": "Manga Canon",
    "Airdate": "1991-12-18T08:00:00.000Z"
  },
  {
    "#": 122,
    "Title": "Mystery Revealed",
    "Type": "Manga Canon",
    "Airdate": "1992-01-15T08:00:00.000Z"
  },
  {
    "#": 123,
    "Title": "Goku's Special Technique",
    "Type": "Manga Canon",
    "Airdate": "1992-01-22T08:00:00.000Z"
  },
  {
    "#": 124,
    "Title": "Z Warriors Prepare",
    "Type": "Filler",
    "Airdate": "1992-01-29T08:00:00.000Z"
  },
  {
    "#": 125,
    "Title": "Goku's Ordeal",
    "Type": "Filler",
    "Airdate": "1992-02-05T08:00:00.000Z"
  },
  {
    "#": 126,
    "Title": "The Androids Appear",
    "Type": "Manga Canon",
    "Airdate": "1992-02-12T08:00:00.000Z"
  },
  {
    "#": 127,
    "Title": "A Handy Trick",
    "Type": "Manga Canon",
    "Airdate": "1992-02-19T08:00:00.000Z"
  },
  {
    "#": 128,
    "Title": "Double Trouble for Goku",
    "Type": "Manga Canon",
    "Airdate": "1992-02-26T08:00:00.000Z"
  },
  {
    "#": 129,
    "Title": "Upgrade to Super Saiyan",
    "Type": "Manga Canon",
    "Airdate": "1992-03-04T08:00:00.000Z"
  },
  {
    "#": 130,
    "Title": "The Secret of Dr. Gero",
    "Type": "Manga Canon",
    "Airdate": "1992-03-11T08:00:00.000Z"
  },
  {
    "#": 131,
    "Title": "More Androids?!",
    "Type": "Manga Canon",
    "Airdate": "1992-03-18T08:00:00.000Z"
  },
  {
    "#": 132,
    "Title": "Follow Dr. Gero",
    "Type": "Manga Canon",
    "Airdate": "1992-03-25T08:00:00.000Z"
  },
  {
    "#": 133,
    "Title": "Nightmare Comes True",
    "Type": "Manga Canon",
    "Airdate": "1992-04-01T08:00:00.000Z"
  },
  {
    "#": 134,
    "Title": "Goku's Assassin",
    "Type": "Manga Canon",
    "Airdate": "1992-04-08T07:00:00.000Z"
  },
  {
    "#": 135,
    "Title": "Deadly Beauty",
    "Type": "Manga Canon",
    "Airdate": "1992-04-15T07:00:00.000Z"
  },
  {
    "#": 136,
    "Title": "No Match for the Androids",
    "Type": "Manga Canon",
    "Airdate": "1992-04-22T07:00:00.000Z"
  },
  {
    "#": 137,
    "Title": "Last Ditch Effort",
    "Type": "Manga Canon",
    "Airdate": "1992-04-29T07:00:00.000Z"
  },
  {
    "#": 138,
    "Title": "Closing In",
    "Type": "Manga Canon",
    "Airdate": "1992-05-06T07:00:00.000Z"
  },
  {
    "#": 139,
    "Title": "Unwelcome Discovery",
    "Type": "Manga Canon",
    "Airdate": "1992-05-13T07:00:00.000Z"
  },
  {
    "#": 140,
    "Title": "Seized with Fear",
    "Type": "Manga Canon",
    "Airdate": "1992-05-20T07:00:00.000Z"
  },
  {
    "#": 141,
    "Title": "The Reunion",
    "Type": "Manga Canon",
    "Airdate": "1992-05-27T07:00:00.000Z"
  },
  {
    "#": 142,
    "Title": "Borrowed Powers",
    "Type": "Manga Canon",
    "Airdate": "1992-06-03T07:00:00.000Z"
  },
  {
    "#": 143,
    "Title": "His Name is Cell",
    "Type": "Manga Canon",
    "Airdate": "1992-06-10T07:00:00.000Z"
  },
  {
    "#": 144,
    "Title": "Piccolo's Folly",
    "Type": "Manga Canon",
    "Airdate": "1992-06-17T07:00:00.000Z"
  },
  {
    "#": 145,
    "Title": "Laboratory Basement",
    "Type": "Manga Canon",
    "Airdate": "1992-06-24T07:00:00.000Z"
  },
  {
    "#": 146,
    "Title": "Our Hero Awakes",
    "Type": "Manga Canon",
    "Airdate": "1992-07-01T07:00:00.000Z"
  },
  {
    "#": 147,
    "Title": "Time Chamber",
    "Type": "Manga Canon",
    "Airdate": "1992-07-08T07:00:00.000Z"
  },
  {
    "#": 148,
    "Title": "The Monster Is Coming",
    "Type": "Manga Canon",
    "Airdate": "1992-07-15T07:00:00.000Z"
  },
  {
    "#": 149,
    "Title": "He's Here",
    "Type": "Manga Canon",
    "Airdate": "1992-07-22T07:00:00.000Z"
  },
  {
    "#": 150,
    "Title": "Up to Piccolo",
    "Type": "Manga Canon",
    "Airdate": "1992-07-29T07:00:00.000Z"
  },
  {
    "#": 151,
    "Title": "Silent Warrior",
    "Type": "Manga Canon",
    "Airdate": "1992-08-05T07:00:00.000Z"
  },
  {
    "#": 152,
    "Title": "Say Goodbye, 17",
    "Type": "Manga Canon",
    "Airdate": "1992-08-12T07:00:00.000Z"
  },
  {
    "#": 153,
    "Title": "Sacrifice",
    "Type": "Manga Canon",
    "Airdate": "1992-08-19T07:00:00.000Z"
  },
  {
    "#": 154,
    "Title": "Saiyans Emerge",
    "Type": "Manga Canon",
    "Airdate": "1992-08-26T07:00:00.000Z"
  },
  {
    "#": 155,
    "Title": "Super Vegeta",
    "Type": "Manga Canon",
    "Airdate": "1992-09-02T07:00:00.000Z"
  },
  {
    "#": 156,
    "Title": "Bow to the Prince",
    "Type": "Manga Canon",
    "Airdate": "1992-09-09T07:00:00.000Z"
  },
  {
    "#": 157,
    "Title": "Hour of Temptation",
    "Type": "Manga Canon",
    "Airdate": "1992-09-16T07:00:00.000Z"
  },
  {
    "#": 158,
    "Title": "Krillin's Decision.",
    "Type": "Manga Canon",
    "Airdate": "1992-09-23T07:00:00.000Z"
  },
  {
    "#": 159,
    "Title": "The Last Defense",
    "Type": "Manga Canon",
    "Airdate": "1992-09-30T07:00:00.000Z"
  },
  {
    "#": 160,
    "Title": "Cell is Complete",
    "Type": "Manga Canon",
    "Airdate": "1992-10-14T07:00:00.000Z"
  },
  {
    "#": 161,
    "Title": "Vegeta Must Pay",
    "Type": "Manga Canon",
    "Airdate": "1992-10-21T07:00:00.000Z"
  },
  {
    "#": 162,
    "Title": "Trunks Ascends",
    "Type": "Manga Canon",
    "Airdate": "1992-10-28T08:00:00.000Z"
  },
  {
    "#": 163,
    "Title": "Saving Throw",
    "Type": "Manga Canon",
    "Airdate": "1992-11-04T08:00:00.000Z"
  },
  {
    "#": 164,
    "Title": "Ghosts from Tomorrow",
    "Type": "Manga Canon",
    "Airdate": "1992-11-11T08:00:00.000Z"
  },
  {
    "#": 165,
    "Title": "The Cell Games",
    "Type": "Manga Canon",
    "Airdate": "1992-11-18T08:00:00.000Z"
  },
  {
    "#": 166,
    "Title": "What is the Tournament?",
    "Type": "Manga Canon",
    "Airdate": "1992-11-25T08:00:00.000Z"
  },
  {
    "#": 167,
    "Title": "The Doomsday Broadcast",
    "Type": "Manga Canon",
    "Airdate": "1992-12-02T08:00:00.000Z"
  },
  {
    "#": 168,
    "Title": "Meet Me in the Ring",
    "Type": "Manga Canon",
    "Airdate": "1992-12-09T08:00:00.000Z"
  },
  {
    "#": 169,
    "Title": "No Worries Here",
    "Type": "Manga Canon",
    "Airdate": "1992-12-16T08:00:00.000Z"
  },
  {
    "#": 170,
    "Title": "A Girl Named Lime",
    "Type": "Filler",
    "Airdate": "1993-01-13T08:00:00.000Z"
  },
  {
    "#": 171,
    "Title": "Memories of Gohan",
    "Type": "Filler",
    "Airdate": "1993-01-20T08:00:00.000Z"
  },
  {
    "#": 172,
    "Title": "A New Guardian",
    "Type": "Manga Canon",
    "Airdate": "1993-01-27T08:00:00.000Z"
  },
  {
    "#": 173,
    "Title": "Dende's Dragon",
    "Type": "Manga Canon",
    "Airdate": "1993-02-03T08:00:00.000Z"
  },
  {
    "#": 174,
    "Title": "The Puzzle of General Tao",
    "Type": "Filler",
    "Airdate": "1993-02-10T08:00:00.000Z"
  },
  {
    "#": 175,
    "Title": "The Games Begin",
    "Type": "Manga Canon",
    "Airdate": "1993-02-17T08:00:00.000Z"
  },
  {
    "#": 176,
    "Title": "Losers Fight First",
    "Type": "Manga Canon",
    "Airdate": "1993-03-03T08:00:00.000Z"
  },
  {
    "#": 177,
    "Title": "Goku vs. Cell",
    "Type": "Manga Canon",
    "Airdate": "1993-03-10T08:00:00.000Z"
  },
  {
    "#": 178,
    "Title": "Cell's Bag of Tricks",
    "Type": "Manga Canon",
    "Airdate": "1993-03-17T08:00:00.000Z"
  },
  {
    "#": 179,
    "Title": "No More Rules",
    "Type": "Manga Canon",
    "Airdate": "1993-03-31T08:00:00.000Z"
  },
  {
    "#": 180,
    "Title": "The Fight is Over",
    "Type": "Manga Canon",
    "Airdate": "1993-04-07T07:00:00.000Z"
  },
  {
    "#": 181,
    "Title": "Faith in a Boy",
    "Type": "Manga Canon",
    "Airdate": "1993-04-14T07:00:00.000Z"
  },
  {
    "#": 182,
    "Title": "Gohan's Plea",
    "Type": "Manga Canon",
    "Airdate": "1993-04-21T07:00:00.000Z"
  },
  {
    "#": 183,
    "Title": "Android Explosion",
    "Type": "Manga Canon",
    "Airdate": "1993-04-28T07:00:00.000Z"
  },
  {
    "#": 184,
    "Title": "Cell Juniors Attack!",
    "Type": "Manga Canon",
    "Airdate": "1993-05-05T07:00:00.000Z"
  },
  {
    "#": 185,
    "Title": "Awakening",
    "Type": "Manga Canon",
    "Airdate": "1993-05-12T07:00:00.000Z"
  },
  {
    "#": 186,
    "Title": "The Unstoppable Gohan",
    "Type": "Manga Canon",
    "Airdate": "1993-05-19T07:00:00.000Z"
  },
  {
    "#": 187,
    "Title": "Cell's Break Down",
    "Type": "Manga Canon",
    "Airdate": "1993-05-26T07:00:00.000Z"
  },
  {
    "#": 188,
    "Title": "A Hero's Farewell",
    "Type": "Manga Canon",
    "Airdate": "1993-06-02T07:00:00.000Z"
  },
  {
    "#": 189,
    "Title": "Cell Returns!",
    "Type": "Manga Canon",
    "Airdate": "1993-06-16T07:00:00.000Z"
  },
  {
    "#": 190,
    "Title": "The Horror Won't End",
    "Type": "Manga Canon",
    "Airdate": "1993-06-23T07:00:00.000Z"
  },
  {
    "#": 191,
    "Title": "Save the World",
    "Type": "Manga Canon",
    "Airdate": "1993-06-30T07:00:00.000Z"
  },
  {
    "#": 192,
    "Title": "Goku's Decision",
    "Type": "Manga Canon",
    "Airdate": "1993-07-07T07:00:00.000Z"
  },
  {
    "#": 193,
    "Title": "One More Wish",
    "Type": "Manga Canon",
    "Airdate": "1993-07-14T07:00:00.000Z"
  },
  {
    "#": 194,
    "Title": "Free the Future",
    "Type": "Manga Canon",
    "Airdate": "1993-07-21T07:00:00.000Z"
  },
  {
    "#": 195,
    "Title": "Warriors of the Dead",
    "Type": "Filler",
    "Airdate": "1993-07-28T07:00:00.000Z"
  },
  {
    "#": 196,
    "Title": "Tournament Begins",
    "Type": "Filler",
    "Airdate": "1993-08-11T07:00:00.000Z"
  },
  {
    "#": 197,
    "Title": "Water Fight",
    "Type": "Filler",
    "Airdate": "1993-08-18T07:00:00.000Z"
  },
  {
    "#": 198,
    "Title": "Final Round",
    "Type": "Filler",
    "Airdate": "1993-08-25T07:00:00.000Z"
  },
  {
    "#": 199,
    "Title": "Goku vs. Pikkon",
    "Type": "Filler",
    "Airdate": "1993-09-01T07:00:00.000Z"
  },
  {
    "#": 200,
    "Title": "Gohan Goes to High School",
    "Type": "Manga Canon",
    "Airdate": "1993-09-08T07:00:00.000Z"
  },
  {
    "#": 201,
    "Title": "I am Saiyaman!",
    "Type": "Manga Canon",
    "Airdate": "1993-09-15T07:00:00.000Z"
  },
  {
    "#": 202,
    "Title": "Gohan's First Date",
    "Type": "Filler",
    "Airdate": "1993-09-29T07:00:00.000Z"
  },
  {
    "#": 203,
    "Title": "Rescue Videl",
    "Type": "Filler",
    "Airdate": "1993-10-20T07:00:00.000Z"
  },
  {
    "#": 204,
    "Title": "Blackmail",
    "Type": "Mixed Canon/Filler",
    "Airdate": "1993-10-27T07:00:00.000Z"
  },
  {
    "#": 205,
    "Title": "I'll Fight Too!",
    "Type": "Manga Canon",
    "Airdate": "1993-11-03T08:00:00.000Z"
  },
  {
    "#": 206,
    "Title": "The Newest Super Saiyan",
    "Type": "Manga Canon",
    "Airdate": "1993-11-10T08:00:00.000Z"
  },
  {
    "#": 207,
    "Title": "Take Flight, Videl",
    "Type": "Manga Canon",
    "Airdate": "1993-11-17T08:00:00.000Z"
  },
  {
    "#": 208,
    "Title": "Gather for the Tournament",
    "Type": "Manga Canon",
    "Airdate": "1993-11-24T08:00:00.000Z"
  },
  {
    "#": 209,
    "Title": "Camera Shy",
    "Type": "Manga Canon",
    "Airdate": "1993-12-08T08:00:00.000Z"
  },
  {
    "#": 210,
    "Title": "The World Tournament",
    "Type": "Manga Canon",
    "Airdate": "1993-12-15T08:00:00.000Z"
  },
  {
    "#": 211,
    "Title": "Trunks vs. Goten",
    "Type": "Manga Canon",
    "Airdate": "1993-12-22T08:00:00.000Z"
  },
  {
    "#": 212,
    "Title": "Best of the Boys",
    "Type": "Manga Canon",
    "Airdate": "1994-01-12T08:00:00.000Z"
  },
  {
    "#": 213,
    "Title": "Big Trouble, Little Trunks",
    "Type": "Manga Canon",
    "Airdate": "1994-01-19T08:00:00.000Z"
  },
  {
    "#": 214,
    "Title": "Who Will Fight Who?",
    "Type": "Manga Canon",
    "Airdate": "1994-01-26T08:00:00.000Z"
  },
  {
    "#": 215,
    "Title": "Forfeit of Piccolo",
    "Type": "Manga Canon",
    "Airdate": "1994-02-02T08:00:00.000Z"
  },
  {
    "#": 216,
    "Title": "A Dark and Secret Power",
    "Type": "Manga Canon",
    "Airdate": "1994-02-09T08:00:00.000Z"
  },
  {
    "#": 217,
    "Title": "Videl Is Crushed",
    "Type": "Manga Canon",
    "Airdate": "1994-02-16T08:00:00.000Z"
  },
  {
    "#": 218,
    "Title": "Identities Revealed",
    "Type": "Manga Canon",
    "Airdate": "1994-02-23T08:00:00.000Z"
  },
  {
    "#": 219,
    "Title": "Energy Drain",
    "Type": "Manga Canon",
    "Airdate": "1994-03-02T08:00:00.000Z"
  },
  {
    "#": 220,
    "Title": "The Wizard's Curse",
    "Type": "Manga Canon",
    "Airdate": "1994-03-09T08:00:00.000Z"
  },
  {
    "#": 221,
    "Title": "King of the Demons",
    "Type": "Manga Canon",
    "Airdate": "1994-03-16T08:00:00.000Z"
  },
  {
    "#": 222,
    "Title": "Vegeta Attacks",
    "Type": "Manga Canon",
    "Airdate": "1994-03-23T08:00:00.000Z"
  },
  {
    "#": 223,
    "Title": "Next Up, Goku",
    "Type": "Manga Canon",
    "Airdate": "1994-04-13T07:00:00.000Z"
  },
  {
    "#": 224,
    "Title": "Battle Supreme",
    "Type": "Manga Canon",
    "Airdate": "1994-04-20T07:00:00.000Z"
  },
  {
    "#": 225,
    "Title": "Eighteen Unmasks",
    "Type": "Manga Canon",
    "Airdate": "1994-04-27T07:00:00.000Z"
  },
  {
    "#": 226,
    "Title": "Pay to Win",
    "Type": "Manga Canon",
    "Airdate": "1994-05-04T07:00:00.000Z"
  },
  {
    "#": 227,
    "Title": "Heart of a Villain",
    "Type": "Manga Canon",
    "Airdate": "1994-05-18T07:00:00.000Z"
  },
  {
    "#": 228,
    "Title": "The Dark Prince Returns",
    "Type": "Manga Canon",
    "Airdate": "1994-05-25T07:00:00.000Z"
  },
  {
    "#": 229,
    "Title": "Vegeta's Pride",
    "Type": "Mixed Canon/Filler",
    "Airdate": "1994-06-15T07:00:00.000Z"
  },
  {
    "#": 230,
    "Title": "The Long Awaited Fight",
    "Type": "Manga Canon",
    "Airdate": "1994-06-22T07:00:00.000Z"
  },
  {
    "#": 231,
    "Title": "Magic Ball of Buu",
    "Type": "Manga Canon",
    "Airdate": "1994-06-29T07:00:00.000Z"
  },
  {
    "#": 232,
    "Title": "Buu is Hatched",
    "Type": "Manga Canon",
    "Airdate": "1994-07-06T07:00:00.000Z"
  },
  {
    "#": 233,
    "Title": "The Losses Begin",
    "Type": "Manga Canon",
    "Airdate": "1994-07-13T07:00:00.000Z"
  },
  {
    "#": 234,
    "Title": "The Terror of Mr. Buu",
    "Type": "Manga Canon",
    "Airdate": "1994-07-27T07:00:00.000Z"
  },
  {
    "#": 235,
    "Title": "Meal Time",
    "Type": "Manga Canon",
    "Airdate": "1994-08-03T07:00:00.000Z"
  },
  {
    "#": 236,
    "Title": "The Warrior's Decision",
    "Type": "Manga Canon",
    "Airdate": "1994-08-17T07:00:00.000Z"
  },
  {
    "#": 237,
    "Title": "Final Atonement",
    "Type": "Manga Canon",
    "Airdate": "1994-08-24T07:00:00.000Z"
  },
  {
    "#": 238,
    "Title": "Evil Lives On",
    "Type": "Manga Canon",
    "Airdate": "1994-08-31T07:00:00.000Z"
  },
  {
    "#": 239,
    "Title": "Find the Dragon Balls",
    "Type": "Manga Canon",
    "Airdate": "1994-09-07T07:00:00.000Z"
  },
  {
    "#": 240,
    "Title": "Revival",
    "Type": "Manga Canon",
    "Airdate": "1994-09-21T07:00:00.000Z"
  },
  {
    "#": 241,
    "Title": "Global Announcement",
    "Type": "Manga Canon",
    "Airdate": "1994-09-28T07:00:00.000Z"
  },
  {
    "#": 242,
    "Title": "Learn to Fuse!",
    "Type": "Manga Canon",
    "Airdate": "1994-10-12T07:00:00.000Z"
  },
  {
    "#": 243,
    "Title": "The Z Sword",
    "Type": "Manga Canon",
    "Airdate": "1994-10-19T07:00:00.000Z"
  },
  {
    "#": 244,
    "Title": "Race to Capsule Corp.",
    "Type": "Manga Canon",
    "Airdate": "1994-11-02T08:00:00.000Z"
  },
  {
    "#": 245,
    "Title": "Super Saiyan 3?!",
    "Type": "Manga Canon",
    "Airdate": "1994-11-09T08:00:00.000Z"
  },
  {
    "#": 246,
    "Title": "Buu's Mutiny",
    "Type": "Manga Canon",
    "Airdate": "1994-11-16T08:00:00.000Z"
  },
  {
    "#": 247,
    "Title": "The Fusion Dance",
    "Type": "Manga Canon",
    "Airdate": "1994-11-23T08:00:00.000Z"
  },
  {
    "#": 248,
    "Title": "Goku's Time is Up",
    "Type": "Manga Canon",
    "Airdate": "1994-11-30T08:00:00.000Z"
  },
  {
    "#": 249,
    "Title": "Return to Other World",
    "Type": "Manga Canon",
    "Airdate": "1994-12-07T08:00:00.000Z"
  },
  {
    "#": 250,
    "Title": "Out from the Broken Sword",
    "Type": "Manga Canon",
    "Airdate": "1994-12-14T08:00:00.000Z"
  },
  {
    "#": 251,
    "Title": "Gotenks Is Born",
    "Type": "Mixed Canon/Filler",
    "Airdate": "1994-12-21T08:00:00.000Z"
  },
  {
    "#": 252,
    "Title": "Unlikely Friendship",
    "Type": "Manga Canon",
    "Airdate": "1995-01-11T08:00:00.000Z"
  },
  {
    "#": 253,
    "Title": "I Kill No More",
    "Type": "Manga Canon",
    "Airdate": "1995-01-25T08:00:00.000Z"
  },
  {
    "#": 254,
    "Title": "The Evil of Men",
    "Type": "Manga Canon",
    "Airdate": "1995-02-01T08:00:00.000Z"
  },
  {
    "#": 255,
    "Title": "Buu Against Buu",
    "Type": "Manga Canon",
    "Airdate": "1995-02-08T08:00:00.000Z"
  },
  {
    "#": 256,
    "Title": "Empty Planet",
    "Type": "Manga Canon",
    "Airdate": "1995-02-15T08:00:00.000Z"
  },
  {
    "#": 257,
    "Title": "Time Struggle",
    "Type": "Manga Canon",
    "Airdate": "1995-02-22T08:00:00.000Z"
  },
  {
    "#": 258,
    "Title": "Super Moves of Gotenks",
    "Type": "Manga Canon",
    "Airdate": "1995-03-01T08:00:00.000Z"
  },
  {
    "#": 259,
    "Title": "Trapped In Forever",
    "Type": "Manga Canon",
    "Airdate": "1995-03-08T08:00:00.000Z"
  },
  {
    "#": 260,
    "Title": "Feeding Frenzy",
    "Type": "Manga Canon",
    "Airdate": "1995-03-15T08:00:00.000Z"
  },
  {
    "#": 261,
    "Title": "Gotenks Is Awesome!",
    "Type": "Manga Canon",
    "Airdate": "1995-03-22T08:00:00.000Z"
  },
  {
    "#": 262,
    "Title": "Unlucky Break",
    "Type": "Manga Canon",
    "Airdate": "1995-04-26T07:00:00.000Z"
  },
  {
    "#": 263,
    "Title": "A Whole New Gohan",
    "Type": "Manga Canon",
    "Airdate": "1995-05-03T07:00:00.000Z"
  },
  {
    "#": 264,
    "Title": "Search for Survivors",
    "Type": "Manga Canon",
    "Airdate": "1995-05-17T07:00:00.000Z"
  },
  {
    "#": 265,
    "Title": "Majin-Buu Transforms",
    "Type": "Manga Canon",
    "Airdate": "1995-05-24T07:00:00.000Z"
  },
  {
    "#": 266,
    "Title": "The Old Kai's Weapon",
    "Type": "Manga Canon",
    "Airdate": "1995-05-31T07:00:00.000Z"
  },
  {
    "#": 267,
    "Title": "Ready to Fuse?",
    "Type": "Manga Canon",
    "Airdate": "1995-06-07T07:00:00.000Z"
  },
  {
    "#": 268,
    "Title": "Union of Rivals",
    "Type": "Manga Canon",
    "Airdate": "1995-06-28T07:00:00.000Z"
  },
  {
    "#": 269,
    "Title": "Meet Vegito",
    "Type": "Manga Canon",
    "Airdate": "1995-07-05T07:00:00.000Z"
  },
  {
    "#": 270,
    "Title": "Rip in the Universe",
    "Type": "Manga Canon",
    "Airdate": "1995-07-12T07:00:00.000Z"
  },
  {
    "#": 271,
    "Title": "Vegito... Downsized",
    "Type": "Manga Canon",
    "Airdate": "1995-07-19T07:00:00.000Z"
  },
  {
    "#": 272,
    "Title": "The Incredible Fighting Candy",
    "Type": "Manga Canon",
    "Airdate": "1995-07-26T07:00:00.000Z"
  },
  {
    "#": 273,
    "Title": "The Innards of Buu",
    "Type": "Manga Canon",
    "Airdate": "1995-08-02T07:00:00.000Z"
  },
  {
    "#": 274,
    "Title": "Mind Trap",
    "Type": "Filler",
    "Airdate": "1995-08-09T07:00:00.000Z"
  },
  {
    "#": 275,
    "Title": "Deadly Vision",
    "Type": "Manga Canon",
    "Airdate": "1995-08-16T07:00:00.000Z"
  },
  {
    "#": 276,
    "Title": "Evil Kid Buu!",
    "Type": "Manga Canon",
    "Airdate": "1995-08-23T07:00:00.000Z"
  },
  {
    "#": 277,
    "Title": "End of Earth",
    "Type": "Manga Canon",
    "Airdate": "1995-09-06T07:00:00.000Z"
  },
  {
    "#": 278,
    "Title": "True Saiyans Fight Alone",
    "Type": "Manga Canon",
    "Airdate": "1995-09-13T07:00:00.000Z"
  },
  {
    "#": 279,
    "Title": "Battle for the Universe Begins",
    "Type": "Manga Canon",
    "Airdate": "1995-09-20T07:00:00.000Z"
  },
  {
    "#": 280,
    "Title": "Vegeta's Respect",
    "Type": "Manga Canon",
    "Airdate": "1995-10-18T07:00:00.000Z"
  },
  {
    "#": 281,
    "Title": "Minute of Desperation",
    "Type": "Manga Canon",
    "Airdate": "1995-11-01T08:00:00.000Z"
  },
  {
    "#": 282,
    "Title": "Old Buu Emerges",
    "Type": "Manga Canon",
    "Airdate": "1995-11-08T08:00:00.000Z"
  },
  {
    "#": 283,
    "Title": "Earth Reborn",
    "Type": "Manga Canon",
    "Airdate": "1995-11-15T08:00:00.000Z"
  },
  {
    "#": 284,
    "Title": "Call to Action",
    "Type": "Manga Canon",
    "Airdate": "1995-11-22T08:00:00.000Z"
  },
  {
    "#": 285,
    "Title": "People of Earth Unite",
    "Type": "Manga Canon",
    "Airdate": "1995-11-29T08:00:00.000Z"
  },
  {
    "#": 286,
    "Title": "Spirit Bomb Triumphant",
    "Type": "Manga Canon",
    "Airdate": "1995-12-13T08:00:00.000Z"
  },
  {
    "#": 287,
    "Title": "Celebrations with Majin Buu",
    "Type": "Mixed Canon/Filler",
    "Airdate": "1995-12-20T08:00:00.000Z"
  },
  {
    "#": 288,
    "Title": "He's Always Late",
    "Type": "Filler",
    "Airdate": "1996-01-10T08:00:00.000Z"
  },
  {
    "#": 289,
    "Title": "Granddaughter Pan",
    "Type": "Manga Canon",
    "Airdate": "1996-01-17T08:00:00.000Z"
  },
  {
    "#": 290,
    "Title": "Buu's Reincarnation",
    "Type": "Manga Canon",
    "Airdate": "1996-01-24T08:00:00.000Z"
  },
  {
    "#": 291,
    "Title": "Goku's Next Journey",
    "Type": "Manga Canon",
    "Airdate": "1996-01-31T08:00:00.000Z"
  }
],

'GR19V7816': //DRAGON BALL SUPER
[
  {
    "#": 1,
    "Title": "The Peace Reward - Who Will Get the 100 Million Zeni?",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2015-07-05T07:00:00.000Z"
  },
  {
    "#": 2,
    "Title": "To the Promised Resort! Vegeta Goes on a Family Trip!?",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2015-07-12T07:00:00.000Z"
  },
  {
    "#": 3,
    "Title": "Where's the Rest of the Dream?! In Search of the Super Saiyan God!",
    "Type": "Manga Canon",
    "Airdate": "2015-07-19T07:00:00.000Z"
  },
  {
    "#": 4,
    "Title": "Aim for the Dragon Balls! Pilaf Gang in Action!",
    "Type": "Filler",
    "Airdate": "2015-08-02T07:00:00.000Z"
  },
  {
    "#": 5,
    "Title": "The Ultimate Fight on King Kai's Planet! Goku Vs the God of Destruction Beerus",
    "Type": "Manga Canon",
    "Airdate": "2015-08-09T07:00:00.000Z"
  },
  {
    "#": 6,
    "Title": "Don't Anger the God of Destruction! Excitement at the Birthday Party",
    "Type": "Manga Canon",
    "Airdate": "2015-08-16T07:00:00.000Z"
  },
  {
    "#": 7,
    "Title": "How Dare You Hurt My Bulma! Vegeta's Sudden, Angry Shift?!",
    "Type": "Manga Canon",
    "Airdate": "2015-08-23T07:00:00.000Z"
  },
  {
    "#": 8,
    "Title": "Goku Arrives! A Last Chance from Beerus Sama?!",
    "Type": "Manga Canon",
    "Airdate": "2015-08-30T07:00:00.000Z"
  },
  {
    "#": 9,
    "Title": "Sorry for the Wait, Beerus Sama. The Super Saiyan God is Finally Born!",
    "Type": "Manga Canon",
    "Airdate": "2015-09-06T07:00:00.000Z"
  },
  {
    "#": 10,
    "Title": "Unleash It, Goku! The Power of the Super Saiyan God!!",
    "Type": "Manga Canon",
    "Airdate": "2015-09-13T07:00:00.000Z"
  },
  {
    "#": 11,
    "Title": "Let's Keep Going, Beerus Sama! Our Battle of Gods!",
    "Type": "Manga Canon",
    "Airdate": "2015-09-20T07:00:00.000Z"
  },
  {
    "#": 12,
    "Title": "The Universe Crumbles?! Clash! God of Destruction Vs. Super Saiyan God",
    "Type": "Manga Canon",
    "Airdate": "2015-09-27T07:00:00.000Z"
  },
  {
    "#": 13,
    "Title": "Goku, Surpass the Super Saiyan God!",
    "Type": "Manga Canon",
    "Airdate": "2015-10-04T07:00:00.000Z"
  },
  {
    "#": 14,
    "Title": "This Is Every Ounce of Power I Have! The Battle of Gods' Conclusion!",
    "Type": "Manga Canon",
    "Airdate": "2015-10-11T07:00:00.000Z"
  },
  {
    "#": 15,
    "Title": "Make a Miracle, Satan the Hero! A Challenge from Outer Space",
    "Type": "Filler",
    "Airdate": "2015-10-18T07:00:00.000Z"
  },
  {
    "#": 16,
    "Title": "Vegeta Becomes an Apprentice?! Winning Whis Over!",
    "Type": "Anime Canon",
    "Airdate": "2015-10-25T07:00:00.000Z"
  },
  {
    "#": 17,
    "Title": "Pan is Born! And Goku Goes on a Training Trip?!",
    "Type": "Anime Canon",
    "Airdate": "2015-11-01T07:00:00.000Z"
  },
  {
    "#": 18,
    "Title": "I'm Here, Too! Training Begins On Beerus' Planet!",
    "Type": "Manga Canon",
    "Airdate": "2015-11-08T08:00:00.000Z"
  },
  {
    "#": 19,
    "Title": "Despair Rises! The Emperor of Evil, Frieza, Resurrected!",
    "Type": "Manga Canon",
    "Airdate": "2015-11-15T08:00:00.000Z"
  },
  {
    "#": 20,
    "Title": "Jaco's Warning! Frieza and His 1000 Troops Approach",
    "Type": "Manga Canon",
    "Airdate": "2015-11-22T08:00:00.000Z"
  },
  {
    "#": 21,
    "Title": "The Start of Revenge! the Malice of Frieza Army Strikes Gohan!",
    "Type": "Manga Canon",
    "Airdate": "2015-11-29T08:00:00.000Z"
  },
  {
    "#": 22,
    "Title": "Change! an Unexpected Return! His Name Is Ginyu!!",
    "Type": "Anime Canon",
    "Airdate": "2015-12-06T08:00:00.000Z"
  },
  {
    "#": 23,
    "Title": "The Earth! Gohan! Absolute Peril! Hurry and Get Here, Son Goku!!",
    "Type": "Manga Canon",
    "Airdate": "2015-12-13T08:00:00.000Z"
  },
  {
    "#": 24,
    "Title": "Clash! Frieza Vs Son Goku - This Is The Result of My Training!",
    "Type": "Manga Canon",
    "Airdate": "2015-12-20T08:00:00.000Z"
  },
  {
    "#": 25,
    "Title": "An All-Out Battle! The Revenge of Golden Frieza",
    "Type": "Manga Canon",
    "Airdate": "2015-12-27T08:00:00.000Z"
  },
  {
    "#": 26,
    "Title": "A Glint of Hope Shines Through in a Crisis! Time to Fight Back, Son Goku!",
    "Type": "Manga Canon",
    "Airdate": "2016-01-10T08:00:00.000Z"
  },
  {
    "#": 27,
    "Title": "The Earth Explodes?! The Deciding Kamehameha",
    "Type": "Manga Canon",
    "Airdate": "2016-01-17T08:00:00.000Z"
  },
  {
    "#": 28,
    "Title": "The God of Destruction from Universe 6 - His Name Is Champa",
    "Type": "Manga Canon",
    "Airdate": "2016-01-24T08:00:00.000Z"
  },
  {
    "#": 29,
    "Title": "The Martial Arts Match Has Been Decided! The Team Captain Is Stronger Than Goku",
    "Type": "Manga Canon",
    "Airdate": "2016-01-31T08:00:00.000Z"
  },
  {
    "#": 30,
    "Title": "A Review Before the 'Martial Arts Match' - Who Are the Last Two Members?!",
    "Type": "Manga Canon",
    "Airdate": "2016-02-07T08:00:00.000Z"
  },
  {
    "#": 31,
    "Title": "Off to Zuno Sama's! Find Out Where Super Dragon Balls Are!",
    "Type": "Manga Canon",
    "Airdate": "2016-02-14T08:00:00.000Z"
  },
  {
    "#": 32,
    "Title": "The Match Begins! Let's All Go to the Nameless Planet!",
    "Type": "Manga Canon",
    "Airdate": "2016-02-21T08:00:00.000Z"
  },
  {
    "#": 33,
    "Title": "Behold, Universe 6! This Is the Super Saiyan? Son Goku!",
    "Type": "Manga Canon",
    "Airdate": "2016-02-28T08:00:00.000Z"
  },
  {
    "#": 34,
    "Title": "Piccolo Vs. Frost - Put It All on the Special Beam Cannon!",
    "Type": "Manga Canon",
    "Airdate": "2016-03-06T08:00:00.000Z"
  },
  {
    "#": 35,
    "Title": "Turn Rage into Strength! Vegeta's Full-On Battle",
    "Type": "Manga Canon",
    "Airdate": "2016-03-20T07:00:00.000Z"
  },
  {
    "#": 36,
    "Title": "An Unexpected Desperate Battle! Vegeta's Furious Explosion!",
    "Type": "Manga Canon",
    "Airdate": "2016-03-27T07:00:00.000Z"
  },
  {
    "#": 37,
    "Title": "Don't Forget Your Saiyan Pride! Vegeta Vs the Saiyan of Universe 6",
    "Type": "Manga Canon",
    "Airdate": "2016-04-03T07:00:00.000Z"
  },
  {
    "#": 38,
    "Title": "The Ultimate Warrior of Universe 6! Assassin Hit Appears!!",
    "Type": "Manga Canon",
    "Airdate": "2016-04-10T07:00:00.000Z"
  },
  {
    "#": 39,
    "Title": "The Advanced 'Time-Skip' Fights Back?! Will it Come Forth? Goku's New Technique!",
    "Type": "Manga Canon",
    "Airdate": "2016-04-17T07:00:00.000Z"
  },
  {
    "#": 40,
    "Title": "At Last, It Comes to an End! Is the Winner Beerus? Or is it Champa?",
    "Type": "Manga Canon",
    "Airdate": "2016-04-24T07:00:00.000Z"
  },
  {
    "#": 41,
    "Title": "Come, God of Dragons - And Pretty Please Grant My Wish!",
    "Type": "Manga Canon",
    "Airdate": "2016-05-01T07:00:00.000Z"
  },
  {
    "#": 42,
    "Title": "Trouble at the Victory Celebration! Showdown at Last?! Monaka vs. Son Goku",
    "Type": "Filler",
    "Airdate": "2016-05-08T07:00:00.000Z"
  },
  {
    "#": 43,
    "Title": "Goku's 'Ki' is Out of Control?! Looking After Pan is A Lot of Trouble",
    "Type": "Filler",
    "Airdate": "2016-05-15T07:00:00.000Z"
  },
  {
    "#": 44,
    "Title": "Seal of Planet Potofu - Secret of the Superhuman Water is Unleashed",
    "Type": "Filler",
    "Airdate": "2016-05-22T07:00:00.000Z"
  },
  {
    "#": 45,
    "Title": "Vegeta Disappears?! The Threat Of Duplicated Vegeta!",
    "Type": "Filler",
    "Airdate": "2016-05-29T07:00:00.000Z"
  },
  {
    "#": 46,
    "Title": "Goku vs. Duplicated Vegeta! Who's Gonna Win?!",
    "Type": "Filler",
    "Airdate": "2016-06-05T07:00:00.000Z"
  },
  {
    "#": 47,
    "Title": "An SOS from the Future! A Dark New Enemy Emerges!!",
    "Type": "Manga Canon",
    "Airdate": "2016-06-12T07:00:00.000Z"
  },
  {
    "#": 48,
    "Title": "Hope!! Once More Awaken in the Present, Trunks",
    "Type": "Manga Canon",
    "Airdate": "2016-06-19T07:00:00.000Z"
  },
  {
    "#": 49,
    "Title": "A Message from the Future - Goku Black Strikes!",
    "Type": "Manga Canon",
    "Airdate": "2016-06-26T07:00:00.000Z"
  },
  {
    "#": 50,
    "Title": "Goku Vs Black! The Closed Path to the Future",
    "Type": "Anime Canon",
    "Airdate": "2016-07-03T07:00:00.000Z"
  },
  {
    "#": 51,
    "Title": "Feelings That Travel Beyond Time - Trunks and Mai",
    "Type": "Manga Canon",
    "Airdate": "2016-07-10T07:00:00.000Z"
  },
  {
    "#": 52,
    "Title": "Teacher and Student Reunited - Son Gohan and \"Future\" Trunks",
    "Type": "Anime Canon",
    "Airdate": "2016-07-17T07:00:00.000Z"
  },
  {
    "#": 53,
    "Title": "Uncover Black's Identity! To the Sacred World of the Kais!",
    "Type": "Manga Canon",
    "Airdate": "2016-07-31T07:00:00.000Z"
  },
  {
    "#": 54,
    "Title": "The One Who Inherits the Saiyan Blood - Trunk's Resolve",
    "Type": "Manga Canon",
    "Airdate": "2016-08-07T07:00:00.000Z"
  },
  {
    "#": 55,
    "Title": "I Want to See Son Goku - Zen-Oh Sama's Summoning!",
    "Type": "Manga Canon",
    "Airdate": "2016-08-21T07:00:00.000Z"
  },
  {
    "#": 56,
    "Title": "Rematch With Goku Black! Super Saiyan Rosé Appears",
    "Type": "Manga Canon",
    "Airdate": "2016-08-28T07:00:00.000Z"
  },
  {
    "#": 57,
    "Title": "The God With the Immortal Body - Zamasu Descends",
    "Type": "Manga Canon",
    "Airdate": "2016-09-04T07:00:00.000Z"
  },
  {
    "#": 58,
    "Title": "Zamasu and Black - The Mystery of the Two Deepens",
    "Type": "Manga Canon",
    "Airdate": "2016-09-11T07:00:00.000Z"
  },
  {
    "#": 59,
    "Title": "Protect Supreme Kai Gowasu — Destroy Zamasu!",
    "Type": "Manga Canon",
    "Airdate": "2016-09-25T07:00:00.000Z"
  },
  {
    "#": 60,
    "Title": "Back to the Future - Goku Black's Identity is Revealed!!",
    "Type": "Manga Canon",
    "Airdate": "2016-10-02T07:00:00.000Z"
  },
  {
    "#": 61,
    "Title": "Zamasu's Ambition — The Awful \"Zero Mortal Plan\" Is Revealed",
    "Type": "Manga Canon",
    "Airdate": "2016-10-09T07:00:00.000Z"
  },
  {
    "#": 62,
    "Title": "I'll Protect the World! Trunks’ Furious Super Power Explodes!!",
    "Type": "Manga Canon",
    "Airdate": "2016-10-16T07:00:00.000Z"
  },
  {
    "#": 63,
    "Title": "Don’t Disrespect Saiyan Cells! Vegeta’s Heroic Battle Begins!!",
    "Type": "Manga Canon",
    "Airdate": "2016-10-23T07:00:00.000Z"
  },
  {
    "#": 64,
    "Title": "Revere Him! Praise Him! Fusion Zamasu's Explosive Birth!!",
    "Type": "Manga Canon",
    "Airdate": "2016-10-30T07:00:00.000Z"
  },
  {
    "#": 65,
    "Title": "Is This the Final Judgement?! The Ultimate Power of the Absolute God",
    "Type": "Manga Canon",
    "Airdate": "2016-11-06T07:00:00.000Z"
  },
  {
    "#": 66,
    "Title": "The Climactic Battle! The Miraculous Power of a Relentless Warrior!",
    "Type": "Manga Canon",
    "Airdate": "2016-11-13T08:00:00.000Z"
  },
  {
    "#": 67,
    "Title": "With New Hope!! In Our Hearts - Farewell, Trunks",
    "Type": "Manga Canon",
    "Airdate": "2016-11-20T08:00:00.000Z"
  },
  {
    "#": 68,
    "Title": "Come Forth, Shenron! Whose Wish Will Be Granted?!",
    "Type": "Filler",
    "Airdate": "2016-11-27T08:00:00.000Z"
  },
  {
    "#": 69,
    "Title": "Goku vs Arale! A Ridiculous Battle Will End The Earth?!",
    "Type": "Filler",
    "Airdate": "2016-12-04T08:00:00.000Z"
  },
  {
    "#": 70,
    "Title": "Champa's Challenge! This Time We Fight With Baseball!",
    "Type": "Filler",
    "Airdate": "2016-12-11T08:00:00.000Z"
  },
  {
    "#": 71,
    "Title": "The Death of Goku! The Guaranteed Assassination Mission",
    "Type": "Anime Canon",
    "Airdate": "2016-12-18T08:00:00.000Z"
  },
  {
    "#": 72,
    "Title": "Will There Be A Counterattack?! The Invisible Killing Strike!!",
    "Type": "Anime Canon",
    "Airdate": "2016-12-25T08:00:00.000Z"
  },
  {
    "#": 73,
    "Title": "Gohan's Misfortune! An Unexpected Great Saiyaman Movie?!",
    "Type": "Filler",
    "Airdate": "2017-01-08T08:00:00.000Z"
  },
  {
    "#": 74,
    "Title": "For the Ones He Loves! The Unbeatable Great Saiyaman!!",
    "Type": "Filler",
    "Airdate": "2017-01-15T08:00:00.000Z"
  },
  {
    "#": 75,
    "Title": "Goku and Krillin Back to the Old Training Grounds",
    "Type": "Filler",
    "Airdate": "2017-01-22T08:00:00.000Z"
  },
  {
    "#": 76,
    "Title": "Defeat These Terrifying Enemies! Krillin's Fighting Spirit Returns!",
    "Type": "Filler",
    "Airdate": "2017-01-29T08:00:00.000Z"
  },
  {
    "#": 77,
    "Title": "Let's Do it, Zen-Oh Sama! The All-Universe Martial Arts Tournament!!",
    "Type": "Manga Canon",
    "Airdate": "2017-02-05T08:00:00.000Z"
  },
  {
    "#": 78,
    "Title": "The Gods of Every Universe In Shock?! Losers Erased In The Tournament Of Power",
    "Type": "Anime Canon",
    "Airdate": "2017-02-12T08:00:00.000Z"
  },
  {
    "#": 79,
    "Title": "Universe 9’s Basil The Kicker VS Universe 7’s Majin Buu!!",
    "Type": "Anime Canon",
    "Airdate": "2017-02-19T08:00:00.000Z"
  },
  {
    "#": 80,
    "Title": "Awaken Your Sleeping Battle Spirit! Son Gohan's Fight!!",
    "Type": "Anime Canon",
    "Airdate": "2017-02-26T08:00:00.000Z"
  },
  {
    "#": 81,
    "Title": "Bergamo The Crusher VS Son Goku! Which One Wields The Limitless Power!?",
    "Type": "Anime Canon",
    "Airdate": "2017-03-05T08:00:00.000Z"
  },
  {
    "#": 82,
    "Title": "Never Forgive Son Goku! Toppo The Warrior Of Justice Intrudes!!",
    "Type": "Manga Canon",
    "Airdate": "2017-03-19T07:00:00.000Z"
  },
  {
    "#": 83,
    "Title": "Form the Universe 7 Representing Team! Who are the Strongest Ten?!",
    "Type": "Manga Canon",
    "Airdate": "2017-03-26T07:00:00.000Z"
  },
  {
    "#": 84,
    "Title": "Son Goku The Recruiter Invites Krillin And No. 18",
    "Type": "Manga Canon",
    "Airdate": "2017-04-02T07:00:00.000Z"
  },
  {
    "#": 85,
    "Title": "The Universes Begin To Make Their Moves Their Individual Motives",
    "Type": "Manga Canon",
    "Airdate": "2017-04-09T07:00:00.000Z"
  },
  {
    "#": 86,
    "Title": "Fists Cross For The First Time! Android #17 Vs Son Goku!!",
    "Type": "Manga Canon",
    "Airdate": "2017-04-16T07:00:00.000Z"
  },
  {
    "#": 87,
    "Title": "Hunt the Poachers! Goku and No. 17's United Front!!",
    "Type": "Manga Canon",
    "Airdate": "2017-04-23T07:00:00.000Z"
  },
  {
    "#": 88,
    "Title": "Gohan And Piccolo Teacher And Pupil Clash In Max Training!",
    "Type": "Manga Canon",
    "Airdate": "2017-04-30T07:00:00.000Z"
  },
  {
    "#": 89,
    "Title": "An Unknown Beauty Appears! The Tenshin-style Dojo's Mystery?!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2017-05-07T07:00:00.000Z"
  },
  {
    "#": 90,
    "Title": "See The Wall That Must Be Passed! Goku Vs Gohan",
    "Type": "Anime Canon",
    "Airdate": "2017-05-14T07:00:00.000Z"
  },
  {
    "#": 91,
    "Title": "Which Universe Will Survive?! The Strongest Warriors Are Gathering!!",
    "Type": "Anime Canon",
    "Airdate": "2017-05-21T07:00:00.000Z"
  },
  {
    "#": 92,
    "Title": "Emergency Development! The Incomplete Ten Members!!",
    "Type": "Manga Canon",
    "Airdate": "2017-05-28T07:00:00.000Z"
  },
  {
    "#": 93,
    "Title": "You're The Tenth Warrior! Goku Goes To See Frieza!!",
    "Type": "Manga Canon",
    "Airdate": "2017-06-04T07:00:00.000Z"
  },
  {
    "#": 94,
    "Title": "The Emperor of Evil Returns! A Reception of Mysterious Assassins?!",
    "Type": "Anime Canon",
    "Airdate": "2017-06-11T07:00:00.000Z"
  },
  {
    "#": 95,
    "Title": "The Worst! The Most Evil! Frieza's Rampage!!",
    "Type": "Anime Canon",
    "Airdate": "2017-06-18T07:00:00.000Z"
  },
  {
    "#": 96,
    "Title": "The Time Is Here! To The World Of Void For The Fate Of The Universe!!",
    "Type": "Manga Canon",
    "Airdate": "2017-06-25T07:00:00.000Z"
  },
  {
    "#": 97,
    "Title": "Survive! The Tournament Of Power Begins At Last!!",
    "Type": "Manga Canon",
    "Airdate": "2017-07-02T07:00:00.000Z"
  },
  {
    "#": 98,
    "Title": "Oh, Uncertainty! A Universe Despairs!!",
    "Type": "Manga Canon",
    "Airdate": "2017-07-09T07:00:00.000Z"
  },
  {
    "#": 99,
    "Title": "Show Them! Krillin's True Power!!",
    "Type": "Manga Canon",
    "Airdate": "2017-07-16T07:00:00.000Z"
  },
  {
    "#": 100,
    "Title": "Out Of Control! The Savage Berserker Awakens!!",
    "Type": "Manga Canon",
    "Airdate": "2017-07-23T07:00:00.000Z"
  },
  {
    "#": 101,
    "Title": "The Impending Warriors of Justice! The Pride Troopers!!",
    "Type": "Manga Canon",
    "Airdate": "2017-07-30T07:00:00.000Z"
  },
  {
    "#": 102,
    "Title": "The Power of Love Explodes?! Universe 2's Little Witch Warriors!!",
    "Type": "Manga Canon",
    "Airdate": "2017-08-06T07:00:00.000Z"
  },
  {
    "#": 103,
    "Title": "Gohan, Show No Mercy! Showdown With Universe 10!!",
    "Type": "Manga Canon",
    "Airdate": "2017-08-13T07:00:00.000Z"
  },
  {
    "#": 104,
    "Title": "The Ultimate High Speed Battle Begins! Goku and Hit Join Forces!!",
    "Type": "Manga Canon",
    "Airdate": "2017-08-20T07:00:00.000Z"
  },
  {
    "#": 105,
    "Title": "A Desperate Battle! Master Roshi's Sacrifice!!",
    "Type": "Manga Canon",
    "Airdate": "2017-08-27T07:00:00.000Z"
  },
  {
    "#": 106,
    "Title": "Find Him! Death Match With An Invisible Attacker!!",
    "Type": "Manga Canon",
    "Airdate": "2017-09-03T07:00:00.000Z"
  },
  {
    "#": 107,
    "Title": "Revenge \"F\"! The Cunning Trap?!",
    "Type": "Manga Canon",
    "Airdate": "2017-09-17T07:00:00.000Z"
  },
  {
    "#": 108,
    "Title": "Frieza and Frost! Conjoined Malice?!",
    "Type": "Manga Canon",
    "Airdate": "2017-09-24T07:00:00.000Z"
  },
  {
    "#": 109,
    "Title": "The Ultimate Enemy Approaches Goku! Now, Let Loose! The Killer Spirit Bomb!!",
    "Type": "Manga Canon",
    "Airdate": "2017-10-08T07:00:00.000Z"
  },
  {
    "#": 110,
    "Title": "Son Goku Wakes! New Level of The Awakened!!",
    "Type": "Manga Canon",
    "Airdate": "2017-10-08T07:00:00.000Z"
  },
  {
    "#": 111,
    "Title": "The Surreal Supreme Battle! Hit vs Jiren!!",
    "Type": "Manga Canon",
    "Airdate": "2017-10-15T07:00:00.000Z"
  },
  {
    "#": 112,
    "Title": "A Saiyan's Vow! Vegeta's Resoution!!",
    "Type": "Manga Canon",
    "Airdate": "2017-10-22T07:00:00.000Z"
  },
  {
    "#": 113,
    "Title": "With Great Joy! The Repeat Battle-Crazy Saiyan Fight!!",
    "Type": "Manga Canon",
    "Airdate": "2017-10-29T07:00:00.000Z"
  },
  {
    "#": 114,
    "Title": "Intimidating Passion! The Birth of a New Super Warrior!!",
    "Type": "Manga Canon",
    "Airdate": "2017-11-05T07:00:00.000Z"
  },
  {
    "#": 115,
    "Title": "Goku vs Kefla! Super Saiyan Blue Defeated?!",
    "Type": "Manga Canon",
    "Airdate": "2017-11-12T08:00:00.000Z"
  },
  {
    "#": 116,
    "Title": "The Sign of a Comeback! Ultra Instinct's Huge Explosion!!",
    "Type": "Manga Canon",
    "Airdate": "2017-11-19T08:00:00.000Z"
  },
  {
    "#": 117,
    "Title": "Showdown of Love! Androids vs Universe 2!!",
    "Type": "Manga Canon",
    "Airdate": "2017-11-26T08:00:00.000Z"
  },
  {
    "#": 118,
    "Title": "Accelerated Tragedy - Vanishing Universes...",
    "Type": "Manga Canon",
    "Airdate": "2017-12-03T08:00:00.000Z"
  },
  {
    "#": 119,
    "Title": "Unavoidable?! The Fierce Stealth Attack!!",
    "Type": "Manga Canon",
    "Airdate": "2017-12-10T08:00:00.000Z"
  },
  {
    "#": 120,
    "Title": "The Perfect Survival Tactic! Universe 3's Menacing Assassin!!",
    "Type": "Manga Canon",
    "Airdate": "2017-12-17T08:00:00.000Z"
  },
  {
    "#": 121,
    "Title": "All-Out War! The Ultimate Quadruple Merge vs Universe 7's Full-Scale Attack!!",
    "Type": "Manga Canon",
    "Airdate": "2017-12-24T08:00:00.000Z"
  },
  {
    "#": 122,
    "Title": "For One's Own Pride! Vegeta's Challenge to be the Strongest!!",
    "Type": "Manga Canon",
    "Airdate": "2018-01-07T08:00:00.000Z"
  },
  {
    "#": 123,
    "Title": "Body and Soul, Full Power Release! Goku and Vegeta!!",
    "Type": "Manga Canon",
    "Airdate": "2018-01-14T08:00:00.000Z"
  },
  {
    "#": 124,
    "Title": "The Fiercely Overwhelming Assault! Gohan's Last Stand!!",
    "Type": "Manga Canon",
    "Airdate": "2018-01-21T08:00:00.000Z"
  },
  {
    "#": 125,
    "Title": "With Imposing Presence! God of Destruction Toppo Descends!!",
    "Type": "Manga Canon",
    "Airdate": "2018-01-28T08:00:00.000Z"
  },
  {
    "#": 126,
    "Title": "Surpass Even a God! Vegeta's Desperate Blow!!",
    "Type": "Manga Canon",
    "Airdate": "2018-02-04T08:00:00.000Z"
  },
  {
    "#": 127,
    "Title": "The Approaching Wall! The Final Barrier of Hope!!",
    "Type": "Manga Canon",
    "Airdate": "2018-02-11T08:00:00.000Z"
  },
  {
    "#": 128,
    "Title": "Noble Pride to the End! Vegeta Falls!!",
    "Type": "Manga Canon",
    "Airdate": "2018-02-18T08:00:00.000Z"
  },
  {
    "#": 129,
    "Title": "Limit Super Surpassed! Ultra Instinct Mastered!!",
    "Type": "Manga Canon",
    "Airdate": "2018-03-04T08:00:00.000Z"
  },
  {
    "#": 130,
    "Title": "The Greatest Showdown of All Time! The Ultimate Survival Battle!!",
    "Type": "Manga Canon",
    "Airdate": "2018-03-18T07:00:00.000Z"
  },
  {
    "#": 131,
    "Title": "The Miraculous Conclusion! Farewell, Goku! Until We Meet Again!!",
    "Type": "Manga Canon",
    "Airdate": "2018-03-25T07:00:00.000Z"
  }
],

'G4PH0WXXM': //DRAGON BALL GT
[
  {
    "#": 1,
    "Title": "A Devastating Wish",
    "Type": "Anime Canon",
    "Airdate": "1996-02-07T08:00:00.000Z"
  },
  {
    "#": 2,
    "Title": "Pan Blasts Off",
    "Type": "Anime Canon",
    "Airdate": "1996-02-14T08:00:00.000Z"
  },
  {
    "#": 3,
    "Title": "Terror on Imecka",
    "Type": "Anime Canon",
    "Airdate": "1996-02-21T08:00:00.000Z"
  },
  {
    "#": 4,
    "Title": "The Most Wanted List",
    "Type": "Anime Canon",
    "Airdate": "1996-02-28T08:00:00.000Z"
  },
  {
    "#": 5,
    "Title": "Goku vs. Ledgic",
    "Type": "Anime Canon",
    "Airdate": "1996-03-06T08:00:00.000Z"
  },
  {
    "#": 6,
    "Title": "Like Pulling Teeth",
    "Type": "Anime Canon",
    "Airdate": "1996-03-13T08:00:00.000Z"
  },
  {
    "#": 7,
    "Title": "Trunks, the Bride",
    "Type": "Anime Canon",
    "Airdate": "1996-03-20T08:00:00.000Z"
  },
  {
    "#": 8,
    "Title": "Whisker Power",
    "Type": "Anime Canon",
    "Airdate": "1996-04-17T07:00:00.000Z"
  },
  {
    "#": 9,
    "Title": "Lord Luud",
    "Type": "Anime Canon",
    "Airdate": "1996-04-24T07:00:00.000Z"
  },
  {
    "#": 10,
    "Title": "Dance and Attack",
    "Type": "Anime Canon",
    "Airdate": "1996-05-01T07:00:00.000Z"
  },
  {
    "#": 11,
    "Title": "Lord Luud's Curse",
    "Type": "Anime Canon",
    "Airdate": "1996-05-08T07:00:00.000Z"
  },
  {
    "#": 12,
    "Title": "The Last Oracle of Luud",
    "Type": "Anime Canon",
    "Airdate": "1996-05-15T07:00:00.000Z"
  },
  {
    "#": 13,
    "Title": "The Man Behind the Curtain",
    "Type": "Anime Canon",
    "Airdate": "1996-05-22T07:00:00.000Z"
  },
  {
    "#": 14,
    "Title": "The Battle Within",
    "Type": "Anime Canon",
    "Airdate": "1996-06-05T07:00:00.000Z"
  },
  {
    "#": 15,
    "Title": "Beginning of the End",
    "Type": "Anime Canon",
    "Airdate": "1996-06-12T07:00:00.000Z"
  },
  {
    "#": 16,
    "Title": "Giru's Checkered Past",
    "Type": "Anime Canon",
    "Airdate": "1996-06-19T07:00:00.000Z"
  },
  {
    "#": 17,
    "Title": "Pan's Gambit",
    "Type": "Anime Canon",
    "Airdate": "1996-06-26T07:00:00.000Z"
  },
  {
    "#": 18,
    "Title": "Unexpected Power",
    "Type": "Anime Canon",
    "Airdate": "1996-07-10T07:00:00.000Z"
  },
  {
    "#": 19,
    "Title": "A General Uprising",
    "Type": "Anime Canon",
    "Airdate": "1996-07-17T07:00:00.000Z"
  },
  {
    "#": 20,
    "Title": "The Source of Rilldo's Power",
    "Type": "Anime Canon",
    "Airdate": "1996-07-24T07:00:00.000Z"
  },
  {
    "#": 21,
    "Title": "A Secret Revealed",
    "Type": "Anime Canon",
    "Airdate": "1996-08-14T07:00:00.000Z"
  },
  {
    "#": 22,
    "Title": "The Baby Secret",
    "Type": "Anime Canon",
    "Airdate": "1996-08-21T07:00:00.000Z"
  },
  {
    "#": 23,
    "Title": "Hidden Danger",
    "Type": "Anime Canon",
    "Airdate": "1996-08-26T07:00:00.000Z"
  },
  {
    "#": 24,
    "Title": "Discovering the Truth",
    "Type": "Anime Canon",
    "Airdate": "1996-09-04T07:00:00.000Z"
  },
  {
    "#": 25,
    "Title": "Baby's Arrival",
    "Type": "Anime Canon",
    "Airdate": "1996-10-16T07:00:00.000Z"
  },
  {
    "#": 26,
    "Title": "Saiyan Hunting",
    "Type": "Anime Canon",
    "Airdate": "1996-10-30T08:00:00.000Z"
  },
  {
    "#": 27,
    "Title": "The Attack on Vegeta",
    "Type": "Anime Canon",
    "Airdate": "1996-11-06T08:00:00.000Z"
  },
  {
    "#": 28,
    "Title": "A Worldwide Problem",
    "Type": "Anime Canon",
    "Airdate": "1996-11-13T08:00:00.000Z"
  },
  {
    "#": 29,
    "Title": "The Fall of The Saiyans",
    "Type": "Anime Canon",
    "Airdate": "1996-11-27T08:00:00.000Z"
  },
  {
    "#": 30,
    "Title": "The Game After Life",
    "Type": "Anime Canon",
    "Airdate": "1996-12-04T08:00:00.000Z"
  },
  {
    "#": 31,
    "Title": "Collapse From Within",
    "Type": "Anime Canon",
    "Airdate": "1996-12-11T08:00:00.000Z"
  },
  {
    "#": 32,
    "Title": "The Return of Uub",
    "Type": "Anime Canon",
    "Airdate": "1997-01-08T08:00:00.000Z"
  },
  {
    "#": 33,
    "Title": "The Tail's Tale",
    "Type": "Anime Canon",
    "Airdate": "1997-01-15T08:00:00.000Z"
  },
  {
    "#": 34,
    "Title": "Back in the Game",
    "Type": "Anime Canon",
    "Airdate": "1997-01-22T08:00:00.000Z"
  },
  {
    "#": 35,
    "Title": "Goku's Ascension",
    "Type": "Anime Canon",
    "Airdate": "1997-01-29T08:00:00.000Z"
  },
  {
    "#": 36,
    "Title": "The Tuffle Gorilla Attacks!",
    "Type": "Anime Canon",
    "Airdate": "1997-02-05T08:00:00.000Z"
  },
  {
    "#": 37,
    "Title": "Old Kai's Last Stand",
    "Type": "Anime Canon",
    "Airdate": "1997-02-12T08:00:00.000Z"
  },
  {
    "#": 38,
    "Title": "Family Bonds",
    "Type": "Anime Canon",
    "Airdate": "1997-02-19T08:00:00.000Z"
  },
  {
    "#": 39,
    "Title": "Baby Put to Rest",
    "Type": "Anime Canon",
    "Airdate": "1997-02-26T08:00:00.000Z"
  },
  {
    "#": 40,
    "Title": "Piccolo's Decision",
    "Type": "Anime Canon",
    "Airdate": "1997-03-05T08:00:00.000Z"
  },
  {
    "#": 41,
    "Title": "Curtain Call",
    "Type": "Anime Canon",
    "Airdate": "1997-03-12T08:00:00.000Z"
  },
  {
    "#": 42,
    "Title": "A Dangerous Union",
    "Type": "Anime Canon",
    "Airdate": "1997-04-16T07:00:00.000Z"
  },
  {
    "#": 43,
    "Title": "The Resurrection of Cell and Frieza",
    "Type": "Anime Canon",
    "Airdate": "1997-04-23T07:00:00.000Z"
  },
  {
    "#": 44,
    "Title": "17 Times 2",
    "Type": "Anime Canon",
    "Airdate": "1997-04-30T07:00:00.000Z"
  },
  {
    "#": 45,
    "Title": "Piccolo's Best Bet",
    "Type": "Anime Canon",
    "Airdate": "1997-05-14T07:00:00.000Z"
  },
  {
    "#": 46,
    "Title": "Raising the Stakes",
    "Type": "Anime Canon",
    "Airdate": "1997-05-28T07:00:00.000Z"
  },
  {
    "#": 47,
    "Title": "The Greatest Surprise",
    "Type": "Anime Canon",
    "Airdate": "1997-06-04T07:00:00.000Z"
  },
  {
    "#": 48,
    "Title": "The Shadow Dragons",
    "Type": "Anime Canon",
    "Airdate": "1997-06-11T07:00:00.000Z"
  },
  {
    "#": 49,
    "Title": "The Two-Star Dragon",
    "Type": "Anime Canon",
    "Airdate": "1997-06-18T07:00:00.000Z"
  },
  {
    "#": 50,
    "Title": "The Five-Star Dragon",
    "Type": "Anime Canon",
    "Airdate": "1997-06-25T07:00:00.000Z"
  },
  {
    "#": 51,
    "Title": "The Six-Star Dragon",
    "Type": "Anime Canon",
    "Airdate": "1997-07-09T07:00:00.000Z"
  },
  {
    "#": 52,
    "Title": "The Seven-Star Dragon",
    "Type": "Anime Canon",
    "Airdate": "1997-07-09T07:00:00.000Z"
  },
  {
    "#": 53,
    "Title": "Saying Goodbye",
    "Type": "Anime Canon",
    "Airdate": "1997-07-16T07:00:00.000Z"
  },
  {
    "#": 54,
    "Title": "The Four-Star Dragon",
    "Type": "Anime Canon",
    "Airdate": "1997-07-20T07:00:00.000Z"
  },
  {
    "#": 55,
    "Title": "The Heart of the Prince",
    "Type": "Anime Canon",
    "Airdate": "1997-07-30T07:00:00.000Z"
  },
  {
    "#": 56,
    "Title": "The Three-Star Dragon",
    "Type": "Anime Canon",
    "Airdate": "1997-08-06T07:00:00.000Z"
  },
  {
    "#": 57,
    "Title": "The One-Star Dragon",
    "Type": "Anime Canon",
    "Airdate": "1997-08-13T07:00:00.000Z"
  },
  {
    "#": 58,
    "Title": "Shadow Dragons Unite",
    "Type": "Anime Canon",
    "Airdate": "1997-09-24T07:00:00.000Z"
  },
  {
    "#": 59,
    "Title": "Super Saiyan 4 Vegeta",
    "Type": "Anime Canon",
    "Airdate": "1997-10-01T07:00:00.000Z"
  },
  {
    "#": 60,
    "Title": "Super Saiyan 4 Fusion",
    "Type": "Anime Canon",
    "Airdate": "1997-10-08T07:00:00.000Z"
  },
  {
    "#": 61,
    "Title": "The Limits of Power",
    "Type": "Anime Canon",
    "Airdate": "1997-10-15T07:00:00.000Z"
  },
  {
    "#": 62,
    "Title": "Rescue Goku",
    "Type": "Anime Canon",
    "Airdate": "1997-10-22T07:00:00.000Z"
  },
  {
    "#": 63,
    "Title": "Universal Allies",
    "Type": "Anime Canon",
    "Airdate": "1997-11-12T08:00:00.000Z"
  },
  {
    "#": 64,
    "Title": "Until We Meet Again?",
    "Type": "Anime Canon",
    "Airdate": "1997-11-19T08:00:00.000Z"
  },
  {
    "#": 65,
    "Title": "A Hero's Legacy",
    "Type": "Anime Canon",
    "Airdate": "1997-11-26T08:00:00.000Z"
  }
],

'GG5H5XQ35': //DRAGON BALL DAIMA
[
  {
    "#": 1,
    "Title": "DAIMA 1",
    "Type": "Anime Canon",
    "Airdate": "2025-01-01T08:00:00.000Z"
  },
  {
    "#": 2,
    "Title": "DAIMA 2",
    "Type": "Anime Canon",
    "Airdate": "2025-01-08T08:00:00.000Z"
  },
  {
    "#": 3,
    "Title": "DAIMA 3",
    "Type": "Anime Canon",
    "Airdate": "2025-01-15T08:00:00.000Z"
  },
  {
    "#": 4,
    "Title": "DAIMA 4",
    "Type": "Anime Canon",
    "Airdate": "2025-01-22T08:00:00.000Z"
  },
  {
    "#": 5,
    "Title": "DAIMA 5",
    "Type": "Anime Canon",
    "Airdate": "2025-01-29T08:00:00.000Z"
  },
  {
    "#": 6,
    "Title": "DAIMA 6",
    "Type": "Anime Canon",
    "Airdate": "2025-02-05T08:00:00.000Z"
  },
  {
    "#": 7,
    "Title": "DAIMA 7",
    "Type": "Anime Canon",
    "Airdate": "2025-02-12T08:00:00.000Z"
  },
  {
    "#": 8,
    "Title": "DAIMA 8",
    "Type": "Anime Canon",
    "Airdate": "2025-02-19T08:00:00.000Z"
  },
  {
    "#": 9,
    "Title": "DAIMA 9",
    "Type": "Anime Canon",
    "Airdate": "2025-02-26T08:00:00.000Z"
  },
  {
    "#": 10,
    "Title": "DAIMA 10",
    "Type": "Anime Canon",
    "Airdate": "2025-03-05T08:00:00.000Z"
  },
  {
    "#": 11,
    "Title": "DAIMA 11",
    "Type": "Anime Canon",
    "Airdate": "2025-03-12T07:00:00.000Z"
  },
  {
    "#": 12,
    "Title": "DAIMA 12",
    "Type": "Anime Canon",
    "Airdate": "2025-03-19T07:00:00.000Z"
  },
  {
    "#": 13,
    "Title": "DAIMA 13",
    "Type": "Anime Canon",
    "Airdate": "2025-03-26T07:00:00.000Z"
  },
  {
    "#": 14,
    "Title": "DAIMA 14",
    "Type": "Anime Canon",
    "Airdate": "2025-04-02T07:00:00.000Z"
  },
  {
    "#": 15,
    "Title": "DAIMA 15",
    "Type": "Anime Canon",
    "Airdate": "2025-04-09T07:00:00.000Z"
  },
  {
    "#": 16,
    "Title": "DAIMA 16",
    "Type": "Anime Canon",
    "Airdate": "2025-04-16T07:00:00.000Z"
  },
  {
    "#": 17,
    "Title": "DAIMA 17",
    "Type": "Anime Canon",
    "Airdate": "2025-04-23T07:00:00.000Z"
  },
  {
    "#": 18,
    "Title": "DAIMA 18",
    "Type": "Anime Canon",
    "Airdate": "2025-04-30T07:00:00.000Z"
  },
  {
    "#": 19,
    "Title": "DAIMA 19",
    "Type": "Anime Canon",
    "Airdate": "2025-05-07T07:00:00.000Z"
  },
  {
    "#": 20,
    "Title": "DAIMA 20",
    "Type": "Anime Canon",
    "Airdate": "2025-05-14T07:00:00.000Z"
  }
],

'GYQ4MKDZ6': //GINTAMA
[
  {
    "#": 1,
    "Title": "You Guys!! Do You Even Have a Gintama? (Part 1)",
    "Type": "Filler",
    "Airdate": "2006-04-04T07:00:00.000Z"
  },
  {
    "#": 2,
    "Title": "You Guys!! Do You Even Have a Gintama? (Part 2)",
    "Type": "Filler",
    "Airdate": "2006-04-04T07:00:00.000Z"
  },
  {
    "#": 3,
    "Title": "Nobody with Naturally Wavy Hair Can Be That Bad",
    "Type": "Manga Canon",
    "Airdate": "2006-04-11T07:00:00.000Z"
  },
  {
    "#": 4,
    "Title": "Watch Out! Weekly Shonen Jump Sometimes Comes Out on Saturdays!",
    "Type": "Manga Canon",
    "Airdate": "2006-04-25T07:00:00.000Z"
  },
  {
    "#": 5,
    "Title": "Make Friends You Can Call by Their Nicknames, Even When You're an Old Fart",
    "Type": "Manga Canon",
    "Airdate": "2006-05-02T07:00:00.000Z"
  },
  {
    "#": 6,
    "Title": "Keep Your Promise Even If It Kills You",
    "Type": "Manga Canon",
    "Airdate": "2006-05-09T07:00:00.000Z"
  },
  {
    "#": 7,
    "Title": "Responsible Owners Should Clean Up After Their Pets",
    "Type": "Manga Canon",
    "Airdate": "2006-05-16T07:00:00.000Z"
  },
  {
    "#": 8,
    "Title": "There Is Butt A Fine Line Between Persistence And Stubbornness",
    "Type": "Manga Canon",
    "Airdate": "2006-05-23T07:00:00.000Z"
  },
  {
    "#": 9,
    "Title": "Fighting Should Be Done With Fists",
    "Type": "Manga Canon",
    "Airdate": "2006-05-30T07:00:00.000Z"
  },
  {
    "#": 10,
    "Title": "Eat Something Sour When You're Tired",
    "Type": "Manga Canon",
    "Airdate": "2006-06-06T07:00:00.000Z"
  },
  {
    "#": 11,
    "Title": "Look, Overly Sticky Sweet Dumplings Are Not Real Dumplings, You Idiot!",
    "Type": "Manga Canon",
    "Airdate": "2006-06-13T07:00:00.000Z"
  },
  {
    "#": 12,
    "Title": "People Who Make Good First Impressions Usually Suck",
    "Type": "Manga Canon",
    "Airdate": "2006-06-13T07:00:00.000Z"
  },
  {
    "#": 13,
    "Title": "If You're Going To Cosplay, Go All Out",
    "Type": "Manga Canon",
    "Airdate": "2006-06-20T07:00:00.000Z"
  },
  {
    "#": 14,
    "Title": "You Only Gotta Wash Under Your Armpits - Just the Armpits",
    "Type": "Manga Canon",
    "Airdate": "2006-07-04T07:00:00.000Z"
  },
  {
    "#": 15,
    "Title": "Pets Resemble Their Owners",
    "Type": "Manga Canon",
    "Airdate": "2006-07-11T07:00:00.000Z"
  },
  {
    "#": 16,
    "Title": "If You Stop And Think About It, Your Life's a Lot Longer as an Old Guy Than a Kid! Whoa, Scary!!",
    "Type": "Manga Canon",
    "Airdate": "2006-07-18T07:00:00.000Z"
  },
  {
    "#": 17,
    "Title": "Sons Only Take After Their Father's Negative Attributes",
    "Type": "Manga Canon",
    "Airdate": "2006-07-25T07:00:00.000Z"
  },
  {
    "#": 18,
    "Title": "Oh, Yeah! Our Crib Is Number One!",
    "Type": "Manga Canon",
    "Airdate": "2006-08-01T07:00:00.000Z"
  },
  {
    "#": 19,
    "Title": "Why's the Sea So Salty? Because You City Folk Pee Whenever You Go Swimming!",
    "Type": "Manga Canon",
    "Airdate": "2006-08-08T07:00:00.000Z"
  },
  {
    "#": 20,
    "Title": "Watch Out for Conveyer Belts!",
    "Type": "Manga Canon",
    "Airdate": "2006-08-15T07:00:00.000Z"
  },
  {
    "#": 21,
    "Title": "If You're A Man, Try The Swordfish!",
    "Type": "Manga Canon",
    "Airdate": "2006-08-22T07:00:00.000Z"
  },
  {
    "#": 22,
    "Title": "Marriage Is Prolonging An Illusion For Your Whole Life",
    "Type": "Manga Canon",
    "Airdate": "2006-09-05T07:00:00.000Z"
  },
  {
    "#": 23,
    "Title": "When You're In A Fix, Keep On Laughing, Laughing...",
    "Type": "Manga Canon",
    "Airdate": "2006-09-12T07:00:00.000Z"
  },
  {
    "#": 24,
    "Title": "Cute Faces Are Always Hiding Something",
    "Type": "Manga Canon",
    "Airdate": "2006-09-19T07:00:00.000Z"
  },
  {
    "#": 25,
    "Title": "A Shared Soup Pot Is A Microcosm Of Life",
    "Type": "Manga Canon",
    "Airdate": "2006-10-05T07:00:00.000Z"
  },
  {
    "#": 26,
    "Title": "Don't Be Shy - Just Raise Your Hand And Say It",
    "Type": "Manga Canon",
    "Airdate": "2006-10-12T07:00:00.000Z"
  },
  {
    "#": 27,
    "Title": "Some Things Can't Be Cut With A Sword",
    "Type": "Manga Canon",
    "Airdate": "2006-10-19T07:00:00.000Z"
  },
  {
    "#": 28,
    "Title": "Good Things Never Come In Twos (But Bad Things Do)",
    "Type": "Manga Canon",
    "Airdate": "2006-10-26T07:00:00.000Z"
  },
  {
    "#": 29,
    "Title": "Don't Panic - There's A Return Policy!",
    "Type": "Manga Canon",
    "Airdate": "2006-11-02T08:00:00.000Z"
  },
  {
    "#": 30,
    "Title": "Even Teen Idols Act Like You Guys",
    "Type": "Manga Canon",
    "Airdate": "2006-11-09T08:00:00.000Z"
  },
  {
    "#": 31,
    "Title": "You Always Remember The Things That Matter The Least",
    "Type": "Manga Canon",
    "Airdate": "2006-11-16T08:00:00.000Z"
  },
  {
    "#": 32,
    "Title": "Life Moves On Like A Conveyor Belt",
    "Type": "Manga Canon",
    "Airdate": "2006-11-23T08:00:00.000Z"
  },
  {
    "#": 33,
    "Title": "Mistaking Someone's Name Is Rude!",
    "Type": "Manga Canon",
    "Airdate": "2006-11-30T08:00:00.000Z"
  },
  {
    "#": 34,
    "Title": "Love Doesn't Require A Manual",
    "Type": "Manga Canon",
    "Airdate": "2006-12-07T08:00:00.000Z"
  },
  {
    "#": 35,
    "Title": "Love Doesn't Require A Manual (Continued)",
    "Type": "Manga Canon",
    "Airdate": "2006-12-14T08:00:00.000Z"
  },
  {
    "#": 36,
    "Title": "People With Dark Pasts Can't Shut Up",
    "Type": "Manga Canon",
    "Airdate": "2006-12-21T08:00:00.000Z"
  },
  {
    "#": 37,
    "Title": "People Who Say That Santa Doesn't Really Exist Actually Want To Believe In Him",
    "Type": "Manga Canon",
    "Airdate": "2006-12-28T08:00:00.000Z"
  },
  {
    "#": 38,
    "Title": "Only Children Play In The Snow",
    "Type": "Manga Canon",
    "Airdate": "2007-01-11T08:00:00.000Z"
  },
  {
    "#": 39,
    "Title": "Ramen Shops With Long Menus Never Do Well",
    "Type": "Manga Canon",
    "Airdate": "2007-01-18T08:00:00.000Z"
  },
  {
    "#": 40,
    "Title": "Give A Thought To Planned Pregnancy",
    "Type": "Manga Canon",
    "Airdate": "2007-01-25T08:00:00.000Z"
  },
  {
    "#": 41,
    "Title": "You Can't Judge A Movie By Its Title",
    "Type": "Manga Canon",
    "Airdate": "2007-02-01T08:00:00.000Z"
  },
  {
    "#": 42,
    "Title": "You Know What Happens If You Pee On A Worm",
    "Type": "Manga Canon",
    "Airdate": "2007-02-08T08:00:00.000Z"
  },
  {
    "#": 43,
    "Title": "Make Characters So Anybody Can Tell Who They Are By Just Their Silhouettes",
    "Type": "Manga Canon",
    "Airdate": "2007-02-15T08:00:00.000Z"
  },
  {
    "#": 44,
    "Title": "Mom's Busy, Too, So Quit Complaining About What's For Dinner",
    "Type": "Manga Canon",
    "Airdate": "2007-02-22T08:00:00.000Z"
  },
  {
    "#": 45,
    "Title": "Walk Your Dog At An Appropriate Speed",
    "Type": "Manga Canon",
    "Airdate": "2007-03-01T08:00:00.000Z"
  },
  {
    "#": 46,
    "Title": "Adults Only. We Wouldn't Want Anyone Immature In Here...",
    "Type": "Manga Canon",
    "Airdate": "2007-03-08T08:00:00.000Z"
  },
  {
    "#": 47,
    "Title": "Do Cherries Come From Cherry Trees?",
    "Type": "Manga Canon",
    "Airdate": "2007-03-15T07:00:00.000Z"
  },
  {
    "#": 48,
    "Title": "The More You're Alike, The More You Fight",
    "Type": "Manga Canon",
    "Airdate": "2007-03-22T07:00:00.000Z"
  },
  {
    "#": 49,
    "Title": "A Life Without Gambling Is Like Sushi Without Wasabi",
    "Type": "Manga Canon",
    "Airdate": "2007-03-29T07:00:00.000Z"
  },
  {
    "#": 50,
    "Title": "Pending Means Pending, It's Not Final",
    "Type": "Filler",
    "Airdate": "2007-04-05T07:00:00.000Z"
  },
  {
    "#": 51,
    "Title": "Milk Should Be Served At Body Temperature",
    "Type": "Manga Canon",
    "Airdate": "2007-04-12T07:00:00.000Z"
  },
  {
    "#": 52,
    "Title": "If You Want To See Someone, Make An Appo First",
    "Type": "Manga Canon",
    "Airdate": "2007-04-19T07:00:00.000Z"
  },
  {
    "#": 53,
    "Title": "Stress Makes You Bald, But It's Stressful To Avoid Stress, So You End Up Stressed Out, So In The End There's Nothing You Can Do",
    "Type": "Manga Canon",
    "Airdate": "2007-04-26T07:00:00.000Z"
  },
  {
    "#": 54,
    "Title": "Mothers Everywhere Are All The Same",
    "Type": "Manga Canon",
    "Airdate": "2007-05-03T07:00:00.000Z"
  },
  {
    "#": 55,
    "Title": "Don't Make Munching Noises When You Eat",
    "Type": "Manga Canon",
    "Airdate": "2007-05-10T07:00:00.000Z"
  },
  {
    "#": 56,
    "Title": "Keep An Eye On The Chief For The Day",
    "Type": "Manga Canon",
    "Airdate": "2007-05-17T07:00:00.000Z"
  },
  {
    "#": 57,
    "Title": "When Looking For Things You've Lost, Remember What You Were Doing On The Day You Lost It",
    "Type": "Filler",
    "Airdate": "2007-05-24T07:00:00.000Z"
  },
  {
    "#": 58,
    "Title": "Croquette Sandwiches Are Always The Most Popular Food Sold At The Stalls",
    "Type": "Manga Canon",
    "Airdate": "2007-05-31T07:00:00.000Z"
  },
  {
    "#": 59,
    "Title": "Be Careful Not To Leave Your Umbrella Somewhere",
    "Type": "Manga Canon",
    "Airdate": "2007-06-07T07:00:00.000Z"
  },
  {
    "#": 60,
    "Title": "The Sun Will Rise Again",
    "Type": "Manga Canon",
    "Airdate": "2007-06-14T07:00:00.000Z"
  },
  {
    "#": 61,
    "Title": "On A Moonless Night, Insects Are Drawn To The Light",
    "Type": "Manga Canon",
    "Airdate": "2007-06-21T07:00:00.000Z"
  },
  {
    "#": 62,
    "Title": "Even Mummy Hunters Sometimes Turn Into Mummys",
    "Type": "Manga Canon",
    "Airdate": "2007-06-28T07:00:00.000Z"
  },
  {
    "#": 63,
    "Title": "The Preview Section In JUMP Is Always Unreliable",
    "Type": "Manga Canon",
    "Airdate": "2007-07-05T07:00:00.000Z"
  },
  {
    "#": 64,
    "Title": "Eating Nmaibo Can Make You Full In No Time!",
    "Type": "Manga Canon",
    "Airdate": "2007-07-12T07:00:00.000Z"
  },
  {
    "#": 65,
    "Title": "Rhinoceros Beetles Teach Boys That Life Is Precious",
    "Type": "Manga Canon",
    "Airdate": "2007-07-19T07:00:00.000Z"
  },
  {
    "#": 66,
    "Title": "Dango Over Flowers",
    "Type": "Manga Canon",
    "Airdate": "2007-07-26T07:00:00.000Z"
  },
  {
    "#": 67,
    "Title": "For The Wind Is The Life",
    "Type": "Manga Canon",
    "Airdate": "2007-08-02T07:00:00.000Z"
  },
  {
    "#": 68,
    "Title": "Like A Haunted House, Life Is Filled With Horrors",
    "Type": "Manga Canon",
    "Airdate": "2007-08-09T07:00:00.000Z"
  },
  {
    "#": 69,
    "Title": "Please Help By Separating Your Trash",
    "Type": "Manga Canon",
    "Airdate": "2007-08-16T07:00:00.000Z"
  },
  {
    "#": 70,
    "Title": "Too Many Cuties Can Make You Sick",
    "Type": "Manga Canon",
    "Airdate": "2007-08-23T07:00:00.000Z"
  },
  {
    "#": 71,
    "Title": "Some Data Cannot Be Erased",
    "Type": "Manga Canon",
    "Airdate": "2007-08-30T07:00:00.000Z"
  },
  {
    "#": 72,
    "Title": "A Dog's Paws Smell Fragrant",
    "Type": "Manga Canon",
    "Airdate": "2007-09-06T07:00:00.000Z"
  },
  {
    "#": 73,
    "Title": "Think For A Minute Now, Do Matsutake Mushrooms Really Taste All That Good?",
    "Type": "Manga Canon",
    "Airdate": "2007-09-13T07:00:00.000Z"
  },
  {
    "#": 74,
    "Title": "The Manga Writer Becomes A Pro, After Doing A Stock Of Manuscripts",
    "Type": "Manga Canon",
    "Airdate": "2007-09-20T07:00:00.000Z"
  },
  {
    "#": 75,
    "Title": "Don't Complain About Your Job At Home, Do It Somewhere Else",
    "Type": "Filler",
    "Airdate": "2007-09-27T07:00:00.000Z"
  },
  {
    "#": 76,
    "Title": "In Those Situations, Keep Quiet And Cook Red Rice With Beans",
    "Type": "Manga Canon",
    "Airdate": "2007-10-04T07:00:00.000Z"
  },
  {
    "#": 77,
    "Title": "Yesterday's Enemy, After All Is Said And Done, Is Still The Enemy",
    "Type": "Manga Canon",
    "Airdate": "2007-10-11T07:00:00.000Z"
  },
  {
    "#": 78,
    "Title": "People Who Are Picky About Food Are Also Picky About People, Too",
    "Type": "Manga Canon",
    "Airdate": "2007-10-18T07:00:00.000Z"
  },
  {
    "#": 79,
    "Title": "Four Heads Are Better Than One",
    "Type": "Manga Canon",
    "Airdate": "2007-10-25T07:00:00.000Z"
  },
  {
    "#": 80,
    "Title": "When Someone Who Wears Glasses Takes Them Off, It Looks Like Something's Missing",
    "Type": "Manga Canon",
    "Airdate": "2007-11-08T08:00:00.000Z"
  },
  {
    "#": 81,
    "Title": "A Woman's Best Make Up Is Her Smile",
    "Type": "Manga Canon",
    "Airdate": "2007-11-15T08:00:00.000Z"
  },
  {
    "#": 82,
    "Title": "You Don't Stand In Line For The Ramen, You Stand In Line For The Self Satisfaction",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2007-11-22T08:00:00.000Z"
  },
  {
    "#": 83,
    "Title": "Rank Has Nothing To Do With Luck",
    "Type": "Manga Canon",
    "Airdate": "2007-11-29T08:00:00.000Z"
  },
  {
    "#": 84,
    "Title": "Hard-Boiled Egg On A Man's Heart",
    "Type": "Manga Canon",
    "Airdate": "2007-12-06T08:00:00.000Z"
  },
  {
    "#": 85,
    "Title": "Hard-Boiled Eggs Don't Crack",
    "Type": "Manga Canon",
    "Airdate": "2007-12-13T08:00:00.000Z"
  },
  {
    "#": 86,
    "Title": "It's Often Difficult To Sleep When You're Engrossed With Counting Sheep",
    "Type": "Manga Canon",
    "Airdate": "2007-12-20T08:00:00.000Z"
  },
  {
    "#": 87,
    "Title": "Perform A German Suplex On A Woman Who Asks If She Or The Job Is More Important",
    "Type": "Manga Canon",
    "Airdate": "2007-12-27T08:00:00.000Z"
  },
  {
    "#": 88,
    "Title": "The Most Exciting Part Of A Group Date Is Before It Starts",
    "Type": "Manga Canon",
    "Airdate": "2008-01-10T08:00:00.000Z"
  },
  {
    "#": 89,
    "Title": "What Happens Twice, Happens Thrice",
    "Type": "Manga Canon",
    "Airdate": "2008-01-17T08:00:00.000Z"
  },
  {
    "#": 90,
    "Title": "The More Delicious The Food, The Nastier It Is When It Goes Bad",
    "Type": "Manga Canon",
    "Airdate": "2008-01-24T08:00:00.000Z"
  },
  {
    "#": 91,
    "Title": "If You Want To Lose Weight, Then Stop Eating And Start Moving",
    "Type": "Manga Canon",
    "Airdate": "2008-01-31T08:00:00.000Z"
  },
  {
    "#": 92,
    "Title": "Be A Person Who Can See People's Strong Points And Not Their Weak Points",
    "Type": "Manga Canon",
    "Airdate": "2008-02-07T08:00:00.000Z"
  },
  {
    "#": 93,
    "Title": "Even A Hero Has Issues",
    "Type": "Manga Canon",
    "Airdate": "2008-02-14T08:00:00.000Z"
  },
  {
    "#": 94,
    "Title": "When Riding A Train, Make Sure You Grab The Straps With Both Hands",
    "Type": "Manga Canon",
    "Airdate": "2008-02-21T08:00:00.000Z"
  },
  {
    "#": 95,
    "Title": "Men, Be A Madao",
    "Type": "Manga Canon",
    "Airdate": "2008-02-28T08:00:00.000Z"
  },
  {
    "#": 96,
    "Title": "If You're A Man, Don't Give Up",
    "Type": "Manga Canon",
    "Airdate": "2008-03-06T08:00:00.000Z"
  },
  {
    "#": 97,
    "Title": "Exaggerate The Tales Of Your Exploits By A Third, So Everyone Has A Good Time",
    "Type": "Manga Canon",
    "Airdate": "2008-03-13T07:00:00.000Z"
  },
  {
    "#": 98,
    "Title": "Play Video Games For Only An Hour A Day",
    "Type": "Manga Canon",
    "Airdate": "2008-03-20T07:00:00.000Z"
  },
  {
    "#": 99,
    "Title": "Life And Video Games Are Full Of Bugs",
    "Type": "Manga Canon",
    "Airdate": "2008-03-27T07:00:00.000Z"
  },
  {
    "#": 100,
    "Title": "The More Something Is Disliked, The More Lovely It Is",
    "Type": "Manga Canon",
    "Airdate": "2008-04-03T07:00:00.000Z"
  },
  {
    "#": 101,
    "Title": "Rules Are Made To Be Broken",
    "Type": "Manga Canon",
    "Airdate": "2008-04-10T07:00:00.000Z"
  },
  {
    "#": 102,
    "Title": "Otaku Are Talkative",
    "Type": "Manga Canon",
    "Airdate": "2008-04-17T07:00:00.000Z"
  },
  {
    "#": 103,
    "Title": "There's A Thin Line Between Strengths And Weaknesses",
    "Type": "Manga Canon",
    "Airdate": "2008-04-24T07:00:00.000Z"
  },
  {
    "#": 104,
    "Title": "Important Things Are Hard To See",
    "Type": "Manga Canon",
    "Airdate": "2008-05-01T07:00:00.000Z"
  },
  {
    "#": 105,
    "Title": "It's All About The Beat And Timing",
    "Type": "Manga Canon",
    "Airdate": "2008-05-08T07:00:00.000Z"
  },
  {
    "#": 106,
    "Title": "Love Is Often Played Out In Sudden Death",
    "Type": "Filler",
    "Airdate": "2008-05-15T07:00:00.000Z"
  },
  {
    "#": 107,
    "Title": "Kids Don't Understand How Their Parents Feel",
    "Type": "Manga Canon",
    "Airdate": "2008-05-22T07:00:00.000Z"
  },
  {
    "#": 108,
    "Title": "Some Things are Better Left Unsaid",
    "Type": "Manga Canon",
    "Airdate": "2008-05-29T07:00:00.000Z"
  },
  {
    "#": 109,
    "Title": "Life Is A Test",
    "Type": "Manga Canon",
    "Airdate": "2008-06-05T07:00:00.000Z"
  },
  {
    "#": 110,
    "Title": "People Are All Escapees Of Their Own Inner Prisons",
    "Type": "Manga Canon",
    "Airdate": "2008-06-12T07:00:00.000Z"
  },
  {
    "#": 111,
    "Title": "Definitely Do Not Let Your Girlfriend See The Things You Use For Cross-Dressing",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2008-06-19T07:00:00.000Z"
  },
  {
    "#": 112,
    "Title": "Lucky Is A Man Who Gets Up And Goes To Work",
    "Type": "Manga Canon",
    "Airdate": "2008-06-26T07:00:00.000Z"
  },
  {
    "#": 113,
    "Title": "Cleaning The Toilet Cleanses The Soul",
    "Type": "Manga Canon",
    "Airdate": "2008-07-03T07:00:00.000Z"
  },
  {
    "#": 114,
    "Title": "They Say Soy Sauce On Pudding Tastes Like Sea Urchin, But Soy Sauce On Pudding Only Tastes Like Pudding And Soy Sauce",
    "Type": "Filler",
    "Airdate": "2008-07-10T07:00:00.000Z"
  },
  {
    "#": 115,
    "Title": "Summer Vacation Is The Most Fun Right Before It Begins",
    "Type": "Manga Canon",
    "Airdate": "2008-07-17T07:00:00.000Z"
  },
  {
    "#": 116,
    "Title": "The Older, The Wiser",
    "Type": "Manga Canon",
    "Airdate": "2008-07-24T07:00:00.000Z"
  },
  {
    "#": 117,
    "Title": "Beauty Is Like A Summer Fruit",
    "Type": "Manga Canon",
    "Airdate": "2008-07-31T07:00:00.000Z"
  },
  {
    "#": 118,
    "Title": "Even If Your Back Is Bent, Go Straight Forward",
    "Type": "Manga Canon",
    "Airdate": "2008-08-07T07:00:00.000Z"
  },
  {
    "#": 119,
    "Title": "Within Each Box Of Cigarettes, Are One Or Two Cigarettes That Smell Like Horse Dung",
    "Type": "Manga Canon",
    "Airdate": "2008-08-14T07:00:00.000Z"
  },
  {
    "#": 120,
    "Title": "Japanese Restaurants Abroad Taste Pretty Much Like School Cafeteria Lunches",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2008-08-21T07:00:00.000Z"
  },
  {
    "#": 121,
    "Title": "Novices Only Need A Flathead And A Phillips",
    "Type": "Manga Canon",
    "Airdate": "2008-08-28T07:00:00.000Z"
  },
  {
    "#": 122,
    "Title": "Imagination Is Nurtured In The 8th Grade",
    "Type": "Manga Canon",
    "Airdate": "2008-09-04T07:00:00.000Z"
  },
  {
    "#": 123,
    "Title": "Always Keep A Screwdriver In Your Heart",
    "Type": "Manga Canon",
    "Airdate": "2008-09-11T07:00:00.000Z"
  },
  {
    "#": 124,
    "Title": "When Nagging Goes Too Far It Becomes Intimidating",
    "Type": "Filler",
    "Airdate": "2008-09-18T07:00:00.000Z"
  },
  {
    "#": 125,
    "Title": "Entering The Final Chapter!",
    "Type": "Filler",
    "Airdate": "2008-09-25T07:00:00.000Z"
  },
  {
    "#": 126,
    "Title": "Some Things Can Only Be Conveyed Through The Written Word",
    "Type": "Manga Canon",
    "Airdate": "2008-10-02T07:00:00.000Z"
  },
  {
    "#": 127,
    "Title": "Sometimes You Must Meet To Understand",
    "Type": "Manga Canon",
    "Airdate": "2008-10-09T07:00:00.000Z"
  },
  {
    "#": 128,
    "Title": "Sometimes You Can't Tell Just By Meeting Someone",
    "Type": "Manga Canon",
    "Airdate": "2008-10-16T07:00:00.000Z"
  },
  {
    "#": 129,
    "Title": "Beware Of Food You Pick Up Off The Ground",
    "Type": "Manga Canon",
    "Airdate": "2008-10-23T07:00:00.000Z"
  },
  {
    "#": 130,
    "Title": "Cat Lovers And Dog Lovers Are Mutually Exclusive",
    "Type": "Manga Canon",
    "Airdate": "2008-10-30T07:00:00.000Z"
  },
  {
    "#": 131,
    "Title": "Fights Often Ensue During Trips",
    "Type": "Manga Canon",
    "Airdate": "2008-11-06T08:00:00.000Z"
  },
  {
    "#": 132,
    "Title": "Briefs Will Unavoidably Get Skidmarks",
    "Type": "Manga Canon",
    "Airdate": "2008-11-13T08:00:00.000Z"
  },
  {
    "#": 133,
    "Title": "Gin And His Excellency's Good-For-Nothings",
    "Type": "Manga Canon",
    "Airdate": "2008-11-20T08:00:00.000Z"
  },
  {
    "#": 134,
    "Title": "Be Very Careful When Using Ghost Stories",
    "Type": "Manga Canon",
    "Airdate": "2008-11-27T08:00:00.000Z"
  },
  {
    "#": 135,
    "Title": "Before Worrying About The Earth, Think About The Even More Endangered Future Of 'Gintaman'",
    "Type": "Filler",
    "Airdate": "2008-12-04T08:00:00.000Z"
  },
  {
    "#": 136,
    "Title": "It's Your House, You Build It",
    "Type": "Manga Canon",
    "Airdate": "2008-12-11T08:00:00.000Z"
  },
  {
    "#": 137,
    "Title": "99% Of Men Aren't Confident In Confessing Their Love",
    "Type": "Filler",
    "Airdate": "2008-12-18T08:00:00.000Z"
  },
  {
    "#": 138,
    "Title": "Let's Talk About The Old Days Once In A While",
    "Type": "Manga Canon",
    "Airdate": "2008-12-25T08:00:00.000Z"
  },
  {
    "#": 139,
    "Title": "Don't Put Your Wallet In Your Back Pocket",
    "Type": "Manga Canon",
    "Airdate": "2009-01-08T08:00:00.000Z"
  },
  {
    "#": 140,
    "Title": "Beware Of Those Who Use An Umbrella On A Sunny Day!",
    "Type": "Manga Canon",
    "Airdate": "2009-01-15T08:00:00.000Z"
  },
  {
    "#": 141,
    "Title": "Butting Into A Fight Is Dangerous",
    "Type": "Manga Canon",
    "Airdate": "2009-01-22T08:00:00.000Z"
  },
  {
    "#": 142,
    "Title": "Life Is A Series Of Choices",
    "Type": "Manga Canon",
    "Airdate": "2009-01-29T08:00:00.000Z"
  },
  {
    "#": 143,
    "Title": "Those Who Stand On Four Legs Are Beasts. Those Who Stand On Two Legs, Guts, And Glory Are Men",
    "Type": "Manga Canon",
    "Airdate": "2009-02-05T08:00:00.000Z"
  },
  {
    "#": 144,
    "Title": "Don't Trust Bedtime Stories",
    "Type": "Manga Canon",
    "Airdate": "2009-02-12T08:00:00.000Z"
  },
  {
    "#": 145,
    "Title": "The Color For Each Person's Bond Comes In Various Colors",
    "Type": "Manga Canon",
    "Airdate": "2009-02-19T08:00:00.000Z"
  },
  {
    "#": 146,
    "Title": "The Taste Of Drinking Under Broad Daylight Is Something Special",
    "Type": "Manga Canon",
    "Airdate": "2009-02-26T08:00:00.000Z"
  },
  {
    "#": 147,
    "Title": "All Adults Are Instructors For All Children",
    "Type": "Manga Canon",
    "Airdate": "2009-03-05T08:00:00.000Z"
  },
  {
    "#": 148,
    "Title": "Zip Up Your Fly Nice And Slowly",
    "Type": "Manga Canon",
    "Airdate": "2009-03-12T07:00:00.000Z"
  },
  {
    "#": 149,
    "Title": "When Breaking A Chuubert In Half, The End With The Knob Should Be Better. It's Also Tasty To Drink From There",
    "Type": "Manga Canon",
    "Airdate": "2009-03-19T07:00:00.000Z"
  },
  {
    "#": 150,
    "Title": "If You Can't Beat Them, Join Them",
    "Type": "Filler",
    "Airdate": "2009-03-26T07:00:00.000Z"
  },
  {
    "#": 151,
    "Title": "A Conversation With A Barber, During A Haircut, Is The Most Pointless Thing In The World",
    "Type": "Manga Canon",
    "Airdate": "2009-04-02T07:00:00.000Z"
  },
  {
    "#": 152,
    "Title": "The Heavens Created Chonmage Above Man Instead Of Another Man",
    "Type": "Manga Canon",
    "Airdate": "2009-04-09T07:00:00.000Z"
  },
  {
    "#": 153,
    "Title": "Sleep Helps A Child Grow",
    "Type": "Manga Canon",
    "Airdate": "2009-04-16T07:00:00.000Z"
  },
  {
    "#": 154,
    "Title": "That Person Looks Different From Usual During A Birthday Party",
    "Type": "Manga Canon",
    "Airdate": "2009-04-23T07:00:00.000Z"
  },
  {
    "#": 155,
    "Title": "The Other Side Of The Other Side Of The Other Side Would Be The Other Side",
    "Type": "Filler",
    "Airdate": "2009-04-30T07:00:00.000Z"
  },
  {
    "#": 156,
    "Title": "It Takes A Bit Of Courage To Enter A Street Vendor's Stand",
    "Type": "Manga Canon",
    "Airdate": "2009-05-07T07:00:00.000Z"
  },
  {
    "#": 157,
    "Title": "Any Place With A Bunch Of Men Gathered Around Will Turn Into A Battlefield",
    "Type": "Manga Canon",
    "Airdate": "2009-05-14T07:00:00.000Z"
  },
  {
    "#": 158,
    "Title": "If A Friend Gets Injured, Take Him To The Hospital, Stat!",
    "Type": "Manga Canon",
    "Airdate": "2009-05-21T07:00:00.000Z"
  },
  {
    "#": 159,
    "Title": "If One Orange In The Box Is Rotten, The Rest Of Them Will Become Rotten Before You Realize It",
    "Type": "Manga Canon",
    "Airdate": "2009-05-28T07:00:00.000Z"
  },
  {
    "#": 160,
    "Title": "From A Foreigner's Perspective, You're The Foreigner. From An Alien's Perspective, You're The Alien",
    "Type": "Manga Canon",
    "Airdate": "2009-06-04T07:00:00.000Z"
  },
  {
    "#": 161,
    "Title": "Laputa's Still Good After Seeing It So Many Times",
    "Type": "Manga Canon",
    "Airdate": "2009-06-11T07:00:00.000Z"
  },
  {
    "#": 162,
    "Title": "Love Is Unconditional",
    "Type": "Manga Canon",
    "Airdate": "2009-06-18T07:00:00.000Z"
  },
  {
    "#": 163,
    "Title": "The Black Ships Even Make A Scene When They Sink",
    "Type": "Manga Canon",
    "Airdate": "2009-06-25T07:00:00.000Z"
  },
  {
    "#": 164,
    "Title": "That Matsutake Soup Stuff Tastes Better Than The Real Deal",
    "Type": "Filler",
    "Airdate": "2009-07-02T07:00:00.000Z"
  },
  {
    "#": 165,
    "Title": "If It Works Once, It'll Work Over And Over Again",
    "Type": "Manga Canon",
    "Airdate": "2009-07-09T07:00:00.000Z"
  },
  {
    "#": 166,
    "Title": "Two Is Better Than One. Two People Are Better Than One",
    "Type": "Filler",
    "Airdate": "2009-07-16T07:00:00.000Z"
  },
  {
    "#": 167,
    "Title": "Smooth Polygons Smooth Men's Hearts Too",
    "Type": "Manga Canon",
    "Airdate": "2009-07-23T07:00:00.000Z"
  },
  {
    "#": 168,
    "Title": "The Human Body Is Like A Little Universe",
    "Type": "Manga Canon",
    "Airdate": "2009-07-30T07:00:00.000Z"
  },
  {
    "#": 169,
    "Title": "The Chosen Idiots",
    "Type": "Manga Canon",
    "Airdate": "2009-08-06T07:00:00.000Z"
  },
  {
    "#": 170,
    "Title": "And Into The Legend...",
    "Type": "Manga Canon",
    "Airdate": "2009-08-13T07:00:00.000Z"
  },
  {
    "#": 171,
    "Title": "You'll Get Sued If All You Do Is Copy Others",
    "Type": "Filler",
    "Airdate": "2009-08-20T07:00:00.000Z"
  },
  {
    "#": 172,
    "Title": "It All Depends On How You Use The 'Carrot And Stick' Method",
    "Type": "Manga Canon",
    "Airdate": "2009-08-27T07:00:00.000Z"
  },
  {
    "#": 173,
    "Title": "It's What's On The Inside That Counts",
    "Type": "Filler",
    "Airdate": "2009-09-03T07:00:00.000Z"
  },
  {
    "#": 174,
    "Title": "Are There Still People Who Go To The Ocean And Yell Out 'Bakayaro'?",
    "Type": "Filler",
    "Airdate": "2009-09-10T07:00:00.000Z"
  },
  {
    "#": 175,
    "Title": "People Of All Ages Hate The Dentist!",
    "Type": "Manga Canon",
    "Airdate": "2009-09-17T07:00:00.000Z"
  },
  {
    "#": 176,
    "Title": "Countdown Begins",
    "Type": "Filler",
    "Airdate": "2009-09-24T07:00:00.000Z"
  },
  {
    "#": 177,
    "Title": "It's Bad Luck To See A Spider At Night",
    "Type": "Manga Canon",
    "Airdate": "2009-10-01T07:00:00.000Z"
  },
  {
    "#": 178,
    "Title": "Once You're Entangled In A Spiderweb, It's Hard To Get It Off",
    "Type": "Manga Canon",
    "Airdate": "2009-10-08T07:00:00.000Z"
  },
  {
    "#": 179,
    "Title": "It's The Irresponsible One Who's Scary When Pissed",
    "Type": "Manga Canon",
    "Airdate": "2009-10-15T07:00:00.000Z"
  },
  {
    "#": 180,
    "Title": "The More Precious The Burden, The Heavier And More Difficult It Is To Shoulder It",
    "Type": "Manga Canon",
    "Airdate": "2009-10-22T07:00:00.000Z"
  },
  {
    "#": 181,
    "Title": "Watch Out For A Set Of Women And A Drink",
    "Type": "Manga Canon",
    "Airdate": "2009-10-29T07:00:00.000Z"
  },
  {
    "#": 182,
    "Title": "Screw Popularity Polls",
    "Type": "Manga Canon",
    "Airdate": "2009-11-05T08:00:00.000Z"
  },
  {
    "#": 183,
    "Title": "Popularity Polls Can Burn In Hell",
    "Type": "Manga Canon",
    "Airdate": "2009-11-12T08:00:00.000Z"
  },
  {
    "#": 184,
    "Title": "Popularity Polls Can...",
    "Type": "Manga Canon",
    "Airdate": "2009-11-19T08:00:00.000Z"
  },
  {
    "#": 185,
    "Title": "Hometowns And Boobs Are Best Thought From Afar",
    "Type": "Filler",
    "Airdate": "2009-11-28T08:00:00.000Z"
  },
  {
    "#": 186,
    "Title": "Beware Of Foreshadows",
    "Type": "Manga Canon",
    "Airdate": "2009-12-03T08:00:00.000Z"
  },
  {
    "#": 187,
    "Title": "It's Goodbye Once A Flag Is Set",
    "Type": "Manga Canon",
    "Airdate": "2009-12-10T08:00:00.000Z"
  },
  {
    "#": 188,
    "Title": "An Observation Journal Should Be Seen Through To The Very End",
    "Type": "Manga Canon",
    "Airdate": "2009-12-17T08:00:00.000Z"
  },
  {
    "#": 189,
    "Title": "That's How The End Of The Year Goes",
    "Type": "Filler",
    "Airdate": "2009-12-24T08:00:00.000Z"
  },
  {
    "#": 190,
    "Title": "When Looking For Something, Try Using Its Perspective",
    "Type": "Manga Canon",
    "Airdate": "2010-01-07T08:00:00.000Z"
  },
  {
    "#": 191,
    "Title": "Freedom Means To Live True To Yourself, Not Without Law!",
    "Type": "Manga Canon",
    "Airdate": "2010-01-14T08:00:00.000Z"
  },
  {
    "#": 192,
    "Title": "Kabukicho Stray Cat Blues",
    "Type": "Manga Canon",
    "Airdate": "2010-01-21T08:00:00.000Z"
  },
  {
    "#": 193,
    "Title": "Cooking Is About Guts",
    "Type": "Manga Canon",
    "Airdate": "2010-01-28T08:00:00.000Z"
  },
  {
    "#": 194,
    "Title": "Whenever I Hear Leviathan, I Think Of Sazae-san. Stupid Me!!",
    "Type": "Manga Canon",
    "Airdate": "2010-02-04T08:00:00.000Z"
  },
  {
    "#": 195,
    "Title": "Not Losing To The Rain",
    "Type": "Manga Canon",
    "Airdate": "2010-02-11T08:00:00.000Z"
  },
  {
    "#": 196,
    "Title": "Not Losing To The Wind",
    "Type": "Manga Canon",
    "Airdate": "2010-02-18T08:00:00.000Z"
  },
  {
    "#": 197,
    "Title": "Not Losing To The Storm",
    "Type": "Manga Canon",
    "Airdate": "2010-02-25T08:00:00.000Z"
  },
  {
    "#": 198,
    "Title": "Never Losing That Smile",
    "Type": "Manga Canon",
    "Airdate": "2010-03-04T08:00:00.000Z"
  },
  {
    "#": 199,
    "Title": "That's How I Wish To Be, Beautiful And Strong",
    "Type": "Manga Canon",
    "Airdate": "2010-03-11T08:00:00.000Z"
  },
  {
    "#": 200,
    "Title": "Santa Claus Red Is Blood Red",
    "Type": "Manga Canon",
    "Airdate": "2010-03-18T07:00:00.000Z"
  },
  {
    "#": 201,
    "Title": "Everybody's A Santa",
    "Type": "Manga Canon",
    "Airdate": "2010-03-25T07:00:00.000Z"
  },
  {
    "#": 202,
    "Title": "Everyone Looks a Little Grown Up After Spring Break",
    "Type": "Manga Canon",
    "Airdate": "2011-04-04T07:00:00.000Z"
  },
  {
    "#": 203,
    "Title": "Everyone Looks Pretty Grown up after Summer Break",
    "Type": "Manga Canon",
    "Airdate": "2011-04-11T07:00:00.000Z"
  },
  {
    "#": 204,
    "Title": "Use a Calligraphy Pen for New Year's Cards",
    "Type": "Manga Canon",
    "Airdate": "2011-04-18T07:00:00.000Z"
  },
  {
    "#": 205,
    "Title": "Meals Should Be Balanced",
    "Type": "Manga Canon",
    "Airdate": "2011-04-25T07:00:00.000Z"
  },
  {
    "#": 206,
    "Title": "It's Too Confusing When Talking about the Poster Girl for a Poster Store, So Call Her a Sandwich Board",
    "Type": "Manga Canon",
    "Airdate": "2011-05-02T07:00:00.000Z"
  },
  {
    "#": 207,
    "Title": "Glasses Are Part of the Soul",
    "Type": "Manga Canon",
    "Airdate": "2011-05-09T07:00:00.000Z"
  },
  {
    "#": 208,
    "Title": "Glasses Prevent You from Seeing Certain Things",
    "Type": "Manga Canon",
    "Airdate": "2011-05-16T07:00:00.000Z"
  },
  {
    "#": 209,
    "Title": "Nothing Lasts Forever, including Parents, Money, Youth, Your Room, Dress Shirts, Me, You, and the Gintama Anime",
    "Type": "Filler",
    "Airdate": "2011-05-23T07:00:00.000Z"
  },
  {
    "#": 210,
    "Title": "A Lawless Town Tends to Attract a Bunch of Whoohooey Folk",
    "Type": "Manga Canon",
    "Airdate": "2011-05-30T07:00:00.000Z"
  },
  {
    "#": 211,
    "Title": "Ghosts Aren't the Only Ones Who Run Wild around Graveyards",
    "Type": "Manga Canon",
    "Airdate": "2011-06-06T07:00:00.000Z"
  },
  {
    "#": 212,
    "Title": "Chains of a Warrior",
    "Type": "Manga Canon",
    "Airdate": "2011-06-13T07:00:00.000Z"
  },
  {
    "#": 213,
    "Title": "Iron Town",
    "Type": "Manga Canon",
    "Airdate": "2011-06-20T07:00:00.000Z"
  },
  {
    "#": 214,
    "Title": "Tis an Honor!",
    "Type": "Manga Canon",
    "Airdate": "2011-06-27T07:00:00.000Z"
  },
  {
    "#": 215,
    "Title": "Odds or Evens",
    "Type": "Manga Canon",
    "Airdate": "2011-07-04T07:00:00.000Z"
  },
  {
    "#": 216,
    "Title": "I Can't Remember a Damn Thing about the Factory Tour",
    "Type": "Manga Canon",
    "Airdate": "2011-07-11T07:00:00.000Z"
  },
  {
    "#": 217,
    "Title": "What Happens Twice Can Happen Thrice",
    "Type": "Manga Canon",
    "Airdate": "2011-07-18T07:00:00.000Z"
  },
  {
    "#": 218,
    "Title": "The Claws of a Crab Can Snip through a Friendship",
    "Type": "Manga Canon",
    "Airdate": "2011-07-25T07:00:00.000Z"
  },
  {
    "#": 219,
    "Title": "People Forget to Return Stuff All the Time without Even Realizing It",
    "Type": "Manga Canon",
    "Airdate": "2011-08-01T07:00:00.000Z"
  },
  {
    "#": 220,
    "Title": "The Bathhouse, Where You're Naked in Body and Soul",
    "Type": "Manga Canon",
    "Airdate": "2011-08-08T07:00:00.000Z"
  },
  {
    "#": 221,
    "Title": "Jugem",
    "Type": "Manga Canon",
    "Airdate": "2011-08-15T07:00:00.000Z"
  },
  {
    "#": 222,
    "Title": "The Name Reveals the Person",
    "Type": "Manga Canon",
    "Airdate": "2011-08-22T07:00:00.000Z"
  },
  {
    "#": 223,
    "Title": "The Man's Household Situation Is Hard, His Heart Is Soft",
    "Type": "Manga Canon",
    "Airdate": "2011-08-29T07:00:00.000Z"
  },
  {
    "#": 224,
    "Title": "Blue and Red Ecstasy",
    "Type": "Manga Canon",
    "Airdate": "2011-09-05T07:00:00.000Z"
  },
  {
    "#": 225,
    "Title": "So in the second season of Prison Break, they've already broken out of prison, but the name works once you realize that society is a prison",
    "Type": "Manga Canon",
    "Airdate": "2011-09-12T07:00:00.000Z"
  },
  {
    "#": 226,
    "Title": "Everybody Loves Pajamas",
    "Type": "Manga Canon",
    "Airdate": "2011-09-19T07:00:00.000Z"
  },
  {
    "#": 227,
    "Title": "Speaking of Crossovers, Don't Forget about Alien vs. Predator",
    "Type": "Manga Canon",
    "Airdate": "2011-09-26T07:00:00.000Z"
  },
  {
    "#": 228,
    "Title": "Love Is Neither plus Nor Minus",
    "Type": "Manga Canon",
    "Airdate": "2011-10-03T07:00:00.000Z"
  },
  {
    "#": 229,
    "Title": "Making It through Love",
    "Type": "Manga Canon",
    "Airdate": "2011-10-10T07:00:00.000Z"
  },
  {
    "#": 230,
    "Title": "It Would Take Too Much Effort to Make This Title Sound like a Text Message Subject",
    "Type": "Manga Canon",
    "Airdate": "2011-10-17T07:00:00.000Z"
  },
  {
    "#": 231,
    "Title": "When You Go to a Funeral for the First Time, You're Surprised by How Happy the People Are",
    "Type": "Manga Canon",
    "Airdate": "2011-10-24T07:00:00.000Z"
  },
  {
    "#": 232,
    "Title": "The People You Tend to Forget Tend to Show up after You Forget Them",
    "Type": "Manga Canon",
    "Airdate": "2011-10-31T07:00:00.000Z"
  },
  {
    "#": 233,
    "Title": "Space Ururun Homestay",
    "Type": "Manga Canon",
    "Airdate": "2011-11-07T08:00:00.000Z"
  },
  {
    "#": 234,
    "Title": "Piggy Banks and Trash Cans",
    "Type": "Manga Canon",
    "Airdate": "2011-11-14T08:00:00.000Z"
  },
  {
    "#": 235,
    "Title": "Empty Planet",
    "Type": "Manga Canon",
    "Airdate": "2011-11-21T08:00:00.000Z"
  },
  {
    "#": 236,
    "Title": "Don't Say Goodbye Lionel",
    "Type": "Manga Canon",
    "Airdate": "2011-11-28T08:00:00.000Z"
  },
  {
    "#": 237,
    "Title": "Please Take Me Skiing",
    "Type": "Manga Canon",
    "Airdate": "2011-12-05T08:00:00.000Z"
  },
  {
    "#": 238,
    "Title": "A Vacation in Disorientation",
    "Type": "Manga Canon",
    "Airdate": "2011-12-12T08:00:00.000Z"
  },
  {
    "#": 239,
    "Title": "There Are a Few Things You're Not Supposed to Forget",
    "Type": "Manga Canon",
    "Airdate": "2011-12-19T08:00:00.000Z"
  },
  {
    "#": 240,
    "Title": "People Can Only Live by Forgetting the Bad",
    "Type": "Manga Canon",
    "Airdate": "2011-12-26T08:00:00.000Z"
  },
  {
    "#": 241,
    "Title": "We Are All Hosts, in Capital Letters",
    "Type": "Manga Canon",
    "Airdate": "2012-01-09T08:00:00.000Z"
  },
  {
    "#": 242,
    "Title": "Girls like Vegeta, Guys like Piccolo",
    "Type": "Manga Canon",
    "Airdate": "2012-01-16T08:00:00.000Z"
  },
  {
    "#": 243,
    "Title": "Draw Your Life on the Canvas We Call Manga",
    "Type": "Manga Canon",
    "Airdate": "2012-01-23T08:00:00.000Z"
  },
  {
    "#": 244,
    "Title": "Check It Out!!",
    "Type": "Manga Canon",
    "Airdate": "2012-01-30T08:00:00.000Z"
  },
  {
    "#": 245,
    "Title": "Thorny and Rosy",
    "Type": "Manga Canon",
    "Airdate": "2012-02-06T08:00:00.000Z"
  },
  {
    "#": 246,
    "Title": "Festival of Thornies",
    "Type": "Manga Canon",
    "Airdate": "2012-02-13T08:00:00.000Z"
  },
  {
    "#": 247,
    "Title": "Letter from Thorny",
    "Type": "Manga Canon",
    "Airdate": "2012-02-20T08:00:00.000Z"
  },
  {
    "#": 248,
    "Title": "Madaodog Madaonaire",
    "Type": "Manga Canon",
    "Airdate": "2012-02-27T08:00:00.000Z"
  },
  {
    "#": 249,
    "Title": "Presents Are Meant to Be Given Early",
    "Type": "Manga Canon",
    "Airdate": "2012-03-05T08:00:00.000Z"
  },
  {
    "#": 250,
    "Title": "New Year's Envelopes Are Perfect for Dirty Jokes",
    "Type": "Manga Canon",
    "Airdate": "2012-03-12T07:00:00.000Z"
  },
  {
    "#": 251,
    "Title": "When Sleeping under a Kotatsu, Make Sure You Don't Burn Your Balls",
    "Type": "Manga Canon",
    "Airdate": "2012-03-19T07:00:00.000Z"
  },
  {
    "#": 252,
    "Title": "We're Sorry",
    "Type": "Filler",
    "Airdate": "2012-03-26T07:00:00.000Z"
  },
  {
    "#": 253,
    "Title": "Nobody with Natural Straight Hair Can Be That Bad/Nobody with Straight Blond Hair Can Be That Good",
    "Type": "Manga Canon",
    "Airdate": "2012-10-04T07:00:00.000Z"
  },
  {
    "#": 254,
    "Title": "Kintoki and Gintoki",
    "Type": "Manga Canon",
    "Airdate": "2012-10-11T07:00:00.000Z"
  },
  {
    "#": 255,
    "Title": "Kin-san's Kintama",
    "Type": "Manga Canon",
    "Airdate": "2012-10-18T07:00:00.000Z"
  },
  {
    "#": 256,
    "Title": "The Meaning of a Main Character",
    "Type": "Manga Canon",
    "Airdate": "2012-10-25T07:00:00.000Z"
  },
  {
    "#": 257,
    "Title": "Courtesan Turns the Tables",
    "Type": "Manga Canon",
    "Airdate": "2013-01-10T08:00:00.000Z"
  },
  {
    "#": 258,
    "Title": "Inside the Palace!!",
    "Type": "Manga Canon",
    "Airdate": "2013-01-17T08:00:00.000Z"
  },
  {
    "#": 259,
    "Title": "Five Pinkies",
    "Type": "Manga Canon",
    "Airdate": "2013-01-24T08:00:00.000Z"
  },
  {
    "#": 260,
    "Title": "Pinky Swear",
    "Type": "Manga Canon",
    "Airdate": "2013-01-31T08:00:00.000Z"
  },
  {
    "#": 261,
    "Title": "Unsetting Moon",
    "Type": "Manga Canon",
    "Airdate": "2013-02-07T08:00:00.000Z"
  },
  {
    "#": 262,
    "Title": "Sound Of Beam Can Pierce Heart Of Everyone",
    "Type": "Manga Canon",
    "Airdate": "2013-03-07T08:00:00.000Z"
  },
  {
    "#": 263,
    "Title": "Two Brothers",
    "Type": "Manga Canon",
    "Airdate": "2013-03-14T07:00:00.000Z"
  },
  {
    "#": 264,
    "Title": "Liquor and Gasoline, Smiles and Tears",
    "Type": "Manga Canon",
    "Airdate": "2013-03-21T07:00:00.000Z"
  },
  {
    "#": 265,
    "Title": "Dog Food Doesn't Have As Much Flavor As You'd Think",
    "Type": "Manga Canon",
    "Airdate": "2013-03-28T07:00:00.000Z"
  },
  {
    "#": 266,
    "Title": "You Can Never Pause at the Perfect Time",
    "Type": "Manga Canon",
    "Airdate": "2015-04-08T07:00:00.000Z"
  },
  {
    "#": 267,
    "Title": "Even a Matsui Stick Can't Handle Some Kinds of Dirt",
    "Type": "Manga Canon",
    "Airdate": "2015-04-15T07:00:00.000Z"
  },
  {
    "#": 268,
    "Title": "An Inspector's Love Begins with an Inspection",
    "Type": "Manga Canon",
    "Airdate": "2015-04-22T07:00:00.000Z"
  },
  {
    "#": 269,
    "Title": "Forget Dates, Remember People and You Can Hide Your Porn Mags But You Can't Hide Your ***",
    "Type": "Manga Canon",
    "Airdate": "2015-04-29T07:00:00.000Z"
  },
  {
    "#": 270,
    "Title": "A Mirror Provides a Frozen Reflection of Both Your Beautiful and Ugly Sides / Nobody Likes the Photo on Their License",
    "Type": "Manga Canon",
    "Airdate": "2015-05-06T07:00:00.000Z"
  },
  {
    "#": 271,
    "Title": "Arriving Late to a Reunion Makes it Hard to Enter",
    "Type": "Manga Canon",
    "Airdate": "2015-05-13T07:00:00.000Z"
  },
  {
    "#": 272,
    "Title": "A Reunion Also Brings to the Surface Things You Don't Want to Remember",
    "Type": "Manga Canon",
    "Airdate": "2015-05-20T07:00:00.000Z"
  },
  {
    "#": 273,
    "Title": "When Compared to Time in the Heavens, Fifty Years of Human Life Resembles Naught but Dreams and Lottery Tickets",
    "Type": "Manga Canon",
    "Airdate": "2015-05-27T07:00:00.000Z"
  },
  {
    "#": 274,
    "Title": "Guys With Big Nostrils Also Have Big Imaginations / You Never Accept a New Sentai Series at the Start, But By the Final Episode, You Don't Want It to End",
    "Type": "Manga Canon",
    "Airdate": "2015-06-03T07:00:00.000Z"
  },
  {
    "#": 275,
    "Title": "9 + 1 = Yagyu Jyubei",
    "Type": "Manga Canon",
    "Airdate": "2015-06-10T07:00:00.000Z"
  },
  {
    "#": 276,
    "Title": "Calories Come Back to Bite You Just When You've Forgotten About Them",
    "Type": "Manga Canon",
    "Airdate": "2015-06-17T07:00:00.000Z"
  },
  {
    "#": 277,
    "Title": "10-1=",
    "Type": "Manga Canon",
    "Airdate": "2015-06-24T07:00:00.000Z"
  },
  {
    "#": 278,
    "Title": "All Mothers Pack Too Much Food Into a Lunch Box and Ruin the Shape",
    "Type": "Manga Canon",
    "Airdate": "2015-07-01T07:00:00.000Z"
  },
  {
    "#": 279,
    "Title": "The Reaper by Day and the Reaper by Night",
    "Type": "Manga Canon",
    "Airdate": "2015-07-08T07:00:00.000Z"
  },
  {
    "#": 280,
    "Title": "Human or Demon",
    "Type": "Manga Canon",
    "Airdate": "2015-07-15T07:00:00.000Z"
  },
  {
    "#": 281,
    "Title": "Farewell, Reaper",
    "Type": "Manga Canon",
    "Airdate": "2015-07-22T07:00:00.000Z"
  },
  {
    "#": 282,
    "Title": "A Phoenix Rises from the Ashes Over and Over",
    "Type": "Manga Canon",
    "Airdate": "2015-07-29T07:00:00.000Z"
  },
  {
    "#": 283,
    "Title": "Amen",
    "Type": "Manga Canon",
    "Airdate": "2015-08-05T07:00:00.000Z"
  },
  {
    "#": 284,
    "Title": "Being a Leader is Tough",
    "Type": "Manga Canon",
    "Airdate": "2015-08-12T07:00:00.000Z"
  },
  {
    "#": 285,
    "Title": "Love is a Roach Motel",
    "Type": "Manga Canon",
    "Airdate": "2015-08-19T07:00:00.000Z"
  },
  {
    "#": 286,
    "Title": "A Sizzle Summer",
    "Type": "Manga Canon",
    "Airdate": "2015-08-26T07:00:00.000Z"
  },
  {
    "#": 287,
    "Title": "He's the Sweet Tooth, and I'm the Mayo Guy",
    "Type": "Manga Canon",
    "Airdate": "2015-09-02T07:00:00.000Z"
  },
  {
    "#": 288,
    "Title": "I'm a Failure as a Leader and He's Also a Failure as a Leader",
    "Type": "Manga Canon",
    "Airdate": "2015-09-09T07:00:00.000Z"
  },
  {
    "#": 289,
    "Title": "I'm Yorozuya and He's Shinsengumi",
    "Type": "Manga Canon",
    "Airdate": "2015-09-16T07:00:00.000Z"
  },
  {
    "#": 290,
    "Title": "Always Leave Enough Room for 50 Million in Your Bag",
    "Type": "Manga Canon",
    "Airdate": "2015-09-23T07:00:00.000Z"
  },
  {
    "#": 291,
    "Title": "Always Leave Enough Room for Pebbles in Your Bag",
    "Type": "Manga Canon",
    "Airdate": "2015-09-30T07:00:00.000Z"
  },
  {
    "#": 292,
    "Title": "Style Goes Out of Fashion the Moment It's Put Into Words / There Are Two Types of People In This World: Those Who Yell Out Their Attack Names, and Those Who Don't",
    "Type": "Manga Canon",
    "Airdate": "2015-10-07T07:00:00.000Z"
  },
  {
    "#": 293,
    "Title": "The Two Apes",
    "Type": "Manga Canon",
    "Airdate": "2015-10-14T07:00:00.000Z"
  },
  {
    "#": 294,
    "Title": "Afros of Life and Death",
    "Type": "Manga Canon",
    "Airdate": "2015-10-21T07:00:00.000Z"
  },
  {
    "#": 295,
    "Title": "Afuro and Wolfro",
    "Type": "Manga Canon",
    "Airdate": "2015-10-28T07:00:00.000Z"
  },
  {
    "#": 296,
    "Title": "Take the Initial Premise Lightly, and It'll Cost You",
    "Type": "Manga Canon",
    "Airdate": "2015-11-04T08:00:00.000Z"
  },
  {
    "#": 297,
    "Title": "Keep Your Farewells Short",
    "Type": "Manga Canon",
    "Airdate": "2015-11-11T08:00:00.000Z"
  },
  {
    "#": 298,
    "Title": "One Editor is Enough / The G-Pen Is Capricious, and the Maru Pen Is Stubborn",
    "Type": "Manga Canon",
    "Airdate": "2015-11-18T08:00:00.000Z"
  },
  {
    "#": 299,
    "Title": "Strike When the Sword and Overlord are Hot / Oil Rain",
    "Type": "Manga Canon",
    "Airdate": "2015-11-25T08:00:00.000Z"
  },
  {
    "#": 300,
    "Title": "Shogun Assassination Arc Part One: Shoguns of Light and Shadow",
    "Type": "Manga Canon",
    "Airdate": "2015-12-02T08:00:00.000Z"
  },
  {
    "#": 301,
    "Title": "Shogun Assassination Arc Part Two: Ninja Village",
    "Type": "Manga Canon",
    "Airdate": "2015-12-09T08:00:00.000Z"
  },
  {
    "#": 302,
    "Title": "Shogun Assassination Arc Part Three: Ninja Soul",
    "Type": "Manga Canon",
    "Airdate": "2015-12-16T08:00:00.000Z"
  },
  {
    "#": 303,
    "Title": "Shogun Assassination Arc Part Four: And Then There Were Five",
    "Type": "Manga Canon",
    "Airdate": "2015-12-23T08:00:00.000Z"
  },
  {
    "#": 304,
    "Title": "Shogun Assassination Arc Part Five: Those Who Protect Against All Odds",
    "Type": "Manga Canon",
    "Airdate": "2016-01-06T08:00:00.000Z"
  },
  {
    "#": 305,
    "Title": "Shogun Assassination Arc Part Six: Sworn Enemy",
    "Type": "Manga Canon",
    "Airdate": "2016-01-13T08:00:00.000Z"
  },
  {
    "#": 306,
    "Title": "Shogun Assassination Arc Part Seven: The Crows Caw After the Battle Ends",
    "Type": "Manga Canon",
    "Airdate": "2016-01-20T08:00:00.000Z"
  },
  {
    "#": 307,
    "Title": "Shogun Assassination Arc Part Eight: Farewell, Buddy",
    "Type": "Manga Canon",
    "Airdate": "2016-01-27T08:00:00.000Z"
  },
  {
    "#": 308,
    "Title": "Farewell Shinsengumi Arc Part One: The Day the Demon Cried",
    "Type": "Manga Canon",
    "Airdate": "2016-02-03T08:00:00.000Z"
  },
  {
    "#": 309,
    "Title": "Farewell Shinsengumi Arc Part Two: Heroes Always Arrive Fashionably Late",
    "Type": "Manga Canon",
    "Airdate": "2016-02-10T08:00:00.000Z"
  },
  {
    "#": 310,
    "Title": "Farewell Shinsengumi Arc Part Three: Lost and Found",
    "Type": "Manga Canon",
    "Airdate": "2016-02-17T08:00:00.000Z"
  },
  {
    "#": 311,
    "Title": "Farewell Shinsengumi Arc Part Four: Prison Break",
    "Type": "Manga Canon",
    "Airdate": "2016-02-24T08:00:00.000Z"
  },
  {
    "#": 312,
    "Title": "Farewell Shinsengumi Arc Part Five: Stray Dogs",
    "Type": "Manga Canon",
    "Airdate": "2016-03-02T08:00:00.000Z"
  },
  {
    "#": 313,
    "Title": "Farewell Shinsengumi Arc Part Six: Undelivered Mail",
    "Type": "Manga Canon",
    "Airdate": "2016-03-09T08:00:00.000Z"
  },
  {
    "#": 314,
    "Title": "Farewell Shinsengumi Arc Part Seven: Karma",
    "Type": "Manga Canon",
    "Airdate": "2016-03-16T07:00:00.000Z"
  },
  {
    "#": 315,
    "Title": "Farewell Shinsengumi Arc Part Eight: Nobume",
    "Type": "Manga Canon",
    "Airdate": "2016-03-23T07:00:00.000Z"
  },
  {
    "#": 316,
    "Title": "Farewell Shinsengumi Arc Part Nine: Farewell Shinsengumi",
    "Type": "Manga Canon",
    "Airdate": "2016-03-30T07:00:00.000Z"
  },
  {
    "#": 317,
    "Title": "The Monster and the Monster's Child",
    "Type": "Manga Canon",
    "Airdate": "2017-01-09T08:00:00.000Z"
  },
  {
    "#": 318,
    "Title": "Leave Letter",
    "Type": "Manga Canon",
    "Airdate": "2017-01-16T08:00:00.000Z"
  },
  {
    "#": 319,
    "Title": "The Song of Samurai",
    "Type": "Manga Canon",
    "Airdate": "2017-01-23T08:00:00.000Z"
  },
  {
    "#": 320,
    "Title": "Zura",
    "Type": "Manga Canon",
    "Airdate": "2017-01-30T08:00:00.000Z"
  },
  {
    "#": 321,
    "Title": "The Two Fools",
    "Type": "Manga Canon",
    "Airdate": "2017-02-06T08:00:00.000Z"
  },
  {
    "#": 322,
    "Title": "Ten Years",
    "Type": "Manga Canon",
    "Airdate": "2017-02-13T08:00:00.000Z"
  },
  {
    "#": 323,
    "Title": "Paths",
    "Type": "Manga Canon",
    "Airdate": "2017-02-20T08:00:00.000Z"
  },
  {
    "#": 324,
    "Title": "Master of Kouan",
    "Type": "Manga Canon",
    "Airdate": "2017-02-27T08:00:00.000Z"
  },
  {
    "#": 325,
    "Title": "The Lost Rabbit",
    "Type": "Manga Canon",
    "Airdate": "2017-03-06T08:00:00.000Z"
  },
  {
    "#": 326,
    "Title": "Siblings",
    "Type": "Manga Canon",
    "Airdate": "2017-03-13T07:00:00.000Z"
  },
  {
    "#": 327,
    "Title": "First Student",
    "Type": "Manga Canon",
    "Airdate": "2017-03-20T07:00:00.000Z"
  },
  {
    "#": 328,
    "Title": "Hope",
    "Type": "Manga Canon",
    "Airdate": "2017-03-27T07:00:00.000Z"
  },
  {
    "#": 329,
    "Title": "The Stairs to Adulthood May Not Always Lead Up",
    "Type": "Manga Canon",
    "Airdate": "2017-10-02T07:00:00.000Z"
  },
  {
    "#": 330,
    "Title": "My Bald Dad, My Light-Haired Dad, and My Dad's Glasses",
    "Type": "Manga Canon",
    "Airdate": "2017-10-09T07:00:00.000Z"
  },
  {
    "#": 331,
    "Title": "A Bowl of Ramen",
    "Type": "Manga Canon",
    "Airdate": "2017-10-16T07:00:00.000Z"
  },
  {
    "#": 332,
    "Title": "A Family",
    "Type": "Manga Canon",
    "Airdate": "2017-10-23T07:00:00.000Z"
  },
  {
    "#": 333,
    "Title": "Life, Death and Shades / All the Answers Can Be Found in the Field",
    "Type": "Manga Canon",
    "Airdate": "2017-10-30T07:00:00.000Z"
  },
  {
    "#": 334,
    "Title": "3000 Leagues in Search of a Scabbard",
    "Type": "Manga Canon",
    "Airdate": "2017-11-06T08:00:00.000Z"
  },
  {
    "#": 335,
    "Title": "The Super Sadist and the Super Sadist",
    "Type": "Manga Canon",
    "Airdate": "2017-11-13T08:00:00.000Z"
  },
  {
    "#": 336,
    "Title": "The Sharpest Sword and the Dullest Sword",
    "Type": "Manga Canon",
    "Airdate": "2017-11-20T08:00:00.000Z"
  },
  {
    "#": 337,
    "Title": "Wash Your Hands Before a Handshake",
    "Type": "Manga Canon",
    "Airdate": "2017-11-27T08:00:00.000Z"
  },
  {
    "#": 338,
    "Title": "Diamonds are Unscratchable",
    "Type": "Manga Canon",
    "Airdate": "2017-12-04T08:00:00.000Z"
  },
  {
    "#": 339,
    "Title": "An Idol's Badge of Honor",
    "Type": "Manga Canon",
    "Airdate": "2017-12-11T08:00:00.000Z"
  },
  {
    "#": 340,
    "Title": "The Line Between Godlike Games and Crappy Games is Paper-Thin / Glasses are a Part of the Soul",
    "Type": "Manga Canon",
    "Airdate": "2017-12-18T08:00:00.000Z"
  },
  {
    "#": 341,
    "Title": "Guardian Spirit are Also a Part of the Soul",
    "Type": "Manga Canon",
    "Airdate": "2017-12-25T08:00:00.000Z"
  },
  {
    "#": 342,
    "Title": "Try As You Might to Make a Natural Perm Go Away, It Will Alwasy Return",
    "Type": "Manga Canon",
    "Airdate": "2018-01-08T08:00:00.000Z"
  },
  {
    "#": 343,
    "Title": "Flavoring is Best in Small Quantities",
    "Type": "Manga Canon",
    "Airdate": "2018-01-15T08:00:00.000Z"
  },
  {
    "#": 344,
    "Title": "A Delinquent's Kid Has Long Neck Hair",
    "Type": "Manga Canon",
    "Airdate": "2018-01-22T08:00:00.000Z"
  },
  {
    "#": 345,
    "Title": "The Line Between Tenacious and Annoying Is Paper-Thin",
    "Type": "Manga Canon",
    "Airdate": "2018-01-29T08:00:00.000Z"
  },
  {
    "#": 346,
    "Title": "Geezers Carve the Things They Shouldn't Forget into Their Wrinkles",
    "Type": "Manga Canon",
    "Airdate": "2018-02-05T08:00:00.000Z"
  },
  {
    "#": 347,
    "Title": "Machine that Pick Up Useless Habits are Called People",
    "Type": "Manga Canon",
    "Airdate": "2018-02-12T08:00:00.000Z"
  },
  {
    "#": 348,
    "Title": "Men Must Live Not Long Nor Thick, but Hard",
    "Type": "Manga Canon",
    "Airdate": "2018-02-19T08:00:00.000Z"
  },
  {
    "#": 349,
    "Title": "Ogres Are Weak Against Tiny Heroes Like the Inch-High Samurai",
    "Type": "Manga Canon",
    "Airdate": "2018-02-26T08:00:00.000Z"
  },
  {
    "#": 350,
    "Title": "Bragging About Your Own Heroic Deeds Will Make People Hate You, so Make Others Do It For You",
    "Type": "Manga Canon",
    "Airdate": "2018-03-05T08:00:00.000Z"
  },
  {
    "#": 351,
    "Title": "Jump and Power Creep Go Hand-in-Hand",
    "Type": "Manga Canon",
    "Airdate": "2018-03-12T07:00:00.000Z"
  },
  {
    "#": 352,
    "Title": "Peace and Destruction are Two Sides of the Same Coin",
    "Type": "Manga Canon",
    "Airdate": "2018-03-19T07:00:00.000Z"
  },
  {
    "#": 353,
    "Title": "Bushido is Found One Second Before Death",
    "Type": "Manga Canon",
    "Airdate": "2018-03-26T07:00:00.000Z"
  },
  {
    "#": 354,
    "Title": "The Evildoers Who Do Good",
    "Type": "Manga Canon",
    "Airdate": "2018-07-09T07:00:00.000Z"
  },
  {
    "#": 355,
    "Title": "Rabbits Leap Higher on Moonlit Nights",
    "Type": "Manga Canon",
    "Airdate": "2018-07-16T07:00:00.000Z"
  },
  {
    "#": 356,
    "Title": "Making a Dull World Interesting",
    "Type": "Manga Canon",
    "Airdate": "2018-07-23T07:00:00.000Z"
  },
  {
    "#": 357,
    "Title": "Do Something Uncharacteristic, and Something Uncharacteristic Will Happen",
    "Type": "Manga Canon",
    "Airdate": "2018-07-30T07:00:00.000Z"
  },
  {
    "#": 358,
    "Title": "Countless Kings",
    "Type": "Manga Canon",
    "Airdate": "2018-08-06T07:00:00.000Z"
  },
  {
    "#": 359,
    "Title": "The Unemployed Cannot Be Stained By Anything",
    "Type": "Manga Canon",
    "Airdate": "2018-08-13T07:00:00.000Z"
  },
  {
    "#": 360,
    "Title": "Always Hold On to Your Trump Cards",
    "Type": "Manga Canon",
    "Airdate": "2018-08-20T07:00:00.000Z"
  },
  {
    "#": 361,
    "Title": "The Creatures Known as Humanity",
    "Type": "Manga Canon",
    "Airdate": "2018-08-27T07:00:00.000Z"
  },
  {
    "#": 362,
    "Title": "Sign",
    "Type": "Manga Canon",
    "Airdate": "2018-09-03T07:00:00.000Z"
  },
  {
    "#": 363,
    "Title": "Specter",
    "Type": "Manga Canon",
    "Airdate": "2018-09-10T07:00:00.000Z"
  },
  {
    "#": 364,
    "Title": "Two in Girl Years Is Equal to Ten in Man Years",
    "Type": "Manga Canon",
    "Airdate": "2018-09-17T07:00:00.000Z"
  },
  {
    "#": 365,
    "Title": "Salvation",
    "Type": "Manga Canon",
    "Airdate": "2018-09-24T07:00:00.000Z"
  },
  {
    "#": 366,
    "Title": "Dun Dun",
    "Type": "Manga Canon",
    "Airdate": "2018-10-01T07:00:00.000Z"
  },
  {
    "#": 367,
    "Title": "There Are Lines Even Villains Can't Cross",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2018-10-08T07:00:00.000Z"
  },
  {
    "#": 368,
    "Title": "Don't Spread the Wrapping Cloth Without Thinking Ahead",
    "Type": "Manga Canon",
    "Airdate": "2021-01-15T08:00:00.000Z"
  },
  {
    "#": 369,
    "Title": "Don't Make Up Your Mind Right Before The Important Decision",
    "Type": "Manga Canon",
    "Airdate": "2021-01-20T08:00:00.000Z"
  }
],

'G6JQVM3ER': //DETECTIVE CONAN
[
  {
    "#": 1,
    "Title": "The Roller Coaster Murder Case",
    "Type": "Manga Canon",
    "Airdate": "1996-01-08T08:00:00.000Z"
  },
  {
    "#": 2,
    "Title": "Company President's Daughter Kidnapping Case",
    "Type": "Manga Canon",
    "Airdate": "1996-01-15T08:00:00.000Z"
  },
  {
    "#": 3,
    "Title": "An Idol's Locked Room Murder Case",
    "Type": "Manga Canon",
    "Airdate": "1996-01-22T08:00:00.000Z"
  },
  {
    "#": 4,
    "Title": "The Coded Map of the City Case",
    "Type": "Manga Canon",
    "Airdate": "1996-01-29T08:00:00.000Z"
  },
  {
    "#": 5,
    "Title": "The Shinkansen's Bomb Case",
    "Type": "Manga Canon",
    "Airdate": "1996-02-05T08:00:00.000Z"
  },
  {
    "#": 6,
    "Title": "Valentine Murder Case",
    "Type": "Filler",
    "Airdate": "1996-02-12T08:00:00.000Z"
  },
  {
    "#": 7,
    "Title": "Once-A-Month Present Threat Case",
    "Type": "Manga Canon",
    "Airdate": "1996-02-19T08:00:00.000Z"
  },
  {
    "#": 8,
    "Title": "Art Museum Owner Murder Case",
    "Type": "Manga Canon",
    "Airdate": "1996-02-26T08:00:00.000Z"
  },
  {
    "#": 9,
    "Title": "Tenkaichi Night Festival Murder Case",
    "Type": "Manga Canon",
    "Airdate": "1996-03-04T08:00:00.000Z"
  },
  {
    "#": 10,
    "Title": "Pro Soccer Player Blackmail Case",
    "Type": "Manga Canon",
    "Airdate": "1996-03-11T08:00:00.000Z"
  },
  {
    "#": 11,
    "Title": "Moonlight Sonata Murder Case (1 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "1996-04-08T07:00:00.000Z"
  },
  {
    "#": 12,
    "Title": "Ayumi-chan Kidnapping Case",
    "Type": "Manga Canon",
    "Airdate": "1996-04-15T07:00:00.000Z"
  },
  {
    "#": 13,
    "Title": "The Strange Person Hunt Murder Case",
    "Type": "Manga Canon",
    "Airdate": "1996-04-22T07:00:00.000Z"
  },
  {
    "#": 14,
    "Title": "The Mysterious Shooting Message Case",
    "Type": "Filler",
    "Airdate": "1996-04-29T07:00:00.000Z"
  },
  {
    "#": 15,
    "Title": "Missing Corpse Murder Case",
    "Type": "Manga Canon",
    "Airdate": "1996-05-13T07:00:00.000Z"
  },
  {
    "#": 16,
    "Title": "The Antique Collector Murder Case",
    "Type": "Manga Canon",
    "Airdate": "1996-05-20T07:00:00.000Z"
  },
  {
    "#": 17,
    "Title": "The Case of the Hi-Jacked Department Store",
    "Type": "Filler",
    "Airdate": "1996-05-27T07:00:00.000Z"
  },
  {
    "#": 18,
    "Title": "A June Bride Murder Case",
    "Type": "Manga Canon",
    "Airdate": "1996-06-03T07:00:00.000Z"
  },
  {
    "#": 19,
    "Title": "An Elevator Murder Case",
    "Type": "Filler",
    "Airdate": "1996-06-10T07:00:00.000Z"
  },
  {
    "#": 20,
    "Title": "A Haunted Mansion Murder Case",
    "Type": "Manga Canon",
    "Airdate": "1996-06-17T07:00:00.000Z"
  },
  {
    "#": 21,
    "Title": "On Location, TV Drama Murder Case",
    "Type": "Filler",
    "Airdate": "1996-06-24T07:00:00.000Z"
  },
  {
    "#": 22,
    "Title": "Luxury Liner Serial Murder Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1996-07-01T07:00:00.000Z"
  },
  {
    "#": 23,
    "Title": "Luxury Liner Serial Murder Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1996-07-08T07:00:00.000Z"
  },
  {
    "#": 24,
    "Title": "The Mysterious Woman With Amnesia Case",
    "Type": "Filler",
    "Airdate": "1996-07-15T07:00:00.000Z"
  },
  {
    "#": 25,
    "Title": "The False Kidnapping and Hostage Case",
    "Type": "Filler",
    "Airdate": "1996-07-22T07:00:00.000Z"
  },
  {
    "#": 26,
    "Title": "Pet Dog John Murder Case",
    "Type": "Filler",
    "Airdate": "1996-07-29T07:00:00.000Z"
  },
  {
    "#": 27,
    "Title": "Kogoro's Class Reunion Murder Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1996-08-05T07:00:00.000Z"
  },
  {
    "#": 28,
    "Title": "Kogoro's Class Reunion Murder Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1996-08-12T07:00:00.000Z"
  },
  {
    "#": 29,
    "Title": "Computer Murder Case",
    "Type": "Filler",
    "Airdate": "1996-08-19T07:00:00.000Z"
  },
  {
    "#": 30,
    "Title": "Alibi Testimony Murder Case",
    "Type": "Filler",
    "Airdate": "1996-08-26T07:00:00.000Z"
  },
  {
    "#": 31,
    "Title": "TV Station Murder Case",
    "Type": "Manga Canon",
    "Airdate": "1996-09-02T07:00:00.000Z"
  },
  {
    "#": 32,
    "Title": "Coffee Shop Murder Case",
    "Type": "Manga Canon",
    "Airdate": "1996-09-09T07:00:00.000Z"
  },
  {
    "#": 33,
    "Title": "Detective Boys Survival Case",
    "Type": "Filler",
    "Airdate": "1996-10-14T07:00:00.000Z"
  },
  {
    "#": 34,
    "Title": "Mountain Villa Bandaged Man Murder Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1996-10-21T07:00:00.000Z"
  },
  {
    "#": 35,
    "Title": "Mountain Villa Bandaged Man Murder Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1996-10-28T08:00:00.000Z"
  },
  {
    "#": 36,
    "Title": "Monday Night 7:30 P.M. Murder Case",
    "Type": "Filler",
    "Airdate": "1996-11-04T08:00:00.000Z"
  },
  {
    "#": 37,
    "Title": "Cactus's Flower Murder Case",
    "Type": "Filler",
    "Airdate": "1996-11-11T08:00:00.000Z"
  },
  {
    "#": 38,
    "Title": "Akaoni Village Fire Festival Murder Case",
    "Type": "Manga Canon",
    "Airdate": "1996-11-18T08:00:00.000Z"
  },
  {
    "#": 39,
    "Title": "Wealthy Daughter Murder Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1996-11-25T08:00:00.000Z"
  },
  {
    "#": 40,
    "Title": "Wealthy Daughter Murder Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1996-12-02T08:00:00.000Z"
  },
  {
    "#": 41,
    "Title": "Victory Flag Tearing Case",
    "Type": "Filler",
    "Airdate": "1996-12-09T08:00:00.000Z"
  },
  {
    "#": 42,
    "Title": "Karaoke Box Murder Case",
    "Type": "Manga Canon",
    "Airdate": "1996-12-16T08:00:00.000Z"
  },
  {
    "#": 43,
    "Title": "Conan Edogawa Kidnapping Case",
    "Type": "Manga Canon",
    "Airdate": "1997-01-13T08:00:00.000Z"
  },
  {
    "#": 44,
    "Title": "Three Hotta Siblings Murder Case",
    "Type": "Filler",
    "Airdate": "1997-01-20T08:00:00.000Z"
  },
  {
    "#": 45,
    "Title": "Facial Mask Murder Case",
    "Type": "Filler",
    "Airdate": "1997-01-27T08:00:00.000Z"
  },
  {
    "#": 46,
    "Title": "Alpine Hut in the Snowy Mountain Murder Case",
    "Type": "Manga Canon",
    "Airdate": "1997-02-03T08:00:00.000Z"
  },
  {
    "#": 47,
    "Title": "Sports Club Murder Case",
    "Type": "Filler",
    "Airdate": "1997-02-10T08:00:00.000Z"
  },
  {
    "#": 48,
    "Title": "Diplomat Murder Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1997-02-17T08:00:00.000Z"
  },
  {
    "#": 49,
    "Title": "Diplomat Murder Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1997-02-24T08:00:00.000Z"
  },
  {
    "#": 50,
    "Title": "Library Murder Case",
    "Type": "Manga Canon",
    "Airdate": "1997-03-03T08:00:00.000Z"
  },
  {
    "#": 51,
    "Title": "The Golf Driving Range Murder Case",
    "Type": "Filler",
    "Airdate": "1997-03-10T08:00:00.000Z"
  },
  {
    "#": 52,
    "Title": "The Mist Goblin Legend Murder Case (1 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "1997-03-17T08:00:00.000Z"
  },
  {
    "#": 53,
    "Title": "The Mystery Weapon Murder Case",
    "Type": "Filler",
    "Airdate": "1997-04-07T07:00:00.000Z"
  },
  {
    "#": 54,
    "Title": "Game Company Murder Case",
    "Type": "Manga Canon",
    "Airdate": "1997-04-14T07:00:00.000Z"
  },
  {
    "#": 55,
    "Title": "The Train Trick Murder Case",
    "Type": "Filler",
    "Airdate": "1997-04-21T07:00:00.000Z"
  },
  {
    "#": 56,
    "Title": "The Ojamanbou Murder Case",
    "Type": "Filler",
    "Airdate": "1997-04-28T07:00:00.000Z"
  },
  {
    "#": 57,
    "Title": "Holmes Freak Murder Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1997-05-05T07:00:00.000Z"
  },
  {
    "#": 58,
    "Title": "Holmes Freak Murder Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1997-05-12T07:00:00.000Z"
  },
  {
    "#": 59,
    "Title": "The First Errand Murder Case",
    "Type": "Filler",
    "Airdate": "1997-05-19T07:00:00.000Z"
  },
  {
    "#": 60,
    "Title": "An Illustrator Murder Case",
    "Type": "Manga Canon",
    "Airdate": "1997-05-26T07:00:00.000Z"
  },
  {
    "#": 61,
    "Title": "A Ghost Ship Murder Case (Part 1)",
    "Type": "Filler",
    "Airdate": "1997-06-02T07:00:00.000Z"
  },
  {
    "#": 62,
    "Title": "A Ghost Ship Murder Case (Part 2)",
    "Type": "Filler",
    "Airdate": "1997-06-09T07:00:00.000Z"
  },
  {
    "#": 63,
    "Title": "Big Monster Gomera Murder Case",
    "Type": "Manga Canon",
    "Airdate": "1997-06-16T07:00:00.000Z"
  },
  {
    "#": 64,
    "Title": "The Third Fingerprint Murder Case",
    "Type": "Filler",
    "Airdate": "1997-06-23T07:00:00.000Z"
  },
  {
    "#": 65,
    "Title": "A Crab and Whale Kidnapping Case",
    "Type": "Filler",
    "Airdate": "1997-06-30T07:00:00.000Z"
  },
  {
    "#": 66,
    "Title": "Night Road Murder Case",
    "Type": "Filler",
    "Airdate": "1997-07-07T07:00:00.000Z"
  },
  {
    "#": 67,
    "Title": "Stage Actress Murder Case",
    "Type": "Filler",
    "Airdate": "1997-07-14T07:00:00.000Z"
  },
  {
    "#": 68,
    "Title": "Night Baron Murder Case (Case Part)",
    "Type": "Manga Canon",
    "Airdate": "1997-07-21T07:00:00.000Z"
  },
  {
    "#": 69,
    "Title": "Night Baron Murder Case (Suspicion Part)",
    "Type": "Manga Canon",
    "Airdate": "1997-07-28T07:00:00.000Z"
  },
  {
    "#": 70,
    "Title": "Night Baron Murder Case (Resolution Part)",
    "Type": "Manga Canon",
    "Airdate": "1997-08-04T07:00:00.000Z"
  },
  {
    "#": 71,
    "Title": "A Stalker's Murder Case",
    "Type": "Filler",
    "Airdate": "1997-08-11T07:00:00.000Z"
  },
  {
    "#": 72,
    "Title": "The Triplet's Country Home Murder Case",
    "Type": "Manga Canon",
    "Airdate": "1997-08-18T07:00:00.000Z"
  },
  {
    "#": 73,
    "Title": "The Detective Boys' Disaster Case",
    "Type": "Filler",
    "Airdate": "1997-08-25T07:00:00.000Z"
  },
  {
    "#": 74,
    "Title": "The Death God Jinnai Murder Case",
    "Type": "Filler",
    "Airdate": "1997-09-01T07:00:00.000Z"
  },
  {
    "#": 75,
    "Title": "Loan Company President's Murder Case",
    "Type": "Manga Canon",
    "Airdate": "1997-09-08T07:00:00.000Z"
  },
  {
    "#": 76,
    "Title": "Conan vs. Kaito Kid (1 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "1997-09-22T07:00:00.000Z"
  },
  {
    "#": 77,
    "Title": "Distinguished Family's Consecutive Accidental Death Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1997-10-20T07:00:00.000Z"
  },
  {
    "#": 78,
    "Title": "Distinguished Family's Consecutive Accidental Death Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1997-10-27T08:00:00.000Z"
  },
  {
    "#": 79,
    "Title": "The Bank Heist Murder Case",
    "Type": "Filler",
    "Airdate": "1997-11-03T08:00:00.000Z"
  },
  {
    "#": 80,
    "Title": "The Wandering Artist Murder Case",
    "Type": "Filler",
    "Airdate": "1997-11-10T08:00:00.000Z"
  },
  {
    "#": 81,
    "Title": "The Kidnapping of a Popular Artist Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1997-11-17T08:00:00.000Z"
  },
  {
    "#": 82,
    "Title": "The Kidnapping of a Popular Artist Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1997-11-24T08:00:00.000Z"
  },
  {
    "#": 83,
    "Title": "General Hospital Murder Case",
    "Type": "Filler",
    "Airdate": "1997-12-01T08:00:00.000Z"
  },
  {
    "#": 84,
    "Title": "Ski Lodge Murder Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1997-12-08T08:00:00.000Z"
  },
  {
    "#": 85,
    "Title": "Ski Lodge Murder Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1997-12-15T08:00:00.000Z"
  },
  {
    "#": 86,
    "Title": "The Kidnapping Location Case",
    "Type": "Manga Canon",
    "Airdate": "1998-01-12T08:00:00.000Z"
  },
  {
    "#": 87,
    "Title": "The Crane's Reciprocation Murder Case",
    "Type": "Filler",
    "Airdate": "1998-01-19T08:00:00.000Z"
  },
  {
    "#": 88,
    "Title": "Dracula's Villa Murder Case (Part 1)",
    "Type": "Filler",
    "Airdate": "1998-01-26T08:00:00.000Z"
  },
  {
    "#": 89,
    "Title": "Dracula's Villa Murder Case (Part 2)",
    "Type": "Filler",
    "Airdate": "1998-02-02T08:00:00.000Z"
  },
  {
    "#": 90,
    "Title": "The Flower Scent Murder Case",
    "Type": "Filler",
    "Airdate": "1998-02-09T08:00:00.000Z"
  },
  {
    "#": 91,
    "Title": "The Bank Robber's Hospitalization Case",
    "Type": "Manga Canon",
    "Airdate": "1998-02-16T08:00:00.000Z"
  },
  {
    "#": 92,
    "Title": "The Fearful Traversing Murder Case (Part 1)",
    "Type": "Filler",
    "Airdate": "1998-02-23T08:00:00.000Z"
  },
  {
    "#": 93,
    "Title": "The Fearful Traversing Murder Case (Part 2)",
    "Type": "Filler",
    "Airdate": "1998-03-02T08:00:00.000Z"
  },
  {
    "#": 94,
    "Title": "Snow Woman Legend Murder Case",
    "Type": "Filler",
    "Airdate": "1998-03-09T08:00:00.000Z"
  },
  {
    "#": 95,
    "Title": "Kogoro's Date Murder Case",
    "Type": "Filler",
    "Airdate": "1998-03-16T08:00:00.000Z"
  },
  {
    "#": 96,
    "Title": "Caught Up with the Great Detective! 2 Murder Cases! (2 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "1998-03-23T08:00:00.000Z"
  },
  {
    "#": 97,
    "Title": "The Farewell Wine Murder Case",
    "Type": "Filler",
    "Airdate": "1998-04-13T07:00:00.000Z"
  },
  {
    "#": 98,
    "Title": "The Famous Potter Murder Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1998-04-20T07:00:00.000Z"
  },
  {
    "#": 99,
    "Title": "The Famous Potter Murder Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1998-04-27T07:00:00.000Z"
  },
  {
    "#": 100,
    "Title": "The Memories of First Love Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1998-05-11T07:00:00.000Z"
  },
  {
    "#": 101,
    "Title": "The Memories of First Love Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1998-05-18T07:00:00.000Z"
  },
  {
    "#": 102,
    "Title": "Historical Actor Murder Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1998-05-24T07:00:00.000Z"
  },
  {
    "#": 103,
    "Title": "Historical Actor Murder Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1998-06-01T07:00:00.000Z"
  },
  {
    "#": 104,
    "Title": "The Mysterious Robbers and Mansion Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1998-06-08T07:00:00.000Z"
  },
  {
    "#": 105,
    "Title": "The Mysterious Robbers and Mansion Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1998-06-15T07:00:00.000Z"
  },
  {
    "#": 106,
    "Title": "Scoop Picture Murder Case",
    "Type": "Filler",
    "Airdate": "1998-06-22T07:00:00.000Z"
  },
  {
    "#": 107,
    "Title": "The Mysterious Mole Alien Case (Part 1)",
    "Type": "Filler",
    "Airdate": "1998-06-29T07:00:00.000Z"
  },
  {
    "#": 108,
    "Title": "The Mysterious Mole Alien Case (Part 2)",
    "Type": "Filler",
    "Airdate": "1998-07-06T07:00:00.000Z"
  },
  {
    "#": 109,
    "Title": "Detective Club Pursuit Case",
    "Type": "Filler",
    "Airdate": "1998-07-13T07:00:00.000Z"
  },
  {
    "#": 110,
    "Title": "Cooking Classroom Murder Case (Part 1)",
    "Type": "Filler",
    "Airdate": "1998-08-10T07:00:00.000Z"
  },
  {
    "#": 111,
    "Title": "Cooking Classroom Murder Case (Part 2)",
    "Type": "Filler",
    "Airdate": "1998-07-27T07:00:00.000Z"
  },
  {
    "#": 112,
    "Title": "The Seven Mysteries of Teitan Elementary School Case",
    "Type": "Manga Canon",
    "Airdate": "1998-08-03T07:00:00.000Z"
  },
  {
    "#": 113,
    "Title": "The White Sandy Beach Murder Case",
    "Type": "Manga Canon",
    "Airdate": "1998-08-24T07:00:00.000Z"
  },
  {
    "#": 114,
    "Title": "Scuba Diving Murder Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1998-08-31T07:00:00.000Z"
  },
  {
    "#": 115,
    "Title": "Scuba Diving Murder Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1998-08-17T07:00:00.000Z"
  },
  {
    "#": 116,
    "Title": "The Mystery Writer Disappearance Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1998-09-07T07:00:00.000Z"
  },
  {
    "#": 117,
    "Title": "The Mystery Writer Disappearance Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1998-09-14T07:00:00.000Z"
  },
  {
    "#": 118,
    "Title": "The Naniwa Serial Murder Case (1 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "1998-09-21T07:00:00.000Z"
  },
  {
    "#": 119,
    "Title": "Masked Yaiba Murder Case",
    "Type": "Filler",
    "Airdate": "1998-10-12T07:00:00.000Z"
  },
  {
    "#": 120,
    "Title": "A Honey Cocktail Murder Case",
    "Type": "Filler",
    "Airdate": "1998-10-19T07:00:00.000Z"
  },
  {
    "#": 121,
    "Title": "The Locked Bathroom Murder Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1998-10-26T08:00:00.000Z"
  },
  {
    "#": 122,
    "Title": "The Locked Bathroom Murder Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1998-11-02T08:00:00.000Z"
  },
  {
    "#": 123,
    "Title": "The Weather Girl Kidnapping Case",
    "Type": "Filler",
    "Airdate": "1998-11-09T08:00:00.000Z"
  },
  {
    "#": 124,
    "Title": "A Mysterious Sniper Murder Case (Part 1)",
    "Type": "Filler",
    "Airdate": "1998-11-16T08:00:00.000Z"
  },
  {
    "#": 125,
    "Title": "A Mysterious Sniper Murder Case (Part 2)",
    "Type": "Filler",
    "Airdate": "1998-11-23T08:00:00.000Z"
  },
  {
    "#": 126,
    "Title": "The Traveling Drama Troupe Murder Case (Part 1)",
    "Type": "Filler",
    "Airdate": "1998-11-30T08:00:00.000Z"
  },
  {
    "#": 127,
    "Title": "The Traveling Drama Troupe Murder Case (Part 2)",
    "Type": "Filler",
    "Airdate": "1998-12-07T08:00:00.000Z"
  },
  {
    "#": 128,
    "Title": "The Black Organization: 1 Billion Yen Robbery Case",
    "Type": "Manga Canon",
    "Airdate": "1998-12-14T08:00:00.000Z"
  },
  {
    "#": 129,
    "Title": "The Girl from the Black Organization and the University Professor Murder Case (2 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "1999-01-04T08:00:00.000Z"
  },
  {
    "#": 130,
    "Title": "The Indiscriminate Threatening Stadium Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1999-01-11T08:00:00.000Z"
  },
  {
    "#": 131,
    "Title": "The Indiscriminate Threatening Stadium Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1999-01-18T08:00:00.000Z"
  },
  {
    "#": 132,
    "Title": "Magic Lover's Murder Case (The Murder)",
    "Type": "Manga Canon",
    "Airdate": "1999-01-25T08:00:00.000Z"
  },
  {
    "#": 133,
    "Title": "Magic Lover's Murder Case (The Suspicion)",
    "Type": "Manga Canon",
    "Airdate": "1999-02-01T08:00:00.000Z"
  },
  {
    "#": 134,
    "Title": "Magic Lover's Murder Case (The Resolution)",
    "Type": "Manga Canon",
    "Airdate": "1999-02-08T08:00:00.000Z"
  },
  {
    "#": 135,
    "Title": "The Disappearing Weapon Case",
    "Type": "Filler",
    "Airdate": "1999-02-15T08:00:00.000Z"
  },
  {
    "#": 136,
    "Title": "The Old Blue Castle Investigation Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1999-02-22T08:00:00.000Z"
  },
  {
    "#": 137,
    "Title": "The Old Blue Castle Investigation Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1999-03-01T08:00:00.000Z"
  },
  {
    "#": 138,
    "Title": "The Final Screening Murder Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1999-03-08T08:00:00.000Z"
  },
  {
    "#": 139,
    "Title": "The Final Screening Murder Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1999-03-15T08:00:00.000Z"
  },
  {
    "#": 140,
    "Title": "SOS! Message from Ayumi!",
    "Type": "Filler",
    "Airdate": "1999-04-12T07:00:00.000Z"
  },
  {
    "#": 141,
    "Title": "The Night Before the Wedding Locked Room Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1999-04-19T07:00:00.000Z"
  },
  {
    "#": 142,
    "Title": "The Night Before the Wedding Locked Room Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1999-04-26T07:00:00.000Z"
  },
  {
    "#": 143,
    "Title": "The Suspicious Astronomical Observation",
    "Type": "Filler",
    "Airdate": "1999-05-03T07:00:00.000Z"
  },
  {
    "#": 144,
    "Title": "The North Star No. 3 Express Leaving Ueno (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1999-05-10T07:00:00.000Z"
  },
  {
    "#": 145,
    "Title": "The North Star No. 3 Express Leaving Ueno (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1999-05-17T07:00:00.000Z"
  },
  {
    "#": 146,
    "Title": "Metropolitan Police Detective Love Story (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1999-05-24T07:00:00.000Z"
  },
  {
    "#": 147,
    "Title": "Metropolitan Police Detective Love Story (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1999-05-30T07:00:00.000Z"
  },
  {
    "#": 148,
    "Title": "The Sudden Street Car Stopping Case",
    "Type": "Filler",
    "Airdate": "1999-06-07T07:00:00.000Z"
  },
  {
    "#": 149,
    "Title": "The Amusement Park Bungee Jumping Case",
    "Type": "Filler",
    "Airdate": "1999-06-21T07:00:00.000Z"
  },
  {
    "#": 150,
    "Title": "The Truth of the Exploding Car Case (Part 1)",
    "Type": "Filler",
    "Airdate": "1999-06-28T07:00:00.000Z"
  },
  {
    "#": 151,
    "Title": "The Truth of the Exploding Car Case (Part 2)",
    "Type": "Filler",
    "Airdate": "1999-07-05T07:00:00.000Z"
  },
  {
    "#": 152,
    "Title": "The Mysterious Old Man Disappearance Case",
    "Type": "Filler",
    "Airdate": "1999-07-12T07:00:00.000Z"
  },
  {
    "#": 153,
    "Title": "Sonoko's Dangerous Summer Story (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1999-07-19T07:00:00.000Z"
  },
  {
    "#": 154,
    "Title": "Sonoko's Dangerous Summer Story (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1999-07-26T07:00:00.000Z"
  },
  {
    "#": 155,
    "Title": "The Key in the Water Locked Room Case",
    "Type": "Filler",
    "Airdate": "1999-08-02T07:00:00.000Z"
  },
  {
    "#": 156,
    "Title": "Metropolitan Police Detective Love Story 2 (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1999-08-09T07:00:00.000Z"
  },
  {
    "#": 157,
    "Title": "Metropolitan Police Detective Love Story 2 (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1999-08-16T07:00:00.000Z"
  },
  {
    "#": 158,
    "Title": "The Silent Ring Line",
    "Type": "Filler",
    "Airdate": "1999-08-23T07:00:00.000Z"
  },
  {
    "#": 159,
    "Title": "Bizarre! The Legend of the Five Storied Pagoda (Part 1)",
    "Type": "Filler",
    "Airdate": "1999-09-06T07:00:00.000Z"
  },
  {
    "#": 160,
    "Title": "Bizarre! The Legend of the Five Storied Pagoda (Part 2)",
    "Type": "Filler",
    "Airdate": "1999-09-13T07:00:00.000Z"
  },
  {
    "#": 161,
    "Title": "The Murder Floating in Ryusuitei",
    "Type": "Filler",
    "Airdate": "1999-09-20T07:00:00.000Z"
  },
  {
    "#": 162,
    "Title": "The Sealed Chamber in the Sky! Shinichi Kudo's First Case (1 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "1999-09-27T07:00:00.000Z"
  },
  {
    "#": 163,
    "Title": "The Secret of the Moon, the Star, and the Sun (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1999-10-11T07:00:00.000Z"
  },
  {
    "#": 164,
    "Title": "The Secret of the Moon, the Star, and the Sun (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1999-10-18T07:00:00.000Z"
  },
  {
    "#": 165,
    "Title": "The Disappearing Detective Boys Case",
    "Type": "Filler",
    "Airdate": "1999-10-25T07:00:00.000Z"
  },
  {
    "#": 166,
    "Title": "Tottori Spider Mansion Demon (The Murder)",
    "Type": "Manga Canon",
    "Airdate": "1999-11-01T08:00:00.000Z"
  },
  {
    "#": 167,
    "Title": "Tottori Spider Mansion Demon (The Suspicion)",
    "Type": "Manga Canon",
    "Airdate": "1999-11-08T08:00:00.000Z"
  },
  {
    "#": 168,
    "Title": "Tottori Spider Mansion Demon (The Resolution)",
    "Type": "Manga Canon",
    "Airdate": "1999-11-15T08:00:00.000Z"
  },
  {
    "#": 169,
    "Title": "Venus' Kiss",
    "Type": "Filler",
    "Airdate": "1999-11-22T08:00:00.000Z"
  },
  {
    "#": 170,
    "Title": "The Blind Spot in the Darkness (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1999-11-29T08:00:00.000Z"
  },
  {
    "#": 171,
    "Title": "The Blind Spot in the Darkness (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1999-12-06T08:00:00.000Z"
  },
  {
    "#": 172,
    "Title": "The Revival of the Dying Message (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "1999-12-13T08:00:00.000Z"
  },
  {
    "#": 173,
    "Title": "The Revival of the Dying Message (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "1999-12-20T08:00:00.000Z"
  },
  {
    "#": 174,
    "Title": "The 20 Year Old Murder Case: The Symphony Serial Murders (2 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "2000-01-03T08:00:00.000Z"
  },
  {
    "#": 175,
    "Title": "The Man Who Was Killed Four Times",
    "Type": "Filler",
    "Airdate": "2000-01-10T08:00:00.000Z"
  },
  {
    "#": 176,
    "Title": "Reunion with the Black Organization (Haibara)",
    "Type": "Manga Canon",
    "Airdate": "2000-01-17T08:00:00.000Z"
  },
  {
    "#": 177,
    "Title": "Reunion with the Black Organization (Conan)",
    "Type": "Manga Canon",
    "Airdate": "2000-01-24T08:00:00.000Z"
  },
  {
    "#": 178,
    "Title": "Reunion with the Black Organization (The Resolution)",
    "Type": "Manga Canon",
    "Airdate": "2000-01-31T08:00:00.000Z"
  },
  {
    "#": 179,
    "Title": "The Coffee Shop Truck's Wild Entrance Case",
    "Type": "Filler",
    "Airdate": "2000-02-07T08:00:00.000Z"
  },
  {
    "#": 180,
    "Title": "The Nocturne of Red Murderous Intent (Part 1)",
    "Type": "Filler",
    "Airdate": "2000-02-14T08:00:00.000Z"
  },
  {
    "#": 181,
    "Title": "The Nocturne of Red Murderous Intent (Part 2)",
    "Type": "Filler",
    "Airdate": "2000-02-21T08:00:00.000Z"
  },
  {
    "#": 182,
    "Title": "The Big Investigation of the Nine Doors",
    "Type": "Filler",
    "Airdate": "2000-02-28T08:00:00.000Z"
  },
  {
    "#": 183,
    "Title": "A Dangerous Recipe",
    "Type": "Filler",
    "Airdate": "2000-03-06T08:00:00.000Z"
  },
  {
    "#": 184,
    "Title": "A Cursed Mask Coldly Laughs (1 Hour Special)",
    "Type": "Filler",
    "Airdate": "2000-03-13T08:00:00.000Z"
  },
  {
    "#": 185,
    "Title": "The Murdered Famous Detective (Part 1)",
    "Type": "Filler",
    "Airdate": "2000-04-10T07:00:00.000Z"
  },
  {
    "#": 186,
    "Title": "The Murdered Famous Detective (Part 2)",
    "Type": "Filler",
    "Airdate": "2000-04-17T07:00:00.000Z"
  },
  {
    "#": 187,
    "Title": "The Mysterious Gun Rings in the Dark",
    "Type": "Filler",
    "Airdate": "2000-04-24T07:00:00.000Z"
  },
  {
    "#": 188,
    "Title": "The Desperate Revival - The Cavern of the Detective Boys",
    "Type": "Manga Canon",
    "Airdate": "2000-05-01T07:00:00.000Z"
  },
  {
    "#": 189,
    "Title": "The Desperate Revival - The Wounded Great Detective",
    "Type": "Manga Canon",
    "Airdate": "2000-05-08T07:00:00.000Z"
  },
  {
    "#": 190,
    "Title": "The Desperate Revival - The Third Choice",
    "Type": "Manga Canon",
    "Airdate": "2000-05-15T07:00:00.000Z"
  },
  {
    "#": 191,
    "Title": "The Desperate Revival - The Black Knight",
    "Type": "Manga Canon",
    "Airdate": "2000-05-22T07:00:00.000Z"
  },
  {
    "#": 192,
    "Title": "The Desperate Revival - Shinichi's Return",
    "Type": "Manga Canon",
    "Airdate": "2000-05-29T07:00:00.000Z"
  },
  {
    "#": 193,
    "Title": "The Desperate Revival - The Promised Place",
    "Type": "Manga Canon",
    "Airdate": "2000-06-05T07:00:00.000Z"
  },
  {
    "#": 194,
    "Title": "The Significant Music Box (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2000-06-12T07:00:00.000Z"
  },
  {
    "#": 195,
    "Title": "The Significant Music Box (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2000-06-19T07:00:00.000Z"
  },
  {
    "#": 196,
    "Title": "The Invisible Weapon, Ran's First Investigation",
    "Type": "Filler",
    "Airdate": "2000-06-26T07:00:00.000Z"
  },
  {
    "#": 197,
    "Title": "The Super Car's Trap (Part 1)",
    "Type": "Filler",
    "Airdate": "2000-07-03T07:00:00.000Z"
  },
  {
    "#": 198,
    "Title": "The Super Car's Trap (Part 2)",
    "Type": "Filler",
    "Airdate": "2000-07-10T07:00:00.000Z"
  },
  {
    "#": 199,
    "Title": "Kogoro Mori, Suspect (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2000-07-17T07:00:00.000Z"
  },
  {
    "#": 200,
    "Title": "Kogoro Mori, Suspect (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2000-07-24T07:00:00.000Z"
  },
  {
    "#": 201,
    "Title": "The Tenth Passenger (Part 1)",
    "Type": "Filler",
    "Airdate": "2000-07-31T07:00:00.000Z"
  },
  {
    "#": 202,
    "Title": "The Tenth Passenger (Part 2)",
    "Type": "Filler",
    "Airdate": "2000-08-07T07:00:00.000Z"
  },
  {
    "#": 203,
    "Title": "The Black Wing of Icarus (Part 1)",
    "Type": "Filler",
    "Airdate": "2000-08-14T07:00:00.000Z"
  },
  {
    "#": 204,
    "Title": "The Black Wing of Icarus (Part 2)",
    "Type": "Filler",
    "Airdate": "2000-08-21T07:00:00.000Z"
  },
  {
    "#": 205,
    "Title": "Metropolitan Police Detective Love Story 3 (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2000-08-28T07:00:00.000Z"
  },
  {
    "#": 206,
    "Title": "Metropolitan Police Detective Love Story 3 (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2000-09-04T07:00:00.000Z"
  },
  {
    "#": 207,
    "Title": "The Deduction That Was Too Good",
    "Type": "Filler",
    "Airdate": "2000-09-11T07:00:00.000Z"
  },
  {
    "#": 208,
    "Title": "The Entrance to the Maze: The Anger of Colossussup class=",
    "Type": "Filler",
    "Airdate": "2000-10-09T07:00:00.000Z"
  },
  {
    "#": 209,
    "Title": "The Falling from Mt. Ryushin Case",
    "Type": "Filler",
    "Airdate": "2000-10-16T07:00:00.000Z"
  },
  {
    "#": 210,
    "Title": "The Water Palace of 5 Colors (Part 1)",
    "Type": "Filler",
    "Airdate": "2000-10-23T07:00:00.000Z"
  },
  {
    "#": 211,
    "Title": "The Water Palace of 5 Colors (Part 2)",
    "Type": "Filler",
    "Airdate": "2000-10-30T08:00:00.000Z"
  },
  {
    "#": 212,
    "Title": "Mushrooms, Bears, and the Detective Boys (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2000-11-06T08:00:00.000Z"
  },
  {
    "#": 213,
    "Title": "Mushrooms, Bears, and the Detective Boys (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2000-11-13T08:00:00.000Z"
  },
  {
    "#": 214,
    "Title": "The Mysterious Retro Room Case",
    "Type": "Filler",
    "Airdate": "2000-11-20T08:00:00.000Z"
  },
  {
    "#": 215,
    "Title": "The Bay of Revenge (Part 1)",
    "Type": "Filler",
    "Airdate": "2000-11-27T08:00:00.000Z"
  },
  {
    "#": 216,
    "Title": "The Bay of Revenge (Part 2)",
    "Type": "Filler",
    "Airdate": "2000-12-04T08:00:00.000Z"
  },
  {
    "#": 217,
    "Title": "Megure's Sealed Secret (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2000-12-11T08:00:00.000Z"
  },
  {
    "#": 218,
    "Title": "Megure's Sealed Secret (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2000-12-18T08:00:00.000Z"
  },
  {
    "#": 219,
    "Title": "The Gathering of the Detectives! Shinichi Kudo vs. Kaitou Kid (2 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "2001-01-08T08:00:00.000Z"
  },
  {
    "#": 220,
    "Title": "The Client Full of Lies (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2001-01-15T08:00:00.000Z"
  },
  {
    "#": 221,
    "Title": "The Client Full of Lies (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2001-01-22T08:00:00.000Z"
  },
  {
    "#": 222,
    "Title": "And There Were No Mermaids (The Case)",
    "Type": "Manga Canon",
    "Airdate": "2001-01-29T08:00:00.000Z"
  },
  {
    "#": 223,
    "Title": "And There Were No Mermaids (The Deduction)",
    "Type": "Manga Canon",
    "Airdate": "2001-02-05T08:00:00.000Z"
  },
  {
    "#": 224,
    "Title": "And There Were No Mermaids (The Resolution)",
    "Type": "Manga Canon",
    "Airdate": "2001-02-12T08:00:00.000Z"
  },
  {
    "#": 225,
    "Title": "The Secret of the High Sales",
    "Type": "Filler",
    "Airdate": "2001-02-19T08:00:00.000Z"
  },
  {
    "#": 226,
    "Title": "The Battle Game Trap (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2001-02-26T08:00:00.000Z"
  },
  {
    "#": 227,
    "Title": "The Battle Game Trap (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2001-03-05T08:00:00.000Z"
  },
  {
    "#": 228,
    "Title": "The Murderous Pottery Class (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2001-03-12T08:00:00.000Z"
  },
  {
    "#": 229,
    "Title": "The Murderous Pottery Class (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2001-03-19T08:00:00.000Z"
  },
  {
    "#": 230,
    "Title": "The Mysterious Passenger (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2001-04-16T07:00:00.000Z"
  },
  {
    "#": 231,
    "Title": "The Mysterious Passenger (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2001-04-23T07:00:00.000Z"
  },
  {
    "#": 232,
    "Title": "The Apartment Degradation Case",
    "Type": "Filler",
    "Airdate": "2001-05-07T07:00:00.000Z"
  },
  {
    "#": 233,
    "Title": "The Evidence That Didn't Disappear (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2001-05-14T07:00:00.000Z"
  },
  {
    "#": 234,
    "Title": "The Evidence That Didn't Disappear (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2001-05-21T07:00:00.000Z"
  },
  {
    "#": 235,
    "Title": "The Locked Wine Cellar",
    "Type": "Filler",
    "Airdate": "2001-05-28T07:00:00.000Z"
  },
  {
    "#": 236,
    "Title": "The Nanki Beach Mystery Tour (Part 1)",
    "Type": "Filler",
    "Airdate": "2001-06-04T07:00:00.000Z"
  },
  {
    "#": 237,
    "Title": "The Nanki Beach Mystery Tour (Part 2)",
    "Type": "Filler",
    "Airdate": "2001-06-11T07:00:00.000Z"
  },
  {
    "#": 238,
    "Title": "The 3 \"K\"s of Osaka Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2001-06-18T07:00:00.000Z"
  },
  {
    "#": 239,
    "Title": "The 3 \"K\"s of Osaka Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2001-06-25T07:00:00.000Z"
  },
  {
    "#": 240,
    "Title": "The Shinkansen Transport Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2001-07-02T07:00:00.000Z"
  },
  {
    "#": 241,
    "Title": "The Shinkansen Transport Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2001-07-09T07:00:00.000Z"
  },
  {
    "#": 242,
    "Title": "Boy Genta's Misfortune",
    "Type": "Manga Canon",
    "Airdate": "2001-07-16T07:00:00.000Z"
  },
  {
    "#": 243,
    "Title": "Kogoro Mori's Imposter (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2001-07-23T07:00:00.000Z"
  },
  {
    "#": 244,
    "Title": "Kogoro Mori's Imposter (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2001-07-30T07:00:00.000Z"
  },
  {
    "#": 245,
    "Title": "The Gun Shot in the Sunflower Building",
    "Type": "Filler",
    "Airdate": "2001-08-06T07:00:00.000Z"
  },
  {
    "#": 246,
    "Title": "The Mystery in the Net (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2001-08-13T07:00:00.000Z"
  },
  {
    "#": 247,
    "Title": "The Mystery in the Net (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2001-08-20T07:00:00.000Z"
  },
  {
    "#": 248,
    "Title": "The Alibi of the Soothing Forest",
    "Type": "Filler",
    "Airdate": "2001-08-27T07:00:00.000Z"
  },
  {
    "#": 249,
    "Title": "The Celebrities' Secret (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2001-09-03T07:00:00.000Z"
  },
  {
    "#": 250,
    "Title": "The Celebrities' Secret (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2001-09-10T07:00:00.000Z"
  },
  {
    "#": 251,
    "Title": "The Tragedy at the OK Corral",
    "Type": "Filler",
    "Airdate": "2001-09-17T07:00:00.000Z"
  },
  {
    "#": 252,
    "Title": "The Kidnapper in the Picture",
    "Type": "Filler",
    "Airdate": "2001-10-08T07:00:00.000Z"
  },
  {
    "#": 253,
    "Title": "Metropolitan Police Detective Love Story 4 (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2001-10-15T07:00:00.000Z"
  },
  {
    "#": 254,
    "Title": "Metropolitan Police Detective Love Story 4 (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2001-10-22T07:00:00.000Z"
  },
  {
    "#": 255,
    "Title": "The 14th Round of the Matsue Tamatsukuri Linked Verse Contest (Part 1)",
    "Type": "Filler",
    "Airdate": "2001-10-29T08:00:00.000Z"
  },
  {
    "#": 256,
    "Title": "The 14th Round of the Matsue Tamatsukuri Linked Verse Contest (Part 2)",
    "Type": "Filler",
    "Airdate": "2001-11-05T08:00:00.000Z"
  },
  {
    "#": 257,
    "Title": "The Extremely Strange Punishment from Heaven",
    "Type": "Filler",
    "Airdate": "2001-11-12T08:00:00.000Z"
  },
  {
    "#": 258,
    "Title": "The Man from Chicago (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2001-11-19T08:00:00.000Z"
  },
  {
    "#": 259,
    "Title": "The Man from Chicago (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2001-11-26T08:00:00.000Z"
  },
  {
    "#": 260,
    "Title": "The Shaking Restaurant",
    "Type": "Filler",
    "Airdate": "2001-12-03T08:00:00.000Z"
  },
  {
    "#": 261,
    "Title": "The Fearful Legend of the Snowy Night (Part 1)",
    "Type": "Filler",
    "Airdate": "2001-12-10T08:00:00.000Z"
  },
  {
    "#": 262,
    "Title": "The Fearful Legend of the Snowy Night (Part 2)",
    "Type": "Filler",
    "Airdate": "2001-12-17T08:00:00.000Z"
  },
  {
    "#": 263,
    "Title": "The Osaka Double Mystery - Naniwa Swordsman and Toyotomi's Castle (2 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "2002-01-07T08:00:00.000Z"
  },
  {
    "#": 264,
    "Title": "Courtroom Battle: Kisaki vs. Kogoro (Part 1)",
    "Type": "Filler",
    "Airdate": "2002-01-14T08:00:00.000Z"
  },
  {
    "#": 265,
    "Title": "Courtroom Battle: Kisaki vs. Kogoro (Part 2)",
    "Type": "Filler",
    "Airdate": "2002-01-21T08:00:00.000Z"
  },
  {
    "#": 266,
    "Title": "The Truth Behind Valentine's (The Case)",
    "Type": "Manga Canon",
    "Airdate": "2002-01-28T08:00:00.000Z"
  },
  {
    "#": 267,
    "Title": "The Truth Behind Valentine's (The Deduction)",
    "Type": "Manga Canon",
    "Airdate": "2002-02-04T08:00:00.000Z"
  },
  {
    "#": 268,
    "Title": "The Truth Behind Valentine's (The Resolution)",
    "Type": "Manga Canon",
    "Airdate": "2002-02-11T08:00:00.000Z"
  },
  {
    "#": 269,
    "Title": "The Forgotten Memento from the Crime (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2002-02-18T08:00:00.000Z"
  },
  {
    "#": 270,
    "Title": "The Forgotten Memento from the Crime (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2002-03-04T08:00:00.000Z"
  },
  {
    "#": 271,
    "Title": "The Secret Rushed Omission (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2002-03-11T08:00:00.000Z"
  },
  {
    "#": 272,
    "Title": "The Secret Rushed Omission (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2002-03-18T08:00:00.000Z"
  },
  {
    "#": 273,
    "Title": "Old Lady's Quiz Disappearance Case",
    "Type": "Filler",
    "Airdate": "2002-04-08T07:00:00.000Z"
  },
  {
    "#": 274,
    "Title": "Truth About the Haunted House (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2002-04-15T07:00:00.000Z"
  },
  {
    "#": 275,
    "Title": "Truth About the Haunted House (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2002-04-22T07:00:00.000Z"
  },
  {
    "#": 276,
    "Title": "Case of the Missing Policeman's Badge",
    "Type": "Filler",
    "Airdate": "2002-05-06T07:00:00.000Z"
  },
  {
    "#": 277,
    "Title": "English Teacher vs. Great Western Detective (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2002-05-13T07:00:00.000Z"
  },
  {
    "#": 278,
    "Title": "English Teacher vs. Great Western Detective (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2002-05-20T07:00:00.000Z"
  },
  {
    "#": 279,
    "Title": "Hooligan's Labyrinth (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2002-05-27T07:00:00.000Z"
  },
  {
    "#": 280,
    "Title": "Hooligan's Labyrinth (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2002-06-03T07:00:00.000Z"
  },
  {
    "#": 281,
    "Title": "The Small Eye-Witnesses",
    "Type": "Filler",
    "Airdate": "2002-06-10T07:00:00.000Z"
  },
  {
    "#": 282,
    "Title": "Mystery of the Water Flowing Stone Garden (Part 1)",
    "Type": "Filler",
    "Airdate": "2002-06-17T07:00:00.000Z"
  },
  {
    "#": 283,
    "Title": "Mystery of the Water Flowing Stone Garden (Part 2)",
    "Type": "Filler",
    "Airdate": "2002-06-24T07:00:00.000Z"
  },
  {
    "#": 284,
    "Title": "Chinatown Deja Vu in the Rain (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2002-07-01T07:00:00.000Z"
  },
  {
    "#": 285,
    "Title": "Chinatown Deja Vu in the Rain (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2002-07-08T07:00:00.000Z"
  },
  {
    "#": 286,
    "Title": "Shinichi Kudo's New York Case (The Case)",
    "Type": "Manga Canon",
    "Airdate": "2002-07-15T07:00:00.000Z"
  },
  {
    "#": 287,
    "Title": "Shinichi Kudo's New York Case (The Deduction)",
    "Type": "Manga Canon",
    "Airdate": "2002-07-22T07:00:00.000Z"
  },
  {
    "#": 288,
    "Title": "Shinichi Kudo's New York Case (The Resolution)",
    "Type": "Manga Canon",
    "Airdate": "2002-07-29T07:00:00.000Z"
  },
  {
    "#": 289,
    "Title": "Mitsuhiko's Mystifying Forest (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2002-08-05T07:00:00.000Z"
  },
  {
    "#": 290,
    "Title": "Mitsuhiko's Mystifying Forest (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2002-08-12T07:00:00.000Z"
  },
  {
    "#": 291,
    "Title": "Solitary Island of the Princess and the Dragon King's Palace (The Case)",
    "Type": "Manga Canon",
    "Airdate": "2002-08-19T07:00:00.000Z"
  },
  {
    "#": 292,
    "Title": "Solitary Island of the Princess and the Dragon King's Palace (The Pursuit)",
    "Type": "Manga Canon",
    "Airdate": "2002-08-26T07:00:00.000Z"
  },
  {
    "#": 293,
    "Title": "Solitary Island of the Princess and the Dragon King's Palace (The Resolution)",
    "Type": "Manga Canon",
    "Airdate": "2002-09-02T07:00:00.000Z"
  },
  {
    "#": 294,
    "Title": "Smash of Love and Determination (Part 1)",
    "Type": "Filler",
    "Airdate": "2002-09-09T07:00:00.000Z"
  },
  {
    "#": 295,
    "Title": "Smash of Love and Determination (Part 2)",
    "Type": "Filler",
    "Airdate": "2002-09-16T07:00:00.000Z"
  },
  {
    "#": 296,
    "Title": "Houseboat Fishing Shock",
    "Type": "Filler",
    "Airdate": "2002-10-14T07:00:00.000Z"
  },
  {
    "#": 297,
    "Title": "Courtroom Confrontation II: Kisaki vs. Kujo (Part 1)",
    "Type": "Filler",
    "Airdate": "2002-10-21T07:00:00.000Z"
  },
  {
    "#": 298,
    "Title": "Courtroom Confrontation II: Kisaki vs. Kujo (Part 2)",
    "Type": "Filler",
    "Airdate": "2002-10-28T08:00:00.000Z"
  },
  {
    "#": 299,
    "Title": "Kanmon Strait of Friendship and Murderous Intent (Part 1)",
    "Type": "Filler",
    "Airdate": "2002-11-04T08:00:00.000Z"
  },
  {
    "#": 300,
    "Title": "Kanmon Strait of Friendship and Murderous Intent (Part 2)",
    "Type": "Filler",
    "Airdate": "2002-11-18T08:00:00.000Z"
  },
  {
    "#": 301,
    "Title": "Parade of Malice and Saint (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2002-11-25T08:00:00.000Z"
  },
  {
    "#": 302,
    "Title": "Parade of Malice and Saint (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2002-12-02T08:00:00.000Z"
  },
  {
    "#": 303,
    "Title": "The Victim Who Came Back",
    "Type": "Filler",
    "Airdate": "2002-12-09T08:00:00.000Z"
  },
  {
    "#": 304,
    "Title": "Trembling Metropolitan Police Headquarters: 12 Million Hostages (2 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "2003-01-06T08:00:00.000Z"
  },
  {
    "#": 305,
    "Title": "Unseen Suspect (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2003-01-13T08:00:00.000Z"
  },
  {
    "#": 306,
    "Title": "Unseen Suspect (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2003-01-20T08:00:00.000Z"
  },
  {
    "#": 307,
    "Title": "The Dark Footprint (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2003-01-27T08:00:00.000Z"
  },
  {
    "#": 308,
    "Title": "The Dark Footprint (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2003-02-03T08:00:00.000Z"
  },
  {
    "#": 309,
    "Title": "Contact with the Black Organization: The Negotiation",
    "Type": "Manga Canon",
    "Airdate": "2003-02-10T08:00:00.000Z"
  },
  {
    "#": 310,
    "Title": "Contact with the Black Organization: The Pursuit",
    "Type": "Manga Canon",
    "Airdate": "2003-02-17T08:00:00.000Z"
  },
  {
    "#": 311,
    "Title": "Contact with the Black Organization: Desperation",
    "Type": "Manga Canon",
    "Airdate": "2003-02-24T08:00:00.000Z"
  },
  {
    "#": 312,
    "Title": "Festival Dolls Dyed in the Setting Sun (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2003-03-03T08:00:00.000Z"
  },
  {
    "#": 313,
    "Title": "Festival Dolls Dyed in the Setting Sun (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2003-03-10T08:00:00.000Z"
  },
  {
    "#": 314,
    "Title": "Broken Fence of the Observatory",
    "Type": "Filler",
    "Airdate": "2003-03-17T08:00:00.000Z"
  },
  {
    "#": 315,
    "Title": "Place Exposed to the Sun",
    "Type": "Filler",
    "Airdate": "2003-04-14T07:00:00.000Z"
  },
  {
    "#": 316,
    "Title": "The Sullied Masked Hero (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2003-04-21T07:00:00.000Z"
  },
  {
    "#": 317,
    "Title": "The Sullied Masked Hero (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2003-04-28T07:00:00.000Z"
  },
  {
    "#": 318,
    "Title": "Cigar Case of Good Fortune (Part 1)",
    "Type": "Filler",
    "Airdate": "2003-05-05T07:00:00.000Z"
  },
  {
    "#": 319,
    "Title": "Cigar Case of Good Fortune (Part 2)",
    "Type": "Filler",
    "Airdate": "2003-05-12T07:00:00.000Z"
  },
  {
    "#": 320,
    "Title": "Ninja Art: The Art of Alibi Construction",
    "Type": "Filler",
    "Airdate": "2003-05-19T07:00:00.000Z"
  },
  {
    "#": 321,
    "Title": "The Vanished Kidnapper's Getaway Car (Part 1)",
    "Type": "Filler",
    "Airdate": "2003-05-26T07:00:00.000Z"
  },
  {
    "#": 322,
    "Title": "The Vanished Kidnapper's Getaway Car (Part 2)",
    "Type": "Filler",
    "Airdate": "2003-06-02T07:00:00.000Z"
  },
  {
    "#": 323,
    "Title": "Heiji Hattori's Desperate Situation! (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2003-06-09T07:00:00.000Z"
  },
  {
    "#": 324,
    "Title": "Heiji Hattori's Desperate Situation! (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2003-06-16T07:00:00.000Z"
  },
  {
    "#": 325,
    "Title": "The Red Horse within the Flames: The Case",
    "Type": "Manga Canon",
    "Airdate": "2003-06-23T07:00:00.000Z"
  },
  {
    "#": 326,
    "Title": "The Red Horse within the Flames: The Investigation",
    "Type": "Manga Canon",
    "Airdate": "2003-06-30T07:00:00.000Z"
  },
  {
    "#": 327,
    "Title": "The Red Horse within the Flames: The Resolution",
    "Type": "Manga Canon",
    "Airdate": "2003-07-07T07:00:00.000Z"
  },
  {
    "#": 328,
    "Title": "Mystery of the Birthday Wine",
    "Type": "Filler",
    "Airdate": "2003-07-14T07:00:00.000Z"
  },
  {
    "#": 329,
    "Title": "A Friendship That Can't Be Bought (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2003-07-28T07:00:00.000Z"
  },
  {
    "#": 330,
    "Title": "A Friendship That Can't Be Bought (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2003-08-04T07:00:00.000Z"
  },
  {
    "#": 331,
    "Title": "The Suspicious Spicy Curry (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2003-08-11T07:00:00.000Z"
  },
  {
    "#": 332,
    "Title": "The Suspicious Spicy Curry (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2003-08-18T07:00:00.000Z"
  },
  {
    "#": 333,
    "Title": "The Similar Princesses (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2003-08-25T07:00:00.000Z"
  },
  {
    "#": 334,
    "Title": "The Similar Princesses (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2003-09-01T07:00:00.000Z"
  },
  {
    "#": 335,
    "Title": "Secret of the Touto Film Making Centre (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2003-09-08T07:00:00.000Z"
  },
  {
    "#": 336,
    "Title": "Secret of the Touto Film Making Centre (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2003-09-15T07:00:00.000Z"
  },
  {
    "#": 337,
    "Title": "Hidden Facts of the Accidental Fall",
    "Type": "Filler",
    "Airdate": "2003-10-13T07:00:00.000Z"
  },
  {
    "#": 338,
    "Title": "The Four Porsches (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2003-10-20T07:00:00.000Z"
  },
  {
    "#": 339,
    "Title": "The Four Porsches (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2003-10-27T08:00:00.000Z"
  },
  {
    "#": 340,
    "Title": "Hidden Bathroom Secret (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2003-11-03T08:00:00.000Z"
  },
  {
    "#": 341,
    "Title": "Hidden Bathroom Secret (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2003-11-10T08:00:00.000Z"
  },
  {
    "#": 342,
    "Title": "Bride of Huis Ten Boschsup",
    "Type": "Filler",
    "Airdate": "2003-11-17T08:00:00.000Z"
  },
  {
    "#": 343,
    "Title": "The Convenience Store Trap (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2003-12-01T08:00:00.000Z"
  },
  {
    "#": 344,
    "Title": "The Convenience Store Trap (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2003-12-08T08:00:00.000Z"
  },
  {
    "#": 345,
    "Title": "Head-to-Head Match With the Black Organization; Two Mysteries of the Night of the Full Moon (2.5 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "2004-01-05T08:00:00.000Z"
  },
  {
    "#": 346,
    "Title": "Find the Buttocks' Mark! (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2004-01-12T08:00:00.000Z"
  },
  {
    "#": 347,
    "Title": "Find the Buttocks' Mark! (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2004-01-19T08:00:00.000Z"
  },
  {
    "#": 348,
    "Title": "Love, a Ghost, and a World's Inheritance (Part 1)",
    "Type": "Filler",
    "Airdate": "2004-01-26T08:00:00.000Z"
  },
  {
    "#": 349,
    "Title": "Love, a Ghost, and a World's Inheritance (Part 2)",
    "Type": "Filler",
    "Airdate": "2004-02-02T08:00:00.000Z"
  },
  {
    "#": 350,
    "Title": "The Forgotten Cell Phone (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2004-02-09T08:00:00.000Z"
  },
  {
    "#": 351,
    "Title": "The Forgotten Cell Phone (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2004-02-16T08:00:00.000Z"
  },
  {
    "#": 352,
    "Title": "The Tragedy of The Fishing Tournament (Part 1)",
    "Type": "Filler",
    "Airdate": "2004-02-23T08:00:00.000Z"
  },
  {
    "#": 353,
    "Title": "The Tragedy of The Fishing Tournament (Part 2)",
    "Type": "Filler",
    "Airdate": "2004-02-23T08:00:00.000Z"
  },
  {
    "#": 354,
    "Title": "A Small Client (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2004-03-08T08:00:00.000Z"
  },
  {
    "#": 355,
    "Title": "A Small Client (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2004-03-15T08:00:00.000Z"
  },
  {
    "#": 356,
    "Title": "Phantom Thief Kid's Miracle Midair Walk (1 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "2004-04-12T07:00:00.000Z"
  },
  {
    "#": 357,
    "Title": "Sweetheart Is an Illusion of Spring",
    "Type": "Filler",
    "Airdate": "2004-04-26T07:00:00.000Z"
  },
  {
    "#": 358,
    "Title": "Metropolitan Police Detective Love Story 5 (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2004-05-03T07:00:00.000Z"
  },
  {
    "#": 359,
    "Title": "Metropolitan Police Detective Love Story 5 (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2004-05-10T07:00:00.000Z"
  },
  {
    "#": 360,
    "Title": "A Mysterious Spring Beetle",
    "Type": "Filler",
    "Airdate": "2004-05-17T07:00:00.000Z"
  },
  {
    "#": 361,
    "Title": "Teitan High School's Ghost Story (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2004-05-24T07:00:00.000Z"
  },
  {
    "#": 362,
    "Title": "Teitan High School's Ghost Story (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2004-05-31T07:00:00.000Z"
  },
  {
    "#": 363,
    "Title": "The City's Crows",
    "Type": "Filler",
    "Airdate": "2004-06-07T07:00:00.000Z"
  },
  {
    "#": 364,
    "Title": "Synchronicity Case (Part 1)",
    "Type": "Filler",
    "Airdate": "2004-06-14T07:00:00.000Z"
  },
  {
    "#": 365,
    "Title": "Synchronicity Case (Part 2)",
    "Type": "Filler",
    "Airdate": "2004-06-21T07:00:00.000Z"
  },
  {
    "#": 366,
    "Title": "The Tragedy of the Pier in Plain Sight (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2004-07-05T07:00:00.000Z"
  },
  {
    "#": 367,
    "Title": "The Tragedy of the Pier in Plain Sight (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2004-07-12T07:00:00.000Z"
  },
  {
    "#": 368,
    "Title": "The Candy House the Witch Lives In",
    "Type": "Filler",
    "Airdate": "2004-07-26T07:00:00.000Z"
  },
  {
    "#": 369,
    "Title": "Lucky Man's Suspense",
    "Type": "Filler",
    "Airdate": "2004-08-02T07:00:00.000Z"
  },
  {
    "#": 370,
    "Title": "Running Away in a Game",
    "Type": "Filler",
    "Airdate": "2004-08-09T07:00:00.000Z"
  },
  {
    "#": 371,
    "Title": "A Course Without Protest (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2004-08-23T07:00:00.000Z"
  },
  {
    "#": 372,
    "Title": "A Course Without Protest (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2004-08-30T07:00:00.000Z"
  },
  {
    "#": 373,
    "Title": "Poisonous Spider Trap",
    "Type": "Filler",
    "Airdate": "2004-09-06T07:00:00.000Z"
  },
  {
    "#": 374,
    "Title": "A Code of Stars and Tobacco (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2004-10-18T07:00:00.000Z"
  },
  {
    "#": 375,
    "Title": "A Code of Stars and Tobacco (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2004-10-25T07:00:00.000Z"
  },
  {
    "#": 376,
    "Title": "Time Limit at 3 o'clock",
    "Type": "Filler",
    "Airdate": "2004-11-01T08:00:00.000Z"
  },
  {
    "#": 377,
    "Title": "Momotaro Mystery Solving Tour (Part 1)",
    "Type": "Filler",
    "Airdate": "2004-11-08T08:00:00.000Z"
  },
  {
    "#": 378,
    "Title": "Momotaro Mystery Solving Tour (Part 2)",
    "Type": "Filler",
    "Airdate": "2004-11-15T08:00:00.000Z"
  },
  {
    "#": 379,
    "Title": "Case of the Long Sleeved Kimono at the Hidden Hot Spring on a Snowy Night (Part 1)",
    "Type": "Filler",
    "Airdate": "2004-11-22T08:00:00.000Z"
  },
  {
    "#": 380,
    "Title": "Case of the Long Sleeved Kimono at the Hidden Hot Spring on a Snowy Night (Part 2)",
    "Type": "Filler",
    "Airdate": "2004-11-29T08:00:00.000Z"
  },
  {
    "#": 381,
    "Title": "Which One's Deduction Show (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2004-12-06T08:00:00.000Z"
  },
  {
    "#": 382,
    "Title": "Which One's Deduction Show (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2004-12-13T08:00:00.000Z"
  },
  {
    "#": 383,
    "Title": "Miracle at Koshien Ball Park! The Defiants Face the Dark Demon (2 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "2004-12-20T08:00:00.000Z"
  },
  {
    "#": 384,
    "Title": "The Target Is Kogoro Mori!",
    "Type": "Filler",
    "Airdate": "2005-01-17T08:00:00.000Z"
  },
  {
    "#": 385,
    "Title": "Dissonance of the Stradivarius (Prelude)",
    "Type": "Manga Canon",
    "Airdate": "2005-01-24T08:00:00.000Z"
  },
  {
    "#": 386,
    "Title": "Dissonance of the Stradivarius (Interlude)",
    "Type": "Manga Canon",
    "Airdate": "2005-01-31T08:00:00.000Z"
  },
  {
    "#": 387,
    "Title": "Dissonance of the Stradivarius (Postlude)",
    "Type": "Manga Canon",
    "Airdate": "2005-02-07T08:00:00.000Z"
  },
  {
    "#": 388,
    "Title": "Kogoro Gets Drunk in Satsuma (Part 1)",
    "Type": "Filler",
    "Airdate": "2005-02-14T08:00:00.000Z"
  },
  {
    "#": 389,
    "Title": "Kogoro Gets Drunk in Satsuma (Part 2)",
    "Type": "Filler",
    "Airdate": "2005-02-21T08:00:00.000Z"
  },
  {
    "#": 390,
    "Title": "Metropolitan Police Detective Love Story 6 (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2005-02-28T08:00:00.000Z"
  },
  {
    "#": 391,
    "Title": "Metropolitan Police Detective Love Story 6 (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2005-03-07T08:00:00.000Z"
  },
  {
    "#": 392,
    "Title": "The Mysterious Height Difference of 20cm",
    "Type": "Filler",
    "Airdate": "2005-03-14T08:00:00.000Z"
  },
  {
    "#": 393,
    "Title": "A Kidnapping Case... So It Seems",
    "Type": "Filler",
    "Airdate": "2005-03-21T08:00:00.000Z"
  },
  {
    "#": 394,
    "Title": "Big Adventure in the Eccentric Mansion: The Seal",
    "Type": "Manga Canon",
    "Airdate": "2005-04-18T07:00:00.000Z"
  },
  {
    "#": 395,
    "Title": "Big Adventure in the Eccentric Mansion: The Mechanism",
    "Type": "Manga Canon",
    "Airdate": "2005-04-25T07:00:00.000Z"
  },
  {
    "#": 396,
    "Title": "Big Adventure in the Eccentric Mansion: The Resolution",
    "Type": "Manga Canon",
    "Airdate": "2005-05-02T07:00:00.000Z"
  },
  {
    "#": 397,
    "Title": "Spicy, Bitter, Sweet Soup",
    "Type": "Filler",
    "Airdate": "2005-05-09T07:00:00.000Z"
  },
  {
    "#": 398,
    "Title": "The Strange Family's Request (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2005-05-16T07:00:00.000Z"
  },
  {
    "#": 399,
    "Title": "The Strange Family's Request (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2005-05-23T07:00:00.000Z"
  },
  {
    "#": 400,
    "Title": "Ran's Suspicions",
    "Type": "Manga Canon",
    "Airdate": "2005-05-30T07:00:00.000Z"
  },
  {
    "#": 401,
    "Title": "A Jewel Thief Caught Red-Handed (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2005-06-06T07:00:00.000Z"
  },
  {
    "#": 402,
    "Title": "A Jewel Thief Caught Red-Handed (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2005-06-13T07:00:00.000Z"
  },
  {
    "#": 403,
    "Title": "The Mysterious Angel's Mansion (Part 1)",
    "Type": "Filler",
    "Airdate": "2005-06-20T07:00:00.000Z"
  },
  {
    "#": 404,
    "Title": "The Mysterious Angel's Mansion (Part 2)",
    "Type": "Filler",
    "Airdate": "2005-06-27T07:00:00.000Z"
  },
  {
    "#": 405,
    "Title": "Man Who Went to Call For An Ambulance",
    "Type": "Filler",
    "Airdate": "2005-07-04T07:00:00.000Z"
  },
  {
    "#": 406,
    "Title": "Conan and Heiji's Reasoning Magic: The Trick",
    "Type": "Manga Canon",
    "Airdate": "2005-07-11T07:00:00.000Z"
  },
  {
    "#": 407,
    "Title": "Conan and Heiji's Reasoning Magic: The Mansion",
    "Type": "Manga Canon",
    "Airdate": "2005-07-18T07:00:00.000Z"
  },
  {
    "#": 408,
    "Title": "Conan and Heiji's Reasoning Magic: The Resolution",
    "Type": "Manga Canon",
    "Airdate": "2005-08-01T07:00:00.000Z"
  },
  {
    "#": 409,
    "Title": "The Simultaneous Stage Advance and Kidnapping (Part 1)",
    "Type": "Filler",
    "Airdate": "2005-08-08T07:00:00.000Z"
  },
  {
    "#": 410,
    "Title": "The Simultaneous Stage Advance and Kidnapping (Part 2)",
    "Type": "Filler",
    "Airdate": "2005-08-15T07:00:00.000Z"
  },
  {
    "#": 411,
    "Title": "The Shinto Shrine Torii's Surprising Code (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2005-08-22T07:00:00.000Z"
  },
  {
    "#": 412,
    "Title": "The Shinto Shrine Torii's Surprising Code (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2005-08-29T07:00:00.000Z"
  },
  {
    "#": 413,
    "Title": "The Mystery of the Half-Completed Crime",
    "Type": "Filler",
    "Airdate": "2005-09-05T07:00:00.000Z"
  },
  {
    "#": 414,
    "Title": "The Detective Boys Blue Bird Chase",
    "Type": "Filler",
    "Airdate": "2005-09-12T07:00:00.000Z"
  },
  {
    "#": 415,
    "Title": "The Evil Spirit Appears on An Unlucky Day: The Case",
    "Type": "Manga Canon",
    "Airdate": "2005-10-10T07:00:00.000Z"
  },
  {
    "#": 416,
    "Title": "The Evil Spirit Appears on An Unlucky Day: The Suspicion",
    "Type": "Manga Canon",
    "Airdate": "2005-10-17T07:00:00.000Z"
  },
  {
    "#": 417,
    "Title": "The Evil Spirit Appears on An Unlucky Day: The Solution",
    "Type": "Manga Canon",
    "Airdate": "2005-10-24T07:00:00.000Z"
  },
  {
    "#": 418,
    "Title": "Home of Beika's Grenier",
    "Type": "Filler",
    "Airdate": "2005-10-31T08:00:00.000Z"
  },
  {
    "#": 419,
    "Title": "Sword of the Eight-Headed Serpent (Part 1)",
    "Type": "Filler",
    "Airdate": "2005-11-07T08:00:00.000Z"
  },
  {
    "#": 420,
    "Title": "Sword of the Eight-Headed Serpent (Part 2)",
    "Type": "Filler",
    "Airdate": "2005-11-14T08:00:00.000Z"
  },
  {
    "#": 421,
    "Title": "Gingko-Colored First Love (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2005-11-21T08:00:00.000Z"
  },
  {
    "#": 422,
    "Title": "Gingko-Colored First Love (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2005-11-28T08:00:00.000Z"
  },
  {
    "#": 423,
    "Title": "Detective Boys and the Four Aomushi Brothers",
    "Type": "Filler",
    "Airdate": "2005-12-05T08:00:00.000Z"
  },
  {
    "#": 424,
    "Title": "The Photograph Mail From a Clown",
    "Type": "Filler",
    "Airdate": "2005-12-19T08:00:00.000Z"
  },
  {
    "#": 425,
    "Title": "Black Impact! The Moment the Black Organization Reaches Out! (2.5 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "2006-01-09T08:00:00.000Z"
  },
  {
    "#": 426,
    "Title": "Love Letter to Ran",
    "Type": "Filler",
    "Airdate": "2006-01-16T08:00:00.000Z"
  },
  {
    "#": 427,
    "Title": "The Super Secret Road to School (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2006-01-23T08:00:00.000Z"
  },
  {
    "#": 428,
    "Title": "The Super Secret Road to School (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2006-01-30T08:00:00.000Z"
  },
  {
    "#": 429,
    "Title": "Two People Who Can't Return (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2006-02-06T08:00:00.000Z"
  },
  {
    "#": 430,
    "Title": "Two People Who Can't Return (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2006-02-13T08:00:00.000Z"
  },
  {
    "#": 431,
    "Title": "Metropolitan Police Detective Love Story 7 (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2006-02-20T08:00:00.000Z"
  },
  {
    "#": 432,
    "Title": "Metropolitan Police Detective Love Story 7 (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2006-02-27T08:00:00.000Z"
  },
  {
    "#": 433,
    "Title": "Conan-A Strange Child",
    "Type": "Filler",
    "Airdate": "2006-03-06T08:00:00.000Z"
  },
  {
    "#": 434,
    "Title": "The Great Dog Coeur's Triumph",
    "Type": "Filler",
    "Airdate": "2006-04-10T07:00:00.000Z"
  },
  {
    "#": 435,
    "Title": "Information Gathered About the Detective Boys (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2006-04-17T07:00:00.000Z"
  },
  {
    "#": 436,
    "Title": "Information Gathered About the Detective Boys (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2006-04-24T07:00:00.000Z"
  },
  {
    "#": 437,
    "Title": "Ueto Aya and Shinichi - The Promise from 4 Years Ago",
    "Type": "Filler",
    "Airdate": "2006-05-08T07:00:00.000Z"
  },
  {
    "#": 438,
    "Title": "The Pursuit of the Fish E-mail",
    "Type": "Manga Canon",
    "Airdate": "2006-05-15T07:00:00.000Z"
  },
  {
    "#": 439,
    "Title": "And It'd Be Nice If Everybody Disappeared",
    "Type": "Filler",
    "Airdate": "2006-05-22T07:00:00.000Z"
  },
  {
    "#": 440,
    "Title": "The Stunt Car's Utmost Limit",
    "Type": "Filler",
    "Airdate": "2006-05-29T07:00:00.000Z"
  },
  {
    "#": 441,
    "Title": "The Final \"Ahh\"",
    "Type": "Filler",
    "Airdate": "2006-06-05T07:00:00.000Z"
  },
  {
    "#": 442,
    "Title": "The Man Obstructing the Steel Frame",
    "Type": "Filler",
    "Airdate": "2006-06-12T07:00:00.000Z"
  },
  {
    "#": 443,
    "Title": "Clam Digging With a Sigh (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2006-06-26T07:00:00.000Z"
  },
  {
    "#": 444,
    "Title": "Clam Digging With a Sigh (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2006-07-03T07:00:00.000Z"
  },
  {
    "#": 445,
    "Title": "Secret of the Russian Blue",
    "Type": "Manga Canon",
    "Airdate": "2006-07-10T07:00:00.000Z"
  },
  {
    "#": 446,
    "Title": "The Sealed Western-Style Window (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2006-07-24T07:00:00.000Z"
  },
  {
    "#": 447,
    "Title": "The Sealed Western-Style Window (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2006-07-31T07:00:00.000Z"
  },
  {
    "#": 448,
    "Title": "Meguro's Pike Case",
    "Type": "Filler",
    "Airdate": "2006-08-14T07:00:00.000Z"
  },
  {
    "#": 449,
    "Title": "Metropolitan Police Love Story - Fake Weddings (1 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "2006-08-21T07:00:00.000Z"
  },
  {
    "#": 450,
    "Title": "Trick vs. Magic (Part 1)",
    "Type": "Filler",
    "Airdate": "2006-08-28T07:00:00.000Z"
  },
  {
    "#": 451,
    "Title": "Trick vs. Magic (Part 2)",
    "Type": "Filler",
    "Airdate": "2006-09-04T07:00:00.000Z"
  },
  {
    "#": 452,
    "Title": "The Mysterious Person From the Konpira Troupesup",
    "Type": "Filler",
    "Airdate": "2006-09-11T07:00:00.000Z"
  },
  {
    "#": 453,
    "Title": "Preview Screening of Fate and Friendship",
    "Type": "Manga Canon",
    "Airdate": "2006-10-23T07:00:00.000Z"
  },
  {
    "#": 454,
    "Title": "The Overturned Conclusion (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2006-10-30T08:00:00.000Z"
  },
  {
    "#": 455,
    "Title": "The Overturned Conclusion (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2006-11-06T08:00:00.000Z"
  },
  {
    "#": 456,
    "Title": "The Mystery I Loved",
    "Type": "Filler",
    "Airdate": "2006-11-13T08:00:00.000Z"
  },
  {
    "#": 457,
    "Title": "Sonoko's Red Handkerchief (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2006-11-20T08:00:00.000Z"
  },
  {
    "#": 458,
    "Title": "Sonoko's Red Handkerchief (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2006-11-27T08:00:00.000Z"
  },
  {
    "#": 459,
    "Title": "A Mysterious Man - Overly Strict with Regulations",
    "Type": "Filler",
    "Airdate": "2006-12-04T08:00:00.000Z"
  },
  {
    "#": 460,
    "Title": "Class 1-B's Great Operation!",
    "Type": "Manga Canon",
    "Airdate": "2007-01-15T08:00:00.000Z"
  },
  {
    "#": 461,
    "Title": "The Missing Page",
    "Type": "Filler",
    "Airdate": "2007-01-22T08:00:00.000Z"
  },
  {
    "#": 462,
    "Title": "The Shadow of the Black Organization (The Young Witness)",
    "Type": "Manga Canon",
    "Airdate": "2007-01-29T08:00:00.000Z"
  },
  {
    "#": 463,
    "Title": "The Shadow of the Black Organization (The Strange Illumination)",
    "Type": "Manga Canon",
    "Airdate": "2007-02-05T08:00:00.000Z"
  },
  {
    "#": 464,
    "Title": "The Shadow of the Black Organization (The Mystery of the Big Reward)",
    "Type": "Manga Canon",
    "Airdate": "2007-02-12T08:00:00.000Z"
  },
  {
    "#": 465,
    "Title": "The Shadow of the Black Organization (Shining Star of Pearl)",
    "Type": "Manga Canon",
    "Airdate": "2007-02-19T08:00:00.000Z"
  },
  {
    "#": 466,
    "Title": "The Unsmashable Snowman (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2007-02-26T08:00:00.000Z"
  },
  {
    "#": 467,
    "Title": "The Unsmashable Snowman (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2007-03-05T08:00:00.000Z"
  },
  {
    "#": 468,
    "Title": "The Mysterious Case Near the Pond",
    "Type": "Filler",
    "Airdate": "2007-03-12T07:00:00.000Z"
  },
  {
    "#": 469,
    "Title": "Kaitou Kid and the Four Masterpieces (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2007-04-16T07:00:00.000Z"
  },
  {
    "#": 470,
    "Title": "Kaitou Kid and the Four Masterpieces (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2007-04-23T07:00:00.000Z"
  },
  {
    "#": 471,
    "Title": "The Out of Control Rental Car",
    "Type": "Filler",
    "Airdate": "2007-05-07T07:00:00.000Z"
  },
  {
    "#": 472,
    "Title": "Shinichi Kudō's Childhood Adventure (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2007-05-14T07:00:00.000Z"
  },
  {
    "#": 473,
    "Title": "Shinichi Kudō's Childhood Adventure (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2007-05-21T07:00:00.000Z"
  },
  {
    "#": 474,
    "Title": "Love of Lawyer Eri Kisaki",
    "Type": "Manga Canon",
    "Airdate": "2007-06-04T07:00:00.000Z"
  },
  {
    "#": 475,
    "Title": "Bad Luck Grand Prix",
    "Type": "Filler",
    "Airdate": "2007-06-18T07:00:00.000Z"
  },
  {
    "#": 476,
    "Title": "Genta's Certain Kill Shot (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2007-06-25T07:00:00.000Z"
  },
  {
    "#": 477,
    "Title": "Genta's Certain Kill Shot (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2007-07-02T07:00:00.000Z"
  },
  {
    "#": 478,
    "Title": "Real 30 Minutes",
    "Type": "Filler",
    "Airdate": "2007-07-09T07:00:00.000Z"
  },
  {
    "#": 479,
    "Title": "Three Days With Heiji Hattori (2 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "2007-07-16T07:00:00.000Z"
  },
  {
    "#": 480,
    "Title": "Yellow Alibi",
    "Type": "Filler",
    "Airdate": "2007-07-23T07:00:00.000Z"
  },
  {
    "#": 481,
    "Title": "Mountain Witch's Cutlery (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2007-07-30T07:00:00.000Z"
  },
  {
    "#": 482,
    "Title": "Mountain Witch's Cutlery (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2007-08-06T07:00:00.000Z"
  },
  {
    "#": 483,
    "Title": "The Missing Policeman",
    "Type": "Filler",
    "Airdate": "2007-08-13T07:00:00.000Z"
  },
  {
    "#": 484,
    "Title": "Whereabouts of the Dark Photograph (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2007-08-20T07:00:00.000Z"
  },
  {
    "#": 485,
    "Title": "Whereabouts of the Dark Photograph (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2007-08-27T07:00:00.000Z"
  },
  {
    "#": 486,
    "Title": "Maneki Neko from the Right to the Left",
    "Type": "Filler",
    "Airdate": "2007-09-03T07:00:00.000Z"
  },
  {
    "#": 487,
    "Title": "Metropolitan Police Detective Love Story 8: Left Hand's Ring Finger (1 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "2007-10-15T07:00:00.000Z"
  },
  {
    "#": 488,
    "Title": "Devil of the TV Station (1 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "2007-10-22T07:00:00.000Z"
  },
  {
    "#": 489,
    "Title": "Courtroom Confrontation III Prosecutor as Eyewitnesssup",
    "Type": "Filler",
    "Airdate": "2007-11-26T08:00:00.000Z"
  },
  {
    "#": 490,
    "Title": "Heiji Hattori vs. Shinichi Kudo! The Grand Deduction Battle! (1 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "2007-12-03T08:00:00.000Z"
  },
  {
    "#": 491,
    "Title": "Clash of Red and Black! (The Beginning)",
    "Type": "Manga Canon",
    "Airdate": "2008-01-14T08:00:00.000Z"
  },
  {
    "#": 492,
    "Title": "Clash of Red and Black! (Blood Relative)",
    "Type": "Manga Canon",
    "Airdate": "2008-01-21T08:00:00.000Z"
  },
  {
    "#": 493,
    "Title": "Clash of Red and Black! (Exclamation)",
    "Type": "Manga Canon",
    "Airdate": "2008-01-28T08:00:00.000Z"
  },
  {
    "#": 494,
    "Title": "Clash of Red and Black! (Hades)",
    "Type": "Manga Canon",
    "Airdate": "2008-02-04T08:00:00.000Z"
  },
  {
    "#": 495,
    "Title": "Clash of Red and Black! (Coma)",
    "Type": "Manga Canon",
    "Airdate": "2008-02-11T08:00:00.000Z"
  },
  {
    "#": 496,
    "Title": "Clash of Red and Black! (Invasion)",
    "Type": "Manga Canon",
    "Airdate": "2008-02-18T08:00:00.000Z"
  },
  {
    "#": 497,
    "Title": "Clash of Red and Black! (Awakening)",
    "Type": "Manga Canon",
    "Airdate": "2008-02-25T08:00:00.000Z"
  },
  {
    "#": 498,
    "Title": "Clash of Red and Black! (Disturbance)",
    "Type": "Manga Canon",
    "Airdate": "2008-03-03T08:00:00.000Z"
  },
  {
    "#": 499,
    "Title": "Clash of Red and Black! (Camouflage)",
    "Type": "Manga Canon",
    "Airdate": "2008-03-10T07:00:00.000Z"
  },
  {
    "#": 500,
    "Title": "Clash of Red and Black! (Testament)",
    "Type": "Manga Canon",
    "Airdate": "2008-03-17T07:00:00.000Z"
  },
  {
    "#": 501,
    "Title": "Clash of Red and Black! (Suspicion)",
    "Type": "Manga Canon",
    "Airdate": "2008-04-14T07:00:00.000Z"
  },
  {
    "#": 502,
    "Title": "Clash of Red and Black! (Innocence)",
    "Type": "Manga Canon",
    "Airdate": "2008-04-28T07:00:00.000Z"
  },
  {
    "#": 503,
    "Title": "Clash of Red and Black! (Ready for Death)",
    "Type": "Manga Canon",
    "Airdate": "2008-05-12T07:00:00.000Z"
  },
  {
    "#": 504,
    "Title": "Clash of Red and Black! (Death on Duty)",
    "Type": "Manga Canon",
    "Airdate": "2008-05-19T07:00:00.000Z"
  },
  {
    "#": 505,
    "Title": "Lawyer Eri Kisaki's Testimony (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2008-06-16T07:00:00.000Z"
  },
  {
    "#": 506,
    "Title": "Lawyer Eri Kisaki's Testimony (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2008-06-23T07:00:00.000Z"
  },
  {
    "#": 507,
    "Title": "The Blind Spot in the Karaoke Box (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2008-06-30T07:00:00.000Z"
  },
  {
    "#": 508,
    "Title": "The Blind Spot in the Karaoke Box (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2008-07-07T07:00:00.000Z"
  },
  {
    "#": 509,
    "Title": "Red, White, Yellow, and the Detective Boys",
    "Type": "Manga Canon",
    "Airdate": "2008-07-14T07:00:00.000Z"
  },
  {
    "#": 510,
    "Title": "Conan vs. Double Code Mystery",
    "Type": "Manga Canon",
    "Airdate": "2008-07-28T07:00:00.000Z"
  },
  {
    "#": 511,
    "Title": "Deduction Showdown! Shinichi vs. Subaru Okiya",
    "Type": "Manga Canon",
    "Airdate": "2008-08-04T07:00:00.000Z"
  },
  {
    "#": 512,
    "Title": "The Broken Horoscope",
    "Type": "Filler",
    "Airdate": "2008-08-11T07:00:00.000Z"
  },
  {
    "#": 513,
    "Title": "Coffee Aroma with Murderous Intention (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2008-09-01T07:00:00.000Z"
  },
  {
    "#": 514,
    "Title": "Coffee Aroma with Murderous Intention (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2008-09-08T07:00:00.000Z"
  },
  {
    "#": 515,
    "Title": "Phantom Thief Kid's Teleportation Magic (1 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "2008-10-20T07:00:00.000Z"
  },
  {
    "#": 516,
    "Title": "Fūrinkazan - The Mysterious Armoured Warrior (1 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "2008-11-03T08:00:00.000Z"
  },
  {
    "#": 517,
    "Title": "Fūrinkazan - Shadow and Lightning's Conclusion",
    "Type": "Manga Canon",
    "Airdate": "2008-11-10T08:00:00.000Z"
  },
  {
    "#": 518,
    "Title": "Meiji Restoration Mystery Tour: Investigation Chapter",
    "Type": "Filler",
    "Airdate": "2008-12-01T08:00:00.000Z"
  },
  {
    "#": 519,
    "Title": "Meiji Restoration Mystery Tour: Decipher Chapter",
    "Type": "Filler",
    "Airdate": "2008-12-08T08:00:00.000Z"
  },
  {
    "#": 520,
    "Title": "Indictment by Red Wine",
    "Type": "Filler",
    "Airdate": "2008-12-15T08:00:00.000Z"
  },
  {
    "#": 521,
    "Title": "Murderer, Shinichi Kudo (1 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "2009-01-19T08:00:00.000Z"
  },
  {
    "#": 522,
    "Title": "Shinichi's True Face and Ran's Tears (1 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "2009-01-26T08:00:00.000Z"
  },
  {
    "#": 523,
    "Title": "What She Really Wants to Ask",
    "Type": "Manga Canon",
    "Airdate": "2009-02-02T08:00:00.000Z"
  },
  {
    "#": 524,
    "Title": "The Blue Spark of Hate (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2009-02-09T08:00:00.000Z"
  },
  {
    "#": 525,
    "Title": "The Blue Spark of Hate (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2009-02-16T08:00:00.000Z"
  },
  {
    "#": 526,
    "Title": "A Present from the True Culprit",
    "Type": "Manga Canon",
    "Airdate": "2009-02-23T08:00:00.000Z"
  },
  {
    "#": 527,
    "Title": "Evil Intent Hidden Behind a Mask",
    "Type": "Filler",
    "Airdate": "2009-03-02T08:00:00.000Z"
  },
  {
    "#": 528,
    "Title": "Might Over Mystery (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2009-03-09T07:00:00.000Z"
  },
  {
    "#": 529,
    "Title": "Might Over Mystery (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2009-03-16T07:00:00.000Z"
  },
  {
    "#": 530,
    "Title": "The Truth of the Urban Legend (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2009-04-18T07:00:00.000Z"
  },
  {
    "#": 531,
    "Title": "The Truth of the Urban Legend (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2009-04-25T07:00:00.000Z"
  },
  {
    "#": 532,
    "Title": "The Scar of First Love",
    "Type": "Manga Canon",
    "Airdate": "2009-05-02T07:00:00.000Z"
  },
  {
    "#": 533,
    "Title": "The Scar that Invokes the Past",
    "Type": "Manga Canon",
    "Airdate": "2009-05-09T07:00:00.000Z"
  },
  {
    "#": 534,
    "Title": "The New Scar and the Whistling Man",
    "Type": "Manga Canon",
    "Airdate": "2009-05-16T07:00:00.000Z"
  },
  {
    "#": 535,
    "Title": "The Old Scar and the Detective's Spirit",
    "Type": "Manga Canon",
    "Airdate": "2009-05-23T07:00:00.000Z"
  },
  {
    "#": 536,
    "Title": "The Secret of the Vanished Masterpiece",
    "Type": "Filler",
    "Airdate": "2009-05-30T07:00:00.000Z"
  },
  {
    "#": 537,
    "Title": "Kaitō Kid vs the Strongest Vault (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2009-06-13T07:00:00.000Z"
  },
  {
    "#": 538,
    "Title": "Kaitō Kid vs the Strongest Vault (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2009-06-20T07:00:00.000Z"
  },
  {
    "#": 539,
    "Title": "The Inheritance to a Foolish Person",
    "Type": "Filler",
    "Airdate": "2009-07-04T07:00:00.000Z"
  },
  {
    "#": 540,
    "Title": "The Day Kogoro Mori Discontinues His Detective Business (Part 1)",
    "Type": "Filler",
    "Airdate": "2009-07-11T07:00:00.000Z"
  },
  {
    "#": 541,
    "Title": "The Day Kogoro Mori Discontinues His Detective Business (Part 2)",
    "Type": "Filler",
    "Airdate": "2009-07-18T07:00:00.000Z"
  },
  {
    "#": 542,
    "Title": "The Disappearing Fish at Ikkaku Rock (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2009-07-25T07:00:00.000Z"
  },
  {
    "#": 543,
    "Title": "The Disappearing Fish at Ikkaku Rock (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2009-08-01T07:00:00.000Z"
  },
  {
    "#": 544,
    "Title": "The Hand That Plays in Dissonance",
    "Type": "Filler",
    "Airdate": "2009-08-08T07:00:00.000Z"
  },
  {
    "#": 545,
    "Title": "The Witch Enshrouded by Fog (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2009-09-05T07:00:00.000Z"
  },
  {
    "#": 546,
    "Title": "The Witch Enshrouded by Fog (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2009-09-12T07:00:00.000Z"
  },
  {
    "#": 547,
    "Title": "Two Days with the Culprit (First Day)",
    "Type": "Filler",
    "Airdate": "2009-09-19T07:00:00.000Z"
  },
  {
    "#": 548,
    "Title": "Two Days with the Culprit (Second Day)",
    "Type": "Filler",
    "Airdate": "2009-09-26T07:00:00.000Z"
  },
  {
    "#": 549,
    "Title": "The Revolving Sushi Mystery (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2009-10-03T07:00:00.000Z"
  },
  {
    "#": 550,
    "Title": "The Revolving Sushi Mystery (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2009-10-10T07:00:00.000Z"
  },
  {
    "#": 551,
    "Title": "The Culprit is Genta's Dad (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2009-10-17T07:00:00.000Z"
  },
  {
    "#": 552,
    "Title": "The Culprit is Genta's Dad (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2009-10-24T07:00:00.000Z"
  },
  {
    "#": 553,
    "Title": "The Interrogation Room",
    "Type": "Filler",
    "Airdate": "2009-10-31T07:00:00.000Z"
  },
  {
    "#": 554,
    "Title": "Stork Mystery Tour (Ran's Search Part)",
    "Type": "Filler",
    "Airdate": "2009-11-07T08:00:00.000Z"
  },
  {
    "#": 555,
    "Title": "Stork Mystery Tour (Haruna's Tracking Part)",
    "Type": "Filler",
    "Airdate": "2009-11-14T08:00:00.000Z"
  },
  {
    "#": 556,
    "Title": "The Fearful Intersection",
    "Type": "Filler",
    "Airdate": "2009-11-21T08:00:00.000Z"
  },
  {
    "#": 557,
    "Title": "A Dangerous Party of Two",
    "Type": "Manga Canon",
    "Airdate": "2009-11-28T08:00:00.000Z"
  },
  {
    "#": 558,
    "Title": "The Mansion of Death and the Red Wall (Grateful Invitation)",
    "Type": "Manga Canon",
    "Airdate": "2009-12-05T08:00:00.000Z"
  },
  {
    "#": 559,
    "Title": "The Mansion of Death and the Red Wall (Item in Hand)",
    "Type": "Manga Canon",
    "Airdate": "2009-12-12T08:00:00.000Z"
  },
  {
    "#": 560,
    "Title": "The Mansion of Death and the Red Wall (The Late Koumei)",
    "Type": "Manga Canon",
    "Airdate": "2009-12-19T08:00:00.000Z"
  },
  {
    "#": 561,
    "Title": "The Mansion of Death and the Red Wall (Empty Fort Strategy)",
    "Type": "Manga Canon",
    "Airdate": "2009-12-26T08:00:00.000Z"
  },
  {
    "#": 562,
    "Title": "The Kidnapping of Rainbow Colors",
    "Type": "Filler",
    "Airdate": "2010-01-16T08:00:00.000Z"
  },
  {
    "#": 563,
    "Title": "Detective Boys vs. Robber Group (Turmoil)",
    "Type": "Manga Canon",
    "Airdate": "2010-01-23T08:00:00.000Z"
  },
  {
    "#": 564,
    "Title": "Detective Boys vs. Robber Group (Silence)",
    "Type": "Manga Canon",
    "Airdate": "2010-01-30T08:00:00.000Z"
  },
  {
    "#": 565,
    "Title": "The Witness that Cannot be Seen",
    "Type": "Filler",
    "Airdate": "2010-02-06T08:00:00.000Z"
  },
  {
    "#": 566,
    "Title": "The Partner is Santa-san",
    "Type": "Filler",
    "Airdate": "2010-02-27T08:00:00.000Z"
  },
  {
    "#": 567,
    "Title": "The Intention to Murder Befalling in an Open-air Bath",
    "Type": "Filler",
    "Airdate": "2010-03-06T08:00:00.000Z"
  },
  {
    "#": 568,
    "Title": "Inspector Shiratori, Memories of the Sakura (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2010-03-13T08:00:00.000Z"
  },
  {
    "#": 569,
    "Title": "Inspector Shiratori, Memories of the Sakura (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2010-03-20T07:00:00.000Z"
  },
  {
    "#": 570,
    "Title": "The Crime that has Zero Possibility to Be Proven",
    "Type": "Filler",
    "Airdate": "2010-03-27T07:00:00.000Z"
  },
  {
    "#": 571,
    "Title": "Battle of the Haunted Warehouse's Treasure (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2010-05-01T07:00:00.000Z"
  },
  {
    "#": 572,
    "Title": "Battle of the Haunted Warehouse's Treasure (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2010-05-08T07:00:00.000Z"
  },
  {
    "#": 573,
    "Title": "The Whereabouts of the Embarrasing Charm (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2010-05-15T07:00:00.000Z"
  },
  {
    "#": 574,
    "Title": "The Whereabouts of the Embarrasing Charm (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2010-05-22T07:00:00.000Z"
  },
  {
    "#": 575,
    "Title": "The Alibi of the Black Dress (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2010-05-29T07:00:00.000Z"
  },
  {
    "#": 576,
    "Title": "The Alibi of the Black Dress (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2010-06-05T07:00:00.000Z"
  },
  {
    "#": 577,
    "Title": "The Fireflies that Light up the Truth",
    "Type": "Filler",
    "Airdate": "2010-06-19T07:00:00.000Z"
  },
  {
    "#": 578,
    "Title": "The Calling of the Red Omen Crisis",
    "Type": "Manga Canon",
    "Airdate": "2010-06-26T07:00:00.000Z"
  },
  {
    "#": 579,
    "Title": "The Thirteen Black Suggestions",
    "Type": "Manga Canon",
    "Airdate": "2010-07-03T07:00:00.000Z"
  },
  {
    "#": 580,
    "Title": "The Black Time Limit Drawing Near",
    "Type": "Manga Canon",
    "Airdate": "2010-07-10T07:00:00.000Z"
  },
  {
    "#": 581,
    "Title": "The Target of Shaking Red",
    "Type": "Manga Canon",
    "Airdate": "2010-07-17T07:00:00.000Z"
  },
  {
    "#": 582,
    "Title": "The Night the Zombie Died",
    "Type": "Filler",
    "Airdate": "2010-07-24T07:00:00.000Z"
  },
  {
    "#": 583,
    "Title": "Kobayashi-sensei's Love",
    "Type": "Manga Canon",
    "Airdate": "2010-08-14T07:00:00.000Z"
  },
  {
    "#": 584,
    "Title": "Inspector Shiratori's Lost Love",
    "Type": "Manga Canon",
    "Airdate": "2010-08-21T07:00:00.000Z"
  },
  {
    "#": 585,
    "Title": "Timeless Sakura's Love",
    "Type": "Manga Canon",
    "Airdate": "2010-08-28T07:00:00.000Z"
  },
  {
    "#": 586,
    "Title": "The Kirin's Horn That Vanished into the Dark",
    "Type": "Manga Canon",
    "Airdate": "2010-09-04T07:00:00.000Z"
  },
  {
    "#": 587,
    "Title": "Kid vs. the Four Divine Detective Boys",
    "Type": "Manga Canon",
    "Airdate": "2010-09-11T07:00:00.000Z"
  },
  {
    "#": 588,
    "Title": "The Trap of the Rooftop Farm",
    "Type": "Filler",
    "Airdate": "2010-09-18T07:00:00.000Z"
  },
  {
    "#": 589,
    "Title": "The Worst Birthday (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2010-09-25T07:00:00.000Z"
  },
  {
    "#": 590,
    "Title": "The Worst Birthday (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2010-10-02T07:00:00.000Z"
  },
  {
    "#": 591,
    "Title": "The House With an Aquarium",
    "Type": "Filler",
    "Airdate": "2010-10-16T07:00:00.000Z"
  },
  {
    "#": 592,
    "Title": "The Detective Memoir of Monkey and Rake (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2010-10-23T07:00:00.000Z"
  },
  {
    "#": 593,
    "Title": "The Detective Memoir of Monkey and Rake (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2010-10-30T07:00:00.000Z"
  },
  {
    "#": 594,
    "Title": "The Seven Wonders Tour in Hiroshima and Miyajima (Miyajima Part)",
    "Type": "Filler",
    "Airdate": "2010-11-06T07:00:00.000Z"
  },
  {
    "#": 595,
    "Title": "The Seven Wonders Tour in Hiroshima and Miyajima (Hiroshima Part)",
    "Type": "Filler",
    "Airdate": "2010-11-13T08:00:00.000Z"
  },
  {
    "#": 596,
    "Title": "The Alibi that Fell",
    "Type": "Filler",
    "Airdate": "2010-11-20T08:00:00.000Z"
  },
  {
    "#": 597,
    "Title": "The Scenario of the Steaming Locked Room (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2010-11-27T08:00:00.000Z"
  },
  {
    "#": 598,
    "Title": "The Scenario of the Steaming Locked Room (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2010-12-04T08:00:00.000Z"
  },
  {
    "#": 599,
    "Title": "Friend of Justice",
    "Type": "Filler",
    "Airdate": "2010-12-11T08:00:00.000Z"
  },
  {
    "#": 600,
    "Title": "The Dream the Kappa Saw (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2010-12-18T08:00:00.000Z"
  },
  {
    "#": 601,
    "Title": "The Dream the Kappa Saw (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2010-12-25T08:00:00.000Z"
  },
  {
    "#": 602,
    "Title": "The Devil Hiding at the Tennis Court",
    "Type": "Filler",
    "Airdate": "2011-01-08T08:00:00.000Z"
  },
  {
    "#": 603,
    "Title": "The Seance's Double Locked Room Mystery (First Locked Room)",
    "Type": "Filler",
    "Airdate": "2011-01-29T08:00:00.000Z"
  },
  {
    "#": 604,
    "Title": "The Seance's Double Locked Room Mystery (Second Locked Room)",
    "Type": "Filler",
    "Airdate": "2011-02-05T08:00:00.000Z"
  },
  {
    "#": 605,
    "Title": "The Seance's Double Locked Room Mystery (Opening of the Locked Room)",
    "Type": "Filler",
    "Airdate": "2011-02-12T08:00:00.000Z"
  },
  {
    "#": 606,
    "Title": "Courtroom Confrontation IV: Juror Sumiko Kobayashi (Part 1)",
    "Type": "Filler",
    "Airdate": "2011-02-19T08:00:00.000Z"
  },
  {
    "#": 607,
    "Title": "Courtroom Confrontation IV: Juror Sumiko Kobayashi (Part 2)",
    "Type": "Filler",
    "Airdate": "2011-02-26T08:00:00.000Z"
  },
  {
    "#": 608,
    "Title": "White Day of Betrayal (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2011-03-05T08:00:00.000Z"
  },
  {
    "#": 609,
    "Title": "White Day of Betrayal (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2011-03-19T07:00:00.000Z"
  },
  {
    "#": 610,
    "Title": "The Victim is Shinichi Kudo",
    "Type": "Manga Canon",
    "Airdate": "2011-04-09T07:00:00.000Z"
  },
  {
    "#": 611,
    "Title": "Inubushi Castle, The Flame of the Demon Dog (Chapter of Ghost Fire)",
    "Type": "Manga Canon",
    "Airdate": "2011-04-16T07:00:00.000Z"
  },
  {
    "#": 612,
    "Title": "Inubushi Castle, The Flame of the Demon Dog (Chapter of Footprints)",
    "Type": "Manga Canon",
    "Airdate": "2011-04-23T07:00:00.000Z"
  },
  {
    "#": 613,
    "Title": "Inubushi Castle, The Flame of the Demon Dog (Chapter of Princess)",
    "Type": "Manga Canon",
    "Airdate": "2011-04-30T07:00:00.000Z"
  },
  {
    "#": 614,
    "Title": "The Secret the Diary Plays (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2011-05-07T07:00:00.000Z"
  },
  {
    "#": 615,
    "Title": "The Secret the Diary Plays (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2011-05-14T07:00:00.000Z"
  },
  {
    "#": 616,
    "Title": "Holmes' Revelation (Holmes' Apprentice)",
    "Type": "Manga Canon",
    "Airdate": "2011-05-21T07:00:00.000Z"
  },
  {
    "#": 617,
    "Title": "Holmes' Revelation (Love is 0)",
    "Type": "Manga Canon",
    "Airdate": "2011-05-28T07:00:00.000Z"
  },
  {
    "#": 618,
    "Title": "Holmes' Revelation (Satan)",
    "Type": "Manga Canon",
    "Airdate": "2011-06-04T07:00:00.000Z"
  },
  {
    "#": 619,
    "Title": "Holmes' Revelation (Code Break)",
    "Type": "Manga Canon",
    "Airdate": "2011-06-11T07:00:00.000Z"
  },
  {
    "#": 620,
    "Title": "Holmes' Revelation (Grass Court Queen)",
    "Type": "Manga Canon",
    "Airdate": "2011-06-18T07:00:00.000Z"
  },
  {
    "#": 621,
    "Title": "Holmes' Revelation (0 is Start)",
    "Type": "Manga Canon",
    "Airdate": "2011-06-25T07:00:00.000Z"
  },
  {
    "#": 622,
    "Title": "Emergency Situation 252 (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2011-07-02T07:00:00.000Z"
  },
  {
    "#": 623,
    "Title": "Emergency Situation 252 (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2011-07-09T07:00:00.000Z"
  },
  {
    "#": 624,
    "Title": "The Video Letter of First Love",
    "Type": "Manga Canon",
    "Airdate": "2011-07-16T07:00:00.000Z"
  },
  {
    "#": 625,
    "Title": "The Screaming Operation Room (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2011-07-23T07:00:00.000Z"
  },
  {
    "#": 626,
    "Title": "The Screaming Operation Room (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2011-07-30T07:00:00.000Z"
  },
  {
    "#": 627,
    "Title": "The Ryoma Treasure Battle Between Conan and Kid (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2011-08-20T07:00:00.000Z"
  },
  {
    "#": 628,
    "Title": "The Ryoma Treasure Battle Between Conan and Kid (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2011-08-27T07:00:00.000Z"
  },
  {
    "#": 629,
    "Title": "The Shooting of the Promotional Video Case (Part 1)",
    "Type": "Filler",
    "Airdate": "2011-09-03T07:00:00.000Z"
  },
  {
    "#": 630,
    "Title": "The Shooting of the Promotional Video Case (Part 2)",
    "Type": "Filler",
    "Airdate": "2011-09-10T07:00:00.000Z"
  },
  {
    "#": 631,
    "Title": "What the Floral Clock Knew",
    "Type": "Filler",
    "Airdate": "2011-09-17T07:00:00.000Z"
  },
  {
    "#": 632,
    "Title": "The Guardian of Time's Sword (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2011-10-01T07:00:00.000Z"
  },
  {
    "#": 633,
    "Title": "The Guardian of Time's Sword (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2011-10-08T07:00:00.000Z"
  },
  {
    "#": 634,
    "Title": "The Crime Scene is a Very Narrow Shop",
    "Type": "Filler",
    "Airdate": "2011-10-15T07:00:00.000Z"
  },
  {
    "#": 635,
    "Title": "Beware of Dieting",
    "Type": "Filler",
    "Airdate": "2011-11-05T07:00:00.000Z"
  },
  {
    "#": 636,
    "Title": "The Most Useful School in the World Case (Part 1)",
    "Type": "Filler",
    "Airdate": "2011-11-12T08:00:00.000Z"
  },
  {
    "#": 637,
    "Title": "The Most Useful School in the World Case (Part 2)",
    "Type": "Filler",
    "Airdate": "2011-11-19T08:00:00.000Z"
  },
  {
    "#": 638,
    "Title": "Solving Mysteries at the Red Leaf Palace (Part 1)",
    "Type": "Filler",
    "Airdate": "2011-11-26T08:00:00.000Z"
  },
  {
    "#": 639,
    "Title": "Solving Mysteries at the Red Leaf Palace (Part 2)",
    "Type": "Filler",
    "Airdate": "2011-12-03T08:00:00.000Z"
  },
  {
    "#": 640,
    "Title": "The Memory Trip of the Eight Sketches (Okayama Part)",
    "Type": "Filler",
    "Airdate": "2011-12-10T08:00:00.000Z"
  },
  {
    "#": 641,
    "Title": "The Memory Trip of the Eight Sketches (Kurashiki Part)",
    "Type": "Filler",
    "Airdate": "2011-12-17T08:00:00.000Z"
  },
  {
    "#": 642,
    "Title": "Grabbing Karuta Cards in Dire Straits (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2012-01-07T08:00:00.000Z"
  },
  {
    "#": 643,
    "Title": "Grabbing Karuta Cards in Dire Straits (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2012-01-14T08:00:00.000Z"
  },
  {
    "#": 644,
    "Title": "Ramen So Good, It's to Die For (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2012-02-04T08:00:00.000Z"
  },
  {
    "#": 645,
    "Title": "Ramen So Good, It's to Die For (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2012-02-11T08:00:00.000Z"
  },
  {
    "#": 646,
    "Title": "The Deduction Showdown at the Haunted Hotel (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2012-02-18T08:00:00.000Z"
  },
  {
    "#": 647,
    "Title": "The Deduction Showdown at the Haunted Hotel (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2012-02-25T08:00:00.000Z"
  },
  {
    "#": 648,
    "Title": "The Case of the Besieged Detective Agency (Outbreak)",
    "Type": "Manga Canon",
    "Airdate": "2012-03-03T08:00:00.000Z"
  },
  {
    "#": 649,
    "Title": "The Case of the Besieged Detective Agency (Sniping)",
    "Type": "Manga Canon",
    "Airdate": "2012-03-10T08:00:00.000Z"
  },
  {
    "#": 650,
    "Title": "The Case of the Besieged Detective Agency (Release)",
    "Type": "Manga Canon",
    "Airdate": "2012-03-17T07:00:00.000Z"
  },
  {
    "#": 651,
    "Title": "Conan vs. Heiji, Deduction Battle Between the Detectives of the East and West (1 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "2012-03-24T07:00:00.000Z"
  },
  {
    "#": 652,
    "Title": "The Design of Poison and Illusion (Eye)",
    "Type": "Manga Canon",
    "Airdate": "2012-04-21T07:00:00.000Z"
  },
  {
    "#": 653,
    "Title": "The Design of Poison and Illusion (S)",
    "Type": "Manga Canon",
    "Airdate": "2012-04-28T07:00:00.000Z"
  },
  {
    "#": 654,
    "Title": "The Design of Poison and Illusion (Poison)",
    "Type": "Manga Canon",
    "Airdate": "2012-05-05T07:00:00.000Z"
  },
  {
    "#": 655,
    "Title": "The Design of Poison and Illusion (Illusion)",
    "Type": "Manga Canon",
    "Airdate": "2012-05-12T07:00:00.000Z"
  },
  {
    "#": 656,
    "Title": "Professor's Video Site (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2012-05-19T07:00:00.000Z"
  },
  {
    "#": 657,
    "Title": "Professor's Video Site (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2012-05-26T07:00:00.000Z"
  },
  {
    "#": 658,
    "Title": "The Hot Chocolate Trap",
    "Type": "Filler",
    "Airdate": "2012-06-02T07:00:00.000Z"
  },
  {
    "#": 659,
    "Title": "Co-Investigating with a First Love (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2012-06-09T07:00:00.000Z"
  },
  {
    "#": 660,
    "Title": "Co-Investigating with a First Love (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2012-06-16T07:00:00.000Z"
  },
  {
    "#": 661,
    "Title": "Kogoro-san is a Good Man (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2012-06-23T07:00:00.000Z"
  },
  {
    "#": 662,
    "Title": "Kogoro-san is a Good Man (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2012-06-30T07:00:00.000Z"
  },
  {
    "#": 663,
    "Title": "The Mountain Beetle Chase",
    "Type": "Filler",
    "Airdate": "2012-07-07T07:00:00.000Z"
  },
  {
    "#": 664,
    "Title": "The Great Dog Coeur's Triumph 2",
    "Type": "Filler",
    "Airdate": "2012-07-14T07:00:00.000Z"
  },
  {
    "#": 665,
    "Title": "Suspicion of Initial K",
    "Type": "Filler",
    "Airdate": "2012-07-21T07:00:00.000Z"
  },
  {
    "#": 666,
    "Title": "The Intimidator In a Rainy Night",
    "Type": "Filler",
    "Airdate": "2012-07-28T07:00:00.000Z"
  },
  {
    "#": 667,
    "Title": "Wedding Eve (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2012-09-01T07:00:00.000Z"
  },
  {
    "#": 668,
    "Title": "Wedding Eve (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2012-09-08T07:00:00.000Z"
  },
  {
    "#": 669,
    "Title": "Treasure in the Tower of Darkness (Part 1)",
    "Type": "Filler",
    "Airdate": "2012-09-15T07:00:00.000Z"
  },
  {
    "#": 670,
    "Title": "Treasure in the Tower of Darkness (Part 2)",
    "Type": "Filler",
    "Airdate": "2012-09-22T07:00:00.000Z"
  },
  {
    "#": 671,
    "Title": "Detectives' Nocturne (The Case)",
    "Type": "Manga Canon",
    "Airdate": "2012-10-06T07:00:00.000Z"
  },
  {
    "#": 672,
    "Title": "Detectives' Nocturne (Kidnapping)",
    "Type": "Manga Canon",
    "Airdate": "2012-10-13T07:00:00.000Z"
  },
  {
    "#": 673,
    "Title": "Detectives' Nocturne (Deduction)",
    "Type": "Manga Canon",
    "Airdate": "2012-10-20T07:00:00.000Z"
  },
  {
    "#": 674,
    "Title": "Detectives' Nocturne (Bourbon)",
    "Type": "Manga Canon",
    "Airdate": "2012-10-27T07:00:00.000Z"
  },
  {
    "#": 675,
    "Title": "Won't Forgive Even One Millimetre (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2012-11-10T08:00:00.000Z"
  },
  {
    "#": 676,
    "Title": "Won't Forgive Even One Millimetre (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2012-11-17T08:00:00.000Z"
  },
  {
    "#": 677,
    "Title": "The Sandy Beach with No Footprints",
    "Type": "Filler",
    "Airdate": "2012-11-24T08:00:00.000Z"
  },
  {
    "#": 678,
    "Title": "Nagasaki Mystery Theater (Bakumatsu Part)",
    "Type": "Filler",
    "Airdate": "2012-12-01T08:00:00.000Z"
  },
  {
    "#": 679,
    "Title": "Nagasaki Mystery Theater (Present-Day Part)",
    "Type": "Filler",
    "Airdate": "2012-12-08T08:00:00.000Z"
  },
  {
    "#": 680,
    "Title": "Cactus Rhapsody",
    "Type": "Filler",
    "Airdate": "2012-12-15T08:00:00.000Z"
  },
  {
    "#": 681,
    "Title": "The Life-Threatening Broadcast of Love (Begin Broadcasting)",
    "Type": "Manga Canon",
    "Airdate": "2013-01-05T08:00:00.000Z"
  },
  {
    "#": 682,
    "Title": "The Life-Threatening Broadcast of Love (Crisis State)",
    "Type": "Manga Canon",
    "Airdate": "2013-01-12T08:00:00.000Z"
  },
  {
    "#": 683,
    "Title": "The Life-Threatening Broadcast of Love (The Inrush into the Scene)",
    "Type": "Manga Canon",
    "Airdate": "2013-01-19T08:00:00.000Z"
  },
  {
    "#": 684,
    "Title": "Froth, Steam, and Smoke (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2013-01-26T08:00:00.000Z"
  },
  {
    "#": 685,
    "Title": "Froth, Steam, and Smoke (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2013-02-02T08:00:00.000Z"
  },
  {
    "#": 686,
    "Title": "The Car Carrying A Time Bomb",
    "Type": "Filler",
    "Airdate": "2013-02-09T08:00:00.000Z"
  },
  {
    "#": 687,
    "Title": "The Unsolvable Ice Trap",
    "Type": "Filler",
    "Airdate": "2013-02-16T08:00:00.000Z"
  },
  {
    "#": 688,
    "Title": "Detective Takagi Picked Up 30 Million Yen",
    "Type": "Filler",
    "Airdate": "2013-02-23T08:00:00.000Z"
  },
  {
    "#": 689,
    "Title": "Messages From the Client",
    "Type": "Filler",
    "Airdate": "2013-03-02T08:00:00.000Z"
  },
  {
    "#": 690,
    "Title": "Yusaku Kudo's Unsolved Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2013-03-09T08:00:00.000Z"
  },
  {
    "#": 691,
    "Title": "Yusaku Kudo's Unsolved Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2013-03-16T07:00:00.000Z"
  },
  {
    "#": 692,
    "Title": "The Night Cherry Blossom Route on Sumida River (Part 1)",
    "Type": "Filler",
    "Airdate": "2013-03-23T07:00:00.000Z"
  },
  {
    "#": 693,
    "Title": "The Night Cherry Blossom Route on Sumida River (Part 2)",
    "Type": "Filler",
    "Airdate": "2013-03-30T07:00:00.000Z"
  },
  {
    "#": 694,
    "Title": "The Missing Japanese Sweet in the Old Shop",
    "Type": "Filler",
    "Airdate": "2013-04-20T07:00:00.000Z"
  },
  {
    "#": 695,
    "Title": "The Roses in the Vineyard",
    "Type": "Filler",
    "Airdate": "2013-04-27T07:00:00.000Z"
  },
  {
    "#": 696,
    "Title": "The Stormy Flowerbed Conspiracy",
    "Type": "Filler",
    "Airdate": "2013-05-04T07:00:00.000Z"
  },
  {
    "#": 697,
    "Title": "The Window of the Girls Academy",
    "Type": "Filler",
    "Airdate": "2013-05-11T07:00:00.000Z"
  },
  {
    "#": 698,
    "Title": "No Way! The UFO Crash Case",
    "Type": "Filler",
    "Airdate": "2013-05-18T07:00:00.000Z"
  },
  {
    "#": 699,
    "Title": "The Shadow Approaching Haibara's Secret (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2013-06-08T07:00:00.000Z"
  },
  {
    "#": 700,
    "Title": "The Shadow Approaching Haibara's Secret (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2013-06-15T07:00:00.000Z"
  },
  {
    "#": 701,
    "Title": "The Jet-Black Mystery Train (Departure)",
    "Type": "Manga Canon",
    "Airdate": "2013-07-13T07:00:00.000Z"
  },
  {
    "#": 702,
    "Title": "The Jet-Black Mystery Train (Tunnel)",
    "Type": "Manga Canon",
    "Airdate": "2013-07-20T07:00:00.000Z"
  },
  {
    "#": 703,
    "Title": "The Jet-Black Mystery Train (Junction)",
    "Type": "Manga Canon",
    "Airdate": "2013-07-27T07:00:00.000Z"
  },
  {
    "#": 704,
    "Title": "The Jet-Black Mystery Train (Final Destination)",
    "Type": "Manga Canon",
    "Airdate": "2013-08-03T07:00:00.000Z"
  },
  {
    "#": 705,
    "Title": "Conan in a Locked Room",
    "Type": "Manga Canon",
    "Airdate": "2013-08-10T07:00:00.000Z"
  },
  {
    "#": 706,
    "Title": "Bourbon Figures It Out",
    "Type": "Manga Canon",
    "Airdate": "2013-08-17T07:00:00.000Z"
  },
  {
    "#": 707,
    "Title": "The Framed Great Detective",
    "Type": "Filler",
    "Airdate": "2013-08-31T07:00:00.000Z"
  },
  {
    "#": 708,
    "Title": "The Man That Fell Slowly",
    "Type": "Filler",
    "Airdate": "2013-09-07T07:00:00.000Z"
  },
  {
    "#": 709,
    "Title": "The Case of the Unconfirmed Crash",
    "Type": "Filler",
    "Airdate": "2013-09-14T07:00:00.000Z"
  },
  {
    "#": 710,
    "Title": "Everyone Saw (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2013-09-21T07:00:00.000Z"
  },
  {
    "#": 711,
    "Title": "Everyone Saw (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2013-09-28T07:00:00.000Z"
  },
  {
    "#": 712,
    "Title": "Heiji Hattori and the Vampire Mansion (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2013-10-05T07:00:00.000Z"
  },
  {
    "#": 713,
    "Title": "Heiji Hattori and the Vampire Mansion (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2013-10-12T07:00:00.000Z"
  },
  {
    "#": 714,
    "Title": "Heiji Hattori and the Vampire Mansion (Part 3)",
    "Type": "Manga Canon",
    "Airdate": "2013-10-19T07:00:00.000Z"
  },
  {
    "#": 715,
    "Title": "Heiji Hattori and the Vampire Mansion (Part 4)",
    "Type": "Manga Canon",
    "Airdate": "2013-10-26T07:00:00.000Z"
  },
  {
    "#": 716,
    "Title": "Dancing Demon in the Noh Mask Mansion (Part 1)",
    "Type": "Filler",
    "Airdate": "2013-11-02T07:00:00.000Z"
  },
  {
    "#": 717,
    "Title": "Dancing Demon in the Noh Mask Mansion (Part 2)",
    "Type": "Filler",
    "Airdate": "2013-11-09T08:00:00.000Z"
  },
  {
    "#": 718,
    "Title": "The Devil's Circuit",
    "Type": "Filler",
    "Airdate": "2013-11-16T08:00:00.000Z"
  },
  {
    "#": 719,
    "Title": "The Platinum Ticket Commotion",
    "Type": "Filler",
    "Airdate": "2013-11-23T08:00:00.000Z"
  },
  {
    "#": 720,
    "Title": "Fire and Water Mystery Tour (Aso Part)",
    "Type": "Filler",
    "Airdate": "2013-11-30T08:00:00.000Z"
  },
  {
    "#": 721,
    "Title": "Fire and Water Mystery Tour (Kumamoto Part)",
    "Type": "Filler",
    "Airdate": "2013-12-07T08:00:00.000Z"
  },
  {
    "#": 722,
    "Title": "Sweet and Cold Delivery Service (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2013-12-14T08:00:00.000Z"
  },
  {
    "#": 723,
    "Title": "Sweet and Cold Delivery Service (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2013-12-21T08:00:00.000Z"
  },
  {
    "#": 724,
    "Title": "Kaitou Kid and the Blush Mermaid (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2014-01-04T08:00:00.000Z"
  },
  {
    "#": 725,
    "Title": "Kaitou Kid and the Blush Mermaid (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2014-01-11T08:00:00.000Z"
  },
  {
    "#": 726,
    "Title": "The Happy Message That Brings Misfortune",
    "Type": "Filler",
    "Airdate": "2014-01-18T08:00:00.000Z"
  },
  {
    "#": 727,
    "Title": "The Treasure Chest Filled With Fruits (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2014-01-25T08:00:00.000Z"
  },
  {
    "#": 728,
    "Title": "The Treasure Chest Filled With Fruits (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2014-02-01T08:00:00.000Z"
  },
  {
    "#": 729,
    "Title": "The Diamond, the Painting, and the Great Actress",
    "Type": "Filler",
    "Airdate": "2014-02-08T08:00:00.000Z"
  },
  {
    "#": 730,
    "Title": "The Figure That Was Too Good",
    "Type": "Filler",
    "Airdate": "2014-02-15T08:00:00.000Z"
  },
  {
    "#": 731,
    "Title": "The Ex-Boyfriend Living Next to a Crime Scene (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2014-03-01T08:00:00.000Z"
  },
  {
    "#": 732,
    "Title": "The Ex-Boyfriend Living Next to a Crime Scene (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2014-03-08T08:00:00.000Z"
  },
  {
    "#": 733,
    "Title": "The Banquet and the Two Gunshots",
    "Type": "Filler",
    "Airdate": "2014-03-22T07:00:00.000Z"
  },
  {
    "#": 734,
    "Title": "Jodie's Memories and the Cherry Blossom Viewing Trap (1 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "2014-03-29T07:00:00.000Z"
  },
  {
    "#": 735,
    "Title": "The Coded Invitation",
    "Type": "Filler",
    "Airdate": "2014-04-19T07:00:00.000Z"
  },
  {
    "#": 736,
    "Title": "The Secret of the Statue of Kogoro Mori",
    "Type": "Filler",
    "Airdate": "2014-04-26T07:00:00.000Z"
  },
  {
    "#": 737,
    "Title": "The Suspicious Walking Path",
    "Type": "Filler",
    "Airdate": "2014-05-03T07:00:00.000Z"
  },
  {
    "#": 738,
    "Title": "Kogoro In The Bar (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2014-05-10T07:00:00.000Z"
  },
  {
    "#": 739,
    "Title": "Kogoro In The Bar (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2014-05-17T07:00:00.000Z"
  },
  {
    "#": 740,
    "Title": "Bathroom Where Ran Collapsed As Well (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2014-05-31T07:00:00.000Z"
  },
  {
    "#": 741,
    "Title": "Bathroom Where Ran Collapsed As Well (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2014-06-07T07:00:00.000Z"
  },
  {
    "#": 742,
    "Title": "The Promise with the J-League",
    "Type": "Filler",
    "Airdate": "2014-06-14T07:00:00.000Z"
  },
  {
    "#": 743,
    "Title": "Coincidentally Overlapped Twice",
    "Type": "Filler",
    "Airdate": "2014-06-21T07:00:00.000Z"
  },
  {
    "#": 744,
    "Title": "The Suspect is Makoto Kyogoku (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2014-06-28T07:00:00.000Z"
  },
  {
    "#": 745,
    "Title": "The Suspect is Makoto Kyogoku (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2014-07-05T07:00:00.000Z"
  },
  {
    "#": 746,
    "Title": "Kaito Kid VS Makoto Kyogoku (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2014-07-19T07:00:00.000Z"
  },
  {
    "#": 747,
    "Title": "Kaito Kid VS Makoto Kyogoku (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2014-07-26T07:00:00.000Z"
  },
  {
    "#": 748,
    "Title": "Metropolitan Police Detective Love Story (Confession)",
    "Type": "Manga Canon",
    "Airdate": "2014-08-02T07:00:00.000Z"
  },
  {
    "#": 749,
    "Title": "Metropolitan Police Detective Love Story (Truth)",
    "Type": "Manga Canon",
    "Airdate": "2014-08-09T07:00:00.000Z"
  },
  {
    "#": 750,
    "Title": "The Man Betrayed by the Sea",
    "Type": "Filler",
    "Airdate": "2014-09-06T07:00:00.000Z"
  },
  {
    "#": 751,
    "Title": "The Case of the Lucky Calico (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2014-09-20T07:00:00.000Z"
  },
  {
    "#": 752,
    "Title": "The Case of the Lucky Calico (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2014-09-27T07:00:00.000Z"
  },
  {
    "#": 753,
    "Title": "The Blind Spot in the Share House",
    "Type": "Filler",
    "Airdate": "2014-10-04T07:00:00.000Z"
  },
  {
    "#": 754,
    "Title": "The Tragedy of the Red Woman (Steam)",
    "Type": "Manga Canon",
    "Airdate": "2014-10-11T07:00:00.000Z"
  },
  {
    "#": 755,
    "Title": "The Tragedy of the Red Woman (Evil Spirit)",
    "Type": "Manga Canon",
    "Airdate": "2014-10-18T07:00:00.000Z"
  },
  {
    "#": 756,
    "Title": "The Tragedy of the Red Woman (Revenge)",
    "Type": "Manga Canon",
    "Airdate": "2014-10-25T07:00:00.000Z"
  },
  {
    "#": 757,
    "Title": "The Comedian Who Turned Himself In (Part 1)",
    "Type": "Filler",
    "Airdate": "2014-11-01T07:00:00.000Z"
  },
  {
    "#": 758,
    "Title": "The Comedian Who Turned Himself In (Part 2)",
    "Type": "Filler",
    "Airdate": "2014-11-08T08:00:00.000Z"
  },
  {
    "#": 759,
    "Title": "The Romance Novel with the Unexpected Conclusion (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2014-11-22T08:00:00.000Z"
  },
  {
    "#": 760,
    "Title": "The Romance Novel with the Unexpected Conclusion (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2014-11-29T08:00:00.000Z"
  },
  {
    "#": 761,
    "Title": "Kaga Hyakumangoku Mystery Tour (Kanazawa Arc)",
    "Type": "Filler",
    "Airdate": "2014-12-06T08:00:00.000Z"
  },
  {
    "#": 762,
    "Title": "Kaga Hyakumangoku Mystery Tour (Kaga Hot Springs Part)",
    "Type": "Filler",
    "Airdate": "2014-12-13T08:00:00.000Z"
  },
  {
    "#": 763,
    "Title": "Conan and Heiji, Code of Love (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2015-01-10T08:00:00.000Z"
  },
  {
    "#": 764,
    "Title": "Conan and Heiji, Code of Love (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2015-01-17T08:00:00.000Z"
  },
  {
    "#": 765,
    "Title": "Teimuzu River Kite Flying Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2015-01-24T08:00:00.000Z"
  },
  {
    "#": 766,
    "Title": "Teimuzu River Kite Flying Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2015-01-31T08:00:00.000Z"
  },
  {
    "#": 767,
    "Title": "The Lover Gone Missing in a Snowstorm",
    "Type": "Filler",
    "Airdate": "2015-02-07T08:00:00.000Z"
  },
  {
    "#": 768,
    "Title": "Haibara Ai Imprisonment Case",
    "Type": "Filler",
    "Airdate": "2015-02-21T08:00:00.000Z"
  },
  {
    "#": 769,
    "Title": "The Troublesome Emergency Patient",
    "Type": "Filler",
    "Airdate": "2015-02-28T08:00:00.000Z"
  },
  {
    "#": 770,
    "Title": "The Tense Tea Party (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2015-03-07T08:00:00.000Z"
  },
  {
    "#": 771,
    "Title": "The Tense Tea Party (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2015-03-14T07:00:00.000Z"
  },
  {
    "#": 772,
    "Title": "Shinichi Kudo's Aquarium Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2015-03-21T07:00:00.000Z"
  },
  {
    "#": 773,
    "Title": "Shinichi Kudo's Aquarium Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2015-03-28T07:00:00.000Z"
  },
  {
    "#": 774,
    "Title": "Munch's Missing Scream",
    "Type": "Filler",
    "Airdate": "2015-04-18T07:00:00.000Z"
  },
  {
    "#": 775,
    "Title": "The Manipulated Great Detective (Part 1)",
    "Type": "Filler",
    "Airdate": "2015-04-25T07:00:00.000Z"
  },
  {
    "#": 776,
    "Title": "The Manipulated Great Detective (Part 2)",
    "Type": "Filler",
    "Airdate": "2015-05-02T07:00:00.000Z"
  },
  {
    "#": 777,
    "Title": "The Detective Boys VS the Silver Detectives",
    "Type": "Filler",
    "Airdate": "2015-05-09T07:00:00.000Z"
  },
  {
    "#": 778,
    "Title": "Mirage of the Disappearing Angel",
    "Type": "Filler",
    "Airdate": "2015-05-16T07:00:00.000Z"
  },
  {
    "#": 779,
    "Title": "The Scarlet Prologue",
    "Type": "Manga Canon",
    "Airdate": "2015-05-30T07:00:00.000Z"
  },
  {
    "#": 780,
    "Title": "The Scarlet Pursuit",
    "Type": "Manga Canon",
    "Airdate": "2015-06-06T07:00:00.000Z"
  },
  {
    "#": 781,
    "Title": "The Scarlet Intersection",
    "Type": "Manga Canon",
    "Airdate": "2015-06-13T07:00:00.000Z"
  },
  {
    "#": 782,
    "Title": "The Scarlet Return",
    "Type": "Manga Canon",
    "Airdate": "2015-06-20T07:00:00.000Z"
  },
  {
    "#": 783,
    "Title": "The Scarlet Truth",
    "Type": "Manga Canon",
    "Airdate": "2015-06-27T07:00:00.000Z"
  },
  {
    "#": 784,
    "Title": "Welcome to Club Orihime",
    "Type": "Filler",
    "Airdate": "2015-07-11T07:00:00.000Z"
  },
  {
    "#": 785,
    "Title": "Taiko Meijin's Match of Love (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2015-07-18T07:00:00.000Z"
  },
  {
    "#": 786,
    "Title": "Taiko Meijin's Match of Love (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2015-07-25T07:00:00.000Z"
  },
  {
    "#": 787,
    "Title": "The Mystery Sinking in the Midsummer Pool (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2015-08-01T07:00:00.000Z"
  },
  {
    "#": 788,
    "Title": "The Mystery Sinking in the Midsummer Pool (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2015-08-08T07:00:00.000Z"
  },
  {
    "#": 789,
    "Title": "The Queen's Weather Forecast",
    "Type": "Filler",
    "Airdate": "2015-08-15T07:00:00.000Z"
  },
  {
    "#": 790,
    "Title": "Bekapon's Bleeding Service",
    "Type": "Filler",
    "Airdate": "2015-09-05T07:00:00.000Z"
  },
  {
    "#": 791,
    "Title": "Detective Takagi On the Run in Handcuffs",
    "Type": "Filler",
    "Airdate": "2015-09-12T07:00:00.000Z"
  },
  {
    "#": 792,
    "Title": "Three First Discoverers (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2015-09-19T07:00:00.000Z"
  },
  {
    "#": 793,
    "Title": "Three First Discoverers (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2015-09-26T07:00:00.000Z"
  },
  {
    "#": 794,
    "Title": "Bodyguard Mori Kogoro!",
    "Type": "Filler",
    "Airdate": "2015-10-03T07:00:00.000Z"
  },
  {
    "#": 795,
    "Title": "The Secret of the Missing Young Lady",
    "Type": "Filler",
    "Airdate": "2015-10-10T07:00:00.000Z"
  },
  {
    "#": 796,
    "Title": "The Lovebirds' Ruse",
    "Type": "Filler",
    "Airdate": "2015-10-17T07:00:00.000Z"
  },
  {
    "#": 797,
    "Title": "The Dreaming Girl's Confused Deduction",
    "Type": "Filler",
    "Airdate": "2015-10-24T07:00:00.000Z"
  },
  {
    "#": 798,
    "Title": "The Moving Target",
    "Type": "Filler",
    "Airdate": "2015-11-07T08:00:00.000Z"
  },
  {
    "#": 799,
    "Title": "The Detective Boys' Locked Room Mystery Battle",
    "Type": "Filler",
    "Airdate": "2015-11-14T08:00:00.000Z"
  },
  {
    "#": 800,
    "Title": "After That Hundred Million Yen",
    "Type": "Filler",
    "Airdate": "2015-11-21T08:00:00.000Z"
  },
  {
    "#": 801,
    "Title": "The Tottori Sand Dunes Mystery Tour (Kurayoshi Arc)",
    "Type": "Filler",
    "Airdate": "2015-11-28T08:00:00.000Z"
  },
  {
    "#": 802,
    "Title": "The Tottori Sand Dunes Mystery Tour (Tottori Arc)",
    "Type": "Filler",
    "Airdate": "2015-12-05T08:00:00.000Z"
  },
  {
    "#": 803,
    "Title": "The Pitfall of Fire Precautions",
    "Type": "Filler",
    "Airdate": "2015-12-12T08:00:00.000Z"
  },
  {
    "#": 804,
    "Title": "Conan and Ebizo's Kabuki Jūhachiban Mystery (Part 1)",
    "Type": "Filler",
    "Airdate": "2016-01-09T08:00:00.000Z"
  },
  {
    "#": 805,
    "Title": "Conan and Ebizo's Kabuki Jūhachiban Mystery (Part 2)",
    "Type": "Filler",
    "Airdate": "2016-01-16T08:00:00.000Z"
  },
  {
    "#": 806,
    "Title": "The Ventriloquist's Illusion (Part One)",
    "Type": "Filler",
    "Airdate": "2016-01-30T08:00:00.000Z"
  },
  {
    "#": 807,
    "Title": "The Ventriloquist's Illusion (Part Two)",
    "Type": "Filler",
    "Airdate": "2016-02-06T08:00:00.000Z"
  },
  {
    "#": 808,
    "Title": "The Kamaitachi Inn (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2016-02-13T08:00:00.000Z"
  },
  {
    "#": 809,
    "Title": "The Kamaitachi Inn (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2016-02-20T08:00:00.000Z"
  },
  {
    "#": 810,
    "Title": "The Darkness of the Prefectural Police (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2016-02-27T08:00:00.000Z"
  },
  {
    "#": 811,
    "Title": "The Darkness of the Prefectural Police (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2016-03-05T08:00:00.000Z"
  },
  {
    "#": 812,
    "Title": "The Darkness of the Prefectural Police (Part 3)",
    "Type": "Manga Canon",
    "Airdate": "2016-03-12T08:00:00.000Z"
  },
  {
    "#": 813,
    "Title": "The Shadow Approaching Amuro",
    "Type": "Filler",
    "Airdate": "2016-04-16T07:00:00.000Z"
  },
  {
    "#": 814,
    "Title": "The Actress Blogger's Locked Room Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2016-04-23T07:00:00.000Z"
  },
  {
    "#": 815,
    "Title": "The Actress Blogger's Locked Room Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2016-04-30T07:00:00.000Z"
  },
  {
    "#": 816,
    "Title": "The Disappointing and Kind Alien",
    "Type": "Filler",
    "Airdate": "2016-05-07T07:00:00.000Z"
  },
  {
    "#": 817,
    "Title": "The Missing Fiancée",
    "Type": "Filler",
    "Airdate": "2016-05-14T07:00:00.000Z"
  },
  {
    "#": 818,
    "Title": "Kogoro's Pursuit of Rage (Part 1)",
    "Type": "Filler",
    "Airdate": "2016-05-21T07:00:00.000Z"
  },
  {
    "#": 819,
    "Title": "Kogoro's Pursuit of Rage (Part 2)",
    "Type": "Filler",
    "Airdate": "2016-05-28T07:00:00.000Z"
  },
  {
    "#": 820,
    "Title": "The Seven People in the Waiting Room",
    "Type": "Filler",
    "Airdate": "2016-06-04T07:00:00.000Z"
  },
  {
    "#": 821,
    "Title": "The Hidden Secret of Dongaraji Temple",
    "Type": "Filler",
    "Airdate": "2016-06-11T07:00:00.000Z"
  },
  {
    "#": 822,
    "Title": "The Suspects Are a Passionate Couple (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2016-06-18T07:00:00.000Z"
  },
  {
    "#": 823,
    "Title": "The Suspects Are a Passionate Couple (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2016-06-25T07:00:00.000Z"
  },
  {
    "#": 824,
    "Title": "The Detective Boys Get Out of the Rain",
    "Type": "Filler",
    "Airdate": "2016-07-09T07:00:00.000Z"
  },
  {
    "#": 825,
    "Title": "The Tidal Park Comeback Case",
    "Type": "Filler",
    "Airdate": "2016-07-16T07:00:00.000Z"
  },
  {
    "#": 826,
    "Title": "The Beauty, The Lie, and The Secret",
    "Type": "Filler",
    "Airdate": "2016-07-23T07:00:00.000Z"
  },
  {
    "#": 827,
    "Title": "Ramen So Good, It's to Die For 2 (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2016-07-30T07:00:00.000Z"
  },
  {
    "#": 828,
    "Title": "Ramen So Good, It's to Die For 2 (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2016-08-06T07:00:00.000Z"
  },
  {
    "#": 829,
    "Title": "The Mysterious Boy",
    "Type": "Filler",
    "Airdate": "2016-08-13T07:00:00.000Z"
  },
  {
    "#": 830,
    "Title": "A Cottage Surrounded By Zombies (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2016-09-03T07:00:00.000Z"
  },
  {
    "#": 831,
    "Title": "A Cottage Surrounded By Zombies (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2016-09-10T07:00:00.000Z"
  },
  {
    "#": 832,
    "Title": "A Cottage Surrounded By Zombies (Part 3)",
    "Type": "Manga Canon",
    "Airdate": "2016-09-17T07:00:00.000Z"
  },
  {
    "#": 833,
    "Title": "The Great Detective's Weakness",
    "Type": "Filler",
    "Airdate": "2016-09-24T07:00:00.000Z"
  },
  {
    "#": 834,
    "Title": "The Man Who Died Twice (Part 1)",
    "Type": "Filler",
    "Airdate": "2016-10-01T07:00:00.000Z"
  },
  {
    "#": 835,
    "Title": "The Man Who Died Twice (Part 2)",
    "Type": "Filler",
    "Airdate": "2016-10-08T07:00:00.000Z"
  },
  {
    "#": 836,
    "Title": "The Unfriendly Girls Band (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2016-10-15T07:00:00.000Z"
  },
  {
    "#": 837,
    "Title": "The Unfriendly Girls Band (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2016-10-22T07:00:00.000Z"
  },
  {
    "#": 838,
    "Title": "Mystery in a Hot Air Balloon",
    "Type": "Filler",
    "Airdate": "2016-11-05T07:00:00.000Z"
  },
  {
    "#": 839,
    "Title": "You Can Hear the Tengu's Voice",
    "Type": "Filler",
    "Airdate": "2016-11-12T08:00:00.000Z"
  },
  {
    "#": 840,
    "Title": "The Last Gift",
    "Type": "Filler",
    "Airdate": "2016-11-19T08:00:00.000Z"
  },
  {
    "#": 841,
    "Title": "The Rainy Bus Stop",
    "Type": "Filler",
    "Airdate": "2016-11-26T08:00:00.000Z"
  },
  {
    "#": 842,
    "Title": "Turning Point on a Driving Date",
    "Type": "Filler",
    "Airdate": "2016-12-10T08:00:00.000Z"
  },
  {
    "#": 843,
    "Title": "The Detective Boys in a Grove (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2016-12-17T08:00:00.000Z"
  },
  {
    "#": 844,
    "Title": "The Detective Boys in a Grove (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2016-12-24T08:00:00.000Z"
  },
  {
    "#": 845,
    "Title": "Conan Cornered in the Darkness (Part One)",
    "Type": "Filler",
    "Airdate": "2017-01-07T08:00:00.000Z"
  },
  {
    "#": 846,
    "Title": "Conan Cornered in the Darkness (Part Two)",
    "Type": "Filler",
    "Airdate": "2017-01-14T08:00:00.000Z"
  },
  {
    "#": 847,
    "Title": "Chiba's UFO Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2017-01-28T08:00:00.000Z"
  },
  {
    "#": 848,
    "Title": "Chiba's UFO Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2017-02-04T08:00:00.000Z"
  },
  {
    "#": 849,
    "Title": "The Marriage Registration's Password (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2017-02-11T08:00:00.000Z"
  },
  {
    "#": 850,
    "Title": "The Marriage Registration's Password (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2017-02-18T08:00:00.000Z"
  },
  {
    "#": 851,
    "Title": "The Descent Into Hell Tour of Love (Beppu Chapter)",
    "Type": "Filler",
    "Airdate": "2017-03-04T08:00:00.000Z"
  },
  {
    "#": 852,
    "Title": "The Descent Into Hell Tour of Love (Oita Chapter)",
    "Type": "Filler",
    "Airdate": "2017-03-11T08:00:00.000Z"
  },
  {
    "#": 853,
    "Title": "Memories From Sakura Class (Ran GIRL)",
    "Type": "Manga Canon",
    "Airdate": "2017-03-18T07:00:00.000Z"
  },
  {
    "#": 854,
    "Title": "Memories from Sakura Class (Shinichi BOY)",
    "Type": "Manga Canon",
    "Airdate": "2017-03-25T07:00:00.000Z"
  },
  {
    "#": 855,
    "Title": "Mystery of the Misssing Black Belt",
    "Type": "Filler",
    "Airdate": "2017-04-15T07:00:00.000Z"
  },
  {
    "#": 856,
    "Title": "The Socialite Couple's Secret",
    "Type": "Filler",
    "Airdate": "2017-04-22T07:00:00.000Z"
  },
  {
    "#": 857,
    "Title": "The Shifting Mystery of Beika City (Part 1)",
    "Type": "Filler",
    "Airdate": "2017-04-29T07:00:00.000Z"
  },
  {
    "#": 858,
    "Title": "The Shifting Mystery of Beika City (Part 2)",
    "Type": "Filler",
    "Airdate": "2017-05-06T07:00:00.000Z"
  },
  {
    "#": 859,
    "Title": "The Dark Mountain Route",
    "Type": "Filler",
    "Airdate": "2017-05-13T07:00:00.000Z"
  },
  {
    "#": 860,
    "Title": "The Security System's Pitfall",
    "Type": "Filler",
    "Airdate": "2017-05-20T07:00:00.000Z"
  },
  {
    "#": 861,
    "Title": "Just Like a 17 Year Old Crime Scene (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2017-06-03T07:00:00.000Z"
  },
  {
    "#": 862,
    "Title": "Just Like a 17 Year Old Crime Scene (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2017-06-10T07:00:00.000Z"
  },
  {
    "#": 863,
    "Title": "The Spirit Detective's Murder (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2017-06-17T07:00:00.000Z"
  },
  {
    "#": 864,
    "Title": "The Spirit Detective's Murder (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2017-06-24T07:00:00.000Z"
  },
  {
    "#": 865,
    "Title": "The Foul-Mouthed Myna Bird",
    "Type": "Filler",
    "Airdate": "2017-07-08T07:00:00.000Z"
  },
  {
    "#": 866,
    "Title": "The Traitor's Stage (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2017-07-15T07:00:00.000Z"
  },
  {
    "#": 867,
    "Title": "The Traitor's Stage (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2017-07-22T07:00:00.000Z"
  },
  {
    "#": 868,
    "Title": "The Whistling Bookstore",
    "Type": "Filler",
    "Airdate": "2017-07-29T07:00:00.000Z"
  },
  {
    "#": 869,
    "Title": "Conan Disappears Over a Cliff (Part 1)",
    "Type": "Filler",
    "Airdate": "2017-08-05T07:00:00.000Z"
  },
  {
    "#": 870,
    "Title": "Conan Disappears Over a Cliff (Part 2)",
    "Type": "Filler",
    "Airdate": "2017-08-12T07:00:00.000Z"
  },
  {
    "#": 871,
    "Title": "The Nobunaga 450 Case",
    "Type": "Filler",
    "Airdate": "2017-09-02T07:00:00.000Z"
  },
  {
    "#": 872,
    "Title": "Conan and Heiji's Nue Legend (Roar Arc)",
    "Type": "Manga Canon",
    "Airdate": "2017-09-09T07:00:00.000Z"
  },
  {
    "#": 873,
    "Title": "Conan and Heiji's Nue Legend (Scratch Arc)",
    "Type": "Manga Canon",
    "Airdate": "2017-09-16T07:00:00.000Z"
  },
  {
    "#": 874,
    "Title": "Conan and Heiji's Nue Legend (Resolution Arc)",
    "Type": "Manga Canon",
    "Airdate": "2017-09-23T07:00:00.000Z"
  },
  {
    "#": 875,
    "Title": "The Mysterious Prophetic Buddha!",
    "Type": "Filler",
    "Airdate": "2017-09-30T07:00:00.000Z"
  },
  {
    "#": 876,
    "Title": "The Mechanical Witness",
    "Type": "Filler",
    "Airdate": "2017-10-07T07:00:00.000Z"
  },
  {
    "#": 877,
    "Title": "A Pair of Crossing Fates",
    "Type": "Filler",
    "Airdate": "2017-10-14T07:00:00.000Z"
  },
  {
    "#": 878,
    "Title": "The Blind Spot in the Changing Room (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2017-10-28T07:00:00.000Z"
  },
  {
    "#": 879,
    "Title": "The Blind Spot in the Changing Room (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2017-11-04T07:00:00.000Z"
  },
  {
    "#": 880,
    "Title": "The Detective Boys and the Haunted House",
    "Type": "Filler",
    "Airdate": "2017-11-11T08:00:00.000Z"
  },
  {
    "#": 881,
    "Title": "The Wizard of the Ripples (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2017-11-18T08:00:00.000Z"
  },
  {
    "#": 882,
    "Title": "The Wizard of the Ripples (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2017-11-25T08:00:00.000Z"
  },
  {
    "#": 883,
    "Title": "The Pop-up Book Bomber (Part One)",
    "Type": "Filler",
    "Airdate": "2017-12-02T08:00:00.000Z"
  },
  {
    "#": 884,
    "Title": "The Pop-up Book Bomber (Part Two)",
    "Type": "Filler",
    "Airdate": "2017-12-09T08:00:00.000Z"
  },
  {
    "#": 885,
    "Title": "Solving Mysteries at the Poirot Café (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2017-12-16T08:00:00.000Z"
  },
  {
    "#": 886,
    "Title": "Solving Mysteries at the Poirot Café (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2017-12-23T08:00:00.000Z"
  },
  {
    "#": 887,
    "Title": "Kaito Kid and the Trick Box (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2018-01-06T08:00:00.000Z"
  },
  {
    "#": 888,
    "Title": "Kaito Kid and the Trick Box (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2018-01-13T08:00:00.000Z"
  },
  {
    "#": 889,
    "Title": "The New Teacher's Skeleton Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2018-01-20T08:00:00.000Z"
  },
  {
    "#": 890,
    "Title": "The New Teacher's Skeleton Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2018-01-27T08:00:00.000Z"
  },
  {
    "#": 891,
    "Title": "The Meiji Restoration Mystery Tour (Yamaguchi Arc)",
    "Type": "Filler",
    "Airdate": "2018-02-03T08:00:00.000Z"
  },
  {
    "#": 892,
    "Title": "The Meiji Restoration Mystery Tour (Hagi Arc)",
    "Type": "Filler",
    "Airdate": "2018-02-10T08:00:00.000Z"
  },
  {
    "#": 893,
    "Title": "The Mystery of a Michelin Starred Restaurant",
    "Type": "Filler",
    "Airdate": "2018-02-24T08:00:00.000Z"
  },
  {
    "#": 894,
    "Title": "The Tokyo-Style Detective Show Next Door (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2018-03-03T08:00:00.000Z"
  },
  {
    "#": 895,
    "Title": "The Tokyo-Style Detective Show Next Door (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2018-03-10T08:00:00.000Z"
  },
  {
    "#": 896,
    "Title": "The Woman with White Hands (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2018-03-17T07:00:00.000Z"
  },
  {
    "#": 897,
    "Title": "The Woman with White Hands (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2018-03-24T07:00:00.000Z"
  },
  {
    "#": 898,
    "Title": "The Melting Cake!",
    "Type": "Filler",
    "Airdate": "2018-04-07T07:00:00.000Z"
  },
  {
    "#": 899,
    "Title": "The Real Culprit's Scream",
    "Type": "Filler",
    "Airdate": "2018-04-28T07:00:00.000Z"
  },
  {
    "#": 900,
    "Title": "Solving Mysteries in a Locked Room",
    "Type": "Filler",
    "Airdate": "2018-05-05T07:00:00.000Z"
  },
  {
    "#": 901,
    "Title": "Lawyer Kisaki's SOS (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2018-05-12T07:00:00.000Z"
  },
  {
    "#": 902,
    "Title": "Lawyer Kisaki's SOS (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2018-05-19T07:00:00.000Z"
  },
  {
    "#": 903,
    "Title": "Birds of a Feather at Loggerheads",
    "Type": "Filler",
    "Airdate": "2018-05-26T07:00:00.000Z"
  },
  {
    "#": 904,
    "Title": "Result of the Draw",
    "Type": "Filler",
    "Airdate": "2018-06-09T07:00:00.000Z"
  },
  {
    "#": 905,
    "Title": "Eyewitness Testimony Seven Years Later (Part 1)",
    "Type": "Filler",
    "Airdate": "2018-06-23T07:00:00.000Z"
  },
  {
    "#": 906,
    "Title": "Eyewitness Testimony Seven Years Later (Part 2)",
    "Type": "Filler",
    "Airdate": "2018-06-30T07:00:00.000Z"
  },
  {
    "#": 907,
    "Title": "The J League Bodyguard",
    "Type": "Filler",
    "Airdate": "2018-07-14T07:00:00.000Z"
  },
  {
    "#": 908,
    "Title": "Friendship Washed Away In the Riverbed",
    "Type": "Filler",
    "Airdate": "2018-07-21T07:00:00.000Z"
  },
  {
    "#": 909,
    "Title": "Mystery of the Burning Tent (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2018-07-28T07:00:00.000Z"
  },
  {
    "#": 910,
    "Title": "Mystery of the Burning Tent (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2018-08-04T07:00:00.000Z"
  },
  {
    "#": 911,
    "Title": "The Job Request from Inspector Megure",
    "Type": "Filler",
    "Airdate": "2018-09-01T07:00:00.000Z"
  },
  {
    "#": 912,
    "Title": "The Detective Boys Become Models",
    "Type": "Filler",
    "Airdate": "2018-09-08T07:00:00.000Z"
  },
  {
    "#": 913,
    "Title": "Conan Kidnapped (Part 1)",
    "Type": "Filler",
    "Airdate": "2018-09-15T07:00:00.000Z"
  },
  {
    "#": 914,
    "Title": "Conan Kidnapped (Part 2)",
    "Type": "Filler",
    "Airdate": "2018-09-22T07:00:00.000Z"
  },
  {
    "#": 915,
    "Title": "High School Girl Detective Suzuki Sonoko",
    "Type": "Filler",
    "Airdate": "2018-09-29T07:00:00.000Z"
  },
  {
    "#": 916,
    "Title": "The Kendo Tournament of Love and Mystery (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2018-10-06T07:00:00.000Z"
  },
  {
    "#": 917,
    "Title": "The Kendo Tournament of Love and Mystery (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2018-10-13T07:00:00.000Z"
  },
  {
    "#": 918,
    "Title": "The Mini-Patrol Car Police's Big Chase",
    "Type": "Filler",
    "Airdate": "2018-10-27T07:00:00.000Z"
  },
  {
    "#": 919,
    "Title": "The High School Girl Trio's Secret Café (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2018-11-03T07:00:00.000Z"
  },
  {
    "#": 920,
    "Title": "The High School Girl Trio's Secret Café (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2018-11-10T08:00:00.000Z"
  },
  {
    "#": 921,
    "Title": "The Murderous Carpool",
    "Type": "Filler",
    "Airdate": "2018-11-17T08:00:00.000Z"
  },
  {
    "#": 922,
    "Title": "The Disappearing Detective Boys",
    "Type": "Filler",
    "Airdate": "2018-11-24T08:00:00.000Z"
  },
  {
    "#": 923,
    "Title": "A Day Without Conan",
    "Type": "Filler",
    "Airdate": "2018-12-01T08:00:00.000Z"
  },
  {
    "#": 924,
    "Title": "The Sun Sets Over Tangerine Fields",
    "Type": "Filler",
    "Airdate": "2018-12-08T08:00:00.000Z"
  },
  {
    "#": 925,
    "Title": "The Heartfelt Strap (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2018-12-15T08:00:00.000Z"
  },
  {
    "#": 926,
    "Title": "The Heartfelt Strap (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2018-12-22T08:00:00.000Z"
  },
  {
    "#": 927,
    "Title": "The Scarlet School Trip (Bright Red Arc) (1 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "2019-01-05T08:00:00.000Z"
  },
  {
    "#": 928,
    "Title": "The Scarlet School Trip (Red Love Arc) (1 Hour Special)",
    "Type": "Manga Canon",
    "Airdate": "2019-01-12T08:00:00.000Z"
  },
  {
    "#": 929,
    "Title": "The Woman Standing in the Window (Part 1)",
    "Type": "Filler",
    "Airdate": "2019-02-02T08:00:00.000Z"
  },
  {
    "#": 930,
    "Title": "The Woman Standing in the Window (Part 2)",
    "Type": "Filler",
    "Airdate": "2019-02-09T08:00:00.000Z"
  },
  {
    "#": 931,
    "Title": "The Northern Kyushu Mystery Tour (Kokura Arc)",
    "Type": "Filler",
    "Airdate": "2019-02-16T08:00:00.000Z"
  },
  {
    "#": 932,
    "Title": "The Northern Kyushu Mystery Tour (Moji Arc)",
    "Type": "Filler",
    "Airdate": "2019-02-23T08:00:00.000Z"
  },
  {
    "#": 933,
    "Title": "The Thoroughbred Kidnapping Case (Part 1)",
    "Type": "Filler",
    "Airdate": "2019-03-09T08:00:00.000Z"
  },
  {
    "#": 934,
    "Title": "The Thoroughbred Kidnapping Case (Part 2)",
    "Type": "Filler",
    "Airdate": "2019-03-16T07:00:00.000Z"
  },
  {
    "#": 935,
    "Title": "The Fortune Teller and the Three Customers",
    "Type": "Filler",
    "Airdate": "2019-03-23T07:00:00.000Z"
  },
  {
    "#": 936,
    "Title": "Intrigue at the Food Court",
    "Type": "Filler",
    "Airdate": "2019-04-13T07:00:00.000Z"
  },
  {
    "#": 937,
    "Title": "The Killer Fist of Talos (Part 1)",
    "Type": "Filler",
    "Airdate": "2019-04-20T07:00:00.000Z"
  },
  {
    "#": 938,
    "Title": "The Killer Fist of Talos (Part 2)",
    "Type": "Filler",
    "Airdate": "2019-04-27T07:00:00.000Z"
  },
  {
    "#": 939,
    "Title": "The Dangerous Fossil Finding Trip",
    "Type": "Filler",
    "Airdate": "2019-05-04T07:00:00.000Z"
  },
  {
    "#": 940,
    "Title": "The Missing Girlfriend",
    "Type": "Filler",
    "Airdate": "2019-05-11T07:00:00.000Z"
  },
  {
    "#": 941,
    "Title": "Search for Maria-chan! (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2019-06-01T07:00:00.000Z"
  },
  {
    "#": 942,
    "Title": "Search for Maria-chan! (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2019-06-08T07:00:00.000Z"
  },
  {
    "#": 943,
    "Title": "The Tokyo Barls Collection",
    "Type": "Filler",
    "Airdate": "2019-06-15T07:00:00.000Z"
  },
  {
    "#": 944,
    "Title": "The Cost of Likes (Part 1)",
    "Type": "Filler",
    "Airdate": "2019-06-22T07:00:00.000Z"
  },
  {
    "#": 945,
    "Title": "The Cost of Likes (Part 2)",
    "Type": "Filler",
    "Airdate": "2019-06-29T07:00:00.000Z"
  },
  {
    "#": 946,
    "Title": "The Cursed Tears of Borgia (Part One)",
    "Type": "Filler",
    "Airdate": "2019-07-13T07:00:00.000Z"
  },
  {
    "#": 947,
    "Title": "The Cursed Tears of Borgia (Part Two)",
    "Type": "Filler",
    "Airdate": "2019-07-20T07:00:00.000Z"
  },
  {
    "#": 948,
    "Title": "The Man Crushed by a Dinosaur",
    "Type": "Filler",
    "Airdate": "2019-07-27T07:00:00.000Z"
  },
  {
    "#": 949,
    "Title": "The Radio Questions and Concerns Show (Challenge Arc)",
    "Type": "Filler",
    "Airdate": "2019-08-03T07:00:00.000Z"
  },
  {
    "#": 950,
    "Title": "The Radio Questions and Concerns Show (Solution Arc)",
    "Type": "Filler",
    "Airdate": "2019-08-10T07:00:00.000Z"
  },
  {
    "#": 951,
    "Title": "The Whistling Bookstore 2",
    "Type": "Filler",
    "Airdate": "2019-08-17T07:00:00.000Z"
  },
  {
    "#": 952,
    "Title": "The Unsolved Cocktail Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2019-08-31T07:00:00.000Z"
  },
  {
    "#": 953,
    "Title": "The Unsolved Cocktail Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2019-09-07T07:00:00.000Z"
  },
  {
    "#": 954,
    "Title": "The Unsolved Cocktail Case (Part 3)",
    "Type": "Manga Canon",
    "Airdate": "2019-09-14T07:00:00.000Z"
  },
  {
    "#": 955,
    "Title": "The Secret of the Insect Man",
    "Type": "Filler",
    "Airdate": "2019-09-28T07:00:00.000Z"
  },
  {
    "#": 956,
    "Title": "The Mystery-Solving Water Taxi (Part 1)",
    "Type": "Filler",
    "Airdate": "2019-10-12T07:00:00.000Z"
  },
  {
    "#": 957,
    "Title": "The Mystery-Solving Water Taxi (Part 2)",
    "Type": "Filler",
    "Airdate": "2019-10-19T07:00:00.000Z"
  },
  {
    "#": 958,
    "Title": "The Poodle and the Shotgun (Part 1)",
    "Type": "Filler",
    "Airdate": "2019-11-09T08:00:00.000Z"
  },
  {
    "#": 959,
    "Title": "The Poodle and the Shotgun (Part 2)",
    "Type": "Filler",
    "Airdate": "2019-11-16T08:00:00.000Z"
  },
  {
    "#": 960,
    "Title": "Miss Lonely and the Detective Boys",
    "Type": "Filler",
    "Airdate": "2019-11-23T08:00:00.000Z"
  },
  {
    "#": 961,
    "Title": "The Glamping Mystery",
    "Type": "Filler",
    "Airdate": "2019-11-30T08:00:00.000Z"
  },
  {
    "#": 962,
    "Title": "Mori Kogoro's Grand Lecture (Part One)",
    "Type": "Filler",
    "Airdate": "2019-12-07T08:00:00.000Z"
  },
  {
    "#": 963,
    "Title": "Mori Kogoro's Grand Lecture (Part Two)",
    "Type": "Filler",
    "Airdate": "2019-12-14T08:00:00.000Z"
  },
  {
    "#": 964,
    "Title": "Mori Kogoro's Grand Lecture (Part Three)",
    "Type": "Filler",
    "Airdate": "2019-12-21T08:00:00.000Z"
  },
  {
    "#": 965,
    "Title": "Kaiju Gomera VS Kamen Yaiba (Prologue)",
    "Type": "Filler",
    "Airdate": "2020-01-04T08:00:00.000Z"
  },
  {
    "#": 966,
    "Title": "Kaiju Gomera VS Kamen Yaiba (Interlude)",
    "Type": "Filler",
    "Airdate": "2020-01-11T08:00:00.000Z"
  },
  {
    "#": 967,
    "Title": "Kaiju Gomera VS Kamen Yaiba (Climax)",
    "Type": "Filler",
    "Airdate": "2020-01-18T08:00:00.000Z"
  },
  {
    "#": 968,
    "Title": "Kaiju Gomera VS Kamen Yaiba (Finale)",
    "Type": "Filler",
    "Airdate": "2020-01-25T08:00:00.000Z"
  },
  {
    "#": 969,
    "Title": "The Young Kaga Lady's Mystery Tour (Part One)",
    "Type": "Filler",
    "Airdate": "2020-02-15T08:00:00.000Z"
  },
  {
    "#": 970,
    "Title": "The Young Kaga Lady's Mystery Tour (Part Two)",
    "Type": "Filler",
    "Airdate": "2020-02-22T08:00:00.000Z"
  },
  {
    "#": 971,
    "Title": "Target: MPD Transportation Department (Part One)",
    "Type": "Manga Canon",
    "Airdate": "2020-03-07T08:00:00.000Z"
  },
  {
    "#": 972,
    "Title": "Target: MPD Transportation Department (Part Two)",
    "Type": "Manga Canon",
    "Airdate": "2020-03-14T07:00:00.000Z"
  },
  {
    "#": 973,
    "Title": "Target: MPD Transportation Department (Part Three)",
    "Type": "Manga Canon",
    "Airdate": "2020-03-21T07:00:00.000Z"
  },
  {
    "#": 974,
    "Title": "Target: MPD Transportation Department (Part Four)",
    "Type": "Manga Canon",
    "Airdate": "2020-03-28T07:00:00.000Z"
  },
  {
    "#": 975,
    "Title": "The Secret of the Search for His Wife",
    "Type": "Filler",
    "Airdate": "2020-07-04T07:00:00.000Z"
  },
  {
    "#": 976,
    "Title": "Follow them! Detective Taxi",
    "Type": "Filler",
    "Airdate": "2020-07-18T07:00:00.000Z"
  },
  {
    "#": 977,
    "Title": "The Broken Fishbowl",
    "Type": "Filler",
    "Airdate": "2020-08-01T07:00:00.000Z"
  },
  {
    "#": 978,
    "Title": "The Case On the Opposite Shore",
    "Type": "Filler",
    "Airdate": "2020-08-15T07:00:00.000Z"
  },
  {
    "#": 979,
    "Title": "Leading a Detective Around By the Nose",
    "Type": "Filler",
    "Airdate": "2020-08-29T07:00:00.000Z"
  },
  {
    "#": 980,
    "Title": "An Encouragement of the Perfect Crime",
    "Type": "Filler",
    "Airdate": "2020-09-05T07:00:00.000Z"
  },
  {
    "#": 981,
    "Title": "Welcome to Bocchan Restaurant (Part One)",
    "Type": "Filler",
    "Airdate": "2020-09-19T07:00:00.000Z"
  },
  {
    "#": 982,
    "Title": "Welcome to Bocchan Restaurant (Part Two)",
    "Type": "Filler",
    "Airdate": "2020-09-26T07:00:00.000Z"
  },
  {
    "#": 983,
    "Title": "Kid vs. Komei: the Targeted Lips (Part One)",
    "Type": "Manga Canon",
    "Airdate": "2020-10-03T07:00:00.000Z"
  },
  {
    "#": 984,
    "Title": "Kid vs. Komei: the Targeted Lips (Part Two)",
    "Type": "Manga Canon",
    "Airdate": "2020-10-10T07:00:00.000Z"
  },
  {
    "#": 985,
    "Title": "The Two Faces (Part One)",
    "Type": "Filler",
    "Airdate": "2020-10-24T07:00:00.000Z"
  },
  {
    "#": 986,
    "Title": "The Two Faces (Part Two)",
    "Type": "Filler",
    "Airdate": "2020-10-31T07:00:00.000Z"
  },
  {
    "#": 987,
    "Title": "The Company Dissolution Party",
    "Type": "Filler",
    "Airdate": "2020-11-07T08:00:00.000Z"
  },
  {
    "#": 988,
    "Title": "The Feuding Girls",
    "Type": "Filler",
    "Airdate": "2020-11-14T08:00:00.000Z"
  },
  {
    "#": 989,
    "Title": "The Case of Ayumi's Illustrated Diary",
    "Type": "Filler",
    "Airdate": "2020-12-05T08:00:00.000Z"
  },
  {
    "#": 990,
    "Title": "The Automatic Tragedy (Part One)",
    "Type": "Filler",
    "Airdate": "2020-12-12T08:00:00.000Z"
  },
  {
    "#": 991,
    "Title": "The Automatic Tragedy (Part Two)",
    "Type": "Filler",
    "Airdate": "2020-12-19T08:00:00.000Z"
  },
  {
    "#": 992,
    "Title": "Murder at the Townhouse Café",
    "Type": "Filler",
    "Airdate": "2020-12-26T08:00:00.000Z"
  },
  {
    "#": 993,
    "Title": "Makoto Kyogoku the Understudy (Part One)",
    "Type": "Manga Canon",
    "Airdate": "2021-01-09T08:00:00.000Z"
  },
  {
    "#": 994,
    "Title": "Makoto Kyogoku the Understudy (Part Two)",
    "Type": "Manga Canon",
    "Airdate": "2021-01-16T08:00:00.000Z"
  },
  {
    "#": 995,
    "Title": "Makoto Kyogoku the Understudy (Part Three)",
    "Type": "Manga Canon",
    "Airdate": "2021-01-23T08:00:00.000Z"
  },
  {
    "#": 996,
    "Title": "The Skilled Hawk Hides His Crimes",
    "Type": "Filler",
    "Airdate": "2021-01-30T08:00:00.000Z"
  },
  {
    "#": 997,
    "Title": "Intrigue at Smile Village",
    "Type": "Filler",
    "Airdate": "2021-02-13T08:00:00.000Z"
  },
  {
    "#": 998,
    "Title": "The Frying Pan of Hatred",
    "Type": "Filler",
    "Airdate": "2021-02-20T08:00:00.000Z"
  },
  {
    "#": 999,
    "Title": "Troublesome Kindness",
    "Type": "Filler",
    "Airdate": "2021-02-27T08:00:00.000Z"
  },
  {
    "#": 1000,
    "Title": "The Moonlight Sonata Murder (Part One)",
    "Type": "Manga Canon",
    "Airdate": "2021-03-06T08:00:00.000Z"
  },
  {
    "#": 1001,
    "Title": "The Moonlight Sonata Murder (Part Two)",
    "Type": "Manga Canon",
    "Airdate": "2021-03-13T08:00:00.000Z"
  },
  {
    "#": 1002,
    "Title": "The Beika City Shopping Center Garbage Bin Mystery",
    "Type": "Filler",
    "Airdate": "2021-04-17T07:00:00.000Z"
  },
  {
    "#": 1003,
    "Title": "The 36-Cell Perfect Game (Part One)",
    "Type": "Manga Canon",
    "Airdate": "2021-04-24T07:00:00.000Z"
  },
  {
    "#": 1004,
    "Title": "The 36-Cell Perfect Game (Part Two)",
    "Type": "Manga Canon",
    "Airdate": "2021-05-01T07:00:00.000Z"
  },
  {
    "#": 1005,
    "Title": "The 36-Cell Perfect Game (Part Three)",
    "Type": "Manga Canon",
    "Airdate": "2021-05-08T07:00:00.000Z"
  },
  {
    "#": 1006,
    "Title": "Who Poisoned the Victim",
    "Type": "Filler",
    "Airdate": "2021-05-15T07:00:00.000Z"
  },
  {
    "#": 1007,
    "Title": "Out For Revenge (Part One)",
    "Type": "Filler",
    "Airdate": "2021-06-05T07:00:00.000Z"
  },
  {
    "#": 1008,
    "Title": "Out For Revenge (Part Two)",
    "Type": "Filler",
    "Airdate": "2021-06-12T07:00:00.000Z"
  },
  {
    "#": 1009,
    "Title": "The Lost Article That Smells Like a Case",
    "Type": "Filler",
    "Airdate": "2021-06-19T07:00:00.000Z"
  },
  {
    "#": 1010,
    "Title": "The Idol Whose Smile Disappeared",
    "Type": "Filler",
    "Airdate": "2021-06-26T07:00:00.000Z"
  },
  {
    "#": 1011,
    "Title": "Picking Wild Plants and Clovers (Part One)",
    "Type": "Manga Canon",
    "Airdate": "2021-07-10T07:00:00.000Z"
  },
  {
    "#": 1012,
    "Title": "Picking Wild Plants and Clovers (Part Two)",
    "Type": "Manga Canon",
    "Airdate": "2021-07-17T07:00:00.000Z"
  },
  {
    "#": 1013,
    "Title": "The Man Who Loved Too Much",
    "Type": "Filler",
    "Airdate": "2021-07-24T07:00:00.000Z"
  },
  {
    "#": 1014,
    "Title": "The Novelist Known as the Demon King",
    "Type": "Filler",
    "Airdate": "2021-07-31T07:00:00.000Z"
  },
  {
    "#": 1015,
    "Title": "Stakeout",
    "Type": "Filler",
    "Airdate": "2021-08-14T07:00:00.000Z"
  },
  {
    "#": 1016,
    "Title": "The Monorail Sniper Case (Part One)",
    "Type": "Filler",
    "Airdate": "2021-08-28T07:00:00.000Z"
  },
  {
    "#": 1017,
    "Title": "The Monorail Sniper Case (Part Two)",
    "Type": "Filler",
    "Airdate": "2021-09-04T07:00:00.000Z"
  },
  {
    "#": 1018,
    "Title": "The Antique Tray Can't Be Hidden (Part One)",
    "Type": "Manga Canon",
    "Airdate": "2021-09-11T07:00:00.000Z"
  },
  {
    "#": 1019,
    "Title": "The Antique Tray Can't Be Hidden (Part Two)",
    "Type": "Manga Canon",
    "Airdate": "2021-09-18T07:00:00.000Z"
  },
  {
    "#": 1020,
    "Title": "The Antique Tray Can't Be Hidden (Part Three)",
    "Type": "Manga Canon",
    "Airdate": "2021-09-25T07:00:00.000Z"
  },
  {
    "#": 1021,
    "Title": "Rondo in Bad Company",
    "Type": "Filler",
    "Airdate": "2021-10-02T07:00:00.000Z"
  },
  {
    "#": 1022,
    "Title": "The Cursed Museum",
    "Type": "Filler",
    "Airdate": "2021-10-09T07:00:00.000Z"
  },
  {
    "#": 1023,
    "Title": "The Whistling Bookstore 3",
    "Type": "Filler",
    "Airdate": "2021-10-16T07:00:00.000Z"
  },
  {
    "#": 1024,
    "Title": "Ooka Momiji's Challenge (Part One)",
    "Type": "Manga Canon",
    "Airdate": "2021-10-30T07:00:00.000Z"
  },
  {
    "#": 1025,
    "Title": "Ooka Momiji's Challenge (Part Two)",
    "Type": "Manga Canon",
    "Airdate": "2021-11-06T07:00:00.000Z"
  },
  {
    "#": 1026,
    "Title": "The Wordless Witness",
    "Type": "Filler",
    "Airdate": "2021-11-13T08:00:00.000Z"
  },
  {
    "#": 1027,
    "Title": "Beyond the Curtain",
    "Type": "Filler",
    "Airdate": "2021-11-20T08:00:00.000Z"
  },
  {
    "#": 1028,
    "Title": "Ballad of the Woman Who Loved Cake",
    "Type": "Filler",
    "Airdate": "2021-11-27T08:00:00.000Z"
  },
  {
    "#": 1029,
    "Title": "Police Academy Arc Wild Police Story CASE. Jinpei Matsuda",
    "Type": "Manga Canon",
    "Airdate": "2021-12-04T08:00:00.000Z"
  },
  {
    "#": 1030,
    "Title": "The Blank Year (Part One)",
    "Type": "Filler",
    "Airdate": "2021-12-11T08:00:00.000Z"
  },
  {
    "#": 1031,
    "Title": "The Blank Year (Part Two)",
    "Type": "Filler",
    "Airdate": "2021-12-18T08:00:00.000Z"
  },
  {
    "#": 1032,
    "Title": "Mori Ran, the Model",
    "Type": "Filler",
    "Airdate": "2021-12-25T08:00:00.000Z"
  },
  {
    "#": 1033,
    "Title": "Taiko Meijin's Shogi Board (Opening Move)",
    "Type": "Manga Canon",
    "Airdate": "2022-01-08T08:00:00.000Z"
  },
  {
    "#": 1034,
    "Title": "Taiko Meijin's Shogi Board (Brilliant Move)",
    "Type": "Manga Canon",
    "Airdate": "2022-01-15T08:00:00.000Z"
  },
  {
    "#": 1035,
    "Title": "Taiko Meijin's Shogi Board (Checkmate)",
    "Type": "Manga Canon",
    "Airdate": "2022-01-22T08:00:00.000Z"
  },
  {
    "#": 1036,
    "Title": "Whiteout (Part One)",
    "Type": "Filler",
    "Airdate": "2022-01-29T08:00:00.000Z"
  },
  {
    "#": 1037,
    "Title": "Whiteout (Part Two)",
    "Type": "Filler",
    "Airdate": "2022-02-05T08:00:00.000Z"
  },
  {
    "#": 1038,
    "Title": "Police Academy Arc Wild Police Story CASE. Wataru Date",
    "Type": "Manga Canon",
    "Airdate": "2022-03-12T08:00:00.000Z"
  },
  {
    "#": 1039,
    "Title": "The Flying Jack-o'-lantern",
    "Type": "Filler",
    "Airdate": "2022-04-16T07:00:00.000Z"
  },
  {
    "#": 1040,
    "Title": "The Case of Ayumi's Illustrated Diary 2",
    "Type": "Filler",
    "Airdate": "2022-04-23T07:00:00.000Z"
  },
  {
    "#": 1041,
    "Title": "The Unstated Alibi",
    "Type": "Filler",
    "Airdate": "2022-04-30T07:00:00.000Z"
  },
  {
    "#": 1042,
    "Title": "Police Academy Arc Wild Police Story CASE. Kenji Hagiwara",
    "Type": "Manga Canon",
    "Airdate": "2022-05-07T07:00:00.000Z"
  },
  {
    "#": 1043,
    "Title": "The Figure of Revenge",
    "Type": "Filler",
    "Airdate": "2022-05-14T07:00:00.000Z"
  },
  {
    "#": 1044,
    "Title": "The Deadly Pork Soup Signal",
    "Type": "Filler",
    "Airdate": "2022-05-21T07:00:00.000Z"
  },
  {
    "#": 1045,
    "Title": "The Birthday Party of Divine Punishment (Part One)",
    "Type": "Manga Canon",
    "Airdate": "2022-06-04T07:00:00.000Z"
  },
  {
    "#": 1046,
    "Title": "The Birthday Party of Divine Punishment (Part Two)",
    "Type": "Manga Canon",
    "Airdate": "2022-06-11T07:00:00.000Z"
  },
  {
    "#": 1047,
    "Title": "The Red Sheep's Eerie Game (Part One)",
    "Type": "Filler",
    "Airdate": "2022-06-18T07:00:00.000Z"
  },
  {
    "#": 1048,
    "Title": "The Red Sheep's Eerie Game (Part Two)",
    "Type": "Filler",
    "Airdate": "2022-06-25T07:00:00.000Z"
  },
  {
    "#": 1049,
    "Title": "The Threat to Megure's Police Career",
    "Type": "Filler",
    "Airdate": "2022-07-09T07:00:00.000Z"
  },
  {
    "#": 1050,
    "Title": "Intrigue at Morikawa Mansion (Part One)",
    "Type": "Filler",
    "Airdate": "2022-07-16T07:00:00.000Z"
  },
  {
    "#": 1051,
    "Title": "Intrigue at Morikawa Mansion (Part Two)",
    "Type": "Filler",
    "Airdate": "2022-07-23T07:00:00.000Z"
  },
  {
    "#": 1052,
    "Title": "The Detective Boys' Test of Courage",
    "Type": "Filler",
    "Airdate": "2022-07-30T07:00:00.000Z"
  },
  {
    "#": 1053,
    "Title": "The Spark That Fell on the Ranch (Part One)",
    "Type": "Manga Canon",
    "Airdate": "2022-08-06T07:00:00.000Z"
  },
  {
    "#": 1054,
    "Title": "The Spark That Fell on the Ranch (Part Two)",
    "Type": "Manga Canon",
    "Airdate": "2022-08-13T07:00:00.000Z"
  },
  {
    "#": 1055,
    "Title": "The Ghost's Revenge",
    "Type": "Filler",
    "Airdate": "2022-09-03T07:00:00.000Z"
  },
  {
    "#": 1056,
    "Title": "I Want My Husband Back",
    "Type": "Filler",
    "Airdate": "2022-09-17T07:00:00.000Z"
  },
  {
    "#": 1057,
    "Title": "Bad Guys",
    "Type": "Filler",
    "Airdate": "2022-09-24T07:00:00.000Z"
  },
  {
    "#": 1058,
    "Title": "The Man Who Camped Out at the Police Station",
    "Type": "Filler",
    "Airdate": "2022-10-01T07:00:00.000Z"
  },
  {
    "#": 1059,
    "Title": "Yoko Okino and the Locked Attic (Part One)",
    "Type": "Manga Canon",
    "Airdate": "2022-10-08T07:00:00.000Z"
  },
  {
    "#": 1060,
    "Title": "Yoko Okino and the Locked Attic (Part Two)",
    "Type": "Manga Canon",
    "Airdate": "2022-10-15T07:00:00.000Z"
  },
  {
    "#": 1061,
    "Title": "Police Academy Arc Wild Police Story CASE. Hiromitsu Morofushi",
    "Type": "Manga Canon",
    "Airdate": "2022-10-29T07:00:00.000Z"
  },
  {
    "#": 1062,
    "Title": "The Spiral of Rain and Malice",
    "Type": "Filler",
    "Airdate": "2022-11-05T07:00:00.000Z"
  },
  {
    "#": 1063,
    "Title": "The Targeted Chicken Sexer",
    "Type": "Filler",
    "Airdate": "2022-11-12T08:00:00.000Z"
  },
  {
    "#": 1064,
    "Title": "The Dreamy-Eyed Woman's Last Shot at Love",
    "Type": "Filler",
    "Airdate": "2022-11-19T08:00:00.000Z"
  },
  {
    "#": 1065,
    "Title": "Detectives Don't Sleep",
    "Type": "Filler",
    "Airdate": "2022-11-26T08:00:00.000Z"
  },
  {
    "#": 1066,
    "Title": "Til Death Do Us Part",
    "Type": "Filler",
    "Airdate": "2022-12-03T08:00:00.000Z"
  },
  {
    "#": 1067,
    "Title": "The Shopping Center in Love",
    "Type": "Filler",
    "Airdate": "2022-12-24T08:00:00.000Z"
  },
  {
    "#": 1068,
    "Title": "Mitsuhiko Tsuburaya's Detective Notes",
    "Type": "Filler",
    "Airdate": "2023-01-07T08:00:00.000Z"
  },
  {
    "#": 1069,
    "Title": "The Sweet Voice Heard Through the Phone",
    "Type": "Filler",
    "Airdate": "2023-01-14T08:00:00.000Z"
  },
  {
    "#": 1070,
    "Title": "The Surprise That Leads to Tragedy",
    "Type": "Filler",
    "Airdate": "2023-01-21T08:00:00.000Z"
  },
  {
    "#": 1071,
    "Title": "Yusaku Kudo's Detective Show (Part One)",
    "Type": "Manga Canon",
    "Airdate": "2023-01-28T08:00:00.000Z"
  },
  {
    "#": 1072,
    "Title": "Yusaku Kudo's Detective Show (Part Two)",
    "Type": "Manga Canon",
    "Airdate": "2023-02-04T08:00:00.000Z"
  },
  {
    "#": 1073,
    "Title": "The Detective Boys' Pursuit of the Purse-snatcher",
    "Type": "Filler",
    "Airdate": "2023-02-11T08:00:00.000Z"
  },
  {
    "#": 1074,
    "Title": "The Boiled Fugu Mystery Tour Showdown (Mojiko & Kokura Part)",
    "Type": "Filler",
    "Airdate": "2023-02-18T08:00:00.000Z"
  },
  {
    "#": 1075,
    "Title": "The Boiled Fugu Mystery Tour Showdown (Shimonoseki Part)",
    "Type": "Filler",
    "Airdate": "2023-02-25T08:00:00.000Z"
  },
  {
    "#": 1076,
    "Title": "The Charismatic CEO's Secret Plan",
    "Type": "Filler",
    "Airdate": "2023-03-04T08:00:00.000Z"
  },
  {
    "#": 1076,
    "Title": "Police Academy Arc Wild Police Story CASE. Rei Furuya",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2023-03-11T08:00:00.000Z"
  },
  {
    "#": 1077,
    "Title": "The Black Organization's Scheme (Hunt)",
    "Type": "Manga Canon",
    "Airdate": "2023-03-25T07:00:00.000Z"
  },
  {
    "#": 1078,
    "Title": "The Black Organization's Scheme (Landing)",
    "Type": "Manga Canon",
    "Airdate": "2023-04-01T07:00:00.000Z"
  },
  {
    "#": 1079,
    "Title": "The Black Organization's Scheme (Identity)",
    "Type": "Manga Canon",
    "Airdate": "2023-04-08T07:00:00.000Z"
  },
  {
    "#": 1080,
    "Title": "The Cameras Targeting Haibara",
    "Type": "Filler",
    "Airdate": "2023-04-15T07:00:00.000Z"
  },
  {
    "#": 1081,
    "Title": "My Beloved Dog Pan-kun Is a Good Boy",
    "Type": "Filler",
    "Airdate": "2023-04-22T07:00:00.000Z"
  },
  {
    "#": 1082,
    "Title": "The Alley of Sad Betrayal",
    "Type": "Filler",
    "Airdate": "2023-04-29T07:00:00.000Z"
  },
  {
    "#": 1083,
    "Title": "Behind the Scenes of the J League Finals",
    "Type": "Filler",
    "Airdate": "2023-05-13T07:00:00.000Z"
  },
  {
    "#": 1084,
    "Title": "The Freezing Cold Men",
    "Type": "Filler",
    "Airdate": "2023-05-20T07:00:00.000Z"
  },
  {
    "#": 1085,
    "Title": "The Inauspicious Matchmaking (Part One)",
    "Type": "Manga Canon",
    "Airdate": "2023-06-03T07:00:00.000Z"
  },
  {
    "#": 1086,
    "Title": "The Inauspicious Matchmaking (Part Two)",
    "Type": "Manga Canon",
    "Airdate": "2023-06-10T07:00:00.000Z"
  },
  {
    "#": 1087,
    "Title": "The Case of Ayumi's Illustrated Diary 3",
    "Type": "Filler",
    "Airdate": "2023-06-17T07:00:00.000Z"
  },
  {
    "#": 1088,
    "Title": "The Unfortunate and Suspicious Victim‎‎",
    "Type": "Filler",
    "Airdate": "2023-06-24T07:00:00.000Z"
  },
  {
    "#": 1089,
    "Title": "The Genius Restaurant",
    "Type": "Filler",
    "Airdate": "2023-07-08T07:00:00.000Z"
  },
  {
    "#": 1090,
    "Title": "The Culprit Who Disappeared Into the Sleeping Town",
    "Type": "Filler",
    "Airdate": "2023-07-15T07:00:00.000Z"
  },
  {
    "#": 1091,
    "Title": "Girls Day Mystery",
    "Type": "Filler",
    "Airdate": "2023-07-22T07:00:00.000Z"
  },
  {
    "#": 1092,
    "Title": "Stakeout 2",
    "Type": "Filler",
    "Airdate": "2023-07-29T07:00:00.000Z"
  },
  {
    "#": 1093,
    "Title": "Akemi Miyano's Time Capsule (Part One)",
    "Type": "Manga Canon",
    "Airdate": "2023-08-05T07:00:00.000Z"
  },
  {
    "#": 1094,
    "Title": "Akemi Miyano's Time Capsule (Part Two)",
    "Type": "Manga Canon",
    "Airdate": "2023-08-12T07:00:00.000Z"
  },
  {
    "#": 1095,
    "Title": "The Missing Man's Dream",
    "Type": "Filler",
    "Airdate": "2023-09-02T07:00:00.000Z"
  },
  {
    "#": 1096,
    "Title": "Mitsuhiko Tsuburaya's Detective Notes 2",
    "Type": "Filler",
    "Airdate": "2023-09-09T07:00:00.000Z"
  },
  {
    "#": 1097,
    "Title": "Did I Do It?",
    "Type": "Filler",
    "Airdate": "2023-09-16T07:00:00.000Z"
  },
  {
    "#": 1098,
    "Title": "Chihaya Hagiwara, Goddess of the Wind (Part One)",
    "Type": "Manga Canon",
    "Airdate": "2023-09-23T07:00:00.000Z"
  },
  {
    "#": 1099,
    "Title": "Chihaya Hagiwara, Goddess of the Wind (Part Two)",
    "Type": "Manga Canon",
    "Airdate": "2023-09-30T07:00:00.000Z"
  },
  {
    "#": 1100,
    "Title": "The Troublesome 20 Million Yen",
    "Type": "Filler",
    "Airdate": "2023-10-14T07:00:00.000Z"
  },
  {
    "#": 1101,
    "Title": "Pride of the Immortal Man",
    "Type": "Filler",
    "Airdate": "2023-10-21T07:00:00.000Z"
  },
  {
    "#": 1102,
    "Title": "The Akabeko and the Three Lucky Men",
    "Type": "Filler",
    "Airdate": "2023-11-04T07:00:00.000Z"
  },
  {
    "#": 1103,
    "Title": "The Teen Novel That Smells Like Guilt",
    "Type": "Filler",
    "Airdate": "2023-11-11T08:00:00.000Z"
  },
  {
    "#": 1104,
    "Title": "The True Culprit is On the Run",
    "Type": "Filler",
    "Airdate": "2023-11-18T08:00:00.000Z"
  },
  {
    "#": 1105,
    "Title": "Kid vs. Amuro: The Queen's Bangs (Part One)",
    "Type": "Manga Canon",
    "Airdate": "2023-12-02T08:00:00.000Z"
  },
  {
    "#": 1106,
    "Title": "Kid vs. Amuro: The Queen's Bangs (Part Two)",
    "Type": "Manga Canon",
    "Airdate": "2023-12-09T08:00:00.000Z"
  },
  {
    "#": 1107,
    "Title": "I Was Set Up",
    "Type": "Filler",
    "Airdate": "2023-12-16T08:00:00.000Z"
  },
  {
    "#": 1108,
    "Title": "The Secret Hidden By the Cards",
    "Type": "Filler",
    "Airdate": "2023-12-23T08:00:00.000Z"
  },
  {
    "#": 1109,
    "Title": "Takagi and Date and the Notebook Promise (Part One)",
    "Type": "Manga Canon",
    "Airdate": "2024-01-06T08:00:00.000Z"
  },
  {
    "#": 1110,
    "Title": "Takagi and Date and the Notebook Promise (Part Two)",
    "Type": "Manga Canon",
    "Airdate": "2024-01-13T08:00:00.000Z"
  },
  {
    "#": 1111,
    "Title": "Rube Goldberg Machine (Part One)",
    "Type": "Filler",
    "Airdate": "2024-01-20T08:00:00.000Z"
  },
  {
    "#": 1112,
    "Title": "Rube Goldberg Machine (Part Two)",
    "Type": "Filler",
    "Airdate": "2024-01-27T08:00:00.000Z"
  },
  {
    "#": 1113,
    "Title": "Last Dinner For You",
    "Type": "Filler",
    "Airdate": "2024-02-03T08:00:00.000Z"
  },
  {
    "#": 1114,
    "Title": "The Holed-Up Sensation",
    "Type": "Filler",
    "Airdate": "2024-02-10T08:00:00.000Z"
  },
  {
    "#": 1115,
    "Title": "Chihaya and Jugo's Matchmaking Party (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2024-03-02T08:00:00.000Z"
  },
  {
    "#": 1116,
    "Title": "Chihaya and Jugo's Matchmaking Party (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2024-03-09T08:00:00.000Z"
  },
  {
    "#": 1117,
    "Title": "Karate Teacher Ran Mori",
    "Type": "Filler",
    "Airdate": "2024-03-16T07:00:00.000Z"
  },
  {
    "#": 1118,
    "Title": "Girls Day Mystery 2",
    "Type": "Filler",
    "Airdate": "2024-03-23T07:00:00.000Z"
  },
  {
    "#": 1119,
    "Title": "The Four-Person Class Reunion",
    "Type": "Filler",
    "Airdate": "2024-04-06T07:00:00.000Z"
  },
  {
    "#": 1120,
    "Title": "Mystery of the Lost Treasure",
    "Type": "Filler",
    "Airdate": "2024-04-13T07:00:00.000Z"
  },
  {
    "#": 1121,
    "Title": "The Dangerous Melon Field",
    "Type": "Filler",
    "Airdate": "2024-04-27T07:00:00.000Z"
  },
  {
    "#": 1122,
    "Title": "Stakeout 3",
    "Type": "Filler",
    "Airdate": "2024-05-04T07:00:00.000Z"
  },
  {
    "#": 1123,
    "Title": "The Body on the Gunma-Nagano Border (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2024-05-11T07:00:00.000Z"
  },
  {
    "#": 1124,
    "Title": "The Body on the Gunma-Nagano Border (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2024-05-18T07:00:00.000Z"
  },
  {
    "#": 1125,
    "Title": "The Case of Ayumi's Illustrated Diary 4",
    "Type": "Filler",
    "Airdate": "2024-06-01T07:00:00.000Z"
  },
  {
    "#": 1126,
    "Title": "The Detective Who Lost His Mind",
    "Type": "Filler",
    "Airdate": "2024-06-08T07:00:00.000Z"
  },
  {
    "#": 1127,
    "Title": "The Interrogation Room 2",
    "Type": "Filler",
    "Airdate": "2024-06-15T07:00:00.000Z"
  },
  {
    "#": 1128,
    "Title": "Conan and Megure's Two Hostages (Part 1)",
    "Type": "Filler",
    "Airdate": "2024-06-22T07:00:00.000Z"
  },
  {
    "#": 1129,
    "Title": "Conan and Megure's Two Hostages (Part 2)",
    "Type": "Filler",
    "Airdate": "2024-06-29T07:00:00.000Z"
  },
  {
    "#": 1130,
    "Title": "The Suspected Infidelity of the Triple Collab (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2024-07-20T07:00:00.000Z"
  },
  {
    "#": 1131,
    "Title": "The Suspected Infidelity of the Triple Collab (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2024-08-03T07:00:00.000Z"
  },
  {
    "#": 1132,
    "Title": "Mitsuhiko Tsuburaya's Detective Notes 3",
    "Type": "Filler",
    "Airdate": "2024-08-17T07:00:00.000Z"
  },
  {
    "#": 1133,
    "Title": "Best Husband",
    "Type": "Filler",
    "Airdate": "2024-08-24T07:00:00.000Z"
  },
  {
    "#": 1134,
    "Title": "Misfortune of the Positive Man",
    "Type": "Filler",
    "Airdate": "2024-09-14T07:00:00.000Z"
  },
  {
    "#": 1135,
    "Title": "Ooka Momiji’s Sweet Trap (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2024-09-21T07:00:00.000Z"
  },
  {
    "#": 1136,
    "Title": "Ooka Momiji’s Sweet Trap (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2024-09-28T07:00:00.000Z"
  },
  {
    "#": 1137,
    "Title": "The Secret of the Popular Restaurant's Changing Flavor",
    "Type": "Filler",
    "Airdate": "2024-10-05T07:00:00.000Z"
  },
  {
    "#": 1138,
    "Title": "The Moving Police Box",
    "Type": "Filler",
    "Airdate": "2024-10-12T07:00:00.000Z"
  },
  {
    "#": 1139,
    "Title": "The Sister Troubled By Her Naughty Brother",
    "Type": "Filler",
    "Airdate": "2024-10-19T07:00:00.000Z"
  },
  {
    "#": 1140,
    "Title": "Girls Day Mystery 3",
    "Type": "Filler",
    "Airdate": "2024-11-02T07:00:00.000Z"
  },
  {
    "#": 1141,
    "Title": "The Mori Family House Sits",
    "Type": "Filler",
    "Airdate": "2024-11-09T08:00:00.000Z"
  },
  {
    "#": 1142,
    "Title": "The Ranpo Mansion Murder Case (Part 1)",
    "Type": "Filler",
    "Airdate": "2024-11-16T08:00:00.000Z"
  },
  {
    "#": 1143,
    "Title": "The Ranpo Mansion Murder Case (Part 2)",
    "Type": "Filler",
    "Airdate": "2024-11-23T08:00:00.000Z"
  },
  {
    "#": 1144,
    "Title": "The Hotel Serial Bombing Case (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2024-12-07T08:00:00.000Z"
  },
  {
    "#": 1145,
    "Title": "The Hotel Serial Bombing Case (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2024-12-14T08:00:00.000Z"
  },
  {
    "#": 1146,
    "Title": "The Whistling Bookstore 4",
    "Type": "Filler",
    "Airdate": "2024-12-21T08:00:00.000Z"
  },
  {
    "#": 1147,
    "Title": "Stakeout 4",
    "Type": "Filler",
    "Airdate": "2024-12-28T08:00:00.000Z"
  },
  {
    "#": 1148,
    "Title": "The Detective Boys and the Two Leaders (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2025-01-04T08:00:00.000Z"
  },
  {
    "#": 1149,
    "Title": "The Detective Boys and the Two Leaders (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2025-01-11T08:00:00.000Z"
  },
  {
    "#": 1150,
    "Title": "Kaitou Kid and the Crown Trick (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2025-01-18T08:00:00.000Z"
  },
  {
    "#": 1151,
    "Title": "Kaitou Kid and the Crown Trick (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2025-01-25T08:00:00.000Z"
  },
  {
    "#": 1152,
    "Title": "Last Dance",
    "Type": "Filler",
    "Airdate": "2025-02-08T08:00:00.000Z"
  },
  {
    "#": 1153,
    "Title": "The Yamahime of Yakushima (Part 1)",
    "Type": "Filler",
    "Airdate": "2025-02-15T08:00:00.000Z"
  },
  {
    "#": 1154,
    "Title": "The Yamahime of Yakushima (Part 2)",
    "Type": "Filler",
    "Airdate": "2025-02-22T08:00:00.000Z"
  },
  {
    "#": 1155,
    "Title": "Follow Them! Detective Taxi 2",
    "Type": "Filler",
    "Airdate": "2025-03-01T08:00:00.000Z"
  },
  {
    "#": 1156,
    "Title": "The Ishikawa Yorumasshi Mystery (Part 1)",
    "Type": "Filler",
    "Airdate": "2025-03-08T08:00:00.000Z"
  },
  {
    "#": 1157,
    "Title": "The Ishikawa Yorumasshi Mystery (Part 2)",
    "Type": "Filler",
    "Airdate": "2025-03-15T07:00:00.000Z"
  },
  {
    "#": 1158,
    "Title": "The Detective Boys and the Traditional Dream House",
    "Type": "Filler",
    "Airdate": "2025-04-12T07:00:00.000Z"
  },
  {
    "#": 1159,
    "Title": "The Whereabouts of the Goodbye",
    "Type": "Filler",
    "Airdate": "2025-04-19T07:00:00.000Z"
  },
  {
    "#": 1160,
    "Title": "When the Shishi-odoshi Sounds",
    "Type": "Filler",
    "Airdate": "2025-04-26T07:00:00.000Z"
  },
  {
    "#": 1161,
    "Title": "The Secret's Afterimage",
    "Type": "Filler",
    "Airdate": "2025-05-03T07:00:00.000Z"
  },
  {
    "#": 1162,
    "Title": "The Case of Ayumi's Illustrated Diary 5",
    "Type": "Filler",
    "Airdate": "2025-05-10T07:00:00.000Z"
  },
  {
    "#": 1163,
    "Title": "The Counting Song Heard in the Dark",
    "Type": "Filler",
    "Airdate": "2025-05-17T07:00:00.000Z"
  },
  {
    "#": 1164,
    "Title": "The 17-Year-Old Truth (The Bloody Knight)",
    "Type": "Manga Canon",
    "Airdate": "2025-06-07T07:00:00.000Z"
  },
  {
    "#": 1165,
    "Title": "The 17-Year-Old Truth (The Perceptive Devil)",
    "Type": "Manga Canon",
    "Airdate": "2025-06-14T07:00:00.000Z"
  },
  {
    "#": 1166,
    "Title": "The 17-Year-Old Truth (The Far-Sighted Bishop)",
    "Type": "Manga Canon",
    "Airdate": "2025-06-21T07:00:00.000Z"
  },
  {
    "#": 1167,
    "Title": "The 17-Year-Old Truth (The Queen's Gambit)",
    "Type": "Manga Canon",
    "Airdate": "2025-06-28T07:00:00.000Z"
  },
  {
    "#": 1168,
    "Title": "Genta's Casebook of the Eel",
    "Type": "Filler",
    "Airdate": "2025-07-19T07:00:00.000Z"
  },
  {
    "#": 1169,
    "Title": "The Mystery of the Man-Eating Classroom (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2025-07-26T07:00:00.000Z"
  },
  {
    "#": 1170,
    "Title": "The Mystery of the Man-Eating Classroom (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2025-08-02T07:00:00.000Z"
  },
  {
    "#": 1171,
    "Title": "The Reason He Became a Butler (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2025-08-16T07:00:00.000Z"
  },
  {
    "#": 1172,
    "Title": "The Reason He Became a Butler (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2025-08-23T07:00:00.000Z"
  },
  {
    "#": 1173,
    "Title": "It's a Ghost!",
    "Type": "Filler",
    "Airdate": "2025-08-30T07:00:00.000Z"
  },
  {
    "#": 1174,
    "Title": "The Glassy Water's Surface (Part 1)",
    "Type": "Filler",
    "Airdate": "2025-09-06T07:00:00.000Z"
  },
  {
    "#": 1175,
    "Title": "The Glassy Water's Surface (Part 2)",
    "Type": "Filler",
    "Airdate": "2025-09-13T07:00:00.000Z"
  },
  {
    "#": 1176,
    "Title": "The Hero of Ishinomaki",
    "Type": "Filler",
    "Airdate": "2025-09-20T07:00:00.000Z"
  },
  {
    "#": 1177,
    "Title": "Find the Phantom Giant",
    "Type": "Filler",
    "Airdate": "2025-09-27T07:00:00.000Z"
  },
  {
    "#": 1178,
    "Title": "The Crimson Skeleton of Mt. Washio (Part 1)",
    "Type": "Manga Canon",
    "Airdate": "2025-10-11T07:00:00.000Z"
  },
  {
    "#": 1179,
    "Title": "The Crimson Skeleton of Mt. Washio (Part 2)",
    "Type": "Manga Canon",
    "Airdate": "2025-10-18T07:00:00.000Z"
  },
  {
    "#": 1180,
    "Title": "The Lucky Cat Saw Everything",
    "Type": "Filler",
    "Airdate": "2025-11-01T07:00:00.000Z"
  },
  {
    "#": 1181,
    "Title": "Buchi Returns a Favor",
    "Type": "Filler",
    "Airdate": "2025-11-08T08:00:00.000Z"
  }
],

'GP5HJ84D2': //TOUGEN ANKI
[
  {
    "#": 1,
    "Title": "Tougen Aki 1",
    "Type": "Manga Canon",
    "Airdate": "2025-04-04T07:00:00.000Z"
  },
  {
    "#": 2,
    "Title": "Tougen Aki 2",
    "Type": "Manga Canon",
    "Airdate": "2025-04-05T07:00:00.000Z"
  },
  {
    "#": 3,
    "Title": "Tougen Aki 3",
    "Type": "Manga Canon",
    "Airdate": "2025-04-06T07:00:00.000Z"
  },
  {
    "#": 4,
    "Title": "Tougen Aki 4",
    "Type": "Manga Canon",
    "Airdate": "2025-04-07T07:00:00.000Z"
  },
  {
    "#": 5,
    "Title": "Tougen Aki 5",
    "Type": "Manga Canon",
    "Airdate": "2025-04-08T07:00:00.000Z"
  },
  {
    "#": 6,
    "Title": "Tougen Aki 6",
    "Type": "Manga Canon",
    "Airdate": "2025-04-09T07:00:00.000Z"
  },
  {
    "#": 7,
    "Title": "Tougen Aki 7",
    "Type": "Manga Canon",
    "Airdate": "2025-04-10T07:00:00.000Z"
  },
  {
    "#": 8,
    "Title": "Tougen Aki 8",
    "Type": "Manga Canon",
    "Airdate": "2025-04-11T07:00:00.000Z"
  },
  {
    "#": 9,
    "Title": "Tougen Aki 9",
    "Type": "Manga Canon",
    "Airdate": "2025-04-12T07:00:00.000Z"
  },
  {
    "#": 10,
    "Title": "Tougen Aki 10",
    "Type": "Manga Canon",
    "Airdate": "2025-04-13T07:00:00.000Z"
  },
  {
    "#": 11,
    "Title": "Tougen Aki 11",
    "Type": "Manga Canon",
    "Airdate": "2025-04-14T07:00:00.000Z"
  },
  {
    "#": 12,
    "Title": "Tougen Aki 12",
    "Type": "Filler",
    "Airdate": "2025-04-15T07:00:00.000Z"
  },
  {
    "#": 13,
    "Title": "Tougen Aki 13",
    "Type": "Manga Canon",
    "Airdate": "2025-04-16T07:00:00.000Z"
  },
  {
    "#": 14,
    "Title": "Tougen Aki 14",
    "Type": "Manga Canon",
    "Airdate": "2025-04-17T07:00:00.000Z"
  },
  {
    "#": 15,
    "Title": "Tougen Aki 15",
    "Type": "Manga Canon",
    "Airdate": "2025-04-18T07:00:00.000Z"
  },
  {
    "#": 16,
    "Title": "Tougen Aki 16",
    "Type": "Manga Canon",
    "Airdate": "2025-04-19T07:00:00.000Z"
  },
  {
    "#": 17,
    "Title": "Tougen Aki 17",
    "Type": "Manga Canon",
    "Airdate": "2025-04-20T07:00:00.000Z"
  },
  {
    "#": 18,
    "Title": "Tougen Aki 18",
    "Type": "Manga Canon",
    "Airdate": "2025-04-21T07:00:00.000Z"
  },
  {
    "#": 19,
    "Title": "Tougen Aki 19",
    "Type": "Manga Canon",
    "Airdate": "2025-04-22T07:00:00.000Z"
  },
  {
    "#": 20,
    "Title": "Tougen Aki 20",
    "Type": "Manga Canon",
    "Airdate": "2025-04-23T07:00:00.000Z"
  },
  {
    "#": 21,
    "Title": "Tougen Aki 21",
    "Type": "Manga Canon",
    "Airdate": "2025-04-24T07:00:00.000Z"
  },
  {
    "#": 22,
    "Title": "Tougen Aki 22",
    "Type": "Manga Canon",
    "Airdate": "2025-04-25T07:00:00.000Z"
  },
  {
    "#": 23,
    "Title": "Tougen Aki 23",
    "Type": "Manga Canon",
    "Airdate": "2025-04-26T07:00:00.000Z"
  },
  {
    "#": 24,
    "Title": "Tougen Aki 24",
    "Type": "Manga Canon",
    "Airdate": "2025-04-27T07:00:00.000Z"
  },
  {
    "#": 25,
    "Title": "Tougen Aki 25",
    "Type": "Manga Canon",
    "Airdate": "2025-04-28T07:00:00.000Z"
  }
],

'GR757DMKY': //WORLD TRIGGER
[
  {
    "#": "S1 E1",
    "Title": "Visitors from Another World",
    "Type": "Manga Canon",
    "Airdate": "2025-04-04T07:00:00.000Z"
  },
  {
    "#": "S1 E2",
    "Title": "Neighbor and Trion Soldier",
    "Type": "Manga Canon",
    "Airdate": "2025-04-05T07:00:00.000Z"
  },
  {
    "#": "S1 E3",
    "Title": "Osamu Mikumo’s Ability",
    "Type": "Manga Canon",
    "Airdate": "2025-04-06T07:00:00.000Z"
  },
  {
    "#": "S1 E4",
    "Title": "Ai Kitora, A-Rank No.5 Agent",
    "Type": "Manga Canon",
    "Airdate": "2025-04-07T07:00:00.000Z"
  },
  {
    "#": "S1 E5",
    "Title": "Power Elite, Yuichi Jin",
    "Type": "Manga Canon",
    "Airdate": "2025-04-08T07:00:00.000Z"
  },
  {
    "#": "S1 E6",
    "Title": "Chika Amatori’s Side Effect",
    "Type": "Manga Canon",
    "Airdate": "2025-04-09T07:00:00.000Z"
  },
  {
    "#": "S1 E7",
    "Title": "Miwa Squad’s Assault",
    "Type": "Manga Canon",
    "Airdate": "2025-04-10T07:00:00.000Z"
  },
  {
    "#": "S1 E8",
    "Title": "Black Trigger",
    "Type": "Manga Canon",
    "Airdate": "2025-04-11T07:00:00.000Z"
  },
  {
    "#": "S1 E9",
    "Title": "The Organization Known as Border",
    "Type": "Manga Canon",
    "Airdate": "2025-04-14T07:00:00.000Z"
  },
  {
    "#": "S1 E10",
    "Title": "Tamakoma Branch",
    "Type": "Manga Canon",
    "Airdate": "2025-04-15T07:00:00.000Z"
  },
  {
    "#": "S1 E11",
    "Title": "The Determination of Each One",
    "Type": "Manga Canon",
    "Airdate": "2025-04-16T07:00:00.000Z"
  },
  {
    "#": "S1 E12",
    "Title": "A-Rank Agents of Tamakoma",
    "Type": "Manga Canon",
    "Airdate": "2025-04-17T07:00:00.000Z"
  },
  {
    "#": "S1 E13",
    "Title": "Border Top Team",
    "Type": "Manga Canon",
    "Airdate": "2025-04-18T07:00:00.000Z"
  },
  {
    "#": "S1 E14",
    "Title": "Miwa Corps",
    "Type": "Manga Canon",
    "Airdate": "2025-04-19T07:00:00.000Z"
  },
  {
    "#": "S1 E15",
    "Title": "Black Trigger Wind Blade",
    "Type": "Manga Canon",
    "Airdate": "2025-04-20T07:00:00.000Z"
  },
  {
    "#": "S1 E16",
    "Title": "To the Future",
    "Type": "Manga Canon",
    "Airdate": "2025-04-22T07:00:00.000Z"
  },
  {
    "#": "S1 E17",
    "Title": "Border Official Enlistment",
    "Type": "Manga Canon",
    "Airdate": "2025-04-24T07:00:00.000Z"
  },
  {
    "#": "S1 E18",
    "Title": "Mikumo Shu vs Kazama Souya",
    "Type": "Manga Canon",
    "Airdate": "2025-04-25T07:00:00.000Z"
  },
  {
    "#": "S1 E19",
    "Title": "Ranking Battle! Midorikawa Jun’s Strategy",
    "Type": "Manga Canon",
    "Airdate": "2025-04-26T07:00:00.000Z"
  },
  {
    "#": "S1 E20",
    "Title": "Duel! Yuma vs Midorikawa",
    "Type": "Manga Canon",
    "Airdate": "2025-04-28T07:00:00.000Z"
  },
  {
    "#": "S1 E21",
    "Title": "Neighbor’s World",
    "Type": "Manga Canon",
    "Airdate": "2025-04-29T07:00:00.000Z"
  },
  {
    "#": "S1 E22",
    "Title": "A Large-Scale Invasion Starts",
    "Type": "Manga Canon",
    "Airdate": "2025-05-01T07:00:00.000Z"
  },
  {
    "#": "S1 E23",
    "Title": "The Holy Land, AftoKrator",
    "Type": "Manga Canon",
    "Airdate": "2025-05-02T07:00:00.000Z"
  },
  {
    "#": "S1 E24",
    "Title": "Nestling from Mysterious World",
    "Type": "Manga Canon",
    "Airdate": "2025-05-03T07:00:00.000Z"
  },
  {
    "#": "S1 E25",
    "Title": "Best Force in Border",
    "Type": "Manga Canon",
    "Airdate": "2025-05-04T07:00:00.000Z"
  },
  {
    "#": "S1 E26",
    "Title": "Fierce Fight! Enedora vs. Kazama Squad",
    "Type": "Manga Canon",
    "Airdate": "2025-05-05T07:00:00.000Z"
  },
  {
    "#": "S1 E27",
    "Title": "Counterattack of Border",
    "Type": "Manga Canon",
    "Airdate": "2025-05-06T07:00:00.000Z"
  },
  {
    "#": "S1 E28",
    "Title": "Star Wand Master",
    "Type": "Manga Canon",
    "Airdate": "2025-05-07T07:00:00.000Z"
  },
  {
    "#": "S1 E29",
    "Title": "Crossroads of Destiny",
    "Type": "Manga Canon",
    "Airdate": "2025-05-08T07:00:00.000Z"
  },
  {
    "#": "S1 E30",
    "Title": "Enemy Commander Hyrein",
    "Type": "Manga Canon",
    "Airdate": "2025-05-09T07:00:00.000Z"
  },
  {
    "#": "S1 E31",
    "Title": "Mikumo Osamu’s Consciousness",
    "Type": "Manga Canon",
    "Airdate": "2025-05-10T07:00:00.000Z"
  },
  {
    "#": "S1 E32",
    "Title": "Implacable Enedora",
    "Type": "Manga Canon",
    "Airdate": "2025-05-11T07:00:00.000Z"
  },
  {
    "#": "S1 E33",
    "Title": "The Terror of Hyrein",
    "Type": "Manga Canon",
    "Airdate": "2025-05-12T07:00:00.000Z"
  },
  {
    "#": "S1 E34",
    "Title": "A Fierce Showdown! The Fight of the Best",
    "Type": "Manga Canon",
    "Airdate": "2025-05-13T07:00:00.000Z"
  },
  {
    "#": "S1 E35",
    "Title": "The End of the Battle",
    "Type": "Manga Canon",
    "Airdate": "2025-05-15T07:00:00.000Z"
  },
  {
    "#": "S1 E36",
    "Title": "The Have-Nots",
    "Type": "Manga Canon",
    "Airdate": "2025-05-16T07:00:00.000Z"
  },
  {
    "#": "S1 E37",
    "Title": "A Hero and a Partner",
    "Type": "Manga Canon",
    "Airdate": "2025-05-17T07:00:00.000Z"
  },
  {
    "#": "S1 E38",
    "Title": "Rank B Battle Starts",
    "Type": "Manga Canon",
    "Airdate": "2025-05-19T07:00:00.000Z"
  },
  {
    "#": "S1 E39",
    "Title": "Suwa Squad and Arafune Squad",
    "Type": "Manga Canon",
    "Airdate": "2025-05-20T07:00:00.000Z"
  },
  {
    "#": "S1 E40",
    "Title": "Setting Off! Mikumo Squad",
    "Type": "Manga Canon",
    "Airdate": "2025-05-21T07:00:00.000Z"
  },
  {
    "#": "S1 E41",
    "Title": "An Impertinent Rookie",
    "Type": "Manga Canon",
    "Airdate": "2025-05-22T07:00:00.000Z"
  },
  {
    "#": "S1 E42",
    "Title": "Murakami Ko",
    "Type": "Manga Canon",
    "Airdate": "2025-05-23T07:00:00.000Z"
  },
  {
    "#": "S1 E43",
    "Title": "Nasu Squad’s Choice",
    "Type": "Manga Canon",
    "Airdate": "2025-05-24T07:00:00.000Z"
  },
  {
    "#": "S1 E44",
    "Title": "The Battle in the Foul Weather",
    "Type": "Manga Canon",
    "Airdate": "2025-05-26T07:00:00.000Z"
  },
  {
    "#": "S1 E45",
    "Title": "Something That Decides Victory or Defeat",
    "Type": "Manga Canon",
    "Airdate": "2025-05-27T07:00:00.000Z"
  },
  {
    "#": "S1 E46",
    "Title": "The Ace’s Willpower",
    "Type": "Manga Canon",
    "Airdate": "2025-05-28T07:00:00.000Z"
  },
  {
    "#": "S1 E47",
    "Title": "The Captain’s Pride",
    "Type": "Manga Canon",
    "Airdate": "2025-05-29T07:00:00.000Z"
  },
  {
    "#": "S1 E48",
    "Title": "Then Towards Tomorrow * Filler",
    "Type": "Filler",
    "Airdate": "2025-05-31T07:00:00.000Z"
  },
  {
    "#": "S1 E49",
    "Title": "Fugitives from Another World * Filler",
    "Type": "Filler",
    "Airdate": "2025-06-01T07:00:00.000Z"
  },
  {
    "#": "S1 E50",
    "Title": "Invisible Assailants * Filler",
    "Type": "Filler",
    "Airdate": "2025-06-02T07:00:00.000Z"
  },
  {
    "#": "S1 E51",
    "Title": "Zeno’s Trion Soldier * Filler",
    "Type": "Filler",
    "Airdate": "2025-06-03T07:00:00.000Z"
  },
  {
    "#": "S1 E52",
    "Title": "Sunset in Another World * Filler",
    "Type": "Filler",
    "Airdate": "2025-06-04T07:00:00.000Z"
  },
  {
    "#": "S1 E53",
    "Title": "The One That Shall Be Saved * Filler",
    "Type": "Filler",
    "Airdate": "2025-06-05T07:00:00.000Z"
  },
  {
    "#": "S1 E54",
    "Title": "Giev’s Thrust * Filler",
    "Type": "Filler",
    "Airdate": "2025-06-06T07:00:00.000Z"
  },
  {
    "#": "S1 E55",
    "Title": "Dead or Alive * Filler",
    "Type": "Filler",
    "Airdate": "2025-06-07T07:00:00.000Z"
  },
  {
    "#": "S1 E56",
    "Title": "The Secret of Lilith * Filler",
    "Type": "Filler",
    "Airdate": "2025-06-08T07:00:00.000Z"
  },
  {
    "#": "S1 E57",
    "Title": "Xeno and Lilith * Filler",
    "Type": "Filler",
    "Airdate": "2025-06-09T07:00:00.000Z"
  },
  {
    "#": "S1 E58",
    "Title": "The Captured Osamu * Filler",
    "Type": "Filler",
    "Airdate": "2025-06-10T07:00:00.000Z"
  },
  {
    "#": "S1 E59",
    "Title": "The Two Black Triggers * Filler",
    "Type": "Filler",
    "Airdate": "2025-06-12T07:00:00.000Z"
  },
  {
    "#": "S1 E60",
    "Title": "Yotaro’s Adventure * Filler",
    "Type": "Filler",
    "Airdate": "2025-06-13T07:00:00.000Z"
  },
  {
    "#": "S1 E61",
    "Title": "Truth and Lies * Filler",
    "Type": "Filler",
    "Airdate": "2025-06-14T07:00:00.000Z"
  },
  {
    "#": "S1 E62",
    "Title": "Giev and Charon * Filler",
    "Type": "Filler",
    "Airdate": "2025-06-15T07:00:00.000Z"
  },
  {
    "#": "S1 E63",
    "Title": "A Reversed Future * Filler",
    "Type": "Filler",
    "Airdate": "2025-06-16T07:00:00.000Z"
  },
  {
    "#": "S1 E64",
    "Title": "A Prisoner from Aftokrator",
    "Type": "Manga Canon",
    "Airdate": "2025-06-18T07:00:00.000Z"
  },
  {
    "#": "S1 E65",
    "Title": "No.1 Shooter Ninomiya Masaki",
    "Type": "Manga Canon",
    "Airdate": "2025-06-19T07:00:00.000Z"
  },
  {
    "#": "S1 E66",
    "Title": "Sharpened Fangs",
    "Type": "Manga Canon",
    "Airdate": "2025-06-20T07:00:00.000Z"
  },
  {
    "#": "S1 E67",
    "Title": "Rank B Battle",
    "Type": "Manga Canon",
    "Airdate": "2025-06-21T07:00:00.000Z"
  },
  {
    "#": "S1 E68",
    "Title": "The Targeted Tamakoma",
    "Type": "Manga Canon",
    "Airdate": "2025-06-22T07:00:00.000Z"
  },
  {
    "#": "S1 E69",
    "Title": "A Battle Royale",
    "Type": "Manga Canon",
    "Airdate": "2025-06-23T07:00:00.000Z"
  },
  {
    "#": "S1 E70",
    "Title": "A Captain’s Duty",
    "Type": "Manga Canon",
    "Airdate": "2025-06-24T07:00:00.000Z"
  },
  {
    "#": "S1 E71",
    "Title": "New Threats",
    "Type": "Manga Canon",
    "Airdate": "2025-06-25T07:00:00.000Z"
  },
  {
    "#": "S1 E72",
    "Title": "An Evolving Mikumo Squad",
    "Type": "Manga Canon",
    "Airdate": "2025-06-26T07:00:00.000Z"
  },
  {
    "#": "S1 E73",
    "Title": "To the Future",
    "Type": "Manga Canon",
    "Airdate": "2025-06-27T07:00:00.000Z"
  },
  {
    "#": "S2 E1",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-06-28T07:00:00.000Z"
  },
  {
    "#": "S2 E2",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-06-29T07:00:00.000Z"
  },
  {
    "#": "S2 E3",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-06-30T07:00:00.000Z"
  },
  {
    "#": "S2 E4",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-01T07:00:00.000Z"
  },
  {
    "#": "S2 E5",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-02T07:00:00.000Z"
  },
  {
    "#": "S2 E6",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-03T07:00:00.000Z"
  },
  {
    "#": "S2 E7",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-04T07:00:00.000Z"
  },
  {
    "#": "S2 E8",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-05T07:00:00.000Z"
  },
  {
    "#": "S2 E9",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-06T07:00:00.000Z"
  },
  {
    "#": "S2 E10",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-07T07:00:00.000Z"
  },
  {
    "#": "S2 E11",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-08T07:00:00.000Z"
  },
  {
    "#": "S2 E12",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-09T07:00:00.000Z"
  },
  {
    "#": "S3 E1",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-10T07:00:00.000Z"
  },
  {
    "#": "S3 E2",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-11T07:00:00.000Z"
  },
  {
    "#": "S3 E3",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-12T07:00:00.000Z"
  },
  {
    "#": "S3 E4",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-13T07:00:00.000Z"
  },
  {
    "#": "S3 E5",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-14T07:00:00.000Z"
  },
  {
    "#": "S3 E6",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-15T07:00:00.000Z"
  },
  {
    "#": "S3 E7",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-16T07:00:00.000Z"
  },
  {
    "#": "S3 E8",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-17T07:00:00.000Z"
  },
  {
    "#": "S3 E9",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-18T07:00:00.000Z"
  },
  {
    "#": "S3 E10",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-19T07:00:00.000Z"
  },
  {
    "#": "S3 E11",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-20T07:00:00.000Z"
  },
  {
    "#": "S3 E12",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-21T07:00:00.000Z"
  },
  {
    "#": "S3 E13",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-22T07:00:00.000Z"
  },
  {
    "#": "S3 E14",
    "Title": "full",
    "Type": "Manga Canon",
    "Airdate": "2025-07-23T07:00:00.000Z"
  }
],

'GRE5MNM06': //TORIKO
[
  {
    "#": 1,
    "Title": "Arrival on Gourmet Island! The Gourmet Hunter Toriko Appears!",
    "Type": "Filler",
    "Airdate": "2011-04-03T07:00:00.000Z"
  },
  {
    "#": 2,
    "Title": "The Undiscovered Giant Beast! Toriko, Capture a Gararagator!",
    "Type": "Manga Canon",
    "Airdate": "2011-04-10T07:00:00.000Z"
  },
  {
    "#": 3,
    "Title": "The Well Mellowed 7-Colored Fruit Juice! Pick the Rainbow Fruit!",
    "Type": "Manga Canon",
    "Airdate": "2011-04-17T07:00:00.000Z"
  },
  {
    "#": 4,
    "Title": "Prepare It! The Poisonous Puffer Whale! The Heavenly King Coco Appears!!",
    "Type": "Manga Canon",
    "Airdate": "2011-04-24T07:00:00.000Z"
  },
  {
    "#": 5,
    "Title": "The Deadly Cave Battle! Fire, Five-Fold Spiked Punch!",
    "Type": "Manga Canon",
    "Airdate": "2011-05-01T07:00:00.000Z"
  },
  {
    "#": 6,
    "Title": "The Knocking Master! Time to Taste the Puffer Whale!",
    "Type": "Manga Canon",
    "Airdate": "2011-05-08T07:00:00.000Z"
  },
  {
    "#": 7,
    "Title": "The Strongest Wolf That Ever Lived! The Battle Wolf is Reborn!",
    "Type": "Manga Canon",
    "Airdate": "2011-05-15T07:00:00.000Z"
  },
  {
    "#": 8,
    "Title": "The Threat Appears! Rumble at the Gourmet Colosseum!",
    "Type": "Manga Canon",
    "Airdate": "2011-05-22T07:00:00.000Z"
  },
  {
    "#": 9,
    "Title": "That Which Is Passed Down! Activate, Gourmet Cells!",
    "Type": "Manga Canon",
    "Airdate": "2011-05-29T07:00:00.000Z"
  },
  {
    "#": 10,
    "Title": "The Man Who Has an Invincible Domain! His Name Is Sunny!",
    "Type": "Manga Canon",
    "Airdate": "2011-06-05T07:00:00.000Z"
  },
  {
    "#": 11,
    "Title": "Regal Isle Dash! Search for the Jewel Meat!",
    "Type": "Manga Canon",
    "Airdate": "2011-06-12T07:00:00.000Z"
  },
  {
    "#": 12,
    "Title": "The Devil's Game! Clear the Devil's Playground!",
    "Type": "Manga Canon",
    "Airdate": "2011-06-19T07:00:00.000Z"
  },
  {
    "#": 13,
    "Title": "The Ultimate Backup! Clash, Coco Vs. GT Robot!",
    "Type": "Manga Canon",
    "Airdate": "2011-06-26T07:00:00.000Z"
  },
  {
    "#": 14,
    "Title": "The Threat Of Deadly Poison! Coco's Formula For Victory!",
    "Type": "Manga Canon",
    "Airdate": "2011-07-03T07:00:00.000Z"
  },
  {
    "#": 15,
    "Title": "The Unyielding aesthetic! Sunny's Manly Battle!",
    "Type": "Manga Canon",
    "Airdate": "2011-07-10T07:00:00.000Z"
  },
  {
    "#": 16,
    "Title": "Rin's Final Wish! Awaken, Super Toriko!",
    "Type": "Manga Canon",
    "Airdate": "2011-07-17T07:00:00.000Z"
  },
  {
    "#": 17,
    "Title": "Super Toriko, the Fist of Anger! This is the Strongest Spike Punch!",
    "Type": "Manga Canon",
    "Airdate": "2011-07-31T07:00:00.000Z"
  },
  {
    "#": 18,
    "Title": "The Taste Written In His DNA! Toriko, Search For The Blue Blood Corn!",
    "Type": "Manga Canon",
    "Airdate": "2011-08-07T07:00:00.000Z"
  },
  {
    "#": 19,
    "Title": "The Talent of Battle! Show Me, Terry, King in the Making!",
    "Type": "Manga Canon",
    "Airdate": "2011-08-14T07:00:00.000Z"
  },
  {
    "#": 20,
    "Title": "For Terry's Sake! Burst By Broiling Heat, BB Corn!",
    "Type": "Manga Canon",
    "Airdate": "2011-08-21T07:00:00.000Z"
  },
  {
    "#": 21,
    "Title": "The Gourmet Corps' Assassin! Toriko's Attack Instantaneously Evolves!",
    "Type": "Manga Canon",
    "Airdate": "2011-08-28T07:00:00.000Z"
  },
  {
    "#": 22,
    "Title": "Pressure of Madness! Grinpatch vs. Toriko!",
    "Type": "Manga Canon",
    "Airdate": "2011-09-04T07:00:00.000Z"
  },
  {
    "#": 23,
    "Title": "The Amusement Park of Eating! The Bellyfull City, Gourmet Town!",
    "Type": "Manga Canon",
    "Airdate": "2011-09-11T07:00:00.000Z"
  },
  {
    "#": 24,
    "Title": "The Moment of Truth! Setsuno's Century Soup!",
    "Type": "Manga Canon",
    "Airdate": "2011-09-18T07:00:00.000Z"
  },
  {
    "#": 25,
    "Title": "Meeting at the Saloon! The Powerful and Numerous Gourmet Hunters!",
    "Type": "Manga Canon",
    "Airdate": "2011-09-25T07:00:00.000Z"
  },
  {
    "#": 26,
    "Title": "The Gourtmet Hunter Troops' Challenge! Arrival in the Frigid Hell!",
    "Type": "Manga Canon",
    "Airdate": "2011-10-02T07:00:00.000Z"
  },
  {
    "#": 27,
    "Title": "Hurry While It's Hot! A Survival Race on Ice!",
    "Type": "Manga Canon",
    "Airdate": "2011-10-09T07:00:00.000Z"
  },
  {
    "#": 28,
    "Title": "The Fiery Explosion Shakes the Iceberg!! The Masked Man's True Form!!",
    "Type": "Manga Canon",
    "Airdate": "2011-10-16T07:00:00.000Z"
  },
  {
    "#": 29,
    "Title": "Glorious Bug Tamer! Tommyrod vs. Toriko",
    "Type": "Manga Canon",
    "Airdate": "2011-10-23T07:00:00.000Z"
  },
  {
    "#": 30,
    "Title": "Gratitude and Pride! Takimaru's Full-Out Corkscrew Shot!",
    "Type": "Manga Canon",
    "Airdate": "2011-10-30T07:00:00.000Z"
  },
  {
    "#": 31,
    "Title": "Settled! Match and Takimaru's Desperate Attacks!",
    "Type": "Manga Canon",
    "Airdate": "2011-11-06T07:00:00.000Z"
  },
  {
    "#": 32,
    "Title": "The Gourmet Reviver and the Legendary Soup's Location!",
    "Type": "Manga Canon",
    "Airdate": "2011-11-13T08:00:00.000Z"
  },
  {
    "#": 33,
    "Title": "Head-on Fight! Fierce Battle! Toriko vs. Tommyrod!",
    "Type": "Manga Canon",
    "Airdate": "2011-11-20T08:00:00.000Z"
  },
  {
    "#": 34,
    "Title": "Ultimate Desperation! Tommyrod's Full-Power Mode Explodes!",
    "Type": "Manga Canon",
    "Airdate": "2011-11-27T08:00:00.000Z"
  },
  {
    "#": 35,
    "Title": "Wondrous Power! Gourmet Reviver Teppei Joins the Battle!",
    "Type": "Manga Canon",
    "Airdate": "2011-12-04T08:00:00.000Z"
  },
  {
    "#": 36,
    "Title": "The Last Drop! Who Will Get the Century Soup?!",
    "Type": "Manga Canon",
    "Airdate": "2011-12-11T08:00:00.000Z"
  },
  {
    "#": 37,
    "Title": "Farewell, Ice Hell! Granny Setsu's Hidden Power!",
    "Type": "Manga Canon",
    "Airdate": "2011-12-18T08:00:00.000Z"
  },
  {
    "#": 38,
    "Title": "Splendid Healing! Here Comes the Gourmet Reviver, Yosaku!",
    "Type": "Manga Canon",
    "Airdate": "2011-12-25T08:00:00.000Z"
  },
  {
    "#": 39,
    "Title": "Race to Finish! Will It Be Toriko's Recovery, or Komatsu's Soup?!",
    "Type": "Manga Canon",
    "Airdate": "2012-01-08T08:00:00.000Z"
  },
  {
    "#": 40,
    "Title": "To the World of Ultimate Bliss! Taste the Century Soup!",
    "Type": "Manga Canon",
    "Airdate": "2012-01-15T08:00:00.000Z"
  },
  {
    "#": 41,
    "Title": "Housewarming Party! Everyone Gather at the Sweets House!",
    "Type": "Manga Canon",
    "Airdate": "2012-01-22T08:00:00.000Z"
  },
  {
    "#": 42,
    "Title": "The Gourmet King Championship! Search for the Ultimate Sweets!",
    "Type": "Filler",
    "Airdate": "2012-01-29T08:00:00.000Z"
  },
  {
    "#": 43,
    "Title": "Bonding Dish! Partners Are Forever!",
    "Type": "Filler",
    "Airdate": "2012-02-05T08:00:00.000Z"
  },
  {
    "#": 44,
    "Title": "White Hot! Toriko vs. the IGO President!",
    "Type": "Manga Canon",
    "Airdate": "2012-02-12T08:00:00.000Z"
  },
  {
    "#": 45,
    "Title": "Vegetable Garden in the Heavens! Vegetable Sky!",
    "Type": "Manga Canon",
    "Airdate": "2012-02-19T08:00:00.000Z"
  },
  {
    "#": 46,
    "Title": "Discovery! The King of Vegetables, Ozone Grass!",
    "Type": "Manga Canon",
    "Airdate": "2012-02-26T08:00:00.000Z"
  },
  {
    "#": 47,
    "Title": "Confession in the Heavens! The Formation of the Invincible Duo!",
    "Type": "Manga Canon",
    "Airdate": "2012-03-04T08:00:00.000Z"
  },
  {
    "#": 48,
    "Title": "Shocking Encounter! A Mysterious Life Form Appears!",
    "Type": "Manga Canon",
    "Airdate": "2012-03-18T07:00:00.000Z"
  },
  {
    "#": 49,
    "Title": "Toriko Rushes in! The Truth of the Gourmet World!",
    "Type": "Manga Canon",
    "Airdate": "2012-03-25T07:00:00.000Z"
  },
  {
    "#": 50,
    "Title": "Enter the Astounding Ringer! The True Meaning of a Partner!",
    "Type": "Manga Canon",
    "Airdate": "2012-04-01T07:00:00.000Z"
  },
  {
    "#": 51,
    "Title": "Toriko and Luffy Meet Again! Find the Seafood Fruit!",
    "Type": "Filler",
    "Airdate": "2012-04-08T07:00:00.000Z"
  },
  {
    "#": 52,
    "Title": "Shock! The Broken Kitchen Knife and Cutler Melk!",
    "Type": "Manga Canon",
    "Airdate": "2012-04-15T07:00:00.000Z"
  },
  {
    "#": 53,
    "Title": "Tension! Toriko's Knife vs. Melk's Kitchen Knife!",
    "Type": "Manga Canon",
    "Airdate": "2012-04-22T07:00:00.000Z"
  },
  {
    "#": 54,
    "Title": "Supergravity! Conquer Heavy Hole!",
    "Type": "Manga Canon",
    "Airdate": "2012-04-29T07:00:00.000Z"
  },
  {
    "#": 55,
    "Title": "Hidden Truth! The First Melk Appears!",
    "Type": "Manga Canon",
    "Airdate": "2012-05-06T07:00:00.000Z"
  },
  {
    "#": 56,
    "Title": "Debut! The Second Generation's Succession and Melk Stardust!",
    "Type": "Manga Canon",
    "Airdate": "2012-05-13T07:00:00.000Z"
  },
  {
    "#": 57,
    "Title": "A Work Made with All Her Might! The Completed Melk Knife!",
    "Type": "Manga Canon",
    "Airdate": "2012-05-20T07:00:00.000Z"
  },
  {
    "#": 58,
    "Title": "Super Celeb! Once in a Lifetime Gourmet Carriage Journey!",
    "Type": "Manga Canon",
    "Airdate": "2012-05-27T07:00:00.000Z"
  },
  {
    "#": 59,
    "Title": "Finally, He Appears! The Last of the Four Kings, Zebra!",
    "Type": "Manga Canon",
    "Airdate": "2012-06-03T07:00:00.000Z"
  },
  {
    "#": 60,
    "Title": "Unleash the Roar! The Release of the Condemned Criminal, Zebra!",
    "Type": "Manga Canon",
    "Airdate": "2012-06-10T07:00:00.000Z"
  },
  {
    "#": 61,
    "Title": "Warning Issued! Zebra Lands on Sand Garden!",
    "Type": "Manga Canon",
    "Airdate": "2012-06-17T07:00:00.000Z"
  },
  {
    "#": 62,
    "Title": "Komatsu's Disappearance! The Desert Labyrinth of Evil!",
    "Type": "Manga Canon",
    "Airdate": "2012-06-24T07:00:00.000Z"
  },
  {
    "#": 63,
    "Title": "The Sealed Voice! The Other-Dimensional Gourmet Pyramid!",
    "Type": "Manga Canon",
    "Airdate": "2012-07-01T07:00:00.000Z"
  },
  {
    "#": 64,
    "Title": "Astounding! The Mysterious Ancient Manuscript and the Creature Inside the Coffin!",
    "Type": "Manga Canon",
    "Airdate": "2012-07-08T07:00:00.000Z"
  },
  {
    "#": 65,
    "Title": "Shocking Showdown! Salamander Sphinx!",
    "Type": "Manga Canon",
    "Airdate": "2012-07-15T07:00:00.000Z"
  },
  {
    "#": 66,
    "Title": "Cooperative Cooking! Komatsu Steers Toriko and Zebra!",
    "Type": "Manga Canon",
    "Airdate": "2012-07-29T07:00:00.000Z"
  },
  {
    "#": 67,
    "Title": "Explosion of Combination Techniques! Taking the World's Best Cola!",
    "Type": "Manga Canon",
    "Airdate": "2012-08-05T07:00:00.000Z"
  },
  {
    "#": 68,
    "Title": "The Truth Revealed! Komatsuâs Will and the Identity of the Mysterious Creature!",
    "Type": "Manga Canon",
    "Airdate": "2012-08-12T07:00:00.000Z"
  },
  {
    "#": 69,
    "Title": "Surpass Dad! Midsummer Gobbling Katsu Curry!",
    "Type": "Filler",
    "Airdate": "2012-08-19T07:00:00.000Z"
  },
  {
    "#": 70,
    "Title": "Connecting Bonds! The Superb Gatsugatsu Curry!",
    "Type": "Filler",
    "Airdate": "2012-08-26T07:00:00.000Z"
  },
  {
    "#": 71,
    "Title": "A New Stage! Toriko's Determination and the Return of",
    "Type": "Manga Canon",
    "Airdate": "2012-09-02T07:00:00.000Z"
  },
  {
    "#": 72,
    "Title": "A Flowing Food Luck! The Pilgrimage Gourmet Shrine!",
    "Type": "Manga Canon",
    "Airdate": "2012-09-09T07:00:00.000Z"
  },
  {
    "#": 73,
    "Title": "Uwaaa! The Astonishing Surprise Apple!",
    "Type": "Manga Canon",
    "Airdate": "2012-09-16T07:00:00.000Z"
  },
  {
    "#": 74,
    "Title": "Chicken Beast's Egg! The Memories of Old Man Yocchi and His Wife!",
    "Type": "Manga Canon",
    "Airdate": "2012-09-23T07:00:00.000Z"
  },
  {
    "#": 75,
    "Title": "Glittering Crystal! Shining Gourami!",
    "Type": "Manga Canon",
    "Airdate": "2012-09-30T07:00:00.000Z"
  },
  {
    "#": 76,
    "Title": "Shocking Rapids! Giant Waterfall, Death Falls!",
    "Type": "Manga Canon",
    "Airdate": "2012-10-07T07:00:00.000Z"
  },
  {
    "#": 77,
    "Title": "Sunny`s New Attack! The Result of Gorgeous Training!",
    "Type": "Manga Canon",
    "Airdate": "2012-10-14T07:00:00.000Z"
  },
  {
    "#": 78,
    "Title": "Thirty Times Combo! Thirty-Six-Fold Twin Spiked Punch!",
    "Type": "Manga Canon",
    "Airdate": "2012-10-21T07:00:00.000Z"
  },
  {
    "#": 79,
    "Title": "Cooking by Intuition! Komatsu and the Shining Gourami!",
    "Type": "Manga Canon",
    "Airdate": "2012-10-28T07:00:00.000Z"
  },
  {
    "#": 80,
    "Title": "Flashy Presentation! Supreme Service With a Meal!",
    "Type": "Filler",
    "Airdate": "2012-11-04T07:00:00.000Z"
  },
  {
    "#": 81,
    "Title": "Supreme Chitose Ame! Komatsu and Yun's Tale!",
    "Type": "Filler",
    "Airdate": "2012-11-11T08:00:00.000Z"
  },
  {
    "#": 82,
    "Title": "Assemble on Autumn Mountain! Terry, Yun, Kiss, Queen!",
    "Type": "Filler",
    "Airdate": "2012-11-18T08:00:00.000Z"
  },
  {
    "#": 83,
    "Title": "Reunion! Take-chan of Fairytale Castle!",
    "Type": "Manga Canon",
    "Airdate": "2012-11-25T08:00:00.000Z"
  },
  {
    "#": 84,
    "Title": "Crossroads! A Chef's Destination!",
    "Type": "Manga Canon",
    "Airdate": "2012-12-02T08:00:00.000Z"
  },
  {
    "#": 85,
    "Title": "Dramatic Transformation! Hair Salon Barber Gourmet!",
    "Type": "Manga Canon",
    "Airdate": "2012-12-09T08:00:00.000Z"
  },
  {
    "#": 86,
    "Title": "Gathering of the Four Kings! A Midwinter Night's Miracle!",
    "Type": "Filler",
    "Airdate": "2012-12-16T08:00:00.000Z"
  },
  {
    "#": 87,
    "Title": "Merry Feastmas! Gourmet Santa's Present!",
    "Type": "Manga Canon",
    "Airdate": "2012-12-23T08:00:00.000Z"
  },
  {
    "#": 88,
    "Title": "Heaven or Hell!? Storming Into the Gourmet Casino!",
    "Type": "Manga Canon",
    "Airdate": "2013-01-06T08:00:00.000Z"
  },
  {
    "#": 89,
    "Title": "Appearance! The Boss of the Underground Cooking World, Livebearer!",
    "Type": "Manga Canon",
    "Airdate": "2013-01-13T08:00:00.000Z"
  },
  {
    "#": 90,
    "Title": "A Card Game With Your Life on the Line! Gourmet Tasting!",
    "Type": "Manga Canon",
    "Airdate": "2013-01-20T08:00:00.000Z"
  },
  {
    "#": 91,
    "Title": "Dead Heat! Coco vs. Livebearer",
    "Type": "Manga Canon",
    "Airdate": "2013-01-27T08:00:00.000Z"
  },
  {
    "#": 92,
    "Title": "Coco's Strategy! The Big-Miss Cards That Determine the Outcome!",
    "Type": "Manga Canon",
    "Airdate": "2013-02-03T08:00:00.000Z"
  },
  {
    "#": 93,
    "Title": "Eat or be Eaten! Toriko vs. the Hannya Panda!",
    "Type": "Manga Canon",
    "Airdate": "2013-02-10T08:00:00.000Z"
  },
  {
    "#": 94,
    "Title": "Climax! The Remaining Worst Ingredients!",
    "Type": "Manga Canon",
    "Airdate": "2013-02-17T08:00:00.000Z"
  },
  {
    "#": 95,
    "Title": "The Decisive Moment! Coco's Grand Scenario!",
    "Type": "Manga Canon",
    "Airdate": "2013-03-03T08:00:00.000Z"
  },
  {
    "#": 96,
    "Title": "A Taste that's Out of this World! The Actual Eating of the Meteor Garlic!",
    "Type": "Manga Canon",
    "Airdate": "2013-03-17T07:00:00.000Z"
  },
  {
    "#": 97,
    "Title": "Pinnacle Showdown! Ichiryuu vs. the Bishokukai's Midora!",
    "Type": "Manga Canon",
    "Airdate": "2013-03-24T07:00:00.000Z"
  },
  {
    "#": 98,
    "Title": "The Hidden Training Ingredient! Emergency Instructions from Ichiryuu!",
    "Type": "Manga Canon",
    "Airdate": "2013-03-31T07:00:00.000Z"
  },
  {
    "#": 99,
    "Title": "Run, Strongest Army! Toriko, Luffy, Goku!",
    "Type": "Filler",
    "Airdate": "2013-04-07T07:00:00.000Z"
  },
  {
    "#": 100,
    "Title": "Commemorating the Hundredth Episode, All Four Heavenly Kings Assemble!",
    "Type": "Manga Canon",
    "Airdate": "2013-04-14T07:00:00.000Z"
  },
  {
    "#": 101,
    "Title": "Toriko Fainting in Agony?! Capture the World's Smelliest Ingredient!",
    "Type": "Manga Canon",
    "Airdate": "2013-04-21T07:00:00.000Z"
  },
  {
    "#": 102,
    "Title": "Too Huge! With Pro Wrestling Moves, the Completion of the Ehou Maki",
    "Type": "Manga Canon",
    "Airdate": "2013-04-28T07:00:00.000Z"
  },
  {
    "#": 103,
    "Title": "Hands Together and Bow! Gourmet Human National Treasure Chin Chinchin Appears!",
    "Type": "Manga Canon",
    "Airdate": "2013-05-05T07:00:00.000Z"
  },
  {
    "#": 104,
    "Title": "Those Without Gratitude Should Not Enter! The Fearsome Shokurin Temple!",
    "Type": "Manga Canon",
    "Airdate": "2013-05-12T07:00:00.000Z"
  },
  {
    "#": 105,
    "Title": "Toriko, Completely Defeated?! The Delicate and Uninhibited Power of Food Honor!",
    "Type": "Manga Canon",
    "Airdate": "2013-05-19T07:00:00.000Z"
  },
  {
    "#": 106,
    "Title": "It's All About Appreciation! The Essentials of Food Honor!",
    "Type": "Manga Canon",
    "Airdate": "2013-05-26T07:00:00.000Z"
  },
  {
    "#": 107,
    "Title": "An Approaching Threat! Hurry, Toriko! The Road to the Bubble Fruits!",
    "Type": "Manga Canon",
    "Airdate": "2013-06-02T07:00:00.000Z"
  },
  {
    "#": 108,
    "Title": "Tradgedy! The Demise of Shokurin Temple... Farewell Komatsu!",
    "Type": "Manga Canon",
    "Airdate": "2013-06-09T07:00:00.000Z"
  },
  {
    "#": 109,
    "Title": "Mighty and Unrivaled! One Who Has Mastered Food Honor!",
    "Type": "Manga Canon",
    "Airdate": "2013-06-16T07:00:00.000Z"
  },
  {
    "#": 110,
    "Title": "National Treasure Class One-Swing 100 Million Yen Techniques! Toriko VS Granny Chiyo",
    "Type": "Manga Canon",
    "Airdate": "2013-06-23T07:00:00.000Z"
  },
  {
    "#": 111,
    "Title": "Phantom Ingredient",
    "Type": "Manga Canon",
    "Airdate": "2013-06-30T07:00:00.000Z"
  },
  {
    "#": 112,
    "Title": "The Legendary Bee",
    "Type": "Filler",
    "Airdate": "2013-07-07T07:00:00.000Z"
  },
  {
    "#": 113,
    "Title": "Showing his True Strength! Komatsu's Food Honor The Actual Food! The Phantasmal Noodles,",
    "Type": "Filler",
    "Airdate": "2013-07-14T07:00:00.000Z"
  },
  {
    "#": 114,
    "Title": "The Four Heavenly Kings Gather! The Gourmet World Beasts the",
    "Type": "Manga Canon",
    "Airdate": "2013-07-21T07:00:00.000Z"
  },
  {
    "#": 115,
    "Title": "The Battle to Determine the Fate of Mankind! The Four Beasts VS The Four Heavenly Kings!",
    "Type": "Manga Canon",
    "Airdate": "2013-07-28T07:00:00.000Z"
  },
  {
    "#": 116,
    "Title": "Toriko, Coco, Sunny, Zebra The Four Heavenly Kings' Storm of Attacks!!",
    "Type": "Manga Canon",
    "Airdate": "2013-08-11T07:00:00.000Z"
  },
  {
    "#": 117,
    "Title": "Toriko's New Crisis The Creeping Four Beast's Main Body!!",
    "Type": "Manga Canon",
    "Airdate": "2013-08-18T07:00:00.000Z"
  },
  {
    "#": 118,
    "Title": "The Four Beast's Shockng Union and the Green Rain!!",
    "Type": "Manga Canon",
    "Airdate": "2013-08-25T07:00:00.000Z"
  },
  {
    "#": 119,
    "Title": "The Four Heavenly Kings' Worst Dilemma! Komatsu's Determination!",
    "Type": "Manga Canon",
    "Airdate": "2013-09-01T07:00:00.000Z"
  },
  {
    "#": 120,
    "Title": "Save Mankind With Your Miraculous Food Luck!!",
    "Type": "Manga Canon",
    "Airdate": "2013-09-08T07:00:00.000Z"
  },
  {
    "#": 121,
    "Title": "Explode! Curiosity for Taste! The Four Heavenly Kings' Combination Technique!!",
    "Type": "Manga Canon",
    "Airdate": "2013-09-15T07:00:00.000Z"
  },
  {
    "#": 122,
    "Title": "Ultimate Technique",
    "Type": "Manga Canon",
    "Airdate": "2013-09-22T07:00:00.000Z"
  },
  {
    "#": 123,
    "Title": "The Forthcoming Festival The Wriggling",
    "Type": "Manga Canon",
    "Airdate": "2013-09-29T07:00:00.000Z"
  },
  {
    "#": 124,
    "Title": "Toriko VS Gurume-kai no Kaibutsu \"Monpuran",
    "Type": "Filler",
    "Airdate": "2013-10-06T07:00:00.000Z"
  },
  {
    "#": 125,
    "Title": "Toriko's New Technique",
    "Type": "Filler",
    "Airdate": "2013-10-13T07:00:00.000Z"
  },
  {
    "#": 126,
    "Title": "Great Imminent Troubles!? Cooking Fest Opens!!",
    "Type": "Manga Canon",
    "Airdate": "2013-10-20T07:00:00.000Z"
  },
  {
    "#": 127,
    "Title": "Komatsu in Trouble!? Triathlon Cooking!",
    "Type": "Manga Canon",
    "Airdate": "2013-10-27T07:00:00.000Z"
  },
  {
    "#": 128,
    "Title": "Cooking Legend, Meet Tengu Buranchi!!",
    "Type": "Manga Canon",
    "Airdate": "2013-11-03T07:00:00.000Z"
  },
  {
    "#": 129,
    "Title": "Sneaky! Stormy! Buranchi, Pulling Ahead!!",
    "Type": "Manga Canon",
    "Airdate": "2013-11-10T08:00:00.000Z"
  },
  {
    "#": 130,
    "Title": "Life or Death, Scale Death Cooking!!",
    "Type": "Filler",
    "Airdate": "2013-11-17T08:00:00.000Z"
  },
  {
    "#": 131,
    "Title": "Who is the Strongest Combo? Entire Island Cooking!!",
    "Type": "Filler",
    "Airdate": "2013-11-24T08:00:00.000Z"
  },
  {
    "#": 132,
    "Title": "Outbreak of War! Bishokukai's Furious All-out Attack!!",
    "Type": "Manga Canon",
    "Airdate": "2013-12-01T08:00:00.000Z"
  },
  {
    "#": 133,
    "Title": "Protect Komatsu! Toriko vs. Starjun!!",
    "Type": "Manga Canon",
    "Airdate": "2013-12-08T08:00:00.000Z"
  },
  {
    "#": 134,
    "Title": "Wild Battle! Toriko's Strongest Attack!!",
    "Type": "Manga Canon",
    "Airdate": "2013-12-15T08:00:00.000Z"
  },
  {
    "#": 135,
    "Title": "Top Showdown! IGO vs. Bishokukai",
    "Type": "Manga Canon",
    "Airdate": "2013-12-22T08:00:00.000Z"
  },
  {
    "#": 136,
    "Title": "A Catastrophic Joker Card! Gourmet World Monster Nitro",
    "Type": "Manga Canon",
    "Airdate": "2014-01-05T08:00:00.000Z"
  },
  {
    "#": 137,
    "Title": "Struggle to the Death! Coco vs. Grinpatch",
    "Type": "Manga Canon",
    "Airdate": "2014-01-12T08:00:00.000Z"
  },
  {
    "#": 138,
    "Title": "Duel! Sunny vs. Tommyrod",
    "Type": "Manga Canon",
    "Airdate": "2014-01-19T08:00:00.000Z"
  },
  {
    "#": 139,
    "Title": "The Moment of Truth! Sunny's Final Ability!!",
    "Type": "Manga Canon",
    "Airdate": "2014-01-26T08:00:00.000Z"
  },
  {
    "#": 140,
    "Title": "Counterattack! Zebra Gets Moving!!",
    "Type": "Manga Canon",
    "Airdate": "2014-02-02T08:00:00.000Z"
  },
  {
    "#": 141,
    "Title": "Toriko, Counterattack! Ultimate Routine!!",
    "Type": "Manga Canon",
    "Airdate": "2014-02-09T08:00:00.000Z"
  },
  {
    "#": 142,
    "Title": "History's Greatest Enemy!",
    "Type": "Manga Canon",
    "Airdate": "2014-02-16T08:00:00.000Z"
  },
  {
    "#": 143,
    "Title": "The Secret of the Mastermind",
    "Type": "Manga Canon",
    "Airdate": "2014-02-23T08:00:00.000Z"
  },
  {
    "#": 144,
    "Title": "The Beginning of the End! Toriko vs. Joa!!",
    "Type": "Manga Canon",
    "Airdate": "2014-03-02T08:00:00.000Z"
  },
  {
    "#": 145,
    "Title": "An Attack to Come Back from Hopelessness! The Four Heavenly Kings, the Ultimate Technique!!",
    "Type": "Manga Canon",
    "Airdate": "2014-03-16T07:00:00.000Z"
  },
  {
    "#": 146,
    "Title": "Reach him, Komatsu's Yells! Toriko Awakens!!",
    "Type": "Mixed Canon/Filler",
    "Airdate": "2014-03-23T07:00:00.000Z"
  },
  {
    "#": 147,
    "Title": "Toriko and Komatsu, Setting Out on a New Journey!!",
    "Type": "Filler",
    "Airdate": "2014-03-30T07:00:00.000Z"
  }
]

};

if (!window[GLOBAL_DATA_KEY]) {
    window[GLOBAL_DATA_KEY] = EPISODE_DATA_MAP;
}