"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var api_exports = {};
__export(api_exports, {
  apiRouter: () => apiRouter,
  db: () => db
});
module.exports = __toCommonJS(api_exports);
var import_mongoose = __toESM(require("mongoose"));
var import_express = __toESM(require("express"));
const apiRouter = import_express.default.Router();
const db = import_mongoose.default.connection;
apiRouter.use(import_express.default.json());
const uri = "mongodb+srv://00filisa:QZlSYn2LRcyU0J4y@cluster0.ot1bh.mongodb.net/";
apiRouter.use((req, res, next) => {
  import_mongoose.default.connect(uri);
  next();
});
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  apiRouter,
  db
});