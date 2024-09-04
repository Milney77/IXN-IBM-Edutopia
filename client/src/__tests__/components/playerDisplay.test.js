// Imports needed for the render test
import React, { act } from 'react';
import { render, screen } from '@testing-library/react';

// Need axios for this test, as the PlayerDisplay includes it.
import axios from 'axios'; 

// Import my required components
import { PlayerDisplay } from '../../components/playerDisplay';
import { DimensionsContext } from '../../components/dimensionsContext';



// Mock axios and the question data is was returning.
jest.mock('axios');
const mockQuestions = [
    {       courseid: 1
            , quiznumber: 1
            , questiontype: 2
            , questiontext: "Match the attack type with its description. "
            , options: ["Attack that deliberately overloads a network in order to shut down its online capability ","Malicious Software programmed to attack a target","Inserts commands code into a client application allowing that hacker to read or modify sen","Tricking a user into providing protected information or downloading malicious software.","Malicious Software programmed to attack a target",]
            , matchoptions: ["Denial of Service (DDoS)", "Malware", "SQL Injection", "Phishing", "Malware"]
            , optionstoselect: 0
            , answeridx: []
            , hintind: 0
            , hinttxt: ""
            , hinttxt1: ""
            , hinttxt2: ""
            , hintcards: 0
            , hintcardtitles: []
            , hintcardtext: []
            },
];



// The drag & drop component of the question overlay imports useDrag and useDrop from react-dnd, 
// which is causing jest some issues, so mock it up as we don't need it for this test.
jest.mock('react-dnd', () => ({
    useDrag: () => [null, {}],
    useDrop: () => [null, {}],
  }));

// Mock data for the tests
const mockPlayerData = [
  { id: 0, name: 'Player 1', compPlayer: 0, food: 10, wood: 5, metal: 7, tech: 1, colour: 'r', vp: 5},
  { id: 1, name: 'Player 2', compPlayer: 1, food: 8, wood: 4, metal: 9, tech: 2, colour: 'b', vp: 7},
  { id: 2, name: 'Player 3', compPlayer: 1, food: 6, wood: 3, metal: 8, tech: 1, colour: 'g', vp: 6},
  { id: 3, name: 'Player 4', compPlayer: 1, food: 5, wood: 2, metal: 6, tech: 0, colour: 'y', vp: 4},
  { id: 4, name: 'Player 5', compPlayer: 1, food: 5, wood: 2, metal: 6, tech: 0, colour: 'y', vp: 4},
  { id: 5, name: 'Player 6', compPlayer: 1, food: 5, wood: 2, metal: 6, tech: 0, colour: 'y', vp: 4},
];
const mockGamePlayData = {
    numberPlayers: 4,  
    currentPlayer: 0,
    currentPhase: 0,
    skillsBuildCourses: [1,2,3],
    includeQuiz3Questions: 0
  };
const mockGameComponents = {
  playerData: mockPlayerData,
  gamePlayData: mockGamePlayData,
  boardData: { victoryPoints: 20 },
  UpdatePlayerData: jest.fn(),
  UpdateGamePlayData: jest.fn(),
  UpdateQuestions: jest.fn(),
};
// For the dimension context
const mockWidth = 1000;

