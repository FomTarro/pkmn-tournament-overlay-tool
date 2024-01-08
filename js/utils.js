/**
 * Generates a uuidv4 string.
 * @returns {string} - A uuidv4 string
 */
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
        .replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
}

/**
 * Converts a relative file path to an absolute file path.
 * @param {string} relative - The relative file path.
 * @returns {URL} - The absolute file path.
 */
function relativeToAbsolutePath(relative) {
    return new URL(relative, window.location.href).href;
}

/**
 * Adds or removes a given class from an element based on the value of a boolean expression.
 * @param {HTMLElement} element - The element to update.
 * @param {string} className - The class to set or unset.
 * @param {boolean} state - The boolean expression.
 */
function toggleClass(element, className, state){
    if(state){
        element.classList.add(className)
    }else{
        element.classList.remove(className)
    }
}

/**
 * 
 * @param {HTMLSelectElement} selector 
 * @param {boolean} sendChangeEvent
 */
function resetSelector(selector, sendChangeEvent = false){
    selector.options[0].selected = true;
    if(sendChangeEvent == true){
        const event = new Event('change');
        selector.dispatchEvent(event);
    }
}

/**
 * Ash Ketchum -> Ash K.
 * @param {string} name - The name to abbreviate.
 * @returns {string} The abbreviated name.
 */
function abbreviateName(name){
    return name.substring(0, name.indexOf(' ')+2)+'.' 
}

/**
 * Takes a word over 25 characters and inserts a ... in the center.
 * @param {string} word - The word to abridge.
 * @returns {string} The abridged word.
 */
function abridgeWord(word) {
    if (word.length > 25) {
      return word.substring(0, 11) + '...' + word.substring(word.length-11, word.length);
    }
    return word;
}

/**
 * Takes a number (ex 2) and applies an ordinal suffix (ex 2nd)
 * @param {Number} i - The number to apply the suffix to.
 * @returns {string} - The number with the suffix applied.
 */
function applyOrdinalSuffix(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

/**
 * Selects the first file chosen in a file picker dialog.
 * @param {string} id - The ID to feed the file picker.
 * @returns {Promise<File>} - A promise which resolves into the file reference.
 */
async function selectFile(id) {
    let startIn;
    if(FILE_HANDLE_MAP.has(id)){
        startIn = FILE_HANDLE_MAP.get(id);
    }
    [fileHandle] = await window.showOpenFilePicker({
        id,
        startIn,
        types: [
            {
                accept: {
                    'text/plain': ".html"
                }
            }
        ],
        excludeAcceptAllOption: true,
    });
    FILE_HANDLE_MAP.set(id, fileHandle);
    return await fileHandle.getFile();
}
const FILE_HANDLE_MAP = new Map();

/**
 * Loads a File from the File API as text.
 * @param {File} file - The file to load.
 * @returns {Promise<string>} - A promise which resolves with the text content of the loaded file.
 */
function loadFile(file){
    const reader = new FileReader();
    // here we tell the reader what to do when it's done reading...
    const promise = new Promise((resolve, reject) =>
    reader.onload = readerEvent => {
        try{
            const content = readerEvent.target.result;
            resolve(content);
        }catch(e){
            reject(e);
        }
    });
    reader.readAsText(file,'UTF-8');
    return promise;
}

/**
 * Watches a file from the FileSystemAPI, and executes a callback when that file changes.
 * @param {FileSystemFileHandle} fileHandle - The file to watch.
 * @param {function(File)} onChange - The function to execute on the file when it changes.
 * @param {number} [interval=2000] - The frequency to check for updates, in milliseconds. 
 * @returns {number} - The ID of the interval timer.
 */
function watchFile(fileHandle, onChange, interval = 2000){
    /**
     * @type {File}
     */
    let oldFile = undefined;
    const timer = window.setInterval(async () => {
        const file = await fileHandle.getFile();
        if(oldFile?.lastModified !== file?.lastModified){
            await onChange(file);
        }
        oldFile = file;
    }, interval);
    return timer;
}
