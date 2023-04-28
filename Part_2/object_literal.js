let mahasiswa = {
  nama: "Wira Sukma Saputra",
  energy: 20,
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.nama} selamat makan`);
  },
};

function wira() {
  const wildan = "Wira Sukma Saputra";
  function main() {
    console.log(`Halo ${wildan} selamat makan`);
  }
  main();
}
wira();

function baru(nama, energy) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energy = energy;
  mahasiswa.makan = function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.nama} selamat belajar`);
  };
  return mahasiswa;
}
let tambah = baru("wira", 20);

const method = {
  makan: function (porsi) {
    this.energy += porsi;
    return `Halo ${this.nama} selamat makan`;
  },
  main: function (jam) {
    this.energy -= jam;
    return `Halo ${this.nama} selamat bermain`;
  },
  tidur: function (jam) {
    this.energy += jam * 2;
    return `halo ${this.nama} selamat tidur`;
  },
};

function selamat(nama, energy) {
  let mahasiswa = Object.create(method);
  mahasiswa.nama = nama;
  mahasiswa.energy = energy;
}

let belajar = selamat("Wira Sukma Saputra", 30);
let belajar1 = selamat("Saputra", 40);

const wildan = {
  nama: "Wira sukma saputra",
  age: 21,
  hasil: function (porsi) {
    this.age += porsi;
    console.log(`Halo ${this.nama}`);
  },
};
