import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
const MONGO = process.env.MONGO_DB_URI;

app.use(cors());
app.use(json());

mongoose.connect(MONGO, () => {
  app.listen(PORT, () => {
    console.log("Server is running");
  });
});

app.get("/", (req, res) => {
  res.json("Working");
});
