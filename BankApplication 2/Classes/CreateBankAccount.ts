export function validateEmail(email: string): boolean {
    const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailPattern.test(email);
}
export class CreateBankAccount {
    public customerName: string;
    public customerAge: number;
    public customerLocation: string;
    public customerState: string;
    public customerCountry: string;
    public customerEmail: string;
    public customerAccountType: string;
    public customerAccountNumber: string;
    public customerBalance: number;

    constructor(customerName: string,
        customerAge: number,
        customerLocation: string,
        customerState: string,
        customerCountry: string,
        customerEmail: string,
        customerAccountType: string,
    ) {
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

    public validateAgeEligibilty(age: number): void {
        if (age > 68) {
            console.log("You are not eligible to open this account");
            console.log('Please enter an age below 68');
            return;


        }
    }



    public generateAccountNumber(): void {
        const prefix = this.customerAccountType === "Current" ? 'Curr' : 'Sav';
        this.customerAccountNumber = prefix + Math.floor(Math.random() * 100000000);
    }

    public getAccountNumber(): string {
        return this.customerAccountNumber;
    }
    public getCustomerName(): string {
        return this.customerName;
    }
    public getCustomerAge(): number {
        return this.customerAge;
    }
    public getCustomerLocation(): string {
        return this.customerLocation;
    }
    public getCustomerState(): string {
        return this.customerState;
    }
    public getCustomerCountry(): string {
        return this.customerCountry;
    }
    public getCustomerEmail(): string {
        return this.customerEmail;
    }
    public getCustomerAccountType(): string {
        return this.customerAccountType;
    }
    public getCustomerBalance(): number {
        return this.customerBalance;
    }

    public withdraw(amount: number): void {
        if (this.customerBalance < amount) {
            console.log("You cannot withdraw the amount due to insufficient balance.");
            return;
        }
        this.customerBalance -= amount;
        console.log(`Total balance after withdrawing ${amount} is ${this.customerBalance}`);
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.customerBalance += amount;
            console.log(`Total balance after depositing ${amount} is ${this.customerBalance}`);
        }
        else {
            console.log('Invalid deposit amount');

        }
    }

}