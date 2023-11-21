"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(accountNumber, customer, initialBalance) {
        this.accountNumber = accountNumber;
        this.customer = customer;
        this.balance = initialBalance;
    }
    Account.prototype.getBalance = function () {
        console.log("Account balance for ".concat(this.customer.name, ": ").concat(this.balance));
    };
    return Account;
}());
exports.Account = Account;
