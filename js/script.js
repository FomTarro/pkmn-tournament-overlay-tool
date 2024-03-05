/**
 * Connects to OBS using the settings input on the DOM.
 */
function connectToOBS() {
    OBS.checkConnectionStatus();
    const address = document.getElementById('address').value;
    const port = document.getElementById('port').value;
    const password = document.getElementById('password').value;
    const ws = `ws://${address.length > 0 ? address : 'localhost'}:${port}`;
    const errorIndicator = document.getElementById('obsError');
    OBS.connect(ws, password).then(o => {
        console.log('Connection to OBS successful!');
        errorIndicator.classList.add('connected');
        errorIndicator.classList.remove('disconnected');
        errorIndicator.innerText = 'No errors detected!';
    }).catch(e => {
        console.error('Unable to connect to OBS: ' + e);
        errorIndicator.classList.remove('connected');
        errorIndicator.classList.add('disconnected');
        errorIndicator.innerText = e
    });
}

/**
 * Creates DOM elements from template tags.
 */
function createFromTemplates(){
    const pairingsTemplate = document.getElementById("pairings_template_item");
    for(let i = 0; i < 32; i++){
        const item = pairingsTemplate.content.cloneNode(true).querySelector("li");
        const pairingsList = document.getElementById("pairingsList");
        const elements = item.querySelectorAll('*');
        for(let element of elements) {
            if (element.id) {
                element.id = element.id.replace('_x', `_${i}`);
            }
        }
        pairingsList.appendChild(item);
    }

    const standingsTemplate = document.getElementById("standings_template_item");
    for(let i = 0; i < 32; i++){
        const item = standingsTemplate.content.cloneNode(true).querySelector("li");
        const standingsList = document.getElementById("standingsList");
        const elements = item.querySelectorAll('*');
        for(let element of elements) {
            if (element.id) {
                element.id = element.id.replace('_x', `_${i}`);
            }
        }
        item.querySelector('select').setAttribute('standing', i+1);
        item.querySelector('select').setAttribute('ordinalToggle', 'standingsOrdinalToggle');
        standingsList.appendChild(item);
    }

    const monModuleTemplate = document.getElementById("mon_template_item");
    for(let j = 1; j <= 2; j++){
        for(let i = 6; i > 0; i--){
            const item = monModuleTemplate.content.cloneNode(true).querySelector(".monModule");
            const node = document.getElementById(`player_${j}_name`);
            const elements = item.querySelectorAll('*');
            const uuid = `p${j}_mon${i}`;
            for(let element of elements) {
                if(element.innerText && element.innerText === 'Mon #x'){
                    element.innerText = `Mon #${i}`
                }
                if (element.id) {
                    element.id = element.id.replace('_x', `_${uuid}`);
                }
                if(element.getAttribute('for')){
                    element.setAttribute('for', element.getAttribute('for').replace('_x', `_${uuid}`))
                }
            }
            node.after(item);
        }
    }
}

/**
 * Attaches event listeners to just about every relevant DOM element.
 */
