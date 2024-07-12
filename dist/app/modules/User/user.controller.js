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
exports.UserController = void 0;
const user_service_1 = require("./user.service");
function isErrorWithMessage(error) {
    return (typeof error === "object" &&
        error !== null &&
        "message" in error &&
        typeof error.message === "string");
}
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_service_1.UserService.getUserById(req.params.id);
        if (!user)
            return res.status(404).json({ error: "User not found" });
        res.status(200).json(user);
    }
    catch (error) {
        if (isErrorWithMessage(error)) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: "Unknown error" });
        }
    }
});
// const getAllUsers = catchAsync(async (req, res) => {
//   const result = await UserService.getAllUsers(req.query);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Users are retrieved succesfully',
//     meta: result.meta,
//     data: result.data,
//   });
// });
const getUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_service_1.UserService.getAllUsers();
        res.status(200).json(users);
    }
    catch (error) {
        if (isErrorWithMessage(error)) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: "Unknown error" });
        }
    }
});
const findUserByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_service_1.UserService.findUserByEmail(req.params.email);
        if (!user)
            return res.status(404).json({ error: "User not found" });
        res.status(200).json(user);
    }
    catch (error) {
        if (isErrorWithMessage(error)) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: "Unknown error" });
        }
    }
});
const updateUserDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield user_service_1.UserService.updateUser(req.params.id, req.body);
        if (!updatedUser)
            return res.status(404).json({ error: "User not found" });
        res.status(200).json(updatedUser);
    }
    catch (error) {
        if (isErrorWithMessage(error)) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: "Unknown error" });
        }
    }
});
const removeUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield user_service_1.UserService.deleteUser(req.params.id);
        if (!deletedUser)
            return res.status(404).json({ error: "User not found" });
        res.status(200).json({ message: "User deleted successfully" });
    }
    catch (error) {
        if (isErrorWithMessage(error)) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: "Unknown error" });
        }
    }
});
exports.UserController = {
    getUser,
    getUsers,
    updateUserDetails,
    removeUser,
    findUserByEmail,
};
