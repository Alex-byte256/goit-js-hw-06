const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const items = [];

ingredients.forEach((el) => {
  const itemEl = document.createElement("li");
  itemEl.innerHTML = el;
  itemEl.classList = "item";
  items.push(itemEl);
});

listEl.append(...items);
