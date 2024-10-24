import Mongoose from "mongoose";
import Express from "express";
// import { resourceRouter } from "./resources"; Add the all recource routers here and below

export const apiRouter = Express.Router();
export const db = Mongoose.connection;

apiRouter.use(Express.json());

const uri =
  "mongodb+srv://00filisa:QZlSYn2LRcyU0J4y@cluster0.ot1bh.mongodb.net/";

// const db = Mongoose.connection;

//See apiRouter function which is out-commented. I couldnt
apiRouter.use((req, res, next) => {
  Mongoose.connect(uri);
  // console.log("Connected to database");
  next();
});

db.on("error", (error: Error) => console.error(error));
db.once("open", () => console.log("Connected to database"));
// apiRouter.use("/resource", resourceRouter); Example of how we use the resource routes
