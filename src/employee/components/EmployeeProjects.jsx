import React, { useContext } from "react";
import EmployeeProjectHeader from "./EmployeeProjectHeader";
import { AppContext } from "../../context/Context";
import ProjectCard from "../../components/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";

const EmployeeProjects = () => {
  const { theme, dark_contrast, light_contrast } = useContext(AppContext);
  return (
    <div
      className={`w-full sm:w-[38.5%] ${
        theme == "dark" ? dark_contrast : light_contrast
      } gap-4 h-auto px-4 py-2 rounded-md`}
    >
      {/* Header for employees project view section */}
      <EmployeeProjectHeader />

      {/* Few Projects Mapping */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        className="w-full h-[90%] flex flex-col gap-2 justify-start items-start"
      >
        <SwiperSlide>
        <ProjectCard />
        </SwiperSlide>

        <SwiperSlide>
        <ProjectCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default EmployeeProjects;
