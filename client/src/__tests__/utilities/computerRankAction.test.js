import {ComputerRankActions} from '../../utilities/computerPlayerFunctions';

// To avoid issues with mocks of functions interferring with the actual test of the function, I have put ComputerRankActions test in a separate file.

// Constants
// This test needs some mockups of the ai parameters
jest.mock('../../constants/constants', () => ({
    aiparameters: [
        { strat: 'e'
          , resourceRatios: {woodRatio:  0.666, foodRatio:  0.167, metalRatio: 0.167}
          , minTiles: 4
          , structureToHexRatio: 1.25
          , buildWeight: -0.5
          , expandWeight: 0.5
        },
        { strat: 'b'
            , resourceRatios: {woodRatio:  0.167, foodRatio:  0.167, metalRatio: 0.666}
            , minTiles: 2
            , structureToHexRatio: 2
            , buildWeight: 0.5
            , expandWeight: -0.5
          },
          { strat: 'm'
            , resourceRatios: {woodRatio:  0.417, foodRatio:  0.166, metalRatio: 0.417}
            , minTiles: 3
            , structureToHexRatio: 1.5
            , buildWeight: 0
            , expandWeight: 0
          }
        ],
  }));

// And mock the functions this uses
// Mock the utility functions
jest.mock('../../utilities/computerPlayerFunctions', () => ({
  calculateProductionRatios: jest.fn(),
  calculateResourcesRatio: jest.fn(),
  calculateTakeOverRisk: jest.fn(),
  // Explicitly mock ComputerRankActions to allow for function import to work correctly
  __esModule: true,
  ComputerRankActions: jest.fn(() => [])
}));

// Import the mocked utility functions
import { calculateProductionRatios, calculateResourcesRatio, calculateTakeOverRisk } from '../../utilities/computerPlayerFunctions';

// Constants
// Mock input data
const boardData = { rows: 3
  , evenRowCols: 3
  , oddRowCols: 4
  , maxPlayers: 3
  , victoryPoints: 10
  , maxCastles: 1
  , maxVillages: 4}; 
const mapData = [
  { id: 0, tileType: 'w', currentOwner: 1, structure: 1, neighbourids: [1, 3, 4] },
  { id: 1, tileType: 'f', currentOwner: 0, structure: 0, neighbourids: [0, 2, 4, 5] },
  { id: 2, tileType: 'm', currentOwner: 0, structure: 0, neighbourids: [1, 5, 6] },

  { id: 3, tileType: 'w', currentOwner: 3, structure: 2, neighbourids: [0, 4, 7] },
  { id: 4, tileType: 'f', currentOwner: 0, structure: 0, neighbourids: [0, 1, 3, 5, 7, 8] },
  { id: 5, tileType: 'm', currentOwner: 2, structure: 1, neighbourids: [1, 2, 4, 6, 8, 9] },
  { id: 6, tileType: 'w', currentOwner: 0, structure: 0, neighbourids: [2, 5, 9] },

  { id: 7, tileType: 'w', currentOwner: 3, structure: 1, neighbourids: [3, 4, 8] },
  { id: 8, tileType: 'w', currentOwner: 0, structure: 0, neighbourids: [7, 4, 5, 9] },
  { id: 9, tileType: 'm', currentOwner: 0, structure: 0, neighbourids: [5, 6, 8] },
];
const playerData = [{id: 0, compPlayer: 0, strat: 'm', diff: 2}, 
                  , {id: 1, compPlayer: 1, strat: 'e', diff: 4},
                  , {id: 2, compPlayer: 1, strat: 'e', diff: 4},];
const gamePlayData = { currentPlayer: 1 };


describe('ComputerRankActions', () => {
  beforeEach(() => {
    // Clear all instances and calls to the mock functions before each test
    calculateProductionRatios.mockClear();
    calculateResourcesRatio.mockClear();
    calculateTakeOverRisk.mockClear();
  });

  it('should rank actions correctly', () => {
    // Mock the implementation of the utility functions
    calculateProductionRatios.mockReturnValue({ total: 100, ratios: { wood: 0.3, food: 0.4, metal: 0.3 } });
    calculateResourcesRatio.mockReturnValue({ newScore: 1 });
    calculateTakeOverRisk.mockReturnValue([0, 0, 0]);

    

    // Call the function
    const result = ComputerRankActions(boardData, mapData, playerData, gamePlayData);
    console.log(result)

    // Assertions

    // Add more assertions as needed
  });
});

