import React, { useState, useEffect, useContext } from 'react';
import { MenuItem, Select, FormControl, FormControlLabel, InputLabel, IconButton, Stack, Box, Typography, Grid, Button, TextField, Checkbox, Tooltip, Alert } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// This displays all the badges that are in the /images/badges folder.
const BadgeSelector = ({ badges, selectedBadge, onSelectBadge }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleBadges = 3; 
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    // Functions to handle clicking left & right on badges.
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            Math.max(prevIndex - 1, 0)
        );
    };
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            Math.min(prevIndex + 1, badges.length - visibleBadges)
        );
    };

    return (
        <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Box display="flex" alignItems="center" justifyContent="center">
                <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={1}>
                    <IconButton onClick={handlePrev} disabled={currentIndex === 0}>
                        <ArrowBackIosIcon />
                    </IconButton>
                    </Grid>
                        {badges.slice(currentIndex, currentIndex + visibleBadges).map((badge) => (
                            <Grid item xs={2} key={badge}>
                                <img
                                    src={`${baseUrl}/badges/${badge}`}
                                    alt={badge}
                                    onClick={() => onSelectBadge(badge)}
                                    style={{
                                        width: '100%',
                                        cursor: 'pointer',
                                        border: selectedBadge === badge ? '2px solid blue' : '2px solid transparent',
                                        opacity: selectedBadge === badge ? 1 : 0.5, // Grey out non-selected badges
                                        filter: selectedBadge === badge ? 'none' : 'grayscale(100%)', // Optional: Add grayscale filter to non-selected badges
                                        transition: 'opacity 0.3s ease, filter 0.3s ease', // Smooth transition
                                        borderRadius: '4px',
                                    }}
                                />
                        </Grid>
                    ))}
                <Grid item xs={1}>
                 <IconButton
                    onClick={handleNext}
                    disabled={currentIndex >= badges.length - visibleBadges}>
                    <ArrowForwardIosIcon />
                </IconButton>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
            </Box>
        </Box>
    );
};


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




