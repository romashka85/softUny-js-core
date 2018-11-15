let expect = require('chai').expect;
function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

// console.log(lookupChar('hello', 4));

describe('lookupChar Unit Test', function () {
    describe('First part', function () {
        it('Pass an object(should return undefined)', function () {
            let result = lookupChar({}, 5);
            expect(result).to.be.undefined;
        });
        it('PAss flouting point number(should return undefined)', function () {
        let result = lookupChar('asdf', 1.5);
        expect(result).to.be.undefined;
        });
    });
    describe('Index correctness tests', function () {
        it('pass a negative number(should return incorrect index)', function () {
            let result = lookupChar('myStr', -4);
            expect(result).to.be.equal('Incorrect index');
        });
        it('pass a bigger index(should return incorrect index) ', function () {
            let result = lookupChar('myStr', 10);
            expect(result).to.equal('Incorrect index');
        });
        it('pass an index as long as length(should return incorrect index) ', function () {
            let result = lookupChar('myStr', 5);
            expect(result).to.equal('Incorrect index');
        });
    });
    it('Pass correct parameters (should return correct symbol at index) ', function () {
        let result = lookupChar('message', 0);
        expect(result).to.be.equal('m');
        
    });
    it('Pass correct parameters (should return correct symbol at index) ', function () {
        let result = lookupChar('message', 6);
        expect(result).to.be.equal('e');

    });
});