function attachEventListeners(){

    /**
     * Removes a selected option from related dropdowns once it is selected.
     * @param {NodeListOf<Element>} elementList - List of dropdowns to filter.
     */
    const removeSelectedOptions = (elementList) => {
        const selected = [];
        for(let item of elementList){
            selected.push(item.selectedIndex)
        }
        for(let item of elementList){
            for(let i = 1; i < item.options.length; i++){
                if(selected.includes(i)){
                    item.options[i].classList.add("alreadySelected")
                }else{
                    item.options[i].classList.remove("alreadySelected")
                }
            }
        }
    }

    document.getElementById('monCountSlider').addEventListener('input', () => {
        const val = document.getElementById('monCountSlider').value
        const playerModules = document.querySelectorAll('.playerModule')
        for(let playerModule of playerModules){
           const monModules = playerModule.querySelectorAll('.monModule');
           for(let i = 0; i < monModules.length; i++){
               monModules[i].hidden = i >= val;
           }
        }
        document.getElementById('monCount').innerText = val;
    });

    // Hook up mon selection dropdowns
    const playerModules = document.querySelectorAll('.playerModule');
    for(let playerModule of playerModules){
        const jump = playerModule.querySelector('.player_link');
        jump?.addEventListener('click', () => {
            const playerFilter = document.getElementById('playerFilter');
            const playerSelector = playerModule.querySelector('.playerSelect');
            const selectedOption = playerSelector.options[playerSelector.options.selectedIndex];
            if(selectedOption && (selectedOption.value !== selectedOption.innerText)){
                playerFilter.value = selectedOption.innerText;
                filterPlayerTable()
            }
        })
        const monModules = playerModule.querySelectorAll('.monModule');
        for(let monModule of monModules){
            const monSelector = monModule.querySelector(".monSelect");
            const itemSelector = monModule.querySelector(".itemSelect");
            const faintedToggle = monModule.querySelector(".faintedToggle");
            const itemToggle = monModule.querySelector(".itemToggle");
            const teraToggle = monModule.querySelector(".teraToggle");
            const monIconEffect = document.getElementById('monIconEffect');
            const setItem = () => {
                const item = monSelector.options[monSelector.selectedIndex].getAttribute('item');
                itemSelector.value = item != undefined && item != null ? item : '';
            }
            const updateIcon = () => {
                const source = monModule.querySelector('.sourceSelect').value;
                // TODO: we can probably just slap the number on the option elements 
                // and not need to do this lookup-by-name
                const opt = document.getElementById(monSelector.value);
                const itemOpt = document.getElementById(itemSelector.value);
                const teraType = monSelector.options[monSelector.selectedIndex].getAttribute('tera') ?? undefined;
                const subOptions = monModule.querySelector('.monSubOptions');
                const dexNumber = opt ? opt.getAttribute('dexNumber') : 0;
                for(let subOption of subOptions.querySelectorAll('.monSubOption')){
                    if(dexNumber <= 0) {
                        subOption.checked = false;
                        subOption.disabled = true;
                        subOption.locked = true;
                    } else {
                        subOption.disabled = false;
                        subOption.locked = false;
                    }
                }
                // Disable all non-checked Tera toggles if any of them are checked
                const anyTeraToggled =  [...playerModule.querySelectorAll('.teraToggle')].find(t => t.checked)
                for(let otherToggle of playerModule.querySelectorAll('.teraToggle')){
                    otherToggle.disabled = otherToggle.locked || (anyTeraToggled && !otherToggle.checked);
                }

                const url = new URL(relativeToAbsolutePath('./frame.html'));
                url.searchParams.set('img', `poke_icon_${dexNumber}`)
                url.searchParams.set('fainted', faintedToggle.checked);
                if(itemOpt){
                    if(itemOpt.type === 'Berry'){
                        url.searchParams.set('item', `berry_icon_${itemOpt.key}`);
                    }else{
                        url.searchParams.set('item', `item_icon_${itemOpt.key}`);
                    }
                    url.searchParams.set('used', itemToggle.checked);
                }
                if(teraType && teraToggle.checked){
                    url.searchParams.set('tera', teraType.toLowerCase());
                }
                const effect = monIconEffect.value;
                url.searchParams.set('effect', effect);
                OBS.setBrowserSourceURL(source, url.toString())
                const icon = monModule.querySelector('.monIcon');
                if(icon){
                    icon.src = url.toString();
                    const description = `An icon of ${monSelector.value && monSelector.value.length > 0 && monSelector.selectedIndex > 0 ? 'the Pokemon '+ monSelector.value : 'a PokeBall'} holding ${itemSelector.value && itemSelector.value.length > 0 ?  'the ' + itemSelector.value : 'no'} item.`;
                    icon.title = description;
                } 
            }
            monSelector.addEventListener('change', setItem);
            monSelector.addEventListener('change', updateIcon);
            monSelector.addEventListener('change', () => 
            {
                const elementList = [...monModules].map(item => item.querySelector('.monSelect'));
                removeSelectedOptions(elementList);
            });
            faintedToggle.addEventListener('change', updateIcon);
            itemSelector.addEventListener('change', updateIcon);
            itemToggle.addEventListener('change', updateIcon);
            teraToggle.addEventListener('change', updateIcon);
            monIconEffect.addEventListener('change', updateIcon)
        }
        // Hook up button to fill all icons
        const fillButton = playerModule.querySelector('.fillButton');
        fillButton?.addEventListener('click', () => {
            for(let i = 0; i < monModules.length; i++){
                const monSelector = monModules[i].querySelector(".monSelect");
                if(monSelector.options.length > i && !monSelector.options[i+1].classList.contains('notRegistered')){
                    monSelector.options[i+1].selected = true;
                    const event = new Event('change');
                    monSelector.dispatchEvent(event);
                }
            }
        })
    }

    // Hook up scores
    const scoreModules = document.querySelectorAll('.scoreModule');
    for(let scoreModule of scoreModules){
        const score = scoreModule.querySelector('.scoreDisplay');
        const sourceSelector = scoreModule.querySelector('.sourceSelect');
        const incrementScore = (num) => {
            score.innerText = `${Math.round(Math.max(0, Number(score.innerText) + num))}`;
            OBS.setTextSourceText(sourceSelector.value, score.innerText);
        }
        const plus = scoreModule.querySelector('.plus');
        plus.addEventListener('click', () => {
            incrementScore(1);
        });
        const minus = scoreModule.querySelector('.minus');
        minus.addEventListener('click', () => {
            incrementScore(-1);
        })
    }

    // Hook up player selection dropdowns
    const nameModules = document.querySelectorAll('.nameModule');
    for(let nameModule of nameModules){
        const playerSelector = nameModule.querySelector('.playerSelect');
        const sourceSelector = nameModule.querySelector('.sourceSelect');
        const playerModule = nameModule.closest('.playerModule');
        const updatePlayer = () => {
            // If there's an associated Battle Module, update it
            if(playerModule){
                populatePlayerModule(playerModule, playerSelector.value);
            }
            // If there's an associated OBS output, update it
            if(sourceSelector){
                let prefix = '';
                let suffix = '';
                // If there's an associated Ordinal Toggle, check it
                const ordinalToggle = playerSelector.getAttribute('ordinalToggle');
                if(ordinalToggle && document.getElementById(ordinalToggle).checked){
                    prefix = `${applyOrdinalSuffix(playerSelector.getAttribute('standing'))} `;
                }
                // If there's an associated Score Module, check it
                const scoreField = playerSelector.getAttribute('scoreField');
                if(scoreField){
                    suffix = `0/0/0`
                }
                const selectedOption = playerSelector.options[playerSelector.options.selectedIndex];
                const playerName = (selectedOption && (selectedOption.value !== selectedOption.innerText)) ? selectedOption.innerText : "???";
                OBS.setTextSourceText(sourceSelector.value, `${prefix}${playerName}${suffix}`);
            }
        }

        // changed via dropdown
        playerSelector.addEventListener('change', () => {
            // Get root of this player selector's group, then find sibling selectors
            const elementList = [...playerSelector.closest('.section')?.querySelectorAll('.nameModule')].map(i => i.querySelector('.playerSelect'));
            removeSelectedOptions(elementList);
            if(playerModule){
                for(monSelect of playerModule.querySelectorAll('.monSelect')){
                    resetSelector(monSelect, true);
                }
            }
            updatePlayer();
        });
        // refreshed current player via save data changing
        playerSelector.addEventListener('refresh', () => {
            updatePlayer()
        });
    }


    // Hook up reset buttons
    const resetButtons = document.querySelectorAll('.resetButton');
    for(let resetButton of resetButtons){
        resetButton.addEventListener('click', () => {
            const parent = resetButton.closest('.playerModule');
            const childModules = parent.querySelectorAll('.monModule');
            for(let monModule of childModules){
                const monSelector = monModule.querySelector(".monSelect");
                const faintedToggle = monModule.querySelector('.faintedToggle');
                faintedToggle.checked = false;
                const itemUsedToggle = monModule.querySelector('.itemToggle');
                itemUsedToggle.checked = false;
                resetSelector(monSelector, true);
            }
        })
    }

    const resetRoundButton = document.querySelector('.resetRoundButton');
    resetRoundButton.addEventListener('click', () => {
        const description = [...resetRoundButton.querySelectorAll('li')].map(item => `• ${item.innerText}`).join('\n');
        if(window.confirm(`Do you really want to reset the round?\nThis action will do the following:\n${description}`)){
            const playerSelectors = document.getElementById('battle').querySelectorAll('.playerSelect');
            // Set both players to 'None'
            for(let playerSelector of playerSelectors){
                resetSelector(playerSelector, true);
            }
            const scoreModules = document.getElementById('battle').querySelectorAll('.scoreModule');
            for(let scoreModule of scoreModules){
                scoreModule.querySelector('.scoreDisplay').innerText = 0;
                const event = new Event('click');
                const button = scoreModule.querySelector('.minus');
                button.dispatchEvent(event);

            }
            // Effectively 'click' both reset buttons
            for(let resetButton of resetButtons){
                const event = new Event('click');
                resetButton.dispatchEvent(event);
            }
        }
    });

    // TODO: this should be "game", not "match"
    const resetMatchButton = document.querySelector('.resetMatchButton');
    resetMatchButton.addEventListener('click', () => {
        const description = [...resetMatchButton.querySelectorAll('li')].map(item => `• ${item.innerText}`).join('\n');
        if(window.confirm(`Do you really want to reset the game?\nThis action will do the following:\n${description}`)){
            // Effectively 'click' both reset buttons
            const event = new Event('click');
            for(let resetButton of resetButtons){
                resetButton.dispatchEvent(event);
            }
        }
    });

    const resetPairingsButton = document.querySelector('.resetPairingsButton');
    resetPairingsButton.addEventListener('click', () => {
        const description = [...resetPairingsButton.querySelectorAll('li')].map(item => `• ${item.innerText}`).join('\n');
        if(window.confirm(`Do you really want to reset the pairings display?\nThis action will do the following:\n${description}`)){
            // Effectively 'click' both reset buttons
            const pairingModules = pairingsList.querySelectorAll('.pairingsModule');
            for(let pairingModule of [...pairingModules]){
                for(let playerSelect of [...pairingModule.querySelectorAll('.playerSelect')]){
                    resetSelector(playerSelect, true);
                }
            }
        }
    });

    const resetStandingsButton = document.querySelector('.resetStandingsButton');
    resetStandingsButton.addEventListener('click', () => {
        const description = [...resetStandingsButton.querySelectorAll('li')].map(item => `• ${item.innerText}`).join('\n');
        if(window.confirm(`Do you really want to reset the standings display?\nThis action will do the following:\n${description}`)){
            const standingsList = document.getElementById('standingsList');
            for(let playerSelect of [...standingsList.querySelectorAll('.playerSelect')]){
                resetSelector(playerSelect, true);
            }
        }
    });

    // Hook up slider buttons
    const sliders = document.querySelectorAll('.slider');
    for(let slider of sliders){
        const incrementSlider = (num) => {
            const input = slider.querySelector('input');
            input.value = (Number(input.value) + num)
            const event = new Event('input');
            input.dispatchEvent(event);
            // 'change' event triggers a data save
            const change = new Event('change');
            input.dispatchEvent(change);
        }
        slider.querySelector('.plus')?.addEventListener('click', () => {
            incrementSlider(1);
        })
        slider.querySelector('.minus')?.addEventListener('click', () => {
            incrementSlider(-1);
        })
    }

    // Hook up Player Filter
    const playerFilter = document.getElementById('playerFilter');
    const filterPlayerTable = () => {
        let i = 0;
        const rows = document.getElementsByClassName('playerRow');
        for(let row of rows){
            const name = row.querySelector('.playerName');
            if(playerFilter.value && !name.value.toLowerCase().includes(playerFilter.value.toLowerCase())){
                row.hidden = true;
            }else{
                i++;
                row.hidden = false;
            }
        }
        document.getElementById('playerFilterTotal').innerText = i;
    }
    playerFilter.addEventListener('input', () => {
        filterPlayerTable()
    });
    playerFilter.addEventListener('change', () => {
        if(playerFilter.value){
            playerFilter.value = playerFilter.value.trim();
        }
        filterPlayerTable();
    });

    // Hook up Player Import
    document.getElementById('playerImport').addEventListener('input', async e => {
        try{
            const playerImportStatus = document.getElementById('playerImportStatus');
            const newPlayers = await importPlayersFromTOM(e.target.files[0], 
                {
                    abbreviateJuniors: document.getElementById('abbreviateJuniorsToggle').checked,
                    abbreviateSeniors: document.getElementById('abbreviateSeniorsToggle').checked,
                    abbreviateMasters: document.getElementById('abbreviateMastersToggle').checked,
                }
            );
            playerImportStatus.classList.add('connected');
            playerImportStatus.classList.remove('disconnected');
            playerImportStatus.innerText = `Successfully imported ${newPlayers.length} new players!`;
        }catch(ex){
            playerImportStatus.classList.remove('connected');
            playerImportStatus.classList.add('disconnected');
            playerImportStatus.innerText = 'Selected file is either malformed or not the ...roster.html file!';
        }
    });

    // Hook up Pairings/Pairings Import
    document.getElementById('pairingsImport').addEventListener('click', async () => {
        try{
            const file = await selectFile('tomDirectory');
            window.clearInterval(pairingsInterval);
            document.getElementById('pairingsImportFile').innerText = abridgeWord(file.name);
            const status = document.getElementById('pairingsImportStatus');
            try{
                await importPairingsFromTOM(file);
                status.classList.add('connected');
                status.classList.remove('disconnected');
                status.innerText = 'Successfully tracking live pairings!';
                document.getElementById('pairingsTrackingStop').disabled = false

            }catch(ex){
                status.classList.remove('connected');
                status.classList.add('disconnected');
                status.innerText = 'Selected file is either malformed or not the ...pairings.html file!';
            }
            pairingsInterval = watchFile(fileHandle, async (content) => {
                await importPairingsFromTOM(content)
            });
        }catch(ex){
            console.warn(ex);
        }
    });

    document.getElementById('pairingsTrackingStop').addEventListener('click', () => {
        if(pairingsInterval){
            window.clearInterval(pairingsInterval);
            standingsInterval = undefined;
            const status = document.getElementById('pairingsImportStatus');
            status.classList.remove('connected');
            status.classList.add('disconnected');
            status.innerText = 'Stopped tracking pairings.';
            document.getElementById('pairingsImportFile').innerText = '';
            document.getElementById('pairingsTrackingStop').disabled = true;
        }
    });

    // TODO: I think a lot of refactoring can happen 
    // around how names are displayed for all three module types (battle, standings, pairings)
    const updatePairingsSingle = () => {
        const sourceSelector = document.getElementById('pairingsSingleSource');
        const singleLine = document.getElementById('pairingsSingle');
        const splitter = document.getElementById('pairingsSingleSplitter')?.value ?? "";
        const pairingsModules = [...document.getElementById('pairingsList').querySelectorAll('.pairingsModule')];
        const pairings = [];
        const UNKNOWN_PLAYER = "???"
        for(let i = 0; i < pairingsModules.length; i++){
            if(!pairingsModules[i].hidden){
                const playerSelectors = [...pairingsModules[i].querySelectorAll('.playerSelect')];
                // P1
                const selectedOption1 = playerSelectors[0].options[playerSelectors[0].options.selectedIndex];
                const player1Name = (selectedOption1 && (selectedOption1.value !== selectedOption1.innerText)) ? selectedOption1.innerText : UNKNOWN_PLAYER;
                // P2
                const selectedOption2 = playerSelectors[1].options[playerSelectors[1].options.selectedIndex];
                const player2Name = (selectedOption2 && (selectedOption2.value !== selectedOption2.innerText)) ? selectedOption2.innerText : UNKNOWN_PLAYER;
                if(player1Name !== UNKNOWN_PLAYER && player2Name !== UNKNOWN_PLAYER){
                    pairings.push(`Table ${i+1}: ${player1Name} vs. ${player2Name} ${splitter} `);
                }
            }
        }
        const joined = pairings.join('');
        singleLine.value = joined.length > 0 ? joined : " ";
        OBS.setTextSourceText(sourceSelector.value, singleLine.value);
    }

    const pairingsModules = document.getElementById('pairingsList').querySelectorAll('.pairingsModule');
    for(let pairingsModule of pairingsModules){
        const updatePairingsPlayers = () => {
            if(!pairingsModule.hidden){
                const sourceSelector = pairingsModule.querySelector('.sourceSelect');
                const playerNames = [];
                const playerSelectors = pairingsModule.querySelectorAll('.playerSelect')
                for(let playerSelector of playerSelectors){
                    const selectedOption = playerSelector.options[playerSelector.options.selectedIndex];
                    const playerName = (selectedOption && (selectedOption.value !== selectedOption.innerText)) ? selectedOption.innerText : "???";
                    playerNames.push(playerName);
                }
                OBS.setTextSourceText(sourceSelector.value, playerNames.join(' vs. '));
            }
        }
        const playerSelectors = pairingsModule.querySelectorAll('.playerSelect')
        for(let playerSelector of playerSelectors){
            playerSelector.addEventListener('change', () => { 
                updatePairingsPlayers();
                updatePairingsSingle();
            });
            playerSelector.addEventListener('refresh', () => { 
                updatePairingsPlayers();
                updatePairingsSingle();
            });
        }
    }

    document.getElementById('pairingsSingleSplitter').addEventListener('change', () => {
        updatePairingsSingle();
    });

    document.getElementById('pairingsSlider').addEventListener('input', () => {
        const pairingsModules = document.getElementById('pairingsList').querySelectorAll('.pairingsModule');
        const val = document.getElementById('pairingsSlider').value
        for(let i = 0; i < pairingsModules.length; i++){
            pairingsModules[i].hidden = i >= val;
        }
        document.getElementById('pairingsCount').innerText = val;
        updatePairingsSingle();
    });

    // Hook up Standings/Standings Import
    document.getElementById('standingsImport').addEventListener('click', async () => {
        try{
            const file = await selectFile('tomDirectory');
            window.clearInterval(standingsInterval);
            document.getElementById('standingsImportFile').innerText = abridgeWord(file.name);
            const status = document.getElementById('standingsImportStatus');
            try{
                await importStandingsFromTOM(file);
                status.classList.add('connected');
                status.classList.remove('disconnected');
                status.innerText = 'Successfully tracking live standings!';
                document.getElementById('standingsTrackingStop').disabled = false

            }catch(ex){
                status.classList.remove('connected');
                status.classList.add('disconnected');
                status.innerText = 'Selected file is either malformed or not the ...standings.html file!';
            }
            standingsInterval = watchFile(fileHandle, async (content) => {
                await importStandingsFromTOM(content)
            });
        }catch(ex){
            console.warn(ex);
        }
    });

    document.getElementById('standingsTrackingStop').addEventListener('click', () => {
        if(standingsInterval){
            window.clearInterval(standingsInterval);
            standingsInterval = undefined;
            const status = document.getElementById('standingsImportStatus');
            status.classList.remove('connected');
            status.classList.add('disconnected');
            status.innerText = 'Stopped tracking standings.';
            document.getElementById('standingsImportFile').innerText = '';
            document.getElementById('standingsTrackingStop').disabled = true;
        }
    });

    const updateStandingsSingle = () => {
        const sourceSelector = document.getElementById('standingsSingleSource');
        const singleLine = document.getElementById('standingsSingle');
        const splitter = document.getElementById('standingsSingleSplitter')?.value ?? "";
        const includeOrdinal = document.getElementById('standingsSingleOrdinalToggle').checked;
        const standingsModules = [...document.getElementById('standingsList').querySelectorAll('.standingsModule')];
        const placements = [];
        for(let i = 0; i < standingsModules.length; i++){
            if(!standingsModules[i].hidden){
                const playerSelector = standingsModules[i].querySelector('.playerSelect')
                const placeSuffix = includeOrdinal ? applyOrdinalSuffix(i+1) + ' ' : '';
                const selectedOption = playerSelector.options[playerSelector.options.selectedIndex];
                const playerName = (selectedOption && (selectedOption.value !== selectedOption.innerText)) ? selectedOption.innerText : "???";
                if(playerName !== "???"){
                    placements.push(`${placeSuffix}${playerName} ${splitter} `);
                }
            }
        }
        const joined = placements.join('');
        singleLine.value = joined.length > 0 ? joined : " ";
        OBS.setTextSourceText(sourceSelector.value, singleLine.value);
        // const url = new URL(relativeToAbsolutePath('./ticker.html'));
        // url.searchParams.set('text', singleLine.value)
        // OBS.setBrowserSourceURL(sourceSelector.value, url.toString())
    }

    const standingsPlayerSelectors = document.getElementById('standingsList').querySelectorAll('.playerSelect');
    for(let playerSelector of standingsPlayerSelectors){
        playerSelector.addEventListener('change', () => { 
            updateStandingsSingle(); 
        });
        playerSelector.addEventListener('refresh', () => { 
            updateStandingsSingle(); 
        });
    }

    document.getElementById('standingsSingleSplitter').addEventListener('change', () => {
        updateStandingsSingle();
    });

    document.getElementById('standingsSingleOrdinalToggle').addEventListener('change', () => {
        updateStandingsSingle();
    });

    document.getElementById('standingsOrdinalToggle').addEventListener('change', () => {
        for(let playerSelector of standingsPlayerSelectors){
            const event = new Event('change');
            playerSelector.dispatchEvent(event);
        }
    });

    document.getElementById('standingsSlider').addEventListener('input', () => {
        const standingsModules = document.getElementById('standingsList').querySelectorAll('.standingsModule');
        const val = document.getElementById('standingsSlider').value
        for(let i = 0; i < standingsModules.length; i++){
            standingsModules[i].hidden = i >= val;
        }
        document.getElementById('standingsCount').innerText = val;
        updateStandingsSingle();
    });

    // Hook up Minimize Buttons
    const minimize = document.getElementsByClassName('minimizeButton');
    for(let button of minimize){
        button.addEventListener('click', () => {
            const target = button.getAttribute('minimize');
            const element = document.getElementById(target);
            element.hidden = !element.hidden;
            button.setAttribute('status', element.hidden ? 'off' : 'on');
        });
    }

    document.getElementById('connect').addEventListener('click', connectToOBS);
    const sceneSelectors = document.getElementsByClassName('sceneSelect');
    for(let sceneSelector of sceneSelectors){
        sceneSelector.addEventListener('change', () => {
            OBS.populateSourceOptionsFromScene(sceneSelector.value, sceneSelector.getAttribute('target'));
        });
    };
}

