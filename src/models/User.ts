import { Schema, model } from "mongoose";
import Movie from "./Movie";
import { movieSchema } from "./Movie";

interface User {
  username: string;
  email: string;
  password: string;
  movies: Movie[];
}

const userSchema = new Schema<User>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: {
    type: String,
    required: true,
  },
  movies: [movieSchema],
});

const User = model<User>("User", userSchema, "Users");

export default User;
