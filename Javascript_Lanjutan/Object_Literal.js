let mahasiswa = {
  nama: "Wira Sukma Saputra",
  energy: 20,
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.nama} Selamat Makan`);
  },
};
console.log(mahasiswa);

let mahasiswa1 = {
  nama: "Wira Sukma Saputra",
  energy: 25,
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`halo ${this.nama} selamat makan`);
  },
};
console.log(mahasiswa1);

function mahasiswa3(nama, energy) {
  this.nama = nama;
  this.energy = energy;
}

mahasiswa3.prototype.makan = function (porsi) {
  this.energy += porsi;
  return `Halo ${this.nama} selamat makan`;
};

mahasiswa3.prototype.main = function (jam) {
  this.energy -= jam;
  return `Halo ${this.nama} selamat bermain`;
};

mahasiswa3.prototype.tidur = function (jam) {
  this.energy += jam * 2;
  return `Halo ${this.nama} selamat tidur`;
};
