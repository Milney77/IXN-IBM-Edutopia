import React, { useState, useEffect, useContext } from 'react';
import { Typography, Stack, Grid, Box, Button, Tooltip } from '@mui/material';

import { DimensionsContext } from './dimensionsContext';
import './custom.css';


const GameLog = ({ currentInstruction, log, exitToTitle }) => {
  // Get the dimensions from the dimension context
  const {width, height} = useContext(DimensionsContext);

  // Set the font size (in rem)
  const [customFontSize, setCustomFontSize] = useState(2);

  // Dynamically update font size as the screen width changes
  useEffect(() => {
    //console.log('GameLog resizing to : ', width, 'x', height);
    const calculateFontSize = () => {
      const baseFontSize = 3;
      const scaleFactor = width / 1920; // Adjust this divisor to control scaling
      return baseFontSize * scaleFactor;
    };
    setCustomFontSize(calculateFontSize());
  }, [width, height]);

  // Determine whether the game log overlay is visible
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  // Click on the game log (so show the overlay)
  const handleLogClick = () => {
    setOverlayVisible(true);
  };

  // Click the close button to close the game log
  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };

  // Exit game
  const exitGame = () => {
    exitToTitle();
  }

  // OUTPUT
  return (
      <Grid container alignItems='center'>
          <Grid item xs={6}>
              <Typography variant='h4' 
                sx ={{
                  textAlign:'left',
                  paddingX: 2,
                  fontSize: `${customFontSize}rem`
                }}
              >
                { currentInstruction }
                </Typography>
          </Grid>
          <Grid item xs = {1}>
             <Typography variant='h6' sx={{ marginX:0, paddingX:0, paddingY:0, fontSize: `${customFontSize/2}rem` }}>Game Log</Typography>
          </Grid>
          <Grid item xs = {4}>
            <Tooltip title="Click to expand game log">
              <Box id="log" onClick={handleLogClick} sx={{width:'100%', p:0, mt:'0rem', fontSize: `${customFontSize/2}rem`}}>
                  {log.length > 0 && log[log.length - 1]}
              </Box>
            </Tooltip>
          </Grid>
          <Grid item xs={1}>
              <Button variant='contained' onClick={exitGame}>X</Button>
          </Grid>
        
            {isOverlayVisible && (
              <div id="logOverlay">
                <div id="logOverlayContent">
                  <div id="closeOverlay" onClick={handleCloseOverlay}>
                    Close [X]
                  </div>
                  <pre id="fullLog">
                    <Typography>{log.join('\n')}
                    </Typography>
                    </pre>
                </div>
              </div>
            )}
        </Grid>            
  );
};

export default GameLog;