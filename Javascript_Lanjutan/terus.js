// // array
// const nama = [1, 2, 1, 2, 1, 1, 2, 2, 5];
// nama.forEach(function (a) {
//   console.log(a);
// });

// const lunas = ["Wira", "Sukma", "Saputra"];
// lunas.forEach(function (a, u) {
//   console.log(`Mahasiswa terbaik ${a} ${u + 1}`);
// });

// const dasar = [10, 66, 88, 12, 1, 21, 2, 1, 21, 2];
// var ajuk = dasar.map(function (i) {
//   return i * 10;
// });
// console.log(ajuk.join(" - "));

// const jam = [1, 6, 5, 7, 3, 9, 2, 2, 4, 5];
// jam.sort();
// console.log(jam.join(" - "));

// function mahasiswa(i) {
//   if (i === 0) return 1;
//   console.log(i);
//   return mahasiswa(i - 1);
// }
// console.log(mahasiswa(5));

// function faktorial(a) {
//   if (a === 0) return 1;
//   console.log(a);
//   return a * faktorial(a - 1);
// }
// console.log(faktorial(5));

// function closure() {
//   const dasar = "Wira";
//   function nama() {
//     console.log(`Halo nama saya ${dasar}`);
//   }
//   nama();
// }
// closure();

// let panik = [1, 3, 3, 2, 3, 1, 10, 32, 1, 11];
// let harus = panik.filter(function (x) {
//   return x > 5;
// });
// console.log(harus);

// let kemenangan = [1, 2, 1, 6, 7, 4, 6, 3, 8, 9];
// kemenangan.sort();
// console.log(kemenangan.sort(" - "));

// let length = ["Wira", "Sukma", "Saputra"];
// length.forEach(function (i) {
//   console.log(i);
// });

// let nama1 = [1, 5, 7, 4, 9, 3, 4];
// nama1.sort();
// console.log(nama1.join(" - "));

// let panik1 = [1, 5, 5, 24, 78, 54, 22, 123];
// panik1.sort(function (a, b) {
//   return a - b;
// });
// console.log(panik.join(" - "));

// let adra = [1, 5, 3, 5, 3, 7, 85, 5, 1];
// let sayur = adra.sort(function (c, d) {
//   return c - d;
// });
// console.log(sayur.join(" - "));

// let dasar1 = ["Wira", "Wildan", "Pratiwi"];
// let kabar = dasar1.forEach(function (f, g) {
//   console.log(`Mahasiwa terbaik ${g + 1} ${f}`);
// });

// var nama = ["Wira", "Sukma", "Saputra"];
// nama.splice(1, 2);
// console.log(nama.join(" - "));

// var hasil = ["Gugun", "Ratna", "Wira", "Tio"];
// var tio = hasil.slice(1, 3);
// console.log(tio.join(" - "));

// var yuyun = ["True", "False", "damage", "uniku"];
// var ratna = yuyun.slice(1, 3);
// console.log(ratna.join(" - "));

// Array = ["Wira", "Sukma", "Saputra"];
// Array.splice(2, 0, "Yuyun Yustina");
// console.log(Array.join(" - "));

let mahasiswa = ["wira", "sukma", "saputra"];

let siswa = mahasiswa.map((nama) => nama.length);
console.table(siswa);
