/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a, b) => { return a - b;})
    
    
    let x = stones.length - 2;
    let y = stones.length - 1;
    
    while (stones.length > -1) {
        if (stones.length === 0) {
            return 0;
        }
        if (stones.length === 1) {
            return stones[0];
        }
        if (stones[y] === stones[x]) {
            stones.splice(x, 2);
            lastStoneWeight(stones);
        }
        if (stones[y] > stones[x]) {
            let newStone = stones[y] - stones[x];
            stones.splice(x, 2);
            stones.push(newStone);
            lastStoneWeight(stones);
        }
        
        
    }
};