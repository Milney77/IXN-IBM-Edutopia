import {calculateProductionRatios, calculateResourcesRatio, calculateResourceRatiosWithAdd, CalculateBestResource, calculateTakeOverRisk
        , ComputerRankActions, ComputerSelectAction, PerformAction} from '../../utilities/computerPlayerFunctions';
import * as computerPlayerFunctions from '../../utilities/computerPlayerFunctions';
import * as boardFunctions from '../../utilities/boardFunctions';

// Calculate Production Ratios Tests
// The CalculateResources function is needed for these tests, so create a jest mock-up of it.
import { CalculateResources } from '../../utilities/resourceFunctions';
jest.mock('../../utilities/resourceFunctions', () => ({
    CalculateResources: jest.fn(),
}));

describe('calculateProductionRatios', () => {
    // Test 1 - It should calculate ratios correctly (1)
    it('It should calculate ratios correct (test 1)', () => {
        // Note - This isn't really used, as this is the input to CalculateResources, and this test uses mock values returned from this function
        const tileList = {id: 0, tileType: 'w', structure: 1};
        CalculateResources.mockReturnValue({
            woodResource: 3,
            foodResource: 3,
            metalResource: 3,
          });
        const result = calculateProductionRatios(tileList);
        expect(result.total).toBe(9);
        expect(result.woodRatio).toBeCloseTo(1/3, 5);
        expect(result.foodRatio).toBeCloseTo(1/3, 5);
        expect(result.metalRatio).toBeCloseTo(1/3, 5);
      });


    // Test 2 - It should calculate ratios correctly (2)
    it('It should calculate ratios correct (test 2)', () => {
        const tileList = {id: 0, tileType: 'w', structure: 1};
        CalculateResources.mockReturnValue({
            woodResource: 5,
            foodResource: 3,
            metalResource: 2,
          });
        const result = calculateProductionRatios(tileList);
        expect(result.total).toBe(10);
        expect(result.woodRatio).toBeCloseTo(5/10, 5);
        expect(result.foodRatio).toBeCloseTo(3/10, 5);
        expect(result.metalRatio).toBeCloseTo(2/10, 5);
      });

      // Test 3 - It should not return an error if somehow the total production is zero (which never should happen)
    it('It should calculate ratios correct (test 2)', () => {
        const tileList = {id: 0, tileType: 'w', structure: 1};
        CalculateResources.mockReturnValue({
            woodResource: 0,
            foodResource: 0,
            metalResource: 0,
          });
        const result = calculateProductionRatios(tileList);
        expect(result.total).toBe(0);
        expect(result.woodRatio).toBe(0);
        expect(result.foodRatio).toBe(0);
        expect(result.metalRatio).toBe(0);
      });
      
    // Clear all mocks to avoid mocked functions interferring with the actual function tests
    afterEach(() => {
        jest.clearAllMocks();
    });

});
    

// Resource Ratio Change Test
describe('calculateResourcesRatio', () => {
    // Test 1 - It should calculate ratios correctly
    it('should calculate ratios correctly', () => {
        const targetRatios = {woodRatio: 1/3, foodRatio: 1/3, metalRatio: 1/3};
        const currProdPct  = {woodRatio: 2/4, foodRatio: 1/4, metalRatio: 1/4};
        const newProdPct   = {woodRatio: 2/5, foodRatio: 2/5, metalRatio: 1/5};
        const result = calculateResourcesRatio(targetRatios, currProdPct, newProdPct);
        const currScore = (2/4 - 1/3) ** 2 + (1/4 - 1/3) ** 2 + (1/4 - 1/3) ** 2;
        const newScore  = (2/5 - 1/3) ** 2 + (2/5 - 1/3) ** 2 + (1/5 - 1/3) ** 2;
        const diffScore = newScore - currScore;

        expect(result.changeScore).toBeCloseTo(diffScore, 5);
        expect(result.currScore).toBeCloseTo(currScore, 5);
        expect(result.newScore).toBeCloseTo(newScore, 5);
    });

    // Test 2 - It should calculate ratios correctly
    it('should calculate ratios correctly', () => {
        const targetRatios = {woodRatio: 5/12, foodRatio: 1/6, metalRatio: 5/12};
        const currProdPct  = {woodRatio: 1/2, foodRatio: 1/2, metalRatio: 0/2};
        const newProdPct   = {woodRatio: 1/3, foodRatio: 1/3, metalRatio: 1/3};
        const result = calculateResourcesRatio(targetRatios, currProdPct, newProdPct);
        const currScore = (1/2 - 5/12) ** 2 + (1/2 - 1/6) ** 2 + (0/2 - 5/12) ** 2;
        const newScore  = (1/3 - 5/12) ** 2 + (1/3 - 1/6) ** 2 + (1/3 - 5/12) ** 2;
        const diffScore = newScore - currScore;

        expect(result.changeScore).toBeCloseTo(diffScore, 5);
        expect(result.currScore).toBeCloseTo(currScore, 5);
        expect(result.newScore).toBeCloseTo(newScore, 5);
    });

    // Clear all mocks to avoid mocked functions interferring with the actual function tests
    afterEach(() => {
        jest.clearAllMocks();
    });
});