describe('PlayerDisplay Component', () => {
    beforeEach(() => {
        // Mock axios.get to resolve with an object containing a data field
        axios.get.mockResolvedValue({
          data: mockQuestions,  // Make sure the response has a `data` property
        });
      });
      
  // Test to verify the number of rendered PlayerBox components based on number of players
  it(`renders the correct number of PlayerBox components (2 players)`, () => {
    const mockGameComponents2Players = {
        ...mockGameComponents,  
        gamePlayData: { ...mockGameComponents.gamePlayData, 
                            numberPlayers: 2
        },
        playerData: mockGameComponents.playerData.slice(0, 2),
      };

    render(
      <DimensionsContext.Provider value={{ width: mockWidth }}>
        <PlayerDisplay 
          images={[]} 
          gameComponents={mockGameComponents2Players}
          addLog={jest.fn()} 
          addCurrentInstruction={jest.fn()} 
        />
      </DimensionsContext.Provider>
    );
    // Expect to find exactly 2 PlayerBox components because numberPlayers is 4
    const playerBoxes = screen.getAllByText(/Player \d+/); 
    expect(playerBoxes).toHaveLength(2);
  });
  
// Test to verify the number of rendered PlayerBox components based on number of players
it(`renders the correct number of PlayerBox components (3 players)`, () => {
    const mockGameComponents2Players = {
        ...mockGameComponents,  
        gamePlayData: { ...mockGameComponents.gamePlayData, 
                            numberPlayers: 3
        },
        playerData: mockGameComponents.playerData.slice(0, 3),
      };

    render(
      <DimensionsContext.Provider value={{ width: mockWidth }}>
        <PlayerDisplay 
          images={[]} 
          gameComponents={mockGameComponents2Players}
          addLog={jest.fn()} 
          addCurrentInstruction={jest.fn()} 
        />
      </DimensionsContext.Provider>
    );
    // Expect to find exactly 2 PlayerBox components because numberPlayers is 4
    const playerBoxes = screen.getAllByText(/Player \d+/); 
    expect(playerBoxes).toHaveLength(3);
  });

  it(`renders the correct number of PlayerBox components (4 players)`, () => {
    const mockGameComponents2Players = {
        ...mockGameComponents,  
        gamePlayData: { ...mockGameComponents.gamePlayData, 
                            numberPlayers: 4
        },
        playerData: mockGameComponents.playerData.slice(0, 4),
      };

    render(
      <DimensionsContext.Provider value={{ width: mockWidth }}>
        <PlayerDisplay 
          images={[]} 
          gameComponents={mockGameComponents2Players}
          addLog={jest.fn()} 
          addCurrentInstruction={jest.fn()} 
        />
      </DimensionsContext.Provider>
    );
    // Expect to find exactly 4 PlayerBox components because numberPlayers is 4
    const playerBoxes = screen.getAllByText(/Player \d+/); 
    expect(playerBoxes).toHaveLength(4);
  });

  it(`renders the correct number of PlayerBox components (5 players)`, () => {
    const mockGameComponents2Players = {
        ...mockGameComponents,  
        gamePlayData: { ...mockGameComponents.gamePlayData, 
                            numberPlayers: 5
        },
        playerData: mockGameComponents.playerData.slice(0, 5),
      };

    render(
      <DimensionsContext.Provider value={{ width: mockWidth }}>
        <PlayerDisplay 
          images={[]} 
          gameComponents={mockGameComponents2Players}
          addLog={jest.fn()} 
          addCurrentInstruction={jest.fn()} 
        />
      </DimensionsContext.Provider>
    );
    // Expect to find exactly 5 PlayerBox components because numberPlayers is 4
    const playerBoxes = screen.getAllByText(/Player \d+/); 
    expect(playerBoxes).toHaveLength(5);
  });

  it(`renders the correct number of PlayerBox components (6 players)`, () => {
    const mockGameComponents2Players = {
        ...mockGameComponents,  
        gamePlayData: { ...mockGameComponents.gamePlayData, 
                            numberPlayers: 6
        },
        playerData: mockGameComponents.playerData.slice(0, 6),
      };

    render(
      <DimensionsContext.Provider value={{ width: mockWidth }}>
        <PlayerDisplay 
          images={[]} 
          gameComponents={mockGameComponents2Players}
          addLog={jest.fn()} 
          addCurrentInstruction={jest.fn()} 
        />
      </DimensionsContext.Provider>
    );
    // Expect to find exactly 6 PlayerBox components because numberPlayers is 4
    const playerBoxes = screen.getAllByText(/Player \d+/); 
    expect(playerBoxes).toHaveLength(6);
  });

  it('renders no PlayerBox components when numberPlayers is 0', () => {
    const mockGamePlayDataZeroPlayers = { ...mockGamePlayData, numberPlayers: 0 };
    const mockGameComponentsZeroPlayers = {
      ...mockGameComponents,
      gamePlayData: mockGamePlayDataZeroPlayers,
    };

    render(
      <DimensionsContext.Provider value={{ width: mockWidth }}>
        <PlayerDisplay 
          images={[]} 
          gameComponents={mockGameComponentsZeroPlayers}
          addLog={jest.fn()} 
          addCurrentInstruction={jest.fn()} 
        />
      </DimensionsContext.Provider>
    );

    // Expect to find no PlayerBox components when numberPlayers is 0
    const playerBoxes = screen.queryAllByText(/Player \d+/);
    expect(playerBoxes).toHaveLength(0);
  });
});