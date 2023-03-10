var jmlangkot = 10;
var angkotBeroperasi = 9;

for (var noAngkot = 1; noAngkot <= jmlangkot; noAngkot++) {
  if (noAngkot <= 9) {
    console.log(`Beroperasi dengan baik ${noAngkot}`);
  } else {
    console.log(`Beroperasi Sedang tidak baik ${noAngkot}`);
  }
}

var angka = prompt(`Masukan angka : `);
if (angka % 2 === 0) {
  alert(`Bilangan Genap`);
} else if (angka % 2 === 1) {
  alert(`Bilangan ganjil ${angka}`);
} else {
  alert(`yang anda masukan bukan angka`);
}
// // perkondisian

// var i = 2;

// if (i === 1) {
//   alert("anda memasukan angka 1");
// } else {
//   alert("anda memasukan bukan angka");
// }

// // sisa bagi

// let a = prompt("silahkan masukan angka  ");
// if (a % 2 === 0) {
//   alert(`Anda memasukan angka genap`);
// } else {
//   alert(`Anda memasukan angka ganjil`);

//   a = confirm('Mau coba lagi??')
// }
