// function solve(matrix) {
// let bigestNum = Number.NEGATIVE_INFINITY;
//
//     matrix.forEach(row =>
//     row.forEach(e => {
//         if (e > bigestNum) {
//             bigestNum = e;
//         }
//     }
//     ))
//     return bigestNum;
// }
//
// console.log(solve([[3, 5, 7, 12],
//     [-1, 4, 33, 2],
//     [8, 3, 0, 4]]));

function sortArray(array, criteria) {

    let sortingCriteria = {
        'asc': sortAscending,
        'desc': sortDescending,
    };

    function sortAscending(a, b) {
        return a - b;
    }

    function sortDescending(a, b) {
        return b - a;
    }

    return array.sort(sortingCriteria[criteria])
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));



