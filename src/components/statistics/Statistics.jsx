import React from 'react';
import { Container } from './Statistics.styled';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Chart, Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = () => {
    const data = {
        labels: [],
        datasets: [
            {
                label: '# of Votes',
                data: [3, 12, 4],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],

                borderWidth: 0,
                hoverOffset: 4,
                cutout: '70%',
            },
        ],
    };

    const options = {
        elements: {
            center: {
                text: 'Red is 2/3 the total numbers',
                color: '#FF6384', // Default is #000000
                fontStyle: 'Arial', // Default is Arial
                sidePadding: 20, // Default is 20 (as a percentage)
                minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
                lineHeight: 25, // Default is 25 (in px), used for when text wraps
            },
        },
    };

    return (
        <Container>
            Statistic
            {/* <Doughnut data={data} options={options} /> */}
            <div style={{ position: 'relative' }}>
                <Doughnut data={data} options={options} width={200} height={200} />
                <div
                    style={{
                        position: 'absolute',
                        width: '100%',
                        top: '50%',
                        left: 0,
                        textAlign: 'center',
                        marginTop: '-28px',
                        lineHeight: '20px',
                    }}
                >
                    <span>Тут буде сума грошей</span>
                </div>
            </div>
        </Container>
    );
};

export default Statistics;