const SOURCE_SETTINGS_KEY = "tournament_overlay_settings";

function loadSourceSettings(){
    var settings = JSON.parse(localStorage.getItem(SOURCE_SETTINGS_KEY));
    const defaultSettings = {
        obsAddress: 'localhost',
        obsPort: 4455,
        obsPassword: '',
        battleScene: '',
        battleSources: [],
        pairingsScene: '',
        pairingsSources: [],
        pairingsSingleSource: '',
        standingsScene: '',
        standingsSources: [],
        standingsSingleSource: '',
    };
    settings = merge(defaultSettings, settings);

    document.getElementById('address').value = settings.obsAddress;
    document.getElementById('port').value = settings.obsPort;
    document.getElementById('password').value = settings.obsPassword;

    const battleScene = document.getElementById('battleSceneSelect');
    battleScene.value = settings.battleScene ? settings.battleScene : '';
    if(settings.battleSources){
        const playerModules = document.getElementsByClassName('playerModule');
        for(let i = 0; i < playerModules.length; i++){
            const playerModule = playerModules[i];
            const sources = settings.battleSources[i] ?  settings.battleSources[i] : [];
            const sourceSelectors = [...playerModule.querySelectorAll('.sourceSelect')];
            for(let j = 0; j < sourceSelectors.length; j++){
                sourceSelectors[j].value = sources[j] ? sources[j] : '';
                const event = new Event('change');
                sourceSelectors[j].dispatchEvent(event);
            }
        }
    }

    const standingScene = document.getElementById('standingsSceneSelect');
    standingScene.value = settings.standingsScene ?? '';
    if(settings.standingsSources){
        const standingsSourceSelectors = document.getElementById('standingsList').querySelectorAll('.sourceSelect');
        for(let i = 0; i < standingsSourceSelectors.length; i++){
            const source = settings.standingsSources[i] ?? '';
            standingsSourceSelectors[i].value = source;
            const event = new Event('change');
            standingsSourceSelectors[i].dispatchEvent(event);
        }
    }
    if(settings.standingsSingleSource){
        document.getElementById('standingsSingleSource').value = settings.standingsSingleSource;
    }

    const pairingsScene = document.getElementById('pairingsSceneSelect');
    pairingsScene.value = settings.pairingsScene ?? '';
    if(settings.pairingsSources){
        const pairingsSourceSelectors = document.getElementById('pairingsList').querySelectorAll('.sourceSelect');
        for(let i = 0; i < pairingsSourceSelectors.length; i++){
            const source = settings.pairingsSources[i] ?? '';
            pairingsSourceSelectors[i].value = source;
            const event = new Event('change');
            pairingsSourceSelectors[i].dispatchEvent(event);
        }
    }
    if(settings.pairingsSingleSource){
        document.getElementById('pairingsSingleSource').value = settings.pairingsSingleSource;
    }

    const sceneSelectors = document.getElementsByClassName('sceneSelect');
    for(let sceneSelector of sceneSelectors){
        const event = new Event('change');
        sceneSelector.dispatchEvent(event);
    }
}

