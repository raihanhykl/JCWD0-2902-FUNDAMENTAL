// Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

console.log("===== 1 =====");

const givenArr: any[] = ["3", 1, "string", null, false, undefined];
function getSum(array: any[]) {
  let value: number = 0;
  for (var i: number = 0; i < array.length; i++) {
    var index = array[i];
    if (typeof index === "string") {
      value += 1;
    } else if (typeof index === "number") {
      value += index;
    } else {
    }
  }
  return value;
}

console.log(`[${givenArr}] > ${getSum(givenArr)}`);

console.log("===== 2 =====");

function getArr(maxLength: number, ...integers: number[]) {
  const arr1: number[] = [];
  for (var i = 0; i < maxLength; i++) {
    const value: number = integers[i];
    if (value === undefined) break;
    arr1.push(value);
  }
  return arr1;
}

console.log(getArr(5, 6, 4, 2, 4, 1, 4, 2));

console.log("===== 3 =====");
var arr0: number[] = [1, 2, 3, 2, 2, 4];
var arr1: number[] = [4, 5, 6];

function combineArrays(array1: number[], array2: number[]): number[] {
  var arrays: number[] = [];
  for (var i = 0; i < array1.length; i++) {
    arrays.push(array1[i]);
  }
  for (var i = 0; i < array2.length; i++) {
    arrays.push(array2[i]);
  }
  return arrays;
}

console.log(combineArrays(arr0, arr1));

console.log("===== 4 =====");

var arr0: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];
var seen: { [key: number]: number } = {};

function checkDup(arrays: number[]): number[] {
  var arr1: number[] = [];
  for (var i = 0; i < arrays.length; i++) {
    var num = arrays[i];
    if (seen[num]) {
      seen[num]++;
    } else {
      seen[num] = 1;
    }
  }

  for (var key in seen) {
    var item = Number(key);
    if (seen[key] > 1) {
      arr1.push(item);
    }
  }

  return arr1;
}

console.log(checkDup(arr0));

console.log("===== 5 =====");

var givenArr1: any[] = [1, 2, 3, 4, 5];
var givenArr2: number[] = [3, 4, 5, 6, 7];
var seen: { [key: number]: number } = {};
function checkDifference(arrays1: number[], arrays2: number[]) {
  var finalArray: number[] = [];
  for (var i = 0; i < arrays1.length; i++) {
    var num = arrays1[i];
    if (seen[num]) {
      seen[num]++;
    } else {
      seen[num] = 1;
    }
  }
  for (var j = 0; j < arrays2.length; j++) {
    var num1 = arrays2[j];
    if (seen[num1]) {
      seen[num1]++;
    } else {
      seen[num1] = 1;
    }
  }

  for (var key in seen) {
    var value = Number(key);
    if (seen[key] == 1) {
      finalArray.push(value);
    }
  }
  return finalArray;
}

console.log(checkDifference(givenArr1, givenArr2));

console.log("===== 6 =====");

var givenArr3: any[] = [1, [], undefined, {}, "string", {}, []];
function checkArrayData(arrays: any[]) {
  var value: any[] = [];
  for (var i = 0; i < arrays.length; i++) {
    var value1: any[] = arrays[i];
    if (typeof value1 == "object") {
      console.log(`tipe data ${value1} adalah object`);
    } else {
      value.push(value1);
    }
  }
  return value;
}
console.log(checkArrayData(givenArr1));

console.log("===== 7 =====");

var givenArr1: any[] = [10, 20, 40, 10, 50, 30, 10, 60, 10];
var seen: { [key: number]: number } = {};
function sumDuplicate(arrays: any[]) {
  var value2: number = 0;
  for (var i = 0; i < arrays.length; i++) {
    var num = arrays[i];
    if (seen[num]) {
      seen[num]++;
    } else {
      seen[num] = 1;
    }
  }

  for (var key in seen) {
    if (seen[key] > 1) {
      value2 += Number(key) * seen[key];
    }
  }
  return value2;
}

console.log(sumDuplicate(givenArr1));

console.log("===== 7 =====");

function rpsGame(rps: string): string {
  var option: string[] = ["rock", "paper", "scissor"];
  var result: string = "";
  var computer = option[Math.floor(Math.random() * 3)];
  var rpsToUpper = rps.toUpperCase();
  var computerToUpper = computer.toUpperCase();
  if (rps === "rock" || rps === "paper" || rps === "scissor") {
    if (
      (computer === "rock" && rps === "paper") ||
      (computer === "paper" && rps === "scissor") ||
      (computer === "scissor" && rps === "rock")
    ) {
      result = `You pick: ${rpsToUpper}, Computer pick: ${computerToUpper}. Result is.............YOU WIN !!!`;
    } else if (
      (computer === "rock" && rps === "scissor") ||
      (computer === "paper" && rps === "rock") ||
      (computer === "scissor" && rps === "paper")
    ) {
      result = `You pick: ${rpsToUpper}, Computer pick: ${computerToUpper}. Result is.............YOU LOSE !!!`;
    } else {
      result = `You pick: ${rpsToUpper}, Computer pick: ${computerToUpper}. Result is.............DRAW !!!`;
    }
  } else {
    result = "INVALID OPTION !!!";
  }
  return result;
}
console.log(rpsGame("scissor"));
