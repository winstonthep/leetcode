/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 1) return true;
    if (n <= 0) return false;
    if (n % 2 === 1) return false;
    if (n > 0) {
        while (n > 1) {
            n /= 2;
        }
        if (n === 1) {
            return true;
        } else {
            return false;
        }
    }
    
};