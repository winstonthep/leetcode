var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0];
    
    let left = 0;
    let right = 1;
    while (nums.length > 1) {
        if (right === nums.length) {
            return nums[left];
        }
        if (nums[left] === nums[right]) {
           nums.splice(right, 1); 
           nums.splice(left, 1);
           
           right = left + 1;
        } else {
            right++;
        }
    }
    return nums[0];
    
};