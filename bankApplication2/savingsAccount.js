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
exports.SavingsAccount = void 0;
var account_1 = require("./account");
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountNumber, customer, initialBalance) {
        return _super.call(this, accountNumber, customer, initialBalance) || this;
    }
    SavingsAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log('You cannot withdraw the amount due to insufficient balance.');
        }
        else {
            this.balance -= amount;
            console.log("Withdrawal of ".concat(amount, " was successful. New balance: ").concat(this.balance));
        }
    };
    SavingsAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposit of ".concat(amount, " was successful. New balance: ").concat(this.balance));
    };
    return SavingsAccount;
}(account_1.Account));
exports.SavingsAccount = SavingsAccount;
