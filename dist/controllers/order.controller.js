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
exports.deleteOrder = exports.updateOrder = exports.createOrder = exports.getOrderById = exports.getAllOrders = void 0;
var order_model_1 = require("../models/order.model");
//create an order from orderModel
var orderModel = new order_model_1.OrderModel();
//CRUD OPERATIONS
//1- GET ALL ORDER (INDEX)
var getAllOrders = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var orders, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, orderModel.getAllOrders()];
            case 1:
                orders = _a.sent();
                res.status(200).json(orders);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(500).json(error_1); //server error
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAllOrders = getAllOrders;
//2- GET ORDER BY ID (SHOW)
var getOrderById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var fetchedOrder, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, orderModel.getOrderById(Number(req.params.id))];
            case 1:
                fetchedOrder = _a.sent();
                res.status(200).json(fetchedOrder);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(404).json(error_2); //Not found
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getOrderById = getOrderById;
//3- CREATE A NEW ORDER (CREATE)
var createOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var createdOrder, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, orderModel.createOrder(req.body)];
            case 1:
                createdOrder = _a.sent();
                res.status(201).json(createdOrder); //send the created order in response
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.log('ORDER CONTROLLER ERR: ', error_3);
                res.status(400).json(error_3); //Bad request
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createOrder = createOrder;
//4- UPDATE AN ORDER DATA (UPDATE)
var updateOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedOrder, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, orderModel.updateOrder(req.body)];
            case 1:
                updatedOrder = _a.sent();
                res.status(200).json(updatedOrder); //send the updated order in response
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                res.status(400).json(error_4); //Bad request
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateOrder = updateOrder;
//5- DELETE A PRODUCT BY ID (DELETE)
var deleteOrder = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deletedOrder, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, orderModel.deleteOrder(Number(req.params.id))];
            case 1:
                deletedOrder = _a.sent();
                res.status(200).json(deletedOrder); //send the updated product in response
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                res.status(404).json(error_5); //Not found
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteOrder = deleteOrder;
