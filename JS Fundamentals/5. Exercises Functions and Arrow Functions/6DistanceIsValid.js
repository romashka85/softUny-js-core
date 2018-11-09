function distanceIsValid(input) {
    let [x1, y1, x2, y2] = input;
    let x0 = 0;
    let y0 = 0;

    let firstDistance = calcDistance(x1, y1, x0, y0);
    let secondDistance = calcDistance(x2, y2, x0, y0);
    let thirdDistance = calcDistance(x1, y1, x2, y2);


    console.log(`{${x1}, ${y1}} to {${x0}, ${y0}} is ${firstDistance % 1 !== 0 ? 'invalid' : 'valid'}`);
    console.log(`\{${x2}, ${y2}\} to {0, 0} is ${secondDistance % 1 !== 0 ? 'invalid' : 'valid'}`);
    console.log(`\{${x1}, ${y1}\} to \{${x2}, ${y2}\} is ${thirdDistance % 1 !== 0 ? 'invalid' : 'valid'}`);



    function calcDistance(x1, y1, x2, y2) {
        let distanceA = Math.abs(x1 - x2);
        let distanceB = Math.abs(y1 - y2);

        let distanceC = Math.sqrt(distanceA * distanceA + distanceB*distanceB);
        return distanceC;
    }
}

distanceIsValid([2,1, 1, 1]);

