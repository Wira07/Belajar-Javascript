const mahasiswa = [4, 6, 2, 8, 9, 1, 4];
const ambil3 = [];
for (let i = 0; i < mahasiswa.length; i++) {
  if (mahasiswa[i] >= 3) {
    ambil3.push(mahasiswa[i]);
  }
}
console.table(ambil);

const newAngka = mahasiswa.filter(function (a) {
  return a >= 3;
});
console.log(newAngka);

function siswa(firstname, Usia) {
  this.firstname = firstname;
  this.Usia = Usia;
  this.Method = function (name) {
    console.log(`Halo ${name}, nama saya ${this.firstname}`);
  };
}

siswa.prototype.run = function () {
  console.log("Wira Sukma Saputra");
};

siswa.prototype.day = function () {
  console.log("Info hari ini");
};

const tampil = new siswa("Wira", 21);
console.log(tampil);

function hari(day) {
  switch (day) {
    case 0: {
      let nama = "Wira Sukma Saputra";
      console.log(nama);
    }
  }
}

const variable = function () {
  this.nama = "Wira";
  this.energy = 21;
  this.method = function () {
    console.log(`Halo ${this.nama} umur saya ${this.energy}`);
  };
};

const tiru = new variable();
console.log(tiru);
tiru.method();

const arr = [3, 6, 5, 3, 2, 4, 3, 4, 2, 4];
const arr2 = arr.map(function (number) {
  return number * 2;
});
console.log(arr2);

const true1 = [5, 3, 4, 3, 4, 3, 4, 5];
const true2 = true1.map(function (f) {
  return f * 2;
});
console.log(true2);

const arr3 = [5, 6, 2, 3, 4, 9, 1, 2, 3];
const arr4 = [];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] >= 3) {
    arr4.push(arr3[i]);
  }
}
console.log(arr4);

const arr5 = [2, 5, 4, 3, 2, 24, 9, 6];
const arr6 = [];
for (let v = 0; v < arr5.length; v++) {
  if (arr5[v] >= 3) {
    arr6.push(arr5[v]);
  }
}

console.log(arr6);

const badut = [1, 7, 5, 3, 4, 8, 7];
const badut1 = badut.map(function (s) {
  return s * 2;
});

const badut3 = [5, 3, 3, 8, 7, 4, 3, 5, 3];
const badut4 = [];
for (let b = 0; badut3.length; b++) {
  if (badut3[b] >= 3) {
    badut4.push(badut3[b]);
  }
}
console.log(badut4);

(function () {
  let nama = "Wira Sukma Saputra";
  console.log(nama);
});

const ambil = function () {
  this.nama = "Wira Sukma Saputra";
  this.umur = 31;
  this.method = function () {
    console.log(`Halo ${this.nama}, Umur saya ${this.umur}`);
  };

  setTimeout(() => {
    console.log(this.umur++);
  }, 500);

  const tiru = document.querySelector("ambil");
  tiru.addEventListener(function () {
    this.Classlist.toggle("contek");
  });

  const hari = {
    makan: function (porsi) {
      this.energy += porsi;
      return `Halo ${this.nama} halo ${this.makan}`;
    },
  };
};

let n = new ambil();
console.log(n);
n.method();
