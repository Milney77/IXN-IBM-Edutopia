import React, { useState, useEffect, useContext } from 'react';
import { Stack, Box, Grid, Typography, Tooltip  } from '@mui/material';
import axios from 'axios';

import { colourMap } from '../constants/constants';
import { DimensionsContext } from './dimensionsContext';
import QuestionOverlay from './questionOverlay';

import './custom.css';

// Icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';

import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import HourglassBottomOutlinedIcon from '@mui/icons-material/HourglassBottomOutlined';


export function handleButtonClick(addCurrentInstruction, showQuestionOverlay) {
    // Here is where we should trigger the overlay for the skills build question.
    addCurrentInstruction('Player 1 - Answer the Skills Build question');    
    showQuestionOverlay();
}

export const calculateFontSizeAndMargin = (playerInfoWidth, setCustomFontSize, setCustomMargin) => {
    // Size is based on screen width & number of players
    //const newFontSize = 1.5 * playerInfoWidth / 960;
    const newFontSize = Math.min(1.5, Math.max(0.25, 0.25 + 0.25 * Math.floor((playerInfoWidth)/100)));
    const newMargin = Math.min(1.5, Math.max(0, 0.25 * Math.floor((playerInfoWidth - 100)/100)));
    //console.log('playerInfoWidth:', playerInfoWidth, ', newFontSize:', newFontSize);
    setCustomFontSize(newFontSize);
    setCustomMargin(newMargin);
    //console.log('Font: ', newFontSize, ', Margin: ', newMargin)
};

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



