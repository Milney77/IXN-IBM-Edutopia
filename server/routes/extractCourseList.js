const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();

const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  try {

    // Extract all the questions in a single query
    const courseList = await prisma.courselist.findMany({
        where: {
          includeind: 1
        },
      });
      res.json(courseList);

  } catch (error) {
    // Error handling
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;