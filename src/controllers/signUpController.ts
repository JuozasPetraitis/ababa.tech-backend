import { Request, Response } from "express";
import { User } from "../models";
import { hash } from "bcrypt";

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
  if (isEmailAvailable) {
    return res.status(400).json({ error: true, message: "Email already exists" });
  }

  const hashedPassword = await hash(password, 10);

  const userInfoToMongoDB = {
    username: username,
    email: email,
    password: hashedPassword,
  };

  const savedUser = await User.create(userInfoToMongoDB);
  if (savedUser) {
    return res.status(201).json({ error: false, message: "User created" });
  }

  return res.status(500).json({ error: true, message: "Error in the server" });
};

export default signUpController;
