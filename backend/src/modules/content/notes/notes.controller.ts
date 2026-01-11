import { Request, Response } from "express";
import { notesModel } from "./notes.model";
import { noteSchema } from "./notes.schema";

export const notesController = {
  getNotes: async (req: Request, res: Response) => {
    const frameId = req.frameId!;
    const notes = await notesModel.getNotesByFrameId(frameId);
    res.json(notes);
  },

  createNote: async (req: Request, res: Response) => {
    const parsedNote = noteSchema.safeParse(req.body);
    if (!parsedNote.success) {
      return res.status(400).json({ error: parsedNote.error.issues });
    }

    const frameId = req.frameId!;
    const { content } = req.body;

    const newNote = await notesModel.createNote(frameId, content);
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