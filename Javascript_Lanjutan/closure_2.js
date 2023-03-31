function nama() {
  let nama = "Wira Sukma Saputra";
  function tampilNama() {
    console.log(nama);
  }
  return tampilNama;
}

let tambahNama = nama();
tambahNama();

function hasil() {
  // let length = "Dadan Pbk";
  return (length) => {
    console.log(length);
  };
}

let Max = hasil();
Max("Wira Sukma Saputra");

function hadir() {
  return (nama) => {
    console.log(nama);
  };
}

let panggil = hasil();
panggil("Wira Sukma Saputra jaya jaya");
panggil("Wira Sukma Saputra jaya jaya");

function sambutan(waktu) {
  return function (nama) {
    console.log(`Halo ${nama} Selamat ${waktu} semoga kamu sukses`);
  };
}

let selamatPagi = sambutan("Pagi");
let selamatSiang = sambutan("Siang");
let selamatMalam = sambutan("Malam");

selamatPagi("Wira Sukma Saputra");
selamatPagi("Wildan Pratiwi");
selamatPagi("Chiaara");
selamatPagi("Eca");
selamatPagi("Devila");
selamatPagi("Wiwi");
