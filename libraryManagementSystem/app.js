"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var library_1 = require("./library");
function bookManagementSystem() {
    var library = new library_1.Library();
    function showMenu() {
        console.log("\nBook Management System");
        console.log("1. Add a Book");
        console.log("2. List Available Books");
        console.log("3. Search for Books");
        console.log("4. Check Out a Book");
        console.log("5. Return a Book");
        console.log("6. Remove a Book");
        console.log("0. Exit");
    }
    while (true) {
        showMenu();
        var choice = readlineSync.question("Enter your choice: ");
        if (choice === '1') {
            library.addBook();
        }
        else if (choice === '2') {
            library.listAvailableBooks();
        }
        else if (choice === '3') {
            var searchBook = readlineSync.question("Search for Book(Either by title or author name): ");
            library.searchBooks(searchBook);
        }
        else if (choice === '4') {
            library.checkOutBook();
        }
        else if (choice === '5') {
            library.returnBook();
        }
        else if (choice === '6') {
            library.removeBook();
        }
        else if (choice === '0') {
            console.log("Exiting the Book Management System.");
            process.exit(0);
        }
        else {
            console.log("Invalid choice. Please enter a valid option.");
        }
    }
}
bookManagementSystem();
