import { Schema, model } from "mongoose";

interface Movie {
  id: number;
  title: string;
  date: number;
  rating: number;
  storyline: string;
  thumbnail: string;
  stars: string[];
}

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
  movies: Array<Movie>,
});

const User = model<User>("User", userSchema, "Users");

export default User;
