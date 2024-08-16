import React, { useState, useEffect, useContext } from 'react';
import { MenuItem, Select, FormControl, FormControlLabel, InputLabel, IconButton, Stack, Box, Typography, Grid, Button, TextField, Checkbox, Tooltip, Alert } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BadgeSelector = ({ badges, selectedBadge, onSelectBadge }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleBadges = 3; 

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
                                    src={`http://localhost:3001/badges/${badge}`}
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



const AdminEditCourse = ({coursedata, editType, customFontSize, fullCourseList, onhandleViewClick}) => {
    // Create a courseDetails object that has details of the sellected course, or blank if the user is creating a new course
    const [courseDetails, setCourseDetails] = useState({
        courseid: 0,
        coursename: '',
        badgeicon: '',
        includeind: 0,
    });

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
        } else {
            setCourseDetails(prevState => ({
                ...prevState
                , courseid: 0
                , coursename: ''
                , badgeicon: ''
                , includeind: 0
                
            }))
        }
    }, [coursedata, editType]);
    

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
                const response = await fetch('http://localhost:3001/api/badges');
                const data = await response.json();
                setBadges(data);
            } catch (error) {
                console.error('Error fetching badges:', error);
            }
        };

        fetchBadges();
    }, []);

    // Validation and user messaging
    const [validationError, setValidationError] = useState('');
    const [saveError, setSaveError] = useState(''); 
    const [saveSuccess, setSaveSuccess] = useState(false);
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
                ? `http://localhost:3001/courselist/${courseDetails.courseid}`
                : 'http://localhost:3001/courselist';
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
                setTimeout(() => {
                    // Check if handleViewClick is passed correctly
                    if (typeof onhandleViewClick === 'function') {
                        onhandleViewClick(); // Call the function passed as a prop
                    } else {
                        console.error('onhandleViewClick is not a function');
                    }
                }, 2000);
            } else {
                console.error('Failed to save course');
                setSaveSuccess(false);
                setSaveError('Failed to save course. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setSaveSuccess(false);
            setSaveError('Failed to save course. Please try again.');
        }
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


                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                    >
                    <Typography sx={{fontSize:`${customFontSize*1}rem`}}>{editType === 'edit' ? 'Save Changes' : 'Create Course'}</Typography>
                </Button>
                </Stack>
            

            {/* Display success or error messages for saving the course data*/}
            {saveSuccess && <Alert severity="success" sx={{ mt: 2 }}>{'Course ' + (editType === 'create' ? 'saved' : 'updated') + ' successfully!  Redirecting in 2 seconds...'}</Alert>}
            {saveError && <Alert severity="error" sx={{ mt: 2 }}>{saveError}</Alert>}
            </Box>
        </Box>


</>
    )


}

export default AdminEditCourse;

