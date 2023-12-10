import React, { PureComponent, useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AppContext } from '../../context/Context';


const EmployeeAttendanceGraph = () => {

    const data = [
        {
            name: '1',
            DT: 9,
            OT: 0,
        },
        {
            name: '2',
            OT: 2,
            DT: 9,
        },
        {
            name: '3',
            OT: 4,
            DT: 9,
        },
        {
            name: '4',
            OT: 3,
            DT: 9,
        },
        {
            name: '5',
            OT: 0,
            DT: 8,
        },
        {
            name: '6',
            OT: 7,
            DT: 9,
        },
        {
            name: '7',
            DT: 9,
            OT: 0,
        },
        {
            name: '8',
            OT: 2,
            DT: 9,
        },
        {
            name: '9',
            OT: 4,
            DT: 9,
        },
        {
            name: '10',
            OT: 3,
            DT: 9,
        },
        {
            name: '11',
            OT: 0,
            DT: 8,
        },
        {
            name: '12',
            OT: 7,
            DT: 9,
        },
        {
            name: '13',
            DT: 9,
            OT: 0,
        },
        {
            name: '14',
            OT: 2,
            DT: 9,
        },
        {
            name: '15',
            OT: 4,
            DT: 9,
        },
        {
            name: '16',
            OT: 3,
            DT: 9,
        },
        {
            name: '17',
            OT: 0,
            DT: 8,
        },
        {
            name: '18',
            OT: 7,
            DT: 9,
        },
        {
            name: '19',
            DT: 9,
            OT: 0,
        },
        {
            name: '20',
            OT: 2,
            DT: 9,
        },
        {
            name: '21',
            OT: 4,
            DT: 9,
        },
        {
            name: '22',
            OT: 3,
            DT: 9,
        },
        {
            name: '23',
            OT: 0,
            DT: 8,
        },
        {
            name: '24',
            OT: 7,
            DT: 9,
        },
        {
            name: '25',
            OT: 1,
            DT: 9,
        },
        {
            name: '26',
            OT: 7,
            DT: 9,
        },
        {
            name: '27',
            OT: 4,
            DT: 9,
        },
        {
            name: '28',
            OT: 1,
            DT: 9,
        },
        {
            name: '29',
            OT: 3,
            DT: 9,
        },
        {
            name: '30',
            OT: 2,
            DT: 9,
        },
        {
            name: '31',
            OT: 7,
            DT: 9,
        },

    ];

    const { theme, dark_background, light_background, dark_contrast, light_contrast } = useContext(AppContext)

    return (
        <div className={`w-1/2 lg:w-[80%] h-full  flex items-center md:pt-8 md:pr-8 rounded-md justify-center ${theme == 'dark' ? dark_contrast : light_contrast}`}>
            <ResponsiveContainer wiOTh="100%" height="100%">
                <BarChart
                    width={100}
                    height={200}
                    data={data}

                >
                    {/* <CartesianGrid /> */}
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="DT" fill="#F27121" background={{ fill: `${theme == 'dark' ? '#1c1c1c' : '#eee'}` }} />
                    <Bar dataKey="OT" fill="#E94057" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default EmployeeAttendanceGraph
