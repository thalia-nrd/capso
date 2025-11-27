import { Request, Response } from "express";
import { frameModel } from "./frame.model";
import { generateUploadSignature } from "../../../lib/cloudinary";
import type { CloudinarySignature } from "../../../types/cloudinary.types";
import type { CreateFrameDTO, UpdateFrameDTO } from "./types/frame.types";
import { CloudinaryFolders } from "../../../lib/cloudinaryFolders";

export const frameController = {
    getUploadSignature: async (req: Request, res: Response) => {
        try {
        const folder = req.query.folder as string;
        const upload_preset = req.query.upload_preset as string;

        const payload: CloudinarySignature = generateUploadSignature(CloudinaryFolders.FRAMES, upload_preset);

        res.json(payload);
        } catch (err) {
        console.error("GET upload signature error:", err);
        res.status(500).json({ error: "Server error" });
        }
    },
    
    getFrame: async (req: Request, res: Response) => {
        try {
            const cabinetId = Number(req.params.cabinetId);
            const frame = await frameModel.getFrameByCabinetId(cabinetId);

            res.json(frame)
        }
        catch (err) {
            console.error("GET frame error:", err);
            res.status(500).json({ error: "Server error" });
        }
    },

    createFrame: async (req: Request, res: Response) => {
        try {
            const cabinetId = Number(req.params.cabinetId);

            const newFrame = await frameModel.createFrame(
                cabinetId,
                req.body.imageUrl as CreateFrameDTO["imageUrl"]
            );
            res.json(newFrame);
        }
        catch (err) {
            console.error("CREATE frame error:", err);
            res.status(500).json({ error: "Server error" });
        }
    },

    updateFrame: async (req: Request, res: Response) => {
        try {
            const frameId = Number(req.params.frameId);
            const updatedFrame = await frameModel.updateFrame(
                frameId,
                req.body.imageUrl as UpdateFrameDTO["imageUrl"]
            );
            res.json(updatedFrame);
        }
        catch (err) {
            console.error("UPDATE frame error:", err);
            res.status(500).json({ error: "Server error" });
        }
    },
};