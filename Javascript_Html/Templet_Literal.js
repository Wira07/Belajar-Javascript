const mhs = {
  firstname: "Wira",
  lastname: "Sukma Saputra",
  umur: 20,
  alamat: {
    status: "Mahasiswa",
    negara: "Indonesia",
  },
};
const {
  firstname,
  lastname,
  umur,
  alamat: { jalan, status, negara },
} = mhs;

console.log("Hai Perkenalkan Saya,", firstname, lastname, "Umur Saya ", umur, "Tahun,", "Pekerjaan saya sebagai", status, "Negara asal,", negara);

// var mhs = {
//   nama: "Wira Sukma Saputra",
//   umur: 20,
//   lulus: true,
//   IP_Semester: [3.5, 3.89, 3.9],
//   IP_Kumulatif: function () {
//     var total = 0;
//     var PTI = this.IP_Semester;
//     for (var i = 0; i < PTI.length; i++) {
//       total += PTI[i];
//     }
//     return total / PTI.length;
//   },
// };
// mhs.IP_Kumulatif();

// // spread operator

// const wira = ["Wira","sukma","saputra"];
// console.log(...wira);

// const kamu = ["Wira","Sukma","Saputra"];

// const all = [kamu];
// console.log(all)

// const halo = {
//     firstname: "Wira",
//     lastname: "Sukma",
//     age: 20,
// }
// console.log(halo)

// const wira = {
//   firstname: "Wira",
//   lastname: "Sukma",
//   age: 20,
//   nim: 20210810075,
// };

// const { firstname, lastname, age, nim } = wira;
// console.log(firstname);
// console.log(lastname);
// console.log(age);
// console.log(nim);

// const wira = ["wira", "sukma", "saputraa"];
// const hasil = ([nama, panjang, lengkap] = wira);

// const nama = "Wira Sukma Saputra";
// const nim = "20210810075";
// const umur = 33;
// // console.log(`Halo, nama saya ${nama}, dan nim saya ${nim}, dan saya ${umur}`);
// // console.log("halo, nama saya" + nama + ", dan nim saya " + nim + ", dan saya " + umur + " tahun ");
