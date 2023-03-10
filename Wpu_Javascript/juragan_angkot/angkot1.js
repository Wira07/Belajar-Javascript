let noAngkot = 1;
let angkotBeroperasi = 6;
let jmlAngkot = 10;

// while
while (noAngkot <= angkotBeroperasi) {
  console.log(`Angkot No. ${noAngkot} beroperasi dengan baik`);
  noAngkot++;
}

// for
for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log(`Angkot No. ${noAngkot} tidak sedang beroperasi`);
}

let admin = 1;
let other = 8;
let user = 10;

// while
while (admin <= other) {
  console.log(`Halo nama saya ${admin} Wira`);
  admin++;
}

// for
for (admin = other + 1; admin <= user; admin++) {
  console.log(`Nama saya bukan wira ${admin}`);
}
// // perkondisian
// let r = 5;
// if (r % 2 === 0) {
//   console.log("Bilangan Genap");
// } else {
//   console.log("Bilangan ganjil");
// }

// // function scope
// let o = 1;
// function test() {
//   let b = 10;
//   console.log(o);
// }
// test();
