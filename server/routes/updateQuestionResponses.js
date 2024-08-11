const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();

const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  // Get the question data from the gameBoardCanvas
  const { questionresponses } = req.body;
  //console.log(req.body);

  // Rather than storing results of every game, we will store them by day, month & year.  So with 100 to 150 questions, worst case is that the 
  // database grows by ~55k records each year, so should be managable.
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; 
  const day = currentDate.getDate();


  try {
    // Cycle through the questions
    for (const response of questionresponses) {
      // Check if the response already exists for the current day, month, year.
      const existingResponse = await prisma.questionresponses.findFirst({
        where: {
          year,
          month,
          day,
          questionid: response.questionid,
        },
      });

      // Did the previous query return any data?
      if (existingResponse) {
        // Yes - So update the existing record.
        await prisma.questionresponses.update({
          where: {
            id: existingResponse.id,
          },
          data: {
            timesasked: existingResponse.timesasked + response.timesAsked,
            timescorrect: existingResponse.timescorrect + response.timesCorrectNoHint,
            timescorrectwithhint: existingResponse.timescorrectwithhint + response.timesCorrectWithHint,
            timesincorrect: existingResponse.timesincorrect + response.timesIncorrectNoHint,
            timesincorrectwithhint: existingResponse.timeincorrectwithhint + response.timesIncorrectWithHint,
          },
        });
      } else {
        // No, data for this question, day, month & year doesn't exist, so add it to the dB.
        await prisma.questionresponses.create({
          data: {
            year,
            month,
            day,
            questionid: response.questionid,
            timesasked: response.timesAsked,
            timescorrect: response.timesCorrectNoHint,
            timescorrectwithhint: response.timesCorrectWithHint,
            timesincorrect: response.timesIncorrectNoHint,
            timesincorrectwithhint: response.timesIncorrectWithHint,
          },
        });
      }
    }

    res.status(200).json({ message: 'Question responses updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;