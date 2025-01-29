import jwt from "jsonwebtoken";
import appError from "../utils/appError.js";
let verifyToken = async (req, res, next) => {
  let authorization =
    req.headers.authorization.split(" ") ||
    req.headers.Authorization.split(" ");
  let token = authorization.length === 1 ? authorization[0] : authorization[1];
  if (!token) return next(new appError("Unauthorized", 401));
  let decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (!decoded) return next(new appError("Invalid token"));
  req.body.userId = decoded.userId;
  next();
};

export default verifyToken;
