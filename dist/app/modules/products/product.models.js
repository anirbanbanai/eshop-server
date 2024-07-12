"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
// models/User.ts
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    product_name: {
        type: String,
        required: true,
    },
    product_description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: String,
    },
    category: {
        type: String,
    },
    sub_category: {
        type: String,
    },
});
exports.Products = mongoose_1.default.model("Products", productSchema);
