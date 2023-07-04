function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const amount = document.querySelector("#controls input");

createButton.addEventListener("click", (e) => {
  console.log(e);
  let boxesAmount = parseInt(amount.value);
  createBoxes(boxesAmount);
});
destroyButton.addEventListener("click", (e) => {
  boxes.innerHTML = "";
});

function createBoxes(amount) {
  for (let i = 1; i < amount + 1; i++) {
    let size = 30 + 10 * i;
    let color = getRandomHexColor();
    let markup = `<div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`;
    boxes.insertAdjacentHTML("beforeend", markup);
  }
}
console.log(createBoxes());
