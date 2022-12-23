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
// var searchInsert = function(nums, target) {
//     console.log(nums,'list of nums');
//     console.log(target,'target')
//     //do binary search but if found return value. if min and max are the same we return the mid spot modified for if value is lower or higher
//     let min = 0;
//     let max = nums.length -1;
//     while(min<max){
//         let mid = Math.floor((min+max)/2);
//         console.log('min',min,'mid', mid, 'max', max, 'after mid set')
//         if(nums[mid] === target){
//             return mid;
//         } else if(nums[mid] < target){
//                 //bump up min
//                 min = mid +1;
//                 console.log('min',min,'mid', mid, 'max', max, 'after min adjust')
//         }else if (nums[mid] > target){
//                 //cut down max
//                 max = mid -1;
//                 console.log('min',min,'mid', mid, 'max', max, 'after max adjust')
//         }

//     } 
//     if(nums[min] < target){
//         //insert it after
//         return min +1
//     }else{
//         //insert if before
//         return min 
//     }

// };

// console.log(searchInsert([1,3,5,6], 0))

// console.log(searchInsert([1,3,5,6], 2))

// console.log(searchInsert([1,3,5,6], 7))
//#endregion


//977. Squares of a Sorted Array
//#region 
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 
// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.
 
// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

// var sortedSquares = function(nums) {
//     //for loop push each onto a new array. array method .sort then return the array
//     let newArray=[];
//     for(i of nums){
//         newArray.push(i*i);
//     }
//         //sort sorts by string. need to add in compare function for it to sort numbers
//     newArray.sort(function(a,b){return a-b});
//     return newArray

// };

//NOTES
//would be better with .map instead of for of loop. 

//#endregion


//189. Rotate Array
//#region 
// Given an array, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105
 

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

// var rotate = function(nums, k) {
//     //can pop off back and unshift to the front
//     //needed both for if it needs to keep rotating them rather than just shifting one section once.
//     if (k>nums.length){
//     for(i=k;i>0;i--){
        
//         //remove from the back
//         let last = nums.pop()

//         //add to front
//         nums.unshift(last);

//     }
// }else{
//     let splitOff = nums.splice(nums.length - k,k );
//     //splitOff = splitOff.concat(nums);
//     nums.unshift(...splitOff);
// }
// };

// console.log(rotate([1,2,3,4,5,6,7], 3));

//#endregion

//#283. Move Zeroes
//#region

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you minimize the total number of operations done?


// var moveZeroes = function(nums) {
//     //loop through array backwards so length doesn't change and jack up your index. couldn't use map because of that.
//         for(i=nums.length-1;i>=0;i--){
//             if(nums[i]===0){
//                 nums.push(nums.splice(i,1));
//             } 
//         }
//     };

// console.log(moveZeroes([0,1,0,3,12]))
// console.log(moveZeroes([0]))
//#endregion

//167. Two Sum II - Input Array Is Sorted
//#region 

// var twoSum = function(numbers, target) {
//     ///possibly long way. get first number check arrray for a numebr to equal it out. if it hits a number bigger than the difference exit the array early
//     //can't use .map not build to allow you to exit the loop early.

//     for(i=0; i< numbers.length-1; i++){
//         while(numbers[i]=== numbers[i+1] && numbers[i]+numbers[i+1] !== target){
//             i++
//         }
//         for(j=numbers.length; j>=0; j--){
//             if(numbers[i] + numbers[j] === target && j!==i){
//                 solutionArray.push(i+1,j+1);
//                 break
//             };   
//         }
//         if(solutionArray.length === 2){
//             break
//         };
//     }
// return solutionArray
// };

// console.log(twoSum([2,7,11,15], 9), 'it wants [1,2]')
// console.log(twoSum([2,3,4], 6), 'it wants [1,3]')
// console.log(twoSum([-1,0], -1), 'it wants [1,2]')

//#endregion

//344. Reverse String
//#region 
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 
// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.

