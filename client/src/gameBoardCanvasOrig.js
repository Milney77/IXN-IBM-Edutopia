// Required imports
import React, { useRef, useEffect, useState, useCallback } from 'react';
//import { Button, Typography, Stack, Grid } from '@mui/material';

import './App.css';

import { DrawBoard } from './components/gameBoardRenderer';
import { mouseXY_to_HexID } from './components/gameBoardListener';
import ConfirmationOverlay from './components/confirmationOverlay';
import TradeOverlay from './components/tradeOverlay';


import { resourceCosts } from './constants/constants';


// BOARD DISPLAY VARIABLES
const tilesHOffset = 1;
const tilesVOffset = 0.33;
const tileHeightRatioFull = 288.0 / 250.0;
const tileHeight_trimmRatio = 0.87;


// REQUIRED FUNCTIONS
// Initialise all the data needed to display the board.
function BoardInitialisation(mapData, boardData, tileWidth, tileHeight_full, tileHeight_trim) {
  // Now using the map data object, let's add the x and y coordinates for the tile (assuming its a rectangle), 
  // and the 6 coordinates that define the hexagon
       for (var i = 0; i < mapData.length; i++) {
           const tileData = mapData[i];
           var xpos;
           if ((tileData.row%2 === 0 & boardData.evenRowCols > boardData.oddRowCols) || (tileData.row%2 === 1 & boardData.evenRowCols < boardData.oddRowCols)) {
             xpos = tileWidth * (0.5 * tilesHOffset) + tileData.col * tileWidth;
           } else {
             xpos = tileWidth * (1.0 * tilesHOffset) + tileData.col * tileWidth;
           }
           var ypos = tileWidth * tilesVOffset + tileData.row * tileHeight_trim;

           // Save this information
           mapData[i].xPos = [xpos, tileWidth];
           mapData[i].yPos = [ypos, tileHeight_full, tileHeight_trim];
           mapData[i].xHexVert = [xpos, xpos + tileWidth / 2, xpos + tileWidth
                               , xpos + tileWidth, xpos + tileWidth / 2, xpos];
           mapData[i].yHexVert = [ypos + tileHeight_full * 1 / 4, ypos, ypos + tileHeight_full * 1/ 4
                               , ypos + tileHeight_full * 3 / 4, ypos + tileHeight_full, ypos + tileHeight_full * 3 / 4];
           mapData[i].hover = 0;
           

           // Determine neighbours
            const neighbours_sameRow = mapData.filter((tile) => tile.row === tileData.row && (tile.col + 1 === tileData.col || tile.col - 1 === tileData.col));
            var neighbours_diffRow;
           if ((boardData.evenRowCols > boardData.oddRowCols && mapData[i].row%2 === 0) ||
               (boardData.evenRowCols < boardData.oddRowCols && mapData[i].row%2 === 1)) {
                // Row is one of the longer rows
                neighbours_diffRow = mapData.filter((tile) => (tile.row + 1 === tileData.row || tile.row - 1 === tileData.row)
                                                 && (tile.col === tileData.col || tile.col + 1 === tileData.col));
               } else {
                neighbours_diffRow = mapData.filter((tile) => (tile.row + 1 === tileData.row || tile.row - 1 === tileData.row)
                                                 && (tile.col === tileData.col || tile.col - 1 === tileData.col));
               }
          // Turn this into a list of ids
          mapData[i].neighbourids = [...neighbours_sameRow.map(tile => tile.id), ...neighbours_diffRow.map(tile => tile.id)]
           }
           
       }


