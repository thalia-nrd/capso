import { prisma } from '../../../infrastructure/database/prisma';

export const checklistModel = {
  getChecklistsByFrameId: async (frameId: number) => {
    return await prisma.checklist.findMany({
      where: { frameId },
    });
  },
  createChecklist: async (frameId: number, title: string, items: string[]) => {
    return await prisma.checklist.create({
      data: { frameId, title, items: items },
    });
  },
  updateChecklist: async (checklistId: number, title?: string, items?: string[]) => {
    return await prisma.checklist.update({
      where: { id: checklistId },
      data: {
        ...(title !== undefined && { title }),
        ...(items !== undefined && { items }),
      },
    });
  },
  deleteChecklist: async (checklistId: number) => {
    return await prisma.checklist.delete({
      where: { id: checklistId },
    });
  },
};
