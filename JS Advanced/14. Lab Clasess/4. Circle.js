class Circule {
    constructor (radius){
        this.radius = radius;
    }
    get diameter () {
        return this.radius *2;
    }
    set diameter (diameter) {
        this.radius = diameter / 2;
    }

    get area (){
        return this.radius ** 2 * Math.PI;
    }
}

let c = new Circule(5);
console.log(c.diameter);
console.log(c.area);

c.radius = 8;
console.log(c.diameter);
console.log(c.area);

c.diameter = 12;
console.log(c.diameter);
