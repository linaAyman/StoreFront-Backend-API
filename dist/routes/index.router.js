"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var order_product_router_1 = __importDefault(require("./api/order-product.router"));
var order_router_1 = __importDefault(require("./api/order.router"));
var product_router_1 = __importDefault(require("./api/product.router"));
var user_router_1 = __importDefault(require("./api/user.router"));
var routes = express_1.default.Router();
routes.use('/users', user_router_1.default);
routes.use('/products', product_router_1.default);
routes.use('/orders', order_router_1.default);
routes.use('/orders', order_product_router_1.default);
exports.default = routes;
