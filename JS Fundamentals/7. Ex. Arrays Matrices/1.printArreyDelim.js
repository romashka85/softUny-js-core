function printArr(arr) {
    let m = arr.pop();
    console.log(arr.join(m));
}
printArr(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']);