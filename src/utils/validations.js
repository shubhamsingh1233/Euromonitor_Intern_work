"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProductStock = void 0;
function validateProductStock(product, quantity) {
    return quantity <= product.stock;
}
exports.validateProductStock = validateProductStock;
