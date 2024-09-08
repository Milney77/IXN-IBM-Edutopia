// Create a mock prisma server and set functions to be defined here in 
jest.mock('../prismaClient', () => {
    return {
      questions: {
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
  const questionsRouter = require('../routes/extractquestions');  
  
  const app = express();
  app.use(express.json());
  app.use('/questions', questionsRouter);
  
  describe('Questions API - CRUD', () => {

    beforeEach(() => {
      jest.clearAllMocks();  // Reset mocks before each test
    });
  
    // READ
    it('R - should fetch all questions', async () => {
      const mockQuestions = [{ questionid: 1, questiontext: 'What is JavaScript?' }];
      // Setup what the mock prisma returns when the get-findMany query is applied.
      prismaMock.questions.findMany.mockResolvedValue(mockQuestions);
      // Request a response from the mock prisma server for get query
      const res = await request(app).get('/questions');
      // Verify the response and mock behavior
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual(mockQuestions);  
      expect(prismaMock.questions.findMany).toHaveBeenCalledTimes(1); 
    });

    // CREATE
    it('C - should create a new question', async () => {
        const newQuestion = {
            courseid: 1
            , quiznumber: 1
            , questiontype: 1
            , questiontext: "How many beans make five?"
            , options: ["Five","Turtle",]
            , matchoptions: []
            , optionstoselect: 1
            , answeridx: [0]
            , hintind: 1
            , hinttxt: "How many beans are there in a bowl containing five beans?"
            , hinttxt1: ""
            , hinttxt2: ""
            , hintcards: 2
            , hintcardtitles: ["Five","Turtle",]
            , hintcardtext: ["Is the answer","Is not the answer"]
        };
      
        // Prisma Create Response
        prismaMock.questions.create.mockResolvedValue(newQuestion);
      
        const res = await request(app)
          .post('/questions')
          .send(newQuestion);

        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual(newQuestion);
        expect(prismaMock.questions.create).toHaveBeenCalledWith({
          data: newQuestion,
        });
      });

      // UPDATE
      it('U - should update an existing question', async () => {
        const updatedQuestion = {

             courseid: 1
            , quiznumber: 1
            , questiontype: 1
            , questiontext: "How many beans make five?"
            , options: ["Five","One",]
            , matchoptions: []
            , optionstoselect: 1
            , answeridx: [0]
            , hintind: 1
            , hinttxt: "How many beans are there in a bowl containing five beans?"
            , hinttxt1: ""
            , hinttxt2: ""
            , hintcards: 2
            , hintcardtitles: ["Five","One",]
            , hintcardtext: ["Is the answer","Is not the answer"]
            , usequestion: 1
        };
      
        prismaMock.questions.update.mockResolvedValue(updatedQuestion);
      
        const res = await request(app)
          .put('/questions/1')
          .send(updatedQuestion);
     
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(updatedQuestion);
        expect(prismaMock.questions.update).toHaveBeenCalledWith({
          where: { questionid: 1 },
          data: updatedQuestion,
        });
      });

      // DELETE
      it('D - should delete a question by ID', async () => {
        // Mock the Prisma client's delete method
        prismaMock.questions.delete.mockResolvedValue({});
      
        // Send DELETE request
        const res = await request(app).delete('/questions/1');
      
        // Expect status 204 (No Content) and method called with correct ID
        expect(res.statusCode).toBe(204);
        expect(prismaMock.questions.delete).toHaveBeenCalledWith({
          where: { questionid: 1 },
        });
      });


  });