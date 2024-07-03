/** @format */
class User {
  name; //public
  #email; // private key

  constructor(name, address, email) {
    this.name = name;
    this.address = address || "bsd";
    this.#email = email;
  }
  greeting() {
    console.log("hello", this.name);
  }

  showEmail() {
    console.log(this.#email);
  }
}

const User2 = class {
  greeting() {
    console.log("hello world");
  }
};

const user = new User("jordan", "jkt", "jordan@mail.com");
console.log(user.greeting);
user.greeting();
console.log(user instanceof User); // check instance dari variable dengan class
console.log(user);

user.showEmail(); // read-only
user.email = "udin@mail.com"; //tidak mengubah value dari private key
user.name = "huhu";
user.showEmail();

class DB {
  test = 123;
  static #connection = "";
  static #initializedConnection() {
    const randomNumber = Math.ceil(Math.random() * 100); // 0-99
    DB.#connection = `New Database Connection ${randomNumber}`;
  }
  static getConnection() {
    if (!DB.#connection) DB.#initializedConnection();
    return DB.#connection;
  }
}
const db = new DB();

const a = new Object();

console.log(DB.getConnection());
console.log(DB.getConnection());
console.log(DB.getConnection());
console.log(DB.test);

class User3 {
  #firstName;
  #lastName;
  constructor(fname, lname) {
    this.#firstName = fname;
    this.#lastName = lname;
  }
  get fullname() {
    return this.#firstName + " " + this.#lastName;
  } // read-only
  set fullname(value) {
    const splittedValues = value.split(" "); // "ayam goreng" => ["ayam","goreng"]
    this.#firstName = splittedValues[0];
    this.#lastName = splittedValues[1];
  } //write-only

  // read and write apabila ada get dan set
}

const user3 = new User3("naruto", "uzumaki");
console.log(user3.fullname);
user3.fullname = "ayam goreng"; // reassign key fullname
user3.fullname2 = "ayam goreng"; // reassign key fullname

console.log(user3.fullname);

class Matematika {
  #number1 = 1;
  #number2 = 2;

  get showNumber1() {
    return this.#number1;
  }
  set changeNumber1(value) {
    if (typeof value == "number") this.#number1 = value;
    else console.log("bukan number");
  }
}

const math = new Matematika();

console.log(math.showNumber1);
math.changeNumber1 = 3;
console.log(math.showNumber1);

class Employee {
  #name;
  #lastname;
  constructor(name) {
    this.EmployeeName = name;
  }

  get EmployeeName() {
    return this.#name + " " + this.#lastname;
  }

  set EmployeeName(name) {
    if (typeof name == "string" && name.includes(" ") && !name.endsWith(" ")) {
      const splillted = name.split(" ");
      this.#name = splillted[0];
      this.#lastname = splillted[1];
    } else console.log("tipe data bukan string atau kurang dari 5 karakter");
  }
}
const em = new Employee("Jhonn");
em.EmployeeName = "David Jhonn";
console.log(em.EmployeeName);

class Product {
  #createdBy;

  constructor(name, price) {
    this.productName = name;
    this.price = price;
    this.#createdBy = "System";
  }
  showData() {
    console.log(
      this.productName,
      "price",
      "Rp." + Number(this.price).toLocaleString("id-ID")
    );
  }
}
class Book extends Product {
  constructor(name, price, author) {
    super(name, price);
    this.author = author;
  }
}

class Book2 extends Book {
  constructor(episode) {
    super("buku 1", 2000, "s jhonny");
    this.episode = episode;
  }
  showData() {
    console.log("bedaa");
  }
}
const buku1 = new Book("buku coding 1", 5000, "jhonny s");
console.log(buku1);
buku1.showData();

const buku2 = new Book2("jadi dokter");
console.log(buku2);

buku2.showData();
