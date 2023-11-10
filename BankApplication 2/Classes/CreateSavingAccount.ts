import { CreateBankAccount } from "./CreateBankAccount";
export class CreateSavingAccount extends CreateBankAccount {
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
            customerEmail, "Saving");
        this.generateAccountNumber();
        this.customerBalance = 800;
    }
}