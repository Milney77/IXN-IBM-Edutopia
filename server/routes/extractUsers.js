const bcrypt = require('bcrypt');
const express = require('express');
//const { PrismaClient } = require('@prisma/client');
const prisma = require('../prismaClient');
const router = express.Router();
//const prisma = new PrismaClient();

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
    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await prisma.users.create({
      data: {
        username: username,
        password: hashedPassword,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Delete a user
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


// Testing getting a single user
router.get('/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const user = await prisma.users.findUnique({
          where: {
              id: parseInt(id, 10), // Ensure ID is treated as an integer
          },
      });
      if (course) {
          res.json(user);
      } else {
          res.status(404).json({ error: 'Course not found' });
      }
  } catch (error) {
      console.error('Error fetching course:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Login code - this takes the user's username and password and checks if it exists in the database.
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    // Find the user by username
    const users = await prisma.users.findMany({
      where: {
        username: username,
      },
    });

    if (users.length === 0) {
      // If no users with the provided username are found, return a 401 Unauthorized
      return res.status(401).json({ error: 'Invalid Username or Password' });
    }
    
    // Iterate over the users (as username doesn't have to be unique)
    let user = null;
    // Using a for loop because forEach may not work with bcrypt (which is asynchronous)
    for (const u of users) {
      const isPasswordValid = await bcrypt.compare(password, u.password);
      if (isPasswordValid) {
        user = u;
        break;
      }
    }

    if (!user) {
      // If no user with the matching password is found, return a 401 Unauthorized
      return res.status(401).json({ error: 'Invalid Username or password' });
    }

    // If a user with the correct username and password is found, return success
    res.json({ message: 'Login successful', user: { id: user.id, username: user.username } });

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;