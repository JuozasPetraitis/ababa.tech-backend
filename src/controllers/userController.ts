import { Request, Response } from "express";
import { User } from "../models";

const userController = async (req: Request, res: Response) => {
  const isUserExists = await User.findOne({ _id: res.locals.user._id });
  isUserExists ? res.status(201).json({ error: false, user: isUserExists }) : res.status(500).json({ error: true, message: "Error occurred in the server" });
};

export default userController;
