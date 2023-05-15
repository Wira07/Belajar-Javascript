// const box = document.querySelector(".box");
// box.addEventListener("click", function () {
//   this.classList.toggle("size");
//   setTimeout(function () {
//     this.classList.toggle("caption");
//   }, 600);
// });
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle("satu");
  setTimeout(() => {
    this.classList.toggle("dua");
  }, 600);
  // this.classList.toggle("size");
  // setTimeout(function () {
  //   this.classList.toggle("caption");
  // }, 600);
});

const nama = function () {
  this.nama = "Wira Sukma Saputra";
  this.age = 21;
  this.sayHello = function () {
    console.log(`halo ${this.nama}, selamat umur anda nambah ${this.age}`);
  };

  setInterval(function () {
    console.log(this.age++);
  });

  setInterval(function () {
    console.log(this.age++);
  });
};

const wira = {
  nama: "Wira Sukma Saputra",
  age: 21,
  alamat: {
    kota: "Kuningan",
    provinsi: "Jawa Barat",
    negara: indonesia,
  },
};

const {
  nama,
  age,
  alamat: { kota, provinsi, negara },
} = wira;

(function () {
  let nama = "Wira sukma saputra";
  console.log(nama);
});

function nama(nama, energy) {
  this.nama = nama;
  this.energy = energy;
}

nama.prototype.makan = function (porsi) {
  this.energy += porsi;
  console.log(`Halo ${this.nama}`);
};

const method = {
  makan: function (porsi) {
    this.energy += porsi;
    console.log(`halo ${this.nama}`);
  },
};

setTimeout(() => {
  this.classList.toggle("caption");
}, 500);

const nambah = document.querySelector(".click");
nambah.addEventListener(".suka", function () {
  this.classList.toggle(".nikmat");
  setTimeout(() => {
    this.classList.toggle(".ambil");
  }, 500);
});

