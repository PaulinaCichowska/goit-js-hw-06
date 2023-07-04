const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");

decrement.addEventListener("click", () => {
  let val = parseInt(value.textContent);
  value.innerHTML = val - 1;
});

increment.addEventListener("click", () => {
  let val = parseInt(value.textContent);
  counterValue.innerHTML = val + 1;
});
