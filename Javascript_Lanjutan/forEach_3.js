const dasar = ["wira", "kartika", "sarjana", "fkom", "harapan", "dunia"];
dasar.forEach(function (e) {
  console.log(e);
});

const nama = ["Wira", "Wildan", "Dhika"];
nama.forEach(function (a, i) {
  console.log(`Mahasiswa terbaik ke ${i + 1} ${a}`);
});

// rekursif
function Nama(a) {
  if (a === 0) return 1;
  console.log(a);
  return Nama(a - 1);
}
console.log(Nama(5));

function faktorial(a) {
  if (a === 1) return 1;
  console.log(a);
  return a * faktorial(a - 1);
}
console.log(faktorial(5));

const dadan = ["Wira", true, 21, "arkan"];
dadan.forEach(function (i, u) {
  console.log(`Kami akan ${u + 1} ${i}`);
});

const Sukma = [1, 2, 13, 1, 3, 113, 2, 31, 3, 2];
let bagi = Sukma.map(function (a) {
  return a * 2;
});

console.log(bagi.join(" - "));

const rinal = [33, 44, 22, 1, 1, 3, 22, 3, 3, 3];
let baru = rinal.map(function (l) {
  return l * 3;
});
console.log(baru.join(" - "));

const rintangan = [1, 5, 3, 4, 34, 3, 4, 343, 90, 43];
var map = rintangan.map(function (c) {
  return c * 10;
});
console.log(map.join(" - "));

const faktor = ["Wira", "Sukma", "Sapuutra"];
faktor.forEach(function (k, j) {
  console.log(`Halo Mahasiswa terbaik ${j + 1} ${k}`);
});

const sort = [1, 3, 2, 4, 6, 7, 9, 334, 12, 33];
sort.sort(function (a, b) {
  return a - b;
});
console.log(sort.join(" - "));
