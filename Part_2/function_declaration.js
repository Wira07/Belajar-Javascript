function nama(nama, energy) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energy = energy;
  mahasiswa.makan = function (porsi) {
    this.energy += porsi;
    console.log(`Halo ${this.nama} selamat makan`);
  };
  mahasiswa.main = function (jam) {
    thia.energy -= jam;
    console.log(`Halo ${this.nama} selamat bermain`);
  };
  mahasiswa.tidur = function (tidur) {
    this.energy += porsi * 2;
    console.log(`Halo ${this.nama} selamat tidur`);
  };

  return nama;
}

let tampilkan = nama("Wira Sukma Saputra", 21);

function selamat(day) {
  switch (day) {
    case 0: {
      let nama = "Wira Sukma Saputra";
      console.log(nama);
      break;
    }
  }
}

(function () {
  let nama = "realme 15";
  console.log(nama);
})();

function sekolah() {
  let panggil = "Wira Sukma Saputra";
  console.log(panggil);
}
sekolah();

const gta = (nama) => {
  console.log(`Halo ${nama}`);
};
gta("ajaklah");

// function scope & blok scope
function dasar() {
  let dasar = "dasar javascript";
  if (true) {
    let ayang = "Wira Sukma Saputra";
    console.log(ayang);
  }
  console.log(dasar);
}
dasar();

const typed = new Typed(".typing", {
  strings: ["Wira", "Sukma", "Saputra"],
  backSpeed: 100,
  typeSpeed: 100,
  loop: true,
});

// closure
function sukma() {
  const nilai = 21;
  function raga() {
    console.log(`Halo ${nilai} selamat`);
  }
  raga();
}
sukma();

function nama(nama, energy) {
  let mahasiswa = {};
  nama.nama = nama;
  nama.energy = energy;
}

const masuk = {
  makan: function (porsi) {
    this.energy += porsi;
    console.log`Halo ${this.nama} selamat makan`;
  },
};

function surga(nama, energy) {
  this.nama = nama;
  this.energy = energy;
}

surga.prototype.makan = function (porsi) {
  this.energy += porsi;
  return `halo ${this.nama}`;
};

let array = [1, 2, 9, 4, 5];
console.log(array.reverse());
