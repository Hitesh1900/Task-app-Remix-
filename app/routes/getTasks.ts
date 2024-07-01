import type { LoaderFunction } from "@remix-run/node";
import { prisma } from "../../config/dbConfig";

export const loader: LoaderFunction = async () => {
  return prisma.task.findMany();
};