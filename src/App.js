import React, { useEffect, useState } from 'react';


import './App.css';

import { preloadImages } from './utilities/preloadImages';
import { imageSources, colorMap, playerData, mapData, gamePlayVariables } from './constants/constants'
//import {GameComponents} from './constants/contants';


import GameBoardCanvas from './gameBoardCanvas';
import { PlayerDisplay } from './components/playerDisplay';





function App() {
  // Setup the load images promise
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    preloadImages(imageSources)
      .then((loadedImages) => {
        setImages(loadedImages);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


    return (
    <div className="App">
        <PlayerDisplay 
              playerData = { playerData}  
              images={images}
              gamePlayVariables = {gamePlayVariables}
              />
        <GameBoardCanvas 
            images={images}
            gamePlayVariables = {gamePlayVariables}
            playerData = { playerData } 
            />
    </div>
  );
}

export default App;
