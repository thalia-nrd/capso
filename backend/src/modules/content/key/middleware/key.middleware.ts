import { Request, Response, NextFunction } from 'express';
import { KeyModel } from "../key.model";
import { comparePassword } from "../../../../utils/bcrypt";

declare global {
    namespace Express {
        interface Request {
            key?: any;
        }
    }
}

export const requireKeyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const frameId = Number(req.body.frameId);

    if (!frameId || isNaN(frameId)) {
      return res.status(400).json({ error: "frameId is required" });
    }

    const key = await KeyModel.getKeyByFrameId(frameId);
    if (!key) {
      return res.status(404).json({ error: "Key not found" });
    }

    req.key = key;
    next();
  } catch (err) {
    next(err);
  }
};

export const verifyKeyAccess = async (
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

        const key = await KeyModel.getKeyByFrameId(frameId);
        if (!key) {
            return res.status(404).json({ error: "key not found" });
        }

        const isValid = await comparePassword(passcode, key.passcode);
        if (!isValid) {
            return res.status(400).json({ error: "invalid passcode" });
        }

        req.key = key;
        next();

    } catch (error) {
        next(error);
    }
};