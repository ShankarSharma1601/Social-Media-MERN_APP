import userModel from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// get a user
export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userModel.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json({ otherDetails });
    } else {
      res.status(404).json("No such User");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// get all users
export const getAllUsers = async (req, res) => {
  try {
    let users = await userModel.find();
    users = users.mao((user) => {
      const { password, ...otherDetails } = user._doc;
      return otherDetails;
    });
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// update a user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { _id, currentUserAdmin, password } = req.body;

  if (id === _id) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }

      const user = await userModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      const token = jwt.sign(
        { username: user.username, id: user._id },
        process.env.JWT,
        { expiresIn: "1h" }
      );

      console.log({ user, token });
      res.status(200).json({ user, token });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  } else {
    res
      .status(403)
      .json("Access Denied! You can update only your own Account.");
  }
};

// delete a user
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  const { currentUserId, currentUserAdmin } = req.body;
  if (currentUserId == id || currentUserAdmin) {
    try {
      await userModel.findByIdAndDelete(id);
      res.status(200).json("User Deleted Successfully!");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access Denied!");
  }
};

// follow a user
export const followUser = async (req, res) => {
  const id = req.params.id;
  const { _id } = req.body;
  if (_id == id) {
    res.status(403).json("Action Forbidden");
  } else {
    try {
      const followUser = await userModel.findById(id);
      const followingUser = await userModel.findById(_id);

      if (!followUser.followers.includes(_id)) {
        await followUser.updateOne({ $push: { followers: _id } });
        await followingUser.updateOne({ $push: { following: id } });

        res.status(200).json("User followed!");
      } else {
        res.status(403).json("You Already follow this user");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
};

// unfollow a user
export const unfollowUser = async (req, res) => {
  const id = req.params.id;
  const { _id } = req.body;
  if (_id == id) {
    res.status(403).json("Action Forbidden");
  } else {
    try {
      const unFollowUser = await userModel.findById(id);
      const unFollowingUser = await userModel.findById(_id);

      if (unFollowUser.followers.includes(_id)) {
        await unFollowUser.updateOne({ $pull: { followers: _id } });
        await unFollowingUser.updateOne({ $pull: { following: id } });

        res.status(200).json("Unfollowed Successfully!");
      } else {
        res.status(403).json("You are not following this user");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
};
