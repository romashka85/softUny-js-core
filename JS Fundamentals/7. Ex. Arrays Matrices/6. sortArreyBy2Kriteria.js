function sortArr(input) {
    console.log(input.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n'));
}

//Second desition

function sortInput(input){
    function compare(a, b) {
        if (a.length > b.length){
            return 1;
        }
        else if (a.length < b.length){
            return -1;
        }
        else {
            if (a > b){
                return 1;
            }
            else if (a < b) {
                return -1;
            }
            else {
                return 0;
            }
        }
    }
    console.log(input.sort(compare).join('\n'));
}

sortInput(['alpha',
    'beta',
    'gamma',
    'alpha']
);
