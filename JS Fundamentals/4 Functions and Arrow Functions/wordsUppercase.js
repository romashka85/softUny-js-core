function wordsUppercase(str) {
    let strUpper = str.toUpperCase();
    let words = extractWords();
    words = words.filter(w => w !== '');
    return words.join(', ');
    function extractWords() { return strUpper.split(/\W+/); }
}


console.log(wordsUppercase('Hi, how are you?'));

function toUpper(str) {
    console.log(str.toUpperCase()
        .split(/\W+/)
        .filter(w => w !== '')
        .join(', '));
}

toUpper(" Hi, how are you?")