class Item {
    constructor(title, year) {
        this.id = this.generateId();
        this.title = title;
        this.year = year;
    }

    displayInfo() {
        console.log(`ID: ${this.id}, Title: ${this.title}, Year: ${this.year}`);
    }

    generateId() {
        return ++Item.counter;
    }
}

Item.counter = 0;

module.exports = Item;