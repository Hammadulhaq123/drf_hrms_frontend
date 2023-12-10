import React, { useContext } from 'react'
import { SwiperSlide } from "swiper/react"
import { AppContext } from '../../context/Context'


const EmployeeTodo = () => {

  const { theme, dark_contrast, light_contrast } = useContext(AppContext)
  return (
    <div className={`w-full sm:w-[48.5%] xl:w-[28.5%] ${theme == 'dark' ? dark_contrast : light_contrast} h-[30rem] xl:h-[26rem] rounded-md`}>


    </div>
  )
}

export default EmployeeTodo