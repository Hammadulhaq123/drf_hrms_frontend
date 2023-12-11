import React, { useContext } from "react";
import { AppContext } from "../context/Context";

const ProjectCardDescription = () => {

    const {theme, semi_dark_text_color, semi_light_text_color} = useContext(AppContext)
  return (
    <div className={`text-md w-3/4 font-medium text-left ${theme == 'dark' ? semi_dark_text_color : semi_light_text_color}`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ea. Just static text is rendered for now
    </div>
  );
};

export default ProjectCardDescription;
