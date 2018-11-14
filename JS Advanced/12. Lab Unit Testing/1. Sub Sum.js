function subsum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
    if (startIndex < 0){
        startIndex = 0;
    }
    if (endIndex >= arr.length){
        endIndex = arr.length - 1;
    }
    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++)
        sum += +arr[i];
    return sum;
}
console.log(subsum([10, 20, 30, 40], -1, 2)); // 60
console.log(subsum([10, 20, 30, 40], 1, 20)); // 90
console.log(subsum([10, 20, 30, 40, 50, 60], 3, 4)); // 90
console.log(subsum('pesho', 1, 2)); // NaN
console.log(subsum({}, 1, 2));      //NaN
console.log(subsum(['10', '20', '30'], 1, 2)); // 50
console.log(subsum([1.1, 1.1, 1.1], -1, 20)); // 90
