import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./modules/auth/auth.route";
import cabinetRoutes from "./modules/cabinet/cabinet.route";

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true               
}));

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/cabinet", cabinetRoutes);

app.get("/", (_req, res) => {
  res.send("Cabinna backend is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));