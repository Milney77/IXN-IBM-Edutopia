// Required imports
import React, { useRef, useEffect, useState, useCallback, useLayoutEffect, useContext } from 'react';

// Custom imports
import './App.css';

import { DrawBoard } from './components/gameBoardRenderer';
import { mouseXY_to_HexID } from './components/gameBoardListener';
import { DimensionsContext } from './components/dimensionsContext';

import ConfirmationOverlay from './components/confirmationOverlay';
import TradeOverlay from './components/tradeOverlay';

import { resourceCosts, aiparameters } from './constants/constants';


// Game Board
const GameBoardCanvas = ({ images, gameComponents, addLog, addCurrentInstruction, exitToTitle }) => {
  // Break the gameComponents into their individual components
  const {boardData, mapData, playerData, gamePlayData, UpdateMapData, UpdatePlayerData, UpdateGamePlayData } = gameComponents; 
  // BOARD DISPLAY VARIABLES - These are just how much the board is offset from the edges of the canvas
  const tilesHOffset = 1;
  const tilesVOffset = 0.25;

  // Set up the canvas - the width & height are dependent on the window size
  const canvasRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(null);
  const [canvasHeight, setCanvasHeight] = useState(null);

  // Tile dimensions - depend on board & screen size, so again, use states to handle them
  const [tileWidth, setTileWidth] = useState(null);
  const [tileHeightFull, setTileHeightFull] = useState(null);
  const [tileHeightTrim, setTileHeightTrim] = useState(null);
  const [actionMenuParams, setActionMenuParams] = useState(null);

  // Flag for if its the computers turn, and if its the resource generating phase
  const [isComputersTurn, setIsComputersTurn] = useState(false);
  const [generatingResourcesFlag, setGeneratingResourcesFlag] = useState(false);

  // -------------------------------------------------------------------- //
  // ----------------------------- OVERLAYS ----------------------------- //
  // CONFIRMATION OF PLAYER ACTION //
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayContent, setOverlayContent] = useState({text: '', cost: '', onConfirm: null, isInfo: false });
  // Show the overlay - need to know what to show (sometimes show resources, sometimes is just a message saying you can't do that)
  const showOverlay = useCallback((text, cost, onConfirm, isInfo = false) => {
    setOverlayContent({ text, cost, onConfirm, isInfo });
    setOverlayVisible(true);
  }, []);
  // Player clicks confirm
  const handleConfirm = useCallback(() => {
    if (overlayContent.onConfirm) {
      overlayContent.onConfirm();
    }
    setOverlayVisible(false);
  }, [overlayContent]);
  // Player clicks cancel
  const handleCancel = useCallback(() => {
    setOverlayVisible(false);
    // Go back to the main action menu 
    UpdateGamePlayData('actionPhaseSet', -1);
  }, [UpdateGamePlayData]);

  // TRADING WITH THE BANK //
  const [tradeOverlayVisible, setTradeOverlayVisible] = useState(false);
  // Show the overlay
  const showTradeOverlay = useCallback((playerData, onConfirm, onCancel) => {
    setTradeOverlayVisible(true);
  }, []);
  // Function to confirm trade and adjust player resources
  const handleTradeConfirm = useCallback((tradedResources) => {
      // Player is trading
      const { outWood, outFood, outMetal, outTech, inWood, inFood, inMetal } = tradedResources;
      console.log('outWood:', outWood, ', outFood:', outFood, ', outMetal:', outMetal, ', outTech:', outTech, ', inWood:', inWood, ', inFood:', inFood, ', inMetal:', inMetal);
      const currentPlayer = gamePlayData.currentPlayer;
      // Deduct resources from player
      const playerDataUpdates = [{
            playerId: gamePlayData.currentPlayer
            , dataToUpdate: {
                wood:  playerData[currentPlayer].wood  - outWood  + inWood
              , food:  playerData[currentPlayer].food  - outFood  + inFood
              , metal: playerData[currentPlayer].metal - outMetal + inMetal
              , tech:  playerData[currentPlayer].tech - outTech
            }
      }]
      UpdatePlayerData(playerDataUpdates);
      // Add to log
      const logTxt = `Player ${gamePlayData.currentPlayer + 1} traded: [${outWood ? outWood + ' wood, ' : ''
                    }${outFood ? outFood + ' food, ' : ''}${outMetal ? outMetal + ' metal, ' : ''}${outTech ? outTech + ' tech, ' : ''
                    }] for [${inWood ? inWood + ' wood, ' : ''}${inFood ? inFood + ' food, ' : ''}${inMetal ? inMetal + ' metal, ' : ''}]`;
      addLog(logTxt);
      UpdateGamePlayData('actionPhaseSet', -1);
      setTradeOverlayVisible(false);
    },
    // Dependencies and functions needed.
    [UpdatePlayerData, gamePlayData.currentPlayer, playerData, addLog, UpdateGamePlayData]
  );
  // Trade has been cancelled
  const handleTradeCancel = useCallback(() => {
    UpdateGamePlayData('actionPhaseSet', -1);
    setTradeOverlayVisible(false);
    // Go back to the main action menu 
    UpdateGamePlayData('actionPhaseSet', -1);
  }, [UpdateGamePlayData]);

  // Generated resources flag to make sure it only happens once per turn per player.
  const [generatedResources, setGeneratedResources] = useState(false);

  // --------------------------------------------------------------------- //
  // ----------------------------- FUNCTIONS ----------------------------- //
  // Initialise all the data needed to display the board.
  const BoardInitialisation = useCallback((mapData, boardData, tileWidth, tileHeight_full, tileHeight_trim) => {
    // Now using the map data object, let's add the x and y coordinates for the tile (assuming its a rectangle),
    // and the 6 coordinates that define the hexagon
    for (var i = 0; i < mapData.length; i++) {
      const tileData = mapData[i];
      var xpos;
      if ((tileData.row % 2 === 0 && boardData.evenRowCols > boardData.oddRowCols) || (tileData.row % 2 === 1 && boardData.evenRowCols < boardData.oddRowCols)) {
        // It is a longer row, so only apply half the horizontal offset
        xpos = tileWidth * (0.5 * tilesHOffset) + tileData.col * tileWidth;
      } else {
        // Its a shorter row, so apply the full horizontal offset
        xpos = tileWidth * (1.0 * tilesHOffset) + tileData.col * tileWidth;
      }
      var ypos = tileWidth * tilesVOffset + tileData.row * tileHeight_trim;

      // Save this information
      mapData[i].xPos = [xpos, tileWidth];
      mapData[i].yPos = [ypos, tileHeight_full, tileHeight_trim];
      // Get the verticies of the hex
      mapData[i].xHexVert = [xpos, xpos + tileWidth / 2, xpos + tileWidth, xpos + tileWidth, xpos + tileWidth / 2, xpos];
      mapData[i].yHexVert = [ypos + tileHeight_full * 1 / 4, ypos, ypos + tileHeight_full * 1 / 4
                          , ypos + tileHeight_full * 3 / 4, ypos + tileHeight_full, ypos + tileHeight_full * 3 / 4];
      // Set the hover flag to zero
      mapData[i].hover = 0;

      // Determine neighbours
      const neighbours_sameRow = mapData.filter((tile) => tile.row === tileData.row && (tile.col + 1 === tileData.col || tile.col - 1 === tileData.col)  && tile.tileType !== 's');
      var neighbours_diffRow;
      if ((boardData.evenRowCols > boardData.oddRowCols && mapData[i].row % 2 === 0) || (boardData.evenRowCols < boardData.oddRowCols && mapData[i].row % 2 === 1)) {
        // Row is one of the longer rows
        neighbours_diffRow = mapData.filter((tile) => (tile.row + 1 === tileData.row || tile.row - 1 === tileData.row) && (tile.col === tileData.col || tile.col + 1 === tileData.col) && tile.tileType !== 's');
      } else {
        neighbours_diffRow = mapData.filter((tile) => (tile.row + 1 === tileData.row || tile.row - 1 === tileData.row) && (tile.col === tileData.col || tile.col - 1 === tileData.col) && tile.tileType !== 's');
      }
      // Have created the list of tiles - convert these to a list of indexes (indicies?)
      mapData[i].neighbourids = [...neighbours_sameRow.map((tile) => tile.id), ...neighbours_diffRow.map((tile) => tile.id)];
      } 
    }, []);

