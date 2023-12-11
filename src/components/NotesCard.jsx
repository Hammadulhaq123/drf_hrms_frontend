import React, { useContext } from "react";
import { AppContext } from "../context/Context";

const NotesCard = ({ date, title, description, keywords }) => {
  const {
    theme,
    dark_text_color,
    light_text_color,
    semi_dark_contrast,
    semi_light_contrast,
    semi_dark_text_color,
    semi_light_text_color,
  } = useContext(AppContext);

  return (
    <div
      className={`relative w-[49%] h-[49%] flex flex-col  items-start justify-start gap-3 p-3 rounded-md ${
        theme == "dark" ? semi_dark_contrast : semi_light_contrast
      }`}
    >
      <span
        className={`${
          theme == "dark" ? semi_dark_text_color : semi_light_text_color
        } text-md font-semibold`}
      >
        {date}
      </span>

      <h1 className="text-xl font-extrabold">{title}</h1>

      <p
        className={`text-md font-medium ${
          theme == "dark" ? dark_text_color : light_text_color
        }`}
      >
        {description}
      </p>

      <div className="w-full h-10 flex gap-2 justify-start items-center">
        {keywords.slice(0,2).map((keyword, key) => {
          return (
            <span key={key} className="w-auto px-4 h-6 rounded-full text-white text-sm font-medium bg-[#1253d5] flex items-center justify-center">
              {keyword}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default NotesCard;
