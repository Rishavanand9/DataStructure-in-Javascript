/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
    return nums.map((item, index) => {
        return item + nums.slice(0, index).reduce((partialSum, a) => partialSum + a, 0); })
};
