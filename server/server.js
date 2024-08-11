
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Import the routes - each query should be its own route (just to avoid this becoming unmanagable)
const questionsRouter = require('./routes/extractquestions.js')
const courseListRouter = require('./routes/extractCourseList.js')
const questionResponsesRouter = require('./routes/extractQuestionResponses.js')

//const updateCoursesRouter = require('./routes/updateCourseList.js')
//const updateQuestionsRouter = require('./routes/updateQuetsions.js')
const updateQuestionResponsesRouter = require('./routes/updateQuestionResponses.js')


// Use the routes
app.use('/questions', questionsRouter);
app.use('/courselist', courseListRouter);
app.use('/responses', questionResponsesRouter);

// app.use('/postCourses', updateCoursesRouter)
// app.use('/postQuestions', updateQuestionsRouter)
app.use('/postresponses', updateQuestionResponsesRouter);


// Standard listening code
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});