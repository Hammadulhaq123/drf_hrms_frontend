import React, { useContext } from "react";
import { SwiperSlide } from "swiper/react"
import { AppContext } from "../../context/Context";



const EmployeeLeaves = () => {

  const { theme, dark_contrast, light_contrast } = useContext(AppContext);

  return (
    <div className={`w-full sm:w-[48%] lg:w-[31%] xl:w-[32.2%] ${theme == 'dark' ? dark_contrast : light_contrast} h-[30rem] rounded-md`}>


    </div>
  );
};

export default EmployeeLeaves;
