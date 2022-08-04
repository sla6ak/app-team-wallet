import React, { useState } from 'react';
import { Color, Container, Form, Select, Table, Tbody, Td, Tfoot, Theader, Tr } from './Statistics.styled';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

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
const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const year = [2022, 2021, 2020];

const Statistics = () => {
    const [currentMonth, setCurrentMonth] = useState('Month');
    const [currentYear, setCurrentYear] = useState('Year');

    const handleChange = event => {
        if (event.target.id === 'Month') {
            setCurrentMonth(event.target.value);
        }
        if (event.target.id === 'Year') {
            setCurrentYear(event.target.value);
        }
    };

    const dataTable = [
        {
            category: 'Home',
            sum: 1200,
            color: '#fed057',
        },
        {
            category: 'Car',
            sum: 500,
            color: '#FD9498',
        },
    ];

    const dataDiagram = {
        labels: [],
        datasets: [
            {
                label: '# of Votes',
                data: dataTable.map(el => el.sum),
                backgroundColor: dataTable.map(el => el.color),

                borderWidth: 0,
                hoverOffset: 4,
                cutout: '70%',
            },
        ],
    };

    return (
        <Container>
            Statistic
            {/* <Doughnut data={data} options={options} /> */}
            <div style={{ position: 'relative', marginBottom: '32px' }}>
                <Doughnut data={dataDiagram} options={options} />
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
                    <span>&#8372; 24 000</span>
                </div>
            </div>
            <Form>
                <Select value={currentMonth} id="Month" placeholder="Month" label="Month" onChange={handleChange}>
                    <option disabled>Month</option>
                    {month.map(value => {
                        return (
                            <option key={value} value={value}>
                                {value}
                            </option>
                        );
                    })}
                </Select>

                <Select value={currentYear} id="Year" placeholder="Year" label="Year" onChange={handleChange}>
                    <option disabled>Year</option>
                    {year.map(value => {
                        return (
                            <option key={value} value={value}>
                                {value}
                            </option>
                        );
                    })}
                </Select>
            </Form>
            <Table>
                <Theader>
                    <tr
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alightItem: 'center',
                            width: '100%',
                        }}
                    >
                        <Td>Category</Td>
                        <Td>Sum</Td>
                    </tr>
                </Theader>
                <Tbody>
                    {dataTable.map(el => (
                        <Tr key={el.category}>
                            <Td>
                                <Color style={{ background: el.color }} /> {el.category}
                            </Td>
                            <Td>{el.sum}</Td>
                        </Tr>
                    ))}
                </Tbody>

                <Tfoot>
                    <tr>
                        <Td>Expenses:</Td>
                        <Td style={{ color: '#FF6596' }}>expenses sum</Td>
                    </tr>

                    <tr>
                        <Td>Income:</Td>
                        <Td style={{ color: '#24CCA7' }}> income sum</Td>
                    </tr>
                </Tfoot>
            </Table>
        </Container>
    );
};

export default Statistics;
