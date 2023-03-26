var mhs = {
  nama: "Wira Sukma Saputra",
  nim: 20210810075,
  kelas: "TINFC 2021 A",
  alamat: {
    jalan: "cijoho landeuh",
    kota: "kuningan",
    provinsi: "jawa barat",
  },
};
// kata kuncinya mhs.nama atau notasi kurungsiku["nama"]

const rian = {
  firstname: "Wira",
  middlename: "Sukma",
  lastname: "Saputra",
  age: 21,
};

console.log(`Nama Lengkap: ${rian.firstname} ${rian.middlename} ${rian.lastname}`);

let key = {
  firstname: "Wira",
  middlename: "Sukma",
  lastname: "Saputra",
  hasil: function (tampil) {
    this.lastname += tampil;
    console.log(`Halo Nama Lengkap : ${key.firstname} ${key.middlename} ${key.lastname}`);
  },
};
// closure
function sejarah() {
  const nama = "Wira";
  function jaja() {
    console.log(`Halo ${nama} selamat makan`);
  }
  jaja();
}
sejarah();

const nana = 29;
function hasil() {
  console.log(`Halo saya ${nana} Selamat Bergabung`);
}
hasil();

// function Declaration
function Sayang(nama, energy) {
  this.nama = nama;
  this.energy = energy;
  this.makan = function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.nama} selamat berbuka puasa`);
  };
}
let sarjana = new Sayang("Wira Sukma Saputra", 90);

// Object
const profil = {
  firstname: "Wira Sukma Saputra",
  middlename: "wijaya kusuma",
  lastname: "wijaya lagi aja",
  age: 21,
  nim: 20210810075,
};
console.log(`Halo, nama saya ${profil.firstname}`);
console.log(`${profil.middlename} ${profil.lastname}`);
console.log(`Umur saya ${profil.age} nim saya ${profil.nim}`);
