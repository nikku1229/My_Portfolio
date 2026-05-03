import express from "express";
import { mailHandler } from "../utils/contact.js";
import verifyKey from "../middleware/auth.js";

const route = express.Router();

route.post("/contact", mailHandler);

export default route;
