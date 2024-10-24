import Mongoose from "mongoose";
import Express from "express";
// import { resourceRouter } from "./resources"; Add the all recource routers here and below

export const apiRouter = Express.Router();

apiRouter.use(Express.json());
apiRouter.use((req, res, next) => {
  Mongoose.connect(
    "mongodb+srv://00filisa:QZlSYn2LRcyU0J4y@cluster0.ot1bh.mongodb.net/"
  );
  //   const db = Mongoose.connection;
  console.log("Connected to database");

  next();
});

// apiRouter.use("/resource", resourceRouter); Example of how we use the resource routes
