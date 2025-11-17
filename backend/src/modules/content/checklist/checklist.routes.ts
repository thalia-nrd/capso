import { checklistController } from "./checklist.controller";
import express from "express";

const router = express.Router({ mergeParams: true });

router.get("/", checklistController.getChecklists);
router.post("/", checklistController.createChecklist);
router.put("/:checklistId", checklistController.updateChecklist);
router.delete("/:checklistId", checklistController.deleteChecklist);

export default router;