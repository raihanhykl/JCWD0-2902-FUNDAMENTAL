/** @format */

const car = {
  brand: "BMW",
  model: "M135i xDrive",
  price: 800000000,
};

console.log(car);

//literal
var user = {};

//obj costructor
var user = new Object();

user = {
  name: "David",
  greet() {
    console.log("Hello!");
  },
}; // declare object

user.hobby = "coding"; //add prop bila belum ada key hobby
console.log(user);

delete user.hobby; //delete key hobby
console.log(user);

user.name = "Bobby"; //update prop karena key name sudah ada
console.log(user);

console.log(user.name); //read value prop name dari obj user cara pertama
console.log(user["name"]); //read value prop name dari obj user cara kedua

user.marks = {
  math: 80,
  biology: 90,
};

console.log(user);
console.log(user.address?.street); //optional chaining.

let person = {
  name: "Frengky",
  age: 24,
};

console.log(Object.keys(person)); //return array of person keys

for (let key in person) {
  console.log(person[key]);
}

let a, b, c;
// a = 10;
// b = 20;
// c = 30;
// [a, b, c] = [10, 20, 30];

[a, b] = [10, 20];
[b, a] = [a, b + a]; //[10,20+10] => [10,30]

// console.log(a, b);

// a = a + 5;
// a = 10 + 5
person = {
  name: "Budi",
  age: 20,
};

const { name, age } = person;
console.log(name);

if (name == "naruto" && age == 20) console.log("hello");

const dataOne = [1, 2, 3];
const dataTwo = [4, 5, 6];
const merged = [...dataOne, dataTwo, [2, 3, 4, 5]];
// console.log(merged); // [1,2,3,[4,5,6]]
console.log(merged.length);

const objectOne = {
  name: "David",
};
const objectTwo = {
  email: "David@mail.com",
};

const finalObject = { ...objectOne, objectTwo, age: 20 };

console.log(finalObject); // { name:, objectTwo: { email} }

const nama = "naruto";
const umur = 100;
const school = "konoha";
const obj = { nama, umur, sekolah: school };

console.log(obj);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

console.log({ ...target, ...source, c: 100 });
console.log(Object.assign(source, target));

console.log(Object.entries(target));
const entries = Object.entries(target);
console.log(entries[0][1]); // 1
for (const [key, value] of entries) {
  console.log(key, value);
}
const entries2 = [[123, "jordan"]];
console.log(Object.fromEntries(entries));
const fromEntries = Object.fromEntries(entries2);
console.log(fromEntries["123"]);
