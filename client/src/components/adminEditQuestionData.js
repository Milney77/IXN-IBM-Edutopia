import React, { useState, useEffect, useContext } from 'react';
import { MenuItem, Select, FormControl, FormControlLabel, FormHelperText, Stack, TextField, Box, Typography, Grid, Button, Tooltip, Radio, RadioGroup, Checkbox, Divider } from '@mui/material';

const defaultQdata = {
    questionid: 0
    , courseid: 0
    , quiznumber: 0
    , questiontype: 1
    , questiontext: 'Question goes here'
    , options: ['Answer1', 'Answer2']
    , matchoptions: ['Match1', 'Match2']
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
const maxHintCards = 5;

const Overlay = ({message, onConfirm, onClose, isConfirmDialog}) => {
    return (
        <Box 
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
            }}
        >
            <Box 
                sx={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h6" gutterBottom sx={{ whiteSpace: 'pre-line' }}>
                    {message}
                </Typography>
                {isConfirmDialog ? (
                    <>
                        <Button variant="contained" color="primary" onClick={onConfirm} sx={{mr: 2}}>
                            Yes
                        </Button>
                        <Button variant="contained" color="secondary" onClick={onClose}>
                            No
                        </Button>
                    </>
                ) : (
                    <Button variant="contained" color="primary" onClick={onClose}>
                        Okay
                    </Button>
                )}
            </Box>
        </Box>
    );
};

