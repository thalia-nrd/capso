import { Request, Response } from "express";

export const clockController = {
  getCurrentTime: async (req: Request, res: Response) => {
    try {
      const now = new Date();

      const data = {
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
        iso: now.toISOString(),
      };

      res.json(data);
    } catch (err: any) {
      console.error("clock get error:", err);
      res.status(500).json({ error: err.message });
    }
  },
};