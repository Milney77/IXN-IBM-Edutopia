import React, { useState, useEffect, useContext } from 'react';
import { Box, Typography, Button, Stack, Grid, Tooltip, List, ListItem, MobileStepper, CardMedia } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

import { DimensionsContext } from './dimensionsContext';


const tutorials = [
    {
      title: 'Introduction',
      imgPath: 'images/other/titlepage.png',
      instructions: [
        'Upon opening Edutopia, your browser will display the Title Screen with four buttons:',
        '1 - New Game - Opens up the main menu', 
        '2 - Resume Game - Resume an existing game (if there is one)',
        '3 - Administrator Tools - For learning administrators only',
        '4 - How to Play - Opens up this guide you are currently looking at',
      ],
    },
    {
        title: 'Main Menu',
        imgPath: 'images/other/mainmenu.png',
        instructions: [
          '1 - First select a board to play on.  Click the left and right arrows next to the game map to change boards.  There is a table next to the board that will display some parameters of that board.',
          '2 - Select what skills build courses you wish to draw questions from.  Each game board has a minimum number of quizzes to include.'  ,
          '3 - Set the number of players and define the parameters for each player. Hover your mouse over any setting to see what it does.',
          '4 - When ready, click the Start Game button!'
        ],
      },
      {
        title: 'The Game Board',
        imgPath: 'images/other/gameboard.png',
        instructions: [
          'This is an example of the main game board screen.',
          '1 - Every player has a player box at the top showing their name, victory points and resources.  The icons indicate whose turn it is.',
          "2 - The game map is made up of hexagonal tiles.  If the tile is owned by a player, an outline in that player's colour will surround the hex.",
          "3 - The colour of the tile determines what resource it produces, as follows:",
          " Red: Metal, Dark Green: Wood, Light Green: Food, Blue (if any): Nothing",
          "4 - Below the game board is the current instruction (human player) or a description of what the computer player is doing.",
          "5 - Next to the instruction is the game log - click to see all entries.",
          "6 - Click the X button to go back to the title screen, the Question mark to see this How To Guide"
        ],
      },
      {
        title: 'The Objective',
        imgPath: 'images/other/gameboard.png',
        instructions: [
          "You will start the game with a settlement consisting of a camp on one tile and some starting resources.",
          "The aim of the game is to collect resources and expand your settlement by taking over adjacent tiles and upgrading your structures",
          "Each structure is worth a certain amount of victory points.",
          "Keep building and expanding your settlement until you reach the victory point target, at which point your settlement becomes EDUTOPIA and you win the game!"
        ]
      },
      {
        title: 'The Game Loop',
        imgPath: 'images/other/gameboard.png',
        instructions: [
          "There are 3 phases of the game:",
          "1 - Question Phase - Click the skills build icon on the left of your player display box to open the question overlay.",
          "2 - Resource Generation - This is an automatic phase where you generate resources based on what tiles you own and what structures you hvae built on them",
          "3 - Action Phase - This is where you can interact with the game board.  You can hover your mouse over the action menu icons to see what each one does.",
        ]
      },
      {
        title: 'The Question Phase',
        imgPath: 'images/other/questionexample.png',
        instructions: [
          "This is an example of the question overlay that appears when you click on the skills build button",
          "If there are any hints related to that question, a Hint button will be displayed.",
          "Answering a question correctly without a hint provides 2 tech resources, using a hint reduces this to 1.",
          "If you do not answer the question correctly, you will be given what the correct answer was."
        ]
      },
      {
        title: 'The Action Phase',
        imgPath: 'images/other/actionmenuicons.png',
        instructions: [
          "The five actions are:",
          "1 - Build - Upgrade a structure on a tile you already own",
          "2 - Develop - Take over an empty, adjacent tile and build a camp upon it.",
          "3 - Takeover - Take over an adjacent tile that is owned by another player and replace any existing structures with a camp.",
          "4 - Trade - Trade resources with the bank.",
          "5 - End Turn - End your turn and play passes to the next player"
        ]
      },
      {
        title: 'The Structure List',
        imgPath: 'images/other/structurelist.png',
        instructions: [
          "The four structures are:",
          "1 - Camp - Produces 1 resource and is worth 1 victory point.  Is built automatically when taking over tiles.",
          "2 - House - Produces 2 resources and is worth 2 victory points.  Costs 2 Food and 4 Metal",
          "3 - Village - Produces 3 resources and is worth 3 victory points.  Costs 1 Wood, 2 Food and 6 Metal.  There are limits as to how many villages you can build on a map.",
          "4 - Castle - Produces 3 resources and is worth 4 victory points.  Costs 2 Wood, 3 Food and 8 Metal.  There are limits as to how many castles you can build on a map",
          "Note castles also increase resource production by 1 on the tile itself, and all adjacent tiles you own."
        ]
      },
      {
        title: 'The Trade Menu',
        imgPath: 'images/other/tradeoverlay.png',
        instructions: [
          "You can trade resources with the bank.",
          "Tech resource can be traded at a 1 to 2 ratio - for each tech resource you trade, you can take 2 from the bank.",
          "Other resources are traded at a 3 to 1 ratio - for every three of that type of resource you trade, you can take 1 from the bank.",
          "The table on the left shows the resources you are trading to the bank.",
          "The table on the right shows the resources you are taking from the bank in return.",
          "While you cannot take more resources than you are allowed, you can take less - make sure you are happy with the trade before you click Confirm.  Ther are no take-backsies."
        ]
      },
      {
        title: 'Taking over other players tiles',
        imgPath: 'images/other/takeoverpicture.png',
        instructions: [
          "There are restrictions on taking over other player's tiles.",
          "1 - You cannot take over another player's starting square.",
          "2 - You need a higher structure value in the 6 tiles surrounding the tile you are trying to take over than the player who owns that tile does.",
          "In the image above, the green player has a camp on the Wood tile and a house on the Metal tile, giving the green player a structure strength of 3 (1 for the camp, 2 for the house).",
          "But the red player has 2 camps and 1 house in the tiles around the green camp - so the red player has a higher structure strength than the green player.",
          "However, the tile with the Green house on it cannot be taken over - the red player only has 2 camps in the neighbour hood of this tile, so red has a structure strength of 2 compared to green's 3."
        ]
      }
      
      
      



    
  ];

