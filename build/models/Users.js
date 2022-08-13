"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    id: mongoose_1.Types.ObjectId,
    email: {
        required: true,
        type: String,
        trim: true,
    },
    password: {
        required: true,
        type: String,
        trim: true,
    },
    created: Date,
});
const Users = (0, mongoose_1.model)("users", schema);
exports.default = Users;
