import { Product } from "../product/product";

export function validateProductStock(product : Product, quantity : number): boolean{
    return quantity<=product.stock;
}