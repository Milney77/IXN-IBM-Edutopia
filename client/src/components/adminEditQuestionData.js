import React, { useState, useEffect, useContext } from 'react';
import { MenuItem, Select, FormControl, FormControlLabel, InputLabel, TextField, Box, Typography, Grid, Button, Tooltip, Radio, RadioGroup, Checkbox, Divider } from '@mui/material';

const defaultQdata = {
    questionid: 0
    , courseid: 0
    , quiznumber: 0
    , questiontype: 1
    , questiontext: 'Question'
    , options: ['Answer1', 'Answer2']
    , matchoptions: []
    , optionstoselect: 0
    , answeridx: [0]
    , hintind: 0
    , hinttxt: ''
    , hinttxt1: ''
    , hinttxt2: ''
    , hintcards: 0
    , hintcardtitles: []
    , hintcardtext: []
};

const maxNumberAnswers = 6;

const AdminEditQuestion = ({questiondata, courselist, editType, customFontSize, onhandleViewClick}) => {
    
    const questionDat = editType === 'edit' ? questiondata[0] : defaultQdata;
    
    const [question, setQuestion] = useState({
        ...defaultQdata,
        ...questionDat
    });

    useEffect(() => {
        if (editType === 'create') {
            setQuestion({ ...defaultQdata });
        } else if (questiondata) {
            setQuestion((prevQuestion) => ({
                ...defaultQdata,
                ...questiondata[0]
            }));
        }
    }, [questiondata, editType]);


    // Function to handle generic input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setQuestion((prevQuestion) => ({
            ...prevQuestion,
            [name]: value
        }));
    };

    // Function to handle the course drop down
    const handleCourseChange = (e) => {
        const selectedCourseId = parseInt(e.target.value, 10);
        setQuestion((prevQuestion) => ({
            ...prevQuestion,
            courseid: selectedCourseId
        }));
    };

    // Generic function for checkboxes
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        // Special case - the 'hintcards' checkbox that doesn't actually appear in the data.
        if (name === 'hintcardsbox') {
            setQuestion((prevQuestion) => ({
                ...prevQuestion,
                hintcards: checked ? 1 : 0 // Set hintcards to 1 if checked, else set to 0
            }));
        } else {
            setQuestion((prevQuestion) => ({
                ...prevQuestion,
                [name]: checked ? 1 : 0
            }));
        }
    };

    // Handling the options for multiple choice questions
    // Edit Option Text
    const handleOptionChange = (index, value) => {
        const newOptions = [...question.options];
        newOptions[index] = value;
        setQuestion((prevQuestion) => ({
            ...prevQuestion,
            options: newOptions,
        }));
    };

    // Edit option correct answer
    const handleCorrectAnswerChange = (index) => {
        const newAnswerIdx = [...question.answeridx];
        const answerIdxPos = newAnswerIdx.indexOf(index);

        if (answerIdxPos === -1) {
            newAnswerIdx.push(index);  // Add if not already selected
        } else {
            newAnswerIdx.splice(answerIdxPos, 1);  // Remove if already selected
        }

        setQuestion((prevQuestion) => ({
            ...prevQuestion,
            answeridx: newAnswerIdx,
            optionstoselect: newAnswerIdx.length
        }));
    };

    // Add a new option
    const handleAddOption = () => {
        if (question.options.length < maxNumberAnswers) {
            setQuestion((prevQuestion) => ({
                ...prevQuestion,
                options: [...prevQuestion.options, '']
            }));
        }
    };

    // Remove existing option
    const handleRemoveOption = (index) => {
        const newOptions = [...question.options];
        const newAnswerIdx = question.answeridx.filter(idx => idx !== index).map(idx => idx > index ? idx - 1 : idx);
        newOptions.splice(index, 1);
        setQuestion((prevQuestion) => ({
            ...prevQuestion,
            options: newOptions,
            answeridx: newAnswerIdx,
            optionstoselect: newAnswerIdx.length
        }));
    };

    // Functions for the match answers to responses type questions
    // Update text change
    const handleMatchOptionChange = (index, value) => {
        const newMatchOptions = [...question.matchoptions];
        newMatchOptions[index] = value;
        setQuestion((prevQuestion) => ({
            ...prevQuestion,
            matchoptions: newMatchOptions,
        }));
    };

    // Add a new pair
    const handleAddPair = () => {
        if (question.options.length < 6) {
            setQuestion((prevQuestion) => ({
                ...prevQuestion,
                options: [...prevQuestion.options, 'Answer'],
                matchoptions: [...prevQuestion.matchoptions, 'Match Text']
            }));
        }
    };

    // Remove a pair
    const handleRemovePair = (index) => {
        const newOptions = [...question.options];
        const newMatchOptions = [...question.matchoptions];

        newOptions.splice(index, 1);
        newMatchOptions.splice(index, 1);

        setQuestion((prevQuestion) => ({
            ...prevQuestion,
            options: newOptions,
            matchoptions: newMatchOptions,
        }));
    };

    // Handle changes to the number of hint 'cards'
    const handleHintCardsChange = (e) => {
        const hintcards = parseInt(e.target.value, 10);
        setQuestion((prevQuestion) => ({
            ...prevQuestion,
            hintcards,
            hintcardtitles: prevQuestion.hintcardtitles.slice(0, hintcards),
            hintcardtext: prevQuestion.hintcardtext.slice(0, hintcards),
        }));
    };

    // Changes to hint cards (titles and content)
    const handleHintCardDetailChange = (index, field, value) => {
        const updatedField = [...question[field]];
        updatedField[index] = value;
        setQuestion((prevQuestion) => ({
            ...prevQuestion,
            [field]: updatedField,
        }));
    };

    const handleSave = () => {
        console.log('Save!  Data:', question);
    }




    // Fonts
    const labelFontMod = 1;
    const valueFontMod = 0.6;

    return (
        <>
        { editType === 'edit' ?
            <Typography sx={{fontSize:`${customFontSize*1.5}rem`}}>Edit Question</Typography>
            :
            <Typography sx={{fontSize:`${customFontSize*1.5}rem`}}>Create New Question</Typography>
        }
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <Box component="form" noValidate autoComplete="off" onSubmit={handleSave}sx={{width: '95%'}}>
                <Grid container spacing={customFontSize} alignItems='center'>

                    {/* FIRST ROW - Course, Quiz & Question Type  */}
                    <Grid item xs={4} md={1}>
                        <Tooltip title = "What course does this question belong to?">
                            <Typography sx={{ fontSize: `${customFontSize * labelFontMod}rem` }}>Course:</Typography>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={8} md={3}>
                        {/* Course Selection Dropdown */}
                        <FormControl fullWidth>
                            <Select
                                name="courseid"
                                value={question.courseid}
                                onChange={handleCourseChange}
                                // Adjust the default padding.
                                sx={{'.MuiSelect-select': {padding: `${customFontSize*0.25}rem`, }}}
                            >
                                <MenuItem value={0}>
                                    <Typography sx={{fontSize:`${customFontSize*valueFontMod}rem` }}>Select a course</Typography>
                                </MenuItem>
                                {courselist.map(course => (
                                    <MenuItem key={course.courseid} value={course.courseid}>
                                        <Typography sx={{fontSize:`${customFontSize*valueFontMod}rem`}}>{course.coursename}</Typography>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    
                    <Grid item xs={6} md={2}>
                        <Tooltip title ="Select a quiz number (1, 2 or 3).  At the main menu, users can choose not to include any questions from Quiz #3.">
                            <Typography sx={{ fontSize: `${customFontSize * labelFontMod}rem` }}>Quiz Number:</Typography>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={6} md={2}>
                        <FormControl fullWidth>
                            <Select
                                name="quiznumber"
                                value={question.quiznumber}
                                onChange={handleInputChange}
                                sx={{'.MuiSelect-select': {padding: `${customFontSize*0.25}rem`, }}}
                            >
                                <MenuItem value={0}><Typography sx={{fontSize:`${customFontSize*valueFontMod}rem`}}>Select a Quiz Number</Typography></MenuItem>
                                <MenuItem value={1}><Typography sx={{fontSize:`${customFontSize*valueFontMod}rem`}}>1</Typography></MenuItem>
                                <MenuItem value={2}><Typography sx={{fontSize:`${customFontSize*valueFontMod}rem`}}>2</Typography></MenuItem>
                                <MenuItem value={3}><Typography sx={{fontSize:`${customFontSize*valueFontMod}rem`}}>3</Typography></MenuItem>
                            </Select>
                         </FormControl>
                    </Grid>

                    
                    <Grid item xs={6} md={2}>
                        <Tooltip title="Question Type - Multiple choice or match every response to an answer">
                            <Typography sx={{ fontSize: `${customFontSize * labelFontMod}rem` }}>Question Type:</Typography>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={6} md={2}>
                    <FormControl component="fieldset">
                        <RadioGroup
                            row
                            name="questiontype"
                            value={question.questiontype}
                            onChange={handleInputChange}
                        >
                            <FormControlLabel
                                value={1}
                                control={<Radio />}
                                label="Multi Choice"
                            />
                            <FormControlLabel
                                value={2}
                                control={<Radio />}
                                label="Match Answers"
                            />
                        </RadioGroup>
                    </FormControl>
                    </Grid>

                    {/* SECOND ROW - Question Text */}
                    <Grid item xs={4} md={1.5}>
                        <Tooltip title="HELP GOES HERE">
                            <Typography align='left' sx={{ fontSize: `${customFontSize * labelFontMod}rem` }}>Question:</Typography>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={8} md={10.5}>
                        <TextField
                            variant="outlined"
                            name="coursename"
                            defaultValue={question.questiontext}
                            onChange={handleInputChange}
                            fullWidth
                            inputProps={{ maxLength: 400, 
                                        sx:{ m: 0, p: 0, fontSize:`${customFontSize*valueFontMod}rem` }
                            }}
                            multiline
                            minRows={1}
                            maxRows={3}
                            />
                    </Grid>

                    {/* THIRD ROW - Options and match options, or options & correct answer flags */}
                    {(question.questiontype === '1' || question.questiontype === 1) ?
                        <>
                        <Grid item xs={12} >
                            <Tooltip title="HELP GOES HERE">
                                <Typography align='left' sx={{ fontSize: `${customFontSize * labelFontMod}rem` }}>Answers:</Typography>
                            </Tooltip>
                        </Grid>
                        {question.options.map((option, index) => (
                        <Grid item xs={12} key={index}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={8}>
                                    <TextField
                                        variant="outlined"
                                        value={option}
                                        onChange={e => handleOptionChange(index, e.target.value)}
                                        fullWidth
                                        placeholder={`Option ${index + 1}`}
                                        inputProps={{ maxLength: 400, 
                                            sx:{ m: 0, p: 0, fontSize:`${customFontSize*valueFontMod}rem` }
                                        }}  
                                        multiline
                                        minRows={1}
                                        maxRows={2}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={question.answeridx.includes(index)}
                                                onChange={() => handleCorrectAnswerChange(index)}
                                            />
                                        }
                                        label="Correct"
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <Button variant="contained" color="secondary" onClick={() => handleRemoveOption(index)}>
                                        Remove
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        ))}
                        <Grid item xs={12}>
                            {question.options.length < maxNumberAnswers && (
                                <Button variant="contained" onClick={handleAddOption}>
                                    Add Option
                                </Button>
                            )}
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs={12}>
                            <Tooltip title="HELP GOES HERE">
                                <Typography align='left' sx={{ fontSize: `${customFontSize * labelFontMod}rem` }}>Matching Answer Pairs:</Typography>
                            </Tooltip>
                        </Grid>
                        {question.options.map((option, index) => (
                        <Grid item xs={12} key={index}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={5}>
                                    <TextField
                                        variant="outlined"
                                        value={option}
                                        onChange={e => handleOptionChange(index, e.target.value)}
                                        fullWidth
                                        multiline
                                        minRows={1}
                                        maxRows={2}
                                        placeholder={`Option ${index + 1}`}
                                    />
                                </Grid>
                                <Grid item xs={5}>
                                    <TextField
                                        variant="outlined"
                                        value={question.matchoptions[index]}
                                        onChange={e => handleMatchOptionChange(index, e.target.value)}
                                        fullWidth
                                        placeholder={`Match Option ${index + 1}`}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <Button variant="contained" color="secondary" onClick={() => handleRemovePair(index)}>
                                        Remove
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        ))}

                        {/* Add Pair Button */}
                        <Grid item xs={12}>
                            {question.options.length < 6 && (
                                <Button variant="contained" onClick={handleAddPair}>
                                    Add Option & Match
                                </Button>
                            )}
                        </Grid>
                </>
                }
                
                <Grid item xs={12}>
                    <Divider sx={{ borderColor: 'gray', borderStyle: 'dashed' }} />
                </Grid>
                    
                {/* Hints - Indicator for if using hints, */}
                <Grid item xs={4} md={2}>
                    <Tooltip title = "Do you want to add a hint?  Hints reduce the amount of tech resource gained from answering a question correctly.">
                        <Typography sx={{ fontSize: `${customFontSize * labelFontMod}rem` }}>Add hint?</Typography>
                    </Tooltip>
                </Grid>
                <Grid item xs={8} md={1}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={question.hintind === 1}
                                onChange={handleCheckboxChange}
                                name="hintind"
                            />
                        }
                    />
                </Grid>
                {(question.hintind === 1 || question.hintind === '1') ? 
                    <>
                    <Grid item xs={4} md={2}>
                        <Tooltip title = "Do you want to have hint 'cards' (up to 5) that appear when the user asks for a hint?  If not, you ">
                            <Typography sx={{ fontSize: `${customFontSize * labelFontMod}rem` }}>Use hint cards?</Typography>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={8} md={1}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={question.hintcards >= 1}
                                    onChange={handleCheckboxChange}
                                    name="hintcardsbox"
                                />
                            }
                        />
                    </Grid>
                    </>
                    : <Grid item xs={0} md={3}/>}
                

            {(question.hintind === 1 || question.hintind === '1') ? 
                <>
                 <Grid item xs={4} md={2.5}>
                        <Tooltip title="HELP GOES HERE">
                            <Typography align='left' sx={{ fontSize: `${customFontSize * labelFontMod}rem` }}>Hint Text (Primary):</Typography>
                        </Tooltip>
                </Grid>
                <Grid item xs={8} md={9.5}>
                    <TextField
                        variant="outlined"
                        name="hinttxt"
                        defaultValue={question.hinttxt}
                        onChange={handleInputChange}
                        fullWidth
                        inputProps={{ maxLength: 255, 
                                    sx:{ m: 0, p: 0, fontSize:`${customFontSize*valueFontMod}rem` }
                        }}
                        multiline
                        minRows={1}
                        maxRows={3}
                        />
                    </Grid>
                </>
            : null}

        {((question.hintind === 1 || question.hintind === '1') && question.hintcards === 0) ? 
                <>
                 <Grid item xs={4} md={2.5}>
                        <Tooltip title="HELP GOES HERE">
                            <Typography align='left' sx={{ fontSize: `${customFontSize * labelFontMod * 0.9}rem` }}>Hint Text (line 2):</Typography>
                        </Tooltip>
                </Grid>
                <Grid item xs={8} md={9.5}>
                    <TextField
                        variant="outlined"
                        name="hinttxt1"
                        defaultValue={question.hinttxt1}
                        onChange={handleInputChange}
                        fullWidth
                        inputProps={{ maxLength: 255, 
                                    sx:{ m: 0, p: 0, fontSize:`${customFontSize*valueFontMod}rem` }
                        }}
                        multiline
                        minRows={1}
                        maxRows={3}
                        />
                    </Grid>
                    <Grid item xs={4} md={2.5}>
                        <Tooltip title="HELP GOES HERE">
                            <Typography align='left' sx={{ fontSize: `${customFontSize * labelFontMod * 0.9}rem` }}>Hint Text (line 3):</Typography>
                        </Tooltip>
                </Grid>
                <Grid item xs={8} md={9.5}>
                    <TextField
                        variant="outlined"
                        name="hinttxt2"
                        defaultValue={question.hinttxt2}
                        onChange={handleInputChange}
                        fullWidth
                        inputProps={{ maxLength: 255, 
                                    sx:{ m: 0, p: 0, fontSize:`${customFontSize*valueFontMod}rem` }
                        }}
                        multiline
                        minRows={1}
                        maxRows={3}
                        />
                    </Grid>
                </>
            : null}

        {((question.hintind === 1 || question.hintind === '1') && question.hintcards >= 0) ? 
            <>
            </>
        : null}

                    <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                    >
                    <Typography sx={{fontSize:`${customFontSize*1}rem`}}>{editType === 'edit' ? 'Save Edits' : 'Create Question'}</Typography>
                    </Button>
                </Grid>
            </Box>
        </Box>
            


        </>
    )


}

export default AdminEditQuestion;

