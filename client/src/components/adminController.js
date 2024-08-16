import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { DimensionsContext } from './dimensionsContext';

import { Box, Typography, Button, Stack, Grid, Tooltip, Divider } from '@mui/material';
import { format, min, max, startOfWeek, endOfWeek, startOfMonth, endOfMonth, isSameDay, differenceInCalendarDays, isAfter, isBefore, subDays } from 'date-fns';

import AdminFilters from './adminFilters';
import AdminResults from './adminResults';

import AdminEditCourse from './adminEditCourseData';
import AdminEditQuestion from './adminEditQuestionData';


const AdminScreen = ({handleAdminExit}) => {

    // Get the course list
    const [courselist, setCourseList] = useState([]);
    useEffect(() => {
        const fetchCourseList = async () => {
            try {
                const response = await axios.get('http://localhost:3001/courselist?includeind=all');
                setCourseList(response.data);
            } catch (error) {
                console.error('Error fetching courselist:', error);
            }
        };
        fetchCourseList();
    }, []);

    // Get the set of questions
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('http://localhost:3001/questions')
                setQuestions(response.data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };
        fetchQuestions();
    }, []);

    // Get the question responses
    const [questionResponses, setQuestionResponses] = useState([]);
    useEffect(() => {
        const fetchResponses = async () => {
            try {
                const response = await axios.get('http://localhost:3001/responses')
                setQuestionResponses(response.data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };
        fetchResponses();
    }, []);

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
        console.log(courseId, quizNumber, questionId, dateFilterOption, selectedMonth)
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
    const [showResults, setShowResults] = useState(true);
    const [showCourseEdit, setShowCourseEdit] = useState(false);
    const [showQuestionEdit, setShowQuestionEdit] = useState(false);
    const [showNewCourse, setShowNewCourse] = useState(false);
    const [showNewQuestion, setShowNewQuuestion] = useState(false);

    const handleViewClick = () => {
        setShowResults(true);
        setShowCourseEdit(false);
        setShowQuestionEdit(false);
        setShowNewCourse(false);
        setShowNewQuuestion(false);
    }

    const handleCourseEditClick = () => {
        setShowResults(false);
        setShowCourseEdit(true);
        setShowQuestionEdit(false);
        setShowNewCourse(false);
        setShowNewQuuestion(false);
    }

    const handleQuestionEditClick = () => {
        setShowResults(false);
        setShowCourseEdit(false);
        setShowQuestionEdit(true);
        setShowNewCourse(false);
        setShowNewQuuestion(false);
    }

    const handleNewCourseClick = () => {
        setShowResults(false);
        setShowCourseEdit(false);
        setShowQuestionEdit(false);
        setShowNewCourse(true);
        setShowNewQuuestion(false);
    }

    const handleNewQuestionClick = () => {
        setShowResults(false);
        setShowCourseEdit(false);
        setShowQuestionEdit(false);
        setShowNewCourse(false);
        setShowNewQuuestion(true);
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
        <Box sx={{backgroundImage: 'url(/images/other/background_lightfabric.jpg)',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',

            }}>
        {/* TITLE */}
        <Typography variant='h3' sx={{fontSize:`${customFontSize*2}rem`}}>IBM Admin Page</Typography>

        {/* BUTTONS */}
        <Grid container sx={{marginY: '1rem'}}>
            <Grid item xs={6} md={2}>
                <Button variant='contained' onClick={handleViewClick} disabled={showResults}>
                    <Typography variant='h3' sx={{fontSize:`${customFontSize*0.75}rem`, textTransform: 'none'}}>View Results</Typography>
                </Button>
            </Grid> 
            <Grid item xs={6} md={2}>
                <Button variant='contained' onClick={handleCourseEditClick} disabled={showCourseEdit}>
                    <Typography variant='h3' sx={{fontSize:`${customFontSize*0.75}rem`, textTransform: 'none'}}>Edit Course Data</Typography>
                </Button>
            </Grid> 
            <Grid item xs={6} md={2}>
                <Button variant='contained' onClick={handleQuestionEditClick} disabled={showQuestionEdit}>
                    <Typography variant='h3' sx={{fontSize:`${customFontSize*0.75}rem`, textTransform: 'none'}}>Edit Question Data</Typography>
                </Button>
            </Grid> 
            <Grid item xs={6} md={2}>
                <Button variant='contained' onClick={handleNewCourseClick} disabled={showNewCourse}>
                    <Typography variant='h3' sx={{fontSize:`${customFontSize*0.75}rem`, textTransform: 'none'}}>Create Course</Typography>
                </Button>
            </Grid>
            <Grid item xs={6} md={2}>
                <Button variant='contained' onClick={handleNewQuestionClick} disabled={showNewQuestion}>
                    <Typography variant='h3' sx={{fontSize:`${customFontSize*0.75}rem`, textTransform: 'none'}}>Create Question</Typography>
                </Button>
            </Grid>
            <Grid item xs={6} md={2}>
                <Button variant='contained' onClick={handleAdminExit}>
                    <Typography variant='h3' sx={{fontSize:`${customFontSize*0.75}rem`, textTransform: 'none' }}>Exit to Main Menu</Typography>
                </Button>
            </Grid>
        </Grid>


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
                onhandleViewClick = {handleViewClick}
            />
        : null}

        {/* Question Data - edit and create new */}
        {(showQuestionEdit || showNewQuestion) ? 
            <AdminEditQuestion
                questiondata = {filteredQuestions}
                courselist = {courselist}
                editType = {showQuestionEdit ? 'edit' : 'create'}
                customFontSize = {customFontSize}
                onhandleViewClick = {handleViewClick}
            />
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
