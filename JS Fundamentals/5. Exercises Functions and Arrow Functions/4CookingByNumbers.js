function cooking(input) {
    let number = +input[0];

    let chop = () => number/2;
    let dice = () => Math.sqrt(number);
    let spice = () => number + 1;
    let bake = () => number * 3;
    let fillet = () => number * 0.8;

    for (let i = 1; i < input.length; i++) {
        switch (input[i]) {
            case 'chop':number=chop();
                console.log(number);
                break;
            case 'dice':number=dice();
                console.log(number);
                break;
            case 'bake':number=bake();
                console.log(number);
                break;
            case 'fillet':number=fillet();
                console.log(number);
                break;
            case 'spice':number=spice();
                console.log(number);
                break;
        }

    }


}
cooking(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);