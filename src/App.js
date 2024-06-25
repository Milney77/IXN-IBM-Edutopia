import React, { useEffect, useState } from 'react';


import './App.css';

import { preloadImages } from './utilities/preloadImages';
import GameBoard from './gameBoard';
import GameBoardCanvas from './gameBoardCanvas';
import { Button } from '@mui/material';


const imageSources = [
  { name: 'tile_food', url: 'images/tiles/food.png' }, 
  { name: 'tile_wood', url: 'images/tiles/wood.png' }, 
  { name: 'tile_metal', url: 'images/tiles/metal.png' }, 
  { name: 'tile_sea', url: 'images/tiles/sea.png' }, 
  { name: 'tile_border_grey', url: 'images/tiles/outer-grey.png' }, 
  { name: 'tile_border_red', url: 'images/tiles/outer-red.png' }, 
  { name: 'tile_border_blue', url: 'images/tiles/outer-blue.png' }, 
  { name: 'tile_border_yellow', url: 'images/tiles/outer-yellow.png' }, 
  { name: 'tile_border_green', url: 'images/tiles/outer-green.png' }, 

  { name: 'struct_red_camp', url: 'images/structures/red0-camp.png' }, 
  { name: 'struct_red_house', url: 'images/structures/red1-house.png' }, 
  { name: 'struct_red_village', url: 'images/structures/red2-village.png' }, 
  { name: 'struct_red_castle', url: 'images/structures/red3-castle.png' }, 
  { name: 'struct_blue_camp', url: 'images/structures/blue0-camp.png' }, 
  { name: 'struct_blue_house', url: 'images/structures/blue1-house.png' }, 
  { name: 'struct_blue_village', url: 'images/structures/blue2-village.png' }, 
  { name: 'struct_blue_castle', url: 'images/structures/blue3-castle.png' }, 
  { name: 'struct_yellow_camp', url: 'images/structures/yellow0-camp.png' }, 
  { name: 'struct_yellow_house', url: 'images/structures/yellow1-house.png' }, 
  { name: 'struct_yellow_village', url: 'images/structures/yellow2-village.png' }, 
  { name: 'struct_yellow_castle', url: 'images/structures/yellow3-castle.png' }, 
  { name: 'struct_green_camp', url: 'images/structures/green0-camp.png' }, 
  { name: 'struct_green_house', url: 'images/structures/green1-house.png' }, 
  { name: 'struct_green_village', url: 'images/structures/green2-village.png' }, 
  { name: 'struct_green_castle', url: 'images/structures/green3-castle.png' }, 


];



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
        <GameBoardCanvas images={images}/>
        
    </div>
  );
}

export default App;
