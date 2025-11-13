import { prisma } from "../../infrastructure/database/prisma";

export const authModel = {
    findUserByEmail: async (email: string) => {
        return await prisma.user.findUnique({
            where: { email },
        });
    },

    createUser: async (name: string, email: string, hashedPassword: string) => {
        return await prisma.user.create({
            data: { email, password: hashedPassword },
        });
    },
};
    