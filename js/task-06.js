const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  if (inputEl.value.trim().length == inputEl.dataset.length) {
    inputEl.classList = "valid";
  } else {
    inputEl.classList = "invalid";
  }
});
