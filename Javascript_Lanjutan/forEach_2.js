// const number = [1, 5, 3, 6, 3, 6, 7, 2];
// for (let i = 0; i < number.length; i++) {
//   console.log(number[i]);
// }

const angka = ["adra", "wira", "habi"];
angka.forEach((a, b) => {
  console.log(`Mahasiswa terbaik ${a} ${b + 1}`);
});

const arsel = [1, 3, 4, 1, 4, 1, 3];
arsel.forEach((i) => {
  console.log(i);
});

const muslim = [3, 2, 54, 22, 42, 32];
muslim.forEach((a) => {
  console.log(a);
});

let firstname = [5, 4, 3, 2, 4, 2, 6, 3];
firstname.forEach((b) => {
  console.log(b);
});

// Desstruturing
const hujan = {
  firstName: "adra",
  Middlename: "Wira",
  lastname: "Saputra",
  age: 21,
  address: {
    city: "kuningan",
    country: "indonesia",
  },
};

const {
  firstName,
  Middlename,
  lastname,
  age,
  address: { city, country },
} = hujan;

console.log(firstName, Middlename, lastname, age, city, country);

// Destructuring Object

const user = {
  name: "Wira Sukma Saputra",
  nim: 20210810075,
  kelas: "TINFC 2021 A",
  age: 21,
  address: {
    kota: "Kuningan",
    provinsi: "Jawa Barat",
    negara: "Indonesia",
  },
};

const {
  name,
  nim,
  kelas,
  address: { kota, provinsi, negara },
} = user;
