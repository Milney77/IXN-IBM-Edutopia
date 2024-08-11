import { CalculateResourcesStructure, CalculateResources, GenerateResources } from '../../utilities/resourceFunctions';
import * as resourceFunctions from '../../utilities/resourceFunctions';

// Test 1 - Does the resources per structure calculate correctly
describe('CalculateResourcesStructure', ()=> {

    it("should return 1 for a camp", () => {
         const result = CalculateResourcesStructure(1);
         expect(result).toEqual(1);
    });
    it("should return 1 for a house", () => {
         const result = CalculateResourcesStructure(2);
         expect(result).toEqual(1);
     });
     it("should return 2 for a village", () => {
         const result = CalculateResourcesStructure(3);
         expect(result).toEqual(2);
     });
     it("should return 2 for a castle", () => {
         const result = CalculateResourcesStructure(4);
         expect(result).toEqual(2);
     });
     it("should return zero for any other value (1)", () => {
        const result = CalculateResourcesStructure(0);
         expect(result).toEqual(0);
     });
     it("should return zero for any other value (2)", () => {
        const result = CalculateResourcesStructure(5);
         expect(result).toEqual(0);
     });
     it("should return zero for any other value (3)", () => {
        const result = CalculateResourcesStructure(-5);
         expect(result).toEqual(0);
     });
     
     // Clear all mocks to avoid mocked functions interferring with the actual function tests
    afterEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
    });
 });

// Test 2 - Are resources calculated from a tile list correctly?
describe('CalculateResources', () => {

    // Create a common set of tiles (which will be tweaked before each test)
    let tileList;
    beforeEach(()=>{
        tileList = [
            {id: 0, tileType: 'f', structure: 1, neighbourids: [1,2,3]}
          , {id: 1, tileType: 'm', structure: 2, neighbourids: [0,3,4]}
          , {id: 2, tileType: 'w', structure: 1, neighbourids: [0,3,5]}
          , {id: 3, tileType: 'w', structure: 1, neighbourids: [0,1,2,4,5,6]}
          , {id: 4, tileType: 'f', structure: 2, neighbourids: [1,3,6]}
          , {id: 5, tileType: 'm', structure: 0, neighbourids: [2,3,6]}
          , {id: 6, tileType: 'm', structure: 1, neighbourids: [3,4,5]}
        ]
    
        // Need a mockup of CalculateResourcesStructure (actually, this is the real function)
        jest.spyOn(resourceFunctions, 'CalculateResourcesStructure').mockImplementation((structure) => {
            const result = structure >= 3 ? 2 : structure >= 1 ? 1 : 0;
            return {result};
        });
    });

    

    // Test 1 - Does it calculate resources correctly for the tile list?
    it("should calculate resources correctly (test 1)", () => {
        const tileListAdj = tileList.filter((tile)=> tile.structure > 0);
        const result = CalculateResources(tileListAdj);
        expect(result.woodResource).toEqual(2)
        expect(result.foodResource).toEqual(2)
        expect(result.metalResource).toEqual(2)
    });

    // Test 2 - Change the tile list so all structures have campes
    it("should calculate resources correctly (test 2)", () => {
        tileList.forEach((tile) => {
            tile.structure = 1;
        })
        const tileListAdj = tileList.filter((tile)=> tile.structure > 0);
        const result = CalculateResources(tileListAdj);
        expect(result.woodResource).toEqual(2);
        expect(result.foodResource).toEqual(2);
        expect(result.metalResource).toEqual(3);
    });

       // Test 3 - Add some villages
       it ('should calculate resources correctly (test3)', () => {
        const tileList = [
            {id: 0, tileType: 'f', structure: 3, neighbourids: [1,2,3]}
          , {id: 1, tileType: 'm', structure: 2, neighbourids: [0,3,4]}
          , {id: 2, tileType: 'w', structure: 1, neighbourids: [0,3,5]}
          , {id: 3, tileType: 'w', structure: 3, neighbourids: [0,1,2,4,5,6]}
          , {id: 4, tileType: 'f', structure: 3, neighbourids: [1,3,6]}
          , {id: 5, tileType: 'm', structure: 2, neighbourids: [2,3,6]}
          , {id: 6, tileType: 'm', structure: 3, neighbourids: [3,4,5]}
        ];
        const tileListAdj = tileList.filter((tile)=> tile.structure > 0);
        const result = CalculateResources(tileListAdj);
        expect(result.woodResource).toEqual(3);
        expect(result.foodResource).toEqual(4);
        expect(result.metalResource).toEqual(4);
    });

    
    // Test 4 - What if center tile was a castle?
    it ('should calculate resources correctly when there is a caslte in the center (1)', () => {
        const tile = tileList.find(tile => tile.id === 3);
        if (tile) {
            tile.structure = 4;
        }
        const tileListAdj = tileList.filter((tile)=> tile.structure > 0);
        const result = CalculateResources(tileListAdj);
        expect(result.woodResource).toEqual(5);
        expect(result.foodResource).toEqual(4);
        expect(result.metalResource).toEqual(4);
    });

    // Test 5 - Center is a castle with new data:
    it ('should calculate resources correctly with a castle in the center (2)', () => {
        const tileList = [
            {id: 0, tileType: 'f', structure: 3, neighbourids: [1,2,3]}
          , {id: 1, tileType: 'm', structure: 2, neighbourids: [0,3,4]}
          , {id: 2, tileType: 'w', structure: 1, neighbourids: [0,3,5]}
          , {id: 3, tileType: 'w', structure: 4, neighbourids: [0,1,2,4,5,6]}
          , {id: 4, tileType: 'f', structure: 3, neighbourids: [1,3,6]}
          , {id: 5, tileType: 'm', structure: 2, neighbourids: [2,3,6]}
          , {id: 6, tileType: 'm', structure: 3, neighbourids: [3,4,5]}
        ];
        const tileListAdj = tileList.filter((tile)=> tile.structure > 0);
        const result = CalculateResources(tileListAdj);
        expect(result.woodResource).toEqual(5);
        expect(result.foodResource).toEqual(6);
        expect(result.metalResource).toEqual(7);
    });

    // Test 5 - What if top tile was a castle?
    it ('should calculate resources correctly when there is a caslte at the top', () => {
        const tile = tileList.find(tile => tile.id === 0);
        if (tile) {
            tile.structure = 4;
        }
        const tileListAdj = tileList.filter((tile)=> tile.structure > 0);
        const result = CalculateResources(tileListAdj);
        expect(result.woodResource).toEqual(4);
        expect(result.foodResource).toEqual(4);
        expect(result.metalResource).toEqual(3);
    });

    // Test 6 - Should return zero if tile types are not valid.
    it("should return zero if there are no structures on the tile list", () => {
        tileList.forEach((tile) => {
            tile.structure = 0;
        })
        const tileListAdj = tileList.filter((tile)=> tile.structure > 0);
        const result = CalculateResources(tileListAdj);
        expect(result.woodResource).toEqual(0);
        expect(result.foodResource).toEqual(0);
        expect(result.metalResource).toEqual(0);
    });

    // Clear all mocks to avoid mocked functions interferring with the actual function tests
    afterEach(() => {
        jest.clearAllMocks();
    });
});


