import {PrismaClient} from '@prisma/client'
// Evitar que a cada re render ele estoure o banco.
// Durante o desenvolvimento
const globalForPrisma = global as unknown as {prisma: PrismaClient}

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:["query"],
  })

if(process.env.NODE_ENV !== "production") globalForPrisma.prisma