function isTreasure(arr) {
    for (let i = 0; i < arr.length; i+=2) {
        let inTuvalu = isInside(arr[i], arr[i + 1], 1, 3, 1, 3);
        let inTokelau = isInside(arr[i], arr[i + 1], 8, 9, 0, 1);
        let inSamoa = isInside(arr[i], arr[i + 1], 5, 7, 3, 6);
        let inTonga = isInside(arr[i], arr[i + 1], 0, 2, 6, 8);
        let inCook = isInside(arr[i], arr[i + 1], 4, 9, 7, 8);


        if (inTuvalu) {
            console.log('Tuvalu')
        } else if (inTokelau) {
            console.log('Tokelau')
        } else if (inSamoa) {
            console.log('Samoa')
        } else if (inTonga) {
            console.log('Tonga')
        } else if (inCook) {
            console.log('Cook')
        } else {
            console.log('On the bottom of the ocean')
        }
    }

    function isInside(x, y, xMin, xMax, yMin, yMax) {
        if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
            return true;
        }
        else {
            return false;
        }
    }


}

isTreasure([4, 2, 1.5, 6.5, 1, 3]);



