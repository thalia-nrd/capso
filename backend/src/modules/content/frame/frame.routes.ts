import express from "express";
import { frameController } from "./frame.controller";

const router = express.Router({ mergeParams: true });

router.get("/signature", frameController.getUploadSignature);

router.get("/", frameController.getFrame);
router.post("/", frameController.createFrame);
router.put("/:frameId", frameController.updateFrame);

export default router;