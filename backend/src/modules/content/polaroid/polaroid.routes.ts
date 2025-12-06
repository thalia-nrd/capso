import express from "express";
import { polaroidController } from "./polaroid.controller";

const router = express.Router({ mergeParams: true });

router.get("/signature", polaroidController.getUploadSignature);

router.get("/", polaroidController.getPolaroid);
router.post("/", polaroidController.createPolaroid);
router.put("/:polaroidId", polaroidController.updatePolaroid);

export default router;