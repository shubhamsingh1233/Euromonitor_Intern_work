import { Product } from './product/product';
import { ShoppingCart } from './cart/shoppingCart';
import * as readline from 'readline';

const cart = new ShoppingCart();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

async function start() {
    while (true) {
        console.log("Choose an option:");
        console.log("1 - Add to cart");
        console.log("2 - View cart");
        console.log("0 - Exit");

        const option = await askQuestion("Enter the number: ");

        switch (option) {
            case '1':
                const productName = await askQuestion('Enter product name: ');
                const productPrice = parseFloat(await askQuestion('Enter product price: '));
                const productStock = parseInt(await askQuestion('Enter product stock: '), 10);
                const quantity = parseInt(await askQuestion('Enter quantity: '), 10);
                const product = new Product(productName, productPrice, productStock);
                cart.addToCart(product, quantity);
                break;
            case '2':
                cart.displayCart();
                break;
            case '0':
                rl.close();
                return;
            default:
                console.log("Invalid option");
                break;
        }
    }
}

start().then(() => {
    console.log("Thank you for using the shopping cart!");
});