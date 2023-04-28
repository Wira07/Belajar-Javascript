// const tampilkan = (nama) => {return `halo ${nama}`}
// tampilkan("Wira Sukma Saputraa")

const nama = (nama, waktu) => {
  return `Selamat ${waktu}, ${nama}`;
};
console.log(nama("Wira", "Malam"));

const People = () => `Wira Sukma Saputra`;
console.log(People());

const dasar = function (nama) {
  console.log(`Halo ${nama}`);
};
dasar("hasan");

let array = ["Wira", "Sukma", "Saputra"];

let Landeuh = array.map(function (nama) {
  return nama.length;
});
console.log(Landeuh);

let siswa = ["Wira", "Pramuka", "Surga"];

let jumlahSiswa = siswa.map((nama) => nama.length);
console.log(siswa);

let dadan = ["Wira", "dasar", "Pramuka"];
let jumlahDadan = dadan.map((nama) => ({ nama: nama, jumlahDadan: {} }));


let arrow = ["Aldi", "Dinar", "Rizal"];
let bagian = arrow.map(function (hasil) {
  return hasil.length;
});
console.log(bagian);
