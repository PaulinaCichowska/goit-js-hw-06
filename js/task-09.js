function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorChangeButton = document.querySelector(".change-color");
const body = document.querySelector("body");
let colorValue = document.querySelector(".color");

colorChangeButton.addEventListener("click", () => {
  colorValue.innerHTML = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
});
