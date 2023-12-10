import React, { PureComponent, useContext } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { AppContext } from '../../context/Context';

const EmployeeMonthlyStatsPieChart = () => {

    const data01 = [
        { day: '1', value: 400 },
        { day: '2', value: 300 },
        { day: '3', value: 300 },
        { day: '4', value: 200 },
        { day: '1', value: 400 },
        { day: '2', value: 300 },
        { day: '3', value: 300 },
        { day: '4', value: 200 },
        { day: '1', value: 400 },
        { day: '2', value: 300 },
        { day: '3', value: 300 },
        { day: '4', value: 200 },
    ];
    const data02 = [
        { day: '1', value: 100 },
        { day: '2', value: 300 },
        { day: '1', value: 100 },
        { day: '2', value: 80 },
        { day: '3', value: 40 },
        { day: '4', value: 30 },
        { day: '5', value: 50 },
        { day: '1', value: 100 },
        { day: '2', value: 200 },
        { day: '1', value: 150 },
        { day: '2', value: 50 },
    ];

    const { theme, dark_contrast, light_contrast } = useContext(AppContext)


    return (
        <div className={`${theme == 'dark' ? dark_contrast : light_contrast} rounded-md w-1/2 lg:w-[20%] h-full p-2 flex items-center justify-center`}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={100} height={100}>
                    <Tooltip />
                    <Pie data={data01} dataKey="value" outerRadius={60} fill="#F27121" />
                    <Pie data={data02} dataKey="value" innerRadius={70} outerRadius={90} fill="#E94057" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default EmployeeMonthlyStatsPieChart
