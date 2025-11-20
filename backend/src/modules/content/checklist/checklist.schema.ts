import { z } from "zod";

export const checklistSchema = z.object({
    title: z.string().min(1, "Title is required"),
    items: z.array(z.string()).default([]),
});

export const checklistUpdateSchema = z.object({
  title: z.string().optional(),
  items: z.array(z.string()).optional(),
});