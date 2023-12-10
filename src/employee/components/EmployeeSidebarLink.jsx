import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/Context'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EmployeeSidebarLink = ({ icon, title, href }) => {


  const { theme, dark_background, light_background, dark_contrast, primary_text, primary_bg } = useContext(AppContext)

  const navigate = useNavigate()




  return (
    <Link to={href} className={`sidebar_links group w-[100%] h-12 rounded-r-full transition-all  duration-150 text-md flex items-center justify-start gap-4 ${theme == 'dark' ? 'focus-within:bg-[#000]' : 'focus-within:bg-[#fff]'} ${theme == 'dark' ? 'hover:bg-[#000]' : 'hover:bg-[#fff]'} hover:opacity-80`}>
      <span className={`group-hover:bg-gradient-to-r group-hover:from-[#8A2387] group-hover:via-[#E94057] group-hover:to-[#F27121] group-focus:bg-gradient-to-r group-focus:from-[#8A2387] group-focus:via-[#E94057] group-focus:to-[#F27121] w-1 h-full`} />
      <span className={`${theme == 'dark' ? dark_background : light_background}  w-8 h-8 flex justify-center items-center rounded-full`}>
        {icon}
      </span>
      <span className={`text-md font-medium`}>
        {title}
      </span>
    </Link>
  )
}

export default EmployeeSidebarLink