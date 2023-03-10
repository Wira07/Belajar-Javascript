// // Cara untuk membuat object pada javascrit
// // 1. Object Literal
// let mahasiswa1 = {
//   // Property
//   nama: sandhika,
//   energy: 10,
//   // Method
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan`);
//   },
// };
// let mahasiswa2 = {
//   // Property
//   nama: Wira,
//   energy: 10,
//   // Method
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(`Halo ${this.nama}, Selamat Makan`);
//   },
// };
// 2. Function Declaration
function Mahasiswa(nama, energy) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energy = energy;
  mahasiswa.makan = function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.nama}, Selamat Makan`);
  };
  mahasiswa.main = function (jam) {
    this.energy -= jam;
    console.log(`Halo ${this.nama} Selamat Bermain`);
  };
  return mahasiswa;
}
let wira = Mahasiswa("Wira", 21);
let agum = Mahasiswa("Agum", 22);
// 3. Constructor Function
function Bukti(Nama, Energy) {
  this.nama = Nama;
  this.energy = Energy;
  this.makan = function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.nama} selamat belajar`);
  };
}
let kuyy = new Bukti("Wira Sukma Saputra", 78);
// 4. Object.create
