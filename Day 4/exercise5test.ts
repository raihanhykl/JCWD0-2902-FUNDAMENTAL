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

function checkDup(arrays: number[]): number[] {
  var arr1: number[] = [];
  for (var i = 0; i < arrays.length; i++) {
    var value = arrays[i];
    var value1 = arrays.filter((v) => v == arrays[i]);
    if (value1.length > 1) arr1.push(value1[0]);
  }

  return arr1;
}

console.log(checkDup(arr0));
