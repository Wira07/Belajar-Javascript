function Employe(nama) {
  this.nama = nama;
}

function halo(nim) {
  this.nim = nim;
}

halo.prototype = Object.create(Employe.prototype);

Employe.prototype.sayHello = function (nama) {
  console.log(`Halo ${nama} My Name Is ${this.nama}`);
};

halo.prototype.sayHello = function (nama) {
  console.log(`Halo ${nama} My Name Is ${this.nama}`);
};

const employe = new Employe("Wira");
employe.sayHello("Joko");

const nim = new halo("Wildan");
employe.sayHello("Joko");

halo.prototype.nama = function (konsep) {
  console.log(`Halo nama saya ${konsep}`);
};
