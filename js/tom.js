const TOM = {
    /**
     * A player data structure.
     * @typedef {Object} RosterPlayer
     * @property {string} division - The division of the player (JR, SR, MA).
     * @property {string} name - Name of the player.
     */

    /**
     * A tournament roster data strcuture.
     * @typedef {Object} Roster
     * @property {RosterPlayer[]} players - The entire roster of the tourament.
     */

    /**
     * Parses the TOM ...roster.html file contents into JSON.
     * @param {string} fileContent - The contents of the TOM file.
     * @returns {Roster} The tournament roster.
     */
    parseRosterFile(fileContent){
        const result = {
            players: []
        };
        const el = document.createElement('html');
        el.innerHTML = fileContent;
        for(const table of el.getElementsByClassName('players_table')){
            for(const row of table.querySelectorAll('tr')){
                const cells = row.querySelectorAll('td');
                if(cells.length >= 2){
                    result.players.push({
                        name: cells[1].innerText,
                        division: cells[2].innerText
                    });
                }
            }
        }
        el.remove();
        return result;
    },

    /**
     * A player data structure.
     * @typedef {Object} StandingsPlayer
     * @property {number} standing - The player's current standing.
     * @property {string} name - Name of the player.
     * @property {number} flight - ???
     * @property {number} dropRound - The round the player dropped in, if any. Will be 0 if they haven't dropped.
     * @property {StandingsRecord} record - The player's overall record.
     * @property {number} points - The player's overall score.
     * @property {string} opponentsWinPercentage - The win percentage of this player's opponents.
     * @property {string} opponentsOpponentsWinPercentage - The win percentage of this player's opponents' opponents.
     */

    /**
     * @typedef {Object} StandingsRecord
     * @property {number} wins
     * @property {number} losses
     * @property {number} ties
     */

    /**
     * A tournament standings report data structure.
     * @typedef {Object} Standings
     * @property {number} currentRound - The current round this tournament is in.
     * @property {number} totalRounds - The total number of rounds in this tournament.
     * @property {StandingsPlayer[]} juniorsStandings - The relative standings of all Juniors-division players.
     * @property {StandingsPlayer[]} seniorsStandings - The relative standings of all Seniors-division players.
     * @property {StandingsPlayer[]} mastersStandings - The relative standings of all Masters-division players.
     * @property {StandingsPlayer[]} allStandings - The relative standings of all players.
     */
    
    /**
     * Parses the TOM ...standings.html file contents into JSON.
     * @param {string} fileContent - The contents of the TOM file.
     * @returns {Standings} The tournament standings.
     */
    parseStandingsFile(fileContent){
        const result = {
            currentRound: 0,
            totalRounds: 0,
            juniorsStandings: [],
            seniorsStandings: [],
            mastersStandings: [],
            allStandings: []
        }
        const el = document.createElement('html');
        el.innerHTML = fileContent;
        for(const table of el.getElementsByClassName('report')){
            const standings = [];
            for(const row of table.querySelectorAll('tr')){
                const cells = row.querySelectorAll('td');
                if(cells.length >= 8){
                    const recordNumbers = cells[4].innerText.match(/\d+/g);
                    const player = {
                        standing: Number(cells[0].innerText ?? 0),
                        name: cells[1].innerText?.replace('*', ''),
                        flight: Number(cells[2].innerText ?? 0),
                        dropRound: Number(cells[3].innerText ?? 0),
                        record: {
                            wins: Number(recordNumbers[0] ?? 0),
                            losses: Number(recordNumbers[1] ?? 0),
                            ties: Number(recordNumbers[2] ?? 0)
                        },
                        points: Number(cells[5].innerText ?? 0),
                        opponentsWinPercentage: Number(cells[6].innerText?.replace('%', '') ?? 0.00),
                        opponentsOpponentsWinPercentage: Number(cells[7].innerText.replace('%', '') ?? 0.00)
                    }
                    standings.push(player);
                }
            }
            const division = table.previousElementSibling?.innerText;
            if(division){
                if(division.includes('Master')){
                    result.mastersStandings = standings;
                    result.allStandings = standings;
                }else if(division.includes('Senior')){
                    result.seniorsStandings = standings;
                    result.allStandings = standings;
                }else if(division.includes('Junior')){
                    result.juniorsStandings = standings;
                    result.allStandings = standings;
                }else{
                    result.allStandings = standings;
                }
            }
            const rounds = el.querySelector('h3')?.innerText;
            if(rounds){
                const split = rounds.match(/\d+/g);
                if(split.length == 2){
                    result.currentRound = Number(split[0] ?? 0);
                    result.totalRounds = Number(split[1] ?? 0);
                }
            }
        }
        el.remove();
        return result;
    },

    /**
     * A tournament pairings report data structure.
     * @typedef {Object} Pairings
     * @property {number} currentRound - The current round this tournament is in.
     * @property {Pairing[]} pairings - The list of all pairings.
     */

    /**
     * A tournament standings report data structure.
     * @typedef {Object} Pairing
     * @property {number} table - The table of the pairing.
     * @property {string} player1 - The first player in the pairing.
     * @property {string} player2 - The second player inthe pairing.
     */

    /**
     * 
     * @param {string} fileContent 
     * @returns {Pairings}
     */
    parsePairingsFile(fileContent){
        const result = {
            currentRound: 0,
            pairings: []
        }
        const el = document.createElement('html');
        el.innerHTML = fileContent;
        const rows = el.querySelectorAll('table.report tbody tr');
        const map = new Map();
        for(let i = 1; i < rows.length; i++){
            const cells = rows[i].querySelectorAll('td');
            const table = Number(cells[0].innerText ?? 0);
            if(!map.has(table)){
                map.set(table, {
                    table: table,
                    player1: cells[1].innerText?.split('(')[0].trim(),
                    player2: cells[3].innerText?.split('(')[0].trim(),
                })
            }
        }
        result.currentRound = el.querySelector('h3').innerText.match(/\d+/g)[0];
        result.pairings = [...map.values()].sort((a, b) => a.table - b.table);
        el.remove();
        return result;
    }
}