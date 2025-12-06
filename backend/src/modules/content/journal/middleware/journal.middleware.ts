import { Request, Response, NextFunction } from 'express';
import { journalModel } from '../journal.model';
import { comparePassword } from '../../../../utils/bcrypt';

export const verifyJournalAccess = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const frameId = Number(req.params.frameId);
    const { passcode } = req.body;

    if (!passcode) {
      return res.status(400).json({ error: "Passcode is required" });
    }

    const journal = await journalModel.getByFrameId(frameId);

    if (!journal) {
      return res.status(404).json({ error: "Journal not found" });
    }

    const isValid = await comparePassword(passcode, journal.passcode);

    if (!isValid) {
      return res.status(400).json({ error: "Invalid passcode" });
    }

    (req as any).journal = journal;

    next();
  } catch (err) {
    console.error("Journal access error:", err);
    res.status(500).json({ error: "Server error" });
  }
};