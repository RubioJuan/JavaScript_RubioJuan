/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let inicio = []

    if (strs && strs.length > 0){
        strs = strs.sort();
        let first = strs[0], last = strs[strs.length - 1];
        for (let i = 0; i < first.length; i++){
            if (last.length >i && last[i] === first[i]){
                inicio.push(last[i]);
            } else{
                return inicio.join("");
            }
        }
    }
    return inicio.join("");
};