const AdminEditQuestion = ({questiondata, courselist, editType, customFontSize, triggerRefresh, responseData}) => {
    
    const questionDat = editType === 'edit' ? questiondata[0] : defaultQdata;
    const [question, setQuestion] = useState({
        ...defaultQdata,
        ...questionDat
    });
    const [responseCount, setResponseCount] = useState(0);
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    // Validation flags
    const [saveError, setSaveError] = useState(''); 
    const [saveSuccess, setSaveSuccess] = useState(false);
    // Set validation errors for each component - these control what text is shown in inputs when an error is found
    const [validateCourseError, setValidateCourseError] = useState('');
    const [validateQuizError, setValidateQuizError] = useState('');
    const [validateTypeError, setValidateTypeError] = useState('');
    const [validateQuestionError, setValidateQuestionError] = useState('');
    const [validateAnswersError, setValidateAnswersError] = useState(['']);
    const [validateMatchOptionsError, setValidateMatchOptionsError] = useState(['']);
    const [validateHintText0Error, setValidateHintText0Error] = useState('');
    const [validateHintText1Error, setValidateHintText1Error] = useState('');
    const [validateHintCardTitlesError, setValidateHintCardTitlesError] = useState(['']);
    const [validateHintCardTextError, setValidateHintCardTextError] = useState(['']);
    // Other validation
    const [validateAnswers, setValidateAnswers] = useState('');
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayMessage, setOverlayMessage] = useState('');
    const [isConfirmDialog, setIsConfirmDialog] = useState(false);


    // Set defaults if creating a new question, otherwise use the question data for that question id
    useEffect(() => {
        // Define the default data
        if (editType === 'create') {
            setQuestion({ ...defaultQdata });
            setResponseCount(0);
        } else if (questiondata) {
            setQuestion((prevQuestion) => ({
                ...defaultQdata,
                ...questiondata[0]
            }));
            const questionResponses = responseData.filter((response) => response.questions.questionid === question.questionid).length;
            setResponseCount(questionResponses);
        }
        // And set all validation errors to null
        setValidateCourseError('');
        setValidateQuizError('');
        setValidateTypeError('');
        setValidateQuestionError('');
        setValidateAnswersError(['']);
        setValidateMatchOptionsError(['']);
        setValidateHintText0Error('');
        setValidateHintText1Error('');
        setValidateHintCardTitlesError(['']);
        setValidateHintCardTextError(['']);
        // Other validation
        setValidateAnswers('');
    }, [questiondata, editType]);


    // INPUT CHANGE FUNCTIONS
    // Function to handle generic input changes for all text fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setQuestion((prevQuestion) => ({
            ...prevQuestion,
            [name]: value
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

    // COURSE DROPDOWN
    // Function to handle the course drop down
    const handleCourseChange = (e) => {
        const selectedCourseId = parseInt(e.target.value, 10);
        setQuestion((prevQuestion) => ({
            ...prevQuestion,
            courseid: selectedCourseId
        }));
        setValidateCourseError('');
    };

    // QUESTION TYPE
    const handleQuestionTypeChange = (event) => {
        const newType = parseInt(event.target.value, 10);
        const defaultMatchOptions = Array.from({ length: question.options.length }, (v, i) => `Match ${i + 1}`);
        setQuestion((prevQuestion) => {
            if (newType === 2 && prevQuestion.matchoptions.length === 0) {
                return {
                    ...prevQuestion,
                    questiontype: newType,
                    matchoptions: defaultMatchOptions // Initialize with an empty string to ensure controlled input
                };
            } else {
                return {
                    ...prevQuestion,
                    questiontype: newType,
                };
            }
        });
    };

    // QUESTION ENABLED / DISABLED TOGGLE
    const handleEnableToggle = () => {
        setQuestion((prevQuestion) => ({
            ...prevQuestion,
            usequestion: prevQuestion.usequestion === 1 ? 0 : 1,
        }));
    };

    // MULTIPLE CHOICE QUESTION FUNCTIONS
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
            answeridx: newAnswerIdx
        }));
    };

    // MATCH RESPONSES TYPE QUESTIONS
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
            const currLengthPlus1 = question.options.length + 1;
            setQuestion((prevQuestion) => ({
                ...prevQuestion,
                options: [...prevQuestion.options, ''],
                matchoptions: [...prevQuestion.matchoptions, '']
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


    // HINT CARDS
    // Changes to hint cards (titles and content)
    const handleHintCardDetailChange = (index, field, value) => {
        const updatedField = [...question[field]];
        updatedField[index] = value;
        setQuestion((prevQuestion) => ({
            ...prevQuestion,
            [field]: updatedField,
        }));
    };

    // Remove a hint card
    const handleRemoveHintCard = (index) => {
        const newHintCardTitles = [...question.hintcardtitles];
        const newHintCardText = [...question.hintcardtext];
        newHintCardTitles.splice(index, 1);
        newHintCardText.splice(index, 1);
        setQuestion((prevQuestion) => ({
            ...prevQuestion,
            hintcardtitles: newHintCardTitles,
            hintcardtext: newHintCardText,
        }));
    };

    // Add a new hint card
    const handleAddHintCard = () => {
        if (question.hintcardtitles.length < maxHintCards) {
            setQuestion((prevQuestion) => ({
                ...prevQuestion,
                hintcardtitles: [...prevQuestion.hintcardtitles, ''],
                hintcardtext: [...prevQuestion.hintcardtext, '']
            }));
        }
    };

    
    // VALIDATION
    const validateData = () => {
        // Flag for if all validation has been passed.
        let isValid = true;

        // Course
        if (question.courseid === 0) {
            setValidateCourseError('Please select a course');
            isValid = false;
        } else {setValidateCourseError('');}

        // Quiz Number
        if (question.quiznumber === 0) {
            setValidateQuizError('Please select a quiz number');
            isValid = false;
        } else {setValidateQuizError('');}

        // Question Type
        if (question.questiontype === 0) {
            setValidateTypeError('Please select a question type');
            isValid = false;
        } else {setValidateTypeError('');}

        // Question Text
        if (question.questiontext === '') {
            setValidateQuestionError('Please enter some text for the question');
            isValid = false;
        } else if (question.questiontext.toLowerCase() === 'question') {
            setValidateQuestionError("Cannot have 'Question' as your question.");
            isValid = false;
        } else {setValidateQuestionError('');}

        // Answer Text Fields
        const answerErrors = Array(question.options.length).fill('');
        const optionSet = new Set();
        const invalidAnswers = ['answer 1', 'answer1', 'answer 2', 'answer2', 'answer 3', 'answer3', 'answer 4', 'answer4', 'answer 5', 'answer5']
        question.options.forEach((option, index) => {
            if (option.trim() === '') {
                answerErrors[index] = 'Option cannot be empty.';
                isValid = false;
            } else if (invalidAnswers.includes(option.trim().toLowerCase())) {
                answerErrors[index] = `Option cannot be '${option}'.`;
                isValid = false;
            } else if (optionSet.has(option)) {
                answerErrors[index] = 'Option is duplicated.';
                isValid = false;
            } else {
                optionSet.add(option);
            }
        });
        setValidateAnswersError(answerErrors);

        // Match Options Text Fields
        const matchOptionsErrors = Array(question.matchoptions.length).fill('');
        const matchOptionsSet = new Set();
        const invalidOptions = ['option 1', 'option1', 'option 2', 'option2', 'option 3', 'option3', 'option 4', 'option4', 'option 5', 'option5']
        question.matchoptions.forEach((matchoption, index) => {
            if (matchoption.trim() === '') {
                matchOptionsErrors[index] = 'Option cannot be empty.';
                isValid = false;
            } else if (invalidOptions.includes(matchoption.trim().toLowerCase())) {
                matchOptionsErrors[index] = `Option cannot be '${matchoption}'.`;
                isValid = false;
            } else if (matchOptionsSet.has(matchoption)) {
                matchOptionsErrors[index] = 'Match Option is duplicated.';
                isValid = false;
            } else {
                matchOptionsSet.add(matchoption);
            }
        });
        setValidateMatchOptionsError(matchOptionsErrors);

         // Hint Texts
         if (question.hintind === 1 && question.hinttxt === '') {
            setValidateHintText0Error('Please enter a hint title, even if you are using hint cards.');
            isValid = false;
         } else {setValidateHintText0Error('');}

         if (question.hinttxt1 === '' && question.hinttxt2 !== '') {
            setValidateHintText1Error('Can only have hint text (line 3) if you have something in hint text (line 2).');
            isValid = false;
         } else {setValidateHintText1Error('');}

         // Hint Cards
         const hintCardTitleErrors = Array(question.hintcardtitles.length).fill('');
         const hintCardTextErrors = Array(question.hintcardtext.length).fill('');
         question.hintcardtitles.forEach((hinttitle, index) => {
            if (hinttitle === "") {
                hintCardTitleErrors[index] = 'Enter a title';
                isValid = false;
            }
         })
         question.hintcardtext.forEach((hintext, index) => {
            if (hintext === "") {
                hintCardTextErrors[index] = 'Enter some text';
                isValid = false;
            }
         })
         setValidateHintCardTitlesError(hintCardTitleErrors);
         setValidateHintCardTextError(hintCardTextErrors);

        // Check that there is at least 1 correct answer (multi-choice only)
        if (question.answeridx.length === 0) {
            setValidateAnswers('You need to have at least 1 correct answer!');
            isValid = false;
        } else {setValidateAnswers('');}


        //console.log('validateCourseError', validateCourseError,'validateQuizError',validateQuizError,'validateTypeError',validateTypeError,'validateQuestionError',validateQuestionError
        //            ,'validateAnswersError',validateAnswersError,'validateMatchOptionsError',validateMatchOptionsError,'validateHintText0Error',validateHintText0Error
        //            ,'validateHintCardTitlesError',validateHintCardTitlesError,'validateHintCardTextError', validateHintCardTextError)

        return isValid;
        
    }



    const handleSave = async () => {
        //console.log('Save!  Data:', question);
        const canSave = validateData();
        if (canSave) {
            // Make sure the number of options to select matches the length of the answers array, and hint cards match length of cardtitles array.
            setQuestion(prevQuestion => ({
                ...prevQuestion,
                optionstoselect: prevQuestion.options.length, 
                hintcards: prevQuestion.hintcardtitles.length 
            }));

            try {
                // URL depends on if the user is editing or creating a new course
                const url = editType === 'edit' 
                    ? `${baseUrl}/questions/${question.questionid}`
                    : `${baseUrl}/questions`;
                // Method depends on if the user is editing or creating a new course
                const method = editType === 'edit' ? 'PUT' : 'POST';
                // Create a copy of the question object without the questionid
                const { questionid, ...questionWithoutId } = question;
                // Now run the fetch query.
                const response = await fetch(url, {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(questionWithoutId),
                });
                if (response.ok) {
                    const result = await response.json();
                    console.log('Success:', result);
                    setSaveSuccess(true);
                    setSaveError('');
                    triggerRefresh();
                    setOverlayMessage(`Question ${editType === 'create' ? 'saved' : 'updated'} successfully!`);
                    setShowOverlay(true);
                } else {
                    console.error('Failed to save question');
                    setSaveSuccess(false);
                    setSaveError('Failed to save question. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                setSaveSuccess(false);
                setSaveError('Failed to save question. Please try again.');
            }
        }
    }

            
     // DELETE COURSE
     const handleDelete = async () => {
        setIsConfirmDialog(false);
        try {
            const url = `${baseUrl}/questions/${question.questionid}`;
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                console.log('Question deleted successfully');
                setOverlayMessage('Question deleted successfully!');
                setShowOverlay(true);
                triggerRefresh(); // Refresh the list after deletion
            } else {
                console.error('Failed to delete question');
                setOverlayMessage('Failed to delete question. Please try again.');
                setShowOverlay(true);
            }
        } catch (error) {
            console.error('Error:', error);
            setOverlayMessage('Failed to delete question. Please try again.');
            setShowOverlay(true);
        }
    
    };

    const confirmDelete = () => {
        var messageText;
        if (responseCount > 0) {
            messageText = 'Are you sure you want to delete this question? \n This will also delete' + responseCount + ' responses from the question responses tables.'
        } else {
            messageText = 'Are you sure you want to delete this question?';
        }
        setOverlayMessage(messageText);
        setIsConfirmDialog(true);
        setShowOverlay(true);
    };

    const closeOverlay = () => {
        setShowOverlay(false);
        setIsConfirmDialog(false);
    };

    const showData = () => {
        console.log(question);
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
                <Grid container spacing={customFontSize*0.5} alignItems='center'>

                    {/* FIRST ROW - Course, Quiz & Question Type  */}
                    <Grid item xs={4} md={2} lg={1}>
                        <Tooltip title = "What course does this question belong to?">
                            <Typography align='left' sx={{ fontSize: `${customFontSize * labelFontMod}rem` }}>Course:</Typography>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={8} md={6} lg={3}>
                        {/* Course Selection Dropdown */}
                        <FormControl fullWidth sx={{ paddingRight: `${customFontSize*0.5}rem`}}>
                            <Select
                                name="courseid"
                                value={question.courseid}
                                onChange={handleCourseChange}
                                // Adjust the default padding.
                                sx={{'.MuiSelect-select': {padding: `${customFontSize*0.25}rem`, }}}
                            >
                                <MenuItem value={0}>
                                    <Typography sx={{fontSize:`${customFontSize*valueFontMod*0.8}rem` }}>Select a course</Typography>
                                </MenuItem>
                                {courselist.map(course => (
                                    <MenuItem key={course.courseid} value={course.courseid}>
                                        <Typography sx={{fontSize:`${customFontSize*valueFontMod*0.8}rem`}}>{course.coursename}</Typography>
                                    </MenuItem>
                                ))}
                            </Select>
                            {!!validateCourseError && (<FormHelperText sx={{ color: 'red' }}>{validateCourseError}</FormHelperText>)}
                        </FormControl>
                    </Grid>
                    
                    <Grid item xs={6} md={2.5} lg={2}>
                        <Tooltip title ="Select a quiz number (1, 2 or 3).  At the main menu, users can choose not to include any questions from Quiz #3.">
                            <Typography align='left' sx={{ fontSize: `${customFontSize * labelFontMod}rem` }}>Quiz Number:</Typography>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={6} md={1.5} lg={1}>
                        <FormControl fullWidth sx={{ paddingRight: `${customFontSize*0.5}rem`}}>
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
                         {!!validateQuizError && (<FormHelperText sx={{ color: 'red' }}>{validateQuizError}</FormHelperText>)}
                    </Grid>

                    
                    <Grid item xs={6} md={3} lg={1}>
                        <Tooltip title="Question Type - Multiple choice or match every response to an answer">
                            <Typography align='left' sx={{ fontSize: `${customFontSize * labelFontMod}rem` }}>Type:</Typography>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={6} md={3} lg={1.75}>
                    <FormControl component="fieldset" sx={{ paddingRight: `${customFontSize*0.5}rem`}}>
                        <RadioGroup
                            row
                            name="questiontype"
                            value={question.questiontype}
                            onChange={handleQuestionTypeChange}
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
                    {!!validateTypeError && (<FormHelperText sx={{ color: 'red' }}>{validateTypeError}</FormHelperText>)}
                    </Grid>

                   <Grid item xs={4} md={2} lg={1}>
                        <Tooltip title="Status determines if the question will be presented to players - if enabled it will be, if disabled it won't be.  Click the Enabled or Disabled button to toggle its status.">
                            <Typography align='left' sx={{ fontSize: `${customFontSize * labelFontMod}rem` }}>Status:</Typography>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={4} md={2} lg={1.25}>
                        <Button
                            variant="contained"
                            onClick={handleEnableToggle}
                            sx={{
                                backgroundColor: question.usequestion === 1 ? 'green' : 'red',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: question.usequestion === 1 ? 'darkgreen' : 'darkred', // Optionally, define hover colors
                                },
                            }}
                        >
                            <Typography align='left' sx={{ fontSize: `${customFontSize * valueFontMod}rem`, color: 'white'}}>
                                {question.usequestion === 1 ? "Enabled" : "Disabled"}
                            </Typography>
                        </Button>
                    </Grid>

                    {/* SECOND ROW - Question Text */}
                    <Grid item xs={4} md={1.5}>
                        <Tooltip title="This is the question text that will be presented to players of the game.">
                            <Typography align='left' sx={{ fontSize: `${customFontSize * labelFontMod}rem` }}>Question:</Typography>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={8} md={10.5}>
                        <TextField
                            variant="outlined"
                            name="questiontext"
                            value={question.questiontext}
                            onChange={handleInputChange}
                            fullWidth
                            inputProps={{ maxLength: 400, 
                                        sx:{ m: 0, p: 0, fontSize:`${customFontSize*valueFontMod}rem` }
                            }}
                            multiline
                            minRows={1}
                            maxRows={3}
                            error={!!validateQuestionError}
                            helperText={validateQuestionError}
                            />
                    </Grid>

                    {/* THIRD ROW - Options and match options, or options & correct answer flags */}
                    {(question.questiontype === '1' || question.questiontype === 1) ?
                        <>
                        <Grid item xs={12} >
                            <Tooltip title={"Here are the answers to multiple choice questions.  Enter up to " + maxNumberAnswers + " answers.  You must have at least one checked as correct and can have as many correct as you like.  Click Remove to remove an answer, click Add Answer to add an answer."}>
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
                                        error={!!validateAnswersError[index]}
                                        helperText={validateAnswersError[index]}
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
                        {validateAnswers && (
                            <>
                                <Grid item xs={8}></Grid>
                                <Grid item xs={2}>
                                    <FormHelperText sx={{ color: 'red' }}>{validateAnswers}</FormHelperText>
                                </Grid>
                                <Grid item xs={2}></Grid>
                            </>
                        )}
                        
                            
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
                            <Tooltip title="This section is for matching answer pairs - enter both values of the match pair in each row.  When a player is served this style of question, the fields on the left are displayed in the same order as here, but the fields on the right will be in a randon order.">
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
                                        error={!!validateAnswersError[index]}
                                        helperText={validateAnswersError[index]}
                                    />
                                </Grid>
                                <Grid item xs={5}>
                                    <TextField
                                        variant="outlined"
                                        value={question.matchoptions[index]}
                                        onChange={e => handleMatchOptionChange(index, e.target.value)}
                                        fullWidth
                                        placeholder={`Match Option ${index + 1}`}
                                        error={!!validateMatchOptionsError[index]}
                                        helperText={validateMatchOptionsError[index]}
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
                        <Typography align='left' sx={{ fontSize: `${customFontSize * labelFontMod}rem` }}>Add hint?</Typography>
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
                            <Typography align='left' sx={{ fontSize: `${customFontSize * labelFontMod}rem` }}>Use hint cards?</Typography>
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
                 <Grid item xs={0} md={6}/>
                


            {/* Primary hint text */}
            {(question.hintind === 1 || question.hintind === '1') ? 
                <>
                 <Grid item xs={2.5} md={2.5} >
                        <Tooltip title="This hint always appears and cannot be empty (if you are using hints).">
                            <Typography align='left' sx={{ fontSize: `${customFontSize * labelFontMod}rem` }}>Hint Text (Primary):</Typography>
                        </Tooltip>
                </Grid>
                <Grid item xs={9} md={9}>
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
                        error={!!validateHintText0Error}
                        helperText={validateHintText0Error}
                        />
                    </Grid>
                </>
            : null}

        {/* Lines 1 & 2 of hint if not using cards */}
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
                        error={!!validateHintText1Error}
                        helperText={validateHintText1Error}
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

        {/* Cards */}
        {((question.hintind === 1 || question.hintind === '1') && question.hintcards > 0) ? 
            <>
                <Grid item xs={1.75}  alignSelf="flex-start">
                    <Typography align='left' sx={{ fontSize: `${customFontSize * labelFontMod }rem` }}>Hint Cards</Typography>
                </Grid>
                {question.hintcardtitles.map((title, index) => (
                    <Grid item xs={2} key={index}  alignSelf="flex-start">
                        <Stack direction='column' spacing={1} >
                        <TextField
                            fullWidth 
                            defaultValue={title}
                            inputProps={{ maxLength: 100, 
                                sx:{ m: 1, p: 0, fontSize:`${customFontSize*valueFontMod}rem`,  fontWeight: 'bold', textAlign: 'center'},
                                    }}
                            onChange={(e) => handleHintCardDetailChange(index, 'hintcardtitles', e.target.value)}
                            error={!!validateHintCardTitlesError[index]}
                            helperText={validateHintCardTitlesError[index]}
                            />
                        <TextField
                            fullWidth
                            defaultValue={question.hintcardtext[index]}
                            inputProps={{ maxLength: 125, 
                                sx:{ m: 0, p: 0, fontSize:`${customFontSize*valueFontMod*0.9}rem`, textAlign: 'center' }
                                        }}
                            onChange={(e) => handleHintCardDetailChange(index, 'hintcardtext', e.target.value)}
                            multiline
                            minRows={3}
                            maxRows={3}
                            error={!!validateHintCardTextError[index]}
                            helperText={validateHintCardTextError[index]}
                            />
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => handleRemoveHintCard(index)}
                            >
                            <Typography sx={{ fontSize: `${customFontSize * valueFontMod}rem` }}>Remove</Typography>
                        </Button>
                        </Stack>
                    </Grid>
                ))};
                {question.hintcardtitles.length < maxHintCards && (
                        <Grid item xs={2}>
                            <Button variant="contained" onClick={handleAddHintCard}>
                                Add Card
                            </Button>
                        </Grid>
                            )}
            </>
        : null}


                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSave}
                        sx={{ width: 'auto', textTransform: 'none' }}
                        >
                        <Typography sx={{fontSize:`${customFontSize*1}rem`}}>{editType === 'edit' ? 'Save Changes' : 'Create Course'}</Typography>
                    </Button>

                    {editType === 'edit' && (
                        <Button
                            variant="contained"
                            color="error"
                            onClick={confirmDelete}
                            sx={{ width: 'auto', textTransform: 'none' }}
                        >
                            <Typography sx={{ fontSize: `${customFontSize * 1}rem` }}>
                                Delete Question
                            </Typography>
                        </Button>
                            )}
                        </Box>
                </Grid>
            </Grid>

            <Button variant='outlined' onClick={showData}>Show Data</Button>
        </Box>
    </Box>


    {showOverlay && (
                <Overlay
                    message={overlayMessage}
                    onConfirm={isConfirmDialog ? handleDelete : closeOverlay}
                    onClose={closeOverlay}
                    isConfirmDialog={isConfirmDialog}
                />
            )}


        </>
    )


}

export default AdminEditQuestion;

