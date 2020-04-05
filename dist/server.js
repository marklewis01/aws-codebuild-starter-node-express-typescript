"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.status(200).json({ message: "I am on the line!" });
});
app.post("/", (req, res) => {
    res.status(200).json({ message: "Posted successfully", data: req.body });
});
exports.default = app;
