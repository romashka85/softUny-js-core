function printArr(arr) {
    let m = +arr.pop();


    for (let i = 0; i < arr.length; i+=m) {
        console.log(arr[i]);

    }

}
printArr(['5',
    '20',
    '31',
    '4',
    '20',
    '2']);