// Map pada javascript
const angka = [1, 6, 4, 6, 4, 7, 4, 9];
const angka2 = angka.map((i) => {
  return i * 10;
});
console.log(angka2.join(" - "));

const nama = [100, 120, 123];
const nama2 = nama.map((a) => {
  return a * 20;
});
console.log(nama2.join(" - "));

// Buatlah sebuah array dengan 5 angka acak, kemudian gunakan metode .map() untuk menghasilkan array baru dengan setiap angka pada array awal dikalikan dengan 2.

const arr = [3, 2, 1, 6, 7, 8, 9];
const arr2 = arr.map((i) => {
  return i * 2;
});
console.log(arr2.join(" - "));

const mahasiswa = [12, 5, 6, 4, 4, 5, 56, 6, 6, 6, 5];
const mahasiswa2 = mahasiswa.map((a) => {
  return a * 10;
});
console.log(mahasiswa2.join(" - "));

// Buatlah sebuah array dengan 3 objek siswa yang memiliki properti nama dan nilai ujian, kemudian gunakan metode .map() untuk menghasilkan array baru dengan nama siswa-siswa tersebut.
const students = [
  { name: "John", score: 85 },
  { name: "Jane", score: 90 },
  { name: "Bob", score: 75 },
];

const studentNames = students.map((student) => {
  return student.name;
});

console.log(...studentNames);

// Buatlah sebuah array dengan 4 kata acak, kemudian gunakan metode .map() untuk menghasilkan array baru dengan setiap kata pada array awal diubah menjadi huruf kapital.

const kata = ["wira", "Sukma", "Saputra"];
const kapital = kata.map((i) => {
  return i.toUpperCase();
});
console.log(...kapital);

// Carilah nilai array dengan menggunakan metode .filtter()
let java = [8, 3, 12, 5, 6, 7, 9, 6, 34, 88, 45, 32];
const juju = java.filter(function (x) {
  return x > 5;
});
console.log(juju.join(" - "));

// slice
var arr3 = ["Wira", "Sukma", "Saputra"];
arr3.splice(1, 2, "Chiaara");
console.log(arr3.join(" - "));

var waduk = ["adra", "nana", "yuyun"];
waduk.splice(1, 2, "Riko", "Gugun");
console.log(waduk.join(" - "));

var junji = ["tasik", "cirebon", "sumatra", "dadan", "fitri"];
var acak = junji.slice(1, 4);
console.log(acak.join(" - "));

var google = ["Nana", "Devi", "gugun"];
google.splice(1, 3, "Syukur");
console.log(google.join(" - "));

