"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var config_1 = __importDefault(require("./config/config"));
var index_router_1 = __importDefault(require("./routes/index.router"));
var routeErr_middleware_1 = __importDefault(require("./middlewares/routeErr.middleware"));
// import cors
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var port = config_1.default.port || 5000;
var address = "0.0.0.0:".concat(port);
//middleware to parse incomming requests
app.use(body_parser_1.default.json());
// use cors
app.use((0, cors_1.default)());
app.get('/', function (req, res) {
    res.send('Welcome to Storefront Backend API');
});
//all routes (users,orders,products)
app.use('/api', index_router_1.default);
app.listen(port, function () {
    console.log("starting app on: ".concat(address));
});
app.use(routeErr_middleware_1.default);
exports.default = app;
