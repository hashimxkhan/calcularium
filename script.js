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
    if (b === 0) {
        return "ERROR"
    }
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
        if (firstNum === ans && secondNum === undefined && operator === undefined) {
            firstNum = undefined
        }
        let cur = event.target.textContent
        
        if (operator === undefined) {
            if (ans === firstNum) {
                firstNum = undefined
            }
            firstNum = (firstNum === undefined) ? cur : firstNum + cur
            display.textContent = firstNum
        } else {
            secondNum = (secondNum === undefined) ? cur : secondNum + cur
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
    operator = undefined
})

const del = document.querySelector(".del") 
del.addEventListener("click", function(){
    let content = display.textContent.substring(0,
         display.textContent.length - 1)
    display.textContent = content
    if (operator === undefined) {
        firstNum = firstNum.substring(0, firstNum.length - 1)
    } else {
        secondNum = secondNum.substring(0, secondNum.length - 1)
    }
})
const equals = document.querySelector(".equals")
equals.addEventListener("click", function() {
   if (firstNum != undefined && secondNum != undefined) {
    firstNum = Number(firstNum)
    secondNum = Number(secondNum)
    display.textContent = parseFloat((operate(firstNum, secondNum,
         operator)).toFixed(4))
    secondNum = undefined
    firstNum = ans.toString()
    operator = undefined
   }
})

