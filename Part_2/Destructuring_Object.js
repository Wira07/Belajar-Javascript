const Person = {
  nama: "Wira Sukma Saputra",
  age: 21,
  alamat: {
    kota: "Kuningan",
  },
};
// Dextructuring Object
const {
  nama,
  age,
  alamat: { kota },
} = Person;

const sayName = function (name) {
  console.log(`Nama saya ${name}`);
};

sayName("Wira Sukma Saputra");

// Dectructuring object

const People = {
  firstname: "Wira",
  Middlename: "Sukma",
  Lastname: "Saputra",
  alamat: {
    kelurahan: "Cijoho Landeuh",
  },
};

// Dectructuring Object

const hasan = {
  Nama: "Wira",
  tengah: "Sukma",
  akhir: "Saputra",
  alamat: {
    kota: "Kuningan",
    desa: "Cijoho Landeuh",
  },
};

// destructuring object

const {
  Nama,
  tengah,
  akhir,
  alamat: { alamat },
} = hasan;