// Calculate Resource Ratios With Add test
describe('calculateResourceRatiosWithAdd', () => {
    // Common variables
    const resources = {wood: 2, food: 2, metal: 2};

    // Test 1 - Add 1 Wood
    it('should calculate the resource ratios correctly when adding wood', () => {
        const result = calculateResourceRatiosWithAdd(resources, 'wood', 1);
        const newWoodRatio = 3/7;
        const newFoodRatio = 2/7;
        const newMetalRatio = 2/7;
        expect(result.woodRatio).toBeCloseTo(newWoodRatio, 5);
        expect(result.foodRatio).toBeCloseTo(newFoodRatio, 5);
        expect(result.metalRatio).toBeCloseTo(newMetalRatio, 5);
    });

    // Test 2 - Add 1 Metal
    it('should calculate the resource ratios correctly when adding metal', () => {
        const result = calculateResourceRatiosWithAdd(resources, 'metal', 1);
        const newWoodRatio = 2/7;
        const newFoodRatio = 2/7;
        const newMetalRatio = 3/7;
        expect(result.woodRatio).toBeCloseTo(newWoodRatio, 5);
        expect(result.foodRatio).toBeCloseTo(newFoodRatio, 5);
        expect(result.metalRatio).toBeCloseTo(newMetalRatio, 5);
    });

    // Test 3 - Add 1 Food
    it('should calculate the resource ratios correctly when adding food', () => {
        const result = calculateResourceRatiosWithAdd(resources, 'food', 1);
        const newWoodRatio = 2/7;
        const newFoodRatio = 3/7;
        const newMetalRatio = 2/7;
        expect(result.woodRatio).toBeCloseTo(newWoodRatio, 5);
        expect(result.foodRatio).toBeCloseTo(newFoodRatio, 5);
        expect(result.metalRatio).toBeCloseTo(newMetalRatio, 5);
    });

    // Test 4 -  Don't add anything if the resource to add isn't 'wood', 'food' or 'metal'
    it('should calculate the resource ratios correctly when not adding anything', () => {
        const result = calculateResourceRatiosWithAdd(resources, 'not a resource', 1);
        const newWoodRatio = 2/6;
        const newFoodRatio = 2/6;
        const newMetalRatio = 2/6;
        expect(result.woodRatio).toBeCloseTo(newWoodRatio, 5);
        expect(result.foodRatio).toBeCloseTo(newFoodRatio, 5);
        expect(result.metalRatio).toBeCloseTo(newMetalRatio, 5);
    });

    // Clear all mocks to avoid mocked functions interferring with the actual function tests
    afterEach(() => {
        jest.clearAllMocks();
    });

});



