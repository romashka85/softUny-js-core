function printArr(arr) {
    let resolt = [];
    let initialNum = 1;

    for (let i = 0; i <= arr.length; i++) {

        if (arr[i] === 'add'){
            resolt.push(initialNum);
        }
        else if (arr[i] === 'remove'){
            resolt.pop();        }
        initialNum++;
    }

    if (resolt.length === 0) {
        console.log('Empty');
    }
    console.log(resolt.join('\n'));

}
printArr(['remove',
    'remove',
    'remove']


);