const Book = require('./Book');
const Periodical = require('./Periodical');
const Chronicle = require('./Chronicle');
const Library = require('./Library');

const book = new Book("The Catcher in the Rye", "J.D. Salinger", 1951, "Fiction");
const periodical = new Periodical("Magazine", "Monthly");
const chronicle = new Chronicle("Historical Events", "World War II, Industrial Revolution");

const library = new Library();
library.addItem(book);
library.addItem(periodical);
library.addItem(chronicle);

library.displayItems();

const itemCount = library.countItems();
console.log(`Total items in the library: ${itemCount}`);