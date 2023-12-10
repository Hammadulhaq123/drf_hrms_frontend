import React, { useContext } from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { AppContext } from '../../context/Context';

const EmployeeAnnouncementHeader = () => {

    const { theme, semi_dark_contrast, semi_light_contrast, primary_bg } = useContext(AppContext)

    const toggleFilterDropdown = () => {
        const dropdown = document.getElementById("filter-dropdown");
        dropdown.classList.toggle('hidden')
    }

    return (
        <div className=' w-full h-[10%] bg-transparent flex justify-between items-center '>
            <span className='text-xl font-medium'>
                Announcements
            </span>

            <div className='flex relative flex-col ml-auto mr-3'>

                <button id="dropdownHoverButton" onClick={toggleFilterDropdown} data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className={`${theme == 'dark' ? semi_dark_contrast : semi_light_contrast}    focus:outline-none  font-medium rounded-lg text-sm h-8 w-24 px-2 text-center inline-flex items-center `} type="button">
                    <span>
                        Filter
                    </span>
                    <svg className="w-2.5 h-2.5 ms-3 ml-auto " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                {/* <!-- Dropdown menu --> */}
                <div id="filter-dropdown" className={`z-10 hidden absolute  top-10 left-0 rounded-lg shadow-md  ${theme == 'dark' ? 'shadow-[#1c1c1c]' : 'shadow-gray-300'} w-24 ${theme == 'dark' ? semi_dark_contrast : semi_light_contrast}`}>
                    <ul className="py-2 text-sm " aria-labelledby="dropdownHoverButton">
                        <li>
                            <button className="block px-4 py-2 ">Prior</button>
                        </li>
                        <li>
                            <button className="block px-4 py-2 ">Latest</button>
                        </li>
                        <li>
                            <button className="block px-4 py-2 ">For me</button>
                        </li>
                    </ul>
                </div>
            </div>


            <button className={`w-8 h-8 rounded-md ${primary_bg} flex items-center justify-center`}>
                <MdOutlineArrowOutward className='text-xl' />
            </button>
        </div>
    )
}

export default EmployeeAnnouncementHeader
