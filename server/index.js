import { configDotenv } from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import database from "./config/database.js";
import mountRoutes from "./routes/index.js";
import { v2 as cloudinary } from "cloudinary";
import { app, server } from "./socket/socket.js";

configDotenv();
database();

let origin = [
  "http://localhost:5173",
  "https://medo-social-app.vercel.app/auth",
];
app.use(cors({ credentials: true, origin }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

mountRoutes(app);

app.use((error, req, res, next) => {
  res.status(error.status).json({
    message: error.message,
    success: false,
  });
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

let port = process.env.PORT || 3000;
server.listen(port, () => console.log("server is working"));
