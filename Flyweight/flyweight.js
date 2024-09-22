const Book = require('./book');

const isbnNumbers = new Set();
const bookListWithFlyweight = [];

const createBook = (title, author, isbn) => {
    if (isbnNumbers.has(isbn)) {
        return null; // Return null if the book already exists
    } else {
        const book = new Book(title, author, isbn);
        isbnNumbers.add(isbn);
        return book; // Return new book
    }
};

const addBookWithFlyweight = (title, author, isbn, availability, sales) => {
    const book = createBook(title, author, isbn);
    if (book) {
        const bookEntry = {
            ...book,
            sales,
            availability
        };
        bookListWithFlyweight.push(bookEntry);
        return bookEntry;
    } else {
        return null;
    }
};

const printSummaryWithFlyweight = () => {
    console.log("Total amount of copies (With Flyweight): ", bookListWithFlyweight.length);
    console.log("Total amount of unique books: ", isbnNumbers.size);
};

module.exports = {
    addBookWithFlyweight,
    printSummaryWithFlyweight,
};
