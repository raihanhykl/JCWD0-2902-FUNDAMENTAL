export class queue {
  static list: string[] = [];
  static add(value: string) {
    this.list.push(value);
  }
  static async show() {
    for (var i = 0; i < this.list.length; i++) {
      const random = Math.ceil(Math.random() * 10000 + 1);

      await new Promise((resolve) => setTimeout(resolve, random));
      console.log(`${this.list[i]} added in ${random / 1000} second`);
    }
  }
}

// [1,2,3]

// array loop => tampilkan data based on random ms
