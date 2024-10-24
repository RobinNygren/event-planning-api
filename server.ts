import { error } from "console";
import Express from "express";
// const { MongoClient } = require("mongodb");
import Mongoose from "mongoose";

const uri =
  "mongodb+srv://00filisa:QZlSYn2LRcyU0J4y@cluster0.ot1bh.mongodb.net/";

const port = 3000;

const app = Express();
const apiRouter = Express.Router();

Mongoose.connect(uri);
const db = Mongoose.connection;

db.on("error", (error: Error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

app.use(Express.static("../client/public/dist"));

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
