"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const mongoose_1 = require("mongoose");
const config_1 = __importDefault(require("./config"));
const mongoose_2 = require("mongoose");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", routes_1.default);
(0, mongoose_2.pluralize)(null);
app
    .listen(config_1.default.app.port, () => {
    console.log("Connected to port " + config_1.default.app.port);
    (0, mongoose_1.connect)(config_1.default.db.url, (err) => {
        if (err)
            return console.log("Connection failed " + err);
        console.log("Connected to database");
    });
})
    .on("error", (err) => {
    console.log("Connection failed " + err);
});
