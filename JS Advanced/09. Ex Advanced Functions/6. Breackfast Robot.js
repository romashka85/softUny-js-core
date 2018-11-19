let menuRequest = (function () {
    let robot = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    let products = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };
    return function (inputData) {
        let tokens = inputData.split(' ');
        let command = tokens[0];
        if (command === 'restock') {
            let microelement = tokens[1];
            let quantity = +tokens[2];
            robot[microelement] += quantity;
            return 'Success';
        }else if (command === 'report'){
            return `protein=${robot.protein} carbohydrate=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`
        }else if (command === 'prepare') {
            let resip = tokens[1];
            let quantityOfIngrad = +tokens[2];
            let canProductBeCoked = true;
            for (let ingradient in products[resip]) {
                if (robot[ingradient] < products[resip][ingradient] * quantityOfIngrad){
                    canProductBeCoked = false;
                    return `Error: not enough ${ingradient} in stock`;
                }
            }
            if (canProductBeCoked) {
                for (let ingradient in products[resip]) {
                    robot[ingradient] -= products[resip][ingradient]*quantityOfIngrad;

                }
                return 'Success';
            }
        }
    }
})();
console.log(menuRequest('restock carbohydrate 10'));
console.log(menuRequest('restock flavour 10'));
console.log(menuRequest('prepare apple 1'));
console.log(menuRequest('restock fat 10'));
console.log(menuRequest('prepare burger 1'));
console.log(menuRequest('report'));
