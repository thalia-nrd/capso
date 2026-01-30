import { prisma } from "../../../infrastructure/database/prisma";
import type { JournalEntry } from "./types/journal.types";

export const journalModel = {
 async getByFrameId(frameId: number) {
   return prisma.journal.findUnique({ 
    where: { frameId } 
  });
 },

  async createJournal({
    frameId,
    hashedPasscode,
    entries,
  }: {
    frameId: number;
    hashedPasscode: string;
    entries: JournalEntry[];
  }) {
    return prisma.journal.create({
      data: {
        frameId,
        passcode: hashedPasscode,
        entries,
      },
    });
  },

  async updateEntries(journalId: number, entries: JournalEntry[]) {
    return prisma.journal.update({
      where: { id: journalId },
      data: { entries },
    });
  },

  async openJournal(journalId: number) {
    return prisma.journal.findUnique({
      where: { id: journalId },
      select: { entries: true },
    });
  },
};  