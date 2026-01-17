import { Router } from "express";
import { clockController } from "./clock.controller";

const router = Router();

router.get("/", clockController.getCurrentTime);

export default router;
