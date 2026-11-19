/**
 * A Species data structure
 * @typedef {Object} Species
 * @property {string} name - Species name.
 * @property {Forme[]} formes - List of alternate Formes.
 */

/**
 * A Forme data structure
 * @typedef {Object} Forme
 * @property {string} name - Forme name.
 */

/**
 * A Pokemon data structure
 * @typedef {Object} Pokemon
 * @property {string} name - Species name.
 * @property {string} number - The National Dex number.
 */

/**
 * @constant - List of all Pokemon.
 * @type {Species[]}
 */
const SPECIES = [
  // Kanto
  {
    name: "Bulbasaur",
    natdex: 1,
  },
  {
    name: "Ivysaur",
    natdex: 2,
  },
  {
    name: "Venusaur",
    natdex: 3,
    formes: [
      {
        name: "Venusaur-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Charmander",
    natdex: 4,
  },
  {
    name: "Charmeleon",
    natdex: 5,
  },
  {
    name: "Charizard",
    natdex: 6,
    formes: [
      {
        name: "Charizard-Mega-X",
        index: 1,
      },
      {
        name: "Charizard-Mega-Y",
        index: 2,
      },
    ],
  },
  {
    name: "Squirtle",
    natdex: 7,
  },
  {
    name: "Wartortle",
    natdex: 8,
  },
  {
    name: "Blastoise",
    natdex: 9,
    formes: [
      {
        name: "Blastoise-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Caterpie",
    natdex: 10,
  },
  {
    name: "Metapod",
    natdex: 11,
  },
  {
    name: "Butterfree",
    natdex: 12,
  },
  {
    name: "Weedle",
    natdex: 13,
  },
  {
    name: "Kakuna",
    natdex: 14,
  },
  {
    name: "Beedrill",
    natdex: 15,
    formes: [
      {
        name: "Beedrill-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Pidgey",
    natdex: 16,
  },
  {
    name: "Pidgeotto",
    natdex: 17,
  },
  {
    name: "Pidgeot",
    natdex: 18,
    formes: [
      {
        name: "Pidgeot-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Rattata",
    natdex: 19,
    formes: [
      {
        name: "Rattata-Alola",
        index: 1,
      },
    ],
  },
  {
    name: "Raticate",
    natdex: 20,
    formes: [
      {
        name: "Raticate-Alola",
        index: 1,
      },
    ],
  },
  {
    name: "Spearow",
    natdex: 21,
  },
  {
    name: "Fearow",
    natdex: 22,
  },
  {
    name: "Ekans",
    natdex: 23,
  },
  {
    name: "Arbok",
    natdex: 24,
  },
  {
    name: "Pikachu",
    natdex: 25,
  },
  {
    name: "Raichu",
    natdex: 26,
    formes: [
      {
        name: "Raichu-Alola",
        index: 1,
      },
      {
        name: "Raichu-Mega-X",
        index: 1,
      },
      {
        name: "Raichu-Mega-Y",
        index: 1,
      },
    ],
  },
  {
    name: "Sandshrew",
    natdex: 27,
    formes: [
      {
        name: "Sandshrew-Alola",
        index: 1,
      },
    ],
  },
  {
    name: "Sandslash",
    natdex: 28,
    formes: [
      {
        name: "Sandslash-Alola",
        index: 1,
      },
    ],
  },
  {
    name: "Nidoran-F",
    natdex: 29,
  },
  {
    name: "Nidorina",
    natdex: 30,
  },
  {
    name: "Nidoqueen",
    natdex: 31,
  },
  {
    name: "Nidoran-M",
    natdex: 32,
  },
  {
    name: "Nidorino",
    natdex: 33,
  },
  {
    name: "Nidoking",
    natdex: 34,
  },
  {
    name: "Clefairy",
    natdex: 35,
  },
  {
    name: "Clefable",
    natdex: 36,
    formes: [
      {
        name: "Clefable-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Vulpix",
    natdex: 37,
    formes: [
      {
        name: "Vulpix-Alola",
        index: 1,
      },
    ],
  },
  {
    name: "Ninetales",
    natdex: 38,
    formes: [
      {
        name: "Ninetales-Alola",
        index: 1,
      },
    ],
  },
  {
    name: "Jigglypuff",
    natdex: 39,
  },
  {
    name: "Wigglytuff",
    natdex: 40,
  },
  {
    name: "Zubat",
    natdex: 41,
  },
  {
    name: "Golbat",
    natdex: 42,
  },
  {
    name: "Oddish",
    natdex: 43,
  },
  {
    name: "Gloom",
    natdex: 44,
  },
  {
    name: "Vileplume",
    natdex: 45,
  },
  {
    name: "Paras",
    natdex: 46,
  },
  {
    name: "Parasect",
    natdex: 47,
  },
  {
    name: "Venonat",
    natdex: 48,
  },
  {
    name: "Venomoth",
    natdex: 49,
  },
  {
    name: "Diglett",
    natdex: 50,
    formes: [
      {
        name: "Diglett-Alola",
        index: 1,
      },
    ],
  },
  {
    name: "Dugtrio",
    natdex: 51,
    formes: [
      {
        name: "Dugtrio-Alola",
        index: 1,
      },
    ],
  },
  {
    name: "Meowth",
    natdex: 52,
    formes: [
      {
        name: "Meowth-Alola",
        index: 1,
      },
      {
        name: "Meowth-Galar",
        index: 2,
      },
    ],
  },
  {
    name: "Persian",
    natdex: 53,
    formes: [
      {
        name: "Persian-Alola",
        index: 1,
      },
    ],
  },
  {
    name: "Psyduck",
    natdex: 54,
  },
  {
    name: "Golduck",
    natdex: 55,
  },
  {
    name: "Mankey",
    natdex: 56,
  },
  {
    name: "Primeape",
    natdex: 57,
  },
  {
    name: "Growlithe",
    natdex: 58,
    formes: [
      {
        name: "Growlithe-Hisui",
        index: 1,
      },
    ],
  },
  {
    name: "Arcanine",
    natdex: 59,
    formes: [
      {
        name: "Arcanine-Hisui",
        index: 1,
      },
    ],
  },
  {
    name: "Poliwag",
    natdex: 60,
  },
  {
    name: "Poliwhirl",
    natdex: 61,
  },
  {
    name: "Poliwrath",
    natdex: 62,
  },
  {
    name: "Abra",
    natdex: 63,
  },
  {
    name: "Kadabra",
    natdex: 64,
  },
  {
    name: "Alakazam",
    natdex: 65,
    formes: [
      {
        name: "Alakazam-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Machop",
    natdex: 66,
  },
  {
    name: "Machoke",
    natdex: 67,
  },
  {
    name: "Machamp",
    natdex: 68,
  },
  {
    name: "Bellsprout",
    natdex: 69,
  },
  {
    name: "Weepinbell",
    natdex: 70,
  },
  {
    name: "Victreebel",
    natdex: 71,
    formes: [
      {
        name: "Victreebel-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Tentacool",
    natdex: 72,
  },
  {
    name: "Tentacruel",
    natdex: 73,
  },
  {
    name: "Geodude",
    natdex: 74,
    formes: [
      {
        name: "Geodude-Alola",
        index: 1,
      },
    ],
  },
  {
    name: "Graveler",
    natdex: 75,
    formes: [
      {
        name: "Graveler-Alola",
        index: 1,
      },
    ],
  },
  {
    name: "Golem",
    natdex: 76,
    formes: [
      {
        name: "Golem-Alola",
        index: 1,
      },
    ],
  },
  {
    name: "Ponyta",
    natdex: 77,
    formes: [
      {
        name: "Ponyta-Galar",
        index: 1,
      },
    ],
  },
  {
    name: "Rapidash",
    natdex: 78,
    formes: [
      {
        name: "Rapidash-Galar",
        index: 1,
      },
    ],
  },
  {
    name: "Slowpoke",
    natdex: 79,
    formes: [
      {
        name: "Slowpoke-Galar",
        index: 1,
      },
    ],
  },
  {
    name: "Slowbro",
    natdex: 80,
    formes: [
      {
        name: "Slowbro-Galar",
        index: 1,
      },
    ],
  },
  {
    name: "Magnemite",
    natdex: 81,
  },
  {
    name: "Magneton",
    natdex: 82,
  },
  {
    name: "Farfetch'd",
    natdex: 83,
    formes: [
      {
        name: "Farfetch'd-Galar",
        index: 1,
      },
    ],
  },
  {
    name: "Doduo",
    natdex: 84,
  },
  {
    name: "Dodrio",
    natdex: 85,
  },
  {
    name: "Seel",
    natdex: 86,
  },
  {
    name: "Dewgong",
    natdex: 87,
  },
  {
    name: "Grimer",
    natdex: 88,
    formes: [
      {
        name: "Grimer-Alola",
        index: 1,
      },
    ],
  },
  {
    name: "Muk",
    natdex: 89,
    formes: [
      {
        name: "Muk-Alola",
        index: 1,
      },
    ],
  },
  {
    name: "Shellder",
    natdex: 90,
  },
  {
    name: "Cloyster",
    natdex: 91,
  },
  {
    name: "Gastly",
    natdex: 92,
  },
  {
    name: "Haunter",
    natdex: 93,
  },
  {
    name: "Gengar",
    natdex: 94,
  },
  {
    name: "Onix",
    natdex: 95,
  },
  {
    name: "Drowzee",
    natdex: 96,
  },
  {
    name: "Hypno",
    natdex: 97,
  },
  {
    name: "Krabby",
    natdex: 98,
  },
  {
    name: "Kingler",
    natdex: 99,
  },
  {
    name: "Voltorb",
    natdex: 100,
    formes: [
      {
        name: "Voltorb-Hisui",
        index: 1,
      },
    ],
  },
  {
    name: "Electrode",
    natdex: 101,
    formes: [
      {
        name: "Electrode-Hisui",
        index: 1,
      },
    ],
  },
  {
    name: "Exeggcute",
    natdex: 102,
  },
  {
    name: "Exeggutor",
    natdex: 103,
    formes: [
      {
        name: "Exeggutor-Alola",
        index: 1,
      },
    ],
  },
  {
    name: "Cubone",
    natdex: 104,
  },
  {
    name: "Marowak",
    natdex: 105,
    formes: [
      {
        name: "Marowak-Alola",
        index: 1,
      },
    ],
  },
  {
    name: "Hitmonlee",
    natdex: 106,
  },
  {
    name: "Hitmonchan",
    natdex: 107,
  },
  {
    name: "Lickitung",
    natdex: 108,
  },
  {
    name: "Koffing",
    natdex: 109,
  },
  {
    name: "Weezing",
    natdex: 110,
    formes: [
      {
        name: "Weezing-Galar",
        index: 1,
      },
    ],
  },
  {
    name: "Rhyhorn",
    natdex: 111,
  },
  {
    name: "Rhydon",
    natdex: 112,
  },
  {
    name: "Chansey",
    natdex: 113,
  },
  {
    name: "Tangela",
    natdex: 114,
  },
  {
    name: "Kangaskhan",
    natdex: 115,
    formes: [
      {
        name: "Kangaskhan-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Horsea",
    natdex: 116,
  },
  {
    name: "Seadra",
    natdex: 117,
  },
  {
    name: "Goldeen",
    natdex: 118,
  },
  {
    name: "Seaking",
    natdex: 119,
  },
  {
    name: "Staryu",
    natdex: 120,
  },
  {
    name: "Starmie",
    natdex: 121,
    formes: [
      {
        name: "Starmie-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Mr. Mime",
    natdex: 122,
    formes: [
      {
        name: "Mr. Mime-Galar",
        index: 1,
      },
    ],
  },
  {
    name: "Scyther",
    natdex: 123,
  },
  {
    name: "Jynx",
    natdex: 124,
  },
  {
    name: "Electabuzz",
    natdex: 125,
  },
  {
    name: "Magmar",
    natdex: 126,
  },
  {
    name: "Pinsir",
    natdex: 127,
    formes: [
      {
        name: "Pinsir-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Tauros",
    natdex: 128,
    formes: [
      {
        name: "Tauros-Paldea-Combat",
        index: 1,
      },
      {
        name: "Tauros-Paldea-Blaze",
        index: 2,
      },
      {
        name: "Tauros-Paldea-Aqua",
        index: 3,
      },
    ],
  },
  {
    name: "Magikarp",
    natdex: 129,
  },
  {
    name: "Gyarados",
    natdex: 130,
    formes: [
      {
        name: "Gyarados-Mega",
      },
    ],
  },
  {
    name: "Lapras",
    natdex: 131,
  },
  {
    name: "Ditto",
    natdex: 132,
  },
  {
    name: "Eevee",
    natdex: 133,
  },
  {
    name: "Vaporeon",
    natdex: 134,
  },
  {
    name: "Jolteon",
    natdex: 135,
  },
  {
    name: "Flareon",
    natdex: 136,
  },
  {
    name: "Porygon",
    natdex: 137,
  },
  {
    name: "Omanyte",
    natdex: 138,
  },
  {
    name: "Omastar",
    natdex: 139,
  },
  {
    name: "Kabuto",
    natdex: 140,
  },
  {
    name: "Kabutops",
    natdex: 141,
  },
  {
    name: "Aerodactyl",
    natdex: 142,
    formes: [
      {
        name: "Aerodactyl-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Snorlax",
    natdex: 143,
  },
  {
    name: "Articuno",
    natdex: 144,
    formes: [
      {
        name: "Articuno-Galar",
        index: 1,
      },
    ],
  },
  {
    name: "Zapdos",
    natdex: 145,
    formes: [
      {
        name: "Zapdos-Galar",
        index: 1,
      },
    ],
  },
  {
    name: "Moltres",
    natdex: 146,
    formes: [
      {
        name: "Moltres-Galar",
        index: 1,
      },
    ],
  },
  {
    name: "Dratini",
    natdex: 147,
  },
  {
    name: "Dragonair",
    natdex: 148,
  },
  {
    name: "Dragonite",
    natdex: 149,
    formes: [
      {
        name: "Dragonite-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Mewtwo",
    natdex: 150,
    formes: [
      {
        name: "Mewtwo-Mega-X",
        index: 1,
      },
      {
        name: "Mewtwo-Mega-Y",
        index: 1,
      },
    ],
    restricted: true
  },
  {
    name: "Mew",
    natdex: 151,
    mythical: true
  },
  // Johto
  {
    name: "Chikorita",
  },
  {
    name: "Bayleef",
  },
  {
    name: "Meganium",
    natdex: 154,
    formes: [
      {
        name: "Meganium-Mega",
        index: 1,
      },
    ],
  },

  {
    name: "Cyndaquil",
  },
  {
    name: "Quilava",
  },
  {
    name: "Typhlosion",
    formes: [
      {
        name: "Typhlosion-Hisui",
      },
    ],
  },
  {
    name: "Totodile",
  },
  {
    name: "Croconaw",
  },
  {
    name: "Feraligatr",
    natdex: 160,
    formes: [
      {
        name: "Feraligatr-Mega",
        index: 1,
      },
    ],
  },

  {
    name: "Sentret",
  },
  {
    name: "Furret",
  },
  {
    name: "Hoothoot",
  },
  {
    name: "Noctowl",
  },
  {
    name: "Ledyba",
  },
  {
    name: "Ledian",
  },
  {
    name: "Spinarak",
  },
  {
    name: "Ariados",
  },
  {
    name: "Crobat",
  },
  {
    name: "Chinchou",
  },
  {
    name: "Lanturn",
  },
  {
    name: "Pichu",
  },
  {
    name: "Cleffa",
  },
  {
    name: "Igglybuff",
  },
  {
    name: "Togepi",
  },
  {
    name: "Togetic",
  },
  {
    name: "Natu",
  },
  {
    name: "Xatu",
  },
  {
    name: "Mareep",
  },
  {
    name: "Flaaffy",
  },
  {
    name: "Ampharos",
    formes: [
      {
        name: "Ampharos-Mega",
      },
    ],
  },
  {
    name: "Bellossom",
  },
  {
    name: "Marill",
  },
  {
    name: "Azumarill",
  },
  {
    name: "Sudowoodo",
  },
  {
    name: "Politoed",
  },
  {
    name: "Hoppip",
  },
  {
    name: "Skiploom",
  },
  {
    name: "Jumpluff",
  },
  {
    name: "Aipom",
  },
  {
    name: "Sunkern",
  },
  {
    name: "Sunflora",
  },
  {
    name: "Yanma",
  },
  {
    name: "Wooper",
    formes: [
      {
        name: "Wooper-Paldea",
      },
    ],
  },
  {
    name: "Quagsire",
  },
  {
    name: "Espeon",
  },
  {
    name: "Umbreon",
  },
  {
    name: "Murkrow",
  },
  {
    name: "Slowking",
    formes: [
      {
        name: "Slowking-Galar",
      },
    ],
  },
  {
    name: "Misdreavus",
  },
  {
    name: "Unown",
  },
  {
    name: "Wobbuffet",
  },
  {
    name: "Girafarig",
  },
  {
    name: "Pineco",
  },
  {
    name: "Forretress",
  },
  {
    name: "Dunsparce",
  },
  {
    name: "Gligar",
  },
  {
    name: "Steelix",
    formes: [
      {
        name: "Steelix-Mega",
      },
    ],
  },
  {
    name: "Snubbull",
  },
  {
    name: "Granbull",
  },
  {
    name: "Qwilfish",
    formes: [
      {
        name: "Qwilfish-Hisui",
      },
    ],
  },
  {
    name: "Scizor",
  },
  {
    name: "Shuckle",
  },
  {
    name: "Heracross",
    formes: [
      {
        name: "Heracross-Mega",
      },
    ],
  },
  {
    name: "Sneasel",
    formes: [
      {
        name: "Sneasel-Hisui",
      },
    ],
  },
  {
    name: "Teddiursa",
  },
  {
    name: "Ursaring",
  },
  {
    name: "Slugma",
  },
  {
    name: "Magcargo",
  },
  {
    name: "Swinub",
  },
  {
    name: "Piloswine",
  },
  {
    name: "Corsola",
    formes: [
      {
        name: "Corsola-Galar",
      },
    ],
  },
  {
    name: "Remoraid",
  },
  {
    name: "Octillery",
  },
  {
    name: "Delibird",
  },
  {
    name: "Mantine",
  },
  {
    name: "Skarmory",
    natdex: 227,
    formes: [
      {
        name: "Skarmory-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Houndour",
  },
  {
    name: "Houndoom",
  },
  {
    name: "Kingdra",
  },
  {
    name: "Phanpy",
  },
  {
    name: "Donphan",
  },
  {
    name: "Porygon2",
  },
  {
    name: "Stantler",
  },
  {
    name: "Smeargle",
  },
  {
    name: "Tyrogue",
  },
  {
    name: "Hitmontop",
  },
  {
    name: "Smoochum",
  },
  {
    name: "Elekid",
  },
  {
    name: "Magby",
  },
  {
    name: "Miltank",
  },
  {
    name: "Blissey",
  },
  {
    name: "Raikou",
  },
  {
    name: "Entei",
  },
  {
    name: "Suicune",
  },
  {
    name: "Larvitar",
  },
  {
    name: "Pupitar",
  },
  {
    name: "Tyranitar",
    formes: [
      {
        name: "Tyranitar-Mega",
      },
    ],
  },
  {
    name: "Lugia",
    restricted: true
  },
  {
    name: "Ho-oh",
    restricted: true
  },
  {
    name: "Celebi",
    mythical: true
  },
  // Hoenn
  {
    name: "Treecko",
  },
  {
    name: "Grovyle",
  },
  {
    name: "Sceptile",
    formes: [
      {
        name: "Sceptile-Mega",
      },
    ],
  },
  {
    name: "Torchic",
  },
  {
    name: "Combusken",
  },
  {
    name: "Blaziken",
    formes: [
      {
        name: "Blaziken-Mega",
      },
    ],
  },
  {
    name: "Mudkip",
  },
  {
    name: "Marshtomp",
  },
  {
    name: "Swampert",
    formes: [
      {
        name: "Swampert-Mega",
      },
    ],
  },
  {
    name: "Poochyena",
  },
  {
    name: "Mightyena",
  },
  {
    name: "Zigzagoon",
    formes: [
      {
        name: "Zigzagoon-Galar",
      },
    ],
  },
  {
    name: "Linoone",
    formes: [
      {
        name: "Linoone-Galar",
      },
    ],
  },
  {
    name: "Wurmple",
  },
  {
    name: "Silcoon",
  },
  {
    name: "Beautifly",
  },
  {
    name: "Cascoon",
  },
  {
    name: "Dustox",
  },
  {
    name: "Lotad",
  },
  {
    name: "Lombre",
  },
  {
    name: "Ludicolo",
  },
  {
    name: "Seedot",
  },
  {
    name: "Nuzleaf",
  },
  {
    name: "Shiftry",
  },
  {
    name: "Taillow",
  },
  {
    name: "Swellow",
  },
  {
    name: "Wingull",
  },
  {
    name: "Pelipper",
  },
  {
    name: "Ralts",
  },
  {
    name: "Kirlia",
  },
  {
    name: "Gardevoir",
    formes: [
      {
        name: "Gardevoir-Mega",
      },
    ],
  },
  {
    name: "Surskit",
  },
  {
    name: "Masquerain",
  },
  {
    name: "Shroomish",
  },
  {
    name: "Breloom",
  },
  {
    name: "Slakoth",
  },
  {
    name: "Vigoroth",
  },
  {
    name: "Slaking",
  },
  {
    name: "Nincada",
  },
  {
    name: "Ninjask",
  },
  {
    name: "Shedinja",
  },
  {
    name: "Whismur",
  },
  {
    name: "Loudred",
  },
  {
    name: "Exploud",
  },
  {
    name: "Makuhita",
  },
  {
    name: "Hariyama",
  },
  {
    name: "Azurill",
  },
  {
    name: "Nosepass",
  },
  {
    name: "Skitty",
  },
  {
    name: "Delcatty",
  },
  {
    name: "Sableye",
    formes: [
      {
        name: "Sableye-Mega",
      },
    ],
  },
  {
    name: "Mawile",
    formes: [
      {
        name: "Mawile-Mega",
      },
    ],
  },
  {
    name: "Aron",
  },
  {
    name: "Lairon",
  },
  {
    name: "Aggron",
    formes: [
      {
        name: "Aggron-Mega",
      },
    ],
  },
  {
    name: "Meditite",
  },
  {
    name: "Medicham",
    formes: [
      {
        name: "Medicham-Mega",
      },
    ],
  },
  {
    name: "Electrike",
  },
  {
    name: "Manectric",
    formes: [
      {
        name: "Manectric-Mega",
      },
    ],
  },
  {
    name: "Plusle",
  },
  {
    name: "Minun",
  },
  {
    name: "Volbeat",
  },
  {
    name: "Illumise",
  },
  {
    name: "Roselia",
  },
  {
    name: "Gulpin",
  },
  {
    name: "Swalot",
  },
  {
    name: "Carvanha",
  },
  {
    name: "Sharpedo",
    formes: [
      {
        name: "Sharpedo-Mega",
      },
    ],
  },
  {
    name: "Wailmer",
  },
  {
    name: "Wailord",
  },
  {
    name: "Numel",
  },
  {
    name: "Camerupt",
    formes: [
      {
        name: "Camerupt-Mega",
      },
    ],
  },
  {
    name: "Torkoal",
  },
  {
    name: "Spoink",
  },
  {
    name: "Grumpig",
  },
  {
    name: "Spinda",
  },
  {
    name: "Trapinch",
  },
  {
    name: "Vibrava",
  },
  {
    name: "Flygon",
  },
  {
    name: "Cacnea",
  },
  {
    name: "Cacturne",
  },
  {
    name: "Swablu",
  },
  {
    name: "Altaria",
    formes: [
      {
        name: "Altaria-Mega",
      },
    ],
  },
  {
    name: "Zangoose",
  },
  {
    name: "Seviper",
  },
  {
    name: "Lunatone",
  },
  {
    name: "Solrock",
  },
  {
    name: "Barboach",
  },
  {
    name: "Whiscash",
  },
  {
    name: "Corphish",
  },
  {
    name: "Crawdaunt",
  },
  {
    name: "Baltoy",
  },
  {
    name: "Claydol",
  },
  {
    name: "Lileep",
  },
  {
    name: "Cradily",
  },
  {
    name: "Anorith",
  },
  {
    name: "Armaldo",
  },
  {
    name: "Feebas",
  },
  {
    name: "Milotic",
  },
  {
    name: "Castform",
    formes: [
      {
        name: "Castform-Sunny",
      },
      {
        name: "Castform-Rainy",
      },
      {
        name: "Castform-Snowy",
      },
    ],
  },
  {
    name: "Kecleon",
  },
  {
    name: "Shuppet",
  },
  {
    name: "Banette",
    formes: [
      {
        name: "Banette-Mega",
      },
    ],
  },
  {
    name: "Duskull",
  },
  {
    name: "Dusclops",
  },
  {
    name: "Tropius",
  },
  {
    name: "Chimecho",
    natdex: 358,
    formes: [
      {
        name: "Chimeco-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Absol",
    formes: [
      {
        name: "Absol-Mega",
        index: 1,
      },
      {
        name: "Absol-Mega-Z",
        index: 2,
      },
    ],
  },
  {
    name: "Wynaut",
  },
  {
    name: "Snorunt",
  },
  {
    name: "Glalie",
    formes: [
      {
        name: "Glalie-Mega",
      },
    ],
  },
  {
    name: "Spheal",
  },
  {
    name: "Sealeo",
  },
  {
    name: "Walrein",
  },
  {
    name: "Clamperl",
  },
  {
    name: "Huntail",
  },
  {
    name: "Gorebyss",
  },
  {
    name: "Relicanth",
  },
  {
    name: "Luvdisc",
  },
  {
    name: "Bagon",
  },
  {
    name: "Shelgon",
  },
  {
    name: "Salamence",
    formes: [
      {
        name: "Salamence-Mega",
      },
    ],
  },
  {
    name: "Beldum",
  },
  {
    name: "Metang",
  },
  {
    name: "Metagross",
    formes: [
      {
        name: "Metagross-Mega",
      },
    ],
  },
  {
    name: "Regirock",
  },
  {
    name: "Regice",
  },
  {
    name: "Registeel",
  },
  {
    name: "Latias",
    formes: [
      {
        name: "Latias-Mega",
      },
    ],
  },
  {
    name: "Latios",
    formes: [
      {
        name: "Latios-Mega",
      },
    ],
  },
  {
    name: "Kyogre",
    formes: [
      {
        name: "Kyogre-Primal",
      },
    ],
    restricted: true
  },
  {
    name: "Groudon",
    formes: [
      {
        name: "Groudon-Primal",
      },
    ],
    restricted: true
  },
  {
    name: "Rayquaza",
    formes: [
      {
        name: "Rayquaza-Mega",
      },
    ],
    restricted: true
  },
  {
    name: "Jirachi",
    mythical: true
  },
  {
    name: "Deoxys",
    formes: [
      {
        name: "Deoxys-Attack",
      },
      {
        name: "Deoxys-Defense",
      },
      {
        name: "Deoxys-Speed",
      },
    ],
    mythical: true
  },
  // Sinnoh
  {
    name: "Turtwig",
  },
  {
    name: "Grotle",
  },
  {
    name: "Torterra",
  },
  {
    name: "Chimchar",
  },
  {
    name: "Monferno",
  },
  {
    name: "Infernape",
  },
  {
    name: "Piplup",
  },
  {
    name: "Prinplup",
  },
  {
    name: "Empoleon",
  },
  {
    name: "Starly",
  },
  {
    name: "Staravia",
  },
  {
    name: "Staraptor",
    natdex: 398,
    formes: [
      {
        name: "Staraptor-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Bidoof",
  },
  {
    name: "Bibarel",
  },
  {
    name: "Kricketot",
  },
  {
    name: "Kricketune",
  },
  {
    name: "Shinx",
  },
  {
    name: "Luxio",
  },
  {
    name: "Luxray",
  },
  {
    name: "Budew",
  },
  {
    name: "Roserade",
  },
  {
    name: "Cranidos",
  },
  {
    name: "Rampardos",
  },
  {
    name: "Shieldon",
  },
  {
    name: "Bastiodon",
  },
  {
    name: "Burmy",
    formes: [
      {
        name: "Burmy-Sand",
        index: 1,
      },
      {
        name: "Burmy-Trash",
        index: 2,
      },
    ],
  },
  {
    name: "Wormadam",
    formes: [
      {
        name: "Wormadam-Sandy",
      },
      {
        name: "Wormadam-Trash",
      },
    ],
  },
  {
    name: "Mothim",
  },
  {
    name: "Combee",
  },
  {
    name: "Vespiquen",
  },
  {
    name: "Pachirisu",
  },
  {
    name: "Buizel",
  },
  {
    name: "Floatzel",
  },
  {
    name: "Cherubi",
  },
  {
    name: "Cherrim",
    formes: [
      {
        name: "Cherrim-Sunshine",
        index: 1,
      },
    ],
  },
  {
    name: "Shellos (West Sea)",
    formes: [
      {
        name: "Shellos-East",
      },
    ],
  },
  {
    name: "Gastrodon (West Sea)",
    formes: [
      {
        name: "Gastrodon-East",
      },
    ],
  },
  {
    name: "Ambipom",
  },
  {
    name: "Drifloon",
  },
  {
    name: "Drifblim",
  },
  {
    name: "Buneary",
  },
  {
    name: "Lopunny",
    formes: [
      {
        name: "Lopunny-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Mismagius",
  },
  {
    name: "Honchkrow",
  },
  {
    name: "Glameow",
  },
  {
    name: "Purugly",
  },
  {
    name: "Chingling",
  },
  {
    name: "Stunky",
  },
  {
    name: "Skuntank",
  },
  {
    name: "Bronzor",
  },
  {
    name: "Bronzong",
  },
  {
    name: "Bonsly",
  },
  {
    name: "Mime Jr.",
  },
  {
    name: "Happiny",
  },
  {
    name: "Chatot",
  },
  {
    name: "Spiritomb",
  },
  {
    name: "Gible",
  },
  {
    name: "Gabite",
  },
  {
    name: "Garchomp",
    formes: [
      {
        name: "Garchomp-Mega",
        index: 1,
      },
      {
        name: "Garchomp-Mega-Z",
        index: 2,
      },
    ],
  },
  {
    name: "Munchlax",
  },
  {
    name: "Riolu",
  },
  {
    name: "Lucario",
    formes: [
      {
        name: "Lucario-Mega",
        index: 1,
      },
      {
        name: "Lucario-Mega-Z",
        index: 2,
      },
    ],
  },
  {
    name: "Hippopotas",
  },
  {
    name: "Hippowdon",
  },
  {
    name: "Skorupi",
  },
  {
    name: "Drapion",
  },
  {
    name: "Croagunk",
  },
  {
    name: "Toxicroak",
  },
  {
    name: "Carnivine",
  },
  {
    name: "Finneon",
  },
  {
    name: "Lumineon",
  },
  {
    name: "Mantyke",
  },
  {
    name: "Snover",
  },
  {
    name: "Abomasnow",
    formes: [
      {
        name: "Abomasnow-Mega",
      },
    ],
  },
  {
    name: "Weavile",
  },
  {
    name: "Magnezone",
  },
  {
    name: "Lickilicky",
  },
  {
    name: "Rhyperior",
  },
  {
    name: "Tangrowth",
  },
  {
    name: "Electivire",
  },
  {
    name: "Magmortar",
  },
  {
    name: "Togekiss",
  },
  {
    name: "Yanmega",
  },
  {
    name: "Leafeon",
  },
  {
    name: "Glaceon",
  },
  {
    name: "Gliscor",
  },
  {
    name: "Mamoswine",
  },
  {
    name: "Porygon-Z",
  },
  {
    name: "Gallade",
  },
  {
    name: "Probopass",
  },
  {
    name: "Dusknoir",
  },
  {
    name: "Froslass",
    formes: [
      {
        name: "Froslass-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Rotom",
    formes: [
      {
        name: "Rotom-Heat",
        index: 1,
      },
      {
        name: "Rotom-Wash",
        index: 2,
      },
      {
        name: "Rotom-Frost",
        index: 3,
      },
      {
        name: "Rotom-Fan",
        index: 4,
      },
      {
        name: "Rotom-Mow",
        index: 5,
      },
    ],
  },
  {
    name: "Uxie",
  },
  {
    name: "Mesprit",
  },
  {
    name: "Azelf",
  },
  {
    name: "Dialga",
    formes: [
      {
        name: "Dialga-Origin",
      },
    ],
    restricted: true
  },
  {
    name: "Palkia",
    formes: [
      {
        name: "Palkia-Origin",
      },
    ],
    restricted: true
  },
  {
    name: "Heatran",
    natdex: 485,
    formes: [
      {
        name: "Heatran-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Regigigas",
  },
  {
    name: "Giratina",
    formes: [
      {
        name: "Giratina-Origin",
      },
    ],
    restricted: true
  },
  {
    name: "Cresselia",
  },
  {
    name: "Phione",
    mythical: true
  },
  {
    name: "Manaphy",
    mythical: true
  },
  {
    name: "Darkrai",
    natdex: 491,
    formes: [
      {
        name: "Darkrai-Mega",
        index: 1,
      },
    ],
    mythical: true
  },
  {
    name: "Shaymin",
    formes: [
      {
        name: "Shaymin-Sky",
      },
    ],
    mythical: true
  },
  {
    name: "Arceus",
    mythical: true
  },
  // Unova
  {
    name: "Victini",
    mythical: true
  },
  {
    name: "Snivy",
  },
  {
    name: "Servine",
  },
  {
    name: "Serperior",
  },
  {
    name: "Tepig",
  },
  {
    name: "Pignite",
  },
  {
    name: "Emboar",
    formes: [
      {
        name: "Emboar-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Oshawott",
  },
  {
    name: "Dewott",
  },
  {
    name: "Samurott",
    formes: [
      {
        name: "Samurott-Hisui",
      },
    ],
  },
  {
    name: "Patrat",
  },
  {
    name: "Watchog",
  },
  {
    name: "Lillipup",
  },
  {
    name: "Herdier",
  },
  {
    name: "Stoutland",
  },
  {
    name: "Purrloin",
  },
  {
    name: "Liepard",
  },
  {
    name: "Pansage",
  },
  {
    name: "Simisage",
  },
  {
    name: "Pansear",
  },
  {
    name: "Simisear",
  },
  {
    name: "Panpour",
  },
  {
    name: "Simipour",
  },
  {
    name: "Munna",
  },
  {
    name: "Musharna",
  },
  {
    name: "Pidove",
  },
  {
    name: "Tranquill",
  },
  {
    name: "Unfezant",
  },
  {
    name: "Blitzle",
  },
  {
    name: "Zebstrika",
  },
  {
    name: "Roggenrola",
  },
  {
    name: "Boldore",
  },
  {
    name: "Gigalith",
  },
  {
    name: "Woobat",
  },
  {
    name: "Swoobat",
  },
  {
    name: "Drilbur",
  },
  {
    name: "Excadrill",
    natdex: 530,
    formes: [
      {
        name: "Excadrill-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Audino",
  },
  {
    name: "Timburr",
  },
  {
    name: "Gurdurr",
  },
  {
    name: "Conkeldurr",
  },
  {
    name: "Tympole",
  },
  {
    name: "Palpitoad",
  },
  {
    name: "Seismitoad",
  },
  {
    name: "Throh",
  },
  {
    name: "Sawk",
  },
  {
    name: "Sewaddle",
  },
  {
    name: "Swadloon",
  },
  {
    name: "Leavanny",
  },
  {
    name: "Venipede",
  },
  {
    name: "Whirlipede",
  },
  {
    name: "Scolipede",
    natdex: 545,
    formes: [
      {
        name: "Scolipede-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Cottonee",
  },
  {
    name: "Whimsicott",
  },
  {
    name: "Petlil",
  },
  {
    name: "Lilligant",
    formes: [
      {
        name: "Lilligant-Hisui",
      },
    ],
  },
  {
    name: "Basculin",
    formes: [
      {
        name: "Basculin-Blue-Striped",
      },
      {
        name: "Basculin-White-Striped",
      },
    ],
  },
  {
    name: "Sandile",
  },
  {
    name: "Krokorok",
  },
  {
    name: "Krookodile",
  },
  {
    name: "Darumaka",
    formes: [
      {
        name: "Darumaka-Galar",
      },
    ],
  },
  {
    name: "Darmanitan",
    formes: [
      {
        name: "Darmanitan-Zen",
      },
      {
        name: "Darmanitan-Galar",
      },
      {
        name: "Darmanitan-Galar-Zen",
      },
    ],
  },
  {
    name: "Maractus",
  },
  {
    name: "Dwebble",
  },
  {
    name: "Crustle",
  },
  {
    name: "Scraggy",
  },
  {
    name: "Scrafty",
    natdex: 560,
    formes: [
      {
        name: "Scrafty-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Sigilyph",
  },
  {
    name: "Yamask",
    formes: [
      {
        name: "Yamask-Galar",
      },
    ],
  },
  {
    name: "Cofagrigus",
  },
  {
    name: "Tirtouga",
  },
  {
    name: "Carracosta",
  },
  {
    name: "Archen",
  },
  {
    name: "Archeops",
  },
  {
    name: "Trubbish",
  },
  {
    name: "Garbodor",
  },
  {
    name: "Zorua",
    formes: [
      {
        name: "Zorua-Hisui",
      },
    ],
  },
  {
    name: "Zoroark",
    formes: [
      {
        name: "Zoroark-Hisui",
      },
    ],
  },
  {
    name: "Minccino",
  },
  {
    name: "Cinccino",
  },
  {
    name: "Gothita",
  },
  {
    name: "Gothorita",
  },
  {
    name: "Gothitelle",
  },
  {
    name: "Solosis",
  },
  {
    name: "Duosion",
  },
  {
    name: "Reuniclus",
  },
  {
    name: "Ducklett",
  },
  {
    name: "Swanna",
  },
  {
    name: "Vanillite",
  },
  {
    name: "Vanillish",
  },
  {
    name: "Vanilluxe",
  },
  {
    name: "Deerling",
    formes: [
      {
        name: "Deerling-Summer",
        index: 1,
      },
      {
        name: "Deerling-Autumn",
        index: 2,
      },
      {
        name: "Deerling-Winter",
        index: 3,
      },
    ],
  },
  {
    name: "Sawsbuck",
    formes: [
      {
        name: "Sawsbuck-Summer",
      },
      {
        name: "Sawsbuck-Autumn",
      },
      {
        name: "Sawsbuck-Winter",
      },
    ],
  },
  {
    name: "Emolga",
  },
  {
    name: "Karrablast",
  },
  {
    name: "Escavalier",
  },
  {
    name: "Foongus",
  },
  {
    name: "Amoonguss",
  },
  {
    name: "Frillish-M",
    formes: [
      {
        name: "Frillish-F",
      },
    ],
  },
  {
    name: "Jellicent-M",
    formes: [
      {
        name: "Jellicent-F",
      },
    ],
  },
  {
    name: "Alomomola",
  },
  {
    name: "Joltik",
  },
  {
    name: "Galvantula",
  },
  {
    name: "Ferroseed",
  },
  {
    name: "Ferrothorn",
  },
  {
    name: "Klink",
  },
  {
    name: "Klang",
  },
  {
    name: "Klinklang",
  },
  {
    name: "Tynamo",
  },
  {
    name: "Eelektrik",
  },
  {
    name: "Eelektross",
    natdex: 604,
    formes: [
      {
        name: "Eelektross-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Elgyem",
  },
  {
    name: "Beheeyem",
  },
  {
    name: "Litwick",
  },
  {
    name: "Lampent",
  },
  {
    name: "Chandelure",
    natdex: 609,
    formes: [
      {
        name: "Chandelure-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Axew",
  },
  {
    name: "Fraxure",
  },
  {
    name: "Haxorus",
  },
  {
    name: "Cubchoo",
  },
  {
    name: "Beartic",
  },
  {
    name: "Cryogonal",
  },
  {
    name: "Shelmet",
  },
  {
    name: "Accelgor",
  },
  {
    name: "Stunfisk",
    formes: [
      {
        name: "Stunfisk-Galar",
      },
    ],
  },
  {
    name: "Mienfoo",
  },
  {
    name: "Mienshao",
  },
  {
    name: "Druddigon",
  },
  {
    name: "Golett",
  },
  {
    name: "Golurk",
    natdex: 623,
    formes: [
      {
        name: "Golurk-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Pawniard",
  },
  {
    name: "Bisharp",
  },
  {
    name: "Bouffalant",
  },
  {
    name: "Rufflet",
  },
  {
    name: "Braviary",
    formes: [
      {
        name: "Braviary-Hisui",
      },
    ],
  },
  {
    name: "Vullaby",
  },
  {
    name: "Mandibuzz",
  },
  {
    name: "Heatmor",
  },
  {
    name: "Durant",
  },
  {
    name: "Deino",
  },
  {
    name: "Zewilous",
  },
  {
    name: "Hydreigon",
  },
  {
    name: "Larvesta",
  },
  {
    name: "Volcarona",
  },
  {
    name: "Cobalion",
  },
  {
    name: "Terrakion",
  },
  {
    name: "Virizion",
  },
  {
    name: "Tornadus",
    formes: [
      {
        name: "Tornadus-Therian",
      },
    ],
  },
  {
    name: "Thundurus",
    formes: [
      {
        name: "Thundurus-Therian",
      },
    ],
  },
  {
    name: "Reshiram",
    restricted: true
  },
  {
    name: "Zekrom",
    restricted: true
  },
  {
    name: "Landorus-Incarnate",
    formes: [
      {
        name: "Landorus-Therian",
      },
    ],
  },
  {
    name: "Kyurem",
    formes: [
      {
        name: "Kyurem-White",
      },
      {
        name: "Kyurem-Black",
      },
    ],
    restricted: true
  },
  {
    name: "Keldeo",
    formes: [
      {
        name: "Keldeo-Resolute",
      },
    ],
  },
  {
    name: "Meloetta",
    formes: [
      {
        name: "Meloetta-Pirouette",
        index: 1,
      },
    ],
    mythical: true
  },
  {
    name: "Genesect",
    mythical: true
  },
  // Kalos
  {
    name: "Chespin",
  },
  {
    name: "Quilladin",
  },
  {
    name: "Chesnaught",
    natdex: 652,
    formes: [
      {
        name: "Chesnaught-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Fennekin",
  },
  {
    name: "Braxien",
  },
  {
    name: "Delphox",
    natdex: 655,
    formes: [
      {
        name: "Delphox-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Froakie",
  },
  {
    name: "Frogadier",
  },
  {
    name: "Greninja",
    natdex: 658,
    formes: [
      {
        name: "Greninja-Ash",
        index: 2,
      },
      {
        name: "Greninja-Mega",
        index: 3,
      },
    ],
  },
  {
    name: "Bunnelby",
  },
  {
    name: "Diggersby",
  },
  {
    name: "Fletchling",
  },
  {
    name: "Fletchinder",
  },
  {
    name: "Talonflame",
  },
  {
    name: "Scatterbug",
  },
  {
    name: "Spewpa",
  },
  {
    name: "Vivillon",
  },
  {
    name: "Litleo",
  },
  {
    name: "Pyroar",
    natdex: 668,
    formes: [
      {
        name: "Pyroar-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Flabebe",
  },
  {
    name: "Floette",
    natdex: 670,
    formes: [
      {
        name: "Floette-Eternal",
        index: 5,
      },
      {
        name: "Floette-Eternal-Mega",
        index: 6,
      },
    ],
  },
  {
    name: "Florges",
  },
  {
    name: "Skiddo",
  },
  {
    name: "Gogoat",
  },
  {
    name: "Pancham",
  },
  {
    name: "Pangoro",
  },
  {
    name: "Furfrou",
  },
  {
    name: "Espurr",
  },
  {
    name: "Meowstic",
    formes: [
      {
        name: "Meowstic-F",
        index: 1,
      },
      {
        name: "Meowstic-Mega",
        index: 2,
      },
    ],
  },
  {
    name: "Honedge",
  },
  {
    name: "Doublade",
  },
  {
    name: "Aegislash",
  },
  {
    name: "Spritzee",
  },
  {
    name: "Aromatisse",
  },
  {
    name: "Swirlix",
  },
  {
    name: "Slurpuff",
  },
  {
    name: "Inkay",
  },
  {
    name: "Malamar",
    natdex: 687,
    formes: [
      {
        name: "Malamar-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Binacle",
  },
  {
    name: "Barbaracle",
    natdex: 689,
    formes: [
      {
        name: "Barbaracle-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Skrelp",
  },
  {
    name: "Dragalge",
    natdex: 691,
    formes: [
      {
        name: "Dragalge-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Clauncher",
  },
  {
    name: "Clawitzer",
  },
  {
    name: "Helioptile",
  },
  {
    name: "Heliolisk",
  },
  {
    name: "Tyrunt",
  },
  {
    name: "Tyrantrum",
  },
  {
    name: "Amaura",
  },
  {
    name: "Aurorus",
  },
  {
    name: "Sylveon",
  },
  {
    name: "Hawlucha",
    natdex: 701,
    formes: [
      {
        name: "Hawlucha-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Dedenne",
  },
  {
    name: "Carbink",
  },
  {
    name: "Goomy",
  },
  {
    name: "Sliggoo",
    formes: [
      {
        name: "Sliggoo-Hisui",
      },
    ],
  },
  {
    name: "Goodra",
    formes: [
      {
        name: "Goodra-Hisui",
      },
    ],
  },
  {
    name: "Klefki",
  },
  {
    name: "Phantump",
  },
  {
    name: "Trevenant",
  },
  {
    name: "Pumpkaboo",
  },
  {
    name: "Gourgeist",
  },
  {
    name: "Bergmite",
  },
  {
    name: "Avalugg",
    formes: [
      {
        name: "Avalugg-Hisui",
      },
    ],
  },
  {
    name: "Noibat",
  },
  {
    name: "Noivern",
  },
  {
    name: "Xerneas",
    restricted: true
  },
  {
    name: "Yveltal",
    restricted: true
  },
  {
    name: "Zygarde",
    natdex: 718,
    formes: [
      {
        name: "Zygarde-10%",
        index: 1,
      },
      {
        name: "Zygarde-Complete",
        index: 2,
      },
      {
        name: "Zygarde-Mega",
        index: 3,
      },
    ],
    restricted: true
  },
  {
    name: "Diancie",
    mythical: true
  },
  {
    name: "Hoopa",
    formes: [
      {
        name: "Hoopa-Unbound",
      },
    ],
    mythical: true
  },
  {
    name: "Volcanion",
    mythical: true
  },
  // Alola
  {
    name: "Rowlet",
  },
  {
    name: "Dartrix",
  },
  {
    name: "Decidueye",
    formes: [
      {
        name: "Decidueye-Hisui",
      },
    ],
  },
  {
    name: "Litten",
  },
  {
    name: "Torracat",
  },
  {
    name: "Incineroar",
  },
  {
    name: "Popplio",
  },
  {
    name: "Brionne",
  },
  {
    name: "Primarina",
  },
  {
    name: "Pikipek",
  },
  {
    name: "Trumbeak",
  },
  {
    name: "Toucannon",
  },
  {
    name: "Yungoos",
  },
  {
    name: "Gumshoos",
  },
  {
    name: "Grubbin",
  },
  {
    name: "Charjabug",
  },
  {
    name: "Vikavolt",
  },
  {
    name: "Crabrawler",
  },
  {
    name: "Crabominable",
    natdex: 740,
    formes: [
      {
        name: "Crabominable-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Oricorio",
    formes: [
      {
        name: "Oricorio-Pom-Pom",
      },
      {
        name: "Oricorio-Pa'u",
      },
      {
        name: "Oricorio-Sensu",
      },
    ],
  },
  {
    name: "Cutiefly",
  },
  {
    name: "Ribombee",
  },
  {
    name: "Rockruff",
  },
  {
    name: "Lycanroc",
    formes: [
      {
        name: "Lycanroc-Midnight",
        index: 1,
      },
      {
        name: "Lycanroc-Dusk",
        index: 2,
      },
    ],
  },
  {
    name: "Wishiwashi",
    formes: [
      {
        name: "Wishiwashi-Schooling",
      },
    ],
  },
  {
    name: "Mareanie",
  },
  {
    name: "Toxapex",
  },
  {
    name: "Mudbray",
  },
  {
    name: "Mudsdale",
  },
  {
    name: "Dewpider",
  },
  {
    name: "Araquanid",
  },
  {
    name: "Formantis",
  },
  {
    name: "Lurantis",
  },
  {
    name: "Morelull",
  },
  {
    name: "Shiinotic",
  },
  {
    name: "Salandit",
  },
  {
    name: "Salazzle",
  },
  {
    name: "Stufful",
  },
  {
    name: "Bewear",
  },
  {
    name: "Bounsweet",
  },
  {
    name: "Steenee",
  },
  {
    name: "Tsareena",
  },
  {
    name: "Comfey",
  },
  {
    name: "Oranguru",
  },
  {
    name: "Passimian",
  },
  {
    name: "Wimpod",
  },
  {
    name: "Golisopod",
    natdex: 768,
    formes: [
      {
        name: "Golisopod-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Sandygast",
  },
  {
    name: "Palossand",
  },
  {
    name: "Pyukumuku",
  },
  {
    name: "Type: Null",
  },
  {
    name: "Silvally",
  },
  {
    name: "Minior",
  },
  {
    name: "Komala",
  },
  {
    name: "Turtonator",
  },
  {
    name: "Togedemaru",
  },
  {
    name: "Mimikyu",
  },
  {
    name: "Bruxish",
  },
  {
    name: "Drampa",
    natdex: 780,
    formes: [
      {
        name: "Drampa-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Dhelmise",
  },
  {
    name: "Jangmo-o",
  },
  {
    name: "Hakamo-o",
  },
  {
    name: "Kommo-o",
  },
  {
    name: "Tapu Koko",
  },
  {
    name: "Tapu Lele",
  },
  {
    name: "Tapu Bulu",
  },
  {
    name: "Tapu Fini",
  },
  {
    name: "Cosmog",
    restricted: true
  },
  {
    name: "Cosmoem",
    restricted: true
  },
  {
    name: "Solgaleo",
    restricted: true
  },
  {
    name: "Lunala",
    restricted: true
  },
  {
    name: "Nihilego",
  },
  {
    name: "Buzzwole",
  },
  {
    name: "Pheromosa",
  },
  {
    name: "Xurkitree",
  },
  {
    name: "Celesteela",
  },
  {
    name: "Kartana",
  },
  {
    name: "Guzzlord",
  },
  {
    name: "Necrozma",
    formes: [
      {
        name: "Necrozma-Dusk-Mane",
        index: 1,
      },
      {
        name: "Necrozma-Dawn-Wings",
        index: 2,
      },
      {
        name: "Necrozma-Ultra",
        index: 3,
      },
    ],
    restricted: true
  },
  {
    name: "Magearna",
    natdex: 801,
    formes: [
      {
        name: "Magearna-Original",
        index: 1,
      },
      {
        name: "Magearna-Mega",
        index: 2,
      },
    ],
    mythical: true
  },
  {
    name: "Marshadow",
    mythical: true
  },
  {
    name: "Poipole",
  },
  {
    name: "Naganadel",
  },
  {
    name: "Stakataka",
  },
  {
    name: "Blacephalon",
  },
  {
    name: "Zeraora",
    natdex: 807,
    formes: [
      {
        name: "Zeraora-Mega",
        index: 1,
      },
    ],
    mythical: true
  },
  {
    name: "Meltan",
    mythical: true
  },
  {
    name: "Melmetal",
    mythical: true
  },
  // Galar
  {
    name: "Grookey",
  },
  {
    name: "Thwackey",
  },
  {
    name: "Rillaboom",
  },
  {
    name: "Scorbunny",
  },
  {
    name: "Raboot",
  },
  {
    name: "Cinderace",
  },
  {
    name: "Sobble",
  },
  {
    name: "Drizzile",
  },
  {
    name: "Inteleon",
  },
  {
    name: "Skwovet",
  },
  {
    name: "Greedent",
  },
  {
    name: "Rookidee",
  },
  {
    name: "Corvisquire",
  },
  {
    name: "Corviknight",
  },
  {
    name: "Blipbug",
  },
  {
    name: "Dottler",
  },
  {
    name: "Orbeelte",
  },
  {
    name: "Nickit",
  },
  {
    name: "Thievul",
  },
  {
    name: "Gossifleur",
  },
  {
    name: "Eldegoss",
  },
  {
    name: "Wooloo",
  },
  {
    name: "Dubwool",
  },
  {
    name: "Chewtle",
  },
  {
    name: "Drednaw",
  },
  {
    name: "Yamper",
  },
  {
    name: "Boltund",
  },
  {
    name: "Rolycoly",
  },
  {
    name: "Carkol",
  },
  {
    name: "Coalossal",
  },
  {
    name: "Applin",
  },
  {
    name: "Flapple",
  },
  {
    name: "Appletun",
  },
  {
    name: "Silicobra",
  },
  {
    name: "Sandaconda",
  },
  {
    name: "Cramorant",
  },
  {
    name: "Arrokuda",
  },
  {
    name: "Barraskewda",
  },
  {
    name: "Toxel",
  },
  {
    name: "Toxtricity",
    formes: [
      {
        name: "Toxtricity-Low-Key",
        index: 1,
      },
    ],
  },
  {
    name: "Sizzlipede",
  },
  {
    name: "Centiskorch",
  },
  {
    name: "Clobbopus",
  },
  {
    name: "Grapploct",
  },
  {
    name: "Sinistea",
    natdex: 854,
    formes: [
      {
        name: "Sinistea-Antique",
        index: 1,
      },
    ],
  },
  {
    name: "Polteageist",
    natdex: 855,
    formes: [
      {
        name: "Polteageist-Antique",
        index: 1,
      },
    ],
  },
  {
    name: "Hatenna",
  },
  {
    name: "Hattrem",
  },
  {
    name: "Hatterene",
  },
  {
    name: "Impidimp",
  },
  {
    name: "Morgrem",
  },
  {
    name: "Grimmsnarl",
  },
  {
    name: "Obstagoon",
  },
  {
    name: "Perrserker",
  },
  {
    name: "Cursola",
  },
  {
    name: "Sirfetch'd",
  },
  {
    name: "Mr. Rime",
  },
  {
    name: "Runerigus",
  },
  {
    name: "Milcery",
  },
  {
    name: "Alcremie",
  },
  {
    name: "Falinks",
    natdex: 870,
    formes: [
      {
        name: "Falinks-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Pincurchin",
  },
  {
    name: "Snom",
  },
  {
    name: "Frosmoth",
  },
  {
    name: "Stonjourner",
  },
  {
    name: "Eiscue",
    formes: [
      {
        name: "Eiscue-Noice",
        index: 1,
      },
    ],
  },
  {
    name: "Indeedee-M",
    formes: [
      {
        name: "Indeedee-F",
      },
    ],
  },
  {
    name: "Morpeko",
  },
  {
    name: "Cufant",
  },
  {
    name: "Copperajah",
  },
  {
    name: "Dracozolt",
  },
  {
    name: "Arctozolt",
  },
  {
    name: "Dracovish",
  },
  {
    name: "Arctovish",
  },
  {
    name: "Duraludon",
  },
  {
    name: "Dreepy",
  },
  {
    name: "Drakloak",
  },
  {
    name: "Dragapult",
  },
  {
    name: "Zacian",
    formes: [
      {
        name: "Zacian-Crowned",
      },
    ],
    restricted: true
  },
  {
    name: "Zamazenta",
    formes: [
      {
        name: "Zamazenta-Crowned",
      },
    ],
    restricted: true
  },
  {
    name: "Eternatus",
    restricted: true
  },
  {
    name: "Kubfu",
  },
  {
    name: "Urshifu",
    formes: [
      {
        name: "Urshifu-Rapid-Strike",
      },
    ],
  },
  {
    name: "Zarude",
    mythical: true
  },
  {
    name: "Regieleki",
  },
  {
    name: "Regidrago",
  },
  {
    name: "Glastrier",
  },
  {
    name: "Spectrier",
  },
  {
    name: "Calyrex",
    formes: [
      {
        name: "Calyrex-Ice",
        index: 1,
      },
      {
        name: "Calyrex-Shadow",
        index: 2,
      },
    ],
    restricted: true
  },
  // Hisui
  {
    name: "Wyrdeer",
  },
  {
    name: "Kleavor",
  },
  {
    name: "Ursaluna",
    formes: [
      {
        name: "Ursaluna-Bloodmoon",
        index: 1,
      },
    ],
  },
  {
    name: "Basculegion-M",
    formes: [
      {
        name: "Basculegion-F",
        index: 1,
      },
    ],
  },
  {
    name: "Sneasler",
  },
  {
    name: "Overqwil",
  },
  {
    name: "Enamorus",
    formes: [
      {
        name: "Enamorus-Therian",
        index: 1,
      },
    ],
  },
  // Paldea
  {
    name: "Sprigatito",
  },
  {
    name: "Floragato",
  },
  {
    name: "Meowscarada",
  },
  {
    name: "Fuecoco",
  },
  {
    name: "Crocalor",
  },
  {
    name: "Skeledirge",
  },
  {
    name: "Quaxly",
  },
  {
    name: "Quaxwell",
  },
  {
    name: "Quaquaval",
  },
  {
    name: "Lechonk",
  },
  {
    name: "Oinkologne",
    formes: [
      {
        name: "Oinkologne-F",
        index: 1,
      },
    ],
  },
  {
    name: "Tarountula",
  },
  {
    name: "Spidops",
  },
  {
    name: "Nymble",
  },
  {
    name: "Lokix",
  },
  {
    name: "Pawmi",
  },
  {
    name: "Pawmo",
  },
  {
    name: "Pawmot",
  },
  {
    name: "Tandemaus",
  },
  {
    name: "Maushold",
    formes: [
      {
        name: "Maushold-Four",
      },
    ],
  },
  {
    name: "Fidough",
  },
  {
    name: "Dachsbun",
  },
  {
    name: "Smoliv",
  },
  {
    name: "Dolliv",
  },
  {
    name: "Arboliva",
  },
  {
    name: "Squawkabilly",
    formes: [
      {
        name: "Squawkabilly-Blue",
        index: 1,
      },
      {
        name: "Squawkabilly-Yellow",
        index: 2,
      },
      {
        name: "Squawkabilly-White",
        index: 3,
      },
    ],
  },
  {
    name: "Nacli",
  },
  {
    name: "Naclstack",
  },
  {
    name: "Garganacl",
  },
  {
    name: "Charcadet",
  },
  {
    name: "Armarouge",
  },
  {
    name: "Ceruledge",
  },
  {
    name: "Tadbulb",
  },
  {
    name: "Bellibolt",
  },
  {
    name: "Wattrel",
  },
  {
    name: "Kilowattrel",
  },
  {
    name: "Maschiff",
  },
  {
    name: "Mabostiff",
  },
  {
    name: "Shroodle",
  },
  {
    name: "Grafaiai",
  },
  {
    name: "Bramblin",
  },
  {
    name: "Brambleghast",
  },
  {
    name: "Toedscool",
  },
  {
    name: "Toedscruel",
  },
  {
    name: "Klawf",
  },
  {
    name: "Capsakid",
  },
  {
    name: "Scovillain",
    natdex: 952,
    formes: [
      {
        name: "Scovillain-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Rellor",
  },
  {
    name: "Rabsca",
  },
  {
    name: "Flittle",
  },
  {
    name: "Espathra",
  },
  {
    name: "Tinkatink",
  },
  {
    name: "Tinkatuff",
  },
  {
    name: "Tinkaton",
  },
  {
    name: "Wiglett",
  },
  {
    name: "Wugtrio",
  },
  {
    name: "Bombirdier",
  },
  {
    name: "Finizen",
  },
  {
    name: "Palafin",
    formes: [
      {
        name: "Palafin-Hero",
      },
    ],
  },
  {
    name: "Varoom",
  },
  {
    name: "Revavroom",
  },
  {
    name: "Cyclizar",
  },
  {
    name: "Orthworm",
  },
  {
    name: "Glimmet",
  },
  {
    name: "Glimmora",
    natdex: 970,
    formes: [
      {
        name: "Glimmora-Mega",
        index: 1,
      },
    ],
  },
  {
    name: "Greavard",
  },
  {
    name: "Houndstone",
  },
  {
    name: "Flamigo",
  },
  {
    name: "Cetoddle",
  },
  {
    name: "Cetitan",
  },
  {
    name: "Veluza",
  },
  {
    name: "Dondozo",
  },
  {
    name: "Tatsugiri",
    formes: [
      {
        name: "Tatsugiri-Droopy",
        index: 1,
      },
      {
        name: "Tatsugiri-Stretchy",
        index: 2,
      },
      {
        name: "Tatsugiri-Mega",
        index: 3,
      },
    ],
  },
  {
    name: "Annihilape",
  },
  {
    name: "Clodsire",
  },
  {
    name: "Farigiraf",
  },
  {
    name: "Dudunsparce",
    formes: [
      {
        name: "Dudunsparce-Three-Segment",
      },
    ],
  },
  {
    name: "Kingambit",
  },
  {
    name: "Great Tusk",
  },
  {
    name: "Scream Tail",
  },
  {
    name: "Brute Bonnet",
  },
  {
    name: "Flutter Mane",
  },
  {
    name: "Slither Wing",
  },
  {
    name: "Sandy Shocks",
  },
  {
    name: "Iron Treads",
  },
  {
    name: "Iron Bundle",
  },
  {
    name: "Iron Hands",
  },
  {
    name: "Iron Jugulis",
  },
  {
    name: "Iron Moth",
  },
  {
    name: "Iron Thorns",
  },
  {
    name: "Frigibax",
  },
  {
    name: "Arctibax",
  },
  {
    name: "Baxcalibur",
    natdex: 998,
    formes: [
      {
        name: "Baxcalibur-Mega",
        index: 2,
      },
    ],
  },
  {
    name: "Gimmighoul",
    formes: [
      {
        name: "Gimmighoul-Roaming",
      },
    ],
  },
  {
    name: "Gholdengo",
  },
  {
    name: "Wo-Chien",
  },
  {
    name: "Chien-Pao",
  },
  {
    name: "Ting-Lu",
  },
  {
    name: "Chi-Yu",
  },
  {
    name: "Roaring Moon",
  },
  {
    name: "Iron Valiant",
  },
  {
    name: "Koraidon",
    restricted: true
  },
  {
    name: "Miraidon",
    restricted: true
  },
  {
    name: "Walking Wake",
  },
  {
    name: "Iron Leaves",
  },
  {
    name: "Dipplin",
  },
  {
    name: "Polchageist",
    natdex: 1012,
    formes: [
      {
        name: "Polchageist-Artisan",
        index: 1,
      },
    ],
  },
  {
    name: "Sinistcha",
    natdex: 1013,
    formes: [
      {
        name: "Sinistcha-Masterpiece",
        index: 1,
      },
    ],
  },
  {
    name: "Okidogi",
  },
  {
    name: "Munkidori",
  },
  {
    name: "Fezandipiti",
  },
  {
    name: "Ogerpon",
    formes: [
      {
        name: "Ogerpon-Wellspring",
        index: 1,
      },
      {
        name: "Ogerpon-Hearthflame",
        index: 2,
      },
      {
        name: "Ogerpon-Cornerstone",
        index: 3,
      },
    ],
  },
  {
    name: "Archaludon",
  },
  {
    name: "Hydrapple",
  },
  {
    name: "Gouging Fire",
  },
  {
    name: "Raging Bolt",
  },
  {
    name: "Iron Boulder",
  },
  {
    name: "Iron Crown",
  },
  {
    name: "Terapagos",
    formes: [
      {
        name: "Terapagos-Terastal",
        index: 1,
      },
      {
        name: "Terapagos-Stellar",
        index: 2,
      },
    ],
    restricted: true
  },
  {
    name: "Pecharunt",
    mythical: true
  },
];

/**
 * A callback invoked on a Pokemon
 * @callback MonCallback
 * @param {Pokemon} - The mon.
 */

/**
 * Iterates over the entire Pokedex, including Formes, and invokes a callback on each.
 * @param {MonCallback} callbackFn - A callback invoked on each species and forme in the dex.
 *
 */
function loadPokedex(callbackFn) {
  console.log("Loading Pokedex...");
  for (let i = 0; i < SPECIES.length; i++) {
    const species = SPECIES[i];
    const mon = {
      name: species.name,
      number: `${String(i + 1).padStart(4, "0")}_${String(0).padStart(3, "0")}`,
      restricted: species.restricted == true,
      mythical: species.mythical == true
    };
    if (callbackFn) {
      callbackFn(mon);
    }
    if (species.formes) {
      for (let j = 0; j < species.formes.length; j++) {
        const forme = species.formes[j];
        const monForme = {
          name: forme.name,
          number: `${String(i + 1).padStart(4, "0")}_${String(j + 1).padStart(3, "0")}`,
          restricted: species.restricted == true,
          mythical: species.mythical == true
        };
        if (callbackFn) {
          callbackFn(monForme);
        }
      }
    }
  }
}

/**
 * An Item data structure
 * @typedef {Object} Item
 * @property {string} name - Item name.
 * @property {string} type - Item Type (Held, Berry, etc).
 */

/**
 * @constant - List of all Held Items.
 * @type {Item[]}
 */
const ITEMS = [
  {
    name: "Ability Shield",
  },
  {
    name: "Absorb Bulb",
  },
  {
    name: "Adamant Crystal",
  },
  {
    name: "Adamant Orb",
  },
  {
    name: "Adrenaline Orb",
  },
  {
    name: "Air Balloon",
  },
  {
    name: "Amulet Coint",
  },
  {
    name: "Assault Vest",
  },
  {
    name: "Big Root",
  },
  {
    name: "Big Nugget",
  },
  {
    name: "Binding Band",
  },
  {
    name: "Black Belt",
  },
  {
    name: "Black Glasses",
  },
  {
    name: "Black Sludge",
  },
  {
    name: "Blunder Policy",
  },
  {
    name: "Booster Energy",
  },
  {
    name: "Bright Powder",
  },
  {
    name: "Cell Battery",
  },
  {
    name: "Charcoal",
  },
  {
    name: "Choice Band",
  },
  {
    name: "Choice Scarf",
  },
  {
    name: "Choice Specs",
  },
  {
    name: "Cleanse Tag",
  },
  {
    name: "Clear Amulet",
  },
  {
    name: "Cornerstone Mask",
  },
  {
    name: "Covert Cloak",
  },
  {
    name: "Damp Rock",
  },
  {
    name: "Destiny Knot",
  },
  {
    name: "Draco Plate",
  },
  {
    name: "Dragon Fang",
  },
  {
    name: "Dread Plate",
  },
  {
    name: "Earth Plate",
  },
  {
    name: "Eject Button",
  },
  {
    name: "Eject Pack",
  },
  {
    name: "Electric Seed",
  },
  {
    name: "Eviolite",
  },
  {
    name: "Expert Belt",
  },
  {
    name: "Fairy Feather",
  },
  {
    name: "Fist Plate",
  },
  {
    name: "Flame Orb",
  },
  {
    name: "Flame Plate",
  },
  {
    name: "Float Stone",
  },
  {
    name: "Focus Band",
  },
  {
    name: "Focus Sash",
  },
  {
    name: "Full Incense",
  },
  {
    name: "Grassy Seed",
  },
  {
    name: "Grip Claw",
  },
  {
    name: "Griseous Core",
  },
  {
    name: "Griseous Orb",
  },
  {
    name: "Hard Stone",
  },
  {
    name: "Hearthflame Mask",
  },
  {
    name: "Heat Rock",
  },
  {
    name: "Heavy Duty Boots",
  },
  {
    name: "Icicle Plate",
  },
  {
    name: "Icy Rock",
  },
  {
    name: "Insect Plate",
  },
  {
    name: "Iron Ball",
  },
  {
    name: "King's Rock",
  },
  {
    name: "Lagging Tail",
  },
  {
    name: "Lax Incense",
  },
  {
    name: "Leftovers",
  },
  {
    name: "Life Orb",
  },
  {
    name: "Light Ball",
  },
  {
    name: "Light Clay",
  },
  {
    name: "Loaded Dice",
  },
  {
    name: "Luck Incense",
  },
  {
    name: "Luminous Moss",
  },
  {
    name: "Lustrous Globe",
  },
  {
    name: "Lustrous Orb",
  },
  {
    name: "Magnet",
  },
  {
    name: "Meadow Plate",
  },
  {
    name: "Mental Herb",
  },
  {
    name: "Metal Coat",
  },
  {
    name: "Metronome",
  },
  {
    name: "Mind Place",
  },
  {
    name: "Miracle Seed",
  },
  {
    name: "Mirror Herb",
  },
  {
    name: "Misty Seed",
  },
  {
    name: "Muscle Band",
  },
  {
    name: "Mystic Water",
  },
  {
    name: "Never-Melt Ice",
  },
  {
    name: "Odd Incense",
  },
  {
    name: "Pixie Plate",
  },
  {
    name: "Poison Barb",
  },
  {
    name: "Power Anklet",
  },
  {
    name: "Power Band",
  },
  {
    name: "Power Belt",
  },
  {
    name: "Power Bracer",
  },
  {
    name: "Power Herb",
  },
  {
    name: "Power Lens",
  },
  {
    name: "Power Weight",
  },
  {
    name: "Protective Pads",
  },
  {
    name: "Psychic Seed",
  },
  {
    name: "Punching Glove",
  },
  {
    name: "Purce Incense",
  },
  {
    name: "Quick Claw",
  },
  {
    name: "Razor Claw",
  },
  {
    name: "Razor Fang",
  },
  {
    name: "Red Card",
  },
  {
    name: "Ring Target",
  },
  {
    name: "Rock Incense",
  },
  {
    name: "Rocky Helmet",
  },
  {
    name: "Rose Incense",
  },
  {
    name: "Rusted Shield",
  },
  {
    name: "Rusted Sword",
  },
  {
    name: "Safety Goggles",
  },
  {
    name: "Scope Lens",
  },
  {
    name: "Sea Incense",
  },
  {
    name: "Sharp Beak",
  },
  {
    name: "Shed Shell",
  },
  {
    name: "Shell Bell",
  },
  {
    name: "Silk Scarf",
  },
  {
    name: "Silver Powder",
  },
  {
    name: "Sky Plate",
  },
  {
    name: "Smoke Ball",
  },
  {
    name: "Smooth Rock",
  },
  {
    name: "Snowball",
  },
  {
    name: "Soft Sand",
  },
  {
    name: "Soothe Bell",
  },
  {
    name: "Soul Dew",
  },
  {
    name: "Spell Tag",
  },
  {
    name: "Spell Tag",
  },
  {
    name: "Splash Plate",
  },
  {
    name: "Spooky Plate",
  },
  {
    name: "Stick",
  },
  {
    name: "Sticky Barb",
  },
  {
    name: "Stone Plate",
  },
  {
    name: "Terrain Extender",
  },
  {
    name: "Thick Club",
  },
  {
    name: "Throat Spray",
  },
  {
    name: "Toxic Orb",
  },
  {
    name: "Toxic Plate",
  },
  {
    name: "Twisted Spoon",
  },
  {
    name: "Utility Umbrella",
  },
  {
    name: "Wave Incense",
  },
  {
    name: "Weakness Policy",
  },
  {
    name: "Wellspring Mask",
  },
  {
    name: "White Herb",
  },
  {
    name: "Wide Lens",
  },
  {
    name: "Wise Glasses",
  },
  {
    name: "Zap Plate",
  },
  {
    name: "Zoom Lens",
  },
  // Berries
  {
    name: "Aguav Berry",
    type: "Berry",
  },
  {
    name: "Apicot Berry",
    type: "Berry",
  },
  {
    name: "Aspear Berry",
    type: "Berry",
  },
  {
    name: "Babiri Berry",
    type: "Berry",
  },
  {
    name: "Charti Berry",
    type: "Berry",
  },
  {
    name: "Cheri Berry",
    type: "Berry",
  },
  {
    name: "Chesto Berry",
    type: "Berry",
  },
  {
    name: "Chilan Berry",
    type: "Berry",
  },
  {
    name: "Chople Berry",
    type: "Berry",
  },
  {
    name: "Coba Berry",
    type: "Berry",
  },
  {
    name: "Colbur Berry",
    type: "Berry",
  },
  {
    name: "Custap Berry",
    type: "Berry",
  },
  {
    name: "Enigma Berry",
    type: "Berry",
  },
  {
    name: "Figy Berry",
    type: "Berry",
  },
  {
    name: "Ganlon Berry",
    type: "Berry",
  },
  {
    name: "Haban Berry",
    type: "Berry",
  },
  {
    name: "Iapapa Berry",
    type: "Berry",
  },
  {
    name: "Jacoba Berry",
    type: "Berry",
  },
  {
    name: "Kasib Berry",
    type: "Berry",
  },
  {
    name: "Kebia Berry",
    type: "Berry",
  },
  {
    name: "Kee Berry",
    type: "Berry",
  },
  {
    name: "Lansat Berry",
    type: "Berry",
  },
  {
    name: "Leppa Berry",
    type: "Berry",
  },
  {
    name: "Lum Berry",
    type: "Berry",
  },
  {
    name: "Mago Berry",
    type: "Berry",
  },
  {
    name: "Maranga Berry",
    type: "Berry",
  },
  {
    name: "Micle Berry",
    type: "Berry",
  },
  {
    name: "Occa Berry",
    type: "Berry",
  },
  {
    name: "Oran Berry",
    type: "Berry",
  },
  {
    name: "Passho Berry",
    type: "Berry",
  },
  {
    name: "Payapa Berry",
    type: "Berry",
  },
  {
    name: "Pecha Berry",
    type: "Berry",
  },
  {
    name: "Persim Berry",
    type: "Berry",
  },
  {
    name: "Rawst Berry",
    type: "Berry",
  },
  {
    name: "Rindo Berry",
    type: "Berry",
  },
  {
    name: "Roseli Berry",
    type: "Berry",
  },
  {
    name: "Rowap Berry",
    type: "Berry",
  },
  {
    name: "Salac Berry",
    type: "Berry",
  },
  {
    name: "Shuca Berry",
    type: "Berry",
  },
  {
    name: "Sitrus Berry",
    type: "Berry",
  },
  {
    name: "Starf Berry",
    type: "Berry",
  },
  {
    name: "Tanga Berry",
    type: "Berry",
  },
  {
    name: "Wiki Berry",
    type: "Berry",
  },
  {
    name: "Yache Berry",
    type: "Berry",
  },
  // Gems
  {
    name: "Bug Gem",
    type: "Gems",
  },
  {
    name: "Dark Gem",
    type: "Gems",
  },
  {
    name: "Dragon Gem",
    type: "Gems",
  },
  {
    name: "Electric Gem",
    type: "Gems",
  },
  {
    name: "Fairy Gem",
    type: "Gems",
  },
  {
    name: "Fighting Gem",
    type: "Gems",
  },
  {
    name: "Fire Gem",
    type: "Gems",
  },
  {
    name: "Flying Gem",
    type: "Gems",
  },
  {
    name: "Ghost Gem",
    type: "Gems",
  },
  {
    name: "Grass Gem",
    type: "Gems",
  },
  {
    name: "Ground Gem",
    type: "Gems",
  },
  {
    name: "Ice Gem",
    type: "Gems",
  },
  {
    name: "Normal Gem",
    type: "Gems",
  },
  {
    name: "Poison Gem",
    type: "Gems",
  },
  {
    name: "Psychic Gem",
    type: "Gems",
  },
  {
    name: "Rock Gem",
    type: "Gems",
  },
  {
    name: "Steel Gem",
    type: "Gems",
  },
  {
    name: "Water Gem",
    type: "Gems",
  },
  //Mega Stones
  {
    name: "Abomasite",
    type: "Mega Stone",
    base: "Abomasnow",
  },
  {
    name: "Absolite",
    type: "Mega Stone",
    base: "Absol",
  },
  {
    name: "Absolite Z",
    type: "Mega Stone",
    base: "Absol",
    mega: "Z"
  },
  {
    name: "Aerodactylite",
    type: "Mega Stone",
    base: "Aerodactyl",
  },
  {
    name: "Aggronite",
    type: "Mega Stone",
    base: "Aggron",
  },
  {
    name: "Alakazite",
    type: "Mega Stone",
    base: "Alakazam",
  },
  {
    name: "Altarianite",
    type: "Mega Stone",
    base: "Altaria",
  },
  {
    name: "Ampharosite",
    type: "Mega Stone",
    base: "Ampharos",
  },
  {
    name: "Audinite",
    type: "Mega Stone",
    base: "Audino"
  },
  {
    name: "Banettite",
    type: "Mega Stone",
    base: "Banette"
  },
  {
    name: "Barbaracite",
    type: "Mega Stone",
    base: "Barbaracle"
  },
  {
    name: "Baxcalibrite",
    type: "Mega Stone",
    base: "Baxcalibur"
  },
  {
    name: "Beedrillite",
    type: "Mega Stone",
    base: "Beedrill"
  },
  {
    name: "Blastoisinite",
    type: "Mega Stone",
    base: "Blastoise"
  },
  {
    name: "Blazikenite",
    type: "Mega Stone",
    base: "Blaziken"
  },
  {
    name: "Cameruptite",
    type: "Mega Stone",
    base: "Camerupt"
  },
  {
    name: "Charizardite X",
    type: "Mega Stone",
    base: "Charizard",
    mega: "X"
  },
  {
    name: "Charizardite Y",
    type: "Mega Stone",
    base: "Charizard",
    mega: "Y"
  },
  {
    name: "Chesnaughtite",
    type: "Mega Stone",
    base: "Chesnaught"
  },
  {
    name: "Chimechite",
    type: "Mega Stone",
    base: "Chimecho"
  },
  {
    name: "Clefablite",
    type: "Mega Stone",
    base: "Clefable"
  },
  {
    name: "Crabominite",
    type: "Mega Stone",
    base: "Crabominable"
  },
  {
    name: "Darkranite",
    type: "Mega Stone",
    base: "Darkrai"
  },
  {
    name: "Delphoxite",
    type: "Mega Stone",
    base: "Delphox"
  },
  {
    name: "Diancite",
    type: "Mega Stone",
    base: "Diancie"
  },
  {
    name: "Dragoninite",
    type: "Mega Stone",
    base: "Dragonite"
  },
  {
    name: "Eelektrossite",
    type: "Mega Stone",
    base: "Eelektross"
  },
  {
    name: "Emboarite",
    type: "Mega Stone",
    base: "Emboar"
  },
  {
    name: "Excadrite",
    type: "Mega Stone",
    base: "Excadrill"
  },
  {
    name: "Falinksite",
    type: "Mega Stone",
    base: "Falinks"
  },
  {
    name: "Feraligatite",
    type: "Mega Stone",
    base: "Feraligatr"
  },
  {
    name: "Floettite",
    type: "Mega Stone",
    base: "Floette-Eternal"
  },
  {
    name: "Froslassite",
    type: "Mega Stone",
    base: "Froslass"
  },
  {
    name: "Galladite",
    type: "Mega Stone",
    base: "Gallade"
  },
  {
    name: "Garchompite",
    type: "Mega Stone",
    base: "Garchomp"
  },
  {
    name: "Garchompite Z",
    type: "Mega Stone",
    base: "Garchomp",
    mega: "Z"
  },
  {
    name: "Gardevoirite",
    type: "Mega Stone",
    base: "Gardevoir"
  },
  {
    name: "Gengarite",
    type: "Mega Stone",
    base: "Gengar"
  },
  {
    name: "Glalitite",
    type: "Mega Stone",
    base: "Glalie"
  },
  {
    name: "Glimmoranite",
    type: "Mega Stone",
    base: "Glimmora"
  },
  {
    name: "Greninjite",
    type: "Mega Stone",
    base: "Greninja"
  },
  {
    name: "Golisopite",
    type: "Mega Stone",
    base: "Golisopod"
  },
  {
    name: "Hawluchanite",
    type: "Mega Stone",
    base: "Hawlucha"
  },
  {
    name: "Houndoominite",
    type: "Mega Stone",
    base: "Houndoom"
  },
  {
    name: "Kangaskhanite",
    type: "Mega Stone",
    base: "Kangaskhan"
  },
  {
    name: "Latiasite",
    type: "Mega Stone",
    base: "Latias"
  },
  {
    name: "Latiosite",
    type: "Mega Stone",
    base: "Latios"
  },
  {
    name: "Lopunnite",
    type: "Mega Stone",
    base: "Lopunny"
  },
  {
    name: "Lucarionite",
    type: "Mega Stone",
    base: "Lucario"
  },
  {
    name: "Lucarionite Z",
    type: "Mega Stone",
    base: "Lucario",
    mega: "Z"
  },
  {
    name: "Magearnite",
    type: "Mega Stone",
    base: "Magearna"
  },
  {
    name: "Malamarite",
    type: "Mega Stone",
    base: "Malamar"
  },
  {
    name: "Manectite",
    type: "Mega Stone",
    base: "Manetric"
  },
  {
    name: "Mawilite",
    type: "Mega Stone",
    base: "Mawile"
  },
  {
    name: "Medichamite",
    type: "Mega Stone",
    base: "Medicham"
  },
  {
    name: "Meganiumite",
    type: "Mega Stone",
    base: "Meganium"
  },
  {
    name: "Meowsticite",
    type: "Mega Stone",
    base: "Meowstic"
  },
  {
    name: "Mewtwonite X",
    type: "Mega Stone",
    base: "Mewtwo",
    mega: "X"
  },
  {
    name: "Mewtwonite Y",
    type: "Mega Stone",
    base: "Mewtwo",
    mega: "Y"
  },
  {
    name: "Pidgeotite",
    type: "Mega Stone",
    base: "Pigeot"
  },
  {
    name: "Pinsirite",
    type: "Mega Stone",
    base: "Pinsir"
  },
  {
    name: "Pyroarite",
    type: "Mega Stone",
    base: "Pyroar"
  },
  {
    name: "Raichunite X",
    type: "Mega Stone",
    base: "Raichu",
    mega: "X"
  },
  {
    name: "Raichunite Y",
    type: "Mega Stone",
    base: "Raichu",
    mega: "Y"
  },
  {
    name: "Sablenite",
    type: "Mega Stone",
    base: "Sableye"
  },
  {
    name: "Salamencite",
    type: "Mega Stone",
    base: "Salamence"
  },
  {
    name: "Sceptilite",
    type: "Mega Stone",
    base: "Sceptile"
  },
  {
    name: "Scizorite",
    type: "Mega Stone",
    base: "Scizor"
  },
  {
    name: "Scolipite",
    type: "Mega Stone",
    base: "Scolipede"
  },
  {
    name: "Scovillainite",
    type: "Mega Stone",
    base: "Scovillain"
  },
  {
    name: "Scraftinite",
    type: "Mega Stone",
    base: "Scrafty"
  },
  {
    name: "Sharpedonite",
    type: "Mega Stone",
    base: "Sharpedo"
  },
  {
    name: "Skarmorite",
    type: "Mega Stone",
    base: "Skarmory"
  },
  {
    name: "Slowbronite",
    type: "Mega Stone",
    base: "Slowbro"
  },
  {
    name: "Staraptite",
    type: "Mega Stone",
    base: "Starpator"
  },
  {
    name: "Starminite",
    type: "Mega Stone",
    base: "Starmie"
  },
  {
    name: "Steelixite",
    type: "Mega Stone",
    base: "Steelix"
  },
  {
    name: "Tatsugirinite",
    type: "Mega Stone",
    // TODO: this needs to accomodate multiple base formes, just like Meowstic
    base: "Tatsugiri" 
  },
  {
    name: "Tyranitarite",
    type: "Mega Stone",
    base: "Tyranitar"
  },
  {
    name: "Venasaurite",
    type: "Mega Stone",
    base: "Venusaur"
  },
  {
    name: "Victreebelite",
    type: "Mega Stone",
    base: "Victreebel"
  },
  {
    name: "Zeraorite",
    type: "Mega Stone",
    base: "Zeraora"
  },
  {
    name: "Zygardite",
    type: "Mega Stone",
    base: "Zygarde"
  },
  //Z-Crystals
  {
    name: "Aloraichium Z",
    type: "Z-Crystal",
  },
  {
    name: "Buginium Z",
    type: "Z-Crystal",
  },
  {
    name: "Darkinium Z",
    type: "Z-Crystal",
  },
  {
    name: "Decidium Z",
    type: "Z-Crystal",
  },
  {
    name: "Dragonium Z",
    type: "Z-Crystal",
  },
  {
    name: "Eevium Z",
    type: "Z-Crystal",
  },
  {
    name: "Electrium Z",
    type: "Z-Crystal",
  },
  {
    name: "Fairium Z",
    type: "Z-Crystal",
  },
  {
    name: "Fightinium Z",
    type: "Z-Crystal",
  },
  {
    name: "Firium Z",
    type: "Z-Crystal",
  },
  {
    name: "Flyinium Z",
    type: "Z-Crystal",
  },
  {
    name: "Ghostium Z",
    type: "Z-Crystal",
  },
  {
    name: "Grassium Z",
    type: "Z-Crystal",
  },
  {
    name: "Icium Z",
    type: "Z-Crystal",
  },
  {
    name: "Aloraichium Z",
    type: "Z-Crystal",
  },
  {
    name: "Incinium Z",
    type: "Z-Crystal",
  },
  {
    name: "Kommonium Z",
    type: "Z-Crystal",
  },
  {
    name: "Lycanium Z",
    type: "Z-Crystal",
  },
  {
    name: "Marshadium Z",
    type: "Z-Crystal",
  },
  {
    name: "Mewnium Z",
    type: "Z-Crystal",
  },
  {
    name: "Mimikium Z",
    type: "Z-Crystal",
  },
  {
    name: "Pikanium Z",
    type: "Z-Crystal",
  },
  {
    name: "Pikashunium Z",
    type: "Z-Crystal",
  },
  {
    name: "Poisinium Z",
    type: "Z-Crystal",
  },
  {
    name: "Primarium Z",
    type: "Z-Crystal",
  },
  {
    name: "Psychium Z",
    type: "Z-Crystal",
  },
  {
    name: "Rockium Z",
    type: "Z-Crystal",
  },
  {
    name: "Snorlium Z",
    type: "Z-Crystal",
  },
  {
    name: "Solganium Z",
    type: "Z-Crystal",
  },
  {
    name: "Steelium Z",
    type: "Z-Crystal",
  },
  {
    name: "Tapunium Z",
    type: "Z-Crystal",
  },
  {
    name: "Ultranecrozium Z",
    type: "Z-Crystal",
  },
  {
    name: "Waterium Z",
    type: "Z-Crystal",
  },
];

/**
 * A callback invoked on an Item.
 * @callback ItemCallback
 * @param {Item} - the item.
 */

/**
 * Iterates over the entire Itemdex and invokes a callback on each.
 * @param {ItemCallback} callbackFn - A callback invoked on each item in the dex.
 *
 */
function loadItemdex(callbackFn) {
  console.log("Loading Itemdex...");
  for (let i = 0; i < ITEMS.length; i++) {
    const item = ITEMS[i];
    if (callbackFn) {
      callbackFn(item);
    }
  }
}
