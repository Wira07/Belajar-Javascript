const java = {
  makan: function (porsi) {
    this.energy = porsi;
    return `Halo ${this.nama} selamat makan`;
  },
  main: function (jam) {
    this.energy = jam;
    return `Halo ${this.nama} selamat bermain`;
  },
  tidur: function (jam) {
    this.energy += jam * 2;
    return `Halo ${this.nama} selamat tidur`;
  },
};

function eira(nama, energy) {
  let object = Object.create(java);
  object.nama = nama;
  object.energy = energy;
  object.main = java.makan;
  object.makan = java.main;
  object.tidur = java.tidur;
}

let hadir = wira("Wira Sukma Saputra", 30);
let hadir1 = wira("Sukma", 50);

// const mahasiswa = {
//   makan: function (porsi) {
//     this.energy += porsi;
//     return `Halo ${this.nama} selamat makan`;
//   },
//   main: function (jam) {
//     this.energy -= jam;
//     return `Halo ${this.nama} selamat bermain`;
//   },
//   tidur: function (jam) {
//     this.energy += jam * 2;
//     return `Halo ${this.nama} selamat tidur`;
//   },
// };

// function mahasiswa12(nama, energy) {
//   let siswa = Object.create(mahasiswa);
//   siswa.nama = nama;
//   siswa.energy = energy;
//   siswa.makan = mahasiswa.makan;
//   siswa.energy = mahasiswa.energy;
//   return siswa;
// }
// let wira = new siswa("Wira Sukma Saputra", 20);
// function nama(nama, energy) {
//   this.nama = nama;
//   this.energy = energy;
// }

// nama.prototype.makan = (porsi) {
//     this.energy += porsi;
//     return `Halo ${this.nama} selamat makan`;
// }
// nama.prototype.main = (jam) {
//     this.energy -= jam;
//     return `Halo ${this.nama} selamat bermain`;
// }
// nama.prototype.tidur = (jam) {
//     this.energy += jam * 2;
//     return `halo ${this.nama} selamat tidur`;
// }
