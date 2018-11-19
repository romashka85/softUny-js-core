class CheckingAccount {
    constructor (clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(val) {
        if (!/^\d{6}$/.test(val)) {
            throw new TypeError("Client ID must be a 6-digit number");
        }

        this._clientId = val;
    }

    get email() {
        return this._email;
    }

    set email(val) {
        let emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z.]+$/g;

        if(!emailPattern.test(val)){
            throw new TypeError("Invalid e-mail");
        }

        return this._email = val;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(val) {
        if (val.length < 3 || val.length > 20) {
            throw new TypeError("First name must be between 3 and 20 characters long");
        }

        if (!/^[A-Za-z]+$/.test(val)) {
            throw new TypeError("First name must contain only Latin characters");
        }

        this._firstName = val;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(val) {
        if (val.length < 3 || val.length > 20) {
            throw new TypeError("Last name must be between 3 and 20 characters long");
        }

        if (!/^[A-Za-z]+$/.test(val)) {
            throw new TypeError("Last name must contain only Latin characters");
        }

        this._lastName = val;
    }
}

let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
