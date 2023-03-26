const nama = ["Wira", "Sukma", "Saputra", 21, true];
nama.push("Javascript");

console.log(...nama);

const sadar = ["Ratu", 90, true, 12, "Hantu", [90, false, true]];
console.log(sadar[5][2]);

var arr = ["Wira", "Sukma", "Saputra", "Wildan", "Pratiwi"];
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

var huhu = ["wildan", "chiara", "chika", "wiwi", "eca"];
console.log(huhu.join());

var gya = ["Juju", "Jaja", "Huhu"];
gya.unshift("sandhika");
console.log(...gya);
