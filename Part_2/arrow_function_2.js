const dasar = function (Nama, Energy) {
  this.Nama = Nama;
  this.Energy = Energy;
  this.sayHello = function () {
    console.log(`Halo ${this.Nama}, saya berumur ${this.Energy}`);
  };
};
let tampil = new dasar("Wira", 21);
tampil.sayHello();

