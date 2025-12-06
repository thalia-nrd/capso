import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../../infrastructure/database/prisma';

export const verifyFrameOwnership = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "User not authenticated" });
    }
    const userId = req.user.userId;
    const frameId = Number(req.params.frameId);

    const frame = await prisma.frame.findUnique({
      where: { id: frameId },
    });

    if (!frame) {
      return res.status(404).json({ message: "Frame not found" });
    }

    if (frame.ownerId !== userId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    next();
  } catch (err) {
    console.error("Frame ownership error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};