// Required imports
import React, { useRef, useEffect, useState } from 'react';
import { Box, Grid, Button } from '@mui/material';
import GameTile from './gameTile';
import './index.css';

// DATA
// Game Board Data (To be replaced with a database call)
const boardData = {rows: 5
                    , evenRowCols: 10
                    , oddRowCols: 9
                    , dim: [1600, 900]
}
// Map Data - again, to be replaced, but this is the json that should be returned.
const mapData = [
          { id: 0, row: 0, col: 0, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 1, row: 0, col: 1, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 2, row: 0, col: 2, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 3, row: 0, col: 3, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 4, row: 0, col: 4, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 5, row: 0, col: 5, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 6, row: 0, col: 6, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 7, row: 0, col: 7, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 8, row: 0, col: 8, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 9, row: 0, col: 9, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 10, row: 1, col: 0, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 11, row: 1, col: 1, tileType: 'w', startSquare: 1, structure: 1, currentOwner: 1, }
        , { id: 12, row: 1, col: 2, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 13, row: 1, col: 3, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 14, row: 1, col: 4, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 15, row: 1, col: 5, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 16, row: 1, col: 6, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 3, }
        , { id: 17, row: 1, col: 7, tileType: 'm', startSquare: 3, structure: 1, currentOwner: 3, }
        , { id: 18, row: 1, col: 8, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 3, }
        , { id: 19, row: 2, col: 0, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 20, row: 2, col: 1, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 21, row: 2, col: 2, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 22, row: 2, col: 3, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 23, row: 2, col: 4, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 24, row: 2, col: 5, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 25, row: 2, col: 6, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 26, row: 2, col: 7, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 27, row: 2, col: 8, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 28, row: 2, col: 9, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 29, row: 3, col: 0, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 30, row: 3, col: 1, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 31, row: 3, col: 2, tileType: 'f', startSquare: 4, structure: 1, currentOwner: 4, }
        , { id: 32, row: 3, col: 3, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 33, row: 3, col: 4, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 34, row: 3, col: 5, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 35, row: 3, col: 6, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 36, row: 3, col: 7, tileType: 'f', startSquare: 2, structure: 1, currentOwner: 2, }
        , { id: 37, row: 3, col: 8, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 38, row: 4, col: 0, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 39, row: 4, col: 1, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 40, row: 4, col: 2, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 41, row: 4, col: 3, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 42, row: 4, col: 4, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 43, row: 4, col: 5, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 44, row: 4, col: 6, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 45, row: 4, col: 7, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 46, row: 4, col: 8, tileType: 'f', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 47, row: 4, col: 9, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
        ];

// BOARD DISPLAY VARIABLES
const tilesHOffset = 1;
const tilesVOffset = 1;
const tileHeightRatioFull = 288.0 / 250.0;
const tileHeight_trimmRatio = 0.87;
const structureSizeRatio = 0.4;

// GAMEPLAY VARIABLES
var currentPlayer = 1;
var currentTurn = 1;
var currentPhase = 1;

// Function to map tiles to their correct positions on the board
const createBoardStructure = (mapData, boardData) => {
  const board = Array.from({ length: boardData.rows }, (_, rowIndex) => {
    // Number of columns depends if its an odd or even row.
    const numCols = rowIndex % 2 === 0 ? boardData.evenRowCols : boardData.oddRowCols;
    // Create an array for each row, getting the tile that sits in that position from the mapData
    return Array.from({ length: numCols }, (_, colIndex) => {
      // Get the data for the tile that sits at this position on the map.
      return mapData.find(tile => tile.row === rowIndex && tile.col === colIndex) || null;
    });
  });
  return board;
};

// Create the board structure arrays  
const boardStructure = createBoardStructure(mapData, boardData);


// Function to check if a point is inside a polygon
const isPointInPolygon = (point, vertices) => {
  const [x, y] = point;
  let isInside = false;

  for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
    const [xi, yi] = vertices[i];
    const [xj, yj] = vertices[j];

    const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) isInside = !isInside;
  }

  return isInside;
}


