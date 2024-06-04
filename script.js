let firstNum
let secondNum
let operator
function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}
function mod(a, b) {
    return a % b
}
function power(a, b) {
    return a ** b
}

function operate(firstNum, secondNum, operator) {
    switch(operator) {
        case "+":
            add(firstNum, secondNum)
            break
        case "-":
            subtract(firstNum, secondNum)
        case "x":
            multiply(firstNum, secondNum)
        case "/":
            divide(firstNum, secondNum)
        case "%":
            mod(firstNum, secondNum)
        case "^":
            power(firstNum, secondNum)
    }
}

const display = document.querySelector(".display")
display.textContent = "000"
/*
const buttons = document.querySelector(".buttons")
for (let i = 0; i <= 9; i++) {
const digit = document.createElement("button")
digit.textContent = i
digit.className = "btn"
buttons.appendChild(digit)
} */