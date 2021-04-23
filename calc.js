
let operator = '';
let num1 = 0;
let clearState = true;
let input;
let decimalState = false;

clearDisplay();

function changeClearState(){
  (clearState === true) ? clearState = false : clearState = true;
}

const numberButton = document.querySelectorAll('.numberButton');
numberButton.forEach((button) => button.addEventListener('click', displayNumber));

function displayNumber() {
  if (clearState === true) {
    clearDisplay();
    changeClearState();
  }
  if (decimalState === true) checkForDecimal();
  input = document.getElementById('display');
  input.textContent += this.textContent;
  checkNumberLength();
}

function checkNumberLength() {
  if (input.textContent.length > 17) {
    input.textContent = input.textContent.slice(1);
  }
}

function checkForDecimal() {
  const decimal = document.querySelector('#decimal');
  if (document.getElementById('display').textContent.includes('.')) {
    decimal.removeEventListener('click', displayNumber);
    changeDecimalState();
    return;
  } decimal.addEventListener('click', displayNumber);
}

function changeDecimalState() {
  (decimalState === true) ? decimalState = false : decimalState = true;
}

const functionButton = document.querySelectorAll('.functionButton');
functionButton.forEach(button => button.addEventListener('click', storeOperation));

function storeOperation() {
  if (operator !== '') compute();
  operator = this.textContent;
  num1 = Number(document.getElementById('display').textContent);
  clearState = true;
}

const equals = document.querySelector('#equals');
equals.addEventListener('click', compute);

function compute() {
  let num2 = Number(document.getElementById('display').textContent);
  document.getElementById('display').textContent = roundResult(operate(operator, num1, num2));
  changeClearState();
  operator = '';
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearAll)

function clearAll() {
  document.getElementById('display').textContent = '';
  decimal.addEventListener('click', displayNumber);
  operator = '';
}

function clearDisplay() {
  document.getElementById('display').textContent = '';
  decimal.addEventListener('click', displayNumber);
}

const inverse = document.querySelector('#inverse');
inverse.addEventListener('click', inverseNumber);

function inverseNumber() {
  display.textContent = 0 - Number(display.textContent);
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
  if (b === 0) return "Error";
  return a / b;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
} // credit to user michalosman for this round function to fix .1 + .2 bug
