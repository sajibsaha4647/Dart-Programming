// // setTimeout(() => {
// //   console.log(1);
// // }, 2000);

// // console.log(2);

// // setTimeout(() => {
// //   console.log(3);
// // }, 0);

// // console.log(4);

// var output = ((s) => {
//   // delete s;
//   return s;
// })(0);

// console.log(output);

// var x = 1;
// var outputr = (function () {
//   delete x;
//   return x;
// })();

// console.log(outputr);

// var Employee = {
//   company: "xyz",
// };
// var emp1 = Object.create(Employee);
// delete emp1.company;
// console.log(emp1.company);

// var salary = "1000$";

// (function () {
//   console.log("Original salary was " + salary);

//   var salary = "5000$";

//   console.log("My New Salary " + salary);
// })();

// var isPalindrome = function (x) {
//   let result = true;
//   let start = 0;
//   let end = x.length - 1;

//   while (end > start) {
//     if (x[start] !== x[end]) {
//       console.log("false");
//       return false;
//     }
//     start++;
//     end--;
//   }
//   console.log("true");
//   return result;
// };

// isPalindrome(-121);

// var isPalindrome = function (x) {
//   let result = true;
//   let start = 0;

//   if (x < 0) {
//     console.log(false);
//     return false;
//   }
//   x = x.toString();
//   let end = x.length - 1;

//   while (end > start) {
//     if (x[start] != x[end]) {
//       console.log(false);
//       return false;
//     }
//     start++;
//     end--;
//   }
//   console.log(true);
//   return result;
// };

// isPalindrome(121);

// var longestCommonPrefix = function (strs) {
//   let str = strs.sort();
//   console.log(str);
//   let first = str[0];
//   let last = str[str.length - 1];

//   let result = "";
//   for (let i = 0; i < first.length; i++) {
//     if (first[i] === last[i]) {
//       result += first[i];
//     } else {
//       break;
//     }
//   }

//   return result;
// };

// let strs = ["flow", "ddlow", "xlight", "tlows"];
// longestCommonPrefix(strs);

// var searchInsert = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= target) {
//       return i;
//     }
//   }
//   return nums.length;
// };

// nums = [1, 3, 5, 6];
// console.log(searchInsert(nums, 1));

// var lengthOfLastWord = function (s) {
//   let result = s.split(" ");
//   let len = result.length;
//   let arr = [];
//   for (let i = 0; i < len; i++) {
//     if (result[i] !== "") {
//       arr.push(result[i]);
//     }
//   }
//   return arr[arr.length - 1].length;
// };
// let s = "q ";
// console.log(lengthOfLastWord(s));

// var plusOne = function (digits) {
//   var result = "";
//   let len = digits.length;
//   for (let i = 0; i < len; i++) {
//     result += digits[i];
//   }

//   let lastone = result[result.length - 1];
//   let mainitem = parseInt(lastone) + 1;
//   let slices = result.slice(0, -1);
//   let sumone = slices.concat(mainitem);

//   let res = [...sumone.toString()];
//   return res;
// };
// let digits = [9, 9];
// // let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
// console.log(plusOne(digits));

// var plusOne = function (digits) {
//   let sum = BigInt(digits.join("")) + 1n;
//   return sum.toString().split("");
// };
// // let digits = [9, 9];
// let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
// console.log(plusOne(digits));

// const cartdetails = {
//   name: "sajib",
//   fun: (getname = () => {
//     return this.name;
//   }),
// };
// // var name = "sajibsss";
// var getnamesss = cartdetails.fun;

// console.log(getnamesss);

// var age = 10;

// (() => {
//   console.log(age);
//   var age = 20;
//   console.log(age);
// })();

// var addBinary = function (a, b) {
//   return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
// };
// var a = "11",
//   b = "1";
// console.log(addBinary(a, b));

// var merge = function (nums1, m, nums2, n) {
//   let myarray = [...nums1, m, ...nums2, n];
//   console.log(myarray.sort());
// };

// var nums1 = [1, 2, 3, 0, 0, 0],
//   m = 3,
//   nums2 = [2, 5, 6],
//   n = 3;
// merge(nums1, m, nums2, n);

// var hasCycle = (head) => {
//   if (head == null) return false;
//   var walker = head;
//   var runner = head;
//   while (runner.next != null && runner.next.next != null) {
//     walker = walker.next;
//     runner = runner.next.next;
//     if (walker == runner) return true;
//   }
//   return false;
// };
// var head = [1, 2];
// console.log(hasCycle(head));

