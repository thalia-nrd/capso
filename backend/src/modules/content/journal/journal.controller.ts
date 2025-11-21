import { Request, Response } from "express";
import { journalModel } from "./journal.model";
import { journalSchema } from "./journal.schema";
import { hashPassword } from "../../../utils/bcrypt";

export const journalController = {
  getJournal: async (req: Request, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      const cabinetId = Number(req.params.cabinetId);
      const journal = await journalModel.getByCabinetId(cabinetId);

      if (!journal) {
        return res.status(404).json({ error: "Journal not found" });
      }

      res.json(journal);
    } catch (err) {
      console.error("GET journal error:", err);
      res.status(500).json({ error: "Server error" });
    }
  },

  createJournal: async (req: Request, res: Response) => {
    try {
      const cabinetId = Number(req.params.cabinetId);

      const parsed = journalSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json(parsed.error.issues);
      }

      const { passcode, entries } = parsed.data;

      const hashedPasscode = await hashPassword(passcode);

      const newJournal = await journalModel.createJournal({
        cabinetId,
        hashedPasscode,
        entries: entries ?? [],
      });

      res.json(newJournal);
    } catch (err) {
      console.error("CREATE journal error:", err);
      res.status(500).json({ error: "Server error" });
    }
  },

  openJournal: async (req: Request, res: Response) => {
    try {
      const journal = (req as any).journal;

      res.json({
        id: journal.id,
        entries: journal.entries,
      });
    } catch (err) {
      console.error("OPEN journal error:", err);
      res.status(500).json({ error: "Server error" });
    }
  },

  editJournalEntries: async (req: Request, res: Response) => {
    try {
      const journal = (req as any).journal;
      const { entries } = req.body;

      if (!Array.isArray(entries)) {
        return res.status(400).json({ error: "Entries must be an array" });
      }

      const updated = await journalModel.updateEntries(journal.id, entries);

      res.json(updated);
    } catch (err) {
      console.error("EDIT journal entries error:", err);
      res.status(500).json({ error: "Server error" });
    }
  },
};
