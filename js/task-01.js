const categories = document.querySelector("#categories");

const items = categories.querySelectorAll(".item");

const allItems = items.length;
console.log(`Number of categories: ${allItems}`);

items.forEach((item) => {
  let category = item.firstElementChild.innerHTML;
  let elements = item.lastElementChild.children.length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements}`);
});
