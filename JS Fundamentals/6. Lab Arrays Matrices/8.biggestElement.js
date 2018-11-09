function biggestElement(matrix) {
    let biggest = Number.NEGATIVE_INFINITY;
    matrix.forEach(row =>
        row.forEach(e => {
            if (e > biggest){
                biggest = e;
        }
    })
    );
    return biggest;
}

console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));