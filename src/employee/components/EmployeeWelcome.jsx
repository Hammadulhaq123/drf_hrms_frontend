import React, { useContext } from 'react'
import { AppContext } from '../../context/Context'

const EmployeeWelcome = () => {

    const { theme, primary_text } = useContext(AppContext);


    return (
        <div className={`w-full h-auto p-4 flex justify-start items-center ${primary_text} rounded-md`}>
            <span className='text-5xl font-bold'>
                Welcome JackAnderson
            </span>
        </div>
    )
}

export default EmployeeWelcome
