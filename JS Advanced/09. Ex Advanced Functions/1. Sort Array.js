function sortArr(arr, str) {
    let resolt = 0;

    if (str === 'asc'){
        resolt = arr.sort((a,b) => a -b);
        console.log($`{${resolt.join()}`);
    }else {
        resolt = arr.sort((a,b) => b -a);
        console.log(resolt);
    }

}

sortArr([14, 7, 17, 6, 8], 'desc');