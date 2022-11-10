import { Schema, model } from "mongoose";

interface Movie {
  title: string;
  date: string;
  storyline: string;
  thumbnail: string;
  imdbLink: string;
}

export const movieSchema = new Schema<Movie>({
  title: { type: String, required: true },
  date: { type: String, required: true },
  storyline: { type: String, required: true },
  thumbnail: { type: String, required: true },
  imdbLink: { type: String, required: true },
});

const Movie = model<Movie>("Movie", movieSchema, "Movies");

export default Movie;
