let array = [1, 2, 9, 4, 5];
console.table(array.reverse());

const data = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 20 },
];

console.table(data);

const biodata = [
  { Nim: 20210810075, Nama_Lengkap: "Wira Sukma Saputra", Age: 21 },
  { Nim: 20210810075, Nama_Lengkap: "Wira Sukma Saputra", Age: 21 },
];
console.table(biodata);

const Wira = [{ Nama: "Wira Sukma Saputra", Nim: 20210810075, age: 21 }];
console.table(Wira);

function Eko(nama, energy) {
  this.nama = nama;
  this.energy = energy;
}

let tampilkan = new Eko("Wira", 21);
console.log(tampilkan);

let panggil = function (nama) {
  console.log(`Halo ${nama}`);
};
panggil("KIP Teu cair");

function Kosong() {
  this.firstname = "";
  this.lastname = "";
  this.sayHello = function (nama) {
    console.log(`Halo ${nama}, panggil saya ${this.firstname}`);
  };
}

const apip = new Kosong();
apip.firstname = "Wira Sukma Saputra";
apip.lastname = "Wira Sukma Saputra";
apip.sayHello("Klient");

const apipKorupsi = new Kosong();
apipKorupsi.firstname = "KIP";
apipKorupsi.lastname = "Bodong";
apip.sayHello("Klient");

console.log(apip);
console.log(apipKorupsi);

function Devi() {
  this.nama = "";
  this.lastname = "";
  this.sayHello = function (Nama_Lengkap) {
    console.log(`Halo ${Nama_Lengkap}, & nama panggilan ${this.nama}`);
  };
}
const lanjutkan = new Devi("Wira Ajalah", 21);
lanjutkan.nama = "Wira";
console.log(lanjutkan);

function darah(a, b) {
  return a * b;
}

let result = darah(23, 90);
console.log(result);
