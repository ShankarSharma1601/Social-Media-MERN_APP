import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";

// import routes

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

// Routes

// PORT
const PORT = process.env.PORT || 8000;

// Listen
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is Running`);
});
