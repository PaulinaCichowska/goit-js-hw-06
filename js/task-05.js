const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

inputElement.addEventListener("input", (e) => {
  outputElement.textContent = e.currentTarget.value;
  if (e.currentTarget.value.length == 0) {
    outputElement.textContent = "Anonymous";
  }
});
