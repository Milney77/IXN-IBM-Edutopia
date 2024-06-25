
import React from 'react';
import { Box } from '@mui/material';

const GameTile = ({ tile, tileSize }) => {
  const tileStyles = {
    width: `${tileSize}px`,
    height: `${tileSize - tileSize * 0.288675}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: tile.tileType === 'w' ? 'green' : tile.tileType === 'm' ? 'red' : 'yellow',
    //clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)',
    backgroundImage: `url(/images/tiles/sea.png)`,
    backgroundSize: '100% auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    overflow: 'visible',
    paddingBottom: `${tileSize  * 0.288675/2}px`
  };
  return (
    <Box style={tileStyles} classname = 'tiletest'>
      {tile.tileType}
    </Box>
  );
};

export default GameTile;