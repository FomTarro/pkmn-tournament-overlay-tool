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
 * @param {boolean} predicateFn - Should this list only include Restricted mons?
 * @returns {TournamentMetadata} - An array of usage stats for all mons in the field.
 */
function calculateUsageStatistics(teams, predicateFn){
    const allMons = []
    for(const player of teams){
        for(let i = 1; i <= 6; i++){
            allMons.push({
                name: player[`mon${i}`],
                item: player[`item${i}`]
            })
        }
    }
    const filteredMons = allMons.filter(mon => {
        if(mon.name && mon.name.length > 0){
            const monOpt = [...document.getElementById("pokemonOptions")
            .querySelectorAll('.monOption')]
            .find(el => el.innerHTML === mon.name && el.hasAttribute('dexNumber'));
            const itemOpt = [...document.getElementById('itemOptions')
            .querySelectorAll('.itemOption')]
            .find(el => el.innerHTML === mon.item)
            return monOpt && predicateFn(mon, monOpt, itemOpt);
        }else{
            return false;
        }
    });
    const totalMons = filteredMons.length;
    const uniqueMons = [...new Set(filteredMons.map(mon => mon.name))];
    const results = [];
    for(const mon of uniqueMons){
        const numMons = filteredMons.filter(m => m.name === mon).length;
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
    const populate = (predicateFn, sourceName, frame, limit) => {
        const allUsage = calculateUsageStatistics(PLAYER_LIST, predicateFn).usageStats.slice(0, limit);
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
    populate((mon, monOpt, itemOpt) => monOpt && monOpt.hasAttribute('restricted') == false, 'nonRestrictedUsageSource', 'nonRestrictedUsageFrame', document.getElementById('usageSlider').value);
    populate((mon, monOpt, itemOpt) => monOpt && monOpt.hasAttribute('restricted') == true, 'restrictedUsageSource', 'restrictedUsageFrame', document.getElementById('restrictedUsageSlider').value);
    populate((mon, monOpt, itemOpt) => {
        mon.name = itemOpt && itemOpt.hasAttribute('mega') ? itemOpt.getAttribute('mega') : mon.name;
        return mon.name.includes('-Mega');
    }, 'megaUsageSource', 'megaUsageFrame', document.getElementById('megaUsageSlider').value);
}