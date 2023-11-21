"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var bank_1 = require("./bank");
var savingsAccount_1 = require("./savingsAccount");
var currentAccount_1 = require("./currentAccount");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function displayMenu() {
    console.log('Welcome to our bank application');
    console.log('1. Create New Account');
    console.log('2. View Balance');
    console.log('3. Display Account Details');
    console.log('4. Withdraw Money');
    console.log('5. Deposit Money');
    console.log('6. Exit from Application');
    rl.question('Please select an option (1-4): ', function (choice) {
        handleUserChoice(choice);
    });
}
function handleUserChoice(choice) {
    if (choice === '1') {
        openAccount();
    }
    else if (choice === '2') {
        viewBalance();
    }
    else if (choice === '3') {
        viewAccountDetails();
    }
    else if (choice === '4') {
        withdrawMoney();
    }
    else if (choice === '5') {
        depositMoney();
    }
    else if (choice === '6') {
        console.log('Exiting application');
        rl.close();
    }
    else {
        console.log('Invalid choice. Please select a valid option (1-4).');
    }
}
function openAccount() {
    return __awaiter(this, void 0, void 0, function () {
        var option, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('1. Savings');
                    console.log('2. Current');
                    _a = parseInt;
                    return [4 /*yield*/, getUserInput('Select 1 or 2: ')];
                case 1:
                    option = _a.apply(void 0, [_b.sent()]);
                    if (option === 1) {
                        createAccount('Savings', 500);
                    }
                    else if (option === 2) {
                        createAccount('Current', 1000);
                    }
                    else {
                        console.log('Invalid option. Please select 1 or 2.');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function createAccount(accountType, minimumBalance) {
    return __awaiter(this, void 0, void 0, function () {
        var customerName, age, _a, location, state, country, email, initialBalance, _b, customer, accountNumber, account;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    console.log("Creating a ".concat(accountType, " Account"));
                    return [4 /*yield*/, getUserInput('Enter your name: ')];
                case 1:
                    customerName = _c.sent();
                    _c.label = 2;
                case 2:
                    _a = parseInt;
                    return [4 /*yield*/, getUserInput('Enter your age: ')];
                case 3:
                    age = _a.apply(void 0, [_c.sent()]);
                    if (age < 18 || age > 68) {
                        console.log('Age must be between 18 and 68.');
                    }
                    _c.label = 4;
                case 4:
                    if (age < 18 || age > 68) return [3 /*break*/, 2];
                    _c.label = 5;
                case 5: return [4 /*yield*/, getUserInput('Enter your Location: ')];
                case 6:
                    location = _c.sent();
                    return [4 /*yield*/, getUserInput('Enter your State: ')];
                case 7:
                    state = _c.sent();
                    return [4 /*yield*/, getUserInput('Enter your Country: ')];
                case 8:
                    country = _c.sent();
                    _c.label = 9;
                case 9: return [4 /*yield*/, getUserInput('Enter your Email: ')];
                case 10:
                    email = _c.sent();
                    if (!isValidEmail(email)) {
                        console.log('Email-id is not in standard format');
                    }
                    _c.label = 11;
                case 11:
                    if (!isValidEmail(email)) return [3 /*break*/, 9];
                    _c.label = 12;
                case 12:
                    _b = parseFloat;
                    return [4 /*yield*/, getUserInput("Enter your initial balance for ".concat(accountType, " account: "))];
                case 13:
                    initialBalance = _b.apply(void 0, [_c.sent()]);
                    if (initialBalance < minimumBalance) {
                        console.log("Initial balance for ".concat(accountType, " Account must be at least ").concat(minimumBalance));
                        return [2 /*return*/];
                    }
                    customer = {
                        name: customerName,
                        age: age,
                        location: location,
                        state: state,
                        country: country,
                        email: email
                    };
                    accountNumber = "".concat(accountType === 'Savings' ? 'Sav' : 'Curr').concat(Math.floor(Math.random() * 10000));
                    account = accountType === 'Savings'
                        ? new savingsAccount_1.SavingsAccount(accountNumber, customer, initialBalance)
                        : new currentAccount_1.CurrentAccount(accountNumber, customer, initialBalance);
                    console.log("".concat(accountType, " Account Created Successfully!"));
                    console.log('Account Details');
                    console.log("Customer Name: ".concat(customerName));
                    console.log("Email ID: ".concat(email));
                    console.log("Account Type: ".concat(accountType));
                    console.log("Total Balance: ".concat(initialBalance));
                    console.log("Generated account number for ".concat(accountType, " account: ").concat(accountNumber));
                    bank.addAccount(account);
                    displayMenu();
                    return [2 /*return*/];
            }
        });
    });
}
function viewBalance() {
    rl.question('Enter Account Number : ', function (accountNumber) {
        accountNumber = accountNumber.toLowerCase();
        bank.showBalance(accountNumber);
        displayMenu();
    });
}
function viewAccountDetails() {
    rl.question('Enter Account number: ', function (accountNumber) {
        bank.displayAccountDetails(accountNumber);
        displayMenu();
    });
}
function withdrawMoney() {
    rl.question('Enter Account Number: ', function (accountNumber) {
        rl.question('Enter Withdrawal Amount: ', function (amountInput) {
            var amount = parseFloat(amountInput);
            var account = bank.findAccountByNumber(accountNumber);
            if (account) {
                account.withdraw(amount);
                console.log('Withdrawal completed successfully.');
            }
            else {
                console.log('Account not found.');
            }
            displayMenu();
        });
    });
}
function depositMoney() {
    rl.question('Enter Account Number: ', function (accountNumber) {
        rl.question('Enter Deposit Amount: ', function (amountInput) {
            var amount = parseFloat(amountInput);
            var account = bank.findAccountByNumber(accountNumber);
            if (account) {
                account.deposit(amount);
                console.log('Deposit completed successfully.');
            }
            else {
                console.log('Account not found.');
            }
            displayMenu();
        });
    });
}
function isValidEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}
function getUserInput(question) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    rl.question(question, function (answer) {
                        resolve(answer);
                    });
                })];
        });
    });
}
var bank = new bank_1.Bank();
displayMenu();
