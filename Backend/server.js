import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import thoughtsRoute from "./routes/thoughtsRoute.js";
import projectsRoute from "./routes/projectRoute.js";
import contactRoute from "./routes/contactRoute.js";
import likeRoute from "./routes/likeRoute.js";

const app = express();
dotenv.config();
connectDB();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELET"],
    credentials: true,
  }),
);

app.use("/api", thoughtsRoute);
app.use("/api", projectsRoute);
app.use("/api", contactRoute);
app.use("/api", likeRoute);

app.get("/", (req, res) => res.send("Backend running"));

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
