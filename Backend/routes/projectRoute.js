import express from "express";
import {
  getProjects,
  addProjects,
  deleteProjects,
  updateProjects,
} from "../controllers/projectsController.js";
import verifyKey from "../middleware/auth.js";

const router = express.Router();

router.get("/projects", verifyKey, getProjects);
router.post("/projects", verifyKey, addProjects);
router.delete("/projects/:id", verifyKey, deleteProjects);
router.patch("/projects/:id", verifyKey, updateProjects);

export default router;
