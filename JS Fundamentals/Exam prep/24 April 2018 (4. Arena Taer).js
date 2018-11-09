const gladiatorsInput = [
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250'
];
const gladiatorsData = gladiatorsInput
    .map((gladiatorsInfo) => {
        return gladiatorsInfo.split(' -> ');
        })
    .reduce((acc, cur) => {
        const gladiatorName = cur[0];
        if (!acc[gladiatorName]){
            acc[gladiatorName] = {};

            acc[gladiatorName][cur[1]] = cur[2];
            return acc;
        }
    }, {});


console.log(gladiatorsData);



