import { Request, Response, NextFunction } from "express";
import Jwt, { JwtPayload } from "jsonwebtoken";

const Auth = async (req: Request, res: Response, next: NextFunction) => {
  if (!process.env.SECRET_KEY) {
    throw new Error("Please define the SECRET_KEY environment variable inside .env");
  }
  const accessToken = req.headers["authorization"];
  if (!accessToken) {
    return res.status(401).json({ error: true, message: "User not authenticated!" });
  }

  const token = accessToken.replace("Bearer ", "");

  Jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      return res.status(401).json({
        error: true,
        message: "User not authorized!",
      });
    }

    res.locals.user = decoded;
    return next();
  });
};

export default Auth;
