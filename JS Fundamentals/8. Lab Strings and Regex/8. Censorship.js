function censorShip(string, arr) {

    for (let element of arr) {
        let replaced = '-'.repeat(element.length);
        while (string.indexOf(element) > -1) {
            string = string.replace(element, replaced);
        }


    }
    console.log(string);

}

censorShip('roses are red, violets are blue', [', violets are', 'red']);