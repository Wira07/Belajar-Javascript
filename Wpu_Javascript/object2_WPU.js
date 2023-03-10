// cara membuat object literal
// 1. Literal object
let mahasiswa = {
  nama: "Wira Sukma Saputra",
  energy: 20,
  makan: function (porsi) {
    this.energy = this.energy + porsi;
    console.log(`Halo ${this.nama}, Selamat Makan!`);
  },
};

let rere = {
  nama: "Sarada",
  energy: 30,
  sekolah: function (ipk) {
    this.energy = this.energy + ipk;
    console.log(`Halo ${this.nama}, Selamat Anda Lulus `);
  },
};

const wira = function (huhu) {
  console.log(`Nama saya ${huhu}`);
};

// const jaja = (huhu) => console.log(`nama saya ${huhu}`);
