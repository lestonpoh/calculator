function add(num1,num2){
    return num1 + num2
}

function subtract(num1,num2){
    return num1 - num2
}

function multiply(num1,num2){
    return num1 * num2
}

function divide(num1,num2){
    return num1 / num2
}

function operate(num1,num2,operator){
    if (operator === add){
        return add(num1,num2)
    }else if (operator === subtract){
        return subtract(num1,num2)
    }else if (operator === multiply){
        return multiply(num1,num2)
    }else{
        return divide(num1,num2)
    }
}

const NUMBERS = {"one":1,"two":2,"three":3,"four":4,"five":5,
                "six":6,"seven":7,"eight":8,"nine":9,"zero":0};
let displayValue = "";

const displayText = document.querySelector("#displayText")
const buttons = document.querySelectorAll("button")
buttons.forEach((button)=> button.addEventListener("click",()=>{
    if (Object.keys(NUMBERS).includes(button.id)){
        if (displayValue.length <14){
            displayValue+=NUMBERS[button.id]
            displayText.textContent = displayValue
        }
    }else if (button.id === "clear"){
        displayValue = ""
        displayText.textContent = displayValue
    }else if (button.id === "delete"){
        displayValue = displayValue.slice(0,-1);
        displayText.textContent = displayValue
    }
}))