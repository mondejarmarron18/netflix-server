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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = __importDefault(require("../models/Users"));
const bcrypt_1 = require("bcrypt");
const userController = {
    signUp: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            if (yield Users_1.default.exists({ email }))
                return res.status(409).send({ error: "Email already taken" });
            const data = {
                email,
                password: (0, bcrypt_1.hashSync)(password, 10),
                created: new Date(Date.now()),
            };
            const user = new Users_1.default(data);
            res.status(201).send(yield user.save());
        }
        catch (error) {
            res.status(400).send({ error });
        }
    }),
    signIn: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { email, password } = req.body;
            const user = yield Users_1.default.findOne({ email });
            const userPassword = user === null || user === void 0 ? void 0 : user.password;
            if (!(0, bcrypt_1.compareSync)(password, userPassword))
                return res.status(403).send({ error: "Email/Password invalid" });
            res.status(200).send(user);
        }
        catch (error) {
            res.status(403).send({ error: "Email/Password invalid" });
        }
    }),
};
exports.default = userController;
