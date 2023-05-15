// fungsi f(x) yang ingin dicari akar-akarnya
function f(x) {
  return Math.pow(x, 3) - 2 * x - 5;
}

// fungsi untuk melakukan bisection method
function Metode(a, b, tol) {
  let c = (a + b) / 2;
  let n = 0;

  while (Math.abs(f(c)) > tol && n < 1000) {
    if (f(a) * f(c) < 0) {
      b = c;
    } else {
      a = c;
    }
    c = (a + b) / 2;
    n++;
  }

  return c;
}

// contoh penggunaan
const a = 1;
const b = 3;
const tol = 0.0001;
const root = Metode(a, b, tol);

console.log(`Akar-akar dari f(x) adalah x = ${root}`);
