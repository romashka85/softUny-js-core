
function countLetter(str, letter) {
    let count = 0;
    for (let num of str) {
        if (num == letter)
            count++;

    }
    return count;
}
countLetter('hello', 'l');