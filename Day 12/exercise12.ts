// Given an array nums of size n, return the majority element. The majority element is the element that
// appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// ● Example 1:
// ○ Input: nums = [3,2,3]
// ○ Output: 3
// ● Example 2:
// ○ Input: nums = [2,2,1,1,1,2,2]
// ○ Output: 2
console.log("===== 1 =====");
const checkMajority = (arr: number[]) => {
  let num: { [key: number]: number } = {};
  let resArray: number[] = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    let k = arr[i];
    num[k] ? num[k]++ : (num[k] = 1);
  }
  for (var key in num) {
    num[key] >= arr.length / 2 ? resArray.push(Number(key)) : key;
  }
  console.log(resArray);
};

checkMajority([2, 2, 1, 1, 1, 2, 1, 2]);

// ● Create a function to convert roman numeral to integer.
// ● Example 1:
// ○ Input: s = "III”
// ○ Output: 3
// ○ Explanation: III = 3.

console.log("===== 2 =====");
//I=1, V=5, X=10, L=50, C=100, M=1000
const romanNum = (roman: string) => {
  const romChar: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    M: 1000,
  };
  let value: number = 0;
  for (var i = 0; i < roman.length; i++) {
    if (romChar[roman[i]] < romChar[roman[i + 1]]) {
      value += romChar[roman[i + 1]] - romChar[roman[i]];
      i++;
    } else {
      value += romChar[roman[i]];
    }
  }
  console.log(`Number of ${roman} is ${value}`);
};

romanNum("IM");

console.log("===== 3 =====");

const pascalTriangle = (num: number) => {
  let arr: number[][] = [];
  if (num == 1) {
    arr.push([1]);
  } else {
    for (var i = 0; i < num; i++) {
      if (i == 0) {
        arr.push([1]);
      } else if (i == 1) {
        arr.push([1, 1]);
      } else {
        let val = arr[arr.length - 1];
        let val1: number[] = [];
        for (let j = 0; j < val.length - 1; j++) {
          val1.push(val[j] + val[j + 1]);
        }
        arr.push([1, ...val1, 1]);
      }
    }
  }
  console.log(num, "=", arr);
};

pascalTriangle(5);

console.log("===== 4 =====");
const maxProfit = (arr: number[]) => {
  let buyPrice = Math.min(...arr);
  let index = arr.indexOf(buyPrice);
  let resArr = arr.slice(index);
  let sellPrice = Math.max(...resArr);
  console.log(
    `Buy $${buyPrice}, Sell $${sellPrice}. Profit: $${sellPrice - buyPrice}`
  );
};

maxProfit([7, 3, 2, 5, 1]);
