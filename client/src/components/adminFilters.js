import React, { useState, useMemo, useEffect } from 'react';
import { MenuItem, Select, FormControl, InputLabel, Box, Grid, Stack, Typography, Button, Tooltip } from '@mui/material';
import { format } from 'date-fns';
import './custom.css';

const AdminFilters = ({ courselist, responses, onFilterChange, screenType }) => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedQuiz, setSelectedQuiz] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState('');
    
  // Date parameters
  const [selectedDateRange, setSelectedDateRange] = useState(null);
  const [dateFilterOption, setDateFilterOption] = useState('All Time');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [availableMonths, setAvailableMonths] = useState([]);

  const customFontSize = 1;

  // Handler for course change
  const handleCourseChange = (event) => {
    const courseId = event.target.value;
    setSelectedCourse(courseId);
    if (quizzes) {setSelectedQuiz(quizzes[0]);}
    if (questions) {setSelectedQuestion(questions[0]);}
    onFilterChange({ courseId, quizNumber: selectedQuiz, questionId: selectedQuestion, dateFilterOption: dateFilterOption, selectedMonth: selectedMonth });
  };

  // And for quiz change - set questions to 'All' (in case user has selected a question, and then changes the quiz number, resulting in the question selection not being valid)
  const handleQuizChange = (event) => {
    const quizNumber = event.target.value;
    setSelectedQuiz(quizNumber);
    if (questions) {setSelectedQuestion(questions[0]);}
    onFilterChange({ courseId: selectedCourse, quizNumber, questionId: selectedQuestion, dateFilterOption: dateFilterOption, selectedMonth: selectedMonth });
  };

  // Question change handler
  const handleQuestionChange = (event) => {
    const questionId = event.target.value;
    setSelectedQuestion(questionId);
    onFilterChange({ courseId: selectedCourse, quizNumber: selectedQuiz, questionId, dateFilterOption: dateFilterOption, selectedMonth: selectedMonth });
  };

  // Date function handler 1 - this is when the user is picking from my pre-defined options.
  const handleDateFilterChange = (event) => {
    const option = event.target.value;
    setDateFilterOption(option);
    // Reset selected month when a different date filter option is selected
    if (option !== 'Specific Month') {
      setSelectedMonth('');
    }
    onFilterChange({ courseId: selectedCourse, quizNumber: selectedQuiz, questionId: selectedQuestion, dateFilterOption: option, selectedMonth: selectedMonth });
  };

  // Date month handler - this is when a user has picked specific month, this will handle them changing what month they pick.
  const handleMonthChange = (event) => {
    const month = event.target.value;
    setSelectedMonth(month);
    onFilterChange({ courseId: selectedCourse, quizNumber: selectedQuiz, questionId: selectedQuestion, dateFilterOption: dateFilterOption, selectedMonth: month });
  };

  // Determine the months available in the data (note this doesn't change based on other selections)
  useEffect(() => {
      const months = responses.reduce((acc, curr) => {
        const yearMonth = `${curr.year}-${String(curr.month).padStart(2, '0')}`;
        if (!acc.includes(yearMonth)) {
            acc.push(yearMonth);
        }
        return acc;
        }, []);
    setAvailableMonths(months);
  }, [responses]);

  // Initial load
  useEffect(()=> {
    if (courselist) {
      const courseid = Math.min(...courselist.map(course => course.courseid));
      setSelectedCourse(courseid);
    }
  }, [courselist])

  useEffect(() => {
    if (courselist && responses) {
      const courseid = Math.min(...courselist.map(course => course.courseid));
      const filteredResponses = responses.filter((resp) => resp.questions.courseid === courseid);
      const minQuiz = Math.min(...filteredResponses.map(resp => resp.questions.quiznumber));
      setSelectedQuiz(minQuiz);
    }
  }, [responses]);

 

  // FILTERING 
  // WHen a user picks a course, the quiz numbers are based on what is available in that course.
  // Derived options based on course selection
  const quizzes = useMemo(() => {
    const quizNumbers = responses.filter(resp => resp.questions.courseid === selectedCourse).map(resp => resp.questions.quiznumber);
    if (quizNumbers.length > 0) {
      return [...new Set(quizNumbers)];
    } else {return [0];}
  }, [selectedCourse, responses]);

  // When a user picks a quiz, the questions are updated to reflect the course that they have picked.
  const questions = useMemo(() => {
    const questionid = responses.filter(resp => resp.questions.quiznumber === selectedQuiz && resp.questions.courseid === selectedCourse).map(resp => resp.questions.questionid);
    return [...new Set(questionid)]; // Return only distinct question IDs if needed
  }, [selectedCourse, selectedQuiz, responses]);

  //. Debugging
  const showValues = () => {
    console.log('Selected Course:', selectedCourse, ', Quiz: ', selectedQuiz, ', Question: ', selectedQuestion);
    console.log('Selected Date:', dateFilterOption, ', Specific Month:', selectedMonth)
  }

  if (courselist && responses) {
  return (
    <>
    
    <Grid container spacing={customFontSize*4} alignItems="center" sx={{paddingX:'1rem'}}>
      {/* Course filter */}
      <Grid item xs={12} md={6} lg={3}>
      <Tooltip title = "Select a course" placement="top">
          <Stack direction='column'>
             <Typography variant='h6' sx={{fontSize:`${customFontSize}rem`}}>Select Course</Typography>
                <FormControl>
                  <Select value={selectedCourse} onChange={handleCourseChange} disabled={!courselist.length}>
                      {courselist.map(course => (
                      <MenuItem key={course.courseid} value={course.courseid}>
                        <Typography variant='h6' sx={{fontSize:`${customFontSize}rem`}}> { course.coursename }</Typography>
                      </MenuItem>
                      ))}
                  </Select>
              </FormControl>
          </Stack>
          </Tooltip>
      </Grid>

      {/* Quiz Number filter */}
      <Grid item xs={12} md={6} lg={3}>
        <Tooltip title = "Select a quiz number" placement="top">
          <Stack direction='column'>
              <Typography variant='h6' sx={{fontSize:`${customFontSize}rem`}}>Select Quiz Number</Typography>
              {quizzes.length > 0 ? 
              <FormControl>
                  <Select value={selectedQuiz} onChange={handleQuizChange}>
                      {quizzes.map((quiz, index) => (
                      <MenuItem key={index} value={quiz}>
                          {`Quiz ${quiz}`}
                      </MenuItem>
                  ))}
                  </Select>
              </FormControl>
              : 
              <Typography variant='h6' sx={{fontSize:`${customFontSize}rem`}}>Error - no data for this course found</Typography>
                }
          </Stack>
          </Tooltip>
      </Grid>
          
  
      {screenType === 'results' ? 
      <>
      {/* Date Filter - sits in its own section */}
      <Grid item xs={12} md={6} lg={3} alignSelf="flex-start">
          <Tooltip title="Select a date range" placement="top">
          <Stack direction='column' >
              <Typography variant='h6' sx={{fontSize:`${customFontSize}rem`}}>Select Date Range</Typography>
              <FormControl fullWidth>
                  <Select value={dateFilterOption} onChange={handleDateFilterChange}>
                      <MenuItem value='All Time'>All Time</MenuItem>
                      <MenuItem value='Last 7 Days'>Last 7 Days</MenuItem>
                      <MenuItem value='Current Month'>Current Month</MenuItem>
                      <MenuItem value='Specific Month'>Specific Month</MenuItem>
                  </Select>
              </FormControl>
          </Stack>
          </Tooltip>
      </Grid>

      <Grid item xs={12} md={6} lg={3} alignSelf="flex-start">
        <Tooltip placement="top" title = {dateFilterOption === 'Specific Month' ? "Select a specific month to view results for" : "This drop down only applies when date range is set to Specific Month"}>
          <Stack direction='column'>
          <Typography variant='h6' sx={{fontSize:`${customFontSize}rem`}}>Select Specific Month</Typography>
          <FormControl fullWidth>
              <Select value={selectedMonth} onChange={handleMonthChange} disabled={dateFilterOption !== 'Specific Month'}>
              {availableMonths.map((month, index) => (
                  <MenuItem key={index} value={month}>
                  {format(new Date(month + '-01'), 'MMM yyyy')}
                  </MenuItem>
              ))}
              </Select>
          </FormControl>
          </Stack>
          </Tooltip>
      </Grid>     
      </>
      : null}



  </Grid>

  </>
  );
} else {
  return (
    <Typography variant='h6' sx={{fontSize:`${customFontSize}rem`}}>Loading...</Typography>
  )
}
};

export default AdminFilters;