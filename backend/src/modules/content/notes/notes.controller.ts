import { Request, Response } from "express";
import { notesModel } from "./notes.model";
import { noteSchema } from "./notes.schema";

export const notesController = {
  getNotes: async (req: Request, res: Response) => {
    const cabinetId = Number(req.params.cabinetId);
    const notes = await notesModel.getNotesByCabinetId(cabinetId);
    res.json(notes);

    // will be called when getting cabinets will not load separately
  },

  createNote: async (req: Request, res: Response) => {
    const parsedNote = noteSchema.safeParse(req.body);
    if (!parsedNote.success) {
      return res.status(400).json({ error: parsedNote.error.issues });
    }

    const cabinetId = Number(req.params.cabinetId);
    const { content } = req.body;

    const newNote = await notesModel.createNote(cabinetId, content);
    res.status(201).json(newNote);
  },

  updateNote: async (req: Request, res: Response) => {
    const parsedNote = noteSchema.safeParse(req.body);
    if (!parsedNote.success) {
      return res.status(400).json({ error: parsedNote.error.issues });
    }

    const noteId = Number(req.params.noteId);
    const { content } = req.body;

    const updatedNote = await notesModel.updateNote(noteId, content);
    res.json(updatedNote);
  },

  deleteNote: async (req: Request, res: Response) => {
    const noteId = Number(req.params.noteId);
    await notesModel.deleteNote(noteId);
    res.status(204).send();
  },
};