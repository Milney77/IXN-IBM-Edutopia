import { isPointInPolygon, checkMouseInHex, mouseXY_to_HexID} from '../../components/gameBoardListener';



describe('isPointInPolygon', () => {
    // Test 1 - Testing points within a square
    it("Testing a square polygon", () => {
        const verticies = [[0, 0], [0, 20], [20, 20], [20, 0]];
        // True cases
        expect(isPointInPolygon([0 , 0 ], verticies)).toEqual(true);
        expect(isPointInPolygon([5 , 5 ], verticies)).toEqual(true);
        expect(isPointInPolygon([15, 5 ], verticies)).toEqual(true);
        expect(isPointInPolygon([19, 0 ], verticies)).toEqual(true);
        expect(isPointInPolygon([19, 19], verticies)).toEqual(true);
        
        // False Cases
        expect(isPointInPolygon([20 , 0 ], verticies)).toEqual(false);
        expect(isPointInPolygon([-1, 0 ], verticies)).toEqual(false);
        expect(isPointInPolygon([1, 22], verticies)).toEqual(false);
        expect(isPointInPolygon([20, 20], verticies)).toEqual(false);
        expect(isPointInPolygon([21, 23], verticies)).toEqual(false);
        
    });

    // Test 2 - Point is inside a hexagon
    it("Testing a hexagonal polygon", () => {
        const verticies = [[10, 0], [20, 5], [20, 25], [10, 30], [0, 25], [0, 20]];
        // True cases
        expect(isPointInPolygon([10, 10], verticies)).toEqual(true);
        expect(isPointInPolygon([10, 20], verticies)).toEqual(true);
        expect(isPointInPolygon([10, 29], verticies)).toEqual(true);
        expect(isPointInPolygon([10, 24], verticies)).toEqual(true);
        
        // False Cases
        expect(isPointInPolygon([0 , 0 ], verticies)).toEqual(false);
        expect(isPointInPolygon([20, 4 ], verticies)).toEqual(false);
        expect(isPointInPolygon([28, 28], verticies)).toEqual(false);
        expect(isPointInPolygon([28, 3 ], verticies)).toEqual(false);
        expect(isPointInPolygon([25, 20], verticies)).toEqual(false);

    });

});


