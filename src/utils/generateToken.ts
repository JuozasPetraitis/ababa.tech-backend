import Jwt from "jsonwebtoken";
import { Types } from "mongoose";

interface User {
  _id: Types.ObjectId;
}

const generateToken = (user: User) => {
  if (!user) return null;

  if (!process.env.SECRET_KEY) {
    throw new Error("Please define the SECRET_KEY environment variable inside .env");
  }

  return Jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
};

export default generateToken;
