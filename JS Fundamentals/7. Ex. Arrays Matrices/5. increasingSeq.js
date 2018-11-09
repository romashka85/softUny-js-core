function increasingSeq(input){
    let biggest = Number.NEGATIVE_INFINITY;
    function bigger(a){if(a >= biggest){biggest = a; return true;}}
    console.log(input.filter(bigger).join('\n'));
}

function increasSeq(input) {
    let biggest = Number.NEGATIVE_INFINITY;
    let bigger = (a) => {
        if (a >= biggest){
            biggest = a;
            return true;
        }
    };
    console.log(input.filter(bigger).join('\n'));

}

increasSeq([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);