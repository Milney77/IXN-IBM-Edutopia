const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();

const prisma = new PrismaClient();

// Get the courses
router.get('/', async (req, res) => {
  try {
    // Extract all the courselists  in a single query
    //NOTE: includeind is optional - by default, only couses where includeind === 1 will be returned.
    // But in the IBM edit section, this will return all courses..  
    const { includeind } = req.query;
    // Query now defaults to only returning course lists where includeind === 1, unless otherwise stated.
    const courseList = await prisma.courselist.findMany({
          where: includeind === 'all' 
                ? {}
                : { includeind: 1 } ,  
      });
      res.json(courseList);

  } catch (error) {
    // Error handling
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new course
router.post('/', async (req, res) => {
  try {
    const { coursename, badgeicon, includeind } = req.body;
    const newCourse = await prisma.courselist.create({
      data: {
        coursename,
        badgeicon,
        includeind,
      },
    });

    res.status(201).json(newCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Update existing course details
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { coursename, badgeicon, includeind } = req.body;
    const updatedCourse = await prisma.courselist.update({
      where: {
        courseid: parseInt(id, 10),
      },
      data: {
        coursename,
        badgeicon,
        includeind,
      },
    });
    res.json(updatedCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;