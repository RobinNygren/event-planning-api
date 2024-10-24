import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import eventRouter from "./routes/eventRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// MongoDB connection setup
mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Database connection error: ", err));

// Use the event routes
app.use("/events", eventRouter); // Properly using the event router

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
