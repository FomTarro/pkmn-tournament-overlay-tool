/**
 * A player data structure.
 * @typedef {Object} Player
 * @property {string} uuid - UUID for the player row
 * @property {string} name - Name of the player.
 * @property {string} mon1
 * @property {string} item1
 * @property {string} tera1
 * @property {string} mon2
 * @property {string} item2
 * @property {string} tera2
 * @property {string} mon3
 * @property {string} item3
 * @property {string} tera3
 * @property {string} mon4
 * @property {string} item4
 * @property {string} tera4
 * @property {string} mon5
 * @property {string} item5
 * @property {string} tera5
 * @property {string} mon6
 * @property {string} item6
 * @property {string} tera6
 */

/** 
* @constant - List of all players.
* @type {Player[]}
*/
let PLAYER_LIST = [];
const PLAYER_LIST_KEY = "tournament_overlay_players";

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
        resetSelector(selector);
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
 * Searches the player list for a player with a name or abbreviated name
 * that matches the provided string.
 * @param {string} name - The name to match.
 * @returns {Player | undefined} - the Player object if a match exists.
 */
function findPlayerByName(name) {
    return PLAYER_LIST.find(player => {
        return player.name &&
        (player.name.includes(name) 
        || abbreviateName(player.name).includes(abbreviateName(name)))
    })
}

/**
 * Searches the player list for a player with a UUID
 * that matches the provided string.
 * @param {string} uuid - The UUID to match.
 * @returns {Player | undefined} - the Player object if a match exists.
 */
function findPlayerByUuid(uuid) {
    return PLAYER_LIST.find(player => {
        return player.uuid &&
        (player.uuid === uuid)
    })
}

/**
 * Creates a new player record, and 
 * @param {Player} existingData Optional set of player data to load with
 */
function addPlayer(existingData) {
    const playerData = (existingData && existingData.uuid) ? existingData : {
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
        opt.classList.add('notranslate');
        const optGroup = selector.querySelector('.optionContent');
        optGroup.insertBefore(opt, optGroup.firstChild);
        opts.push(opt);
    }

    // Hook up setting player name
    const nameInput = row.querySelector(`#player_${playerData.uuid}_name`);
    if (playerData.name) {
        nameInput.value = playerData.name;
    }
    nameInput.addEventListener('change', () => {
        playerData.name = nameInput.value;
        for (let opt of opts) {
            opt.innerText = playerData.name;
        }
    });

    // Hook up setting team mons
    for (let monIndex = 1; monIndex <= 6; monIndex++) {
        const monInput = row.querySelector(`#player_${playerData.uuid}_mon_${monIndex}`);
        const validateMon = () => {
            validate(monInput)
        }
        if (playerData && playerData[`mon${monIndex}`]) {
            monInput.value = playerData[`mon${monIndex}`];
            validateMon();
        }
        if(monInput){
            monInput.addEventListener('change', () => {
                const entry = findPlayerByUuid(playerData.uuid)
                validateMon();
                if (entry) {
                    entry[`mon${monIndex}`] = monInput.value;
                }
            });
        }
        const itemInput = row.querySelector(`#player_${playerData.uuid}_mon_${monIndex}_item`);
        const validateItem = () => {
            validate(itemInput)
        }
        if (playerData && playerData[`item${monIndex}`]) {
            itemInput.value = playerData[`item${monIndex}`];
            validateItem();
        }
        if(itemInput){
            itemInput.addEventListener('change', () => {
                validateItem();
                const entry = findPlayerByUuid(playerData.uuid)
                if (entry) {
                    entry[`item${monIndex}`] = itemInput.value;
                }
            });
        }
        const teraInput = row.querySelector(`#player_${playerData.uuid}_mon_${monIndex}_tera`);
        const validateTera = () => {
            validate(teraInput)
        }
        if(playerData && playerData[`tera${monIndex}`]) {
            teraInput.value = playerData[`tera${monIndex}`];
            validateTera();
        }
        if(teraInput){
            teraInput.addEventListener('change', () => {
                validateTera();
                const entry = findPlayerByUuid(playerData.uuid)
                if (entry) {
                    entry[`tera${monIndex}`] = teraInput.value;
                }
            });
        }
    }

    // Hook up delete button
    const deleteButton = row.querySelector(`#player_${playerData.uuid}_delete`);
    deleteButton.addEventListener('click', () => {
        // Remove that option from all available selectors
        for (let opt of opts) {
            // Anywhere that this player is selected, reset that selection to 'None'
            if(opt.selected){
                resetSelector(opt.closest('select'), true)
            }
            opt.remove();
        }
        // Wipe the tabluar record
        row.remove();
        const entry = PLAYER_LIST.findIndex(player => player.uuid === playerData.uuid);
        if (entry >= 0 && entry < PLAYER_LIST.length) {
            PLAYER_LIST.splice(entry, 1);
            savePlayerList();
        }
    });
    
    // Save the list when any input is modified
    const inputs = [...row.querySelectorAll('select'), ...row.querySelectorAll('input')];
    for(let element of inputs){
        element.addEventListener('change', () => {
            savePlayerList();
        });
    }
    savePlayerList();
}

