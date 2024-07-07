let operand1: number;
let operand2: number;
let operator: string;
const display = document.querySelector("#calculatorDisplay") as HTMLElement;

// Operands
const handleOperandClick = (event: Event) => {
  const button = event.target as HTMLButtonElement;
  const operand = parseInt(button.textContent!);

  if (operator) {
    operand2 = operand2 === undefined ? operand : operand2 * 10 + operand;
    display.textContent = operand2.toString();
  } else {
    operand1 = operand1 === undefined ? operand : operand1 * 10 + operand;
    display.textContent = operand1.toString();
  }
};

const operandBtns = document.querySelectorAll(".operand");
operandBtns.forEach((button) => {
  button.addEventListener("click", handleOperandClick);
});

// Operators
const handleOperatorClick = (event: Event) => {
  const button = event.target as HTMLButtonElement;
  operator = button.textContent!;
};

const operatorBtns = document.querySelectorAll(".operator");
operatorBtns.forEach((button) => {
  button.addEventListener("click", handleOperatorClick);
});

// Calculations
const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;
const multiply = (a: number, b: number) => a * b;
const divide = (a: number, b: number) => a / b;

const operate = () => {
  let total: number;
  switch (operator) {
    case "+":
      total = add(operand1, operand2);
      break;
    case "-":
      total = subtract(operand1, operand2);
      break;
    case "*":
      total = multiply(operand1, operand2);
      break;
    case "/":
      total = divide(operand1, operand2);
      break;
    default:
      total = 0;
      break;
  }
  display.textContent = total.toString();
};

const operateBtn = document.querySelector("#equals");
operateBtn?.addEventListener("click", operate);