function saveSourceSettings(){
    const settings = {
        obsAddress: 'localhost',
        obsPort: 4455,
        obsPassword: '',
        battleScene: undefined,
        battleSources: [],
        pairingsScene: undefined,
        pairingsSources: [],
        pairingsSingleSource: undefined,
        standingsScene: undefined,
        standingsSources: [],
        standingsSingleSource: undefined,
    };

    settings.obsAddress = document.getElementById('address').value;
    settings.obsPort = document.getElementById('port').value;
    settings.obsPassword = document.getElementById('password').value;

    const scene = document.getElementById('battleSceneSelect').value;
    settings.battleScene = scene;
    const playerModules = document.getElementsByClassName('playerModule');
    for(let playerModule of playerModules){
        const sourceSelectors = [...playerModule.querySelectorAll('.sourceSelect')];
        const sources = sourceSelectors.map(node => node.value);
        settings.battleSources.push(sources);
    }

    const standingsScene = document.getElementById('standingsSceneSelect').value;
    settings.standingsScene = standingsScene;
    const standingsSources = document.getElementById('standingsList').querySelectorAll('.sourceSelect');
    for(let source of standingsSources){
        settings.standingsSources.push(source.value)
    }
    settings.standingsSingleSource = document.getElementById('standingsSingleSource').value;

    const pairingsScene = document.getElementById('pairingsSceneSelect').value;
    settings.pairingsScene = pairingsScene;
    const pairingsSources = document.getElementById('pairingsList').querySelectorAll('.sourceSelect');
    for(let source of pairingsSources){
        settings.pairingsSources.push(source.value)
    }
    settings.pairingsSingleSource = document.getElementById('pairingsSingleSource').value;

    localStorage.setItem(SOURCE_SETTINGS_KEY, JSON.stringify(settings));
}

