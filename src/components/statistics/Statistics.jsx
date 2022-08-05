import React, { useState } from 'react';
import {
    Color,
    Container,
    ContainerDiagram,
    Form,
    Select,
    Table,
    Tbody,
    Td,
    Tfoot,
    Theader,
    Tr,
} from './Statistics.styled';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { materialTheme } from 'helpers/theme';
import { useStatisticaQuery } from 'redux/transactionAPI';

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
    const getStatistic = useStatisticaQuery();

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
            category: 'Other',
            sum: 1200,
        },
        {
            category: 'Car',
            sum: 500,
        },
        {
            category: 'Products',
            sum: 750,
        },
    ];

    const backgroundStyle = el => {
        for (const property in materialTheme.colors.category) {
            if (property === el.category.toLowerCase()) {
                return materialTheme.colors.category[property];
            }
        }
    };

    const dataDiagram = {
        labels: [],
        datasets: [
            {
                label: '# of Votes',
                data: dataTable.map(el => el.sum),
                backgroundColor: dataTable.map(el => backgroundStyle(el)),

                borderWidth: 0,
                hoverOffset: 4,
                cutout: '70%',
            },
        ],
    };

    return (
        <>
            <Container>
                <p style={{ width: '100%' }}>Statistics</p>
                <ContainerDiagram>
                    <span
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontWeight: '700',
                            fontSize: '18px',
                            lineHeight: '27px',
                        }}
                    >
                        &#8372; 24 000
                    </span>
                    <Doughnut data={dataDiagram} options={options}></Doughnut>
                </ContainerDiagram>

                <div>
                    <Form>
                        <Select
                            value={currentMonth}
                            id="Month"
                            placeholder="Month"
                            label="Month"
                            onChange={handleChange}
                        >
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
                    {currentMonth !== 'Month' && currentYear !== 'Year' && (
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
                                            <Color style={{ background: backgroundStyle(el) }} /> {el.category}
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
                    )}
                </div>
            </Container>
        </>
    );
};

export default Statistics;
