"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controller/user.controller"));
const userRoute = (0, express_1.Router)();
userRoute.get("/", (req, res) => {
    res.send("User API is working");
});
userRoute.post("/signUp", user_controller_1.default.signUp);
userRoute.post("/signIn", user_controller_1.default.signIn);
exports.default = userRoute;
