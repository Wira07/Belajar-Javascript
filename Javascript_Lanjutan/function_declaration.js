// const Method = {
//   makan: function (porsi) {
//     this.energy += porsi;
//     console.log(`Halo ${this.nama} Selamat Makan`);
//   },
//   main: function (jam) {
//     this.energy -= jam;
//     console.log(`Halo ${this.nama} Selamat bermain`);
//   },
//   tidur: function (jam) {
//     this.energy += jam * 2;
//     console.log(`Halo ${this.nama} Selamat tidur`);
//   },
// };
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
// const mahasiswa = {
//   nama: "Wira Sukma Saputra",
//   energy: 10,
//   makan: function (porsi) {
//     this.energy += porsi;
//     console.log(`Halo ${this.nama} selamat makan`);
//   },
// };

// mahasiswa.prototype.mobik = function(porsi) {
//   this.energy += porsi;
//   console.log(`Halo ${this.nama}`)
// }
