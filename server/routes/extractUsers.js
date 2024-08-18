const express = require('express');
const { PrismaClient } = require('@prisma/client');
const router = express.Router();

const prisma = new PrismaClient();

// Get the users
router.get('/', async (req, res) => {
  try {
    // Query now defaults to only returning course lists where includeind === 1, unless otherwise stated.
    const userslist = await prisma.users.findMany();
    res.json(userslist);
  } catch (error) {
    // Error handling
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new user
router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await prisma.users.create({
      data: {
        username,
        password,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Update existing course details
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password  } = req.body;
    const updateUser = await prisma.users.update({
      where: {
        id: parseInt(id, 10),
      },
      data: {
        username,
        password,
      },
    });
    res.json(updateUser);
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
    await prisma.users.delete({
      where: {
        id: parseInt(id, 10),
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
      const course = await prisma.users.findUnique({
          where: {
              id: parseInt(id, 10), // Ensure ID is treated as an integer
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