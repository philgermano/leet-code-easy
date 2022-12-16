//704 binary search
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
 

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

// var search = function(nums, target) {
//     let iHalf = Math.floor(nums.length/2)
//     let half =nums[iHalf]
    
//     if(nums[0] === target){
//         return 0
//     }
//     if(half > target){
//         for(i=iHalf; i>0; i--){
//             if(nums[i] === target){
//                 return i
//             }
           
//         }
//         return -1
//     }else if(half < target){
//             for(i=iHalf; i<nums.length; i++){
//             if(nums[i] === target){
//                 return i
//             }
            
//         }
//         return -1
//     }else if(half === target){
//         return iHalf
//     } else{
//         return -1
//     }
// };

var search = function(nums, target) {
    let min = 0;
    let max = nums.length-1;
    let mid = Math.floor((max-min)/2)
 
    while (min<= max){
        if(nums[mid] === target){
            return mid
        }else if(nums[mid]>target){
             max = mid-1;
             mid = Math.floor((max+min)/2)
 
             console.log(min,'min', max, 'max', mid,'mid', 'mid>target')
        }else if(nums[mid]<target){
             min = mid+1;
             mid = Math.floor((max+min)/2)
             console.log(min,'min', max, 'max', mid,'mid', 'mid<targ')
 
        }
 
    }
    return -1
 };

console.log(search([-1,0,3,5,9,12],9), 'binary search algo')
console.log(search([-1,0,3,5,9,12],2), 'binary search algo')

