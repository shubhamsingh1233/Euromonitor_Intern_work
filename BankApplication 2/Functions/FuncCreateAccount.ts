import { CreateBankAccount } from "../Classes/CreateBankAccount";
import { CreateCurrentAccount } from "../Classes/CreateCurrentAccount";
import { CreateSavingAccount } from "../Classes/CreateSavingAccount";
import { validateEmail } from "../Classes/CreateBankAccount";

const readlineSync = require('readline-sync');

const accountsStorage: Record<string, CreateBankAccount> = {};
export function FCreateAccount() {

    const customerName = readlineSync.question('Enter your name:');

    let customerAge: number;
    do {
        customerAge = parseInt(readlineSync.question('Enter your age:'));
        if (customerAge > 68) {
            console.log('You are not eligible to open the account');
            return;

        }

        else if (isNaN(customerAge)) {
            console.log('Age should be a number');

        }
    } while (isNaN(customerAge))


    const customerLocation = readlineSync.question('Enter your location:');
    const customerState = readlineSync.question('Enter your state:');
    const customerCountry = readlineSync.question('Enter your country:');

    const customerEmail = readlineSync.question('Enter your email:');
    if (!validateEmail(customerEmail)) {
        console.log('Invalid email.Pleas enter a valid email');
        return;
    }

    const customerAccountType = readlineSync.question('Enter your account type: Current for current account and Savings for saving account :');

    let account: CreateBankAccount | null = null;

    if (customerAccountType === 'current' || customerAccountType === 'Current' || customerAccountType === 'CURRENT') {
        account = new CreateCurrentAccount(customerName, customerAge, customerLocation, customerState, customerCountry, customerEmail);

    } else if (customerAccountType === 'savings' || customerAccountType === 'SAVINGS' || customerAccountType === 'Savings') {
        account = new CreateSavingAccount(customerName, customerAge, customerLocation, customerState, customerCountry, customerEmail);
    }

    if (account) {
        console.log('Account created Successfully');
        account.generateAccountNumber();
        console.log('Account number:' + account.getAccountNumber());

        Ftransaction(account);
        accountsStorage[account.getAccountNumber()] = account;
    }

}


export function Ftransaction(account: CreateBankAccount): void {
    console.log('Press 1 for deposit');
    console.log('Press 2 for withdrawal');
    const choice = parseInt(readlineSync.question('Enter your choice:'));

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
export function Fdeposit(account: CreateBankAccount): void {
    const depositMoney = parseInt(readlineSync.question('Enter deposit amount:'));
    if (!isNaN(depositMoney)) {
        account.deposit(depositMoney);
    }
    else {
        console.log('Invalid DepositAmount');

    }
}

export function Fwithdraw(account: CreateBankAccount): void {
    const withdrawMoney = parseInt(readlineSync.question('Enter withdraw amount:'));
    if (!isNaN(withdrawMoney)) {
        account.withdraw(withdrawMoney);
    }
    else {
        console.log('Invalid Withdraw Amount');

    }
}

export function FViewCustomerData(): void {
    const account = readlineSync.question('Enter account number to view customer details:');
    const trimAccount = account.trim();
    const accountdetails = accountsStorage[trimAccount];
    if (accountdetails) {
        console.log(`Account Find Successfully `);
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
export function FcheckBalance(): void {
    const CustomerName = readlineSync.question('Enter your name:');
    for (const accountIndexes in accountsStorage) {
        const acc = accountsStorage[accountIndexes];
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