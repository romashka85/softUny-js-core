function NumNegativePositive(arr) {
    let resolt = [];
    for (let index of arr) {
        if (index < 0) {
            resolt.unshift(index);
        }
        else {
            resolt.push(index);
        }
    }
   return resolt.join('\n');
}

console.log(NumNegativePositive([12, -2, 5, 8, 9]));
