import React, { useContext } from 'react'
import { AppContext } from '../context/Context'
import { GoKebabHorizontal } from "react-icons/go";

const ProjectCardHeader = () => {
    const {theme, semi_dark_text_color, semi_light_text_color } = useContext(AppContext)
  return (
    <div className='w-full h-[10%] flex flex-col justify-start items-start relative'>
        <span className='text-lg font-bold'>
            Hospital Admin Panel
        </span>
        <span className={`text-xs font-normal ${theme == 'dark' ? semi_dark_text_color : semi_light_text_color}`}>
            2 tasks pending, 3 tasks completed
        </span>

        <button className='absolute top-2 right-2'>
            <GoKebabHorizontal />
        </button>
    </div>
  )
}

export default ProjectCardHeader