function printArr(input) {
    let delimiter = input[input.length -1];
    input.pop();
    let resolt = "";
    for (let i = 0; i < input.length; i++) {
        if(i == 0) {
            resolt += input[i];
        }
        else
            resolt += delimiter + input[i];
    }
    console.log(resolt);

}

printArr(['one', 'two', 'three', '-']);
