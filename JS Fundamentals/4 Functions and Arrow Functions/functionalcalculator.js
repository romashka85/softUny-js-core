function calculate(a, b, op) {

    let add = function (a, b) {return a + b};
    let subtract = function (a, b) {return a - b};
    let multiply = function (a, b) {return a * b};
    let divide = function (a, b) {return a / b};

    switch (op) {
        case "+": return add (a, b);
        case "-": return subtract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
  }
}
console.log(calculate(2, 4, '*'));


function myCalculator(operator) {
    let sum = (a, b) => {
        return a + b;
    };
    let subtract = (a, b) => {
        return a - b;
    };
    let multiply = (a, b) => {
        return a * b;
    };
    let divide = (a, b) => {
        return a / b;
    };


if (operator === '+'){
    return sum;
}
else if (operator === '-') {
    return subtract(x, y);
}
else if (operator === '*') {
    return multiply(x, y);
}
else if (operator === '/') {
    return divide(x, y);
}

}

let b = myCalculator('+');
console.log(b(3, 4));



