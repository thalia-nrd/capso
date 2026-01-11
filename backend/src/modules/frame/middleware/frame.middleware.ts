import { prisma } from "../../../infrastructure/database/prisma";
import { Request, Response, NextFunction } from "express";

export const attachFrameId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const frame = await prisma.frame.findUnique({
      where: { ownerId: req.user!.userId },
    });

    if (!frame) {
      return res.status(404).json({ message: "Frame not found for user" });
    }

    req.frameId = frame.id;
    next();
  } catch (err) {
    console.error("attachFrameId error:", err);
    res.status(500).json({ message: "Failed to load frame" });
  }
};
