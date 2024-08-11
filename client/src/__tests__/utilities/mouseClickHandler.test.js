import { HandleMouseClick } from '../../utilities/mouseClickHandler';

describe('HandleMouseClick', () => {
    // This needs the resource costs
    jest.mock('../../constants/constants', () => ({
        house:    {wood: 0,  food: 2,  metal: 4,  tech: 0, },
        village:  {wood: 1,  food: 4,  metal: 8,  tech: 0, },
        castle:   {wood: 2,  food: 6,  metal: 12,  tech: 0, },
        takeover: {wood: 1,  food: 4,  metal: 1,  tech: 0, },
        expand:   {wood: 4,  food: 2,  metal: 0,  tech: 0, },
    }));

     // Common variables
     let boardData, mapData, playerData, UpdateGamePlayData, UpdateMapData, UpdatePlayerData, addCurrentInstruction, addLog, showOverlay, validateMove;
         
     beforeEach(() => {
       boardData = {}; // Not really needed for this function anymore
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
         { id: 0, compPlayer: 0, wood: 20, food: 20, metal: 20, tech: 4, vp: 6 }, 
         { id: 1, compPlayer: 1, wood: 20, food: 20, metal: 20, tech: 0, vp: 6 }, 
       ];
       UpdateGamePlayData = jest.fn();
       UpdateMapData = jest.fn();
       UpdatePlayerData = jest.fn();
       addCurrentInstruction = jest.fn();
       addLog = jest.fn();
       showOverlay = jest.fn();
       validateMove = jest.fn();
     });


     it("should do nothing if the current phase is not equal to 2", () => {
        const mousePos = {type:'am', id: 0};
        const gamePlayData = {numberPlayers: 2, currentPlayer: 0, currentPhase: 0, actionPhaseSet: -1};
        HandleMouseClick(mousePos, boardData, gamePlayData, mapData, playerData, UpdateGamePlayData, UpdateMapData, UpdatePlayerData, addCurrentInstruction, addLog, showOverlay, validateMove);
        // No functions should have been called
        expect(UpdateGamePlayData).not.toHaveBeenCalled();
        expect(UpdateMapData).not.toHaveBeenCalled();
        expect(UpdatePlayerData).not.toHaveBeenCalled();
        expect(addCurrentInstruction).not.toHaveBeenCalled();
        expect(addLog).not.toHaveBeenCalled();
        expect(showOverlay).not.toHaveBeenCalled();
        expect(validateMove).not.toHaveBeenCalled();
     })
     
     it("should do nothing if it is currently the computer players turn", () => {
        const mousePos = {type:'am', id: 0};
        const gamePlayData = {numberPlayers: 2, currentPlayer: 1, currentPhase: 2, actionPhaseSet: -1};
        HandleMouseClick(mousePos, boardData, gamePlayData, mapData, playerData, UpdateGamePlayData, UpdateMapData, UpdatePlayerData, addCurrentInstruction, addLog, showOverlay, validateMove);
        // No functions should have been called
        expect(UpdateGamePlayData).not.toHaveBeenCalled();
        expect(UpdateMapData).not.toHaveBeenCalled();
        expect(UpdatePlayerData).not.toHaveBeenCalled();
        expect(addCurrentInstruction).not.toHaveBeenCalled();
        expect(addLog).not.toHaveBeenCalled();
        expect(showOverlay).not.toHaveBeenCalled();
        expect(validateMove).not.toHaveBeenCalled();
     })

     it("should exit out of any actionphaseset > 0 if the user clicks the build button", () => {
        const mousePos = {type:'am', id: 0};
        const gamePlayData = [
            {numberPlayers: 2, currentPlayer: 0, currentPhase: 2, actionPhaseSet: 1},
            {numberPlayers: 2, currentPlayer: 0, currentPhase: 2, actionPhaseSet: 2},
            {numberPlayers: 2, currentPlayer: 0, currentPhase: 2, actionPhaseSet: 3},
            {numberPlayers: 2, currentPlayer: 0, currentPhase: 2, actionPhaseSet: 4},
        ];
        gamePlayData.forEach((gameStatus) => {
            HandleMouseClick(mousePos, boardData, gameStatus, mapData, playerData, UpdateGamePlayData, UpdateMapData, UpdatePlayerData, addCurrentInstruction, addLog, showOverlay, validateMove);
            expect(UpdateGamePlayData).toHaveBeenCalledWith('actionPhaseSet', -1);
        })
     });

     it("should exit out of any actionphaseset > 0 if the user clicks the expand button", () => {
        const mousePos = {type:'am', id: 1};
        const gamePlayData = [
            {numberPlayers: 2, currentPlayer: 0, currentPhase: 2, actionPhaseSet: 1},
            {numberPlayers: 2, currentPlayer: 0, currentPhase: 2, actionPhaseSet: 2},
            {numberPlayers: 2, currentPlayer: 0, currentPhase: 2, actionPhaseSet: 3},
            {numberPlayers: 2, currentPlayer: 0, currentPhase: 2, actionPhaseSet: 4},
        ];
        gamePlayData.forEach((gameStatus) => {
            HandleMouseClick(mousePos, boardData, gameStatus, mapData, playerData, UpdateGamePlayData, UpdateMapData, UpdatePlayerData, addCurrentInstruction, addLog, showOverlay, validateMove);
            expect(UpdateGamePlayData).toHaveBeenCalledWith('actionPhaseSet', -1);
        })
     });

     it("should exit out of any actionphaseset > 0 if the user clicks the takeover button", () => {
        const mousePos = {type:'am', id: 2};
        const gamePlayData = [
            {numberPlayers: 2, currentPlayer: 0, currentPhase: 2, actionPhaseSet: 1},
            {numberPlayers: 2, currentPlayer: 0, currentPhase: 2, actionPhaseSet: 2},
            {numberPlayers: 2, currentPlayer: 0, currentPhase: 2, actionPhaseSet: 3},
            {numberPlayers: 2, currentPlayer: 0, currentPhase: 2, actionPhaseSet: 4},
        ];
        gamePlayData.forEach((gameStatus) => {
            HandleMouseClick(mousePos, boardData, gameStatus, mapData, playerData, UpdateGamePlayData, UpdateMapData, UpdatePlayerData, addCurrentInstruction, addLog, showOverlay, validateMove);
            expect(UpdateGamePlayData).toHaveBeenCalledWith('actionPhaseSet', -1);
        })
     });

     it("should exit out of any actionphaseset > 0 if the user clicks the trade button", () => {
        const mousePos = {type:'am', id: 3};
        const gamePlayData = [
            {numberPlayers: 2, currentPlayer: 0, currentPhase: 2, actionPhaseSet: 1},
            {numberPlayers: 2, currentPlayer: 0, currentPhase: 2, actionPhaseSet: 2},
            {numberPlayers: 2, currentPlayer: 0, currentPhase: 2, actionPhaseSet: 3},
            {numberPlayers: 2, currentPlayer: 0, currentPhase: 2, actionPhaseSet: 4},
        ];
        gamePlayData.forEach((gameStatus) => {
            HandleMouseClick(mousePos, boardData, gameStatus, mapData, playerData, UpdateGamePlayData, UpdateMapData, UpdatePlayerData, addCurrentInstruction, addLog, showOverlay, validateMove);
            expect(UpdateGamePlayData).toHaveBeenCalledWith('actionPhaseSet', -1);
        })
     });
   
    // Clear all mocks to avoid mocked functions interferring with the actual function tests
    afterEach(() => {
        jest.clearAllMocks();
    });
});