import { ChestController } from "./chest.controller";
import { Router } from "express";
import { verifyChestAccess } from "./middleware/chest.middleware";

const router = Router();

router.get("/signature", ChestController.getUploadSignature);

router.post("/", ChestController.createChest);
router.get("/", ChestController.getChest);
router.post("/open", verifyChestAccess, ChestController.openChest);
router.put("/content", verifyChestAccess, ChestController.addChestContent);

export default router;