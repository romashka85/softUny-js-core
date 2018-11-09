let solve = (function extendArray() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        if (n >= 0 && n < this.length) {
            return this.slice(n);
        }
    };

    Array.prototype.take = function (n) {
        if (n >= 0 && n < this.length) {
            return this.slice(0, n);
        }
    };

    Array.prototype.sum = function () {
        return this.
        reduce((acc, cur) => acc + cur);
    };

    Array.prototype.average = function () {
        let sum =  this.
        reduce((acc, cur) => acc + cur);
        let count = this.length;

        return sum / count;
    };
})();

solve.last('cool');