// Function to handle mouse clicks
  // This may need to be split or something.  Its getting a bit long...
  const handleMouseClick = useCallback(  (mousePos, gamePlayData, mapData, playerData
    , UpdateGamePlayData, UpdateMapData, UpdatePlayerData, addCurrentInstruction, addLog, showOverlay) => {
  const currentPlayer = gamePlayData.currentPlayer;
  const currentPlayerOwnership = currentPlayer + 1;
  var cost;
  var hexid;

  if (gamePlayData.currentPhase !== 2) {
  // Nothing needs to be done, until phase 2, the only click is handled by the PlayerDisplay section.

  // SECTION 1 -- USING PRESSING AN ACTION BUTTON (WHILE NO OTHER ACTION STATUS IS IN EFFECT, actionPhaseSet === -1)
  } else if (mousePos.type === 'am' && gamePlayData.actionPhaseSet === -1) {
    
  // User has clicked on an action
  if (mousePos.id === 1) {
  // Build on player's own hex
  UpdateGamePlayData('actionPhaseSet', 1);
  } else if (mousePos.id === 2) {
  // Build on an adjacent hex
  UpdateGamePlayData('actionPhaseSet', 2);
  } else if (mousePos.id === 3) {
  // Build on an adjacent hex
  UpdateGamePlayData('actionPhaseSet', 3);
  } else if (mousePos.id === 4) {
  // Trade
  UpdateGamePlayData('actionPhaseSet', 4);
  } else if (mousePos.id === 5) {
  // End turn
  addLog('Player ' + (gamePlayData.currentPlayer + 1) + ' has ended their turn.');
  UpdateGamePlayData('actionPhaseSet', -1);
  UpdateGamePlayData('currentPhase', 0);
  if (currentPlayerOwnership === gamePlayData.numberPlayers) {
  UpdateGamePlayData('currentPlayer', 0);
  UpdateGamePlayData('currentTurn', gamePlayData.currentTurn + 1);
  } else {
  UpdateGamePlayData('currentPlayer', gamePlayData.currentPlayer + 1);
  }
  }

  // SECTION 2 - AFTER PLAYER HAS CLICKED AN ACTION MENU BUTTON
  // BUILDING ON PLAYER OWNED HEXES
  } else if (gamePlayData.actionPhaseSet === 1) {
  if (mousePos.type === 'hex' && mapData[mousePos.id].actionable === 1) {
  // Player has selected one of their own hexes to develop.
  hexid = mousePos.id;
  if (mapData[hexid].structure === 4) {
  // Error - cannot build any more - display a message
  showOverlay('Cannot build any more on this hex.', null, null, true);
  UpdateGamePlayData('actionPhaseSet', -1);
  } else {
  // Determine costs for development
  const structNames = ['House', 'Village', 'Castle'];
  const structCosts = [resourceCosts.house, resourceCosts.village, resourceCosts.castle];
  cost = structCosts[mapData[hexid].structure - 1];
  var structureName = structNames[mapData[hexid].structure - 1];
  // Check if player has enough resources
  if (
  playerData[currentPlayer].wood < cost.wood ||
  playerData[currentPlayer].food < cost.food ||
  playerData[currentPlayer].metal < cost.metal ||
  playerData[currentPlayer].tech < cost.tech
  ) {
  showOverlay('Insufficient resources to build on this hex.', cost, null, true);
  UpdateGamePlayData('actionPhaseSet', -1);
  } else {
  const onConfirm = () => {
  // Player is building on this hex
  // Deduct resources from player
  const playerDataUpdates = [{
  playerId: gamePlayData.currentPlayer
  , dataToUpdate: {
  wood:  playerData[currentPlayer].wood  - cost.wood
  , food:  playerData[currentPlayer].food  - cost.food
  , metal: playerData[currentPlayer].metal - cost.metal
  , tech:  playerData[currentPlayer].tech -  cost.tech
  }
  }]
  UpdatePlayerData(playerDataUpdates);
  // Update the board data
  UpdateMapData(hexid, 'structure', (mapData[hexid].structure += 1));
  // Add to log
  var logTxt = 'Player ' + (currentPlayer + 1) + ' has built a ' + structureName + ' on hex ' + hexid;
  addLog(logTxt);
  UpdateGamePlayData('actionPhaseSet', -1);
  };
  showOverlay('Do you want to build on this hex?', cost, onConfirm, false);
  }
  }
  } else {
  UpdateGamePlayData('actionPhaseSet', -1);
  }
  // END OF BUILDING ON OWN HEXES

  // DEVELOP NEIGHBOURING HEXES
  } else if (gamePlayData.actionPhaseSet === 2) {
  if (mousePos.type === 'hex' && mapData[mousePos.id].actionable === 2) {
  // Player is developing hex.
  hexid = mousePos.id;
  cost = resourceCosts.expand;
  // Check if player has sufficient resources
  if (
  playerData[currentPlayer].wood < cost.wood ||
  playerData[currentPlayer].food < cost.food ||
  playerData[currentPlayer].metal < cost.metal ||
  playerData[currentPlayer].tech < cost.tech
  ) {
  showOverlay('Insufficient resources to develop this hex.', cost, null, true);
  UpdateGamePlayData('actionPhaseSet', -1);
  } else {
  console.log('HexID:', hexid, 'CurrPlayer idx:', currentPlayer, 'CurrOwnership:', currentPlayerOwnership);
  const onConfirm = () => {
  // Player is developing this hex
  // Deduct resources from player
  const playerDataUpdates = [{
  playerId: gamePlayData.currentPlayer
  , dataToUpdate: {
  wood:  playerData[currentPlayer].wood  - cost.wood
  , food:  playerData[currentPlayer].food  - cost.food
  , metal: playerData[currentPlayer].metal - cost.metal
  , tech:  playerData[currentPlayer].tech -  cost.tech
  }
  }]
  UpdatePlayerData(playerDataUpdates);
  // Update the board data
  UpdateMapData(hexid, 'currentOwner', currentPlayerOwnership);
  UpdateMapData(hexid, 'structure', 1);
  // Add to log
  var logTxt = 'Player ' + (currentPlayer + 1) + ' has developed hex ' + hexid;
  addLog(logTxt);
  UpdateGamePlayData('actionPhaseSet', -1);
  };
  showOverlay('Do you want to build on this hex?', cost, onConfirm, false);
  console.log(mapData[hexid]);
  }
  } else if (mousePos.type === 'hex' && mapData[mousePos.id].tileType === 's') {
  showOverlay('Cannot develop sea tiles.', null, null, true);
  UpdateGamePlayData('actionPhaseSet', -1);
  } else {
  // Player has clicked somewhere else.
  UpdateGamePlayData('actionPhaseSet', -1);
  }

  // TAKING OVER OTHER PLAYER HEXES //
  } else if (gamePlayData.actionPhaseSet === 3) {
  if (mousePos.type === 'hex' && mapData[mousePos.id].actionable === 3) {
  // Player is taking over an opposing player's hex.
  hexid = mousePos.id;
  cost = resourceCosts.takeover;

  // Checks for which hexes the player can take over
  let notTakeOverable = 0;
  let notTakeOverableReason = '';
  let attackPlayerStruct = 0;
  let defendPlayerStruct = mapData[hexid].structure;
  mapData[hexid].neighbourids.forEach((tileid)=>{
  if (mapData[tileid].currentOwner === (gamePlayData.currentPlayer + 1)) {
  attackPlayerStruct += mapData[tileid].structure;
  } else if (mapData[tileid].currentOwner === (mapData[hexid].currentOwner)) {
  defendPlayerStruct += mapData[tileid].structure;
  }
  })
  console.log(attackPlayerStruct, defendPlayerStruct)

  if (mapData[hexid].structure === 4) {
  notTakeOverable = 1;
  notTakeOverableReason = 'Cannot take over castles';
  } else if (mapData[hexid].startSquare !== 0 && mapData[hexid].startSquare <= gamePlayData.numberPlayers) {
  notTakeOverable = 1;
  notTakeOverableReason = 'Cannot take over a starting square';
  } else if (attackPlayerStruct <= defendPlayerStruct) {
  notTakeOverable = 1;
  notTakeOverableReason = 'Cannot take over square - Defender has equal or higher structure count ('+ defendPlayerStruct +') in hex neighbourhood than attacker ('+attackPlayerStruct+')';
  }

  // Check if player has sufficient resources
  if (
  playerData[currentPlayer].wood < (cost.wood) ||
  playerData[currentPlayer].food < (cost.food) ||
  playerData[currentPlayer].metal < (cost.metal) ||
  playerData[currentPlayer].tech < (cost.tech)
  ) {
  showOverlay('Insufficient resources to take over this hex.', cost, null, true);
  UpdateGamePlayData('actionPhaseSet', -1);
  } else if (notTakeOverable === 1) {
  showOverlay(notTakeOverableReason, null, null, true);
  UpdateGamePlayData('actionPhaseSet', -1);
  } else {
  console.log('HexID:', hexid, 'CurrPlayer idx:', currentPlayer, 'CurrOwnership:', currentPlayerOwnership);
  const onConfirm = () => {
  // Player is developing this hex
  // Deduct resources from player
  const playerDataUpdates = [{
  playerId: gamePlayData.currentPlayer
  , dataToUpdate: {
  wood:  playerData[currentPlayer].wood  - cost.wood
  , food:  playerData[currentPlayer].food  - cost.food
  , metal: playerData[currentPlayer].metal - cost.metal
  , tech:  playerData[currentPlayer].tech -  cost.tech
  }
  }]
  UpdatePlayerData(playerDataUpdates);
  // Update the board data
  UpdateMapData(hexid, 'currentOwner', currentPlayerOwnership);
  UpdateMapData(hexid, 'structure', Math.max(1, mapData[hexid].structure - 1));
  // Add to log
  var logTxt = 'Player ' + (currentPlayer + 1) + ' has taken over hex ' + hexid;
  addLog(logTxt);
  UpdateGamePlayData('actionPhaseSet', -1);
  };
  showOverlay('Do you want to take over this hex?', cost, onConfirm, false);
  //console.log(mapData[hexid]);
  }
  } else {
  // Player has clicked somewhere else.
  UpdateGamePlayData('actionPhaseSet', -1);
  }
  }
  }, [UpdateGamePlayData, UpdateMapData, UpdatePlayerData, addCurrentInstruction, addLog, showOverlay] );

  // Simple function to calculate resources based on structures - makes it easy to change :)
  const calculateResourcesStructure = (structure) => {
    if (structure === 1) {
      return 1;
    } else if (structure === 2) {
      return 2;
    } else if (structure === 3) {
      return 3;
    } else if (structure === 4) {
      return 4;
    } else {
      return 0;
    }
  };

  // Function to calculate the resources generated from a players tiles.
  const calculateResources = (tilesList) => {
    // Calculate how much resources should be gained
    let wood = 0;
    let food = 0;
    let metal = 0;

    // Loop through the player tiles
    tilesList.forEach((tile) => {
      if (tile.tileType === 'w') {
        wood += calculateResourcesStructure(tile.structure);
      } else if (tile.tileType === 'f') {
        food += calculateResourcesStructure(tile.structure);
      } else if (tile.tileType === 'm') {
        metal += calculateResourcesStructure(tile.structure);
      }
    });

    return {woodResource: wood, foodResource: food, metalResource: metal};
  };


  // Generate Resources (current player)
  const generateResources = useCallback( (gamePlayData, mapData, playerData, UpdatePlayerData, UpdateGamePlayData, addLog ) => {
      const currentPlayer = gamePlayData.currentPlayer;
      const playerTiles = mapData.filter((tile) => tile.currentOwner === currentPlayer + 1);
      // Calculate how much resources should be gained
      const {woodResource, foodResource, metalResource} = calculateResources(playerTiles);
      const logTxt = 'Generating resources for Player ' + (currentPlayer + 1) + ' = Wood: ' + woodResource + ', food: ' + foodResource + ', metal: ' + metalResource;
      const playerDataUpdates = [{
        playerId: gamePlayData.currentPlayer
        , dataToUpdate: {
            wood:  playerData[currentPlayer].wood  + woodResource
          , food:  playerData[currentPlayer].food  + foodResource
          , metal: playerData[currentPlayer].metal + metalResource
        }
      }]
      UpdatePlayerData(playerDataUpdates);
      addLog(logTxt);
    },
    [UpdatePlayerData, UpdateGamePlayData, addLog, calculateResources]
  );

  const ReturnToMainMenu = () => {
    exitToTitle(true);
  }

  // Function to calculate victory points
  const calculateVictoryPoints = useCallback((boardData, gamePlayData, mapData, playerData, UpdateGamePlayData, UpdatePlayerData) => {
      // Re-calculate victory points for all players (just in case a player has taken over other player hexes, have to do this for everyone
      const currentPlayer = gamePlayData.currentPlayer;
      const playerDataUpdates = [];
      // Flag to check whether an update needs to be applied to playerData
      let needsUpdate = false;
      // Loop through all players, and adjust victory points as required
      for (var currPlayer = 0; currPlayer < gamePlayData.numberPlayers; currPlayer++) {
        // Get the set of player tiles
        const playerTiles = mapData.filter((tile) => tile.currentOwner === (currPlayer + 1));
        // Set victory points to the number of tiles they own
        let victoryPoints = playerTiles.length;
        // Now add victory points based on what structures they have
        playerTiles.forEach((tile) => {
          if (tile.structure === 1) {
            victoryPoints += 0;
          } else if (tile.structure === 2) {
            victoryPoints += 1;
          } else if (tile.structure === 3) {
            victoryPoints += 2;
          } else if (tile.structure === 4) {
            victoryPoints += 3;
          }
        });
        console.log('VICTORY POINTS CALCULATIONS - current player: ', currPlayer, ', tiles:', playerTiles.length, ', VPs:', victoryPoints);
        // Check if victory points have changed for a player - if so, push that player & data to the playerDataUpdates array.
        if (playerData[currPlayer].vp !== victoryPoints) {
          // This player needs their vp updated
          playerDataUpdates.push({
            playerId: currPlayer
            , dataToUpdate: { vp: victoryPoints }
          }); 
          // Flag that an update needs to happen
          needsUpdate = true;
        }
      }

      // Update player data with all necessary updates
      if (needsUpdate) {
          console.log(playerData, playerDataUpdates)
          UpdatePlayerData(playerDataUpdates);
      }

      // Now check if the current player has won the game
      if (playerData[currentPlayer].vp >= boardData.victoryPoints) {
        UpdateGamePlayData('currentPhase', 4);
        UpdateGamePlayData('winner', (currentPlayer + 1));
        addCurrentInstruction('Player ' + (currentPlayer + 1) + ' has won the game!')
        addLog('Player ' + (currentPlayer + 1) + ' has won the game!')
      }

    },
    [boardData, gamePlayData, mapData, UpdateGamePlayData, UpdatePlayerData]
  );

  
  // Calculate hex status for actions (just to make things consistent and simpler)
  const calculateHexStatus = useCallback((currentPlayer, mapData) => {
    // Now, flag each hex as follows:
    // 1 - Hex is owned by player
    // 2 - Empty hex adjacent to a player hex
    // 3 - Other player controlled hex adjacent to player hex
    // 0 - Otherwise
    const playerTiles = mapData.filter((tile) => tile.currentOwner === currentPlayer + 1);
    // Get a list of all hexes adjacent to player hexes
    const allNeighbours = playerTiles.flatMap((hex) => hex.neighbourids);
    // Select all hex not owned by anyone
    const emptyTiles = mapData.filter((tile) => allNeighbours.includes(tile.id) && tile.currentOwner === 0);
    // Select neighbourhood hexes owned by other players
    const oppositionTiles = mapData.filter((tile) => allNeighbours.includes(tile.id) && tile.currentOwner > 0 && tile.currentOwner !== currentPlayer + 1
    );
    // Assign a value to each hex
    mapData.forEach((tile) => {
      if (playerTiles.map((tile) => tile.id).includes(tile.id)) {
        tile.actionable = 1;
      } else if (emptyTiles.map((tile) => tile.id).includes(tile.id)) {
        tile.actionable = 2;
      } else if (oppositionTiles.map((tile) => tile.id).includes(tile.id)) {
        tile.actionable = 3;
      } else {
        tile.actionable = 0;
      }
    });
  }, []);



  
  const calculateProductionRatios = (tileList) => {
    const {woodResource, foodResource, metalResource} = calculateResources(tileList);
    const totalResourcesProd = (woodResource + foodResource + metalResource);
    return {total: totalResourcesProd, woodRatio: woodResource/totalResourcesProd, foodRatio: foodResource/totalResourcesProd, metalRatio: metalResource/totalResourcesProd};
  }

  const calculateResourcesRatio = (targetRatios, currProdPct, newProdPct) => {
    const currWoodDiff = (currProdPct.woodRatio - targetRatios.woodRatio);
    const currFoodDiff = (currProdPct.foodRatio - targetRatios.foodRatio);
    const currMetalDiff = (currProdPct.metalRatio - targetRatios.metalRatio);
    const newWoodDiff = (newProdPct.woodRatio - targetRatios.woodRatio);
    const newFoodDiff = (newProdPct.foodRatio - targetRatios.foodRatio);
    const newMetalDiff = (newProdPct.metalRatio - targetRatios.metalRatio);
    const currScore = currWoodDiff ** 2 + currFoodDiff ** 2 + currMetalDiff ** 2;
    const newScore = newWoodDiff ** 2 + newFoodDiff ** 2 + newMetalDiff ** 2;
    return {changeScore: newScore - currScore, currScore: currScore, newScore: newScore};
  }

  const calculateTakeOverRisk = (tiledata, mapData, currentPlayer) => {
    // Set up the player strength object
    const playerStructStrength = {};
    
    // If any other player has a structure strength equal to the player strength, then 
    // that hex is as risk of being taken over
    if (tiledata.Structure === 4 || tiledata.startSquare === (currentPlayer + 1)) {
      // Tile either has a castle on it, or is the player's starting square.  No risk.
      return [[], 0, 0];  
    } else {
      // Go through all the neighbours:
      if (tiledata.neighbourids) {
        const tileids = [...tiledata.neighbourids];
        tileids.push(tiledata.id);
        //console.log('Running tile: ', tiledata.id, ' and returns tileids:', tileids);
        // Cycle through the ids, adding to the playerStructStrength object.
        tileids.forEach((tileid) => {
          const tileOwner = mapData[tileid].currentOwner;
          const tileStruct = mapData[tileid].structure;
          if (tileOwner !== 0) {
            if (!playerStructStrength[tileOwner]) {
              playerStructStrength[tileOwner] = 0;
            }
            playerStructStrength[tileOwner] += tileStruct;
          }
        });
      }
      //console.log('playerstructstrength:',playerStructStrength);
      
      const playerStrength = playerStructStrength[(currentPlayer+1)];
      // Now get counts for the number of players with a structure strength equal to, and greater than the current player
      let equalStrengthCount = 0;
      let greaterStrengthCount = 0;
      Object.entries(playerStructStrength).forEach(([player, strength]) => {
        if (parseInt(player) !== (currentPlayer + 1)) {
          if (strength === playerStrength) {
            equalStrengthCount += 1;
          } else if (strength > playerStrength) {
            greaterStrengthCount += 1;
          }
        }
      });

      return [playerStructStrength, equalStrengthCount, greaterStrengthCount];

    }
   
  }

  const computerRankActions = (boardData, mapData, playerData, gamePlayData) => {
    console.log('Ranking actions!')
    // Just extract some commonly used values from the input objects
    const currentPlayer = gamePlayData.currentPlayer;
    const currPlayerData = playerData[currentPlayer];
    //console.log(currPlayerData.diff, currPlayerData.strat, aiparameters);

    // Get some parameters from the ai strategy
    const targetRatios = aiparameters.find(param => param.strat === currPlayerData.strat).resourceRatios;
    const minTiles = aiparameters.find(param => param.strat === currPlayerData.strat).minTiles;
    const structureToHexRatio = aiparameters.find(param => param.strat === currPlayerData.strat).structureToHexRatio;
    const buildWeight = aiparameters.find(param => param.strat === currPlayerData.strat).buildWeight;
    const expandWeight = aiparameters.find(param => param.strat === currPlayerData.strat).expandWeight;
    //console.log('AI Params: target ratios', targetRatios,', minTiles:', minTiles, ', StHRatio: ', structureToHexRatio, ', B+E Weights :[', buildWeight, ',', expandWeight, ']')
    // CALCULATIONS
    // Get the hex ids for hexes that the AI player controls, their neighbours, and the neighbours of their neighbours
    const playerTiles = mapData.filter((tile) => tile.currentOwner === (currentPlayer + 1));
    // Get all neighbours of player tiles
    const neighbourTiles = mapData.filter((tile) => playerTiles.flatMap((hex) => hex.neighbourids).includes(tile.id) && !playerTiles.flatMap((hex)=>hex.id).includes(tile.id));
    // And the neighbours of neighbours
    const nextToNeighbourTiles = mapData.filter((tile) => neighbourTiles.flatMap((hex) => hex.neighbourids).includes(tile.id) 
                                                      && !playerTiles.flatMap((hex)=>hex.id).includes(tile.id)
                                                      && !neighbourTiles.flatMap((hex)=>hex.id).includes(tile.id));
    //console.log('Player tiles:', playerTiles, 'NeighbourTiles:', neighbourTiles, 'nextToNeighbourTiles:', nextToNeighbourTiles)

    // TILE RANKINGS
    // This goes the player tiles and adjacent tiles, working out scores relating to:
    // 1 - Change in resource production
    // 2 - Risk of being taken over by another player
    // 3 - Chance of taking over another player's hex

    // Get the resource production ratios and total amount of resources
    const currProdPct = calculateProductionRatios(playerTiles);
    
    
    // PLAYER TILES - ADD SCORES
    const playerTilesWithScores = playerTiles.map((tile) => {
      // PRODUCTION CHANGE SCORE
      const newTile = {...tile, structure: tile.structure === 4 ? 4 : tile.structure + 1};
      // Create a new array with the current tile replaced by the newTile
      const newPlayerTiles = playerTiles.map(t => t.id === tile.id ? newTile : t);
      // Upgrade the structure on the current tile
      const newProdPct = calculateProductionRatios(newPlayerTiles);
      // How does this improve the resources?
      const resourceTotalChange = newProdPct.total - currProdPct.total;
      const resourcesRatioChange = calculateResourcesRatio(targetRatios, currProdPct, newProdPct);
      //console.log('Tile: ', tile.id, ', Orig Prod:', currProdPct, ', New Prod:', newProdPct, 'total change: ', resourceTotalChange, ', ratio change: ', resourcesRatioChange);
      // RISK OF BEING TAKEN OVER BY ANOTHER PLAYER
      // Before building
      const takeOverRisk_prebuild = calculateTakeOverRisk(tile, mapData, currentPlayer);
      const takeOverRisk_pstbuild = calculateTakeOverRisk(newTile, mapData, currentPlayer);
      // Now determine the structure to hex ratio
      const structureValue = newPlayerTiles.reduce((sum, tile) => sum + tile.structure, 0);
      const hexValue = newPlayerTiles.length;
      return {...tile, action: 'build',  structureValue: structureValue, hexValue: hexValue
            , scoreResourceTotalChange: resourceTotalChange, scoreResourceRatioChange: -1 * resourcesRatioChange.changeScore
            , takeOverRisk_prebuild:  takeOverRisk_prebuild, takeOverRisk_pstbuild: takeOverRisk_pstbuild}
    })
    //console.log(playerTilesWithScores);

    // Now, rank each neighbour tile to see how it improves resource production
    const neighbourTilesWithScores = neighbourTiles.map((tile=>{
        const newTile = {...tile, structure: 1, currentOwner: currentPlayer + 1};
        const newPlayerTiles = [...playerTiles, newTile];
        const newProdPct = calculateProductionRatios(newPlayerTiles);
        // How does this improve the resources?
        const resourceTotalChange = newProdPct.total - currProdPct.total;
        const resourcesRatioChange = calculateResourcesRatio(targetRatios, currProdPct, newProdPct);
        // RISK OF BEING TAKEN OVER BY ANOTHER PLAYER
        const takeOverRisk_prebuild = calculateTakeOverRisk(newTile, mapData, currentPlayer);
        // And what is the risk if the player was to build a house on the tile
        const newTileBuild = {...tile, structure: 2}
        const takeOverRisk_pstbuild = calculateTakeOverRisk(newTileBuild, mapData, currentPlayer);
        // Now determine the structure to hex ratio
        const structureValue = newPlayerTiles.reduce((sum, tile) => sum + tile.structure, 0);
        const hexValue = newPlayerTiles.length; 
        // Flag for if this building on an empty hex or taking over another player's hex
        const action = tile.currentOwner === 0 ? 'expand' : 'takeover';
        //console.log('Tile: ', tile.id, ', Orig Prod:', currProdPct, ', New Prod:', newProdPct, 'total change: ', resourceTotalChange, ', ratio change: ', resourcesRatioChange);
        return {...tile, action: action,  structureValue: structureValue, hexValue: hexValue
                        , scoreResourceTotalChange: resourceTotalChange, scoreResourceRatioChange: -1 * resourcesRatioChange.changeScore
                        , takeOverRisk_prebuild:  takeOverRisk_prebuild, takeOverRisk_pstbuild: takeOverRisk_pstbuild}
    }))
    //console.log(neighbourTilesWithScores);

    // Combine these arrays
    const allActions = [...playerTilesWithScores, ...neighbourTilesWithScores];

    const allActionsRanked = allActions.map((action => {
      // Create a score
      // Weights:
      const scoreWeights = [1, 1, 0, 1, 1, 1];
    
      // Weight 1 - How many tiles short are they from their minimum
      const w1_tileCountWeight = (action.hexValue <= minTiles && action.action !== 'build') ? 7 : 0;

      // Now, check how this action will improve the structure to tile ratio
      const w2_structurehexratio = -1 * Math.abs((action.structureValue / action.hexValue) - structureToHexRatio);;

      const w3_resourcesTotal = action.scoreResourceTotalChange;

      const w4_resourcesRatio = Math.min(1, Math.max(-1, action.scoreResourceRatioChange));

      const w5_takeoverRisk1 = (action.takeOverRisk_prebuild[1] > 0 && action.takeOverRisk_pstbuild[2] === 0) ? -1 : (action.takeOverRisk_pstbuild[2] > 0 ? -2 : 0)

      const w6_actionType = action.action === 'takeover' ? 3 : action.action === 'build' ? buildWeight : expandWeight;

      const finalScore = w1_tileCountWeight * scoreWeights[0]
                     + w2_structurehexratio * scoreWeights[1]
                     + w3_resourcesTotal * scoreWeights[2]
                     + w4_resourcesRatio * scoreWeights[3]
                     + w5_takeoverRisk1 * scoreWeights[4]
                     + w6_actionType * scoreWeights[5];

      // And add a random number for resolving ties
      const randomNumber = Math.random();

      return {...action, componentScores: [w1_tileCountWeight, w2_structurehexratio, w3_resourcesTotal, w4_resourcesRatio, w5_takeoverRisk1, w6_actionType], finalScore: finalScore, randomiser: randomNumber};
    }))

    // Now sort actions in descending score order
    const allActionsSorted = allActionsRanked.slice().sort((a,b) => {
      if (b.finalScore !== a.finalScore) {
        return b.finalScore - a.finalScore;
      } else {
        // Final scores are the same, so sort using the randomiser
        return b.randomiser - a.randomiser;
      }
    })
    //console.log('Actions sorted:', allActionsSorted)
    return allActionsSorted;
    
  }

  // 
  const computerSelectAction = (scoredactions, mapData, playerData, gamePlayData) => {
    const currentPlayer = gamePlayData.currentPlayer;
    // Cycle through the actions to flag what ones can be achieved
    var actionAllowed;
    var actionDisallowReason;
   
    const sortedActionsSelect = scoredactions.map((action => {
      const cost = (action.action === 'takeover') ? resourceCosts.takeover : 
                   (action.action === 'expand') ? resourceCosts.expand :
                   (action.action === 'build' && mapData[action.id].structure === 1) ? resourceCosts.house :
                   (action.action === 'build' && mapData[action.id].structure === 2) ? resourceCosts.village :
                   (action.action === 'build' && mapData[action.id].structure === 3) ? resourceCosts.castle : 0;
      const wooddiff  = playerData[currentPlayer].wood  - cost.wood;
      const fooddiff  = playerData[currentPlayer].food  - cost.food;
      const metaldiff = playerData[currentPlayer].metal - cost.metal;
      const enoughResources = (wooddiff >= 0 && fooddiff >= 0 && metaldiff >= 0) ? 1 : 0;
      // Check how close they are
      const shortfall = Math.min(0, wooddiff) + Math.min(0, fooddiff) + Math.min(0, metaldiff);
    

      // Determine what actions are feasible
      if (action.action === 'takeover') {
       // Check if the player can actually take over the hex
       const attackPlayer = currentPlayer + 1;
       const defendPlayer = mapData[action.id].currentOwner;
       let attackPlayerStruct = 0;
       let defendPlayerStruct = mapData[action.id].structure;
       mapData[action.id].neighbourids.forEach((tileid)=> {
          if (mapData[tileid].currentOwner === attackPlayer) {
            attackPlayerStruct += mapData[tileid].structure;
          } else if (mapData[tileid].currentOwner === defendPlayer) {
            defendPlayerStruct += mapData[tileid].structure;
          }
       }) 

       // Can this tile be taken over?
       if (mapData[action.id].structure === 4) {
          actionAllowed = false
          actionDisallowReason = "Can't take over castles"
       } else if (mapData[action.id].startingSquare  <= gamePlayData.numberPlayers) {
          actionAllowed = false
          actionDisallowReason = "Can't take over starting squares"
       } else if (attackPlayerStruct <= defendPlayerStruct) {
          actionAllowed = false
          actionDisallowReason = "Defender has more structures in neighbourhood than attacker - A vs D: [" + attackPlayerStruct + "," + defendPlayerStruct + "]";
       } else if (enoughResources === 0) {
          actionAllowed = false
          actionDisallowReason = "Not enough resources";
       } else {
          actionAllowed = true;
          actionDisallowReason = 'na';
          }
      }

      else if (action.action === 'build') {
        if (mapData[action.id].structure === 4) {
          actionAllowed = false
          actionDisallowReason = "Can't build beyond a castle"
        } else if (enoughResources === 0) {
          actionAllowed = false
          actionDisallowReason = "Not enough resources";
        } else {
          actionAllowed = true;
          actionDisallowReason = 'na';
          }
      }

      else if (action.action === 'expand') {
        if (enoughResources === 0) {
          actionAllowed = false
          actionDisallowReason = "Not enough resources";
        } else {
          actionAllowed = true;
          actionDisallowReason = 'na';
          }
      }
      
      return {...action, actionAllowed: actionAllowed, actionDisallowReason:actionDisallowReason, actionCost: {wood:cost.wood, food:cost.food, metal:cost.metal, tech:cost.tech}, 
              availableResources: {wood: playerData[currentPlayer].wood, food: playerData[currentPlayer].food, metal: playerData[currentPlayer].metal, tech: playerData[currentPlayer].tech},
              resourceCalcs: {wood: wooddiff, food: fooddiff, metal: metaldiff, shortfall: shortfall}
            }
    }))
    //console.log('Actions allowed:', sortedActionsSelect)
    return sortedActionsSelect;
  }
  
  const performAction = (bestAction, boardData, mapData, playerData, gamePlayData, UpdateMapData, UpdatePlayerData, UpdateGamePlayData, addLog) => {
    const currentPlayer = gamePlayData.currentPlayer;
    const hexid = bestAction.id;

    
  // Determine change to player resources 
    const playerDataUpdates = [{
        playerId: currentPlayer
        , dataToUpdate: {
            wood:  playerData[currentPlayer].wood  - (bestAction.action === 'pass' ? 0 : bestAction.actionCost.wood)
          , food:  playerData[currentPlayer].food  - (bestAction.action === 'pass' ? 0 : bestAction.actionCost.food)
          , metal: playerData[currentPlayer].metal - (bestAction.action === 'pass' ? 0 : bestAction.actionCost.metal)
          , tech:  playerData[currentPlayer].tech  - (bestAction.action === 'pass' ? 0 : bestAction.actionCost.tech)
        }
      }]
    console.log(playerDataUpdates);

    if (bestAction.action === 'takeover') {
        UpdatePlayerData(playerDataUpdates);
        // Update the board data
        UpdateMapData(hexid, 'currentOwner', (currentPlayer + 1));
        UpdateMapData(hexid, 'structure', Math.max(1, mapData[hexid].structure - 1));
        // Add to log
        var logTxt = 'Player ' + (currentPlayer + 1) + ' has taken over hex ' + hexid;
        addLog(logTxt);
    } else if  (bestAction.action === 'expand') {
        UpdatePlayerData(playerDataUpdates);
        // Update the board data
        UpdateMapData(hexid, 'currentOwner', (currentPlayer + 1));
        UpdateMapData(hexid, 'structure', 1);
        // Add to log
        var logTxt = 'Player ' + (currentPlayer + 1) + ' has developed hex ' + hexid;
        addLog(logTxt);
    } else if (bestAction.action === 'build') {
        UpdatePlayerData(playerDataUpdates);
        // Update the board data
        UpdateMapData(hexid, 'structure', (mapData[hexid].structure += 1));
        // Add to log
        const structureName = ['Camp', 'House', 'Village', 'Castle'][mapData[hexid].structure + 1];
        var logTxt = 'Player ' + (currentPlayer + 1) + ' has built a ' + structureName + ' on hex ' + hexid;
        addLog(logTxt);
    } else if (bestAction.action === 'pass') {
      addLog('Player ' + (gamePlayData.currentPlayer + 1) + ' has ended their turn.');
      UpdateGamePlayData('actionPhaseSet', -1);
      UpdateGamePlayData('currentPhase', 0);
      if ((currentPlayer + 1) === gamePlayData.numberPlayers) {
      UpdateGamePlayData('currentPlayer', 0);
      UpdateGamePlayData('currentTurn', gamePlayData.currentTurn + 1);
      } else {
      UpdateGamePlayData('currentPlayer', gamePlayData.currentPlayer + 1);
      }
    }
  }

  // ---------------------------------------------------------------------------------- //
  // ----------------------------- DYNAMIC CANVAS EFFECTS ----------------------------- //
  const updateDimensions = useCallback(() => {
    const canvas = canvasRef.current;

    if (!canvas) return; // Ensure canvas is available

    // Some constants
    const widthHeightRatio = 16 / 7.3;
    const tileHeightRatioFull = 288.0 / 250.0;
    const tileHeight_trimmRatio = 0.87;

    const canvasWidthBase = window.innerWidth;
    const canvasHeightBase = window.innerHeight;
    // Canvas Width:  Either the inner window width, or calculated from the window height (which ever is smaller)
    // Canvas Height: Either the inner window height, or calculated from the window width (which ever is smaller)
    //const canvasWidth = Math.min(canvasWidthBase, Math.floor(canvasHeightBase * widthHeightRatio));
    //const canvasHeight = Math.min(canvasHeightBase, Math.floor(canvasWidthBase * (1 / widthHeightRatio)));
    const canvasWidth = canvasWidthBase;
    const canvasHeight = Math.floor(canvasWidthBase / widthHeightRatio);
    setCanvasWidth(canvasWidth);
    setCanvasHeight(canvasHeight);

    const newTileWidth = Math.floor(canvasWidth / (Math.max(boardData.evenRowCols, boardData.oddRowCols) + 1));
    const newTileHeightFull = Math.floor(newTileWidth * tileHeightRatioFull);
    const newTileHeightTrim = Math.floor(newTileWidth * tileHeight_trimmRatio);
    setTileWidth(newTileWidth);
    setTileHeightFull(newTileHeightFull);
    setTileHeightTrim(newTileHeightTrim);

    const playerInfoWidth = canvasWidth / gamePlayData.numberPlayers;
    const customMargin = playerInfoWidth <= 200 ? 1 : playerInfoWidth <= 300 ? 1 : playerInfoWidth <= 400 ? 1.5 : 2;
    const actionMenuWidth = Math.floor(canvasWidth / 4);
    const actionMenuHeight = Math.floor(actionMenuWidth / 6);
    const playerBoxWidth = Math.floor(canvasWidth / gamePlayData.numberPlayers);
    const newActionMenuParams = {
      width: actionMenuWidth,
      height: actionMenuHeight,
      playerBoxWidth: playerBoxWidth,
      customMargin: customMargin,
      xOffset1: 16,
      xOffset2: 0.18,
      yOffset: 1,
      iconSize: 0.9,
      iconOffset: 0.25,
      iconHover: [0, 0, 0, 0, 0, 0]
    };
    setActionMenuParams(newActionMenuParams);
  }, [boardData, gamePlayData.numberPlayers]);

  // UseLayoutEffect - this is needed to trigger the update dimensions on the initial render (so not when a user re-sizes the window)
  useLayoutEffect(() => {
    updateDimensions();
  }, [updateDimensions]);

  // Add listeners for when the screen is resized or fullscreen status changes
  //useEffect(() => {
  //  window.addEventListener('resize', updateDimensions);
  //  document.addEventListener('fullscreenchange', updateDimensions);
  //  return () => {
  //    window.removeEventListener('resize', updateDimensions);
  //    document.removeEventListener('fullscreenchange', updateDimensions);
  //  };
  //}, [updateDimensions]);

  const { width, height } = useContext(DimensionsContext);
  useEffect(() => {
    updateDimensions();
  }, [width, height]);

  // --------------------------------------------------------------------- //
  // ----------------------------- GAME LOOP ----------------------------- //

  const initialMount = useRef(true);

  const [isComputerThinking, setIsComputerThinking] = useState(false);
  useEffect(() => {

    if (initialMount.current) {
      initialMount.current = false;
      return;
    }

// Function for the ai:
const executeComputerAction = (boardData, mapData, playerData, gamePlayData) => {
  setIsComputerThinking(true);
  const scoredactions = computerRankActions(boardData, mapData, playerData, gamePlayData);
  const availableActions = computerSelectAction(scoredactions, mapData, playerData, gamePlayData);
  const possibleActions = availableActions.filter(action => action.actionAllowed === true);
  //console.log('Scored Actions:', scoredactions, ', Available Actions:', availableActions, ', Possible Actions:', possibleActions);
  let bestAction;
  if (scoredactions.length === 0 || possibleActions.length === 0) {
    bestAction = {action:'pass'};
  } else {
    bestAction = possibleActions[0];
  }
  console.log('Scored Actions:', scoredactions, ', Available Actions:', availableActions, ', Possible Actions:', possibleActions, ', Best Action: ', bestAction);
  // Simulate 'thinking' time
  setTimeout(() => {
    performAction(bestAction, boardData, mapData, playerData, gamePlayData, UpdateMapData, UpdatePlayerData, UpdateGamePlayData, addLog);
    //executeComputerAction(boardData, mapData, playerData, gamePlayData);
    calculateVictoryPoints(boardData, gamePlayData, mapData, playerData, UpdateGamePlayData, UpdatePlayerData);
    setIsComputerThinking(false);
  }, 1000);
}


    const currentPlayer = gamePlayData.currentPlayer;
    const playerInfo = playerData[currentPlayer];
    //console.log('Player:', currentPlayer, ', Data:', playerInfo);

    const instructTxt1 = 'Player ' + (currentPlayer + 1) + ': Click the Skills Build Button';
    const instructTxt2 = 'Generating Resources for Player ' + (currentPlayer + 1);
    const instructTxt3 = 'Player ' + (currentPlayer + 1) + ': Pick an action to perform';

    const instructAI1 = 'Generating Resources for Player ' + (currentPlayer + 1);
    const instructAI2 = 'Player ' + (currentPlayer + 1) + ' is deciding what resources to claim'
    const instructAI3 = 'Player ' + (currentPlayer + 1) + ' is thinking...'; 

      

    if (playerInfo.compPlayer === 1) {
      // Slightly different phase structure for computer - phase 0 is generate resources, phase 1 is collect extra resources, phase 2 is action phase
      if (gamePlayData.currentPhase === 0) {
        // Collect resources
        addCurrentInstruction(instructAI1);
        generateResources(gamePlayData, mapData, playerData, UpdatePlayerData, UpdateGamePlayData, addLog);
        setTimeout(() => UpdateGamePlayData('currentPhase', 1), 1000);
      }
      else if (gamePlayData.currentPhase === 1) {
        // Determine what resources the computer should get
        addCurrentInstruction(instructAI2);
        setTimeout(() => UpdateGamePlayData('currentPhase', 2), 1000);
      } else if (gamePlayData.currentPhase === 2) {
        // Action phase
        addCurrentInstruction(instructAI3);
        if (!isComputerThinking) {
          executeComputerAction(boardData, mapData, playerData, gamePlayData);
        }
      } else if (gamePlayData.currentPhase === 4) {
        // Someone has won the game
        const onConfirm = () => {
          ReturnToMainMenu();
        };
        showOverlay('Player ' + (gamePlayData.winner) + ' has won the game!', null, onConfirm, true);
      }
    } else {
        if (gamePlayData.currentPhase === 0) {
          // IBM Skills Build course
          addCurrentInstruction(instructTxt1);
        } else if (gamePlayData.currentPhase === 1) {
          // Generate Resources 
          // TODO:  See if I can delay this without triggering multiple entries to the log
          addCurrentInstruction(instructTxt2);
          generateResources(gamePlayData, mapData, playerData, UpdatePlayerData, UpdateGamePlayData, addLog);
          // Pause for a second to allow for resource animation
          setTimeout(() => UpdateGamePlayData('currentPhase', 2), 1000);
        } else if (gamePlayData.currentPhase === 2 && gamePlayData.actionPhaseSet === -1) {
          // Action Phase
          addCurrentInstruction(instructTxt3);
          calculateHexStatus(gamePlayData.currentPlayer, mapData);
          calculateVictoryPoints(boardData, gamePlayData, mapData, playerData, UpdateGamePlayData, UpdatePlayerData);
        } else if (gamePlayData.currentPhase === 2 && gamePlayData.actionPhaseSet === 1) {
          addCurrentInstruction('Pick one of your own hexes to develop');
        } else if (gamePlayData.currentPhase === 2 && gamePlayData.actionPhaseSet === 2) {
          addCurrentInstruction('Pick an empty adjacent hex to develop');
        } else if (gamePlayData.currentPhase === 2 && gamePlayData.actionPhaseSet === 3) {
          addCurrentInstruction('Pick an opposition adjacent hex to take over');
        } else if (gamePlayData.currentPhase === 2 && gamePlayData.actionPhaseSet === 4) {
          addCurrentInstruction('Select resources to trade with the bank');
          showTradeOverlay(playerData[gamePlayData.currentPlayer], handleTradeConfirm, handleTradeCancel);
        } else if (gamePlayData.currentPhase === 4) {
            // Someone has won the game
            const onConfirm = () => {
              ReturnToMainMenu();
            };
            showOverlay('Player ' + (gamePlayData.winner) + ' has won the game!', null, onConfirm, true);
        }
    }
  }, [gamePlayData, isComputerThinking]);

  //   mapData, playerData, 
  //    addCurrentInstruction, generateResources, calculateHexStatus, showTradeOverlay, handleTradeConfirm, handleTradeCancel, calculateVictoryPoints,
  //    UpdatePlayerData, UpdateGamePlayData, addLog]);
  
  
  // Render the board repeatedly
  useEffect(() => {
    if (tileWidth !== null && tileHeightFull !== null && tileHeightTrim !== null) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      // Initialize the board
      BoardInitialisation(mapData, boardData, tileWidth, tileHeightFull, tileHeightTrim);

      // Game loop
      const fps = 30;
      const interval = 1000 / fps;
      let lastTime = 0;

      const gameLoop = (timestamp) => {
        if (timestamp - lastTime >= interval) {
          DrawBoard(canvas, ctx, images, mapData, playerData, gamePlayData, actionMenuParams);
          lastTime = timestamp;
        }
        requestAnimationFrame(gameLoop);
      };
      requestAnimationFrame(gameLoop);
    }
  }, [tileWidth, tileHeightFull, tileHeightTrim, BoardInitialisation, mapData, boardData,  images, playerData, gamePlayData, actionMenuParams ]);

  // Mouse Move Function - this is mainly to calculate where the mouse is on the game board
  const handleMouseMove = useCallback((event) => {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      mouseXY_to_HexID(mouseX, mouseY, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset,
                        boardData, mapData, gamePlayData, actionMenuParams, canvas
      );
    }, [tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset, boardData, mapData, gamePlayData, actionMenuParams, canvasRef]);

  // Mouse Click Function - same as mouse move function - have to work out where the mouse is - but then this triggers the handle mouse click function
  const handleClick = useCallback((event) => {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const mousePos = mouseXY_to_HexID(mouseX, mouseY, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset,
                                        boardData, mapData, gamePlayData, actionMenuParams, canvas );
      if (mousePos) {
        console.log('Clicked:', mousePos);
        handleMouseClick(mousePos, gamePlayData, mapData, playerData,
                         UpdateGamePlayData, UpdateMapData, UpdatePlayerData, addCurrentInstruction, addLog, showOverlay );
      }
    }, [tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset, boardData, mapData, gamePlayData, actionMenuParams, canvasRef, handleMouseClick, playerData, UpdateGamePlayData, UpdateMapData, UpdatePlayerData, addCurrentInstruction, addLog, showOverlay]);



  // Setup Event Listeners - listening for mouse clicks & mouse movement to trigger the mouseMove and mouseClick functions.
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
    };
  }, [handleMouseMove, handleClick]);

  // Final Output!
  return (
    <div>
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
      {overlayVisible && (
        <ConfirmationOverlay
          text={overlayContent.text}
          cost={overlayContent.cost}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          isInfo={overlayContent.isInfo}
        />
      )}

      {tradeOverlayVisible && (
        <TradeOverlay
          onConfirm={handleTradeConfirm}
          onCancel={handleTradeCancel}
          playerData={playerData[gamePlayData.currentPlayer]}
        />
      )}
    </div>
  );
};



export default GameBoardCanvas;