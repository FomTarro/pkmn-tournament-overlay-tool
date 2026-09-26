/**
 * A meta data structure.
 * @typedef {Object} TournamentMetadata
 * @property {UsageStat[]} usageStats - Usage statistics of each mon in the tournament..
 * @property {number} uniqueMons - Number of unique mons in the tournament.

/**
 * A usage statistic data structure.
 * @typedef {Object} UsageStat
 * @property {string} mon - Species of the mon.
 * @property {string} dexNumber - Dex Number of the mon.
 * @property {number} percentageOfTeams - Usage percentage of a given mon.
 * @property {number} percentageOfAllMons - Usage percentage of a given mon.

/**
 * Calculates mon usage statistics for the given set of player teams.
 * @param {Player[]} teams - The list of all teams in the event.
 * @param {boolean} restricted - Should this list only include Restricted mons?
 * @returns {TournamentMetadata} - An array of usage stats for all mons in the field.
 */
function calculateUsageStatistics(teams, restricted){
    const filterByRestricted = restricted ?? false;
    const allMons = []
    for(const player of teams){
        allMons.push(player.mon1, player.mon2, player.mon3, player.mon4, player.mon5, player.mon6);
    }
    const filteredMons = allMons.filter(mon => {
        if(mon && mon.length > 0){
            const monOpt = [...document.getElementById("pokemonOptions")
                .getElementsByClassName('monOption')]
                .find(el => el.innerHTML === mon && el.hasAttribute('dexNumber'));
            return monOpt && monOpt.hasAttribute('restricted') == filterByRestricted;
        }else{
            return false;
        }
    });
    const totalMons = filteredMons.length;
    const uniqueMons = [...new Set(filteredMons)];
    const results = [];
    for(const mon of uniqueMons){
        const numMons = filteredMons.filter(m => m === mon).length;
        results.push({
            mon: mon,
            dexNumber: [...document.getElementById("pokemonOptions")
                .getElementsByClassName('monOption')]
                .find(el => el.innerHTML === mon && el.hasAttribute('dexNumber'))
                .getAttribute('dexNumber'),
            percentageOfTeams: ((numMons / teams.length) * 100),
            percentageOfAllMons: ((numMons / totalMons) * 100)
        });
    }
    const sorted = results.sort((a, b) => b.percentageOfTeams - a.percentageOfTeams)
    return {
        usageStats: sorted,
        uniqueMons: uniqueMons.length
    }
}

/**
 * Populates the Usage Statistic graphic
 */
function populateUsageDisplay(){
    const populate = (useRestricted, sourceName, frame, limit) => {
        const allUsage = calculateUsageStatistics(PLAYER_LIST, useRestricted).usageStats.slice(0, limit);
        const url = new URL(relativeToAbsolutePath('./frame.html'));
        for(const item of allUsage){
            url.searchParams.set(`${item.dexNumber}`, `${item.percentageOfTeams.toFixed(2)}`);
        }
        const usageIconEffect = document.getElementById('usageIconEffect');
        const effect = usageIconEffect.value;
        url.searchParams.set('effect', effect);
        const source = document.getElementById('usageModule').querySelector(`#${sourceName}`).value;
        document.getElementById('usageModule').querySelector(`#${frame}`).src = url;
        OBS.setBrowserSourceURL(source, url.toString())
    }
    populate(false, 'nonRestrictedUsageSource', 'nonRestrictedUsageFrame', document.getElementById('usageSlider').value);
    populate(true, 'restrictedUsageSource', 'restrictedUsageFrame', document.getElementById('restrictedUsageSlider').value);
}