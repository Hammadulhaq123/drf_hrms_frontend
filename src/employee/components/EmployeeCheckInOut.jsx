import React, { useContext } from 'react'
import { AppContext } from "../../context/Context"
const EmployeeCheckInOut = () => {

    const { theme, dark_background, light_background, dark_contrast, light_contrast } = useContext(AppContext)
    return (
        <div className={`w-1/2 lg:w-[30%] h-full  flex flex-col justify-start items-start p-2 gap-2 ${theme == 'dark' ? dark_contrast : light_contrast}`}>
            <div className='w-full h-1/2 flex items-center justify-center gap-2'>
                <div className={`w-1/2 h-full rounded-md ${theme == 'dark' ? dark_background : light_background} flex items-center justify-center`}>

                </div>
                <div className={`w-1/2 h-full rounded-md ${theme == 'dark' ? dark_background : light_background} flex items-center justify-center`}>

                </div>
            </div>
            <div className='w-full h-1/2 flex flex-col gap-2 justify-center items-center'>
                <button className={`w-full h-10 rounded-full flex gap-2 outline-none border-none px-1 justify-start items-center ${theme == 'dark' ? dark_background : light_background}`}>
                    <span className='bg-green-500 w-12 h-8 rounded-full flex items-center justify-center'>

                    </span>
                    <span className='text-lg font-medium'>
                        Check In
                    </span>
                </button>
                <button className={`w-full h-10 rounded-full flex gap-2 outline-none border-none px-1 justify-start items-center ${theme == 'dark' ? dark_background : light_background}`}>
                    <span className='bg-red-500 w-12 h-8 rounded-full flex items-center justify-center'>

                    </span>
                    <span className='text-lg font-medium'>
                        Check Out
                    </span>
                </button>
            </div>

        </div>
    )
}

export default EmployeeCheckInOut
