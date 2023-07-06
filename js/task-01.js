const categories = document.querySelector("#categories");

const items = categories.querySelectorAll(".item");

const allItems = items.length;
console.log(`Number of categories: ${allItems}`);

items.forEach((e) => {
  console.log(`Category: ${e.querySelector("h2").textContent}`);
  console.log(`Elements: ${e.querySelectorAll("li").length}`);
});
