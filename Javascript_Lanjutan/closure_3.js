function init() {
  const nama = "Wira Sukma Saputra";
  return function (nama) {
    console.log(nama);
  };
  //   return tampilNama;
}

let menampilkan = init();

function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, selamat ${waktu} & selamat belajar`);
  };
}

let selamatPagi = ucapkanSalam("Pagi");
let selamatSiang = ucapkanSalam("Siang");
let selamatMalam = ucapkanSalam("Malam");


selamatPagi('Wira')
selamatSiang('Hasan')
selamatMalam('Zahra')

console.log("wira sukma saputra");
console.log("saputra");

let mahasiswa = "Mahasiswa";
let usia = 22;
function cetakURL(mahasiswa) {
  let tampilkan = "http://instagram.com";
  return tampilkan + mahasiswa;
}
