function sejarah(matakuliah, selesai) {
  console.log(`Halo selamat belajar ${matakuliah}`);
  selesai();
}

function selesai() {
  alert("selesai mengerjakan");
}

sejarah("halo", selesai);

function matakuliah(n) {
  for (let i = 0; i < n; i++) console.log(i);
}
matakuliah(10);

const Angka = [-1, 5, 6, 3, 7, 4, -8, 0, -7];
const newAngka = [];
for (let a = 0; a < Angka.length; a++) {
  if (Angka[a] >= 3) {
    newAngka.push(Angka[a]);
  }
}
console.log(newAngka);

let arr = ["Wira", "Sukma", "Saputra"];
arr.push("Salman");
console.log(arr.join(" - "));

const adra = [1, 6, 5, 9, -3, 1, 6, -4];
const rina = [];
for (let j = 0; j < adra.length; j++) {
  if (adra[j] >= 3) {
    rina.push(adra[j]);
  }
}

const pantau = [3, 6, 4, 1, -9, -4, 3, 1];
const indonesia = [];
for (let a = 0; a < pantau.length; a++) {
  if (pantau[a] >= 2) {
    indonesia.push(pantau[a]);
  }
}

console.log(indonesia);

const Math = [1, 5, 3, 7, 9, 1, -4, 9];
const rinaMath = [];
for (let b = 1; b < Math.length; b++) {
  if (Math[b] >= 3) {
    rinaMath.push(Math[b]);
  }
}
console.log(rinaMath);

const agum = ["Wira", "Sukma", "Saputra"];
agum.join("Indonesia");
console.log(agum.join(" - "));

// const tombol = document.querySelector(".submit");
// tombol.addEventListener("click", function () {
//   console.log("tombol tekan");
// });