document.getElementById("player_add").addEventListener('click', () => { addPlayer() });

/**
 * Populates a given player module with details from the player table (name, team, etc).
 * @param {HTMLElement} element - The player module element.
 * @param {string} uuid - The UUID of the player to pull details for.
 * @returns 
 */
function populatePlayerModule(element, uuid) {
    const entry = findPlayerByUuid(uuid);
    if (!entry) {
        console.warn(`No player with UUID ${uuid} found...`);
    }
    const modules = element.querySelectorAll('.monModule');
    for (let item of modules) {
        const monSelector = item.querySelector('.monSelect');
        const opts = monSelector.querySelectorAll('.monOption')
        for (let i = 1; i <= 6; i++) {
            const mon = entry ? entry[`mon${i}`] : undefined;
            if (mon) {
                opts[i].innerText = mon;
                opts[i].setAttribute('species', mon);
                item = entry[`item${i}`];
                if(item){
                    opts[i].setAttribute('item', item);
                }
                tera = entry[`tera${i}`];
                if(tera){
                    opts[i].setAttribute('tera', tera);
                }
                opts[i].classList.remove('notRegistered')
            } else {
                opts[i].classList.add('notRegistered')
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
            const uuid = findPlayerByName(standings.allStandings[i].name)?.uuid;
            const selectedIndex = [...standingModules[i].options].findIndex(opt => opt.value === uuid);
            standingModules[i].options[selectedIndex > 0 ? selectedIndex : 0].selected = true;
            const event = new Event('change');
            standingModules[i].dispatchEvent(event);
        }
    }

}

/**
 * Imports player pairings from a TOM ...pairings.html file.
 * @param {File} file 
 */
async function importPairingsFromTOM(file){
    const content = await loadFile(file);
    if(!content.includes('Pairings - ')){
        throw 'Not a Pairings File!'
    }
    const pairings = TOM.parsePairingsFile(content);
    const pairingsList = document.getElementById('pairingsList')
    const pairingModules = pairingsList.querySelectorAll('.pairingsModule');
    for(let i = 0; i < pairingModules.length; i++){
        if(pairings.pairings.length > i){
            const playerSelectors = pairingModules[i].querySelectorAll('.playerSelect');
            const setPlayer = (playerName, selectorIndex) => {
                const uuid = findPlayerByName(playerName)?.uuid;
                const selectedIndex = [...playerSelectors[selectorIndex].options].findIndex(opt => opt.value === uuid);
                playerSelectors[selectorIndex].options[selectedIndex > 0 ? selectedIndex : 0].selected = true;
            }
            setPlayer(pairings.pairings[i].player1, 0);
            setPlayer(pairings.pairings[i].player2, 1);
            // Only need to dispatch an event to one of the two selectors to trigger a change.
            const event = new Event('change');
            playerSelectors[0].dispatchEvent(event);
        }
    }
}