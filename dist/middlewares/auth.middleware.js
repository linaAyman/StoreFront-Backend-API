"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
var config_1 = __importDefault(require("../config/config"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var authenticate = function (req, res, next) {
    try {
        var authHeader = req.headers.authorization;
        var token = authHeader.split(' ')[1];
        jsonwebtoken_1.default.verify(token, config_1.default.jwtKey);
        next();
        return;
    }
    catch (error) {
        return res
            .status(401)
            .json({ error: 'Invalid token or Unauthorized request' });
    }
};
exports.authenticate = authenticate;
