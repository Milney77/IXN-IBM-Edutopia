import React, { useState } from 'react';
import { Stack, Box, Grid, Typography, Tooltip  } from '@mui/material';
import { colorMap } from '../constants/constants';
import QuestionOverlay from './questionOverlay';


import './custom.css';

// Icons
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import AppsOutageIcon from '@mui/icons-material/AppsOutage';
import BrowseGalleryOutlinedIcon from '@mui/icons-material/BrowseGalleryOutlined';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';


function handleButtonClick(addCurrentInstruction, showQuestionOverlay) {
    // Here is where we should trigger the overlay for the skills build question.
    addCurrentInstruction('Answer the damn question!');    
    showQuestionOverlay();
}

// Some code to create 'pulsing' animation behind the picture for the current player
const pulsingCircleStyle = {
    borderRadius: '25%',
    width: '80%',
    height: '80%',
    animation: 'pulse 2s infinite',
    zIndex: 0, 
  };
  const boxStyle = {
    position: 'relative',
    zIndex: 1, 
  };


  const question0 = {
    badgeIcon: 'images/badges/sb_gettingStartedEnterpriseGradeDataScience.png'
    , questionType: 1
    , questionText: "Threat hunting requires a great deal of skill, concentration, collaboration, and more than a little creativity. These are the areas where the human mind excels. But threat hunting also requires the right technology to sift intelligence from a vast seat of data, spot anomalies in system logs and automate the process using a global network of threat intelligence. "
    , options: ["Because the traditional defense strategy is not to layer on another point-product tool or technology to an already fragmented and disjointed IT environment."
, "Costly and complex fragmented security capabilities provide the visibility and coordination needed to stop today’s sophisticated attacks."
, "Until recently, organizations have responded to security concerns by deploying a new tool to address each new risk. We’ve observed one company was using 85 tools from 45 different software vendors! Now they have to install, configure, manage, patch, upgrade, and pay for dozens of non-integrated solutions with limited views of the landscape."
, "The security portfolio structured around domains presents a less organized fashion to make sense of threats using logs, data, threats, flows, packets, etc."
, "Because it involves the partner ecosystem that allows collaboration across companies and competitors, to understand global threats and data, and adapt to new threats."
]
    , matchoptions: []
    , optionsToSelect: 2
    , answerIdx: [0, 2] 
    , hintInd: 1
    , hintTxt: "Hint goes here"
    , hintTxt1: 'With more text here'
    , hintTxt2: 'And maybe some more here'
    , hintCards: 0
    , hintCardTitles: []
    , hintCardText: []
}

  const question1 = {
    badgeIcon: 'images/badges/sb_gettingStartedEnterpriseGradeDataScience.png'
    , questionType: 1
    , questionText: "When thinking about the 5 main Vs of data, what does Veracity refer to?"
    , options: ['Volume', 'Velocity', 'Variety', 'Veracity']
    , matchoptions: []
    , optionsToSelect: 1
    , answerIdx: [2] 
    , hintInd: 1
    , hintTxt: "The 5 v's of data are: "
    , hintTxt1: ''
    , hintTxt2: ''
    , hintCards: 0
    , hintCardTitles: ["Volume", "Variety", "Velocity", "Veracity", "Value"]
    , hintCardText: ["Refers to the vast amount of data generated every second",
               "Refers to the different types of data we can use",
               "Refers to the speed at which new data is generated and the speed at which data moves around",
               "Refers to the messiness of trustworthiness of the data",
               "Refers to having access to big data is no good unless we can turn it into value"
    ]
}

const question2 = { 
    badgeIcon: 'images/badges/sb_gettingStartedEnterpriseGradeDataScience.png'
    , questionType: 1
    , questionText: "The field of data science is the process of _____________. Select all that apply."
    , options: ['preparing data for analysis and processing',
        'working exclusively with spreadsheets and table',
        'performing advanced data analysis',
        'visualizing the results to reveal patterns'
        ]
    , matchoptions: []
    , optionsToSelect: -1
    , answerIdx: [0, 2, 3]
    , hintInd: 0
    , hintTxt: ""
    , hintTxt1: ''
    , hintTxt2: ''
    , hintCards: 0
    , hintCardTitles: []
    , hintCardText: []
}

const question3 = { 
    badgeIcon: 'images/badges/sb_journeyToCloud.png'
    , questionType: 2
    , questionText: "The IBM Garage Lifecycle is made up of three phases of development.  Match the description with its corresponding phase."
    , options: ["This phase is where brainstorming activities are conducted to understand the end-user",
                "Build and test multiple iterations of an MVP to test our hypothesis",
                "MVPs are fully developed and tested for performance and security risks"
    ]
    , matchoptions: ["Think",
        "Transform",
        "Thrive"
        ]
    , optionsToSelect: 0
    , answerIdx: []
    , hintInd: 0
    , hintTxt: ""
    , hintTxt1: ''
    , hintTxt2: ''
    , hintCards: 0
    , hintCardTitles: []
    , hintCardText: []
}

const questionList = [question0, question1, question2, question3]

