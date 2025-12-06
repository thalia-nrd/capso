import { ChestModel } from "./chest.model";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { generateUploadSignature } from "../../../lib/cloudinary";
import type { CloudinarySignature } from "../../../types/cloudinary.types";
import { CloudinaryFolders } from "../../../lib/cloudinaryFolders";

export const ChestController = {
  getUploadSignature: async (req: Request, res: Response) => {
    try {
      const folder = req.query.folder as string;
      const upload_preset = req.query.upload_preset as string;

      const payload: CloudinarySignature = generateUploadSignature(CloudinaryFolders.KEY, upload_preset);

      res.json(payload);
    } catch (err) {
      console.error("GET upload signature error:", err);
      res.status(500).json({ error: "Server error" });
    }
  },

  getChest: async (req: Request, res: Response) => {
    try {
      const { frameId } = req.params;
      const chest = await ChestModel.getChestByFrameId(Number(frameId));
      res.json(chest);
    } catch (err) {
      console.error("GET chest error:", err);
      res.status(500).json({ error: "Server error" });
    }
  },

  createChest: async (req: Request, res: Response) => {
    try {
      const frameId = Number(req.params.frameId);

      const { passcode } = req.body;
      if (!passcode) {
        return res.status(400).json({ error: "Passcode is required" });
      }
      const hashedPasscode = await bcrypt.hash(passcode, 10);

      const newChest = await ChestModel.createChest(
        frameId,
        hashedPasscode,
        req.body.items,
      );
      res.json(newChest);
    } catch (err) {
      console.error("CREATE chest error:", err);
      res.status(500).json({ error: "Server error" });
    }
  },

  openChest: async (req: Request, res: Response) => {
    try {
      const chest = (req as any).chest;

      res.json({
        id: chest.id,
        items: chest.items,
      });
    } catch (err) {
      console.error("OPEN chest error:", err);
      res.status(500).json({ error: "Server error" });
    }
  },

  addChestContent: async (req: Request, res: Response) => {
    try {
      const { frameId } = req.params;
      const { items } = req.body;
      const chest = await ChestModel.getChestByFrameId(Number(frameId));
      if (!chest) {
        return res.status(404).json({ error: "Chest not found" });
      }
      const updatedChest = await ChestModel.addChestContent(
        chest.id,
        items
      );
      res.json(updatedChest);
    }
    catch (err) {
      console.error("ADD chest content error:", err);
      res.status(500).json({ error: "Server error" });
    }
  },
};