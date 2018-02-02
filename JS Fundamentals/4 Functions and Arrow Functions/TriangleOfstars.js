function printTriangleOfStars(n) {
    function printStars(count) {
        console.log("*".repeat(count));
    }

    for (let i = 1; i <= n; i++) {
     printStars(i);
    }
    for (let i= n-1; i > 0; i--) {
        printStars(i);
    }
}
printTriangleOfStars(4);




function solev(input) {

    let n = Number(input[0]);
    let str = "";

    for (row = 1; row <= n; row++) {

        for (col = 1; col <= row; col++) {
            str += "*";
        }
        str += '\n'
    }
    for (row = 0; row < n; row++) {
        for (col = 0; col < n - row - 1; col++) {
            str = str + "*";
        }
        str += "\n"
    }
    console.log(str);
}
// solev(['4']);