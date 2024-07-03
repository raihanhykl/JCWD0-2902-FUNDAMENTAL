/** @format */

interface IUser {
  name: string;
  greet: () => void;
  hobby?: string;
  hello?: string;
  multiply: (a: number, b: number) => number;
  a: number;
  b: number;
  marks?: IMark;
}

interface IMark {
  math?: number;
  biology: number;
}
const user: IUser = {
  name: "David",
  greet() {
    console.log("Hello", this.name);
  },
  multiply(a: number, b: number) {
    return a * b;
  },
  a: 2,
  b: 5,
};

console.log(user.a * user.b);
console.log(user.multiply(2, 4));

user.hobby = "coding";
user.hello = "hahaha";
delete user.hobby;

console.log(user);

// user.marks = {
//   biology: 90,
// };
console.log(user.marks?.biology); //optional chaining

user.greet();
console.log(user);
type TPerson = {
  name: string;
  age: number;
  address: string;
};

const person: TPerson = {
  name: "Frengky",
  age: 24,
  address: "bsd",
};

type TKey = "name";

// person["abc" bukan suka2 kita];

for (let bogel in person) {
  // console.log(bogel); //name,age
  console.log(person[bogel as "name"]);

  // console.log(person[key as TKey]);
}
