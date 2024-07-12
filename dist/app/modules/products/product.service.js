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
exports.ProductService = void 0;
const product_models_1 = require("./product.models");
const createProduct = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const product = new product_models_1.Products(data);
    return yield product.save();
});
const getProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_models_1.Products.findById(id);
});
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_models_1.Products.find();
});
const updateProduct = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_models_1.Products.findByIdAndUpdate(id, data, { new: true });
});
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield product_models_1.Products.findByIdAndDelete(id);
});
exports.ProductService = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
