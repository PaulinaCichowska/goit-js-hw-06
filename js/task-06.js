const inputElement = document.querySelector("#validation-input");
inputElement.addEventListener("blur", (e) => {
  let dataLength = e.currentTarget.getAttribute("data-length");
  if (e.currentTarget.value.length <= dataLength) {
    e.currentTarget.classList.add("valid");
    e.currentTarget.classList.remove("invalid");
  } else {
    e.currentTarget.classList.add("invalid");
    e.currentTarget.classList.remove("valid");
  }
});
