function getPerson() {
    function makePerson(firstName, lastName, age, email) {
        let person = {
            firstName,
            lastName,
            age,
            email
        };

        person.toString = () => {
            return `${firstName} ${lastName} (age: ${age}, email: ${email})`
        };
        return person;


    }
    return [
        makePerson('Maria', 'Petrova', 22, 'mp@yahoo.com'),
        makePerson('SoftUni'),
        makePerson('Stephan', 'Nikolov', 25),
        makePerson('Peter', 'Kolev', 24, 'ptr@gmail.com'),
    ];

}

console.log(getPerson().join('\n'));