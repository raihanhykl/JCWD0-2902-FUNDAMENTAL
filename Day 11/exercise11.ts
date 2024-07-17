console.log("===== 1 =====");
// ● Create a function to convert Excel sheet column title to its corresponding column number.
// ● Example :
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
const sheetColumn = (letter: string) => {
  let result: number = 0;
  for (let i = 0; i < letter.length; i++) {
    result *= 26;
    result += letter.toUpperCase().charCodeAt(i) - "A".charCodeAt(0) + 1;
  }
  return result;
};

console.log(sheetColumn("TAI"));

console.log("===== 2 =====");
// Given a non-empty array of integers nums, every element appears twice except for one. Find that
// single one.
// ● Example 1:
// ○ Input: nums = [2,2,1]
// ○ Output: 1
// ● Example 2:
// ○ Input: nums = [4,1,2,1,2]
// ○ Output: 4

const checkFindSingle = (arr: number[]) =>
  arr.reduce(
    (count: number[], val: number) =>
      arr.indexOf(val) == arr.lastIndexOf(val) && count.indexOf(val) == -1
        ? [...count, val]
        : count,
    []
  );
console.log(checkFindSingle([4, 1, 2, 1, 2]));

console.log("===== 3 =====");
// ● Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// ● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// ● Example 1:
// ○ Input: s = "anagram", t = "nagaram"
// ○ Output: true
// ● Example 2:
// ○ Input: s = "rat", t = "car"
// ○ Output: false

const checkAnagram = (t: string, s: string) =>
  t.split("").sort().join("") === s.split("").sort().join("") ? true : false;
console.log(checkAnagram("anagram", "nagaram"));

console.log("===== 4 =====");
// ● You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2
// steps. In how many distinct ways can you climb to the top?
// ● Example 1:
// ○ Input: n = 2
// ○ Output: 2
// ○ Explanation: There are two ways to climb to the top.
// ■ 1. 1 step + 1 step
// ■ 2. 2 steps

const stairs = (num: number) => {
  let a: number = 1;
  let b: number = 1;
  let c: number = 0;
  if (num <= 1) return 1;
  for (let i = 2; i <= num; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
};

console.log(stairs(6));
