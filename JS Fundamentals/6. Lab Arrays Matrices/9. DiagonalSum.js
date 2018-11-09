function diagonalSums(matrix) {
    // let matrix = matrix.map(
    //     row => row.split(' ').map(Number));

    let firstSum = 0;
    let secondarySum = 0;

    for (let i=0; i < matrix.length; i++) {
        firstSum += matrix[i][i];
        secondarySum += matrix[i][matrix.length-1-i];
    }
    console.log(firstSum + ' ' + secondarySum);

}
diagonalSums([  [20, 40],
                [10, 60]]);
