import React, { useEffect, useState } from 'react';

import './App.css';

import { ThemeProvider, CssBaseline  } from '@mui/material';
import { Button } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import  Theme from './theme';

import { preloadImages } from './utilities/preloadImages';
import { imageSources, initresources, useGameComponents } from './constants/constants'

import { DimensionsProvider } from './components/dimensionsContext';

import TitleScreen from './components/titleScreen.js';
import MainMenu from './components/mainMenu';
import AdminScreen from './components/adminController.js';

import GameBoardCanvas from './gameBoardCanvas';
import PlayerDisplay from './components/playerDisplay';
import GameLog from './components/gameLog';



function App() {
  // Setup the load images promise
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);

  // Set up state variables for the game log (rather than using innerHTML type code, the current instruction & log will just show the current value in these state variables)
  const [log, setLog] = useState(['Starting Game']);
  const [currentInstruction, setCurrentInstruction] = useState('PLACEHOLDER');

  // Title Screen & Main Menu state variables
  const [startNewGame, setStartNewGame] = useState(false);
  const [canResume, setCanResume] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
 
  // Set initial values for game components
  const gameComponents = useGameComponents();
  const {boardData, mapData, playerData, gamePlayData, questionData, InitBoardData, InitPlayerData, InitGamePlayData, UpdateMapData, UpdateGamePlayData, UpdateQuestions } = gameComponents; 

  // Load the images - makes sure all images are loaded before the game window is presented.
  useEffect(() => {
    preloadImages(imageSources)
      .then((loadedImages) => {
        setImages(loadedImages);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  // Function to add text to the log.
  const addLog = (message) => {
    setLog((prevLog) => [...prevLog, message]);
  };

  // Function to change the text of the instruction
  const addCurrentInstruction = (instruct) => {
    setCurrentInstruction(instruct);
  }

  // Load the parameters from the main menu and start the game
  const startGame = (boardInfo, playerInfo, skillsBuildCourses, includeQuiz3) => {
    //console.log('Board Data:', boardInfo, 'Player Data:', playerInfo, 'Skills Build Courses: ', skillsBuildCourses, 'Include Quiz 3:', includeQuiz3 );

    // Split the board data into two - the map data, and the rest of the board data
    const { mapData, ...restBoardData} = boardInfo;

    // Initialise the board and map data
    InitBoardData(restBoardData, mapData);

    // Now update the map data to assign ownership and starting structure
    mapData.forEach(tile => {
      if (tile.startSquare > 0 && tile.startSquare <= playerInfo.length) {
        UpdateMapData(tile.id, 'currentOwner', tile.startSquare);
        UpdateMapData(tile.id, 'structure', 1);
      } else {
        UpdateMapData(tile.id, 'currentOwner', 0);
        UpdateMapData(tile.id, 'structure', 0);
      }
    })

    // Add initial values to all players
    const playerInfoDefaults = playerInfo.map(player => ({
      ...player
      , wood: initresources.wood
      , food: initresources.food
      , metal: initresources.metal
      , tech: initresources.tech
      , vp: 0
      , name: player.compPlayer === 1 ? `Player ${player.id+1} (AI)` : player.name
    }));
        
    // Initialise player data
    InitPlayerData(playerInfoDefaults);

    
    // Now initialise gameplay data
    InitGamePlayData();
    // And make sure number of players is correct
    UpdateGamePlayData('numberPlayers', playerInfo.length);
    // And use the player's selection for the skills build courses to use and whether or not to use quiz 3 questions
    UpdateGamePlayData('skillsBuildCourses', skillsBuildCourses);
    UpdateGamePlayData('includeQuiz3Questions', includeQuiz3 ? 1 : 0);

    // And clear the log
    setLog(['Starting Game']);

    setIsGameStarted(true);
    setCanResume(true);
  };


  const handleNewGameClick = () => {
    setStartNewGame(true);
  };

  const handleResumeGameClick = () => {
    setIsGameStarted(true);
  };

  const handleAdminClick = () => {
    setShowAdmin(true);
  }

  const handleAdminExit = () => {
    setShowAdmin(false);
  }

  // Function for exiting back to the title screen
  const exitToTitle = (hasWon = false) => {
    setStartNewGame(false);
    setIsGameStarted(false);
    if (hasWon) {
      setCanResume(false);
    }
  };

  // TO BE DELETED - This just shows all the current data
  const showData = () => {
    console.log('boardData:', boardData);
    console.log('mapData:', mapData);
    console.log('playerData:', playerData);
    console.log('gamePlayData:', gamePlayData);
    console.log('Question data:', questionData);
  }

  // If the images are taking a while to load, then this 'loading' message will appear.
  // Once images are loaded, this 'loading' variable is set to false.
  if (loading) {
    return <div>Loading...</div>;
  }
  
  // MAIN OUTPUT
  else {
    return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor:'black' }}>
      <ThemeProvider theme={Theme}>
      <CssBaseline />
      <DndProvider backend={HTML5Backend}>
      <DimensionsProvider>
      <>
      {isGameStarted ? (
        <>
        <PlayerDisplay 
              images={images}
              gameComponents = {gameComponents}
              addLog = {addLog}
              addCurrentInstruction = {addCurrentInstruction}
              />
        <GameBoardCanvas 
            images={images}
            gameComponents = {gameComponents}
            addLog = {addLog}
            addCurrentInstruction = {addCurrentInstruction}
            exitToTitle={exitToTitle}
            />
        <GameLog 
          currentInstruction = {currentInstruction}
          log={log}
          exitToTitle={exitToTitle}
          />
        </>
        ) : ( 
        startNewGame ? (
          <MainMenu startGame={startGame} />
        ) : (
        showAdmin ? (
          <AdminScreen handleAdminExit={handleAdminExit}/>
        ) : (
          <TitleScreen
              handleNewGameClick={handleNewGameClick}
              handleResumeGameClick={handleResumeGameClick}
              canResume={canResume}
              handleAdminClick={handleAdminClick}
              />
        )
      ))}
      
        {/* TEMP - Just a button to show game data */}
        <div display='flex'>
          <Button variant='contained' onClick={showData} sx={{marginTop:'1rem' , width:'10rem'}}>SHOW DATA</Button>
        </div>
        </>
        </DimensionsProvider>
        </DndProvider>
        </ThemeProvider>
    </div>
  );
  }
}

export default App;


/*


      

            

*/