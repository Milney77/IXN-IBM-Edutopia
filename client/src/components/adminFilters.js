import React, { useState, useMemo, useEffect } from 'react';
import { MenuItem, Select, FormControl, InputLabel, Box, Grid, Stack, Typography, Button, Tooltip } from '@mui/material';
import { format } from 'date-fns';
import './custom.css';

const AdminFilters = ({ courselist, questions, responses, onFilterChange, screenType, customFontSize }) => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedQuiz, setSelectedQuiz] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState('');
    
  // Date parameters
  const [selectedDateRange, setSelectedDateRange] = useState(null);
  const [dateFilterOption, setDateFilterOption] = useState('All Time');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [availableMonths, setAvailableMonths] = useState([]);

  // Handler for course change
  const handleCourseChange = (event) => {
    const courseId = event.target.value;
    setSelectedCourse(courseId);
    // Changing the selected course should now trigger defaults for quiz number and question.
    onFilterChange({ courseId, quizNumber: selectedQuiz, questionId: selectedQuestion, dateFilterOption: dateFilterOption, selectedMonth: selectedMonth });
  };

  // And for quiz change - set questions to 'All' (in case user has selected a question, and then changes the quiz number, resulting in the question selection not being valid)
  const handleQuizChange = (event) => {
    const quizNumber = event.target.value;
    setSelectedQuiz(quizNumber);
    // Changing the selected course should now trigger defaults question.
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
    if (courselist && questions) {
      const courseid = Math.min(...courselist.map(course => course.courseid));
      const filteredResponses = questions.filter((q) => q.courseid === courseid);
      const minQuiz = Math.min(...filteredResponses.map(q => q.quiznumber));
      setSelectedQuiz(minQuiz);
    }
  }, [responses]);

 

  // FILTERING 
  // WHen a user picks a course, the quiz numbers are based on what is available in that course.
  // Derived options based on course selection
  const quizzes = useMemo(() => {
    const quizNumbers = questions.filter(q => q.courseid === selectedCourse).map(q => q.quiznumber);
    return [...new Set(quizNumbers.sort())];
  }, [selectedCourse, questions]);

  // When a user picks a quiz, the questions are updated to reflect the course that they have picked.
  const questionList = useMemo(() => {
    const questionid = questions.filter(q => q.quiznumber === selectedQuiz && q.courseid === selectedCourse).map(q => q.questionid);
    return [...new Set(questionid)]; // Return only distinct question IDs if needed
  }, [selectedCourse, selectedQuiz, questions]);

  // Now, have an issue where these constants may not update in time for them to be used by the handleCourseChange and handleQuizChange functions.
  // So instead, lets use the useEffect to set defaults.  These useEffect statements should trigger when course / quiz selections change in the same way the useMemo functions are triggered.
  useEffect(() => {
    if (quizzes.length > 0) {setSelectedQuiz(quizzes[0]);}
    else {setSelectedQuiz('');}
  }, [quizzes, selectedCourse]);

  useEffect(() => {
    if (questionList.length > 0) {setSelectedQuestion(questionList[0]);}
    else {setSelectedQuestion(''); }
  }, [questionList, selectedCourse, selectedQuiz]);

  // And to fix an issue when a course doesn't have quizzes, the user then selects a course that does, need to make sure the quizzes & questions are updated.
  useEffect(() => {
    if (selectedCourse && selectedQuiz) {
      onFilterChange({
        courseId: selectedCourse,
        quizNumber: selectedQuiz,
        questionId: selectedQuestion,
        dateFilterOption,
        selectedMonth
      });
    }
  }, [selectedQuiz, selectedQuestion]); 

  //. Debugging
  const showValues = () => {
    console.log('Selected Course:', selectedCourse, ', Quiz: ', selectedQuiz, ', Question: ', selectedQuestion);
    console.log('Selected Date:', dateFilterOption, ', Specific Month:', selectedMonth)
  }
  
  // Font control
  const titleFontMod = 1;
  const bodyFontMod = 0.5;


  if (courselist && questions) {
  return (
    <>
    
    <Grid container spacing={customFontSize*4} alignItems="top" sx={{paddingX:'1rem', paddingY:'1rem'}}>
      {/* Course filter */}
      <Grid item xs={12} md={6} lg={3}>
      <Tooltip title = "Select a course" placement="top">
          <Stack direction='column'>
             <Typography variant='h6' sx={{fontSize:`${customFontSize*titleFontMod}rem`}}>Select Course</Typography>
                <FormControl>
                  <Select value={selectedCourse} onChange={handleCourseChange} disabled={!courselist.length}>
                      {courselist.map(course => (
                      <MenuItem key={course.courseid} value={course.courseid}>
                        <Typography variant='h6' sx={{fontSize:`${customFontSize*bodyFontMod}rem`}}> { course.coursename }</Typography>
                      </MenuItem>
                      ))}
                  </Select>
              </FormControl>
          </Stack>
          </Tooltip>
      </Grid>

      {/* Quiz Number filter */}
      {screenType === 'courseedit' ? 
        null
      : 
      <Grid item xs={12} md={6} lg={3}>
        <Tooltip title = "Select a quiz number" placement="top">
          <Stack direction='column'>
              <Typography variant='h6' sx={{fontSize:`${customFontSize*titleFontMod}rem`}}>Select Quiz Number</Typography>
              {quizzes.length > 0 ? 
              <FormControl>
                  <Select value={selectedQuiz} onChange={handleQuizChange}>
                      {quizzes.map((quiz, index) => (
                      <MenuItem key={index} value={quiz}>
                          <Typography variant='h6' sx={{fontSize:`${customFontSize*bodyFontMod}rem`}}>{`Quiz ${quiz}`}</Typography>
                      </MenuItem>
                  ))}
                  </Select>
              </FormControl>
              : 
              <Typography variant='h6' sx={{fontSize:`${customFontSize*bodyFontMod}rem`}}>Error - no data for this course found</Typography>
                }
          </Stack>
          </Tooltip>
      </Grid>
           }
  
      {screenType === 'results' ? 
      <>
      {/* Date Filter - sits in its own section */}
      <Grid item xs={12} md={6} lg={3} alignSelf="flex-start">
          <Tooltip title="Select a date range" placement="top">
          <Stack direction='column' >
              <Typography variant='h6' sx={{fontSize:`${customFontSize*titleFontMod}rem`}}>Select Date Range</Typography>
              <FormControl fullWidth>
                  <Select value={dateFilterOption} onChange={handleDateFilterChange}>
                      <MenuItem value='All Time'>
                        <Typography variant='h6' sx={{fontSize:`${customFontSize*bodyFontMod}rem`}}>All Time</Typography></MenuItem>
                      <MenuItem value='Last 7 Days'>
                        <Typography variant='h6' sx={{fontSize:`${customFontSize*bodyFontMod}rem`}}>Last 7 Days</Typography></MenuItem>
                      <MenuItem value='Current Month'>
                        <Typography variant='h6' sx={{fontSize:`${customFontSize*bodyFontMod}rem`}}>Current Month</Typography></MenuItem>
                      <MenuItem value='Specific Month'>
                        <Typography variant='h6' sx={{fontSize:`${customFontSize*bodyFontMod}rem`}}>Specific Month</Typography></MenuItem>
                  </Select>
              </FormControl>
          </Stack>
          </Tooltip>
      </Grid>

      <Grid item xs={12} md={6} lg={3} alignSelf="flex-start">
        <Tooltip placement="top" title = {dateFilterOption === 'Specific Month' ? "Select a specific month to view results for" : "This drop down only applies when date range is set to Specific Month"}>
          <Stack direction='column'>
          <Typography variant='h6' sx={{fontSize:`${customFontSize*titleFontMod}rem`}}>Select Specific Month</Typography>
          <FormControl fullWidth>
              <Select value={selectedMonth} onChange={handleMonthChange} disabled={dateFilterOption !== 'Specific Month'}>
              {availableMonths.map((month, index) => (
                  <MenuItem key={index} value={month}>
                  <Typography variant='h6' sx={{fontSize:`${customFontSize*bodyFontMod}rem`}}>{format(new Date(month + '-01'), 'MMM yyyy')}</Typography>
                  </MenuItem>
              ))}
              </Select>
          </FormControl>
          </Stack>
          </Tooltip>
      </Grid>     
      </>
      : null }
        
      {screenType === 'questionedit' ? 
       <Grid item xs={12} md={6} lg={6}>
       <Tooltip title = "Select a question" placement="top">
         <Stack direction='column'>
             <Typography variant='h6' sx={{fontSize:`${customFontSize*titleFontMod}rem`}}>Select Question</Typography>
             {questionList.length > 0 ? 
             <FormControl>
                 <Select value={selectedQuestion} onChange={handleQuestionChange}>
                     {questionList.map((questionid, index) => {
                    const questiontext = questions.find(q => q.questionid === questionid).questiontext;
                    const shortquestiontext = questiontext.length >= 50 ? `${questiontext.slice(0,50)}...` : questiontext;
                      return (
                     <MenuItem key={index} value={questionid}>
                         <Typography variant='h6' sx={{fontSize:`${customFontSize*bodyFontMod}rem`}}>{`Question ${index+1}: ${shortquestiontext}`}</Typography>
                     </MenuItem>
                      )
                 })}
                 </Select>
             </FormControl>
             : 
             <Typography variant='h6' sx={{fontSize:`${customFontSize*titleFontMod}rem`}}>Error - no data for this course found</Typography>
               }
         </Stack>
         </Tooltip>
     </Grid>
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