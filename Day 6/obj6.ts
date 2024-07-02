const car = {
  brand: "BMW",
  Model: "M135i xDrive",
  Price: 800000000,
};

console.log(car);

interface Iuser {
  nama: string;
  greet: () => void;
  hobby?: string;
  greetings?: string;
  multiply?: (a: number, b: number) => number;
  mark?: Imark;
}

interface Imark {
  math: number;
  biology: number;
  computer?: {
    tik: number;
    rpl: number;
  };
}

const user: Iuser = {
  nama: "Raihan",
  greet() {
    console.log("Hallo", this.nama);
  },
  multiply(a: number, b: number): number {
    return a * b;
  },
};

interface Iperson {
  name: string;
  age: number;
}

user.hobby = "ngoding";

console.log(user);

delete user.hobby;

console.log(user);
// console.log(user.multiply(4, 7)); // ini akan error, harus pake if, liat line dibawah
if (user.multiply) user.multiply(2, 5);

user.mark = {
  math: 90,
  biology: 100,
};

console.log(user.mark.computer?.rpl); //optional chaining (kalo ada, dikeluarin value nya, kalau gaada juga ga akan error)

const franky: Iperson = {
  name: "Franky",
  age: 22,
};

// console.log(Object.keys(franky));
// for (let key in franky) {
// //   console.log(franky[key]);
// }

const nama = "Naruto";
const umur = 100;

const naruto = { nama, umur };
console.log(naruto);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
console.log({ ...target, ...source });
console.log(Object.assign(source, target));

console.log(Object.entries(target)); //pecah jadi array
const entries = Object.entries(target);
console.log(entries[0][1]); //manggil value 1`
for (const [key, value] of entries) {
  //for...of biasanya buat array, for...in buat object
  console.log(key, value);
}

const entries2 = [["nama", "jordan"]];
const entries3 = [[123, "jordan"]];
console.log(Object.fromEntries(entries2));
const fromEntries = Object.fromEntries(entries2);
console.log(fromEntries.nama);
const fromEntries2 = Object.fromEntries(entries3);
console.log(fromEntries2["123"]);

class User {
  nama: string;
  alamat: string;
  #email: string;
  constructor(name: string, address: string, email: string) {
    this.nama = name;
    this.alamat = address;
    this.#email = email;
  }
  showEmail() {
    console.log(this.#email);
  }
}

const agung = new User("Agung", "Permata Pamulang", "agung@mail.com");
console.log(agung.alamat);

const arip = new User("arip", "Permata Indah", "arip@gmail.com");
console.log(arip);

arip.showEmail();

//static property

class DB {
  static #coneection = "";
  static #initializedConnection() {
    const randomNumber = Math.ceil(Math.random() * 100);
    DB.#coneection = `New Database Connection ${randomNumber}`;
  }
  static getConnection() {
    if (!DB.#coneection) DB.#initializedConnection();
    return DB.#coneection;
  }
}

console.log(DB.getConnection()); //langsung manggil classnya (DB), gaperlu pakai instance (const a: DB)

class User3 {
  #fname: string;
  #lname: string;
  constructor(fname: string, lname: string) {
    this.#fname = fname;
    this.#lname = lname;
  }
  get userName() {
    return this.#fname + " " + this.#lname;
  }
  set userName(name) {
    if (typeof name == "string" && name.length > 5 && !name.endsWith(" ")) {
      const splitted = name.split(" ");
      this.#fname = splitted[0];
      this.#lname = splitted[1];
    } else "nama kurang dari 5 karakter";
  }
}

class User3Fan extends User3 {
  constructor(fname: string, lname: string, mother: string) {
    super(fname, lname);
  }
}

const userrr = new User3("Raihan", "Haykal");
userrr.userName = "ayam goreng";
console.log(userrr.userName);
