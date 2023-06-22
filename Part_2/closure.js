function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, Selamat ${waktu} semoga hari mu menyenangkan`);
  };
}

const salam = ucapkanSalam("malam");
salam("Wira Sukma Saputra");

function matakuliah(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
matakuliah(10);

function mahasiswa(a, aksi) {
  for (let c = 0; c < a; c++) {
    aksi(a);
  }
}

const arr = [1, 5, 6, 4, 4, 2];
const tampilkan = arr.map(function (number) {
  return number * 2;
});
console.log(tampilkan);

const pysal = [2, 6, 5, 1, 7, 4, 3];
const bambu = pysal.map(function (running) {
  return running * 2;
});

console.log(bambu);

const acak = [1, 5, 3, 7, -3, 6, 1, 4];
const simpan = [];
for (let d = 0; d < acak.length; d++) {
  if (acak[d] >= 3) {
    simpan.push(acak[d]);
  }
}
console.log(simpan);

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const siswa = [];
for (let r = 0; r < angka.length; r++) {
  if (angka[r] >= 3) {
    siswa.map(angka[r]);
  }
}
console.log(siswa);

const saya = [2, 5, 3, 2, 6, 6, 6, 7, 8];
const rambo = saya.map(function (dadan) {
  return dadan * 6;
});
console.log(rambo);

const naruto = function (aksi) {
  console.log(`halo saya ${aksi}`);
};
naruto("Wira");

const tebak = [4, 7, 9, 0, 0, 2, 1];
const ambil = [];
for (let f = 0; f < tebak.length; f++) {
  if (tebak[f] >= 3) {
    ambil.push(tebak[f]);
  }
}

console.log(ambil);
