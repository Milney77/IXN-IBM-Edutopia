// Required imports
import React, { useRef, useEffect, useState, useCallback, useLayoutEffect, useContext } from 'react';

import { Box, Button } from '@mui/material';
import axios from 'axios';

// Custom imports
import './App.css';

import { DrawBoard } from './components/gameBoardRenderer';
import { mouseXY_to_HexID } from './components/gameBoardListener';
import { DimensionsContext } from './components/dimensionsContext';

import ConfirmationOverlay from './components/confirmationOverlay';
import TradeOverlay from './components/tradeOverlay';

import { resourceCosts, aiparameters } from './constants/constants';

import { BoardInitialisation, CalculateVictoryPoints, CalculateHexStatus, ValidateMove} from './utilities/boardFunctions';
import { HandleMouseClick } from './utilities/mouseClickHandler';
import {CalculateResources, GenerateResources} from './utilities/resourceFunctions';
import {ComputerRankActions, ComputerSelectAction, PerformAction, CalculateBestResource} from './utilities/computerPlayerFunctions';

// Game Board
const GameBoardCanvas = ({ images, gameComponents, addLog, addCurrentInstruction, exitToTitle }) => {
  // Break the gameComponents into their individual components
  const {boardData, mapData, playerData, gamePlayData, questionData, UpdateMapData, UpdatePlayerData, UpdateGamePlayData } = gameComponents; 
  // BOARD DISPLAY VARIABLES - These are just how much the board is offset from the edges of the canvas
  const tilesHOffset = 1;
  const tilesVOffset = 0.25;

  // Set up the canvas - the width & height are dependent on the window size
  const canvasRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(null);
  const [canvasHeight, setCanvasHeight] = useState(null);

  // Tile dimensions - depend on board & screen size, so again, use states to handle them
  const [tileWidth, setTileWidth] = useState(null);
  const [tileHeightFull, setTileHeightFull] = useState(null);
  const [tileHeightTrim, setTileHeightTrim] = useState(null);
  const [actionMenuParams, setActionMenuParams] = useState(null);


  // -------------------------------------------------------------------- //
  // ----------------------------- OVERLAYS ----------------------------- //
  // CONFIRMATION OF PLAYER ACTION //
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayContent, setOverlayContent] = useState({text: '', cost: '', onConfirm: null, isInfo: false });
  // Show the overlay - need to know what to show (sometimes show resources, sometimes is just a message saying you can't do that)
  const showOverlay = useCallback((text, cost, onConfirm, isInfo = false) => {
    setOverlayContent({ text, cost, onConfirm, isInfo });
    setOverlayVisible(true);
  }, []);
  // Player clicks confirm
  const handleConfirm = useCallback(() => {
    if (overlayContent.onConfirm) {
      overlayContent.onConfirm();
    }
    setOverlayVisible(false);
  }, [overlayContent]);
  // Player clicks cancel
  const handleCancel = useCallback(() => {
    setOverlayVisible(false);
    // Go back to the main action menu 
    UpdateGamePlayData('actionPhaseSet', -1);
  }, [UpdateGamePlayData]);

  // TRADING WITH THE BANK //
  const [tradeOverlayVisible, setTradeOverlayVisible] = useState(false);
  // Show the overlay
  const showTradeOverlay = useCallback((playerData, onConfirm, onCancel) => {
    setTradeOverlayVisible(true);
  }, []);
  // Function to confirm trade and adjust player resources
  const handleTradeConfirm = useCallback((tradedResources) => {
      // Player is trading
      const { outWood, outFood, outMetal, outTech, inWood, inFood, inMetal } = tradedResources;
      //console.log('outWood:', outWood, ', outFood:', outFood, ', outMetal:', outMetal, ', outTech:', outTech, ', inWood:', inWood, ', inFood:', inFood, ', inMetal:', inMetal);
      const currentPlayer = gamePlayData.currentPlayer;
      // Deduct resources from player
      const playerDataUpdates = [{
            playerId: gamePlayData.currentPlayer
            , dataToUpdate: {
                wood:  playerData[currentPlayer].wood  - outWood  + inWood
              , food:  playerData[currentPlayer].food  - outFood  + inFood
              , metal: playerData[currentPlayer].metal - outMetal + inMetal
              , tech:  playerData[currentPlayer].tech - outTech
            }
      }]
      UpdatePlayerData(playerDataUpdates);
      // Add to log
      const logTxt = `Player ${gamePlayData.currentPlayer + 1} traded: [${outWood ? outWood + ' wood ' : ''
                    }${outFood ? outFood + ' food ' : ''}${outMetal ? outMetal + ' metal ' : ''}${outTech ? outTech + ' tech ' : ''
                    }] for [${inWood ? inWood + ' wood ' : ''}${inFood ? inFood + ' food ' : ''}${inMetal ? inMetal + ' metal ' : ''}]`;
      addLog(logTxt);
      UpdateGamePlayData('actionPhaseSet', -1);
      setTradeOverlayVisible(false);
    },
    // Dependencies and functions needed.
    [UpdatePlayerData, gamePlayData.currentPlayer, playerData, addLog, UpdateGamePlayData]
  );
  // Trade has been cancelled
  const handleTradeCancel = useCallback(() => {
    UpdateGamePlayData('actionPhaseSet', -1);
    setTradeOverlayVisible(false);
    // Go back to the main action menu 
    UpdateGamePlayData('actionPhaseSet', -1);
  }, [UpdateGamePlayData]);
  // -------------------------------------------------------------------- //



  // --------------------------------------------------------------------- //
  // ----------------------------- FUNCTIONS ----------------------------- //
  // Most functions are defined in separate code files.
  // But some need to be nested in useCallback and useEffect thingies here.

  // Re-calculate board data, including defining the position of each tile (so updates whenever any of the tileWidth data changes)
  useEffect(()=>
      BoardInitialisation(mapData, boardData, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset)
  , [tileWidth, tileHeightFull, tileHeightTrim]);

  // Calculate hex status for actions (just to make things consistent and simpler)
  const calculateHexStatus = useCallback((currentPlayer, mapData) => {
    CalculateHexStatus(currentPlayer, mapData);
  }, []);

  // Function to handle mouse clicks by players on the game board.
  const handleMouseClick = useCallback( (mousePos, boardData, gamePlayData, mapData, playerData
                                        , UpdateGamePlayData, UpdateMapData, UpdatePlayerData
                                        , addCurrentInstruction, addLog, showOverlay, ValidateMove) => {
    HandleMouseClick(mousePos, boardData, gamePlayData, mapData, playerData
                  , UpdateGamePlayData, UpdateMapData, UpdatePlayerData
                  , addCurrentInstruction, addLog, showOverlay, ValidateMove);
  }, [UpdateGamePlayData, UpdateMapData, UpdatePlayerData, addCurrentInstruction, addLog, showOverlay]);

  // Generating resources function.
  const generateResources = useCallback((gamePlayData, mapData, playerData, UpdatePlayerData, UpdateGamePlayData, addLog ) => {
     GenerateResources(gamePlayData, mapData, playerData, UpdatePlayerData, UpdateGamePlayData, addLog );  
  }, [UpdatePlayerData, UpdateGamePlayData, addLog, CalculateResources]);

  // Function to calculate victory points
  const calculateVictoryPoints = useCallback((boardData, gamePlayData, mapData, playerData, UpdateGamePlayData, UpdatePlayerData, addCurrentInstruction, addLog) => {
    CalculateVictoryPoints(boardData, gamePlayData, mapData, playerData, UpdateGamePlayData, UpdatePlayerData, addCurrentInstruction, addLog);
  }, [boardData, gamePlayData, mapData, UpdateGamePlayData, UpdatePlayerData]);

  // Check if a player has won the game
  useEffect(() => {
    playerData.forEach((player) => {
      if (player.vp >= boardData.victoryPoints) {
        UpdateGamePlayData('currentPhase', 4);
        UpdateGamePlayData('winner', (player.id + 1));
        addCurrentInstruction('Player ' + (player.id + 1) + ' has won the game!')
        addLog('Player ' + (player.id + 1) + ' has won the game!')  
        return;
      }
    })
  }, [playerData]);

  const ReturnToMainMenu = () => {
    exitToTitle(true);
  }
  

  // Debugging
  const showActionData = (actionlist) => {
    const fieldsToShow = ['id', 'action', 'actionAllowed', 'actionCost', 'actionDisallowReason', 'componentScores', 'finalScore', 'randomiser', 'resourceCalcs', 'scoreResourceRatioChange', 'scoreResourceTotalChange', 'takeOverRisk_prebuild', 'takeOverRisk_pstbuild', 'tileType' ];
    return actionlist.map(item => {
      let filteredItem = {};
      fieldsToShow.forEach(field => {
        filteredItem[field] = item[field];
      })
      return filteredItem;
    })
  }

  
  // ---------------------------------------------------------------------------------- //
  // ----------------------------- DYNAMIC CANVAS EFFECTS ----------------------------- //
  const { width, height } = useContext(DimensionsContext);

  const updateDimensions = useCallback(() => {
    const canvas = canvasRef.current;

    if (!canvas) return; // Ensure canvas is available

    // Some constants
    const widthHeightRatio = 16 / 7.5;
    const tileHeightRatioFull = 288.0 / 250.0;
    const tileHeight_trimmRatio = 0.87;
    const gameBoardHeightPct = 0.82;

    //const canvasWidthBase = ;
    const canvasWidthBase = window.innerWidth;
    const canvasHeightBase = window.innerHeight * gameBoardHeightPct;
    // Canvas Width:  Either the inner window width, or calculated from the window height (which ever is smaller)
    // Canvas Height: Either the inner window height, or calculated from the window width (which ever is smaller)
    const canvasWidth = Math.min(canvasWidthBase, Math.floor(canvasHeightBase * widthHeightRatio));
    const canvasHeight = Math.min(canvasHeightBase, Math.floor(canvasWidthBase * (1 / widthHeightRatio)));
    //console.log('Base WxH: (', Math.round(canvasWidthBase), ',', Math.round(canvasHeightBase), ') - Adjust WxH: (', canvasWidth, ',', canvasHeight, ')');
    //const canvasWidth = canvasWidthBase;
    //const canvasHeight = Math.floor(canvasWidthBase / widthHeightRatio);
    setCanvasWidth(canvasWidth);
    setCanvasHeight(canvasHeight);

    const newTileWidth = Math.floor(canvasWidth / (Math.max(boardData.evenRowCols, boardData.oddRowCols) + 1));
    const newTileHeightFull = Math.floor(newTileWidth * tileHeightRatioFull);
    const newTileHeightTrim = Math.floor(newTileWidth * tileHeight_trimmRatio);
    setTileWidth(newTileWidth);
    setTileHeightFull(newTileHeightFull);
    setTileHeightTrim(newTileHeightTrim);

    const playerInfoWidth = width / gamePlayData.numberPlayers;
    const customMargin = Math.min(1.5, Math.max(0, 0.25 * Math.floor((playerInfoWidth - 100)/100)));
    const actionMenuWidth = Math.floor(width / 5);
    const actionMenuHeight = Math.floor(actionMenuWidth / 5);
    const playerBoxWidth = Math.floor(width / gamePlayData.numberPlayers);
    const newActionMenuParams = {
      screenwidthCanvas: canvasWidth,
      screenwidthDimContext: width,
      width: actionMenuWidth,
      height: actionMenuHeight,
      playerBoxWidth: playerBoxWidth,
      customMargin: customMargin,
      xOffset1: 16,
      xOffset2: 0.18,
      yOffset: 1,
      iconSize: 0.9,
      iconOffset: 0.25,
      iconHover: [0, 0, 0, 0, 0, 0]
    };
    //console.log(newActionMenuParams);
    setActionMenuParams(newActionMenuParams);
  }, [boardData, gamePlayData.numberPlayers, width, height]);

  // UseLayoutEffect - this is needed to trigger the update dimensions on the initial render (so not when a user re-sizes the window)
  useLayoutEffect(() => {
    updateDimensions();
  }, [updateDimensions]);

  // Add listeners for when the screen is resized or fullscreen status changes
  
  useEffect(() => {
    //console.log('Updating...  Width: ', width, ', Height: ', height);
    updateDimensions();
  }, [width, height]);

  // --------------------------------------------------------------------- //
  // ----------------------------- GAME LOOP ----------------------------- //

  const initialMount = useRef(true);

  const [isComputerThinking, setIsComputerThinking] = useState(false);
  const computerThinkingTime = 1000;

  useEffect(() => {
    if (initialMount.current) {
      initialMount.current = false;
      return;
    }

  // Function for the ai:
  const executeComputerAction = (boardData, mapData, playerData, gamePlayData) => {
    setIsComputerThinking(true);
    const scoredactions = ComputerRankActions(boardData, mapData, playerData, gamePlayData);
    const availableActions = ComputerSelectAction(scoredactions, boardData, mapData, playerData, gamePlayData);
    const possibleActions = availableActions.filter(action => action.actionAllowed === true);
    //console.log('Scored Actions:', scoredactions, ', Available Actions:', availableActions, ', Possible Actions:', possibleActions);
    let bestAction;
    if (scoredactions.length === 0 || possibleActions.length === 0) {
      bestAction = {action:'pass'};
    } else {
      bestAction = possibleActions[0];
    }
    //console.log('Scored Actions:', showActionData(scoredactions), ', Available Actions:', showActionData(availableActions), ', Possible Actions:', showActionData(possibleActions), ', Best Action: ', showActionData([bestAction]));
    // Simulate 'thinking' time
    setTimeout(() => {
      PerformAction(bestAction, boardData, mapData, playerData, gamePlayData, UpdateMapData, UpdatePlayerData, UpdateGamePlayData, addLog);
      calculateVictoryPoints(boardData, gamePlayData, mapData, playerData, UpdateGamePlayData, UpdatePlayerData);
      setIsComputerThinking(false);
    }, computerThinkingTime);
  }

  const computerChooseResource = (boardData, mapData, playerData, gamePlayData) => {
    // Some useful constants
    
    const currentPlayer = gamePlayData.currentPlayer;
    const currentResources = {wood: playerData[currentPlayer].wood, food: playerData[currentPlayer].food, metal: playerData[currentPlayer].metal }
    const freeResources = playerData[currentPlayer].diff;
    //console.log('Current Resources: ', currentResources, 'free: ', freeResources);

    // Holder for resources chosen based on actions
    const resourcesChosenAction = {wood: 0, food: 0, metal: 0};
    // Rank & score actions as normal
    const scoredactions = ComputerRankActions(boardData, mapData, playerData, gamePlayData);
    const availableActions = ComputerSelectAction(scoredactions, boardData, mapData, playerData, gamePlayData);
    // Find any actions the computer can't do
    const availableActionsNeedResources = availableActions.filter((action) => action.resourceCalcs.shortfall < 0);
    // Any actions that would be possible to do if the computer chooses the right resources?
    const possibleActions = availableActionsNeedResources.filter((action) => action.resourceCalcs.shortfall >= (-1 * freeResources));
    //console.log('Available: ', availableActions, 'Insufficient Resource Actions:', availableActionsNeedResources, ' Potential: ', possibleActions);
    // Now take the top 5 availabeActions, and check if any that the player could do if they chose the right resources
    const top3Actions = availableActions.slice(0,5).filter((action)=> action.resourceCalcs.shortfall < 0);
    // If there is at least one action in the top 3 that needs resources, then use this to determine which resources to get
    if (top3Actions.length > 0) {
      const topAction = top3Actions[0];
      resourcesChosenAction.wood = Math.max(0, topAction.resourceCalcs.wood * -1);
      resourcesChosenAction.food = Math.max(0, topAction.resourceCalcs.food * -1);
      resourcesChosenAction.metal = Math.max(0, topAction.resourceCalcs.metal * -1);
      //console.log('Action driving resource choice: ', showActionData([topAction]), ', top Actions:', showActionData(top3Actions));
    }

    // Now choose the rest of the resources based on the target resource ratio for that player
    const newResources = {wood: currentResources.wood + resourcesChosenAction.wood, 
                          food: currentResources.food + resourcesChosenAction.food,
                          metal: currentResources.metal + resourcesChosenAction.metal };
    var remainingResources = freeResources - resourcesChosenAction.wood - resourcesChosenAction.food - resourcesChosenAction.metal;
    //console.log(remainingResources, resourcesChosenAction);
    // Cycle through remaining resources, picking the resource that best gets the player closer to their target ratios
    while (remainingResources > 0) {
      var resourceChosen = CalculateBestResource(newResources, playerData[currentPlayer].strat);
      if (resourceChosen === 'wood') {
        newResources.wood += 1;
      } else if (resourceChosen === 'food') {
        newResources.food += 1;
      } else {
        newResources.metal += 1;
      }
      remainingResources -= 1;
    }
    const resourcesChosen = {wood: newResources.wood - currentResources.wood, food: newResources.food - currentResources.food, metal: newResources.metal - currentResources.metal }
    //console.log('chosen resources:', resourcesChosen);
    return resourcesChosen;
  }



    const currentPlayer = gamePlayData.currentPlayer;
    const playerInfo = playerData[currentPlayer];
    //console.log('Player:', currentPlayer, ', Data:', playerInfo);

    const instructTxt1 = 'Player ' + (currentPlayer + 1) + ': Click the Skills Build Button';
    const instructTxt2 = 'Generating Resources for Player ' + (currentPlayer + 1);
    const instructTxt3 = 'Player ' + (currentPlayer + 1) + ': Pick an action to perform';

    const instructAI1 = 'Generating Resources for Player ' + (currentPlayer + 1);
    const instructAI2 = 'Player ' + (currentPlayer + 1) + ' is deciding what resources to claim'
    const instructAI3 = 'Player ' + (currentPlayer + 1) + ' is thinking...'; 

      
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    
    if (gamePlayData.currentPhase === 4) {
      const questionresponses = questionData;
      //console.log(questionresponses);
      // Someone has won the game
      const onConfirm = async () => {
        // Update the database
        try {
          await axios.post(`${baseUrl}/responses`, { questionresponses: questionresponses });
          //console.log('Question responses updated successfully');
        } catch (error) {
          console.error('Error updating question responses:', error);
        }
        //ReturnToMainMenu();
      };
      showOverlay('Player ' + (gamePlayData.winner) + ' has won the game!', null, onConfirm, true);
    }
    else if (playerInfo.compPlayer === 1) {
      // Slightly different phase structure for computer - phase 0 is generate resources, phase 1 is collect extra resources, phase 2 is action phase
      if (gamePlayData.currentPhase === 0) {
        // Collect resources
        //console.log("COMPUTER PLAYER DEBUGGING - Player ", currentPlayer + 1, ', Strategy:', playerData[currentPlayer].strat);
        addCurrentInstruction(instructAI1);
        generateResources(gamePlayData, mapData, playerData, UpdatePlayerData, UpdateGamePlayData, addLog);
        setTimeout(() => UpdateGamePlayData('currentPhase', 1), 1000);
      }

      else if (gamePlayData.currentPhase === 1) {
        // Determine what resources the computer should get
        addCurrentInstruction(instructAI2);
        const resourcesChosen = computerChooseResource(boardData, mapData, playerData, gamePlayData, UpdatePlayerData);
        const playerDataUpdates = [{
          playerId: currentPlayer
          , dataToUpdate: {
              wood:  playerData[currentPlayer].wood + resourcesChosen.wood
            , food:  playerData[currentPlayer].food + resourcesChosen.food
            , metal: playerData[currentPlayer].metal  + resourcesChosen.metal
          }
        }];
        setTimeout(() => {
          UpdatePlayerData(playerDataUpdates);
          UpdateGamePlayData('currentPhase', 2)
          var logTxt = 'Player ' + (currentPlayer + 1) + ' has chosen the following resources: [wood: ' + resourcesChosen.wood + ', food:' + resourcesChosen.food + ', metal: ' + resourcesChosen.metal + ']'
          addLog(logTxt);
        }, computerThinkingTime);

      } else if (gamePlayData.currentPhase === 2) {
        // Action phase
        addCurrentInstruction(instructAI3);
        if (!isComputerThinking) {
          executeComputerAction(boardData, mapData, playerData, gamePlayData);
        }
      }
    } else {
        if (gamePlayData.currentPhase === 0) {
          // IBM Skills Build course
          addCurrentInstruction(instructTxt1);
          calculateVictoryPoints(boardData, gamePlayData, mapData, playerData, UpdateGamePlayData, UpdatePlayerData)
        } else if (gamePlayData.currentPhase === 1) {
          // Generate Resources 
          addCurrentInstruction(instructTxt2);
          generateResources(gamePlayData, mapData, playerData, UpdatePlayerData, UpdateGamePlayData, addLog);
          // Pause for a second to allow for resource animation
          setTimeout(() => UpdateGamePlayData('currentPhase', 2), 1000);
        } else if (gamePlayData.currentPhase === 2 && gamePlayData.actionPhaseSet === -1) {
          // Action Phase
          addCurrentInstruction(instructTxt3);
          calculateHexStatus(gamePlayData.currentPlayer, mapData);
          calculateVictoryPoints(boardData, gamePlayData, mapData, playerData, UpdateGamePlayData, UpdatePlayerData);
        } else if (gamePlayData.currentPhase === 2 && gamePlayData.actionPhaseSet === 1) {
          addCurrentInstruction('Pick one of your own hexes to develop');
        } else if (gamePlayData.currentPhase === 2 && gamePlayData.actionPhaseSet === 2) {
          addCurrentInstruction('Pick an empty adjacent hex to develop');
        } else if (gamePlayData.currentPhase === 2 && gamePlayData.actionPhaseSet === 3) {
          addCurrentInstruction('Pick an opposition adjacent hex to take over');
        } else if (gamePlayData.currentPhase === 2 && gamePlayData.actionPhaseSet === 4) {
          addCurrentInstruction('Select resources to trade with the bank');
          showTradeOverlay(playerData[gamePlayData.currentPlayer], handleTradeConfirm, handleTradeCancel);
        } else if (gamePlayData.currentPhase === 4) {
            // Someone has won the game
            const onConfirm = () => {
              ReturnToMainMenu();
            };
            showOverlay('Player ' + (gamePlayData.winner) + ' has won the game!', null, onConfirm, true);
        }
    }
  }, [gamePlayData, isComputerThinking]);

  // Render the board repeatedly
  useEffect(() => {
    if (tileWidth !== null && tileHeightFull !== null && tileHeightTrim !== null) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      // Initialize the board
      BoardInitialisation(mapData, boardData, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset);

      // Render loop
      const fps = 30;
      const interval = 1000 / fps;
      let lastTime = 0;
      const gameLoop = (timestamp) => {
        if (timestamp - lastTime >= interval) {
          DrawBoard(canvas, ctx, images, mapData, playerData, gamePlayData, actionMenuParams);
          lastTime = timestamp;
        }
        requestAnimationFrame(gameLoop);
      };
      requestAnimationFrame(gameLoop);
    }
  }, [tileWidth, tileHeightFull, tileHeightTrim, BoardInitialisation, mapData, boardData,  images, playerData, gamePlayData, actionMenuParams ]);

  // Mouse Move Function - this is mainly to calculate where the mouse is on the game board
  const handleMouseMove = useCallback((event) => {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const mousePos = mouseXY_to_HexID(mouseX, mouseY, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset,
                        boardData, mapData, gamePlayData, actionMenuParams, canvas
      );
      //console.log(mousePos);
    }, [tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset, boardData, mapData, gamePlayData, actionMenuParams, canvasRef]);

  // Mouse Click Function - same as mouse move function - have to work out where the mouse is - but then this triggers the handle mouse click function
  const handleClick = useCallback((event) => {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const mousePos = mouseXY_to_HexID(mouseX, mouseY, tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset,
                                        boardData, mapData, gamePlayData, actionMenuParams, canvas );
      if (mousePos) {
        //console.log('Clicked:', mousePos);
        handleMouseClick(mousePos, boardData, gamePlayData, mapData, playerData
          , UpdateGamePlayData, UpdateMapData, UpdatePlayerData
          , addCurrentInstruction, addLog, showOverlay, ValidateMove );
                         
      }
    }, [tileWidth, tileHeightFull, tileHeightTrim, tilesHOffset, tilesVOffset, boardData, mapData, gamePlayData, actionMenuParams, canvasRef, handleMouseClick, playerData, UpdateGamePlayData, UpdateMapData, UpdatePlayerData, addCurrentInstruction, addLog, showOverlay]);



  // Setup Event Listeners - listening for mouse clicks & mouse movement to trigger the mouseMove and mouseClick functions.
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
    };
  }, [handleMouseMove, handleClick]);

  
    //console.log('tileWidth',tileWidth, 'tileHeightFull',tileHeightFull, 'tileHeightTrime',tileHeightTrim, 'tilesHOffset',tilesHOffset, 'tilesVOffset',tilesVOffset, 'actionMenuParams',actionMenuParams) 
  const testEnd = () => {
    UpdateGamePlayData('currentPhase', 4);
  }

  // Final Output!
  return (
    <Box> 
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
      {overlayVisible && (
        <ConfirmationOverlay
          text={overlayContent.text}
          cost={overlayContent.cost}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          isInfo={overlayContent.isInfo}
        />
      )}

      {tradeOverlayVisible && (
        <TradeOverlay
          onConfirm={handleTradeConfirm}
          onCancel={handleTradeCancel}
          playerData={playerData[gamePlayData.currentPlayer]}
        />
      )}

    
    </Box>
  );
};



export default GameBoardCanvas;

/*
  <Button onClick={testEnd} >END GAME</Button>
*/