import { prisma } from "../../../infrastructure/database/prisma";

export const polaroidModel = {
  getPolaroidByFrameId: async (frameId: number) => {
    return prisma.polaroid.findMany({ where: { frameId } });
  },

  createPolaroid: async (frameId: number, imageUrl: string) => {
    return await prisma.polaroid.create({
      data: { frameId, url: imageUrl },
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