function main(input) {
    let heroData = [];

    for (let i = 0; i < input.length; i++) {
        let currentHeroArguments = input[i].split(' / ');
        let currentHeroName = currentHeroArguments[0];
        let curentHeroLevel = +currentHeroArguments[1];
        let currentHeroItem = [];
        if (currentHeroArguments.length > 2) {
            currentHeroItem = currentHeroArguments[2].split(', ');
        }

        let hero = {
            name: currentHeroName,
            level: curentHeroLevel,
            items: currentHeroItem
        };

        heroData.push(hero);
    }

    console.log(JSON.stringify(heroData));

}

main(['Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);