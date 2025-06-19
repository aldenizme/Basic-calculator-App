let num1 = 8
let num2 = 2
var firstNumber = document.getElementById("num1-el").textContent = num1;
var secondNumber = document.getElementById("num2-el").textContent = num2
var summation = document.getElementById("sum-el")




function add(){
let results = (num1+num2)
summation.textContent = "sum " + results


}

function subtract(){

let results = ( num1-num2);
summation.textContent = "sum " + results

}

function divide(){

    let results = ( num1/num2);
    summation.textContent = "sum " + results

}


function multiply(){

    let results = ( num1*num2);
    summation.textContent = "sum " + results

}