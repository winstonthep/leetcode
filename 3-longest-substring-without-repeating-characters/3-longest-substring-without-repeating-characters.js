/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    let longest = 1;
    for(let i = 0; i < s.length; i++) {
        let subString = s[i];
        for (let j = 1 + i; j < s.length; j++) {
            if (subString.indexOf(s[j]) > -1) {       
                break;
            }
            subString += s[j];
            if (subString.length > longest) {
                    longest = subString.length;
            }
        }
    }
    return longest;
    
};