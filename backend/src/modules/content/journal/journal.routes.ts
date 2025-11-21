import express from "express";
import { journalController } from "./journal.controller";
import { verifyJournalAccess } from "./middleware/journal.middleware";

const router = express.Router({ mergeParams: true });

router.get("/", journalController.getJournal);
router.post("/", journalController.createJournal);
router.post("/open", verifyJournalAccess, journalController.openJournal);
router.put("/entries", verifyJournalAccess, journalController.editJournalEntries);

export default router;
