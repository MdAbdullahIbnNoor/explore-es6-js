// function declaration 
function add(a, b){
    return a + b;
}

// funtion expression
const sum = function(a, b){
    return a + b;
}

// arrow functioin
const add2 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;


const result = add(2, 5);
const result2 = add4(4, 6, 8, 10);
console.log(result2);