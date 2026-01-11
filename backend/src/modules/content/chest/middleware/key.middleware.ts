import { Request, Response, NextFunction } from 'express';
import { KeyModel } from "../key.model";
import { comparePassword } from "../../../../utils/bcrypt";

export const verifyKeyAccess = async (
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

        const key = await KeyModel.getKeyByFrameId(frameId);
        if (!key) {
            return res.status(404).json({ error: "Key not found" });
        }

        const isValid = await comparePassword(passcode, key.passcode);
        if (!isValid) {
            return res.status(400).json({ error: "Invalid passcode" });
        }

        (req as any).key = key;

        next();
    } catch (error) {
        next(error);
    }
};