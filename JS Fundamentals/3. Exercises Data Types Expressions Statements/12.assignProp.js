function assign(arr) {
    let [prop1, value1, prop2, value2, prop3, value3,] = arr;
    let obj = {};
    obj [prop1] = value1;
    obj [prop2] = value2;
    obj [prop3] = value3;

    return obj;

}

console.log(assign(['name', 'Pesho', 'age', '23', 'gender', 'male']));



