"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var config_1 = __importDefault(require("../config/config"));
// const pool = new Pool({
// database: config.database,
// host: config.host,
// password: config.password,
// port: config.dbPort,
// user: config.user,
// });
var database;
if (config_1.default.NODE_ENV === 'dev') {
    database = {
        database: config_1.default.database,
        host: config_1.default.host,
        password: config_1.default.password,
        port: config_1.default.dbPort,
        user: config_1.default.user,
    };
}
else if (config_1.default.NODE_ENV === 'test') {
    database = {
        database: config_1.default.database_test,
        host: config_1.default.host,
        password: config_1.default.password,
        port: config_1.default.dbPort,
        user: config_1.default.user,
    };
}
var pool = new pg_1.Pool(database);
exports.default = pool;
