import { keyController } from "./key.controller";
import { Router } from "express";
import { requireKeyExists, verifyKeyAccess } from "./middleware/key.middleware";

const router = Router();

router.get("/signature", keyController.getUploadSignature);

router.post("/", keyController.createKey);
router.get("/", keyController.getKey);
router.post("/open", verifyKeyAccess, keyController.openKey);
router.put("/items", requireKeyExists, keyController.addKeyContent);

export default router;