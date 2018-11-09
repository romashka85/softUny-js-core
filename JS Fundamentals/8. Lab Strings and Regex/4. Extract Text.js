function extract(text) {

    let resolt = [];
    let open = text.indexOf('(');


    while (open !== -1) {
        let close = text.indexOf(')', open + 1);
        if (close === -1) break;

        resolt.push(text.substring(open + 1, close));
        open = text.indexOf('(', close + 1); // параметър close задаваме значение, откъде ще търсисе


    }
    return resolt.join(', ');

}

console.log(extract('Rakiya) (Bulgarian brandy) is self-made liquor (alcoholic drink)('));

