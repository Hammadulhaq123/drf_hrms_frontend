import React, { useContext } from "react";
import { AppContext } from "../../context/Context";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { MdBrightness5, MdBrightness4 } from "react-icons/md";
import { HiOutlineMenuAlt1 } from "react-icons/hi";


const EmployeeNavbar = () => {
  const {
    theme,
    setTheme,
    dark_contrast,
    light_contrast,
    dark_background,
    light_background,
    primary_bg
  } = useContext(AppContext);

  const toggleTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };

  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("-translate-x-full");
    sidebar.classList.add("translate-x-0")
  }
  return (
    <div
      className={` ${theme == "dark" ? dark_contrast : light_contrast
        } z-[1000] shadow-md ${theme == 'dark' ? 'shadow-[#1c1c1c]' : 'shadow-gray-300'} w-full h-16 flex justify-start px-6 sticky top-0 left-0 items-center gap-4`}
    >

      <HiOutlineMenuAlt1 className="block lg:hidden text-2xl" onClick={toggleSidebar} />
      <div className="relative  w-40  md:w-72 xl:w-[30rem] flex h-auto gap-2 justify-start items-center">
        <input
          type="text"
          className={` ${theme == "dark" ? dark_contrast : light_contrast
            } rounded-full  text-md w-full h-10 px-4 outline-none border-2 border-gray-600 focus:ring-2 focus:ring-[#F27121]`}
          placeholder="Search"
        />

        <button className={`absolute top-1 right-1 w-8 h-8  flex justify-center items-center rounded-full ${primary_bg}`}>
          <IoSearchSharp />
        </button>
      </div>

      <div className="w-auto h-full flex gap-3 items-center justify-start ml-auto">
        <Link
          to="/request/new-leave-request/"
          className={`w-auto md:w-48 rounded-md font-medium h-7 text-sm bg-green-500 transition-all duration-200 hover:opacity-90 text-white flex items-center justify-start px-3 gap-2`}
        >
          <FaPlus />
          <span className="hidden md:block">Create Leave Request</span>
        </Link>

        <button
          onClick={toggleTheme}
          className={`w-8 h-8 flex items-center justify-center ${theme == "dark" ? dark_background : light_background
            } rounded-full outline-none border-none`}
        >
          {theme == "dark" ? (
            <MdBrightness5 className="text-lg" />
          ) : (
            <MdBrightness4 className="text-lg" />
          )}
        </button>

        <button
          type="button"
          className="w-8 h-8 outline-none border-none focus:ring-2 focus:ring-[#1253d5] rounded-full bg-red-100"
        >
          <img
            src="https://randomuser.me/api/portraits/men/58.jpg"
            alt="user_profile"
            className="w-full h-full rounded-full"
          />
        </button>
      </div>
    </div>
  );
};

export default EmployeeNavbar;
