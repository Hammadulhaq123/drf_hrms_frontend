
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const EmployeeLeavesPieChart = () => {


const data = [
  { name: 'Taken', value: 8 },
  { name: 'Remaining', value: 3 }
];

const COLORS = ['#F27121', '#E94057'];

const RADIAN = Math.PI / 180;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmployeeLeavesPieChart;
