function agregate(arr) {
    let sum = arr.reduce((a,b) => a + b);
    console.log(sum);
    let min = arr.reduce((a, b) => Math.min(a,b));
    console.log(min);
    let max = arr.reduce((a,b) => Math.max(a,b));
    console.log(max);
    let product = arr.reduce((a,b) => a * b);
    console.log(product);
    let concut =  arr.reduce((a,b) => '' + a + b);
    console.log(concut);
}
agregate([2,3,10,5]);