function rectangleOfStars(n) {
    function printStars(count) {
        console.log("* ".repeat(count));
    }

    for (let i = 0; i < n; i++) {
        printStars(n);
    }
}

rectangleOfStars(4);





