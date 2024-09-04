import React, { useState, useEffect, useContext } from 'react';
import { Box, Typography, Button, Stack, Grid, Tooltip, Card, CardContent} from '@mui/material';

import { DraggableItem, DropTarget } from './dragAndDrop'; 

import { DimensionsContext } from './dimensionsContext';

// Font Resizing functions
// Can handle the screen width in a general sense - but the length of the strings can be quite different, so including this function:
function calculateFontSize (maxTextLength, baseFontSize, screenWidth) {
    // Get a screen width level
    var screenSizeLevel = Math.max(0.6, Math.min(1, 0.6 + 0.1 * Math.floor((screenWidth - 800)/200)));
    // Text Length level
    var textSizeLevel = Math.max(0.7, Math.min(1, 0.7 + 0.1 * Math.floor((400 - maxTextLength)/100)));

    // Determine base font modifier, and the base font sizes for each element of the question overlay
    const baseFontModifier = Math.min(1, Math.max(0.4, 1 * screenSizeLevel * textSizeLevel));
    const customFontSize = baseFontSize * baseFontModifier;
    return (customFontSize);
  };




const QuestionOverlay = ({ question, onResult }) => {

    // Create some states that are used for various purposes
    // For selection options
    const [selectedOptions, setSelectedOptions] = useState([]);
    // Whether to show the hint or not
    const [showHint, setShowHint] = useState(false);
    // Determine if the response is correct
    const [isCorrect, setIsCorrect] = useState(false);
    // Flag if the question has been answered or not.
    const [answered, setAnswered] = useState(false);
    // Labelling the options to pick from
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // Drag & Drop parameters
    const [matchedOptions, setMatchedOptions] = useState({});
    const [shuffledMatchOptions, setShuffledMatchOptions] = useState([]);
    const [availableOptions, setAvailableOptions] = useState([]);

    useEffect(() => {
        // Adding in a check because testing needs it
        if (question?.matchoptions) {
        const shuffled = [...question.matchoptions].map((option, index) => ({ id: index, text: option })).sort(() => Math.random() - 0.5);
        setShuffledMatchOptions(shuffled);
        setAvailableOptions(shuffled);
        }
      }, [question.matchoptions]);

    // Function to handle selection changes.
    const handleOptionChange = (event) => {
        const { value, checked } = event.target;
        if (question.optionstoselect === 1) {
            setSelectedOptions([value]);
        } else {
            if (checked) {
                setSelectedOptions([...selectedOptions, value]);
            } else {
                setSelectedOptions(selectedOptions.filter(option => option !== value));
            }
        }
    };

    // Confirm button    
    const onConfirm = () => {
        // Check if the selected options are correct
        // Slightly different approaches for multiple choice questions vs matching questions
        var correctAnswers
        var userAnswers;
        var isAnswerCorrect;
        if (question.questiontype === 1) {  // Multi-choice question
            correctAnswers = question.answeridx.map(String);   // Convert the answer indexes to an array of strings
            userAnswers = selectedOptions.map(String);         // Convert user answers to an array of strings
            isAnswerCorrect = userAnswers.length === correctAnswers.length && userAnswers.every(option => correctAnswers.includes(option));
        } else {  // Matching Question
            correctAnswers = Array(question.options.length).fill().map((_, index) => index);
            userAnswers = Object.values(matchedOptions);
            isAnswerCorrect = correctAnswers.join(',') === userAnswers.join(',')
        }
        //const userAnswers = selectedOptions.map(String);         // Convert the user answer indexes to an array of strings
        //console.log('Ans: ', correctAnswers, 'User: ', userAnswers)
        // Set the correct answer state and set question as answered
        setIsCorrect(isAnswerCorrect);
        setAnswered(true);
        // logging
        //console.log(isAnswerCorrect ? 'Correct!' : 'Incorrect!');
        // console.log('IsCorrect:', isCorrect, ', ShowHint:', showHint)
    }

    // Determine if the hint should be displayed
    const onHint = () => {
        setShowHint(true);
    }

    // NEXT button for when user has submitted an answer
    const onNext = () => {
        //console.log('IsCorrect:', isCorrect, ', ShowHint:', showHint);
        const answerCorrectInd = isCorrect ? 1 : 0;
        const usedHintInd = showHint ? 1 : 0;
        const questionid = question.questionid;
        onResult(answerCorrectInd, usedHintInd, questionid);
    }

    // Handle the drag & drop
    const handleDrop = (draggedId, targetId) => {
    setMatchedOptions((prev) => {
      const newMatchedOptions = { ...prev };
      newMatchedOptions[targetId] = draggedId;
      return newMatchedOptions;
        });
        setAvailableOptions((prev) => prev.filter(option => option.id !== draggedId));
    };

    const handleRemove = (index) => {
        setMatchedOptions((prev) => {
          const newMatchedOptions = { ...prev };
          const removedOptionId = newMatchedOptions[index];
          delete newMatchedOptions[index];
          setAvailableOptions((prev) => [...prev, shuffledMatchOptions.find(option => option.id === removedOptionId)]);
          return newMatchedOptions;
        });
      };
      

    // Font size calculations
    // First get the max length for all the arrays
    const maxOptionLength = question.options.reduce((max, option) => Math.max(max, option.length), 0);
    const maxHintLength = Math.max(question.hinttxt.length, question.hinttxt1.length, question.hinttxt2.length)
    const maxCardTitleLength = question.hintcardtitles.reduce((max, cardTitle) => Math.max(max, cardTitle.length), 0);
    const maxCardTextLength = question.hintcardtext.reduce((max, cardText) => Math.max(max, cardText.length), 0);
    
    // Set up states to handle when user reszies window
    const { width, height } = useContext(DimensionsContext);
    const [overlayWidth, setOverlayWidth] = useState(width * 0.8);
    const [overlayHeight, setOverlayHeight] = useState(height * 0.8);
    const [questionFontSize, setquestionFontSize] = useState(2.5);
    const [optionFontSize, setOptionFontSize ] = useState(1.5);
    const [optionMarginSize, setOptionMarginSize ] = useState(0.75);
    const [hintFontSize, setHintFontSize ] = useState(1.5);
    const [cardTitleFontSize, setCardTitleFontSize ] = useState(1.25);
    const [cardTextFontSize, setCardTextFontSize ] = useState(1);
    console.log('Screen WxH: (', width, ',', height, '), Overlay WxH: (', overlayWidth, ',', overlayHeight, ')');
    useEffect(() => {
        setquestionFontSize(calculateFontSize(question.questiontext.length, 2.5, width));
        setOptionFontSize(calculateFontSize(maxOptionLength, 1.5, width));
        setOptionMarginSize(calculateFontSize(maxOptionLength, 0.75, width));
        setHintFontSize(calculateFontSize(maxHintLength, 1.5, width));
        setCardTitleFontSize(calculateFontSize(maxCardTitleLength, 1.25, width));
        setCardTextFontSize(calculateFontSize(maxCardTextLength, 1, width));
        setOverlayWidth(width * 0.8);
        setOverlayHeight(height * 0.8);
    }, [width, question, maxOptionLength, maxHintLength, maxCardTitleLength, maxCardTextLength]);
    //console.log('questionFontSize:', questionFontSize, ', optionFontSize:', optionFontSize, ', optionMarginSize:', optionMarginSize, ', hintFontSize:', hintFontSize, ', cardTitleFontSize:', cardTitleFontSize, ', cardTextFontSize:', cardTextFontSize)

    const badgeIconRef = '/images/badges/' + question.courselist.badgeicon;

    
    return ( 
    
    <Box id="questionOverlay">
        <Box id="questionOverlayContent" sx={{maxWidth: overlayWidth }}>
            {/* Create a grid to keep the badge on the left, question on the right */}
            <Grid container >
                <Stack direction='row'>
                    {/* Icon for the skills build course */}
                    <Grid item xs={1} lg={2}>
                        <Box component='img'
                            src={badgeIconRef}
                            alt={'badge'}
                            sx={{ maxWidth: '80%', maxHeight: '80%' }}>
                        </Box>
                    </Grid>

                    {/* Question section */}
                    <Grid item xs={11} lg={10}>
                        <Box sx={{marginLeft: '1rem'}}>
                        <Typography variant='h4' align='left' sx={{fontSize:`${questionFontSize}rem`, marginBottom: '1rem'}}>
                            {question.questiontext}
                        </Typography>
                        {question.questiontype === 1 ? 
                            (question.options.map((option, index) => (
                                <Box key={index} 
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        marginBottom: `${optionMarginSize}rem`,
                                        marginLeft: '0rem',
                                }}>
                                    <input
                                        type={question.optionstoselect === 1 ? 'radio' : 'checkbox'}
                                        name="options"
                                        value={index}
                                        checked={selectedOptions.includes(index.toString())}
                                        onChange={handleOptionChange}
                                        style={{ marginTop: `${optionFontSize*0.5}rem`, height: `${optionFontSize}rem` }}
                                    />
                                    <label>
                                        <Typography variant='h6' align='left' sx={{fontSize:`${optionFontSize}rem`, marginLeft: '0.5rem'}}>
                                             {<span>
                                             <b>{alphabet[index]}:  </b>{option}
                                            </span>}
                                        </Typography>
                                    </label>
                                </Box>
                                ))
                            ) : (
                                <Grid container spacing={2}>
                                <Grid item xs={9}>
                                    {question.options.map((option, index) => (
                                        <Stack direction='row' spacing={1}
                                            key={index} 
                                            sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', marginLeft: '0.5rem' }}>
                                            <Grid container alignItems="center">
                                                <Grid item xs={8}>
                                                    <Typography variant='body1' align="left"
                                                        sx={{ 
                                                            whiteSpace: 'wrap', 
                                                            fontSize: `${optionFontSize}rem`
                                                        }}>
                                                        {option}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <DropTarget id={index} 
                                                        accept="MATCH_OPTION" 
                                                        onDrop={handleDrop} 
                                                        currentItem={matchedOptions[index] !== undefined ? shuffledMatchOptions.find(option => option.id === matchedOptions[index]) : undefined} 
                                                        fontSize={optionFontSize}  
                                                        sx={{ width: '100%' }}
                                                    />
                                                </Grid>
                                                <Grid item xs={1}>
                                                    {matchedOptions[index] !== undefined && (
                                                        <Button variant="outlined" onClick={() => handleRemove(index)} 
                                                            sx={{ margin: '0', padding: '0', maxWidth: '1rem', minWidth: '1rem', width: '1rem' }}>x</Button>
                                                    )}
                                                </Grid>
                                            </Grid>
                                        </Stack>
                                    ))}
                                </Grid>
                                <Grid item xs={3}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        {availableOptions.map((matchOption) => (
                                            <DraggableItem key={matchOption.id} id={matchOption.id} text={matchOption.text} fontSize={optionFontSize} sx={{ width: '100%' }} />
                                        ))}
                                    </Box>
                                </Grid>
                            </Grid>
                        )}

                        {/* Reward and buttons - these and the hint will disappear when the user has selected an answer and hit confirm */}
                        { !answered ? 
                        

                        <Grid container justifyContent="space-between" alignItems="center" spacing={2} mt={2}>
                            <Grid item>
                            <Stack direction='row' spacing={1} alignItems='center'>
                                <Typography variant='h6' sx={{ fontSize:`${questionFontSize}rem`}}>Reward:</Typography>
                                <Box component='img'
                                    src='images/icons/icons-tech.png'
                                    alt={'tech'}
                                    sx={{ width: `${questionFontSize}rem`, height: `${questionFontSize}rem`}}>
                                </Box>
                                { !showHint ? 
                                <Box component='img'
                                    src='images/icons/icons-tech.png'
                                    alt={'tech'}
                                    sx={{ width: `${questionFontSize}rem`, height: `${questionFontSize}rem`}}>
                                </Box> : null}
                            </Stack>
                            </Grid>
                            <Grid item>
                            <Stack direction='row' spacing={4}>
                                { !showHint && question.hintind === 1 ? 
                                <Tooltip title="A hint will reduce your reward to just one tech point">
                                <Button variant="contained" color="secondary" onClick={onHint}>Hint
                                            <img src='images/icons/icons-tech.png' alt='techpoints' style={{width: `${questionFontSize}rem`, height: `${questionFontSize}rem`}}/>
                                </Button>
                                </Tooltip> : null}

                                <Tooltip title="Click to answer the question">
                                <span>
                                <Button variant="contained" color="primary" onClick={onConfirm}
                                    disabled={(question.questiontype === 1 && selectedOptions.length === 0) || (question.questiontype === 2 && availableOptions.length > 0)}
                                >
                                <Typography variant='h6' sx={{fontSize: `${optionFontSize}rem`}}>
                                    Confirm
                                </Typography>
                                </Button>
                                </span>
                                </Tooltip>
                            </Stack>
                            </Grid>
                        </Grid>
                        : 
                        <Stack direction="row" justifyContent="space-between" spacing={8} mt={2}>
                            {isCorrect ? 
                            <Typography variant='h6' sx={{ fontSize:`${questionFontSize*0.75}rem`}}>Correct!</Typography>
                            : (question.questiontype === 1) ?
                            <Typography variant='h6' sx={{ fontSize:`${questionFontSize*0.75}rem`}}>Incorrect!  Correct answer(s): {question.answeridx.map(idx => alphabet[idx]).join(', ')}
                            </Typography>
                            : 
                            <Typography variant='h6' sx={{ fontSize:`${questionFontSize*0.75}rem`}}>Incorrect!  Correct answer(s): {question.matchoptions.join(', ')}
                            </Typography>
                            }   
                            <Button variant="contained" color="primary" onClick={onNext}>
                               <Typography variant='h6' sx={{fontSize: `${optionFontSize}rem`}}>
                                    Next
                                </Typography>
                            </Button>
                        </Stack>
                        }
                    </Box>  
                </Grid>
                </Stack>
            </Grid>
                
            {/* Hint Section */}
            { showHint && !answered ? 
            <Box sx={{ mt: 2, bgcolor: '#f0f0f0', borderRadius: '8px', border: '1px solid #e0e0e0', padding: 2 }}>
                <Typography variant='h6' sx={{ fontSize: `${hintFontSize}rem`}}>Hint:  {question.hinttxt}</Typography>
                {(question.hintcards === 0 && question.hinttxt1) ? <Typography variant='h6' sx={{ fontSize: `${hintFontSize}rem`}}> {question.hinttxt1}</Typography> : null}
                {(question.hintcards === 0 && question.hinttxt2) ? <Typography variant='h6' sx={{ fontSize: `${hintFontSize}rem`}}> {question.hinttxt2}</Typography> : null}
                {question.hintcardtitles.length > 0 && (
                    <Grid container spacing={2}>
                        {question.hintcardtitles.map((title, idx) => (
                            <Grid item xs={6} sm={4} md={12 / question.hintcardtitles.length} key={idx}>
                                <Card variant="outlined" sx={{ borderRadius: '8px' }}>
                                    <CardContent>
                                        <Typography variant="h6" component="div" sx={{ fontSize: `${cardTitleFontSize}rem`, fontWeight: 'bold' }}>
                                            {title}
                                        </Typography>
                                        <Typography variant="body2" component="p" sx={{ fontSize: `${cardTextFontSize}rem`}}>
                                            {question.hintcardtext[idx]}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Box> : 
            null }
          </Box>
    </Box>
    )
}

export default QuestionOverlay;