// var reverseString = function(s) {
//     //not sure if better way but can just reverse it with the array method
//     s.reverse()
//     return s
// };


    //okay just run 2 variables for either end stop when they meet.
    //every cycle just swap back and front from their position.

//     let front = 0, back =s.length-1;

//     while(front<back){
//         let temp = s[front];
//         s[front] = s[back];
//         s[back] = temp;
//         front++;
//         back--;
//     }
//     return s
// };
// console.log(reverseString(["h","e","l","l","o"]), "hello reversed")
// console.log(reverseString(["H","a","n","n","a","h"]), "hannah reversed")

//#endregion


//557. Reverse Words in a String III

//#region 
// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"
 

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

// var reverseWords = function(s) {
    
// s =s.split(' ');
// s.map((word, index)=>{
//     //function to reverse each word
//     let wordSplit = word.split('');
//     wordSplit.reverse();
//     s[index] = wordSplit.join('')
// })
// //then join everything and return it
// s = s.join(' ')
// //console.log(s)
// return s
// };

// console.log(reverseWords("Let's take LeetCode contest"),"Let's take LeetCode contest")
// console.log(reverseWords("God Ding"),"God Ding")
//#endregion


//876. Middle of the Linked List
//#region 
// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 
// Constraints:

// The number of nodes in the list is in the range [1, 100].
// 1 <= Node.val <= 100

// var middleNode = function(head) {
//     let end = head, middle = head;
//     while(end!== null && end.next !== null){
//         end = end.next.next;
//         middle = middle.next
//     }
//     return middle;
// };

// console.log(middleNode([1,2,3,4,5]), '3,4,5 expected answer');
// console.log(middleNode([1,2,3,4,5,6]), '4,5,6 expected answer');


//linked list dgeneric work to get a better understanding of their structure and uses.
//#region 

//OK first thing I need to use linked lists a bit to actually understand the data structure;
// class Node {
//     constructor(val) {
//         this.value = val;
//         this.next = null;
//     }
// }
// const one = new Node(1);
// one.next = new Node(2);
// one.next.next = new Node(3);
// one.next.next.next = new Node(4);
// one.next.next.next.next = new Node(5);

// class SingleLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val){
//         const newNode = new Node(val);
//         if (!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++
//         return this
//     };

//     pop(){
//         //case: empty list
//         if(!this.head) return

//         //case:one node
//         if(this.length === 1){
//             this.head = null;
//             this.tail = null;
//             this.length = 0;
//             return;
//         };

//         //case many nodes
//         let current = this.head;
//         let newTail = null;

//         while(current){
//             if (current.next){
//                 newTail = current;
//             }
//             current = current.next;
//         }
//         const deletedNode = this.tail;
//         this.tail = newTail;
//         this.tail.next = null;
//         this.length--;
//         return deletedNode;
//     };
//     shift(){
//         //case emoty list
//         if(!this.head) return null;

//         //case one mode
//         if (this.length ===1){
//             this.head = null;
//             this.tail = null;
//             this.length = 0;
//             return;
//         }
//         //case : many nodes
//         const currentHead = this.head;
//         const newHead = currentHead.next;
//         this.head = newHead;
//         this.length--;

//         return currentHead;
//     };
//     unshift(val){
//         const newNode = new Node(val);

//         //case empty list
//         if(this.length ===0){
//             this.head = newNode;
//             this.tail = newNode;
//             this.length = 1;
//             return;
//         }

//         //case many nodes
//         const currentHead = this.head;
//         const newHead = newNode;
//         this.head = newHead;
//         newHead.next = currentHead;
//         this.length++;
//         return newHead;
//     };
//     get(index){
//         //check edge cases
//         if (index <0 || index >= this.length){
//             return null;
//         };
//         let target = this.head;
//         for(let i = 1; i<= index; i++){
//             target = target.next;
//         }
//         return target;
//     };
//     set(index,val){
//         const target = this.get(index);
//         if(target){
//             target.value = val;
//             return true;
//         }
//         return false;
//     };
//     insert(index,val){
//         //edge cases
//         if(index < 0 || index > this.length){
//             return false;
//         };

