"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BankAccount = /** @class */ (function () {
    function BankAccount(customerName, age, location, state, country, email, accountType) {
        this.customerName = customerName;
        this.age = age;
        this.location = location;
        this.state = state;
        this.country = country;
        this.email = email;
        this.accountNumber = this.generateAccountNumber(accountType);
        this.balance = this.initializeBalance(accountType);
    }
    BankAccount.prototype.generateAccountNumber = function (accountType) {
        var prefix = accountType === 'savings' ? 'Sav' : 'Curr';
        return prefix + Math.floor(Math.random() * 1000000).toString();
    };
    BankAccount.prototype.initializeBalance = function (accountType) {
        return accountType === 'savings' ? 500 : 800;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("Withdrawn $".concat(amount, ". Remaining balance: $").concat(this.balance));
        }
        else {
            console.log('Insufficient balance. Withdrawal failed.');
        }
    };
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposited $".concat(amount, ". New balance: $").concat(this.balance));
    };
    BankAccount.prototype.showBalance = function () {
        console.log("Balance for ".concat(this.customerName, ": $").concat(this.balance));
    };
    return BankAccount;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(customerName, age, location, state, country, email) {
        return _super.call(this, customerName, age, location, state, country, email, 'savings') || this;
    }
    return SavingsAccount;
}(BankAccount));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(customerName, age, location, state, country, email) {
        return _super.call(this, customerName, age, location, state, country, email, 'current') || this;
    }
    CurrentAccount.prototype.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("Withdrawn $".concat(amount, ". Remaining balance: $").concat(this.balance));
        }
        else {
            console.log('Insufficient balance. Using overdraft.');
        }
    };
    return CurrentAccount;
}(BankAccount));
var Bank = /** @class */ (function () {
    function Bank() {
        this.accounts = [];
    }
    Bank.prototype.createNewAccount = function (customerName, age, location, state, country, email, accountType) {
        if (age > 68) {
            console.log('You are not eligible for account opening.');
            return;
        }
        if (accountType === 'savings') {
            this.accounts.push(new SavingsAccount(customerName, age, location, state, country, email));
        }
        else if (accountType === 'current') {
            this.accounts.push(new CurrentAccount(customerName, age, location, state, country, email));
        }
        else {
            console.log('Invalid account type.');
        }
    };
    Bank.prototype.showBalance = function (customerName) {
        var account = undefined;
        for (var _i = 0, _a = this.accounts; _i < _a.length; _i++) {
            var acc = _a[_i];
            if (acc.customerName === customerName) {
                account = acc;
                break;
            }
        }
        if (account) {
            account.showBalance();
        }
        else {
            console.log('Account not found.');
        }
    };
    Bank.prototype.displayAccountDetails = function (accountNumber) {
        var account = undefined;
        for (var _i = 0, _a = this.accounts; _i < _a.length; _i++) {
            var acc = _a[_i];
            if (acc.accountNumber === accountNumber) {
                account = acc;
                break;
            }
        }
        if (account) {
            console.log("Customer Name: ".concat(account.customerName));
            console.log("Email ID: ".concat(account.email));
            console.log("Type of Account: ".concat(account instanceof SavingsAccount ? 'Savings' : 'Current'));
            console.log("Total Balance: $".concat(account.balance));
        }
        else {
            console.log('Account not found.');
        }
    };
    return Bank;
}());
var bank = new Bank();
function main() {
    console.log('Welcome to the Bank Application');
    while (true) {
        console.log('Select an option:');
        console.log('1. Create New Account');
        console.log('2. Show Balance');
        console.log('3. Display Account Details');
        console.log('4. Exit');
        var choice = parseInt(prompt('Enter your choice: '));
        switch (choice) {
            case 1:
                var accountType = prompt('Select account type (savings or current): ');
                var customerName = prompt('Enter Customer Name: ');
                var age = parseInt(prompt('Enter Age: '));
                var location_1 = prompt('Enter Location: ');
                var state = prompt('Enter State: ');
                var country = prompt('Enter Country: ');
                var email = prompt('Enter Email ID: ');
                bank.createNewAccount(customerName, age, location_1, state, country, email, accountType);
                break;
            case 2:
                var nameToCheck = prompt('Enter the name to check balance: ');
                bank.showBalance(nameToCheck);
                break;
            case 3:
                var accountNumber = prompt('Enter Account Number: ');
                bank.displayAccountDetails(accountNumber);
                break;
            case 4:
                return;
            default:
                console.log('Invalid option. Please try again.');
        }
    }
}
//main();
