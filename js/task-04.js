const valueEl = document.querySelector("#value");
const btnMinEl = document.querySelector('[data-action="decrement"]');
const btnPlusEl = document.querySelector('[data-action="increment"]');

let counterValue = valueEl.textContent;

btnMinEl.addEventListener("click", () => {
  counterValue = Number(counterValue - 1);
  valueEl.textContent = counterValue;
});

btnPlusEl.addEventListener("click", () => {
  counterValue = Number(counterValue + 1);
  valueEl.textContent = counterValue;
});
