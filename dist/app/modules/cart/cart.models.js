"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
// models/User.ts
const mongoose_1 = __importDefault(require("mongoose"));
const cartSchema = new mongoose_1.default.Schema({
    product_id: {
        type: String,
        required: true,
    },
    product_name: {
        type: String,
        required: true,
    },
    product_image: {
        type: String,
        required: true,
    },
    product_price: {
        type: String,
        required: true,
    },
    addedBy: {
        type: String,
        required: true,
    }
});
exports.Cart = mongoose_1.default.model("cart", cartSchema);
