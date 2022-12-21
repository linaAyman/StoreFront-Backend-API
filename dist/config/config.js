"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// obj destructing
var _a = process.env, PORT = _a.PORT, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, POSTGRES_DB = _a.POSTGRES_DB, POSTGRES_DB_TEST = _a.POSTGRES_DB_TEST, POSTGRES_DBPort = _a.POSTGRES_DBPort, NODE_ENV = _a.NODE_ENV, DB_HOST = _a.DB_HOST, SALT = _a.SALT, PEPPER = _a.PEPPER, JWTKEY = _a.JWTKEY;
exports.default = {
    port: PORT,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    database_test: POSTGRES_DB_TEST,
    dbPort: Number(POSTGRES_DBPort),
    NODE_ENV: NODE_ENV,
    host: DB_HOST,
    salt: SALT,
    pepper: PEPPER,
    jwtKey: JWTKEY,
};
