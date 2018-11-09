function wordsCount(input) {
let text = input.join(' ');
let regex = /[a-zA-Z0-9_]+/gmi;

let words = text.match(regex);

    let result = {};

    for (let word of words) {
        if (!result.hasOwnProperty(word)) {
            result[word] = 0;
        }

        result[word]++;
    }
    console.log(JSON.stringify(result));
}

wordsCount(['Far too slow, you\'re far too slow.']);