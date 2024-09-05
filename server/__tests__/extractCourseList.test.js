// Create a mock prisma server and set functions to be defined here in 
jest.mock('../prismaClient', () => {
    return {
      courselist: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
    };
  });
  
  const request = require('supertest');
  const express = require('express');
  const prismaMock = require('../prismaClient');  
  const coursesRouter = require('../routes/extractCourseList');  
  
  const app = express();
  app.use(express.json());
  app.use('/courselist', coursesRouter);
  
  describe('Courses API - CRUD', () => {

    beforeEach(() => {
      jest.clearAllMocks();  // Reset mocks before each test
    });
  
    // READ
    it('R - should fetch all courses', async () => {
      const mockCourses = [{ courseid: 1, coursename: 'Skills Build Course' }];
      
      prismaMock.courselist.findMany.mockResolvedValue(mockCourses);
     
      const res = await request(app).get('/courselist');
      
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(mockCourses);  
      expect(prismaMock.courselist.findMany).toHaveBeenCalledTimes(1); 
    });

   // CREATE
   it('C - should create a new course', async () => {
    const newCourse = {
        coursename: 'Skills Build Course',
        badgeicon: 'imageref.png',
        includeind: 1
    };

    prismaMock.courselist.create.mockResolvedValue(newCourse);
  
    const res = await request(app)
      .post('/courselist')
      .send(newCourse);

    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual(newCourse);
    expect(prismaMock.courselist.create).toHaveBeenCalledWith({
      data: newCourse,
    });
  });

  // UPDATE
  it('U - should update an existing course', async () => {
    const updatedCourse = {
        coursename: 'Skills Build Course',
        badgeicon: 'imageref.png',
        includeind: 1
    };
  
    prismaMock.courselist.update.mockResolvedValue(updatedCourse);
  
    const res = await request(app)
      .put('/courselist/1')
      .send(updatedCourse);
 
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(updatedCourse);
    expect(prismaMock.courselist.update).toHaveBeenCalledWith({
      where: { courseid: 1 },
      data: updatedCourse,
    });
  });

  // DELETE
  it('should delete a course by ID', async () => {
    
    prismaMock.courselist.delete.mockResolvedValue({});
  
    const res = await request(app).delete('/courselist/1');
  
    expect(res.statusCode).toBe(204);
    expect(prismaMock.courselist.delete).toHaveBeenCalledWith({
      where: { courseid: 1 },
    });
  });

  });