// Import the functions I wish to test
import { BoardInitialisation, CalculateVictoryPoints, CalculateHexStatus, ValidateMove } from '../../utilities/boardFunctions';

// Board Initisliation tests
describe('BoardInitialisation', () => {

  // Setup some initial data for board initisliation tests
  let boardData, mapData, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset;
  beforeEach(() => {
    boardData = {evenRowCols: 3, oddRowCols: 2,};
    mapData = [
        { id: 1, row: 0, col: 0 }, { id: 2, row: 0, col: 1 },{ id: 3, row: 0, col: 2 },
        { id: 4, row: 1, col: 0 }, { id: 5, row: 1, col: 1 },
        { id: 6, row: 2, col: 0 }, { id: 7, row: 2, col: 1 },   { id: 8, row: 2, col: 2 }
    ];
    tileWidth = 100;
    tileHeightFull = 100;
    tileHeightTrim = 75;
    tilesHOffset = 1;
    tilesVOffset = 1;
  });

  // Test 1 - Does it initialise everything correctly
  it('should initialize board tiles correctly (even rows have more columns that odd rows)', () => {
    BoardInitialisation(mapData, boardData, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset);
    mapData.forEach(tile => {
    expect(tile).toHaveProperty('xPos');
    expect(tile).toHaveProperty('yPos');
    expect(tile).toHaveProperty('xHexVert');
    expect(tile).toHaveProperty('yHexVert');
    expect(tile).toHaveProperty('neighbourids');
    });
  });

  // Test 2 - Are the X- and Y- parameters correct?
  it('should calculate (X,Y) position correctly (even rows have more columns that odd rows)', () => {
    BoardInitialisation(mapData, boardData, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset);
    mapData.forEach(tile => {
        let xpos;
        if ((tile.row % 2 === 0 && boardData.evenRowCols > boardData.oddRowCols) || (tile.row % 2 === 1 && boardData.evenRowCols < boardData.oddRowCols)) {
            xpos = tileWidth * (0.5 * tilesHOffset) + tile.col * tileWidth;
        } else { 
            xpos = tileWidth * (1 * tilesHOffset) + tile.col * tileWidth;
        }
        const ExpXpos = [xpos, tileWidth];
        const ExpYpos = [tileWidth * tilesVOffset + tile.row * tileHeightTrim, tileHeightFull, tileHeightTrim];
        //console.log('(X,Y) Positions for tile: ', tile.id , '.  Test: (', tile.xPos, ', ', tile.yPos, '),   Expected: (', ExpXpos, ', ', ExpYpos, ')');
        expect(tile.xPos).toEqual(ExpXpos);
        expect(tile.yPos).toEqual(ExpYpos);
    });
  });

  // Test 3 - Are the hex-corner positions correct?
  it('should calculate hex corner position correctly (even rows have more columns that odd rows)', () => {
    BoardInitialisation(mapData, boardData, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset);
    mapData.forEach(tile => {
        const xpos = tile.xPos[0];
        const ypos = tile.yPos[0];
        const ExpXvert = [xpos, xpos + tileWidth / 2, xpos + tileWidth
                        , xpos + tileWidth, xpos + tileWidth / 2, xpos];
        const ExpYvert = [ypos + tileHeightFull * 1 / 4, ypos, ypos + tileHeightFull * 1 / 4
                        , ypos + tileHeightFull * 3 / 4, ypos + tileHeightFull, ypos + tileHeightFull * 3 / 4];
        expect(tile.xHexVert).toEqual(ExpXvert);
        expect(tile.yHexVert).toEqual(ExpYvert);
    });
   });

    // Now lets do similar tests, with a slightly different board layout
    // Test 4 - Does it initialise everything correctly
  it('should initialize board tiles correctly (even rows have less columns that odd rows)', () => {
    // New Board Data
    boardData = {evenRowCols: 2, oddRowCols: 3,};
    mapData = [
        { id: 1, row: 0, col: 0 }, { id: 2, row: 0, col: 1 },
        { id: 3, row: 1, col: 0 }, { id: 4, row: 1, col: 1 }, {id: 5, row: 1, col: 2},
        { id: 6, row: 2, col: 0 }, { id: 7, row: 2, col: 1 },
    ];

    BoardInitialisation(mapData, boardData, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset);
    mapData.forEach(tile => {
    expect(tile).toHaveProperty('xPos');
    expect(tile).toHaveProperty('yPos');
    expect(tile).toHaveProperty('xHexVert');
    expect(tile).toHaveProperty('yHexVert');
    expect(tile).toHaveProperty('neighbourids');
    });
  });

  // Test 5 - Are the X- and Y- parameters correct?
  it('should calculate (X,Y) position correctly (even rows have less columns that odd rows)', () => {
    // New Board Data
    boardData = {evenRowCols: 2, oddRowCols: 3,};
    mapData = [
        { id: 1, row: 0, col: 0 }, { id: 2, row: 0, col: 1 },
        { id: 3, row: 1, col: 0 }, { id: 4, row: 1, col: 1 }, {id: 5, row: 1, col: 2},
        { id: 6, row: 2, col: 0 }, { id: 7, row: 2, col: 1 },
    ];

    BoardInitialisation(mapData, boardData, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset);
    mapData.forEach(tile => {
        let xpos;
        if ((tile.row % 2 === 0 && boardData.evenRowCols > boardData.oddRowCols) || (tile.row % 2 === 1 && boardData.evenRowCols < boardData.oddRowCols)) {
            xpos = tileWidth * (0.5 * tilesHOffset) + tile.col * tileWidth;
        } else { 
            xpos = tileWidth * (1 * tilesHOffset) + tile.col * tileWidth;
        }
        const ExpXpos = [xpos, tileWidth];
        const ExpYpos = [tileWidth * tilesVOffset + tile.row * tileHeightTrim, tileHeightFull, tileHeightTrim];
        //console.log('(X,Y) Positions for tile: ', tile.id , '.  Test: (', tile.xPos, ', ', tile.yPos, '),   Expected: (', ExpXpos, ', ', ExpYpos, ')');
        expect(tile.xPos).toEqual(ExpXpos);
        expect(tile.yPos).toEqual(ExpYpos);
    });
  });

  // Test 6 - Are the hex-corner positions correct?
  it('should calculate hex corner position correctly (even rows have less columns that odd rows)', () => {
    // New Board Data
    boardData = {evenRowCols: 2, oddRowCols: 3,};
    mapData = [
        { id: 1, row: 0, col: 0 }, { id: 2, row: 0, col: 1 },
        { id: 3, row: 1, col: 0 }, { id: 4, row: 1, col: 1 }, {id: 5, row: 1, col: 2},
        { id: 6, row: 2, col: 0 }, { id: 7, row: 2, col: 1 },
    ];
    BoardInitialisation(mapData, boardData, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset);
    mapData.forEach(tile => {
        const xpos = tile.xPos[0];
        const ypos = tile.yPos[0];
        const ExpXvert = [xpos, xpos + tileWidth / 2, xpos + tileWidth
                        , xpos + tileWidth, xpos + tileWidth / 2, xpos];
        const ExpYvert = [ypos + tileHeightFull * 1 / 4, ypos, ypos + tileHeightFull * 1 / 4
                        , ypos + tileHeightFull * 3 / 4, ypos + tileHeightFull, ypos + tileHeightFull * 3 / 4];
        expect(tile.xHexVert).toEqual(ExpXvert);
        expect(tile.yHexVert).toEqual(ExpYvert);
    });
  });

  // Clear all mocks to avoid mocked functions interferring with the actual function tests
  afterEach(() => {
    jest.clearAllMocks();
  });

});




