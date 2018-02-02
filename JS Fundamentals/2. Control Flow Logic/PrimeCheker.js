function isPrime(num) {
    let prime = true;
    for (let d = 2; d <=
    Math.sqrt(num); d++) {
        if (num % d == 0) {
            prime = false;
            break;
        }
    }
    return prime && (num > 1);
}
// for (let x = 0; x < 10; x++) {
//     if (x % 2 == 0)
//         continue;
//     console.log(x++);
// }


