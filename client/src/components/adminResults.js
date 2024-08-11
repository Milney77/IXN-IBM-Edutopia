import React, { useState, useEffect, useContext } from 'react';
import { MenuItem, Select, FormControl, InputLabel, Box, Typography, Button } from '@mui/material';
import AdminFilters from './adminFilters';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { format, min, max, startOfWeek, endOfWeek, startOfMonth, endOfMonth, isSameDay, differenceInCalendarDays, isAfter, isBefore, subDays } from 'date-fns';


// Set some chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  

// Create a chart component to use in the dashboard.
// Maybe should stick this in its own file, but it is only used here.
const Chart = ({ data, customFontSize }) => {
        
    // Group up the data to the right level
    const groupedData = data.reduce((acc, curr) => {
      const questionText = curr.questions.questiontext;
      if (!acc[questionText]) {
        // Create a question number based on where this question appears in the data
        const questionNumber = Object.keys(acc).length + 1
        acc[questionText] = { total: 0, correct: 0, text: questionNumber + ':' + questionText };
      }
      acc[questionText].total += curr.timesasked;
      acc[questionText].correct += curr.timescorrect + curr.timescorrectwithhint;
      return acc;
    }, {});

    // Create arrays for the labels & data
    const labels = Object.values(groupedData).map(group => 
      group.text.length > 50 ? `${group.text.substring(0, 50)}...`: group.text
    );
    // Have the full label available for tool tips - but split it into lines of 100 characters each.
    const wrapLabel = (label) => {
      const maxLineLength = 100;
      const lines = [];
      for (let i = 0; i < label.length; i += maxLineLength) {
        lines.push(label.substring(i, i + maxLineLength));
      }
      return lines;
    };
    const fullLabels = Object.values(groupedData).map(group => wrapLabel(group.text));
    // Calculate percentages
    const percentages = Object.values(groupedData).map(group => {
        const { total, correct } = group;
        return (correct / total) * 100;
    });
  
    // Setup chart data
    const chartData = {
      labels,
      datasets: [
          {
              label: 'Percentage of Correct Responses',
              data: percentages,
              backgroundColor: 'rgba(75, 192, 255, 0.6)',
          },
      ],
  };
  //// Step 4: Configure chart options
  const options = {
    responsive: true, 
    maintainAspectRatio: false, 
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Percentage Correct',
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `     ${tooltipItem.raw.toFixed(2)}% correct`;
          },
          title: function (tooltipItems) {
            // Show the full label in the tooltip title
            return fullLabels[tooltipItems[0].dataIndex];
          }
        },
        // Tooltip fonts & display
        titleFont: { family: 'Arial', size: `${customFontSize*16*1.5}`, style: 'bold', weight: 'bold',},
        bodyFont: { family: 'Arial', size: `${customFontSize*16*1.5}`, style: 'normal', weight: 'normal',},


      },
    },
  };


  return (
    <div style={{ width: '100%', height: '70vh'}}>
      <Bar data={chartData} options={options} />
    </div>
  );
  };


const AdminResults = ({courselist, responseData}) => {

    const customFontSize = 1;

    // Responses set to the question response data we extracted.
    const [filteredResponses, setFilteredResponses] = useState(responseData);
    // Sometimes the responseData isn't loaded when the useState is first rendered - so make sure it gets populated when responseData does become available.
    useEffect(() => {
        setFilteredResponses(responseData);
    }, [responseData]);

    // Apply the results of the filtering
    const handleFilterChange = (filter) => {
        const { courseId, quizNumber, questionId, dateFilterOption, selectedMonth } = filter;
        console.log(courseId, quizNumber, questionId, dateFilterOption, selectedMonth)
        let filtered = responseData;
        // Now filter down to course, quiz & question (if they are set)
        if (courseId) {
          filtered = filtered.filter(r => r.questions.courseid === courseId);
        }
        if (quizNumber) {
          filtered = filtered.filter(r => r.questions.quiznumber === quizNumber);
        }

       // Date range filtering
       const today = new Date();
       // Filtering depends on the option chosen:
       if (dateFilterOption === 'Last 7 Days') {
            const last7Days = subDays(today, 7);
            filtered = filtered.filter(r => {
                const responseDate = new Date(r.year, r.month - 1, r.day);
                return isAfter(responseDate, last7Days) || isSameDay(responseDate, last7Days);
            });
        } else if (dateFilterOption === 'Current Month') {
            const startOfCurrentMonth = startOfMonth(today);
            const endOfCurrentMonth = endOfMonth(today);
            filtered = filtered.filter(r => {
                const responseDate = new Date(r.year, r.month - 1, r.day);
                return isAfter(responseDate, startOfCurrentMonth) && isBefore(responseDate, endOfCurrentMonth);
            });
        } else if (dateFilterOption === 'Specific Month' && selectedMonth) {
            const [year, month] = selectedMonth.split('-');
            const startOfSelectedMonth = new Date(year, month - 1, 1);
            const endOfSelectedMonth = endOfMonth(startOfSelectedMonth);
            filtered = filtered.filter(r => {
                const responseDate = new Date(r.year, r.month - 1, r.day);
                return isAfter(responseDate, startOfSelectedMonth) && isBefore(responseDate, endOfSelectedMonth);
            });
        }
        setFilteredResponses(filtered);
    };

    useEffect(() => {
      // Define default filter values
      const courseid = Math.min(...courselist.map(course => course.courseid));
      const filteredResponses = responseData.filter((resp) => resp.questions.courseid === courseid);
      const minQuiz = Math.min(...filteredResponses.map(resp => resp.questions.quiznumber));

      const defaultFilter = {
          courseId: courseid,
          quizNumber: minQuiz,
          questionId: null,
          dateFilterOption: 'All Time', 
          selectedMonth: null,
      };

      // Apply the default filter when the component mounts
      handleFilterChange(defaultFilter);
  }, [responseData]);

    if (filteredResponses) {
      return (
        <Box sx={{backgroundImage: 'url(/images/other/background_lightfabric.jpg)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto'}}>
              <Typography variant='h3' sx={{}}>Admin Results Page</Typography>
              <AdminFilters courselist={courselist} responses={responseData} onFilterChange={handleFilterChange} screenType='results' customFontSize = {customFontSize}/>
              <Box sx={{width: '100%', 
                      height: '100%',
                      display: 'flex', 
                      alignItems: 'center',
                      justifyContent: 'center', 
                      paddingX:'1rem'}}>
                <Chart data={filteredResponses} customFontSize={customFontSize}/>
              </Box>
        </Box>  
      )
    } 
}

export default AdminResults;

