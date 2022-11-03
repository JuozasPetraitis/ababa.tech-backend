import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";

const signUpController = async (req: Request, res: Response) => {
  const userInfo = await req.body;

  if (!userInfo) {
    return res.status(400).json({ error: true, message: "Inputs are not valid" });
  }

  const { username, email, password } = userInfo;

  const isUsernameAvailable = await User.findOne({ username: username });
  if (isUsernameAvailable) {
    return res.status(400).json({ error: true, message: "Username already exists" });
  }

  const isEmailAvailable = await User.findOne({ email: email });
  if (isEmailAvailable) res.status(400).json({ error: true, message: "Email already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  const userInfoToMongo = {
    username: username,
    email: email,
    password: hashedPassword,
  };

  const user = await User.create(userInfoToMongo);

  res.status(201).json({ error: false });
};

export default signUpController;