// Calculate Best Resource
describe('CalculateBestResource', () => {
    // This test needs some mockups of the ai parameters
    jest.mock('../../constants/constants', () => [
        { strat: 'expand', resourceRatios: { wood: 4/6 , food: 2/6, metal: 0/6 } },
        { strat: 'build' , resourceRatios: { wood: 0/6 , food: 2/6, metal: 4/6 } },
        { strat: 'mixed' , resourceRatios: { wood: 2/6 , food: 2/6, metal: 2/6 } },
    ]);

    // Common resources to use    
    const resources = {wood: 2, food: 1, metal: 3};
    // Test 1 - expand strategy
    it('should return wood for expand strategy', () => {
        jest.spyOn(computerPlayerFunctions, 'calculateResourceRatiosWithAdd').mockImplementation((resources, resourceToAdd, validToAdd) => {
            switch (resourceToAdd) {
              case 'none':  return { wood: 2/6, food: 1/6, metal: 3/6 };
              case 'wood':  return { wood: 3/7, food: 1/7, metal: 3/7 };
              case 'food':  return { wood: 2/7, food: 2/7, metal: 3/7 };
              case 'metal': return { wood: 2/7, food: 1/7, metal: 4/7 };
            }
        jest.spyOn(computerPlayerFunctions, 'calculateResourcesRatio').mockImplementation((targetRatios, currRatio, newRatio) => {
            if (newRatio.wood  === 2/5) return { newScore: ((3/7 - 4/6)**2 + (1/7-2/6)**2 + (3/7-0/6)**2) };
            if (newRatio.food  === 2/5) return { newScore: ((2/7 - 4/6)**2 + (2/7-2/6)**2 + (3/7-0/6)**2) };
            if (newRatio.metal === 2/5) return { newScore: ((2/7 - 4/6)**2 + (1/7-2/6)**2 + (4/7-0/6)**2) };
            });
        const result = CalculateBestResource(resources, 'expand');
        expect(result).toBe('wood');
        });
    });
    // Test 2 - Build strategy
    it('should return metal for build strategy', () => {
        jest.spyOn(computerPlayerFunctions, 'calculateResourceRatiosWithAdd').mockImplementation((resources, resourceToAdd, validToAdd) => {
            switch (resourceToAdd) {
              case 'none':  return { wood: 2/6, food: 1/6, metal: 3/6 };
              case 'wood':  return { wood: 3/7, food: 1/7, metal: 3/7 };
              case 'food':  return { wood: 2/7, food: 2/7, metal: 3/7 };
              case 'metal': return { wood: 2/7, food: 1/7, metal: 4/7 };
            }
        jest.spyOn(computerPlayerFunctions, 'calculateResourcesRatio').mockImplementation((targetRatios, currRatio, newRatio) => {
            if (newRatio.wood  === 2/5) return { newScore: ((3/7 - 0/6)**2 + (1/7-2/6)**2 + (3/7-4/6)**2) };
            if (newRatio.food  === 2/5) return { newScore: ((2/7 - 0/6)**2 + (2/7-2/6)**2 + (3/7-4/6)**2) };
            if (newRatio.metal === 2/5) return { newScore: ((2/7 - 0/6)**2 + (1/7-2/6)**2 + (4/7-4/6)**2) };
            });
        const result = CalculateBestResource(resources, 'build');
        expect(result).toBe('metal');
        });
    });
    // Test 3 - Mixed Strategy
    it('should return food for mixed strategy', () => {
        jest.spyOn(computerPlayerFunctions, 'calculateResourceRatiosWithAdd').mockImplementation((resources, resourceToAdd, validToAdd) => {
            switch (resourceToAdd) {
              case 'none':  return { wood: 2/6, food: 1/6, metal: 3/6 };
              case 'wood':  return { wood: 3/7, food: 1/7, metal: 3/7 };
              case 'food':  return { wood: 2/7, food: 2/7, metal: 3/7 };
              case 'metal': return { wood: 2/7, food: 1/7, metal: 4/7 };
            }
        jest.spyOn(computerPlayerFunctions, 'calculateResourcesRatio').mockImplementation((targetRatios, currRatio, newRatio) => {
            if (newRatio.wood  === 2/5) return { newScore: ((3/7 - 2/6)**2 + (1/7-2/6)**2 + (3/7-20/6)**2) };
            if (newRatio.food  === 2/5) return { newScore: ((2/7 - 2/6)**2 + (2/7-2/6)**2 + (3/7-2/6)**2) };
            if (newRatio.metal === 2/5) return { newScore: ((2/7 - 2/6)**2 + (1/7-2/6)**2 + (4/7-2/6)**2) };
            });
        const result = CalculateBestResource(resources, 'mixed');
        expect(result).toBe('food');
        });
    });

    // Clear all mocks to avoid mocked functions interferring with the actual function tests
    afterEach(() => {
        jest.clearAllMocks();
    });

});



