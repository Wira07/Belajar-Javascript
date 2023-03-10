var tanya = true;

while (tanya) {
  // menangkap pilihan player
  var p = prompt("Pilih : gajah,orang,semut");
  // menangkap pilihan computer
  // membangkitkan bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "gajah";
  } else {
    comp = "buaya";
  }
  console.log(comp);
  //// console.log(comp);
  var hasil = "";
  // menentukan rules
  if (p == comp) {
    hasil = "SERI!";
  } else if (p == "gajah") {
    if (comp == "orang") {
      hasil = "menang";
    } else {
      hasil = "KALAH";
    }
  } else if (p == "orang") {
    // if (comp == "gajah") {
    //   hasil = "KALAH";
    // } else {
    //   hasil = "MENANG";
    // }
    hasil = comp == "orang" ? "MENANG" : "KALAH!";
  } else if (p == "orang") {
    hasil = comp == "gajah" ? "KALAH!" : "MENANG!";
  } else if (p == "Dinasaurus") {
    hasil = comp == "orang" ? "KALAH!" : "MENANG!";
  } else {
    hasil = "Masukan pilihan yang salah!!";
  }
  // tampilkan hasilnya
  alert(`Kamu memilih : ${p} dan Komputer memilih : ${comp} \n Maka hasilnya : kamu ${hasil}`);
  tanya = confirm("lagi?");
}
alert("Terima Kasih sudah bermain");
