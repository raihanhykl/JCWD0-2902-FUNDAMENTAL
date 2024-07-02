class Student {
  nama: string;
  email: string;
  age: number;
  score: number;
  constructor(nama: string, email: string, age: number, score: number) {
    this.nama = nama;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}

const student1 = new Student("Raihan", "Raihan@mail.com", 23, 90);
const student2 = new Student("Haykal", "Haykal@mail.com", 25, 70);
const student3 = new Student("Messi", "Messi@mail.com", 30, 80);
const student4 = new Student("Ronaldo", "Ronaldo@mail.com", 23, 85);

function check(student: any) {
  let score: number[] = [];
  let age: number[] = [];
  for (var i = 0; i < student.length; i++) {
    score.push(student[i].score);
    age.push(student[i].age);
  }
  const result = {
    scores: {
      highest: Math.max(...score),
      lowest: Math.min(...score),
      average: score.reduce((s, val) => s + val) / score.length,
    },
    age: {
      highest: Math.max(...age),
      lowest: Math.min(...age),
      average: age.reduce((s, val) => s + val) / age.length,
    },
  };

  return result;
}

console.log(check([student1, student2, student3, student4]));

console.log("====== 2 =======");

class Product {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  static #product: string[] = [];
  static #total: number = 0;

  set addCart(product: any) {
    Transaction.#product.push(product.name);
    Transaction.#total += product.price;
  }

  get getTotal() {
    return Transaction.#total;
  }

  get checkOut() {
    return `list produk: ${Transaction.#product}. Total harga: ${
      Transaction.#total
    }`;
  }
}

const nabati = new Product("nabati", 500);
const cokelat = new Product("coklat", 10000);
const trans = new Transaction();
trans.addCart = nabati;
trans.addCart = cokelat;
console.log(trans.getTotal);
console.log(trans.checkOut);
