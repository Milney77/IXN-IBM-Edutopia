// Create a mock prisma server and set functions to be defined here in 
jest.mock('../prismaClient', () => {
    return {
      users: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
    };
  });

  // Mock the bcrypt function.
  jest.mock('bcrypt', () => ({
    hash: jest.fn(() => 'hashedPassword'),  // Mock bcrypt.hash to return a static hashed password
  }));
  
  
  const bcrypt = require('bcrypt');
  const request = require('supertest');
  const express = require('express');
  const prismaMock = require('../prismaClient');  
  const usersRouter = require('../routes/extractUsers');  
  
  const app = express();
  app.use(express.json());
  app.use('/users', usersRouter);
  
  describe('Users API - CRUD', () => {

    beforeEach(() => {
      jest.clearAllMocks();  // Reset mocks before each test
    });
  
    // READ
    it('R - should fetch all users', async () => {
      const mockUsers = [{ username: 'testuser', password: 'testpassword' }];
      
      prismaMock.users.findMany.mockResolvedValue(mockUsers);
     
      const res = await request(app).get('/users');
      
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(mockUsers);  
      expect(prismaMock.users.findMany).toHaveBeenCalledTimes(1); 
    });

   // CREATE
   it('C - it should create a new user with mock bcrypt hashing', async () => {
    const newUser = {
      username: 'testuser',
      password: 'testpassword',
    };

    // Note this is a different response due to the use of bcrypt
    prismaMock.users.create.mockResolvedValue({
      username: newUser.username,
      password: 'hashedPassword', 
    });
  
    // Send the request with the new user data
    const res = await request(app)
      .post('/users')
      .send(newUser);
    expect(res.statusCode).toBe(201);

    // Special users bit - make sure bcrypt has hashed the password
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    expect(res.body.password).toEqual('hashedPassword'); 

    expect(prismaMock.users.create).toHaveBeenCalledWith({
      data: {
        username: newUser.username,
        password: 'hashedPassword', 
      },
    });

  });


  // DELETE
  it('D - should delete a course by ID', async () => {
    
    prismaMock.users.delete.mockResolvedValue({});
  
    const res = await request(app).delete('/users/1');
  
    expect(res.statusCode).toBe(204);
    expect(prismaMock.users.delete).toHaveBeenCalledWith({
      where: { id: 1 },
    });
  });

});