
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const path = require('path');
const badgesRouter = require('./routes/badges');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Import the routes - each query should be its own route (just to avoid this becoming unmanagable)
const questionsRouter = require('./routes/extractquestions.js')
const courseListRouter = require('./routes/extractCourseList.js')
const questionResponsesRouter = require('./routes/extractQuestionResponses.js')
//const updateQuestionResponsesRouter = require('./routes/updateQuestionResponses.js')
const usersRouter = require('./routes/extractUsers.js')

// Use the routes
app.use('/questions', questionsRouter);
app.use('/courselist', courseListRouter);
app.use('/responses', questionResponsesRouter);
//app.use('/postresponses', updateQuestionResponsesRouter);
app.use('/users', usersRouter)

// Get all the images in the badges folder
const badgesPath = path.join(__dirname, '../client/public/images/badges');
app.use('/badges', express.static(badgesPath));
app.use('/api', badgesRouter); 

// Standard listening code
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});