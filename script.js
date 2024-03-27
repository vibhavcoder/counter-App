const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");
let count = 0;
const counterDisplay = document.getElementById("counter-box");

// add click event , function

decrement.addEventListener("click", () => {
  count -= 1;
  counterDisplay.innerHTML = count;
});

increment.addEventListener("click", () => {
  count += 1;
  counterDisplay.innerHTML = count;
});

reset.addEventListener("click", () => {
  count = 0;
  counterDisplay.innerHTML = count;
});
