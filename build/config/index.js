"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    db: {
        url: process.env.DB_URL || "",
    },
    app: {
        port: process.env.PORT || 5000,
    },
};
exports.default = config;
