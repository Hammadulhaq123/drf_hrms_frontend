import React, { useContext } from 'react'
import { AppContext } from '../context/Context'

const Announcement = ({ announcement, profile, keyword }) => {

    const { theme, semi_dark_contrast, semi_light_contrast } = useContext(AppContext)



    return (
        <div className={`relative w-[49%] h-24 xl:h-20 flex items-center justify-start gap-3 px-3 rounded-md ${theme == 'dark' ? semi_dark_contrast : semi_light_contrast}`}>
            <img src={profile} alt="announcement_creators_profile" className='w-12 h-12 rounded-md' />

            <div className='flex w-auto h-auto flex-col gap-[2px] justify-start items-start'>
                <h1 className='text-md font-medium'>{announcement}</h1>
                <div className='w-full h-auto flex gap-1 justify-start items-center'>
                    <span className={`bg-[#1253d5] text-white flex items-center text-xs justify-center max-w-48 w-auto px-2 h-6 rounded-full`}>
                        {keyword}
                    </span>
                </div>
            </div>

            
        </div>
    )
}

export default Announcement
