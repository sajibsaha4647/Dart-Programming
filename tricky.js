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

var longestCommonPrefix = function (strs) {
  let str = strs.sort();
  console.log(str);
  let first = str[0];
  let last = str[str.length - 1];

  let result = "";
  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) {
      result += first[i];
    } else {
      break;
    }
  }

  return result;
};

let strs = ["flow", "ddlow", "xlight", "tlows"];
longestCommonPrefix(strs);
