import express from "express";
import { getLikes, addLikes } from "../controllers/likesController.js";
import verifyKey from "../middleware/auth.js";

const route = express.Router();

route.get("/likes", verifyKey, getLikes);
route.post("/likes", verifyKey, addLikes);

export default route;