// Generate Resources (current player)
function generateResources(gamePlayData, mapData, playerData, UpdatePlayerData, UpdateGamePlayData, addLog) {
    const currentPlayer = gamePlayData.currentPlayer;
    const playerTiles = mapData.filter((tile) => tile.currentOwner === currentPlayer + 1 );
    // Calculate how much resources should be gained
    let woodResource = 0;
    let foodResource = 0;
    let metalResource = 0;

    // Loop through the player tiles
    playerTiles.forEach((tile) => {
      if (tile.tileType === 'w') {
        woodResource += calculateResources(tile.structure);
      } else if (tile.tileType === 'f') {
        foodResource += calculateResources(tile.structure);
      } else if (tile.tileType === 'm') {
        metalResource += calculateResources(tile.structure);
      }
    });
    const logTxt = "Generating resources for Player " + (currentPlayer + 1) + ' = Wood: ' + woodResource + ', food: ' + foodResource + ', metal: ' + metalResource;
    UpdatePlayerData(currentPlayer, 'wood', playerData[currentPlayer].wood + woodResource)
    UpdatePlayerData(currentPlayer, 'food', playerData[currentPlayer].food + foodResource)
    UpdatePlayerData(currentPlayer, 'metal', playerData[currentPlayer].metal + metalResource)
    addLog(logTxt);
    UpdateGamePlayData('currentPhase', 2);
  }

  function calculateResources(structure) {
    if (structure === 0) {return 1;}
    else if (structure === 1) {return 1;}
    else if (structure === 2) {return 2;}
    else {return 2;}
  }


function calculateVictoryPoints(gamePlayData, mapData, UpdatePlayerData) {
  // Re-calculate victory points for all players (just in case a player has taken over other player hexes, have to do this for everyone
  for (var i = 0; i < gamePlayData.numberPlayers; i++) {
    // Get the set of player tiles
    const playerTiles = mapData.filter((tile) => tile.currentOwner === i + 1 );
    // Set victory points to the number of tiles they own
    let victoryPoints = playerTiles.length;
    // Now add victory points based on what structures they have
    playerTiles.forEach((tile)=> {
      if (tile.structure === 1) {victoryPoints += 0;}
      else if (tile.structure === 2) {victoryPoints += 1}
      else if (tile.structure === 3) {victoryPoints += 2}
      else if (tile.structure === 4) {victoryPoints += 3}
    })
    console.log('VICTORY POINTS CALCULATIONS - current player: ', i, ', tiles:', playerTiles.length, ', VPs:', victoryPoints);
    // Update victory points
    UpdatePlayerData(i, 'vp', victoryPoints)
  }
}



