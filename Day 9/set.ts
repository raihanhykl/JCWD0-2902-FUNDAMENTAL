const arr: number[] = [1, 2, 3, 1, 2, 1, 2];
const arr1: number[] = [];
const newNumber = new Set(arr); //set akan storing nilai yang value nya unique kedalam object, dan memiliki beberapa built in method
/** 
● add
● delete
● has
● clear
● size
● entries
● forEach */
console.log(newNumber);
newNumber.add(10);
console.log(newNumber);
newNumber.forEach((v) => arr1.push(v));
console.log(arr1);
