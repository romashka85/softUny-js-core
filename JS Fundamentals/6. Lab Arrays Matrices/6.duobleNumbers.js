function firstLastKElement(arr) {
    let result =  arr
        .filter((num, i) => i % 2  !== 0)
        .map(x => 2*x)
        .reverse();
    return result.join(' ');

}
