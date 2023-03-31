// Prototype
function mahasiswa(nama, energy) {
  this.nama = nama;
  this.energy = energy;
}
mahasiswa.prototype.makan = function (porsi) {
  this.energy += porsi;
  return `halo ${this.nama} Selamat Makan`;
};

mahasiswa.prototype.main = function (porsi) {
  this.energy -= porsi;
  return `halo ${this.nama} Selamat bermain`;
};

mahasiswa.prototype.tidur = function (porsi) {
  this.energy += porsi;
  return `Halo ${this.nama} Selamat tidur`;
};
let agum = new mahasiswa("Wira Sukma Saputra", 20);

mahasiswa.prototype.cinta = function (sayang) {
  this.energy += sayang;
  return `Halo ${this.nama} Selamat Cinta kasih`;
};
// versi class
class mahasiswa1 {
  constructor(Nama, Energy) {
    this.Nama = Nama;
    this.Energy = Energy;
  }
  makan(porsi) {
    this.Energy += porsi;
    return `Halo ${this.nama} selamat makan`;
  }
  main(jam) {
    this.Energy -= jam;
    return `Halo ${this.nama} selamat bermain`;
  }
  tidur(jam) {
    this.Energy += jam * 2;
    return `Halo ${this.nama} selamat tidur`;
  }
}

let wildan1 = new mahasiswa1("Wira Sukma Saputra", 35);
let wira1 = new mahasiswa1();

// function declaration
const Method = {
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.nama} Selamat Makan`);
  },
  main: function (jam) {
    this.energy -= jam;
    console.log(`Halo ${this.nama} selamat bermain`);
  },
  tidur: function (jam) {
    this.energy += jam * 2;
    console.log(`Halo ${this.nama} selamat tidur`);
  },
};
function nama(nama, energy) {
  let mahasiswa = Object.create(Method);
  mahasiswa.nama = nama;
  mahasiswa.energy = energy;
  mahasiswa.makan = Method.makan;
  mahasiswa.main = Method.main;
  return mahasiswa;
}
let tampil = nama("Wira Sukma Saputra", 20);
let wira = nama("Wira Sukma Saputra", 30);

// Object literal
let mahasiswa = {
  nama: "Wira Sukma Saputra",
  energy: 20,
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.nama} Selamat Makan`);
  },
};
console.log(mahasiswa);

let mahasiswa1 = {
  nama: "Wira Sukma Saputra",
  energy: 25,
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`halo ${this.nama} selamat makan`);
  },
};
console.log(mahasiswa1);
