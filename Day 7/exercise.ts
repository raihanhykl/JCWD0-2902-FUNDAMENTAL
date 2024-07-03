/** @format */

// Create a function to check if two objects are equal
// Example
// Input :  { a: 2 } & { a: 1 }
// Output: false
// Example
// Input :  { a: “Hello” } & { a: 1 }
// Output: false
// Example
// Input :  { a: 1 } & { a: 1 }
// Output: true

type TAnyObj = {
  [key: string]: any;
};
const checkEqual = (obj1: TAnyObj, obj2: TAnyObj) =>
  Object.keys(obj1).reduce(
    (isEqual, key, i, self) =>
      isEqual
        ? self.length === Object.keys(obj2).length && obj1[key] === obj2[key] // 2 == 2 && 1 == 1
        : false,
    true
  );

const obj1 = { a: 1, c: 1 }; //["a","c"].reduce
const obj2 = { c: 1 };
//filter = obj1.c == obj2.c ? true
//[["c",1]]

console.log(Object.keys(obj1)); //["a"]
console.log(Object.keys(obj2)); // ["a"]
// console.log(obj1.a == obj2.a);

console.log(checkEqual(obj1, obj2));

console.log(obj1["a"]);
const variable = "a";
console.log(obj1[variable]);

// Create a function to get the intersection of two objects
// Example
// Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// Output: { a: 1 }

const intersect = (obj1: TAnyObj, obj2: TAnyObj) =>
  Object.fromEntries(
    Object.entries(obj1).filter(([key]) => obj1[key] === obj2[key])
  );
// console.log(Object.entries(obj1));

console.log(intersect({ a: 1, b: 2 }, { a: 1, c: 3, b: 2 }));

// Create a function to merge two array of student data and remove duplicate data
// Student data : name & email
// Example :
const students1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];
const students2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];
// Result :
// ArrayResult → [
// { name: 'Student 1', email : 'student1@mail.com'  },
// { name: 'Student 2', email : 'student2@mail.com'  },
// { name: 'Student 3', email : 'student3@mail.com'  }
// ]

type TStudent = {
  name: string;
  email: string;
};

const merged2array = (students1: TStudent[], students2: TStudent[]) =>
  students1
    .reduce(
      (merged, value) =>
        merged.find((v) => v.name == value.name)
          ? merged
          : merged.concat(value),
      [...students2]
    )
    .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0));
console.log(merged2array(students1, students2));

// Create a function that can accept input as an array of objects and switch all values into property and property into value
// Example :
// Input : [{ name: ‘David’, age: 20 }] // [["name","david"],["age",20]] => [["david","name"],[20,"age"]] => { david: "name", "20": "age"}
// Output : [{ David: ‘name’, 20: ‘age’}]

const switchObj = (arr: TAnyObj[]) =>
  arr.map((obj) =>
    Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]))
  );

console.log(switchObj([{ name: "David", age: 20 }]));

// Create a function to find a factorial number using recursion
// Example
// Input :  5
// Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

const recursionFactorial = (input: number): number =>
  input > 1 ? input * recursionFactorial(input - 1) : input;

console.log(recursionFactorial(5));
//3 > 1
// 5 * 24 = 120
