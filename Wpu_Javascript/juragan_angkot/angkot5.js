var jmlangkot = 10;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlangkot; noAngkot++) { 
  if (noAngkot <= 6) {
    console.log(`Beroperasi dengan baik ${noAngkot}`);
  } else if (noAngkot === 8 || noAngkot === 10) {
    console.log(`Angkot sudah beroperasi kembali di urutan ${noAngkot}`);
  } else {
    console.log(`Beroperasi Sedang tidak beroperasi ${noAngkot}`);
  }
}
