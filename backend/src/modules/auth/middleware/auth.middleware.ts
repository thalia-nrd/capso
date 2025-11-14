import { Response, Request } from "express";

export const requireAuth = (req: Request, res: Response, next: Function) => {
  const token = req.cookies.authToken;
    if (!token) { 
        return res.status(401).json({ error: "Unauthorized" });
    }
    next();
};