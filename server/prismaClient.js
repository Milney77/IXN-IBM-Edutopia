const { PrismaClient } = require('@prisma/client');

let prisma;

if (process.env.NODE_ENV === 'production') {
  // In production, instantiate PrismaClient only once and reuse it
  prisma = new PrismaClient();
} else {
  // In development or testing, use a global variable to avoid multiple instances
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

//console.log('Real Prisma Server');

module.exports = prisma;