import { error } from "console";
import Express from "express";
// const { MongoClient } = require("mongodb");
import Mongoose from "mongoose";
import { apiRouter } from "./api";
import { db } from "./api";
import dotenv from "dotenv";

// const uri =
//   "mongodb+srv://00filisa:QZlSYn2LRcyU0J4y@cluster0.ot1bh.mongodb.net/";

dotenv.config();

const app = Express();

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log("Got a request to the url: " + req.url);
  next();
});
// console.log("Connected to database");

// const apiRouter = Express.Router();

// Mongoose.connect(uri);
// const db = Mongoose.connection;

// db.on("error", (error: Error) => console.error(error));
// db.once("open", () => console.log("Connected to database"));
app.use(Express.static("../client/public/dist"));

app.use("/api", apiRouter);

apiRouter.get("*", (req, res) => {
  console.log("API request received");
  res.send(true);
});

app.use((req, res, next) => {
  console.log("Request received: " + req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
