"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
// routes/auth.routes.ts
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const user_validation_1 = require("../User/user.validation");
const router = (0, express_1.Router)();
router.post('/register', user_validation_1.userValidate.validateUser, auth_controller_1.authController.register);
router.post('/login', auth_controller_1.authController.login);
exports.AuthRoutes = router;
