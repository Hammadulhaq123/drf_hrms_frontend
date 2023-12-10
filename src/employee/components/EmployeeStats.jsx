import React, { useContext } from 'react'
import EmployeeAttendanceGraph from './EmployeeAttendanceGraph'
import EmployeeCheckInOut from './EmployeeCheckInOut'
import { AppContext } from '../../context/Context'

const EmployeeStats = () => {

    const { theme, dark_contrast, light_contrast } = useContext(AppContext);

    return (
        <div className={`w-full h-72 flex justify-start items-start rounded-md ${theme == 'dark' ? dark_contrast : light_contrast}`}>
            <EmployeeAttendanceGraph />
        </div>
    )
}

export default EmployeeStats
