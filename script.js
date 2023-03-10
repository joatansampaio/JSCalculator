const previousNumberElement = document.querySelector('[previous-operand-text]');
const currentNumberElement = document.querySelector('[current-operand-text]');
const operationButtons = document.querySelectorAll('[operator]');
const numberButtons = document.querySelectorAll('[number]');
const clearButton = document.querySelector('[all-clear]');
const deleteButton = document.querySelector('[delete]');
const equalsButton = document.querySelector('[equals]');

const calculator = new Calculator(previousNumberElement, currentNumberElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});

clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
});