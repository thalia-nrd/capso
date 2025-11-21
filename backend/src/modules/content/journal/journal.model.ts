import { prisma } from "../../../infrastructure/database/prisma";
import type { JournalEntry } from "./types/journal.types";

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
    entries: JournalEntry[];
  }) => {
    return prisma.journal.create({
      data: {
        cabinetId,
        passcode: hashedPasscode,
        entries,
      },
    });
  },

  updateEntries: async (journalId: number, entries: JournalEntry[]) => {
    return prisma.journal.update({
      where: { id: journalId },
      data: { entries },
    });
  },
};