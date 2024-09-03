import React, { useState, useEffect, useContext } from 'react';
import { Box, Typography, Button, Stack, Grid, Tooltip } from '@mui/material';

import { DimensionsContext } from './dimensionsContext';

const ConfirmationOverlay = ({ text, cost, onConfirm, onCancel, isInfo = false }) => {

    const {width, height} = useContext(DimensionsContext);
    const [customFontSize, setCustomFontSize] = useState(1 * Math.min(1, width / 1200));
    // Dynamically update font size as the screen width changes
    useEffect(() => {
      const calculateFontSize = () => {
        const baseFontSize = 1;
        const scaleFactor = Math.min(1, width / 1200); 
        return baseFontSize * scaleFactor;
      };
      setCustomFontSize(calculateFontSize());
    }, [width, height]);


    return (
        <Box 
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000, // Ensure that the overlay appears in front of the canvas.
            }}
        >
            <Box
                sx={{
                    bgcolor: 'white',
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                    maxWidth: '80%',
                    textAlign: 'center',
                    alignSelf: 'flex-start',
                    marginTop: '10rem'
                }}
            >
            {/* Main text message */}
            <Typography variant="h6" sx={{fontSize: `${customFontSize*2}rem`}}>{text}</Typography>

            {/* Cost information (if costs are supplied) */}
                { cost ? (
                <Stack direction='row' alignItems='center' sx={{p:'2rem', }}>
                    <Typography variant="body1" sx={{fontSize: `${customFontSize*1.5}rem`}}>Cost:</Typography>
                        <Tooltip title='Food Resource'>
                            <Box
                                component='img'
                                src='images/icons/icons-food.png'
                                alt='food'
                                sx={{ width: `${customFontSize*2}rem`, height: `${customFontSize*2}rem`, paddingLeft: '0.5rem'}}
                            ></Box>
                        </Tooltip>
                        <Typography sx={{fontSize: `${customFontSize*1.25}rem`, paddingX: '0.5rem'}}>{cost.food}</Typography>
                        
                        <Tooltip title='Wood Resource'>
                            <Box
                                component='img'
                                src='images/icons/icons-wood.png'
                                alt='wood'
                                sx={{ width: `${customFontSize*2}rem`, height: `${customFontSize*2}rem`, paddingLeft: '0.5rem'}}
                            ></Box>
                        </Tooltip>
                        <Typography sx={{fontSize: `${customFontSize*1.25}rem`, paddingX: '0.5rem'}}>{cost.wood}</Typography>

                        <Tooltip title="Metal Resource">
                            <Box
                                component='img'
                                src='images/icons/icons-metal.png'
                                alt='metal'
                                sx={{ width: `${customFontSize*2}rem`, height: `${customFontSize*2}rem`, paddingLeft: '0.5rem'}}
                            ></Box>
                        </Tooltip>
                        <Typography sx={{fontSize: `${customFontSize*1.25}rem`, paddingX: '0.5rem'}}>{cost.metal}</Typography>

                        <Tooltip title="Tech resource.  Only gained by answering IBM Skills Build questions correctly">
                            <Box
                                component='img'
                                src='images/icons/icons-tech.png'
                                alt='tech'
                                sx={{ width: `${customFontSize*2}rem`, height: `${customFontSize*2}rem`, paddingLeft: '0.5rem'}}
                            ></Box>
                        </Tooltip>
                        <Typography sx={{fontSize: `${customFontSize*1.25}rem`, paddingX: '0.5rem'}}>{cost.tech}</Typography>
                </Stack>) : null }

                {/* Buttons - if its just an info box, only 1 button should appear, otherwise there should be a Confirm & Cancel buttons. */}
                <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
                    {!isInfo && ( 
                    <Button variant="contained" color="primary" onClick={onCancel}>
                        <Typography sx={{fontSize: `${customFontSize*1.25}rem`, paddingX: '0.5rem'}}>
                            Cancel
                        </Typography>
                    </Button>
                    )}
                    <Button variant="contained" color="secondary" onClick={onConfirm}>
                        <Typography sx={{fontSize: `${customFontSize*1.25}rem`, paddingX: '0.5rem'}}>
                            {isInfo ? 'Okay' : 'Confirm'}
                        </Typography>
                    </Button>
                </Stack>

                {/* END */}
            </Box>
        </Box>
    );
};

export default ConfirmationOverlay;