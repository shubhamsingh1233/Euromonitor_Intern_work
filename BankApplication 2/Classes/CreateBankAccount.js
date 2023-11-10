"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBankAccount = exports.validateEmail = void 0;
function validateEmail(email) {
    var emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailPattern.test(email);
}
exports.validateEmail = validateEmail;
var CreateBankAccount = /** @class */ (function () {
    function CreateBankAccount(customerName, customerAge, customerLocation, customerState, customerCountry, customerEmail, customerAccountType) {
        this.customerName = customerName;
        this.customerAge = customerAge;
        this.validateAgeEligibilty(customerAge);
        this.customerLocation = customerLocation;
        this.customerState = customerState;
        this.customerCountry = customerCountry;
        // this.validateEmail(customerEmail);
        if (!validateEmail(customerEmail)) {
            console.log('Invalid email address');
        }
        this.customerEmail = customerEmail;
        this.customerAccountType = customerAccountType;
        this.customerBalance = 0;
    }
    CreateBankAccount.prototype.validateAgeEligibilty = function (age) {
        if (age > 68) {
            console.log("You are not eligible to open this account");
            console.log('Please enter an age below 68');
            return;
        }
    };
    CreateBankAccount.prototype.generateAccountNumber = function () {
        var prefix = this.customerAccountType === "Current" ? 'Curr' : 'Sav';
        this.customerAccountNumber = prefix + Math.floor(Math.random() * 100000000);
    };
    CreateBankAccount.prototype.getAccountNumber = function () {
        return this.customerAccountNumber;
    };
    CreateBankAccount.prototype.getCustomerName = function () {
        return this.customerName;
    };
    CreateBankAccount.prototype.getCustomerAge = function () {
        return this.customerAge;
    };
    CreateBankAccount.prototype.getCustomerLocation = function () {
        return this.customerLocation;
    };
    CreateBankAccount.prototype.getCustomerState = function () {
        return this.customerState;
    };
    CreateBankAccount.prototype.getCustomerCountry = function () {
        return this.customerCountry;
    };
    CreateBankAccount.prototype.getCustomerEmail = function () {
        return this.customerEmail;
    };
    CreateBankAccount.prototype.getCustomerAccountType = function () {
        return this.customerAccountType;
    };
    CreateBankAccount.prototype.getCustomerBalance = function () {
        return this.customerBalance;
    };
    CreateBankAccount.prototype.withdraw = function (amount) {
        if (this.customerBalance < amount) {
            console.log("You cannot withdraw the amount due to insufficient balance.");
            return;
        }
        this.customerBalance -= amount;
        console.log("Total balance after withdrawing ".concat(amount, " is ").concat(this.customerBalance));
    };
    CreateBankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.customerBalance += amount;
            console.log("Total balance after depositing ".concat(amount, " is ").concat(this.customerBalance));
        }
        else {
            console.log('Invalid deposit amount');
        }
    };
    return CreateBankAccount;
}());
exports.CreateBankAccount = CreateBankAccount;
