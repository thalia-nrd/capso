import { Request, Response } from "express";
import axios from "axios";

export const duckController = {
  getRandomDuck: async (req: Request, res: Response) => {
    try {
      const frameId = req.frameId!;

      const response = await axios.get(
        "https://random-d.uk/api/v2/random"
      );

      const duck = response.data || null;

      res.json({ frameId, duck });
    } catch (err) {
      console.error("GET random duck error:", err);
      res.status(500).json({ error: "Server error" });
    }
  },
};