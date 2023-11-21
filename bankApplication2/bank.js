"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
var savingsAccount_1 = require("./savingsAccount");
var Bank = /** @class */ (function () {
    function Bank() {
        this.accounts = [];
    }
    Bank.prototype.showBalance = function (accountNumber) {
        var account = this.findAccountByNumber(accountNumber);
        if (account) {
            account.getBalance();
        }
        else {
            console.log('Account not found.');
        }
    };
    Bank.prototype.displayAccountDetails = function (accountNumber) {
        var account = this.findAccountByNumber(accountNumber);
        if (account) {
            console.log('Customer Name:', account.customer.name);
            console.log('Email ID:', account.customer.email);
            console.log('Type of Account:', account instanceof savingsAccount_1.SavingsAccount ? 'Savings' : 'Current');
            console.log('Total Balance:', account.balance);
        }
        else {
            console.log('Account not found.');
        }
    };
    Bank.prototype.findAccountByNumber = function (accountNumber) {
        accountNumber = accountNumber.toLowerCase();
        return this.accounts.find(function (account) { return account.accountNumber.toLowerCase() === accountNumber; });
    };
    Bank.prototype.addAccount = function (account) {
        this.accounts.push(account);
    };
    return Bank;
}());
exports.Bank = Bank;