const GENERAL_SETTINGS_KEY = "tournament_overlay_general_settings";

function loadGeneralSettings(){
    var settings = JSON.parse(localStorage.getItem(GENERAL_SETTINGS_KEY));
    const defaultSettings = {
        abbreviateJuniors: false,
        abbreviateSeniors: false,
        abbreviateSeniors: false,
        pairingsSingleSplitter: '/',
        pairingsCount: 8,
        standingsIncludeOrdinal: true,
        standingsSingleIncludeOrdinal: true,
        standingsSingleSplitter: '/',
        standingsCount: 8,
        monsPerTeamCount: 4,
        monIconEffect: 'shadow',
    };
    settings = merge(defaultSettings, settings);

    const event = new Event('input');
    document.getElementById('abbreviateJuniorsToggle').checked = settings.abbreviateJuniors;
    document.getElementById('abbreviateSeniorsToggle').checked = settings.abbreviateSeniors;
    document.getElementById('abbreviateMastersToggle').checked = settings.abbreviateMasters;

    document.getElementById('pairingsSingleSplitter').value = settings.pairingsSingleSplitter ?? '/';
    document.getElementById('pairingsSlider').value = settings.pairingsCount ?? 8;
    document.getElementById('pairingsSlider').dispatchEvent(event);

    document.getElementById('standingsOrdinalToggle').checked = settings.standingsIncludeOrdinal;
    document.getElementById('standingsSingleOrdinalToggle').checked = settings.standingsSingleIncludeOrdinal;
    document.getElementById('standingsSingleSplitter').value = settings.standingsSingleSplitter ?? '/';
    document.getElementById('standingsSlider').value = settings.standingsCount ?? 8;
    document.getElementById('standingsSlider').dispatchEvent(event);

    document.getElementById('monCountSlider').value = settings.monsPerTeamCount ?? 4;
    document.getElementById('monCountSlider').dispatchEvent(event);

    document.getElementById('monIconEffect').value = settings.monIconEffect;
}

