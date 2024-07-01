import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
  const DB: PrismaClient | undefined;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
  prisma.$connect();
} else {
  if (!global.DB) {
    global.DB = new PrismaClient();
    global.DB.$connect();
  }
  prisma = global.DB;
}

export { prisma };