const OverviewCarousel = ({ items }) => {

    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = items.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => (prevActiveStep + 1 >= maxSteps ? 0 : prevActiveStep + 1));
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => (prevActiveStep - 1 < 0 ? maxSteps - 1 : prevActiveStep - 1));
    };

    // Font sizing
    const { width, height } = useContext(DimensionsContext);
    const [customFontSize, setCustomFontSize] = useState(1)
    useEffect(() => {
      const fontsize = Math.min(1, 1600 / {width});
      setCustomFontSize(fontsize);
      console.log(customFontSize);
    }, [width, height]);

    return (
      <Box sx={{ maxWidth: '100%', flexGrow: 1, mx: 'auto' }}>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft />
              Back
            </Button>
          }
        />
        <Typography variant='h4'>
            {items[activeStep].title}
        </Typography>
        <Box sx={{ border: '3px solid #000', width: 'fit-content', margin:'auto'}}>
          <CardMedia
            component="img"
            height="300"
            image={items[activeStep].imgPath}
            sx={{
              objectFit: 'contain',
              display: 'block', 
            }}
          />
        </Box>
        <List>
          {items[activeStep].instructions.map((instruction, index) => (
            <ListItem key={index}>
              <Typography>{`${instruction}`}</Typography>
            </ListItem>
          ))}
        </List>
        
      </Box>
    );
  };
  
 const HowToPlayOverlay = ({ handleHowToClose}) => {

    const onHandleClose = () => {
      handleHowToClose();
    }

  return (
        <Box sx={{
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
                width: '60%',
                maxHeight: '80%',
                textAlign: 'center',
                alignSelf: 'flex-start',
                marginTop: '5rem',
                overflow:'auto'
            }}
        >
        <Stack direction = 'row' justifyContent='space-between' alignItems='center' sx={{mb:'1rem'}}>
          <Typography
            variant="h4"
          >  How To Guide
          </Typography>
          <Box onClick={onHandleClose} sx={{ cursor: 'pointer' }}>
            Close [X]
            </Box>
          </Stack>
      <OverviewCarousel items={tutorials} />
    </Box>
</Box>
  );
};

export default HowToPlayOverlay;