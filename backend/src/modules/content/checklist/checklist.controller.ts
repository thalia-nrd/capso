import { checklistModel } from "./checklist.model";
import { Request, Response } from "express";
import { checklistSchema, checklistUpdateSchema } from "./checklist.schema";

export const checklistController = {
    getChecklists: async (req: Request, res: Response) => {
        const cabinetId = Number(req.params.cabinetId);
        const checklists = await checklistModel.getChecklistsByCabinetId(cabinetId);
        res.json(checklists);
    },

    createChecklist: async (req: Request, res: Response) => {
        const cabinetId = Number(req.params.cabinetId);

        const parsed = checklistSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json(parsed.error.issues);
        }

        const { title, items } = parsed.data;
        const newChecklist = await checklistModel.createChecklist(cabinetId, title, items);
        res.json(newChecklist);
    },

    updateChecklist: async (req: Request, res: Response) => {
        const checklistId = Number(req.params.checklistId);
        const parsed = checklistUpdateSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json(parsed.error.issues);
        }
        
        const newData: { title?: string; items?: string[] } = {
        ...(parsed.data.title !== undefined && { title: parsed.data.title }),
        ...(parsed.data.items !== undefined && { items: parsed.data.items }),
        };

        if (Object.keys(newData).length === 0) {
        return res.status(400).json({ error: "No fields provided to update" });
        }

        const updatedChecklist = await checklistModel.updateChecklist(checklistId, newData.title, newData.items);
        res.json(updatedChecklist);
    },
    
    deleteChecklist: async (req: Request, res: Response) => {
        const checklistId = Number(req.params.checklistId);
        const deletedChecklist = await checklistModel.deleteChecklist(checklistId);
        res.json(deletedChecklist);
    },
};