let expect = require('chai').expect;

class HolidayPackage {
    constructor(destination, season) {
        this.vacationers = [];
        this.destination = destination;
        this.season = season;
        this.insuranceIncluded = false; // Default value
    }

    showVacationers() {
        if (this.vacationers.length > 0)
            return "Vacationers:\n" + this.vacationers.join("\n");
        else
            return "No vacationers are added yet";
    }

    addVacationer(vacationerName) {
        if (typeof vacationerName !== "string" || vacationerName === ' ') {
            throw new Error("Vacationer name must be a non-empty string");
        }
        if (vacationerName.split(" ").length !== 2) {
            throw new Error("Name must consist of first name and last name");
        }
        this.vacationers.push(vacationerName);
    }

    get insuranceIncluded() {
        return this._insuranceIncluded;
    }

    set insuranceIncluded(insurance) {
        if (typeof insurance !== 'boolean') {
            throw new Error("Insurance status must be a boolean");
        }
        this._insuranceIncluded = insurance;
    }

    generateHolidayPackage() {
        if (this.vacationers.length < 1) {
            throw new Error("There must be at least 1 vacationer added");
        }
        let totalPrice = this.vacationers.length * 400;

        if (this.season === "Summer" || this.season === "Winter") {
            totalPrice += 200;
        }

        totalPrice += this.insuranceIncluded === true ? 100 : 0;

        return "Holiday Package Generated\n" +
            "Destination: " + this.destination + "\n" +
            this.showVacationers() + "\n" +
            "Price: " + totalPrice;
    }
}

describe('HolidayPackage', function () {
    let holidayPackege;
    beforeEach(function () {
        holidayPackege = new HolidayPackage('Italy', 'Summer');
    });
    it('insuranceIncluded - value - false', function () {
        expect(holidayPackege.insuranceIncluded).to.equal(false);
    });
    it('show message if no vacationers added ', function () {
        expect(holidayPackege.showVacationers()).to.equal("No vacationers are added yet");
    });
    it('generateHolidayPackege must thow an error', function () {
        expect(()=> holidayPackege.generateHolidayPackage()).to.throw();
    });
    it('addVacationer must throw an error for adding non string', function () {
        expect(() => holidayPackege.addVacationer(1)).to.throw();
    });
    it('addVacationer must throw an error for adding empty string', function () {
        expect(() => holidayPackege.addVacationer(' ')).to.throw();
    });
    it('addVacationer must throe an error for adding only one name ', function () {
        expect(() => holidayPackege.addVacationer('Pesho')).to.throw();
    });
    it('corect massage ', function () {
        holidayPackege.addVacationer('Ivan Ivanov');
        holidayPackege.addVacationer('Pesho Pesow');

        expect(holidayPackege.showVacationers()).to.equal('Vacationers:\nIvan Ivanov\nPesho Pesow');
    });


});
