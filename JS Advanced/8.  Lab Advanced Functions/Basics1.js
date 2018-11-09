
    const obj = {
        name: 'Pesho',
        walk: function (title, address) {
            console.log(`${title} ${this.name} with address ${address}`);
        }
    };
    const secondPerson = {
        name: 'Gosho'
    };
    const thirdPerson = {
        name: 'Pencho'
    };

obj.walk();
obj.walk.call(secondPerson, 'Mr', 'Sofia');
obj.walk.apply(secondPerson, ['Ms', 'Berdichev']);
const myWalk = obj.walk.bind(thirdPerson); // return the new function (new resolt)
myWalk('Miss', 'Burgas');
