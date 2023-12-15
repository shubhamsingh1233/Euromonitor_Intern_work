"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.cart = new Map();
    }
    ShoppingCart.prototype.addToCart = function (product, quantity) {
        if (quantity <= product.stock) {
            var existingItem = this.cart.get(product.name);
            if (existingItem) {
                if (existingItem.quantity + quantity > product.stock) {
                    console.log('Cant add more ${product.name} to the cart. Stock limit reached.');
                    return;
                }
                existingItem.quantity += quantity;
            }
            else {
                this.cart.set(product.name, { product: product, quantity: quantity });
            }
            product.stock -= quantity;
            console.log('${quantity}  ${product.name}(s) added to the cart.');
        }
        else {
            console.log('Sorry, only ${product.stock} ${product.name}(s) available.');
        }
    };
    ShoppingCart.prototype.displayCart = function () {
        if (this.cart.size === 0) {
            console.log("Cart is empty.");
        }
        else {
            console.log("Items in the cart:");
            for (var _i = 0, _a = this.cart; _i < _a.length; _i++) {
                var _b = _a[_i], productName = _b[0], _c = _b[1], product = _c.product, quantity = _c.quantity;
                console.log('${productName}: ${quantity} x ${product.price}');
            }
        }
    };
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
