// Create a connection to your Prisma Client.
// Now, whenever you need access to your database you can import the prisma instance into the file where it's needed.
// 必要以上にinstanceを生成しないため

import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
