import { prisma } from "../../../infrastructure/database/prisma";

export const KeyModel = {
  async getKeyByFrameId(frameId: number) {
    return await prisma.chest.findUnique({
      where: { frameId },
    });
  },

  async createKey(frameId: number, hashedPasscode: string, items?: any[]) {
    return await prisma.chest.create({
      data: { frameId, passcode: hashedPasscode, items: items ?? [] },
    });
  },

  async addKeyContent(keyId: number, items: any[]) {
    return await prisma.chest.update({
      where: { id: keyId },
      data: { items },
    });
  },

  async openKey(keyId: number) {
    return await prisma.chest.findUnique({
      where: { id: keyId },
      select: { items: true },
    });
  }
};