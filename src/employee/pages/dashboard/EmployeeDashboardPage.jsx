import React, { useContext } from "react";
import EmployeeNavbar from "../../components/EmployeeNavbar";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { AppContext } from "../../../context/Context";
import EmployeeAnnounements from "../../components/EmployeeAnnounements";
import EmployeeLeaves from "../../components/EmployeeLeaves";
import EmployeeTodo from "../../components/EmployeeTodo";
import EmployeeWelcome from "../../components/EmployeeWelcome";
import EmployeeStats from "../../components/EmployeeStats";

const EmployeeDashboardPage = () => {
  const { theme, dark_contrast, light_contrast } = useContext(AppContext);

  return (
    <div className="w-full lg:w-[calc(100%-15rem)] overflow-y-auto relative flex flex-col gap-3 h-full">
      <EmployeeNavbar />

      <div className="w-full absolute top-16 left-0 p-4 h-auto flex flex-col justify-start items-start gap-4">

        <EmployeeWelcome />

        <EmployeeStats />

        <div className="w-full  h-auto flex flex-col flex-wrap sm:flex-row gap-4">
          <EmployeeAnnounements />
          <EmployeeLeaves />
          <EmployeeTodo />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboardPage;
