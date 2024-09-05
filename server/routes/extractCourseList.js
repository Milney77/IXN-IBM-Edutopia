const express = require('express');
//const { PrismaClient } = require('@prisma/client');
const prisma = require('../prismaClient');
const router = express.Router();
//const prisma = new PrismaClient();

// Get the courses
router.get('/', async (req, res) => {
  try {
    // Extract all the courselists  in a single query
    //NOTE: includeind is optional - by default, only couses where includeind === 1 will be returned.
    // But in the IBM edit section, this will return all courses..  
    const { includeind } = req.query;
    // Query now defaults to only returning course lists where includeind === 1, unless otherwise stated.
    const courseList = await prisma.courselist.findMany({
      where: {
        // If includeind is 'all' then no filtering is applied
        ...(includeind !== 'all' && {
          // Course has been flagged as to be included.
          includeind: 1,  
          // Ensure there is at least one question with quiznumber === 1
          questions: {
            some: {
              quiznumber: 1
            }
          }
        })
      },  
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

// Delete a course
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Received DELETE request for ID: ${id}`);
    await prisma.courselist.delete({
      where: {
        courseid: parseInt(id, 10),
      },
    });
    res.status(204).send(); // Now real data to be returned, as this is just a deletion.
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Testing getting a single course
router.get('/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const course = await prisma.courselist.findUnique({
          where: {
              courseid: parseInt(id, 10), // Ensure ID is treated as an integer
          },
      });

      if (course) {
          res.json(course);
      } else {
          res.status(404).json({ error: 'Course not found' });
      }
  } catch (error) {
      console.error('Error fetching course:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;