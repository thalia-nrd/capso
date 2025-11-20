import { prisma } from '../../../infrastructure/database/prisma';

export const notesModel = {
  getNotesByCabinetId: async (cabinetId: number) => {
    return await prisma.note.findMany({
      where: { cabinetId },
    });
  },
  createNote: async (cabinetId: number, content: string) => {
    return await prisma.note.create({
      data: { cabinetId, content },
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
