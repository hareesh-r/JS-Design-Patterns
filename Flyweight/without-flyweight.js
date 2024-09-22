const Book = require('./book');

const bookListWithoutFlyweight = [];

const addBookWithoutFlyweight = (title, author, isbn, availability, sales) => {
    const book = new Book(title, author, isbn);
    const bookEntry = {
        ...book,
        sales,
        availability
    };
    bookListWithoutFlyweight.push(bookEntry);
};

const printSummaryWithoutFlyweight = () => {
    console.log("Total amount of copies (Without Flyweight): ", bookListWithoutFlyweight.length);
};

module.exports = {
    addBookWithoutFlyweight,
    printSummaryWithoutFlyweight,
};
