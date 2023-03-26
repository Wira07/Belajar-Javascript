// Destructuring Object dengan Nim
const user = {
  firstname: "Wira",
  Middlename: "Sukma",
  lastname: "Saputra",
  age: 21,
};
const { firstname, Middlename, lastname, age } = user;
console.log(firstname, Middlename, lastname, age);
// Closure
function User() {
  const nama = "Wira Sukma Saputra";
  function agum() {
    console.log(`Halo ${nama} selamat belajar`);
  }
  agum();
}
User();
// Typing
// const typed = new Typed(".Typing", {
//   strings: ["Wira", "Sukma", "Saputra"],
//   typeSpeed: 100,
//   backSpeed: 100,
//   loop: true,
// });

// Destructuring kedua
const person = {
  name: "Wira Sukma Saputra",
  nim: 20210810075,
  address: {
    city: "Kuningan",
    country: "indonesia",
  },
};

const {
  name,
  nim,
  address: { city, country },
} = person;

console.log(name, nim, city, country);
