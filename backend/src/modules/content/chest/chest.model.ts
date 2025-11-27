import { prisma } from "../../../infrastructure/database/prisma";

export const ChestModel = {
  async createChest(cabinetId: number, hashedPasscode: string) {
    return await prisma.chest.create({
        data: { cabinetId, passcode: hashedPasscode },
    });
  },

  async getChestByCabinetId(cabinetId: number) {
    return await prisma.chest.findUnique({
        where: { cabinetId },
    });
  },

  async addChestContent(chestId: number, items: any[]) {
    return await prisma.chest.update({
    where: { id: chestId },
    data: { items },
    });
  },
};