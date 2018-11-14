let expect = require('chai').expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
    return "odd";
}

describe('isOddOrEven', function () {
    it('should return undefined', function () {
        expect(isOddOrEven(15)).to.equal(undefined, 'Function did not return the correct result');
    });
    it('should return undefined', function () {
        expect(isOddOrEven({name: 'pesho'})).to.equal(undefined, 'Function did not return the correct result');
    });
    it('should return even result', function () {
        expect(isOddOrEven('cool')).to.equal('even', 'Function did not return the correct result');
    });
    it('should return odd result', function () {
        expect(isOddOrEven('coo')).to.equal('odd', 'Function did not return the correct result');
    });
    it('with multiple checks', function () {
        expect(isOddOrEven('cat')).to.equal('odd', 'Function did not return the correct result');
        expect(isOddOrEven('alabala')).to.equal('odd', 'Function did not return the correct result');
        expect(isOddOrEven('is it even')).to.equal('even', 'Function did not return the correct result');

    });

});

// console.log(isOddOrEven('col'));
