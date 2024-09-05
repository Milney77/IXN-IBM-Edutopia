const { PrismaClient } = require('@prisma/client');

// Mock object for Prisma methods
const prismaMock = {
  questions: {
    findMany: jest.fn(),
    findUnique: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

console.log('Using Prisma Mock Server')

// Mock PrismaClient constructor to return the mock object
const PrismaClientMock = jest.fn(() => prismaMock);

module.exports = {
  PrismaClient: PrismaClientMock,  // Export the mocked PrismaClient constructor
  prismaMock,  // Export the mock object for use in tests
};