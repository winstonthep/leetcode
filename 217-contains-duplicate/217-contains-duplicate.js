/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let duplicateCount = {};
    for (let i = 0; i < nums.length; i++) {
        if (duplicateCount[nums[i]] !== undefined) {
            return true;
        } else {
            duplicateCount[nums[i]] = 1;
        }
    }
    return false;
};