/** @format */

// Create a function that can create a triangle pattern according to the height we provide like the following :
// 01
// 02  03
// 04  05  06
// 07  08  09  10

// Parameters : height → triangle height

const triangle = (h: number): void => {
  let number = 1; //
  for (let i = 1; i <= h; i++) {
    let row = "";
    //i = 1
    for (let j = 0; j < i; j++) {
      //j = 5
      //i = 5
      //j < i
      //row = "11 12 13 14 15"
      //number = 16
      row += `${number < 10 ? "0" + number : number} `;
      number++;
    }
    console.log(row);
  }
};

triangle(5);

// Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// Parameters : n → total looping
// Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

const fizzBuzz = (n: number) => {
  let result = "";
  for (let i = 1; i <= n; i++) {
    if (!(i % 3) && !(i % 5)) result += ", FizzBuzz";
    else if (!(i % 3)) result += ", Fizz";
    else if (!(i % 5)) result += ", Buzz";
    else result += ", " + i;
  }
  console.log(`n = ${n} →` + result);
};
fizzBuzz(15);

// Create a function to calculate Body Mass Index (BMI)
// Formula : BMI = weight (kg) / (height (meter))²
// Parameters : weight & height
// Return values :
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”z

const BMI = (w: number, h: number) => {
  const bmi = w / h ** 2;
  if (bmi < 18.5) return "less weight";
  else if (bmi < 24.9) return "ideal";
  else if (bmi < 29.9) return "overweight";
  else if (bmi < 39.9) return "very overweight";
  else return "obesity";
};

console.log(BMI(75, 1.75));

// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

const removeOdd = (...numbers: number[]) => numbers.filter((n) => !(n % 2));
console.log(removeOdd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]

const convertArr = (str: string) => str.split(" ");
console.log(convertArr("Hello World"));
