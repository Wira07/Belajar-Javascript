// function angka(i) {
//   if (i === 0) return;
//   console.log(i);
//   angka(i - 1);
// }
// angka(10);
// looping
for (let a = 10; a >= 1; a--) console.log(a);
// Rekursif
function tampil(a) {
  if (a === 0) return;
  console.log(a);
  return tampil(a - 1);
}
function agum(q) {
  if (q === 0) return;
  console.log(q);
  return agum(q - 1);
}
console.log(agum(15));
tampil(10);
function tonton(s) {
  if (s === 0) return;
  console.log(s);
  tonton(s - 1);
}
tonton(20);
// faktorial
function faktorial(n) {
  if (n === 0) return 1;
  return n * faktorial(n - 1);
}
console.log(faktorial(5));
function energy(d) {
  if (d === 0) return 1;
  return d * energy(d - 1);
}
console.log(energy(7));

function baru(i) {
  for (let y = i; i > 0; i++) baru *= i;
  return baru;
}
console.log(baru(50));

function ayah(e) {
  if (e === 0) return e;
  console.log(e);
  return ayah(e - 1);
}
