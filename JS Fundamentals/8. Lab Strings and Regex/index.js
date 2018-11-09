function agregateTable(arr) {

    let resolt = arr.map(x => x.split('@'))
        .map(([user, domain]) => user + '.' + domain.split('.')
        .map(el => el[0])
        .join(''))
        .join(', ');
    console.log(resolt);
}

agregateTable(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);
