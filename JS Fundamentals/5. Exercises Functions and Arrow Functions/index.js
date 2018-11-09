function radiokristal(input) {
    let cristal = +input[0];


    let cut  = (num) => num/4;
    let lap = (num) => num * 0.8;
    let grind  = (num) => num - 20;
    let etch  = (num) => num - 2;
    let transportAndWash = (num) => {
        console.log('Transporting and washing');
        return Math.floor(num);
    };
    // let xRay = (num) => num + 1;
    let xray = (num) => {
        console.log(`X-ray x1`);
        return ++num;
    };

    for (let i = 1; i <= input.length; i++) {
        let microns = input[i];
        console.log(`Processing chunk ${microns} microns`);
        microns = executeOperation(cristal, microns, 'Cut', cut);
        microns = executeOperation(cristal, microns, 'Lap', lap);
        microns = executeOperation(cristal, microns, 'Grind', grind);
        microns = executeOperation(cristal, microns, 'Etch', etch);

        if (microns + 1 === cristal) {
            microns = xray(microns)
        }
        console.log(`Finished crystal ${microns} microns`);
    }
    
    function executeOperation(cristal, size, operationName, operation) {
        let counter = 0;
        while (operation(size) >= cristal || size - cristal === 1 ){
            size = operation(size);
            counter++;
        }
        if (counter > 0){
            console.log(`${operationName} x${counter}`);
            size = transportAndWash(size);
        }
        return size;
    }






}
cooking(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);