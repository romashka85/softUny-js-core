function convert(inches) {
    let feet = Math.floor(inches / 12);
    let remainderInInches = inches % 12;

    console.log(`${feet}'-${remainderInInches}"`);
}

