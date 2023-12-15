import { Product } from "../product/product";

export class ShoppingCart {
    private cart: Map<string, { product: Product, quantity: number }> = new Map();

    addToCart(product: Product, quantity: number): void {
        if (quantity <= product.stock) {
            const existingItem = this.cart.get(product.name);

            if (existingItem) {
                if (existingItem.quantity + quantity > product.stock) {
                    console.log('Cant add more ${product.name} to the cart. Stock limit reached.');
                    return;
                }
                existingItem.quantity += quantity;
            } else {
                this.cart.set(product.name, { product, quantity });
            }

            product.stock -= quantity;
            console.log('${quantity}  ${product.name}(s) added to the cart.');
        } else {
            console.log('Sorry, only ${product.stock} ${product.name}(s) available.');
        }
    }

    displayCart(): void {
        if (this.cart.size === 0) {
            console.log("Cart is empty.");
        } else {
            console.log("Items in the cart:");
            for (const [productName, { product, quantity }] of this.cart) {
                console.log('${productName}: ${quantity} x ${product.price}');
            }
        }
    }
}