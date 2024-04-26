import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";

export const verifyToken = (req, res, next) => {
  console.log("====================================");
  console.log(req.cookies);
  console.log("====================================");
  const token = req.cookies["access_token"];
  // const token = req.cookies.__cf_bm;
  if (!token) return next(errorHandler(401, "Unauthorized"));
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) return next(403, "Forbidden");

    req.user = user;
    next();
  });
};
