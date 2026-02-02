import { PrismaClient } from "../../../generated/client";
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export const prisma = new PrismaClient();
export const adapter = PrismaAdapter(prisma);