const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listOfIngredients = document.querySelector("#ingredients");
let addTag = [];

ingredients.forEach((e) => {
  let tag = document.createElement("li");
  tag.textContent = `${e}`;
  tag.classList.add("item");
  addTag.push(tag);
});

listOfIngredients.append(...addTag);
