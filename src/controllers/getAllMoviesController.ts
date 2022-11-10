import { Request, Response } from "express";
import { Movie } from "../models";

const getAllMoviesController = async (req: Request, res: Response) => {
  const allMovies = await Movie.find({});

  allMovies ? res.status(201).json({ error: false, movies: allMovies }) : res.status(500).json({ error: true, message: "Error in the server" });
};

export default getAllMoviesController;
