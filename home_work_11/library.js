const Item = require('./Item');

class Library {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    displayItems() {
        console.log("Items in the library:");
        this.items.forEach((item) => {
            item.displayInfo();
        });
    }

    countItems() {
        return this.items.length;
    }
}

module.exports = Library;

const itemCount = library.countItems();
console.log(`Total items in the library: ${itemCount}`);