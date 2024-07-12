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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_model_1 = require("./user.model");
const SECRET_KEY = 'your_secret_key43jndcvndfgkjrut56vfghty6767dfds8'; // Replace with your actual secret key
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield bcryptjs_1.default.hash(userData.password, 10);
    const newUser = new user_model_1.User(Object.assign(Object.assign({}, userData), { password: hashedPassword }));
    yield newUser.save();
    return newUser;
});
const loginUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.findOne({ email });
    // console.log(user);
    if (!user)
        throw new Error('User not found');
    const isMatch = yield bcryptjs_1.default.compare(password, user.password);
    if (!isMatch)
        throw new Error('Invalid credentials');
    const token = jsonwebtoken_1.default.sign({ id: user._id, role: user.role }, SECRET_KEY, {
        expiresIn: '1h',
    });
    return { message: 'Login successful', token };
});
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return user_model_1.User.findById(id);
});
const findUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return user_model_1.User.findOne({ email });
});
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return user_model_1.User.find();
});
const updateUser = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    if (updateData.password) {
        updateData.password = yield bcryptjs_1.default.hash(updateData.password, 10);
    }
    return user_model_1.User.findByIdAndUpdate(id, updateData, { new: true });
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return user_model_1.User.findByIdAndDelete(id);
});
exports.UserService = {
    createUser,
    getUserById,
    getAllUsers,
    updateUser,
    deleteUser,
    loginUser,
    findUserByEmail
};
