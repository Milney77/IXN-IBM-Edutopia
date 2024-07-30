import React, { useState, useEffect, useContext } from 'react';

import { Stack, Button, IconButton, Box, Grid, Typography, TextField, Tooltip } from '@mui/material';
import { TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material';
import { FormControl, Select, MenuItem, Checkbox } from '@mui/material';

import { ArrowBack, ArrowForward } from '@mui/icons-material';

import { boards, colourMap } from '../constants/constants';

import { DimensionsContext } from './dimensionsContext';

const MainMenu = ({ startGame }) => {

    // Don't need the full width of the screen (for large monitors anyway)
  const maxContainerWidth = 1600;  
    
  // Font Size - Based on screen width, and to be consistent, using the DimensionContext thing that has been created for all components to use.
  const { width, height } = useContext(DimensionsContext);
  const [customFontSize, setCustomFontSize] = useState(1);
  useEffect(() => {
      // Determine the font & margin sizes
      const calculateFontSize = () => {
          // Size is based on screen width only
          let newFontSize = Math.min(2, Math.max(1, 1 + 0.25 * Math.floor(Math.min(maxContainerWidth, width)/400)));
        setCustomFontSize(newFontSize);
      };
      calculateFontSize();
    }, [width, height]);

    // Handling the user picking a board
    const [currentBoard, setCurrentBoard] = useState(0);
    const numBoards = boards.length;
    const handleBoardLeftClick = () => {
      setCurrentBoard((prevBoard) => (prevBoard === 0 ? numBoards - 1 : prevBoard - 1));
    }
    const handleBoardRightClick = () => {
      setCurrentBoard((prevBoard) => (prevBoard === numBoards - 1 ? 0 : prevBoard + 1));
    }
    const boardData = boards[currentBoard];
    //const boardImgWidth = width < 1200 ? (400) : (100);

    // Defaults for players
    const playerDefault = {id: [0, 1, 2, 3, 4, 5]
            , name: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6']
            , colour: ['r', 'b', 'g', 'y', 'p', 't']
            , compPlayer: 1
            , diff: 1
            , strat: 'm'}

    // Handle number of players - set the number and set the array for the player details
    const [numberPlayers, setNumberPlayers] = useState(2);
    const [playerDetails, setPlayerDetails] = useState([
          {id: 0, name: playerDefault.name[0], compPlayer: playerDefault.compPlayer, colour: playerDefault.colour[0], diff: playerDefault.diff, strat: playerDefault.strat}, 
          {id: 1, name: playerDefault.name[1], compPlayer: 0, colour: playerDefault.colour[1], diff: playerDefault.diff, strat: playerDefault.strat}, 
           ]);

    const handleNumberPlayersChange = (event) => {
      const count = parseInt(event.target.value);
      setNumberPlayers(count);
      setPlayerDetails(
          Array.from({ length: count }, (_, idx) => (
          {id: idx
            , name: playerDefault.name[idx]
            , compPlayer: idx === 0 ? 0 : playerDefault.compPlayer
            , colour: playerDefault.colour[idx]
            , diff: playerDefault.diff
            , strat: playerDefault.strat
          }
      )));
    };

    // Logging
    //console.log('Players:', numberPlayers, ', Player Array: ', playerDetails)

    // Player Data component - rendered for each player in the playerDetails array.
    const PlayerData = ({player, idx}) => {

      //  Handling changes to the player data - changes are: computer/human, colour, player name (Human only), difficulty (ai only) and strategy (ai only)
    // Human / Computer change
    const handlePlayerCompChange = () => {
      const updatedPlayers = [...playerDetails];
      updatedPlayers[idx].compPlayer = updatedPlayers[idx].compPlayer ? 0 : 1;
      setPlayerDetails(updatedPlayers);
    }    
    
    // Colour Change
    const handlePlayerColourChange = (event) => {
      const newColour = event.target.value;
      const updatedPlayers = [...playerDetails];
      updatedPlayers[idx].colour = newColour;

      // Now make sure two players don't have the same colour
      // First get the list of chosen colours, and available colours
      const chosenColours = updatedPlayers.map(player => player.colour).filter(colour => colour !== '')
      const availableColours = playerDefault.colour.filter(colour => !chosenColours.includes(colour));
      console.log('Chosen:', chosenColours, 'Available:', availableColours, ', Select: ', availableColours[0]);

      // Now cycle through players to replace any colour that is being used twice
      updatedPlayers.forEach((player, playerIdx) => {
        if (playerIdx !== idx && player.colour === newColour) {
          // Another player already has the colour this player has chosen.
          // Assign them the first available colour from the list of availablecolours
          if (availableColours[0]) {
            player.colour = availableColours[0];
            chosenColours.push(availableColours[0]);
          }
        }
      })

      setPlayerDetails(updatedPlayers);
    }    

    // Name Change (Human players only)
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handlePlayerNameChange(event.target.value);
      }
    };

    const handlePlayerNameChange = (name) => {
      const updatedPlayers = [...playerDetails];
      updatedPlayers[idx].name = name;
      setPlayerDetails(updatedPlayers);
    }    

    // Difficulty change (AI players only)
    const handlePlayerDifficultyChange = (event) => {
      const updatedPlayers = [...playerDetails];
      updatedPlayers[idx].diff = event.target.value;
      setPlayerDetails(updatedPlayers);
    };
  
    // Strategy change (AI players only)
    const handlePlayerStrategyChange = (event) => {
      const updatedPlayers = [...playerDetails];
      updatedPlayers[idx].strat = event.target.value;
      setPlayerDetails(updatedPlayers);
    };

      // Player number (index starts at 1, for presentation purposes)
      const playerNumber = idx + 1;

      return (
      <>
        <Grid item xs={1}></Grid>

        <Grid item xs={1} sx={{padding:'0rem'}}>
          <Typography variant='h6' sx={{fontSize:`${customFontSize*0.75}rem`}}>
                {playerNumber}
            </Typography>
        </Grid>

        <Grid item xs={1}>
          <Checkbox
              checked={player.compPlayer === 0}
              onChange={handlePlayerCompChange}
              sx={{ '& .MuiSvgIcon-root': { fontSize: `${customFontSize}rem` } }}
            />
        </Grid>

        <Grid item xs={1.25}>
          <FormControl fullWidth>
            <Select
              labelId={`colour-label-${idx}`}
              value={player.colour}
              onChange={handlePlayerColourChange}
              sx={{
                fontSize: `${customFontSize * 0.75}rem`,
                '& .MuiSelect-select': {
                  padding: '0rem'
                },
                '& .MuiSelect-select.MuiInputBase-input': {
                  padding: '0rem'
                }
              }}
            >
              {Object.keys(colourMap).map(key => (
              <MenuItem key={key} value={key}>
                <Box
                  sx={{
                    width: '100%',
                    height: `${customFontSize}rem`,
                    backgroundColor: colourMap[key].background,
                    border: `1px solid ${colourMap[key].border}`,
                  }}
                ></Box>
              </MenuItem>
            ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={0.25}></Grid>

        {player.compPlayer === 0 ? (
          <>
          <Grid item xs={2}>
            <Typography variant="h6" align='left'sx={{fontSize:`${customFontSize*0.75}rem`}}>
                Name (25 char limit):
            </Typography>
          </Grid>
          <Grid item xs={4.5}>
            <Tooltip title = "Enter a player name here (max of 25 characters)">
            <TextField
            fullWidth
            defaultValue={player.name}
            onKeyDown={handleKeyPress}
            inputProps={{ maxLength: 25 }}
            sx={{
              fontSize: `${customFontSize * 0.75}rem`,
              padding: '0.25rem',
              '& .MuiInputBase-input': {
                padding: '0.25rem',
                textAlign: 'center',
                fontSize: `${customFontSize * 0.75}rem`
              },
              '& .MuiInputLabel-root': {
                padding: '0.25rem',
                backgroundColor: 'white',
                fontSize: `${customFontSize * 0.75}rem`
              }
            }}
            />
            </Tooltip>
          </Grid>
          </>
          
          ) : 
          <>
          <Grid item xs={1}>
              <Tooltip title={
                  <div>
                    How many free resources does the computer player get each turn?
                    <br/><strong>Easy:</strong> 1
                    <br/><strong>Medium:</strong> 2
                    <br/><strong>Hard:</strong> 4
                  </div>
              }>
                <Typography variant='h6' sx={{fontSize:`${customFontSize*0.75}rem`}}>
                    Difficulty
                </Typography>
              </Tooltip>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth sx={{ }}>
              <Select
                labelId={`difficulty-label-${idx}`}
                value={player.diff}
                onChange={handlePlayerDifficultyChange}
                sx={{
                  fontSize: `${customFontSize * 0.75}rem`,
                  '& .MuiSelect-select': {
                    padding: '0.5rem'
                  },
                  '& .MuiSelect-select.MuiInputBase-input': {
                    padding: '0.5rem'
                  }
                }}
              >
                <MenuItem value='0'>Easy</MenuItem>
                <MenuItem value='1'>Medium</MenuItem>
                <MenuItem value='2'>Hard</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={0.5}></Grid>

          <Grid item xs={1}>
          <Tooltip title={
                  <div>
                    What is the computer behaviour?
                    <br/><strong>Expansive:</strong> Prefers expanding area over building structures
                    <br/><strong>Builder:</strong> Prefers building structures over expanding area
                    <br/><strong>Mixed:</strong> Mixed approach
                  </div>
              }>
            <Typography variant='h6' sx={{fontSize:`${customFontSize*0.75}rem`}}>
                  Behaviour
              </Typography>
              </Tooltip>
          </Grid>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <Select
                value={player.strat}
                onChange={handlePlayerStrategyChange}
                sx={{
                  fontSize: `${customFontSize * 0.75}rem`,
                  '& .MuiSelect-select': {
                    padding: '0.5rem'
                  },
                  '& .MuiSelect-select.MuiInputBase-input': {
                    padding: '0.5rem'
                  }
                }}
              >
                <MenuItem value="e">Expansive</MenuItem>
                <MenuItem value="b">Builder</MenuItem>
                <MenuItem value="m">Mixed</MenuItem>
              </Select>
             </FormControl>
            </Grid>
          </>
        }
      
        <Grid item xs={1}></Grid>
      </>
    );
  }


  // Start game Button - Is it available?
  const [isStartDisabled, setIsStartDisabled] = useState(true);
  // Check if there is at least 1 human player each time playerDetails changes.
  useEffect(() => {
    const hasHumanPlayer = playerDetails.some(player => player.compPlayer === 0);
    //setIsStartDisabled(!hasHumanPlayer);
    setIsStartDisabled(false)
  }, [playerDetails]);

  // Start game button - process the user selections
  const handleGameStart = () => {
      startGame(boards[currentBoard], playerDetails);
  }

  
  return (
    <Box alignItems='center' justifyContent="center" marginX='2rem' >
      <Grid container alignItems='center' justifyContent="center" spacing={1} maxWidth={maxContainerWidth} >
        {/* MAIN MENU TITLE - make it look nice! */}

        <Grid item xs={12}>
          <Typography variant='h1' sx={{ fontSize:`${customFontSize*2}rem`}}>
              Main Menu
          </Typography>
        </Grid>

        {/* BOARD SELECTION */}
        <Grid item xs={12}>
            <Typography variant='h1' sx={{ fontSize:`${customFontSize*1}rem`}}>
                Select Board
            </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box display="flex" alignItems="center" justifyContent="center" >
            <IconButton onClick={handleBoardLeftClick} size="large">
              <ArrowBack fontSize="inherit" />
            </IconButton>
            <Box sx={{
                width: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'}}>
              <Box
                component='img'
                src={'images/boards/' + boardData.imageRef}
                alt={boardData.name}
                sx={{objectFit: 'contain', width: '100%', height: '100%' }}
                ></Box>
            </Box>
            <IconButton onClick={handleBoardRightClick} size="large">
              <ArrowForward fontSize="inherit" />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={10} sm={4} alignSelf="flex-start">
        <Typography sx={{fontSize: `${customFontSize*0.75}rem`}}>Board Details</Typography>
          <TableContainer >
            <Table sx={{}}>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography sx={{fontSize: `${customFontSize*0.75}rem`}}>Map Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{fontSize: `${customFontSize*0.75}rem`}}>{ boardData.name }</Typography>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography sx={{fontSize: `${customFontSize*0.75}rem`}}>Max Players</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{fontSize: `${customFontSize*0.75}rem`}}>{ boardData.maxPlayers }</Typography>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography sx={{fontSize: `${customFontSize*0.75}rem`}}>Victory Points</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{fontSize: `${customFontSize*0.75}rem`}}>{ boardData.victoryPoints }</Typography>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    <Typography sx={{fontSize: `${customFontSize*0.75}rem`}}>Max Villages / Castles</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{fontSize: `${customFontSize*0.75}rem`}}>{ boardData.maxVillages + ' / ' + boardData.maxCastles }</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* Number of players */}
        <Grid item xs={10} sx={{marginTop:'1rem'}}>
          <Stack direction='row' justifyContent='center' alignItems='center'>
            <Typography variant='h4' sx={{ fontSize: `${customFontSize * 1}rem` }}>
                 {'Select Number of Players (max ' + boardData.maxPlayers + ')'}
            </Typography>
            <FormControl  sx={{ marginLeft:'2rem', height: 'auto' }}>
              <Select
                labelId="number-of-players-label"
                value={numberPlayers}
                onChange={handleNumberPlayersChange}
                label="Number of Players"
                sx={{ height: `${customFontSize * 1.25}rem`, display:'flex', alignItems:'center'}}
              >
                {[...Array(boardData.maxPlayers - 1).keys()].map(n => (
                  <MenuItem key={n + 2} value={n + 2}>{n + 2}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Grid>

        {/* Player Details */}
        <Grid container spacing={customFontSize} alignItems='center' sx={{marginTop: '0.5rem'}}>
          <Grid item xs={1}></Grid>
          <Grid item xs={1}>
            <Typography variant='h6' sx={{fontSize:`${customFontSize*0.75}rem`}}>
              #
              </Typography>
            </Grid>
          <Grid item xs={1}>
            <Tooltip title="Check for a human player, unchecked for computer player">
            <Typography variant='h6' sx={{fontSize:`${customFontSize*0.75}rem`}}>
                Human
            </Typography>
            </Tooltip>
          </Grid>
          <Grid item xs={1.5}>
            <Tooltip title="Select a colour">
            <Typography variant='h6' sx={{fontSize:`${customFontSize*0.75}rem`}}>
                Colour
            </Typography>
            </Tooltip>
          </Grid>
          <Grid item xs={6.5}>
          </Grid>
          <Grid item xs={1}></Grid>
          {playerDetails.map((player, index) => (
            <PlayerData key={index} player={player} idx={index}
            />
          ))}
        </Grid>

        {/* START GAME */}
        <Grid item xs={10}>
        <Tooltip title={ isStartDisabled ? "You must have at least 1 human player" : "Start game!"}>
          <Box sx={{marginTop:'1rem'}}>
            <Button variant='contained' disabled={isStartDisabled} onClick={handleGameStart}>START GAME!</Button>
          </Box>
          </Tooltip>
        </Grid>
     </Grid>
    </Box>
  );
};

export default MainMenu;