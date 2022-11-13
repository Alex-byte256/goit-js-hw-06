const inputEl = document.querySelector("#name-input");
const outputEL = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  outputEL.textContent = inputEl.value.trim();
  if (outputEL.textContent === "") {
    outputEL.textContent = "Anonymus";
  }
});
