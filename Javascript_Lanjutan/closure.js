// parent
function parent() {
  const nama = "Wira Sukma Saputra";
  function greet() {
    console.log(`Halo ${nama} Selamat makan`);
  }
  greet();
}
parent();
function naruto() {
  const hinata = "Naruto";
  function sakura() {
    console.log(`Halo ${hinata} Naruto`);
  }
  sakura();
}
naruto();
function metod() {
  const jaringan = "Fitra";
  function jaja() {
    console.log(`Saya ${jaringan} komputer adalah jaringan`);
  }
  jaja();
}
metod();
// closure
// type js
// var jaja = new Typed(".type", {
//   strings: ["Wira", "Sukma", "Saputra"],
//   backSpeed: 100,
//   typeSpeed: 100,
//   loop: true,
// });
let vscode = {
  nama: "Wira Sukma Saputra",
  nim: 20210810075,
  kelas: "TINFC 2021 A",
  kuliah: function (jurusan) {
    this.kelas += jurusan;
    console.log(`Halo ${this.nama} selamat mempusing`);
  },
};
// parent
function rizal() {
  const agum = "Agum Pratama";
  function belajar() {
    console.log(`Halo ${agum} selamat belajar`);
  }
  belajar();
}
rizal();

function adra() {
  const habi = "Ketua Hima TI";
  function alwin() {
    console.log(`Halo ${habi} belajatr`);
  }
  alwin();
}
adra();

function mahasiswa(nama, energy) {
  let arya = {};
  arya.nama = nama;
  arya.energy = energy;
  arya.makan = function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.nama} Selamat Makan`);
  };
  return arya;
}
let sarjana = mahasiswa("Wira Sukma Saputra", 39);

// function declartion
function sayang(Nama, Energy) {
  let aldi = {};
  aldi.Nama = Nama;
  aldi.Energy = Energy;
  return aldi;
}

function Wildan() {
  const nama = "Wira Sukma Saputra";
  function Nim() {
    console.log(`Halo ${nama} Selamat Belajar`);
  }
  Nim();
}
Wildan();
