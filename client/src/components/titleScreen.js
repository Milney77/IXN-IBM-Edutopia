import React, { useState } from 'react';

import { Typography, Box, Stack, Button } from '@mui/material';

const TitleMenu = ({ handleNewGameClick, handleResumeGameClick, canResume }) => {
  
  return (
    <div>
      <Typography variant='h1'>Title Screen</Typography>
      <Box justifyItems='center'>
        <Box sx={{ maxWidth: '1200px', width: '50%'}}>
            <Stack direction = 'column' justifyContent='space-between' spacing={2}>
              <Button variant='contained' onClick={handleNewGameClick} sx={{ marginTop: '1rem' }}>New Game</Button>
              <Button variant='contained' onClick={handleResumeGameClick} sx={{ marginTop: '1rem' }} disabled={!canResume}>Resume Game</Button>
              <Button variant='contained'>High Scores</Button>
            </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default TitleMenu;