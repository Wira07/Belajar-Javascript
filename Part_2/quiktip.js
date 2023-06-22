function test() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}
test();
// console.log(i)
(function () {
  console.log("Wira Sukma Saputra");
})();

(function () {
  console.log("Wildan Pratiwi");
})();

(function () {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
})();
// console.log(i);

function wira() {
  var x = 2;
  console.log(x);
}
wira();
(function () {
  var a = 121;
  console.log(a);
})();

(function () {
  var a = 18;
  console.log(a);
})();

(function () {
  for (let a = 0; a < 10; a++) {
    console.log(a);
  }
})();

function kenangan() {
  let a = "Kamu adalah orang sukses aamiin";
  if (true) {
    let a = "Hai Wira Sukma Saputra";
    console.log(a);
  }
  console.log(a);
}
kenangan();

function mahasiswa() {
  let nama = "Wira Sukma Saputra";
  if (true) {
    let nama = "Teknik Informatika";
    console.log(nama);
  }
  console.log(nama);
}
mahasiswa();

// closure
function merdeka() {
  let nama = "Kita adalah orang sukses";
  function jaya() {
    console.log(nama);
  }
  jaya();
}
merdeka();

function lebaran() {
  let nama = "Wira Sukma Saputra";
  if (true) {
    let nama = "Teknik Informatika";
    console.log(nama);
  }
  console.log(nama);
}
lebaran();

const i = [1, 2, 3, 4, 5];

i.push(6, 7, 8, 9);

console.log(i);

// constructor javascript
function nama(nama, energy) {
  this.nama = nama;
  this.energy = energy;
  this.makan = () => {
    console.log(`Halo ${this.nama} saya punya energy ${this.energy}`);
  };
}
let tambah = new nama("Wira Sukma Saputra", 21);
tambah.makan();

nama.prototype.makan = function (porsi) {
  this.nama += porsi;
  return `Halo ${this.nama} selamat makan`;
};

// constructor function
const Mahasiswa = function () {
  this.nama = "Wira Sukma Saputra";
  this.umur = 21;
  this.sayHello = function () {
    console.log(`Halo ${this.nama} saya berumur ${this.umur}`);
  };
};

const dasar = new Mahasiswa();
console.table(dasar);

function Nama(day) {
  switch (day) {
    case 0: {
      let nama = "Wira Sukma Saputra";
      console.log(nama);
      break;
    }
    case 1: {
      let nama = "Wildan Pratiwi";
      console.log(nama);
      break;
    }
    case 2: {
      let nama = "Lucky MayaSari";
      console.log(nama);
      break;
    }
    default: {
      console.log("Tidak di akui");
    }
  }
}
Nama(2);

function sejarah(nama) {
  console.log(nama);
}
sejarah("Mania");

const Dasar = function () {
  let naruto = "Wira Sukma Saputra";
  console.log(naruto);
};

function india(nama, energy) {
  this.nama = nama;
  this.energy = energy;
  this.day = function () {
    console.log(`Halo nama saya ${this.nama} energy saya ${this.energy}`);
  };
}

let badan = new india("Wira Sukma Saputra", 21);
badan.day();
