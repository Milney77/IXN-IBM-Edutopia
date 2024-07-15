import React, { useEffect, useState } from 'react';

import './App.css';

import { ThemeProvider, CssBaseline  } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import  Theme from './theme';

import { preloadImages } from './utilities/preloadImages';
import { imageSources } from './constants/constants'
import { useGameComponents } from './constants/constants';

import GameBoardCanvas from './gameBoardCanvas';
import PlayerDisplay from './components/playerDisplay';
import GameLog from './components/gameLog';


function App() {
  // Setup the load images promise
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [log, setLog] = useState(['Starting Game']);
  const [currentInstruction, setCurrentInstruction] = useState('PLACEHOLDER');

  // Set initial values for game components
  const gameComponents = useGameComponents();

  useEffect(() => {
    preloadImages(imageSources)
      .then((loadedImages) => {
        setImages(loadedImages);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);


  const addLog = (message) => {
    setLog((prevLog) => [...prevLog, message]);
  };

  const addCurrentInstruction = (instruct) => {
    setCurrentInstruction(instruct);
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  

    return (
    <div className="App">
      <ThemeProvider theme={Theme}>
      <CssBaseline />
      <DndProvider backend={HTML5Backend}>
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
            />
        <GameLog log={log}
          currentInstruction = {currentInstruction}
        />
        </DndProvider>
        </ThemeProvider>
    </div>
  );
}

export default App;


/*


      

            

*/