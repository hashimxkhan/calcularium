let firstNum
let secondNum
let operator
let ans
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
          ans =  add(firstNum, secondNum)
            break
        case "-":
          ans =  subtract(firstNum, secondNum)
            break
        case "x":
          ans = multiply(firstNum, secondNum)
            break
        case "/":
           ans = divide(firstNum, secondNum)
            break
        case "%":
           ans = mod(firstNum, secondNum)
            break
        case "^":
          ans = power(firstNum, secondNum)
            break
    }
    if (ans > 1e6 || ans < 1e-6) {
        ans = ans.toExponential(2)
    }
    return ans
}
const display = document.querySelector(".display")
const digits = document.querySelectorAll(".digit")
digits.forEach(element => { 
    element.addEventListener("click", function(event) {
        let cur = event.target.textContent
        
        if (operator === undefined) {
            firstNum = (firstNum === undefined) ? cur : firstNum + cur
            firstNum = Number(firstNum)
            display.textContent = firstNum
        } else {
            secondNum = (secondNum === undefined) ? cur : secondNum + cur
            secondNum = Number(secondNum)
            display.textContent = secondNum
        }
    })
});
const operators = document.querySelectorAll(".operator")
operators.forEach(element => {
    element.addEventListener("click", function(event) {
        if (firstNum != undefined) {
        operator = event.target.textContent
        }
        secondNum = undefined
    })
    
});
const ac = document.querySelector(".ac") 
ac.addEventListener("click", function(){
    display.textContent = ""
    firstNum = undefined
    secondNum = undefined
})

const del = document.querySelector(".del") 
del.addEventListener("click", function(){
    let content = display.textContent.substring(0, display.textContent.length - 1)
    display.textContent = content
})
const equals = document.querySelector(".equals")
equals.addEventListener("click", function() {
   if (firstNum != undefined && secondNum != undefined) {
    firstNum = Number(firstNum)
    secondNum = Number(secondNum)
    display.textContent = operate(firstNum, secondNum, operator)
    console.log(firstNum)
    console.log(operator)
    console.log(secondNum)
    console.log(operate(firstNum,secondNum,operator))
    console.log(typeof(operator))
    secondNum = undefined
    firstNum = ans
   }
})
