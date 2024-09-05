const express = require('express');
const prisma = require('../prismaClient');
const router = express.Router();

// Get the questions
router.get('/', async (req, res) => {
  try {
    // Extract all the questions in a single query
    const questions = await prisma.questions.findMany({
      include: {
        courselist: true, // Include all fields from the courselist table
      },
      orderBy: {
        questionid: 'asc', // Sort by questionid in ascending order
      },
    });
    res.json(questions);

  } catch (error) {
    // Error handling
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new question
router.post('/', async (req, res) => {
  try {
    const { courseid
      , quiznumber
      , questiontype
      , questiontext
      , options
      , matchoptions
      , optionstoselect
      , answeridx
      , hintind
      , hinttxt
      , hinttxt1
      , hinttxt2
      , hintcards
      , hintcardtitles
      , hintcardtext
      , usequestion } = req.body;
    const newQuestion = await prisma.questions.create({
      data: {courseid
  , quiznumber
  , questiontype
  , questiontext
  , options
  , matchoptions
  , optionstoselect
  , answeridx
  , hintind
  , hinttxt
  , hinttxt1
  , hinttxt2
  , hintcards
  , hintcardtitles
  , hintcardtext
  , usequestion
      },
    });

    res.status(201).json(newQuestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Update existing question
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { courseid
      , quiznumber
      , questiontype
      , questiontext
      , options
      , matchoptions
      , optionstoselect
      , answeridx
      , hintind
      , hinttxt
      , hinttxt1
      , hinttxt2
      , hintcards
      , hintcardtitles
      , hintcardtext
      , usequestion  } = req.body;
    const updatedQuestion = await prisma.questions.update({
      where: {
        questionid: parseInt(id, 10),
      },
      data: {
        courseid
      , quiznumber
      , questiontype
      , questiontext
      , options
      , matchoptions
      , optionstoselect
      , answeridx
      , hintind
      , hinttxt
      , hinttxt1
      , hinttxt2
      , hintcards
      , hintcardtitles
      , hintcardtext 
      , usequestion
      },
    });
    res.json(updatedQuestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Delete a question
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Received DELETE request for ID: ${id}`);
    await prisma.questions.delete({
      where: {
        questionid: parseInt(id, 10),
      },
    });
    res.status(204).send(); // Now real data to be returned, as this is just a deletion.
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Testing getting a single question
router.get('/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const question = await prisma.questions.findUnique({
          where: {
            questionid: parseInt(id, 10), // Ensure ID is treated as an integer
          },
      });

      if (course) {
          res.json(question);
      } else {
          res.status(404).json({ error: 'Question not found' });
      }
  } catch (error) {
      console.error('Error fetching question:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

