import React, { useContext } from 'react'
import EmployeeAttendanceGraph from './EmployeeAttendanceGraph'
import { Link } from "react-router-dom";
import EmployeeCheckInOut from './EmployeeCheckInOut'
import { AppContext } from '../../context/Context'
import EmployeeMonthlyStatsPieChart from './EmployeeMonthlyStatsPieChart'
import { MdOutlineArrowOutward } from 'react-icons/md';

const EmployeeStats = () => {

    const { theme, dark_contrast, light_contrast, dark_background, primary_bg } = useContext(AppContext);

    return (
        <div className={`w-full h-[50rem] md:h-96 flex flex-col justify-start items-start gap-3  rounded-md `}>
            <div className={`w-full h-[15%] flex items-center justify-between px-6 ${theme == 'dark' ? dark_contrast : light_contrast} text-2xl font-bold rounded-md`}>
                <span>
                    Attendance Stats
                </span>

                <Link to="/employee/auth/login/" className={`w-8 h-8 rounded-md flex items-center justify-center ${primary_bg}`}>
                    <MdOutlineArrowOutward className='text-xl' />

                </Link>
            </div>
            <div className='w-full h-[85%] flex flex-col md:flex-row gap-3 justify-start items-start'>
                <EmployeeAttendanceGraph />
                <EmployeeMonthlyStatsPieChart />

            </div>
        </div>
    )
}

export default EmployeeStats
