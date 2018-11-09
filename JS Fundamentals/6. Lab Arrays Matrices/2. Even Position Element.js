function evenPosition(arr) {
    let resolt = [];
    for (let i = 0; i < arr.length; i++) {
         if (i % 2 === 0)
         {
            resolt.push(arr[i]);
         }
    }
    return resolt.join(' ')
}



console.log(evenPosition([20, 30, 40]));


//SECOND SOLUTION

function evenPositionsSecond(arr) {
    let result = [];
    for (let i in arr)
        if (i % 2 === 0)
            result.push(arr[i]);
    return result.join(' ');
}

// LAMBDA


(arr) => arr.filter((e, i) => i % 2 == 0).join(' ');






