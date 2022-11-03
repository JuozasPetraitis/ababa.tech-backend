import express, { Express, json, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import signUpController from "./controllers/signUpController";

dotenv.config();
const app: Express = express();

const PORT = process.env.PORT;
const MONGO_DB_URI = process.env.MONGO_DB_URI;

app.use(cors());
app.use(json());

app.listen(PORT, () => {
  if (!MONGO_DB_URI) {
    throw new Error("Please define the MONGO_DB_URI environment variable inside .env");
  }
  console.log(`Server started on PORT: ${PORT}`);
  mongoose
    .connect(MONGO_DB_URI)
    .then(() => console.log("Successfully connected to database"))
    .catch((error) => console.log(error));
});

app.get("/", (req: Request, res: Response) => res.json("API is working"));

app.post("/api/sign-up", signUpController);
