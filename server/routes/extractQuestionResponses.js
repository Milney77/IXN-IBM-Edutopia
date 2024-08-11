const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();

const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  try {

    // Extract all the question responses in a single query
    const questionResponses = await prisma.questionresponses.findMany({
      include: {
        questions: true, // Include all fields from the courselist table
      },
    });
    res.json(questionResponses);

  } catch (error) {
    // Error handling
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;