function checkMouseInHex2(RowArray, xpos, ypos) {
  console.log('Checking coords (', xpos, ',', ypos, ') in row arrays ', RowArray)
  for (let rowIndex of RowArray) {
    const row = boardStructure[rowIndex];
    for (let tile of row) {
      if (tile && isPointInPolygon([xpos, ypos], tile.xpos.map((x, i) => [x, tile.ypos[i]]))) {
        return tile.id;
      }
    }
  }
  return null;
}

function checkMouseInHex(RowArray, xpos, ypos) {
  console.log('Checking coords (', xpos, ',', ypos, ') in row arrays ', RowArray)
  for (let rowIndex of RowArray) {
    const row = boardStructure[rowIndex];
    for (let tile of row) {
      if (tile && isPointInPolygon([xpos, ypos], tile.xpos.map((x, i) => [x, tile.ypos[i]]))) {
        return tile.id;
      }
    }
  }
  return null;
}


function mouseXY_to_HexID(mouseX, mouseY, tileWidth, tileHeight_full, tileHeight_trim) {
  // First, get an idea as to where the mouse is vertically - is it in the player info section, or on the game board

  var hexID = null;

  if (mouseY < tileHeight_full * tilesVOffset) {
    // Above the board, handle the player icon section here.
    console.log("Above game board")
  } else if (mouseY > tileHeight_full * tilesVOffset + tileHeight_trim * (boardData.rows - 1) + tileHeight_full) {
    console.log("Below game board")
  } else {
    // Get a 'rough' idea as to which row the mouse is in (to reduce the amount of checking required)
    var approxRow = (mouseY - tileHeight_full * tilesVOffset) / (tileHeight_trim)
    // First row
    if (approxRow < 1) {
      hexID = checkMouseInHex([0], mouseX, mouseY);
    } else if (approxRow >= boardData.rows) {
      hexID = checkMouseInHex([boardData.rows-1], mouseX, mouseY);
    } else {
      hexID = checkMouseInHex([Math.floor(approxRow)-1,Math.floor(approxRow)], mouseX, mouseY);
    }

    // Now check the intersection of the mouse coords and each tile in the rows.
    if (hexID !== null) {
      console.log('Mouse is over hexID:', hexID);
    } else {
      console.log('Mouse is not over any hex tile');
    }


  }


  // Okay, we either have the exact row, or 2 potential rows the moust is in.


};



