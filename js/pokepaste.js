const PokePaste = {

    /**
     * A Pokemon data structure for PokePaste.
     * @typedef {Object} PasteMon
     * @property {string} species - The mon Species.
     * @property {string} tera - The tera type.
     * @property {string} item - The held Item.
     */

    /**
     * Parses a PokePaste-styled text blob into a team.
     * @param {string} text - Paste-formatted text.
     * @return {PasteMon[]} - Array of mons in the Paste.
     */
    parse(text){
        const lines = text.split(/[\r\n|\r|\n]|(   )/g).map(str => str?.trim());
        const mons = [];
        for(const line of lines){
            if (line) {
                if (line.includes("Tera Type:")) {
                    // tera type
                    const split = line.split(':').map(item => item?.trim());
                    // console.log(split[1])
                    mons[mons.length - 1].tera = split[1];
                } else if (line.length <= 0) {
                } else if (line.startsWith("EVs:")) {
                } else if (line.startsWith("IVs:")) {
                } else if (line.endsWith("Nature")) {
                } else if (line.startsWith("Level:")) {
                } else if (line.startsWith("Ability")) {
                } else if (line.startsWith('-')) {
                } else if (line.startsWith('Shiny')){
                }else {
                    // it's mon name and item
                    mons.push({});
                    const split = line.split('@').map(item => item?.trim());
                    mons[mons.length - 1].species = split[0].replace('(M)', '').replace('(F)', '').trim();
                    if (split.length > 1) {
                        mons[mons.length - 1].item = split[1];
                    }
                }
            }
        }
        return mons.filter(mon => mon.species);
    }
}