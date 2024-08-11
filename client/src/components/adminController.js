import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { DimensionsContext } from './dimensionsContext';

import { Box, Typography, Button, Stack, Grid, Tooltip } from '@mui/material';

import AdminResults from './adminResults';


const AdminScreen = ({handleAdminExit}) => {

    // Get the course list
    const [courselist, setCourseList] = useState([]);
    useEffect(() => {
        const fetchCourseList = async () => {
            try {
                const response = await axios.get('http://localhost:3001/courselist');
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

    // Temp function to show the data that has been fetched.
    const showAdminData = () => {
        console.log('Courses:', courselist);
        console.log('Questions: ', questions);
        console.log('Responses:', questionResponses);
    }


    // What is being shown?
    const [showResults, setShowResults] = useState(true);
    const [showEdit, setShowEdit] = useState(false);

    const handleViewClick = () => {
        setShowResults(true);
        setShowEdit(false);
    }

    const handleEditClick = () => {
        setShowResults(false);
        setShowEdit(true);
    }



    return (
    <>
    <Grid container>
        {showEdit ? 
        <Grid item xs={12} md={6}>
            <Button variant='contained' onClick={handleViewClick}>View Results</Button>
        </Grid> : 
        <Grid item xs={12} md={6}>
            <Button variant='contained' onClick={handleEditClick}>Edit Question Data (TODO)</Button>
        </Grid> }
        <Grid item xs={12} md={6}>
            <Button variant='contained' onClick={handleAdminExit}>Exit</Button>
        </Grid>
    </Grid>
    
    
     {(showResults && courselist && questionResponses) ? (
        <AdminResults
            courselist = {courselist}
            responseData = {questionResponses}
        />
        ) : showResults ? 
            <Typography variant='h2'>Error</Typography>
          : null
        }

    {(showEdit) ?
        <Typography variant='h2' sx={{color: 'white'}}>QUESTION EDITS TO BE DONE</Typography>
    : null }
    <Button variant='contained' onClick={showAdminData}>debugging - DATA</Button>
    
    </>

    );
}

export default AdminScreen;
