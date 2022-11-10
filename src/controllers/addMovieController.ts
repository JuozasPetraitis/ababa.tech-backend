import { Request, Response } from "express";
import { Movie, User } from "../models";

const addMovieController = async (req: Request, res: Response) => {
  const movieInfo = await req.body;
  const { title, date, storyline, thumbnail, imdbLink } = movieInfo;

  if (!title || !date || !storyline || !thumbnail || !imdbLink) {
    return res.status(400).json({ error: true, message: "Inputs are not valid" });
  }

  const isMovieExists = await Movie.findOne({ title: title });
  if (isMovieExists) {
    return res.status(400).json({ error: true, message: "Movie already exists" });
  }

  const isMovieSaved = await Movie.create(movieInfo);
  if (isMovieSaved) {
    const isUserUpdated = await User.findByIdAndUpdate(
      { _id: res.locals.user._id },
      { $push: { movies: isMovieSaved } },
      {
        new: true,
      }
    );
    if (isUserUpdated) {
      return res.status(201).json({ error: false, user: isUserUpdated });
    }
  }

  return res.status(500).json({ error: true, message: "Error occurred in the server" });
};

export default addMovieController;
