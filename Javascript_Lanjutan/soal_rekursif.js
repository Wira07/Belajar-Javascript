// Buatlah sebuah fungsi rekursif yang menghitung jumlah bilangan bulat positif dari 1 hingga n.
function sum(n) {
  if (n === 1) return 1;
  return n * sum(n - 1);
}
console.log(sum(5));

function sayang(i) {
  if (i === 0) return;
  console.log(i);
  return sayang(i - 1);
}
console.log(sayang(100));

function nama(u) {
  if (u === 0) return 1;
  console.log(u);
  return u * nama(u - 1);
}
console.log(nama(5));

// Buatlah sebuah fungsi rekursif untuk mencari nilai faktorial dari sebuah bilangan bulat.
function faktorial(a) {
  if (a === 1) {
    return 1;
  } else {
    return a * faktorial(a - 1);
  }
}
console.log(faktorial(5));

// let typed = new Typed(".typed", {
//   strings: ["Wira", "Sukma", "Saputra"],
//   backSpeed: 100,
//   typeSpeed: 100,
//   loop: true,
// });

