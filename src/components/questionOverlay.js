import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Stack, Grid, Tooltip, Card, CardContent} from '@mui/material';

import { DraggableItem, DropTarget } from './dragAndDrop'; 

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
        const shuffled = [...question.matchoptions].map((option, index) => ({ id: index, text: option })).sort(() => Math.random() - 0.5);
        setShuffledMatchOptions(shuffled);
        setAvailableOptions(shuffled);
      }, [question.matchoptions]);

    // Function to handle selection changes.
    const handleOptionChange = (event) => {
        const { value, checked } = event.target;
        if (question.optionsToSelect === 1) {
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
        if (question.questionType === 1) {  // Multi-choice question
            correctAnswers = question.answerIdx.map(String);   // Convert the answer indexes to an array of strings
            userAnswers = selectedOptions.map(String);         // Convert user answers to an array of strings
            isAnswerCorrect = userAnswers.length === correctAnswers.length && userAnswers.every(option => correctAnswers.includes(option));
        } else {  // Matching Question
            correctAnswers = Array(question.options.length).fill().map((_, index) => index);
            userAnswers = Object.values(matchedOptions);
            isAnswerCorrect = correctAnswers.join(',') === userAnswers.join(',')
        }
        //const userAnswers = selectedOptions.map(String);         // Convert the user answer indexes to an array of strings
        console.log('Ans: ', correctAnswers, 'User: ', userAnswers)
        // Set the correct answer state and set question as answered
        setIsCorrect(isAnswerCorrect);
        setAnswered(true);
        // logging
        console.log(isAnswerCorrect ? 'Correct!' : 'Incorrect!');
        console.log('IsCorrect:', isCorrect, ', ShowHint:', showHint)
    }

    // Determine if the hint should be displayed
    const onHint = () => {
        setShowHint(true);
    }

    // NEXT button for when user has submitted an answer
    const onNext = () => {
        console.log('IsCorrect:', isCorrect, ', ShowHint:', showHint);
        const answerCorrectInd = isCorrect ? 1 : 0;
        const usedHintInd = showHint ? 1 : 0;
        onResult(answerCorrectInd, usedHintInd);
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
      

    
    console.log('Shuffled:',shuffledMatchOptions, ', Available:',  availableOptions, ', Matched:', matchedOptions);

    // Custom font size calculation to make sure everything fits on the screen.
    const screenHeight = window.innerHeight;
    var customFontSize;
    if (screenHeight <= 400) {
        customFontSize = 0.5;
    } else if (screenHeight <= 600) {
        customFontSize = 0.75;
    } else if (screenHeight <= 800) {
        customFontSize = 1;
    } else {
        customFontSize = 1.25;
    }

    return ( 
    
    <Box 
        sx={{
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
                maxWidth: '75%',
                textAlign: 'center',
                
            }}
        >
            {/* Create a grid to keep the badge on the left, question on the right */}
            <Grid container >
                <Stack direction='row'>
                    {/* Icon for the skills build course */}
                    <Grid item xs={4} lg={3}>
                        <Box component='img'
                            src={question.badgeIcon}
                            alt={'badge'}
                            sx={{ maxWidth: '80%', maxHeight: '80%' }}>
                        </Box>
                    </Grid>

                    {/* Question section */}
                    <Grid item xs={8}>
                        <Box sx={{marginLeft: '4rem'}}>
                        <Typography variant='h4' align="left" sx={{marginBottom: '1rem', alignItems: 'center', 
                                        fontSize: `${customFontSize*1.5}rem`
                        }}>
                            { question.questionText }
                        </Typography>
                        {question.questionType === 1 ? 
                            (question.options.map((option, index) => (
                                <Box key={index} 
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '1rem',
                                        marginLeft: '1rem',
                                }}>
                                    <input
                                        type={question.optionsToSelect === 1 ? 'radio' : 'checkbox'}
                                        name="options"
                                        value={index}
                                        checked={selectedOptions.includes(index.toString())}
                                        onChange={handleOptionChange}
                                    />
                                    <label style={{  fontSize: `${customFontSize}rem` }}><b>{alphabet[index]}:</b> {option}</label>
                                </Box>
                                ))
                            ) : (
                            <Grid container spacing={2}>
                                <Grid item xs={9}>
                                {question.options.map((option, index) => (
                                    <Stack direction='row' spacing={1}
                                        key={index} 
                                        sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem', marginLeft: '0.5rem' }}>
                                      <Typography variant='body1' align="left"
                                             sx={{  width: '75%', 
                                                    whiteSpace: 'wrap', 
                                                }}>
                                        {option}
                                      </Typography>
                                      <Box sx={{width: '20%'}}>
                                        <DropTarget id={index} 
                                                accept="MATCH_OPTION" 
                                                onDrop={handleDrop} 
                                                currentItem={matchedOptions[index] !== undefined ? shuffledMatchOptions.find(option => option.id === matchedOptions[index]) : undefined} />
                                      </Box>
                                        {matchedOptions[index] !== undefined && (
                                            <Button variant="outlined" onClick={() => handleRemove(index)} 
                                                    sx={{margin:'0', padding:'0', maxWidth: '1rem', minWidth: '1rem', width:'1rem'}}>x</Button>
                                        )}
                                    </Stack>
                                  ))}
                                </Grid>
                                <Grid item xs={3}>
                                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                  {availableOptions.map((matchOption) => (
                                    <DraggableItem key={matchOption.id} id={matchOption.id} text={matchOption.text} />
                                    ))}
                                  </Box>
                                </Grid>
                              </Grid>
                        )}

                        {/* Reward and buttons - these and the hint will disappear when the user has selected an answer and hit confirm */}
                        { !answered ? 
                        <Stack direction="row" justifycontents="space-between" spacing={8} mt={2}>
                            <Stack direction='row' spacing={1}>
                                <Typography variant='h6' sx={{ fontSize:`${customFontSize*1.5}rem`}}>Reward:</Typography>
                                <Box component='img'
                                    src='images/icons/icons-tech.png'
                                    alt={'tech'}
                                    sx={{ width: `${customFontSize*1.5}rem`, height: `${customFontSize*1.5}rem`}}>
                                </Box>
                                { !showHint ? 
                                <Box component='img'
                                    src='images/icons/icons-tech.png'
                                    alt={'tech'}
                                    sx={{ width: `${customFontSize*1.5}rem`, height: `${customFontSize*1.5}rem`}}>
                                </Box> : null}
                            </Stack>
                            <Stack direction='row' spacing={4}>
                                { !showHint && question.hintInd === 1 ? 
                                <Tooltip title="A hint will reduce your reward to just one tech point">
                                <Button variant="contained" color="secondary" onClick={onHint}>Hint
                                            <img src='images/icons/icons-tech.png' alt='techpoints' style={{width: `${customFontSize*1.25}rem`, height: `${customFontSize*1.25}rem`}}/>
                                </Button>
                                </Tooltip> : null}

                                <Tooltip title="">
                                <Button variant="contained" color="primary" onClick={onConfirm}
                                    disabled={(question.questionType === 1 && selectedOptions.length === 0) || (question.questionType === 2 && availableOptions.length > 0)}
                                >Confirm</Button>
                                
                                </Tooltip>
                            </Stack>
                        </Stack>
                        : 
                        <Stack direction="row" justifyContent="space-between" spacing={8} mt={2}>
                            {isCorrect ? 
                            <Typography variant='h6' sx={{ fontSize:`${customFontSize*1.5}rem`}}>Correct!</Typography>
                            : (question.questionType === 1) ?
                            <Typography variant='h6' sx={{ fontSize:`${customFontSize*1.5}rem`}}>Incorrect!  Correct answer(s): {question.answerIdx.map(idx => alphabet[idx]).join(', ')}
                            </Typography>
                            : 
                            <Typography variant='h6' sx={{ fontSize:`${customFontSize*1.5}rem`}}>Incorrect!  Correct answer(s): {question.matchoptions.join(', ')}
                            </Typography>
                            }   
                            <Button variant="contained" color="primary" onClick={onNext}>
                                Next
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
                <Typography variant='h5' sx={{ fontSize: `${customFontSize*1}rem`, marginY:'1rem'}}>Hint:  {question.hintTxt}</Typography>
                {question.hintTxt1 ? <Typography variant='h6' sx={{ fontSize: `${customFontSize*0.75}rem`}}> {question.hintTxt1}</Typography> : null}
                {question.hintTxt1 ? <Typography variant='h6' sx={{ fontSize: `${customFontSize*0.75}rem`}}> {question.hintTxt2}</Typography> : null}
                {question.hintCardTitles.length > 0 && (
                    <Grid container spacing={2}>
                        {question.hintCardTitles.map((title, idx) => (
                            <Grid item xs={6} sm={4} md={12 / question.hintCardTitles.length} key={idx}>
                                <Card variant="outlined" sx={{ borderRadius: '8px' }}>
                                    <CardContent>
                                        <Typography variant="h6" component="div" sx={{ fontSize: `${customFontSize*0.75}rem`, fontWeight: 'bold' }}>
                                            {title}
                                        </Typography>
                                        <Typography variant="body2" component="p" sx={{ fontSize: `${customFontSize*0.75}rem`}}>
                                            {question.hintCardText[idx]}
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
