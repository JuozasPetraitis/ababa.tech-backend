import { Request, Response } from "express";
import { User } from "../models";
import { compare } from "bcrypt";
import { generateToken } from "../../utils";

const loginController = async (req: Request, res: Response) => {
  const userInfo = await req.body;

  if (!userInfo) {
    return res.status(400).json({ error: true, message: "Inputs are not valid" });
  }

  const { email, password } = userInfo;

  const isUserExists = await User.findOne({ email: email });
  console.log("isUserExists", isUserExists);
  if (!isUserExists) {
    return res.status(400).json({ error: true, message: "User doesn't exists" });
  }

  const isPasswordTrue = await compare(password, isUserExists.password);

  if (!isPasswordTrue) {
    return res.status(400).json({ error: true, message: "Username or password is wrong" });
  }

  const accessToken = generateToken(isUserExists._id);

  if (accessToken) {
    return res.status(201).json({ error: false, accessToken: accessToken });
  }

  return res.status(500).json({ error: true, message: "Error occured in the server" });
};

export default loginController;
