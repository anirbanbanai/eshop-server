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
exports.CartController = void 0;
const cart_service_1 = require("./cart.service");
const createCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menu = yield cart_service_1.CartService.createCart(req.body);
        res.status(201).json(menu);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating Product", error });
    }
});
const getCartById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menu = yield cart_service_1.CartService.getCartById(req.params.id);
        if (menu) {
            res.status(200).json(menu);
        }
        else {
            res.status(404).json({ message: "Product not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error getting Product", error });
    }
});
const getAllCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menus = yield cart_service_1.CartService.getAllCart();
        res.status(200).json(menus);
    }
    catch (error) {
        res.status(500).json({ message: "Error getting Products", error });
    }
});
const updateCarts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menu = yield cart_service_1.CartService.updateCart(req.params.id, req.body);
        if (menu) {
            res.status(200).json(menu);
        }
        else {
            res.status(404).json({ message: "Product not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error updating products", error });
    }
});
const deleteCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menu = yield cart_service_1.CartService.deleteCart(req.params.id);
        if (menu) {
            res.status(200).json({ message: "Products deleted successfully" });
        }
        else {
            res.status(404).json({ message: "Products not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting Products", error });
    }
});
exports.CartController = {
    createCart,
    getAllCart,
    getCartById,
    updateCarts,
    deleteCart,
};
