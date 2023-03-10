var angka = parseInt(prompt("Masukan angka : "));
if (angka == 1) {
  alert("Anda memasukan angka 1");
} else if (angka == 2) {
  alert("Anda memasukan angka 2");
} else if (angka == 3) {
  alert("Anda memasukan angka 3");
} else {
  alert("angka yang anda masukan salah");
}

var baja = prompt("Masukan nama angka : ");

switch (baja) {
  case "1":
    alert("anda memasukan angka 1");
    break;
  case "2":
    alert("anda memasukan angka 2");
    break;
  case "3":
    alert("anda memasukan angka 3");
    break;
  case "4":
    alert("anda memasukan angka 4");
    break;
}

var item = prompt("Masukan nama makanan / minuman : \n  (cth: nasi, daging, sayur, jus,jahe)");

switch (item) {
  case "nasi":
    alert("makanan / minuman sehat");
    break;
  case "daging":
    alert("makanan / minuman sehat");
    break;
  case "sayur":
    alert("makanan / minuman sehat");
    break;
  default:
    alert("daftar tidak ada di menu");
    break;
}
