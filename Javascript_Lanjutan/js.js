// function literal
function nama(a, b) {
  return a + b;
}
console.log(nama(89, 99));

// function expression
let janji = (harus) => {
  console.log(`Nama Saya ${harus}`);
};
janji("Wira Sukma Saputra");

let kamu = function (gugi) {
  console.log(`Nama Saya ${gugi}`);
};
kamu("Wildan Pratiwi");

// function declaration
function agum(maya) {
  console.log(`Halo ${maya}`);
}
agum("Agum dan Maya adalah jodoh aamiin");
// typing
// let ketik = new Typed(".typing", {
//   strings: ["wira", "sukma", "saputra"],
//   backSpeed: 100,
//   typeSpeed: 100,
//   loop: true,
// });
function sekarang(Nama, energy) {
  let mahasiswa = {};
  mahasiswa.Nama = Nama;
  mahasiswa.energy = energy;
  mahasiswa.makan = function (porsi) {
    this.energy += energy;
    console.log(`Halo ${this.Nama}`);
  };
  return mahasiswa;
}
let saputra = sekarang("Wira", 58);

function dulu(baru) {
  console.log(`Halo ${baru}`);
}
dulu("Wira Sukma Saputra");

let vscode = {
  nama: "Wira Sukma Saputra",
  nim: 20210810075,
  kelas: "TINFC 2021 A",
  kuliah: function (jurusan) {
    this.kelas += jurusan;
    console.log(`Halo ${this.nama} selamat mempusing`);
  },
};
function tambah(a, b) {
  return a + b;
}
var hasil = tambah(a, b);
var a = parseInt(prompt("Masukan Nilai 1 : "));
var b = parseInt(prompt("Masukan Nilai 2 : "));
console.log(tambah);
