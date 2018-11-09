function townsToJson(strArr) {
    strArr.shift();
    let towns = [];

    for (let row of strArr) {
     let townTokens = row.split('|')
        .filter(e => e !== '')
         .map(e => e.trim());

     let town = {
         Town: townTokens[0],
         Latitude: +townTokens[1],
         Longitude: +townTokens[2]
     };
     towns.push(town);
    }
    return JSON.stringify(towns);

}

console.log(townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));
