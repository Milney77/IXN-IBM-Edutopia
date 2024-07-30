const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();

const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  try {
    // These are to be replaced with user input when I get to that point.
    const courseIds = [1, 2, 3, 4];

    // Extract all the questions in a single query
    const questions = await prisma.questions.findMany({
      where: {
        courseid: {
          in: courseIds,
        },
      },
    });
    res.json(questions);

  } catch (error) {
    // Error handling
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;