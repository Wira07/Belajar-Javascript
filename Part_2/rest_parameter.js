function nama(a, b, c, ...myArgs) {
  return myArgs;
}
console.log(nama(1, 2, 3, 4, 5, 6, 7));

// function myFunc(a, b, ...myArgs) {
//   return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
// }
// console.log(myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function uang(a, b, c, ...myFunc) {
  //   return myFunc;
  return Array.from(arguments);
}
console.log(uang(1, 2, 3, 4, 5, 6, 7, 8));

// contoh rest parameter

function akal(a, b, c, ...myOld) {
  return myOld;
}

console.log(akal(1, 2, 3, 40, 50, 60, 70, 80));
