import React, { useContext } from "react";
import { SwiperSlide } from "swiper/react"
import { AppContext } from "../../context/Context";
import EmployeeLeaveHeader from "./EmployeeLeaveHeader";



const EmployeeLeaves = () => {

  const { theme, dark_contrast, light_contrast, semi_dark_contrast, semi_light_contrast } = useContext(AppContext);

  return (
    <div className={`w-full sm:w-[48.5%] flex flex-col gap-4 justify-start items-start px-4 py-2 ${theme == 'dark' ? dark_contrast : light_contrast} h-auto rounded-md`}>

      <EmployeeLeaveHeader />

      <div className="h-96 w-full flex gap-2 justify-start items-start">
        <div className="w[45%] h-full bg-red-500">

        </div>

        <div className={`w-1 rounded-full h-full mx-auto ${theme == 'dark' ? semi_dark_contrast : semi_light_contrast}`}>

        </div>

        <div className="w[45%] h-full bg-red-500">

        </div>
      </div>
    </div>
  );
};

export default EmployeeLeaves;