// Function to handle mouse clicks
// This may need to be split or something.  Its getting a bit long... 
function handleMouseClick (mousePos, gamePlayData, mapData, playerData
                         , UpdateGamePlayData, UpdateMapData, UpdatePlayerData
                         , addCurrentInstruction, addLog, showOverlay) {
    const currentPlayer = gamePlayData.currentPlayer;
    const currentPlayerOwnership = currentPlayer + 1;
    var cost;
    var hexid;

    if (gamePlayData.currentPhase !== 2) {
      // Nothing needs to be done, until phase 2, the only click is handled by the PlayerDisplay section.
      
    } else if (gamePlayData.currentPhase === 0) {
    // USING PRESSING AN ACTION BUTTON (WHILE NO OTHER ACTION STATUS IS IN EFFECT) 
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
        addLog('Player ' + (gamePlayData.currentPlayer + 1) +  ' has ended their turn.');
        UpdateGamePlayData('actionPhaseSet', -1);
        UpdateGamePlayData('currentPhase', 0);
        if (currentPlayerOwnership === gamePlayData.numberPlayers) {
          UpdateGamePlayData('currentPlayer', 0);
          UpdateGamePlayData('currentTurn', gamePlayData.currentTurn + 1);
        } else {
          UpdateGamePlayData('currentPlayer', gamePlayData.currentPlayer + 1);
        }
      }


    // BUILDING ON PLAYER OWNED HEXES
    } else if (gamePlayData.actionPhaseSet === 1) {
      if (mousePos.type === 'hex' && mapData[mousePos.id].actionable === 1) {
        // Player has selected one of their own hexes to develop.
        hexid = mousePos.id;
        if (mapData[hexid].structure === 4) {
          // Error - cannot build any more - display a message
          showOverlay('Cannot build any more on this hex.', null, null, true);
        } else {
          // Determine costs for development
          const structNames = ['House', 'Village', 'Castle'];
          const structCosts = [resourceCosts.house, resourceCosts.village, resourceCosts.castle];
          cost = structCosts[mapData[hexid].structure-1];
          var structureName = structNames[mapData[hexid].structure-1]
          // Check if player has enough resources
          if (playerData[currentPlayer].wood < cost.wood || 
              playerData[currentPlayer].food < cost.food || 
              playerData[currentPlayer].metal < cost.metal || 
              playerData[currentPlayer].tech < cost.tech
          ) {
            showOverlay('Insufficient resources to build on this hex.', cost, null, true);
          }
          else {
            const onConfirm = () => {
              // Player is building on this hex
              // Deduct resources from player
              UpdatePlayerData(currentPlayer, 'wood', playerData[currentPlayer].wood - cost.wood)
              UpdatePlayerData(currentPlayer, 'food', playerData[currentPlayer].food - cost.food)
              UpdatePlayerData(currentPlayer, 'metal', playerData[currentPlayer].metal - cost.metal)
              UpdatePlayerData(currentPlayer, 'tech', playerData[currentPlayer].tech - cost.tech)
              // Update the board data
              UpdateMapData(hexid, 'structure', mapData[hexid].structure += 1)
              // Add to log
              var logTxt = 'Player ' + (currentPlayer + 1) + ' has built a ' + structureName + ' on hex ' + hexid;
              addLog(logTxt);
              UpdateGamePlayData('actionPhaseSet', -1);
              calculateVictoryPoints(gamePlayData, mapData, UpdatePlayerData)
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
        if (playerData[currentPlayer].wood < cost.wood || 
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
            UpdatePlayerData(currentPlayer, 'wood', playerData[currentPlayer].wood - cost.wood);
            UpdatePlayerData(currentPlayer, 'food', playerData[currentPlayer].food - cost.food);
            UpdatePlayerData(currentPlayer, 'metal', playerData[currentPlayer].metal - cost.metal);
            UpdatePlayerData(currentPlayer, 'tech', playerData[currentPlayer].tech - cost.tech);
            // Update the board data
            UpdateMapData(hexid, 'currentOwner', currentPlayerOwnership);
            UpdateMapData(hexid, 'structure', 1);
            // Add to log
            var logTxt = 'Player ' + (currentPlayer + 1) + ' has developed hex ' + hexid;
            addLog(logTxt);
            UpdateGamePlayData('actionPhaseSet', -1);
            calculateVictoryPoints(gamePlayData, mapData, UpdatePlayerData)
            }
          showOverlay('Do you want to build on this hex?', cost, onConfirm, false);
          console.log(mapData[hexid]);
        }
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
         // Check if player has sufficient resources
         if (playerData[currentPlayer].wood < cost.wood || 
          playerData[currentPlayer].food < cost.food || 
          playerData[currentPlayer].metal < cost.metal || 
          playerData[currentPlayer].tech < cost.tech
        ) {
          showOverlay('Insufficient resources to take over this hex.', cost, null, true);
        } else {
          console.log('HexID:', hexid, 'CurrPlayer idx:', currentPlayer, 'CurrOwnership:', currentPlayerOwnership);
            const onConfirm = () => {
            // Player is developing this hex
            // Deduct resources from player
            UpdatePlayerData(currentPlayer, 'wood', playerData[currentPlayer].wood - cost.wood);
            UpdatePlayerData(currentPlayer, 'food', playerData[currentPlayer].food - cost.food);
            UpdatePlayerData(currentPlayer, 'metal', playerData[currentPlayer].metal - cost.metal);
            UpdatePlayerData(currentPlayer, 'tech', playerData[currentPlayer].tech - cost.tech);
            // Update the board data
            UpdateMapData(hexid, 'currentOwner', currentPlayerOwnership);
            UpdateMapData(hexid, 'structure', Math.max(1, mapData[hexid].structure - 1));
            // Add to log
            var logTxt = 'Player ' + (currentPlayer + 1) + ' has taken over hex ' + hexid;
            addLog(logTxt);
            UpdateGamePlayData('actionPhaseSet', -1);
            calculateVictoryPoints(gamePlayData, mapData, UpdatePlayerData)
            }
          showOverlay('Do you want to take over this hex?', cost, onConfirm, false);
          //console.log(mapData[hexid]);
        }
      } else {
        // Player has clicked somewhere else.
        UpdateGamePlayData('actionPhaseSet', -1);
      }

    }
}


// Calculate hex status for actions
function calculateHexStatus(currentPlayer, mapData) {
  //console.log('CALCULATING HEX STATUS')
  // Now, flag each hex as follows:
  // 1 - Hex is owned by player
  // 2 - Empty hex adjacent to a player hex
  // 3 - Other player controlled hex adjacent to player hex
  // 0 - Otherwise
  const playerTiles = mapData.filter((tile) => tile.currentOwner === (currentPlayer + 1));
  // Get a list of all hexes adjacent to player hexes
  const allNeighbours = playerTiles.flatMap(hex => hex.neighbourids);
  // Select all hex not owned by anyone
  const emptyTiles = mapData.filter((tile) => (allNeighbours.includes(tile.id) && tile.currentOwner === 0));
  // Select neighbourhood hexes owned by other players
  const oppositionTiles = mapData.filter((tile) => (allNeighbours.includes(tile.id) && tile.currentOwner > 0 && tile.currentOwner !== (currentPlayer + 1)));
  // Assign a value to each hex
  mapData.forEach(tile => {
    if (playerTiles.map(tile => tile.id).includes(tile.id)) {
      tile.actionable = 1;
    } else if (emptyTiles.map(tile => tile.id).includes(tile.id)) {
      tile.actionable = 2;
    } else if (oppositionTiles.map(tile => tile.id).includes(tile.id)) {
      tile.actionable = 3;
    } else {
      tile.actionable = 0;
    }
  });
}




 
// Game Board
const GameBoardCanvas = ({images, gameComponents, addLog, addCurrentInstruction}) => {

    const {boardData, mapData, playerData, gamePlayData, UpdateMapData, UpdatePlayerData, UpdateGamePlayData } = gameComponents;
    
    // Set up the canvas
    const canvasRef = useRef(null);
    const canvasWidthBase = window.innerWidth;
    const canvasHeightBase = window.innerHeight;
    // Canvas Width:  Either the inner window width, or calculated from the window height (which ever is smaller)
    // Canvas Height: Either the inner window height, or calculated from the window width (which ever is smaller)
    //const canvasWidth = Math.min(canvasWidthBase, Math.floor(canvasHeightBase * 16 / 7.5));
    //const canvasHeight = Math.min(canvasHeightBase, Math.floor(canvasWidthBase * 7.5 / 16));
    const canvasWidth = canvasWidthBase;
    const canvasHeight = Math.floor(canvasWidthBase * 7.5 / 16);

    // Store the calculated tile width as we need it for a few different things
    const [tileWidth, setTileWidth] = useState(null);

    // Setup the confirmation overlay that appears when a user tries to do an action
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [overlayContent, setOverlayContent] = useState({ text: '', cost: '', onConfirm: null, isInfo: false });
    const showOverlay = (text, cost, onConfirm, isInfo = false) => {
      setOverlayContent({ text, cost, onConfirm, isInfo });
      setOverlayVisible(true);
    };
    const handleConfirm = () => {
      if (overlayContent.onConfirm) {
        overlayContent.onConfirm();
      }
      setOverlayVisible(false);
    };
    const handleCancel = () => {
      setOverlayVisible(false);
    };

    // Trade Resources Overlay
    const [tradeOverlayVisible, setTradeOverlayVisible] = useState(false);
    const showTradeOverlay = (playerData, onConfirm, onCancel) => {
      setTradeOverlayVisible(true);
    };
    const handleTradeConfirm = useCallback((tradedResources) => {
        // Player is trading
        const {outWood, outFood, outMetal, outTech, inWood, inFood, inMetal} = tradedResources;
        console.log('outWood:', outWood, ', outFood:', outFood, ', outMetal:', outMetal, ', outTech:', outTech, ', inWood:', inWood, ', inFood:', inFood, ', inMetal:', inMetal);
        // Deduct resources from player
        UpdatePlayerData(gamePlayData.currentPlayer, 'wood', playerData[gamePlayData.currentPlayer].wood - outWood + inWood);
        UpdatePlayerData(gamePlayData.currentPlayer, 'food', playerData[gamePlayData.currentPlayer].food - outFood + inFood);
        UpdatePlayerData(gamePlayData.currentPlayer, 'metal', playerData[gamePlayData.currentPlayer].metal - outMetal + inMetal);
        UpdatePlayerData(gamePlayData.currentPlayer, 'tech', playerData[gamePlayData.currentPlayer].tech - outTech);
        
        // Add to log
        var tradeOutWood  = '';
        var tradeOutFood  = '';
        var tradeOutMetal = '';
        var tradeOutTech   = '';
        var tradeInWood   = '';
        var tradeInFood   = '';
        var tradeInMetal  = '';
        
        if (outWood  > 0)  {tradeOutWood  = outWood  + ' wood, '}
        if (outFood  > 0)  {tradeOutFood  = outFood  + ' food, '}
        if (outMetal > 0)  {tradeOutMetal = outMetal + ' metal, '}
        if (outTech  > 0)  {tradeOutTech  = outTech + ' tech, ' }
        if (inWood   > 0)  {tradeInWood   = inWood  + ' wood, '}
        if (inFood   > 0)  {tradeInFood   = inFood  + ' food, '}
        if (inMetal >  0)  {tradeInMetal  = inMetal + ' metal, '}

        var logTxt = 'Player ' + (gamePlayData.currentPlayer + 1) + ' traded: [' + tradeOutWood + tradeOutFood + tradeOutMetal + tradeOutTech
                           + '] for [' + tradeInWood + tradeInFood + tradeInMetal + ']';
        addLog(logTxt);
        UpdateGamePlayData('actionPhaseSet', -1);
        setTradeOverlayVisible(false);
    }, [UpdatePlayerData, gamePlayData.currentPlayer, playerData, addLog, UpdateGamePlayData]);
    
    const handleTradeCancel = useCallback(() => {
      UpdateGamePlayData('actionPhaseSet', -1);
      setTradeOverlayVisible(false);
    }, [UpdateGamePlayData]);




   
    // Setup the canvas
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      // Determine 'tile' width based on current canvas size (so changes if user resizes their window)
      setTileWidth(Math.floor(canvas.width / (Math.max(boardData.evenRowCols, boardData.oddRowCols) + 1)));

      // ---------- CALCULATIONS ---------- //
      // Tile height is a function of tile width
      // Full Ratio (for display puposes)
      const tileHeight_full = Math.floor(tileWidth * tileHeightRatioFull);
      // Trimmed ratio ( for positioning purposes)
      const tileHeight_trim = Math.floor(tileWidth * tileHeight_trimmRatio);
      // Display tile dimensions to console
      console.log('Tile Dim (W x H1 x H2):', tileWidth, ',', tileHeight_full, ',', tileHeight_trim)
      // Initialise the board data based on this sizing.
      BoardInitialisation(mapData, boardData, tileWidth, tileHeight_full, tileHeight_trim);
      
      // Player Display margins - used by both the game board renderer & listener to know where the action menu is.
      // Possible improvement - this field should come from PlayerDisplay, but that is not a priority.
      const screenWidth = window.innerWidth;
      var customMargin;
      var playerInfoWidth = screenWidth / gamePlayData.numberPlayers;
      if (playerInfoWidth <= 200) {
          customMargin = 1;
      } else if (playerInfoWidth <= 300) {
          customMargin = 1;
      } else if (playerInfoWidth <= 400) {
          customMargin = 1.5;
      } else {
          customMargin = 2;
      }
      // Parameters for the action menu
      const actionMenuWidth = Math.floor(canvas.width / 4);
      const actionMenuHeight = Math.floor(actionMenuWidth / 6);
      const playerBoxWidth = Math.floor(canvas.width / gamePlayData.numberPlayers);
      const actionMenuParams = {width: actionMenuWidth
                              , height: actionMenuHeight
                              , playerBoxWidth: playerBoxWidth
                              , customMargin: customMargin
                              , xOffset1: 16
                              , xOffset2: 0.18  
                              , yOffset: 1
                              , iconSize: 0.9
                              , iconOffset: 0.25
                              , iconHover: [0, 0, 0, 0, 0, 0]
      }
      
      // --- GAME LOOP --- //
      var instructTxt1 = 'Player ' + (gamePlayData.currentPlayer + 1) + ': Click the Skills Build Button';;
      var instructTxt2 = 'Generating Resources for Player ' + (gamePlayData.currentPlayer + 1);
      var instructTxt3 = 'Player ' + (gamePlayData.currentPlayer + 1) + ': Pick an action to perform';
      if (gamePlayData.currentPhase === 0) {
        // IBM Skills Build course
        addCurrentInstruction(instructTxt1)
      } else if (gamePlayData.currentPhase === 1) {
        addCurrentInstruction(instructTxt2)
        generateResources(gamePlayData, mapData, playerData, UpdatePlayerData, UpdateGamePlayData, addLog);
      } else if (gamePlayData.currentPhase === 2 && gamePlayData.actionPhaseSet === -1) {
        // Action Phase
        addCurrentInstruction(instructTxt3)
        calculateHexStatus(gamePlayData.currentPlayer, mapData);
      } else if (gamePlayData.currentPhase === 2 && gamePlayData.actionPhaseSet === 1) {
        addCurrentInstruction('Pick one of your own hexes to develop');
      } else if (gamePlayData.currentPhase === 2 && gamePlayData.actionPhaseSet === 2) {
        addCurrentInstruction('Pick an empty adjacent hex to develop');
      } else if (gamePlayData.currentPhase === 2 && gamePlayData.actionPhaseSet === 3) {
        addCurrentInstruction('Pick an opposition adjacent hex to take over');        
      } else if (gamePlayData.currentPhase === 2 && gamePlayData.actionPhaseSet === 4) {
        addCurrentInstruction('Select resources to trade with the bank');    
        showTradeOverlay(playerData[gamePlayData.currentPlayer], handleTradeConfirm, handleTradeCancel);
      }

      // ---------- RENDERING ----------//
      const fps = 20;  // Rendering rate, frames per second
      const interval = 1000 / fps;  // Frame interval in milliseconds
      // gameloop function - triggers a re-rendering of the game board 20 times a second.
      let lastTime = 0;
      const gameLoop = (timestamp) => {
        if (timestamp - lastTime >= interval) {
          DrawBoard(canvas, ctx, images, mapData, playerData, gamePlayData, actionMenuParams);
          lastTime = timestamp;
        }
        requestAnimationFrame(gameLoop)
      }
      // Start the animation loop
      requestAnimationFrame(gameLoop)


      // ---------- LISTENING ----------//
      // Process the mouse movement & clicks
      const handleMouseMove = (event) => {
          const rect = canvas.getBoundingClientRect();
          const mouseX = event.clientX - rect.left;
          const mouseY = event.clientY - rect.top;
          mouseXY_to_HexID(mouseX, mouseY, tileWidth, tileHeight_full, tileHeight_trim, tilesHOffset, tilesVOffset
                          , boardData, mapData, gamePlayData, actionMenuParams, canvas );
          //drawBoard (canvas, ctx, images)
      }

      const handleClick = (event) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        var mousePos = mouseXY_to_HexID(mouseX, mouseY, tileWidth, tileHeight_full, tileHeight_trim, tilesHOffset, tilesVOffset
                          , boardData, mapData, gamePlayData, actionMenuParams, canvas );
        if (mousePos) {
          console.log('Clicked:', mousePos);
          handleMouseClick(mousePos, gamePlayData, mapData, playerData, UpdateGamePlayData, UpdateMapData, UpdatePlayerData
                          , addCurrentInstruction, addLog, showOverlay)
        }
      }
      // Add Mouse 'Listeners'
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('click', handleClick);

      // Cleanup function to remove event listeners
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
    };
  }, [tileWidth, images, boardData, mapData, playerData, gamePlayData, UpdatePlayerData, UpdateGamePlayData, UpdateMapData
               , addLog, addCurrentInstruction, handleTradeCancel, handleTradeConfirm]); // Add all react hooks as dependencies

  
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
  )
};

  
  export default GameBoardCanvas;


  /*

  <Button onClick={() => console.log('MapData:', mapData, ', Player Data:', playerData, ', Gameplay Data: ', gamePlayData )}>Map Data</Button>
            <Button onClick={() => changeGamePhase(gamePlayData, UpdateGamePlayData)}>Change Phase</Button>
            <Button onClick={() => changePlayerData(gamePlayData, playerData, UpdatePlayerData)}>Add Resource</Button>
            <Button onClick={() => console.log('CLICK')}>Change Board</Button>

            */