// function singleNumber(nums) {
//   console.log(3 ^ 2);
//   // return nums.reduce((prev, curr) => prev ^ curr);
// }

// var nums = [1, 2, 1, 2, 4];
// console.log(singleNumber(nums));

// var sortedArrayToBST = function (nums) {
//   if (nums == null || !nums.length) {
//     return null;
//   }

// };
// let nums = [-10, -3, 0, 5, 9];
// let n = nums.length;
// let arr = sortedArrayToBST(nums, 0, n - 1);
// console.log(arr);
// sortedArrayToBST(nums);

//GET A HAPPY NUMBER

// var isHappy = function (n) {
//   let seen = new Set();
//   while (n !== 1) {
//     let total = 0;
//     while (0 < n) {
//       total += (n % 10) * (n % 10);
//       n = Math.floor(n / 10);
//     }
//     if (seen.has(total)) {
//       return false;
//     } else {
//       seen.add(total);
//       n = total;
//     }
//   }
//   return true;
// };

// var Input = 19;
// console.log(isHappy(Input));

// var singleNumber = function (nums) {
//   const result = {};
//   for (let i = 0; i < nums.length; i++) {
//     let char = nums[i];
//     result[char] = result[char] ? (result[char] += 1) : (result[char] = 1);
//   }

//   console.log(Object.keys(result));
//   console.log(Object.values(result));
// };
// let nums = [2, 2, 1];
// console.log(singleNumber(nums));

// var singleNumber = function (nums) {
//   nums.sort();
//   for (var i = 0; i < nums.length; i += 2) {
//     if (nums[i] != nums[i + 1]) {
//       return nums[i];
//     }
//   }
// };

// var nums = [1, 2, 2];
// console.log(singleNumber(nums));

// var majorityElement = function (nums) {
//   let count = {};
//   for (let i = 0; i < nums.length; i++) {
//     let ch = nums[i];
//     count[ch] = count[ch] ? count[ch] + 1 : 1;
//   }

//   console.log(Object.values(count));
//   console.log(Object.keys(count));

//   // const LargestNum = values.reduce((prev, curr) => {
//   //   return Math.max(prev, curr);
//   // });
//   // console.log(LargestNum);
// };
// c
// majorityElement(nums);

// const ArrayList = [3, 2, 3, 4, 4, 4];
// const LargestNum = ArrayList.reduce((prev, curr) => {
//   return Math.max(prev, curr);
// });
// const MinNum = ArrayList.reduce((prev, curr) => {
//   return Math.min(prev, curr);
// });
// console.log(LargestNum);
// console.log(MinNum);

// const getCounts = (nums) => {
//   let counts = {};
//   for (let i = 0; i < nums.length; i++) {
//     let val = counts[nums[i]] ? counts[nums[i]] : 0;
//     counts[nums[i]] = val + 1;
//   }
//   return counts;
// };

// var majorityElement = function (nums) {
//   const n = nums.length;
//   const counts = getCounts(nums);
//   const isMajority = (val) => val > n / 2;

//   for (const [key, val] of Object.entries(counts)) {
//     if (isMajority(val)) {
//       return key;
//     }
//   }
//   return 0;
// };
// var ArrayList = [3, 2, 3];
// console.log(majorityElement(ArrayList));

// var reverseString = function (s) {
//   console.log(s.reverse());
// };

// var s = ["h", "e", "l", "l", "o"];
// reverseString(s);

// var fizzBuzz = function (n) {
//   let array = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 15 == 0) {
//       array.push("FizzBuzz");
//     } else if (i % 5 == 0) {
//       array.push("Buzz");
//     } else if (i % 3 == 0) {
//       array.push("Fizz");
//     } else {
//       array.push(i.toString());
//     }
//   }
//   console.log(array);
// };

// fizzBuzz(15);

// var mergeTwoLists = function (list1, list2) {

// };

// var list1 = [1, 2, 4],
//   list2 = [1, 3, 4];

// mergeTwoLists(list1, list2);

// var mergeTwoLists = function (list1, list2) {
//   let result = [...list1, ...list2];
//   console.log([...list1, ...list2].sort());
// };

// var list1 = [1, 2, 4],
//   list2 = [1, 3, 4];

// mergeTwoLists(list1, list2);

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// var mergeTwoLists = function (list1, list2) {
//   let dummyhead = new ListNode(0);
//   let prev = dummyhead;

//   console.log(list1.val);

//   // while(list1 && list2){
//   //   if(list1.val <=list2.val){
//   //       list1.next = list1

