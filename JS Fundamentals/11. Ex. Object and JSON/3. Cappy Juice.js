function cuppyJuce(input) {
let quantity = {};
let botls = {};

    for (let i = 0; i < input.length; i++) {
    let tokens = input[i].split(' => ');
    let juiceName = tokens[0];
    let juiceQuantity = +tokens[1];

        if (!quantity.hasOwnProperty(juiceName)) {
            quantity[juiceName] = 0;
        }
        quantity[juiceName] += juiceQuantity;

        if (quantity[juiceName] >= 1000){
            botls[juiceName] = parseInt(quantity[juiceName] / 1000);
        }
    }

    for (let key of Object.keys(botls)) {
        console.log(`${key} => ${botls[key]}`);
    }
   

}

cuppyJuce(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);