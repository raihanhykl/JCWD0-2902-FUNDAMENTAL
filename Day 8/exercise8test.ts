console.log("===== 1 =====");

class employee {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class PartTime extends employee {
  #workHour: number = 0;
  #salary: number = 0;
  constructor(name: string) {
    super(name);
  }
  addWorkHour(hour: number) {
    hour > 6 ? (this.#salary += hour * 30000) : (this.#salary += hour * 50000);
    this.#workHour += hour;
  }
  showWorkHour() {
    console.log(this.#workHour);
  }
  showSalary() {
    console.log(
      `Gaji ${this.name}: Rp. ` + this.#salary.toLocaleString("id-ID")
    );
  }
}

class FullTime extends employee {
  #workHour: number = 0;
  #salary: number = 0;
  constructor(name: string) {
    super(name);
  }
  addWorkHour(hour: number) {
    hour > 6 ? (this.#salary += hour * 75000) : (this.#salary += hour * 100000);
    this.#workHour += hour;
  }
  showWorkHour() {
    console.log(this.#workHour);
  }
  showSalary() {
    console.log(
      `Gaji ${this.name}: Rp. ` + this.#salary.toLocaleString("id-ID")
    );
  }
}
const raihan = new PartTime("Raihan");
const haykal = new FullTime("Haykal");
raihan.addWorkHour(10);
haykal.addWorkHour(10);
raihan.showSalary();
haykal.showSalary();

console.log("===== 2 =====");

class shootingGame {
  P1: Player;
  P2: Player;
  constructor(P1: Player, P2: Player) {
    (this.P1 = P1), (this.P2 = P2);
  }
  getRandomItem() {
    return {
      health: Math.floor(Math.random() * 2) * 10,
      power: Math.floor(Math.random() * 2) * 10,
    };
  }
  showPlayer() {
    console.log(this.P1);
    console.log(this.P2);
    this.P2.health -= this.P1.power;
    this.P1.health -= this.P2.power;
    console.log(this.P1);
    console.log(this.P2);
  }
  start() {
    if (this.P1.health <= 1) {
      //   this.P1.showStatus();
      console.log(`${this.P2.name} MENANG. MELEDAAKKK`);
    } else if (this.P2.health <= 1) {
      //   this.P2.showStatus();
      console.log(`${this.P1.name} MENANG. MELEDAAAKK`);
    } else {
      if (this.P1.health > 0) {
        this.P1.useItem(this.getRandomItem());
        console.log(`====== ${this.P1.name} SHOOT =====`);
        this.P2.health -= this.P1.power;
        this.P1.showStatus();
        this.P2.showStatus();
      }
      if (this.P2.health > 0) {
        this.P2.useItem(this.getRandomItem());
        console.log(`====== ${this.P2.name} SHOOT =====`);
        this.P1.health -= this.P2.power;
        this.P1.showStatus();
        this.P2.showStatus();
      }
      this.start();
    }
  }
}
class Player {
  name = "";
  health = 100;
  power = 10;
  constructor(name: string) {
    this.name = name;
  }
  showStatus() {
    console.log(
      `Player: ${this.name}, Health: ${this.health}, Power: ${this.power}`
    );
  }
  useItem(item: any) {
    this.health += item.health;
    this.power += item.power;
  }
}
const joko = new Player("Joko");
const juki = new Player("Juki");
const game = new shootingGame(joko, juki);
console.log(game.start());
