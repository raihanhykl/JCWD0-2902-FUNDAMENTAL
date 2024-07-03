console.log("===== 1 ======");

const arr1ex1 = [{ a: 1 }, { a: 2 }];

const checkObject = (array: any[]) =>
  array[0].a === array[1].a ? true : false;
console.log("ex 1: ", arr1ex1, checkObject(arr1ex1));

console.log("====== 2 ======");
const obj1ex1 = { a: 1, b: 2 };
const obj1ex2 = { a: 1, c: 3 };
// function intersect(obj1: any, obj2: any) {
//   return Object.entries(obj1).filter((key) => obj1[key][0] === obj2);

//   //[["a",1], ["b", 2]]
// }

// console.log(intersect(obj1ex1, obj1ex2));

const intersect2 = (obj1: any, obj2: any) =>
  Object.entries(obj1).filter(([key]) => obj1[key] == obj2[key]);
// entries [[a:1]]
// filter => key = "a" => obj1["a"] == obj2["a"]
// obj = {a :1} =>  obj.a atau obj["a"]

console.log(intersect2(obj1ex1, obj1ex2), "ini intersect 2");

// console.log(intersect(obj1ex1, obj1ex2), "ini intersect");

console.log("====== 3 ======");
const arr2ex1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];
const arr2ex2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];
function joinObj(array1: any[], array2: any[]) {
  const mixArr = [...array1, ...array2];
  console.log(mixArr);

  const result = mixArr.reduce((res, val) => {
    const x = res.find((value: any) => value.name === val.name);
    console.log(x);

    if (!x) res.push(val);
    return res;
  }, []);
  return result;
}
console.log(joinObj(arr2ex1, arr2ex2));

const testArr = [...Object.entries(obj1ex1), ...Object.entries(obj1ex2)];
// console.log(testArr);

// console.log(testArr.indexOf(["c", 3], 0));
