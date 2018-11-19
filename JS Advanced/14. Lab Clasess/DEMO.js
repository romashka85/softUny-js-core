class REctangle {
    constructor(width, height, color){
        this.width  = width || 1;
        this.height = height || 2;
        this.color = color || 'white';
    }
    calckArea(){
        return this.width * this.height;
    }
}

let rect = new REctangle(20, 35, 'red');
console.log(rect);
let rect2 = new REctangle(undefined, 2, 'green');
console.log(rect2);

rect.name = 'yulia';
console.log(rect);

let rectArea = new REctangle(20, 10, 'green');
console.log(rectArea.calckArea());