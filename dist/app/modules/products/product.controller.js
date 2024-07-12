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
exports.ProductsController = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menu = yield product_service_1.ProductService.createProduct(req.body);
        res.status(201).json(menu);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating Product', error });
    }
});
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menu = yield product_service_1.ProductService.getProductById(req.params.id);
        if (menu) {
            res.status(200).json(menu);
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error getting Product', error });
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menus = yield product_service_1.ProductService.getAllProducts();
        res.status(200).json(menus);
    }
    catch (error) {
        res.status(500).json({ message: 'Error getting Products', error });
    }
});
const updateProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menu = yield product_service_1.ProductService.updateProduct(req.params.id, req.body);
        if (menu) {
            res.status(200).json(menu);
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating products', error });
    }
});
const deleteProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menu = yield product_service_1.ProductService.deleteProduct(req.params.id);
        if (menu) {
            res.status(200).json({ message: 'Products deleted successfully' });
        }
        else {
            res.status(404).json({ message: 'Products not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting Products', error });
    }
});
exports.ProductsController = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProducts,
    deleteProducts
};
