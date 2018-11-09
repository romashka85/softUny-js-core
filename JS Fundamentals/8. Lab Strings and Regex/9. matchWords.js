function matchWords(text) {
let words = text.match(/\w+/g);
console.log(words.join('|'));
}
matchWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');