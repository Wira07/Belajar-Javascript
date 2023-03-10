const slider = document.querySelector(".container");
const container = document.querySelectorAll(".slide");

document.getElementById("left").addEventListener("click", function () {
  toPrevious();
});
document.getElementById("right").addEventListener("click", function () {
  toPrevious();
});

let current = 0;
let prev = 4;
let next = 1;

const toPrevious = () => {
  console.log("prev");
  if (current > 0) {
    toSlide(current - 1);
  } else {
    toSlide(container.length - 1);
  }
};
