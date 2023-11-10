"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FcheckBalance = exports.FViewCustomerData = exports.Fwithdraw = exports.Fdeposit = exports.Ftransaction = exports.FCreateAccount = void 0;
var CreateCurrentAccount_1 = require("../Classes/CreateCurrentAccount");
var CreateSavingAccount_1 = require("../Classes/CreateSavingAccount");
var CreateBankAccount_1 = require("../Classes/CreateBankAccount");
var readlineSync = require('readline-sync');
var accountsStorage = {};
function FCreateAccount() {
    var customerName = readlineSync.question('Enter your name:');
    var customerAge;
    do {
        customerAge = parseInt(readlineSync.question('Enter your age:'));
        if (customerAge > 68) {
            console.log('You are not eligible to open the account');
            return;
        }
        else if (isNaN(customerAge)) {
            console.log('Age should be a number');
        }
    } while (isNaN(customerAge));
    var customerLocation = readlineSync.question('Enter your location:');
    var customerState = readlineSync.question('Enter your state:');
    var customerCountry = readlineSync.question('Enter your country:');
    var customerEmail = readlineSync.question('Enter your email:');
    if (!(0, CreateBankAccount_1.validateEmail)(customerEmail)) {
        console.log('Invalid email.Pleas enter a valid email');
        return;
    }
    var customerAccountType = readlineSync.question('Enter your account type: Current for current account and Savings for saving account :');
    var account = null;
    if (customerAccountType === 'current' || customerAccountType === 'Current' || customerAccountType === 'CURRENT') {
        account = new CreateCurrentAccount_1.CreateCurrentAccount(customerName, customerAge, customerLocation, customerState, customerCountry, customerEmail);
    }
    else if (customerAccountType === 'savings' || customerAccountType === 'SAVINGS' || customerAccountType === 'Savings') {
        account = new CreateSavingAccount_1.CreateSavingAccount(customerName, customerAge, customerLocation, customerState, customerCountry, customerEmail);
    }
    if (account) {
        console.log('Account created Successfully');
        account.generateAccountNumber();
        console.log('Account number:' + account.getAccountNumber());
        Ftransaction(account);
        accountsStorage[account.getAccountNumber()] = account;
    }
}
exports.FCreateAccount = FCreateAccount;
function Ftransaction(account) {
    console.log('Press 1 for deposit');
    console.log('Press 2 for withdrawal');
    var choice = parseInt(readlineSync.question('Enter your choice:'));
    switch (choice) {
        case 1:
            Fdeposit(account);
            break;
        case 2:
            Fwithdraw(account);
            break;
        default:
            console.log('Wrong choice!! Press either 1 or 2');
    }
}
exports.Ftransaction = Ftransaction;
function Fdeposit(account) {
    var depositMoney = parseInt(readlineSync.question('Enter deposit amount:'));
    if (!isNaN(depositMoney)) {
        account.deposit(depositMoney);
    }
    else {
        console.log('Invalid DepositAmount');
    }
}
exports.Fdeposit = Fdeposit;
function Fwithdraw(account) {
    var withdrawMoney = parseInt(readlineSync.question('Enter withdraw amount:'));
    if (!isNaN(withdrawMoney)) {
        account.withdraw(withdrawMoney);
    }
    else {
        console.log('Invalid Withdraw Amount');
    }
}
exports.Fwithdraw = Fwithdraw;
function FViewCustomerData() {
    var account = readlineSync.question('Enter account number to view customer details:');
    var trimAccount = account.trim();
    var accountdetails = accountsStorage[trimAccount];
    if (accountdetails) {
        console.log("Account Find Successfully ");
        console.log('Bank Details:');
        console.log('Customer Name : ' + accountdetails.getCustomerName());
        console.log('Customer Age : ' + accountdetails.getCustomerAge());
        console.log('Customer Location : ' + accountdetails.getCustomerLocation());
        console.log('Customer State : ' + accountdetails.getCustomerState());
        console.log('Customer Country : ' + accountdetails.getCustomerAge());
        console.log('Customer Email : ' + accountdetails.getCustomerEmail());
        console.log('Customer Account Type : ' + accountdetails.getCustomerAccountType());
        console.log('Customer Account Number : ' + accountdetails.getAccountNumber());
        console.log('Customer Total Balance : ' + accountdetails.getCustomerBalance());
    }
    else {
        console.log('Account did not found');
    }
}
exports.FViewCustomerData = FViewCustomerData;
function FcheckBalance() {
    var CustomerName = readlineSync.question('Enter your name:');
    for (var accountIndexes in accountsStorage) {
        var acc = accountsStorage[accountIndexes];
        if (acc.getCustomerName().toLowerCase() === CustomerName.toLowerCase()) {
            console.log('Customer Name : ', acc.getCustomerName());
            console.log('Customer Account Type : ', acc.getCustomerAccountType());
            console.log('Customer Account Number : ', acc.getAccountNumber());
            console.log('Customer Total Balance : ', acc.getCustomerBalance());
            return;
        }
    }
    console.log('Account is not in the system');
}
exports.FcheckBalance = FcheckBalance;
