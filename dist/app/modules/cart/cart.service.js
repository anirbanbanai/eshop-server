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
exports.CartService = void 0;
const cart_models_1 = require("./cart.models");
const createCart = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const cart = new cart_models_1.Cart(data);
    return yield cart.save();
});
const getCartById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield cart_models_1.Cart.findById(id);
});
const getAllCart = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield cart_models_1.Cart.find();
});
const updateCart = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield cart_models_1.Cart.findByIdAndUpdate(id, data, { new: true });
});
const deleteCart = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield cart_models_1.Cart.findByIdAndDelete(id);
});
exports.CartService = {
    createCart,
    getAllCart,
    getCartById,
    updateCart,
    deleteCart,
};
