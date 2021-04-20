function add (a, b) {
  return a + b;
}

function subtract(a,b) {
  return a - b;
}
function multiply(a,b) {
  return a * b;
}

function divide(a,b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
  case '+': return add(a,b);
  case '-': return subtract(a,b);
  case '*': return multiply(a,b);
  case '/': return divide(a,b);
  default: return 'Error';
  }
}

const numberButton = document.querySelectorAll('.numberButton');
numberButton.forEach((button) => button.addEventListener('click', displayNumber));

function displayNumber() {
  document.getElementById('display').textContent += this.textContent;
  console.log(this.textContent);
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearDisplay)

function clearDisplay() {
  document.getElementById('display').textContent = '';
}
