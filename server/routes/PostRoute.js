import express from "express";
import authMiddleware from "../middleware/AuthMiddleware.js";
import {
  createPost,
  deletePost,
  getPost,
  getTimelinePosts,
  likePost,
  updatePost,
} from "../controllers/PostController.js";
const router = express.Router();

router.post("/", authMiddleware, createPost);
router.get("/:id", getPost);
router.put("/:id", authMiddleware, updatePost);
router.delete("/:id", authMiddleware, deletePost);
router.put("/:id/like", authMiddleware, likePost);
router.get("/:id/timeline", getTimelinePosts);

export default router;