// Calculate victory points test
describe('CalculateVictoryPoints', () => {
    // Common variables used by these tests
    let boardData, gamePlayData, mapData, playerData, UpdateGamePlayData, UpdatePlayerData, addCurrentInstruction, addLog;
    beforeEach(() => {
      boardData = {}; // Not really needed for this function anymore
      gamePlayData = {
        currentPlayer: 1,
        numberPlayers: 2,
      };
      mapData = [
        { currentOwner: 1, structure: 2 },
        { currentOwner: 1, structure: 3 },
        { currentOwner: 1, structure: 1 },
        { currentOwner: 1, structure: 1 },
        { currentOwner: 2, structure: 1 },
        { currentOwner: 2, structure: 3 },
        { currentOwner: 2, structure: 2 },
      ];
      playerData = [
        { id: 0, vp: 0 }, 
        { id: 1, vp: 0 }, 
      ];
      UpdateGamePlayData = jest.fn();
      UpdatePlayerData = jest.fn();
      addCurrentInstruction = jest.fn();
      addLog = jest.fn();
    });

    it('should calculate victory points correctly', () => {
        CalculateVictoryPoints(boardData, gamePlayData, mapData, playerData, UpdateGamePlayData, UpdatePlayerData, addCurrentInstruction, addLog);
        expect(UpdatePlayerData).toHaveBeenCalled();
        const updates = UpdatePlayerData.mock.calls[0][0];
        expect(updates[0]).toEqual({ playerId: 0, dataToUpdate: { vp: 7 } }); // 2 camps (1), 1 house (2) and 1 village (3)
        expect(updates[1]).toEqual({ playerId: 1, dataToUpdate: { vp: 6 } }); // 1 camp (1),  1 house (1) and 1 village (1)
      });
  
    it('should not call UpdatePlayerData if the victory points have not changed', () => {
      // New player data
      playerData = [
            { id: 0, vp: 7 }, 
            { id: 1, vp: 6 }, 
          ];
      CalculateVictoryPoints(boardData, gamePlayData, mapData, playerData, UpdateGamePlayData, UpdatePlayerData, addCurrentInstruction, addLog);
      expect(UpdatePlayerData).not.toHaveBeenCalled();
    });

    // Clear all mocks to avoid mocked functions interferring with the actual function tests
    afterEach(() => {
      jest.clearAllMocks();
    });

  });




