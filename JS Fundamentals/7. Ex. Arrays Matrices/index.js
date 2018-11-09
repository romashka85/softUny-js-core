function printArr(arr) {

    let n = +arr.pop();
    for (let i = 0; i < n % arr.length; i++) {
        let firstEl = arr[arr.length - 1];
        arr.pop();
        arr.unshift(firstEl);
    }
    console.log(arr.join(' '));
}

printArr(['1',
    '2',
    '3',
    '4',
    '2']
);

