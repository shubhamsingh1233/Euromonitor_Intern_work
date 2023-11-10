"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCurrentAccount = void 0;
var CreateBankAccount_1 = require("./CreateBankAccount");
var CreateCurrentAccount = /** @class */ (function (_super) {
    __extends(CreateCurrentAccount, _super);
    function CreateCurrentAccount(customerName, customerAge, customerLocation, customerState, customerCountry, customerEmail) {
        var _this = _super.call(this, customerName, customerAge, customerLocation, customerState, customerCountry, customerEmail, "Current") || this;
        _this.generateAccountNumber();
        _this.customerBalance = 500;
        return _this;
    }
    return CreateCurrentAccount;
}(CreateBankAccount_1.CreateBankAccount));
exports.CreateCurrentAccount = CreateCurrentAccount;
