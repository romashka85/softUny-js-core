function aggregate(lines) {
    let list = []; let sum = [];
    for (let line of lines) {
        let townData = line.split('|').filter(x => x !== '');

        let townName = townData[0].trim();
        let inCome = +townData[1].trim();
        list.push(townName);
        sum.push(inCome);
    }

    console.log(list.join(', '));
    console.log(sum.reduce((a,b) => a + b));



}
aggregate(['| Sofia           | 300',
           '| Veliko Tarnovo  | 500',
           '| Yambol          | 275']);