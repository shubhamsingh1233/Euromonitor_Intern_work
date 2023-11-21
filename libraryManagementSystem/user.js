"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User() {
        this.checkedOutBooks = [];
    }
    User.prototype.canCheckOutMoreBooks = function () {
        return this.checkedOutBooks.length < 3;
    };
    User.prototype.checkOutBook = function (book) {
        if (this.canCheckOutMoreBooks()) {
            this.checkedOutBooks.push(book);
            book.checkout();
        }
        else {
            console.log("You have reached the maximum checkout limit. Return some books to check out more.");
        }
    };
    User.prototype.returnBook = function (book) {
        var index = this.checkedOutBooks.indexOf(book);
        if (index !== -1) {
            this.checkedOutBooks.splice(index, 1);
            book.returnBook();
            console.log("Book \"".concat(book.title, "\" returned successfully."));
        }
        else {
            console.log("You did not check out this book.");
        }
    };
    return User;
}());
exports.User = User;
