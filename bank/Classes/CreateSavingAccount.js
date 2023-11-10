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
exports.CreateSavingAccount = void 0;
var CreateBankAccount_1 = require("./CreateBankAccount");
var CreateSavingAccount = /** @class */ (function (_super) {
    __extends(CreateSavingAccount, _super);
    function CreateSavingAccount(customerName, customerAge, customerLocation, customerState, customerCountry, customerEmail) {
        var _this = _super.call(this, customerName, customerAge, customerLocation, customerState, customerCountry, customerEmail, "Saving") || this;
        _this.generateAccountNumber();
        _this.customerBalance = 800;
        return _this;
    }
    return CreateSavingAccount;
}(CreateBankAccount_1.CreateBankAccount));
exports.CreateSavingAccount = CreateSavingAccount;
