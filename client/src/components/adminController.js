import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { DimensionsContext } from './dimensionsContext';

import { Box, Typography, Button, Stack, Grid, Tooltip, Divider } from '@mui/material';
import { format, min, max, startOfWeek, endOfWeek, startOfMonth, endOfMonth, isSameDay, differenceInCalendarDays, isAfter, isBefore, subDays, } from 'date-fns';

import AdminFilters from './adminFilters';
import AdminResults from './adminResults';

import AdminEditCourse from './adminEditCourseData';
import AdminEditQuestion from './adminEditQuestionData';
import UsersPage from './adminUsers';
import AdminTitle from './adminTitle';


const AdminScreen = ({handleAdminExit}) => {

    // Get the course list, questions and question responses
    // This needs to be refreshed each time the database is modified
    const [courselist, setCourseList] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [questionResponses, setQuestionResponses] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const coursesResponse = await axios.get(`${baseUrl}/courselist?includeind=all`);
                setCourseList(coursesResponse.data);
                const questionsResponse = await axios.get(`${baseUrl}/questions`)
                setQuestions(questionsResponse.data);
                const responseResponse = await axios.get(`${baseUrl}/responses`)
                setQuestionResponses(responseResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchAllData();
    }, [refresh]);

    // Trigger a refresh
    const triggerRefresh = () => {
        setRefresh(prev => !prev);
    };


    // Responses set to the question response data we extracted.
    const [filteredCourseList, setFilteredCourseList] = useState(courselist);
    const [filteredQuestions, setFilteredQuestions] = useState(questions);
    const [filteredResponses, setFilteredResponses] = useState(questionResponses);

    // Sometimes the responseData isn't loaded when the useState is first rendered - so make sure it gets populated when responseData does become available.
    useEffect(() => {
        setFilteredResponses(questionResponses);
    }, [questionResponses]);
    useEffect(() => {
        setFilteredQuestions(questions);
    }, [questions]);
    

    // Apply the results of the filtering
    const handleFilterChange = (filter) => {
        const { courseId, quizNumber, questionId, dateFilterOption, selectedMonth } = filter;
        //console.log(courseId, quizNumber, questionId, dateFilterOption, selectedMonth)
        let filteredq = questions;
        let filteredr = questionResponses;
        let filteredc = courselist;
        // Now filter down to course, quiz & question (if they are set)
        if (courseId) {
          filteredr = filteredr.filter(r => r.questions.courseid === courseId);
          filteredq = filteredq.filter(q => q.courseid === courseId);
          filteredc = filteredc.filter(c => c.courseid === courseId);
        }
        if (quizNumber) {
          filteredr = filteredr.filter(r => r.questions.quiznumber === quizNumber);
          filteredq = filteredq.filter(q => q.quiznumber === quizNumber);
        }
        if (questionId) {
            filteredq = filteredq.filter(q => q.questionid === questionId);
        }

       // Date range filtering
       const today = new Date();
       // Filtering depends on the option chosen:
       if (dateFilterOption === 'Last 7 Days') {
            const last7Days = subDays(today, 7);
            filteredr = filteredr.filter(r => {
                const responseDate = new Date(r.year, r.month - 1, r.day);
                return isAfter(responseDate, last7Days) || isSameDay(responseDate, last7Days);
            });
        } else if (dateFilterOption === 'Current Month') {
            const startOfCurrentMonth = startOfMonth(today);
            const endOfCurrentMonth = endOfMonth(today);
            filteredr = filteredr.filter(r => {
                const responseDate = new Date(r.year, r.month - 1, r.day);
                return isAfter(responseDate, startOfCurrentMonth) && isBefore(responseDate, endOfCurrentMonth);
            });
        } else if (dateFilterOption === 'Specific Month' && selectedMonth) {
            const [year, month] = selectedMonth.split('-');
            const startOfSelectedMonth = new Date(year, month - 1, 1);
            const endOfSelectedMonth = endOfMonth(startOfSelectedMonth);
            filteredr = filteredr.filter(r => {
                const responseDate = new Date(r.year, r.month - 1, r.day);
                return isAfter(responseDate, startOfSelectedMonth) && isBefore(responseDate, endOfSelectedMonth);
            });
        }
        setFilteredCourseList(filteredc);
        setFilteredResponses(filteredr);
        setFilteredQuestions(filteredq);
    };

    useEffect(() => {
      // Define default filter values
      const courseid = Math.min(...courselist.map(course => course.courseid));
      const filteredResponses = questionResponses.filter((resp) => resp.questions.courseid === courseid);
      const minQuiz = Math.min(...filteredResponses.map(resp => resp.questions.quiznumber));

      const defaultFilter = {
          courseId: courseid,
          quizNumber: minQuiz,
          questionId: null,
          dateFilterOption: 'All Time', 
          selectedMonth: null,
      }
      // Apply the default filter when the component mounts
      handleFilterChange(defaultFilter);
  }, [questions, questionResponses]);

    // What is being shown?
    const [showTitle, setShowTitle] = useState(true);
    const [showResults, setShowResults] = useState(false);
    const [showCourseEdit, setShowCourseEdit] = useState(false);
    const [showQuestionEdit, setShowQuestionEdit] = useState(false);
    const [showNewCourse, setShowNewCourse] = useState(false);
    const [showNewQuestion, setShowNewQuuestion] = useState(false);
    const [showUsers, setShowUsers] = useState(false);

    const handleTitleClick = () => {
        setShowTitle(true);
        setShowResults(false);
        setShowCourseEdit(false);
        setShowQuestionEdit(false);
        setShowNewCourse(false);
        setShowNewQuuestion(false);
        setShowUsers(false);
    }

    const handleViewClick = () => {
        setShowTitle(false);
        setShowResults(true);
        setShowCourseEdit(false);
        setShowQuestionEdit(false);
        setShowNewCourse(false);
        setShowNewQuuestion(false);
        setShowUsers(false);
    }

    const handleCourseEditClick = () => {
        setShowTitle(false);
        setShowResults(false);
        setShowCourseEdit(true);
        setShowQuestionEdit(false);
        setShowNewCourse(false);
        setShowNewQuuestion(false);
        setShowUsers(false);
    }

    const handleQuestionEditClick = () => {
        setShowTitle(false);
        setShowResults(false);
        setShowCourseEdit(false);
        setShowQuestionEdit(true);
        setShowNewCourse(false);
        setShowNewQuuestion(false);
        setShowUsers(false);
    }

    const handleNewCourseClick = () => {
        setShowTitle(false);
        setShowResults(false);
        setShowCourseEdit(false);
        setShowQuestionEdit(false);
        setShowNewCourse(true);
        setShowNewQuuestion(false);
        setShowUsers(false);
    }

    const handleNewQuestionClick = () => {
        setShowTitle(false);
        setShowResults(false);
        setShowCourseEdit(false);
        setShowQuestionEdit(false);
        setShowNewCourse(false);
        setShowNewQuuestion(true);
        setShowUsers(false);
    }

    const handleUsersClick = () => {
        setShowTitle(false);
        setShowResults(false);
        setShowCourseEdit(false);
        setShowQuestionEdit(false);
        setShowNewCourse(false);
        setShowNewQuuestion(false);
        setShowUsers(true);
    }
    const handleExitClick = () => {
        setShowTitle(false);
        setShowResults(true);
        setShowCourseEdit(false);
        setShowQuestionEdit(false);
        setShowNewCourse(false);
        setShowNewQuuestion(false);
        setShowUsers(false);
        handleAdminExit();
    }

    const { width, height } = useContext(DimensionsContext);
    const [customFontSize, setCustomFontSize] = useState(1);
    useEffect(() => {
        // Determine the font & margin sizes
        const calculateFontSize = () => {
            // Size is based on screen width only
            let newFontSize = Math.min(2, Math.max(1, 1 + 0.25 * Math.floor(width/400)));
          setCustomFontSize(newFontSize);
        };
        calculateFontSize();
      }, [width, height]);

    // Debugging
    const showAdminData = () => {
        console.log('Courses:', courselist);
        console.log('Questions: ', questions);
        console.log('Responses:', questionResponses);
        console.log('Filtered Courses:', filteredCourseList);
        console.log('Filtered Questions:', filteredQuestions);
        console.log('Filtered Responses:', filteredResponses);
        // Temp function to show the data that has been fetched.
    }


    if(courselist && questions && questionResponses) {
        return (
        <Box display='flex'
            flexDirection='column'
            justifyContent ='flex-start'
            alignItems='center'
            minHeight= '100vh'
            sx={{backgroundImage: 'url(/images/other/background_lightfabric.jpg)',
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto',
            }}>
        {/* TITLE */}
        <Typography variant='h3' sx={{fontSize:`${customFontSize*2}rem`}}>IBM Admin Page</Typography>

        <Box sx={{width:'95%'}}>
        {/* BUTTONS */}
        <Grid container sx={{marginY: '0.5rem'}} spacing={2}>
            <Grid item xs={6} md={2}>
                <Tooltip title="View the title screen">
                    <Stack direction="column" alignItems='center' spacing={1} sx={{border: '1px solid #ccc', borderRadius: '8px', padding: `${customFontSize*0.25}rem`}}>
                        <Typography variant='h3' sx={{fontSize:`${customFontSize*0.75}rem`}}>Instructions</Typography>
                        <Button variant='contained' onClick={handleTitleClick} disabled={showTitle} sx={{width: '80%', alignSelf: 'center'}}>
                            <Typography variant='h3' sx={{fontSize:`${customFontSize*0.75}rem`, textTransform: 'none'}}>View</Typography>
                        </Button>
                    </Stack>
                </Tooltip>
            </Grid> 

            <Grid item xs={6} md={2}>
                <Tooltip title="View results on how often players answer questions correctly">
                    <Stack direction="column" alignItems='center' spacing={1} sx={{border: '1px solid #ccc', borderRadius: '8px', padding: `${customFontSize*0.25}rem`}}>
                        <Typography variant='h3' sx={{fontSize:`${customFontSize*0.75}rem`}}>Player Results</Typography>
                        <Button variant='contained' onClick={handleViewClick} disabled={showResults} sx={{width: '80%', alignSelf: 'center'}}>
                            <Typography variant='h3' sx={{fontSize:`${customFontSize*0.75}rem`, textTransform: 'none'}}>View</Typography>
                        </Button>
                    </Stack>
                </Tooltip>
            </Grid> 

            <Grid item xs={6} md={2}>
                <Tooltip title="Edit and create courses to include">
                    <Stack direction="column" alignItems='center' spacing={1} sx={{border: '1px solid #ccc', borderRadius: '8px', padding: `${customFontSize*0.25}rem`}}>
                        <Typography variant='h3' sx={{fontSize:`${customFontSize*0.75}rem`}}>Courses</Typography>
                        <Button variant='contained' onClick={handleCourseEditClick} disabled={showCourseEdit} sx={{width: '80%', alignSelf: 'center'}}>
                            <Typography variant='h3' sx={{fontSize:`${customFontSize*0.75}rem`, textTransform: 'none'}}>Edit</Typography>
                        </Button>
                        <Button variant='contained' onClick={handleNewCourseClick} disabled={showNewCourse} sx={{width: '80%', alignSelf: 'center'}}>
                            <Typography variant='h3' sx={{fontSize:`${customFontSize*0.75}rem`, textTransform: 'none'}}>Create</Typography>
                        </Button>
                    </Stack>
                </Tooltip>
            </Grid> 

           
            <Grid item xs={6} md={2}>
                <Tooltip title="Edit and create questions">
                    <Stack direction="column" alignItems='center' spacing={1} sx={{border: '1px solid #ccc', borderRadius: '8px', padding: `${customFontSize*0.25}rem`}}>
                        <Typography variant='h3' sx={{fontSize:`${customFontSize*0.75}rem`}}>Questions</Typography>
                        <Button variant='contained' onClick={handleQuestionEditClick} disabled={showQuestionEdit} sx={{width: '80%', alignSelf: 'center'}}>
                            <Typography variant='h3' sx={{fontSize:`${customFontSize*0.75}rem`, textTransform: 'none'}}>Edit</Typography>
                        </Button>
                        <Button variant='contained' onClick={handleNewQuestionClick} disabled={showNewQuestion} sx={{width: '80%', alignSelf: 'center'}}>
                            <Typography variant='h3' sx={{fontSize:`${customFontSize*0.75}rem`, textTransform: 'none'}}>Create</Typography>
                        </Button>
                    </Stack>
                </Tooltip>
            </Grid>

            <Grid item xs={6} md={2}>
                <Tooltip title="Edit admin user list">
                <Stack direction="column" alignItems='center' spacing={1} sx={{border: '1px solid #ccc', borderRadius: '8px', padding: `${customFontSize*0.25}rem`}}>
                <Typography variant='h3' sx={{fontSize:`${customFontSize*0.75}rem`}}>Users</Typography>
                <Button variant='contained' onClick={handleUsersClick} disabled={showUsers} sx={{width: '80%', alignSelf: 'center'}}>
                    <Typography variant='h3' sx={{fontSize:`${customFontSize*0.75}rem`, textTransform: 'none'}}>Edit</Typography>
                </Button>
                </Stack>
                </Tooltip>
            </Grid>

            <Grid item xs={6} md={2}>
            <Tooltip title="Exit to main menu">
                <Stack direction="column" alignItems='center' spacing={1} sx={{border: '1px solid #ccc', borderRadius: '8px', padding: `${customFontSize*0.25}rem`}}>
                <Typography variant='h3' sx={{fontSize:`${customFontSize*0.75}rem`}}>Go to Title Screen</Typography>
                <Button variant='contained' onClick={handleExitClick} sx={{width: '80%', alignSelf: 'center'}}>
                    <Typography variant='h3' sx={{fontSize:`${customFontSize*0.75}rem`, textTransform: 'none' }}>Exit</Typography>
                </Button>
                </Stack>
                </Tooltip>
            </Grid>
        </Grid>
        </Box>

      <Divider sx={{ borderColor: 'gray', borderStyle: 'dashed', maginY:'15rem' }} />

        
        {/* FILTERS */}
        {(showResults || showCourseEdit || showQuestionEdit) ?
        <AdminFilters 
            courselist = {courselist}
            questions = {questions}
            responses = {questionResponses}
            onFilterChange = {handleFilterChange}
            screenType = {showResults ? 'results' : showCourseEdit ? 'courseedit' : 'questionedit'}
            customFontSize =  {customFontSize}
            />
            : null
        }

        {/* Title Screen */}
        {showTitle ? 
            <AdminTitle customFontSize = {customFontSize}/>
            : null
        }

        {/* CHART */}
        {showResults ? (
            <AdminResults
                filteredResponses = {filteredResponses}
                customFontSize = {customFontSize}
            />
            ) : null
        } 

        {/* Courselist - edit and create new*/}
        {(showCourseEdit || showNewCourse) ? 
            <AdminEditCourse
                coursedata = {filteredCourseList}
                editType = {showCourseEdit ? 'edit' : 'create'}
                customFontSize = {customFontSize}
                fullCourseList = {courselist}
                triggerRefresh = {triggerRefresh}
                questionData = {questions}
                responseData = {questionResponses}
            />
        : null}

        {/* Question Data - edit and create new */}
        {(showQuestionEdit || showNewQuestion) ? 
            <AdminEditQuestion
                questiondata = {filteredQuestions}
                courselist = {courselist}
                editType = {showQuestionEdit ? 'edit' : 'create'}
                customFontSize = {customFontSize}
                triggerRefresh = {triggerRefresh}
                responseData = {questionResponses}
            />
        : null}

        {/* Users */}
        {showUsers ? 
            <UsersPage 
            customFontSize = {customFontSize}/>
         : null}
        

        <Button variant='contained' onClick={showAdminData}>debugging - DATA</Button>
        </Box>
        );
    } else {
        return (
            <Typography>Loading...</Typography>
        );
    }
}

export default AdminScreen;
