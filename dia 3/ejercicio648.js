/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
function replaceWords(dictionary, sentence) {
    const dictionarySet = new Set(dictionary);

    const trabajos = sentence.split(' ');

    for (let i = 0; i < trabajos.length; i++) {
        let trabajo = trabajos[i];
        let shortestRoot = trabajo; 

        for (let root of dictionary) {
            if (trabajo.startsWith(root) && root.length < shortestRoot.length) {
                shortestRoot = root; 
            }
        }
        trabajos[i] = shortestRoot;
    }

    return trabajos.join(' ');
}