import React, { useState, useEffect, useContext } from 'react';
import {  Box, Typography, Grid, Divider } from '@mui/material';

const AdminTitle = ({customFontSize}) => {

    const titleFontMod = 1;
    const valueFontMod = 0.75;

    return (
        <Box sx={{display:'flex', justifyContent:'center'}}>
            <Grid container sx={{width: '100%', maxWidth: '1600px', marginY: '1rem'}} spacing={2}>
                <Grid item xs={3}>
                    <Typography variant="h4" align='left' sx={{fontSize:`${customFontSize*titleFontMod}rem`, fontWeight: 'bold' }}>
                        Player Results
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="h4" align='left' sx={{fontSize:`${customFontSize*valueFontMod}rem`}}>
                        This is where you can see the % of correct responses by question. <br />
                        Select a course and quiz number to see all the questions in that quiz. <br />
                        By default, results are shown for all time, but you can select different time periods.
                    </Typography>
                </Grid>
                <Grid item xs={12}><Divider/></Grid>

                <Grid item xs={3}>
                    <Typography variant="h4" align='left' sx={{fontSize:`${customFontSize*titleFontMod}rem`, fontWeight: 'bold' }}>
                        Course
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="h4" align='left' sx={{fontSize:`${customFontSize*valueFontMod}rem`}}>
                        Here you can edit details of existing courses (name, badge icon etc). You can also delete courses. <br />
                        As an alternative to deletion, you can also disable courses so that users cannot select it when starting a new game. <br />
                        Finally you can create a new course.
                    </Typography>
                </Grid>
                <Grid item xs={12}><Divider/></Grid>

                <Grid item xs={3}>
                    <Typography variant="h4" align='left' sx={{fontSize:`${customFontSize*titleFontMod}rem`, fontWeight: 'bold' }}>
                        Questions
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="h4" align='left' sx={{fontSize:`${customFontSize*valueFontMod}rem`}}>
                        Here you can edit details of existing questions - from the question text, answers, hints etc. <br />
                        You can also disable a question so it will never be served to a player, even if they select the course it is from. <br />
                        Or you can delete the question permanently. <br/>
                        Finally you can create a new question.  Note you have to assign it to a course, so if you are creating a new course, do that first, then create the questions.
                    </Typography>
                </Grid>
                <Grid item xs={12}><Divider/></Grid>

                <Grid item xs={3}>
                    <Typography variant="h4" align='left' sx={{fontSize:`${customFontSize*titleFontMod}rem`, fontWeight: 'bold' }}>
                        Users
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="h4" align='left' sx={{fontSize:`${customFontSize*valueFontMod}rem`}}>
                        This simple page shows all the Admin users currently in the database. <br />
                        You can add and delete users from this page.
                    </Typography>
                </Grid>
                <Grid item xs={12}><Divider/></Grid>
            </Grid>
        </Box>
    )
}

export default AdminTitle;