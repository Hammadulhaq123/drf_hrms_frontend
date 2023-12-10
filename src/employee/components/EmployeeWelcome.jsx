import React, { useContext } from 'react'
import { AppContext } from '../../context/Context'

const EmployeeWelcome = () => {

    const { theme, primary_bg } = useContext(AppContext);


    return (
        <div className={`w-full h-32 p-4 flex justify-start items-center ${primary_bg} rounded-md`}>

        </div>
    )
}

export default EmployeeWelcome
