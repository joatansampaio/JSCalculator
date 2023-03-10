class Calculator {

  constructor(previousNumberElement, currentNumberElement) {
    this.previousNumberElement = previousNumberElement;
    this.currentNumberElement = currentNumberElement;
    this.clear();
  }
  
  updateDisplay() {
    this.currentNumberElement.innerText =
      this.getDisplayNumber(this.currentOperand);
    if (this.operation != null) {
      this.previousNumberElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
    }else{
      this.previousNumberElement.innerText = '';
    }
    
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '÷':
        computation = prev/current;
        break;
      default:
        return
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  clear() {
    this.previousOperand = '';
    this.currentOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits))
      integerDisplay = '';
    else
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });

    if (decimalDigits != null)
      return `${integerDisplay}.${decimalDigits}`
    else
      return integerDisplay

  }

}
