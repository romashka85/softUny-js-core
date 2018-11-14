let human = {
    name: 'Pesho',
    eyeColor: 'brown',
    nouse: 'big',
    hear: 'straight',
    walk: function () {
        console.log('walking');
    }
};

delete human.nouse;
human.nouse = 'small';
human['brown'] = 'blond';
console.log(human);


let pavel = Object.create(human);
pavel.name = 'Pavel';

human.address = 'Mladost';

let gosho = Object.create(human);

console.log(human.name);
console.log(pavel.address);

console.log(pavel.hasOwnProperty('address'));
gosho.walk();