/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) {
        return [];
    }
    
    const telephoneLetters = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };
    
    let results = [];

    
    let makeCombos = function(index, string) {
        if (index === digits.length) {
            results.push(string);
            return;
        }

        for (let i = 0; i < telephoneLetters[digits[index]].length; i++) {
            makeCombos(index + 1, string + telephoneLetters[digits[index]][i])
        }
    }
    
    makeCombos(0, '');
    return results;
};