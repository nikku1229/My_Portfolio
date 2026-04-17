import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import thoughtsRoute from "./routes/thoughtsRoute.js";

const app = express();
dotenv.config();
connectDB();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  }),
);

app.use("/api", thoughtsRoute);

app.get("/", (req, res) => res.send("Backend running"));

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
