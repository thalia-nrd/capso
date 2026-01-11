import { KeyModel } from "./key.model";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { generateUploadSignature } from "../../../lib/cloudinary";
import type { CloudinarySignature } from "../../../types/cloudinary.types";
import { CloudinaryFolders } from "../../../lib/cloudinaryFolders";

export const keyController = {
  getUploadSignature: async (req: Request, res: Response) => {
    try {
      const folder = req.query.folder as string;
      const upload_preset = req.query.upload_preset as string;

      const raw = generateUploadSignature(
        CloudinaryFolders.KEY,
        upload_preset
      );

      const payload: CloudinarySignature = {
        ...raw,
        apiKey: raw.apiKey ?? "",
      };

      res.json(payload);
    } catch (err) {
      console.error("GET upload signature error:", err);
      res.status(500).json({ error: "Server error" });
    }
  },

  getKey: async (req: Request, res: Response) => {
    try {
      const frameId = req.frameId!;

      const key = await KeyModel.getKeyByFrameId(frameId);
      res.json(key);
    } catch (err) {
      console.error("GET key error:", err);
      res.status(500).json({ error: "Server error" });
    }
  },

  createKey: async (req: Request, res: Response) => {
    try {
      const frameId = req.frameId!;

      const { passcode, items } = req.body;
      if (!passcode) {
        return res.status(400).json({ error: "Passcode is required" });
      }

      const hashedPasscode = await bcrypt.hash(passcode, 10);

      const newKey = await KeyModel.createKey(
        frameId,
        hashedPasscode,
        items
      );

      res.json(newKey);
    } catch (err) {
      console.error("CREATE key error:", err);
      res.status(500).json({ error: "Server error" });
    }
  },

  openKey: async (req: Request, res: Response) => {
    try {
      const key = (req as any).key;

      res.json({
        id: key.id,
        items: key.items,
      });
    } catch (err) {
      console.error("OPEN key error:", err);
      res.status(500).json({ error: "Server error" });
    }
  },

  addKeyContent: async (req: Request, res: Response) => {
    try {
      const frameId = req.frameId!;

      const { items } = req.body;
      const key = await KeyModel.getKeyByFrameId(frameId);

      if (!key) {
        return res.status(404).json({ error: "key not found" });
      }

      const updatedKey = await KeyModel.addKeyContent(key.id, items);

      res.json(updatedKey);
    }
    catch (err) {
      console.error("ADD key content error:", err);
      res.status(500).json({ error: "Server error" });
    }
  },
};