function solve(arr) {
    let resolt = arr.map(s => s.split('@'));

    resolt = resolt.map(([user, domain]) => user + '.' + domain.split('.')
        .map(s => s[0])
        .join(''))
        .join(', ');

        // .reduce((a, b) => a.concat(", ").concat(b));
    console.log(resolt);
}

solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);



function extractUsernames(inputEmails) {
    let results = [];
    for (let email of inputEmails) {
        let [alias, domain] = email.split('@');

        let username = alias + '.';
        let domainParts = domain.split('.');

        domainParts.forEach(p => username += p[0]);
        results.push(username);
    }
    console.log(results.join(', '));
}

extractUsernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);