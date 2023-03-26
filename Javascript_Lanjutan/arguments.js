function nama() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(nama(1, 4, 1, 3, 5));

var nama = [1, 4, 2, 3, 2, 4];
nama.forEach((a) => {
  console.log(a);
});