// calculateTakeOverRisk
describe('calculateTakeOverRisk', () => {
    let mapData;
    beforeEach(() => {
        mapData = [
            {id: 1, currentOwner: 2, structure: 1, startSquare: 0, neighbourids: [0]}
        , {id: 2, currentOwner: 2, structure: 1, startSquare: 0, neighbourids: [0]}
        , {id: 3, currentOwner: 3, structure: 1, startSquare: 0, neighbourids: [0]}
        , {id: 4, currentOwner: 3, structure: 1, startSquare: 0, neighbourids: [0]}
        , {id: 5, currentOwner: 3, structure: 1, startSquare: 0, neighbourids: [0]}
        , {id: 6, currentOwner: 4, structure: 1, startSquare: 0, neighbourids: [0]}
            ]
    })
    
    it('should return no risk if tile has a castle on it', () => {
        const tileData = {id: 0, currentOwner: 1, structure: 4, startSquare: 0, neighbourids: [1,2,3,4,5,6]}
        mapData.push(tileData);
        const result = calculateTakeOverRisk(tileData, mapData, 0);
        expect(result).toEqual( [[], 0] );
    });

    it('should return no risk if tile is players starting tile', () => {
        const tileData = {id: 0, currentOwner: 1, structure: 1, startSquare: 1, neighbourids: [1,2,3,4,5,6]}
        mapData.push(tileData);
        const result = calculateTakeOverRisk(tileData, mapData, 0);
        expect(result).toEqual( [[], 0] );
    });

    it('should return correct results from tile array when 2 players have greater strength & 1 player has equal strength', () => {
        const tileData = {id: 0, currentOwner: 1, structure: 1, startSquare: 0, neighbourids: [1,2,3,4,5,6]}
        mapData.push(tileData);
        const result = calculateTakeOverRisk(tileData, mapData, 0);
        expect(result).toEqual( [{'1': 1, '2': 2, '3' : 3, '4' : 1}, 3] );
    });

    it('should return correct results from tile array when 1 player have greater strength & 1 player has equal strength', () => {
        const tileData = {id: 0, currentOwner: 1, structure: 2, startSquare: 0, neighbourids: [1,2,3,4,5,6]}
        mapData.push(tileData);
        const result = calculateTakeOverRisk(tileData, mapData, 0);
        expect(result).toEqual( [{'1': 2, '2': 2, '3' : 3, '4' : 1}, 2] );
    });

    it('should return correct results from tile array when 1 player has equal strength', () => {
        const tileData = {id: 0, currentOwner: 1, structure: 3, startSquare: 0, neighbourids: [1,2,3,4,5,6]}
        mapData.push(tileData);
        const result = calculateTakeOverRisk(tileData, mapData, 0);
        expect(result).toEqual( [{'1': 3, '2': 2, '3' : 3, '4' : 1}, 1] );
    });

    it('should return correct results from tile array when no player has equal strength', () => {
        const tileData = {id: 0, currentOwner: 1, structure: 3, startSquare: 0, neighbourids: [1,2,3,4,5,6]}
        mapData = [ {id: 1, currentOwner: 2, structure: 1, startSquare: 0, neighbourids: [0]}
                  , {id: 2, currentOwner: 2, structure: 1, startSquare: 0, neighbourids: [0]}
                 , {id: 3, currentOwner: 3, structure: 1, startSquare: 0, neighbourids: [0]}
                 , {id: 4, currentOwner: 3, structure: 1, startSquare: 0, neighbourids: [0]}
                 , {id: 5, currentOwner: 0, structure: 0, startSquare: 0, neighbourids: [0]}
                 , {id: 6, currentOwner: 4, structure: 1, startSquare: 0, neighbourids: [0]}]
        mapData.push(tileData);
        const result = calculateTakeOverRisk(tileData, mapData, 0);
        expect(result).toEqual( [{'1': 3, '2': 2, '3' : 2, '4' : 1}, 0] );
    });

    // Clear all mocks to avoid mocked functions interferring with the actual function tests
    afterEach(() => {
        jest.clearAllMocks();
    });
});


