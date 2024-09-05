// Create a mock prisma server and set functions to be defined here in 
jest.mock('../prismaClient', () => {
    return {
        questionresponses: {
        findMany: jest.fn(),
      },
    };
  });
  
  const request = require('supertest');
  const express = require('express');
  const prismaMock = require('../prismaClient');  
  const responsesRouter = require('../routes/extractQuestionResponses');  
  
  const app = express();
  app.use(express.json());
  app.use('/responses', responsesRouter);
  
  describe('Question Responses API - Read only', () => {

    beforeEach(() => {
      jest.clearAllMocks();  // Reset mocks before each test
    });
  
    // READ
    it('R - should fetch all responses to all questions', async () => {
      const mockResponses = [ {year: 2024, month: 7, day: 1, questionid: 1, 
                            timesasked: 1529,timescorrect: 396, timescorrectwithhint: 559, 
                            timesincorrect: 367, timesincorrectwithhint: 207},];
      
      prismaMock.questionresponses.findMany.mockResolvedValue(mockResponses);
     
      const res = await request(app).get('/responses');
      
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(mockResponses);  
      expect(prismaMock.questionresponses.findMany).toHaveBeenCalledTimes(1); 
    });


});