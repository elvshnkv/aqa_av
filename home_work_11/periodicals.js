const Item = require('./Item');

class Periodical extends Item {
    constructor(title, frequency) {
        super(title);
        this.frequency = frequency;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Frequency: ${this.frequency}`);
    }
}

module.exports = Periodical;