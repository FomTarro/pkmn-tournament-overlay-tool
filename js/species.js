/**
 * A Pokemon data structure
 * @typedef {Object} Pokemon
 * @property {string} name - Species name
 * @property {Forme[]} formes - List of alternate Formes
 */

/**
 * A Forme data structure
 * @typedef {Object} Forme
 * @property {string} name - Forme name
 */

const SPECIES_NONE_VALUE = 'None';

/** 
* @constant - List of all Pokemon.
* @type {Pokemon[]}
*/
const SPECIES = [
    // Kanto
    {
        name: 'Bulbasaur',
        natdex: 1,
    },
    {
        name: 'Ivysaur',
        natdex: 2,
    },
    {
        name: 'Venusaur',
        natdex: 3,
        formes: [
            {
                name: "Mega-Venusaur",
                index: 1
            }
        ]
    },
    {
        name: 'Charmander',
        natdex: 4
    },
    {
        name: 'Charmeleon',
        natdex: 5
    },
    {
        name: 'Charizard',
        natdex: 6,
        formes: [
            {
                name: 'Mega-Charizard X',
                index: 1
            },
            {
                name: 'Mega-Charizard Y',
                index: 2
            }
        ]
    },
    {
        name: 'Squirtle',
        natdex: 7,
    },
    {
        name: 'Wartortle',
        natdex: 8,
    },
    {
        name: 'Blastoise',
        natdex: 9,
        formes: [
            {
                name: 'Mega-Blastoise',
                index: 1
            }
        ]
    },
    {
        name: 'Caterpie',
        natdex: 10,
    },
    {
        name: 'Metapod',
        natdex: 11,
    },
    {
        name: 'Butterfree',
        natdex: 12,
    },
    {
        name: 'Weedle',
        natdex: 13,
    },
    {
        name: 'Kakuna',
        natdex: 14,
    },
    {
        name: 'Beedrill',
        natdex: 15,
        formes: [
            {
                name: 'Mega-Beedrill',
                index: 1
            }
        ]
    },
    {
        name: 'Pidgey',
        natdex: 16,
    },
    {
        name: 'Pidgeotto',
        natdex: 17,
    },
    {
        name: 'Pidgeot',
        natdex: 18,
        formes: [
            {
                name: 'Mega-Pidgeot',
                index: 1
            }
        ]
    },
    {
        name: 'Rattata',
        natdex: 19,
        formes: [
            {
                name: 'Alolan Rattata',
                index: 1
            }
        ]
    },
        {
        name: 'Raticate',
        natdex: 20,
        formes: [
            {
                name: 'Alolan Raticate',
                index: 1
            }
        ]
    },
    {
        name: 'Spearow',
        natdex: 21,
    },
    {
        name: 'Fearow',
        natdex: 22,
    },
    {
        name: 'Ekans',
        natdex: 23,
    },
    {
        name: 'Arbok',
        natdex: 24,
    },
    {
        name: 'Pikachu',
        natdex: 25,
    },
    {
        name: 'Raichu',
        natdex: 26,
        formes: [
            {
                name: 'Alolan Raichu',
                index: 1
            }
        ]
    },
    {
        name: 'Sandshrew',
        natdex: 27,
        formes: [
            {
                name: 'Alolan Sandshrew',
                index: 1
            }
        ]
    },
    {
        name: 'Sandslash',
        natdex: 28,
        formes: [
            {
                name: 'Alolan Sandslash',
                index: 1
            }
        ]
    },
    {
        name: 'Nidoran-F',
        natdex: 29,
    },
    {
        name: 'Nidorina',
        natdex: 30,
    },
    {
        name: 'Nidoqueen',
        natdex: 31,
    },
    {
        name: 'Nidoran-M',
        natdex: 32,
    },
    {
        name: 'Nidorino',
        natdex: 33,
    },
    {
        name: 'Nidoking',
        natdex: 34,
    },
    {
        name: 'Clefairy',
        natdex: 35,
    },
    {
        name: 'Clefable',
        natdex: 36,
    },
    {
        name: 'Vulpix',
        natdex: 37,
        formes: [
            {
                name: 'Alolan Vulpix',
                index: 1
            }
        ]
    },
    {
        name: 'Ninetales',
        natdex: 38,
        formes: [
            {
                name: 'Alolan Ninetales',
                index: 1
            }
        ]
    },
    {
        name: 'Jigglypuff',
        natdex: 39,
    },
    {
        name: 'Wigglytuff',
        natdex: 40,
    },
    {
        name: 'Zubat',
        natdex: 41,
    },
    {
        name: 'Golbat',
        natdex: 42,
    },
    {
        name: 'Oddish',
        natdex: 43,
    },
    {
        name: 'Gloom',
        natdex: 44,
    },
    {
        name: 'Vileplume',
        natdex: 45,
    },
    {
        name: 'Paras',
        natdex: 46,
    },
    {
        name: 'Parasect',
        natdex: 47,
    },
    {
        name: 'Venonat',
        natdex: 48,
    },
    {
        name: 'Venomoth',
        natdex: 49,
    },
    {
        name: 'Diglett',
        natdex: 50,
        formes: [
            {
                name: 'Alolan Diglett',
                index: 1
            }
        ]
    },
    {
        name: 'Dugtrio',
        natdex: 51,
        formes: [
            {
                name: 'Alolan Dugtrio',
                index: 1
            }
        ]
    },
    {
        name: 'Meowth',
        natdex: 52,
        formes: [
            {
                name: 'Alolan Meowth',
                index: 1
            },
            {
                name: 'Galarian Meowth',
                index: 2
            },
        ]
    },
    {
        name: 'Persian',
        natdex: 53,
        formes: [
            {
                name: 'Alolan Persian',
                index: 1
            }
        ]
    },
    {
        name: 'Psyduck',
        natdex: 54,
    },
    {
        name: 'Golduck',
        natdex: 55,
    },
    {
        name: 'Mankey',
        natdex: 56,
    },
    {
        name: 'Primeape',
        natdex: 57,
    },
    {
        name: 'Growlithe',
        natdex: 58,
        formes: [
            {
                name: 'Hisuian Growlithe',
                index: 1
            }
        ]
    },
    {
        name: 'Arcanine',
        natdex: 59,
        formes: [
            {
                name: 'Hisuian Arcanine',
                index: 1
            }
        ]
    },
    {
        name: 'Poliwag',
        natdex: 60,
    },
    {
        name: 'Poliwhirl',
        natdex: 61,
    },
    {
        name: 'Poliwrath',
        natdex: 62,
    },
    {
        name: 'Abra',
        natdex: 63,
    },
    {
        name: 'Kadabra',
        natdex: 64,
    },
    {
        name: 'Alakazam',
        natdex: 65,
        formes: [
            {
                name: 'Mega-Alakazam',
                index: 1
            }
        ]
    },
    {
        name: 'Machop',
        natdex: 66,
    },
    {
        name: 'Machoke',
        natdex: 67,
    },
    {
        name: 'Machamp',
        natdex: 68,
    },
    {
        name: 'Bellsprout',
        natdex: 69,
    },
    {
        name: 'Weepinbell',
        natdex: 70,
    },
    {
        name: 'Victreebel',
        natdex: 71,
    },
    {
        name: 'Tentacool',
        natdex: 72,
    },
    {
        name: 'Tentacruel',
        natdex: 73,
    },
    {
        name: 'Geodude',
        natdex: 74,
        formes: [
            {
                name: 'Alolan Geodude',
                index: 1
            }
        ]
    },
    {
        name: 'Graveler',
        natdex: 75,
        formes: [
            {
                name: 'Alolan Graveler',
                index: 1
            }
        ]
    },
    {
        name: 'Golem',
        natdex: 76,
        formes: [
            {
                name: 'Alolan Golem',
                index: 1
            }
        ]
    },
    {
        name: 'Ponyta',
        natdex: 77,
        formes: [
            {
                name: 'Galarian Ponyta',
                index: 1
            }
        ]
    },
    {
        name: 'Rapidash',
        natdex: 78,
        formes: [
            {
                name: 'Galarian Rapidash',
                index: 1
            }
        ]
    },
    {
        name: 'Slowpoke',
        natdex: 79,
        formes: [
            {
                name: 'Galarian Slowpoke',
                index: 1
            }
        ]
    },
    {
        name: 'Slowbro',
        natdex: 80,
        formes: [
            {
                name: 'Galarian Slowbro',
                index: 1
            }
        ]
    },
    {
        name: 'Magnemite',
        natdex: 81,
    },
    {
        name: 'Magneton',
        natdex: 82,
    },
    {
        name: 'Farfetch\'d',
        natdex: 83,
        formes: [
            {
                name: 'Galarian Farfetch\'d',
                index: 1
            }
        ]
    },
    {
        name: 'Doduo',
        natdex: 84,
    },
    {
        name: 'Dodrio',
        natdex: 85,
    },
    {
        name: 'Seel',
        natdex: 86,
    },
    {
        name: 'Dewgong',
        natdex: 87,
    },
    {
        name: 'Grimer',
        natdex: 88,
        formes: [
            {
                name: 'Alolan Grimer',
                index: 1
            }
        ]
    },
    {
        name: 'Muk',
        natdex: 89,
        formes: [
            {
                name: 'Alolan Muk',
                index: 1
            }
        ]
    },
    {
        name: 'Shellder',
        natdex: 90,
    },
    {
        name: 'Cloyster',
        natdex: 91,
    },
    {
        name: 'Gastly',
        natdex: 92,
    },
    {
        name: 'Haunter',
        natdex: 93,
    },
    {
        name: 'Gengar',
        natdex: 94,
    },
    {
        name: 'Onix',
        natdex: 95,
    },
    {
        name: 'Drowzee',
        natdex: 96,
    },
    {
        name: 'Hypno',
        natdex: 97,
    },
    {
        name: 'Krabby',
        natdex: 98,
    },
    {
        name: 'Kingler',
        natdex: 99,
    },
    {
        name: 'Voltorb',
        natdex: 100,
        formes: [
            {
                name: 'Hisuian Voltorb',
                index: 1
            }
        ]
    },
    {
        name: 'Electrode',
        natdex: 101,
        formes: [
            {
                name: 'Hisuian Electrode',
                index: 1
            }
        ]
    },
    {
        name: 'Exeggcute',
        natdex: 102,
    },
    {
        name: 'Exeggutor',
        natdex: 103,
        formes: [
            {
                name: 'Alolan Exeggutor',
                index: 1
            }
        ]
    },
    {
        name: 'Cubone',
        natdex: 104,
    },
    {
        name: 'Marowak',
        natdex: 105,
        formes: [
            {
                name: 'Alolan Marowak',
                index: 1
            }
        ]
    },
    {
        name: 'Hitmonlee',
        natdex: 106,
    },
    {
        name: 'Hitmonchan',
        natdex: 107,
    },
    {
        name: 'Lickitung',
        natdex: 108,
    },
    {
        name: 'Koffing',
        natdex: 109,
    },
    {
        name: 'Weezing',
        natdex: 110,
        formes: [
            {
                name: 'Galarian Weezing',
                index: 1
            }
        ]
    },
    {
        name: 'Rhyhorn',
        natdex: 111,
    },
    {
        name: 'Rhydon',
        natdex: 112,
    },
    {
        name: 'Chansey',
        natdex: 113,
    },
    {
        name: 'Tangela',
        natdex: 114,
    },
    {
        name: 'Kangaskhan',
        natdex: 115,
        formes: [
            {
                name: 'Mega-Kangaskhan',
                index: 1
            }
        ]
    },
    {
        name: 'Horsea',
        natdex: 116,
    },
    {
        name: 'Seadra',
        natdex: 117,
    },
    {
        name: 'Goldeen',
        natdex: 118,
    },
    {
        name: 'Seaking',
        natdex: 119,
    },
    {
        name: 'Staryu',
        natdex: 120,
    },
    {
        name: 'Starmie',
        natdex: 121,
    },
    {
        name: 'Mr. Mime',
        natdex: 122,
        formes: [
            {
                name: 'Galarian Mr. Mime',
                index: 1
            }
        ]
    },
    {
        name: 'Scyther',
        natdex: 123,
    },
    {
        name: 'Jynx',
        natdex: 124,
    },
    {
        name: 'Electabuzz',
        natdex: 125,
    },
    {
        name: 'Magmar',
        natdex: 126,
    },
    {
        name: 'Pinsir',
        natdex: 127,
        formes: [
            {
                name: 'Mega-Pinsir',
                index: 1
            }
        ]
    },
    {
        name: 'Tauros',
        natdex: 128,
        formes: [
            {
                name: 'Paldean Tauros',
                index: 1
            },
            {
                name: 'Paldean Tauros (Blaze Breed)',
                index: 2
            },
            {
                name: 'Paldean Tauros (Aqua Breed)',
                index: 3
            }
        ]
    },
    {
        name: 'Magikarp',
        natdex: 129,
    },
    {
        name: 'Gyarados',
        natdex: 130,
    },
    {
        name: 'Lapras',
        natdex: 131,
    },
    {
        name: 'Ditto',
        natdex: 132,
    },
    {
        name: 'Eevee',
        natdex: 133,
    },
    {
        name: 'Vaporeon',
        natdex: 134,
    },
    {
        name: 'Jolteon',
        natdex: 135,
    },
    {
        name: 'Flareon',
        natdex: 136,
    },
    {
        name: 'Porygon',
        natdex: 137,
    },
    {
        name: 'Omanyte',
        natdex: 138,
    },
    {
        name: 'Omastar',
        natdex: 139,
    },
    {
        name: 'Kabuto',
        natdex: 140,
    },
    {
        name: 'Kabutops',
        natdex: 141,
    },
    {
        name: 'Aerodactyl',
        natdex: 142,
        formes: [
            {
                name: 'Mega-Aerodactyl',
                index: 1
            }
        ]
    },
    {
        name: 'Snorlax',
        natdex: 143,
    },
    {
        name: 'Articuno',
        natdex: 144,
        formes: [
            {
                name: 'Galarian Articuno',
                index: 1
            }
        ]
    },
    {
        name: 'Zapdos',
        natdex: 145,
        formes: [
            {
                name: 'Galarian Zapdos',
                index: 1
            }
        ]
    },
    {
        name: 'Moltres',
        natdex: 146,
        formes: [
            {
                name: 'Galarian Moltres',
                index: 1
            }
        ]
    },
    {
        name: 'Dratini',
        natdex: 147,
    },
    {
        name: 'Dragonair',
        natdex: 148,
    },
    {
        name: 'Dragonite',
        natdex: 149,
    },
    {
        name: 'Mewtwo',
        natdex: 150,
        formes: [
            {
                name: 'Mega-Mewtwo X',
                index: 1
            },
            {
                name: 'Mega-Mewtwo Y',
                index: 1
            }
        ]
    },
    {
        name: 'Mew',
        natdex: 151,
    },
    // Johto
    {
        name: 'Chikorita',
    },
    {
        name: 'Bayleef',
    },
    {
        name: 'Meganium',
    },
    {
        name: 'Cyndaquil',
    },
    {
        name: 'Quilava',
    },
    {
        name: 'Typholsion',
        formes: [
            {
                name: 'Hisuian Typhlosion',
            },
        ]
    },
    {
        name: 'Tododile',
    },
    {
        name: 'Croconaw',
    },
    {
        name: 'Feraligatr',
    },
    {
        name: 'Sentret',
    },
    {
        name: 'Furret',
    },
    {
        name: 'Hoothoot',
    },
    {
        name: 'Noctowl',
    },
    {
        name: 'Ledyba',
    },
    {
        name: 'Ledian',
    },
    {
        name: 'Spinarak',
    },
    {
        name: 'Ariados',
    },
    {
        name: 'Crobat',
    },
    {
        name: 'Chinchou',
    },
    {
        name: 'Lanturn',
    },
    {
        name: 'Pichu',
    },
    {
        name: 'Cleffa',
    },
    {
        name: 'Igglybuff',
    },
    {
        name: 'Togepi',
    },
    {
        name: 'Togetic',
    },
    {
        name: 'Natu',
    },
    {
        name: 'Xatu',
    },
    {
        name: 'Mareep',
    },
    {
        name: 'Flaafyy',
    },
    {
        name: 'Ampharos',
        formes: [
            {
                name: 'Mega-Ampharos'
            }
        ]
    },
    {
        name: 'Bellossom',
    },
    {
        name: 'Marill',
    },
    {
        name: 'Azumarill',
    },
    {
        name: 'Sudowoodo',
    },
    {
        name: 'Politoed',
    },
    {
        name: 'Hoppip',
    },
    {
        name: 'Skiploom',
    },
    {
        name: 'Jumpluff',
    },
    {
        name: 'Aipom',
    },
    {
        name: 'Sunkern',
    },
    {
        name: 'Sunflora',
    },
    {
        name: 'Yanma',
    },
    {
        name: 'Wooper',
        formes: [
            {
                name: 'Paldean Wooper'
            }
        ]
    },
    {
        name: 'Quagsire'
    },
    {
        name: 'Espeon'
    },
    {
        name: 'Umbreon'
    },
    {
        name: 'Murkrow',
    },
    {
        name: 'Slowking',
        formes: [
            {
                name: 'Galarian Slowking'
            }
        ]
    },
    {
        name: 'Misreavus'
    },
    {
        name: 'Unown'
    },
    {
        name: 'Wobuffet'
    },
    {
        name: 'Girafarig'
    },
    {
        name: 'Pineco'
    },
    {
        name: 'Forretress'
    },
    {
        name: 'Dunsparce'
    },
    {
        name: 'Gligar'
    },
    {
        name: 'Steelix',
        formes: [
            {
                name: 'Mega-Steelix'
            }
        ]
    },
    {
        name: 'Snubbull'
    },
    {
        name: 'Granbull'
    },
    {
        name: 'Qwilfish',
        formes: [
            {
                name: 'Hisuian Qwilfish'
            }
        ]
    },
    {
        name: 'Scizor'
    },
    {
        name: 'Shuckle'
    },
    {
        name: 'Heracross',
        formes: [
            {
                name: 'Mega-Heracross'
            }
        ]
    },
    {
        name: 'Sneasel',
        formes: [
            {
                name: 'Hisuian Sneasel'
            }
        ]
    },
    {
        name: 'Teddiursa'
    },
    {
        name: 'Ursaring'
    },
    {
        name: 'Slugma'
    },
    {
        name: 'Magcargo'
    },
    {
        name: 'Swinub'
    },
    {
        name: 'Piloswine'
    },
    {
        name: 'Corsola',
        formes: [
            {
                name: 'Galarian Corsola'
            }
        ]
    },
    {
        name: 'Remoraid'
    },
    {
        name: 'Octillery'
    },
    {
        name: 'Delibird'
    },
    {
        name: 'Mantine'
    },
    {
        name: 'Skarmory',
    },
    {
        name: 'Houndour'
    },
    {
        name: 'Houndoom'
    },
    {
        name: 'Kingdra'
    },
    {
        name: 'Phanpy'
    },
    {
        name: 'Donphan'
    },
    {
        name: 'Porygon2'
    },
    {
        name: 'Stantler'
    },
    {
        name: 'Smeargle'
    },
    {
        name: 'Tyrogue'
    },
    {
        name: 'Hitmontop'
    },
    {
        name: 'Smoochum'
    },
    {
        name: 'Elekid'
    },
    {
        name: 'Magby'
    },
    {
        name: 'Miltank'
    },
    {
        name: 'Blissey'
    },
    {
        name: 'Raikou'
    },
    {
        name: 'Entei'
    },
    {
        name: 'Suicune'
    },
    {
        name: 'Larvitar'
    },
    {
        name: 'Pupitar'
    },
    {
        name: 'Tyranitar',
        formes: [
            {
                name: 'Mega-Tyranitar'
            }
        ]
    },
    {
        name: 'Lugia'
    },
    {
        name: 'Ho-oh'
    },
    {
        name: 'Celebi'
    },
    // Hoenn
    {
        name: 'Treecko'
    },
    {
        name: 'Grovyle'
    },
    {
        name: 'Sceptile',
        formes: [
            {
                name: 'Mega-Sceptile'
            }
        ]
    },
    {
        name: 'Torchic'
    },
    {
        name: 'Combusken'
    },
    {
        name: 'Blaziken',
        formes: [
            {
                name: 'Mega-Blaziken'
            }
        ]
    },
    {
        name: 'Mudkip'
    },
    {
        name: 'Marshtomp'
    },
    {
        name: 'Swampert',
        formes: [
            {
                name: 'Mega-Swampert'
            }
        ]
    },
    {
        name: 'Poochyena'
    },
    {
        name: 'Mightyena'
    },
    {
        name: 'Zigzagoon',
        formes: [
            {
                name: 'Galarian Zigzagoon'
            }
        ]
    },
    {
        name: 'Linoone',
        formes: [
            {
                name: 'Galarian Linoone'
            }
        ]
    },
    {
        name: 'Wurmple'
    },
    {
        name: 'Silcoon'
    },
    {
        name: 'Beautifly'
    },
    {
        name: 'Cascoon'
    },
    {
        name: 'Dustox'
    },
    {
        name: 'Lotad'
    },
    {
        name: 'Lombre'
    },
    {
        name: 'Ludicolo'
    },
    {
        name: 'Seedot'
    },
    {
        name: 'Nuzleaf'
    },
    {
        name: 'Shiftry'
    },
    {
        name: 'Taillow'
    },
    {
        name: 'Swellow'
    },
    {
        name: 'Wingull'
    },
    {
        name: 'Pelipper'
    },
    {
        name: 'Ralts'
    },
    {
        name: 'Kirlia'
    },
    {
        name: 'Gardevoir',
        formes: [
            {
                name: 'Mega-Gardevoir'
            }
        ]
    },
    {
        name: 'Surskit'
    },
    {
        name: 'Masequerain'
    },
    {
        name: 'Shroomish'
    },
    {
        name: 'Breloom'
    },
    {
        name: 'Slakoth',
    },
    {
        name: 'Vigoroth'
    },
    {
        name: 'Slaking'
    },
    {
        name: 'Nincada'
    },
    {
        name: 'Ninjask'
    },
    {
        name: 'Shedinja'
    },
    {
        name: 'Whismur'
    },
    {
        name: 'Loudred'
    },
    {
        name: 'Exploud'
    },
    {
        name: 'Makuhita'
    },
    {
        name: 'Hariyama'
    },
    {
        name: 'Azurill'
    },
    {
        name: 'Nosepass'
    },
    {
        name: 'Skitty'
    },
    {
        name: 'Delcatty'
    },
    {
        name: 'Sableye',
        formes: [
            {
                name: 'Mega-Sableye'
            }
        ]
    },
    {
        name: 'Mawile',
        formes: [
            {
                name: 'Mega-Mawile'
            }
        ]
    },
    {
        name: 'Aron'
    },
    {
        name: 'Lairon'
    },
    {
        name: 'Aggron',
        formes: [
            {
                name: 'Mega-Aggron'
            }
        ]
    },
    {
        name: 'Meditite'
    },
    {
        name: 'Medicham',
        formes: [
            {
                name: 'Mega-Medicham'
            }
        ]
    },
    {
        name: 'Electrike'
    },
    {
        name: 'Manectric',
        formes: [
            {
                name: 'Mega-Manectric'
            }
        ]
    },
    {
        name: 'Plusle'
    },
    {
        name: 'Minun'
    },
    {
        name: 'Volbeat'
    },
    {
        name: 'Illumise'
    },
    {
        name: 'Roselia'
    },
    {
        name: 'Gulpin'
    },
    {
        name: 'Swalot'
    },
    {
        name: 'Carvanha'
    },
    {
        name: 'Sharpedo',
        formes: [
            {
                name: 'Mega-Sharpedo'
            }
        ]
    },
    {
        name: 'Wailmer'
    },
    {
        name: 'Wailord'
    },
    {
        name: 'Numel'
    },
    {
        name: 'Camerupt',
        formes: [
            {
                name: 'Mega-Camerupt'
            }
        ]
    },
    {
        name: 'Torkoal'
    },
    {
        name: 'Spoink'
    },
    {
        name: 'Grumpig'
    },
    {
        name: 'Spinda'
    },
    {
        name: 'Trapinch'
    },
    {
        name: 'Vibrava'
    },
    {
        name: 'Flygon'
    },
    {
        name: 'Cacnea'
    },
    {
        name: 'Cacturne'
    },
    {
        name: 'Swablu'
    },
    {
        name: 'Altaria',
        formes: [
            {
                name: 'Mega-Altaria'
            }
        ]
    },
    {
        name: 'Zangoose'
    },
    {
        name: 'Seviper'
    },
    {
        name: 'Lunatone'
    },
    {
        name: 'Solrock'
    },
    {
        name: 'Barboach'
    },
    {
        name: 'Whiscash'
    },
    {
        name: 'Corphish'
    },
    {
        name: 'Crawdaunt'
    },
    {
        name: 'Baltoy'
    },
    {
        name: 'Claydol'
    },
    {
        name: 'Lileep'
    },
    {
        name: 'Cradily'
    },
    {
        name: 'Anorith'
    },
    {
        name: 'Armaldo'
    },
    {
        name: 'Feebas'
    },
    {
        name: 'Milotic'
    },
    {
        name: 'Castform',
        formes: [
            {
                name: 'Castform (Sunny)'
            },
            {
                name: 'Castform (Rainy)'
            },
            {
                name: 'Castform (Snowy)'
            }
        ]
    },
    {
        name: 'Kecleon'
    },
    {
        name: 'Shuppet'
    },
    {
        name: 'Banette',
        formes: [
            {
                name: 'Mega-Banette'
            }
        ]
    },
    {
        name: 'Duskull'
    },
    {
        name: 'Dusclops'
    },
    {
        name: 'Tropius'
    },
    {
        name: 'Chimecho'
    },
    {
        name: 'Absol',
        formes: [
            {
                name: 'Mega-Absol'
            }
        ]
    },
    {
        name: 'Wynaut'
    },
    {
        name: 'Snorunt'
    },
    {
        name: 'Glalie',
        formes: [
            {
                name: 'Mega Glalie'
            }
        ]
    },
    {
        name: 'Spheal'
    },
    {
        name: 'Sealeo'
    },
    {
        name: 'Walrein'
    },
    {
        name: 'Clamperl'
    },
    {
        name: 'Huntail'
    },
    {
        name: 'Gorebyss'
    },
    {
        name: 'Relicanth'
    },
    {
        name: 'Luvdisc'
    },
    {
        name: 'Bagon'
    },
    {
        name: 'Shelgon'
    },
    {
        name: 'Salamence',
        formes: [
            {
                name: 'Mega-Salamence'
            }
        ]
    },
    {
        name: 'Beldum'
    },
    {
        name: 'Metang'
    },
    {
        name: 'Metagross',
        formes: [
            {
                name: 'Mega-Metagross'
            }
        ]
    },
    {
        name: 'Regirock'
    },
    {
        name: 'Regice'
    },
    {
        name: 'Registeel'
    },
    {
        name: 'Latias',
        formes: [
            {
                name: 'Mega-Latias'
            }
        ]
    },
    {
        name: 'Latios',
        formes: [
            {
                name: 'Mega-Latios'
            }
        ]
    },
    {
        name: 'Kyogre',
        formes: [
            {
                name: 'Primal Kyogre'
            }
        ]
    },
    {
        name: 'Groudon',
        formes: [
            {
                name: 'Primal Groudon'
            }
        ]
    },
    {
        name: 'Rayquaza',
        formes: [
            {
                name: 'Mega-Rayquaza'
            }
        ]
    },
    {
        name: 'Jirachi'
    },
    {
        name: 'Deoxys',
        formes: [
            {
                name: 'Deoxys (Attack Forme)'
            },
            {
                name: 'Deoxys (Defense Forme)'
            },
            {
                name: 'Deoxys (Speed Forme)'
            }
        ]
    },
    // Sinnoh
    {
        name: 'Turtwig'
    },
    {
        name: 'Grotle'
    },
    {
        name: 'Torterra'
    },
    {
        name: 'Chimchar'
    },
    {
        name: 'Monferno'
    },
    {
        name: 'Infernape'
    },
    {
        name: 'Piplup'
    },
    {
        name: 'Prinplup'
    },
    {
        name: 'Empoleon'
    },
    {
        name: 'Starly'
    },
    {
        name: 'Staravia'
    },
    {
        name: 'Staraptor'
    },
    {
        name: 'Bidoof'
    },
    {
        name: 'Bibarel'
    },
    {
        name: 'Kricketot'
    },
    {
        name: 'Kricketune'
    },
    {
        name: 'Shinx'
    },
    {
        name: 'Luxio'
    },
    {
        name: 'Luxray'
    },
    {
        name: 'Budew'
    },
    {
        name: 'Roserade'
    },
    {
        name: 'Cranidos'
    },
    {
        name: 'Rampardos'
    },
    {
        name: 'Shieldon'
    },
    {
        name: 'Bastiodon'
    },
    {
        name: 'Burmy (Plant Cloak)',
        formes: [
            {
                name: 'Burmy (Sand Cloak)'
            },
            {
                name: 'Burmy (Trash Cloak)'
            }
        ]
    },
    {
        name: 'Wormadam (Plant Cloak)',
        formes: [
            {
                name: 'Wormadam (Sandy Cloak)'
            },
            {
                name: 'Wormadam (Trash Cloak)'
            }
        ]
    },
    {
        name: 'Mothim'
    },
    {
        name: 'Combee'
    },
    {
        name: 'Vespiquen'
    },
    {
        name: 'Pachirisu'
    },
    {
        name: 'Buizel'
    },
    {
        name: 'Floatzel'
    },
    {
        name: 'Cherubi'
    },
    {
        name: 'Cherrim (Overcast)',
        formes: [
            {
                name: 'Cherrim (Sunshine)'
            }
        ]
    },
    {
        name: 'Shellos (West Sea)',
        formes: [
            {
                name: 'Shellos (East Sea)'
            }
        ]
    },
    {
        name: 'Gastrodon (West Sea)',
        formes: [
            {
                name: 'Gastrodon (East Sea)'
            }
        ]
    },
    {
        name: 'Ambipom'
    },
    {
        name: 'Drifloon'
    },
    {
        name: 'Drifblim'
    },
    {
        name: 'Buneary'
    },
    {
        name: 'Lopunny',
        formes: [
            {
                name: 'Mega-Lopunny'
            }
        ]
    },
    {
        name: 'Mismagius'
    },
    {
        name: 'Honchkrow'
    },
    {
        name: 'Glameow'
    },
    {
        name: 'Purugly'
    },
    {
        name: 'Chingling'
    },
    {
        name: 'Stunky'
    },
    {
        name: 'Skuntank'
    },
    {
        name: 'Bronzor'
    },
    {
        name: 'Bronzong'
    },
    {
        name: 'Bosnly'
    },
    {
        name: 'Mime Jr.'
    },
    {
        name: 'Happiny'
    },
    {
        name: 'Chatot'
    },
    {
        name: 'Spiritomb'
    },
    {
        name: 'Gible'
    },
    {
        name: 'Gabite'
    },
    {
        name: 'Garchomp',
        formes: [
            {
                name: 'Mega-Garchomp'
            }
        ]
    },
    {
        name: 'Munchlax'
    },
    {
        name: 'Riolu'
    },
    {
        name: 'Lucario',
        formes: [
            {
                name: 'Mega-Lucario'
            }
        ]
    },
    {
        name: 'Hippopotas'
    },
    {
        name: 'Hippowdon'
    },
    {
        name: 'Skorupi'
    },
    {
        name: 'Drapion'
    },
    {
        name: 'Croagunk'
    },
    {
        name: 'Toxicroak'
    },
    {
        name: 'Carnivine'
    },
    {
        name: 'Finneon'
    },
    {
        name: 'Lumineon'
    },
    {
        name: 'Mantyke'
    },
    {
        name: 'Snover'
    },
    {
        name: 'Abomasnow',
        formes: [
            {
                name: 'Mega-Abomasnow'
            }
        ]
    },
    {
        name: 'Weavile'
    },
    {
        name: 'Magnezone'
    },
    {
        name: 'Lickilicky'
    },
    {
        name: 'Rhyperior'
    },
    {
        name: 'Tangrowth'
    },
    {
        name: 'Electivire'
    },
    {
        name: 'Magmortar'
    },
    {
        name: 'Togekiss'
    },
    {
        name: 'Yanmega'
    },
    {
        name: 'Leafeon'
    },
    {
        name: 'Glaceon'
    },
    {
        name: 'Gliscor'
    },
    {
        name: 'Mamoswine'
    },
    {
        name: 'Gallade'
    },
    {
        name: 'Porygon-Z'
    },
    {
        name: 'Probopass'
    },
    {
        name: 'Dusknoir'
    },
    {
        name: 'Frosslass'
    },
    {
        name: 'Rotom',
        formes: [
            {
                name: 'Heat Rotom'
            },
            {
                name: 'Wash Rotom'
            },
            {
                name: 'Frost Rotom'
            },
            {
                name: 'Fan Rotom'
            },
            {
                name: 'Mow Rotom'
            }
        ]
    },
    {
        name: 'Uxie'
    },
    {
        name: 'Mesprit'
    },
    {
        name: 'Azelf'
    },
    {
        name: 'Dialga',
        formes: [
            {
                name: 'Dialga (Origin Forme)'
            }
        ]
    },
    {
        name: 'Palkia',
        formes: [
            {
                name: 'Palkia (Origin Forme)'
            }
        ]
    },
    {
        name: 'Heatran'
    },
    {
        name: 'Regigigas'
    },
    {
        name: 'Giratina',
        formes: [
            {
                name: 'Giratina (Origin Forme)'
            }
        ]
    },
    {
        name: 'Cresselia'
    },
    {
        name: 'Phione'
    },
    {
        name: 'Manaphy'
    },
    {
        name: 'Darkrai'
    },
    {
        name: 'Shaymin',
        formes: [
            {
                name: 'Shaymin (Sky Forme)'
            }
        ]
    },
    {
        name: 'Arceus'
    },
    // Unova
    {
        name: 'Victini'
    },
    {
        name: 'Snivy'
    },
    {
        name: 'Servine'
    },
    {
        name: 'Serperior'
    },
    {
        name: 'Tepig'
    },
    {
        name: 'Pignite'
    },
    {
        name: 'Emboar'
    },
    {
        name: 'Oshawott'
    },
    {
        name: 'Dewott'
    },
    {
        name: 'Samurott',
        formes: [
            {
                name: 'Hisuian Samurott'
            }
        ]
    },
    {
        name: 'Patrat'
    },
    {
        name: 'Watchog'
    },
    {
        name: 'Lillipup'
    },
    {
        name: 'Herdier'
    },
    {
        name: 'Stoutland'
    },
    {
        name: 'Purrloin'
    },
    {
        name: 'Liepard'
    },
    {
        name: 'Pansage'
    },
    {
        name: 'Simisage'
    },
    {
        name: 'Pansear'
    },
    {
        name: 'Simisear'
    },
    {
        name: 'Panpour'
    },
    {
        name: 'Simipour'
    },
    {
        name: 'Munna'
    },
    {
        name: 'Musharna'
    },
    {
        name: 'Pidove'
    },
    {
        name: 'Tranquill'
    },
    {
        name: 'Unfezant'
    },
    {
        name: 'Blitzle'
    },
    {
        name: 'Zebstrika'
    },
    {
        name: 'Roggenrola'
    },
    {
        name: 'Boldore'
    },
    {
        name: 'Gigalith'
    },
    {
        name: 'Woobat'
    },
    {
        name: 'Swoobat'
    },
    {
        name: 'Drilbur'
    },
    {
        name: 'Excadrill'
    },
    {
        name: 'Audino'
    },
    {
        name: 'Timburr'
    },
    {
        name: 'Gurdurr'
    },
    {
        name: 'Conkeldurr'
    },
    {
        name: 'Tympole'
    },
    {
        name: 'Palpitoad'
    },
    {
        name: 'Seismitoad'
    },
    {
        name: 'Throh'
    },
    {
        name: 'Sawk'
    },
    {
        name: 'Sewaddle'
    },
    {
        name: 'Swadloon'
    },
    {
        name: 'Leavanny'
    },
    {
        name: 'Venipede'
    },
    {
        name: 'Whirlipede'
    },
    {
        name: 'Scolipede'
    },
    {
        name: 'Cottonee'
    },
    {
        name: 'Whimsicott'
    },
    {
        name: 'Petlil'
    },
    {
        name: 'Lilligant',
        formes: [
            {
                name: 'Hisuian Lilligant'
            }
        ]
    },
    {
        name: 'Basculin (Red Stripe)',
        formes: [
            {
                name: 'Basculin (Blue Stripe)'
            },
            {
                name: 'Basculin (White Stripe)'
            }
        ]
    },
    {
        name: 'Sandile'
    },
    {
        name: 'Krokorok'
    },
    {
        name: 'Krookodile'
    },
    {
        name: 'Darumaka',
        formes: [
            {
                name: 'Galarian Darumaka'
            }
        ]
    },
    {
        name: 'Darminitan',
        formes: [
            {
                name: 'Darminitan (Zen Mode)'
            },
            {
                name: 'Galarian Darminitan'
            },
            {
                name: 'Galarian Darminitan (Zen Mode)'
            }
        ]
    },
    {
        name: 'Maractus'
    },
    {
        name: 'Dwebble'
    },
    {
        name: 'Crustle'
    },
    {
        name: 'Scraggy'
    },
    {
        name: 'Scrafty'
    },
    {
        name: 'Sigilyph'
    },
    {
        name: 'Yamask',
        formes: [
            {
                name: 'Galarian Yamask'
            }
        ]
    },
    {
        name: 'Cofagrigus'
    },
    {
        name: 'Tirtouga'
    },
    {
        name: 'Carracosta'
    },
    {
        name: 'Archen'
    },
    {
        name: 'Archeops'
    },
    {
        name: 'Trubbish'
    },
    {
        name: 'Garbodor'
    },
    {
        name: 'Zorua',
        formes: [
            {
                name: 'Hisuian Zorua'
            }
        ]
    },
    {
        name: 'Zoroark',
        formes: [
            {
                name: 'Hisuian Zoroark'
            }
        ]
    },
    {
        name: 'Minccino'
    },
    {
        name: 'Cinccino'
    },
    {
        name: 'Gothita'
    },
    {
        name: 'Gothorita'
    },
    {
        name: 'Gothitelle'
    },
    {
        name: 'Solosis'
    },
    {
        name: 'Duosion'
    },
    {
        name: 'Reuniclus'
    },
    {
        name: 'Ducklett'
    },
    {
        name: 'Swanna'
    },
    {
        name: 'Vanillite'
    },
    {
        name: 'Vanillish'
    },
    {
        name: 'Vanilluxe'
    },
    {
        name: 'Deerling (Spring Form)',
        formes: [
            {
                name: 'Deerling (Summer Form)'
            },
            {
                name: 'Deerling (Autumn Form)'
            },
            {
                name: 'Deerling (Winter Form)'
            }
        ]
    },
    {
        name: 'Sawsbuck (Spring Form)',
        formes: [
            {
                name: 'Sawsbuck (Summer Form)'
            },
            {
                name: 'Sawsbuck (Autumn Form)'
            },
            {
                name: 'Sawsbuck (Winter Form)'
            }
        ]
    },
    {
        name: 'Emolga'
    },
    {
        name: 'Karrablast'
    },
    {
        name: 'Escavalier'
    },
    {
        name: 'Foongus'
    },
    {
        name: 'Amoongus'
    },
    {
        name: 'Frillish-M',
        formes: [
            {
                name: 'Frillish-F'
            }
        ]
    },
    {
        name: 'Jellicent-M',
        formes: [
            {
                name: 'Jellicent-F'
            }
        ]
    },
    {
        name: 'Alomomola'
    },
    {
        name: 'Joltik'
    },
    {
        name: 'Galvantula'
    },
    {
        name: 'Ferroseed'
    },
    {
        name: 'Ferrothorn'
    },
    {
        name: 'Klink'
    },
    {
        name: 'Klang'
    },
    {
        name: 'Klinklang'
    },
    {
        name: 'Tynamo'
    },
    {
        name: 'Eelektrik'
    },
    {
        name: 'Eelektross'
    },
    {
        name: 'Elgyem'
    },
    {
        name: 'Beheeyem'
    },
    {
        name: 'Litwick'
    },
    {
        name: 'Lampent'
    },
    {
        name: 'Chandelure'
    },
    {
        name: 'Axew'
    },
    {
        name: 'Fraxure'
    },
    {
        name: 'Haxorus'
    },
    {
        name: 'Cubchoo'
    },
    {
        name: 'Beartic'
    },
    {
        name: 'Cryogonal'
    },
    {
        name: 'Shelmet'
    },
    {
        name: 'Accelgor'
    },
    {
        name: 'Stunfisk',
        formes: [
            {
                name: 'Galarian Stunfisk'
            }
        ]
    },
    {
        name: 'Mienfoo'
    },
    {
        name: 'Mienshao'
    },
    {
        name: 'Druddigon'
    },
    {
        name: 'Golett'
    },
    {
        name: 'Golurk'
    },
    {
        name: 'Pawniard'
    },
    {
        name: 'Bisharp'
    },
    {
        name: 'Bouffalant'
    },
    {
        name: 'Rufflet'
    },
    {
        name: 'Braviary',
        formes: [
            {
                name: 'Hisuian Braviary'
            }
        ]
    },
    {
        name: 'Vullaby'
    },
    {
        name: 'Mandibuzz'
    },
    {
        name: 'Heatmor'
    },
    {
        name: 'Durant'
    },
    {
        name: 'Deino'
    },
    {
        name: 'Zewilous'
    },
    {
        name: 'Hydreigon'
    },
    {
        name: 'Larvesta'
    },
    {
        name: 'Volcarona'
    },
    {
        name: 'Cobalion'
    },
    {
        name: 'Terrakion'
    },
    {
        name: 'Virizion'
    },
    {
        name: 'Tornadus (Incarnate Forme)',
        formes: [
            {
                name: 'Tornadus (Therian Forme)'
            }
        ]
    },
    {
        name: 'Thundurus (Incarnate Forme)',
        formes: [
            {
                name: 'Thundurus (Therian Forme)'
            }
        ]
    },
    {
        name: 'Reshiram'
    },
    {
        name: 'Zekrom'
    },
    {
        name: 'Landorus (Incarnate Forme)',
        formes: [
            {
                name: 'Landorus (Therian Forme)'
            }
        ]
    },
    {
        name: 'Kyurem',
        formes: [
            {
                name: 'White Kyurem'
            },
            {
                name: 'Black Kyurem'
            }
        ]
    },
    {
        name: 'Keldeo',
        formes: [
            {
                name: 'Keldeo (Resolute)'
            }
        ]
    },
    {
        name: 'Meloetta (Aria Forme)',
        formes: [
            {
                name: 'Meloetta (Pirouette Forme)'
            }
        ]
    },
    {
        name: 'Genesect'
    },
    // Kalos
    {
        name: 'Chespin'
    },
    {
        name: 'Quilladin'
    },
    {
        name: 'Chesnaught'
    },
    {
        name: 'Fennekin'
    },
    {
        name: 'Braxien'
    },
    {
        name: 'Delphox'
    },
    {
        name: 'Froakie'
    },
    {
        name: 'Frogadier'
    },
    {
        name: 'Greninja'
    },
    {
        name: 'Bunnelby'
    },
    {
        name: 'Diggersby'
    },
    {
        name: 'Fletchling'
    },
    {
        name: 'Fletchinder'
    },
    {
        name: 'Talonflame'
    },
    {
        name: 'Scatterbug'
    },
    {
        name: 'Spewpa'
    },
    {
        name: 'Vivillon'
    },
    {
        name: 'Litleo'
    },
    {
        name: 'Pyroar'
    },
    {
        name: 'Flabebe'
    },
    {
        name: 'Floette'
    },
    {
        name: 'Florges'
    },
    {
        name: 'Skiddo'
    },
    {
        name: 'Gogoat'
    },
    {
        name: 'Pancham'
    },
    {
        name: 'Pangoro'
    },
    {
        name: 'Furfrou'
    },
    {
        name: 'Espurr'
    },
    {
        name: 'Meowstic-M',
        formes: [
            {
                name: 'Meowstic-F'
            }
        ]
    },
    {
        name: 'Honedge'
    },
    {
        name: 'Doublade'
    },
    {
        name: 'Aegislash'
    },
    {
        name: 'Spritzee'
    },
    {
        name: 'Aromatisse'
    },
    {
        name: 'Swirlix'
    },
    {
        name: 'Slurpuff'
    },
    {
        name: 'Inkay'
    },
    {
        name: 'Malamar'
    },
    {
        name: 'Binacle'
    },
    {
        name: 'Barbaracle'
    },
    {
        name: 'Skrelp'
    },
    {
        name: 'Dragalge'
    },
    {
        name: 'Clauncher'
    },
    {
        name: 'Clawitzer'
    },
    {
        name: 'Helioptile'
    },
    {
        name: 'Heliolisk'
    },
    {
        name: 'Tyrunt'
    },
    {
        name: 'Tyrantrum'
    },
    {
        name: 'Amaura'
    },
    {
        name: 'Aurorus'
    },
    {
        name: 'Sylveon'
    },
    {
        name: 'Hawlucha'
    },
    {
        name: 'Dedenne'
    },
    {
        name: 'Carbink'
    },
    {
        name: 'Goomy'
    },
    {
        name: 'Sliggoo',
        formes: [
            {
                name: 'Hisuian Sliggoo'
            }
        ]
    },
        {
        name: 'Goodra',
        formes: [
            {
                name: 'Hisuian Goodra'
            }
        ]
    },
    {
        name: 'Klefki'
    },
    {
        name: 'Phantump'
    },
    {
        name: 'Trevenant'
    },
    {
        name: 'Pumpkaboo'
    },
    {
        name: 'Gourgeist'
    },
    {
        name: 'Bergmite'
    },
    {
        name: 'Avalugg',
        formes: [
            {
                name: 'Hisuian Avalugg'
            }
        ]
    },
    {
        name: 'Noibat'
    },
    {
        name: 'Noivern'
    },
    {
        name: 'Xerneas'
    },
    {
        name: 'Yveltal'
    },
    {
        name: 'Zygarde (50% Forme)',
        formes: [
            {
                name: 'Zygarde (10% Forme)'
            },
            {
                name: 'Zygarde (Complete Forme)'
            }
        ]
    },
    {
        name: 'Diancie'
    },
    {
        name: 'Hoopa (Confined)',
        formes: [
            {
                name: 'Hoopa (Unbound)'
            }
        ]
    },
    {
        name: 'Volcanion'
    },
    // Alola
    {
        name: 'Rowlet'
    },
    {
        name: 'Dartrix'
    },
    {
        name: 'Decidueye',
        formes: [
            {
                name: 'Hisuian Decidueye'
            }
        ]
    },
    {
        name: 'Litten'
    },
    {
        name: 'Torracat'
    },
    {
        name: 'Incineroar'
    },
    {
        name: 'Popplio'
    },
    {
        name: 'Brionne'
    },
    {
        name: 'Primarina'
    },
    {
        name: 'Pikipek'
    },
    {
        name: 'Trumbeak'
    },
    {
        name: 'Toucannon'
    },
    {
        name: 'Yungoos'
    },
    {
        name: 'Gumshoos'
    },
    {
        name: 'Grubbin'
    },
    {
        name: 'Charjabug'
    },
    {
        name: 'Vikavolt'
    },
    {
        name: 'Crabrawler'
    },
    {
        name: 'Crabominable'
    },
    {
        name: 'Oricorio (Baile Style)',
        formes: [
            {
                name: 'Oricorio (Pom-Pom Style)'
            },
            {
                name: 'Oricorio (Pa\'u Style)'
            },
            {
                name: 'Oricorio (Sensu Style)'
            }
        ]
    },
    {
        name: 'Cutiefly'
    },
    {
        name: 'Ribombee'
    },
    {
        name: 'Rockruff'
    },
    {
        name: 'Lycanroc',
        formes: [
            {
                name: 'Lycanroc (Midday)'
            },
            {
                name: 'Lycanroc (Midnight)'
            },
            {
                name: 'Lycanroc (Dusk)'
            }
        ]
    },
    {
        name: 'Wishiwashi',
        formes: [
            {
                name: 'Wishiwashi (Schooling)'
            }
        ]
    },
    {
        name: 'Mareanie'
    },
    {
        name: 'Toxapex'
    },
    {
        name: 'Mudbray'
    },
    {
        name: 'Mudsdale'
    },
    {
        name: 'Dewpider'
    },
    {
        name: 'Araquanid'
    },
    {
        name: 'Formantis'
    },
    {
        name: 'Lurantis'
    },
    {
        name: 'Morelull'
    },
    {
        name: 'Shiinotic'
    },
    {
        name: 'Salandit'
    },
    {
        name: 'Salazzle'
    },
    {
        name: 'Stufful'
    },
    {
        name: 'Bewear'
    },
    {
        name: 'Bounsweet'
    },
    {
        name: 'Steenee'
    },
    {
        name: 'Tsareena'
    },
    {
        name: 'Comfey'
    },
    {
        name: 'Oranguru'
    },
    {
        name: 'Passimian'
    },
    {
        name: 'Wimpod'
    },
    {
        name: 'Golisopod'
    },
    {
        name: 'Sandygast'
    },
    {
        name: 'Palossand'
    },
    {
        name: 'Pyukumuku'
    },
    {
        name: 'Type: Null'
    },
    {
        name: 'Silvally'
    },
    {
        name: 'Minior'
    },
    {
        name: 'Komala'
    },
    {
        name: 'Turtonator'
    },
    {
        name: 'Togedemaru'
    },
    {
        name: 'Mimikyu'
    },
    {
        name: 'Bruxish'
    },
    {
        name: 'Drampa'
    },
    {
        name: 'Dhelmise'
    },
    {
        name: 'Jamgmo-o'
    },
    {
        name: 'Hakamo-o'
    },
    {
        name: 'Kommo-o'
    },
    {
        name: 'Tapu Koko'
    },
    {
        name: 'Tapu Lele'
    },
    {
        name: 'Tapu Bulu'
    },
    {
        name: 'Tapu Fini'
    },
    {
        name: 'Cosmog'
    },
    {
        name: 'Cosmoem'
    },
    {
        name: 'Solgaleo'
    },
    {
        name: 'Lunala'
    },
    {
        name: 'Nihilego'
    },
    {
        name: 'Buzzwole'
    },
    {
        name: 'Pheromosa'
    },
    {
        name: 'Xurkitree'
    },
    {
        name: 'Celesteela'
    },
    {
        name: 'Kartana'
    },
    {
        name: 'Guzzlord'
    },
    {
        name: 'Necrozma',
        formes: [
            {
                name: 'Necrozma (Dusk Mane)'
            },
            {
                name: 'Necrozma (Dawn Wings)'
            }
        ]
    },
    {
        name: 'Magearna'
    },
    {
        name: 'Marshadow'
    },
    {
        name: 'Poipole'
    },
    {
        name: 'Naganadel'
    },
    {
        name: 'Stakataka'
    },
    {
        name: 'Blacephalon'
    },
    {
        name: 'Zeraora'
    },
    {
        name: 'Meltan'
    },
    {
        name: 'Melmetal'
    },
    // Galar
    {
        name: 'Grookey'
    },
    {
        name: 'Thwackey'
    },
    {
        name: 'Rillaboom'
    },
    {
        name: 'Scorbunny'
    },
    {
        name: 'Raboot'
    },
    {
        name: 'Cinderace'
    },
    {
        name: 'Sobble'
    },
    {
        name: 'Drizzile'
    },
    {
        name: 'Inteleon'
    },
    {
        name: 'Skwovet'
    },
    {
        name: 'Greedent'
    },
    {
        name: 'Rookidee'
    },
    {
        name: 'Corvisquire'
    },
    {
        name: 'Corviknight'
    },
    {
        name: 'Blipbug'
    },
    {
        name: 'Dottler'
    },
    {
        name: 'Orbeelte'
    },
    {
        name: 'Nickit'
    },
    {
        name: 'Thievul'
    },
    {
        name: 'Gossifleur'
    },
    {
        name: 'Eldegoss'
    },
    {
        name: 'Wooloo'
    },
    {
        name: 'Dubwool'
    },
    {
        name: 'Chewtle'
    },
    {
        name: 'Drednaw'
    },
    {
        name: 'Yamper'
    },
    {
        name: 'Boltund'
    },
    {
        name: 'Rolycoly'
    },
    {
        name: 'Carkol'
    },
    {
        name: 'Coalossal'
    },
    {
        name: 'Applin'
    },
    {
        name: 'Flapple'
    },
    {
        name: 'Appletun'
    },
    {
        name: 'Silicobra'
    },
    {
        name: 'Sandaconda'
    },
    {
        name: 'Cramorant'
    },
    {
        name: 'Arrokuda'
    },
    {
        name: 'Barraskewda'
    },
    {
        name: 'Toxel'
    },
    {
        name: 'Toxtricity (Amped)',
        formes: [
            {
                name: 'Toxtricity: (Low Key)'
            }
        ]
    },
    {
        name: 'Sizzlipede'
    },
    {
        name: 'Centiskorch'
    },
    {
        name: 'Clobbopus'
    },
    {
        name: 'Grapploct'
    },
    {
        name: 'Sinistea'
    },
    {
        name: 'Polteageist'
    },
    {
        name: 'Hatenna'
    },
    {
        name: 'Hattrem'
    },
    {
        name: 'Hatterene'
    },
    {
        name: 'Impidimp'
    },
    {
        name: 'Morgrem'
    },
    {
        name: 'Grimmsnarl'
    },
    {
        name: 'Obstagoon'
    },
    {
        name: 'Perrserker'
    },
    {
        name: 'Cursola'
    },
    {
        name: 'Sirfetch\'d'
    },
    {
        name: 'Mr. Rime'
    },
    {
        name: 'Runerigus'
    },
    {
        name: 'Milcery'
    },
    {
        name: 'Alcremie'
    },
    {
        name: 'Falinks'
    },
    {
        name: 'Pinchurchin'
    },
    {
        name: 'Snom'
    },
    {
        name: 'Frosmoth'
    },
    {
        name: 'Stonjourner'
    },
    {
        name: 'Eiscue (Ice Face)',
        formes: [
            {
                names: 'Eiscue (Noice Face)'
            }
        ]
    },
    {
        name: 'Indeedee-M',
        formes: [
            {
                name: 'Indeedee-F'
            }
        ]
    },
    {
        name: 'Morpeko'
    },
    {
        name: 'Cufant'
    },
    {
        name: 'Copperajah'
    },
    {
        name: 'Dracozolt'
    },
    {
        name: 'Arctozolt'
    },
    {
        name: 'Dracovish'
    },
    {
        name: 'Arcotvish'
    },
    {
        name: 'Duraludon'
    },
    {
        name: 'Dreepy'
    },
    {
        name: 'Drakloak'
    },
    {
        name: 'Dragapult'
    },
    {
        name: 'Zacian',
        formes: [
            {
                name: 'Zacian (Crowned Sword)'
            }
        ]
    },
    {
        name: 'Zamazenta',
        formes: [
            {
                name: 'Zamazenta (Crowned Shield)'
            }
        ]
    },
    {
        name: 'Eternatus'
    },
    {
        name: 'Kubfu'
    },
    {
        name: 'Urshifu (Single Strike Style)',
        formes: [
            {
                name: 'Urshifu (Rapid Strike Style)'
            }
        ]
    },
    {
        name: 'Zarude'
    },
    {
        name: 'Regieleki'
    },
    {
        name: 'Regidrago'
    },
    {
        name: 'Glastrier'
    },
    {
        name: 'Spectrier'
    },
    {
        name: 'Calyrex',
        formes: [
            {
                name: 'Calyrex (Ice Rider)'
            },
            {
                name: 'Calyrex (Shadow Rider)'
            }
        ]
    },
    // Hisui
    {
        name: 'Wyrdeer'
    },
    {
        name: 'Kleavor'
    },
    {
        name: 'Ursaluna',
        formes: [
            {
                name: 'Bloodmoon Ursaluna'
            }
        ]
    },
    {
        name: 'Basculegion-M',
        formes: [
            {
                name: 'Basculegion-F'
            }
        ]
    },
    {
        name: 'Sneasler'
    },
    {
        name: 'Overqwil'
    },
    {
        name: 'Enamorus (Incarnate Forme)',
        formes: [
            {
                name: 'Enamorus (Therian Forme)'
            }
        ]
    },
    // Paldea
    {
        name: 'Sprigatito'
    },
    {
        name: 'Floragato'
    },
    {
        name: 'Meowscarada'
    },
    {
        name: 'Fuecoco'
    },
    {
        name: 'Crocalor'
    },
    {
        name: 'Skeledirge'
    },
    {
        name: 'Quaxly'
    },
    {
        name: 'Quaxwell'
    },
    {
        name: 'Quaquaval'
    },
    {
        name: 'Lechonk'
    },
    {
        name: 'Oinkologne-M',
        formes: [
            {
                names: 'Oinkologne-F'
            }
        ]
    },
    {
        name: 'Taroundtula'
    },
    {
        name: 'Spidops'
    },
    {
        name: 'Nymble'
    },
    {
        name: 'Lokix'
    },
    {
        name: 'Pawmi'
    },
    {
        name: 'Pawmo'
    },
    {
        name: 'Pawmot'
    },
    {
        name: 'Tandemaus'
    },
    {
        name: 'Maushold (Family of Three)',
        formes: [
            {
                name: 'Maushold (Family of Four)'
            }
        ]
    },
    {
        name: 'Fidough'
    },
    {
        name: 'Dachsbun'
    },
    {
        name: 'Smoliv'
    },
    {
        name: 'Dolliv'
    },
    {
        name: 'Arboliva'
    },
    {
        name: 'Squawkabilly (Green Plumage)',
        formes: [
            {
                name: 'Squawkabilly (Blue Plumage)'
            },
            {
                name: 'Squawkabilly (Yellow Plumage)'
            },
            {
                name: 'Squawkabilly (White Plumage)'
            },
        ]
    },
    {
        name: 'Nacli'
    },
    {
        name: 'Naclstack'
    },
    {
        name: 'Garganacl'
    },
    {
        name: 'Charcadet'
    },
    {
        name: 'Armarouge'
    },
    {
        name: 'Ceruledge'
    },
    {
        name: 'Tadbulb'
    },
    {
        name: 'Bellibolt'
    },
    {
        name: 'Wattrel'
    },
    {
        name: 'Kilowattrel'
    },
    {
        name: 'Maschiff'
    },
    {
        name: 'Mabostiff'
    },
    {
        name: 'Shroodle'
    },
    {
        name: 'Grafaiai'
    },
    {
        name: 'Bramblin'
    },
    {
        name: 'Brambleghast'
    },
    {
        name: 'Toedscool'
    },
    {
        name: 'Toedscruel'
    },
    {
        name: 'Klawf'
    },
    {
        name: 'Capsakid'
    },
    {
        name: 'Scovillain'
    },
    {
        name: 'Rellor'
    },
    {
        name: 'Rabsca'
    },
    {
        name: 'Flittle'
    },
    {
        name: 'Espathra'
    },
    {
        name: 'Tinkatink'
    },
    {
        name: 'Tinkatuff'
    },
    {
        name: 'Tinkaton'
    },
    {
        name: 'Wiglett'
    },
    {
        name: 'Wugtrio'
    },
    {
        name: 'Bombirdier'
    },
    {
        name: 'Finizen'
    },
    {
        name: 'Palafin',
        formes: [
            {
                name: 'Palafin (Hero)'
            }
        ]
    },
    {
        name: 'Varoom'
    },
    {
        name: 'Revavroom'
    },
    {
        name: 'Cyclizar'
    },
    {
        name: 'Orthworm'
    },
    {
        name: 'Glimmet'
    },
    {
        name: 'Glimmora'
    },
    {
        name: 'Greavard'
    },
    {
        name: 'Houndstone'
    },
    {
        name: 'Flamigo'
    },
    {
        name: 'Cetoddle'
    },
    {
        name: 'Cetitan'
    },
    {
        name: 'Veluza'
    },
    {
        name: 'Dondozo'
    },
    {
        name: 'Tatsugiri (Curly)',
        formes: [
            {
                name: 'Tatsugiri (Droopy)'
            },
            {
                name: 'Tatsugiri (Stretchy)'
            }
        ]
    },
    {
        name: 'Annihilape'
    },
    {
        name: 'Clodsire'
    },
    {
        name: 'Farigiraf'
    },
    {
        name: 'Dudunsparce (Three-Segment)',
        formes: [
            {
                name: 'Dudunsparce (Four-Segment)'
            }
        ]
    },
    {
        name: 'Kingambit'
    },
    {
        name: 'Great Tusk'
    },
    {
        name: 'Scream Tail'
    },
    {
        name: 'Brute Bonnet'
    },
    {
        name: 'Flutter Mane'
    },
    {
        name: 'Slither Wing'
    },
    {
        name: 'Sandy Shocks'
    },
    {
        name: 'Iron Treads'
    },
    {
        name: 'Iron Bundle'
    },
    {
        name: 'Iron Hands'
    },
    {
        name: 'Iron Jugulis'
    },
    {
        name: 'Iron Moth'
    },
    {
        name: 'Iron Thorns'
    },
    {
        name: 'Frigibax'
    },
    {
        name: 'Arctibax'
    },
    {
        name: 'Baxcalibur'
    },
    {
        name: 'Gimmighoul (Chest)',
        formes: [
            {
                name: 'Gimmighoul (Roaming)'
            }
        ]
    },
    {
        name: 'Gholdengo'
    },
    {
        name: 'Wo-Chien'
    },
    {
        name: 'Chien-Pao'
    },
    {
        name: 'Ting-Lu'
    },
    {
        name: 'Chi-Yu'
    },
    {
        name: 'Roaring Moon'
    },
    {
        name: 'Iron Valliant'
    },
    {
        name: 'Koraidon'
    },
    {
        name: 'Miraidon'
    },
    {
        name: 'Walking Wake'
    },
    {
        name: 'Iron Leaves'
    },
    {
        name: 'Dipplin'
    },
    {
        name: 'Polchageist'
    },
    {
        name: 'Sinischa'
    },
    {
        name: 'Okidogi'
    },
    {
        name: 'Munkidori'
    },
    {
        name: 'Fezandipiti'
    },
    {
        name: 'Ogerpon (Teal Mask)',
        formes: [
            {
                name: 'Ogerpon (Wellspring Mask)'
            },
            {
                name: 'Ogerpon (Hearthflame Mask)'
            },
            {
                name: 'Ogerpon (Cornerstone Mask)'
            }
        ]
    },
    {
        name: 'Archaludon'
    },
    {
        name: 'Hydrapple'
    },
    {
        name: 'Gouging Fire'
    },
    {
        name: 'Raging Bolt'
    },
    {
        name: 'Iron Boulder'
    },
    {
        name: 'Iron Crown'
    },
    {
        name: 'Terapagos',
        formes: [
            {
                name: 'Terapagos (Terastal Forme)'
            }
        ]
    },
    {
        name: 'Pecharunt'
    }
]

