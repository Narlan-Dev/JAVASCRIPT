const numbers =  document.querySelectorAll('.numbers');
const result =  document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');
const comma = document.querySelector('.comma');


let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSeconValue = false;
let sign = "";
let resultValue = 0;
let isFristComma = false;
let isSecondComma = false;

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if(isFirstValue === false){
            getFristValue(atr);
        }
        if(isSeconValue === false){
            getSecondValue(atr);
        }
    })
}

function getFristValue(el){
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el){
    if(firstValue != "" && sign != ""){
        secondValue += el;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSign(){
    for(let i = 0; i < signs.length; i++){
         signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}
getSign();

equals.addEventListener('click', () => {
    if(firstValue != "" && secondValue != "" && sign != ""){
        result.innerHTML = "";
        switch (sign) {
            case "+":
                resultValue = firstValue + secondValue;
                break;
            case "-":
                resultValue = firstValue - secondValue;
                break;
            case "x":
                resultValue = firstValue * secondValue;
                break;
            case "/":
                resultValue = firstValue / secondValue;
                break;
            default:
                break;
        }

        result.innerHTML = resultValue;
        firstValue = resultValue;
        secondValue = "";

        checkResultLenght();
    }
})

function checkResultLenght(){
    resultValue = JSON.stringify(resultValue);
    if(resultValue.length >= 8){
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click', () =>{
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue = -firstValue;
        firstValue = resultValue;
    }if(firstValue != "" && secondValue != "" && sign != ""){
        resultValue = -resultValue;
    }

    result.innerHTML = resultValue;
})

percent.addEventListener('click', () =>{
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue = firstValue/100;
        firstValue = resultValue;
    }
    if(firstValue != "" && secondValue != "" && sign != ""){
        resultValue = resultValue/100;
    }

    result.innerHTML = resultValue;
})

comma.addEventListener('click', () =>{

    if(!isFristComma && firstValue != ""){
        result.innerHTML = "";
        resultValue = firstValue+"."
        firstValue = resultValue;
        result.innerHTML = resultValue;
        isFristComma = true;   
    }
    if(!isSecondComma && firstValue != "" && secondValue != "" && sign != ""){
        result.innerHTML = "";
        resultValue = secondValue+"."
        secondValue = resultValue;
        result.innerHTML = resultValue;
        isSecondComma = true;  
    }

})

clear.addEventListener('click', () =>{
    result.innerHTML = 0;

    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSeconValue = false;
    sign = "";
    resultValue = 0;
    isFristComma = false;
    isSecondComma = false;
})


