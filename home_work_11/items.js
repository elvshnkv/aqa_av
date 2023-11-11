class Item {
    constructor(title) {
        this.title = title;
    }

    displayInfo() {
        console.log(`Title: ${this.title}`);
    }
}

module.exports = Item;