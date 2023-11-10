"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process = require("process");
var FuncCreateAccount_1 = require("./Functions/FuncCreateAccount");
var readlineSync = require('readline-sync');
var choice = 0;
while (1) {
    console.log("Welcome to our Bank Application");
    console.log("    1. Open Savings or Current Account");
    console.log("    2. View Balance");
    console.log("    3. View Customer Data");
    console.log("    4. Exit from Bank Application");
    do {
        choice = parseInt(readlineSync.question('Enter your choice:'));
    } while (choice < 1 || choice > 6);
    switch (choice) {
        case 1:
            (0, FuncCreateAccount_1.FCreateAccount)();
            break;
        case 2:
            (0, FuncCreateAccount_1.FcheckBalance)();
            break;
        case 3:
            (0, FuncCreateAccount_1.FViewCustomerData)();
            break;
        case 4:
            process.exit(0);
        default:
            console.log("Choose an option from 1 - 6");
            break;
    }
}
