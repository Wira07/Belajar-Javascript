function nama(i) {
  if (i === 0) return i;
  console.log(i);
  return nama(i - 1);
}
console.log(nama(50));

function adra(a) {
  if (a === 0) return a;
  console.log(a);
  return adra(a - 1);
}
console.log(adra(15));

function wira(f) {
  if (f === 0) return;
  console.log(f);
  return wira(f - 1);
}

// faktorial
function Management(n) {
  if (n === 0) return 1;
  return n * Management(n - 1);
}
console.log(Management(5));

function backSpeed(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * backSpeed(x - 1);
  }
}
console.log(backSpeed(5));

// Gabungan pake function Expression, Arrow Function & Faktorial
const user = (hujan) => {
  if (hujan === 0) {
    return 1;
  } else {
    return hujan * user(hujan - 1);
  }
};
console.log(user(5));
