class BankAccount {
    customerName: string;
    age: number;
    location: string;
    state: string;
    country: string;
    email: string;
    accountNumber: string;
    balance: number;
  
    constructor(
      customerName: string,
      age: number,
      location: string,
      state: string,
      country: string,
      email: string,
      accountType: string
    ) {
      this.customerName = customerName;
      this.age = age;
      this.location = location;
      this.state = state;
      this.country = country;
      this.email = email;
      this.accountNumber = this.generateAccountNumber(accountType);
      this.balance = this.initializeBalance(accountType);
    }
  
    private generateAccountNumber(accountType: string): string {
      const prefix = accountType === 'savings' ? 'Sav' : 'Curr';
      return prefix + Math.floor(Math.random() * 1000000).toString();
    }
  
    private initializeBalance(accountType: string): number {
      return accountType === 'savings' ? 500 : 800;
    }
  
    withdraw(amount: number): void {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrawn $${amount}. Remaining balance: $${this.balance}`);
      } else {
        console.log('Insufficient balance. Withdrawal failed.');
      }
    }
  
    deposit(amount: number): void {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
  
    showBalance(): void {
      console.log(`Balance for ${this.customerName}: $${this.balance}`);
    }
  }
  
  class SavingsAccount extends BankAccount {
    constructor(
      customerName: string,
      age: number,
      location: string,
      state: string,
      country: string,
      email: string
    ) {
      super(customerName, age, location, state, country, email, 'savings');
    }
  }
  
  class CurrentAccount extends BankAccount {
    constructor(
      customerName: string,
      age: number,
      location: string,
      state: string,
      country: string,
      email: string
    ) {
      super(customerName, age, location, state, country, email, 'current');
    }
  
    withdraw(amount: number): void {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrawn $${amount}. Remaining balance: $${this.balance}`);
      } else {
        console.log('Insufficient balance. Using overdraft.');
      }
    }
  }
  
  class Bank {
    accounts: BankAccount[] = [];
  
    createNewAccount(
      customerName: string,
      age: number,
      location: string,
      state: string,
      country: string,
      email: string,
      accountType: string
    ): void {
      if (age > 68) {
        console.log('You are not eligible for account opening.');
        return;
      }
  
      if (accountType === 'savings') {
        this.accounts.push(new SavingsAccount(customerName, age, location, state, country, email));
      } else if (accountType === 'current') {
        this.accounts.push(new CurrentAccount(customerName, age, location, state, country, email));
      } else {
        console.log('Invalid account type.');
      }
    }
  
    showBalance(customerName: string): void {
        let account: BankAccount | undefined = undefined;
        for (const acc of this.accounts) {
          if (acc.customerName === customerName) {
            account = acc;
            break;
          }
        }
        if (account) {
          account.showBalance();
        } else {
          console.log('Account not found.');
        }
      }
      
      displayAccountDetails(accountNumber: string): void {
        let account: BankAccount | undefined = undefined;
        for (const acc of this.accounts) {
          if (acc.accountNumber === accountNumber) {
            account = acc;
            break;
          }
        }
        if (account) {
          console.log(`Customer Name: ${account.customerName}`);
          console.log(`Email ID: ${account.email}`);
          console.log(`Type of Account: ${account instanceof SavingsAccount ? 'Savings' : 'Current'}`);
          console.log(`Total Balance: $${account.balance}`);
        } else {
          console.log('Account not found.');
        }
      }
      
  }
  
  const bank = new Bank();
  
  function main() {
    console.log('Welcome to the Bank Application');
    while (true) {
      console.log('Select an option:');
      console.log('1. Create New Account');
      console.log('2. Show Balance');
      console.log('3. Display Account Details');
      console.log('4. Exit');
  
      const choice = parseInt(prompt('Enter your choice: '));
  
      switch (choice) {
        case 1:
          const accountType = prompt('Select account type (savings or current): ');
          const customerName = prompt('Enter Customer Name: ');
          const age = parseInt(prompt('Enter Age: '));
          const location = prompt('Enter Location: ');
          const state = prompt('Enter State: ');
          const country = prompt('Enter Country: ');
          const email = prompt('Enter Email ID: ');
  
          bank.createNewAccount(customerName, age, location, state, country, email, accountType);
          break;
        case 2:
          const nameToCheck = prompt('Enter the name to check balance: ');
          bank.showBalance(nameToCheck);
          break;
        case 3:
          const accountNumber = prompt('Enter Account Number: ');
          bank.displayAccountDetails(accountNumber);
          break;
        case 4:
          return;
        default:
          console.log('Invalid option. Please try again.');
      }
    }
  }
  
  export {}
  //main();

