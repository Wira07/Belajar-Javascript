const judul = document.getElementById("judul");

judul.style.color = "red";
// a.style.backgroundColor = "blue";
judul.innerHTML = "Wildan Pratiwi";

const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "grey";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";
h1.style.textAlign = "center";

// const p1 = document.getElementsByClassName("p1")[0];
// p1.innerHTML = "Wira Sukma Saputra";

const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "Wildan";
p1.style.textAlign = "center";
p1.style.fontSize = "30px";
p1.style.fontWeight = "bold";
p1.style.color = "white";

const p2 = document.getElementsByClassName("p2")[0];
p2.style.backgroundColor = "red";
p2.innerHTML = "Wildan Pratiwi";
p2.style.color = "white";
p2.style.fontSize = "20px";
p2.style.textAlign = "center";

const h2 = document.getElementsByTagName("h2")[0];
h2.style.color = "lightblue";
h2.innerHTML = "Wira Sukma Saputra";
h2.style.textAlign = "center";
h2.style.fontSize = "30px";
h2.style.backgroundColor = "grey";

function wira() {
  document.getElementById("judul").innerHTML = "Sarjana Kita";
}

const a = document.getElementsByTagName("a")[0];
a.style.backgroundColor = "red";
a.style.color = "white";
a.style.fontSize = "20px";

