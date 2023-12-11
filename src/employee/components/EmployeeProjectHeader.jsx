import React, { useContext } from 'react'
import { AppContext } from '../../context/Context'
import {MdOutlineArrowOutward} from "react-icons/md"

const EmployeeProjectHeader = () => {
    const { theme, semi_dark_contrast, semi_light_contrast, primary_bg } = useContext(AppContext)

    const toggleFilterDropdown = () => {
        const dropdown = document.getElementById("project-filter-dropdown");
        dropdown.classList.toggle('hidden')
    }

  return (
    <div className=' w-full h-[10%] bg-transparent flex justify-between items-center '>
            <span className='text-xl font-medium'>
                Projects
            </span>

            


            <button className={`w-8 h-8 rounded-md ${primary_bg} flex items-center justify-center`}>
                <MdOutlineArrowOutward className='text-xl' />
            </button>
        </div>
  )
}

export default EmployeeProjectHeader