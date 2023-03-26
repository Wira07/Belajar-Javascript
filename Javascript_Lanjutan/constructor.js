class mahasiswa {
  constructor(nama, energy) {
    this.nama = nama;
    this.energy = energy;
  }

  makan(porsi) {
    this.energy += porsi;
    return `Halo ${this.nama} selamat makan`;
  }

  main(jam) {
    this.energy -= jam;
    return `Halo ${this.nama} selamat bermain`;
  }

  tidur(jam) {
    this.energy += jam * 2;
    return `Halo ${this.nama}`;
  }
}

let boby = new mahasiswa("Wira Sukma Saputra", 21);
let dasar = new mahasiswa("Saputra", 23);

let angka = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(...angka.reverse());

