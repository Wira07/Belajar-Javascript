const mahasiswa = document.querySelector("size");
mahasiswa.addEventListener(".click", function () {
  let satu = "size";
  let tiga = "size";

  if (this.classList.containt(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle("toggle");

  setTimeout(() => {
    this.classList.toggle("oppi");
  }, 600);
});

const nama = function () {
  this.firstname = "Wira Sukma Saputra";
  this.classList = "add";
  this.metod = function () {
    console.log(`halo ${this.firstname} dan saya ${this.classList}`);
  };

  setInterval(() => {
    console.log(this.age++);
  }, 500);
};

const tampil = new nama();
console.log(tampil);
tampil.metod();

(function () {
  let nama = "Wira Sukma Saputra";
  console.log(nama);
});

function habi() {
  let mahasiswa = "Wira Sukma Saputra";
  if (true) {
    let nama = "Wira Sukma Saputra";
    console.log(nama);
  }
  console.log(mahasiswa);
}

const sejarh = {
  finally: "Wira",
  localStorage: "laala",
  addEventListener: {
    jumlahDadan: "sumatra",
    jadan: "sumatra",
  },
};

const {finally, localStorage,  addEventListener: {jumlahDadan,jadan},} = sejarh
