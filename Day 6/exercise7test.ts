const input1 = [{ a: 2 }, { a: 1 }];
const check = (array: { a: number }[]) =>
  array[0].a && array[1].a ? true : false;
console.log(check(input1));
const arr = ["anggur", "apel", "jeruk", "anjing"];
const arrMap = arr.map((value, index) => console.log(value));
console.log(arrMap);

const arr1: { nama: string; umur: number }[] = [
  { nama: "raihan", umur: 20 },
  { nama: "bogel", umur: 23 },
  { nama: "haykal", umur: 21 },
];

arr1.map((value) => console.log(value.nama));
// arr1
//   .sort((a, b) => a.umur - b.umur)
//   .map((value) => console.log(value.nama, value.umur));

arr1
  .sort((a, b) => a.umur - b.umur)
  .filter((value) => value.umur >= 21)
  .forEach((value) => console.log(value.nama, value.umur));
