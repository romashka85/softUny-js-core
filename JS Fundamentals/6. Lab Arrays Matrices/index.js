let input = [
    ['20', '40'],
    ['10', '60']
];

let sum = input
    .map((item, index) =>{

        return item
            .map((k) => {
                return +k
            })
            .filter((innerItem, innerIndex) => {
                return innerIndex === item.length - 1 - index;
            })[0];
    })
    .reduce((acc, cur) =>{
    return acc + cur;
}, 0);

console.log(sum);

