import { prisma } from "../../../infrastructure/database/prisma";

export const ChestModel = {
  async getChestByCabinetId(cabinetId: number) {
    return await prisma.chest.findUnique({
        where: { cabinetId },
    });
  },

  async createChest(cabinetId: number, hashedPasscode: string, items?: any[]) {
    return await prisma.chest.create({
        data: { cabinetId, passcode: hashedPasscode, items: items ? items : [] },
    });
  },

  async addChestContent(chestId: number, items: any[]) {
    return await prisma.chest.update({
    where: { id: chestId },
    data: { items },
    });
  },
};