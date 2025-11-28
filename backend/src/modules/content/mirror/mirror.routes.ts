import { mirrorController } from "./mirror.controller";
import { Router } from "express";

const router = Router({ mergeParams: true });

router.get("/random-fact", mirrorController.getRandomFact);

export default router;