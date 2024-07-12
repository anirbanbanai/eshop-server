"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidate = void 0;
const zod_1 = require("zod");
const error_1 = require("../../utils/error");
const userSchema = zod_1.z.object({
    name: zod_1.z.string().min(3),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    image: zod_1.z.string().url().optional(),
    role: zod_1.z.enum(['admin', 'user']).optional(),
});
const updateUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(3).optional(),
    email: zod_1.z.string().email().optional(),
    password: zod_1.z.string().min(6).optional(),
    image: zod_1.z.string().url().optional(),
    role: zod_1.z.enum(['admin', 'user']).optional(),
});
const loginSchema = zod_1.z.object({
    email: zod_1.z.string().min(3),
    password: zod_1.z.string().min(6),
});
const validateUser = (req, res, next) => {
    try {
        userSchema.parse(req.body);
        next();
    }
    catch (error) {
        if ((0, error_1.isErrorWithMessage)(error)) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'Unknown error' });
        }
    }
};
const validateLogin = (req, res, next) => {
    try {
        loginSchema.parse(req.body);
        next();
    }
    catch (error) {
        if ((0, error_1.isErrorWithMessage)(error)) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'Unknown error' });
        }
    }
};
const validateUpdateUser = (req, res, next) => {
    try {
        updateUserSchema.parse(req.body);
        next();
    }
    catch (error) {
        if ((0, error_1.isErrorWithMessage)(error)) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'Unknown error' });
        }
    }
};
exports.userValidate = {
    validateUser,
    validateLogin,
    validateUpdateUser
};
