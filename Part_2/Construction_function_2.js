const mahasiswa = function () {
  this.nama = "Wira Sukma Saputa";
  this.age = 21;
  this.Hello = function () {
    console.log(`Halo ${this.nama} selamat ${this.age}`);
  };

  //   setInterval(function () {
  //     console.log(this.age++);
  //   }, 500);

  setInterval(() => {
    console.log(this.age++);
  }, 500);

  setInterval(function(){
    console.log(this.age++);
  })

  setInterval(() => {
    
  }, 500);

 
};

const tampil = new mahasiswa();

function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;

  this.start = function () {
    console.log(`Starting ${this.make} ${this.model}...`);
  };

  this.stop = function () {
    console.log(`Stopping ${this.make} ${this.model}...`);
  };
}

let car1 = new Car("Toyota", "Corolla", 2020, "white");
let car2 = new Car("Honda", "Civic", 2019, "red");

console.log(car1); // Output: Car { make: 'Toyota', model: 'Corolla', year: 2020, color: 'white', start: [Function], stop: [Function] }
console.log(car2); // Output: Car { make: 'Honda', model: 'Civic', year: 2019, color: 'red', start: [Function], stop: [Function] }

car1.start(); // Output: Starting Toyota Corolla...
car2.stop(); // Output: Stopping Honda Civic...
