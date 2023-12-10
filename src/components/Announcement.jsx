import React, { useContext } from 'react'
import { AppContext } from '../context/Context'
import { FaArrowUp } from "react-icons/fa";

const Announcement = ({ announcement, profile, keyword }) => {

    const { theme, semi_dark_contrast, semi_light_contrast } = useContext(AppContext)



    return (
        <div className={`relative w-full h-24 xl:h-20 flex items-center justify-start gap-3 px-3 rounded-md ${theme == 'dark' ? semi_dark_contrast : semi_light_contrast}`}>
            <img src={profile} alt="announcement_creators_profile" className='w-14 h-14 rounded-md' />

            <div className='flex w-auto h-auto flex-col gap-[2px] justify-start items-start'>
                <h1 className='text-md font-medium'>{announcement}</h1>
                <div className='w-full h-auto flex gap-1 justify-start items-center'>
                    <span className={`bg-[#1253d5] text-white flex items-center text-xs justify-center max-w-48 w-auto px-2 h-6 rounded-full`}>
                        {keyword}
                    </span>
                </div>
            </div>

            <div className='absolute top-3 right-3 text-xl w-auto h-auto ml-auto flex items-center justify-center rounded-md' style={{ color: 'red' }}>
                <FaArrowUp />
            </div>
        </div>
    )
}

export default Announcement
