import { prisma } from "../../../infrastructure/database/prisma";
import type { JournalEntry } from "./types/journal.types";

export const journalModel = {
  getByFrameId: async (frameId: number) => {
    return prisma.journal.findUnique({ where: { frameId } });
  },

  createJournal: async ({
    frameId,
    hashedPasscode,
    entries,
  }: {
    frameId: number;
    hashedPasscode: string;
    entries: JournalEntry[];
  }) => {
    return prisma.journal.create({
      data: {
        frameId,
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