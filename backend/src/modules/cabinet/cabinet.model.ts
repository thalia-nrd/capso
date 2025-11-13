import { prisma } from "../../infrastructure/database/prisma";

export const cabinetModel = {
    getUserCabinet: async (ownerId: number) => {
        return await prisma.cabinet.findUnique({
        where: { ownerId },
        });
    },

    createCabinet: async (ownerId: number, title: string) => {
        return await prisma.cabinet.create({
            data: { ownerId, title },
        });
    },

    updateCabinet: async (cabinetId: number, title: string) => {
        return await prisma.cabinet.update({
            where: { id: cabinetId },
            data: { title },
        });
    },

    deleteCabinet: async (cabinetId: number) => {
        return await prisma.cabinet.delete({
            where: { id: cabinetId },
        });
    },
};