class Mawar {
  constructor(name) {
    this.name = name;
  }

  mekar() {
    console.log(`${this.name}`);
  }
}
class Bunga extends Mawar {
  constructor(name) {
    super(name);
  }
  mekar() {
    console.log(`${this.name} itu warna merah`);
  }
}
class Bunga1 extends Mawar {
  constructor(name) {
    super(name);
  }
  mekar() {
    console.log(`${this.name} itu warna putih`);
  }
}

let bunga = new Bunga("Mawar");
bunga.mekar();
let bunga1 = new Bunga1("Melati");
bunga1.mekar();