for(let i = 0; i < SPECIES.length; i++){
    /**
     * @param {Pokemon} species 
     */
    const makeSpeciesOption = (species) => {
        const opt = document.createElement("option");
        opt.classList.add('monOption');
        opt.id = species.name;
        opt.innerHTML = species.name;
        opt.setAttribute('number', species.number);
        document.getElementById("pokemonOptions").appendChild(opt);
    }
    const species = SPECIES[i];
    makeSpeciesOption({name: species.name, number: `${String(i+1).padStart(4, '0')}_${String(0).padStart(3, '0')}`});
    if(species.formes){
        for(let j = 0; j < species.formes.length; j++){
            const forme = species.formes[j];
            makeSpeciesOption({name: forme.name, number: `${String(i+1).padStart(4, '0')}_${String(j+1).padStart(3, '0')}`})
        }
    }
}

/**
 * An Item data structure
 * @typedef {Object} Item
 * @property {string} name - Item name
 * @property {string} type - Item Type (Held, Berry, etc)
 */

/** 
* @constant - List of all Held Items.
* @type {Item[]}
*/
const ITEMS = [
    {
        name: 'Ability Shield'
    },
    {
        name: 'Absorb Bulb'
    },
    {
        name: 'Adamant Crystal'
    },
    {
        name: 'Adamant Orb'
    },
    {
        name: 'Adrenaline Orb'
    },
    {
        name: 'Air Balloon'
    },
    {
        name: 'Amulet Coint'
    },
    {
        name: 'Assault Vest'
    },
    {
        name: 'Big Root'
    },
    {
        name: 'Big Nugget'
    },
    {
        name: 'Binding Band'
    },
    {
        name: 'Black Belt'
    },
    {
        name: 'Black Glasses'
    },
    {
        name: 'Black Sludge'
    },
    {
        name: 'Blunder Policy'
    },
    {
        name: 'Booster Energy'
    },
    {
        name: 'Bright Powder'
    },
    {
        name: 'Cell Battery'
    },
    {
        name: 'Charcoal'
    },
    {
        name: 'Choice Band'
    },
    {
        name: 'Choice Scarf'
    },
    {
        name: 'Choice Specs'
    },
    {
        name: 'Cleanse Tag'
    },
    {
        name: 'Clear Amulet'
    },
    {
        name: 'Cornerstone Mask'
    },
    {
        name: 'Covert Cloak'
    },
    {
        name: 'Damp Rock'
    },
    {
        name: 'Destiny Knot'
    },
    {
        name: 'Draco Plate'
    },
    {
        name: 'Dragon Fang'
    },
    {
        name: 'Dread Plate'
    },
    {
        name: 'Earth Plate'
    },
    {
        name: 'Eject Button'
    },
    {
        name: 'Eject Pack'
    },
    {
        name: 'Electric Seed'
    },
    {
        name: 'Eviolite'
    },
    {
        name: 'Expert Belt'
    },
    {
        name: 'Fairy Feather'
    },
    {
        name: 'Fist Plate'
    },
    {
        name: 'Flame Orb'
    },
    {
        name: 'Flame Plate'
    },
    {
        name: 'Float Stone'
    },
    {
        name: 'Focus Band'
    },
    {
        name: 'Focus Sash'
    },
    {
        name: 'Full Incense'
    },
    {
        name: 'Grassy Seed'
    },
    {
        name: 'Grip Claw'
    },
    {
        name: 'Griseous Core'
    },
    {
        name: 'Griseous Orb'
    },
    {
        name: 'Hard Stone'
    },
    {
        name: 'Hearthflame Mask'
    },
    {
        name: 'Heavy Duty Boots'
    },
    {
        name: 'Icicle Plase'
    },
    {
        name: 'ICy Rock'
    },
    {
        name: 'Insect Plate'
    },
    {
        name: 'Iron Ball'
    },
    {
        name: 'King\'s Rock'
    },
    {
        name: 'Lagging Tail'
    },
    {
        name: 'Lax Incense'
    },
    {
        name: 'Leftovers'
    },
    {
        name: 'Life Orb'
    },
    {
        name: 'Light Ball'
    },
    {
        name: 'Light Clay'
    },
    {
        name: 'Loaded Dice'
    },
    {
        name: 'Luck Incense'
    },
    {
        name: 'Luminous Moss'
    },
    {
        name: 'Lustrous Globe'
    },
    {
        name: 'Lustrous Orb'
    },
    {
        name: 'Magnet'
    },
    {
        name: 'Meadow Plate'
    },
    {
        name: 'Mental Herb'
    },
    {
        name: 'Metal Coat'
    },
    {
        name: 'Metronome'
    },
    {
        name: 'Mind Place'
    },
    {
        name: 'Miracle Seed'
    },
    {
        name: 'Mirror Herb'
    },
    {
        name: 'Misty Seed'
    },
    {
        name: 'Muscle Band'
    },
    {
        name: 'Mystic Water'
    },
    {
        name: 'Never-Melt Ice'
    },
    {
        name: 'Normal Gem'
    },
    {
        name: 'Odd Incense'
    },
    {
        name: 'Pixie Plate'
    },
    {
        name: 'Poison Barb'
    },
    {
        name: 'Power Anklet'
    },
    {
        name: 'Power Band'
    },
    {
        name: 'Power Belt'
    },
    {
        name: 'Power Bracer'
    },
    {
        name: 'Power Herb'
    },
    {
        name: 'Power Lens'
    },
    {
        name: 'Power Weight'
    },
    {
        name: 'Protective Pads'
    },
    {
        name: 'Psychic Seed'
    },
    {
        name: 'Punching Glove'
    },
    {
        name: 'Purce Incense'
    },
    {
        name: 'Quick Claw'
    },
    {
        name: 'Razor Claw'
    },
    {
        name: 'Razor Fang'
    },
    {
        name: 'Red Card'
    },
    {
        name: 'Ring Target'
    },
    {
        name: 'Rock Incense'
    },
    {
        name: 'Rocky Helmet'
    },
    {
        name: 'Rose Incense'
    },
    {
        name: 'Rusted Shield'
    },
    {
        name: 'Rusted Sword'
    },
    {
        name: 'Safety Goggles'
    },
    {
        name: 'Scope Lens'
    },
    {
        name: 'Sea Incense'
    },
    {
        name: 'Sharp Beak'
    },
    {
        name: 'Shed Shell'
    },
    {
        name: 'Shell Bell'
    },
    {
        name: 'Silk Scarf'
    },
    {
        name: 'Silver Powder'
    },
    {
        name: 'Sky Plate'
    },
    {
        name: 'Smoke Ball'
    },
    {
        name: 'Smooth Rock'
    },
    {
        name: 'Snowball'
    },
    {
        name: 'Soft Sand'
    },
    {
        name: 'Soothe Bell'
    },
    {
        name: 'Soul Dew'
    },
    {
        name: 'Spell Tag'
    },
    {
        name: 'Spell Tag'
    },
    {
        name: 'Splash Plate'
    },
    {
        name: 'Spooky Plate'
    },
    {
        name: 'Sticky Barb'
    },
    {
        name: 'Stone Plate'
    },
    {
        name: 'Terrain Extender'
    },
    {
        name: 'Throat Spray'
    },
    {
        name: 'Toxic Orb'
    },
    {
        name: 'Toxic Plate'
    },
    {
        name: 'Twisted Spoon'
    },
    {
        name: 'Utility Umbrella'
    },
    {
        name: 'Wave Incense'
    },
    {
        name: 'Weakness Policy'
    },
    {
        name: 'Wellspring Mask'
    },
    {
        name: 'White Herb'
    },
    {
        name: 'Wide Lens'
    },
    {
        name: 'Wise Glasses'
    },
    {
        name: 'Zap Plate'
    },
    {
        name: 'Zoom Lens'
    },
    // Berries
    {
        name: 'Aguav Berry',
        type: 'Berry'
    },
    {
        name: 'Apicot Berry',
        type: 'Berry'
    },
    {
        name: 'Aspear Berry',
        type: 'Berry'
    },
    {
        name: 'Babiri Berry',
        type: 'Berry'
    },
    {
        name: 'Charti Berry',
        type: 'Berry'
    },
    {
        name: 'Cheri Berry',
        type: 'Berry'
    },
    {
        name: 'Chesto Berry',
        type: 'Berry'
    },
    {
        name: 'Chilan Berry',
        type: 'Berry'
    },
    {
        name: 'Chople Berry',
        type: 'Berry'
    },
    {
        name: 'Coba Berry',
        type: 'Berry'
    },
    {
        name: 'Colbur Berry',
        type: 'Berry'
    },
    {
        name: 'Custap Berry',
        type: 'Berry'
    },
    {
        name: 'Enigma Berry',
        type: 'Berry'
    },
    {
        name: 'Figy Berry',
        type: 'Berry'
    },
    {
        name: 'Ganlon Berry',
        type: 'Berry'
    },
    {
        name: 'Haban Berry',
        type: 'Berry'
    },
    {
        name: 'Iapapa Berry',
        type: 'Berry'
    },
    {
        name: 'Jacoba Berry',
        type: 'Berry'
    },
    {
        name: 'Kasib Berry',
        type: 'Berry'
    },
    {
        name: 'Kebia Berry',
        type: 'Berry'
    },
    {
        name: 'Kee Berry',
        type: 'Berry'
    },
    {
        name: 'Lansat Berry',
        type: 'Berry'
    },
    {
        name: 'Leppa Berry',
        type: 'Berry'
    },
    {
        name: 'Lum Berry',
        type: 'Berry'
    },
    {
        name: 'Mago Berry',
        type: 'Berry'
    },
    {
        name: 'Maranga Berry',
        type: 'Berry'
    },
    {
        name: 'Micle Berry',
        type: 'Berry'
    },
    {
        name: 'Occa Berry',
        type: 'Berry'
    },
    {
        name: 'Oran Berry',
        type: 'Berry'
    },
    {
        name: 'Passho Berry',
        type: 'Berry'
    },
    {
        name: 'Payapa Berry',
        type: 'Berry'
    },
    {
        name: 'Pecha Berry',
        type: 'Berry'
    },
    {
        name: 'Persim Berry',
        type: 'Berry'
    },
    {
        name: 'Rawst Berry',
        type: 'Berry'
    },
    {
        name: 'Rindo Berry',
        type: 'Berry'
    },
    {
        name: 'Roseli Berry',
        type: 'Berry'
    },
    {
        name: 'Rowap Berry',
        type: 'Berry'
    },
    {
        name: 'Salac Berry',
        type: 'Berry'
    },
    {
        name: 'Shuca Berry',
        type: 'Berry'
    },
    {
        name: 'Sitrus Berry',
        type: 'Berry'
    },
    {
        name: 'Starf Berry',
        type: 'Berry'
    },
    {
        name: 'Tanga Berry',
        type: 'Berry'
    },
    {
        name: 'Wiki Berry',
        type: 'Berry'
    },
    {
        name: 'Yache Berry',
        type: 'Berry'
    },
]

for(let i = 0; i < ITEMS.length; i++){
    /**
     * @param {Item} item
     */
    const makeItemOption = (item) => {
        const opt = document.createElement("option");
        opt.classList.add('itemOption');
        opt.id = item.name;
        opt.innerHTML = item.name;
        opt.key = item.name.toLowerCase().replaceAll(' ', '_').replaceAll('\'', '');
        opt.type = item.type
        document.getElementById("itemOptions").appendChild(opt);
    }
    const item = ITEMS[i];
    makeItemOption(item);
}
