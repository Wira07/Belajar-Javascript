// DOM
const boxes = document.querySelectorALL(".box");
image = document.querySelector(".image");

// Loop
boxes.forEach((box) => {
  box.addEventListerner("dragover", (e) => {
    e.preventDefault();
    box.classList.add("hovered");
  });
});
