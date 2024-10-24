"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.apiRouter = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
// import { resourceRouter } from "./resources"; Add the all recource routers here and below
exports.apiRouter = express_1.default.Router();
exports.db = mongoose_1.default.connection;
exports.apiRouter.use(express_1.default.json());
const uri = "mongodb+srv://00filisa:QZlSYn2LRcyU0J4y@cluster0.ot1bh.mongodb.net/";
// const db = Mongoose.connection;
//See apiRouter function which is out-commented. I couldnt
exports.apiRouter.use((req, res, next) => {
    mongoose_1.default.connect(uri);
    // console.log("Connected to database");
    next();
});
exports.db.on("error", (error) => console.error(error));
exports.db.once("open", () => console.log("Connected to database"));
// apiRouter.use("/resource", resourceRouter); Example of how we use the resource routes
