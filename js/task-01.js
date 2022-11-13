const listEL = document.querySelector("#categories");
const itemEl = document.querySelectorAll(".item");

console.log("Number of categories: ", listEL.children.length);

itemEl.forEach((el) => {
  console.log("Category: ", el.firstElementChild.textContent);
  console.log("Elements:", el.children[1].children.length);
});
