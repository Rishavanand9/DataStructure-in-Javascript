/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function(nums) {
    let index = -1
    nums.every((item, idx) => {
        const sumLeft  = idx !== 0  ? nums.slice(0,idx).reduce((partialSum, a)=> partialSum + a, 0) : 0,
        sumRight = idx !== nums.length-1 ? nums.slice(idx+1, nums.length).reduce((partialSum, a) => partialSum + a , 0) : 0;
        if(sumLeft === sumRight){
            index = idx
            return false
        }
        return true
    })
    return index;
}