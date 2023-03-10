// document.querySelector('#b p')

const judul = document.getElementById("judul");
judul.innerHTML = "wira sukma saputra";
judul.style.color = "white";
judul.style.backgroundColor = "grey";
judul.style.textAlign = "center";

// const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "blue";
//   p[i].style.color = "white";
//   p[i].style.textAlign = "center";
// }

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "red";

const li3 = document.querySelector("section#b ul li:nth-child(3)");
li3.style.backgroundColor = "grey";

const p4 = document.querySelector("#b p");
p4.style.color = "white";
p4.style.textAlign = "center";
p4.style.fontSize = "30px";

const h3 = document.getElementsByTagName("h3")[0];
h3.style.backgroundColor = "grey";

const dasar = document.getElementsByClassName("dasar")[0];
dasar.style.textAlign = "center";
dasar.innerHTML = "wira sukma saputra";

// const p = document.querySelector("p");
// p.innerHTML = "wira sukma saputra";

// const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "blue";
// }

const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "red";
}

const li2 = document.querySelector("#b ul li:nth-child(1)");
li2.style.backgroundColor = "blue";
