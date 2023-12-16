/**
 * A player data structure
 * @typedef {Object} Player
 * @property {string} uuid - UUID for the player row
 * @property {string} name - Name of the player.
 * @property {string} mon1
 * @property {string} item1
 * @property {string} mon2
 * @property {string} item2
 * @property {string} mon3
 * @property {string} item3
 * @property {string} mon4
 * @property {string} item3
 * @property {string} mon5
 * @property {string} item5
 * @property {string} mon6
 * @property {string} item6
 */

/** 
* @constant - List of all players.
* @type {Player[]}
*/
let PLAYER_LIST = [];
const PLAYER_LIST_KEY = "tournament_overlay_players";
const PLAYER_NONE_VALUE = 'None';

document.getElementById("player_add").addEventListener('click', e => {
    addPlayer();
});

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        .replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
}

function loadPlayerList() {
    let loaded = JSON.parse(localStorage.getItem(PLAYER_LIST_KEY));
    loaded = loaded ? loaded : [];
    if (loaded.length > 0) {
        for (let player of loaded) {
            addPlayer(player);
        }
    } else {
        addPlayer()
    }
    const selectors = document.querySelectorAll('.playerSelect');
    for (let selector of selectors) {
        selector.value = PLAYER_NONE_VALUE;
        const event = new Event('refresh');
        selector.dispatchEvent(event);
    }
    document.getElementById('playerTotal').innerText = PLAYER_LIST.length;
}

function savePlayerList() {
    localStorage.setItem(PLAYER_LIST_KEY, JSON.stringify(PLAYER_LIST));
    const selectors = document.querySelectorAll('.playerSelect');
    for (let selector of selectors) {
        for (let player of PLAYER_LIST) {
            if (player.uuid === selector.value) {
                const event = new Event('refresh');
                selector.dispatchEvent(event);
            }
        }
    }
    document.getElementById('playerTotal').innerText = PLAYER_LIST.length;
}

/**
 * Creates a new player record
 * @param {Player} existingData Optional set of player data to load with
 */
function addPlayer(existingData) {
    const playerData = existingData ? existingData : {
        uuid: uuidv4(),
    };
    PLAYER_LIST.push(playerData);

    // Append a row to the table
    const template = document.getElementById("player_template_row");
    const header = document.getElementById("players_table_header");
    const row = template.content.cloneNode(true).querySelector("tr");
    header.after(row);

    // Update ID tokens in new row
    const elements = [row, ...row.querySelectorAll('*')];
    for(let element of elements) {
        if (element.id) {
            element.id = element.id.replace('_x_', `_${playerData.uuid}_`);
        }
    }

    // Add player to dashboard dropdowns
    const playerSelectors = document.getElementsByClassName("playerSelect");
    const opts = [];
    for (let selector of playerSelectors) {
        const opt = document.createElement('option');
        // opt.id = `player_${playerData.uuid}_option`;
        opt.value = playerData.uuid;
        opt.innerText = playerData.name;
        const optGroup = selector.querySelector('.optionContent');
        optGroup.insertBefore(opt, optGroup.firstChild);
        opts.push(opt);
    }

    // Hook up setting player name
    const nameInput = row.querySelector(`#player_${playerData.uuid}_name`);
    if (playerData.name) {
        nameInput.value = playerData.name;
    }
    nameInput.addEventListener('change', e => {
        playerData.name = e.target.value;
        for (let opt of opts) {
            opt.innerText = playerData.name;
        }
    });

    // Hook up setting team mons
    for (let monIndex = 1; monIndex <= 6; monIndex++) {
        const monInput = row.querySelector(`#player_${playerData.uuid}_mon_${monIndex}`);
        const validateMon = () => {
            const valid = [...document.getElementsByClassName('monOption')].find(opt => opt.id === monInput.value);
            if(!valid && monInput.value){
                monInput.classList.add('typo');
            }else{
                monInput.classList.remove('typo');
            }
        }
        if (playerData && playerData[`mon${monIndex}`]) {
            monInput.value = playerData[`mon${monIndex}`];
            validateMon();
        }
        monInput.addEventListener('change', e => {
            const entry = PLAYER_LIST.find(player => player.uuid === playerData.uuid)
            if (entry) {
                entry[`mon${monIndex}`] = e.target.value;
            }
            validateMon();
        });
        const itemInput = row.querySelector(`#player_${playerData.uuid}_mon_${monIndex}_item`);
        const validateItem = () => {
            const valid = [...document.getElementsByClassName('itemOption')].find(opt => opt.id === itemInput.value);
            if(!valid && itemInput.value){
                itemInput.classList.add('typo');
            }else{
                itemInput.classList.remove('typo');
            }
        }
        if (playerData && playerData[`item${monIndex}`]) {
            itemInput.value = playerData[`item${monIndex}`];
            validateItem();
        }
        if(itemInput){
            itemInput.addEventListener('change', e => {
                const entry = PLAYER_LIST.find(player => player.uuid === playerData.uuid)
                if (entry) {
                    entry[`item${monIndex}`] = e.target.value;
                }
                validateItem();
            });
        }
    }

    // Hook up delete button
    const deleteButton = row.querySelector(`#player_${playerData.uuid}_delete`);
    deleteButton.addEventListener('click', e => {
        for (let opt of opts) {
            opt.remove();
        }
        row.remove();
        const entry = PLAYER_LIST.findIndex(player => player.uuid === playerData.uuid);
        if (entry >= 0 && entry < PLAYER_LIST.length) {
            PLAYER_LIST.splice(entry, 1);
            savePlayerList();
        }
    });
    const inputs = [...row.querySelectorAll('select'), ...row.querySelectorAll('input')];
    for(let element of inputs){
        element.addEventListener('change', e => {
            savePlayerList();
        });
    }
    savePlayerList();
}

