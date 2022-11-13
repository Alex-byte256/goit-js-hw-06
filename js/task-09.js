function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const textEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

btnEl.addEventListener("click", () => {
  const color = getRandomHexColor();
  textEl.textContent = color;
  document.body.style.backgroundColor = color;
});
