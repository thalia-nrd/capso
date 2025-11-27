import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../../infrastructure/database/prisma';

export const verifyCabinetOwnership = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "User not authenticated" });
    }
    const userId = req.user.userId;
    const cabinetId = Number(req.params.cabinetId);

    const cabinet = await prisma.cabinet.findUnique({
      where: { id: cabinetId },
    });

    if (!cabinet) {
      return res.status(404).json({ message: "Cabinet not found" });
    }

    if (cabinet.ownerId !== userId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    next();
  } catch (err) {
    console.error("Cabinet ownership error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};