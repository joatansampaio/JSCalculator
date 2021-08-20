const numberButtons = document.querySelectorAll("[number-data]");
const dotButton = document.querySelector("[dot-button]");
const backspaceButton = document.querySelector("[backspace-button]");
const clearButton = document.querySelector("[clear-button]");
const operatorButton = document.querySelectorAll("[operator-button]");
const equalsButton = document.querySelector("[equals-button]");
const display = document.getElementById("display-box");
var previousNumber = 0;
var currentNumber = 0;
var isOperating = false;
var operation = "";
function resetAll() {
  previousNumber = 0;
  currentNumber = 0;
  isOperating = false;
  operation = "";
}
//Faz o update do display
function updateDisplay(text) {
  display.textContent = text;
}

//BOTAO DE IGUAL
equalsButton.addEventListener("click", () => {
  isOperating = false;
  if (operation == "+") {
    updateDisplay(previousNumber + currentNumber);
  }
  if (operation == "-") {
    updateDisplay(previousNumber - currentNumber);
  }
  if (operation == "*") {
    updateDisplay(previousNumber * currentNumber);
  }
  if (operation == "/") {
    updateDisplay(previousNumber / currentNumber);
  }
  resetAll();
});
//FILTRAR OPERACOES
operatorButton.forEach((button) => {
  button.addEventListener("click", () => {
    isOperating = true;
    operation = button.textContent;
    console.log(operation);
  });
});

//NUMEROS
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isOperating) {
      previousNumber = parseInt(display.textContent);
      updateDisplay("");
      isOperating = false;
    }
    display.textContent += button.textContent;
    currentNumber = parseInt(display.textContent);
    console.log("Current Number:", currentNumber);
  });
});
//PONTO
dotButton.addEventListener("click", () => {
  if (!display.textContent.includes(".")) {
    updateDisplay(display.textContent + ".");
  }
});
//DELETAR
backspaceButton.addEventListener("click", () => {
  display.textContent = display.textContent.slice(0, -1);
  currentNumber = parseInt(display.textContent);
  console.log("Current Number:", currentNumber);
});
//LIMPAR TUDO
clearButton.addEventListener("click", () => {
  updateDisplay("");
  resetAll();
});
