const Item = require('./Item');

class Chronicle extends Item {
    constructor(title, events) {
        super(title);
        this.events = events;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Events: ${this.events}`);
    }
}

module.exports = Chronicle;