import React, { useContext } from "react";
import EmployeeNavbar from "../../components/EmployeeNavbar";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { AppContext } from "../../../context/Context";
import EmployeeAnnounements from "../../components/EmployeeAnnounements";
import EmployeeLeaves from "../../components/EmployeeLeaves";
import EmployeeTodo from "../../components/EmployeeTodo";

const EmployeeDashboardPage = () => {
  const { theme, dark_contrast, light_contrast } = useContext(AppContext);

  return (
    <div className="w-full lg:w-[calc(100%-18rem)] overflow-y-auto relative flex flex-col gap-3 h-full">
      <EmployeeNavbar />
      <div className="w-full absolute top-16 left-0 p-4 h-auto ">
        <Swiper
          spaceBetween={20}
          slidesPerView={window.innerWidth < 800 ? 1 : 3}
        >
          <SwiperSlide className={` h-[30rem] ${
        theme == "dark" ? dark_contrast : light_contrast
      } rounded-xl`}>
            <EmployeeAnnounements />
          </SwiperSlide>
          <SwiperSlide className={` h-[30rem] ${
        theme == "dark" ? dark_contrast : light_contrast
      } rounded-xl`}>
            <EmployeeTodo />
          </SwiperSlide>
          <SwiperSlide className={` h-[30rem] ${
        theme == "dark" ? dark_contrast : light_contrast
      } rounded-xl`}>
            <EmployeeLeaves />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default EmployeeDashboardPage;
