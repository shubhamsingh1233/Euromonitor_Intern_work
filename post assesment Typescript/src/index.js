"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("./product/product");
var shoppingCart_1 = require("./cart/shoppingCart");
var readline = require("readline");
var cart = new shoppingCart_1.ShoppingCart();
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askQuestion(question) {
    return new Promise(function (resolve) {
        rl.question(question, function (answer) {
            resolve(answer);
        });
    });
}
function start() {
    return __awaiter(this, void 0, void 0, function () {
        var option, _a, productName, productPrice, _b, productStock, _c, quantity, _d, product;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (!true) return [3 /*break*/, 11];
                    console.log("Choose an option:");
                    console.log("1 - Add to cart");
                    console.log("2 - View cart");
                    console.log("0 - Exit");
                    return [4 /*yield*/, askQuestion("Enter the number: ")];
                case 1:
                    option = _e.sent();
                    _a = option;
                    switch (_a) {
                        case '1': return [3 /*break*/, 2];
                        case '2': return [3 /*break*/, 7];
                        case '0': return [3 /*break*/, 8];
                    }
                    return [3 /*break*/, 9];
                case 2: return [4 /*yield*/, askQuestion('Enter product name: ')];
                case 3:
                    productName = _e.sent();
                    _b = parseFloat;
                    return [4 /*yield*/, askQuestion('Enter product price: ')];
                case 4:
                    productPrice = _b.apply(void 0, [_e.sent()]);
                    _c = parseInt;
                    return [4 /*yield*/, askQuestion('Enter product stock: ')];
                case 5:
                    productStock = _c.apply(void 0, [_e.sent(), 10]);
                    _d = parseInt;
                    return [4 /*yield*/, askQuestion('Enter quantity: ')];
                case 6:
                    quantity = _d.apply(void 0, [_e.sent(), 10]);
                    product = new product_1.Product(productName, productPrice, productStock);
                    cart.addToCart(product, quantity);
                    return [3 /*break*/, 10];
                case 7:
                    cart.displayCart();
                    return [3 /*break*/, 10];
                case 8:
                    rl.close();
                    return [2 /*return*/];
                case 9:
                    console.log("Invalid option");
                    return [3 /*break*/, 10];
                case 10: return [3 /*break*/, 0];
                case 11: return [2 /*return*/];
            }
        });
    });
}
start().then(function () {
    console.log("Thank you for using the shopping cart!");
});
