import React, { useState } from 'react';
import {
    Color,
    Container,
    ContainerDiagram,
    Form,
    Label,
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
import { ReactComponent as Arrow } from '../../images/Arrow.svg';

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
    { name: 'January', number: 1 },
    { name: 'February', number: 2 },
    { name: 'March', number: 3 },
    { name: 'April', number: 4 },
    { name: 'May', number: 5 },
    { name: 'June', number: 6 },
    { name: 'July', number: 7 },
    { name: 'August', number: 8 },
    { name: 'September', number: 9 },
    { name: 'October', number: 10 },
    { name: 'November', number: 11 },
    { name: 'December', number: 12 },
];
const year = [2022, 2021, 2020];

const Statistics = () => {
    const date = new Date();

    const [currentMonth, setCurrentMonth] = useState(date.getMonth() + 1);
    const [currentYear, setCurrentYear] = useState(date.getFullYear());

    const param = currentYear + '/' + currentMonth;

    const { data } = useStatisticaQuery(param);

    const handleChange = event => {
        if (event.target.id === 'Month') {
            setCurrentMonth(event.target.value);
        }
        if (event.target.id === 'Year') {
            setCurrentYear(event.target.value);
        }
    };

    const backgroundStyle = el => {
        for (const property in materialTheme.colors.category) {
            if (property === el?.category.toLowerCase()) {
                return materialTheme.colors.category[property];
            }
        }
    };

    const dataDiagram = {
        labels: [],
        datasets: [
            {
                label: '# of Votes',
                data: data ? data[1]?.expenseStatistic?.map(el => el?.totalSumByCategory) : 0,
                backgroundColor: data ? data[1]?.expenseStatistic?.map(el => backgroundStyle(el)) : 0,

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
                        &#8372; {data?.map(el => el.totalExpenseSum)}
                    </span>
                    <Doughnut data={dataDiagram} options={options}></Doughnut>
                </ContainerDiagram>
                <div>
                    <Form>
                        <Label>
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
                                        <option key={value.name} value={value.number}>
                                            {value.name}
                                        </option>
                                    );
                                })}
                            </Select>
                            <Arrow />
                        </Label>

                        <Label htmlFor="Year">
                            <Select
                                value={currentYear}
                                id="Year"
                                placeholder="Year"
                                label="Year"
                                onChange={handleChange}
                            >
                                <option disabled>Year</option>
                                {year.map(value => {
                                    return (
                                        <option key={value} value={value}>
                                            {value}
                                        </option>
                                    );
                                })}
                            </Select>
                            <Arrow />
                        </Label>
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
                                {data &&
                                    data[1]?.expenseStatistic.map(el => (
                                        <Tr key={el?.category}>
                                            <Td>
                                                <Color style={{ background: backgroundStyle(el) }} /> {el?.category}
                                            </Td>
                                            <Td>{el?.totalSumByCategory}</Td>
                                        </Tr>
                                    ))}
                            </Tbody>

                            <Tfoot>
                                <tr>
                                    <Td>Expenses:</Td>
                                    <Td style={{ color: '#FF6596' }}>{data?.map(el => el.totalExpenseSum)}</Td>
                                </tr>

                                <tr>
                                    <Td>Income:</Td>
                                    <Td style={{ color: '#24CCA7' }}> {data?.map(el => el.totalIncomeSum)} </Td>
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
