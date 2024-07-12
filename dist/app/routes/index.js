"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/User/user.route");
const products_route_1 = require("../modules/products/products.route");
const auth_route_1 = require("../modules/auth/auth.route");
const cart_route_1 = require("../modules/cart/cart.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/user",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/products",
        route: products_route_1.ProductRouter,
    },
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes,
    },
    {
        path: "/cart",
        route: cart_route_1.CartRouter,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
