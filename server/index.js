import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

import user from "./routers/user.router.js";
import category from "./routers/category.router.js";
import upload from "./routers/upload.router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const URI = process.env.DATABASE_URL;

app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(fileUpload({ useTempFiles: true }));

// API
app.use("/user", user);
app.use("/api", category);
app.use("/api", upload);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
