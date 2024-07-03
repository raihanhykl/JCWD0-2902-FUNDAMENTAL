/** @format */

class User {
  name: string;
  address: string;
  #email: string;
  constructor(name: string, address: string, email: string) {
    this.name = name;
    this.address = address || "bsd";
    this.#email = email;
  }
  greeting() {
    console.log("hello world");
  }
  showEmail() {
    console.log(this.#email);
  }
}

const user = new User("jordan", "bsd", "jordan@mail.com");
console.log(user);

user.showEmail();

// const a: User = {
//   greeting() {},
//   name: "huhu",
//   address: "jkt",
//   showEmail() {},
// };