describe('checkMouseInHex ', () => {
    let originalIsPointInPolygon;

    // Save the original implementation of isPointInPolygon
    beforeAll(() => {
        originalIsPointInPolygon = isPointInPolygon;
    });

    let tileData;
    beforeEach(() => {
        // Mock isPointInPolygon for these tests
        jest.spyOn(require('../../components/gameBoardListener'), 'isPointInPolygon').mockImplementation((point, vertices) => {
            return true;
        });

        // Tile data
        tileData = [
            {"id": 1, "row": 0, "col": 1, "tileType": "f", "startSquare": 0, "structure": 0, "currentOwner": 0, "xPos": [187.5, 125], "yPos": [31.25, 144, 108], 
            "xHexVert": [187.5, 250, 312.5, 312.5, 250, 187.5],
            "yHexVert": [67.25, 31.25, 67.25, 139.25, 175.25, 139.25],
            "hover": 0, "neighbourids": [0, 2, 10, 11 ] }
            ,
            {"id": 2, "row": 0, "col": 2, "tileType": "m", "startSquare": 0, "structure": 0, "currentOwner": 0, "xPos": [ 312.5, 125], "yPos": [31.25, 144, 108],
            "xHexVert": [312.5, 375, 437.5, 437.5, 375, 312.5 ],
            "yHexVert": [67.25, 31.25, 67.25, 139.25, 175.25, 139.25],
            "hover": 0, "neighbourids": [1, 3, 11, 12 ] } 
            ,
            {"id": 10, "row": 1, "col": 0, "tileType": "w", "startSquare": 0, "structure": 0, "currentOwner": 0, "xPos": [ 125, 125 ], "yPos": [ 139.25, 144, 108 ],
            "xHexVert": [125, 187.5, 250, 250, 187.5, 125 ],
            "yHexVert": [175.25, 139.25, 175.25, 247.25, 283.25, 247.25 ],
            "hover": 0, "neighbourids": [ 11, 0, 1, 19, 20 ] } 
            ,
            {"id": 11, "row": 1, "col": 1, "tileType": "w", "startSquare": 1, "structure": 1, "currentOwner": 1, "xPos": [ 250, 125 ], "yPos": [ 139.25, 144, 108 ],
            "xHexVert": [250, 312.5, 375, 375, 312.5, 250 ],
            "yHexVert": [175.25, 139.25, 175.25, 247.25, 283.25, 247.25],
            "hover": 0, "neighbourids": [ 10, 12, 1, 2, 20, 21 ]}
            ,
            {"id": 12, "row": 1, "col": 2, "tileType": "f", "startSquare": 0, "structure": 0, "currentOwner": 0, "xPos": [ 375, 125 ], "yPos": [ 139.25, 144, 108 ],
            "xHexVert": [375, 437.5, 500, 500, 437.5, 375 ],
            "yHexVert": [175.25, 139.25, 175.25, 247.25, 283.25, 247.25],
            "hover": 0, "neighbourids": [ 11, 13, 2, 3, 21, 22 ]}
            ,
            {"id": 20, "row": 2, "col": 1, "tileType": "m", "startSquare": 0, "structure": 0, "currentOwner": 0, "xPos": [ 187.5, 125 ], "yPos": [ 247.25, 144, 108 ],
            "xHexVert": [187.5, 250, 312.5, 312.5, 250, 187.5 ],
            "yHexVert": [ 283.25, 247.25, 283.25, 355.25, 391.25, 355.25 ],
            "hover": 0, "neighbourids": [19, 21, 10, 11, 29, 30 ] }
            ,
            {"id": 21, "row": 2, "col": 2, "tileType": "m", "startSquare": 0, "structure": 0, "currentOwner": 0, "xPos": [ 312.5, 125 ], "yPos": [ 247.25, 144, 108 ],
            "xHexVert": [312.5, 375, 437.5, 437.5, 375, 312.5 ],
            "yHexVert": [283.25, 247.25, 283.25, 355.25, 391.25, 355.25],
            "hover": 0, "neighbourids": [20, 22, 11, 12, 30, 31]}
            ];

    });

    afterEach(() => {
        // Restore the original implementation after each test
        require('../../components/gameBoardListener').isPointInPolygon.mockRestore();
    });

    it('should return the correct id for different points', () => {
        expect(checkMouseInHex([0,1,2], [0,1,2], 250, 100, tileData)).toBe(1)
        expect(checkMouseInHex([0,1,2], [0,1,2], 350, 100, tileData)).toBe(2)
        expect(checkMouseInHex([0,1,2], [0,1,2], 200, 200, tileData)).toBe(10)
        expect(checkMouseInHex([0,1,2], [0,1,2], 300, 200, tileData)).toBe(11)
        expect(checkMouseInHex([0,1,2], [0,1,2], 450, 200, tileData)).toBe(12)
        expect(checkMouseInHex([0,1,2], [0,1,2], 250, 300, tileData)).toBe(20)
        expect(checkMouseInHex([0,1,2], [0,1,2], 350, 300, tileData)).toBe(21)
    });

    test('should return null if the point is outside all hexes', () => {
        expect(checkMouseInHex([0,1,2], [0,1,2], 0, 0, tileData)).toBe(null)
        expect(checkMouseInHex([0,1,2], [0,1,2], 500, 200, tileData)).toBe(null)
        expect(checkMouseInHex([0,1,2], [0,1,2], 100, 400, tileData)).toBe(null)
        expect(checkMouseInHex([0,1,2], [0,1,2], 500, 300, tileData)).toBe(null)
    });

    afterAll(() => {
        // Restore the original implementation after all tests
        require('../../components/gameBoardListener').isPointInPolygon = originalIsPointInPolygon;
    });

});


