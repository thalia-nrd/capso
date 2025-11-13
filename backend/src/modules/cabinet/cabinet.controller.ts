import { Request, Response } from "express";
import { cabinetModel } from "./cabinet.model";

export const cabinetController = {
  createCabinet: async (req: Request, res: Response) => {
    try {
        const { ownerId, title } = req.body;
        const newCabinet = await cabinetModel.createCabinet(ownerId, title);
        res.status(201).json(newCabinet);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
  },

  getCabinet: async (req: Request, res: Response) => {
    try {
        const { ownerId } = req.query;
        const cabinet = await cabinetModel.getUserCabinet(Number(ownerId));
        res.status(200).json(cabinet);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
  },

  updateCabinet: async (req: Request, res: Response) => {
    try {
        const { cabinetId, title } = req.body;
        const updatedCabinet = await cabinetModel.updateCabinet(cabinetId, title);
        res.status(200).json(updatedCabinet);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
  },

  deleteCabinet: async (req: Request, res: Response) => {
    try {
        const { cabinetId } = req.body;
        await cabinetModel.deleteCabinet(cabinetId);
        res.status(200).json({ message: "Cabinet deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
},
};