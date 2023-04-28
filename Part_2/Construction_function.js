// const Mahasiswa = function () {
//   this.nama = "Wira Sukma Saputra";
//   this.umur = 21;
//   this.sayHello = function () {
//     console.log(`Halo ${this.nama}, umur saya ${this.umur}`);
//   };
// };

// let hasil = new Mahasiswa();

// const dasar = function (Nama, Energy) {
//   this.Nama = Nama;
//   this.Energy = Energy;
//   this.sayHello = function () {
//     console.log(`Halo ${this.Nama}, saya berumur ${this.Energy}`);
//   };
// };
// let tampil = new dasar("Wira", 21);
// tampil.sayHello();

const energy = function () {
  this.nama = "Wira Sukma Saputra";
  this.umur = 21;
  this.sayHello = function () {
    console.log(`hello ${this.nama}, selamat ${this.umur}`);
  };
};

let hasil = new energy();
hasil.sayHello();
