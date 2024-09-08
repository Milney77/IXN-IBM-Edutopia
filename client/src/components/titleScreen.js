import React, { useState, useContext, useEffect } from 'react';
import { DimensionsContext } from './dimensionsContext';
import { Typography, Box, Stack, Button } from '@mui/material';

const TitleMenu = ({ handleNewGameClick, handleResumeGameClick, canResume, handleAdminClick, handleHowToOpenClick }) => {

    const { width, height } = useContext(DimensionsContext);
    const [customFontSize, setCustomFontSize] = useState(1);
    const [customMargin, setCustomMargin] = useState(2);
    
    useEffect(() => {
      // Determine the font & margin sizes
      const calculateFontSize = () => {
          // Size is based on screen width only
          //let newFontSize = Math.min(2, Math.max(1, 1 + 0.25 * Math.floor((width-300)/300)));
          let newFontSize = 2 * Math.min(1, Math.max(0.25, (width / 1600)));
          let newMarginSize = 2 * Math.min(1, Math.max(0.25, (width / 1600)));
          //let newMarginSize = Math.min(3, Math.max(0.5, 0.5 + 0.5 * Math.floor((width-300)/300)));
        setCustomFontSize(newFontSize);
        setCustomMargin(newMarginSize);
      };
      calculateFontSize();
    }, [width, height]);
    //console.log('W:', width, ', H:', height, ', Font:', customFontSize, ', Margin:', customMargin);
    const TileBox = ({ imageref, textref, top, bottom, left, right }) => {
      return (
        <Box
          sx={{position: 'absolute',
            top: top, left: left,
            height: '8vw', width: '8vw',
            transformOrigin: 'center',
            animation: 'rotation 10s infinite linear',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            zIndex: 0,
          }}
        >
          <img src={imageref} alt={textref} style={{ width: '200%', height: '200%', objectFit: "contain" }} />
        </Box>
      );
    };
  

  
  return (
    <div>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" minHeight="100vh">
        {/* TITLE */}
        <Box sx={{ width: '80%', maxWidth: '1200px', textAlign: 'center', marginBottom: `${customMargin}rem`, zIndex: 10 }}>
        <Typography variant='h4' sx={{fontSize:`${customFontSize*4}rem`, color:'white', marginTop: `${customMargin*0.5}rem`, fontFamily: 'Copperplate, Papyrus, fantasy', letterSpacing: 10}}>
            EDUTOPIA
          </Typography>
          <Typography variant='h4' sx={{fontSize:`${customFontSize}rem`, color:'white', marginTop: `${customMargin}rem`}}>
            A game to support IBM Skills Build Courses
          </Typography>
        </Box>

        {/* BUTTONS */}       
        <Box sx={{ maxWidth: '1200px', width: '50%', marginY:`${customMargin}rem`,}}>
        <Stack direction="column" spacing={`${customMargin}rem`} alignItems="center" sx={{zIndex: "10"}}>
          <Box sx={{ marginTop: '1rem' }}>
            <Button
              variant="contained"
              onClick={handleNewGameClick}
              sx={{marginTop: '1rem', padding: '1rem 2rem', borderRadius: '20px', border: '2px solid rgb(25, 118, 210)', textTransform: 'none', 
                fontFamily: 'Copperplate, Papyrus, fantasy',
                '&:disabled': {
                  backgroundColor: 'rgb(176, 190, 197)',
                  color: 'rgb(255, 255, 255)',
                  border: '2px solid rgb(176, 190, 197)',
                },
              }}>
              <Typography variant="h3" sx={{ fontSize:`${customFontSize}rem`, fontFamily: 'Copperplate, Papyrus, fantasy', letterSpacing: 2}}>
                New Game
              </Typography>
            </Button>
          </Box>

          <Box sx={{ marginTop: '1rem' }}>
            <Button
              variant="contained"
              onClick={handleResumeGameClick}
              sx={{marginTop: '1rem', padding: '1rem 2rem', borderRadius: '20px', border: '2px solid rgb(25, 118, 210)', textTransform: 'none', 
                fontFamily: 'Copperplate, Papyrus, fantasy',
                '&:disabled': {
                  backgroundColor: 'rgb(176, 190, 197)',
                  color: 'rgb(255, 255, 255)',
                  border: '2px solid rgb(176, 190, 197)',
                },
              }}
              disabled={!canResume}
            >
              <Typography variant="h3" sx={{ fontSize:`${customFontSize}rem`, fontFamily: 'Copperplate, Papyrus, fantasy', letterSpacing: 2 }}>
                Resume Game
              </Typography>
            </Button>
          </Box>

          <Box sx={{ marginTop: '1rem' }}>
            <Button
              variant="contained"
              onClick={handleAdminClick}
              sx={{marginTop: '1rem', padding: '1rem 2rem', borderRadius: '20px', border: '2px solid rgb(25, 118, 210)', textTransform: 'none',
                fontFamily: 'Copperplate, Papyrus, fantasy',
                '&:disabled': {
                  backgroundColor: 'rgb(176, 190, 197)',
                  color: 'rgb(255, 255, 255)',
                  border: '2px solid rgb(176, 190, 197)',
                },
              }}>
              <Typography variant="h3" sx={{ fontSize:`${customFontSize}rem`, fontFamily: 'Copperplate, Papyrus, fantasy', letterSpacing: 2 }}>
                Admin Tools
              </Typography>
            </Button>
          </Box>

          <Box sx={{ marginTop: '1rem', marginBottom: '2rem' }}>
            <Button
              variant="contained"
              onClick={handleHowToOpenClick}
              sx={{marginTop: '1rem', padding: '1rem 2rem', borderRadius: '20px', border: '2px solid rgb(25, 118, 210)', textTransform: 'none',
                fontFamily: 'Copperplate, Papyrus, fantasy',
                '&:disabled': {
                  backgroundColor: 'rgb(176, 190, 197)',
                  color: 'rgb(255, 255, 255)',
                  border: '2px solid rgb(176, 190, 197)',
                },
              }}>
              <Typography variant="h3" sx={{ fontSize:`${customFontSize}rem`, fontFamily: 'Copperplate, Papyrus, fantasy', letterSpacing: 2 }}>
                How to Play
              </Typography>
            </Button>
          </Box>
        </Stack>
        </Box>
      </Box>

      {/* Add some rotating tiles to make it look nice! */}
      <TileBox imageref = "/images/tiles/food.png"
          textref = "food tile"
           top = '45%'
           left = '10%'
         />
      <TileBox imageref = "/images/tiles/metal.png"
          textref = "food tile"
           top = '45%'
           left = '75%'
         />
      <TileBox imageref = "/images/tiles/sea.png"
          textref = "food tile"
           top = '70%'
           left = '10%'
         />
      <TileBox imageref = "/images/tiles/wood.png"
          textref = "food tile"
           top = '70%'
           left = '75%'
         />
       
    </div>
  );
};

export default TitleMenu;