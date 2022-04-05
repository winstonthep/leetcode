/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) {
        return s;
    }
    
    let longestPalindrome = s[0];
    let checkPalindrome = function(string) {
        let left = 0;
        let right = string.length - 1;
        while (left < right) {
            if (string[left] !== string[right]) return false;
            left++, right--;
          }
          return true;
    }
    
    for (let i = 0; i < s.length; i++) {
        let word = s[i];
        for (let j = i + 1; j < s.length; j++) {
            word += s[j];
            if (word.length > longestPalindrome.length) {
                if (checkPalindrome(word)) {
                    longestPalindrome = word;    
                }
                
            }
        }
    }
    return longestPalindrome;
};