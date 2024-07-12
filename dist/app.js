"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
// import globalErrorHandler from './app/middlewares/globalErrorhandler';
// import notFound from './app/middlewares/notFound';
const routes_1 = __importDefault(require("./app/routes"));
const notFound_1 = __importDefault(require("./app/middlewares/notFound"));
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: '*' }));
// application routes
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Visit los angeles',
    });
});
app.use('/api/v1', routes_1.default);
// app.use(globalErrorHandler);
//Not Found
app.use(notFound_1.default);
exports.default = app;
