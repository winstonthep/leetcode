/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let sCharCount = {};
    let tCharCount = {};
    for (let i = 0; i < s.length; i++) {
        sCharCount[s[i]] > 0 ? sCharCount[s[i]]++ : sCharCount[s[i]] = 1;
        tCharCount[t[i]] > 0 ? tCharCount[t[i]]++ : tCharCount[t[i]] = 1;
    }
    
    for (let key in sCharCount) {
        if (sCharCount[key] !== tCharCount[key]) {
            return false;
        }
    }
    return true;
    
};