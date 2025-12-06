import { Request, Response } from "express";
import { polaroidModel } from "./polaroid.model";
import { generateUploadSignature } from "../../../lib/cloudinary";
import type { CloudinarySignature } from "../../../types/cloudinary.types";
import type { CreatePolaroidDTO, UpdatePolaroidDTO } from "./types/polaroid.types";
import { CloudinaryFolders } from "../../../lib/cloudinaryFolders";

export const polaroidController = {
    getUploadSignature: async (req: Request, res: Response) => {
        try {
            const folder = req.query.folder as string;
            const upload_preset = req.query.upload_preset as string;

            const payload: CloudinarySignature = generateUploadSignature(CloudinaryFolders.POLAROID, upload_preset);

            res.json(payload);
        } catch (err) {
            console.error("GET upload signature error:", err);
            res.status(500).json({ error: "Server error" });
        }
    },

    getPolaroid: async (req: Request, res: Response) => {
        try {
            const frameId = Number(req.params.frameId);
            const polaroid = await polaroidModel.getPolaroidByFrameId(frameId);

            res.json(polaroid)
        }
        catch (err) {
            console.error("GET polaroid error:", err);
            res.status(500).json({ error: "Server error" });
        }
    },

    createPolaroid: async (req: Request, res: Response) => {
        try {
            const frameId = Number(req.params.frameId);

            const newPolaroid = await polaroidModel.createPolaroid(
                frameId,
                req.body.imageUrl as CreatePolaroidDTO["imageUrl"]
            );
            res.json(newPolaroid);
        }
        catch (err) {
            console.error("CREATE polaroid error:", err);
            res.status(500).json({ error: "Server error" });
        }
    },

    updatePolaroid: async (req: Request, res: Response) => {
        try {
            const polaroidId = Number(req.params.polaroidId);
            const updatedPolaroid = await polaroidModel.updatePolaroid(
                polaroidId,
                req.body.imageUrl as UpdatePolaroidDTO["imageUrl"]
            );
            res.json(updatedPolaroid);
        }
        catch (err) {
            console.error("UPDATE polaroid error:", err);
            res.status(500).json({ error: "Server error" });
        }
    },
};