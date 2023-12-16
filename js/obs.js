const OBS = {
    obs: new OBSWebSocket(),
    /**
     * Connects to OBS.
     * @param {string} address - The Websocket address to connect to.
     * @param {string} password - The optional password to use.
     * @returns 
     */
    connect(address, password){
        return OBS.obs.connect(address, password.length > 0 ? password : undefined);
    },
    checkConnectionStatus(){
        const statusIndicators = document.getElementsByClassName("obsStatus");
        OBS.obs.call("GetVersion").then(() => {
            for(let statusIndicator of statusIndicators){
                if(!statusIndicator.classList.contains("connected")){
                    statusIndicator.innerText = "🟢 Connected!"
                    statusIndicator.classList.remove("disconnected");
                    statusIndicator.classList.add("connected");
                }
            }
        }).catch(() => {
            for(let statusIndicator of statusIndicators){
                if(!statusIndicator.classList.contains("disconnected")){
                    statusIndicator.innerText = "🔴 Disconnected!"
                    statusIndicator.classList.add("disconnected");
                    statusIndicator.classList.remove("connected");
                    }
            }
        });
    },
    populateScenesOptionsFromOBS(){
        OBS.getAllScenes().then(scenes => {
            const sceneOptions = document.getElementById('sceneOptions');
            // clear current options
            sceneOptions.innerHTML = '';
            scenes.forEach(scene => {
                const option = document.createElement('option');
                option.textContent = scene;
                sceneOptions.appendChild(option);
            });
        })
    },

    /**
     * Populates the auto-complete suggestions on the DOM with the sources pulled from the given scene.
     * @param {string} sceneName - The name of the scene to pull sources from.
     */
    populateSourceOptionsFromScene(sceneName, target){
        const browserSourceOptions = document.getElementById(`browserSourceOptions_${target}`);
        if(browserSourceOptions){
            browserSourceOptions.innerHTML = '';
            OBS.getBrowserSourcesInScene(sceneName).then(list => {
                list.forEach(source => {
                    const option = document.createElement('option');
                    option.textContent = source;
                    browserSourceOptions.appendChild(option);
                })
            });
        }

        const textSourceOptions = document.getElementById(`textSourceOptions_${target}`);
        if(textSourceOptions){
            textSourceOptions.innerHTML = '';
            OBS.getTextSourcesInScene(sceneName).then(list => {
                list.forEach(source => {
                    const option = document.createElement('option');
                    option.textContent = source;
                    textSourceOptions.appendChild(option);
                })
            });
        }
    },

    /**
     * Types of sources found in OBS.
     */
    SOURCE_TYPE: {
        IMAGE: 'image_source',
        BROWSER: 'browser_source',
        TEXT: 'text_'
    },

    /**
     * Gets a list of all scene names in the collection.
     * @returns {Promise<string[]>} List of scene names.
     */
    async getAllScenes() {
        const results = await OBS.obs.call('GetSceneList');
        const mapped = results.scenes.map(scene => scene.sceneName);
        return mapped;
    },

    /**
     * Gets all sources from a given Group.
     * @param {string} groupName The name of thr groip to query. 
     * @returns List of source objects (not just names!)
     */
    async getSourcesInGroup(groupName) {
        const results = await OBS.obs.call('GetGroupSceneItemList', {
            sceneName: groupName
        });
        const mapped = results.sceneItems;
        return mapped;
    },

    /**
     * Gets the names of all sources of a given type in the specified scene.
     * @param {string} sourceType The type of source to select.
     * @param {string} sceneName The name of the scene to query.
     * @returns {Promise<string[]>} List of source names.
     */
    async getSourcesOfTypeInScene(sourceType, sceneName) {
        try{
            const results = await OBS.obs.call('GetSceneItemList', {
                sceneName: sceneName
            });
            // Get any sources that are groups
            const groups = results.sceneItems.filter(item => item.isGroup);
            const allItems = [...results.sceneItems];
            for(let group of groups){
                allItems.push(...await OBS.getSourcesInGroup(group.sourceName));
            }
            // Filter the pool of all sources
            const filtered = allItems.filter(
                (item) => item.inputKind && item.inputKind.includes(sourceType)).map(
                    (item) => item.sourceName);
            return filtered;
        }catch(e){
            console.warn(`Error fetching sources of type ${sourceType} from scene ${sceneName}: ${e}`);
            return [];
        }
    },

    /**
     * 
     * @param {string} sceneName The name of the scene to query.
     * @returns {Promise<string[]>} List of source names.
     */
    async getImageSourcesInScene(sceneName) {
        return await OBS.getSourcesOfTypeInScene(OBS.SOURCE_TYPE.IMAGE, sceneName);
    },

    /**
     * 
     * @param {string} sourceName The name of the image source to update.
     * @param {string} filePath Absolute filepath to set the source to.
     */
    async setImageSourceFilePath(sourceName, filePath) {
        try{
            await OBS.obs.call('SetInputSettings', {
                inputName: sourceName,
                inputSettings: {
                    file: filePath
                }
            });
        }catch(e){
            console.warn(`Error trying to set image source: ${e}`);
        }
    },

    /**
     * 
     * @param {string} sceneName The name of the scene to query.
     * @returns {Promise<string[]>} List of source names.
     */
    async getBrowserSourcesInScene(sceneName) {
        return await OBS.getSourcesOfTypeInScene(OBS.SOURCE_TYPE.BROWSER, sceneName)
    },

    /**
     * 
     * @param {string} sourceName The name of the browser source to update.
     * @param {string} url Absolute URL to set the source to.
     */
    async setBrowserSourceURL(sourceName, url) {
        try{
            if(sourceName && url){
                await OBS.obs.call('SetInputSettings', {
                    inputName: sourceName,
                    inputSettings: {
                        url: url
                    }
                });
            }
        }
        catch(e){
            console.warn(`Error trying to set browser source: ${e}`);
        }
    },

    /**
     * 
     * @param {string} sceneName The name of the scene to query.
     * @returns {Promise<string[]>} List of source names.
     */
    async getTextSourcesInScene(sceneName) {
        return await OBS.getSourcesOfTypeInScene(OBS.SOURCE_TYPE.TEXT, sceneName);
    },

    /**
     * 
     * @param {string} sourceName The name of the text source to update.
     * @param {string} text The text to set.
     */
    async setTextSourceText(sourceName, text) {
        try{
            if(sourceName && text){
                await OBS.obs.call('SetInputSettings', {
                    inputName: sourceName,
                    inputSettings: {
                        text: text
                    }
                });
            }
        }catch(e){
            console.warn(`Error trying to set text source: ${e}`);
        }
    },
}

OBS.obs.on('Identified', () => {
    OBS.populateScenesOptionsFromOBS();
    const sceneSelectors = document.getElementsByClassName('sceneSelect');
    for(let sceneSelector of sceneSelectors){
        if(sceneSelector.value){
            OBS.populateSourceOptionsFromScene(sceneSelector.value, sceneSelector.getAttribute('target'));
        }
    }
});

OBS.obs.on('SceneItemRemoved', () => {
    const sceneSelectors = document.getElementsByClassName('sceneSelect');
    for(let sceneSelector of sceneSelectors){
        if(sceneSelector.value){
            OBS.populateSourceOptionsFromScene(sceneSelector.value, sceneSelector.getAttribute('target'));
        }
    }
});

OBS.obs.on('SceneItemCreated', () => {
    const sceneSelectors = document.getElementsByClassName('sceneSelect');
    for(let sceneSelector of sceneSelectors){
        if(sceneSelector.value){
            OBS.populateSourceOptionsFromScene(sceneSelector.value, sceneSelector.getAttribute('target'));
        }
    }
});

OBS.obs.on('SceneListChanged', () => {
    OBS.populateScenesOptionsFromOBS();
});