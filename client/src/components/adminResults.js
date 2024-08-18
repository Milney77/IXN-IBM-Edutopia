import React, { useState, useEffect, useContext } from 'react';
import { MenuItem, Select, FormControl, InputLabel, Box, Typography, Stack, Button } from '@mui/material';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';

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
        titleFont: { family: 'Arial', size: `${customFontSize*16}`},
        bodyFont: { family: 'Arial', size: `${customFontSize*16}`},


      },
    },
  };


  return (
    <div style={{ width: '100%', height: '65vh'}}>
      <Bar data={chartData} options={options} />
    </div>
  );
  };


const AdminResults = ({filteredResponses, customFontSize}) => {

    if (filteredResponses) {
      return (
        <Box>
          <Box sx={{width: '100%', 
                  height: '100%',
                  display: 'flex', 
                  flexDirection:'column',
                  alignItems: 'center',
                  justifyContent: 'center', 
                  paddingX:'1rem'}}>
            
              <Typography sx={{fontSize:`${customFontSize*1.5}rem`}}>Question Results</Typography>
              
              {filteredResponses.length > 0 ? 
                <Chart data={filteredResponses} customFontSize={customFontSize}/>
                :
                <Typography sx={{fontSize:`${customFontSize*1.5}rem` }}>Error - No data found for this course / quiz / time period.</Typography>}
            
          </Box>
        </Box>  
      )
    } 
}

export default AdminResults;

