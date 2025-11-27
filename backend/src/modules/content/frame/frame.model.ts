import { prisma } from "../../../infrastructure/database/prisma";

export const frameModel = {
  getFrameByCabinetId: async (cabinetId: number) => {
    return prisma.photoFrame.findMany({ where: { cabinetId } });
  },

  createFrame: async (cabinetId: number, imageUrl: string) => {
    return await prisma.photoFrame.create({
      data: { cabinetId, url: imageUrl },
    });
  },

  updateFrame: async (frameId: number, imageUrl?: string) => {
    return await prisma.photoFrame.update({
        where: { id: frameId },
        data: {
        ...(imageUrl !== undefined && { url: imageUrl }),
      },
    });
  },
};