describe('mouseXY_to_HexID', () => {

  // Have to prevent this mock version of checkMouseInHex from impacting the test of checkMouseInHex.
  let originalCheckMouseInHex;
  // Save the original implementation
  beforeAll(() => {
    originalCheckMouseInHex = checkMouseInHex;
  });

  const boardData = {"name": "Base", "rows": 3, "evenRowCols": 3, "oddRowCols": 2, "maxPlayers": 2, "victoryPoints": 20, "maxCastles": 1, "maxVillages": 4 }
  const mapData = [
            {"id": 0, "row": 0, "col": 0, "tileType": "m", "startSquare": 0, "structure": 0, "currentOwner": 0, "xPos": [62.5, 125], "yPos": [31.25, 144, 108],
            "xHexVert": [62.5, 125, 187.5, 187.5, 125, 62.5], "yHexVert": [67.25, 31.25, 67.25, 139.25, 175.25, 139.25], "hover": 0, "neighbourids": [1, 10 ]}, 
            {"id": 1, "row": 0, "col": 1, "tileType": "f", "startSquare": 0, "structure": 0, "currentOwner": 0, "xPos": [187.5, 125], "yPos": [31.25, 144, 108],
            "xHexVert": [187.5, 250, 312.5, 312.5, 250, 187.5], "yHexVert": [67.25, 31.25, 67.25, 139.25, 175.25, 139.25], "hover": 0, "neighbourids": [0, 2, 10, 11 ] },
            {"id": 2, "row": 0, "col": 2, "tileType": "m", "startSquare": 0, "structure": 0, "currentOwner": 0, "xPos": [312.5, 125],  "yPos": [31.25, 144, 108],
            "xHexVert": [312.5, 375, 437.5, 437.5, 375, 312.5], "yHexVert": [67.25, 31.25, 67.25, 139.25, 175.25, 139.25], "hover": 0, "neighbourids": [1, 3, 11, 12]},
            {"id":3}, {"id":4}, {"id":5}, {"id":6}, {"id":7}, {"id":8},{"id":9},   
            {"id": 10, "row": 1, "col": 0, "tileType": "w", "startSquare": 0, "structure": 0, "currentOwner": 0, "xPos": [125, 125], "yPos": [139.25, 144, 108],
            "xHexVert": [125, 187.5, 250, 250, 187.5, 125], "yHexVert": [175.25, 139.25, 175.25, 247.25, 283.25, 247.25], "hover": 0, "neighbourids": [11, 0, 1, 19, 20]},
            {"id": 11, "row": 1, "col": 1, "tileType": "w", "startSquare": 1, "structure": 1, "currentOwner": 1, "xPos": [250, 125], "yPos": [139.25, 144, 108],
            "xHexVert": [250, 312.5, 375, 375, 312.5, 250], "yHexVert": [175.25, 139.25, 175.25, 247.25, 283.25, 247.25], "hover": 0, "neighbourids": [10, 12, 1, 2, 20, 21]},
            {"id":12}, {"id":13}, {"id":14}, {"id":15}, {"id":16}, {"id":17}, {"id":18},
            {"id": 19, "row": 2, "col": 0, "tileType": "w", "startSquare": 0, "structure": 0, "currentOwner": 0, "xPos": [62.5, 125], "yPos": [247.25, 144, 108],
            "xHexVert": [62.5, 125, 187.5, 187.5, 125, 62.5], "yHexVert": [283.25, 247.25, 283.25, 355.25, 391.25, 355.25], "hover": 0, "neighbourids": [20, 10, 29]},
            {"id": 20, "row": 2, "col": 1, "tileType": "m", "startSquare": 0, "structure": 0, "currentOwner": 0, "xPos": [187.5, 125], "yPos": [247.25, 144, 108],
            "xHexVert": [187.5, 250, 312.5, 312.5, 250, 187.5], "yHexVert": [283.25, 247.25, 283.25, 355.25, 391.25, 355.25], "hover": 0, "neighbourids": [19, 21, 10, 11, 29, 30]},
            {"id": 21, "row": 2, "col": 2, "tileType": "m", "startSquare": 0, "structure": 0, "currentOwner": 0, "xPos": [312.5, 125], "yPos": [247.25, 144, 108],
            "xHexVert": [312.5, 375, 437.5, 437.5, 375, 312.5], "yHexVert": [283.25, 247.25, 283.25, 355.25, 391.25, 355.25], "hover": 0, "neighbourids": [20, 22, 11, 12, 30, 31]},
            
        ]
  const gamePlayData = {"numberPlayers": 2, "currentTurn": 1, "currentPlayer": 0, "currentPhase": 2, "log": [], "actionPhaseSet": -1, "winner": 0 };

  // Common variables
  const tileWidth = 125;
  const tileHeightFull = 144;
  const tileHeightTrim = 108;
  const tilesHOffset = 1;
  const tilesVOffset = 0.25
  const actionMenuParams = {
    "width": 346,
    "height": 69,
    "playerBoxWidth": 692,
    "customMargin": 2,
    "xOffset1": 16,
    "xOffset2": 0.18,
    "yOffset": 1,
    "iconSize": 0.9,
    "iconOffset": 0.25,
    "iconHover": [0, 0, 0, 0, 0, 0]}

  beforeEach(() => {
    // Mock checkMouseInHex for these tests
    jest.spyOn(require('../../components/gameBoardListener'), 'checkMouseInHex').mockImplementation((ColArray, RowArray, xpos, ypos, mapData) => {
        if      (xpos === 105 && ypos === 100) {return 0;}
        else if (xpos === 235 && ypos === 100) {return 1;}
        else if (xpos === 370 && ypos === 100) {return 2;}
        else if (xpos === 190 && ypos === 205) {return 10;}
        else if (xpos === 300 && ypos === 205) {return 11;}
        else if (xpos === 105 && ypos === 310) {return 19;}
        else if (xpos === 235 && ypos === 310) {return 20;}
        else if (xpos === 370 && ypos === 310) {return 21;}
        else {return 0;}
    });
  });

  afterEach(() => {
    // Restore the original implementation after each test
    require('../../components/gameBoardListener').checkMouseInHex.mockRestore();
  });

  it('should return the right hex number', () => {
    const result0  = mouseXY_to_HexID(105, 100, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset, boardData, mapData, gamePlayData, actionMenuParams);
    const result1  = mouseXY_to_HexID(235, 100, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset, boardData, mapData, gamePlayData, actionMenuParams);
    const result2  = mouseXY_to_HexID(370, 100, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset, boardData, mapData, gamePlayData, actionMenuParams);
    const result10 = mouseXY_to_HexID(190, 205, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset, boardData, mapData, gamePlayData, actionMenuParams);
    const result11 = mouseXY_to_HexID(300, 205, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset, boardData, mapData, gamePlayData, actionMenuParams);
    const result19 = mouseXY_to_HexID(105, 310, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset, boardData, mapData, gamePlayData, actionMenuParams);
    const result20 = mouseXY_to_HexID(235, 310, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset, boardData, mapData, gamePlayData, actionMenuParams);
    const result21 = mouseXY_to_HexID(370, 310, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset, boardData, mapData, gamePlayData, actionMenuParams);
    expect(result0).toStrictEqual({type: 'hex', id: 0});
    expect(result1).toStrictEqual({type: 'hex', id: 1});
    expect(result2).toStrictEqual({type: 'hex', id: 2});
    expect(result10).toStrictEqual({type: 'hex', id: 10});
    expect(result11).toStrictEqual({type: 'hex', id: 11});
    expect(result19).toStrictEqual({type: 'hex', id: 19});
    expect(result20).toStrictEqual({type: 'hex', id: 20});
    expect(result21).toStrictEqual({type: 'hex', id: 21});
  });


  it('should return the right action menu index', () => {
    const amresult1 = mouseXY_to_HexID(60 , 33, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset, boardData, mapData, gamePlayData, actionMenuParams);
    const amresult2 = mouseXY_to_HexID(130, 33, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset, boardData, mapData, gamePlayData, actionMenuParams);
    const amresult3 = mouseXY_to_HexID(200, 33, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset, boardData, mapData, gamePlayData, actionMenuParams);
    const amresult4 = mouseXY_to_HexID(270, 33, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset, boardData, mapData, gamePlayData, actionMenuParams);
    const amresult5 = mouseXY_to_HexID(335, 33, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset, boardData, mapData, gamePlayData, actionMenuParams);
    expect(amresult1).toStrictEqual({type: 'am', id: 0});
    expect(amresult2).toStrictEqual({type: 'am', id: 1});
    expect(amresult3).toStrictEqual({type: 'am', id: 2});
    expect(amresult4).toStrictEqual({type: 'am', id: 3});
    expect(amresult5).toStrictEqual({type: 'am', id: 4});

  });

});
