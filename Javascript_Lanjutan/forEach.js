const angka = [1, 2, 3, 4, 5, 6, 7, 8];
const mahasiswa = ["Wira Sukma Saputra", "Agum Pratama", "Neno Arisma"];
const siswa = ["Teknik Informatika", "Sistem Informasi", "Management Informatika", "Teknik Sipil"];

angka.forEach((i) => {
  console.log(i);
});

mahasiswa.forEach((a, b) => {
  console.log(`Mahasiswa Rajin ${a} no ke ${b + 1}`);
});

siswa.forEach((jam, tabuh) => {
  console.log(`Jurusan Terbaik ${jam} ${tabuh + 1}`);
});

// for (let i = 0; i < angka.length; i++) {
//   console.log(angka[i]);
// }

const wira = [56, 22, 11, 65, 43, 22];
wira.forEach(function (q, w) {
  console.log(`Mahasiswa Terbaik ${q} ${w} belajar`);
});

const vektor = [87, 43, 22, 11, 22, 11];
for (let a = 0; a < vektor.length; a++) {
  console.log(vektor[a]);
}

