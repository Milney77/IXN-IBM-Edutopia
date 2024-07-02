// Required imports
import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@mui/material';

import './App.css';

import { boardData, mapData, playerData} from './constants/constants';
import { DrawBoard } from './components/gameBoardRenderer';
import { mouseXY_to_HexID } from './components/gameBoardListener';

// More constants.
// BOARD DISPLAY VARIABLES
const tilesHOffset = 1;
const tilesVOffset = 0.5;
const tileHeightRatioFull = 288.0 / 250.0;
const tileHeight_trimmRatio = 0.87;


// FUNCTIONS

// Test functions
function nextPlayer(gamePlayVariables) {
  const prevPlayer = gamePlayVariables.currentPlayer;
    if (gamePlayVariables.currentPlayer === (gamePlayVariables.numberPlayers - 1)) {
      gamePlayVariables.currentPlayer = 0;
    }
      gamePlayVariables.currentPlayer ++;
  console.log('Current player changed from player ', prevPlayer, ' to ', gamePlayVariables.currentPlayer);
}

function addResource(gamePlayVariables, playerData) {
  for (var i = 0; i < gamePlayVariables.numberPlayers; i++) {
    var tmp = playerData[i].resources.wood;
    if (playerData[i].id === gamePlayVariables.currentPlayer) {
      playerData[i].resources.wood = playerData[i].resources.wood + 1;
      console.log('Player ', playerData[i].id, ' wood increased from ', tmp, ' to ', playerData[i].resources.wood)
    } else {
      playerData[i].resources.wood = playerData[i].resources.wood - 1;
      console.log('Player ', playerData[i].id, ' wood decreased from ', tmp, ' to ', playerData[i].resources.wood)
    }
  }
}

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
           mapData[i].click = 0;
           mapData[i].hover = 0;
       }
 }
 
// Game Board
const GameBoardCanvas = ({images, gamePlayVariables, playerData}) => {
    // Set up the canvas
    const canvasRef = useRef(null);
    const canvasWidth = window.innerWidth;
    const canvasHeight = Math.floor(canvasWidth * 8 / 16);

    // Store the calculated tile width as we need it for a few different things
    const [tileWidth, setTileWidth] = useState(null);
    
   
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

      // ---------- RENDERING ----------//
      const fps = 20;  // Rendering rate, frames per second
      const interval = 1000 / fps;  // Frame interval in milliseconds
      // gameloop function - triggers a re-rendering of the game board 20 times a second.
      let lastTime = 0;
      const gameLoop = (timestamp) => {
        if (timestamp - lastTime >= interval) {
          DrawBoard(canvas, ctx, images, mapData, playerData);
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
          mouseXY_to_HexID(mouseX, mouseY, tileWidth, tileHeight_full, tileHeight_trim, tilesHOffset, tilesVOffset, boardData, mapData );
          //drawBoard (canvas, ctx, images)
      }

      const handleClick = (event) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        mouseXY_to_HexID(mouseX, mouseY, tileWidth, tileHeight_full, tileHeight_trim, tilesHOffset, tilesVOffset, boardData, mapData );
        console.log('CLICK at coord: (', mouseX, ',', mouseY, ')');
      };

      // Add Mouse 'Listeners'
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('click', handleClick);

      // Cleanup function to remove event listeners
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
    };
  }, [tileWidth, images]); // Add tileWidth and images as dependencies

  
  return (
    <div>
          <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
          <Button onClick={() => console.log('MapData:', mapData, ', Player Data:', playerData, ', Gameplay Data: ', gamePlayVariables )}>Map Data</Button>
          <Button onClick={() => nextPlayer(gamePlayVariables)}>Change Player</Button>
          <Button onClick={() => addResource(gamePlayVariables, playerData)}>Add Resource</Button>
    </div>
  )
};

  
  export default GameBoardCanvas;