// Calculate hex status test
describe('CalculateHexStatus', () => {
    // Common variables used by these tests
    let currentPlayer, mapData;
    beforeEach(() => {
        currentPlayer = 0;
        mapData = [
          { id: 0,  row: 0, col: 0, currentOwner: 0, neighbourids: [1, 5, 6], expectedStatus1: 2, expectedStatus2: 0}
        , { id: 1,  row: 0, col: 1, currentOwner: 0, neighbourids: [0, 2, 6, 7], expectedStatus1: 2, expectedStatus2: 2}
        , { id: 2,  row: 0, col: 2, currentOwner: 2, neighbourids: [1, 3, 7, 8], expectedStatus1: 3, expectedStatus2: 1}
        , { id: 3,  row: 0, col: 3, currentOwner: 2, neighbourids: [2, 4, 8, 9], expectedStatus1: 0, expectedStatus2: 1}
        , { id: 4,  row: 0, col: 4, currentOwner: 2, neighbourids: [3, 9, 10], expectedStatus1: 0, expectedStatus2: 1}
        , { id: 5,  row: 1, col: 0, currentOwner: 0, neighbourids: [6, 0, 11], expectedStatus1: 2, expectedStatus2: 0}
        , { id: 6,  row: 1, col: 1, currentOwner: 1, neighbourids: [5, 7, 0, 1, 11, 12], expectedStatus1: 1, expectedStatus2: 0}
        , { id: 7,  row: 1, col: 2, currentOwner: 1, neighbourids: [6, 8, 1, 2, 12, 13], expectedStatus1: 1, expectedStatus2: 3}
        , { id: 8,  row: 1, col: 3, currentOwner: 0, neighbourids: [7, 9, 2, 3, 13, 14], expectedStatus1: 2, expectedStatus2: 2}
        , { id: 9,  row: 1, col: 4, currentOwner: 0, neighbourids: [8, 10, 3, 4, 14, 15], expectedStatus1: 0, expectedStatus2: 2}
        , { id: 10, row: 1, col: 5, currentOwner: 0, neighbourids: [9, 4, 15], expectedStatus1: 0, expectedStatus2: 2}
        , { id: 11, row: 2, col: 0, currentOwner: 0, neighbourids: [12, 5, 6], expectedStatus1: 2, expectedStatus2: 0}
        , { id: 12, row: 2, col: 1, currentOwner: 0, neighbourids: [11, 13, 6, 7], expectedStatus1: 2, expectedStatus2: 0}
        , { id: 13, row: 2, col: 2, currentOwner: 0, neighbourids: [12, 14, 7, 8], expectedStatus1: 2, expectedStatus2: 0}
        , { id: 14, row: 2, col: 3, currentOwner: 0, neighbourids: [13, 15, 8, 9], expectedStatus1: 0, expectedStatus2: 0}
        , { id: 15, row: 2, col: 4, currentOwner: 0, neighbourids: [14, 9, 10], expectedStatus1: 0, expectedStatus2: 0}
        ];
    });
    it('should calculate Hex status correctly (for player 1)', () => {
        CalculateHexStatus(currentPlayer, mapData);
        mapData.forEach(tile => {
            //console.log(tile.id, tile.actionable, tile.expectedStatus1);
            expect(tile.actionable).toEqual(tile.expectedStatus1);
        });
    });

    it('should calculate Hex status correctly (for player 2)', () => {
        currentPlayer = 1;
        CalculateHexStatus(currentPlayer, mapData);
        mapData.forEach(tile => {
            //console.log(tile.id, tile.actionable, tile.expectedStatus2);
            expect(tile.actionable).toEqual(tile.expectedStatus2);
        });
    });

    // Clear all mocks to avoid mocked functions interferring with the actual function tests
    afterEach(() => {
      jest.clearAllMocks();
    });

});

