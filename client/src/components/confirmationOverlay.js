import React from 'react';
import { Box, Typography, Button, Stack, Grid, Tooltip } from '@mui/material';

const ConfirmationOverlay = ({ text, cost, onConfirm, onCancel, isInfo = false }) => {
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
                }}
            >
            {/* Main text message */}
            <Typography variant="h6">{text}</Typography>

            {/* Cost information (if costs are supplied) */}
                { cost ? (
                <Stack direction='row' sx={{p:'2rem'}}>
                    <Typography variant="body1">Cost:</Typography>
                        <Tooltip title='Food Resource'>
                            <Box
                                component='img'
                                src='images/icons/icons-food.png'
                                alt='food'
                                sx={{ width: '1.5rem', height: '1.5rem', paddingLeft: '0.5rem'}}
                            ></Box>
                        </Tooltip>
                        <Typography sx={{fontSize: `1rem`, paddingX: '0.5rem'}}>{cost.food}</Typography>
                        
                        <Tooltip title='Wood Resource'>
                            <Box
                                component='img'
                                src='images/icons/icons-wood.png'
                                alt='wood'
                                sx={{ width: '1.5rem', height: '1.5rem', paddingLeft: '0.5rem'}}
                            ></Box>
                        </Tooltip>
                        <Typography sx={{fontSize: `1rem`, paddingX: '0.5rem'}}>{cost.wood}</Typography>

                        <Tooltip title="Metal Resource">
                            <Box
                                component='img'
                                src='images/icons/icons-metal.png'
                                alt='metal'
                                sx={{ width: '1.5rem', height: '1.5rem', paddingLeft: '0.5rem'}}
                            ></Box>
                        </Tooltip>
                        <Typography sx={{fontSize: `1rem`, paddingX: '0.5rem'}}>{cost.metal}</Typography>

                        <Tooltip title="Tech resource.  Only gained by answering IBM Skills Build questions correctly">
                            <Box
                                component='img'
                                src='images/icons/icons-tech.png'
                                alt='tech'
                                sx={{ width: '1.5rem', height: '1.5rem', paddingLeft: '0.5rem'}}
                            ></Box>
                        </Tooltip>
                        <Typography sx={{fontSize: `1rem`, paddingX: '0.5rem'}}>{cost.tech}</Typography>
                </Stack>) : null }

                {/* Buttons - if its just an info box, only 1 button should appear, otherwise there should be a Confirm & Cancel buttons. */}
                <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
                    {!isInfo && ( 
                    <Button variant="contained" color="primary" onClick={onCancel}>
                        Cancel
                    </Button>
                    )}
                    <Button variant="contained" color="secondary" onClick={onConfirm}>
                        {isInfo ? 'Okay' : 'Confirm'}
                    </Button>
                </Stack>

                {/* END */}
            </Box>
        </Box>
    );
};

export default ConfirmationOverlay;