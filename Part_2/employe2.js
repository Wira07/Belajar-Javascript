class Employe {
  sayHello(nama) {
    console.table(`Halo nama saya ${nama} my namw is ${this.nama}`);
  }
}

class uang extends Employe {
  sayHello(nama) {
    console.table(`Halo nama saya ${nama} my namw is ${this.nama}`);
  }
}

const piala = new Employe();
piala.nama = "Wira Sukma Saputra";
console.info(piala);

const piala2 = new Employe();
piala2.nama = "Saputra";
console.info(piala2);

class baru {
  constructor(nama, energy) {
    this.nama = nama;
    this.energy = energy;
  }

  makan(porsi) {
    this.energy += porsi;
    return `Halo ${this.nama}, Selamat Makan!`;
  }
  main(jam) {
    this.energy += jam;
    return `Halo ${this.nama}, Selamat Bermain!`;
  }
}
let hasil = new baru("Wira Sukma Saputra", 21);
