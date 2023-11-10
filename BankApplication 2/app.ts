import * as process from 'process';
import { FCreateAccount, FViewCustomerData, FcheckBalance } from './Functions/FuncCreateAccount';
const readlineSync = require('readline-sync');

let choice: number = 0;
while (1) {
    console.log("Welcome to our Bank Application");
    console.log("    1. Open Savings or Current Account");
    console.log("    2. View Balance");
    console.log("    3. View Customer Data");
    console.log("    4. Exit from Bank Application");
    do {

        choice = parseInt(readlineSync.question('Enter your choice:'))

    } while (choice < 1 || choice > 6);

    switch (choice) {
        case 1:
            FCreateAccount();
            break;
        case 2:
            FcheckBalance();
            break;
        case 3:
            FViewCustomerData();
            break;
        case 4:
            process.exit(0);
        default:
            console.log("Choose an option from 1 - 6");
            break;
    }
}
export {}