const PlayerBox = (props) => {
    const {playerData, BoxWidth, gamePlayData, addCurrentInstruction, showQuestionOverlay} = props;
    
    // Determine colors
    const color = colorMap[playerData.color];

    // Font Size - Based on screen width & number of players
    const screenWidth = window.innerWidth;
    var customFontSize;
    var customMargin;
    var playerInfoWidth = screenWidth / gamePlayData.numberPlayers;
    //console.log(playerInfoWidth)
    if (playerInfoWidth <= 200) {
        customFontSize = 0.5;
        customMargin = 1;
    } else if (playerInfoWidth <= 300) {
        customFontSize = 0.75;
        customMargin = 1;
    } else if (playerInfoWidth <= 400) {
        customFontSize = 1;
        customMargin = 1;
    } else {
        customFontSize = 1.25;
        customMargin = 1;
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
                mx: `${customMargin}rem`,
            }}>
            
            {/* Use a grid to help with placement and sizing */}
            <Grid container>

            {/* Button to launch skills build */}
            <Grid item xs={2} xl={1.5}  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}>
                { (gamePlayData.currentPlayer === playerData.id && gamePlayData.currentPhase === 0) ? (
                    <Box sx={pulsingCircleStyle} alignItems='center'>
                    <Box
                        component='img'
                        src='images/icons/icon-v2-skillsbuild.png'
                        alt='sb'
                        sx={{ ...boxStyle, width: '100%', height: '100%', cursor: 'pointer', alignItems:'center', objectFit: 'contain'}}
                        
                        onClick={() => handleButtonClick(addCurrentInstruction, showQuestionOverlay)}
                    ></Box>
                     </Box>
                ) : (gamePlayData.currentPlayer === playerData.id && gamePlayData.currentPhase === 1) ? (
                    <Box>
                    <AppsOutageIcon sx={{fontSize: `${customFontSize*2}rem`,}}/>
                    </Box>
                ) : (gamePlayData.currentPlayer === playerData.id && gamePlayData.currentPhase === 2) ? (
                    <Box>
                    <BrowseGalleryOutlinedIcon sx={{fontSize: `${customFontSize*2}rem`,}}/>
                    </Box>
                ) : (
                    <Box>
                    <HourglassBottomOutlinedIcon sx={{fontSize: `${customFontSize*2}rem`, color: 'grey'}}/>
                    </Box>
                )
                }
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
                            <Typography sx={{fontSize: `${customFontSize}rem`,}}>{playerData.food}</Typography>
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
                            <Typography sx={{fontSize: `${customFontSize}rem`,}}>{playerData.wood}</Typography>
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
                            <Typography sx={{fontSize: `${customFontSize}rem`,}}>{playerData.metal}</Typography>
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
                            <Typography sx={{fontSize: `${customFontSize}rem`,}}>{playerData.tech}</Typography>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                    </Grid>
                </Stack>
            </Grid>
        </Grid>
     </Box>
    )
}



export const PlayerDisplay = ({ images, gameComponents, addLog, addCurrentInstruction }) => {
    const {playerData, gamePlayData, UpdatePlayerData, UpdateGamePlayData} = gameComponents; 

    const BoxWidth = `${Math.floor(100 / gamePlayData.numberPlayers)}%`;

     // Skills Build Question Overlay
    // This is here as the button that triggers this is in this section too.       
    const [questionOverlayVisible, setQuestionOverlayVisible] = useState(false);
    const showQuestionOverlay = () => {
        setQuestionOverlayVisible(true);
    };
    
     // Function for handling the result of the skills build question
     const handleQuestionResult = (isCorrect, usedHint) => {
        console.log('Correct:', isCorrect, ', Hint: ', usedHint);
        let techPoints = 0;
        if (isCorrect) {
            techPoints = usedHint ? 1 : 2;
            addLog(`Player ${gamePlayData.currentPlayer + 1} answered the question correctly and earned ${techPoints} tech points.`);
        } else {
            addLog(`Player ${gamePlayData.currentPlayer + 1} did not answer the question correctly and earns zero tech points.`);
        }
        UpdatePlayerData(gamePlayData.currentPlayer, 'tech', playerData[gamePlayData.currentPlayer].tech + techPoints);
        setQuestionOverlayVisible(false);
        UpdateGamePlayData('currentPhase', 1);
    };


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
            { playerData.slice(0, gamePlayData.numberPlayers).map(player => (
                    <PlayerBox key={ player.id }
                        playerData = { player }
                        BoxWidth = { BoxWidth }
                        images = {images}
                        gamePlayData = {gamePlayData}
                        UpdatePlayerData = {UpdatePlayerData}
                        UpdateGamePlayData = {UpdateGamePlayData}
                        addLog={addLog}
                        addCurrentInstruction={addCurrentInstruction}
                        showQuestionOverlay={showQuestionOverlay}
                    />))}
               
            </Box>
            {questionOverlayVisible && (
                <QuestionOverlay
                question = {questionList[gamePlayData.currentPlayer]}
                onResult={handleQuestionResult}
            />
        )}
    </div>
    )
}

export default PlayerDisplay;

    
    