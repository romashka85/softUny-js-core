function smallest2Nums(arr) {
    arr.sort((a, b) => a-b);
    let resolt = arr.slice(0, 2);
    return resolt.join(' ');


}

console.log(smallest2Nums([4, 8, 9, 15, 0]));
