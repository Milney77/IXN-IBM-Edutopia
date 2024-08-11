import React, {useEffect, useState, useContext } from 'react';
import { Box, Typography, Button, Stack, Grid, Tooltip, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Paper from '@mui/material/Paper';

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

import { DimensionsContext } from './dimensionsContext';

import { tradingRatios } from '../constants/constants';

export const calculateFontSizeAndMargin = (width, setCustomFontSize, setCustomMargin) => {
    // Size is based on screen width & number of players
    const overlayWidth = Math.min(900, width * 0.8);
    console.log(overlayWidth);
    let newFontSize = Math.min(1.5, Math.max(0.5, 0.75 + 0.25 * Math.floor((overlayWidth)/300)));
    let newMargin = Math.min(1.5, Math.max(0, 0.25 * Math.floor((overlayWidth - 100)/100)));
    console.log('overlayWidth:', overlayWidth, ', newFontSize:', newFontSize);
  setCustomFontSize(newFontSize);
  setCustomMargin(newMargin);
};


const TradeOverlay = ({ playerData, onConfirm, onCancel }) => {
    
    const { width } = useContext(DimensionsContext);
    const [customFontSize, setCustomFontSize] = useState(1);
    const [customMargin, setCustomMargin] = useState(1);
    useEffect(() => {
        // Determine the font & margin sizes
        calculateFontSizeAndMargin(width, setCustomFontSize, setCustomMargin);
      }, [width]);

    // Setup states for all resources (don't want to alter player data until trade is confirmed) //
    const [playerStartFood,  setPlayerStartFood ] = useState(playerData.food);
    const [playerStartWood,  setPlayerStartWood ] = useState(playerData.wood);
    const [playerStartMetal, setPlayerStartMetal] = useState(playerData.metal);
    const [playerStartTech,  setPlayerStartTech ] = useState(playerData.tech);

    const [bankRecFood , setBankRecFood ] = useState(0);
    const [bankRecWood , setBankRecWood ] = useState(0);
    const [bankRecMetal, setBankRecMetal] = useState(0);
    const [bankRecTech , setBankRecTech]  = useState(0);

    const [bankSendFood , setBankSendFood ] = useState(999);
    const [bankSendWood , setBankSendWood ] = useState(999);
    const [bankSendMetal, setBankSendMetal] = useState(999);
    
    const [playerRecFood , setPlayerRecFood ] = useState(0);
    const [playerRecWood , setPlayerRecWood ] = useState(0);
    const [playerRecMetal, setPlayerRecMetal] = useState(0);

    const [resourcesGained, setResourcesGained] = useState(0);
    const [resourcesTaken, setResourcesTaken] = useState(0);
    
    // Constants for trading (may need to be sourced from playerData, if this is allowed to change)
    const tradeRatioFood = tradingRatios.tradeRatioFood;
    const tradeRatioWood = tradingRatios.tradeRatioWood;
    const tradeRatioMetal = tradingRatios.tradeRatioMetal;
    const tradeRatioTech = tradingRatios.tradeRatioTech;

    const tradeBankRatioFood = tradingRatios.tradeBankRatioFood;
    const tradeBankRatioWood = tradingRatios.tradeBankRatioWood;
    const tradeBankRatioMetal = tradingRatios.tradeBankRatioMetal;
    const tradeBankRatioTech = tradingRatios.tradeBankRatioTech;

    // Some booleans to help determine when players can trade 
    const canTradeUpFood    = bankRecFood >= tradeRatioFood;
    const canTradeDownFood  = playerStartFood >= tradeRatioFood;
    const canTradeUpWood    = bankRecWood >= tradeRatioWood;
    const canTradeDownWood  = playerStartWood >= tradeRatioWood;
    const canTradeUpMetal   = bankRecMetal >= tradeRatioMetal;
    const canTradeDownMetal = playerStartMetal >= tradeRatioMetal;
    const canTradeUpTech    = bankRecTech >= tradeRatioTech;
    const canTradeDownTech  = playerStartTech >= tradeRatioTech;

    const canTradeBankFoodUp    = playerRecFood >= 1;
    const canTradeBankFoodDown  = resourcesTaken < resourcesGained; 
    const canTradeBankWoodUp    = playerRecWood >= 1;
    const canTradeBankWoodDown  = resourcesTaken < resourcesGained; 
    const canTradeBankMetalUp   = playerRecMetal >= 1;
    const canTradeBankMetalDown = resourcesTaken < resourcesGained; 

    // Formatting constants
    const upButtonColor = 'blue';
    const downButtonColor = 'green';
    const disabledButtonColor = 'grey';
    const iconFontSizeModifier = 0.75;
    const titleFontModifier = 1.5;
    const subTitleFontModifier = 0.9;
    const txtFontSizeModifier = 0.75;


    // Useful components as I am doing a lot of the same things repeatedly.
    const IconDisplay = ({ tooltipTxt, imgSource, alttxt, iconFontSize }) => {
        return (
            <Tooltip title={tooltipTxt}>
                <Box component='img'
                    src={imgSource}
                    alt={alttxt}
                    sx={{ width: iconFontSize, height: iconFontSize}}>
                </Box>
            </Tooltip>
        )
    }
    

  
    
    // Functions to handle the trading
    const handlePlayerTrade = (resource, direction) => {
        var tradeMultiplier = 1;
        if (direction==='up') {
            tradeMultiplier = -1;
        }
        if (resource === 'food') {
            setBankRecFood(bankRecFood + tradeMultiplier * tradeRatioFood);
            setPlayerStartFood(playerStartFood - tradeMultiplier * tradeRatioFood);
            setResourcesGained(resourcesGained + tradeMultiplier * tradeBankRatioFood);
        } else if (resource === 'wood') {
            setBankRecWood(bankRecWood + tradeMultiplier * tradeRatioWood);
            setPlayerStartWood(playerStartWood - tradeMultiplier * tradeRatioWood);
            setResourcesGained(resourcesGained + tradeMultiplier * tradeBankRatioWood);
        } else if (resource === 'metal') {
            setBankRecMetal(bankRecMetal + tradeMultiplier * tradeRatioMetal);
            setPlayerStartMetal(playerStartMetal - tradeMultiplier * tradeRatioMetal);
            setResourcesGained(resourcesGained + tradeMultiplier * tradeBankRatioMetal);
        } else if (resource === 'tech') {
            setBankRecTech(bankRecTech + tradeMultiplier * tradeRatioTech);
            setPlayerStartTech(playerStartTech - tradeMultiplier * tradeRatioTech);
            setResourcesGained(resourcesGained + tradeMultiplier * tradeBankRatioTech);
        }
    }

    const handleBankTrade = (resource, direction) => {
        var tradeMultiplier = 1;
        if (direction==='up') {
            tradeMultiplier = -1;
        }
        if (resource === 'food') {
            setBankSendFood(bankSendFood - tradeMultiplier * tradeBankRatioFood);
            setPlayerRecFood(playerRecFood + tradeMultiplier * tradeBankRatioFood);
            setResourcesTaken(resourcesTaken + tradeMultiplier * tradeBankRatioFood);
        } else if (resource === 'wood') {
            setBankSendWood(bankSendWood - tradeMultiplier * tradeBankRatioWood);
            setPlayerRecWood(playerRecWood + tradeMultiplier * tradeBankRatioWood);
            setResourcesTaken(resourcesTaken + tradeMultiplier * tradeBankRatioWood);
        } else if (resource === 'metal') {
            setBankSendMetal(bankSendMetal - tradeMultiplier * tradeBankRatioMetal);
            setPlayerRecMetal(playerRecMetal + tradeMultiplier * tradeBankRatioMetal);
            setResourcesTaken(resourcesTaken + tradeMultiplier * tradeBankRatioMetal);
        }
    }

    const confirmTrade = () => {
        const tradedResources = {
            outWood:  bankRecWood,
            outFood:  bankRecFood,
            outMetal: bankRecMetal,
            outTech:  bankRecTech,
            inWood:   playerRecWood,
            inFood:   playerRecFood,
            inMetal:  playerRecMetal,
        };
        onConfirm(tradedResources);
    }

    return (
        // Box to hold everything.
        <Box id="tradeOverlay">
            
            <Box id="tradeOverlayContent"
                sx={{
                    textAlign: 'center',
                }}
            >
            {/* Title */}
            <Typography variant="h4" sx={{fontSize:`${customFontSize*titleFontModifier}rem`, paddingY:'1rem'}}>Trading with the bank</Typography>
            

            {/* Split into 2 boxes - one for trading to the bank, the other for trading to the player */}
            <Stack direction='row' spacing={8} sx={{ justifyContent:'center'}}>

                <Box>
                    <Typography variant="h6" sx={{fontSize:`${customFontSize*subTitleFontModifier}rem`}}>Select resources to give to the bank</Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{}} aria-label="trade-to-bank">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>
                                        <IconDisplay  tooltipTxt='Food' imgSource='images/icons/icons-food.png' alttxt='food' iconFontSize={`${customFontSize*iconFontSizeModifier}rem`} />
                                        </TableCell>
                                    <TableCell>
                                        <IconDisplay  tooltipTxt='Wood' imgSource='images/icons/icons-wood.png' alttxt='wood' iconFontSize={`${customFontSize*iconFontSizeModifier}rem`} />
                                        </TableCell>
                                    <TableCell>
                                        <IconDisplay  tooltipTxt='Metal' imgSource='images/icons/icons-metal.png' alttxt='metal' iconFontSize={`${customFontSize*iconFontSizeModifier}rem`} />
                                        </TableCell>
                                    <TableCell>
                                        <IconDisplay  tooltipTxt='Tech' imgSource='images/icons/icons-tech.png' alttxt='tech' iconFontSize={`${customFontSize*iconFontSizeModifier}rem`} />
                                        </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                <TableCell>
                                    <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>Player</Typography>
                                    </TableCell>
                                <TableCell>
                                    <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>{ playerStartFood }</Typography>
                                    </TableCell>
                                <TableCell>
                                    <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>{ playerStartWood }</Typography>
                                    </TableCell>
                                <TableCell>
                                    <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>{ playerStartMetal }</Typography>
                                    </TableCell>
                                <TableCell>
                                    <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>{ playerStartTech }</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                <TableCell>
                                    <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>Trade Ratio</Typography>
                                </TableCell>
                                <TableCell>
                                    <Stack direction='column'>
                                        <ArrowCircleUpIcon onClick={canTradeUpFood ? () => handlePlayerTrade('food', 'up') : null} 
                                            sx={{ cursor: canTradeUpFood ? 'pointer' : 'not-allowed',
                                                  color: canTradeUpFood ? upButtonColor : disabledButtonColor,
                                             }}/>
                                        <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>{tradeRatioFood}:{tradeBankRatioFood}</Typography>
                                        <ArrowCircleDownIcon onClick={canTradeDownFood ? () => handlePlayerTrade('food', 'down') : null} 
                                            sx={{ cursor: canTradeDownFood ? 'pointer' : 'not-allowed',
                                                  color: canTradeDownFood ? downButtonColor : disabledButtonColor,
                                             }}/>
                                    </Stack>
                                </TableCell>

                                <TableCell>
                                    <Stack direction='column'>
                                        <ArrowCircleUpIcon onClick={canTradeUpWood ? () => handlePlayerTrade('wood', 'up') : null} 
                                            sx={{ cursor: canTradeUpWood ? 'pointer' : 'not-allowed',
                                                  color: canTradeUpWood ? upButtonColor : disabledButtonColor,
                                             }}/>
                                        <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>{tradeRatioWood}:{tradeBankRatioWood}</Typography>
                                        <ArrowCircleDownIcon onClick={canTradeDownWood ? () => handlePlayerTrade('wood', 'down') : null} 
                                            sx={{ cursor: canTradeDownWood ? 'pointer' : 'not-allowed',
                                                  color: canTradeDownWood ? downButtonColor : disabledButtonColor,
                                             }}/>
                                    </Stack>
                                </TableCell>

                                <TableCell>
                                    <Stack direction='column'>
                                        <ArrowCircleUpIcon onClick={canTradeUpMetal ? () => handlePlayerTrade('metal', 'up') : null} 
                                            sx={{ cursor: canTradeUpMetal ? 'pointer' : 'not-allowed',
                                                  color: canTradeUpMetal ? upButtonColor : 'grey',
                                             }}/>
                                        <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>{tradeRatioMetal}:{tradeBankRatioMetal}</Typography>
                                        <ArrowCircleDownIcon onClick={canTradeDownMetal ? () => handlePlayerTrade('metal', 'down') : null} 
                                            sx={{ cursor: canTradeDownMetal ? 'pointer' : 'not-allowed',
                                                  color: canTradeDownMetal ? downButtonColor : disabledButtonColor,
                                             }}/>
                                    </Stack>
                                </TableCell>

                                <TableCell>
                                    <Stack direction='column'>
                                        <ArrowCircleUpIcon onClick={canTradeUpTech ? () => handlePlayerTrade('tech', 'up') : null} 
                                            sx={{ cursor: canTradeUpTech ? 'pointer' : 'not-allowed',
                                                  color: canTradeUpTech ? upButtonColor : 'grey',
                                             }}/>
                                        <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>{tradeRatioTech}:{tradeBankRatioTech}</Typography>
                                        <ArrowCircleDownIcon onClick={canTradeDownTech ? () => handlePlayerTrade('tech', 'down') : null} 
                                            sx={{ cursor: canTradeDownTech ? 'pointer' : 'not-allowed',
                                                  color: canTradeDownTech ? downButtonColor : disabledButtonColor,
                                             }}/>
                                    </Stack>
                                </TableCell>
                                
                                </TableRow>

                                <TableRow>
                                <TableCell>
                                    <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>Bank</Typography>
                                    </TableCell>
                                <TableCell>
                                    <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>{ bankRecFood }</Typography>
                                    </TableCell>
                                <TableCell>
                                    <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>{ bankRecWood }</Typography>
                                    </TableCell>
                                <TableCell>
                                    <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>{ bankRecMetal }</Typography>
                                    </TableCell>
                                <TableCell>
                                    <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>{ bankRecTech }</Typography>
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`, mt:'0.5rem'}}>Resources Available: {resourcesGained}</Typography>
                </Box>
            

                <Box>
                <Typography variant="h6" sx={{fontSize:`${customFontSize*subTitleFontModifier}rem`}}>Select resources to gain from the bank</Typography>
                <TableContainer component={Paper}>
                        <Table sx={{}} aria-label="trade-to-bank">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>
                                        <IconDisplay  tooltipTxt='Food' imgSource='images/icons/icons-food.png' alttxt='food' iconFontSize={`${customFontSize*iconFontSizeModifier}rem`} />    
                                        </TableCell>
                                    <TableCell>
                                        <IconDisplay  tooltipTxt='Wood' imgSource='images/icons/icons-wood.png' alttxt='wood' iconFontSize={`${customFontSize*iconFontSizeModifier}rem`} />
                                        </TableCell>
                                    <TableCell>
                                        <IconDisplay  tooltipTxt='Metal' imgSource='images/icons/icons-metal.png' alttxt='tech' iconFontSize={`${customFontSize*iconFontSizeModifier}rem`} />
                                        </TableCell>
                                </TableRow>
                            </TableHead>

                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>Bank</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>{bankSendFood}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>{bankSendWood}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>{bankSendMetal}</Typography>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                            <TableCell></TableCell>
                            <TableCell><Stack direction='column'>
                                    <ArrowCircleUpIcon onClick={canTradeBankFoodUp ? () => handleBankTrade('food', 'up') : null}
                                        sx={{ cursor: canTradeBankFoodUp ? 'pointer' : 'not-allowed',
                                            color: canTradeBankFoodUp ? upButtonColor : disabledButtonColor,
                                        }}/>
                                    <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}><br/></Typography>
                                    <ArrowCircleDownIcon onClick={canTradeBankFoodDown ? () => handleBankTrade('food', 'down') : null}
                                        sx={{ cursor: canTradeBankFoodDown ? 'pointer' : 'not-allowed',
                                            color: canTradeBankFoodDown ? downButtonColor : disabledButtonColor,
                                        }}/>
                                    </Stack></TableCell>
                            <TableCell><Stack direction='column'>
                                    <ArrowCircleUpIcon onClick={canTradeBankWoodUp ? () => handleBankTrade('wood', 'up') : null}
                                        sx={{ cursor: canTradeBankWoodUp ? 'pointer' : 'not-allowed',
                                            color: canTradeBankWoodUp ? upButtonColor : disabledButtonColor,
                                        }}/>
                                    <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}><br/></Typography>
                                    <ArrowCircleDownIcon onClick={canTradeBankWoodDown ? () => handleBankTrade('wood', 'down') : null}
                                        sx={{ cursor: canTradeBankWoodDown ? 'pointer' : 'not-allowed',
                                            color: canTradeBankWoodDown ? downButtonColor : disabledButtonColor,
                                        }}/>
                                    </Stack></TableCell>
                            <TableCell><Stack direction='column'>
                                    <ArrowCircleUpIcon onClick={canTradeBankMetalUp ? () => handleBankTrade('metal', 'up') : null}
                                        sx={{ cursor: canTradeBankMetalUp ? 'pointer' : 'not-allowed',
                                            color: canTradeBankMetalUp ? upButtonColor : disabledButtonColor,
                                        }}/>
                                    <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}><br/></Typography>
                                    <ArrowCircleDownIcon onClick={canTradeBankMetalDown ? () => handleBankTrade('metal', 'down') : null}
                                        sx={{ cursor: canTradeBankMetalDown ? 'pointer' : 'not-allowed',
                                            color: canTradeBankMetalDown ? downButtonColor : disabledButtonColor,
                                        }}/>
                                    </Stack></TableCell>
                            </TableRow>

                            <TableRow>
                            <TableCell>
                                <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>Player</Typography>
                                </TableCell>
                            <TableCell>
                                <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>{ playerRecFood }</Typography>
                                </TableCell>
                            <TableCell>
                                <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>{ playerRecWood }</Typography>
                                </TableCell>
                            <TableCell>
                                <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`}}>{ playerRecMetal }</Typography>
                                </TableCell>
                            </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography sx={{fontSize: `${customFontSize*txtFontSizeModifier}rem`, mt:'0.5rem'}}>Resources Taken: {resourcesTaken}</Typography>
                </Box>
            </Stack>

            <Typography variant='h6' sx={{fontSize:`${customFontSize*txtFontSizeModifier}rem`, mt:'1rem'}}>
                {resourcesTaken > resourcesGained ? 'Invalid trade - you are requesting more resources from the bank than what you are offering in return.'
                       : resourcesTaken < resourcesGained ? 'You are giving the bank more resources than you need to.' : <br/>}
                </Typography>
            
            {/* Buttons */}
            <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
                <Button variant="contained" color="primary" onClick={onCancel}>
                    <Typography sx={{fontSize:`${customFontSize*txtFontSizeModifier}rem`}}>Cancel</Typography>
                </Button>
                <Button variant="contained" color="secondary" onClick={confirmTrade}
                    disabled = {resourcesTaken > resourcesGained}
                    >
                    <Typography sx={{fontSize:`${customFontSize*txtFontSizeModifier}rem`}}>Confirm</Typography>
                </Button>
            </Stack>

            </Box>
        </Box>
    );
};

export default TradeOverlay;