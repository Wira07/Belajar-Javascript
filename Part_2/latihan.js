const mahasiswa = function () {
  this.nama = "Wira Sukma Saputra";
  this.alamat = "Jln, raya cut nyak dhien";
  this.age = 21;
  this.sayHello = function () {
    console.log(`Halo ${this.nama}, alamat saya ${this.alamat}`);
  };

  setInterval(() => {
    console.log(this.age++);
  }, 500);

  

  //   return mahasiswa;
};

let tampilkan = new mahasiswa();
console.log(tampilkan);
tampilkan.sayHello();

const object = {
  firstname: "Wira",
  middlename: "Sukma",
  lastname: "Saputra",
  alamat: {
    kota: "Kuningan",
    kelurahan: "Cijoho landeuh",
  },
};

const {
  firstname,
  middlename,
  lastname,
  alamat: { kota, kelurahan },
} = object;

console.table(firstname);

(function () {
  let nama = "Wira Sukma Saputra";
  console.log(nama);
})();

const time = new Typed("Wira Sukma Saputra", {
  strings: ["Wira Sukma Saputa", "anda"],
  backSpeed: 100,
  typeSpeed: 100,
  loop: true,
});
