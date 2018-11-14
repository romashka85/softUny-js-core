let expect = require('chai').expect;

function sumOfTwoNumbers(firstNumber, secondNumber) {
    let sum = firstNumber + secondNumber;
    return sum;
}




describe('Im demo test describe', function () {
    it('Sum of two positive numbers', function () {
        expect(sumOfTwoNumbers(15,30)).to.equal(45);
    });
    it('Sum of two positive numbers', function () {
        expect(sumOfTwoNumbers('a',30)).to.equal('a30');
    });
});