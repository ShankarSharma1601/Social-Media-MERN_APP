import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register new user
export const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;
  const newUser = new userModel(req.body);
  const { username } = req.body;

  try {
    const oldUser = await userModel.findOne({ username });
    if (oldUser) {
      return res.status(400).json({ message: "User Already exists" });
    }

    const user = await newUser.save();
    const token = jwt.sign(
      { username: user.username, id: user._id },
      process.env.JWT,
      { expiresIn: "1h" }
    );

    res.status(200).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Login user
export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username: username });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      if (!validity) {
        res.status(400).json("Incorrect credentials");
      } else {
        const token = jwt.sign(
          { username: user.username, id: user._id },
          process.env.JWT,
          { expiresIn: "1h" }
        );
        res.status(200).json({ user, token });
      }
    } else {
      res.status(404).json("User not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
