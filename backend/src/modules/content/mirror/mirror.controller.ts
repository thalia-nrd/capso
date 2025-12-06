import { Request, Response } from "express";
import axios from "axios";

export const mirrorController = {
    getRandomFact: async (req: Request, res: Response) => {
        try {
            const { frameId } = req.params;

            const response = await axios.get(
                "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en",
                { headers: { Accept: "application/json" } }
            );

            const fact = response.data || "Could not fetch a fact at this time.";

            res.json({ frameId, fact });
        } catch (err) {
            console.error("GET random fact error:", err);
            res.status(500).json({ error: "Server error" });
        }
    },
};