//   //   }else{

//   //   }
//   // }
// };

// var list1 = [1, 2, 4],
//   list2 = [1, 3, 4];

// mergeTwoLists(list1, list2);

// class List {
//   constructor() {
//     this.head = {
//       value: "",
//       next: null,
//     };
//     this.tail = this.head;
//   }
// }

// let list = new List();
// console.warn(list);

// var isValid = function (s) {
//   s = s.split("");
//   var stack = [];
//   for (var z of s) {
//     if (z === "(" || z === "{" || z === "[") {
//       stack.push(z);
//     } else {
//       var top = stack[stack.length - 1];
//       if (
//         (z === ")" && top === "(") ||
//         (z === "]" && top === "[") ||
//         (z === "}" && top === "{")
//       ) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// };
// let s = "(][](){}[{({";
// isValid(s);

// var mergeSimilarItems = function (items1, items2) {
//   const integermap = new Map();
//   for (let i = 0; i < items1.length; i++) {
//     integermap.set(items1[i][0], items1[i][1]);
//   }

//   for (let j = 0; j < items2.length; j++) {
//     if (integermap.has(items2[j][0])) {
//       integermap.set(items2[j][0], integermap.get(items2[j][0]) + items2[j][1]);
//     } else {
//       integermap.set(items2[j][0], items2[j][1]);
//     }
//   }

//   return Array.from(integermap.entries()).sort((a, b) => a[0] - b[0]);
// };

// var items1 = [
//     [1, 1],
//     [4, 5],
//     [3, 8],
//   ],
//   items2 = [
//     [3, 1],
//     [1, 5],
//   ];

// mergeSimilarItems(items1, items2);

// var isPowerOfTwo = function (n) {
//   // if (n < 1) {
//   //   console.log(false);
//   //   return false;
//   // } else if ((n & (n - 1)) == 0) {
//   //   console.log(true);
//   //   return true;
//   // } else {
//   //   console.log(false);
//   //   return false;
//   // }
//   // var res = n < 1 ? false : (n & (n - 1)) == 0 ? true : false;
//   // console.log(res);

// //   while (n > 1) {
// //     n /= 2;
// //   }

//   console.log((n /= 2));
//   // console.log(n === 1);
// };
// let n = 10;
// isPowerOfTwo(n);

//fibonacci number
// var fib = function (n) {
//   if (n == 0 || n == 1) {
//     return n;
//   } else {
//     console.log(n - 1);
//     console.log(n - 2);
//     return fib(n - 1) + fib(n - 2);
//   }
// };

// let n = 100;

// fib(n);

// var addStrings = function (num1, num2) {
//   let i = num1.length - 1;
//   let j = num2.length - 1;
//   let carry = 0;
//   let sum = "";

//   for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {
//     const digit1 = i < 0 ? 0 : num1.charAt(i) - "0";
//     const digit2 = j < 0 ? 0 : num2.charAt(j) - "0";
//     const digitsSum = digit1 + digit2 + carry;
//     sum = `${digitsSum % 10}${sum}`;
//     carry = Math.floor(digitsSum / 10);
//   }
//   return sum;
// };

// let num1 = "19",
//   num2 = "1239";

// addStrings(num1, num2);

// var longestPalindrome = function (s) {
//   const obj = {};
//   let sum = 0;

//   for (let i = 0; i < s.length; i++) {
//     const ch = s[i];

//     if (!obj[ch]) {
//       obj[ch] = 1;
//     } else {
//       obj[ch] = 0;
//       sum += 2;
//     }
//   }

//   if (sum < s.length) {
//     return sum + 1;
//   } else {
//     return sum;
//   }
// };

// let a;
// console.log(!a); //true and a=1 then its return false

// var s = "abccccdd";
// longestPalindrome(s);

// var arrayPairSum = function (nums) {
//   nums = nums.sort((a, b) => b - a);
//   let output = 0;
//   console.log(nums);
//   for (let i = 1; i < nums.length; i += 2) {
//     output += nums[i];
//   }

//   console.log(output);

//   return output;
// };

// var nums = [6, 6, 5, 2, 2, 1];

// arrayPairSum(nums);