function drawTile(ctx, tileData, rowID, colID, tileWidth, tileHeight_full, tileHeight_trim, images) {
  // Determine top-left position for each tile
  var xpos;
  if ((rowID%2 === 0 & boardData.evenRowCols > boardData.oddRowCols) || (rowID%2 === 1 & boardData.evenRowCols < boardData.oddRowCols)) {
    xpos = tileWidth * (0.5 * tilesHOffset) + colID * tileWidth;
  } else {
    xpos = tileWidth * (1.0 * tilesHOffset) + colID * tileWidth;
  }
  const ypos = tileHeight_full * tilesVOffset + rowID * tileHeight_trim;
  
  // Save the coordinates of each hex
  mapData[tileData.id].xpos = [xpos
                  , xpos + tileWidth / 2
                  , xpos + tileWidth
                  , xpos + tileWidth
                  , xpos + tileWidth / 2
                  , xpos]
  mapData[tileData.id].ypos = [ypos + tileHeight_full / 4
                          , ypos
                          , ypos + tileHeight_full / 4
                          , ypos + tileHeight_full * 3 / 4
                          , ypos + tileHeight_full
                          , ypos + tileHeight_full * 3 / 4]
  // Complete a hex outline
  ctx.beginPath();
  for (var j = 0; j < 6; j++) {
    ctx.lineTo(mapData[tileData.id].xpos[j], mapData[tileData.id].ypos[j]);
    //ctx.lineTo(xpos, ypos + tileHeight_full / 4);
    //ctx.lineTo(xpos + tileWidth / 2, ypos);
    //ctx.lineTo(xpos + tileWidth, ypos + tileHeight_full / 4);
    //ctx.lineTo(xpos + tileWidth, ypos + tileHeight_full * 3/ 4);
    //ctx.lineTo(xpos + tileWidth / 2, ypos + tileHeight_full);
    //ctx.lineTo(xpos, ypos + tileHeight_full * 3/ 4);
  }
  ctx.closePath();
  // What Color should this path be?
  if (tileData.currentOwner === 1) {
    ctx.fillStyle = 'red';
  } else if (tileData.currentOwner === 2) {
    ctx.fillStyle = 'blue';
  } else if (tileData.currentOwner === 3) {
    ctx.fillStyle = 'yellow';
  } else if (tileData.currentOwner === 4) {
    ctx.fillStyle = 'green';
  } else {
    ctx.fillStyle = 'grey';
  }
  ctx.fill()
  ctx.stroke();
  
  // Fill the inner area based on tile type
  var innerImage;
  if (tileData.tileType === 'f') {
    innerImage = images['tile_food']
  } else if (tileData.tileType === 'w') {
    innerImage = images['tile_wood']
  } else if (tileData.tileType === 'm') {
    innerImage = images['tile_metal']
  } else {
    innerImage = images['tile_sea']
  }
  ctx.drawImage(innerImage, xpos, ypos, tileWidth, tileHeight_full)

  // Place Structures
  const structimages = [['struct_red_camp', 'struct_red_house', 'struct_red_village', 'struct_red_castle'],
                        ['struct_blue_camp', 'struct_blue_house', 'struct_blue_village', 'struct_blue_castle'],
                        ['struct_yellow_camp', 'struct_yellow_house', 'struct_yellow_village', 'struct_yellow_castle'],
                        ['struct_green_camp', 'struct_green_house', 'struct_green_village', 'struct_green_castle']
                      ]
  if (tileData.structure > 0) {
    // Draw structures
    ctx.drawImage(images[structimages[tileData.currentOwner-1][tileData.structure - 1]]
            , xpos + (1 - structureSizeRatio) / 2 * tileWidth
            , ypos + (1 - structureSizeRatio) / 2 * tileHeight_full
            , structureSizeRatio * tileWidth
            , structureSizeRatio * tileHeight_full)
  }
}


// Game Board
const GameBoardCanvas = ({images}) => {
    // Set up the canvas
    const canvasRef = useRef(null);
    const canvasWidth = window.innerWidth;
    const canvasHeight = Math.floor(canvasWidth * 9 / 16)

    // Store the calculated tile width as we need it for a few different things
    const [tileWidth, setTileWidth] = useState(null);
    
    // Setup the canvas
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      // ---------- RENDERING ----------//
      // Background
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Determine 'tile' width and height
        const tileWidth = Math.floor(canvas.width / (Math.max(boardData.evenRowCols, boardData.oddRowCols) + 1));
        // Tile height is a function of tile width
        // Full Ratio (for display puposes)
        const tileHeight_full = Math.floor(tileWidth * tileHeightRatioFull);
        // Trimmed ratio ( for positioning purposes)
        const tileHeight_trim = Math.floor(tileWidth * tileHeight_trimmRatio);

        console.log('Tile Dim (W x H1 x H2):', tileWidth, ',', tileHeight_full, ',', tileHeight_trim)
        // Draw the tiles
        for (let rows = 0; rows < boardStructure.length; rows++) {
          for (let cols = 0; cols < boardStructure[rows].length; cols++) {
            drawTile(ctx, boardStructure[rows][cols], rows, cols, tileWidth, tileHeight_full, tileHeight_trim, images);
          }
        }

        // Buttons
        ctx.fillStyle = 'red'
        ctx.fillRect(0, canvas.height - 50, 100, 50)

      // ---------- LISTENING ----------//
      // Process the mouse movement & clicks
      const handleMouseMove = (event) => {
          const rect = canvas.getBoundingClientRect();
          const mouseX = event.clientX - rect.left;
          const mouseY = event.clientY - rect.top;
          mouseXY_to_HexID(mouseX, mouseY, tileWidth, tileHeight_full, tileHeight_trim );
      }

      const handleClick = (event) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
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

  
  return <div>
          <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
          <Button onClick={() => console.log(boardStructure)}>Map Data</Button>
    </div>
};

  
  export default GameBoardCanvas;