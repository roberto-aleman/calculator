let operand1;
let operand2;
let operator;
const display = document.querySelector("#calculatorDisplay");
// Operands
const handleOperandClick = (event) => {
    const button = event.target;
    const operand = parseInt(button.textContent);
    if (operator) {
        operand2 = operand2 === undefined ? operand : operand2 * 10 + operand;
        display.textContent = operand2.toString();
    }
    else {
        operand1 = operand1 === undefined ? operand : operand1 * 10 + operand;
        display.textContent = operand1.toString();
    }
};
const operandBtns = document.querySelectorAll(".operand");
operandBtns.forEach((button) => {
    button.addEventListener("click", handleOperandClick);
});
// Operators
const handleOperatorClick = (event) => {
    const button = event.target;
    if (operand2) {
        operate();
        operand1 = parseInt(display.textContent);
        operand2 = 0;
    }
    operator = button.textContent;
};
const operatorBtns = document.querySelectorAll(".operator");
operatorBtns.forEach((button) => {
    button.addEventListener("click", handleOperatorClick);
});
// Calculations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const operate = () => {
    let total;
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
export {};
