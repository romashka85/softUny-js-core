function solve(str, text) {
    let count = 0;

    let index = text.indexOf(str);

    while (index !== -1){
    index++;
    count++;
    index = text.indexOf(str, index);
    }

    return count;
}

console.log(solve('the', 'the quick brown the fox jumps over the lazy dog'));

