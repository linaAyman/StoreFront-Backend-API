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
// import supertest
var supertest_1 = __importDefault(require("supertest"));
// import app
var server_1 = __importDefault(require("../../server"));
//create a request to server (app)
var request = (0, supertest_1.default)(server_1.default);
//TESTS FOR USERS ROUTES
describe('USERS ROUTES TESTS', function () {
    var token; //token will be used in other requests
    //1- CREATE USER TEST AND GET THE TOKEN
    it('1-CREATE USER', function () { return __awaiter(void 0, void 0, void 0, function () {
        var newUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newUser = {
                        firstName: 'Adam',
                        lastName: 'Sandler',
                        email: 'AdamSandler@gmail.com',
                        password: 'adam987543',
                    };
                    return [4 /*yield*/, request
                            .post('/api/users')
                            .send(newUser)
                            .expect(function (res) {
                            expect(res.status).toBe(201);
                            token = res.body;
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    //2- GET ALL USERS TEST (INDEX)
    //providing a token
    it('2-GET ALL USERS (With Token)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .get('/api/users')
                        .set('Authorization', "Bearer ".concat(token))];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    //without providing a token
    it('2-GET ALL USERS (NO Token)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/api/users')];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(401); //unauthorized
                    return [2 /*return*/];
            }
        });
    }); });
    //3- GET USER BY ID TEST (SHOW)
    //providing a token
    it('3-GET USER BY ID (With Token)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .get('/api/users/1')
                        .set('Authorization', "Bearer ".concat(token))];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    //without providing token
    it('3-GET USER BY ID(NO Token)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/api/users/1')];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(401); //unauthorized
                    return [2 /*return*/];
            }
        });
    }); });
    //4- UPDATE A USER TEST (TEST)
    //providing a token
    it('4-UPDATE A USER (With Token)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .patch('/api/users')
                        .send({
                        id: 1,
                        firstName: 'update',
                        lastName: 'update',
                        email: 'update@gmail.com',
                        password: 'update',
                    })
                        .set('Authorization', "Bearer ".concat(token))];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    //Without providing a token
    it('4-UPDATE A USER (NO Token)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.patch('/api/users').send({
                        id: 1,
                        firstName: 'update',
                        lastName: 'update',
                        email: 'update@gmail.com',
                        password: 'update',
                    })];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(401); //unauthorized
                    return [2 /*return*/];
            }
        });
    }); });
    //4-DELETE A USER
    //Without providing a token
    it('5-DELETE A USER (NO Token)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.delete('/api/users/1')];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(401); //unauthorized
                    return [2 /*return*/];
            }
        });
    }); });
    //providing a token
    it('5-DELETE A USER (With Token)', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request
                        .delete('/api/users/1')
                        .set('Authorization', "Bearer ".concat(token))];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
