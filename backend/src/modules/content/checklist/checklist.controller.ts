import { checklistModel } from "./checklist.model";
import { Request, Response } from "express";

export const checklistController = {
    getChecklists: async (req: Request, res: Response) => {
        const cabinetId = Number(req.params.cabinetId);
        const checklists = await checklistModel.getChecklistsByCabinetId(cabinetId);
        res.json(checklists);
    },

    createChecklist: async (req: Request, res: Response) => {
        const cabinetId = Number(req.params.cabinetId);
        const { title, items } = req.body;
        const newChecklist = await checklistModel.createChecklist(cabinetId, title, items);
        res.json(newChecklist);
    },

    updateChecklist: async (req: Request, res: Response) => {
        const checklistId = Number(req.params.checklistId);
        const { title, items } = req.body;
        const updatedChecklist = await checklistModel.updateChecklist(checklistId, title, items);
        res.json(updatedChecklist);
    },
    
    deleteChecklist: async (req: Request, res: Response) => {
        const checklistId = Number(req.params.checklistId);
        const deletedChecklist = await checklistModel.deleteChecklist(checklistId);
        res.json(deletedChecklist);
    },
};