// Test 3 - GenerateResources
describe('GenerateResources', () => {

    const mapData = [
            {id: 0, tileType: 'f', currentOwner: 1, structure: 1, neighbourids: [1,2,3]}
          , {id: 1, tileType: 'm', currentOwner: 1, structure: 2, neighbourids: [0,3,4]}
          , {id: 2, tileType: 'w', currentOwner: 1, structure: 1, neighbourids: [0,3,5]}
          , {id: 3, tileType: 'w', currentOwner: 1, structure: 1, neighbourids: [0,1,2,4,5,6]}
          , {id: 4, tileType: 'f', currentOwner: 1, structure: 2, neighbourids: [1,3,6]}
          , {id: 5, tileType: 'f', currentOwner: 0, structure: 0, neighbourids: [1,3,6]}
          , {id: 6, tileType: 'm', currentOwner: 1, structure: 1, neighbourids: [3,4,5]}
        ]

    const gamePlayData = {currentPlayer: 0};
    const playerData = [{id: 0, wood: 3, food: 2, metal: 1}
                      , {id: 1, wood: 99, food: 18, metal: 89}];

    // Need a mockup of CalculateResourcesStructure (actually, this is the real function)
    jest.spyOn(resourceFunctions, 'CalculateResources').mockImplementation((tilesList) => {
        return {woodResource: 2, foodResource: 2, metalResource: 2};
    });
    const UpdateGamePlayData = jest.fn();
    const UpdatePlayerData = jest.fn();
    const addLog = jest.fn();

    // Test 1 - it should call the right functions and have the right values to update player data with
    it('should trigger the right functions and update player data properly', () => {
        GenerateResources(gamePlayData, mapData, playerData, UpdatePlayerData, UpdateGamePlayData, addLog );
        expect(UpdatePlayerData).toHaveBeenCalled();
        expect(addLog).toHaveBeenCalled();
        const updates = UpdatePlayerData.mock.calls[0][0];
        expect(updates[0]).toEqual({ playerId: 0, dataToUpdate: { wood: 5, food: 4, metal: 3} }); // 2 camps (1), 1 house (2) and 1 village (3)
        expect(addLog).toHaveBeenCalledWith("Generating resources for Player 1 = Wood: 2, food: 2, metal: 2")
    });

    // Clear all mocks to avoid mocked functions interferring with the actual function tests
    afterEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
    });

});
