import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";

// import routes
import AuthRoute from "./routes/AuthRoute.js";
import UserRoute from "./routes/UserRoute.js";
import PostRoute from "./routes/PostRoute.js";
import UploadRoute from "./routes/UploadRoute.js";

const app = express();

// dotenv config
dotenv.config();

// connect database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongoose is running , ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// to serve images inside public folder
app.use(express.static("public"));
app.use("/images", express.static("images"));

// Routes
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/posts", PostRoute);
app.use("/upload", UploadRoute);

// PORT
const PORT = process.env.PORT || 8000;

// Listen
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is Running`);
});
