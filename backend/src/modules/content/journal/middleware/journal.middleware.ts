import { Request, Response, NextFunction } from 'express';
import { journalModel } from '../journal.model';
import { comparePassword } from '../../../../utils/bcrypt';

declare global {
  namespace Express {
    interface Request {
      journal?: any;
    }
  }
}

export const requireJournalExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const frameId = Number(req.body.frameId);
    if (!frameId || isNaN(frameId)) {
      return res.status(400).json({ error: "frameId is required" });
    }

    const journal = await journalModel.getByFrameId(frameId);
    if (!journal) {
      return res.status(404).json({ error: "Journal not found" });
    }

    req.journal = journal;
    next();
  } catch (err) {
    next(err);
  }
};

export const verifyJournalAccess = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const frameId = Number(req.body.frameId);

    if (!frameId || isNaN(frameId)) {
      return res.status(400).json({ error: "frameId is required" });
    }

    const passcode = req.body?.passcode;
    if (!passcode) {
      return res.status(400).json({ error: "passcode is required" });
    }

    const journal = await journalModel.getByFrameId(frameId);
    if (!journal) {
      return res.status(404).json({ error: "journal not found" });
    }

    const isValid = await comparePassword(passcode, journal.passcode);
    if (!isValid) {
      return res.status(400).json({ error: "invalid passcode" });
    }

    req.journal = journal;
    next();

  } catch (err) {
    next(err);
  }
};