//         //insert end
//         if(index === this.length){
//             this.push(val);
//             return true;
//         };

//         //insert begining
//         if(index === 0){
//             this.unshift(val);
//             return true;
//         };
        
//         //insert middle
//         const newNode = new Node(val);
//         const previous = this.get(index -1);
//         const current = previous.next;
//         previous.next = newNode;
//         newNode.next = current;
//         this.length++;

//         return true;
//     };

//     remove(index){
//         //edge cases
//         if(index<0 || index <= this.length){
//             return false;
//         };

//         //remove first
//         if(index ===0){
//             this.shift();
//             return true;
//         };

//         //if last node
//         if(index === this.length -1){
//             this.pop();
//             return true;
//         };

//         //remove in middle;
//         const previous = this.get(index -1);
//         const after = previous.next.next;
//         previous.next = after;
//         this.length--;
//         return true;
//     };

//     reverse(){
//         let movingNode = this.head;
//         this.head = this.tail;
//         this.tail = movingNode;

//         let nextNode;
//         let previousNode = null;
//         for(let i = 0; i < this.length; i++){
//             //temp var for next iteration
//             nextNode = movingNode.next;

//             //main logic reverse pointer
//             movingNode.next = previousNode;

//             //prep for next iteration
//             previousNode = movingNode;
//             movingNode = nextNode;
//         };
//     };



// }

// const list = new SingleLinkedList();
// list.push(1);
// console.log(list);
// list.push(2);
// console.log(list);
// list.pop();
// console.log(list);

//console.log(one);
//console.log(one.next.next);
//#endregion


//#endregion

//19. Remove Nth Node From End of List
//#region 

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 
// Constraints:
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz
 
// var removeNthFromEnd = function(head, n) {
//     //have 2 variables run through. 1 rams into the end and the other stops at the removal spot.delay seconds start by n
//         if(head === null || head.next === null){
//             //account for ones thatll be empty
//             return null;
//         };

       
//     let firstMark = head, secondMark = head, go=0;
    
//     while(firstMark){
//         firstMark = firstMark.next;
        
//         if(go>n){
//             secondMark = secondMark.next;
//         }
//            go++; 
//     }
//             //catch that it wants first removed
//         if(go === n){
//             return head.next;
//         }

//         //secondMark should be right before the element to remove so just make its next = next.next
//         secondMark.next = secondMark.next.next
//     return head;
// };

// console.logs(removeNthFromEnd([1,2,3,4,5],2),'expects 1,2,3,4');
// console.logs(removeNthFromEnd([1],1),'expects []');
// console.logs(removeNthFromEnd([1,2],1),'expects 1');


//#endregion

//3. Longest Substring Without Repeating Characters
//#region 
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

var lengthOfLongestSubstring = function(s) {
    //bad way maybe but could split string then add to each until you get to the end then return the longest
    let split = s.split('');
    let largest = '';
    //console.log(split)
    for(i=0; i<split.length-1;i++){
        //console.log('is running')
        for(j=i+1; j<split.length;j++){
            //add the letter if that substring does not already contain the new letter;
            if(!split[i].includes(split[j])){

            split[i]= split[i]+split[j]
            console.log(split[j],'splitJ')
            console.log(split[i],'splitI')
            }else{
                break;
            }
            //if larger set it
            
        }
        if(split[i].length > largest.length){
                largest = split[i];
                console.log(largest,'largest')
            }
    }
    return largest.length;
};

console.log(lengthOfLongestSubstring("abcabcbb"),"wants 'abc'");
console.log(lengthOfLongestSubstring("bbbbb"),"wants 'bbbbb'");
console.log(lengthOfLongestSubstring("pwwkew"),"wants 'wke'");
//#endregion