/**
 * Populates a given player module with details from the player table (name, team, etc).
 * @param {HTMLElement} element - The player module element.
 * @param {string} uuid - The UUID of the player to pull details for.
 * @returns 
 */
function populatePlayerModule(element, uuid) {
    const entry = PLAYER_LIST.find((p) => p.uuid === uuid);
    if (!entry) {
        console.warn(`No player with UUID ${uuid} found...`);
    }
    const modules = element.querySelectorAll('.monModule');
    for (let item of modules) {
        const monSelector = item.querySelector(".monSelect");
        const opts = monSelector.querySelectorAll(".monOption")
        for (let i = 1; i <= 6; i++) {
            const mon = entry ? entry[`mon${i}`] : undefined;
            if (mon) {
                opts[i].innerText = mon;
                opts[i].item = entry[`item${i}`];
                opts[i].hidden = false;
            } else {
                opts[i].hidden = true;
            }
        }
        const event = new Event('change');
        monSelector.dispatchEvent(event);
    }
}

/**
 * Imports new players from a TOM ...roster.html file.
 * @param {File} file 
 * @param {*} args 
 */
async function importPlayersFromTOM(file, args){
    const players = [];
    const content = await loadFile(file)
    if(!content.includes('Player Roster')){
        console.warn('Uploaded file is not the roster file...');
        throw 'Selected file is either malformed or not the ...roster.html file!'
    }else{
        const roster = TOM.parseRosterFile(content);
        for(let player of roster.players){
            const name = 
            ((args.abbreviateJuniors && player.division === 'JR')
            || (args.abbreviateSeniors && player.division === 'SR')
            || (args.abbreviateMasters && player.division === 'MA')) ?
            abbreviateName(player.name) : 
            player.name;
            players.push({
                uuid: uuidv4(),
                name: name,
            });
        }
    }
    const currentPlayerNames = PLAYER_LIST.map(player => player.name);
    const filtered = players.filter(player => !currentPlayerNames.includes(player.name));
    for(const player of filtered){
        addPlayer(player);
    }
    return filtered;
}

/**
 * Imports player standings from a TOM ...standings.html file.
 * @param {File} file 
 */
async function importStandingsFromTOM(file){
    const content = await loadFile(file);
    if(!content.includes('Standings - ')){
        throw 'Not a Standings File!'
    }
    const standings = TOM.parseStandingsFile(content);
    const standingsList = document.getElementById('standingsList')
    const standingModules = standingsList.querySelectorAll('.playerSelect');
    for(let i = 0; i < standingModules.length; i++){
        if(standings.allStandings.length > i){
            // TODO: this is kind of a kludge; necessary because we can abbreviate names even when TOM doesn't...
            const uuid = PLAYER_LIST.find(player => {
                return player.name &&
                (player.name.includes(standings.allStandings[i].name) 
                || abbreviateName(player.name).includes(abbreviateName(standings.allStandings[i].name)))
            })?.uuid;
            standingModules[i].value = uuid ? uuid : PLAYER_NONE_VALUE;
            const event = new Event('change');
            standingModules[i].dispatchEvent(event);
        }
    }

}

/**
 * 
 * @param {File} file 
 */
async function importPairingsFromTOM(file){
    const content = await loadFile(file);
    if(!content.includes('Pairings - ')){
        throw 'Not a Pairings File!'
    }
    const pairings = TOM.parsePairingsFile(content);
    console.log(pairings);
    const pairingsList = document.getElementById('pairingsList')
    const pairingModules = pairingsList.querySelectorAll('.pairingsModule');
    for(let i = 0; i < pairingModules.length; i++){
        if(pairings.pairings.length > i){
            const playerSelectors = pairingModules[i].querySelectorAll('.playerSelect');
            // TODO: this is kind of a kludge; necessary because we can abbreviate names even when TOM doesn't...
            const uuid1 = PLAYER_LIST.find(player => {
                return player.name &&
                (player.name.includes(pairings.pairings[i].player1) 
                || abbreviateName(player.name).includes(abbreviateName(pairings.pairings[i].player1)))
            })?.uuid;
            const uuid2 = PLAYER_LIST.find(player => {
                return player.name &&
                (player.name.includes(pairings.pairings[i].player2) 
                || abbreviateName(player.name).includes(abbreviateName(pairings.pairings[i].player2)))
            })?.uuid;
            playerSelectors[0].value = uuid1 ? uuid1 : PLAYER_NONE_VALUE;
            playerSelectors[1].value = uuid2 ? uuid2 : PLAYER_NONE_VALUE;
            const event = new Event('change');
            playerSelectors[0].dispatchEvent(event);
        }
    }
}