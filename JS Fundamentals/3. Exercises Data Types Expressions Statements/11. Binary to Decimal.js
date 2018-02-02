function bin2dec(num){
    return num.split('').reverse().reduce(function(x, y, i){
        return (y === '1') ? x + Math.pow(2, i) : x;
    }, 0);
}
console.log(bin2dec('111001'));

function binToD(num) {
    let dec = parseInt(num, 16);
    console.log(dec);
}

console.log(binToD('FE'));;


