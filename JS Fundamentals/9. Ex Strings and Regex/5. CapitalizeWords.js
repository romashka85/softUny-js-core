function capitalizeWords(input) {
    let inputAsArray = input.split(' ');

    for (let i = 0; i < inputAsArray.length; i++) {
        inputAsArray[i] = inputAsArray[i].toLowerCase();
        inputAsArray[i] = inputAsArray[i].charAt(0).toUpperCase()
        + inputAsArray[i].substring(1);

    }

    console.log(inputAsArray.join(' '));



}

capitalizeWords('Capitalize these words');