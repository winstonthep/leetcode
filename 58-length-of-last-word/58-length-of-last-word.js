/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s.length === 1) {
        return 1;
    }
    
    let wordArr = s.split(' ');
    for (let i = wordArr.length - 1; i > -1; i--) {
        if (wordArr[i].length > 0) {
            return wordArr[i].length;
        }
    }
};