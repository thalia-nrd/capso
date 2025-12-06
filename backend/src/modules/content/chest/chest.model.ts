import { prisma } from "../../../infrastructure/database/prisma";

export const ChestModel = {
  async getChestByFrameId(frameId: number) {
    return await prisma.chest.findUnique({
      where: { frameId },
    });
  },

  async createChest(frameId: number, hashedPasscode: string, items?: any[]) {
    return await prisma.chest.create({
      data: { frameId, passcode: hashedPasscode, items: items ?? [] },
    });
  },

  async addChestContent(chestId: number, items: any[]) {
    return await prisma.chest.update({
      where: { id: chestId },
      data: { items },
    });
  },
};