function saveGeneralSettings(){
    console.log("Saving...")
    const settings = {
        abbreviateJuniors: document.getElementById('abbreviateJuniorsToggle').checked,
        abbreviateSeniors: document.getElementById('abbreviateSeniorsToggle').checked,
        abbreviateMasters: document.getElementById('abbreviateMastersToggle').checked,
        pairingsSingleSplitter: document.getElementById('pairingsSingleSplitter').value,
        pairingsCount: document.getElementById('pairingsSlider').value,
        standingsIncludeOrdinal: document.getElementById('standingsOrdinalToggle').checked,
        standingsSingleIncludeOrdinal: document.getElementById('standingsSingleOrdinalToggle').checked,
        standingsSingleSplitter: document.getElementById('standingsSingleSplitter').value,
        standingsCount: document.getElementById('standingsSlider').value,
        monsPerTeamCount: document.getElementById('monCountSlider').value,
        monIconEffect: document.getElementById('monIconEffect').value,
    };
    localStorage.setItem(GENERAL_SETTINGS_KEY, JSON.stringify(settings));
}

let standingsInterval = undefined;
let pairingsInterval = undefined;
let connectionInterval = window.setInterval(OBS.checkConnectionStatus, 1000);
window.onload = async() => {
    document.getElementById('pokemonOptions').innerHTML = ''
    loadPokedex((species) => {
        const opt = document.createElement('option');
        opt.classList.add('monOption');
        opt.id = species.name;
        opt.innerHTML = species.name;
        opt.setAttribute('dexNumber', species.number);
        document.getElementById('pokemonOptions').appendChild(opt);
    });
    document.getElementById('itemOptions').innerHTML = ''
    loadItemdex((item) => {
        const opt = document.createElement('option');
        opt.classList.add('itemOption');
        opt.id = item.name;
        opt.innerHTML = item.name;
        opt.key = item.name.toLowerCase().replaceAll(' ', '_').replaceAll('\'', '');
        opt.type = item.type
        document.getElementById('itemOptions').appendChild(opt);
    });
    createFromTemplates();
    attachEventListeners();
    loadGeneralSettings();
    loadSourceSettings();
    loadPlayerList();
    connectToOBS();

    // Enable some sections if the browser supports their function

    if(window.showOpenFilePicker){
        for(let blocker of document.getElementsByClassName('notAvailable')){
            blocker.classList.add('hidden');
        }
    }

    // Attatch the Save triggers AFTER loading so as not to execute a ton of I/O as we load in.

    // Save settings every time we change a source setting
    const sourceSettings = document.getElementsByClassName('sourceSetting');
    for(let setting of sourceSettings){
        setting.addEventListener('change', () => {
            saveSourceSettings();
        });
    }

    // Save every time we change a general setting
    const generalSettings = document.getElementsByClassName('generalSetting');
    for(let setting of generalSettings){
        setting.addEventListener('change', () => {
            saveGeneralSettings();
        });
    }

}
const urlParams = new URLSearchParams(window.location.search);
if(urlParams.get('unown')){
    document.getElementsByTagName('body')[0].classList.add('unown');
}