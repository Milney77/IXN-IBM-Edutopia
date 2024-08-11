const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();

const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  try {

    // Extract all the questions in a single query
    const questions = await prisma.questions.findMany({
      include: {
        courselist: true, // Include all fields from the courselist table
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