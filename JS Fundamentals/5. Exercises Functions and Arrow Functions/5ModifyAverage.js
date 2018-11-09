function modifyAverege(num) {
    let numAsString = num.toString();
    let sum = sumOfDigits(numAsString);

    function sumOfDigits(numAsString) {
        let sum = 0;
        for (let digit of numAsString) {
            sum += +digit;
        }
        return sum;
    }

    while (sum / numAsString.length <= 5){
        numAsString += '9';
        sum = sumOfDigits(numAsString);
    }
    console.log(numAsString);
}
modifyAverege(101);