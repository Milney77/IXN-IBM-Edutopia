import React, { useState, useEffect, useContext } from 'react';

import { Stack, Button, IconButton, Box, Grid, Typography, TextField, Tooltip } from '@mui/material';
import { TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material';
import { FormControl, Select, MenuItem, Checkbox, Divider } from '@mui/material';

import { ArrowBack, ArrowForward } from '@mui/icons-material';

import axios from 'axios';

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
            , diff: 4
            , strat: ['m', 'e', 'b', 'm']
          }

    // Handle number of players - set the number and set the array for the player details
    const [numberPlayers, setNumberPlayers] = useState(2);
    const [playerDetails, setPlayerDetails] = useState([
          {id: 0, name: playerDefault.name[0], compPlayer: 0, colour: playerDefault.colour[0], diff: playerDefault.diff, strat: playerDefault.strat[0]}, 
          {id: 1, name: playerDefault.name[1], compPlayer: playerDefault.compPlayer, colour: playerDefault.colour[1], diff: playerDefault.diff, strat: playerDefault.strat[1]}, 
           ]);
    // Update number of players when the board data changes
    useEffect(() => {
      // Update maxPlayers based on selected board
      if (boardData) {
        const newMaxPlayers = boardData.maxPlayers;
        // Adjust number of players if it exceeds the new max players
        if (numberPlayers > newMaxPlayers) {
          setNumberPlayers(newMaxPlayers);
        }
      }
    }, [currentBoard]);
          
    // Function to handle changing the number of players
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
            , strat: playerDefault.strat[idx]
          }
      )));
    };

    // Logging
    //console.log('Players:', numberPlayers, ', Player Array: ', playerDetails)

    // Get the list of courses
    const [courselist, setCourseList] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([1]);
    const [includeQuiz3Questions, setIncludeQuiz3Questions] = useState(false);

    // Extract the course lists (excluding those where includeind !== 1)
    useEffect(() => {
        const fetchCourseList = async () => {
            try {
                const response = await axios.get('http://localhost:3001/courselist');
                setCourseList(response.data);
            } catch (error) {
                console.error('Error fetching courselist:', error);
            }
        };
        fetchCourseList();
    }, []);
    //console.log(courselist, selectedCourses);

    // Function to handle the checkbox change for each couse
    const handleCheckboxChange = (courseid) => {
      setSelectedCourses((prevSelected) => {
        if (prevSelected.includes(courseid)) {
          return prevSelected.filter(id => id !== courseid);
        } else {
          return [...prevSelected, courseid];
        }
      });
    };

    const handleQuiz3QuestionsChange = (event) => {
      setIncludeQuiz3Questions(event.target.checked);
    };

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
        //console.log('Chosen:', chosenColours, 'Available:', availableColours, ', Select: ', availableColours[0]);

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

          <Grid item xs={2}>
            <FormControl fullWidth sx={{paddingX:'1rem'}} >
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
                      width: '80%',
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


          {player.compPlayer === 0 ? (
            <>
            <Grid item xs={2.5}>
              <Typography variant="h6" align='left'sx={{fontSize:`${customFontSize*0.75}rem`, paddingLeft: `${customFontSize*0.75}rem`}}>
                  Name (25 char limit):
              </Typography>
            </Grid>
            <Grid item xs={5.5}>
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
                  paddingY: '0.25rem',
                  paddingX: '1rem',
                  textAlign: 'left',
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
                  <Typography variant='h6' sx={{fontSize:`${customFontSize*0.75}rem`, paddingLeft: `${customFontSize*0.75}rem`}}>
                      Difficulty
                  </Typography>
                </Tooltip>
            </Grid>
            <Grid item xs={2}>
              <FormControl fullWidth sx={{ marginX: `${customFontSize*0.5}rem`}}>
                <Select
                  labelId={`difficulty-label-${idx}`}
                  value={player.diff}
                  onChange={handlePlayerDifficultyChange}
                  sx={{
                    fontSize: `${customFontSize * 0.75}rem`,
                    '& .MuiSelect-select': {
                      padding: '0.25rem'
                    },
                    '& .MuiSelect-select.MuiInputBase-input': {
                      padding: '0.25rem'
                    }
                  }}
                >
                  <MenuItem value='1'>Easy</MenuItem>
                  <MenuItem value='2'>Medium</MenuItem>
                  <MenuItem value='4'>Hard</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={1}></Grid>

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
              <FormControl fullWidth sx={{ }}>
                <Select
                  value={player.strat}
                  onChange={handlePlayerStrategyChange}
                  sx={{
                    fontSize: `${customFontSize * 0.75}rem`,
                    '& .MuiSelect-select': {
                      padding: '0.25rem'
                    },
                    '& .MuiSelect-select.MuiInputBase-input': {
                      padding: '0.25rem'
                    }
                  }}
                >
                  <MenuItem value="e">Expansive</MenuItem>
                  <MenuItem value="b">Builder</MenuItem>
                  <MenuItem value="m">Mixed</MenuItem>
                </Select>
              </FormControl>
              </Grid>
              <Grid item xs={1}></Grid>
            </>
          }
        
        </>
      );
    }

  // Course list component
  const CourseListBox = ({courseid, name, icon, selectedCourses, handleCheckboxChange}) => {
    return (
      <Box sx={{marginX: `${customFontSize*1}rem`}}>
        <Tooltip title={name}>
        <Box component='img'
          src={'images/badges/' + icon}
          alt={name}
          sx={{ width: '100%', height: '100%'}}
        />
      </Tooltip>
      <Checkbox sx={{color:'white'}}
          checked={selectedCourses.includes(courseid)}
          onChange={() => handleCheckboxChange(courseid)}
        />
      </Box>
    )
  };


  // Start game Button - Is it available?
  const [isStartDisabled, setIsStartDisabled] = useState(true);
  const [startDisabledReason, setStartDisabledReason] = useState('');
  // Check if there is at least 1 human player each time playerDetails changes.
  useEffect(() => {
    const hasHumanPlayer = playerDetails.some(player => player.compPlayer === 0);
    const coursesSelected = selectedCourses.length;
    //console.log(hasHumanPlayer, coursesSelected);
    if (!hasHumanPlayer) {
      setIsStartDisabled(!hasHumanPlayer);
      setStartDisabledReason('Must have at least 1 human player')
    }
    else if (coursesSelected === 0) {
      setIsStartDisabled(true);
      setStartDisabledReason('Must select at least 1 skills build course')
    }
    else if (hasHumanPlayer && coursesSelected > 0) {
      setIsStartDisabled(false);
      setStartDisabledReason('na')
    }
  }, [playerDetails, selectedCourses]);

  // Start game button - process the user selections
  const handleGameStart = () => {
    //console.log('Board:', boards[currentBoard], ', Player Data:', playerDetails, ', Courses:', selectedCourses, ', IncludeQuiz3:', includeQuiz3Questions )
    startGame(boards[currentBoard], playerDetails, selectedCourses, includeQuiz3Questions);
  }

  
  return (
    <Box display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    paddingX="2rem"
    sx={{ backgroundColor: 'black'}}>
  <Grid container alignItems='center' justifyContent="center" spacing={1} paddingX='1rem' maxWidth={maxContainerWidth} >
    {/* MAIN MENU TITLE - make it look nice! */}
    <Grid item xs={12} sx={{marginTop: '1rem'}}>
      <Typography variant='h1' sx={{ fontSize:`${customFontSize*2}rem`, color:'white', fontFamily: 'Copperplate, Papyrus, fantasy', letterSpacing: 3}}>
          Edutopia - Main Menu
      </Typography>
    </Grid>

    <Grid item xs={12}>
      <Divider sx={{ borderColor: 'gray', borderStyle: 'dashed' }} />
    </Grid>

    {/* BOARD SELECTION */}
    <Grid item xs={12}>
        <Typography variant='h1' sx={{ fontSize:`${customFontSize*1}rem`, color:'white'}}>
            Select Board
        </Typography>
    </Grid>
    <Grid item xs={12} sm={8}>
      <Box display="flex" alignItems="center" justifyContent="center" >
        <IconButton onClick={handleBoardLeftClick} size="large" sx={{color:'white'}}>
          <ArrowBack fontSize="inherit" color='white'/>
        </IconButton>
        <Box sx={{
            width: '70%',
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
        <IconButton onClick={handleBoardRightClick} size="large" sx={{color:'white'}}>
          <ArrowForward fontSize="inherit" />
        </IconButton>
      </Box>
    </Grid>
    <Grid item xs={10} sm={4} alignSelf="flex-start">
      <Typography sx={{color: 'white', fontSize: `${customFontSize*0.75}rem`}}>Board Details</Typography>
      <TableContainer sx={{
          backgroundImage: 'url(/images/other/background_lightfabric.jpg)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto'
      }}>
        <Table sx={{}}>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography sx={{fontSize: `${customFontSize*0.75}rem`}}>Map Name</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{fontSize: `${customFontSize*0.75}rem`}}>{ boardData.name }</Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Typography sx={{fontSize: `${customFontSize*0.75}rem`}}>Max Players</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{fontSize: `${customFontSize*0.75}rem`}}>{ boardData.maxPlayers }</Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Typography sx={{fontSize: `${customFontSize*0.75}rem`}}>Victory Points</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{fontSize: `${customFontSize*0.75}rem`}}>{ boardData.victoryPoints }</Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <Typography sx={{fontSize: `${customFontSize*0.75}rem`}}>Max Villages / Castles</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography sx={{fontSize: `${customFontSize*0.75}rem`}}>{ boardData.maxVillages + ' / ' + boardData.maxCastles }</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Grid>

    <Grid item xs={12}>
      <Divider sx={{ borderColor: 'gray', borderStyle: 'dashed' }} />
    </Grid>  

    <Grid item xs={12}>
      <Tooltip title="Select the skills build courses that questions will be taken from (have to select at least 1)">
      <Typography sx={{fontSize: `${customFontSize}rem`, color:'white'}}>Skills Build Courses</Typography>
      </Tooltip>
    </Grid> 
    
      {courselist.length > 0 ? 
          courselist.map((course) => (
          <Grid item xs={2} key={course.courseid}>
          <CourseListBox 
            courseid = {course.courseid}
            name = {course.coursename}
            icon = {course.badgeicon}
            selectedCourses = {selectedCourses}
            handleCheckboxChange = {handleCheckboxChange}
            />
          </Grid> 
          ))
         : null
      }
      <Grid item xs={12}>
        <Tooltip title="Quiz 3 questions generally refer to lab sessions in the skills build courses.  Only select this if you have completed the labs.">
          <Stack direction='row' alignItems='center' justifyContent='center'>
            <Typography sx={{fontSize: `${customFontSize*0.75}rem`, color:'white'}}>
                Do you want to include Lab questions?
            </Typography>
            <Checkbox  sx={{fontSize: `${customFontSize*0.75}rem`, color:'white'}}
              checked={includeQuiz3Questions}
              onChange={handleQuiz3QuestionsChange}
            />
          </Stack>
       </Tooltip>
      </Grid>
    
      
    

    <Grid item xs={12}>
      <Divider sx={{ borderColor: 'gray', borderStyle: 'dashed' }} />
    </Grid>  

    {/* Number of players */}
    <Grid item xs={10} sx={{marginTop:'1rem'}}>
      <Stack direction='row' justifyContent='center' alignItems='center'>
        <Typography variant='h4' sx={{ fontSize: `${customFontSize * 1}rem`, color:'white' }}>
             {'Select Number of Players (max ' + boardData.maxPlayers + ')'}
        </Typography>
        <FormControl  sx={{ marginLeft:'2rem', height: 'auto', backgroundColor:'white' }}>
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

  </Grid>


    {/* Player Details */}
  <Box paddingX='3rem' marginY='0rem' maxWidth={maxContainerWidth}>
    <Grid container spacing={customFontSize} alignItems='center' sx={{marginY: '1rem',  
                backgroundImage: 'url(/images/other/background_lightfabric.jpg)', backgroundRepeat: 'repeat', backgroundSize: 'auto'}}>
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
      <Grid item xs={2}>
        <Tooltip title="Select a colour">
        <Typography variant='h6' sx={{fontSize:`${customFontSize*0.75}rem`}}>
            Colour
        </Typography>
        </Tooltip>
      </Grid>
      <Grid item xs={8}>
      </Grid>
      {playerDetails.map((player, index) => (
        <PlayerData key={index} player={player} idx={index}
        />
      ))}
    </Grid>
   </Box>

    {/* START GAME */}
    <Grid item xs={10}>
    <Tooltip title={ isStartDisabled ? startDisabledReason : "Start game!"}>
        <Button
              variant="contained"
              disabled={isStartDisabled}
              onClick={handleGameStart}
              sx={{marginTop: '1rem', padding: '1rem 2rem', borderRadius: '20px', border: '2px solid rgb(25, 118, 210)', textTransform: 'none', 
                fontFamily: 'Copperplate, Papyrus, fantasy',
                '&:disabled': {
                  backgroundColor: 'rgb(176, 190, 197)',
                  color: 'rgb(255, 255, 255)',
                  border: '2px solid rgb(176, 190, 197)',
                },
              }}>
          <Typography variant='h3' sx={{ fontSize:`${customFontSize*1.5}rem`, fontFamily: 'Copperplate, Papyrus, fantasy', letterSpacing: 2}}>Start Game</Typography>
        </Button>
      </Tooltip>
    </Grid>
  
  </Box>
  );
};

export default MainMenu;