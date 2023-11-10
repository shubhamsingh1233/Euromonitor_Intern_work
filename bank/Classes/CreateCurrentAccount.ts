import { CreateBankAccount } from "./CreateBankAccount";
export class CreateCurrentAccount extends CreateBankAccount {
    constructor(
        customerName: string,
        customerAge: number,
        customerLocation: string,
        customerState: string,
        customerCountry: string,
        customerEmail: string,
    ) {
        super(customerName,
            customerAge,
            customerLocation,
            customerState,
            customerCountry,
            customerEmail, "Current");
        this.generateAccountNumber();
        this.customerBalance = 500;
    }
}