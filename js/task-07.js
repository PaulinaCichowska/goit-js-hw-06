const inputElement = document.querySelector("#font-size-control");
const outputElement = document.querySelector("#text");

inputElement.addEventListener("input", (e) => {
  outputElement.style.fontSize = e.currentTarget.value + "px";
});