// var romanToInt = function (s) {
//   var num = [];
//   for (var i = 0; i < s.length; i++) {
//     if (
//       (s[i] == "I" &&
//         (s[i + 1] == "V" ||
//           s[i + 1] == "X" ||
//           s[i + 1] == "L" ||
//           s[i + 1] == "C" ||
//           s[i + 1] == "D" ||
//           s[i + 1] == "M")) ||
//       (s[i] == "X" &&
//         (s[i + 1] == "L" ||
//           s[i + 1] == "C" ||
//           s[i + 1] == "D" ||
//           s[i + 1] == "M")) ||
//       (s[i] == "C" && (s[i + 1] == "D" || s[i + 1] == "M"))
//     ) {
//       var newitem = s[i] + s[i + 1];
//       i = i + 1;
//     } else {
//       newitem = s[i];
//     }
//     num.push(newitem);
//     console.log(num);
//   }

//   var numbers = 0;
//   for (i = 0; i < num.length; i++) {
//     var newnumber;
//     switch (num[i]) {
//       case "I":
//         newnumber = 1;
//         break;
//       case "V":
//         newnumber = 5;
//         break;
//       case "X":
//         newnumber = 10;
//         break;
//       case "L":
//         newnumber = 50;
//         break;
//       case "C":
//         newnumber = 100;
//         break;
//       case "D":
//         newnumber = 500;
//         break;
//       case "M":
//         newnumber = 1000;
//         break;
//       case "IV":
//         newnumber = 4;
//         break;
//       case "IX":
//         newnumber = 9;
//         break;
//       case "XL":
//         newnumber = 40;
//         break;
//       case "XC":
//         newnumber = 90;
//         break;
//       case "CD":
//         newnumber = 400;
//         break;
//       case "CM":
//         newnumber = 900;
//         break;
//       default:
//         newnumber = 0;
//     }
//     numbers = numbers + newnumber;
//   }

//   console.log(numbers);

//   return numbers;
// };

// var s = "XCLM";
// romanToInt(s);

// var longestCommonPrefix = function (strs) {
//   let str = strs.sort();
//   console.log(str);
//   let first = str[0];
//   let last = str[str.length - 1];

//   let result = "";
//   for (let i = 0; i < first.length; i++) {
//     if (first[i] === last[i]) {
//       result += first[i];
//     } else {
//       break;
//     }
//   }
//   console.log(result);
//   return result;
// };

// var strs = ["aflight", "xblow", "ycull", "zfdoll", "felower"];
// longestCommonPrefix(strs);

// var intToRoman = function (num) {
//   let roman = {
//       M: 1000,
//       CM: 900,
//       D: 500,
//       CD: 400,
//       C: 100,
//       XC: 90,
//       L: 50,
//       XL: 40,
//       X: 10,
//       IX: 9,
//       V: 5,
//       IV: 4,
//       I: 1,
//     },
//     romanNum = "";

//   for (let i in roman) {
//     while (num >= roman[i]) {
//       romanNum += i;
//       num -= roman[i];
//     }
//   }
//   return romanNum;
// };

// var num = 10930;
// intToRoman(num);

// var findShortestSubArray = function (nums) {
//   let map = {};
//   let max = 0;
//   for (let i = 0; i < nums.length; i++) {
//     map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
//     max = Math.max(map[nums[i]], max);
//   }
//   let result = Infinity;

//   for (let i in map) {
//     if (
//       map[i] == max &&
//       nums.indexOf(+i) !== -1 &&
//       nums.lastIndexOf(+i) != -1
//     ) {
//       result = Math.min(nums.lastIndexOf(+i) - nums.indexOf(+i) + 1, result);
//     }

//     if (result == max) break;
//   }

//   return result;
// };

// var nums = [2, 3, 1, 2, 1, 2, 9, 0, 9, 8, 9, 8, 9];
// // var nums = [1, 2, 3, 1, 2, 1, 2];
// findShortestSubArray(nums);

//search word
// var exist = function (board, word) {
//   let result = false;
//   var check = function (r, c, i) {
//     if (!result) {
//       if (r < 0 || c < 0 || r >= board.length || c >= board[0].length) return; // out of boundary
//       if (board[r][c] != word[i]) return; // wrong character
//       if (i == word.length - 1) {
//         // got to the end means we found a correct path
//         console.log("here true");
//         result = true;
//         return;
//       }

//       board[r][c] = null; // mark our path so we dont go back and forth

//       check(r + 1, c, i + 1);
//       check(r - 1, c, i + 1);
//       check(r, c + 1, i + 1);
//       check(r, c - 1, i + 1);

