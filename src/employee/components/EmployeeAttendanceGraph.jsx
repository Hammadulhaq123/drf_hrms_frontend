import React, { PureComponent, useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AppContext } from '../../context/Context';


const EmployeeAttendanceGraph = () => {

    const data = [
        {
            name: 'Day 1',
            DT: 9,
            OT: 0,
        },
        {
            name: 'Day 2',
            OT: 2,
            DT: 9,
        },
        {
            name: 'Day 3',
            OT: 4,
            DT: 9,
        },
        {
            name: 'Day 4',
            OT: 3,
            DT: 9,
        },
        {
            name: 'Day 5',
            OT: 0,
            DT: 8,
        },
        {
            name: 'Day 6',
            OT: 7,
            DT: 9,
        },

    ];

    const { theme } = useContext(AppContext)

    return (
        <div className='w-full h-full pt-10 px-8'>
            <ResponsiveContainer wiOTh="100%" height="100%">
                <BarChart
                    wiOTh={500}
                    height={300}
                    data={data}

                >
                    <CartesianGrid />
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
