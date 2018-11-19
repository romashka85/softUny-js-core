class Stringer {
    constructor(string, innerLength){
        this.innerString = string;
        this.innerLength = innerLength;
    }

    get innerLength(){
        return this._innerLendth;
    }
    set innerLength(innerLength){
        if (innerLength < 0){
            this._innerLendth = 0;
        } else {
            this._innerLendth = innerLength;
        }
    }

    increase (length){
        this.innerLength += length;
    }
    decrease (length){
        this.innerLength -=length;
    }

    toString(){
        if (this.innerString.length > this.innerLength){
            return this.innerString.substring(0, this.innerLength) + '...';
        }
        return this.innerString;
    }

}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
