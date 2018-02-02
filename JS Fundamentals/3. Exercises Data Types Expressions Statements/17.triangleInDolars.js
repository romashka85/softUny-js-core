function triangleInDolars(n) {
    for (let row = 1; row <= n; row++) {
        let line = '';
        for (let col=1; col <= row; col++) {
            line += '$';
        }
        console.log(line);
    }
}
triangleInDolars(5);

function trangle2(n) {
    for (let row = 1; row <= n; row++) {
        console.log(new Array(row+1).join('$'));
    }
}
trangle2(5);

function trangle3(n) {
    for (let row = 1; row <= n; row++) {
        console.log('$'.repeat(row));
    }
}
trangle3(5);

