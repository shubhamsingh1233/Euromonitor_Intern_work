"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, author, isAvailable) {
        if (isAvailable === void 0) { isAvailable = true; }
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }
    Book.prototype.checkout = function () {
        this.isAvailable = false;
    };
    Book.prototype.returnBook = function () {
        this.isAvailable = true;
    };
    return Book;
}());
exports.Book = Book;
