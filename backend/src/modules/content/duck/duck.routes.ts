import { Router } from "express";
import { duckController } from "./duck.controller";

const router = Router({ mergeParams: true });

router.get("/quack", duckController.getRandomDuck);

export default router;