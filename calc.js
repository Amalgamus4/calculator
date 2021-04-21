
let operator = '';
let num1 = 0;
let clearState = true;

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
  document.getElementById('display').textContent += this.textContent;
}

const functionButton = document.querySelectorAll('.functionButton');
functionButton.forEach(button => button.addEventListener('click', addOperation));

function addOperation() {
  operator = this.textContent;
  num1 = Number(document.getElementById('display').textContent);
  clearState = true;
}

const equals = document.querySelector('#equals');
equals.addEventListener('click', compute);

function compute() {
  let num2 = Number(document.getElementById('display').textContent);
  document.getElementById('display').textContent = operate(operator, num1, num2);
  changeClearState();
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearDisplay)

function clearDisplay() {
  document.getElementById('display').textContent = '';
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
  return a / b;
}
