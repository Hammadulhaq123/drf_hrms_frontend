import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/Context";
import { MdBrightness5 } from "react-icons/md";
import { MdBrightness4 } from "react-icons/md";
import { LoginVector } from "../../../assets/export";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  
  const {
    theme,
    setTheme,
    dark_background,
    light_background,
    light_contrast,
    dark_contrast,
    semi_dark_contrast,
    semi_light_contrast,
    semi_light_text_color,
    semi_dark_text_color,
    light_text_color,
    dark_text_color,
    primary_text,
    primary_bg
  } = useContext(AppContext);

  const toggleTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };

  const navigateToDashboard = () => {
    // Other functionalities of bakend;

    navigate("/employee/dashboard/");
  }

  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <div
      className={`w-screen min-h-screen h-auto lg:h-screen flex flex-col gap-4 lg:gap-0 lg:flex-row transition-all duration-500 ${
        theme == "dark" ? dark_background : light_background
      } ${
        theme == "dark" ? dark_text_color : light_text_color
      } flex justify-start items-start  relative`}
    >
      <button
        onClick={toggleTheme}
        className={`absolute top-4 right-4 w-12 h-12 cursor-pointer ${
          theme == "dark" ? dark_background : light_background
        } rounded-full flex items-center justify-center z-100`}
      >
        {theme == "dark" ? (
          <MdBrightness5 className="text-2xl" />
        ) : (
          <MdBrightness4 className="text-2xl" />
        )}
      </button>
      <div
        className={`w-full lg:w-1/2  h-full flex flex-col justify-center items-center`}
      >
        <form className="w-[70%] h-96 flex flex-col gap-6 justify-start items-start">

            <h1 className={`text-7xl mb-14 w-full h-32 font-extrabold text-center ${primary_text}`}>
                Login
            </h1>
          <input
            type="email"
            className={`w-full h-20 rounded-full px-5 text-lg ${
              theme == "dark" ? dark_contrast : light_contrast
            } outline-none border border-[#8A2387] text-lg font-semibold focus:ring-2 focus:ring-orange-400`}
            placeholder="Email"
          />

          <div className="w-full h-20 relative">
            <input
              type={togglePassword ? "text" : "password"}
              id="password"
              className={`w-full h-full rounded-full px-5 text-lg ${
                theme == "dark" ? dark_contrast : light_contrast
              } outline-none border border-[#8A2387] text-lg font-semibold focus:ring-2 focus:ring-orange-400`}
              placeholder="Password"
              required
            />
            {togglePassword ? (
              <FaEyeSlash
                className={`absolute top-[32%]  right-4  text-xl text-[#8A2387]`}
                onClick={() => {
                  setTogglePassword((prev) => !prev);
                }}
              />
            ) : (
              <FaEye
                className={`absolute top-[32%]  right-4  text-xl text-[#8A2387]`}
                onClick={() => {
                  setTogglePassword((prev) => !prev);
                }}
              />
            )}
          </div>

          <button onClick={navigateToDashboard} className={`w-full  transition-all duration-200 hover:opacity-90 h-20 rounded-full px-5 text-lg ${
                theme == "dark" ? primary_bg : primary_bg
              } outline-none flex justify-center items-center text-gray-900 text-xl  font-bold`}>
                Login
          </button>
          
        </form>
      </div>
      <div
        className={`w-full lg:w-1/2 rounded-l-full lg:rounded-l-[150px] h-full ${
          theme == "dark" ? dark_contrast : light_contrast
        } flex flex-col gap-4 justify-center items-center`}
      >
        <img src={LoginVector} alt="login_vector" className="" />
        <h1 className="text-7xl text-center font-extrabold hidden lg:block">Welcome Back</h1>
        <p
          className={`text-lg font-medium hidden text-center lg:block ${
            theme == "dark" ? semi_dark_text_color : semi_light_text_color
          }`}
        >
          Login to your account to see your personal information.
        </p>
      </div>
    </div>
  );
};

export default Login;
