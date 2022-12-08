const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const resultEL = document.getElementById("result");

let state = 0;

increment.addEventListener("click", () => {
  state++;
  resultEL.textContent = state;
});
decrement.addEventListener("click", () => {
  state--;
  resultEL.textContent = state;
});
