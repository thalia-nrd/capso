import { prisma } from "../../../infrastructure/database/prisma";

export const polaroidModel = {
  getPolaroidByCabinetId: async (cabinetId: number) => {
    return prisma.polaroid.findMany({ where: { cabinetId } });
  },

  createPolaroid: async (cabinetId: number, imageUrl: string) => {
    return await prisma.polaroid.create({
      data: { cabinetId, url: imageUrl },
    });
  },

  updatePolaroid: async (polaroidId: number, imageUrl?: string) => {
    return await prisma.polaroid.update({
      where: { id: polaroidId },
      data: {
        ...(imageUrl !== undefined && { url: imageUrl }),
      },
    });
  },
};