function modifyCar(initialCarParts) {
    let modifiedCar = {};
    modifiedCar.model = initialCarParts.model;
    let engine = {};

    if (initialCarParts.power <= 90){
        engine.power = 90;
        engine.volume = 1800;
    } else if (initialCarParts.power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
    }else if (initialCarParts.power <= 200) {
        engine.power = 200;
        engine.volume = 3500;
    }

    modifiedCar.engine = engine;
    let carriage = {};

    carriage.type = initialCarParts.carriage;
    carriage.color = initialCarParts.color;

    modifiedCar.carriage = carriage;

    let weels = initialCarParts.wheelsize;
    if (weels % 2 === 0){
        weels -= 1;
    }
    let fourWeels = [];
    for (let i = 0; i < 4; i++) {
        fourWeels.push(weels);
    }
    modifiedCar.wheels = fourWeels;

    return modifiedCar;
}

console.log(modifyCar({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }

));