//       board[r][c] = word[i]; // reset our board , very important
//     }
//   };

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       if (board[i][j] == word[0]) {
//         check(i, j, 0); //passing row collumn and index
//         if (result) return result;
//       }
//     }
//   }

//   return result;
// };

// var board = [
//     ["A", "B", "C", "C"],
//     ["S", "F", "C", "E"],
//     ["N", "D", "E", "D"],
//   ],
//   word = "ABCCED";

// console.log(exist(board, word));

// var dayOfYear = function (date) {
//   console.log(new Date(date.slice(0, 5)));
//   let res = (new Date(date) - new Date(date.slice(0, 4)) + 86400000) / 86400000;
//   console.log(res);
// };

// dayOfYear("2019-02-09");

// const findWords = (words) =>
//   words.filter((w) => {
//     const wArr = w.toLowerCase().split(``);
//     return (
//       wArr.every((c) => `qwertyuiop`.includes(c)) ||
//       wArr.every((c) => `asdfghjkl`.includes(c)) ||
//       wArr.every((c) => `zxcvbnm`.includes(c))
//     );
//   });

// console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));

// var diStringMatch = function (s) {
//   const output = [];
//   let countI = 0;
//   let countD = s.length;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "I") {
//       output.push(countI);
//       countI++;
//     } else {
//       output.push(countD);
//       countD--;
//     }
//   }

//   output.push(s[s.length - 1] === "I" ? countD : countI);

//   return output;
// };

// diStringMatch("IDIDI");

// var heightChecker = function (heights) {
//   const sortedHeights = [...heights].sort((a, b) => a - b);

//   let output = 0;

//   for (let i = 0; i < heights.length; i++) {
//     if (heights[i] !== sortedHeights[i]) output++;
//   }
//   return output;
// };

// heightChecker([5, 1, 2, 3, 4]);

// var validMountainArray = function (arr) {
//   let isIncreasing = false,
//     isDecreasing = false;
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === arr[i + 1]) {
//       return false;
//     } else if (arr[i] < arr[i + 1]) {
//       isIncreasing = true;

//       if (isDecreasing) return false;
//     } else {
//       isDecreasing = true;
//       if (!isIncreasing) return false;
//     }
//   }

//   return isDecreasing && isIncreasing;
// };
// validMountainArray([0, 3, 2, 1, 9]);

// test cases

// 0<3 // true when increasing true
// 3<2  //true when decreasing true
// 2<1  //false  when decreasing true
// 1<9 //true when increasing true

// var MyHashSet = function () {
//   // Really you should just
//   // Make your own object, but instead
//   // we have attached ourself to the
//   // `this` object which then becomes our hashmap.

//   // What you should instead do is this:
//   this.hash_map = {};
//   // And then update our following functions
// };

// MyHashSet.prototype.add = function (key) {
//   // Constant Time
//   // Linear Space | To the size of the input key
//   // You can access objects using array notation

//   this[key] = null;
// };

// MyHashSet.prototype.remove = function (key) {
//   // Constant Time
//   // Constant Space
//   // You can access objects using array notation
//   // Here we use the delete keyword.

//   delete this[key];
// };

// MyHashSet.prototype.contains = function (key) {
//   // Constant Time
//   // Constant Space
//   // This just asks if the property exists

//   return this.hasOwnProperty(key);
// };

// console.log(Math.sign(23));

// var sortArrayByParityII = function (nums) {
//   let res = [];
//   nums = nums.sort();

//   let odd = [];
//   let even = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) odd.push(nums[i]);
//     else {
//       even.push(nums[i]);
//     }
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (i % 2 === 0) res.push(odd.pop());
//     else res.push(even.pop());
//   }
//   return res;
// };

// sortArrayByParityII([4, 2, 5, 7]);

// var runningSum = function (nums) {
//   let temp = 0,
//     arrTemp = [];
//   for (let i = 0; i < nums.length; i++) {
//     temp += nums[i];
//     arrTemp.push(temp);
//   }

//   return arrTemp;
// };

// var nums = [1, 2, 3, 4];
// runningSum(nums);

var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }

  // ransomNote = ransomNote.split("").sort().join("");
  // magazine = magazine.split("").sort().join("");

  for (let i = 0; i < ransomNote.length; i++) {
    let chars = ransomNote.charAt(i);
    let matchindex = magazine.indexOf(chars);
    console.log(magazine[matchindex]);
    console.log(matchindex);
    if (matchindex === -1) {
      return false;
    }

    magazine = magazine.replace(magazine[matchindex], "");

    // magazine = magazine.substring(0, i) + magazine.substring(i + 1);

    console.log(magazine);
  }

  return true;
};

var ransomNote = "sajib",
  magazine = "sapjib";

console.log(canConstruct(ransomNote, magazine));
// efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj
