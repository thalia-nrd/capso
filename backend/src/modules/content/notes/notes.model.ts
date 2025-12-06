import { prisma } from '../../../infrastructure/database/prisma';

export const notesModel = {
  getNotesByFrameId: async (frameId: number) => {
    return await prisma.note.findMany({
      where: { frameId },
    });
  },
  createNote: async (frameId: number, content: string) => {
    return await prisma.note.create({
      data: { frameId, content },
    });
  },
  updateNote: async (noteId: number, content: string) => {
    return await prisma.note.update({
      where: { id: noteId },
      data: { content },
    });
  },
  deleteNote: async (noteId: number) => {
    return await prisma.note.delete({
      where: { id: noteId },
    });
  },
};
