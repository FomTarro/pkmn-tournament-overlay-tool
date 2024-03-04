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
 * For each property of object A, if object B has a value for that property, apply it to Object A.
 * Returns a new instance/clone of A with the new values.
 * @param {object} a 
 * @param {object} b 
 * @returns {object} A new instance of A with all properties merged in.
 */
function merge(a, b){
    var c = {}
    for(var prop in a){
        if(b[prop]){
            c[prop] = b[prop]
        }else{
            c[prop] = a[prop]
        }
    }
    return c;
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
 * Resets the given Select element back to its 'None' option.
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
 * Validates the selection of a text input field against its list of suggested entries.
 * @param {HTMLInputElement} input 
 */
function validate(input){
    // find the item on the list that matches regardless of case
    const formatted = input.value.toLowerCase()
    .replaceAll("-hisui", "-hisuian")
    .replaceAll("-alola", "-alolan")
    .replaceAll("-galar", "-galarian")
    .replaceAll("-paldea", "-paldean");
    const options = [...document.getElementById(input.getAttribute('list')).querySelectorAll('option')];
    const valid = findWithHighestScore(options, formatted);
    // const valid = [...document.getElementById(input.getAttribute('list')).querySelectorAll('option')].find(
    //     opt => {
    //         const optFormatted = opt.innerText.toLowerCase().replaceAll('-', ' ');
    //         const splitOpt = opt.innerText.toLowerCase().split(' ');
    //         return optFormatted ===  formatted || (formatted.length >= 2 && optFormatted.startsWith(formatted))
    //     }
    if(!valid && input.value){
        input.classList.add('typo');
    }else{
        input.classList.remove('typo');
    }
    // if we have a match, set it!
    if(valid){
        input.value = valid.innerText;
    }
}

/**
 * 
 * @param {HTMLOptionElement[]} options 
 * @param {string} input 
 * @returns {string}
 */
function findWithHighestScore(options, input){
    const splitInput = sanitizeString(input).split(' ');
    const matches = []
    // console.log(options);
    for(const option of options){
        const splitOpt = sanitizeString(option.innerText).split(' ');
        const score = splitInput.filter(inputWord => 
            splitOpt.filter(optionWord => {
                return optionWord.startsWith(inputWord)
            }).length > 0).length;
        if(score > 0){
            matches.push({
                opt: option,
                score: score
            })
        }
    }
    const max = matches.reduce((prev, current) => (prev.score >= current.score) ? prev : current, {opt: undefined, score: -1});
    // no clearcut matches (input string is perhaps only a fragment of a single word)
    // try our best to guess the word!
    if(!max.opt){
        const bestGuess = options.find(opt => {
            const optFormatted = sanitizeString(opt.innerText)
            return input.length >= 2 && optFormatted.startsWith(sanitizeString(input))
        });
        return bestGuess;
    }
    return max && max.opt ? max.opt : undefined;
}

/**
 * 
 * @param {string} str 
 * @returns {string}
 */
function sanitizeString(str){
    return str.toLowerCase().replaceAll('(', '').replaceAll(')', '').replaceAll('-', ' ')
}

/**
 * Formats a given string into title case. For example, "indeedee-f" -> "Indeedee-F".
 * @param {string} str - The string to reformat.
 * @returns {string} The reformated string.
 */
function toTitleCase(str) {
    if(!str){
        return str;
    }
    const separators = [' ', '\\-', '\\(', '\\)'];
    const regex = new RegExp('(^|[' + separators.join('') + '])(\\w)', 'g');
    return str.toLowerCase().replace(regex, function(x) { return x.toUpperCase(); });
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

function getEditDistance(a, b){
    if(a.length == 0) return b.length; 
    if(b.length == 0) return a.length; 
  
    var matrix = [];
  
    // increment along the first column of each row
    var i;
    for(i = 0; i <= b.length; i++){
      matrix[i] = [i];
    }
  
    // increment each column in the first row
    var j;
    for(j = 0; j <= a.length; j++){
      matrix[0][j] = j;
    }
  
    // Fill in the rest of the matrix
    for(i = 1; i <= b.length; i++){
      for(j = 1; j <= a.length; j++){
        if(b.charAt(i-1) == a.charAt(j-1)){
          matrix[i][j] = matrix[i-1][j-1];
        } else {
          matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                  Math.min(matrix[i][j-1] + 1, // insertion
                                           matrix[i-1][j] + 1)); // deletion
        }
      }
    }
  
    return matrix[b.length][a.length];
  };

