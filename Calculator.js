const numberButtons = document.querySelectorAll("[number-data]");
const operatorButton = document.querySelectorAll("[operator-button]");
const display = document.getElementById("display-box");
const start = document.querySelector("#startValue");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    display.innerText += button.innerText;
  });
});

function updateDisplay(update) {
  display.innerText += update;
}
