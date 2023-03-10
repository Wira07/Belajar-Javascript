function wira(greet) {
  console(`halo saya adalah ${greet}`);
}
console.log("wira sukma saputra");

// arrow function
const nama = () => {
  console.log(`saya adalah wira ${nama}`);
};
console.log("kita adalah fkom jaya jaya");

let kami = function (dasar) {
  console.log(`nama saya ${dasar}`);
};

kami("wira sukma saputra");

const wildan = () => console.log(`selamat siang semuanya`);
wildan();

const dasar = function (hari) {
  console.log(`saya sedang melakukan nama ${hari}`);
};
console.log("hari hari pelatihan dasar");

const apk = (yuyun) => {
  console.log(`saya sedang belajar ${yuyun}`);
};
apk("bahasa inggris");

const adra = (a, b) => a * b;
console.log(adra(8, 9));

let c = 1;
function latihan() {
  let d = 2;
  console.log(c);
}
latihan();
//
function wira(a, b) {
  var wira;
  wira = 9 + 9;
  console.log(wira(a,b));
}

const wira = function (a, b) {
  var wira;

  wira = a + b;

  return wira;
};
