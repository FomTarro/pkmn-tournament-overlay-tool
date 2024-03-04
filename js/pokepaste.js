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
     * @param {string} text 
     * @return {PasteMon[]} - Array of mons in the Paste
     */
    parse(text){
        const lines = text.split('\r\n');
        const mons = [{}];
        for(const line of lines){
            if(line.startsWith('-')){
                // it's a move, we can skip
            }else if(line.startsWith("Ability")){
                // it's an ability, we can skip
            }else if(line.startsWith("Tera Type")){
                // it's tera type
                const split = line.split(':').map(item => item.trim());
                mons[mons.length-1].tera = split[1];
            }else if(line.length <= 0){
                // new mon
                mons.push({});
            }else{
                // it's mon name and item
                const split = line.split('@').map(item => item.trim());
                mons[mons.length-1].species = split[0].replace('(M)', '').replace('(F)', '').trim();
                if(split.length > 1){
                    mons[mons.length-1].item = split[1];
                }
            }
        }
        return mons;
    }
}