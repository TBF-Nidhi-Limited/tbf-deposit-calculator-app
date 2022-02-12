import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { blue, deepOrange, green, orange, red, yellow } from '@mui/material/colors';
import Chart from 'react-apexcharts';


const ChartData = ({intrest,invested,mode,type,total}) => {
    const theme=useTheme()

    const colorslight =  [blue[500], red[500]] 
    const colorsdark =    [blue[500], red[500]] 




    const getDaysInMonth = (month, year) => {
        var date = new Date(year, month, 1);
        var days = [];
        var idx = 0;
        while (date.getMonth() === month && idx < 15) {
            var d = new Date(date);
            days.push(d.getDate() + ' ' + d.toLocaleString('en-us', { month: 'short' }));
            date.setDate(date.getDate() + 1);
            idx += 1;
        }
        return days;
    };

    const now = new Date();
    const labels = getDaysInMonth(now.getMonth() + 1, now.getFullYear());

    const apexOpts = {
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        chart: {
            type: 'donut',
            parentHeightOffset: 0,
            stroke: {
                show: false,
                   
            },
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        zoom: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        labels: ['Invested', 'Interest'],
        colors: !mode ? colorslight:colorsdark,
        xaxis: {
            type: 'string',
            categories: labels,
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: true,
            },
            labels: {},
        },
        yaxis: {
            labels: {
                formatter: function(val) {
                    return '₹'+val;
                },
                offsetX: -15,
            },
        },
    };

    const apexData = [invested,type=='fd'?total:intrest];

    return (
        <Chart options={apexOpts} series={apexData} type="pie" className="apex-charts mt-3" height={236} />
    );
};

export default ChartData;
