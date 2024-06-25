// Required imports
import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
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
        , { id: 16, row: 1, col: 6, tileType: 'w', startSquare: 0, structure: 0, currentOwner: 0, }
        , { id: 17, row: 1, col: 7, tileType: 'm', startSquare: 3, structure: 1, currentOwner: 3, }
        , { id: 18, row: 1, col: 8, tileType: 'm', startSquare: 0, structure: 0, currentOwner: 0, }
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
        ]



// FUNCTIONS // 
// Create some arrays for the board structure.
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

const tileMargin = 0;  // Margin used to set the size of the tiles, and then for the margin
  
// Calculate tile size based on screen width and number of columns
const calculateTileSize = () => {
    const screenWidth = window.innerWidth;
    // Having issues with window.innerHeight - for some reason it keeps reporting lower than what the viewport is.
    // So setting this to be 16:9 resolution.
    const screenHeight = window.innerHeight;
    //const screenHeight = Math.floor(screenWidth * 9 / 16)

    const numCols = Math.max(boardData.evenRowCols, boardData.oddRowCols);
    const numRows = boardData.rows;

    const tileSize_width = Math.floor(screenWidth / (numCols + 2));
    const tileSize_height = Math.floor(screenHeight / (numRows + 2));

    //const tileSize = Math.min(tileSize_width, tileSize_height) - tileMargin;
    const tileSize = tileSize_width;

    // Logging
    console.log('Screen (WxH): ', screenWidth, 'x', screenHeight)
    console.log('Tile (WxH): ', tileSize_width, 'x', tileSize_height, 'Tile Size: ', tileSize)
    return tileSize;
};
  
  
  // GameBoard component to render the board
  function GameBoard() {

    const [tileSize, setTileSize] = useState(calculateTileSize());
  
    useEffect(() => {
      const handleResize = () => {
        setTileSize(calculateTileSize(Math.max(boardData.evenRowCols, boardData.oddRowCols)));
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <Box className="GameBoard" sx={{ width: '100%',  overflow: 'none', border: '1pt solid black' }}>
        <Grid container spacing={0} direction="column"
           sx={{marginTop: `${tileSize/2}px`, marginBottom: `${tileSize/2}px`}}>
          {boardStructure.map((row, rowIndex) => (
            <Grid
              container
              item
              key={rowIndex}
              spacing={0}
              wrap="nowrap"
              // Add offset for every 2nd row
              sx={{ marginLeft: rowIndex % 2 === 1 ? `${tileSize * 1.5}px` : `${tileSize * 1}px` }} 
            >
              {row.map((tile, colIndex) => (
                <Grid item key={tile ? tile.id : `empty-${rowIndex}-${colIndex}`}>
                  {tile ? <GameTile tile={tile} tileSize={tileSize} /> : <Box sx={{ width: tileSize, height: tileSize, border: '1px solid black' }} />}
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
  
  export default GameBoard;