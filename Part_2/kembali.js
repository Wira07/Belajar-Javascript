// // function mahasiswa(Nama, energy) {
// //   this.Nama = Nama;
// //   this.energy = energy;
// //   this.makan = function (nama) {
// //     console.log(`Halo ${nama}, nama saya ${this.nama}`);
// //   };
// // }

// // function Manager(Nama, energy, lastname) {
// //   mahasiswa.call(this, Nama, energy);
// //   this.lastname = lastname;
// // }

// // // const warn = new Manager("Wira Sukma Saputra", 21);
// // console.log(warn);
// // warn.makan();

// const gta = function () {
//   this.firstname = "Wira Sukma Saputra";
//   this.age = 21;
//   this.sayHello = function () {
//     console.log(`Halo ${this.firstname}, umur saya ${this.age}`);
//   };

//   setInterval(() => {
//     console.log(this);
//   }, 500);
// };

// const tampilkan = new gta();
// console.log(tampilkan);
// tampilkan.sayHello();

// const hard = function () {
//   this.firstname = "Wira Sukma Saputra";
//   this.energy = 21;
//   this.sayHello = () => {
//     console.log(`Halo nama saya ${this.firstname}, dan energy saya ${this.energy}`);
//   };

//   setInterval(() => {
//     console.log(this.energy++);
//   }, 500);
// };
// const laba = new hard();
// console.log(laba);
// laba.sayHello();

// const nabati = {
//   firstname: "Wira",
//   middlename: "Sukma",
//   lastname: "Saputra",
//   alamat: {
//     kelurahan: "Cijoho Landeuh",
//     jalan: "Cut Nyak Dhieun",
//   },
// };

// const {
//   firstname,
//   middlename,
//   lastname,
//   alamat: { kelurahan, jalan },
// } = nabati;

// (function () {
//   let nama = "Wira Sukma Saputra";
//   console.log(nama);
// });

function nama() {
  let mahasiswa = "Wira Sukma Saputra";
  if (true) {
    let mahasiswa = "Wildan Pratiwi";
    console.log(mahasiswa);
  }
  console.log(mahasiswa);
}
nama();

const mahasiswa = function () {
  this.nama = "Wira Sukma Saputa";
  this.umur = 21;
  this.method = function () {
    console.log(`Halo ${this.nama}. saya berumur ${this.umur}`);
  };

  setInterval(() => {
    console.log(this.umur++);
  }, 500);
};

const maya = new mahasiswa();
console.log(maya);
maya.method();

const box = document.querySelector(".box");
box.addEventListener(".click", function () {
  this.classList.toggle(".size");
  setTimeout(() => {
    this.classList.toggle(".caption");
  }, 500);
});

