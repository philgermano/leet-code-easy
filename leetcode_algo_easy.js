//704 binary search
//#region 
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

// var search = function(nums, target) {
//     let min = 0;
//     let max = nums.length-1;
   
 
//     while (min<= max){
//         let mid = Math.floor((max+min)/2)
 
//         if(nums[mid] === target){
//             return mid
//         }else if(nums[mid]>target){
//              max = mid-1;
 
//         }else if(nums[mid]<target){
//              min = mid+1;
 
//         }
 
//     }
//     return -1
//  };
// console.log(search([-1,0,3,5,9,12],9), 'binary search algo')
// console.log(search([-1,0,3,5,9,12],2), 'binary search algo')

//#endregion


//278. First Bad Version
//#region 
// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

// Example 1:

// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.
// Example 2:

// Input: n = 1, bad = 1
// Output: 1
 

// Constraints:

// 1 <= bad <= n <= 231 - 1

//SOLUTION

// /**
//  * Definition for isBadVersion()
//  * 
//  * @param {integer} version number
//  * @return {boolean} whether the version is bad
//  * isBadVersion = function(version) {
//  *     ...
//  * };
//  */

// /**
//  * @param {function} isBadVersion()
//  * @return {function}
//  */
// var solution = function(isBadVersion) {
//     /**
//      * @param {integer} n Total versions
//      * @return {integer} The first bad version
//      */
//     return function(n) {
//              //binary search. check mid. if bad max = mid -1 if good min = bad+1.
//             min = 0;
//             max = n;
//             while(min<=max){
//                 let mid = Math.floor((min+max)/2);

//                 if(isBadVersion(mid)){
//                     max = mid -1;
//                 }else{
//                     min = mid +1;    
//                 }
//             }
//             return min;
        
//     };
// };


//#endregion


//35. Search Insert Position
//#region 
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104


//SOLUTION
var searchInsert = function(nums, target) {
    console.log(nums,'list of nums');
    console.log(target,'target')
    //do binary search but if found return value. if min and max are the same we return the mid spot modified for if value is lower or higher
    let min = 0;
    let max = nums.length -1;
    while(min<max){
        let mid = Math.floor((min+max)/2);
        console.log('min',min,'mid', mid, 'max', max, 'after mid set')
        if(mid === target){
            return mid;
        } else if(mid < target){
                //bump up min
                min = mid +1;
                console.log('min',min,'mid', mid, 'max', max, 'after min adjust')
        }else if (mid > target){
                //cut down max
                max = mid -1;
                console.log('min',min,'mid', mid, 'max', max, 'after max adjust')
        }

    } 
    if(nums[min] < target){
        //insert it after
        return min +1
    }else{
        //insert if before
        return min -1
    }

};

console.log(searchInsert([1,3,5,6], 5))

console.log(searchInsert([1,3,5,6], 2))

//#endregion
