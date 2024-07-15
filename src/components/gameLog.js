import React, { useState } from 'react';
import { Typography, Stack, Grid, Box } from '@mui/material';
import './custom.css';


const GameLog = ({ currentInstruction, log }) => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const handleLogClick = () => {
    setOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
  };

  // Font Size - Based on screen width & number of players
  const screenWidth = window.innerWidth;
  var customFontSize;
  //console.log(playerInfoWidth)
  if (screenWidth <= 400) {
      customFontSize = 0.75;
  } else if (screenWidth <= 800) {
      customFontSize = 0.5;
  } else if (screenWidth <= 1200) {
      customFontSize = 0.75;
  } else {
      customFontSize = 1;
  }
  console.log(customFontSize)

  return (
      <Grid container>
          <Grid item xs={6}>
              <Typography variant='h4' 
                sx ={{
                  textAlign:'left',
                  paddingX: 2,
                  fontSize: `${customFontSize*2}rem`
                }}
              >
                { currentInstruction }
                </Typography>
          </Grid>
          <Grid item xs = {6}>
            <Stack direction='row'
                sx={{
                  alignItems: 'center',
                  marginY:0,
                  paddingY:0
                }}
            >
            <Stack direction='column' sx={{width:'30%'}}>
              <Typography variant='h6' sx={{ marginX:2, paddingX:2, paddingY:0, fontSize: `${customFontSize*1}rem` }}>Game Log</Typography>
              <Typography variant='h6' sx={{ marginX:2, paddingX:2, paddingY:0, fontSize: `${customFontSize/2}rem` }}>(Click to Expand)</Typography>
            </Stack>
            <Box id="log" onClick={handleLogClick} sx={{width:'70%', p:0, mt:'0rem', fontSize: `${customFontSize}rem`}}>
                {log.length > 0 && log[log.length - 1]}
            </Box>
            </Stack>
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
      </Grid>
  );
};

export default GameLog;