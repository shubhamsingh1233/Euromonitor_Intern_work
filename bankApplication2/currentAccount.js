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
exports.CurrentAccount = void 0;
var account_1 = require("./account");
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(accountNumber, customer, initialBalance) {
        return _super.call(this, accountNumber, customer, initialBalance) || this;
    }
    CurrentAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log('Balance is less, you need to use OverDraft.');
        }
        else {
            this.balance -= amount;
            console.log("Withdrawal of ".concat(amount, " was successful. New balance: ").concat(this.balance));
        }
    };
    CurrentAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposit of ".concat(amount, " was successful. New balance: ").concat(this.balance));
    };
    return CurrentAccount;
}(account_1.Account));
exports.CurrentAccount = CurrentAccount;
