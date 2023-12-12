import React, { useContext } from "react";
import { SwiperSlide } from "swiper/react";
import { AppContext } from "../../context/Context";
import EmployeeLeaveHeader from "./EmployeeLeaveHeader";
import EmployeeLeavesPieChart from "./EmployeeLeavesPieChart";

const EmployeeLeaves = () => {
  const {
    theme,
    dark_contrast,
    light_contrast,
    semi_dark_contrast,
    semi_light_contrast,
    semi_dark_text_color,
    semi_light_text_color
  } = useContext(AppContext);

  return (
    <div
      className={`w-full sm:w-[48.5%] flex flex-col gap-4 justify-start items-start px-4 py-2 ${
        theme == "dark" ? dark_contrast : light_contrast
      } h-auto rounded-md`}
    >
      <EmployeeLeaveHeader />

      <div className="h-96 w-full flex gap-3 justify-start items-start">
        <div className="w-[48%] h-full  flex flex-col gap-1 justify-start items-start">
          <div
            className={` w-full h-[48%] flex flex-col items-center justify-center rounded-md `}
          >
            <span className="text-7xl font-bold">
              8 
            </span>
            <h1 className={`${theme=='dark' ? semi_dark_text_color : semi_light_text_color} text-xl font-semibold`}>Leaves Taken</h1>
          </div>
          <span
            className={`w-full h-1 rounded-full ${
              theme == "dark" ? semi_dark_contrast : semi_light_contrast
            }`}
          />
          <div
            className={` w-full h-[48%] flex flex-col items-center justify-center rounded-md `}
          >
            <span className="text-7xl font-bold">
                    3
            </span>
            <h1 className={`${theme=='dark' ? semi_dark_text_color : semi_light_text_color} text-xl font-semibold`}>Leaves Remaining</h1>
          </div>
        </div>

        <span
          className={`w-1 h-full rounded-full ${
            theme == "dark" ? semi_dark_contrast : semi_light_contrast
          }`}
        />

        <div className="w-[48%] h-full ">
          <EmployeeLeavesPieChart />
        </div>
      </div>
    </div>
  );
};

export default EmployeeLeaves;
