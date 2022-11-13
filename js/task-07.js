const inputEL = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEL.addEventListener("input", () => {
  textEl.style.fontSize = `${inputEL.value}px`;
});
