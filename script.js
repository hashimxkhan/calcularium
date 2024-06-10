let firstNum
let secondNum
let operator
let counter = 0
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
const digits = document.querySelectorAll(".digit")
digits.forEach(element => { 
    element.addEventListener("click", function(event) {
        let cur = display.textContent
        display.textContent = cur +event.target.textContent
    })
});
const operators = document.querySelectorAll(".operator")
operators.forEach(element => {
    element.addEventListener("click", function(event) {
        element.style.backgroundColor = "gray"
        operator = event.target.textContent
        firstNum = display.textContent
    })
    
});
const ac = document.querySelector(".ac") 
ac.addEventListener("click", function(){
    display.textContent = ""
})

const del = document.querySelector(".del") 
del.addEventListener("click", function(){
    let content = display.textContent.substring(0, display.textContent.length - 1)
    display.textContent = content
})

/*
const buttons = document.querySelector(".buttons")
for (let i = 0; i <= 9; i++) {
const digit = document.createElement("button")
digit.textContent = i
digit.className = "btn"
buttons.appendChild(digit)
} */