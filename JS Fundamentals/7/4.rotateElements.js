function rotateElements(arr) {
    let rotateCount = Number(arr.pop());
    rotateCount %= arr.length;
    for (let i=0; i < rotateCount; i++) {
        let lastEl = arr.pop();
        arr.unshift(lastEl);
    }

    return arr.join(' ');


}

console.log(rotateElements(['1', '2', '3', '4', '2']));
