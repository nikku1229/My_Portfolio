import express from "express";
import {
  getThoughts,
  addThoughts,
  deleteThought,
} from "../controllers/thoughtsController.js";
import verifyKey from "../middleware/auth.js";

const router = express.Router();

router.get("/thoughts", verifyKey, getThoughts);
router.post("/thoughts", verifyKey, addThoughts);
router.delete("/thoughts/:id", verifyKey, deleteThought);

export default router;
