import { Request, Response, NextFunction } from 'express';
import { ChestModel } from "../chest.model";
import { comparePassword } from "../../../../utils/bcrypt";

export const verifyChestAccess = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const cabinetId = Number(req.params.cabinetId);

        const { passcode } = req.body;
        if (!passcode) {
            return res.status(400).json({ error: "Passcode is required" });
        }

        const chest = await ChestModel.getChestByCabinetId(cabinetId);
        if (!chest) {
            return res.status(404).json({ error: "Chest not found" });
        }

        const isValid = await comparePassword(passcode, chest.passcode);
        if (!isValid) {
            return res.status(400).json({ error: "Invalid passcode" });
        }

        (req as any).chest = chest;
        
        next();
    } catch (error) {
        next(error);
    }
};