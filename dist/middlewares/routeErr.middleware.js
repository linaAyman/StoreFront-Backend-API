"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routeErrHandler = function (req, res) {
    res.status(400).json('The endpoint you entered is incorrect');
};
exports.default = routeErrHandler;
