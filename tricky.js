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

var age = 10;

(() => {
  console.log(age);
  var age = 20;
  console.log(age);
})();
