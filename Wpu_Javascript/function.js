// global scope / wondow scope
let a = 1;

function test() {
  let i = 2;
  // didalam variable function bisa liat ke luar
  console.log(a);
}
test();
// tapi diluar variable function tidak bisa liat ke dalam
console.log(i);

// block scope
if (true) {
  let b = 3;
  console.log(b);
}
// tapi diluar block scope tidak bisa liat ke dalam
console.log(b);

// const b = 1;

// function dasar() {
//   const c = 2;
//   console.log(b);
// }
// dasar();
// console.log(c);

