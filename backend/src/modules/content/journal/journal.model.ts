import { prisma } from "../../../infrastructure/database/prisma";

export const journalModel = {
  getByCabinetId: async (cabinetId: number) => {
    return prisma.journal.findUnique({ where: { cabinetId } });
  },

  createJournal: async ({
    cabinetId,
    hashedPasscode,
    entries,
  }: {
    cabinetId: number;
    hashedPasscode: string;
    entries: any[];
  }) => {
    return prisma.journal.create({
      data: {
        cabinetId,
        passcode: hashedPasscode,
        entries,
      },
    });
  },

  updateEntries: async (journalId: number, entries: any[]) => {
    return prisma.journal.update({
      where: { id: journalId },
      data: { entries },
    });
  },
};