// ComputerSelectAction
describe('ComputerSelectAction', () => {
    // This needs the resource costs
    jest.mock('../../constants/constants', () => ({
        house:    {wood: 0,  food: 2,  metal: 4,  tech: 0, },
        village:  {wood: 1,  food: 3,  metal: 6,  tech: 0, },
        castle:   {wood: 2,  food: 4,  metal: 8,  tech: 0, },
        takeover: {wood: 2,  food: 4,  metal: 2,  tech: 0, },
        expand:   {wood: 4,  food: 2,  metal: 0,  tech: 0, },
    }));

    // Common variables for the test
    let scoredActions, boardData, mapData, playerData, gamePlayData;
    beforeEach(() => {
        scoredActions = [
              {id: 0, action: 'build'    , expAllow: true , expCost: {wood: 0, food: 2, metal: 4,  tech: 0}, expResourceCalcs: {wood: 4, food: 2 , metal: 0 , shortfall: 0  }, expReason: "na"}
            , {id: 1, action: 'build'    , expAllow: false, expCost: {wood: 1, food: 3, metal: 6,  tech: 0}, expResourceCalcs: {wood: 3, food: 1 , metal: -2, shortfall: -2 }, expReason: "Maximum number of Villages (1) reached" }
            , {id: 2, action: 'expand'   , expAllow: true , expCost: {wood: 4, food: 2, metal: 0,  tech: 0}, expResourceCalcs: {wood: 0, food: 2 , metal: 4 , shortfall: 0  }, expReason: "na"} 
            , {id: 3, action: 'takeover' , expAllow: true , expCost: {wood: 2, food: 4, metal: 2,  tech: 0}, expResourceCalcs: {wood: 2, food: 0 , metal: 2 , shortfall: 0  }, expReason: "na" }
            , {id: 4, action: 'takeover' , expAllow: false, expCost: {wood: 2, food: 4, metal: 2,  tech: 0}, expResourceCalcs: {wood: 2, food: 0 , metal: 2,  shortfall: 0  }, expReason: "Cannot take over a players' starting square"}
            , {id: 5, action: 'expand'   , expAllow: true , expCost: {wood: 4, food: 2, metal: 0,  tech: 0}, expResourceCalcs: {wood: 0, food: 2 , metal: 4,  shortfall: 0  }, expReason: "na"}
            , {id: 6, action: 'build'    , expAllow: false, expCost: {wood: 2, food: 4, metal: 8, tech: 0}, expResourceCalcs: {wood: 2, food: 0, metal: -4, shortfall: -10}, expReason: "Not enough resources" }
            ];

        boardData = {maxVillages: 1}
        mapData = [
                      {id: 0, currentOwner: 1, structure: 1, startSquare: 1, neighbourids: [1,2,3,4,5,6]}  
                    , {id: 1, currentOwner: 1, structure: 2, startSquare: 0, neighbourids: [0, 2, 6]}
                    , {id: 2, currentOwner: 0, structure: 0, startSquare: 0, neighbourids: [0, 1, 3]}
                    , {id: 3, currentOwner: 2, structure: 1, startSquare: 0, neighbourids: [0, 2, 4]}
                    , {id: 4, currentOwner: 2, structure: 1, startSquare: 1, neighbourids: [0, 3, 5]}
                    , {id: 5, currentOwner: 0, structure: 0, startSquare: 0, neighbourids: [0, 4, 6]}
                    , {id: 6, currentOwner: 1, structure: 3, startSquare: 0, neighbourids: [0, 5, 1]}
                        ];
        playerData = [{id: 0, wood: 4, food: 4, metal: 4, tech: 0}];
        gamePlayData = {currentPlayer: 0};
    });

     // Test 1 - It should add specified parameters to the actions list
     it('should add parameters to the action list', () => {
        jest.spyOn(boardFunctions, 'ValidateMove').mockImplementation((actiontype, hexid, boardData, mapData, currentPlayer, numberPlayers) => {
            return {isAllowed: true, disallowReason:'na'};
        });
        const selActions = ComputerSelectAction(scoredActions, boardData, mapData, playerData, gamePlayData);
        selActions.forEach(action => {
            expect(action).toHaveProperty('actionAllowed');
            expect(action).toHaveProperty('actionDisallowReason');
            expect(action).toHaveProperty('actionCost');
            expect(action).toHaveProperty('availableResources');
            expect(action).toHaveProperty('resourceCalcs');
        });
    })

    // Test2 - It should correctly calculate everything
    it('should correctly calculate everything', () => {
        jest.spyOn(boardFunctions, 'ValidateMove').mockImplementation((actiontype, hexid, boardData, mapData, currentPlayer, numberPlayers) => {
            let isAllowed, disallowReason;
            if      (hexid === 0) {isAllowed = true;  disallowReason = 'na';}
            else if (hexid === 1) {isAllowed = false; disallowReason = "Maximum number of Villages (1) reached";}
            else if (hexid === 2) {isAllowed = true;  disallowReason = 'na';}
            else if (hexid === 3) {isAllowed = true;  disallowReason ='na';}
            else if (hexid === 4) {isAllowed = false; disallowReason = "Cannot take over a players' starting square";}
            else if (hexid === 5) {isAllowed = true;  disallowReason = 'na';}
            else if (hexid === 6) {isAllowed = false; disallowReason = "Not enough resources";}
            return {isAllowed: isAllowed, disallowReason: disallowReason};
        });
        const selActions = ComputerSelectAction(scoredActions, boardData, mapData, playerData, gamePlayData);
        selActions.forEach((action) => {
            expect(action.actionAllowed).toEqual(action.expAllow);
            expect(action.actionDisallowReason).toEqual(action.expReason);
            expect(action.actionCost).toEqual(action.expCost);
            expect(action.availableResources).toEqual( {wood: 4, food: 4, metal: 4, tech: 0});
            //expect(action.resourceCalcs).toEqual(action.expResourceCalcs);
        });

    });

    // Clear all mocks to avoid mocked functions interferring with the actual function tests
    afterEach(() => {
        jest.clearAllMocks();
    });
});
    
