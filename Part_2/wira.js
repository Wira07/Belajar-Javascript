function mahasiswa(firstname, age) {
  this.firstname = firstname;
  this.age = age;
  this.sayHello = (Nama) => {
    console.log(`Halo ${Nama}, nama saya ${this.firstname}`);
  };
}

function Manager(firstname, age, lastname) {
  mahasiswa.call(this, firstname, age);
  this.lastname = lastname;
}

const tampilkan = new Manager("Wira Sukma", 21, "Saputra");
console.log(tampilkan);
tampilkan.sayHello();

// arrow function
const siswa = function () {
  this.nama = "Wira Sukma Saputra";
  this.age = 21;
  this.sayHello = () => {
    console.log(`Halo ${this.nama}, dan saya umur ${this.age} Tahun`);
  };
};

const hasil = new siswa();
console.log(hasil);
hasil.sayHello();

// setInterval
const setIntervala = function () {
  this.firstname = "Wira Sukma Saputra";
  // this.middlename = "Sukma";
  // this.lastname = "Saputra";
  this.age = 21;
  this.sayHello = function () {
    console.log(`Halo Nama ${this.firstname}, dan umur saya ${this.age} Tahun`);
  };

  setInterval(() => {
    console.log(this.age++);
  }, 500);
};

const materi = new setIntervala();

const rizal = function () {
  console.log(`Halo nama saya ${this.nama}`);
};
const neni = new rizal("Wira");

let mama = [1, 3, 5, 2, 7, 8, 2, 2, 9];
const p = nama.map(function (r) {
  return r * 2;
});

setInterval(() => {
  console.log(this);
}, 100);
