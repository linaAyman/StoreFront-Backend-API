"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var order_productController = __importStar(require("../../controllers/order-product.controller"));
var auth_middleware_1 = require("../../middlewares/auth.middleware");
//create an express router
var order_productRouter = express_1.default.Router();
//User Routes
order_productRouter.post('/:id/products', //:id is the orderid, product id is sent in body
auth_middleware_1.authenticate, order_productController.addProductOrder);
order_productRouter.patch('/:id/products', //:id is the orderid, product id is sent in body and order_product id is sent in body as well
auth_middleware_1.authenticate, order_productController.updateProductOrder);
order_productRouter.delete('/products/:id', //id here is the order_product id
auth_middleware_1.authenticate, order_productController.deleteProductOrder);
exports.default = order_productRouter;
