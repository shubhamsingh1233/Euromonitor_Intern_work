"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var book_1 = require("./book");
var readlineSync = require("readline-sync");
var user_1 = require("./user");
var user = new user_1.User();
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function () {
        var title = readlineSync.question("Enter the book title: ");
        var author = readlineSync.question("Enter the author's name: ");
        var newBook = new book_1.Book(title, author);
        this.books.push(newBook);
        console.log("Book \"".concat(newBook.title, "\" added to the library."));
    };
    Library.prototype.listAvailableBooks = function () {
        var availableBooks = this.books.filter(function (book) { return book.isAvailable; });
        console.log("Available Books:");
        availableBooks.forEach(function (book) { return console.log("- ".concat(book.title, " by ").concat(book.author)); });
    };
    Library.prototype.searchBooks = function (query) {
        var results = this.books.filter(function (book) { return book.title.toLowerCase().includes(query.toLowerCase()) || book.author.toLowerCase().includes(query.toLowerCase()); });
        if (results.length > 0) {
            console.log("Search Results:");
            results.forEach(function (book) { return console.log("- ".concat(book.title, " by ").concat(book.author)); });
        }
        else {
            console.log("No books found matching the search criteria.");
        }
    };
    Library.prototype.removeBook = function () {
        var removeTitle = readlineSync.question("Enter the title of the book you want to remove: ");
        var bookToRemove = this.books.find(function (book) { return book.title === removeTitle; });
        if (bookToRemove) {
            if (bookToRemove.isAvailable) {
                var index = this.books.indexOf(bookToRemove);
                if (index !== -1) {
                    this.books.splice(index, 1);
                    console.log("Book \"".concat(bookToRemove.title, "\" removed from the library."));
                }
                else {
                    console.log("Error removing the book from the library.");
                }
            }
            else {
                console.log("Cannot remove \"".concat(bookToRemove.title, "\" as it is currently checked out."));
            }
        }
        else {
            console.log("Book not found in the library.");
        }
    };
    Library.prototype.checkOutBook = function () {
        var checkoutTitle = readlineSync.question("Enter the title of the book you want to check out: ");
        var bookToCheckOut = this.books.find(function (book) { return book.title === checkoutTitle; });
        if (bookToCheckOut) {
            if (user.canCheckOutMoreBooks() && bookToCheckOut.isAvailable) {
                user.checkOutBook(bookToCheckOut);
                console.log("Book \"".concat(bookToCheckOut.title, "\" checked out successfully."));
            }
            else if (!bookToCheckOut.isAvailable) {
                console.log("Book \"".concat(bookToCheckOut.title, "\" is not available for checkout."));
            }
            else {
                console.log("You have reached the maximum checkout limit. Return some books to check out more.");
            }
        }
        else {
            console.log("Book not found in the library.");
        }
    };
    Library.prototype.returnBook = function () {
        var returnTitle = readlineSync.question("Enter the title of the book you want to return: ");
        var bookToReturn = this.books.find(function (book) { return book.title === returnTitle; });
        if (bookToReturn) {
            if (!bookToReturn.isAvailable) {
                user.returnBook(bookToReturn);
                console.log("Book \"".concat(bookToReturn.title, "\" returned successfully."));
            }
            else {
                console.log("Book \"".concat(bookToReturn.title, "\" is already available in the library."));
            }
        }
        else {
            console.log("Book not found in the library.");
        }
    };
    return Library;
}());
exports.Library = Library;
