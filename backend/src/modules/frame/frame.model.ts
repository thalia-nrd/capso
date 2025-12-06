import { prisma } from '../../infrastructure/database/prisma';

export const frameModel = {
  createFrame: async (ownerId: number, title: string) => {
    return await prisma.frame.create({
      data: {
        ownerId,
        title,
      },
    });
  },

  getUserFrame: async (ownerId: number) => {
    return await prisma.frame.findUnique({
      where: { ownerId },
    });
  },

  updateFrame: async (frameId: number, title: string) => {
    return await prisma.frame.update({
      where: { id: frameId },
      data: { title },
    });
  },
};
