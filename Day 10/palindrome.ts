// let palindrome: string | string[] = "race, car"
// let arrAlpha = "abcdefghijklmnopqrstuvwxyz".split("")
// palindrome = palindrome.split("").filter((char) => arrAlpha.includes(char))
// let reversed = [...palindrome].reverse

// console.log(palindrome.join("") === reversed);
var fibGenerator = function* (res: number) {
  var result: number[] = [];
  for (var i = 0; i <= res; i++) {
    if (result.length == 0) {
      result.push(0);
    } else if (result.length == 1) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 1]);
    }
  }
  return result;
};

console.log(fibGenerator(5));
