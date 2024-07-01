/** @format */

// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
const lha = (arr: number[]) => ({
  lowest: Math.min(...arr),
  higest: Math.max(...arr),
  average: (arr.reduce((s, val) => s + val) / arr.length).toFixed(4),
});

console.log(lha([12, 5, 23, 18, 4, 45, 32]));

// Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
// Example : arr =  ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
const arr2str = (arr: string[]) =>
  arr.map((v, i) => (i == arr.length - 1 ? `and ${v}` : v)).join(", ");

// function arr2str2(arr: string[]) {
//   const modified = arr.map((v, index) => {
//     let tmp = "";
//     if (index == arr.length - 1) tmp = `and ${v}`;
//     else tmp = v;
//     return tmp;
//   });
//   console.log(modified);
//   return modified.join(", ");
// }

// console.log(arr2str2(["apple", "banana", "cherry", "date"]));

// Write a function from a given array of numbers and return the second smallest number
// Example : numbers = [5, 3, 1, 7, 2, 6] → 2
const secondSmallest = (arr: number[]) => arr.sort((a, b) => a - b)[1];
console.log(secondSmallest([5, 3, 1, 7, 2, 6]));

// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
// Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
const sum2arr = (arr1: number[], arr2: number[]) =>
  arr1.map((v, i) => v + arr2[i]);

console.log(sum2arr([1, 2, 3], [3, 2, 1]));

// Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
// Example : arr = [1, 2, 3, 4], newElement = 4   →   [1, 2, 3, 4]
// Example : arr = [1, 2, 3, 4], newElement = 7   →   [1, 2, 3, 4, 7]
const addElement = (arr: number[], newElement: number) =>
  arr.indexOf(newElement) == -1 ? arr.concat(newElement) : arr;

function addElement2(arr: number[], newElement: number) {
  if (arr.indexOf(newElement) == -1) return arr.concat(newElement);
  return arr;
}

console.log(addElement([1, 2, 3, 4], 7));

// Write a function from a given array of mixed data types and return the sum of all the number
// Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
const sumNumber = (arr: any[]) =>
  arr.reduce((s, v) => (typeof v == "number" ? s + v : s), 0);

function sumNumber2(arr: any[]) {
  return arr.reduce((sum) => {
    console.log("ini sum", sum);

    return sum + 2;
  }, 10);
}
console.log(sumNumber2([1, 2, 3, 4]), "test");
console.log(sumNumber(["3", 1, "string", null, false, undefined, 2]));

// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements).
// Example :
//               maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
//               The function will return [5, 10, 24, 3, 6]

const f_arr = (maxSize: number, ...numbers: number[]) =>
  //   numbers.filter((v, i) => i < maxSize);
  numbers.slice(0, maxSize);
//   {
//     numbers.length = maxSize;
//     return numbers;
//   };
console.log(f_arr(2, 5, 10, 24, 3, 6, 7, 8));

// Write a function that will combine 2 given array into one array
// Example : arr1 = [1, 2, 3], arr2 =  [4, 5, 6] → [1, 2, 3, 4, 5, 6]

const combineArr = (arr1: number[], arr2: number[]) => arr1.concat(arr2);
console.log(combineArr([1, 2, 3], [4, 5, 6]));

// Write a function to find duplicate values in an array
// Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

const distinctArr = (arr: number[]) =>
  arr.reduce(
    (result: number[], val: number) =>
      arr.indexOf(val) != arr.lastIndexOf(val) && result.indexOf(val) == -1
        ? [...result, val]
        : result,
    []
  );
console.log(distinctArr([1, 2, 2, 2, 3, 3, 4, 5, 5]));

// Write a function to find the difference in 2 given array
// Example : arr1 = [1, 2, 3, 4, 5], arr2 =  [3, 4, 5, 6, 7] → [1, 2, 6, 7]

const diff = (arr1: number[], arr2: number[]) =>
  arr1
    .concat(arr2)
    .filter((v) => arr1.indexOf(v) == -1 || arr2.indexOf(v) == -1);

console.log(diff([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// Based on the array below write a function that will return primitive data types only.
// let arr = [1, [], undefined, {}, "string", {}, []];
// The function will return [1, undefined, “string”]

const primitiveOnly = (arr: any[]) =>
  arr.filter((v) => typeof v != "object" || v == null);
console.log(primitiveOnly([1, [], undefined, {}, "string", {}, [], null]));

// Write a function from the below array of number that will return sum of duplicate values.                                    let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// The function will return 40

const sumDuplicate = (arr: number[]) =>
  arr.reduce(
    (sum, val) => (arr.indexOf(val) != arr.lastIndexOf(val) ? sum + val : sum),
    0
  );

console.log(sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10, 30]));

// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
// Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'
type TRPS = "rock" | "paper" | "scissor";

const rps = (
  user: TRPS,
  computer = ["rock", "paper", "scissor"][Math.floor(Math.random() * 3)] as TRPS
) =>
  `${user} vs ${computer} ${
    (user == "rock" && computer == "scissor") ||
    (user == "paper" && computer == "rock") ||
    (user == "scissor" && computer == "paper")
      ? "win"
      : user == computer
      ? "draw"
      : "lose"
  }`;

console.log(rps("rock"));

const arr: Array<number | string> = [];
const arr2: string[] | number[] = [];

arr.push();
arr2.push();
