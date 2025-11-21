import z from "zod";

export const journalEntrySchema = z.object({
  text: z.string().min(1),
  createdAt: z.iso.datetime().optional(),
});

export const journalSchema = z.object({
  passcode: z.string().min(6),
  entries: z.array(journalEntrySchema).optional(),
});