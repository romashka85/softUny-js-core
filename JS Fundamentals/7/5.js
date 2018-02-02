function increasingSeq(input){
    let biggest = Number.NEGATIVE_INFINITY;
    function bigger(a){if(a >= biggest){biggest = a; return true;}}
    console.log(input.filter(bigger).join('\n'));
}
