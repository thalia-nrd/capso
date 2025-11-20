import { prisma } from '../../../infrastructure/database/prisma';

export const checklistModel = {
  getChecklistsByCabinetId: async (cabinetId: number) => {
    return await prisma.checklist.findMany({
      where: { cabinetId },
    });
  },
  createChecklist: async (cabinetId: number, title: string, items: string[]) => {
    return await prisma.checklist.create({
      data: { cabinetId, title, items: items },
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
