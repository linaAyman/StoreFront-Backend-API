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
exports.deleteProductOrder = exports.updateProductOrder = exports.addProductOrder = void 0;
var order_product_model_1 = require("../models/order-product.model");
//create an order-product from Orderproduct Model
var order_product = new order_product_model_1.OrderProductModel();
//1- CREATE A NEW PRODUCT-ORDER RELATION (CFEATE)
var addProductOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var quantity, orderId, productId, product, addedProduct, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                quantity = req.body.quantity;
                orderId = Number(req.params.id);
                productId = req.body.productId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                product = {
                    quantity: quantity,
                    orderId: orderId,
                    productId: productId,
                };
                return [4 /*yield*/, order_product.addProductOrder(product)];
            case 2:
                addedProduct = _a.sent();
                res.status(201).json(addedProduct);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                // console.log('OP CONT ERR: ', error);
                res.status(400).json(error_1); //Bad request
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.addProductOrder = addProductOrder;
//2- UPDATE PRODUCT-ORDER RELATION (UPDATE)
var updateProductOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, quantity, orderId, productId, product, updatedProduct, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.body.id;
                quantity = req.body.quantity;
                orderId = Number(req.params.id);
                productId = req.body.productId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                product = {
                    id: id,
                    quantity: quantity,
                    orderId: orderId,
                    productId: productId,
                };
                return [4 /*yield*/, order_product.updateProductOrder(product)];
            case 2:
                updatedProduct = _a.sent();
                res.status(200).json(updatedProduct);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                res.status(400).json(error_2); //Bad request
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateProductOrder = updateProductOrder;
//3- DELETE A RRODUCT-ORDER RELATION (DELETE)
var deleteProductOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedProductOrder, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, order_product.deleteProductOrder(Number(req.params.id))];
            case 1:
                deletedProductOrder = _a.sent();
                res.status(200).json(deletedProductOrder); //send the updated product in response
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(404).json(error_3); //Not found
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteProductOrder = deleteProductOrder;
