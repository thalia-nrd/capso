import { prisma } from '../../infrastructure/database/prisma';

export const cabinetModel = {
  createCabinet: async (ownerId: number, title: string) => {
    return await prisma.cabinet.create({
      data: {
        ownerId,
        title,
      },
    });
  },

  getUserCabinet: async (ownerId: number) => {
    return await prisma.cabinet.findUnique({
      where: { ownerId },
    });
  },

  updateCabinet: async (cabinetId: number, title: string) => {
    return await prisma.cabinet.update({
      where: { id: cabinetId },
      data: { title },
    });
  },
};
