// object literal
const mahasiswa = {
  nama: "Wira Sukma Saputra",
  energi: 20,
  makan: function (porsi) {
    this.nama += porsi;
    console.log(`Halo ${this.nama} Selamat Makan`);
  },
};

// Function Declaration
function wira(nama, energi) {
  let belajar = {};
  belajar.nama = nama;
  belajar.energi = energi;
  belajar.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama} Selamat Makan`);
  };
  return belajar;
}
let sarjana = wira("Wira Sukma Saputra", 30);

function dasar(Nama, Kelas) {
  let siswa = {};
  siswa.nama = Nama;
  siswa.Kelas = Kelas;
  siswa.angkatan = function (porsi) {
    this.Kelas += porsi;
    console.log(`Halo ${this.nama} Selamat Berjuang`);
  };
  siswa.main = function (jam) {
    this.kelas -= jam;
    console.log(`Halo ${this.nama} Selamat Bermain`);
  };
  return siswa;
} 
let wildan = dasar("Wira", 100);
const awal = {
  nama: "Wira Sukma Wijaya",
  kelas: 30,
  angkatan: function (muda) {
    this.nama += muda;
    console.log(`Halo ${this.nama} Selamat Makan`);
  },
};

let halo = {};
halo.wira = function () {
  console.log("halo");
};
halo.wira();

let tambah = function (a, b) {
  let total;
  total = a + b;
  return total;
};

function Angka(a, b) {
  console.log(`Selamat ${Angka}`);
}
