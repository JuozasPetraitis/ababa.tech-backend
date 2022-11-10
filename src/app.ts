import express, { Express, json, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { signUpController, loginController, userController, addMovieController, getAllMoviesController } from "./controllers";
import { Auth } from "./middlewares";

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
    .connect(MONGO_DB_URI, { dbName: "ababa-tech" })
    .then(() => console.log("Successfully connected to database"))
    .catch((error) => console.log(error));
});

app.get("/", (req: Request, res: Response) => res.json("API is working"));
app.get("/api/user", Auth, userController);
app.get("/api/movies", getAllMoviesController);

app.post("/api/sign-up", signUpController);
app.post("/api/login", loginController);
app.post("/api/movies", Auth, addMovieController);
