/** @format */

// Create a function to calculate array of student data
// The object has this following properties :
// Name → String
// Email → String
// Age → Date
// Score → Number
// Parameters : array of student
// Return values :
// Object with this following properties :
// Score
// Highest
// Lowest
// Average
// Age
// Highest
// Lowest
// Average

class Student {
  name: string;
  email: string;
  age: number;
  score: number;
  constructor(name: string, email: string, age: number, score: number) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}

class LHA {
  highest: number;
  lowest: number;
  average: number;
  constructor(numbers: number[]) {
    this.highest = Math.max(...numbers);
    this.lowest = Math.min(...numbers);
    this.average = Number(
      (numbers.reduce((sum, val) => sum + val) / numbers.length).toFixed(2)
    );
  }
}

const calculateLHA = (students: Student[]) => ({
  Score: new LHA(students.map(({ score }) => score)),
  Age: new LHA(students.map(({ age }) => age)),
});

const students = [
  new Student("naruto", "naruto@mail.com", 18, 55),
  new Student("sasuke", "sasuke@mail.com", 20, 100),
  new Student("sakura", "sakura@mail.com", 20, 78),
];
console.log(calculateLHA(students));

// Create a program to create transaction
// Product Class
// Properties
// Name
// Price
// Transaction Class
// Properties
// Total
// Product
// All product data
// Qty
// Add to cart method → Add product to transaction
// Show total method → Show total current transaction
// Checkout method → Finalize transaction, return transaction data

class Product {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

interface ICart extends Product {
  qty: number;
}

const pro = {
  name: "indomie",
  price: 2000,
};

class Transaction {
  #carts: ICart[] = [];
  #total: number = 0;

  addToCart(product: Product, qty: number) {
    const checkIndex = this.#carts.findIndex(
      (cart) => cart.name == product.name
    );
    if (checkIndex !== -1)
      this.#carts[checkIndex].qty += qty; // jika barang ketemu, tambah qtynya
    else this.#carts.push({ ...product, qty }); // barang baru, push ke dalam cart
  }
  #calculateTotal() {
    this.#total = this.#carts.reduce((sum, cart) => {
      console.log(
        `Product: '${cart.name}' Qty: ${
          cart.qty
        } Price: Rp.${cart.price.toLocaleString("id-ID")}`
      );
      return sum + cart.price * cart.qty;
    }, 0);
  }

  showTotal() {
    if (!this.#carts.length) return console.log("cart masih kosong");
    console.log("====================");
    this.#calculateTotal();
    console.log("====================");
    console.log(`Total Rp. ${this.#total.toLocaleString("id-ID")}`);
  }

  #reset() {
    this.#carts = [];
    this.#total = 0;
  }

  checkOut(payment: number) {
    this.showTotal();
    if (payment < this.#total) return console.log("uang anda kurang");
    console.log(
      `kembalian anda Rp. ${(payment - this.#total).toLocaleString("id-ID")}`
    );
    this.#reset();
  }
}

const book = new Product("buku komik", 5000);
const sepeda = new Product("sepeda fixie", 2100000);

const transaction = new Transaction();
transaction.showTotal();

transaction.addToCart(book, 3);
transaction.addToCart(book, 2);
transaction.addToCart(sepeda, 1);
// transaction.showTotal();
transaction.checkOut(20000000);
