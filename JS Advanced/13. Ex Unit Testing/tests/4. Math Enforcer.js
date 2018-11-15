let expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


describe("mathEnforcer Unit test", function () {
    describe("addFive check", function () {
        it('pass a string(should return undefined)', function () {
            let result = mathEnforcer.addFive('str');
            expect(result).to.be.equal(undefined);
        });
        it('pass a string(should return undefined)', function () {
            let result = mathEnforcer.addFive({});
            expect(result).to.be.equal(undefined);
        });

        it('add 5(should return the result + 5)', function () {
            let result = mathEnforcer.addFive(4);
            expect(result).to.be.equal(9);
        });
        it('add negative num(should return the result - 5)', function () {
            let result = mathEnforcer.addFive(-5);
            expect(result).to.be.equal(0);
        });
        it('add floating point(should return the result + 5)', function () {
            let result = mathEnforcer.addFive(1.5);
            expect(result).to.be.closeTo(6.5, 0.01);
        });
    });
    describe("subtractTen check", function () {
        it('pass an object(should return undefined)', function () {
            let result = mathEnforcer.subtractTen({});
            expect(result).to.be.equal(undefined);
        });
        it('pass a string(should return undefined)', function () {
            let result = mathEnforcer.subtractTen('str');
            expect(result).to.be.equal(undefined);
        });
        it('subtract negative num(should return the result - 5)', function () {
            let result = mathEnforcer.subtractTen(-5);
            expect(result).to.be.equal(-15);
        });
        it('subtract floating point(should return the result + 5)', function () {
            let result = mathEnforcer.subtractTen(11.5);
            expect(result).to.be.closeTo(1.5, 0.01);
        });

        it('subtract 10 (should return the result)', function () {
            let result = mathEnforcer.subtractTen(12);
            expect(result).to.be.equal(2);
        });
    });
    describe("sum check", function () {
        it('pass both parameters as sting(should return undefined)', function () {
            let result = mathEnforcer.sum('num', 'num');
            expect(result).to.be.equal(undefined);
        });
        it('pass both parameters as objects(should return undefined)', function () {
            let result = mathEnforcer.sum({}, {});
            expect(result).to.be.equal(undefined);
        });
        it('pass both parameters as sting(should return undefined)', function () {
            let result = mathEnforcer.sum('num', 1);
            expect(result).to.be.equal(undefined);
        });
        it('pass both parameters as sting(should return undefined)', function () {
            let result = mathEnforcer.sum(2, 'num');
            expect(result).to.be.equal(undefined);
        });
        it('return sum(should return the sum of two param)', function () {
            let result = mathEnforcer.sum(12, 2);
            expect(result).to.be.equal(14);
        });
        it('return sum(should return the sum of two negative param)', function () {
            let result = mathEnforcer.sum(-12, -2);
            expect(result).to.be.equal(-14);
        });
        it('return sum(should return the sum of two flouting point param)', function () {
            let result = mathEnforcer.sum(1.2, 1.2);
            expect(result).to.be.closeTo(2.4, 0.01);
        });

    });
});

// console.log(mathEnforcer.addFive(5));
// console.log(mathEnforcer.subtractTen(1));
// console.log(mathEnforcer.sum(1, 2));






