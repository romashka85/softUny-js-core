function round(arr) {
    let [num, precision] = arr;
    if (precision > 15)
        precision = 15;
    let denominator = Math.pow(10, precision);
    console.log(Math.round(num * denominator)/denominator);
}

round([3.14568975, 6]);