const AdminEditCourse = ({coursedata, editType, customFontSize, fullCourseList, triggerRefresh, questionData, responseData}) => {
    // Create a courseDetails object that has details of the sellected course, or blank if the user is creating a new course
    const [courseDetails, setCourseDetails] = useState({
        courseid: 0,
        coursename: '',
        badgeicon: '',
        includeind: 0,
    });

    const [questionCount, setQuestionCount] = useState(0);
    const [responseCount, setResponseCount] = useState(0);
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    // Set defaults
    useEffect(()=> {
        if (editType === 'edit') {
            setCourseDetails(prevState => ({
                ...prevState
                , courseid: coursedata[0].courseid
                , coursename: coursedata[0].coursename
                , badgeicon: coursedata[0].badgeicon
                , includeind: coursedata[0].includeind
            }))
            const courseQuestions = questionData.filter((question) => question.courseid === coursedata[0].courseid).length;
            const courseResponses = responseData.filter((response) => response.questions.courseid === coursedata[0].courseid).length;
            setQuestionCount(courseQuestions);
            setResponseCount(courseResponses);
        } else {
            setCourseDetails(prevState => ({
                ...prevState
                , courseid: 0
                , coursename: ''
                , badgeicon: ''
                , includeind: 0
            }))
            setQuestionCount(0);
            setResponseCount(0);
        }
    }, [coursedata, editType]);
    
    // State variables.
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayMessage, setOverlayMessage] = useState('');
    const [isConfirmDialog, setIsConfirmDialog] = useState(false);
    
    const [validationError, setValidationError] = useState('');
    const [saveError, setSaveError] = useState(''); 
    const [saveSuccess, setSaveSuccess] = useState(false);

    


     // Handle input changes
     const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCourseDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Badge selection changes
    const handleBadgeSelect = (badge) => {
        setCourseDetails((prevState) => ({
            ...prevState,
            badgeicon: badge,
        }));
    };

    // Checkbox change
    const handleCheckBoxChange = (e) => {
        const { checked } = e.target;
        setCourseDetails(prevState => ({
            ...prevState,
            includeind: checked ? 1 : 0
        }));
    };
    
    // Load all the badges
    const [badges, setBadges] = useState([]);
    useEffect(() => {
        const fetchBadges = async () => {
            try {
                const response = await fetch(`${baseUrl}/api/badges`);
                const data = await response.json();
                setBadges(data);
            } catch (error) {
                console.error('Error fetching badges:', error);
            }
        };

        fetchBadges();
    }, []);

    // Validation and user messaging
    const validateInput = (coursename, badgeicon) => {
        // Checks
        // Cannot be empty
        if (!coursename.trim()) {
            return '1 Course name cannot be empty'
        }
        // Cannot be coursename or course name.
        if (coursename.toLowerCase() === 'coursename' || coursename.toLowerCase() === 'course name') {
            return '1 Course name cannot be "coursename" or "Course Name".'
        }
        // Check if course already exists - only applicable when creating a new course
        if (editType === 'create') {
            const courseExists = fullCourseList.some((course) => course.coursename.toLowerCase() === coursename.toLowerCase());
            if (courseExists) {
                return '1 Course name already exists.  Please enter a unique name';
            }
        }
        // Check badge icon is present
        if (!badgeicon) {
            return '2 Please select a badge.';
        }

        return '';  // If no validation errors are triggered, return nothing.
    }

    const handleSave = async (e) => {
        // Validate input
        const error = validateInput(courseDetails.coursename, courseDetails.badgeicon);
        if (error) {
            setValidationError(error);
            return;
        }
        // Clear the validation errors, as none have been triggered.
        setValidationError(''); 
        try {
            // URL depends on if the user is editing or creating a new course
            const url = editType === 'edit' 
                ? `${baseUrl}/courselist/${courseDetails.courseid}`
                : `${baseUrl}/courselist`;
            // Method depends on if the user is editing or creating a new course
            const method = editType === 'edit' ? 'PUT' : 'POST';
            // Now run the fetch query.
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(courseDetails),
            });
            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
                setSaveSuccess(true);
                setSaveError('');
                triggerRefresh();
                setOverlayMessage(`Course ${editType === 'create' ? 'saved' : 'updated'} successfully!`);
                setShowOverlay(true);
            } else {
                console.error('Failed to save course');
                setSaveSuccess(false);
                setSaveError('Failed to save course. Please try again.');
                setOverlayMessage('Failed to save course. Please try again.');
                setShowOverlay(true);
            }
        } catch (error) {
            console.error('Error:', error);
            setSaveSuccess(false);
            setSaveError('Failed to save course. Please try again.');
            setOverlayMessage('Failed to save course. Please try again.');
            setShowOverlay(true);
        }
    };

    // DELETE COURSE
    const handleDelete = async () => {
        setIsConfirmDialog(false);
        try {
            const url = `${baseUrl}/courselist/${courseDetails.courseid}`;
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                console.log('Course deleted successfully');
                setOverlayMessage('Course deleted successfully!');
                setShowOverlay(true);
                triggerRefresh(); // Refresh the list after deletion
            } else {
                console.error('Failed to delete course');
                setOverlayMessage('Failed to delete course. Please try again.');
                setShowOverlay(true);
            }
        } catch (error) {
            console.error('Error:', error);
            setOverlayMessage('Failed to delete course. Please try again.');
            setShowOverlay(true);
        }
    
    };

    const confirmDelete = () => {
        var messageText;
        if (questionCount > 0 || responseCount > 0) {
            messageText = 'Are you sure you want to delete this course? \n This will also delete ' + questionCount + ' questions from the Questions table and ' + responseCount + ' responses from the question responses tables.'
        } else {
            messageText = 'Are you sure you want to delete this course?';
        }
        setOverlayMessage(messageText);
        setIsConfirmDialog(true);
        setShowOverlay(true);
    };

    const closeOverlay = () => {
        setShowOverlay(false);
        setIsConfirmDialog(false);
    };

    

    return (
        <>
        { editType === 'edit' ?
            <Typography sx={{fontSize:`${customFontSize*1.5}rem`}}>Edit Course Lists</Typography>
            :
            <Typography sx={{fontSize:`${customFontSize*1.5}rem`}}>Create New Course</Typography>
        }
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <Box component="form" noValidate autoComplete="off" onSubmit={handleSave}sx={{width: '80%'}}>
                <Stack direction='column' spacing={customFontSize}>
                <Tooltip title="Enter the name of the course (max 255 characters)">
                    <TextField
                        label="Course Name"
                        variant="outlined"
                        name="coursename"
                        value={courseDetails.coursename}
                        onChange={handleInputChange}
                        fullWidth
                        inputProps={{ maxLength: 255 }} 
                        sx={{ mb: 2 }}
                        error={!!validationError && validationError.startsWith('1')}
                        helperText={validationError.startsWith('1') ? validationError.substring(2) : ''}
                />
                </Tooltip>

                <Tooltip title="Select a badge to use for this course (all badges must be saved in public/images/badges/)">
                    <Typography variant="h6">Select a Badge</Typography>
                </Tooltip>
                <BadgeSelector badges={badges} selectedBadge={courseDetails.badgeicon} onSelectBadge={handleBadgeSelect} />
                {validationError.startsWith('2') &&  (
                    <Typography color="error" sx={{ mb: 2 }}>{validationError.substring(2)}</Typography>
                )}
                

                <Tooltip title="Is this course selectable from the main menu?  Set this to false when developing a new course, and set it to true when that course is ready.">
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={!!courseDetails.includeind} 
                            onChange={handleCheckBoxChange}
                            color="primary"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: `${customFontSize}rem` } }} 
                        />
                    }
                    label="Is this course included in the game?"
                />
                </Tooltip>

                {/* Buttons */}
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
                            Delete Course
                        </Typography>
                    </Button>
                        )}
                    </Box>
                </Stack>
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

export default AdminEditCourse;

