import React, { useContext } from 'react'
import { AppContext } from '../context/Context'

const ProjectDeadline = () => {
    const {theme, semi_dark_text_color, semi_light_text_color} = useContext(AppContext)

  return (
    <div className='w-full h-auto flexflex-col justify-start items-start gap-[1px]'>
        <h2 className='text-md font-medium'>Deadline</h2>
        <span className={`text-sm font-semibold ${theme == 'dark' ? semi_dark_text_color : semi_light_text_color}`}>
            17, Dec, 2023
        </span>
    </div>
  )
}

export default ProjectDeadline