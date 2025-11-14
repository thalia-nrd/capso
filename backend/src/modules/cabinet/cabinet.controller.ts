import { Request, Response } from "express";
import { cabinetModel } from "./cabinet.model";

export const cabinetController = {
  getCabinet: async (req: Request, res: Response) => {
    try {
      if (!req.user) return res.status(401).json({ error: "Unauthorized" });
      const userId = req.user.userId;

      const cabinet = await cabinetModel.getUserCabinet(userId);

      res.status(200).json(cabinet);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  },

  updateCabinet: async (req: Request, res: Response) => {
    try {
      if (!req.user) return res.status(401).json({ error: "Unauthorized" });
      const userId = req.user.userId;

      const { title } = req.body;

      const cabinet = await cabinetModel.getUserCabinet(userId);
      if (!cabinet) {
        return res.status(404).json({ error: "Cabinet not found" });
      }

      const updatedCabinet = await cabinetModel.updateCabinet(
        cabinet.id,
        title
      );

      res.status(200).json(updatedCabinet);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  },
};