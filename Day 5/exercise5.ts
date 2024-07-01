// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

console.log("===== 1 ======");

var arrValue: number[] = [12, 5, 23, 18, 4, 45, 32];
var sum: number = 0;
for (var i = 0; i < arrValue.length; i++) {
  sum += arrValue[i];
}
var sort = arrValue.sort((a, b) => b - a);

console.log(
  `USING SORT: Max: ${sort[0]}, Min: ${sort[sort.length - 1]}, Average: ${
    sum / arrValue.length
  }`
);
console.log(
  `USING NO SORT Max: ${Math.max(...arrValue)}, Min: ${Math.min(
    ...arrValue
  )}, Average: ${sum / arrValue.length}`
);

// Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
console.log("===== 2 ======");
var arrValue1: string[] = ["apple", "banana", "cherry", "date"];
function joinArray(arrays: string[]): string {
  arrays[arrays.length - 1] = "and " + arrays[arrays.length];
  return `"${arrays.join(", ")}"`;
}
console.log(joinArray(arrValue1));

// Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
console.log("===== 3 ======");
var arrValue2: number[] = [5, 3, 1, 7, 2, 6];
function secSmallestNum(arrays: number[]): number {
  arrays.sort((a, b) => a - b);
  return arrays[1];
}
console.log(secSmallestNum(arrValue2));

const secondSmallest = (arr: number[]) => arr.sort((a, b) => a - b)[1];
console.log(secondSmallest(arrValue2));

// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays
// are of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

console.log("===== 4 ======");
var arrValue3: number[] = [1, 2, 3];
var arrValue4: number[] = [3, 2, 1];
function addTwoArrays(arrays1: number[], arrays2: number[]): number[] {
  var value: number[] = [];
  for (var i = 0; i < arrays1.length; i++) {
    value.push(arrays1[i] + arrays2[i]);
  }
  return value;
}
console.log(addTwoArrays(arrValue3, arrValue4));

// Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]

console.log("===== 5 ======");
var givenArr4: number[] = [1, 2, 3, 4];
function addToLastIndex(arrays: number[], operator: number): number[] {
  var checkSeen = true;
  for (var i = 0; i < arrays.length; i++) {
    if (arrays[i] === operator) {
      checkSeen = false;
      break;
    }
  }
  if (checkSeen == true) arrays.push(operator);
  return arrays;
}

console.log(addToLastIndex(givenArr4, 3));

// Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

console.log("===== 6 ======");

var givenArr5: any[] = ["3", 1, "string", null, false, undefined, 2];
function mixDataArray(arrays: any[]): number {
  var value: number = 0;
  for (var i = 0; i < arrays.length; i++) {
    if (typeof arrays[i] == "number") value += arrays[i];
  }
  return value;
}

console.log(mixDataArray(givenArr5));

// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
// array can only contain 5 elements).
// a. Example :

// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]

console.log("===== 7 ======");
function intToArray(maxLength: number, ...givenNum: number[]): number[] {
  var value: number[] = [];
  for (var i = 0; i <= maxLength - 1; i++) {
    if (typeof givenNum[i] != "undefined") value.push(givenNum[i]);
  }
  return value;
}

console.log(intToArray(8, 1, 2, 3, 4, 5, 6, 7, 8));

// Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]

console.log("===== 8 ======");

var givenArr6: number[] = [1, 2, 3];
var givenArr7: number[] = [4, 5, 6];

function combineArrays(array1: number[], array2: number[]): number[] {
  var value: number[] = array1.concat(array2);
  return value;
}
console.log(combineArrays(givenArr6, givenArr7));

// 2. Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
console.log("===== 9 ======");
var givenArr8: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];
var checkDupl: { [key: number]: number } = {};
function checkDuplicate(arrays: number[]): number[] {
  var value: number[] = [];
  for (var i = 0; i < arrays.length; i++) {
    var num = arrays[i];
    if (checkDupl[num]) {
      checkDupl[num]++;
    } else {
      checkDupl[num] = 1;
    }
  }

  for (var key in checkDupl) {
    if (checkDupl[key] > 1) {
      value.push(Number(key));
    }
  }
  return value;
}

console.log(checkDuplicate(givenArr8));

// Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

console.log("===== 10 ======");

var givenArr9: number[] = [1, 2, 3, 4, 5];
var givenArr10: number[] = [3, 4, 5, 6, 7];
var checkDupl: { [key: number]: number } = {};
function checkDifferent(array1: number[], array2: number[]): number[] {
  var value: number[] = [];
  for (var i = 0; i < array1.length; i++) {
    var num = array1[i];
    if (checkDupl[num]) {
      checkDupl[num]++;
    } else {
      checkDupl[num] = 1;
    }
  }
  for (var i = 0; i < array2.length; i++) {
    var num = array2[i];
    if (checkDupl[num]) {
      checkDupl[num]++;
    } else {
      checkDupl[num] = 1;
    }
  }

  for (var key in checkDupl) {
    if (checkDupl[key] == 1) {
      value.push(Number(key));
    }
  }

  return value;
}

console.log(checkDifferent(givenArr9, givenArr10));

// Based on the array below write a function that will return primitive data types only.
// let arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]

console.log("===== 11 ======");

var givenArr11: any[] = [1, [], undefined, {}, "string", {}, []];
function primOnly(arrays: any[]): any[] {
  var value: any[] = [];
  for (var i = 0; i < arrays.length - 1; i++) {
    if (typeof arrays[i] !== "object") value.push(arrays[i]);
  }
  return value;
}

console.log(primOnly(givenArr11));

// Write a function from the below array of number that will return sum of duplicate values.
// let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40

console.log("===== 12 ======");

var givenArr12: number[] = [10, 20, 40, 10, 50, 30, 10, 60, 10];
var checkDupl: { [key: number]: number } = {};

function sumDup(arrays: number[]): number {
  var value: number = 0;
  for (var i = 0; i < arrays.length; i++) {
    var num = arrays[i];
    if (checkDupl[num]) {
      checkDupl[num]++;
    } else {
      checkDupl[num] = 1;
    }
  }

  for (var key in checkDupl) {
    if (checkDupl[key] > 1) value += Number(key) * checkDupl[key];
  }
  return value;
}

console.log(sumDup(givenArr12));

// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

console.log("===== 13 ======");

function rockPaperScissor(input: string): string {
  var option: string[] = ["rock", "paper", "scissor"];
  var computer: string = option[Math.floor(Math.random() * 3)];
  var result: string = "";
  if (input == "rock" || input == "paper" || input == "scissor") {
    if (
      (computer == "rock" && input == "paper") ||
      (computer == "paper" && input == "scissor") ||
      (computer == "scissor" && input == "rock")
    ) {
      result = `You pick: ${input.toUpperCase()}, Computer pick: ${computer.toUpperCase()}, result is...... YOU WIN !!!`;
    } else if (
      (computer == "rock" && input == "scissor") ||
      (computer == "paper" && input == "rock") ||
      (computer == "scissor" && input == "paper")
    ) {
      result = `You pick: ${input.toUpperCase()}, Computer pick: ${computer.toUpperCase()}, result is...... YOU LOSE !!!`;
    } else {
      result = `You pick: ${input.toUpperCase()}, Computer pick: ${computer.toUpperCase()}, result is...... DRAW !!!`;
    }
  } else {
    result = "Invalid Option !!!";
  }
  return result;
}

console.log(rockPaperScissor("paper"));
