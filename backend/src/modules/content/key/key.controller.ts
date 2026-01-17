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

      const items = await KeyModel.openKey(key.id);

      res.json({
        id: key.id,
        items: items?.items ?? [],
      });
    } catch (err) {
      console.error("OPEN key error:", err);
      res.status(500).json({ error: "Server error" });
    }
  },

  addKeyContent: async (req: Request, res: Response) => {
    try {
      const key = (req as any).key;
      const { items } = req.body;

      if (!items || !Array.isArray(items)) {
        return res.status(400).json({ error: "Items array is required" });
      }

      const updatedItems = items.map(item => ({
        ...item,
        createdAt: item.createdAt ?? new Date().toISOString(),
      }));

      const updated = await KeyModel.addKeyContent(key.id, updatedItems);

      res.json(updated);
    } catch (err) {
      console.error("EDIT key content error:", err);
      res.status(500).json({ error: "Server error" });
    }
  },
};