// PerformAction
describe('PerformAction', () => {
    // Common variables
    let boardData, gamePlayData, mapData, playerData, UpdateGamePlayData, UpdatePlayerData, addCurrentInstruction, addLog;
    beforeEach(() => {
      boardData = {}; // Not really needed for this function anymore
      gamePlayData = {
        currentPlayer: 0,
        numberPlayers: 2,
      };
      mapData = [
        { id: 0, currentOwner: 1, structure: 2 },
        { id: 1, currentOwner: 1, structure: 3 },
        { id: 2, currentOwner: 1, structure: 1 },
        { id: 3, currentOwner: 0, structure: 0 },
        { id: 4, currentOwner: 2, structure: 2 },
        { id: 5, currentOwner: 2, structure: 3 },
        { id: 6, currentOwner: 2, structure: 1 },
      ];
      playerData = [
        { id: 0, wood: 20, food: 20, metal: 20, tech: 4, vp: 6 }, 
        { id: 1, wood: 20, food: 20, metal: 20, tech: 0, vp: 6 }, 
      ];
      UpdateMapData = jest.fn();
      UpdatePlayerData = jest.fn();
      UpdateGamePlayData = jest.fn();
      addLog = jest.fn();
    });

    it('Taking over a square should trigger the right functions and adjust map & player data appropriately', () => {
        const bestAction = {action: 'takeover', id: 4, actionCost: {wood: 1, food: 4, metal: 1, tech: 0}}
        PerformAction(bestAction, boardData, mapData, playerData, gamePlayData, UpdateMapData, UpdatePlayerData, UpdateGamePlayData, addLog);
        expect(UpdatePlayerData).toHaveBeenCalled();
        const updates = UpdatePlayerData.mock.calls[0][0];
        expect(updates[0]).toEqual({ playerId: 0, dataToUpdate: { wood:19, food:16, metal: 19, tech: 4} }); 
        expect(UpdateMapData).toHaveBeenCalledWith(4, 'currentOwner', 1);
        expect(UpdateMapData).toHaveBeenCalledWith(4, 'structure', 1);
        expect(addLog).toHaveBeenCalledWith('Player 1 has taken over hex 4');
    });

    it('Expanding to an empty hex should trigger the right functions and adjust data appropriately', () => {
        const bestAction = {action: 'expand', id: 3, actionCost: {wood: 4, food: 2, metal: 0, tech: 0}}
        PerformAction(bestAction, boardData, mapData, playerData, gamePlayData, UpdateMapData, UpdatePlayerData, UpdateGamePlayData, addLog);
        expect(UpdatePlayerData).toHaveBeenCalled();
        const updates = UpdatePlayerData.mock.calls[0][0];
        expect(updates[0]).toEqual({ playerId: 0, dataToUpdate: { wood:16, food:18, metal: 20, tech: 4} }); 
        expect(UpdateMapData).toHaveBeenCalledWith(3, 'currentOwner', 1);
        expect(UpdateMapData).toHaveBeenCalledWith(3, 'structure', 1);
        expect(addLog).toHaveBeenCalledWith('Player 1 has developed hex 3');
    });

    it('Building a house should trigger the right functions and adjust data appropriately', () => {
        const bestAction = {action: 'build', id: 2, actionCost: {wood: 0, food: 2, metal: 4, tech: 0}}
        PerformAction(bestAction, boardData, mapData, playerData, gamePlayData, UpdateMapData, UpdatePlayerData, UpdateGamePlayData, addLog);
        expect(UpdatePlayerData).toHaveBeenCalled();
        const updates = UpdatePlayerData.mock.calls[0][0];
        expect(updates[0]).toEqual({ playerId: 0, dataToUpdate: { wood:20, food:18, metal: 16, tech: 4} }); 
        expect(UpdateMapData).toHaveBeenCalledWith(2, 'structure', 2);
        expect(addLog).toHaveBeenCalledWith('Player 1 has built a House on hex 2');
    });

    it('Building a village should trigger the right functions and adjust data appropriately', () => {
        const bestAction = {action: 'build', id: 0, actionCost: {wood: 1, food: 4, metal: 8, tech: 0}}
        PerformAction(bestAction, boardData, mapData, playerData, gamePlayData, UpdateMapData, UpdatePlayerData, UpdateGamePlayData, addLog);
        expect(UpdatePlayerData).toHaveBeenCalled();
        const updates = UpdatePlayerData.mock.calls[0][0];
        expect(updates[0]).toEqual({ playerId: 0, dataToUpdate: { wood:19, food:16, metal: 12, tech: 4} }); 
        expect(UpdateMapData).toHaveBeenCalledWith(0, 'structure', 3);
        expect(addLog).toHaveBeenCalledWith('Player 1 has built a Village on hex 0');
    });
   
    it('Building a castle should trigger the right functions and adjust data appropriately', () => {
        const bestAction = {action: 'build', id: 1, actionCost: {wood: 2, food: 6, metal: 12, tech: 0}}
        PerformAction(bestAction, boardData, mapData, playerData, gamePlayData, UpdateMapData, UpdatePlayerData, UpdateGamePlayData, addLog);
        expect(UpdatePlayerData).toHaveBeenCalled();
        const updates = UpdatePlayerData.mock.calls[0][0];
        expect(updates[0]).toEqual({ playerId: 0, dataToUpdate: { wood:18, food:14, metal: 8, tech: 4} }); 
        expect(UpdateMapData).toHaveBeenCalledWith(1, 'structure', 4);
        expect(addLog).toHaveBeenCalledWith('Player 1 has built a Castle on hex 1');
    });

    // Clear all mocks to avoid mocked functions interferring with the actual function tests
    afterEach(() => {
        jest.clearAllMocks();
    });
});

