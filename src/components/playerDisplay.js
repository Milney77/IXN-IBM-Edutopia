import React, { useRef, useEffect, useState } from 'react';
import { Stack, Box, Grid, Button, Typography, TextField, Tooltip  } from '@mui/material';
import { colorMap } from '../constants/constants';


import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';


const PlayerBox = (props) => {
    const {playerID, playerData, BoxWidth, images, gamePlayVariables} = props;
    
    // Determine colors
    const color = colorMap[playerData.color];

    // Font Size - Based on screen width & number of players
    const screenWidth = window.innerWidth;
    var customFontSize;
    var customMargin;
    var playerInfoWidth = screenWidth / gamePlayVariables.numberPlayers;
    //console.log(playerInfoWidth)
    if (playerInfoWidth <= 200) {
        customFontSize = 0.5;
        customMargin = 1;
    } else if (playerInfoWidth <= 300) {
        customFontSize = 0.75;
        customMargin = 1;
    } else if (playerInfoWidth <= 400) {
        customFontSize = 1;
        customMargin = 2;
    } else {
        customFontSize = 1.25;
        customMargin = 2;
    }

    /* Determine if the action menu needs to be shown */
    var showActionMenu;
    if (gamePlayVariables.currentPlayer === playerData.id && gamePlayVariables.currentPhase != 3) {
        showActionMenu = true;
    } else {
        showActionMenu = false;
    }

       
    return (
        
        /* One Box to hold them all */
        <Box sx = {{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: BoxWidth,
                bgcolor: color ? color.background : 'grey',
                border: `2px solid ${color ? color.border : 'black'}`,
                borderRadius: '8px',
                marginTop: 1,
                mx: customMargin,
            }}>
            
            {/* Use a grid to help with placement and sizing */}
            <Grid container>

            {/* Button to launch skills build */}
            <Grid item xs={2}>
                <Box>
                <ArrowCircleRightOutlinedIcon sx={{fontSize: `${customFontSize*3}rem`,}}/>
                </Box>
            </Grid>

            {/* Player names, victory points and resources */}
            <Grid item xs={10}>
                <Stack direction='column'>
                    {/* First Row - Player Name & Victory Points */}
                    <Grid container>
                        <Grid item xs={10}>
                            <Typography
                                    variant="h6"
                                    noWrap
                                    sx={{
                                        overflow: 'hidden',
                                        whiteSpace: 'nowrap',
                                        textAlign: 'left',
                                        fontSize: `${customFontSize}rem`,
                                        mx:1,
                                        p:0,
                                    }}
                                >
                                    {playerData.name}
                                </Typography>
                        </Grid>
                        <Grid item xs={2} alignItems='center'>
                            <Stack direction='row' alignItems='center'>
                                <StarRateOutlinedIcon sx={{fontSize: `${customFontSize*1.5}rem`,}}/>
                                <Typography variant="h6" paddingLeft={0.5} sx={{fontSize: `${customFontSize}rem`,}}>
                                    {playerData.vp}
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>

                    {/* Second Row - Resources */}
                    <Grid container alignItems='center'>
                        <Tooltip title='Food Resource'>
                            <Grid item xs={1}>
                                <Box
                                    component='img'
                                    src='images/icons/icons-food.png'
                                    alt='food'
                                    sx={{ width: '100%', height: '100%'}}
                                ></Box>
                            </Grid>
                        </Tooltip>
                        <Grid item xs={1}>
                            <Typography sx={{fontSize: `${customFontSize - 0.25}rem`,}}>{playerData.resources.food}</Typography>
                        </Grid>
                        <Grid item xs={0.5}></Grid>

                        <Tooltip title='Wood Resource'>
                        <Grid item xs={1}>
                            <Box
                                component='img'
                                src='images/icons/icons-wood.png'
                                alt='wood'
                                sx={{ width: '100%', height: '100%'}}
                            ></Box>
                        </Grid>
                        </Tooltip>
                        <Grid item xs={1}>
                            <Typography sx={{fontSize: `${customFontSize - 0.25}rem`,}}>{playerData.resources.wood}</Typography>
                        </Grid>
                        <Grid item xs={0.5}></Grid>

                        <Tooltip title="Metal Resource">
                        <Grid item xs={1}>
                            <Box
                                component='img'
                                src='images/icons/icons-metal.png'
                                alt='metal'
                                sx={{ width: '100%', height: '100%'}}
                            ></Box>
                        </Grid>
                        </Tooltip>
                        <Grid item xs={1}>
                            <Typography sx={{fontSize: `${customFontSize - 0.25}rem`,}}>{playerData.resources.metal}</Typography>
                        </Grid>
                        <Grid item xs={0.5}></Grid>

                        <Tooltip title="Tech resource.  Only gained by answering IBM Skills Build questions correctly">
                        <Grid item xs={1}>
                            <Box
                                component='img'
                                src='images/icons/icons-tech.png'
                                alt='tech'
                                sx={{ width: '100%', height: '100%'}}
                            ></Box>
                        </Grid>
                        </Tooltip>
                        <Grid item xs={1}>
                            <Typography sx={{fontSize: `${customFontSize - 0.25}rem`,}}>{playerData.resources.tech}</Typography>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                    </Grid>
                </Stack>
            </Grid>


            {/* Action Menu -- Removed, this will be part of the board canvas.             
            
            {showActionMenu ? (          
           <Grid container>
            <Grid item xs={2}>
                <Stack>
                    <Box
                        component='img'
                        src='images/icons/icon-research.png'
                        alt='research'
                        sx={{ width: '100%', height: '100%'}}
                    />
                    <Typography sx={{fontSize: `${customFontSize - 0.25}rem`, marginY:0}}>Research</Typography>
                </Stack>
            </Grid>
            <Grid item xs={2}>
                <Stack>
                    <Box
                        component='img'
                        src='images/icons/icon-develop.png'
                        alt='develop'
                        sx={{ width: '100%', height: '100%'}}
                    />
                    <Typography sx={{fontSize: `${customFontSize - 0.25}rem`, marginY:0}}>Develop</Typography>
                </Stack>
            </Grid>
            <Grid item xs={2}>
                <Stack>
                    <Box
                        component='img'
                        src='images/icons/icon-generateresources.png'
                        alt='generate-resources'
                        sx={{ width: '100%', height: '100%'}}
                    />
                    <Typography sx={{fontSize: `${customFontSize - 0.25}rem`, marginY:0}}>Gather</Typography>
                </Stack>
            </Grid>
            <Grid item xs={2}>
                <Stack>
                    <Box
                        component='img'
                        src='images/icons/icon-takeover.png'
                        alt='food'
                        sx={{ width: '100%', height: '100%'}}
                    />
                    <Typography sx={{fontSize: `${customFontSize - 0.25}rem`, marginY:0}}>Control</Typography>
                </Stack>
            </Grid> 
            <Grid item xs={2}>
                <Stack>
                    <Box
                        component='img'
                        src='images/icons/icon-trade.png'
                        alt='food'
                        sx={{ width: '100%', height: '100%'}}
                    />
                    <Typography sx={{fontSize: `${customFontSize - 0.25}rem`, marginY:0}}>Trade</Typography>
                </Stack>
            </Grid> 
            <Grid item xs={2}>
                <Stack>
                    <Box
                        component='img'
                        src='images/icons/icon-takeover.png'
                        alt='food'
                        sx={{ width: '100%', height: '100%'}}
                    />
                    <Typography sx={{fontSize: `${customFontSize - 0.25}rem`, marginY:0}}>End Turn</Typography>
                </Stack>
            </Grid> 
            </Grid>
        ):(null)}

                */}
 
        </Grid>
     </Box>
    )
}



export const PlayerDisplay = ({ playerData, images, gamePlayVariables }) => {
    const BoxWidth = `${Math.floor(100 / gamePlayVariables.numberPlayers)}%`;
    return (
        <div className='playerdisplay'>
           <Box
                sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                bgcolor: 'black'
                }}
            >
            { playerData.slice(0, gamePlayVariables.numberPlayers).map(player => (
                    <PlayerBox key={ player.id }
                        playerData = { player }
                        BoxWidth = { BoxWidth }
                        images = {images}
                        gamePlayVariables = {gamePlayVariables}
                    />))}
            </Box>
    </div>
    )
}

export default PlayerDisplay;

