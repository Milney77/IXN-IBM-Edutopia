jest.mock('../prismaClient', () => {
    return {
      questionresponses: {
        findFirst: jest.fn(),
        update: jest.fn(),
        create: jest.fn(),
      },
    };
  });
  
  const request = require('supertest');
  const express = require('express');
  const prismaMock = require('../prismaClient');  
  const updateResponsesRouter = require('../routes/updateQuestionResponses');  
  
  const app = express();
  app.use(express.json());
  app.use('/postresponses', updateResponsesRouter);
  
  describe('Question Responses API - Update or Create', () => {
    beforeEach(() => {
      jest.clearAllMocks();  // Reset mocks before each test
    });
  
    it('should update an existing question response', async () => {
      // Mock data for an existing response
      const existingResponse = {
        id: 1,
        year: 2024,
        month: 9,
        day: 1,
        questionid: 101,
        timesasked: 6,
        timescorrect: 2,
        timescorrectwithhint: 1,
        timesincorrect: 2,
        timesincorrectwithhint: 1,
      };
  
      // Mock data sent in the request
      const requestData = {
        questionresponses: [
          {
            questionid: 101,
            timesAsked: 4,
            timesCorrectNoHint: 2,
            timesCorrectWithHint: 1,
            timesIncorrectNoHint: 1,
            timesIncorrectWithHint: 0,
          },
        ],
      };
  
      // Mock `findFirst` to simulate that a record already exists
      prismaMock.questionresponses.findFirst.mockResolvedValue(existingResponse);
  
      // Mock the update operation
      prismaMock.questionresponses.update.mockResolvedValue({
        ...existingResponse,
        timesasked: 6,
        timescorrect: 2,
        timescorrectwithhint: 1,
        timesincorrect: 2,
        timesincorrectwithhint: 1,
      });
  
      // Send POST request to the route
      const res = await request(app)
        .post('/postresponses')
        .send(requestData);
  
      // Ensure the response is successful
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({ message: 'Question responses updated successfully' });
  
      // Ensure the findFirst method was called with the correct data
      expect(prismaMock.questionresponses.findFirst).toHaveBeenCalledWith({
        where: {
          year: expect.any(Number),
          month: expect.any(Number),
          day: expect.any(Number),
          questionid: 101,
        },
      });
  
      // Ensure update method was called with the correct updated data
      expect(prismaMock.questionresponses.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: {
          timesasked: 10,
          timescorrect: 4,  
          timescorrectwithhint: 2,
          timesincorrect: 3, 
          timesincorrectwithhint: 1,  
        },
      });
  
      // Ensure create method was not called
      expect(prismaMock.questionresponses.create).not.toHaveBeenCalled();
    });
  
    it('should create a new question response when none exists', async () => {
      // Mock data sent in the request
      const requestData = {
        questionresponses: [
          {
            questionid: 101,
            timesAsked: 3,
            timesCorrectNoHint: 2,
            timesCorrectWithHint: 1,
            timesIncorrectNoHint: 0,
            timesIncorrectWithHint: 0,
          },
        ],
      };
  
      // Mock `findFirst` to return null, indicating no existing response
      prismaMock.questionresponses.findFirst.mockResolvedValue(null);
  
      // Mock the create operation
      prismaMock.questionresponses.create.mockResolvedValue({
        id: 1,
        year: 2023,
        month: 9,
        day: 4,
        questionid: 101,
        timesasked: 3,
        timescorrect: 2,
        timescorrectwithhint: 1,
        timesincorrect: 0,
        timesincorrectwithhint: 0,
      });
  
      // Send POST request to the route
      const res = await request(app)
        .post('/postresponses')
        .send(requestData);
  
      // Ensure the response is successful
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual({ message: 'Question responses updated successfully' });
  
      // Ensure the findFirst method was called with the correct data
      expect(prismaMock.questionresponses.findFirst).toHaveBeenCalledWith({
        where: {
          year: expect.any(Number),
          month: expect.any(Number),
          day: expect.any(Number),
          questionid: 101,
        },
      });
  
      // Ensure create method was called with the correct data
      expect(prismaMock.questionresponses.create).toHaveBeenCalledWith({
        data: {
          year: expect.any(Number),
          month: expect.any(Number),
          day: expect.any(Number),
          questionid: 101,
          timesasked: 3,
          timescorrect: 2,
          timescorrectwithhint: 1,
          timesincorrect: 0,
          timesincorrectwithhint: 0,
        },
      });
  
      // Ensure update method was not called
      expect(prismaMock.questionresponses.update).not.toHaveBeenCalled();
    });
  });