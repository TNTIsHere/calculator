const addResult = add(10, 58, 29, 38);
const subtractResult = subtract(100, 500);
const multiplyResult = multiply(10, 10);
const divideResult = divide(10, 5);

function add(...numbers){
    let result = 0;
    for(let i = 0; i < numbers.length; ++i){
        result = result + numbers[i];
    }
    return result;
}

function subtract(...numbers){
    let result = 0;
    for(let i = 0; i < numbers.length; ++i){
        result = result - numbers[i];
    }
    return result;
}

function multiply(...numbers){
    let result = 1;
    for(let i = 0; i < numbers.length; ++i){
        result = result * numbers[i];
    }
    return result;
}

function divide(...numbers){
    let result = 1;
    for(let i = 0; i < numbers.length; ++i){
        result =  numbers[i] / result ;
    }
    return result;
}

console.log("Resultatet er:", addResult);
console.log("Resultatet er:", subtractResult);
console.log("Resultatet er:", multiplyResult);
console.log("Resultatet er:", divideResult);