// Player Box Component - this is called for each player, and shows the player name, victory points and resources.
// Also, if it is the player's turn, then the skills build button will be clickable.
const PlayerBox = (props) => {
    const {victoryPoints, playerData, BoxWidth, gamePlayData, addCurrentInstruction, showQuestionOverlay} = props;
    // Determine colors
    const colour = colourMap[playerData.colour];

    const { width } = useContext(DimensionsContext);
    const [customFontSize, setCustomFontSize] = useState(1);
    const [customMargin, setCustomMargin] = useState(1);

    const maxIconSize = 2.5 * (customFontSize) / 1.5
    // Font Size - Based on screen width & number of players, now updating dymically thanks to the dimension context approach
    
    useEffect(() => {
        // Determine the font & margin sizes
        const playerInfoWidth = width / gamePlayData.numberPlayers;
        calculateFontSizeAndMargin(playerInfoWidth, setCustomFontSize, setCustomMargin);
      }, [width, gamePlayData.numberPlayers]);

    return (
        /* One Box to hold them all */
        <Box sx = {{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: BoxWidth,
                bgcolor: colour ? colour.background : 'grey',
                border: `2px solid ${colour ? colour.border : 'black'}`,
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
                    { (gamePlayData.currentPlayer === playerData.id && gamePlayData.currentPhase === 0 && playerData.compPlayer === 0) ? (
                    <Box sx={{...pulsingCircleStyle, width: `${customFontSize * 3}rem`,
                            height: `${customFontSize * 3}rem`,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'}}>  
                            <Tooltip title="The Skills Build Button">
                    <Box
                        component='img'
                        src='images/icons/icon-v2-skillsbuild.png'
                        alt='sb'
                        sx={{
                            ...boxStyle,
                            width: '100%',
                            height: '100%',
                            cursor: 'pointer',
                            alignItems: 'center',
                            objectFit: 'contain',
                        }}
                        
                        onClick={() => handleButtonClick(addCurrentInstruction, showQuestionOverlay)}
                    ></Box>
                    </Tooltip>
                     </Box>
                ) : (gamePlayData.currentPlayer === playerData.id && gamePlayData.currentPhase === 1 && playerData.compPlayer === 0) ? (
                    <Box>
                    <AddShoppingCartIcon sx={{fontSize: `${customFontSize*2}rem`,}}/>
                    </Box>
                ) : (gamePlayData.currentPlayer === playerData.id && gamePlayData.currentPhase === 2 && playerData.compPlayer === 0) ? (
                    <Box>
                    <AccessibilityNewIcon sx={{fontSize: `${customFontSize*2}rem`,}}/>
                    </Box>
                ) : (gamePlayData.currentPlayer === playerData.id  && playerData.compPlayer === 1) ? (
                    <Box>
                    <PsychologyAltIcon sx={{fontSize: `${customFontSize*2}rem`,}}/>
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
                        <Grid item xs={9.5}>
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
                        <Grid item xs={2.5} alignItems='center'>
                            <Tooltip title={'Victory Points - target to win is ' + victoryPoints}>
                            <Stack direction='row' alignItems='center'>
                                
                                <StarRateOutlinedIcon sx={{fontSize: `${customFontSize*1.5}rem`,}}/>
                                <Typography variant="h6" paddingLeft={0.5} sx={{fontSize: `${customFontSize}rem`,}}>
                                    {playerData.vp}
                                </Typography>
                            </Stack>
                            </Tooltip>
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
                                    sx={{ maxHeight: `${maxIconSize}rem`, maxWidth: `${maxIconSize}rem`, width: '100%', height: '100%'}}
                                ></Box>
                            </Grid>
                        </Tooltip>
                        <Grid item xs={1.5}>
                            <Typography sx={{fontSize: `${customFontSize}rem`,}}>{playerData.food}</Typography>
                        </Grid>
                        <Grid item xs={0.25}></Grid>

                        <Tooltip title='Wood Resource'>
                        <Grid item xs={1}>
                            <Box
                                component='img'
                                src='images/icons/icons-wood.png'
                                alt='wood'
                                sx={{ maxHeight: `${maxIconSize}rem`, maxWidth: `${maxIconSize}rem`, width: '100%', height: '100%'}}
                            ></Box>
                        </Grid>
                        </Tooltip>
                        <Grid item xs={1.5}>
                            <Typography sx={{fontSize: `${customFontSize}rem`,}}>{playerData.wood}</Typography>
                        </Grid>
                        <Grid item xs={0.25}></Grid>

                        <Tooltip title="Metal Resource">
                        <Grid item xs={1}>
                            <Box
                                component='img'
                                src='images/icons/icons-metal.png'
                                alt='metal'
                                sx={{ maxHeight: `${maxIconSize}rem`, maxWidth: `${maxIconSize}rem`, width: '100%', height: '100%'}}
                            ></Box>
                        </Grid>
                        </Tooltip>
                        <Grid item xs={1.5}>
                            <Typography sx={{fontSize: `${customFontSize}rem`,}}>{playerData.metal}</Typography>
                        </Grid>
                        <Grid item xs={0.25}></Grid>

                        <Tooltip title="Tech resource.  Trade to the bank for 2 resources of your choice">
                        <Grid item xs={1}>
                            <Box
                                component='img'
                                src='images/icons/icons-tech.png'
                                alt='tech'
                                sx={{ maxHeight: `${maxIconSize}rem`, maxWidth: `${maxIconSize}rem`, width: '100%', height: '100%'}}
                            ></Box>
                        </Grid>
                        </Tooltip>
                        <Grid item xs={1.5}>
                            <Typography sx={{fontSize: `${customFontSize}rem`,}}>{playerData.tech}</Typography>
                        </Grid>
                        <Grid item xs={0.25}></Grid>
                    </Grid>
                </Stack>
            </Grid>
        </Grid>
     </Box>
    )
}



export const PlayerDisplay = ({ images, gameComponents, addLog, addCurrentInstruction }) => {
    const {boardData, playerData, gamePlayData, questionData, UpdatePlayerData, UpdateGamePlayData, UpdateQuestions} = gameComponents; 
    const { numberPlayers, currentPlayer } = gamePlayData;

    const { width } = useContext(DimensionsContext);
    const BoxWidth = `${Math.floor(100 / gamePlayData.numberPlayers)}%`;


     // Skills Build Question Overlay
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    // This is here as the button that triggers this is in this section too.       
    const [questionOverlayVisible, setQuestionOverlayVisible] = useState(false);
    const showQuestionOverlay = () => {
        setSelectedQuestion(selectQuestion(questionData));
        setQuestionOverlayVisible(true);
        //UpdateGamePlayData('currentPhase', 1);
    };
    
     // Function for handling the result of the skills build question
     const handleQuestionResult = (isCorrect, usedHint, questionid) => {
        //console.log('Questionid:', questionid, 'Correct:', isCorrect, ', Hint: ', usedHint);
        let techPoints = 0;
        if (isCorrect) {
            techPoints = usedHint ? 1 : 2;
            addLog(`Player ${gamePlayData.currentPlayer + 1} answered the question correctly and earned ${techPoints} tech points.`);
        } else {
            addLog(`Player ${gamePlayData.currentPlayer + 1} did not answer the question correctly and earns zero tech points.`);
        }
        // Update resources
        const playerDataUpdates = [{
            playerId: gamePlayData.currentPlayer
            , dataToUpdate: {
                tech: playerData[currentPlayer].tech + techPoints
            }
        }]
        UpdatePlayerData(playerDataUpdates);
        setQuestionOverlayVisible(false);
        UpdateGamePlayData('currentPhase', 1);
        // Update question stats
        UpdateQuestions(prevQuestions => prevQuestions.map(question => {
            //console.log('question.id', question.id, ', questionid:', questionid)
            if (question.questionid === questionid) {
                return {...question
                            , timesAsked: question.timesAsked + 1
                            , timesCorrectNoHint: question.timesCorrectNoHint + (isCorrect * (1 - usedHint))
                            , timesCorrectWithHint: question.timesCorrectWithHint + (isCorrect * (usedHint))
                            , timesIncorrectNoHint: question.timesIncorrectNoHint + ((1-isCorrect) * (1 - usedHint))
                            , timesIncorrectWithHint: question.timesIncorrectWithHint + ((1 - isCorrect) * (usedHint))
                };
            }
            return question;
            }))
    };

    //----- SKILLS BUILD QUESTIONS SECTION -----//
    // First, extract the questions
    const [questions, setQuestions] = useState([]);
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    //console.log('Courses: ', gamePlayData.skillsBuildCourses, 'Include Quiz 3:', gamePlayData.includeQuiz3Questions)
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get(`${baseUrl}/questions`)
                // Filter the questions based on user selections 
                // Course ID must be in set of course ids that player has included.
                // Remove all quiz 3 questions if user has selected no quiz 3 question.
                // Remove any question where usequestion != 1;
                const filteredQuestions = response.data.filter(qstn => gamePlayData.skillsBuildCourses.includes(qstn.courseid) &&
                        (qstn.quiznumber <= 2 || gamePlayData.includeQuiz3Questions === 1) &&
                        qstn.usequestion === 1);
                // Add some tracking variables
                const fetchedQuestions = filteredQuestions.map(question => ({
                    ...question,
                    timesAsked: 0
                    , timesCorrectNoHint: 0
                    , timesCorrectWithHint: 0
                    , timesIncorrectNoHint: 0
                    , timesIncorrectWithHint: 0
                }))
                UpdateQuestions(fetchedQuestions);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };
        fetchQuestions();
    }, []);
    //console.log(questions)

    // Function to get a random item from an array - used to randomly pick a question from the different question categories
    const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

    // Function to categories the questions - mainly so game will go through all questions before asking any repeats are presented
    // Split questions into 3 groups - Neverasked (where all questions start), those answered correctly less than 50% of the time, and those answered correctly more than 50% of the time
    const selectQuestion = (questions) => {
        const neverAsked = questions.filter(qstn => qstn.timesAsked === 0);
        const rightLessThanHalf = questions.filter(qstn => qstn.timesAsked > 0 && (qstn.timesCorrectNoHint + qstn.timesCorrectWithHint) / qstn.timesAsked <  0.5);
        const rightMoreThanHalf = questions.filter(qstn => qstn.timesAsked > 0 && (qstn.timesCorrectNoHint + qstn.timesCorrectWithHint) / qstn.timesAsked >= 0.5);

        // Now filter into the 3 quizzes
        const neverasked1 = neverAsked.filter(qstn => qstn.quiznumber === 1);
        const neverasked2 = neverAsked.filter(qstn => qstn.quiznumber === 2);
        const neverasked3 = neverAsked.filter(qstn => qstn.quiznumber === 3);

        const rightLessThanHalf1 = rightLessThanHalf.filter(qstn => qstn.quiznumber === 1);
        const rightLessThanHalf2 = rightLessThanHalf.filter(qstn => qstn.quiznumber === 2);
        const rightLessThanHalf3 = rightLessThanHalf.filter(qstn => qstn.quiznumber === 3);

        //console.log('NeverAsked:', neverAsked, ', Right <50%:', rightLessThanHalf, ', Right >50%:', rightMoreThanHalf)
        // Randomly pick from one of these arrays - priority for questions never asked, then those correctly answered <50% of the time, then the rest.
        if      (neverasked1.length > 0)        {return getRandomItem(neverasked1);}
        else if (rightLessThanHalf1.length > 0) {return getRandomItem(rightLessThanHalf1);}
        else if (neverasked2.length > 0)        {return getRandomItem(neverasked2);}
        else if (rightLessThanHalf2.length > 0) {return getRandomItem(rightLessThanHalf2);}
        else if (neverasked3.length > 0)        {return getRandomItem(neverasked3);}
        else if (rightLessThanHalf3.length > 0) {return getRandomItem(rightLessThanHalf3);}
        else                                    {return getRandomItem(rightMoreThanHalf);}
        
    }

    //console.log(width);

    return (
        <Box className='playerdisplay' sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
           <Box
                sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: `${width}px`,
                }}
            >
            { playerData.slice(0, gamePlayData.numberPlayers).map(player => (
                    <PlayerBox key={ player.id }
                        victoryPoints = { boardData.victoryPoints}
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
                question = {selectedQuestion}
                onResult={handleQuestionResult}
                // Adding a test
                data-testid="question-overlay"
            />
 )}
       
    </Box>
    )
}

export default PlayerDisplay;

    
    /*
{questionOverlayVisible && (
 <QuestionOverlay
                question = {selectedQuestion}
                onResult={handleQuestionResult}
                // Adding a test
                data-testid="question-overlay"
            />
 )}
    */