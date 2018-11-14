function modifyCar(initialCarParts) {
    let modifiedCar = {};
    modifiedCar.model = initialCarParts.model;
    let engine;

    if (initialCarParts.power <= 90){
        engine = {
            power:90,
            volume:1800
        }
    } else if (initialCarParts.power <= 120) {
        engine = {
            power:120,
            volume:2400
        }
    }else if (initialCarParts.power <= 200) {
        engine = {
            power:200,
            volume:3500
        }
    }

    modifiedCar.engine = engine;
    modifiedCar.carriage = {
        type:initialCarParts.carriage,
        color:initialCarParts.color
    };






    if (initialCarParts.wheelsize % 2 === 0){
        initialCarParts.wheelsize--;
    }
    let weels = [];
    for (let i = 0; i < 4; i++) {
        fourWeels.push(weels);
    }
    modifiedCar.weels = fourWeels;

    return modifiedCar;
}

console.log(modifyCar({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }

));