// Validate Moves tests
describe('ValidateMove', () => {
    // Common variables used by these tests
    let boardData, mapData, currentPlayer, numberPlayers;
    beforeEach(() => {
        mapData = [
            { id: 0,  row: 0, col: 0, startSquare: 3, currentOwner: 2, structure: 1, neighbourids: [1, 5, 6]}
          , { id: 1,  row: 0, col: 1, startSquare: 2, currentOwner: 2, structure: 1, neighbourids: [0, 2, 6, 7]}
          , { id: 2,  row: 0, col: 2, startSquare: 0, currentOwner: 2, structure: 1, neighbourids: [1, 3, 7, 8]}
          , { id: 3,  row: 0, col: 3, startSquare: 0, currentOwner: 2, structure: 1, neighbourids: [2, 4, 8, 9]}
          , { id: 4,  row: 0, col: 4, startSquare: 0, currentOwner: 0, structure: 0, neighbourids: [3, 9, 10]}
          , { id: 5,  row: 1, col: 0, startSquare: 0, currentOwner: 1, structure: 1, neighbourids: [6, 0, 11]}
          , { id: 6,  row: 1, col: 1, startSquare: 0, currentOwner: 1, structure: 3, neighbourids: [5, 7, 0, 1, 11, 12]}
          , { id: 7,  row: 1, col: 2, startSquare: 0, currentOwner: 1, structure: 3, neighbourids: [6, 8, 1, 2, 12, 13]}
          , { id: 8,  row: 1, col: 3, startSquare: 0, currentOwner: 1, structure: 1, neighbourids: [7, 9, 2, 3, 13, 14]}
          , { id: 9,  row: 1, col: 4, startSquare: 0, currentOwner: 2, structure: 4, neighbourids: [8, 10, 3, 4, 14, 15]}
          , { id: 10, row: 1, col: 5, startSquare: 0, currentOwner: 0, structure: 0, neighbourids: [9, 4, 15]}
          , { id: 11, row: 2, col: 0, startSquare: 0, currentOwner: 1, structure: 2, neighbourids: [12, 5, 6]}
          , { id: 12, row: 2, col: 1, startSquare: 1, currentOwner: 1, structure: 4, neighbourids: [11, 13, 6, 7]}
          , { id: 13, row: 2, col: 2, startSquare: 0, currentOwner: 1, structure: 1, neighbourids: [12, 14, 7, 8]}
          , { id: 14, row: 2, col: 3, startSquare: 0, currentOwner: 1, structure: 3, neighbourids: [13, 15, 8, 9]}
          , { id: 15, row: 2, col: 4, startSquare: 0, currentOwner: 1, structure: 3, neighbourids: [14, 9, 10]}
            
        ];
        boardData = {numberPlayers: 2, maxCastles: 1, maxVillages: 4};
        currentPlayer = 0;
        numberPlayers = 2;
    });
    // Test 1
    it('Not allow taking over other player castles', () => {
        const hexid = 9;
        const actiontype = 'takeover'
        const result = ValidateMove(actiontype, hexid, boardData, mapData, currentPlayer, numberPlayers)
        expect(result.isAllowed).toEqual(false);
        expect(result.disallowReason).toEqual("Can't takeover a Castle");
    });
    // Test 2
    it('Not allow taking tiles where defender has equal or higher structure strength', () => {
        const hexid = 3;
        const actiontype = 'takeover'
        const result = ValidateMove(actiontype, hexid, boardData, mapData, currentPlayer, numberPlayers)
        expect(result.isAllowed).toEqual(false);
        expect(result.disallowReason).toEqual("Attacker structure strength (1) is not greater than defender strength (6)");
    });
    // Test 3
    it('Not allow taking over another players starting square', () => {
        const hexid = 1;
        const actiontype = 'takeover'
        const result = ValidateMove(actiontype, hexid, boardData, mapData, currentPlayer, numberPlayers)
        expect(result.isAllowed).toEqual(false);
        expect(result.disallowReason).toEqual("Cannot take over a players' starting square");
    });
    // Test 4
    it('Allow taking over a square that is a starting square for a player that is not included in this game', () => {
        const hexid = 0;
        const actiontype = 'takeover'
        const result = ValidateMove(actiontype, hexid, boardData, mapData, currentPlayer, numberPlayers)
        expect(result.isAllowed).toEqual(true);
        expect(result.disallowReason).toEqual("na");
    });
    // Test 5
    it('Allow taking over a square given the right criteria', () => {
        const hexid = 2;
        const actiontype = 'takeover'
        const result = ValidateMove(actiontype, hexid, boardData, mapData, currentPlayer, numberPlayers)
        expect(result.isAllowed).toEqual(true);
        expect(result.disallowReason).toEqual("na");
    });
    // Test 6
    it('Not allow building beyond a castle', () => {
        const hexid = 12;
        const actiontype = 'build'
        const result = ValidateMove(actiontype, hexid, boardData, mapData, currentPlayer, numberPlayers)
        expect(result.isAllowed).toEqual(false);
        expect(result.disallowReason).toEqual("Can't upgrade beyond a Castle");
    });
    // Test 7
    it('Not allow building more castles that the board allows', () => {
        const hexid = 7;
        const actiontype = 'build'
        const result = ValidateMove(actiontype, hexid, boardData, mapData, currentPlayer, numberPlayers)
        expect(result.isAllowed).toEqual(false)
        expect(result.disallowReason).toEqual("Maximum number of Castles (1) reached")
    });
    // Test 8
    it('Not allow building more villages that the board allows', () => {
        const hexid = 11;
        const actiontype = 'build'
        const result = ValidateMove(actiontype, hexid, boardData, mapData, currentPlayer, numberPlayers)
        expect(result.isAllowed).toEqual(false)
        expect(result.disallowReason).toEqual("Maximum number of Villages (4) reached")
    });
    // Test 9
    it('Allow building if criteria are okay', () => {
        const hexid = 8;
        const actiontype = 'build'
        const result = ValidateMove(actiontype, hexid, boardData, mapData, currentPlayer, numberPlayers)
        expect(result.isAllowed).toEqual(true)
        expect(result.disallowReason).toEqual("na")
    });

    // Clear all mocks to avoid mocked functions interferring with the actual function tests
    afterEach(() => {
      jest.clearAllMocks();
    });

});