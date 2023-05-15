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

// const energy1 = function () {
//   this.nama = "Wira Sukma Saputra";
//   this.umur = 21;
//   this.sayHello = () => {
//     console.log(`hello ${this.nama}, selamat ${this.umur}`);
//   };
// };

// let hasil1 = new energy1();
// hasil.sayHello();

const mhs = {
  nama: "Wira Sukma Saputra",
  alamat: "Cijoho Landeuh",
  sayHello: () => {
    console.log(`hello ${this.nama}, selamat ${this.umur}`);
  },
};

const hari = function () {
  this.nama = "Sapuuta";
  this.age = 21;
  this.method = function () {
    console.log(`Hallo, ${this.nama}, selamat ${this.age}`);
  };
};

let length = new hari();
length.method();
