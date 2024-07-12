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
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const user_service_1 = require("../User/user.service");
function isErrorWithMessage(error) {
    return (typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        typeof error.message === 'string');
}
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield user_service_1.UserService.createUser(req.body);
        res.status(201).json(newUser);
    }
    catch (error) {
        if (isErrorWithMessage(error)) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'Unknown error' });
        }
    }
});
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = yield user_service_1.UserService.loginUser(req.body.email, req.body.password);
        // console.log(token);
        res.status(200).json({ token });
    }
    catch (error) {
        if (isErrorWithMessage(error)) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'Unknown error' });
        }
    }
});
exports.authController = {
    register,
    login,
};
