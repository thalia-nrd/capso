import { ChestModel } from "./chest.model";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

export const ChestController = {
  createChest: async (req: Request, res: Response) => {
    const cabinetId = Number(req.params.cabinetId);
    
    const { passcode } = req.body;
    if (!passcode) {
      return res.status(400).json({ message: "Passcode is required" });
    }
    const hashedPasscode = await bcrypt.hash(passcode, 10);
    const newChest = await ChestModel.createChest(Number(cabinetId), hashedPasscode);
    return res.json(newChest);
  },

    getChest: async (req: Request, res: Response) => {
        const { cabinetId } = req.params;
        const chest = await ChestModel.getChestByCabinetId(Number(cabinetId));
        return res.json(chest);
    },

    openChest: async (req: Request, res: Response) => {
    try {
        const chest = (req as any).chest;

        res.json({
            id: chest.id,
            contents: chest.contents,
        });
    } catch (err) {
      console.error("OPEN journal error:", err);
      res.status(500).json({ error: "Server error" });
    }
  },

    addChestContent: async (req: Request, res: Response) => {
        const { cabinetId } = req.params;
        const { items } = req.body;
        const chest = await ChestModel.getChestByCabinetId(Number(cabinetId));
       
        const updatedChest = await ChestModel.addChestContent(chest!.id, items);
        return res.json(updatedChest);
    },
};