import React, { useContext } from 'react'
import { AppContext } from '../../context/Context'
import { FaRegUser } from "react-icons/fa";
import { LuHome } from "react-icons/lu";
import { GrAnnounce } from "react-icons/gr";
import EmployeeSidebarLink from './EmployeeSidebarLink';
import { IoIosArrowBack } from "react-icons/io";
import { ImStatsBars2 } from "react-icons/im";
import { FaRegNoteSticky } from "react-icons/fa6";
import { MdOutlineSick } from "react-icons/md";

const EmployeeSidebar = () => {

    const { theme, dark_contrast, light_contrast, primary_bg, dark_background, light_background, semi_dark_text_color, semi_light_text_color, primary_text } = useContext(AppContext);

    const iconArr = [
        {
            'icon': <LuHome />,
            'title': 'Home',
            'href': '/employee/dashboard/'
        },
        {
            'icon': <FaRegUser />,
            'title': 'Profile',
            'href': '/employee/profile/'
        },
        {
            'icon': <GrAnnounce />,
            'title': 'Announcements',
            'href': '/employee/announcements/'
        },
        {
            'icon': <MdOutlineSick />,
            'title': 'Leaves',
            'href': '/employee/leaves/'
        },
        {
            'icon': <FaRegNoteSticky />,
            'title': 'Notes',
            'href': '/employee/notes/'
        },
        {
            'icon': <ImStatsBars2 />,
            'title': 'Stats',
            'href': '/employee/stats/'
        },
    ]

    const closeSidebar = () => {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.add("-translate-x-full");
        sidebar.classList.remove("translate-x-0")
    }

    return (
        <div id='sidebar' className={`absolute top-0 left-0 lg:static  py-4 flex flex-col pr-2 transition-all duration-150 gap-1 ${theme == 'dark' ? dark_contrast : light_contrast} -translate-x-full z-50 lg:translate-x-0  w-60 h-full`}>

            <div className={`w-full px-5 h-auto  flex justify-between items-center font-extrabold  text-left`}>
                <span className='text-3xl'>
                    HRMS
                </span>
                <button onClick={closeSidebar} className={`outline-none lg:hidden block border-none ${theme == 'dark' ? dark_background : light_background} rounded-full w-6 h-6 flex justify-center items-center`}>

                    <IoIosArrowBack className='text-xl ' />
                </button>
            </div>
            <div className='w-full h-20 flex justify-start px-4 gap-3 items-center'>
                <img src="https://randomuser.me/api/portraits/men/58.jpg" alt="profile" className='w-10 h-10 rounded-full' />
                <div className='w-auto flex flex-col justify-start items-start'>
                    <span className={`text-lg font-bold ${primary_text}`}>
                        Jack Anderson
                    </span>
                    <span className={`text-sm font-medium ${theme == 'dark' ? semi_dark_text_color : semi_light_text_color}`}>
                        Web Developer
                    </span>
                </div>
            </div>
            {
                iconArr.map((obj, key) => {
                    return (
                        <EmployeeSidebarLink key={key} icon={obj.icon} href={obj.href} title={obj.title} />
                    )
                })
            }
        </div>
    )
}

export default EmployeeSidebar