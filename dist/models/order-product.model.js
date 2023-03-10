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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductModel = void 0;
var index_db_1 = __importDefault(require("../database/index.db"));
var OrderProductModel = /** @class */ (function () {
    function OrderProductModel() {
    }
    //Handle only create (and update?)
    //ADD PRODUCT TO AN ORDER (CREATE)
    OrderProductModel.prototype.addProductOrder = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, query, res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, index_db_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        query = 'INSERT INTO orders_products (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *';
                        return [4 /*yield*/, conn.query(query, [
                                product.quantity,
                                product.orderId,
                                product.productId,
                            ])];
                    case 2:
                        res = _a.sent();
                        //end the connection and return rows
                        conn.release();
                        return [2 /*return*/, res.rows[0]];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error("Failed to add product with id: ".concat(product.productId, " to order with id: ").concat(product.orderId, " due to this error: ").concat(error_1)); //to avoid returning undefined
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //ADD ANOTHER PRODUCT OR CHANGE PRODUCT QUANTITY IN AM ORDER (UPDATE)
    OrderProductModel.prototype.updateProductOrder = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, query, res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, index_db_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        query = 'UPDATE orders_products SET quantity = $2, order_id = $3, product_id = $4 WHERE id = $1 RETURNING *';
                        return [4 /*yield*/, conn.query(query, [
                                product.id,
                                product.quantity,
                                product.orderId,
                                product.productId,
                            ])];
                    case 2:
                        res = _a.sent();
                        conn.release();
                        return [2 /*return*/, res.rows[0]];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error("Failed to update order-product relation of id: ".concat(product.id, " with product with id: ").concat(product.productId, " in order with id: ").concat(product.orderId, " status due to this error: ").concat(error_2)); //to avoid returning undefined
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //DELETE PRODUCT FROM ORDER (DELETE)
    OrderProductModel.prototype.deleteProductOrder = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var conn, query, res, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, index_db_1.default.connect()];
                    case 1:
                        conn = _a.sent();
                        query = 'DELETE FROM orders_products WHERE id=($1) RETURNING *';
                        return [4 /*yield*/, conn.query(query, [id])];
                    case 2:
                        res = _a.sent();
                        //end the connection and return rows
                        conn.release();
                        return [2 /*return*/, res.rows[0]];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error("Failed to delete this order-product due to this error: ".concat(error_3)); //to avoid returning undefined
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return OrderProductModel;
}());
exports.OrderProductModel = OrderProductModel;
